import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  CONTEXT_ASSEMBLY_STAGES,
  CONTEXT_CONFLICT_PRIORITY,
  CONTEXT_LAYERS,
  CONTEXT_TELEMETRY_FIELDS,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { ContextAssemblyRequest } from '../contracts/context-assembly-request.js';
import { ContextAssemblyStage } from '../contracts/context-assembly-stage.js';
import { ContextAssemblyTelemetry } from '../contracts/context-assembly-telemetry.js';
import { ContextAssemblyValidationResult } from '../contracts/context-assembly-validation-result.js';
import { ContextCandidate } from '../contracts/context-candidate.js';
import { WorkingContext } from '../contracts/working-context.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [CONTEXT_ASSEMBLY_STAGES.IDENTIFY_NEED, 'Determine which context layers are relevant.'],
  [CONTEXT_ASSEMBLY_STAGES.COLLECT_CANDIDATES, 'Gather potential context from selected layers.'],
  [CONTEXT_ASSEMBLY_STAGES.REMOVE_DUPLICATES, 'Eliminate repeated information.'],
  [CONTEXT_ASSEMBLY_STAGES.RESOLVE_CONFLICTS, 'Resolve disagreements by authoritative layer priority.'],
  [CONTEXT_ASSEMBLY_STAGES.RANK_IMPORTANCE, 'Prioritize relevance, authority, recency, confidence, and execution needs.'],
  [CONTEXT_ASSEMBLY_STAGES.APPLY_TOKEN_BUDGET, 'Fit selected context within the available reasoning budget.'],
  [CONTEXT_ASSEMBLY_STAGES.ASSEMBLE_CONTEXT, 'Combine selected items into a coherent traceable working context.'],
  [CONTEXT_ASSEMBLY_STAGES.DELIVER_TO_REASONING, 'Deliver the finalized working context to the reasoning pipeline.']
]);

