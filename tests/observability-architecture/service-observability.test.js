import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DISTRIBUTED_DIAGNOSTIC_CAPABILITIES,
  FUTURE_SERVICE_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  SERVICE_BUSINESS_IDENTIFIERS,
  SERVICE_COLLABORATION_INTERACTIONS,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_DIAGNOSTIC_SUPPORT_AREAS,
  SERVICE_ERROR_OBSERVABILITY_CHARACTERISTICS,
  SERVICE_INTERACTION_TYPES,
  SERVICE_LIFECYCLE_VISIBILITY_STAGES,
  SERVICE_OBSERVABILITY_ARCHITECTURAL_RULES,
  SERVICE_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  SERVICE_OBSERVABILITY_MODEL_STAGES,
  SERVICE_OBSERVABILITY_OBJECTIVES,
  SERVICE_OBSERVABILITY_PRINCIPLES,
  SERVICE_OBSERVABILITY_QUALITY_ATTRIBUTES,
  SERVICE_OBSERVABILITY_RELATIONSHIP_STAGES,
  SERVICE_OBSERVABILITY_RESPONSIBILITIES,
  SERVICE_OPERATIONAL_EVIDENCE_TYPES,
  SERVICE_PERFORMANCE_CHARACTERISTICS,
  SERVICE_STATE_VISIBILITY_STATES,
  ServiceObservabilityDescriptor,
  ServiceObservabilityProfile,
  ServiceOperationalEvidence,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('service observability exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new ServiceObservabilityDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(SERVICE_OBSERVABILITY_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(SERVICE_OBSERVABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(SERVICE_OBSERVABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(SERVICE_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('service observability exposes service evidence, interaction, diagnostic, dependency, governance, and future metadata', () => {
  const descriptor = new ServiceObservabilityDescriptor();

  assert.ok(descriptor.responsibilities().includes(SERVICE_OBSERVABILITY_RESPONSIBILITIES.ERROR_CONDITIONS));
  assert.ok(descriptor.businessIdentifiers().includes(SERVICE_BUSINESS_IDENTIFIERS.WORKFLOW_IDENTIFIER));
  assert.ok(descriptor.lifecycleStages().includes(SERVICE_LIFECYCLE_VISIBILITY_STAGES.EXECUTION));
  assert.ok(descriptor.interactionTypes().includes(SERVICE_INTERACTION_TYPES.AI_COLLABORATION));
  assert.ok(descriptor.diagnosticSupportAreas().includes(SERVICE_DIAGNOSTIC_SUPPORT_AREAS.RECOVERY_PLANNING));
  assert.ok(descriptor.serviceStates().includes(SERVICE_STATE_VISIBILITY_STATES.DEGRADED));
  assert.ok(descriptor.performanceCharacteristics().includes(SERVICE_PERFORMANCE_CHARACTERISTICS.THROUGHPUT));
  assert.ok(descriptor.collaborationInteractions().includes(SERVICE_COLLABORATION_INTERACTIONS.EXTERNAL_SERVICE_COMMUNICATION));
  assert.ok(descriptor.errorCharacteristics().includes(SERVICE_ERROR_OBSERVABILITY_CHARACTERISTICS.BUSINESS_EFFECT));
  assert.ok(descriptor.dependencyTypes().includes(SERVICE_DEPENDENCY_TYPES.KNOWLEDGE_SERVICES));
  assert.ok(descriptor.distributedDiagnosticCapabilities().includes(DISTRIBUTED_DIAGNOSTIC_CAPABILITIES.BUSINESS_IMPACT_ASSESSMENT));
  assert.ok(descriptor.operationalEvidenceTypes().includes(SERVICE_OPERATIONAL_EVIDENCE_TYPES.STATE_TRANSITIONS));
  assert.ok(descriptor.governanceActivities().includes(SERVICE_OBSERVABILITY_GOVERNANCE_ACTIVITIES.CAPACITY_PLANNING));
  assert.ok(descriptor.qualityAttributes().includes(SERVICE_OBSERVABILITY_QUALITY_ATTRIBUTES.OPERATIONAL_EXCELLENCE));
  assert.ok(descriptor.architecturalRules().includes(SERVICE_OBSERVABILITY_ARCHITECTURAL_RULES.SUPPORT_DISTRIBUTED_DIAGNOSTICS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SERVICE_OBSERVABILITY_CAPABILITIES.INTELLIGENT_DEPENDENCY_ANALYSIS));
});

