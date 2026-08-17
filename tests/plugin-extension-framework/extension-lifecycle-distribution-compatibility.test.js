import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { EXTENSION_LIFECYCLE_DISTRIBUTION_COMPATIBILITY_ERROR_CODE, INSTALLATION_LIFECYCLE_STATES, PACKAGE_LIFECYCLE_STATES, STAGED_ROLLOUT_STAGES, ExtensionLifecycleDistributionCompatibilityDescriptor, ExtensionLifecycleDistributionCompatibilityProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['lifecyclePrinciples', 'packageLifecycleStates', 'installationLifecycleStates', 'designRegistrationFields', 'buildCandidateOutputs', 'validationReviewCoverage', 'certificationFields', 'publicationRequirements', 'installationRequestReviewItems', 'installationAssessmentFactors', 'provisioningOutputs', 'tenantSpecificValidationChecks', 'compatibilityDimensions', 'compatibilityPolicyElements', 'updatePolicies', 'updateAssessmentDifferences', 'stagedRolloutStages', 'dataMigrationDeclarations', 'rollbackAccountingItems', 'emergencySecurityActions', 'deprecationFields', 'uninstallSteps', 'lifecycleReconciliationComparisons', 'lifecycleEvidenceElements', 'architecturalRules'];

test('ARCH-019-04 exposes package and installation lifecycle state metadata', () => { const descriptor = new ExtensionLifecycleDistributionCompatibilityDescriptor(); assert.ok(descriptor.packageLifecycleStates().includes(PACKAGE_LIFECYCLE_STATES.IN_REVIEW)); assert.ok(descriptor.installationLifecycleStates().includes(INSTALLATION_LIFECYCLE_STATES.RETAINED)); assert.ok(descriptor.designRegistrationFields().includes('extension-class-and-risk')); assert.ok(descriptor.buildCandidateOutputs().includes('provenance-attestation')); });

test('ARCH-019-04 exposes compatibility, update, and rollout metadata', () => { const descriptor = new ExtensionLifecycleDistributionCompatibilityDescriptor(); assert.ok(descriptor.compatibilityDimensions().includes('host-isolation-class')); assert.ok(descriptor.updatePolicies().includes('automatic-compatible-minor-updates')); assert.ok(descriptor.stagedRolloutStages().includes(STAGED_ROLLOUT_STAGES.TENANT_COHORT)); assert.ok(descriptor.rollbackAccountingItems().includes('agent-or-tool-actions-executed')); });

test('ARCH-019-04 exposes uninstall, reconciliation, and evidence metadata', () => { const descriptor = new ExtensionLifecycleDistributionCompatibilityDescriptor(); assert.ok(descriptor.uninstallSteps().includes('apply-retention-legal-hold-or-erasure')); assert.ok(descriptor.lifecycleReconciliationComparisons().includes('host-loaded-package-digest')); assert.ok(descriptor.lifecycleEvidenceElements().includes('provider-reconciliation')); assert.ok(descriptor.emergencySecurityActions().includes('quarantine-data-and-logs')); });

test('ARCH-019-04 validates profiles and rejects lifecycle shortcuts', () => {
  const descriptor = new ExtensionLifecycleDistributionCompatibilityDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ installationsResolveExactDigests: false, newCapabilityRequiresRenewedApproval: false, tenantPurchaseCompletesInstallationApproval: true, listingRemovalSilentlyUninstalls: true, migrationsReadAnotherTenant: true, compatibilityIsSyntacticOnly: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /resolve exact package digests/);
  assert.match(validation.errors.join('\n'), /renewed approval/);
  assert.match(validation.errors.join('\n'), /completing installation approval/);
  assert.match(validation.errors.join('\n'), /silently uninstalling/);
  assert.match(validation.errors.join('\n'), /reading another tenant/);
  assert.match(validation.errors.join('\n'), /syntactic alone/);
});

test('ARCH-019-04 detects incomplete extension lifecycle, distribution, and compatibility metadata', () => { class IncompleteDescriptor extends ExtensionLifecycleDistributionCompatibilityDescriptor { packageLifecycleStates() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === EXTENSION_LIFECYCLE_DISTRIBUTION_COMPATIBILITY_ERROR_CODE); });

test('ARCH-019-04 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('ExtensionLifecycleDistributionCompatibilityDescriptor');
  assert.ok(descriptor instanceof ExtensionLifecycleDistributionCompatibilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.packageLifecycleStates.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ExtensionLifecycleDistributionCompatibilityProfile({ profileName: 'Extension Lifecycle, Distribution, and Compatibility', ...metadata }); }
