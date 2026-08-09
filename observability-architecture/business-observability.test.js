import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_BUSINESS_OBSERVABILITY_TYPES,
  BUSINESS_CAPABILITY_EVIDENCE_TYPES,
  BUSINESS_CAPABILITY_EXAMPLES,
  BUSINESS_CONTEXT_ELEMENTS,
  BUSINESS_EVENT_EXAMPLES,
  BUSINESS_GOVERNANCE_ALIGNMENT_ACTIVITIES,
  BUSINESS_LIFECYCLE_VISIBILITY_STAGES,
  BUSINESS_METRIC_EXAMPLES,
  BUSINESS_OBSERVABILITY_ARCHITECTURAL_RULES,
  BUSINESS_OBSERVABILITY_MODEL_STAGES,
  BUSINESS_OBSERVABILITY_OBJECTIVES,
  BUSINESS_OBSERVABILITY_PRINCIPLES,
  BUSINESS_OBSERVABILITY_QUALITY_ATTRIBUTES,
  BUSINESS_OBSERVABILITY_RELATIONSHIP_STAGES,
  BUSINESS_OPERATIONAL_EVIDENCE_SOURCES,
  BUSINESS_OUTCOME_EXAMPLES,
  BUSINESS_PROCESS_EXAMPLES,
  BusinessObservabilityDescriptor,
  BusinessObservabilityProfile,
  BusinessOperationalEvidence,
  CUSTOMER_JOURNEY_OBSERVABILITY_STAGES,
  FUTURE_BUSINESS_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('business observability exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new BusinessObservabilityDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(BUSINESS_OBSERVABILITY_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(BUSINESS_OBSERVABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(BUSINESS_OBSERVABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(BUSINESS_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('business observability exposes business capability, journey, event, metric, AI, and governance metadata', () => {
  const descriptor = new BusinessObservabilityDescriptor();

  assert.ok(descriptor.capabilityExamples().includes(BUSINESS_CAPABILITY_EXAMPLES.AI_ASSISTANCE));
  assert.ok(descriptor.processExamples().includes(BUSINESS_PROCESS_EXAMPLES.AI_ASSISTED_WORKFLOWS));
  assert.ok(descriptor.outcomeExamples().includes(BUSINESS_OUTCOME_EXAMPLES.BUSINESS_VALUE_DELIVERED));
  assert.ok(descriptor.contextElements().includes(BUSINESS_CONTEXT_ELEMENTS.BUSINESS_TRANSACTION));
  assert.ok(descriptor.lifecycleStages().includes(BUSINESS_LIFECYCLE_VISIBILITY_STAGES.DECISION));
  assert.ok(descriptor.capabilityEvidenceTypes().includes(BUSINESS_CAPABILITY_EVIDENCE_TYPES.CUSTOMER_IMPACT));
  assert.ok(descriptor.customerJourneyStages().includes(CUSTOMER_JOURNEY_OBSERVABILITY_STAGES.AI_PARTICIPATION));
  assert.ok(descriptor.businessEvents().includes(BUSINESS_EVENT_EXAMPLES.AI_RECOMMENDATION_ACCEPTED));
  assert.ok(descriptor.metrics().includes(BUSINESS_METRIC_EXAMPLES.BUSINESS_AVAILABILITY));
  assert.ok(descriptor.aiObservationTypes().includes(AI_BUSINESS_OBSERVABILITY_TYPES.BUSINESS_IMPACT));
  assert.ok(descriptor.evidenceSources().includes(BUSINESS_OPERATIONAL_EVIDENCE_SOURCES.INTEGRATION_EXCHANGES));
  assert.ok(descriptor.governanceActivities().includes(BUSINESS_GOVERNANCE_ALIGNMENT_ACTIVITIES.OPERATIONAL_ACCOUNTABILITY));
  assert.ok(descriptor.qualityAttributes().includes(BUSINESS_OBSERVABILITY_QUALITY_ATTRIBUTES.CUSTOMER_FOCUS));
  assert.ok(descriptor.architecturalRules().includes(BUSINESS_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_BUSINESS_CAPABILITIES_BEFORE_INFRASTRUCTURE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_BUSINESS_OBSERVABILITY_CAPABILITIES.BUSINESS_DIGITAL_TWINS));
});

