import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  EVENT_CHARACTERISTICS,
  EVENT_DELIVERY_STATUSES,
  EVENT_LIFECYCLE_STAGES,
  EVENT_RELIABILITY_CONCERNS,
  EVENT_TELEMETRY_FIELDS,
  EXECUTION_PARTICIPANTS
} from '../constants.js';
import { EventConsumptionRecord } from '../contracts/event-consumption-record.js';
import { EventDefinition } from '../contracts/event-definition.js';
import { EventEnvelope } from '../contracts/event-envelope.js';
import { EventLifecycleStage } from '../contracts/event-lifecycle-stage.js';
import { EventValidationResult } from '../contracts/event-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [EVENT_LIFECYCLE_STAGES.BUSINESS_OPERATION_COMPLETED, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Complete the authoritative business operation before event publication.'],
  [EVENT_LIFECYCLE_STAGES.CREATE_EVENT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Create an immutable event describing the completed business fact.'],
  [EVENT_LIFECYCLE_STAGES.PUBLISH_EVENT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Publish without knowledge of downstream consumers.'],
  [EVENT_LIFECYCLE_STAGES.DISTRIBUTE_EVENT, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER, 'Route the event through messaging infrastructure.'],
  [EVENT_LIFECYCLE_STAGES.CONSUME_EVENT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Receive relevant events independently.'],
  [EVENT_LIFECYCLE_STAGES.EXECUTE_LOCAL_PROCESSING, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Process events within the consumer ownership boundary.'],
  [EVENT_LIFECYCLE_STAGES.COMPLETE_PROCESSING, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Record completion, failures, retry metadata, and telemetry.']
]);

const DEFAULT_EVENTS = Object.freeze([
  event('ReservationCreated', 'Booking Service', 'reservationId', ['reservationId', 'guestId', 'propertyId', 'checkIn', 'checkOut', 'timestamp']),
  event('ReservationCancelled', 'Booking Service', 'reservationId', ['reservationId', 'timestamp']),
  event('GuestRegistered', 'Guest Service', 'guestId', ['guestId', 'timestamp']),
  event('PaymentCompleted', 'Payment Service', 'paymentId', ['paymentId', 'amount', 'timestamp']),
  event('PropertyUpdated', 'Property Service', 'propertyId', ['propertyId', 'timestamp']),
  event('CalendarUpdated', 'Calendar Service', 'propertyId', ['propertyId', 'timestamp']),
  event('NotificationSent', 'Notification Service', 'notificationId', ['notificationId', 'recipient', 'timestamp']),
  event('PricingCalculated', 'Pricing Service', 'pricingId', ['pricingId', 'propertyId', 'timestamp'])
]);

export class EventFlowDescriptor {
  constructor({ events = DEFAULT_EVENTS } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new EventLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.events = new Map();

    for (const eventDefinition of events) {
      this.registerEvent(eventDefinition);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  characteristics() {
    return Object.freeze(Object.values(EVENT_CHARACTERISTICS));
  }

  deliveryStatuses() {
    return Object.freeze(Object.values(EVENT_DELIVERY_STATUSES));
  }

  reliabilityConcerns() {
    return Object.freeze(Object.values(EVENT_RELIABILITY_CONCERNS));
  }

  telemetryFields() {
    return Object.freeze(Object.values(EVENT_TELEMETRY_FIELDS));
  }

  listEvents() {
    return Object.freeze([...this.events.values()]);
  }

  registerEvent(eventInput) {
    const eventDefinition = eventInput instanceof EventDefinition
      ? eventInput
      : new EventDefinition(eventInput);
    const result = this.validateEventDefinition(eventDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EVENT_DEFINITION_INVALID,
        'Event definition violates ARCH-005-04.',
        { errors: result.errors }
      );
    }

    this.events.set(eventDefinition.eventName, eventDefinition);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EVENT_STAGE_NOT_FOUND,
        `Event lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getEvent(eventName) {
    return this.events.get(eventName);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Event lifecycle must include ${expectedStages.length} stages in canonical order.`);
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
        DATA_FLOW_ERROR_CODES.EVENT_LIFECYCLE_INVALID,
        'Event lifecycle does not match ARCH-005-04.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateEventDefinition(eventInput) {
    const eventDefinition = eventInput instanceof EventDefinition
      ? eventInput
      : new EventDefinition(eventInput);
    const errors = [];

    if (!eventDefinition.eventName) errors.push('Event must have a name.');
    if (!eventDefinition.publisher) errors.push('Event must have one authoritative publisher.');
    if (Array.isArray(eventDefinition.publisher)) errors.push('Event publisher must not be shared across multiple services.');
    if (!eventDefinition.businessIdentifier) errors.push('Event must include a business identifier.');
    if (eventDefinition.requiredPayloadFields.length === 0) errors.push('Event must define required payload fields.');
    if (!eventDefinition.supportedVersions.includes(eventDefinition.version)) errors.push('Event version must be supported by its definition.');

    return validation(errors);
  }

  createEvent(eventInput) {
    const envelope = eventInput instanceof EventEnvelope ? eventInput : new EventEnvelope(eventInput);
    const definition = this.getEvent(envelope.eventName);
    const errors = [];

    if (!definition) {
      errors.push(`Event definition is not registered: ${envelope.eventName}.`);
    }

    if (definition && envelope.sourceService !== definition.publisher) {
      errors.push(`Event ${envelope.eventName} must be published by ${definition.publisher}.`);
    }

    if (envelope.completedBusinessFact !== true) {
      errors.push('Events must describe completed business facts, not future intentions.');
    }

    if (envelope.publisherAwareOfConsumers === true) {
      errors.push('Event publishers must remain unaware of consumers.');
    }

    if (definition && !definition.supportedVersions.includes(envelope.eventVersion)) {
      errors.push(`Event version ${envelope.eventVersion} is not supported for ${envelope.eventName}.`);
    }

    for (const field of definition?.requiredPayloadFields ?? []) {
      if (envelope.payload[field] === undefined || envelope.payload[field] === null) {
        errors.push(`Event ${envelope.eventName} is missing required payload field ${field}.`);
      }
    }

    if (errors.length > 0) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.EVENT_PUBLICATION_INVALID,
        'Event envelope violates ARCH-005-04.',
        { errors }
      );
    }

    return envelope;
  }

  validateConsumption(consumptionInput, eventInput) {
    const consumption = consumptionInput instanceof EventConsumptionRecord
      ? consumptionInput
      : new EventConsumptionRecord(consumptionInput);
    const envelope = eventInput instanceof EventEnvelope ? eventInput : new EventEnvelope(eventInput);
    const errors = [];

    if (consumption.eventId !== envelope.eventId || consumption.eventName !== envelope.eventName) {
      errors.push('Consumer record must refer to the consumed event.');
    }

    if (!consumption.supportedVersions.includes(envelope.eventVersion)) {
      errors.push(`Consumer ${consumption.consumer} does not support event version ${envelope.eventVersion}.`);
    }

    if (consumption.localProcessingOnly !== true || consumption.modifiedForeignBusinessState === true) {
      errors.push('Event consumers must process locally and must not modify another service business state.');
    }

    if (!this.deliveryStatuses().includes(consumption.processingStatus)) {
      errors.push(`Unsupported event processing status: ${consumption.processingStatus}.`);
    }

    if (
      consumption.processingStatus !== EVENT_DELIVERY_STATUSES.PROCESSING_COMPLETED &&
      !consumption.failureInformation
    ) {
      errors.push('Unsuccessful event consumption must include failure information.');
    }

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === EVENT_TELEMETRY_FIELDS.FAILURE_INFORMATION) continue;

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Event telemetry is missing field ${field}.`);
      }
    }

    if (record?.processingDurationMs !== undefined && record.processingDurationMs < 0) {
      errors.push('Event processing duration must not be negative.');
    }

    if (record?.consumerCount !== undefined && record.consumerCount < 0) {
      errors.push('Event consumer count must not be negative.');
    }

    if (record?.deliveryStatus && !this.deliveryStatuses().includes(record.deliveryStatus)) {
      errors.push(`Unsupported event delivery status: ${record.deliveryStatus}.`);
    }

    if (
      record?.deliveryStatus &&
      [EVENT_DELIVERY_STATUSES.PUBLICATION_FAILED, EVENT_DELIVERY_STATUSES.DELIVERY_FAILED, EVENT_DELIVERY_STATUSES.CONSUMER_FAILED, EVENT_DELIVERY_STATUSES.INVALID_PAYLOAD, EVENT_DELIVERY_STATUSES.VERSION_MISMATCH].includes(record.deliveryStatus) &&
      !record.failureInformation
    ) {
      errors.push('Failed event telemetry must include failure information.');
    }

    return validation(errors);
  }
}

function event(eventName, publisher, businessIdentifier, requiredPayloadFields) {
  return new EventDefinition({
    eventName,
    publisher,
    businessIdentifier,
    requiredPayloadFields,
    version: 1,
    supportedVersions: [1]
  });
}

function validation(errors) {
  return new EventValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
