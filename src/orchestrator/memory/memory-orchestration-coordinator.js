import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  MEMORY_CATEGORIES,
  MEMORY_FRESHNESS_STATUS,
  MEMORY_OPERATION_TELEMETRY_FIELDS,
  MEMORY_ORCHESTRATION_STAGES,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { MemoryCandidate } from '../contracts/memory-candidate.js';
import { MemoryContext } from '../contracts/memory-context.js';
import { MemoryOperationTelemetry } from '../contracts/memory-operation-telemetry.js';
import { MemoryOrchestrationStage } from '../contracts/memory-orchestration-stage.js';
import { MemoryRetrievalRequest } from '../contracts/memory-retrieval-request.js';
import { MemoryValidationResult } from '../contracts/memory-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [MEMORY_ORCHESTRATION_STAGES.NEED_MEMORY, 'Determine whether memory has a specific purpose for the request.'],
  [MEMORY_ORCHESTRATION_STAGES.DETERMINE_MEMORY_TYPE, 'Select the applicable memory categories.'],
  [MEMORY_ORCHESTRATION_STAGES.RETRIEVE_CANDIDATES, 'Retrieve candidate memories from memory systems.'],
  [MEMORY_ORCHESTRATION_STAGES.RANK_RELEVANCE, 'Rank candidates by relevance, recency, confidence, and association.'],
  [MEMORY_ORCHESTRATION_STAGES.VALIDATE_FRESHNESS, 'Exclude expired, conflicting, invalid, or policy-restricted memory.'],
  [MEMORY_ORCHESTRATION_STAGES.BUILD_MEMORY_CONTEXT, 'Build a minimal structured context for reasoning.'],
  [MEMORY_ORCHESTRATION_STAGES.RETURN_CONTEXT, 'Return validated memory context to the orchestrator.']
]);

