import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ORCHESTRATOR_COMPONENTS,
  ORCHESTRATOR_ERROR_CODES,
  REQUEST_LIFECYCLE_CHARACTERISTICS,
  REQUEST_LIFECYCLE_STAGES,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS
} from '../constants.js';
import { RequestLifecycleStage } from '../contracts/request-lifecycle-stage.js';
import { RequestLifecycleValidationResult } from '../contracts/request-lifecycle-validation-result.js';

const ALL_CHARACTERISTICS = Object.freeze(Object.values(REQUEST_LIFECYCLE_CHARACTERISTICS));
const TELEMETRY_FIELDS = Object.freeze(Object.values(REQUEST_LIFECYCLE_TELEMETRY_FIELDS));

const REQUIRED_TRACE_FIELDS = Object.freeze([
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.START_TIME,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.END_TIME,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.DURATION,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.INPUTS,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.OUTPUTS,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.ERRORS,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.CORRELATION_ID,
  REQUEST_LIFECYCLE_TELEMETRY_FIELDS.REQUEST_ID
]);

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  {
    stage: REQUEST_LIFECYCLE_STAGES.RECEIVE_REQUEST,
    responsibility: 'Accept inbound user or system request for orchestration.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.NORMALIZE_REQUEST,
    responsibility: 'Normalize request shape before orchestration decisions are made.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.IDENTIFY_INTENT,
    responsibility: 'Coordinate intent identification without owning business logic.',
    component: ORCHESTRATOR_COMPONENTS.REASONING_ENGINE
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.BUILD_CONTEXT,
    responsibility: 'Assemble execution context from approved platform sources.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.RETRIEVE_MEMORY,
    responsibility: 'Coordinate memory retrieval without storing memory directly.',
    component: ORCHESTRATOR_COMPONENTS.MEMORY_SYSTEM
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.RETRIEVE_KNOWLEDGE,
    responsibility: 'Coordinate knowledge retrieval through the knowledge service.',
    component: ORCHESTRATOR_COMPONENTS.KNOWLEDGE_SERVICE
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.PLAN_EXECUTION,
    responsibility: 'Create an execution plan for downstream components.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.EXECUTE_TOOLS,
    responsibility: 'Coordinate tool execution through the tool orchestrator.',
    component: ORCHESTRATOR_COMPONENTS.TOOL_ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.VALIDATE_RESULTS,
    responsibility: 'Validate orchestration results before response composition.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.COMPOSE_RESPONSE,
    responsibility: 'Coordinate final response composition.',
    component: ORCHESTRATOR_COMPONENTS.RESPONSE_COMPOSER
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.APPLY_POLICIES,
    responsibility: 'Apply security and policy controls before returning output.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  },
  {
    stage: REQUEST_LIFECYCLE_STAGES.RETURN_RESPONSE,
    responsibility: 'Return the governed response to the caller.',
    component: ORCHESTRATOR_COMPONENTS.ORCHESTRATOR
  }
]);

export class RequestLifecycleDescriptor {
  constructor() {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(
        (definition, index) =>
          new RequestLifecycleStage({
            sequence: index + 1,
            ...definition,
            characteristics: ALL_CHARACTERISTICS,
            telemetryFields: TELEMETRY_FIELDS
          })
      )
    );
  }

  describe() {
    return this.stages;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.LIFECYCLE_STAGE_NOT_FOUND,
        `Request lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  requiredTelemetryFields() {
    return REQUIRED_TRACE_FIELDS;
  }

  validateTraversal(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(
        `Request lifecycle must include ${expectedStages.length} stages in canonical order.`
      );
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(
          `Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`
        );
      }
    });

    return new RequestLifecycleValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  assertTraversal(stages) {
    const result = this.validateTraversal(stages);

    if (!result.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.LIFECYCLE_TRAVERSAL_INVALID,
        'Request lifecycle traversal does not match the canonical architecture.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateTraceEntries(entries) {
    const traceEntries = Array.isArray(entries) ? entries : [];
    const traversalResult = this.validateTraversal(traceEntries.map((entry) => entry?.stage));
    const errors = [...traversalResult.errors];

    traceEntries.forEach((entry, index) => {
      REQUIRED_TRACE_FIELDS.forEach((field) => {
        if (entry?.[field] === undefined || entry?.[field] === null) {
          errors.push(`Trace entry ${index + 1} is missing telemetry field ${field}.`);
        }
      });

      if (entry?.durationMs !== undefined && entry.durationMs < 0) {
        errors.push(`Trace entry ${index + 1} durationMs must not be negative.`);
      }
    });

    return new RequestLifecycleValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  assertTraceEntries(entries) {
    const result = this.validateTraceEntries(entries);

    if (!result.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.LIFECYCLE_TRACE_INVALID,
        'Request lifecycle trace does not satisfy the canonical telemetry contract.',
        { errors: result.errors }
      );
    }

    return result;
  }
}
