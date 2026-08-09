import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CONFIGURATION_SCOPES,
  DELIVERY_ENVIRONMENT_ANTI_PATTERNS,
  DELIVERY_ENVIRONMENT_ARCHITECTURAL_RULES,
  DELIVERY_ENVIRONMENT_ERROR_CODE,
  DELIVERY_ENVIRONMENT_MEASURES,
  DELIVERY_ENVIRONMENT_OBJECTIVES,
  DELIVERY_ENVIRONMENT_PRINCIPLES,
  DELIVERY_STATES,
  DELIVERY_STRATEGIES,
  DeliveryEnvironmentDescriptor,
  DeliveryEnvironmentProfile,
  ENVIRONMENT_TYPES,
  FUTURE_DELIVERY_ENVIRONMENT_CAPABILITIES,
  RELEASE_CONTENT_TYPES,
  SECRET_TYPES,
  STOP_CONDITIONS,
  VERIFICATION_OUTCOMES,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('delivery environment exposes objectives, principles, environment types, identity, request, and health metadata', () => {
  const descriptor = new DeliveryEnvironmentDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(DELIVERY_ENVIRONMENT_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(DELIVERY_ENVIRONMENT_PRINCIPLES));
  assert.ok(descriptor.environmentTypes().includes(ENVIRONMENT_TYPES.AI_EVALUATION));
  assert.ok(descriptor.environmentIdentityFields().includes('connected-to-tenant-and-property-scope'));
  assert.ok(descriptor.environmentMetadataFields().includes('secret-references'));
  assert.ok(descriptor.environmentRequestFields().includes('secret-reference-requirements'));
  assert.ok(descriptor.environmentProvisioningSteps().includes('bind-secret-references'));
  assert.ok(descriptor.environmentIsolationAreas().includes('queues-and-messages'));
  assert.ok(descriptor.environmentAccessRequirements().includes('least-privilege'));
  assert.ok(descriptor.environmentHealthSignals().includes('secret-reference-validity'));
});

test('delivery environment exposes configuration, secret, release, change, delivery, and verification metadata', () => {
  const descriptor = new DeliveryEnvironmentDescriptor();
  assert.ok(descriptor.configurationScopes().includes(CONFIGURATION_SCOPES.TENANT));
  assert.ok(descriptor.configurationDefinitionFields().includes('rollback-behavior'));
  assert.ok(descriptor.configurationValidationAreas().includes('artifact-compatibility'));
  assert.ok(descriptor.secretTypes().includes(SECRET_TYPES.WEBHOOK_SECRETS));
  assert.ok(descriptor.secretMetadataFields().includes('provider-reference'));
  assert.ok(descriptor.secretAccessRequirements().includes('prevent-logging-and-caching'));
  assert.ok(descriptor.releaseContentTypes().includes(RELEASE_CONTENT_TYPES.AGENT_CONFIGURATIONS));
  assert.ok(descriptor.releaseIdentityFields().includes('quality-evidence'));
  assert.ok(descriptor.releaseManifestFields().includes('rollback-roll-forward-and-compensation'));
  assert.ok(descriptor.releaseReadinessFields().includes('evidence-freshness'));
  assert.ok(descriptor.changeClassificationFactors().includes('ai-behavior'));
  assert.ok(descriptor.deliveryRequestFields().includes('correlation-and-idempotency-identity'));
  assert.ok(descriptor.deliveryPlanFields().includes('human-decision-points'));
  assert.ok(descriptor.deliveryStates().includes(DELIVERY_STATES.PARTIALLY_COMPLETED));
  assert.ok(descriptor.deliveryStrategies().includes(DELIVERY_STRATEGIES.SHADOW_EXECUTION));
  assert.ok(descriptor.verificationAreas().includes('ai-behavior'));
  assert.ok(descriptor.verificationOutcomes().includes(VERIFICATION_OUTCOMES.ESCALATE_HUMAN_DECISION));
  assert.ok(descriptor.stopConditions().includes(STOP_CONDITIONS.AI_SAFETY_TRUTHFULNESS_REGRESSION));
});