test('service observability validates complete autonomous service observability profiles', () => {
  const descriptor = new ServiceObservabilityDescriptor();
  const valid = descriptor.validateProfile(
    new ServiceObservabilityProfile({
      observabilityName: 'Service Runtime Visibility',
      objectives: Object.values(SERVICE_OBSERVABILITY_OBJECTIVES),
      modelStages: Object.values(SERVICE_OBSERVABILITY_MODEL_STAGES),
      principles: Object.values(SERVICE_OBSERVABILITY_PRINCIPLES),
      responsibilities: Object.values(SERVICE_OBSERVABILITY_RESPONSIBILITIES),
      businessIdentifiers: Object.values(SERVICE_BUSINESS_IDENTIFIERS),
      lifecycleStages: Object.values(SERVICE_LIFECYCLE_VISIBILITY_STAGES),
      interactionTypes: Object.values(SERVICE_INTERACTION_TYPES),
      diagnosticSupportAreas: Object.values(SERVICE_DIAGNOSTIC_SUPPORT_AREAS),
      serviceStates: Object.values(SERVICE_STATE_VISIBILITY_STATES),
      performanceCharacteristics: Object.values(SERVICE_PERFORMANCE_CHARACTERISTICS),
      collaborationInteractions: Object.values(SERVICE_COLLABORATION_INTERACTIONS),
      errorCharacteristics: Object.values(SERVICE_ERROR_OBSERVABILITY_CHARACTERISTICS),
      dependencyTypes: Object.values(SERVICE_DEPENDENCY_TYPES),
      distributedDiagnosticCapabilities: Object.values(DISTRIBUTED_DIAGNOSTIC_CAPABILITIES),
      operationalEvidenceTypes: Object.values(SERVICE_OPERATIONAL_EVIDENCE_TYPES),
      governanceActivities: Object.values(SERVICE_OBSERVABILITY_GOVERNANCE_ACTIVITIES),
      qualityAttributes: Object.values(SERVICE_OBSERVABILITY_QUALITY_ATTRIBUTES),
      relationshipStages: Object.values(SERVICE_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(SERVICE_OBSERVABILITY_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_SERVICE_OBSERVABILITY_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    observabilityName: '',
    objectives: [SERVICE_OBSERVABILITY_OBJECTIVES.SERVICE_TRANSPARENCY],
    modelStages: [SERVICE_OBSERVABILITY_MODEL_STAGES.BUSINESS_REQUEST],
    principles: [SERVICE_OBSERVABILITY_PRINCIPLES.SERVICE_AUTONOMY],
    responsibilities: [SERVICE_OBSERVABILITY_RESPONSIBILITIES.OPERATIONAL_STATE],
    businessIdentifiers: [SERVICE_BUSINESS_IDENTIFIERS.BUSINESS_CAPABILITY],
    lifecycleStages: [SERVICE_LIFECYCLE_VISIBILITY_STAGES.REQUEST],
    interactionTypes: [SERVICE_INTERACTION_TYPES.SERVICE_TO_SERVICE_COMMUNICATION],
    diagnosticSupportAreas: [SERVICE_DIAGNOSTIC_SUPPORT_AREAS.FAULT_ISOLATION],
    serviceStates: [SERVICE_STATE_VISIBILITY_STATES.STARTING],
    performanceCharacteristics: [SERVICE_PERFORMANCE_CHARACTERISTICS.PROCESSING_DURATION],
    collaborationInteractions: [SERVICE_COLLABORATION_INTERACTIONS.API_REQUESTS],
    errorCharacteristics: [SERVICE_ERROR_OBSERVABILITY_CHARACTERISTICS.ERROR_CATEGORY],
    dependencyTypes: [SERVICE_DEPENDENCY_TYPES.BUSINESS_SERVICES],
    distributedDiagnosticCapabilities: [DISTRIBUTED_DIAGNOSTIC_CAPABILITIES.REQUEST_TRACING],
    operationalEvidenceTypes: [SERVICE_OPERATIONAL_EVIDENCE_TYPES.SERVICE_LIFECYCLE_EVENTS],
    governanceActivities: [SERVICE_OBSERVABILITY_GOVERNANCE_ACTIVITIES.SERVICE_ACCOUNTABILITY],
    qualityAttributes: [SERVICE_OBSERVABILITY_QUALITY_ATTRIBUTES.TRANSPARENCY],
    relationshipStages: [SERVICE_OBSERVABILITY_RELATIONSHIP_STAGES.BUSINESS_CAPABILITY],
    architecturalRules: [SERVICE_OBSERVABILITY_ARCHITECTURAL_RULES.PRESERVE_SERVICE_AUTONOMY],
    futureCapabilities: [FUTURE_SERVICE_OBSERVABILITY_CAPABILITIES.AI_ASSISTED_SERVICE_DIAGNOSTICS],
    serviceAutonomyPreserved: false,
    businessContextCorrelated: false,
    lifecycleVisible: false,
    interactionsTraceable: false,
    independentlyDiagnosable: false,
    operationalEvidenceTrustworthyCorrelated: false,
    governanceEvidenceBased: false,
    technologyIndependent: false,
    vendorNeutral: false,
    implementationFrameworkSpecific: true,
    loggingLibrarySpecific: true,
    monitoringPlatformSpecific: true,
    telemetryCollectorSpecific: true,
    vendorTechnologySpecific: true,
    exposesUnnecessaryImplementationDetails: true,
    reducesEnterpriseVisibility: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /distributed-visibility/);
  assert.match(invalid.errors.join('\n'), /Service/);
  assert.match(invalid.errors.join('\n'), /business-correlation/);
  assert.match(invalid.errors.join('\n'), /business-activity/);
  assert.match(invalid.errors.join('\n'), /transaction-identifier/);
  assert.match(invalid.errors.join('\n'), /Validation/);
  assert.match(invalid.errors.join('\n'), /api-invocation/);
  assert.match(invalid.errors.join('\n'), /operational-support/);
  assert.match(invalid.errors.join('\n'), /available/);
  assert.match(invalid.errors.join('\n'), /request-volume/);
  assert.match(invalid.errors.join('\n'), /event-consumption/);
  assert.match(invalid.errors.join('\n'), /impact/);
  assert.match(invalid.errors.join('\n'), /ai-services/);
  assert.match(invalid.errors.join('\n'), /dependency-analysis/);
  assert.match(invalid.errors.join('\n'), /business-interactions/);
  assert.match(invalid.errors.join('\n'), /performance-evaluation/);
  assert.match(invalid.errors.join('\n'), /traceability/);
  assert.match(invalid.errors.join('\n'), /Service Interaction/);
  assert.match(invalid.errors.join('\n'), /correlate-service-activity-with-business-context/);
  assert.match(invalid.errors.join('\n'), /predictive-service-health-analysis/);
  assert.match(invalid.errors.join('\n'), /preserve service autonomy/);
  assert.match(invalid.errors.join('\n'), /retain business context/);
  assert.match(invalid.errors.join('\n'), /Implementation frameworks are outside ARCH-010-04 scope/);
  assert.match(invalid.errors.join('\n'), /Monitoring platforms are outside ARCH-010-04 scope/);
  assert.match(invalid.errors.join('\n'), /enterprise visibility/);
});

test('service observability validates service operational evidence with lifecycle, interaction, business context, and correlation', () => {
  const descriptor = new ServiceObservabilityDescriptor();
  const valid = descriptor.validateOperationalEvidence(
    new ServiceOperationalEvidence({
      evidenceType: SERVICE_OPERATIONAL_EVIDENCE_TYPES.PROCESSING_MILESTONES,
      serviceName: 'Pricing Service',
      serviceState: SERVICE_STATE_VISIBILITY_STATES.AVAILABLE,
      lifecycleStage: SERVICE_LIFECYCLE_VISIBILITY_STAGES.EXECUTION,
      interactionType: SERVICE_INTERACTION_TYPES.API_INVOCATION,
      businessContext: {
        businessCapability: 'pricing',
        businessRequest: 'quote-request'
      },
      correlationId: 'corr-service-1',
      dependencyType: SERVICE_DEPENDENCY_TYPES.BUSINESS_SERVICES
    })
  );
  const invalid = descriptor.validateOperationalEvidence({
    evidenceType: 'database-log',
    serviceName: '',
    serviceState: 'unknown',
    lifecycleStage: 'query',
    interactionType: 'socket',
    businessContext: {},
    correlationId: '',
    dependencyType: 'database',
    technologyIndependent: false,
    exposesImplementationDetails: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported service operational evidence type/);
  assert.match(invalid.errors.join('\n'), /identify the service/);
  assert.match(invalid.errors.join('\n'), /Unsupported service state/);
  assert.match(invalid.errors.join('\n'), /Unsupported service lifecycle stage/);
  assert.match(invalid.errors.join('\n'), /Unsupported service interaction type/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /business capability context/);
  assert.match(invalid.errors.join('\n'), /business request context/);
  assert.match(invalid.errors.join('\n'), /Unsupported service dependency type/);
  assert.match(invalid.errors.join('\n'), /technology independent/);
  assert.match(invalid.errors.join('\n'), /implementation details/);
});

test('service observability assertion rejects incomplete metadata', () => {
  class IncompleteServiceObservabilityDescriptor extends ServiceObservabilityDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteServiceObservabilityDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.SERVICE_OBSERVABILITY_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('service observability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ServiceObservabilityDescriptor');

  assert.ok(descriptor instanceof ServiceObservabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
