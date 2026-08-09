import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ADOPTION_LIFECYCLE_STATES,
  ADOPTION_PERSONAS,
  AI_AGENT_OUTCOME_FIELDS,
  CRITICAL_PLATFORM_CAPABILITIES,
  FUTURE_OPERATIONS_ADOPTION_CAPABILITIES,
  HEALTH_ENDPOINT_TYPES,
  INCIDENT_PRIORITY_FACTORS,
  OPERATIONS_ADOPTION_ANTI_PATTERNS,
  OPERATIONS_ADOPTION_ARCHITECTURAL_RULES,
  OPERATIONS_ADOPTION_GOVERNANCE_AREAS,
  OPERATIONS_ADOPTION_MATURITY_LEVELS,
  PLATFORM_OPERATIONS_ADOPTION_ERROR_CODE,
  PLATFORM_OPERATIONS_ADOPTION_OBJECTIVES,
  PLATFORM_OPERATIONS_ADOPTION_PRINCIPLES,
  PLATFORM_OWNERSHIP_ROLES,
  PlatformOperationsAdoptionDescriptor,
  PlatformOperationsAdoptionProfile,
  SERVICE_COMMITMENT_FIELDS,
  SUPPORT_MODEL_TYPES,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('platform operations adoption exposes product, ownership, commitment, command, and health metadata', () => {
  const descriptor = new PlatformOperationsAdoptionDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(PLATFORM_OPERATIONS_ADOPTION_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(PLATFORM_OPERATIONS_ADOPTION_PRINCIPLES));
  assert.ok(descriptor.productOwnershipFields().includes('value-and-cost'));
  assert.ok(descriptor.ownershipRoles().includes(PLATFORM_OWNERSHIP_ROLES.LIFECYCLE_AUTHORITY));
  assert.ok(descriptor.serviceCommitmentFields().includes(SERVICE_COMMITMENT_FIELDS.RECOVERY_POINT));
  assert.ok(descriptor.criticalCapabilities().includes(CRITICAL_PLATFORM_CAPABILITIES.DELIVERY_ROLLBACK));
  assert.ok(descriptor.commandControlFields().includes('decision-authority'));
  assert.ok(descriptor.controlLoopStages().includes('verify-developer-and-production-outcomes'));
  assert.ok(descriptor.healthFields().includes('tenant-and-property-impact'));
  assert.ok(descriptor.healthEndpointTypes().includes(HEALTH_ENDPOINT_TYPES.DEGRADED_STATE));
});

test('platform operations adoption exposes observability, incident, degraded, operations, and support metadata', () => {
  const descriptor = new PlatformOperationsAdoptionDescriptor();
  assert.ok(descriptor.observabilityCorrelationFields().includes('actor-and-ai-agent-identity'));
  assert.ok(descriptor.signalTypes().includes('token-and-ai-provider-use'));
  assert.ok(descriptor.logRequirements().includes('redacted'));
  assert.ok(descriptor.statusFields().includes('workaround'));
  assert.ok(descriptor.incidentSteps().includes('preserve-critical-recovery-paths'));
  assert.ok(descriptor.incidentPriorityFactors().includes(INCIDENT_PRIORITY_FACTORS.CROSS_TENANT_RISK));
  assert.ok(descriptor.degradedOperationFields().includes('stop-conditions'));
  assert.ok(descriptor.operationsDomains().includes('continuity-and-recovery'));
  assert.ok(descriptor.supportModelTypes().includes(SUPPORT_MODEL_TYPES.TENANT_PROPERTY_SUPPORT));
  assert.ok(descriptor.contextualSupportFields().includes('tenant-and-property-scope'));
  assert.ok(descriptor.operationalRequestTypes().includes('supplier-escalation'));
  assert.ok(descriptor.supportKnowledgeRequirements().includes('deprecated-when-obsolete'));
});