test('delivery environment exposes evidence, governance, measures, anti-patterns, rules, and future metadata', () => {
  const descriptor = new DeliveryEnvironmentDescriptor();
  assert.ok(descriptor.deliveryEvidenceFields().includes('secret-references-used'));
  assert.ok(descriptor.governanceAreas().includes('tenant-and-property-rollout'));
  assert.ok(descriptor.maturityLevels().includes('adaptive'));
  assert.ok(descriptor.measures().includes(DELIVERY_ENVIRONMENT_MEASURES.TENANT_ROLLOUT_SUCCESS));
  assert.ok(descriptor.antiPatterns().includes(DELIVERY_ENVIRONMENT_ANTI_PATTERNS.AI_AUTHORITY_FROM_CREDENTIALS));
  assert.ok(descriptor.architecturalRules().includes(DELIVERY_ENVIRONMENT_ARCHITECTURAL_RULES.SECRET_REFERENCES));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DELIVERY_ENVIRONMENT_CAPABILITIES.AI_BEHAVIOR_CANARY));
});

test('delivery environment validates complete profiles and rejects boundary violations', () => {
  const descriptor = new DeliveryEnvironmentDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    platformName: '',
    ...partialProfile(descriptor),
    environmentsGoverned: false,
    configurationExternalized: false,
    secretsReferencedOnly: false,
    trustedArtifactsPromoted: false,
    readinessBeforeDelivery: false,
    explicitTenantPropertyScope: false,
    progressiveDeliverySupported: false,
    rollbackRollForwardCompensationDesigned: false,
    stopConditionsEnforced: false,
    aiAuthorityNotInferred: false,
    deliveryEvidenceRequired: false,
    vendorNeutral: false,
    deploymentPortable: false,
    prescribesCloudPlatform: true,
    prescribesDeploymentTool: true,
    prescribesSecretProvider: true,
    allowsProductionCredentialsForDevelopment: true,
    embedsConfigurationInArtifacts: true,
    exposesSecretValues: true,
    rebuildsArtifactsPerEnvironment: true,
    treatsPublicationAsProductionAuthorization: true,
    treatsDeploymentAsBusinessSuccess: true,
    allowsBroadRolloutBeforeVerification: true,
    infersScopeFromDefaults: true,
    permitsAiAuthorityFromCredentials: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /preserve-isolation-and-least-privilege/);
  assert.match(invalid.errors.join('\n'), /same-architecture-different-configuration/);
  assert.match(invalid.errors.join('\n'), /shared-development/);
  assert.match(invalid.errors.join('\n'), /Configuration must be externalized/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a cloud platform/);
  assert.match(invalid.errors.join('\n'), /Routine development must not require production credentials/);
  assert.match(invalid.errors.join('\n'), /Artifact publication must not be treated as production authorization/);
  assert.match(invalid.errors.join('\n'), /AI agents must not infer authority from credentials/);
});

test('delivery environment assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends DeliveryEnvironmentDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === DELIVERY_ENVIRONMENT_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('delivery environment descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('DeliveryEnvironmentDescriptor');
  assert.ok(descriptor instanceof DeliveryEnvironmentDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'environmentTypes', 'environmentIdentityFields',
    'environmentMetadataFields', 'environmentRequestFields', 'environmentProvisioningSteps', 'environmentIsolationAreas',
    'environmentAccessRequirements', 'environmentHealthSignals', 'configurationScopes', 'configurationDefinitionFields',
    'configurationValidationAreas', 'secretTypes', 'secretMetadataFields', 'secretAccessRequirements',
    'releaseContentTypes', 'releaseIdentityFields', 'releaseManifestFields', 'releaseReadinessFields',
    'changeClassificationFactors', 'deliveryRequestFields', 'deliveryPlanFields', 'deliveryStates', 'deliveryStrategies',
    'verificationAreas', 'verificationOutcomes', 'stopConditions', 'deliveryEvidenceFields', 'governanceAreas',
    'maturityLevels', 'measures', 'antiPatterns', 'architecturalRules', 'futureCapabilities']) values[key] = descriptor[key]();
  return new DeliveryEnvironmentProfile({ platformName: 'Delivery and Environment Platform', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
