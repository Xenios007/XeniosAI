import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { BuildTestQualityProfile } from '../contracts/build-test-quality-profile.js';
import {
  AI_EVALUATION_DIMENSIONS, ARTIFACT_STATES, ARTIFACT_TYPES, BUILD_DEFINITION_FIELDS,
  BUILD_FAILURE_CLASSES, BUILD_ISOLATION_AREAS, BUILD_LIFECYCLE_STATES, BUILD_PLAN_FIELDS,
  BUILD_REQUEST_FIELDS, BUILD_TEST_QUALITY_ANTI_PATTERNS, BUILD_TEST_QUALITY_ARCHITECTURAL_RULES,
  BUILD_TEST_QUALITY_ERROR_CODE, BUILD_TEST_QUALITY_GOVERNANCE_AREAS, BUILD_TEST_QUALITY_MATURITY_LEVELS,
  BUILD_TEST_QUALITY_MEASURES, BUILD_TEST_QUALITY_OBJECTIVES, BUILD_TEST_QUALITY_PRINCIPLES,
  DEPENDENCY_POLICY_FIELDS, DEPENDENCY_TYPES, FUTURE_BUILD_TEST_QUALITY_CAPABILITIES,
  QUALITY_EVIDENCE_FIELDS, QUALITY_GATE_OUTCOMES, QUALITY_GATES, QUALITY_MODEL_ATTRIBUTES,
  REPRODUCIBILITY_REQUIREMENTS, TEST_LEVELS, TEST_SELECTION_FACTORS
} from '../build-quality-constants.js';

const MAP = Object.freeze({
  objectives: BUILD_TEST_QUALITY_OBJECTIVES,
  principles: BUILD_TEST_QUALITY_PRINCIPLES,
  failureClasses: BUILD_FAILURE_CLASSES,
  buildStates: BUILD_LIFECYCLE_STATES,
  buildRequestFields: BUILD_REQUEST_FIELDS,
  buildDefinitionFields: BUILD_DEFINITION_FIELDS,
  buildPlanFields: BUILD_PLAN_FIELDS,
  buildIsolationAreas: BUILD_ISOLATION_AREAS,
  reproducibilityRequirements: REPRODUCIBILITY_REQUIREMENTS,
  dependencyTypes: DEPENDENCY_TYPES,
  dependencyPolicyFields: DEPENDENCY_POLICY_FIELDS,
  artifactTypes: ARTIFACT_TYPES,
  artifactStates: ARTIFACT_STATES,
  testLevels: TEST_LEVELS,
  testSelectionFactors: TEST_SELECTION_FACTORS,
  qualityAttributes: QUALITY_MODEL_ATTRIBUTES,
  aiEvaluationDimensions: AI_EVALUATION_DIMENSIONS,
  qualityGates: QUALITY_GATES,
  qualityGateOutcomes: QUALITY_GATE_OUTCOMES,
  qualityEvidenceFields: QUALITY_EVIDENCE_FIELDS,
  governanceAreas: BUILD_TEST_QUALITY_GOVERNANCE_AREAS,
  maturityLevels: BUILD_TEST_QUALITY_MATURITY_LEVELS,
  measures: BUILD_TEST_QUALITY_MEASURES,
  antiPatterns: BUILD_TEST_QUALITY_ANTI_PATTERNS,
  architecturalRules: BUILD_TEST_QUALITY_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_BUILD_TEST_QUALITY_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  declaredInputsRequired: 'Builds must use identified source and declared inputs.',
  buildOncePromoteRequired: 'Artifacts must be built once and promoted without content changes.',
  isolatedExecutionRequired: 'Authoritative build and test execution must be isolated.',
  traceableArtifactsRequired: 'Artifacts must be traceable and immutable.',
  dependencyGovernanceRequired: 'Dependencies must be governed throughout their lifecycle.',
  deterministicBusinessTestsRequired: 'Business rules must be tested deterministically.',
  aiEvaluationContextRequired: 'AI evaluation context and statistical validity must be preserved.',
  tenantPropertyValidationRequired: 'Tenant and property validation must be preserved.',
  flakyTestsAreDefects: 'Flaky tests must be treated as quality defects.',
  explainableQualityGatesRequired: 'Quality gates must be explainable, owned, versioned, evidence based, and exception aware.',
  evidenceByDefault: 'Build, test, and quality evidence must be generated during execution.',
  aiSelfApprovalProhibited: 'AI implementation agents must not silently approve their own material changes.',
  vendorNeutral: 'Build, Test, and Quality must remain vendor neutral.',
  technologyIndependent: 'Build, Test, and Quality must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  prescribesBuildTool: 'ARCH-013-05 does not prescribe a build tool.',
  prescribesTestFramework: 'ARCH-013-05 does not prescribe a test framework.',
  prescribesArtifactRegistry: 'ARCH-013-05 does not prescribe an artifact registry.',
  dependsOnDeveloperWorkstation: 'Builds must not depend on developer workstations.',
  publishesFailedBuildArtifacts: 'Failed builds must not publish artifacts.',
  rebuildsArtifactsPerEnvironment: 'Artifacts must not be rebuilt per environment.',
  treatsLogsAsProvenance: 'Logs must not be treated as provenance.',
  embedsSecretsInArtifacts: 'Secrets must not be embedded in source, logs, caches, or artifacts.',
  usesCoverageAsCorrectnessProof: 'Coverage must not be treated as proof of correctness.',
  treatsAiFluencyAsQuality: 'AI must not be evaluated only by fluency.',
  permitsAiSelfApproval: 'AI agents must not approve their own material changes.'
});

export class BuildTestQualityDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  failureClasses() { return values(MAP.failureClasses); }
  buildStates() { return values(MAP.buildStates); }
  buildRequestFields() { return values(MAP.buildRequestFields); }
  buildDefinitionFields() { return values(MAP.buildDefinitionFields); }
  buildPlanFields() { return values(MAP.buildPlanFields); }
  buildIsolationAreas() { return values(MAP.buildIsolationAreas); }
  reproducibilityRequirements() { return values(MAP.reproducibilityRequirements); }
  dependencyTypes() { return values(MAP.dependencyTypes); }
  dependencyPolicyFields() { return values(MAP.dependencyPolicyFields); }
  artifactTypes() { return values(MAP.artifactTypes); }
  artifactStates() { return values(MAP.artifactStates); }
  testLevels() { return values(MAP.testLevels); }
  testSelectionFactors() { return values(MAP.testSelectionFactors); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  aiEvaluationDimensions() { return values(MAP.aiEvaluationDimensions); }
  qualityGates() { return values(MAP.qualityGates); }
  qualityGateOutcomes() { return values(MAP.qualityGateOutcomes); }
  qualityEvidenceFields() { return values(MAP.qualityEvidenceFields); }
  governanceAreas() { return values(MAP.governanceAreas); }
  maturityLevels() { return values(MAP.maturityLevels); }
  measures() { return values(MAP.measures); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof BuildTestQualityProfile ? profileInput : new BuildTestQualityProfile(profileInput);
    const errors = [];
    if (!profile.qualityName) errors.push('Build, Test, and Quality profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Build, Test, and Quality must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(BUILD_TEST_QUALITY_ERROR_CODE, 'Build, Test, and Quality violates ARCH-013-05.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
