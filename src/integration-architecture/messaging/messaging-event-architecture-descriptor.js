import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  EVENT_CATEGORIES,
  EVENT_LIFECYCLE_STAGES,
  EVENT_OWNERSHIP_RESPONSIBILITIES,
  FUTURE_MESSAGING_EVENT_DIRECTIONS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  MESSAGE_CATEGORIES,
  MESSAGE_LIFECYCLE_STAGES,
  MESSAGE_OWNERSHIP_RESPONSIBILITIES,
  MESSAGING_DELIVERY_CHARACTERISTICS,
  MESSAGING_EVENT_MODEL_STAGES,
  MESSAGING_EVENT_OBJECTIVES,
  MESSAGING_EVENT_PRINCIPLES,
  MESSAGING_GOVERNANCE_ACTIVITIES,
  MESSAGING_OBSERVABILITY_TELEMETRY,
  MESSAGING_RELATIONSHIP_FLOW_STAGES,
  MESSAGING_RELIABILITY_PRINCIPLES,
  MESSAGING_SECURITY_CONTROLS
} from '../constants.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';
import { MessagingEventProfile } from '../contracts/messaging-event-profile.js';
import { MessagingMessageProfile } from '../contracts/messaging-message-profile.js';

const MODEL = Object.freeze(Object.values(MESSAGING_EVENT_MODEL_STAGES));
const EVENT_LIFECYCLE = Object.freeze(Object.values(EVENT_LIFECYCLE_STAGES));
const MESSAGE_LIFECYCLE = Object.freeze(Object.values(MESSAGE_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(MESSAGING_RELATIONSHIP_FLOW_STAGES));

export class MessagingEventArchitectureDescriptor {
  objectives() {
    return Object.freeze(Object.values(MESSAGING_EVENT_OBJECTIVES));
  }

  messagingModel() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(MESSAGING_EVENT_PRINCIPLES));
  }

  eventCategories() {
    return Object.freeze(Object.values(EVENT_CATEGORIES));
  }

  messageCategories() {
    return Object.freeze(Object.values(MESSAGE_CATEGORIES));
  }

  eventLifecycle() {
    return EVENT_LIFECYCLE;
  }

  messageLifecycle() {
    return MESSAGE_LIFECYCLE;
  }

  eventOwnershipResponsibilities() {
    return Object.freeze(Object.values(EVENT_OWNERSHIP_RESPONSIBILITIES));
  }

  messageOwnershipResponsibilities() {
    return Object.freeze(Object.values(MESSAGE_OWNERSHIP_RESPONSIBILITIES));
  }

  deliveryCharacteristics() {
    return Object.freeze(Object.values(MESSAGING_DELIVERY_CHARACTERISTICS));
  }

  reliabilityPrinciples() {
    return Object.freeze(Object.values(MESSAGING_RELIABILITY_PRINCIPLES));
  }

  observabilityTelemetry() {
    return Object.freeze(Object.values(MESSAGING_OBSERVABILITY_TELEMETRY));
  }

  securityControls() {
    return Object.freeze(Object.values(MESSAGING_SECURITY_CONTROLS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(MESSAGING_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_MESSAGING_EVENT_DIRECTIONS));
  }

  validateEvent(profileInput) {
    const profile = profileInput instanceof MessagingEventProfile
      ? profileInput
      : new MessagingEventProfile(profileInput);
    const errors = [];

    if (!profile.eventName) errors.push('Event must have a name.');
    if (!this.eventCategories().includes(profile.category)) errors.push(`Unsupported event category: ${profile.category}.`);
    appendMissing(errors, profile.modelStages, this.messagingModel(), 'Messaging model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Messaging principles should include');
    appendMissing(errors, profile.lifecycleStages, this.eventLifecycle(), 'Event lifecycle must include');
    appendMissing(errors, profile.ownershipResponsibilities, this.eventOwnershipResponsibilities(), 'Event ownership should include');
    appendMissing(errors, profile.reliabilityPrinciples, this.reliabilityPrinciples(), 'Messaging reliability should include');
    appendMissing(errors, profile.observabilityTelemetry, this.observabilityTelemetry(), 'Messaging observability should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'Messaging security must include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Messaging governance should include');
    if (profile.representsCompletedBusinessFact !== true) errors.push('Events must represent meaningful facts that have already occurred.');
    if (profile.immutableAfterPublication !== true) errors.push('Published events should be treated as immutable business records.');
    if (profile.traceableAcrossLifecycle !== true) errors.push('Events should remain traceable throughout their lifecycle.');
    if (profile.producerConsumerDecoupled !== true) errors.push('Messaging must preserve producer and consumer decoupling.');
    if (profile.ownedByOriginatingDomain !== true) errors.push('Events should remain owned by their originating domain.');
    appendTechnologyNeutrality(errors, profile);

    return validation(errors);
  }

  validateMessage(profileInput) {
    const profile = profileInput instanceof MessagingMessageProfile
      ? profileInput
      : new MessagingMessageProfile(profileInput);
    const errors = [];

    if (!profile.messageName) errors.push('Message must have a name.');
    if (!this.messageCategories().includes(profile.category)) errors.push(`Unsupported message category: ${profile.category}.`);
    appendMissing(errors, profile.modelStages, this.messagingModel(), 'Messaging model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Messaging principles should include');
    appendMissing(errors, profile.lifecycleStages, this.messageLifecycle(), 'Message lifecycle must include');
    appendMissing(errors, profile.ownershipResponsibilities, this.messageOwnershipResponsibilities(), 'Message ownership should include');
    appendMissing(errors, profile.deliveryCharacteristics, this.deliveryCharacteristics(), 'Delivery characteristics should include');
    appendMissing(errors, profile.reliabilityPrinciples, this.reliabilityPrinciples(), 'Messaging reliability should include');
    appendMissing(errors, profile.observabilityTelemetry, this.observabilityTelemetry(), 'Messaging observability should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'Messaging security must include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Messaging governance should include');
    if (profile.representsIntent !== true) errors.push('Messages must represent intent rather than completed business facts.');
    if (profile.initiatesFutureAction !== true) errors.push('Messages should request future action.');
    if (profile.independentlyProcessed !== true) errors.push('Consumers should process messages independently.');
    if (profile.producerConsumerDecoupled !== true) errors.push('Messaging must preserve producer and consumer decoupling.');
    if (profile.orderingOnlyWhenBusinessRequired !== true) errors.push('Ordering should only be enforced when business semantics require it.');
    appendTechnologyNeutrality(errors, profile);

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Messaging & Event Architecture must include all documented objectives.');
    if (this.messagingModel().length !== 4) errors.push('Messaging & Event Architecture must include the documented messaging model.');
    if (this.principles().length !== 4) errors.push('Messaging & Event Architecture must include documented messaging principles.');
    if (this.eventCategories().length !== 4) errors.push('Messaging & Event Architecture must include documented event categories.');
    if (this.messageCategories().length !== 6) errors.push('Messaging & Event Architecture must include documented message categories.');
    if (this.eventLifecycle().length !== 6) errors.push('Messaging & Event Architecture must include the documented event lifecycle.');
    if (this.messageLifecycle().length !== 6) errors.push('Messaging & Event Architecture must include the documented message lifecycle.');
    if (this.reliabilityPrinciples().length !== 6) errors.push('Messaging & Event Architecture must include documented reliability principles.');
    if (this.observabilityTelemetry().length !== 7) errors.push('Messaging & Event Architecture must include documented observability telemetry.');
    if (this.securityControls().length !== 7) errors.push('Messaging & Event Architecture must include documented security controls.');
    if (this.governanceActivities().length !== 7) errors.push('Messaging & Event Architecture must include documented governance activities.');
    if (this.relationshipFlow().length !== 5) errors.push('Messaging & Event Architecture must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('Messaging & Event Architecture must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.MESSAGING_EVENT_ARCHITECTURE_INVALID,
        'Messaging & Event Architecture violates ARCH-009-04.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendTechnologyNeutrality(errors, profile) {
  if (profile.technologyNeutral !== true) errors.push('Messaging & Event Architecture must remain technology neutral.');
  if (profile.brokerSpecific === true) errors.push('Specific messaging platforms and event brokers are outside ARCH-009-04 scope.');
  if (profile.serializationSpecific === true) errors.push('Serialization formats are outside ARCH-009-04 scope.');
  if (profile.vendorSpecific === true) errors.push('Messaging & Event Architecture must remain vendor neutral.');
  if (profile.exposesInternalImplementation === true) errors.push('Producers and consumers must not depend on internal implementation details.');
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new IntegrationArchitectureValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
