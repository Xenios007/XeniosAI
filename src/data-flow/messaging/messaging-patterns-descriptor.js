import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  MESSAGE_DELIVERY_MODELS,
  MESSAGE_PROCESSING_STATUSES,
  MESSAGE_RETRY_POLICIES,
  MESSAGE_ROUTING_STRATEGIES,
  MESSAGE_SECURITY_CONTROLS,
  MESSAGE_TELEMETRY_FIELDS,
  MESSAGE_TYPES,
  MESSAGING_LIFECYCLE_STAGES,
  MESSAGING_STYLES
} from '../constants.js';
import { MessageContract } from '../contracts/message-contract.js';
import { MessageEnvelope } from '../contracts/message-envelope.js';
import { MessageLifecycleStage } from '../contracts/message-lifecycle-stage.js';
import { MessageProcessingRecord } from '../contracts/message-processing-record.js';
import { MessageValidationResult } from '../contracts/message-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [MESSAGING_LIFECYCLE_STAGES.CREATE_MESSAGE, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Create a structured message with transport metadata and business payload separated.'],
  [MESSAGING_LIFECYCLE_STAGES.VALIDATE_MESSAGE, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate explicit message contract, payload, version, and security metadata.'],
  [MESSAGING_LIFECYCLE_STAGES.ROUTE_MESSAGE, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER, 'Route transparently through the configured routing strategy.'],
  [MESSAGING_LIFECYCLE_STAGES.DELIVER_MESSAGE, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER, 'Deliver according to the declared delivery model.'],
  [MESSAGING_LIFECYCLE_STAGES.PROCESS_MESSAGE, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Process within the receiving component ownership boundary.'],
  [MESSAGING_LIFECYCLE_STAGES.ACKNOWLEDGE_RESULT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Acknowledge processing outcome explicitly.'],
  [MESSAGING_LIFECYCLE_STAGES.COMPLETE_PROCESSING, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Complete processing with retry, expiration, dead-letter, and telemetry records.']
]);

const DEFAULT_CONTRACTS = Object.freeze([
  contract('CreateReservationCommandMessage', MESSAGE_TYPES.COMMAND, MESSAGING_STYLES.POINT_TO_POINT, 'booking', 'booking-command-queue', MESSAGE_ROUTING_STRATEGIES.QUEUE, MESSAGE_DELIVERY_MODELS.AT_LEAST_ONCE, ['reservationId', 'guestId']),
  contract('AvailabilityQueryMessage', MESSAGE_TYPES.QUERY, MESSAGING_STYLES.REQUEST_RESPONSE, 'booking', 'calendar', MESSAGE_ROUTING_STRATEGIES.DIRECT, MESSAGE_DELIVERY_MODELS.AT_MOST_ONCE, ['propertyId', 'checkIn', 'checkOut']),
  contract('ReservationCreatedEventMessage', MESSAGE_TYPES.EVENT, MESSAGING_STYLES.PUBLISH_SUBSCRIBE, 'booking', undefined, MESSAGE_ROUTING_STRATEGIES.EVENT, MESSAGE_DELIVERY_MODELS.AT_LEAST_ONCE, ['reservationId', 'timestamp'], true),
  contract('GuestNotificationMessage', MESSAGE_TYPES.NOTIFICATION, MESSAGING_STYLES.ASYNCHRONOUS, 'notification', 'notification-queue', MESSAGE_ROUTING_STRATEGIES.QUEUE, MESSAGE_DELIVERY_MODELS.AT_LEAST_ONCE, ['recipient', 'message'], false, '15m'),
  contract('ReservationWorkflowSignalMessage', MESSAGE_TYPES.WORKFLOW_SIGNAL, MESSAGING_STYLES.POINT_TO_POINT, 'workflow', 'workflow-signals', MESSAGE_ROUTING_STRATEGIES.CONTENT_BASED, MESSAGE_DELIVERY_MODELS.AT_LEAST_ONCE, ['workflowId', 'signal']),
  contract('PlatformStatusUpdateMessage', MESSAGE_TYPES.STATUS_UPDATE, MESSAGING_STYLES.BROADCAST, 'platform', undefined, MESSAGE_ROUTING_STRATEGIES.TOPIC, MESSAGE_DELIVERY_MODELS.BEST_EFFORT, ['status', 'timestamp'])
]);

export class MessagingPatternsDescriptor {
  constructor({ contracts = DEFAULT_CONTRACTS } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new MessageLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.contracts = new Map();

    for (const messageContract of contracts) {
      this.registerContract(messageContract);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  messagingStyles() {
    return Object.freeze(Object.values(MESSAGING_STYLES));
  }

  messageTypes() {
    return Object.freeze(Object.values(MESSAGE_TYPES));
  }

  routingStrategies() {
    return Object.freeze(Object.values(MESSAGE_ROUTING_STRATEGIES));
  }

  deliveryModels() {
    return Object.freeze(Object.values(MESSAGE_DELIVERY_MODELS));
  }

  retryPolicies() {
    return Object.freeze(Object.values(MESSAGE_RETRY_POLICIES));
  }

  securityControls() {
    return Object.freeze(Object.values(MESSAGE_SECURITY_CONTROLS));
  }

  processingStatuses() {
    return Object.freeze(Object.values(MESSAGE_PROCESSING_STATUSES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(MESSAGE_TELEMETRY_FIELDS));
  }

  listContracts() {
    return Object.freeze([...this.contracts.values()]);
  }

  registerContract(contractInput) {
    const messageContract = contractInput instanceof MessageContract
      ? contractInput
      : new MessageContract(contractInput);
    const result = this.validateContract(messageContract);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.MESSAGE_CONTRACT_INVALID,
        'Message contract violates ARCH-005-08.',
        { errors: result.errors }
      );
    }

    this.contracts.set(messageContract.messageName, messageContract);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.MESSAGING_STAGE_NOT_FOUND,
        `Messaging lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getContract(messageName) {
    return this.contracts.get(messageName);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Messaging lifecycle must include ${expectedStages.length} stages in canonical order.`);
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
        DATA_FLOW_ERROR_CODES.MESSAGING_LIFECYCLE_INVALID,
        'Messaging lifecycle does not match ARCH-005-08.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateContract(contractInput) {
    const messageContract = contractInput instanceof MessageContract
      ? contractInput
      : new MessageContract(contractInput);
    const errors = [];

    if (!messageContract.messageName) errors.push('Message contract must have a name.');
    if (!this.messageTypes().includes(messageContract.messageType)) errors.push(`Unsupported message type: ${messageContract.messageType}.`);
    if (!this.messagingStyles().includes(messageContract.style)) errors.push(`Unsupported messaging style: ${messageContract.style}.`);
    if (!messageContract.producer) errors.push('Message contract must identify a producer.');
    if (!messageContract.version) errors.push('Message contract must be versioned.');
    if (!this.routingStrategies().includes(messageContract.routingStrategy)) errors.push(`Unsupported routing strategy: ${messageContract.routingStrategy}.`);
    if (!this.deliveryModels().includes(messageContract.deliveryModel)) errors.push(`Unsupported delivery model: ${messageContract.deliveryModel}.`);
    if (messageContract.payloadFields.length === 0) errors.push('Message contract must define an explicit payload.');
    if (messageContract.observable !== true) errors.push('Messages must be observable.');
    if (messageContract.producerKnowsConsumers === true) errors.push('Message producers must remain independent of consumers.');
    if (messageContract.implementationDetailsExposed === true) errors.push('Messages must not expose implementation details.');
    if (messageContract.orderingRequired && !messageContract.orderingScope) errors.push('Required message ordering must define an explicit ordering scope.');
    if (messageContract.duplicateHandlingRequired && !messageContract.retryPolicy.includes(MESSAGE_RETRY_POLICIES.RETRY_LIMITS)) {
      errors.push('Duplicate-sensitive messages must define retry limits for predictable recovery.');
    }

    if ([MESSAGING_STYLES.POINT_TO_POINT, MESSAGING_STYLES.REQUEST_RESPONSE, MESSAGING_STYLES.ASYNCHRONOUS].includes(messageContract.style) && !messageContract.destination) {
      errors.push(`Messaging style ${messageContract.style} must define a destination.`);
    }

    for (const retryPolicy of messageContract.retryPolicy) {
      if (!this.retryPolicies().includes(retryPolicy)) errors.push(`Unsupported retry policy: ${retryPolicy}.`);
    }

    for (const control of messageContract.securityControls) {
      if (!this.securityControls().includes(control)) errors.push(`Unsupported message security control: ${control}.`);
    }

    for (const requiredControl of [MESSAGE_SECURITY_CONTROLS.AUTHENTICATION, MESSAGE_SECURITY_CONTROLS.AUTHORIZATION, MESSAGE_SECURITY_CONTROLS.AUDITABILITY]) {
      if (!messageContract.securityControls.includes(requiredControl)) {
        errors.push(`Message contract must include ${requiredControl}.`);
      }
    }

    return validation(errors);
  }

  createMessage(messageInput) {
    const envelope = messageInput instanceof MessageEnvelope ? messageInput : new MessageEnvelope(messageInput);
    const messageContract = this.getContract(envelope.messageName);
    const errors = [];

    if (!messageContract) errors.push(`Message contract is not registered: ${envelope.messageName}.`);
    if (!envelope.messageId) errors.push('Message must include a message ID.');
    if (!envelope.correlationId) errors.push('Message must include a correlation ID.');
    if (!envelope.timestamp) errors.push('Message must include a timestamp.');
    if (messageContract && envelope.source !== messageContract.producer) errors.push(`Message source must be ${messageContract.producer}.`);
    if (messageContract && envelope.messageType !== messageContract.messageType) errors.push(`Message type must be ${messageContract.messageType}.`);
    if (messageContract && envelope.version !== messageContract.version) errors.push(`Message version must be ${messageContract.version}.`);
    if (messageContract?.destination && envelope.destination !== messageContract.destination) {
      errors.push(`Message destination must be ${messageContract.destination}.`);
    }
    if (envelope.metadata?.implementationDetailsExposed === true) errors.push('Message metadata must not expose implementation details.');

    for (const field of messageContract?.payloadFields ?? []) {
      if (envelope.payload[field] === undefined || envelope.payload[field] === null) {
        errors.push(`Message is missing required payload field ${field}.`);
      }
    }

    if (errors.length > 0) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.MESSAGE_ENVELOPE_INVALID,
        'Message envelope violates ARCH-005-08.',
        { errors }
      );
    }

    return envelope;
  }

  validateProcessing(recordInput, envelopeInput) {
    const record = recordInput instanceof MessageProcessingRecord
      ? recordInput
      : new MessageProcessingRecord(recordInput);
    const envelope = envelopeInput instanceof MessageEnvelope ? envelopeInput : new MessageEnvelope(envelopeInput);
    const messageContract = this.getContract(envelope.messageName);
    const errors = [];

    if (record.messageId !== envelope.messageId) errors.push('Message processing record must refer to the processed message.');
    if (!record.consumer) errors.push('Message processing record must identify a consumer.');
    if (!this.processingStatuses().includes(record.status)) errors.push(`Unsupported message processing status: ${record.status}.`);
    if (record.retryCount < 0) errors.push('Message retry count must not be negative.');
    if (messageContract?.duplicateHandlingRequired && record.idempotent !== true) {
      errors.push('Duplicate-sensitive message consumers must support idempotent processing.');
    }
    if (record.duplicateDetected && record.idempotent !== true) {
      errors.push('Duplicate delivery must be handled safely through idempotent processing.');
    }
    if (record.deadLettered && !record.failureReason) errors.push('Dead-lettered messages must include a failure reason.');
    if ([MESSAGE_PROCESSING_STATUSES.FAILED, MESSAGE_PROCESSING_STATUSES.DEAD_LETTERED, MESSAGE_PROCESSING_STATUSES.EXPIRED].includes(record.status) && !record.failureReason) {
      errors.push('Unsuccessful message processing must include a failure reason.');
    }
    if (record.status === MESSAGE_PROCESSING_STATUSES.ACKNOWLEDGED && record.acknowledged !== true) {
      errors.push('Acknowledged message processing must explicitly acknowledge the result.');
    }

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === MESSAGE_TELEMETRY_FIELDS.DESTINATION) continue;

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Message telemetry is missing field ${field}.`);
      }
    }

    if (record?.messageType && !this.messageTypes().includes(record.messageType)) {
      errors.push(`Unsupported telemetry message type: ${record.messageType}.`);
    }
    if (record?.deliveryDurationMs !== undefined && record.deliveryDurationMs < 0) {
      errors.push('Message delivery duration must not be negative.');
    }
    if (record?.processingDurationMs !== undefined && record.processingDurationMs < 0) {
      errors.push('Message processing duration must not be negative.');
    }
    if (record?.retryCount !== undefined && record.retryCount < 0) {
      errors.push('Message telemetry retry count must not be negative.');
    }
    if (record?.success === false && !record.failureReason) {
      errors.push('Failed message telemetry must include a failure reason.');
    }

    return validation(errors);
  }
}

function contract(messageName, messageType, style, producer, destination, routingStrategy, deliveryModel, payloadFields, duplicateHandlingRequired = false, expirationPolicy = undefined) {
  return new MessageContract({
    messageName,
    messageType,
    style,
    producer,
    destination,
    version: 'v1',
    routingStrategy,
    deliveryModel,
    payloadFields,
    retryPolicy: [
      MESSAGE_RETRY_POLICIES.EXPONENTIAL_BACKOFF,
      MESSAGE_RETRY_POLICIES.RETRY_LIMITS,
      MESSAGE_RETRY_POLICIES.DEAD_LETTER_ROUTING
    ],
    securityControls: [
      MESSAGE_SECURITY_CONTROLS.AUTHENTICATION,
      MESSAGE_SECURITY_CONTROLS.AUTHORIZATION,
      MESSAGE_SECURITY_CONTROLS.AUDITABILITY
    ],
    duplicateHandlingRequired,
    expirationPolicy
  });
}

function validation(errors) {
  return new MessageValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