export class ContextAssemblyCoordinator {
  constructor({ clock = () => new Date() } = {}) {
    this.clock = clock;
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(
        ([stage, purpose], index) =>
          new ContextAssemblyStage({
            sequence: index + 1,
            stage,
            purpose
          })
      )
    );
  }

  describePipeline() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  layers() {
    return Object.freeze(Object.values(CONTEXT_LAYERS));
  }

  priorityOrder() {
    return CONTEXT_CONFLICT_PRIORITY;
  }

  telemetryFields() {
    return Object.freeze(Object.values(CONTEXT_TELEMETRY_FIELDS));
  }

  getStage(stage) {
    const pipelineStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!pipelineStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.CONTEXT_ASSEMBLY_STAGE_NOT_FOUND,
        `Context assembly stage is not defined: ${stage}`,
        { stage }
      );
    }

    return pipelineStage;
  }

  identifyNeed(requestInput) {
    const request = this.#toRequest(requestInput);

    return Object.freeze(
      request.requiredLayers.length > 0
        ? request.requiredLayers
        : [CONTEXT_LAYERS.USER_REQUEST, CONTEXT_LAYERS.POLICY]
    );
  }

  collectCandidates(requestInput) {
    const request = this.#toRequest(requestInput);
    const selectedLayers = new Set(this.identifyNeed(request));

    return Object.freeze(
      request.candidates
        .map((candidate) => this.#toCandidate(candidate))
        .filter((candidate) => selectedLayers.has(candidate.layer))
        .filter((candidate) => candidate.accessAllowed === true)
        .filter((candidate) => candidate.sensitive !== true || candidate.metadata.requiredForRequest === true)
    );
  }

  removeDuplicates(candidates) {
    const selected = new Map();

    for (const candidateInput of candidates) {
      const candidate = this.#toCandidate(candidateInput);
      const key = normalizeContent(candidate.content);
      const existing = selected.get(key);

      if (!existing || scoreCandidate(candidate) > scoreCandidate(existing)) {
        selected.set(key, candidate);
      }
    }

    return Object.freeze([...selected.values()]);
  }

  resolveConflicts(candidates) {
    const selected = new Map();

    for (const candidateInput of candidates) {
      const candidate = this.#toCandidate(candidateInput);
      const conflictKey = candidate.metadata.conflictKey ?? candidate.contextId;
      const existing = selected.get(conflictKey);

      if (!existing || contextPriority(candidate.layer) < contextPriority(existing.layer)) {
        selected.set(conflictKey, candidate);
      }
    }

    return Object.freeze([...selected.values()]);
  }

  rankImportance(candidates) {
    return Object.freeze(
      candidates
        .map((candidate) => this.#toCandidate(candidate))
        .sort((left, right) => scoreCandidate(right) - scoreCandidate(left))
    );
  }

  applyTokenBudget(candidates, tokenBudget = undefined) {
    const ranked = candidates.map((candidate) => this.#toCandidate(candidate));

    if (tokenBudget === undefined || tokenBudget === null) {
      return Object.freeze({ selected: Object.freeze(ranked), omitted: Object.freeze([]), tokenUsage: totalTokens(ranked) });
    }

    const selected = [];
    const omitted = [];
    let tokenUsage = 0;

    for (const candidate of ranked) {
      if (tokenUsage + candidate.tokenCost <= tokenBudget) {
        selected.push(candidate);
        tokenUsage += candidate.tokenCost;
      } else {
        omitted.push(candidate);
      }
    }

    return Object.freeze({
      selected: Object.freeze(selected),
      omitted: Object.freeze(omitted),
      tokenUsage
    });
  }

  assembleContext({ request, selected = [], omitted = [], assemblyDurationMs = 0 }) {
    const contextRequest = this.#toRequest(request);
    const selectedItems = selected.map((candidate) => this.#toCandidate(candidate));
    const omittedItems = omitted.map((candidate) => this.#toCandidate(candidate));
    const telemetry = new ContextAssemblyTelemetry({
      selectedContextLayers: [...new Set(selectedItems.map((item) => item.layer))],
      candidateCount: selectedItems.length + omittedItems.length,
      finalTokenUsage: totalTokens(selectedItems),
      omittedItems: omittedItems.map((item) => item.contextId),
      assemblyDurationMs,
      correlationId: contextRequest.correlationId
    });

    return new WorkingContext({
      purpose: contextRequest.purpose,
      items: selectedItems,
      omittedItems,
      telemetry,
      correlationId: contextRequest.correlationId,
      tokenBudget: contextRequest.tokenBudget
    });
  }

  deliverToReasoning(workingContext) {
    const validation = this.validateWorkingContext(workingContext);

    if (!validation.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.CONTEXT_ASSEMBLY_INVALID,
        'Working context does not satisfy context management rules.',
        { errors: validation.errors }
      );
    }

    return new WorkingContext({
      purpose: workingContext.purpose,
      items: workingContext.items,
      omittedItems: workingContext.omittedItems,
      telemetry: workingContext.telemetry,
      correlationId: workingContext.correlationId,
      tokenBudget: workingContext.tokenBudget,
      deliveredToReasoning: true
    });
  }

  validateWorkingContext(workingContext) {
    const errors = [];

    if (!workingContext.purpose) {
      errors.push('Working context must have an explicit purpose.');
    }

    if (!workingContext.correlationId) {
      errors.push('Working context must preserve correlationId.');
    }

    for (const item of workingContext.items ?? []) {
      if (!item.traceId) {
        errors.push(`Context item ${item.contextId} must preserve traceability.`);
      }

      if (item.sensitive === true && item.metadata.requiredForRequest !== true) {
        errors.push(`Context item ${item.contextId} exposes unnecessary sensitive information.`);
      }
    }

    if (
      workingContext.tokenBudget !== undefined &&
      workingContext.telemetry.finalTokenUsage > workingContext.tokenBudget
    ) {
      errors.push('Working context exceeds token budget.');
    }

    return new ContextAssemblyValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  assemble(requestInput) {
    const request = this.#toRequest(requestInput);
    const started = this.clock();
    const collected = this.collectCandidates(request);
    const deduplicated = this.removeDuplicates(collected);
    const resolved = this.resolveConflicts(deduplicated);
    const ranked = this.rankImportance(resolved);
    const budgeted = this.applyTokenBudget(ranked, request.tokenBudget);
    const ended = this.clock();

    return this.deliverToReasoning(
      this.assembleContext({
        request,
        selected: budgeted.selected,
        omitted: budgeted.omitted,
        assemblyDurationMs: Math.max(0, ended.getTime() - started.getTime())
      })
    );
  }

  #toRequest(requestInput) {
    return requestInput instanceof ContextAssemblyRequest
      ? requestInput
      : new ContextAssemblyRequest(requestInput);
  }

  #toCandidate(candidateInput) {
    return candidateInput instanceof ContextCandidate
      ? candidateInput
      : new ContextCandidate(candidateInput);
  }
}

function normalizeContent(content) {
  return JSON.stringify(content).trim().toLowerCase();
}

function contextPriority(layer) {
  const index = CONTEXT_CONFLICT_PRIORITY.indexOf(layer);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function scoreCandidate(candidate) {
  return (
    candidate.relevance * 0.35 +
    candidate.authority * 0.3 +
    candidate.recency * 0.15 +
    candidate.confidence * 0.15 +
    (candidate.metadata.executionRequired === true ? 0.05 : 0)
  );
}

function totalTokens(candidates) {
  return candidates.reduce((sum, candidate) => sum + candidate.tokenCost, 0);
}
