import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { REFERENCE_ARCHITECTURAL_RULES, REFERENCE_IMPLEMENTATION_OVERVIEW_ERROR_CODE, REFERENCE_MISSION_QUESTIONS, REFERENCE_QUALITY_ATTRIBUTES, ReferenceImplementationOverviewDescriptor, ReferenceImplementationOverviewProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['referenceMissionQuestions', 'portfolioReferenceTiers', 'referenceStakeholderNeeds', 'referenceTargetStateCharacteristics', 'referenceQualityAttributes', 'referenceAdoptionPathSteps', 'referenceSuccessMeasures', 'referenceDeclarationFields', 'architecturalRules'];

test('ARCH-020-01 exposes mission, portfolio, and stakeholder metadata', () => { const descriptor = new ReferenceImplementationOverviewDescriptor(); assert.ok(descriptor.referenceMissionQuestions().includes(REFERENCE_MISSION_QUESTIONS.FAILURE_CONTAINMENT)); assert.ok(descriptor.portfolioReferenceTiers().includes('casa-lluvia-staycation-demonstrates-one-tenant-and-one-property-with-availability-pricing-reservation-add-ons-guest-authorization-communication-knowledge-and-operations')); assert.ok(descriptor.referenceStakeholderNeeds().includes('security-and-privacy:threat-scenarios-controls-and-evidence')); });

test('ARCH-020-01 exposes target state, quality attribute, and adoption metadata', () => { const descriptor = new ReferenceImplementationOverviewDescriptor(); assert.ok(descriptor.referenceTargetStateCharacteristics().includes('multi-tenant-testable')); assert.ok(descriptor.referenceQualityAttributes().includes(REFERENCE_QUALITY_ATTRIBUTES.RELIABILITY)); assert.ok(descriptor.referenceAdoptionPathSteps().includes('run-the-complete-conformance-profile')); });

test('ARCH-020-01 exposes success measure, declaration field, and architectural rule metadata', () => { const descriptor = new ReferenceImplementationOverviewDescriptor(); assert.ok(descriptor.referenceSuccessMeasures().includes('recovery-exercise-success')); assert.ok(descriptor.referenceDeclarationFields().includes('maintenance-owner')); assert.ok(descriptor.architecturalRules().includes(REFERENCE_ARCHITECTURAL_RULES.CONSUMERS_REUSE_PATTERNS_NOT_ACCIDENTS)); });

test('ARCH-020-01 validates profiles and rejects reference-portfolio shortcuts', () => {
  const descriptor = new ReferenceImplementationOverviewDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ consumersReusePatternsNotUndocumentedImplementationAccidents: false, everyReferenceDeclaresAllValidationCriteriaFields: false, consumersCopyEntireSolutionInsteadOfSelectingReusablePatterns: true, referencePortfolioLeftUnversionedOrUnmaintained: true, referenceLimitationsLeftUndisclosed: true, referenceRetirementOccursWithoutGovernedFeedback: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /reuse patterns, not undocumented/);
  assert.match(validation.errors.join('\n'), /declare purpose/);
  assert.match(validation.errors.join('\n'), /copying the entire solution/);
  assert.match(validation.errors.join('\n'), /unversioned or unmaintained/);
  assert.match(validation.errors.join('\n'), /limitations from being left undisclosed/);
  assert.match(validation.errors.join('\n'), /without governed feedback/);
});

test('ARCH-020-01 detects incomplete reference implementation overview metadata', () => { class IncompleteDescriptor extends ReferenceImplementationOverviewDescriptor { portfolioReferenceTiers() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === REFERENCE_IMPLEMENTATION_OVERVIEW_ERROR_CODE); });

test('ARCH-020-01 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('ReferenceImplementationOverviewDescriptor');
  assert.ok(descriptor instanceof ReferenceImplementationOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.portfolioReferenceTiers.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ReferenceImplementationOverviewProfile({ portfolioName: 'Reference Implementation Overview', ...metadata }); }
