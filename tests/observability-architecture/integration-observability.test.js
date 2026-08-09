import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_OBSERVABILITY_CHARACTERISTICS,
  EVENT_OBSERVABILITY_LIFECYCLE_STAGES,
  EXTERNAL_INTEGRATION_OBSERVABILITY_TYPES,
  FUTURE_INTEGRATION_OBSERVABILITY_CAPABILITIES,
  INTEGRATION_BUSINESS_COLLABORATION_TYPES,
  INTEGRATION_CONTEXT_ELEMENTS,
  INTEGRATION_CONTRACT_VISIBILITY_AREAS,
  INTEGRATION_CORRELATION_SPANS,
  INTEGRATION_DEPENDENCY_TYPES,
  INTEGRATION_DISTRIBUTED_DIAGNOSTIC_CAPABILITIES,
  INTEGRATION_OBSERVABILITY_ARCHITECTURAL_RULES,
  INTEGRATION_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  INTEGRATION_OBSERVABILITY_MODEL_STAGES,
  INTEGRATION_OBSERVABILITY_OBJECTIVES,
  INTEGRATION_OBSERVABILITY_PRINCIPLES,
  INTEGRATION_OBSERVABILITY_QUALITY_ATTRIBUTES,
  INTEGRATION_OBSERVABILITY_RELATIONSHIP_STAGES,
  INTEGRATION_OPERATIONAL_EVIDENCE_TYPES,
  IntegrationObservabilityDescriptor,
  IntegrationObservabilityProfile,
  IntegrationOperationalEvidence,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  WORKFLOW_OBSERVABILITY_TYPES,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('integration observability exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new IntegrationObservabilityDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(INTEGRATION_OBSERVABILITY_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(INTEGRATION_OBSERVABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(INTEGRATION_OBSERVABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(INTEGRATION_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('integration observability exposes collaboration, contract, API, event, workflow, external, governance, and future metadata', () => {
  const descriptor = new IntegrationObservabilityDescriptor();

  assert.ok(descriptor.collaborationTypes().includes(INTEGRATION_BUSINESS_COLLABORATION_TYPES.AI_PARTICIPATION));
  assert.ok(descriptor.correlationSpans().includes(INTEGRATION_CORRELATION_SPANS.EXTERNAL_SYSTEMS));
  assert.ok(descriptor.contractVisibilityAreas().includes(INTEGRATION_CONTRACT_VISIBILITY_AREAS.EVENT_EXCHANGES));
  assert.ok(descriptor.contextElements().includes(INTEGRATION_CONTEXT_ELEMENTS.INTEGRATION_CONTRACT));
  assert.ok(descriptor.apiCharacteristics().includes(API_OBSERVABILITY_CHARACTERISTICS.CONSUMER_PARTICIPATION));
  assert.ok(descriptor.eventLifecycleStages().includes(EVENT_OBSERVABILITY_LIFECYCLE_STAGES.DISTRIBUTION));
  assert.ok(descriptor.workflowObservationTypes().includes(WORKFLOW_OBSERVABILITY_TYPES.HUMAN_APPROVAL));
  assert.ok(descriptor.externalObservationTypes().includes(EXTERNAL_INTEGRATION_OBSERVABILITY_TYPES.GOVERNMENT_SYSTEMS));
  assert.ok(descriptor.distributedDiagnosticCapabilities().includes(INTEGRATION_DISTRIBUTED_DIAGNOSTIC_CAPABILITIES.BUSINESS_IMPACT_ASSESSMENT));
  assert.ok(descriptor.dependencyTypes().includes(INTEGRATION_DEPENDENCY_TYPES.NOTIFICATION_SERVICES));
  assert.ok(descriptor.operationalEvidenceTypes().includes(INTEGRATION_OPERATIONAL_EVIDENCE_TYPES.EXTERNAL_EXCHANGES));
  assert.ok(descriptor.governanceActivities().includes(INTEGRATION_OBSERVABILITY_GOVERNANCE_ACTIVITIES.PARTNER_ACCOUNTABILITY));
  assert.ok(descriptor.qualityAttributes().includes(INTEGRATION_OBSERVABILITY_QUALITY_ATTRIBUTES.INTEROPERABILITY));
  assert.ok(descriptor.architecturalRules().includes(INTEGRATION_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_BUSINESS_COLLABORATION_RATHER_THAN_PROTOCOLS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_INTEGRATION_OBSERVABILITY_CAPABILITIES.SEMANTIC_CORRELATION));
});

