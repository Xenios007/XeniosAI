import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_CAPABILITY_MATURITY_STAGES,
  FUTURE_AI_CAPABILITY_DOMAINS,
  FUTURE_AI_EVALUATION_CRITERIA,
  FUTURE_AI_STABILITY_PRINCIPLES,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { FutureAiCapabilityCandidate } from '../contracts/future-ai-capability-candidate.js';
import { FutureAiCapabilityEvaluation } from '../contracts/future-ai-capability-evaluation.js';
import { FutureAiCapabilityEvaluationResult } from '../contracts/future-ai-capability-evaluation-result.js';

const DEFAULT_CANDIDATES = Object.freeze([
  candidate('advanced-reasoning', 'Advanced Reasoning', FUTURE_AI_CAPABILITY_DOMAINS.ADVANCED_REASONING, [
    'Multi-step reasoning',
    'Goal decomposition',
    'Hypothesis evaluation',
    'Strategy comparison',
    'Decision simulation'
  ], AI_CAPABILITY_MATURITY_STAGES.ASSISTED_AI),
  candidate('adaptive-memory', 'Adaptive Memory', FUTURE_AI_CAPABILITY_DOMAINS.ADAPTIVE_MEMORY, [
    'Memory summarization',
    'Memory consolidation',
    'Adaptive forgetting',
    'Semantic memory clustering',
    'Context-aware retrieval'
  ], AI_CAPABILITY_MATURITY_STAGES.ADAPTIVE_AI),
  candidate('planning-and-scheduling', 'Planning and Scheduling', FUTURE_AI_CAPABILITY_DOMAINS.PLANNING_AND_SCHEDULING, [
    'Long-term planning',
    'Task scheduling',
    'Dependency management',
    'Milestone tracking',
    'Workflow optimization'
  ], AI_CAPABILITY_MATURITY_STAGES.COORDINATED_AI),
  candidate('autonomous-execution', 'Autonomous Execution', FUTURE_AI_CAPABILITY_DOMAINS.AUTONOMOUS_EXECUTION, [
    'Multi-step workflow execution',
    'Scheduled operations',
    'Event-driven execution',
    'Conditional task execution',
    'Long-running processes'
  ], AI_CAPABILITY_MATURITY_STAGES.AUTONOMOUS_AI),
  candidate('multi-agent-collaboration', 'Multi-Agent Collaboration', FUTURE_AI_CAPABILITY_DOMAINS.MULTI_AGENT_COLLABORATION, [
    'Dynamic agent creation',
    'Capability-based agent discovery',
    'Distributed reasoning',
    'Specialized agent ecosystems',
    'Cross-agent knowledge sharing'
  ], AI_CAPABILITY_MATURITY_STAGES.COLLABORATIVE_AI_PLATFORM),
  candidate('knowledge-evolution', 'Knowledge Evolution', FUTURE_AI_CAPABILITY_DOMAINS.KNOWLEDGE_EVOLUTION, [
    'Automatic indexing',
    'Continuous knowledge ingestion',
    'Knowledge validation',
    'Source quality assessment',
    'Knowledge graph integration'
  ], AI_CAPABILITY_MATURITY_STAGES.ADAPTIVE_AI),
  candidate('personalized-intelligence', 'Personalized Intelligence', FUTURE_AI_CAPABILITY_DOMAINS.PERSONALIZED_INTELLIGENCE, [
    'Preference adaptation',
    'Communication style adaptation',
    'Personalized recommendations',
    'Predictive assistance',
    'User-specific optimization'
  ], AI_CAPABILITY_MATURITY_STAGES.ADAPTIVE_AI),
  candidate('learning-and-optimization', 'Learning and Optimization', FUTURE_AI_CAPABILITY_DOMAINS.LEARNING_AND_OPTIMIZATION, [
    'Workflow optimization',
    'Retrieval optimization',
    'Decision analytics',
    'Agent performance analysis',
    'Platform recommendations'
  ], AI_CAPABILITY_MATURITY_STAGES.ADAPTIVE_AI),
  candidate('governance-and-compliance', 'Governance and Compliance', FUTURE_AI_CAPABILITY_DOMAINS.GOVERNANCE_AND_COMPLIANCE, [
    'Policy simulation',
    'Automated compliance verification',
    'Risk scoring',
    'Decision auditing',
    'Regulatory adaptation'
  ], AI_CAPABILITY_MATURITY_STAGES.COORDINATED_AI),
  candidate('human-collaboration', 'Human Collaboration', FUTURE_AI_CAPABILITY_DOMAINS.HUMAN_COLLABORATION, [
    'Human approval workflows',
    'Expert consultation',
    'Shared planning',
    'Interactive decision support',
    'Human-in-the-loop execution'
  ], AI_CAPABILITY_MATURITY_STAGES.COLLABORATIVE_AI_PLATFORM)
]);

