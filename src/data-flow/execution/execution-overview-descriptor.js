import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_LIFECYCLE_STAGES,
  EXECUTION_PARTICIPANTS,
  EXECUTION_RESPONSIBILITIES,
  EXECUTION_STATES,
  EXECUTION_TELEMETRY_FIELDS
} from '../constants.js';
import { ExecutionLifecycleStage } from '../contracts/execution-lifecycle-stage.js';
import { ExecutionParticipant } from '../contracts/execution-participant.js';
import { ExecutionValidationResult } from '../contracts/execution-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [EXECUTION_LIFECYCLE_STAGES.RECEIVE_REQUEST, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, EXECUTION_RESPONSIBILITIES.REQUEST_RECEPTION, 'Receive a request from a user or external system.'],
  [EXECUTION_LIFECYCLE_STAGES.NORMALIZE_REQUEST, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, EXECUTION_RESPONSIBILITIES.CHANNEL_NORMALIZATION, 'Normalize channel-specific input into platform request shape.'],
  [EXECUTION_LIFECYCLE_STAGES.ANALYZE_INTENT, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, EXECUTION_RESPONSIBILITIES.INTENT_ANALYSIS, 'Coordinate intent analysis without owning business logic.'],
  [EXECUTION_LIFECYCLE_STAGES.BUILD_CONTEXT, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, EXECUTION_RESPONSIBILITIES.CONTEXT_CONSTRUCTION, 'Construct execution context for reasoning and authorization.'],
  [EXECUTION_LIFECYCLE_STAGES.AUTHORIZE_EXECUTION, EXECUTION_PARTICIPANTS.DECISION_ENGINE, EXECUTION_RESPONSIBILITIES.EXECUTION_APPROVAL, 'Authorize execution before work proceeds.'],
  [EXECUTION_LIFECYCLE_STAGES.EXECUTE_BUSINESS_OPERATIONS, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, EXECUTION_RESPONSIBILITIES.BUSINESS_CAPABILITY_EXECUTION, 'Execute authoritative business capabilities.'],
  [EXECUTION_LIFECYCLE_STAGES.VALIDATE_RESULTS, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, EXECUTION_RESPONSIBILITIES.DECISION_COORDINATION, 'Validate results before response composition.'],
  [EXECUTION_LIFECYCLE_STAGES.COMPOSE_RESPONSE, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, EXECUTION_RESPONSIBILITIES.DECISION_COORDINATION, 'Coordinate response composition.'],
  [EXECUTION_LIFECYCLE_STAGES.RETURN_RESPONSE, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, EXECUTION_RESPONSIBILITIES.REQUEST_RECEPTION, 'Return the response through the originating channel.']
]);

const PARTICIPANT_DEFINITIONS = Object.freeze([
  {
    participant: EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER,
    primaryResponsibility: 'Receive requests',
    responsibilities: [
      EXECUTION_RESPONSIBILITIES.REQUEST_RECEPTION,
      EXECUTION_RESPONSIBILITIES.INPUT_VALIDATION,
      EXECUTION_RESPONSIBILITIES.CHANNEL_NORMALIZATION
    ],
    boundaries: ['Does not own orchestration decisions or business execution.']
  },
  {
    participant: EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR,
    primaryResponsibility: 'Coordinate execution',
    responsibilities: [
      EXECUTION_RESPONSIBILITIES.INTENT_ANALYSIS,
      EXECUTION_RESPONSIBILITIES.CONTEXT_CONSTRUCTION,
      EXECUTION_RESPONSIBILITIES.DECISION_COORDINATION,
      EXECUTION_RESPONSIBILITIES.TOOL_ORCHESTRATION,
      EXECUTION_RESPONSIBILITIES.WORKFLOW_COORDINATION
    ],
    boundaries: ['Coordinates execution but does not calculate business outcomes.']
  },
  {
    participant: EXECUTION_PARTICIPANTS.DECISION_ENGINE,
    primaryResponsibility: 'Authorize execution',
    responsibilities: [
      EXECUTION_RESPONSIBILITIES.POLICY_EVALUATION,
      EXECUTION_RESPONSIBILITIES.AUTHORIZATION,
      EXECUTION_RESPONSIBILITIES.CONFIDENCE_ASSESSMENT,
      EXECUTION_RESPONSIBILITIES.EXECUTION_APPROVAL
    ],
    boundaries: ['Authorizes execution but does not execute tools or business operations.']
  },
  {
    participant: EXECUTION_PARTICIPANTS.BUSINESS_SERVICES,
    primaryResponsibility: 'Execute business capabilities',
    responsibilities: [EXECUTION_RESPONSIBILITIES.BUSINESS_CAPABILITY_EXECUTION],
    boundaries: ['Own business rules but do not coordinate platform workflows.']
  },
  {
    participant: EXECUTION_PARTICIPANTS.DATA_LAYER,
    primaryResponsibility: 'Persist and retrieve data',
    responsibilities: [
      EXECUTION_RESPONSIBILITIES.DATA_PERSISTENCE,
      EXECUTION_RESPONSIBILITIES.QUERY_EXECUTION,
      EXECUTION_RESPONSIBILITIES.TRANSACTION_SUPPORT,
      EXECUTION_RESPONSIBILITIES.DATA_INTEGRITY
    ],
    boundaries: ['Stores information but does not make business decisions or coordinate execution.']
  },
  {
    participant: EXECUTION_PARTICIPANTS.INTEGRATION_LAYER,
    primaryResponsibility: 'Communicate with external systems',
    responsibilities: [EXECUTION_RESPONSIBILITIES.EXTERNAL_COMMUNICATION],
    boundaries: ['External integrations remain isolated behind defined interfaces.']
  }
]);

