import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { EVOLUTION_HORIZONS, EVOLUTION_RISKS, FUTURE_MULTI_TENANCY_EVOLUTION_ERROR_CODE, STABLE_ARCHITECTURAL_INVARIANTS, FutureMultiTenancyEvolutionDescriptor, FutureMultiTenancyEvolutionProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['evolutionPrinciples', 'stableArchitecturalInvariants', 'evolutionDrivers', 'evolutionHorizons', 'cellModelRequirements', 'cellDesignOptions', 'placementEvaluationFactors', 'placementRebalancingSteps', 'progressiveIsolationRequirements', 'sovereignDeploymentElements', 'providerPortabilityImprovements', 'futurePortabilityPackageContents', 'continuousVerificationCapabilities', 'digitalTwinFields', 'policyAsCodeMaturityItems', 'adaptiveGovernanceTargets', 'predictiveCapacityInputs', 'privacyPreservingControls', 'federatedLearningGovernanceAreas', 'aiAssistedOperationsAreas', 'remediationDefinitionFields', 'selfServiceEvolutionItems', 'ecosystemGrowthAreas', 'collaborationEvolutionFields', 'identityEvolutionPreservedElements', 'migrationFactoryMovementTypes', 'deletionVerificationDistinctions', 'sustainabilityConsiderations', 'evolutionGovernanceSteps', 'evolutionMetrics', 'evolutionRisks', 'architecturalRules'];

test('ARCH-018-10 exposes stable invariants, drivers, and horizon metadata', () => { const descriptor = new FutureMultiTenancyEvolutionDescriptor(); assert.ok(descriptor.stableArchitecturalInvariants().includes(STABLE_ARCHITECTURAL_INVARIANTS.NO_IMPLIED_AUTHORITY)); assert.ok(descriptor.evolutionDrivers().includes('larger-and-more-variable-ai-consumption')); assert.ok(descriptor.evolutionHorizons().includes(EVOLUTION_HORIZONS.CELLULAR_SOVEREIGN)); assert.ok(descriptor.cellModelRequirements().includes('no-unsafe-default-cell')); });

test('ARCH-018-10 exposes placement, portability, and verification metadata', () => { const descriptor = new FutureMultiTenancyEvolutionDescriptor(); assert.ok(descriptor.placementRebalancingSteps().includes('controlled-routing-cutover')); assert.ok(descriptor.futurePortabilityPackageContents().includes('integrity-manifest-and-reconciliation-report')); assert.ok(descriptor.continuousVerificationCapabilities().includes('evidence-freshness-monitoring')); assert.ok(descriptor.sovereignDeploymentElements().includes('disaster-recovery')); });

test('ARCH-018-10 exposes governance, metrics, and risk metadata', () => { const descriptor = new FutureMultiTenancyEvolutionDescriptor(); assert.ok(descriptor.evolutionGovernanceSteps().includes('limited-cohort-pilot')); assert.ok(descriptor.evolutionMetrics().includes('exception-retirement-rate')); assert.ok(descriptor.evolutionRisks().includes(EVOLUTION_RISKS.FALSE_ERASURE_ASSURANCE)); assert.ok(descriptor.deletionVerificationDistinctions().includes('cryptographically-inaccessible')); });

test('ARCH-018-10 validates profiles and rejects evolution shortcuts', () => {
  const descriptor = new FutureMultiTenancyEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ tenantSemanticsStableAcrossEvolution: false, cellsSupplementNotReplaceIsolation: false, rebalancingChangesTenantIdentity: true, tenantDataFreeTrainingAsset: true, singleWorkflowFlagProvesErasure: true, experimentalCapabilityRedefinesMandatoryControls: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /semantics to remain stable/);
  assert.match(validation.errors.join('\n'), /cell boundaries to supplement/);
  assert.match(validation.errors.join('\n'), /changing tenant identity/);
  assert.match(validation.errors.join('\n'), /free training or benchmarking asset/);
  assert.match(validation.errors.join('\n'), /workflow completion flag/);
  assert.match(validation.errors.join('\n'), /redefining mandatory production controls/);
});

test('ARCH-018-10 detects incomplete future multi-tenancy evolution metadata', () => { class IncompleteDescriptor extends FutureMultiTenancyEvolutionDescriptor { evolutionHorizons() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === FUTURE_MULTI_TENANCY_EVOLUTION_ERROR_CODE); });

test('ARCH-018-10 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('FutureMultiTenancyEvolutionDescriptor');
  assert.ok(descriptor instanceof FutureMultiTenancyEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.evolutionHorizons.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new FutureMultiTenancyEvolutionProfile({ profileName: 'Future Multi-Tenancy Evolution', ...metadata }); }