test('platform operations adoption exposes adoption, migration, feedback, value, roadmap, governance, and future metadata', () => {
  const descriptor = new PlatformOperationsAdoptionDescriptor();
  assert.ok(descriptor.adoptionLifecycleStates().includes(ADOPTION_LIFECYCLE_STATES.MIGRATING));
  assert.ok(descriptor.adoptionPersonas().includes(ADOPTION_PERSONAS.AI_IMPLEMENTATION_AGENT));
  assert.ok(descriptor.adoptionValuePropositions().includes('evidence-automation'));
  assert.ok(descriptor.onboardingFields().includes('guided-first-task'));
  assert.ok(descriptor.migrationFields().includes('rollback'));
  assert.ok(descriptor.enablementChannels().includes('migration-clinics'));
  assert.ok(descriptor.feedbackSources().includes('production-outcomes'));
  assert.ok(descriptor.aiAgentOutcomeFields().includes(AI_AGENT_OUTCOME_FIELDS.STOP_CONDITION_USE));
  assert.ok(descriptor.productivityFields().includes('cognitive-load'));
  assert.ok(descriptor.platformValueFields().includes('improved-guest-and-property-outcomes'));
  assert.ok(descriptor.adoptionMeasures().includes('escape-path-demand'));
  assert.ok(descriptor.operationalMeasures().includes('continuity-test-success'));
  assert.ok(descriptor.roadmapDecisionFactors().includes('future-architecture'));
  assert.ok(descriptor.backlogItemFields().includes('architecture-relationship'));
  assert.ok(descriptor.governanceAreas().includes(OPERATIONS_ADOPTION_GOVERNANCE_AREAS.PAVED_PATH_LIFECYCLE));
  assert.ok(descriptor.maturityLevels().includes(OPERATIONS_ADOPTION_MATURITY_LEVELS.ADAPTIVE));
  assert.ok(descriptor.antiPatterns().includes(OPERATIONS_ADOPTION_ANTI_PATTERNS.AI_AUTONOMY_VOLUME));
  assert.ok(descriptor.architecturalRules().includes(OPERATIONS_ADOPTION_ARCHITECTURAL_RULES.AI_OUTCOME_METRICS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OPERATIONS_ADOPTION_CAPABILITIES.AI_INCIDENT_DIAGNOSIS));
});

test('platform operations adoption validates complete profiles and rejects boundary violations', () => {
  const descriptor = new PlatformOperationsAdoptionDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    platformName: '',
    ...partialProfile(descriptor),
    productionInternalProduct: false,
    explicitOwnership: false,
    serviceCommitmentsByCriticality: false,
    outcomeConnectedHealth: false,
    integratedOperations: false,
    alternateCriticalPaths: false,
    contextualSupportKnowledge: false,
    ownedPavedPathLifecycles: false,
    protectedRecoveryCapacity: false,
    governsSuppliersCostEvidenceDebt: false,
    adoptionAsJourney: false,
    onboardingMigrationTraining: false,
    measuresSafeValue: false,
    measuresAiOutcomes: false,
    protectsDeveloperPrivacy: false,
    tenantPropertyImpactVisible: false,
    feedbackImprovesRoadmap: false,
    balancesGrowthReliabilityRetirement: false,
    vendorNeutralTechnologyIndependent: false,
    replacesArch011: true,
    treatsPlatformAsToolCollection: true,
    measuresOnlyToolUptime: true,
    assumesAdoptionFromAccess: true,
    mandatesUnsupportedPaths: true,
    makesPlatformOwnEveryAppIncident: true,
    hidesDegradation: true,
    singlePortalForCriticalRecovery: true,
    removesControlsForCost: true,
    measuresProductivityByCodeVolume: true,
    measuresAiSuccessByAutonomyVolume: true,
    usesTelemetryForSurveillance: true,
    deprecatesWithoutMigration: true,
    hidesTenantPropertyImpact: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /protect-delivery-and-recovery-capabilities/);
  assert.match(invalid.errors.join('\n'), /operations-protect-outcomes/);
  assert.match(invalid.errors.join('\n'), /value-and-cost/);
  assert.match(invalid.errors.join('\n'), /operated as a production internal product/);
  assert.match(invalid.errors.join('\n'), /must not replace it/);
  assert.match(invalid.errors.join('\n'), /must not be measured by code or commit volume/);
  assert.match(invalid.errors.join('\n'), /AI-agent success must not be measured by autonomous action volume/);
  assert.match(invalid.errors.join('\n'), /Tenant and property impact must not be hidden/);
});

test('platform operations adoption assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends PlatformOperationsAdoptionDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === PLATFORM_OPERATIONS_ADOPTION_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('platform operations adoption descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('PlatformOperationsAdoptionDescriptor');
  assert.ok(descriptor instanceof PlatformOperationsAdoptionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'productOwnershipFields', 'ownershipRoles',
    'serviceCommitmentFields', 'criticalCapabilities', 'commandControlFields', 'controlLoopStages', 'healthFields',
    'healthEndpointTypes', 'observabilityCorrelationFields', 'signalTypes', 'logRequirements', 'statusFields',
    'incidentSteps', 'incidentPriorityFactors', 'degradedOperationFields', 'operationsDomains', 'supportModelTypes',
    'contextualSupportFields', 'operationalRequestTypes', 'supportKnowledgeRequirements', 'adoptionLifecycleStates',
    'adoptionPersonas', 'adoptionValuePropositions', 'onboardingFields', 'migrationFields', 'enablementChannels',
    'feedbackSources', 'aiAgentOutcomeFields', 'productivityFields', 'platformValueFields', 'adoptionMeasures',
    'operationalMeasures', 'roadmapDecisionFactors', 'backlogItemFields', 'governanceAreas', 'maturityLevels',
    'antiPatterns', 'architecturalRules', 'futureCapabilities']) values[key] = descriptor[key]();
  return new PlatformOperationsAdoptionProfile({ platformName: 'Platform Operations and Adoption', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