const ALLOWED_STATE_TRANSITIONS = Object.freeze({
  [EXECUTION_STATES.RECEIVED]: [EXECUTION_STATES.VALIDATED, EXECUTION_STATES.CANCELLED, EXECUTION_STATES.FAILED],
  [EXECUTION_STATES.VALIDATED]: [EXECUTION_STATES.ORCHESTRATED, EXECUTION_STATES.CANCELLED, EXECUTION_STATES.FAILED],
  [EXECUTION_STATES.ORCHESTRATED]: [EXECUTION_STATES.AUTHORIZED, EXECUTION_STATES.CANCELLED, EXECUTION_STATES.FAILED],
  [EXECUTION_STATES.AUTHORIZED]: [EXECUTION_STATES.EXECUTING, EXECUTION_STATES.CANCELLED, EXECUTION_STATES.FAILED],
  [EXECUTION_STATES.EXECUTING]: [EXECUTION_STATES.COMPLETED, EXECUTION_STATES.FAILED, EXECUTION_STATES.CANCELLED],
  [EXECUTION_STATES.COMPLETED]: [],
  [EXECUTION_STATES.FAILED]: [],
  [EXECUTION_STATES.CANCELLED]: []
});

export class ExecutionOverviewDescriptor {
  constructor() {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, participant, responsibility, description], index) =>
        new ExecutionLifecycleStage({
          sequence: index + 1,
          stage,
          participant,
          responsibility,
          description
        })
      )
    );
    this.participants = Object.freeze(PARTICIPANT_DEFINITIONS.map((participant) => new ExecutionParticipant(participant)));
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  listParticipants() {
    return this.participants;
  }

  listStates() {
    return Object.freeze(Object.values(EXECUTION_STATES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(EXECUTION_TELEMETRY_FIELDS));
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EXECUTION_STAGE_NOT_FOUND,
        `Execution lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getParticipant(participant) {
    const executionParticipant = this.participants.find((candidate) => candidate.participant === participant);

    if (!executionParticipant) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EXECUTION_PARTICIPANT_NOT_FOUND,
        `Execution participant is not defined: ${participant}`,
        { participant }
      );
    }

    return executionParticipant;
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Execution lifecycle must include ${expectedStages.length} stages in canonical order.`);
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(`Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`);
      }
    });

    return validation(errors);
  }

  assertLifecycle(stages) {
    const result = this.validateLifecycle(stages);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EXECUTION_LIFECYCLE_INVALID,
        'Execution lifecycle does not match the canonical ARCH-005-01 flow.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateStateTransition(fromState, toState) {
    const allowedNextStates = ALLOWED_STATE_TRANSITIONS[fromState];

    if (!allowedNextStates || !allowedNextStates.includes(toState)) {
      return validation([`Execution state transition is not allowed: ${fromState} -> ${toState}.`]);
    }

    return validation([]);
  }

  assertStateTransition(fromState, toState) {
    const result = this.validateStateTransition(fromState, toState);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EXECUTION_STATE_TRANSITION_INVALID,
        'Execution state transition violates ARCH-005-01.',
        { fromState, toState }
      );
    }

    return result;
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Execution telemetry is missing field ${field}.`);
      }
    }

    if (record?.executionDurationMs !== undefined && record.executionDurationMs < 0) {
      errors.push('Execution duration must not be negative.');
    }

    return validation(errors);
  }

  assertTelemetry(record) {
    const result = this.validateTelemetry(record);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EXECUTION_TELEMETRY_INVALID,
        'Execution telemetry does not satisfy ARCH-005-01 observability.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateParticipantResponsibility(participant, responsibility) {
    const executionParticipant = this.getParticipant(participant);

    if (!executionParticipant.responsibilities.includes(responsibility)) {
      return validation([`Participant ${participant} does not own responsibility ${responsibility}.`]);
    }

    return validation([]);
  }

  assertParticipantResponsibility(participant, responsibility) {
    const result = this.validateParticipantResponsibility(participant, responsibility);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EXECUTION_BOUNDARY_INVALID,
        'Execution participant responsibility violates ARCH-005-01 boundaries.',
        { participant, responsibility }
      );
    }

    return result;
  }
}

function validation(errors) {
  return new ExecutionValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