export class MemoryOrchestrationCoordinator {
  constructor({ memoryProvider = undefined, clock = () => new Date() } = {}) {
    this.memoryProvider = memoryProvider;
    this.clock = clock;
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(
        ([stage, purpose], index) =>
          new MemoryOrchestrationStage({
            sequence: index + 1,
            stage,
            purpose
          })
      )
    );
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  categories() {
    return Object.freeze(Object.values(MEMORY_CATEGORIES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(MEMORY_OPERATION_TELEMETRY_FIELDS));
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.MEMORY_ORCHESTRATION_STAGE_NOT_FOUND,
        `Memory orchestration stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  shouldRetrieveMemory(requestInput) {
    const request = this.#toRequest(requestInput);
    return Boolean(request.purpose && request.categories.length > 0);
  }

  determineMemoryTypes(requestInput) {
    const request = this.#toRequest(requestInput);

    if (!request.purpose) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.MEMORY_RETRIEVAL_UNPURPOSED,
        'Memory retrieval requires an explicit purpose.',
        { correlationId: request.correlationId }
      );
    }

    return Object.freeze(
      request.categories.length > 0
        ? request.categories
        : [MEMORY_CATEGORIES.CONVERSATION, MEMORY_CATEGORIES.SESSION]
    );
  }

  async retrieveCandidates(requestInput) {
    const request = this.#toRequest(requestInput);

    if (!this.shouldRetrieveMemory(request)) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.MEMORY_RETRIEVAL_UNPURPOSED,
        'Memory must not be retrieved without a purpose and category.',
        { correlationId: request.correlationId }
      );
    }

    if (!this.memoryProvider || typeof this.memoryProvider.retrieveMemory !== 'function') {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.MEMORY_PROVIDER_MISSING,
        'Memory retrieval requires a memory provider.',
        { correlationId: request.correlationId }
      );
    }

    const candidates = await this.memoryProvider.retrieveMemory({
      purpose: request.purpose,
      categories: request.categories,
      query: request.query,
      userId: request.userId,
      sessionId: request.sessionId,
      workflowId: request.workflowId,
      correlationId: request.correlationId,
      metadata: request.metadata
    });

    return Object.freeze(candidates.map((candidate) => this.#toCandidate(candidate)));
  }

  rankRelevance(candidates, requestInput) {
    const request = this.#toRequest(requestInput);

    return Object.freeze(
      candidates
        .map((candidate) => this.#toCandidate(candidate))
        .filter((candidate) => request.categories.includes(candidate.category))
        .sort(compareMemoryCandidates)
    );
  }

  validateFreshness(candidates, requestInput) {
    const request = this.#toRequest(requestInput);
    const now = this.clock();
    const selected = [];
    const excluded = [];
    const errors = [];

    for (const candidateInput of candidates) {
      const candidate = this.#toCandidate(candidateInput);
      const reason = this.#exclusionReason(candidate, request, now);

      if (reason) {
        excluded.push({ memory: candidate, reason });
        continue;
      }

      selected.push(candidate);
    }

    return new MemoryValidationResult({
      isValid: errors.length === 0,
      selected,
      excluded,
      errors
    });
  }

  buildMemoryContext({ request, selected = [], excluded = [], retrievalDurationMs = 0 }) {
    const memoryRequest = this.#toRequest(request);
    const selectedMemories = selected.slice(0, memoryRequest.maxItems);
    const confidence = averageConfidence(selectedMemories);
    const telemetry = new MemoryOperationTelemetry({
      memoryCategory: Object.freeze([...new Set(memoryRequest.categories)]),
      retrievalDurationMs,
      candidateCount: selected.length + excluded.length,
      selectedMemories: selectedMemories.map((memory) => memory.memoryId),
      confidence,
      freshnessEvaluation: {
        [MEMORY_FRESHNESS_STATUS.CURRENT]: selectedMemories.length,
        excluded: excluded.length
      },
      correlationId: memoryRequest.correlationId
    });

    return new MemoryContext({
      purpose: memoryRequest.purpose,
      selectedMemories,
      excludedMemories: excluded,
      telemetry,
      correlationId: memoryRequest.correlationId,
      tokenBudget: memoryRequest.tokenBudget
    });
  }

  async orchestrate(requestInput) {
    const request = this.#toRequest(requestInput);
    const started = this.clock();
    this.determineMemoryTypes(request);
    const candidates = await this.retrieveCandidates(request);
    const ranked = this.rankRelevance(candidates, request);
    const validation = this.validateFreshness(ranked, request);
    const ended = this.clock();

    return this.buildMemoryContext({
      request,
      selected: validation.selected,
      excluded: validation.excluded,
      retrievalDurationMs: Math.max(0, ended.getTime() - started.getTime())
    });
  }

  #toRequest(requestInput) {
    return requestInput instanceof MemoryRetrievalRequest
      ? requestInput
      : new MemoryRetrievalRequest(requestInput);
  }

  #toCandidate(candidateInput) {
    return candidateInput instanceof MemoryCandidate
      ? candidateInput
      : new MemoryCandidate(candidateInput);
  }

  #exclusionReason(candidate, request, now) {
    if (candidate.policyCompliant !== true) {
      return MEMORY_FRESHNESS_STATUS.POLICY_RESTRICTED;
    }

    if (candidate.conflicting === true) {
      return MEMORY_FRESHNESS_STATUS.CONFLICTING;
    }

    if (candidate.expiresAt && new Date(candidate.expiresAt) <= now) {
      return MEMORY_FRESHNESS_STATUS.EXPIRED;
    }

    if (request.userId && candidate.userId && candidate.userId !== request.userId) {
      return 'user-mismatch';
    }

    if (request.sessionId && candidate.sessionId && candidate.sessionId !== request.sessionId) {
      return 'session-mismatch';
    }

    return undefined;
  }
}

function compareMemoryCandidates(left, right) {
  return scoreMemory(right) - scoreMemory(left);
}

function scoreMemory(memory) {
  const createdAtScore = memory.createdAt ? Math.min(Date.parse(memory.createdAt) / 10000000000000, 1) : 0;
  return memory.relevanceScore * 0.5 + memory.confidence * 0.35 + createdAtScore * 0.15;
}

function averageConfidence(memories) {
  if (memories.length === 0) {
    return 0;
  }

  return memories.reduce((sum, memory) => sum + memory.confidence, 0) / memories.length;
}
