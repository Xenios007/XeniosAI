export class BuildTestQualityProfile {
  constructor({
    qualityName,
    objectives = [], principles = [], failureClasses = [], buildStates = [], buildRequestFields = [],
    buildDefinitionFields = [], buildPlanFields = [], buildIsolationAreas = [], reproducibilityRequirements = [],
    dependencyTypes = [], dependencyPolicyFields = [], artifactTypes = [], artifactStates = [], testLevels = [],
    testSelectionFactors = [], qualityAttributes = [], aiEvaluationDimensions = [], qualityGates = [],
    qualityGateOutcomes = [], qualityEvidenceFields = [], governanceAreas = [], maturityLevels = [], measures = [],
    antiPatterns = [], architecturalRules = [], futureCapabilities = [], declaredInputsRequired = true,
    buildOncePromoteRequired = true, isolatedExecutionRequired = true, traceableArtifactsRequired = true,
    dependencyGovernanceRequired = true, deterministicBusinessTestsRequired = true, aiEvaluationContextRequired = true,
    tenantPropertyValidationRequired = true, flakyTestsAreDefects = true, explainableQualityGatesRequired = true,
    evidenceByDefault = true, aiSelfApprovalProhibited = true, vendorNeutral = true, technologyIndependent = true,
    prescribesBuildTool = false, prescribesTestFramework = false, prescribesArtifactRegistry = false,
    dependsOnDeveloperWorkstation = false, publishesFailedBuildArtifacts = false, rebuildsArtifactsPerEnvironment = false,
    treatsLogsAsProvenance = false, embedsSecretsInArtifacts = false, usesCoverageAsCorrectnessProof = false,
    treatsAiFluencyAsQuality = false, permitsAiSelfApproval = false
  }) {
    this.qualityName = qualityName;
    for (const [key, value] of Object.entries({ objectives, principles, failureClasses, buildStates, buildRequestFields,
      buildDefinitionFields, buildPlanFields, buildIsolationAreas, reproducibilityRequirements, dependencyTypes,
      dependencyPolicyFields, artifactTypes, artifactStates, testLevels, testSelectionFactors, qualityAttributes,
      aiEvaluationDimensions, qualityGates, qualityGateOutcomes, qualityEvidenceFields, governanceAreas, maturityLevels,
      measures, antiPatterns, architecturalRules, futureCapabilities })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ declaredInputsRequired, buildOncePromoteRequired,
      isolatedExecutionRequired, traceableArtifactsRequired, dependencyGovernanceRequired,
      deterministicBusinessTestsRequired, aiEvaluationContextRequired, tenantPropertyValidationRequired,
      flakyTestsAreDefects, explainableQualityGatesRequired, evidenceByDefault, aiSelfApprovalProhibited,
      vendorNeutral, technologyIndependent, prescribesBuildTool, prescribesTestFramework, prescribesArtifactRegistry,
      dependsOnDeveloperWorkstation, publishesFailedBuildArtifacts, rebuildsArtifactsPerEnvironment, treatsLogsAsProvenance,
      embedsSecretsInArtifacts, usesCoverageAsCorrectnessProof, treatsAiFluencyAsQuality, permitsAiSelfApproval })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}
