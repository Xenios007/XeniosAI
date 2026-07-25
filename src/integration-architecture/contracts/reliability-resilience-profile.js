export class ReliabilityResilienceProfile {
  constructor({
    reliabilityName,
    modelStages = [],
    principles = [],
    failureScenarios = [],
    degradationApproaches = [],
    controlledDependencyTargets = [],
    failureCategories = [],
    recoveryCapabilities = [],
    retryConsiderations = [],
    timeoutSupports = [],
    dependencyTypes = [],
    workflowTolerances = [],
    aiResilienceConsiderations = [],
    operationalContinuityCapabilities = [],
    availabilityEvaluationFactors = [],
    observabilityTelemetry = [],
    securityControls = [],
    governanceActivities = [],
    assumesFailure = true,
    isolatesFailures = true,
    preservesBusinessContinuity = true,
    supportsGracefulDegradation = true,
    enablesIndependentRecovery = true,
    idempotencyConsideredDuringContractDesign = true,
    timeoutReflectsBusinessRequirements = true,
    dependencyFailuresObservableRecoverable = true,
    aiFailuresNotAutomaticBusinessFailures = true,
    availabilityEvaluatedAtBusinessCapabilityLevel = true,
    securityPreservedDuringRecovery = true,
    vendorNeutral = true,
    technologyNeutral = true,
    resiliencyFrameworkSpecific = false,
    infrastructureProductSpecific = false,
    cloudServiceSpecific = false,
    monitoringToolSpecific = false,
    implementationMechanismSpecific = false,
    createsCascadingOperationalProblems = false,
    requiresUnrelatedRestartForRecovery = false
  }) {
    this.reliabilityName = reliabilityName;
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.failureScenarios = Object.freeze([...failureScenarios]);
    this.degradationApproaches = Object.freeze([...degradationApproaches]);
    this.controlledDependencyTargets = Object.freeze([...controlledDependencyTargets]);
    this.failureCategories = Object.freeze([...failureCategories]);
    this.recoveryCapabilities = Object.freeze([...recoveryCapabilities]);
    this.retryConsiderations = Object.freeze([...retryConsiderations]);
    this.timeoutSupports = Object.freeze([...timeoutSupports]);
    this.dependencyTypes = Object.freeze([...dependencyTypes]);
    this.workflowTolerances = Object.freeze([...workflowTolerances]);
    this.aiResilienceConsiderations = Object.freeze([...aiResilienceConsiderations]);
    this.operationalContinuityCapabilities = Object.freeze([...operationalContinuityCapabilities]);
    this.availabilityEvaluationFactors = Object.freeze([...availabilityEvaluationFactors]);
    this.observabilityTelemetry = Object.freeze([...observabilityTelemetry]);
    this.securityControls = Object.freeze([...securityControls]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.assumesFailure = Boolean(assumesFailure);
    this.isolatesFailures = Boolean(isolatesFailures);
    this.preservesBusinessContinuity = Boolean(preservesBusinessContinuity);
    this.supportsGracefulDegradation = Boolean(supportsGracefulDegradation);
    this.enablesIndependentRecovery = Boolean(enablesIndependentRecovery);
    this.idempotencyConsideredDuringContractDesign = Boolean(idempotencyConsideredDuringContractDesign);
    this.timeoutReflectsBusinessRequirements = Boolean(timeoutReflectsBusinessRequirements);
    this.dependencyFailuresObservableRecoverable = Boolean(dependencyFailuresObservableRecoverable);
    this.aiFailuresNotAutomaticBusinessFailures = Boolean(aiFailuresNotAutomaticBusinessFailures);
    this.availabilityEvaluatedAtBusinessCapabilityLevel = Boolean(availabilityEvaluatedAtBusinessCapabilityLevel);
    this.securityPreservedDuringRecovery = Boolean(securityPreservedDuringRecovery);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.resiliencyFrameworkSpecific = Boolean(resiliencyFrameworkSpecific);
    this.infrastructureProductSpecific = Boolean(infrastructureProductSpecific);
    this.cloudServiceSpecific = Boolean(cloudServiceSpecific);
    this.monitoringToolSpecific = Boolean(monitoringToolSpecific);
    this.implementationMechanismSpecific = Boolean(implementationMechanismSpecific);
    this.createsCascadingOperationalProblems = Boolean(createsCascadingOperationalProblems);
    this.requiresUnrelatedRestartForRecovery = Boolean(requiresUnrelatedRestartForRecovery);

    Object.freeze(this);
  }
}
