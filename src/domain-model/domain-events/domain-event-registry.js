import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGGREGATE_NAMES,
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_EVENT_CHARACTERISTICS,
  DOMAIN_EVENT_EVOLUTION_RULES,
  DOMAIN_EVENT_NAMES,
  DOMAIN_EVENT_PUBLICATION_RULES,
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_DOMAIN_EVENT_CANDIDATES
} from '../constants.js';
import { DomainEventConsumption } from '../contracts/domain-event-consumption.js';
import { DomainEventDefinition } from '../contracts/domain-event-definition.js';
import { DomainEventOrdering } from '../contracts/domain-event-ordering.js';
import { DomainEventRecord } from '../contracts/domain-event-record.js';
import { DomainEventValidationResult } from '../contracts/domain-event-validation-result.js';

const DEFAULT_DOMAIN_EVENTS = Object.freeze([
  event(DOMAIN_EVENT_NAMES.RESERVATION_CREATED, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', AGGREGATE_NAMES.RESERVATION, 'Reservation lifecycle started', 'Reservation ID', ['reservationId', 'guestId', 'propertyId', 'occurredAt'], ['Pricing', 'Payment', 'Notification', 'Analytics', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', AGGREGATE_NAMES.RESERVATION, 'Reservation lifecycle confirmed', 'Reservation ID', ['reservationId', 'occurredAt'], ['Notification', 'Analytics', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.RESERVATION_MODIFIED, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', AGGREGATE_NAMES.RESERVATION, 'Reservation details changed', 'Reservation ID', ['reservationId', 'occurredAt'], ['Pricing', 'Notification', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.RESERVATION_CANCELLED, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', AGGREGATE_NAMES.RESERVATION, 'Reservation lifecycle cancelled', 'Reservation ID', ['reservationId', 'occurredAt'], ['Payment', 'Notification', 'Analytics', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_IN, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', AGGREGATE_NAMES.RESERVATION, 'Guest checked in to reservation', 'Reservation ID', ['reservationId', 'occurredAt'], ['Notification', 'Analytics']),
  event(DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_OUT, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', AGGREGATE_NAMES.RESERVATION, 'Guest checked out from reservation', 'Reservation ID', ['reservationId', 'occurredAt'], ['Notification', 'Analytics']),
  event(DOMAIN_EVENT_NAMES.PAYMENT_INITIATED, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', AGGREGATE_NAMES.PAYMENT, 'Payment lifecycle started', 'Payment ID', ['paymentId', 'reservationId', 'occurredAt'], ['Workflow']),
  event(DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', AGGREGATE_NAMES.PAYMENT, 'Payment authorization completed', 'Payment ID', ['paymentId', 'reservationId', 'occurredAt'], ['Reservation', 'Notification', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.PAYMENT_CAPTURED, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', AGGREGATE_NAMES.PAYMENT, 'Payment capture completed', 'Payment ID', ['paymentId', 'amount', 'occurredAt'], ['Reservation', 'Analytics']),
  event(DOMAIN_EVENT_NAMES.PAYMENT_FAILED, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', AGGREGATE_NAMES.PAYMENT, 'Payment attempt failed', 'Payment ID', ['paymentId', 'occurredAt'], ['Reservation', 'Notification', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.PAYMENT_REFUNDED, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', AGGREGATE_NAMES.PAYMENT, 'Payment refund completed', 'Payment ID', ['paymentId', 'amount', 'occurredAt'], ['Reservation', 'Notification', 'Analytics']),
  event(DOMAIN_EVENT_NAMES.GUEST_REGISTERED, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', AGGREGATE_NAMES.GUEST, 'Guest identity registered', 'Guest ID', ['guestId', 'occurredAt'], ['Reservation', 'Notification']),
  event(DOMAIN_EVENT_NAMES.GUEST_UPDATED, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', AGGREGATE_NAMES.GUEST, 'Guest profile updated', 'Guest ID', ['guestId', 'occurredAt'], ['Reservation', 'Notification']),
  event(DOMAIN_EVENT_NAMES.GUEST_PROFILE_CHANGED, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', AGGREGATE_NAMES.GUEST, 'Guest profile details changed', 'Guest ID', ['guestId', 'occurredAt'], ['Reservation']),
  event(DOMAIN_EVENT_NAMES.GUEST_PREFERENCE_UPDATED, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', AGGREGATE_NAMES.GUEST, 'Guest preferences updated', 'Guest ID', ['guestId', 'occurredAt'], ['Notification']),
  event(DOMAIN_EVENT_NAMES.PROPERTY_REGISTERED, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', AGGREGATE_NAMES.PROPERTY, 'Property registered for business operations', 'Property ID', ['propertyId', 'occurredAt'], ['Reservation', 'Knowledge']),
  event(DOMAIN_EVENT_NAMES.PROPERTY_UPDATED, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', AGGREGATE_NAMES.PROPERTY, 'Property business information updated', 'Property ID', ['propertyId', 'occurredAt'], ['Reservation', 'Knowledge']),
  event(DOMAIN_EVENT_NAMES.AVAILABILITY_CHANGED, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', AGGREGATE_NAMES.PROPERTY, 'Property availability changed', 'Property ID', ['propertyId', 'occurredAt'], ['Reservation', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.CAPACITY_UPDATED, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', AGGREGATE_NAMES.PROPERTY, 'Property capacity updated', 'Property ID', ['propertyId', 'occurredAt'], ['Reservation']),
  event(DOMAIN_EVENT_NAMES.MAINTENANCE_SCHEDULED, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', AGGREGATE_NAMES.PROPERTY, 'Property maintenance scheduled', 'Property ID', ['propertyId', 'occurredAt'], ['Reservation', 'Workflow']),
  event(DOMAIN_EVENT_NAMES.NOTIFICATION_QUEUED, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', 'Notification', 'Notification queued for delivery', 'Notification ID', ['notificationId', 'occurredAt'], ['Workflow']),
  event(DOMAIN_EVENT_NAMES.NOTIFICATION_SENT, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', 'Notification', 'Notification sent through selected channel', 'Notification ID', ['notificationId', 'occurredAt'], ['Workflow', 'Analytics']),
  event(DOMAIN_EVENT_NAMES.NOTIFICATION_DELIVERED, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', 'Notification', 'Notification delivery completed', 'Notification ID', ['notificationId', 'occurredAt'], ['Workflow', 'Analytics']),
  event(DOMAIN_EVENT_NAMES.NOTIFICATION_FAILED, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', 'Notification', 'Notification delivery failed', 'Notification ID', ['notificationId', 'occurredAt'], ['Workflow']),
  event(DOMAIN_EVENT_NAMES.KNOWLEDGE_INDEXED, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Knowledge Item', 'Knowledge indexed for retrieval', 'Knowledge Item ID', ['knowledgeItemId', 'occurredAt'], ['AI Intelligence']),
  event(DOMAIN_EVENT_NAMES.KNOWLEDGE_UPDATED, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Knowledge Item', 'Knowledge updated for retrieval', 'Knowledge Item ID', ['knowledgeItemId', 'occurredAt'], ['AI Intelligence']),
  event(DOMAIN_EVENT_NAMES.KNOWLEDGE_REMOVED, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Knowledge Item', 'Knowledge removed from retrieval', 'Knowledge Item ID', ['knowledgeItemId', 'occurredAt'], ['AI Intelligence']),
  event(DOMAIN_EVENT_NAMES.KNOWLEDGE_CLASSIFIED, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Knowledge Item', 'Knowledge classification completed', 'Knowledge Item ID', ['knowledgeItemId', 'occurredAt'], ['AI Intelligence']),
  event(DOMAIN_EVENT_NAMES.WORKFLOW_STARTED, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', AGGREGATE_NAMES.WORKFLOW, 'Workflow execution started', 'Workflow ID', ['workflowId', 'occurredAt'], ['Reservation', 'Payment', 'Notification']),
  event(DOMAIN_EVENT_NAMES.WORKFLOW_CONTINUED, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', AGGREGATE_NAMES.WORKFLOW, 'Workflow execution continued', 'Workflow ID', ['workflowId', 'occurredAt'], ['Reservation', 'Payment', 'Notification']),
  event(DOMAIN_EVENT_NAMES.WORKFLOW_COMPLETED, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', AGGREGATE_NAMES.WORKFLOW, 'Workflow execution completed', 'Workflow ID', ['workflowId', 'occurredAt'], ['Reservation', 'Payment', 'Notification']),
  event(DOMAIN_EVENT_NAMES.WORKFLOW_FAILED, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', AGGREGATE_NAMES.WORKFLOW, 'Workflow execution failed', 'Workflow ID', ['workflowId', 'occurredAt'], ['Reservation', 'Payment', 'Notification']),
  event(DOMAIN_EVENT_NAMES.COMPENSATION_STARTED, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', AGGREGATE_NAMES.WORKFLOW, 'Workflow compensation started', 'Workflow ID', ['workflowId', 'occurredAt'], ['Reservation', 'Payment']),
  event(DOMAIN_EVENT_NAMES.COMPENSATION_COMPLETED, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', AGGREGATE_NAMES.WORKFLOW, 'Workflow compensation completed', 'Workflow ID', ['workflowId', 'occurredAt'], ['Reservation', 'Payment'])
]);

const AGGREGATE_EVENT_ORDERS = Object.freeze({
  [AGGREGATE_NAMES.RESERVATION]: Object.freeze([
    DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
    DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED,
    DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_IN,
    DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_OUT
  ]),
  [AGGREGATE_NAMES.PAYMENT]: Object.freeze([
    DOMAIN_EVENT_NAMES.PAYMENT_INITIATED,
    DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED,
    DOMAIN_EVENT_NAMES.PAYMENT_CAPTURED,
    DOMAIN_EVENT_NAMES.PAYMENT_REFUNDED
  ]),
  [AGGREGATE_NAMES.WORKFLOW]: Object.freeze([
    DOMAIN_EVENT_NAMES.WORKFLOW_STARTED,
    DOMAIN_EVENT_NAMES.WORKFLOW_CONTINUED,
    DOMAIN_EVENT_NAMES.WORKFLOW_COMPLETED
  ])
});

export class DomainEventRegistry {
  constructor({ domainEvents = DEFAULT_DOMAIN_EVENTS } = {}) {
    this.domainEvents = new Map();

    for (const domainEvent of domainEvents) {
      this.registerEvent(domainEvent);
    }
  }

  characteristics() {
    return Object.freeze(Object.values(DOMAIN_EVENT_CHARACTERISTICS));
  }

  publicationRules() {
    return Object.freeze(Object.values(DOMAIN_EVENT_PUBLICATION_RULES));
  }

  evolutionRules() {
    return Object.freeze(Object.values(DOMAIN_EVENT_EVOLUTION_RULES));
  }

  futureCandidates() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_EVENT_CANDIDATES));
  }

  listEvents() {
    return Object.freeze([...this.domainEvents.values()]);
  }

  registerEvent(eventInput) {
    const domainEvent = eventInput instanceof DomainEventDefinition
      ? eventInput
      : new DomainEventDefinition(eventInput);
    const result = this.validateDefinition(domainEvent);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_EVENT_DEFINITION_INVALID,
        'Domain event definition violates ARCH-006-07.',
        { errors: result.errors }
      );
    }

    this.domainEvents.set(domainEvent.eventName, domainEvent);
    return this;
  }

  getEvent(eventName) {
    const domainEvent = this.domainEvents.get(eventName);

    if (!domainEvent) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_EVENT_NOT_FOUND,
        `Domain Event "${eventName}" is not defined.`
      );
    }

    return domainEvent;
  }

  validateDefinition(eventInput) {
    const domainEvent = eventInput instanceof DomainEventDefinition
      ? eventInput
      : new DomainEventDefinition(eventInput);
    const errors = [];

    if (!domainEvent.eventName) errors.push('Domain Event must have a business name.');
    if (!isPastTenseBusinessName(domainEvent.eventName)) errors.push('Domain Events should be expressed using past tense business language.');
    if (!domainEvent.owningContext) errors.push('Domain Event must be owned by one bounded context.');
    if (Array.isArray(domainEvent.owningContext)) errors.push('Domain Event owning context must not be shared.');
    if (!domainEvent.publisherService) errors.push('Domain Event must have exactly one publisher.');
    if (Array.isArray(domainEvent.publisherService) || domainEvent.publisherShared) errors.push('Domain Event publisher must not be shared.');
    if (!domainEvent.aggregateName) errors.push('Domain Event must identify the Aggregate or domain source that produced the fact.');
    if (!domainEvent.businessMeaning) errors.push('Domain Event must describe business meaning.');
    if (!domainEvent.businessIdentifier) errors.push('Domain Event must include a business identifier.');
    if (domainEvent.requiredFacts.length === 0) errors.push('Domain Event must define required business facts.');
    if (domainEvent.immutable !== true) errors.push('Domain Events must be immutable.');
    if (domainEvent.completedFact !== true) errors.push('Domain Events represent completed business facts.');
    if (domainEvent.implementationDetail === true) errors.push('Domain Events must avoid implementation details.');
    if (!domainEvent.supportedVersions.includes(domainEvent.version)) errors.push('Domain Event version must be supported by its definition.');
    if (containsTechnicalTerm(domainEvent.eventName) || containsTechnicalTerm(domainEvent.businessMeaning)) {
      errors.push('Domain Events must use ubiquitous language rather than technical implementation terms.');
    }

    return validation(errors);
  }

  publish(recordInput) {
    const record = recordInput instanceof DomainEventRecord ? recordInput : new DomainEventRecord(recordInput);
    const result = this.validatePublication(record);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_EVENT_PUBLICATION_INVALID,
        'Domain event publication violates ARCH-006-07.',
        { errors: result.errors }
      );
    }

    return record;
  }

  validatePublication(recordInput) {
    const record = recordInput instanceof DomainEventRecord ? recordInput : new DomainEventRecord(recordInput);
    const definition = this.domainEvents.get(record.eventName);
    const errors = [];

    if (!record.eventId) errors.push('Domain Event record must have an event identity.');
    if (!definition) errors.push(`Domain Event definition is not registered: ${record.eventName}.`);
    if (definition && record.eventVersion !== definition.version && !definition.supportedVersions.includes(record.eventVersion)) {
      errors.push(`Domain Event version ${record.eventVersion} is not supported for ${record.eventName}.`);
    }
    if (definition && record.owningContext !== definition.owningContext) {
      errors.push(`Only ${definition.owningContext} context may publish ${record.eventName}.`);
    }
    if (definition && record.publisherService !== definition.publisherService) {
      errors.push(`Domain Event ${record.eventName} must be published by ${definition.publisherService}.`);
    }
    if (definition && record.aggregateName !== definition.aggregateName) {
      errors.push(`Domain Event ${record.eventName} must originate from ${definition.aggregateName}.`);
    }
    if (!record.aggregateId) errors.push('Domain Event record must include the Aggregate business identity.');
    if (!record.occurredAt) errors.push('Domain Event record must include when the business fact occurred.');
    if (record.completedBusinessFact !== true) errors.push('Domain Event records what happened, not what should happen.');
    if (record.businessConsistencyAchieved !== true) errors.push('Domain Events are published only after business consistency is achieved.');
    if (record.transactionCommitted !== true) errors.push('Domain Events are published only after successful transaction completion.');
    if (record.publisherAwareOfConsumers === true) errors.push('Domain Event publishers must remain unaware of downstream consumers.');
    if (record.mutable === true) errors.push('Domain Event records must never be modified after publication.');

    for (const fact of definition?.requiredFacts ?? []) {
      if (record.facts[fact] === undefined || record.facts[fact] === null) {
        errors.push(`Domain Event ${record.eventName} is missing required fact ${fact}.`);
      }
    }

    return validation(errors);
  }

  validateConsumption(consumptionInput) {
    const consumption = consumptionInput instanceof DomainEventConsumption
      ? consumptionInput
      : new DomainEventConsumption(consumptionInput);
    const definition = this.domainEvents.get(consumption.eventName);
    const errors = [];

    if (!definition) errors.push(`Domain Event consumption references unknown event: ${consumption.eventName}.`);
    if (!consumption.consumerContext) errors.push('Domain Event consumer must identify its bounded context.');
    if (!consumption.consumerService) errors.push('Domain Event consumer must identify its service.');
    if (definition && consumption.consumerContext === definition.owningContext) {
      errors.push('Domain Event consumers should represent collaboration outside the publishing ownership boundary.');
    }
    if (definition && !consumption.supportedVersions.includes(definition.version)) {
      errors.push(`Domain Event consumer must support version ${definition.version} of ${consumption.eventName}.`);
    }
    if (consumption.independentlyRelevant !== true) errors.push('Each consumer must independently decide whether a Domain Event is relevant.');
    if (consumption.localDecisionOnly !== true) errors.push('Domain Event consumption must preserve local business decision ownership.');
    if (consumption.modifiesPublisherState === true) errors.push('Domain Event consumers must not modify publisher-owned business state.');
    if (consumption.assumesGlobalOrdering === true) errors.push('Consumers must not assume global ordering across Aggregates.');
    if (consumption.requiredAction === true) errors.push('A Domain Event records a completed fact, not a required downstream action.');

    return validation(errors);
  }

  validateOrdering(orderingInput) {
    const ordering = orderingInput instanceof DomainEventOrdering
      ? orderingInput
      : new DomainEventOrdering(orderingInput);
    const expectedOrder = AGGREGATE_EVENT_ORDERS[ordering.aggregateName];
    const errors = [];

    if (!ordering.aggregateName) errors.push('Domain Event ordering must identify an Aggregate.');
    if (ordering.assumesGlobalOrdering === true) errors.push('Global ordering across Aggregates should not be assumed.');
    if (ordering.preservesAggregateOrder !== true) errors.push('Business ordering within one Aggregate should be preserved.');
    if (expectedOrder) {
      const positions = ordering.orderedEvents.map((eventName) => expectedOrder.indexOf(eventName));
      if (positions.some((position) => position === -1)) {
        errors.push(`Domain Event ordering includes events outside ${ordering.aggregateName}.`);
      }
      if (!isNonDecreasing(positions)) {
        errors.push(`Domain Event ordering for ${ordering.aggregateName} must preserve business lifecycle order.`);
      }
    }

    return validation(errors);
  }
}

function event(eventName, owningContext, publisherService, aggregateName, businessMeaning, businessIdentifier, requiredFacts, consumers = []) {
  return new DomainEventDefinition({
    eventName,
    owningContext,
    publisherService,
    aggregateName,
    businessMeaning,
    businessIdentifier,
    requiredFacts,
    consumers
  });
}

function validation(errors) {
  return new DomainEventValidationResult({
    isValid: errors.length === 0,
    errors
  });
}

function isPastTenseBusinessName(value) {
  return /\b(Created|Confirmed|Modified|Cancelled|Checked In|Checked Out|Initiated|Authorized|Captured|Failed|Refunded|Registered|Updated|Changed|Scheduled|Queued|Sent|Delivered|Indexed|Removed|Classified|Started|Continued|Completed)\b$/.test(String(value ?? ''));
}

function containsTechnicalTerm(value) {
  return /\b(database|row|table|cache|http|api|queue|broker|payload|serialization|transport|middleware)\b/i.test(String(value ?? ''));
}

function isNonDecreasing(values) {
  return values.every((value, index) => index === 0 || value >= values[index - 1]);
}
