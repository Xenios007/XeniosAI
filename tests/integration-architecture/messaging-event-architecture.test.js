import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  MESSAGING_SECURITY_CONTROLS,
  MessagingEventArchitectureDescriptor,
  MessagingEventProfile,
  MessagingMessageProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('messaging event architecture exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new MessagingEventArchitectureDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(MESSAGING_EVENT_OBJECTIVES));
  assert.deepEqual(descriptor.messagingModel(), Object.values(MESSAGING_EVENT_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(MESSAGING_EVENT_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(MESSAGING_RELATIONSHIP_FLOW_STAGES));
});

test('messaging event architecture exposes categories, lifecycles, ownership, and operational metadata', () => {
  const descriptor = new MessagingEventArchitectureDescriptor();

  assert.ok(descriptor.eventCategories().includes(EVENT_CATEGORIES.AI_EVENTS));
  assert.ok(descriptor.messageCategories().includes(MESSAGE_CATEGORIES.WORKFLOW_INSTRUCTIONS));
  assert.deepEqual(descriptor.eventLifecycle(), Object.values(EVENT_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.messageLifecycle(), Object.values(MESSAGE_LIFECYCLE_STAGES));
  assert.ok(descriptor.eventOwnershipResponsibilities().includes(EVENT_OWNERSHIP_RESPONSIBILITIES.SCHEMA_EVOLUTION));
  assert.ok(descriptor.messageOwnershipResponsibilities().includes(MESSAGE_OWNERSHIP_RESPONSIBILITIES.SECURITY_CLASSIFICATION));
  assert.ok(descriptor.deliveryCharacteristics().includes(MESSAGING_DELIVERY_CHARACTERISTICS.SEQUENTIAL_PROCESSING));
  assert.ok(descriptor.reliabilityPrinciples().includes(MESSAGING_RELIABILITY_PRINCIPLES.IDEMPOTENT_PROCESSING));
  assert.ok(descriptor.observabilityTelemetry().includes(MESSAGING_OBSERVABILITY_TELEMETRY.CONSUMER_HEALTH));
  assert.ok(descriptor.securityControls().includes(MESSAGING_SECURITY_CONTROLS.ZERO_TRUST));
  assert.ok(descriptor.governanceActivities().includes(MESSAGING_GOVERNANCE_ACTIVITIES.LIFECYCLE_MANAGEMENT));
});

test('messaging event architecture validates immutable owned business events', () => {
  const descriptor = new MessagingEventArchitectureDescriptor();
  const valid = descriptor.validateEvent(
    new MessagingEventProfile({
      eventName: 'Reservation Confirmed',
      category: EVENT_CATEGORIES.BUSINESS_EVENTS,
      modelStages: Object.values(MESSAGING_EVENT_MODEL_STAGES),
      principles: Object.values(MESSAGING_EVENT_PRINCIPLES),
      lifecycleStages: Object.values(EVENT_LIFECYCLE_STAGES),
      ownershipResponsibilities: Object.values(EVENT_OWNERSHIP_RESPONSIBILITIES),
      reliabilityPrinciples: Object.values(MESSAGING_RELIABILITY_PRINCIPLES),
      observabilityTelemetry: Object.values(MESSAGING_OBSERVABILITY_TELEMETRY),
      securityControls: Object.values(MESSAGING_SECURITY_CONTROLS),
      governanceActivities: Object.values(MESSAGING_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateEvent({
    eventName: '',
    category: 'technical-log-event',
    modelStages: [MESSAGING_EVENT_MODEL_STAGES.PRODUCER],
    principles: [MESSAGING_EVENT_PRINCIPLES.DECOUPLED_COMMUNICATION],
    lifecycleStages: [EVENT_LIFECYCLE_STAGES.OCCURRED],
    ownershipResponsibilities: [EVENT_OWNERSHIP_RESPONSIBILITIES.EVENT_DEFINITION],
    reliabilityPrinciples: [MESSAGING_RELIABILITY_PRINCIPLES.DELIVERY_ASSURANCE],
    observabilityTelemetry: [MESSAGING_OBSERVABILITY_TELEMETRY.PUBLISHED_EVENTS],
    securityControls: [MESSAGING_SECURITY_CONTROLS.IDENTITY],
    governanceActivities: [MESSAGING_GOVERNANCE_ACTIVITIES.EVENT_DEFINITIONS],
    representsCompletedBusinessFact: false,
    immutableAfterPublication: false,
    traceableAcrossLifecycle: false,
    producerConsumerDecoupled: false,
    ownedByOriginatingDomain: false,
    technologyNeutral: false,
    brokerSpecific: true,
    serializationSpecific: true,
    vendorSpecific: true,
    exposesInternalImplementation: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Event must have a name/);
  assert.match(invalid.errors.join('\n'), /Unsupported event category/);
  assert.match(invalid.errors.join('\n'), /Message or Event/);
  assert.match(invalid.errors.join('\n'), /business-oriented-events/);
  assert.match(invalid.errors.join('\n'), /Published/);
  assert.match(invalid.errors.join('\n'), /business-meaning/);
  assert.match(invalid.errors.join('\n'), /retry-management/);
  assert.match(invalid.errors.join('\n'), /delivered-messages/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /message-contracts/);
  assert.match(invalid.errors.join('\n'), /facts that have already occurred/);
  assert.match(invalid.errors.join('\n'), /immutable business records/);
  assert.match(invalid.errors.join('\n'), /event brokers are outside ARCH-009-04 scope/);
  assert.match(invalid.errors.join('\n'), /Serialization formats are outside ARCH-009-04 scope/);
});

test('messaging event architecture validates intent-oriented messages', () => {
  const descriptor = new MessagingEventArchitectureDescriptor();
  const valid = descriptor.validateMessage(
    new MessagingMessageProfile({
      messageName: 'Process Payment',
      category: MESSAGE_CATEGORIES.COMMANDS,
      modelStages: Object.values(MESSAGING_EVENT_MODEL_STAGES),
      principles: Object.values(MESSAGING_EVENT_PRINCIPLES),
      lifecycleStages: Object.values(MESSAGE_LIFECYCLE_STAGES),
      ownershipResponsibilities: Object.values(MESSAGE_OWNERSHIP_RESPONSIBILITIES),
      deliveryCharacteristics: Object.values(MESSAGING_DELIVERY_CHARACTERISTICS),
      reliabilityPrinciples: Object.values(MESSAGING_RELIABILITY_PRINCIPLES),
      observabilityTelemetry: Object.values(MESSAGING_OBSERVABILITY_TELEMETRY),
      securityControls: Object.values(MESSAGING_SECURITY_CONTROLS),
      governanceActivities: Object.values(MESSAGING_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateMessage({
    messageName: '',
    category: 'database-write',
    modelStages: [MESSAGING_EVENT_MODEL_STAGES.PRODUCER],
    principles: [MESSAGING_EVENT_PRINCIPLES.DECOUPLED_COMMUNICATION],
    lifecycleStages: [MESSAGE_LIFECYCLE_STAGES.CREATED],
    ownershipResponsibilities: [MESSAGE_OWNERSHIP_RESPONSIBILITIES.COMMAND_DEFINITION],
    deliveryCharacteristics: [MESSAGING_DELIVERY_CHARACTERISTICS.IMMEDIATE_DELIVERY],
    reliabilityPrinciples: [MESSAGING_RELIABILITY_PRINCIPLES.DELIVERY_ASSURANCE],
    observabilityTelemetry: [MESSAGING_OBSERVABILITY_TELEMETRY.PUBLISHED_EVENTS],
    securityControls: [MESSAGING_SECURITY_CONTROLS.IDENTITY],
    governanceActivities: [MESSAGING_GOVERNANCE_ACTIVITIES.EVENT_DEFINITIONS],
    representsIntent: false,
    initiatesFutureAction: false,
    independentlyProcessed: false,
    producerConsumerDecoupled: false,
    orderingOnlyWhenBusinessRequired: false,
    technologyNeutral: false,
    brokerSpecific: true,
    serializationSpecific: true,
    vendorSpecific: true,
    exposesInternalImplementation: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Message must have a name/);
  assert.match(invalid.errors.join('\n'), /Unsupported message category/);
  assert.match(invalid.errors.join('\n'), /Validated/);
  assert.match(invalid.errors.join('\n'), /processing-expectations/);
  assert.match(invalid.errors.join('\n'), /deferred-processing/);
  assert.match(invalid.errors.join('\n'), /Messages must represent intent/);
  assert.match(invalid.errors.join('\n'), /future action/);
  assert.match(invalid.errors.join('\n'), /process messages independently/);
  assert.match(invalid.errors.join('\n'), /Ordering should only be enforced/);
  assert.match(invalid.errors.join('\n'), /vendor neutral/);
});

test('messaging event architecture reports future directions without implementing them', () => {
  const descriptor = new MessagingEventArchitectureDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_MESSAGING_EVENT_DIRECTIONS.AUTONOMOUS_EVENT_ROUTING));
  assert.ok(descriptor.futureDirections().includes(FUTURE_MESSAGING_EVENT_DIRECTIONS.SEMANTIC_EVENT_DISCOVERY));
  assert.ok(descriptor.futureDirections().includes(FUTURE_MESSAGING_EVENT_DIRECTIONS.SELF_HEALING_MESSAGING_INFRASTRUCTURE));
});

test('messaging event architecture assertion rejects incomplete metadata', () => {
  class IncompleteMessagingEventArchitectureDescriptor extends MessagingEventArchitectureDescriptor {
    eventCategories() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteMessagingEventArchitectureDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.MESSAGING_EVENT_ARCHITECTURE_INVALID &&
      error.details.errors.some(message => message.includes('event categories'))
  );
});

test('messaging event architecture descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('MessagingEventArchitectureDescriptor');

  assert.ok(descriptor instanceof MessagingEventArchitectureDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