test('business observability validates complete business-first observability profiles', () => {
  const descriptor = new BusinessObservabilityDescriptor();
  const valid = descriptor.validateProfile(
    new BusinessObservabilityProfile({
      observabilityName: 'Business Health Visibility',
      objectives: Object.values(BUSINESS_OBSERVABILITY_OBJECTIVES),
      modelStages: Object.values(BUSINESS_OBSERVABILITY_MODEL_STAGES),
      principles: Object.values(BUSINESS_OBSERVABILITY_PRINCIPLES),
      capabilityExamples: Object.values(BUSINESS_CAPABILITY_EXAMPLES),
      processExamples: Object.values(BUSINESS_PROCESS_EXAMPLES),
      outcomeExamples: Object.values(BUSINESS_OUTCOME_EXAMPLES),
      contextElements: Object.values(BUSINESS_CONTEXT_ELEMENTS),
      lifecycleStages: Object.values(BUSINESS_LIFECYCLE_VISIBILITY_STAGES),
      capabilityEvidenceTypes: Object.values(BUSINESS_CAPABILITY_EVIDENCE_TYPES),
      customerJourneyStages: Object.values(CUSTOMER_JOURNEY_OBSERVABILITY_STAGES),
      businessEvents: Object.values(BUSINESS_EVENT_EXAMPLES),
      metrics: Object.values(BUSINESS_METRIC_EXAMPLES),
      aiObservationTypes: Object.values(AI_BUSINESS_OBSERVABILITY_TYPES),
      evidenceSources: Object.values(BUSINESS_OPERATIONAL_EVIDENCE_SOURCES),
      governanceActivities: Object.values(BUSINESS_GOVERNANCE_ALIGNMENT_ACTIVITIES),
      qualityAttributes: Object.values(BUSINESS_OBSERVABILITY_QUALITY_ATTRIBUTES),
      relationshipStages: Object.values(BUSINESS_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(BUSINESS_OBSERVABILITY_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_BUSINESS_OBSERVABILITY_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    observabilityName: '',
    objectives: [BUSINESS_OBSERVABILITY_OBJECTIVES.BUSINESS_TRANSPARENCY],
    modelStages: [BUSINESS_OBSERVABILITY_MODEL_STAGES.BUSINESS_STRATEGY],
    principles: [BUSINESS_OBSERVABILITY_PRINCIPLES.OBSERVE_BUSINESS_CAPABILITIES],
    capabilityExamples: [BUSINESS_CAPABILITY_EXAMPLES.CUSTOMER_MANAGEMENT],
    processExamples: [BUSINESS_PROCESS_EXAMPLES.CUSTOMER_ONBOARDING],
    outcomeExamples: [BUSINESS_OUTCOME_EXAMPLES.COMPLETED_TRANSACTIONS],
    contextElements: [BUSINESS_CONTEXT_ELEMENTS.BUSINESS_CAPABILITY],
    lifecycleStages: [BUSINESS_LIFECYCLE_VISIBILITY_STAGES.REQUEST],
    capabilityEvidenceTypes: [BUSINESS_CAPABILITY_EVIDENCE_TYPES.REQUEST_VOLUME],
    customerJourneyStages: [CUSTOMER_JOURNEY_OBSERVABILITY_STAGES.REQUEST_INITIATION],
    businessEvents: [BUSINESS_EVENT_EXAMPLES.CUSTOMER_REGISTERED],
    metrics: [BUSINESS_METRIC_EXAMPLES.CAPABILITY_UTILIZATION],
    aiObservationTypes: [AI_BUSINESS_OBSERVABILITY_TYPES.AI_ASSISTED_DECISIONS],
    evidenceSources: [BUSINESS_OPERATIONAL_EVIDENCE_SOURCES.BUSINESS_EVENTS],
    governanceActivities: [BUSINESS_GOVERNANCE_ALIGNMENT_ACTIVITIES.PERFORMANCE_EVALUATION],
    qualityAttributes: [BUSINESS_OBSERVABILITY_QUALITY_ATTRIBUTES.TRANSPARENCY],
    relationshipStages: [BUSINESS_OBSERVABILITY_RELATIONSHIP_STAGES.BUSINESS_CAPABILITY],
    architecturalRules: [BUSINESS_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_BUSINESS_CAPABILITIES_BEFORE_INFRASTRUCTURE],
    futureCapabilities: [FUTURE_BUSINESS_OBSERVABILITY_CAPABILITIES.AI_ASSISTED_BUSINESS_DIAGNOSTICS],
    businessCapabilitiesObservable: false,
    processesObservable: false,
    outcomesObservable: false,
    businessContextPreserved: false,
    endToEndVisibilitySupported: false,
    operationalEvidenceCorrelated: false,
    governanceEvidenceBased: false,
    aiObservedInBusinessContext: false,
    technologyIndependent: false,
    vendorNeutral: false,
    businessIntelligencePlatformSpecific: true,
    financialReportingSystemSpecific: true,
    analyticalDashboardSpecific: true,
    implementationTechnologySpecific: true,
    infrastructureFirst: true,
    exposesImplementationDetails: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /capability-visibility/);
  assert.match(invalid.errors.join('\n'), /Business Capability/);
  assert.match(invalid.errors.join('\n'), /observe-business-processes/);
  assert.match(invalid.errors.join('\n'), /order-processing/);
  assert.match(invalid.errors.join('\n'), /order-fulfillment/);
  assert.match(invalid.errors.join('\n'), /approved-requests/);
  assert.match(invalid.errors.join('\n'), /business-transaction/);
  assert.match(invalid.errors.join('\n'), /Validation/);
  assert.match(invalid.errors.join('\n'), /completion-rate/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /order-submitted/);
  assert.match(invalid.errors.join('\n'), /business-throughput/);
  assert.match(invalid.errors.join('\n'), /business-impact/);
  assert.match(invalid.errors.join('\n'), /service-interactions/);
  assert.match(invalid.errors.join('\n'), /strategic-reporting/);
  assert.match(invalid.errors.join('\n'), /accountability/);
  assert.match(invalid.errors.join('\n'), /Services/);
  assert.match(invalid.errors.join('\n'), /preserve-business-context-throughout-telemetry/);
  assert.match(invalid.errors.join('\n'), /predictive-business-analytics/);
  assert.match(invalid.errors.join('\n'), /business context/);
  assert.match(invalid.errors.join('\n'), /Business intelligence platforms are outside ARCH-010-03 scope/);
  assert.match(invalid.errors.join('\n'), /Analytical dashboards are outside ARCH-010-03 scope/);
  assert.match(invalid.errors.join('\n'), /before infrastructure/);
});

test('business observability validates business operational evidence with business context and correlation', () => {
  const descriptor = new BusinessObservabilityDescriptor();
  const valid = descriptor.validateOperationalEvidence(
    new BusinessOperationalEvidence({
      evidenceType: BUSINESS_EVENT_EXAMPLES.WORKFLOW_COMPLETED,
      businessCapability: BUSINESS_CAPABILITY_EXAMPLES.AI_ASSISTANCE,
      businessProcess: BUSINESS_PROCESS_EXAMPLES.AI_ASSISTED_WORKFLOWS,
      businessOutcome: BUSINESS_OUTCOME_EXAMPLES.BUSINESS_VALUE_DELIVERED,
      customerJourneyStage: CUSTOMER_JOURNEY_OBSERVABILITY_STAGES.OUTCOME_DELIVERY,
      context: {
        businessCapability: BUSINESS_CAPABILITY_EXAMPLES.AI_ASSISTANCE,
        businessTransaction: 'transaction-123'
      },
      correlationId: 'corr-123',
      source: BUSINESS_OPERATIONAL_EVIDENCE_SOURCES.AI_ACTIVITIES
    })
  );
  const invalid = descriptor.validateOperationalEvidence({
    evidenceType: '',
    businessCapability: '',
    businessProcess: '',
    businessOutcome: '',
    customerJourneyStage: 'database-query',
    context: {},
    correlationId: '',
    source: 'cloud-metric',
    technologyIndependent: false,
    exposesImplementationDetails: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported business operational evidence source/);
  assert.match(invalid.errors.join('\n'), /evidence type/);
  assert.match(invalid.errors.join('\n'), /business capability/);
  assert.match(invalid.errors.join('\n'), /customer journey stage/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /business transaction/);
  assert.match(invalid.errors.join('\n'), /technology independent/);
  assert.match(invalid.errors.join('\n'), /implementation details/);
});

test('business observability assertion rejects incomplete metadata', () => {
  class IncompleteBusinessObservabilityDescriptor extends BusinessObservabilityDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteBusinessObservabilityDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.BUSINESS_OBSERVABILITY_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('business observability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('BusinessObservabilityDescriptor');

  assert.ok(descriptor instanceof BusinessObservabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