test('integration observability validates complete collaboration-first profiles', () => {
  const descriptor = new IntegrationObservabilityDescriptor();
  const valid = descriptor.validateProfile(
    new IntegrationObservabilityProfile({
      observabilityName: 'Enterprise Integration Collaboration Visibility',
      objectives: Object.values(INTEGRATION_OBSERVABILITY_OBJECTIVES),
      modelStages: Object.values(INTEGRATION_OBSERVABILITY_MODEL_STAGES),
      principles: Object.values(INTEGRATION_OBSERVABILITY_PRINCIPLES),
      collaborationTypes: Object.values(INTEGRATION_BUSINESS_COLLABORATION_TYPES),
      correlationSpans: Object.values(INTEGRATION_CORRELATION_SPANS),
      contractVisibilityAreas: Object.values(INTEGRATION_CONTRACT_VISIBILITY_AREAS),
      contextElements: Object.values(INTEGRATION_CONTEXT_ELEMENTS),
      apiCharacteristics: Object.values(API_OBSERVABILITY_CHARACTERISTICS),
      eventLifecycleStages: Object.values(EVENT_OBSERVABILITY_LIFECYCLE_STAGES),
      workflowObservationTypes: Object.values(WORKFLOW_OBSERVABILITY_TYPES),
      externalObservationTypes: Object.values(EXTERNAL_INTEGRATION_OBSERVABILITY_TYPES),
      distributedDiagnosticCapabilities: Object.values(INTEGRATION_DISTRIBUTED_DIAGNOSTIC_CAPABILITIES),
      dependencyTypes: Object.values(INTEGRATION_DEPENDENCY_TYPES),
      operationalEvidenceTypes: Object.values(INTEGRATION_OPERATIONAL_EVIDENCE_TYPES),
      governanceActivities: Object.values(INTEGRATION_OBSERVABILITY_GOVERNANCE_ACTIVITIES),
      qualityAttributes: Object.values(INTEGRATION_OBSERVABILITY_QUALITY_ATTRIBUTES),
      relationshipStages: Object.values(INTEGRATION_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(INTEGRATION_OBSERVABILITY_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_INTEGRATION_OBSERVABILITY_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    observabilityName: '',
    objectives: [INTEGRATION_OBSERVABILITY_OBJECTIVES.ENTERPRISE_INTERACTION_VISIBILITY],
    modelStages: [INTEGRATION_OBSERVABILITY_MODEL_STAGES.BUSINESS_REQUEST],
    principles: [INTEGRATION_OBSERVABILITY_PRINCIPLES.OBSERVE_BUSINESS_COLLABORATION],
    collaborationTypes: [INTEGRATION_BUSINESS_COLLABORATION_TYPES.SERVICE_COOPERATION],
    correlationSpans: [INTEGRATION_CORRELATION_SPANS.BUSINESS_REQUESTS],
    contractVisibilityAreas: [INTEGRATION_CONTRACT_VISIBILITY_AREAS.BUSINESS_CAPABILITIES],
    contextElements: [INTEGRATION_CONTEXT_ELEMENTS.BUSINESS_CAPABILITY],
    apiCharacteristics: [API_OBSERVABILITY_CHARACTERISTICS.BUSINESS_CAPABILITY_INVOKED],
    eventLifecycleStages: [EVENT_OBSERVABILITY_LIFECYCLE_STAGES.BUSINESS_EVENT],
    workflowObservationTypes: [WORKFLOW_OBSERVABILITY_TYPES.ACTIVITY_EXECUTION],
    externalObservationTypes: [EXTERNAL_INTEGRATION_OBSERVABILITY_TYPES.PARTNER_INTERACTIONS],
    distributedDiagnosticCapabilities: [INTEGRATION_DISTRIBUTED_DIAGNOSTIC_CAPABILITIES.REQUEST_PROGRESSION],
    dependencyTypes: [INTEGRATION_DEPENDENCY_TYPES.INTERNAL_SERVICES],
    operationalEvidenceTypes: [INTEGRATION_OPERATIONAL_EVIDENCE_TYPES.API_INTERACTIONS],
    governanceActivities: [INTEGRATION_OBSERVABILITY_GOVERNANCE_ACTIVITIES.CONTRACT_COMPLIANCE],
    qualityAttributes: [INTEGRATION_OBSERVABILITY_QUALITY_ATTRIBUTES.TRACEABILITY],
    relationshipStages: [INTEGRATION_OBSERVABILITY_RELATIONSHIP_STAGES.BUSINESS_CAPABILITY],
    architecturalRules: [INTEGRATION_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_BUSINESS_COLLABORATION_RATHER_THAN_PROTOCOLS],
    futureCapabilities: [FUTURE_INTEGRATION_OBSERVABILITY_CAPABILITIES.AI_ASSISTED_INTERACTION_ANALYSIS],
    businessCollaborationFocused: false,
    endToEndCorrelated: false,
    contractCentricVisibility: false,
    serviceAutonomyPreserved: false,
    businessContextPreserved: false,
    workflowsApisEventsExternalObserved: false,
    distributedDiagnosticsSupported: false,
    governanceEvidenceBased: false,
    technologyNeutral: false,
    vendorNeutral: false,
    messagingPlatformSpecific: true,
    apiGatewaySpecific: true,
    integrationMiddlewareSpecific: true,
    tracingFrameworkSpecific: true,
    monitoringProductSpecific: true,
    implementationTechnologySpecific: true,
    protocolFocused: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /distributed-diagnostics/);
  assert.match(invalid.errors.join('\n'), /Integration Contract/);
  assert.match(invalid.errors.join('\n'), /end-to-end-correlation/);
  assert.match(invalid.errors.join('\n'), /workflow-progression/);
  assert.match(invalid.errors.join('\n'), /apis/);
  assert.match(invalid.errors.join('\n'), /published-contracts/);
  assert.match(invalid.errors.join('\n'), /workflow-identifier/);
  assert.match(invalid.errors.join('\n'), /request-lifecycle/);
  assert.match(invalid.errors.join('\n'), /Publication/);
  assert.match(invalid.errors.join('\n'), /ai-participation/);
  assert.match(invalid.errors.join('\n'), /cloud-services/);
  assert.match(invalid.errors.join('\n'), /event-propagation/);
  assert.match(invalid.errors.join('\n'), /ai-providers/);
  assert.match(invalid.errors.join('\n'), /business-events/);
  assert.match(invalid.errors.join('\n'), /operational-review/);
  assert.match(invalid.errors.join('\n'), /transparency/);
  assert.match(invalid.errors.join('\n'), /Integration Contract/);
  assert.match(invalid.errors.join('\n'), /correlate-interactions-end-to-end/);
  assert.match(invalid.errors.join('\n'), /semantic-correlation/);
  assert.match(invalid.errors.join('\n'), /business collaboration rather than communication protocols/);
  assert.match(invalid.errors.join('\n'), /Messaging platforms are outside ARCH-010-06 scope/);
  assert.match(invalid.errors.join('\n'), /API gateways are outside ARCH-010-06 scope/);
  assert.match(invalid.errors.join('\n'), /transport mechanics/);
});

test('integration observability validates operational evidence with contract, collaboration, context, and correlation', () => {
  const descriptor = new IntegrationObservabilityDescriptor();
  const valid = descriptor.validateOperationalEvidence(
    new IntegrationOperationalEvidence({
      evidenceType: INTEGRATION_OPERATIONAL_EVIDENCE_TYPES.WORKFLOW_TRANSITIONS,
      integrationContract: 'booking-workflow-contract',
      businessCollaboration: INTEGRATION_BUSINESS_COLLABORATION_TYPES.WORKFLOW_PROGRESSION,
      businessOutcome: 'booking-confirmed',
      correlationId: 'corr-integration-1',
      context: {
        businessCapability: 'booking',
        transactionIdentifier: 'txn-1'
      },
      dependencyType: INTEGRATION_DEPENDENCY_TYPES.INTERNAL_SERVICES,
      lifecycleStage: EVENT_OBSERVABILITY_LIFECYCLE_STAGES.CONSUMPTION
    })
  );
  const invalid = descriptor.validateOperationalEvidence({
    evidenceType: 'tcp-packet',
    integrationContract: '',
    businessCollaboration: '',
    businessOutcome: '',
    correlationId: '',
    context: {},
    dependencyType: 'socket',
    lifecycleStage: 'packet-routing',
    technologyNeutral: false,
    exposesProtocolMechanics: true,
    violatesServiceAutonomy: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported integration operational evidence type/);
  assert.match(invalid.errors.join('\n'), /integration contract/);
  assert.match(invalid.errors.join('\n'), /business collaboration/);
  assert.match(invalid.errors.join('\n'), /business outcome/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /business capability context/);
  assert.match(invalid.errors.join('\n'), /transaction identifier context/);
  assert.match(invalid.errors.join('\n'), /Unsupported integration dependency type/);
  assert.match(invalid.errors.join('\n'), /Unsupported integration lifecycle stage/);
  assert.match(invalid.errors.join('\n'), /technology neutral/);
  assert.match(invalid.errors.join('\n'), /protocol mechanics/);
  assert.match(invalid.errors.join('\n'), /service autonomy/);
});

test('integration observability assertion rejects incomplete metadata', () => {
  class IncompleteIntegrationObservabilityDescriptor extends IntegrationObservabilityDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteIntegrationObservabilityDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.INTEGRATION_OBSERVABILITY_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('integration observability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('IntegrationObservabilityDescriptor');

  assert.ok(descriptor instanceof IntegrationObservabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
