import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_EVALUATION_DIMENSIONS,
  ARTIFACT_STATES,
  ARTIFACT_TYPES,
  BUILD_FAILURE_CLASSES,
  BUILD_LIFECYCLE_STATES,
  BUILD_REQUEST_FIELDS,
  BUILD_TEST_QUALITY_ANTI_PATTERNS,
  BUILD_TEST_QUALITY_ARCHITECTURAL_RULES,
  BUILD_TEST_QUALITY_ERROR_CODE,
  BUILD_TEST_QUALITY_MEASURES,
  BUILD_TEST_QUALITY_OBJECTIVES,
  BUILD_TEST_QUALITY_PRINCIPLES,
  BuildTestQualityDescriptor,
  BuildTestQualityProfile,
  DEPENDENCY_TYPES,
  FUTURE_BUILD_TEST_QUALITY_CAPABILITIES,
  QUALITY_GATES,
  QUALITY_MODEL_ATTRIBUTES,
  TEST_LEVELS,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('build test and quality exposes objectives, principles, failures, lifecycle, and build records', () => {
  const descriptor = new BuildTestQualityDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(BUILD_TEST_QUALITY_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(BUILD_TEST_QUALITY_PRINCIPLES));
  assert.ok(descriptor.failureClasses().includes(BUILD_FAILURE_CLASSES.EVIDENCE_FAILURE));
  assert.ok(descriptor.buildStates().includes(BUILD_LIFECYCLE_STATES.PUBLISHING));
  assert.ok(descriptor.buildRequestFields().includes(BUILD_REQUEST_FIELDS.IDEMPOTENCY_IDENTITY));
  assert.ok(descriptor.buildDefinitionFields().includes('secret-reference-requirements'));
  assert.ok(descriptor.buildPlanFields().includes('dependency-identities-and-versions'));
  assert.ok(descriptor.buildIsolationAreas().includes('tenant-data'));
  assert.ok(descriptor.reproducibilityRequirements().includes('declared-external-inputs'));
});

test('build test and quality exposes dependencies, artifacts, tests, quality, and AI evaluation metadata', () => {
  const descriptor = new BuildTestQualityDescriptor();
  assert.ok(descriptor.dependencyTypes().includes(DEPENDENCY_TYPES.PROMPT_PACKAGES));
  assert.ok(descriptor.dependencyPolicyFields().includes('ai-provider-requirements'));
  assert.ok(descriptor.artifactTypes().includes(ARTIFACT_TYPES.AGENT_CONFIGURATIONS));
  assert.ok(descriptor.artifactStates().includes(ARTIFACT_STATES.QUARANTINED));
  assert.ok(descriptor.testLevels().includes(TEST_LEVELS.OPERATIONAL_READINESS));
  assert.ok(descriptor.testSelectionFactors().includes('tenant-and-property-exposure'));
  assert.ok(descriptor.qualityAttributes().includes(QUALITY_MODEL_ATTRIBUTES.AI_QUALITY));
  assert.ok(descriptor.aiEvaluationDimensions().includes(AI_EVALUATION_DIMENSIONS.TOOL_ARGUMENT_CORRECTNESS));
});

test('build test and quality exposes gates, evidence, governance, measures, anti-patterns, rules, and future metadata', () => {
  const descriptor = new BuildTestQualityDescriptor();
  assert.ok(descriptor.qualityGates().includes(QUALITY_GATES.PRODUCTION_AUTHORIZATION));
  assert.ok(descriptor.qualityGateOutcomes().includes('human-decision-required'));
  assert.ok(descriptor.qualityEvidenceFields().includes('artifact-and-provenance'));
  assert.ok(descriptor.governanceAreas().includes('ai-evaluation-standards'));
  assert.ok(descriptor.maturityLevels().includes('adaptive'));
  assert.ok(descriptor.measures().includes(BUILD_TEST_QUALITY_MEASURES.AI_EVALUATION_REGRESSION));
  assert.ok(descriptor.antiPatterns().includes(BUILD_TEST_QUALITY_ANTI_PATTERNS.AI_SELF_APPROVAL));
  assert.ok(descriptor.architecturalRules().includes(BUILD_TEST_QUALITY_ARCHITECTURAL_RULES.AI_CONTEXT_STATISTICAL_VALIDITY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_BUILD_TEST_QUALITY_CAPABILITIES.QUALITY_SUPPLY_CHAIN_DIGITAL_TWINS));
});

test('build test and quality validates complete profiles and rejects boundary violations', () => {
  const descriptor = new BuildTestQualityDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    qualityName: '',
    ...partialProfile(descriptor),
    declaredInputsRequired: false,
    buildOncePromoteRequired: false,
    isolatedExecutionRequired: false,
    traceableArtifactsRequired: false,
    dependencyGovernanceRequired: false,
    deterministicBusinessTestsRequired: false,
    aiEvaluationContextRequired: false,
    tenantPropertyValidationRequired: false,
    flakyTestsAreDefects: false,
    explainableQualityGatesRequired: false,
    evidenceByDefault: false,
    aiSelfApprovalProhibited: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesBuildTool: true,
    prescribesTestFramework: true,
    prescribesArtifactRegistry: true,
    dependsOnDeveloperWorkstation: true,
    publishesFailedBuildArtifacts: true,
    rebuildsArtifactsPerEnvironment: true,
    treatsLogsAsProvenance: true,
    embedsSecretsInArtifacts: true,
    usesCoverageAsCorrectnessProof: true,
    treatsAiFluencyAsQuality: true,
    permitsAiSelfApproval: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /eliminate-dependence-on-undocumented-local-state/);
  assert.match(invalid.errors.join('\n'), /build-once-promote/);
  assert.match(invalid.errors.join('\n'), /dependency-failure/);
  assert.match(invalid.errors.join('\n'), /Builds must use identified source and declared inputs/);
  assert.match(invalid.errors.join('\n'), /AI evaluation context and statistical validity/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a build tool/);
  assert.match(invalid.errors.join('\n'), /Failed builds must not publish artifacts/);
  assert.match(invalid.errors.join('\n'), /AI must not be evaluated only by fluency/);
});

test('build test and quality assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends BuildTestQualityDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === BUILD_TEST_QUALITY_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('build test and quality descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('BuildTestQualityDescriptor');
  assert.ok(descriptor instanceof BuildTestQualityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'failureClasses', 'buildStates', 'buildRequestFields',
    'buildDefinitionFields', 'buildPlanFields', 'buildIsolationAreas', 'reproducibilityRequirements', 'dependencyTypes',
    'dependencyPolicyFields', 'artifactTypes', 'artifactStates', 'testLevels', 'testSelectionFactors', 'qualityAttributes',
    'aiEvaluationDimensions', 'qualityGates', 'qualityGateOutcomes', 'qualityEvidenceFields', 'governanceAreas',
    'maturityLevels', 'measures', 'antiPatterns', 'architecturalRules', 'futureCapabilities']) values[key] = descriptor[key]();
  return new BuildTestQualityProfile({ qualityName: 'Build, Test, and Quality', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
