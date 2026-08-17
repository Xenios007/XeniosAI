import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { CHANGE_LIFECYCLE_STAGES, CONFIGURATION_DOMAINS, CONFIGURATION_ENTITLEMENTS_CUSTOMIZATION_ERROR_CODE, CONFIGURATION_HIERARCHY_LEVELS, FEATURE_RELEASE_QUESTIONS, ConfigurationEntitlementsCustomizationDescriptor, ConfigurationEntitlementsCustomizationProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['configPrinciples', 'configurationCategories', 'configurationHierarchyLevels', 'configurationItemScopeFields', 'mandatoryPlatformControlAreas', 'configurationDomains', 'schemaGovernanceFields', 'versioningSupportCapabilities', 'configurationResolutionSteps', 'inheritanceOverrideBehaviors', 'configurationValidationLevels', 'changeLifecycleStages', 'stagedRolloutTargets', 'brandingPreventions', 'localizationDistinctions', 'businessRuleRequirements', 'aiConfigurationElements', 'entitlementFields', 'featureReleaseQuestions', 'serviceTierElements', 'selfServiceCapabilities', 'extensionSettingFields', 'secretsProhibitedLocations', 'propagationDefinitions', 'configurationEvidenceFields', 'configurationObservabilitySignals', 'configurationFailureBehaviors', 'configurationTestingCoverageAreas', 'architecturalRules'];

test('ARCH-018-06 exposes hierarchy, scope, and domain metadata', () => { const descriptor = new ConfigurationEntitlementsCustomizationDescriptor(); assert.ok(descriptor.configurationHierarchyLevels().includes(CONFIGURATION_HIERARCHY_LEVELS.SERVICE_TIER)); assert.ok(descriptor.configurationDomains().includes(CONFIGURATION_DOMAINS.AI_AGENT)); assert.ok(descriptor.mandatoryPlatformControlAreas().includes('ai-safety-and-tool-boundaries')); assert.ok(descriptor.configurationItemScopeFields().includes('classification-and-sensitivity')); });

test('ARCH-018-06 exposes lifecycle, rollout, and entitlement metadata', () => { const descriptor = new ConfigurationEntitlementsCustomizationDescriptor(); assert.ok(descriptor.changeLifecycleStages().includes(CHANGE_LIFECYCLE_STAGES.CONFIRM_ROLLBACK)); assert.ok(descriptor.stagedRolloutTargets().includes('percentage-or-cohort-within-one-tenant')); assert.ok(descriptor.featureReleaseQuestions().includes(FEATURE_RELEASE_QUESTIONS.ENTITLED)); assert.ok(descriptor.entitlementFields().includes('commercial-reference')); });

test('ARCH-018-06 exposes secrets, propagation, and testing metadata', () => { const descriptor = new ConfigurationEntitlementsCustomizationDescriptor(); assert.ok(descriptor.secretsProhibitedLocations().includes('client-side-feature-payloads')); assert.ok(descriptor.propagationDefinitions().includes('critical-invalidation-path')); assert.ok(descriptor.configurationTestingCoverageAreas().includes('secret-non-disclosure')); assert.ok(descriptor.configurationFailureBehaviors().includes('no-other-tenants-value-is-used-as-fallback')); });

test('ARCH-018-06 validates profiles and rejects configuration shortcuts', () => {
  const descriptor = new ConfigurationEntitlementsCustomizationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ mandatoryControlsNonOverridable: false, secretsReferencedNotEmbedded: false, arbitraryTenantCodeExecutedAsConfiguration: true, featureFlagsAuthoritativeForBillingOrSecurity: true, configurationFailureFallsBackToAnotherTenant: true, invalidConfigurationPartiallyActivated: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /non-overridable by tenant settings/);
  assert.match(validation.errors.join('\n'), /never embedded in ordinary configuration/);
  assert.match(validation.errors.join('\n'), /arbitrary tenant code/);
  assert.match(validation.errors.join('\n'), /authoritative billing or security system/);
  assert.match(validation.errors.join('\n'), /falling back to another tenant/);
  assert.match(validation.errors.join('\n'), /quarantined/);
});

test('ARCH-018-06 detects incomplete configuration, entitlements, and customization metadata', () => { class IncompleteDescriptor extends ConfigurationEntitlementsCustomizationDescriptor { configurationDomains() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === CONFIGURATION_ENTITLEMENTS_CUSTOMIZATION_ERROR_CODE); });

test('ARCH-018-06 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('ConfigurationEntitlementsCustomizationDescriptor');
  assert.ok(descriptor instanceof ConfigurationEntitlementsCustomizationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.configurationDomains.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ConfigurationEntitlementsCustomizationProfile({ profileName: 'Configuration, Entitlements, and Customization', ...metadata }); }
