import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  TRANSACTION_CONSISTENCY_SCOPES,
  TRANSACTION_COORDINATION_MECHANISMS,
  TRANSACTION_FAILURE_TYPES,
  TRANSACTION_LIFECYCLE_STAGES,
  TRANSACTION_OWNERSHIP_PRINCIPLES,
  TRANSACTION_RESULTS,
  TRANSACTION_TELEMETRY_FIELDS
} from '../constants.js';
import { TransactionBoundary } from '../contracts/transaction-boundary.js';
import { TransactionCompensationRecord } from '../contracts/transaction-compensation-record.js';
import { TransactionLifecycleStage } from '../contracts/transaction-lifecycle-stage.js';
import { TransactionOperationRecord } from '../contracts/transaction-operation-record.js';
import { TransactionValidationResult } from '../contracts/transaction-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [TRANSACTION_LIFECYCLE_STAGES.BEGIN_TRANSACTION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Begin a local transaction for one business operation.'],
  [TRANSACTION_LIFECYCLE_STAGES.VALIDATE_BUSINESS_RULES, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate service-owned business rules and invariants.'],
  [TRANSACTION_LIFECYCLE_STAGES.EXECUTE_BUSINESS_OPERATION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Modify only the owner service business state.'],
  [TRANSACTION_LIFECYCLE_STAGES.PERSIST_CHANGES, EXECUTION_PARTICIPANTS.DATA_LAYER, 'Persist local state changes inside the transaction boundary.'],
  [TRANSACTION_LIFECYCLE_STAGES.COMMIT_TRANSACTION, EXECUTION_PARTICIPANTS.DATA_LAYER, 'Commit the local transaction before cross-service communication.'],
  [TRANSACTION_LIFECYCLE_STAGES.PUBLISH_EVENTS, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Publish business events only after successful commit.'],
  [TRANSACTION_LIFECYCLE_STAGES.COMPLETE, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Complete with telemetry, rollback, retry, or compensation metadata.']
]);

const DEFAULT_BOUNDARIES = Object.freeze([
  boundary('Create Reservation', 'Booking Service', true),
  boundary('Process Payment', 'Payment Service', true),
  boundary('Update Property', 'Property Service', false),
  boundary('Register Guest', 'Guest Service', false),
  boundary('Update Calendar', 'Calendar Service', true)
]);

export class TransactionBoundariesDescriptor {
  constructor({ boundaries = DEFAULT_BOUNDARIES } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new TransactionLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.boundaries = new Map();

    for (const transactionBoundary of boundaries) {
      this.registerBoundary(transactionBoundary);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  ownershipPrinciples() {
    return Object.freeze(Object.values(TRANSACTION_OWNERSHIP_PRINCIPLES));
  }

  consistencyScopes() {
    return Object.freeze(Object.values(TRANSACTION_CONSISTENCY_SCOPES));
  }

  coordinationMechanisms() {
    return Object.freeze(Object.values(TRANSACTION_COORDINATION_MECHANISMS));
  }

  failureTypes() {
    return Object.freeze(Object.values(TRANSACTION_FAILURE_TYPES));
  }

  transactionResults() {
    return Object.freeze(Object.values(TRANSACTION_RESULTS));
  }

  telemetryFields() {
    return Object.freeze(Object.values(TRANSACTION_TELEMETRY_FIELDS));
  }

  listBoundaries() {
    return Object.freeze([...this.boundaries.values()]);
  }

  registerBoundary(boundaryInput) {
    const transactionBoundary = boundaryInput instanceof TransactionBoundary
      ? boundaryInput
      : new TransactionBoundary(boundaryInput);
    const result = this.validateBoundary(transactionBoundary);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.TRANSACTION_BOUNDARY_INVALID,
        'Transaction boundary violates ARCH-005-09.',
        { errors: result.errors }
      );
    }

    this.boundaries.set(transactionBoundary.businessOperation, transactionBoundary);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.TRANSACTION_STAGE_NOT_FOUND,
        `Transaction lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getBoundary(businessOperation) {
    return this.boundaries.get(businessOperation);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Transaction lifecycle must include ${expectedStages.length} stages in canonical order.`);
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
        DATA_FLOW_ERROR_CODES.TRANSACTION_LIFECYCLE_INVALID,
        'Transaction lifecycle does not match ARCH-005-09.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateBoundary(boundaryInput) {
    const transactionBoundary = boundaryInput instanceof TransactionBoundary
      ? boundaryInput
      : new TransactionBoundary(boundaryInput);
    const errors = [];

    if (!transactionBoundary.businessOperation) errors.push('Transaction boundary must identify a business operation.');
    if (!transactionBoundary.ownerService) errors.push('Transaction boundary must have one authoritative owner.');
    if (Array.isArray(transactionBoundary.ownerService)) errors.push('Transaction ownership must not be shared.');
    if (transactionBoundary.affectedServices.length !== 1 || transactionBoundary.affectedServices[0] !== transactionBoundary.ownerService) {
      errors.push('Transaction boundaries must remain within the owner service boundary.');
    }
    if (transactionBoundary.distributedTransaction === true) errors.push('Distributed transactions should be avoided.');
    if (transactionBoundary.crossServiceCommunicationInsideBoundary === true) errors.push('Cross-service communication must occur outside the local transaction boundary.');
    if (transactionBoundary.publishesEventsBeforeCommit === true) errors.push('Events must be published only after successful transaction commit.');
    if (transactionBoundary.longRunningLock === true) errors.push('Long-running processes must not rely on persistent transactional locks.');
    if (transactionBoundary.rollbackScope !== 'local') errors.push('Rollback applies only within a single transaction boundary.');

    for (const mechanism of transactionBoundary.coordinationMechanisms) {
      if (!this.coordinationMechanisms().includes(mechanism)) {
        errors.push(`Unsupported transaction coordination mechanism: ${mechanism}.`);
      }
    }

    return validation(errors);
  }

  validateOperation(operationInput) {
    const operation = operationInput instanceof TransactionOperationRecord
      ? operationInput
      : new TransactionOperationRecord(operationInput);
    const boundary = this.getBoundary(operation.businessOperation);
    const errors = [];

    if (!boundary) errors.push(`Transaction boundary is not registered: ${operation.businessOperation}.`);
    if (!operation.transactionId) errors.push('Transaction operation must include a transaction ID.');
    if (!operation.correlationId) errors.push('Transaction operation must include a correlation ID.');
    if (boundary && operation.ownerService !== boundary.ownerService) errors.push(`Transaction owner must be ${boundary.ownerService}.`);
    if (operation.businessRulesValidated !== true) errors.push('Business rules must be validated before execution.');
    if (operation.stateChanges.length === 0) errors.push('State-changing transactions must record state changes.');
    if (operation.persisted !== true && operation.committed === true) errors.push('Transactions must persist changes before commit.');
    if (operation.committed === true && operation.rolledBack === true) errors.push('A transaction cannot be both committed and rolled back.');
    if (operation.committed === true && operation.eventsPublishedAfterCommit !== true) errors.push('Committed transactions that publish events must publish them after commit.');
    if (boundary?.idempotencyRequired && operation.retryAttempt === true && !operation.idempotencyKey) {
      errors.push('Retried transaction operations requiring idempotency must include an idempotency key.');
    }
    if (operation.failureType && !this.failureTypes().includes(operation.failureType)) {
      errors.push(`Unsupported transaction failure type: ${operation.failureType}.`);
    }
    if (operation.failureType && !operation.failureInformation) errors.push('Transaction failures must include failure information.');

    return validation(errors);
  }

  validateCompensation(compensationInput) {
    const compensation = compensationInput instanceof TransactionCompensationRecord
      ? compensationInput
      : new TransactionCompensationRecord(compensationInput);
    const boundary = this.getBoundary(compensation.businessOperation);
    const errors = [];

    if (!compensation.originalTransactionId) errors.push('Compensation must reference the original transaction.');
    if (!compensation.compensationTransactionId) errors.push('Compensation must create a new compensation transaction ID.');
    if (!boundary) errors.push(`Transaction boundary is not registered: ${compensation.businessOperation}.`);
    if (boundary && compensation.ownerService !== boundary.ownerService) errors.push(`Compensation must be owned by ${boundary.ownerService}.`);
    if (!compensation.compensationOperation) errors.push('Compensation must define a business reversal operation.');
    if (compensation.coordinatedByWorkflow !== true) errors.push('Cross-service compensation should be coordinated by workflow.');
    if (compensation.createsNewTransaction !== true) errors.push('Compensation creates a new business transaction rather than rolling back history.');
    if (compensation.attemptsHistoryRollback === true) errors.push('Compensation must not attempt cross-service history rollback.');

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === TRANSACTION_TELEMETRY_FIELDS.FAILURE_INFORMATION) continue;

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Transaction telemetry is missing field ${field}.`);
      }
    }

    if (record?.durationMs !== undefined && record.durationMs < 0) {
      errors.push('Transaction duration must not be negative.');
    }

    if (record?.result && !this.transactionResults().includes(record.result)) {
      errors.push(`Unsupported transaction result: ${record.result}.`);
    }

    if (record?.result && record.result !== TRANSACTION_RESULTS.COMMITTED && !record.failureInformation) {
      errors.push('Unsuccessful transaction telemetry must include failure information.');
    }

    return validation(errors);
  }
}

function boundary(businessOperation, ownerService, idempotencyRequired) {
  return new TransactionBoundary({
    businessOperation,
    ownerService,
    affectedServices: [ownerService],
    idempotencyRequired,
    rollbackScope: 'local',
    coordinationMechanisms: [
      TRANSACTION_COORDINATION_MECHANISMS.EVENTS,
      TRANSACTION_COORDINATION_MECHANISMS.WORKFLOWS,
      TRANSACTION_COORDINATION_MECHANISMS.COMMANDS,
      TRANSACTION_COORDINATION_MECHANISMS.COMPENSATION
    ]
  });
}

function validation(errors) {
  return new TransactionValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
