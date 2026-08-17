import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { IMPLEMENTATION_LIFECYCLE_STEPS, METHODOLOGY_ARCHITECTURAL_RULES, METHOD_PRINCIPLES, REFERENCE_IMPLEMENTATION_METHODOLOGY_ERROR_CODE, ReferenceImplementationMethodologyDescriptor, ReferenceImplementationMethodologyProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['methodPrinciples', 'scenarioSelectionCriteria', 'scenarioDefinitionFields', 'architectureTraceabilityMappings', 'conformanceProfileElements', 'implementationLifecycleSteps', 'evidencePackageItems', 'variationPointCategories', 'divergenceClassifications', 'reviewGateAreas', 'maintenanceMonitoringAreas', 'retirementElements', 'architecturalRules'];

test('ARCH-020-02 exposes method principle, selection, and scenario-definition metadata', () => { const descriptor = new ReferenceImplementationMethodologyDescriptor(); assert.ok(descriptor.methodPrinciples().includes(METHOD_PRINCIPLES.FEED_FINDINGS_BACK)); assert.ok(descriptor.scenarioSelectionCriteria().includes('cost-to-maintain')); assert.ok(descriptor.scenarioDefinitionFields().includes('alternative-and-failure-paths')); });

test('ARCH-020-02 exposes traceability, conformance, and lifecycle metadata', () => { const descriptor = new ReferenceImplementationMethodologyDescriptor(); assert.ok(descriptor.architectureTraceabilityMappings().includes('workflow:lifecycle-tasks-retries-compensation')); assert.ok(descriptor.conformanceProfileElements().includes('review-authority')); assert.ok(descriptor.implementationLifecycleSteps().includes(IMPLEMENTATION_LIFECYCLE_STEPS.RELEASE_VERSIONED_REFERENCE)); });

test('ARCH-020-02 exposes evidence, variation, divergence, and review-gate metadata', () => { const descriptor = new ReferenceImplementationMethodologyDescriptor(); assert.ok(descriptor.evidencePackageItems().includes('deployment-and-recovery-exercise')); assert.ok(descriptor.variationPointCategories().includes('identity-provider')); assert.ok(descriptor.divergenceClassifications().includes('architecture-change-proposal')); assert.ok(descriptor.reviewGateAreas().includes('maintenance-ownership')); });

test('ARCH-020-02 exposes maintenance, retirement, and architectural rule metadata', () => { const descriptor = new ReferenceImplementationMethodologyDescriptor(); assert.ok(descriptor.maintenanceMonitoringAreas().includes('test-drift')); assert.ok(descriptor.retirementElements().includes('removal-of-obsolete-credentials-or-hosted-demonstrations')); assert.ok(descriptor.architecturalRules().includes(METHODOLOGY_ARCHITECTURAL_RULES.CHANGES_FOLLOW_GOVERNANCE_NOT_DRIFT)); });

test('ARCH-020-02 validates profiles and rejects methodology shortcuts', () => {
  const descriptor = new ReferenceImplementationMethodologyDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ traceabilityIsBidirectionalBetweenArchitectureAndExamples: false, architectureChangesFollowGovernanceNeverExampleDrift: false, scenariosDuplicateWithoutDemonstratingMeaningfulVariant: true, unclassifiedDivergencePresentedAsConformant: true, staleReferenceSilentlyPresentedAsCurrent: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /traceability to be bidirectional/);
  assert.match(validation.errors.join('\n'), /never example drift/);
  assert.match(validation.errors.join('\n'), /demonstrating a meaningful variant/);
  assert.match(validation.errors.join('\n'), /presented as conformant/);
  assert.match(validation.errors.join('\n'), /marked unsupported/);
});

test('ARCH-020-02 detects incomplete reference implementation methodology metadata', () => { class IncompleteDescriptor extends ReferenceImplementationMethodologyDescriptor { divergenceClassifications() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === REFERENCE_IMPLEMENTATION_METHODOLOGY_ERROR_CODE); });

test('ARCH-020-02 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('ReferenceImplementationMethodologyDescriptor');
  assert.ok(descriptor instanceof ReferenceImplementationMethodologyDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.divergenceClassifications.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ReferenceImplementationMethodologyProfile({ methodologyName: 'Reference Implementation Methodology', ...metadata }); }