export class FutureAiCapabilityRegistry {
  constructor({ candidates = DEFAULT_CANDIDATES } = {}) {
    this.candidates = new Map();

    for (const capabilityCandidate of candidates) {
      this.registerCandidate(capabilityCandidate);
    }
  }

  registerCandidate(candidateInput) {
    const capabilityCandidate = candidateInput instanceof FutureAiCapabilityCandidate
      ? candidateInput
      : new FutureAiCapabilityCandidate(candidateInput);

    if (this.candidates.has(capabilityCandidate.capabilityId)) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.FUTURE_AI_CAPABILITY_DUPLICATE,
        `Future AI capability candidate "${capabilityCandidate.capabilityId}" already exists.`
      );
    }

    this.candidates.set(capabilityCandidate.capabilityId, capabilityCandidate);
    return this;
  }

  listCandidates() {
    return Object.freeze([...this.candidates.values()]);
  }

  listByDomain(domain) {
    return Object.freeze(this.listCandidates().filter((candidate) => candidate.domain === domain));
  }

  getCandidate(capabilityId) {
    const capabilityCandidate = this.candidates.get(capabilityId);

    if (!capabilityCandidate) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.FUTURE_AI_CAPABILITY_NOT_FOUND,
        `Future AI capability candidate "${capabilityId}" is not defined.`
      );
    }

    return capabilityCandidate;
  }

  maturityModel() {
    return Object.freeze([
      AI_CAPABILITY_MATURITY_STAGES.REACTIVE_AI,
      AI_CAPABILITY_MATURITY_STAGES.ASSISTED_AI,
      AI_CAPABILITY_MATURITY_STAGES.COORDINATED_AI,
      AI_CAPABILITY_MATURITY_STAGES.ADAPTIVE_AI,
      AI_CAPABILITY_MATURITY_STAGES.AUTONOMOUS_AI,
      AI_CAPABILITY_MATURITY_STAGES.COLLABORATIVE_AI_PLATFORM
    ]);
  }

  stabilityPrinciples() {
    return Object.freeze(Object.values(FUTURE_AI_STABILITY_PRINCIPLES));
  }

  evaluationCriteria() {
    return Object.freeze(Object.values(FUTURE_AI_EVALUATION_CRITERIA));
  }

  evaluateIntroduction(input) {
    const evaluation = input instanceof FutureAiCapabilityEvaluation
      ? input
      : new FutureAiCapabilityEvaluation(input);
    let capabilityCandidate;

    try {
      capabilityCandidate = this.getCandidate(evaluation.capabilityId);
    } catch (error) {
      if (error instanceof PlatformError) {
        return FutureAiCapabilityEvaluationResult.rejected({
          evaluation,
          errors: [{ code: error.code, message: error.message }]
        });
      }

      throw error;
    }

    const errors = [];

    for (const criterion of this.evaluationCriteria()) {
      if (!evaluation[criterion]) {
        errors.push(rejection(`Future AI capability must satisfy criterion: ${criterion}.`));
      }
    }

    if (evaluation.technologyOnlyJustification) {
      errors.push(rejection('Technology alone is not sufficient justification for future AI capability introduction.'));
    }

    if (evaluation.requiresStructuralRedesign) {
      errors.push(rejection('Future AI capabilities must not require structural redesign of orchestration responsibilities.'));
    }

    if (evaluation.modifiesAuthoritativeBusinessRulesAutomatically) {
      errors.push(rejection('Operational learning must not modify authoritative business rules automatically.'));
    }

    return errors.length === 0
      ? FutureAiCapabilityEvaluationResult.accepted({ evaluation, candidate: capabilityCandidate })
      : FutureAiCapabilityEvaluationResult.rejected({ evaluation, candidate: capabilityCandidate, errors });
  }
}

function candidate(capabilityId, displayName, domain, potentialEnhancements, maturityStage) {
  return new FutureAiCapabilityCandidate({
    capabilityId,
    displayName,
    domain,
    potentialEnhancements,
    maturityStage,
    implementationCommitted: false
  });
}

function rejection(message) {
  return {
    code: ORCHESTRATOR_ERROR_CODES.FUTURE_AI_EVALUATION_REJECTED,
    message
  };
}
