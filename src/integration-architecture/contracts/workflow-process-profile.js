export class WorkflowProcessProfile {
  constructor({
    workflowName,
    modelStages = [],
    principles = [],
    participants = [],
    orchestrationModelStages = [],
    activityExamples = [],
    decisionPoints = [],
    humanParticipationTypes = [],
    aiResponsibilities = [],
    lifecycleStages = [],
    processStateStages = [],
    failureHandlingCapabilities = [],
    observabilityTelemetry = [],
    securityControls = [],
    governanceActivities = [],
    representsBusinessProcess = true,
    coordinatesWithoutOwningCapabilities = true,
    preservesServiceAutonomy = true,
    supportsLongRunningProcesses = true,
    integratesHumanParticipation = true,
    integratesAiParticipation = true,
    explicitProcessStates = true,
    deterministicObservableStateTransitions = true,
    governedContracts = true,
    securityControlsNotBypassed = true,
    technologyNeutral = true,
    engineSpecific = false,
    frameworkSpecific = false,
    bpmPlatformSpecific = false,
    stateMachineSpecific = false,
    vendorSpecific = false,
    embedsServiceImplementationDetails = false,
    centralizesBusinessFunctionality = false
  }) {
    this.workflowName = workflowName;
    this.modelStages = Object.freeze([...modelStages]);
    this.principles = Object.freeze([...principles]);
    this.participants = Object.freeze([...participants]);
    this.orchestrationModelStages = Object.freeze([...orchestrationModelStages]);
    this.activityExamples = Object.freeze([...activityExamples]);
    this.decisionPoints = Object.freeze([...decisionPoints]);
    this.humanParticipationTypes = Object.freeze([...humanParticipationTypes]);
    this.aiResponsibilities = Object.freeze([...aiResponsibilities]);
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.processStateStages = Object.freeze([...processStateStages]);
    this.failureHandlingCapabilities = Object.freeze([...failureHandlingCapabilities]);
    this.observabilityTelemetry = Object.freeze([...observabilityTelemetry]);
    this.securityControls = Object.freeze([...securityControls]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.representsBusinessProcess = Boolean(representsBusinessProcess);
    this.coordinatesWithoutOwningCapabilities = Boolean(coordinatesWithoutOwningCapabilities);
    this.preservesServiceAutonomy = Boolean(preservesServiceAutonomy);
    this.supportsLongRunningProcesses = Boolean(supportsLongRunningProcesses);
    this.integratesHumanParticipation = Boolean(integratesHumanParticipation);
    this.integratesAiParticipation = Boolean(integratesAiParticipation);
    this.explicitProcessStates = Boolean(explicitProcessStates);
    this.deterministicObservableStateTransitions = Boolean(deterministicObservableStateTransitions);
    this.governedContracts = Boolean(governedContracts);
    this.securityControlsNotBypassed = Boolean(securityControlsNotBypassed);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.engineSpecific = Boolean(engineSpecific);
    this.frameworkSpecific = Boolean(frameworkSpecific);
    this.bpmPlatformSpecific = Boolean(bpmPlatformSpecific);
    this.stateMachineSpecific = Boolean(stateMachineSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);
    this.embedsServiceImplementationDetails = Boolean(embedsServiceImplementationDetails);
    this.centralizesBusinessFunctionality = Boolean(centralizesBusinessFunctionality);

    Object.freeze(this);
  }
}
