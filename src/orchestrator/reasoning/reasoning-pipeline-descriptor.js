import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ORCHESTRATOR_ERROR_CODES,
  REASONING_DECISION_CATEGORIES,
  REASONING_EXECUTION_STRATEGIES,
  REASONING_PIPELINE_STAGES
} from '../constants.js';
import { ReasoningDecisionOutput } from '../contracts/reasoning-decision-output.js';
import { ReasoningPipelineStage } from '../contracts/reasoning-pipeline-stage.js';
import { ReasoningPipelineValidationResult } from '../contracts/reasoning-pipeline-validation-result.js';

const MINIMUM_EXECUTION_CONFIDENCE = 0.55;

const FORBIDDEN_REASONING_RESPONSIBILITIES = Object.freeze([
  'business validation',
  'data persistence',
  'external communication',
  'pricing',
  'availability',
  'authentication'
]);

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  {
    stage: REASONING_PIPELINE_STAGES.INPUT,
    purpose: 'Receive a normalized request and execution context.',
    responsibility: 'Consume lifecycle-prepared inputs.',
    produces: ['reasoning input']
  },
  {
    stage: REASONING_PIPELINE_STAGES.INTENT_ANALYSIS,
    purpose: 'Determine the primary user intent.',
    responsibility: 'Classify request intent for downstream orchestration.',
    produces: ['detected intent']
  },
  {
    stage: REASONING_PIPELINE_STAGES.GOAL_EXTRACTION,
    purpose: 'Identify the desired outcome behind the request.',
    responsibility: 'Extract orchestration goals without choosing business outcomes.',
    produces: ['selected goals']
  },
  {
    stage: REASONING_PIPELINE_STAGES.CONTEXT_EVALUATION,
    purpose: 'Determine whether available context is sufficient.',
    responsibility: 'Assess missing parameters, continuity, preferences, and workflow state.',
    produces: ['context sufficiency assessment']
  },
  {
    stage: REASONING_PIPELINE_STAGES.KNOWLEDGE_ASSESSMENT,
    purpose: 'Determine whether authoritative knowledge is required.',
    responsibility: 'Prefer verified knowledge over inference.',
    produces: ['knowledge requirement']
  },
  {
    stage: REASONING_PIPELINE_STAGES.TOOL_PLANNING,
    purpose: 'Identify platform capabilities required to satisfy the request.',
    responsibility: 'Select required capabilities without executing them.',
    produces: ['selected tools']
  },
  {
    stage: REASONING_PIPELINE_STAGES.EXECUTION_STRATEGY,
    purpose: 'Determine how execution should proceed.',
    responsibility: 'Choose coordination strategy while respecting service ownership.',
    produces: ['execution strategy']
  },
  {
    stage: REASONING_PIPELINE_STAGES.CONFIDENCE_EVALUATION,
    purpose: 'Assess confidence before proceeding.',
    responsibility: 'Gate low-confidence decisions toward clarification.',
    produces: ['confidence level']
  },
  {
    stage: REASONING_PIPELINE_STAGES.DECISION_OUTPUT,
    purpose: 'Produce an orchestration decision for the orchestrator.',
    responsibility: 'Return explainable decision metadata without performing business work.',
    produces: ['orchestration decision']
  }
]);

export class ReasoningPipelineDescriptor {
  constructor({ minimumExecutionConfidence = MINIMUM_EXECUTION_CONFIDENCE } = {}) {
    this.minimumExecutionConfidence = minimumExecutionConfidence;
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(
        (definition, index) =>
          new ReasoningPipelineStage({
            sequence: index + 1,
            ...definition
          })
      )
    );
  }

  describe() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  decisionCategories() {
    return Object.freeze(Object.values(REASONING_DECISION_CATEGORIES));
  }

  executionStrategies() {
    return Object.freeze(Object.values(REASONING_EXECUTION_STRATEGIES));
  }

  forbiddenResponsibilities() {
    return FORBIDDEN_REASONING_RESPONSIBILITIES;
  }

  getStage(stage) {
    const pipelineStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!pipelineStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.REASONING_STAGE_NOT_FOUND,
        `Reasoning pipeline stage is not defined: ${stage}`,
        { stage }
      );
    }

    return pipelineStage;
  }

  validateTraversal(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(
        `Reasoning pipeline must include ${expectedStages.length} stages in canonical order.`
      );
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(
          `Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`
        );
      }
    });

    return new ReasoningPipelineValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  assertTraversal(stages) {
    const result = this.validateTraversal(stages);

    if (!result.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.REASONING_TRAVERSAL_INVALID,
        'Reasoning pipeline traversal does not match the canonical architecture.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateDecisionOutput(decisionInput) {
    const decision = decisionInput instanceof ReasoningDecisionOutput
      ? decisionInput
      : new ReasoningDecisionOutput(decisionInput);
    const errors = [];

    if (!decision.intent) {
      errors.push('Reasoning decision output must include detected intent.');
    }

    if (decision.goals.length === 0) {
      errors.push('Reasoning decision output must include at least one selected goal.');
    }

    if (decision.contextUsed.length === 0) {
      errors.push('Reasoning decision output must identify context used.');
    }

    if (!this.decisionCategories().includes(decision.decisionCategory)) {
      errors.push(`Unsupported reasoning decision category: ${decision.decisionCategory}.`);
    }

    if (
      decision.executionStrategy !== undefined &&
      !this.executionStrategies().includes(decision.executionStrategy)
    ) {
      errors.push(`Unsupported reasoning execution strategy: ${decision.executionStrategy}.`);
    }

    if (typeof decision.confidenceLevel !== 'number' || Number.isNaN(decision.confidenceLevel)) {
      errors.push('Reasoning decision output must include a numeric confidence level.');
    } else if (decision.confidenceLevel < 0 || decision.confidenceLevel > 1) {
      errors.push('Reasoning confidence level must be between 0 and 1.');
    } else if (
      decision.confidenceLevel < this.minimumExecutionConfidence &&
      decision.decisionCategory !== REASONING_DECISION_CATEGORIES.CLARIFICATION_REQUEST
    ) {
      errors.push('Low-confidence reasoning must request clarification rather than speculate.');
    }

    if (
      decision.decisionCategory === REASONING_DECISION_CATEGORIES.TOOL_EXECUTION &&
      decision.selectedTools.length === 0
    ) {
      errors.push('Tool execution decisions must identify selected tools.');
    }

    for (const claim of decision.responsibilityClaims) {
      if (FORBIDDEN_REASONING_RESPONSIBILITIES.includes(normalize(claim))) {
        errors.push(`Reasoning pipeline may not own responsibility: ${claim}.`);
      }
    }

    return new ReasoningPipelineValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  assertDecisionOutput(decisionInput) {
    const result = this.validateDecisionOutput(decisionInput);

    if (!result.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.REASONING_DECISION_INVALID,
        'Reasoning decision output does not satisfy the canonical architecture.',
        { errors: result.errors }
      );
    }

    return result;
  }
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}
