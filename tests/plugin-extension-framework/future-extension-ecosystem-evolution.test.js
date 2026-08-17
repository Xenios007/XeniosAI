import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { EVOLUTION_HORIZONS, EVOLUTION_PRINCIPLES, FUTURE_EXTENSION_ARCHITECTURAL_RULES, FUTURE_EXTENSION_ECOSYSTEM_EVOLUTION_ERROR_CODE, FutureExtensionEcosystemEvolutionDescriptor, FutureExtensionEcosystemEvolutionProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['evolutionPrinciples', 'stableInvariants', 'evolutionDrivers', 'evolutionHorizons', 'mcpMappingItems', 'portableCapabilityDescriptorEnablements', 'federationRequirements', 'sovereignDistributionElements', 'solutionBundleComponents', 'composableExtensionRequirements', 'aiAssistedDevelopmentAreas', 'behavioralAttestationObservations', 'continuousCertificationInputs', 'adaptiveIsolationRequirements', 'predictiveOperationsForecasts', 'automatedRemediationActions', 'crossPlatformPortabilityItems', 'communityEcosystemItems', 'selfServiceEcosystemItems', 'evolutionGovernanceSteps', 'evolutionMetrics', 'evolutionRiskGuardrails', 'architecturalRules'];

test('ARCH-019-10 exposes evolution principle, invariant, driver, and horizon metadata', () => { const descriptor = new FutureExtensionEcosystemEvolutionDescriptor(); assert.ok(descriptor.evolutionPrinciples().includes(EVOLUTION_PRINCIPLES.OPEN_INTEROP_NOT_OPEN_AUTHORITY)); assert.ok(descriptor.stableInvariants().includes('host-mediated-access')); assert.ok(descriptor.evolutionDrivers().includes('model-context-protocol-adoption')); assert.ok(descriptor.evolutionHorizons().includes(EVOLUTION_HORIZONS.FEDERATED_MCP_NATIVE)); });

test('ARCH-019-10 exposes MCP, federation, sovereignty, and bundle metadata', () => { const descriptor = new FutureExtensionEcosystemEvolutionDescriptor(); assert.ok(descriptor.mcpMappingItems().includes('tool-invocation-to-agent-and-user-authority')); assert.ok(descriptor.federationRequirements().includes('conflict-and-dispute-handling')); assert.ok(descriptor.sovereignDistributionElements().includes('keys-and-secrets')); assert.ok(descriptor.solutionBundleComponents().includes('test-and-assurance-profiles')); });

test('ARCH-019-10 exposes AI-assisted, attestation, certification, and isolation metadata', () => { const descriptor = new FutureExtensionEcosystemEvolutionDescriptor(); assert.ok(descriptor.aiAssistedDevelopmentAreas().includes('security-findings-remediation')); assert.ok(descriptor.behavioralAttestationObservations().includes('destinations-contacted')); assert.ok(descriptor.continuousCertificationInputs().includes('review-expiry')); assert.ok(descriptor.adaptiveIsolationRequirements().includes('tenant-safe-cutover')); });

test('ARCH-019-10 exposes governance, metrics, and risk-guardrail metadata', () => { const descriptor = new FutureExtensionEcosystemEvolutionDescriptor(); assert.ok(descriptor.evolutionGovernanceSteps().includes('limited-publisher-and-tenant-pilot')); assert.ok(descriptor.evolutionMetrics().includes('ai-generated-defect-and-security-rates')); assert.ok(descriptor.evolutionRiskGuardrails().includes('escrow-violates-rights:explicit-triggers-rights-custody-audit')); assert.ok(descriptor.architecturalRules().includes(FUTURE_EXTENSION_ARCHITECTURAL_RULES.BUNDLES_NEVER_HIDE_CAPABILITIES)); });

test('ARCH-019-10 validates profiles and rejects future-ecosystem shortcuts', () => {
  const descriptor = new FutureExtensionEcosystemEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ federationNeverImportsRuntimeAuthorityAutomatically: false, bundleIsNotShortcutAroundIndividualCapabilityApproval: false, mcpToolsUnfilteredOrUntenantBound: true, bundlesHideComponentGrantsOrDataFlow: true, stableExtensionAndTenantSemanticsChangeAcrossEvolution: true, externalMarketplacePurchaseBypassesTenantInstallationApproval: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /import runtime authority automatically/);
  assert.match(validation.errors.join('\n'), /shortcut around individual capability approval/);
  assert.match(validation.errors.join('\n'), /tenant bound/);
  assert.match(validation.errors.join('\n'), /hiding any component/);
  assert.match(validation.errors.join('\n'), /semantics from changing/);
  assert.match(validation.errors.join('\n'), /bypassing XeniosAI tenant installation/);
});

test('ARCH-019-10 detects incomplete future extension ecosystem metadata', () => { class IncompleteDescriptor extends FutureExtensionEcosystemEvolutionDescriptor { evolutionHorizons() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === FUTURE_EXTENSION_ECOSYSTEM_EVOLUTION_ERROR_CODE); });

test('ARCH-019-10 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('FutureExtensionEcosystemEvolutionDescriptor');
  assert.ok(descriptor instanceof FutureExtensionEcosystemEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.evolutionHorizons.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new FutureExtensionEcosystemEvolutionProfile({ profileName: 'Future Extension Ecosystem Evolution', ...metadata }); }
