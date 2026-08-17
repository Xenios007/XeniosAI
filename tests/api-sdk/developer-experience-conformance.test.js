import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CONFORMANCE_RESULT_CLASSES, DEVELOPER_EXPERIENCE_BOUNDARIES,
  DEVELOPER_EXPERIENCE_CONFORMANCE_ERROR_CODE, DEVELOPER_EXPERIENCE_DEFINITIONS,
  DEVELOPER_EXPERIENCE_OBJECTIVES, DEVELOPER_EXPERIENCE_PRINCIPLES,
  DEVELOPER_EXPERIENCE_RULES, DEVELOPER_JOURNEY_STEPS, DEVELOPER_PERSONAS,
  DOCUMENTATION_CONTENT_TYPES, DRIFT_DETECTION_TARGETS, PIPELINE_STAGES,
  QUALITY_GATE_AREAS, TEST_ASSURANCE_TARGETS, TEST_EVIDENCE_TYPES,
  TEST_TYPE_COVERAGE, DeveloperExperienceConformanceDescriptor,
  DeveloperExperienceConformanceProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-07 exposes developer experience objectives, principles, definitions, journey, and personas', () => {
  const descriptor = new DeveloperExperienceConformanceDescriptor();
  assert.ok(descriptor.objectives().includes(DEVELOPER_EXPERIENCE_OBJECTIVES.PORTABLE_ASSURANCE));
  assert.ok(descriptor.principles().includes(DEVELOPER_EXPERIENCE_PRINCIPLES.CONFORMANCE_VERSIONED));
  assert.ok(descriptor.definitions().includes(DEVELOPER_EXPERIENCE_DEFINITIONS.CONFORMANCE_REPORT));
  assert.ok(descriptor.journeySteps().includes(DEVELOPER_JOURNEY_STEPS.RETIRE));
  assert.ok(descriptor.personas().includes(DEVELOPER_PERSONAS.AI_IMPLEMENTATION_AGENTS));
});

test('ARCH-017-07 exposes discovery, onboarding, documentation, examples, local development, test planning, and contract validation metadata', () => {
  const descriptor = new DeveloperExperienceConformanceDescriptor();
  assert.ok(descriptor.discoveryFields().includes('support-and-incident-routes'));
  assert.ok(descriptor.onboardingFields().includes('expiration-and-review-date'));
  assert.ok(descriptor.documentationContentTypes().includes(DOCUMENTATION_CONTENT_TYPES.MIGRATION));
  assert.ok(descriptor.exampleRequirements().includes('safe-idempotency-and-retry'));
  assert.ok(descriptor.localTestCapabilities().includes('error-and-latency-injection'));
  assert.ok(descriptor.testAssuranceTargets().includes(TEST_ASSURANCE_TARGETS.SDK_PRODUCT));
  assert.ok(descriptor.riskTestFactors().includes('ai-or-autonomous-consumption'));
  assert.ok(descriptor.testPlanFields().includes('exceptions-and-residual-risk'));
  assert.ok(descriptor.contractValidationAreas().includes('compatibility-with-prior-approved-contract'));
});

test('ARCH-017-07 exposes test coverage, environments, conformance, pipeline, gates, drift, evidence, governance, rules, and boundaries', () => {
  const descriptor = new DeveloperExperienceConformanceDescriptor();
  assert.ok(descriptor.testTypeCoverage().includes(TEST_TYPE_COVERAGE.TENANT_PROPERTY_ISOLATION));
  assert.ok(descriptor.testEnvironmentTypes().includes('pre-production'));
  assert.ok(descriptor.testDataControls().includes('tenant-and-property-scoped'));
  assert.ok(descriptor.conformanceDecisionFields().includes('validity-conditions-and-expiry'));
  assert.ok(descriptor.conformanceResultClasses().includes(CONFORMANCE_RESULT_CLASSES.APPROVED_EXCEPTION));
  assert.ok(descriptor.pipelineStages().includes(PIPELINE_STAGES.VERIFY_PUBLISHED));
  assert.ok(descriptor.qualityGateAreas().includes(QUALITY_GATE_AREAS.EXCEPTIONS));
  assert.ok(descriptor.driftDetectionTargets().includes(DRIFT_DETECTION_TARGETS.PRODUCTION_BEHAVIOR));
  assert.ok(descriptor.testEvidenceTypes().includes(TEST_EVIDENCE_TYPES.CONFORMANCE_REPORT));
  assert.ok(descriptor.governanceDecisions().includes('emergency-verification-or-suspension'));
  assert.ok(descriptor.architecturalRules().includes(DEVELOPER_EXPERIENCE_RULES.NON_PASS_NOT_PASSED));
  assert.ok(descriptor.architectureBoundaries().includes(DEVELOPER_EXPERIENCE_BOUNDARIES.NO_TOOL_SELECTION));
});

test('ARCH-017-07 validates complete profiles and rejects developer-experience and conformance shortcuts', () => {
  const descriptor = new DeveloperExperienceConformanceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const validation = descriptor.validateProfile({
    developerJourneyEndToEnd: false,
    behaviorBeyondSyntax: false,
    providerOwnsConformanceEvidence: false,
    isolationDemonstrated: false,
    conformanceClaimsScoped: false,
    schemaOnlyAssurance: true,
    happyPathReplacesNegativeTesting: true,
    testEnvironmentsControlFree: true,
    mockSuccessProductionConformance: true,
    skippedBlockedInconclusivePassed: true,
    aiGeneratedMockProvesCoverage: true,
    mandatesSpecificTooling: true
  });

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /fast-discovery-of-appropriate-api-products/);
  assert.match(validation.errors.join('\n'), /requires developer experience to span discovery through retirement/);
  assert.match(validation.errors.join('\n'), /schema validity alone/);
  assert.match(validation.errors.join('\n'), /reported as passed/);
  assert.match(validation.errors.join('\n'), /does not mandate a portal product/);
});

test('ARCH-017-07 detects incomplete developer experience metadata', () => {
  class IncompleteDescriptor extends DeveloperExperienceConformanceDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === DEVELOPER_EXPERIENCE_CONFORMANCE_ERROR_CODE
  );
});

test('ARCH-017-07 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('DeveloperExperienceConformanceDescriptor');
  assert.ok(descriptor instanceof DeveloperExperienceConformanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'principles', 'definitions', 'journeySteps', 'personas',
    'discoveryFields', 'onboardingFields', 'documentationContentTypes',
    'exampleRequirements', 'localTestCapabilities', 'testAssuranceTargets',
    'riskTestFactors', 'testPlanFields', 'contractValidationAreas', 'testTypeCoverage',
    'testEnvironmentTypes', 'testDataControls', 'conformanceDecisionFields',
    'conformanceResultClasses', 'pipelineStages', 'qualityGateAreas', 'driftDetectionTargets',
    'testEvidenceTypes', 'governanceDecisions', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new DeveloperExperienceConformanceProfile({
    profileName: 'Developer Experience, Testing, and Conformance',
    ...metadata
  });
}
