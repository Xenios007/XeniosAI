import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { EXTENSION_ADOPTION_PHASES, EXTENSION_ARCHITECTURE_GOALS, EXTENSION_CATEGORIES, EXTENSION_FOUNDATIONAL_INVARIANTS, PLUGIN_EXTENSION_OVERVIEW_ERROR_CODE, PluginExtensionOverviewDescriptor, PluginExtensionOverviewProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['businessScope', 'informationScope', 'applicationScope', 'technologyScope', 'scopeBoundaries', 'stakeholders', 'ecosystemBenefits', 'commonFailureModes', 'architectureGoals', 'nonGoals', 'foundationalInvariants', 'extensionCategories', 'ecosystemRoles', 'controlPlaneElements', 'runtimePlaneElements', 'capabilityMapAreas', 'trustModelSignals', 'capabilityGrantFields', 'extensionPointQuestions', 'targetStateRuntimeSteps', 'targetStateCharacteristics', 'adoptionPhases', 'architectureRisks', 'ecosystemMeasures', 'safetyMeasures', 'reliabilityMeasures', 'developerMeasures', 'governanceMeasures', 'architectureDeliverables', 'keyDecisions'];

test('ARCH-019-01 exposes scope, stakeholder, and invariant metadata', () => { const descriptor = new PluginExtensionOverviewDescriptor(); assert.ok(descriptor.extensionCategories().includes(EXTENSION_CATEGORIES.PROTOCOL)); assert.ok(descriptor.foundationalInvariants().includes(EXTENSION_FOUNDATIONAL_INVARIANTS.DENY_BY_DEFAULT_NETWORK)); assert.ok(descriptor.architectureGoals().includes(EXTENSION_ARCHITECTURE_GOALS.ISOLATION)); assert.ok(descriptor.scopeBoundaries().includes('permit-direct-cross-service-database-access')); });

test('ARCH-019-01 exposes control/runtime plane, capability, and trust metadata', () => { const descriptor = new PluginExtensionOverviewDescriptor(); assert.ok(descriptor.controlPlaneElements().includes('capability-grants')); assert.ok(descriptor.runtimePlaneElements().includes('tenant-storage')); assert.ok(descriptor.capabilityGrantFields().includes('validity-and-revocation')); assert.ok(descriptor.trustModelSignals().includes('current-operational-health')); });

test('ARCH-019-01 exposes adoption, risk, and measure metadata', () => { const descriptor = new PluginExtensionOverviewDescriptor(); assert.ok(descriptor.adoptionPhases().includes(EXTENSION_ADOPTION_PHASES.GROW_ECOSYSTEM)); assert.ok(descriptor.architectureRisks().includes('malicious-or-vulnerable-package')); assert.ok(descriptor.safetyMeasures().includes('cross-tenant-negative-test-coverage')); assert.ok(descriptor.keyDecisions().includes('hosts-mediate-all-sensitive-access')); });

test('ARCH-019-01 validates profiles and rejects extension shortcuts', () => {
  const descriptor = new PluginExtensionOverviewDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ everyExtensionHasStableIdentityOwnership: false, hostsMediateAllSensitiveAccess: false, extensionsReceiveAmbientCredentials: true, networkAccessAllowByDefault: true, arbitraryCodeSafeByDeclaration: true, aiGeneratedExtensionsReceiveSpecialTrust: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /stable identity and accountable ownership/);
  assert.match(validation.errors.join('\n'), /hosts to mediate all sensitive access/);
  assert.match(validation.errors.join('\n'), /ambient platform or tenant credentials/);
  assert.match(validation.errors.join('\n'), /deny by default/);
  assert.match(validation.errors.join('\n'), /arbitrary code safe by declaration/);
  assert.match(validation.errors.join('\n'), /special trust/);
});

test('ARCH-019-01 detects incomplete plugin extension overview metadata', () => { class IncompleteDescriptor extends PluginExtensionOverviewDescriptor { extensionCategories() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === PLUGIN_EXTENSION_OVERVIEW_ERROR_CODE); });

test('ARCH-019-01 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('PluginExtensionOverviewDescriptor');
  assert.ok(descriptor instanceof PluginExtensionOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.extensionCategories.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new PluginExtensionOverviewProfile({ frameworkName: 'Plugin and Extension Overview', ...metadata }); }
