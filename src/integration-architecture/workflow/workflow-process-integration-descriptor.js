import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_WORKFLOW_PROCESS_DIRECTIONS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  PROCESS_STATE_STAGES,
  WORKFLOW_ACTIVITY_EXAMPLES,
  WORKFLOW_AI_RESPONSIBILITIES,
  WORKFLOW_DECISION_POINTS,
  WORKFLOW_FAILURE_HANDLING_CAPABILITIES,
  WORKFLOW_GOVERNANCE_ACTIVITIES,
  WORKFLOW_HUMAN_PARTICIPATION_TYPES,
  WORKFLOW_LIFECYCLE_STAGES,
  WORKFLOW_MODEL_STAGES,
  WORKFLOW_OBSERVABILITY_TELEMETRY,
  WORKFLOW_ORCHESTRATION_MODEL_STAGES,
  WORKFLOW_PARTICIPANTS,
  WORKFLOW_PRINCIPLES,
  WORKFLOW_PROCESS_OBJECTIVES,
  WORKFLOW_RELATIONSHIP_FLOW_STAGES,
  WORKFLOW_SECURITY_CONTROLS
} from '../constants.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';
import { WorkflowProcessProfile } from '../contracts/workflow-process-profile.js';

const MODEL = Object.freeze(Object.values(WORKFLOW_MODEL_STAGES));
const ORCHESTRATION_MODEL = Object.freeze(Object.values(WORKFLOW_ORCHESTRATION_MODEL_STAGES));
const LIFECYCLE = Object.freeze(Object.values(WORKFLOW_LIFECYCLE_STAGES));
const PROCESS_STATES = Object.freeze(Object.values(PROCESS_STATE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(WORKFLOW_RELATIONSHIP_FLOW_STAGES));

export class WorkflowProcessIntegrationDescriptor {
  objectives() {
    return Object.freeze(Object.values(WORKFLOW_PROCESS_OBJECTIVES));
  }

  workflowModel() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(WORKFLOW_PRINCIPLES));
  }

  participants() {
    return Object.freeze(Object.values(WORKFLOW_PARTICIPANTS));
  }

  orchestrationModel() {
    return ORCHESTRATION_MODEL;
  }

  activityExamples() {
    return Object.freeze(Object.values(WORKFLOW_ACTIVITY_EXAMPLES));
  }

  decisionPoints() {
    return Object.freeze(Object.values(WORKFLOW_DECISION_POINTS));
  }

  humanParticipationTypes() {
    return Object.freeze(Object.values(WORKFLOW_HUMAN_PARTICIPATION_TYPES));
  }

  aiResponsibilities() {
    return Object.freeze(Object.values(WORKFLOW_AI_RESPONSIBILITIES));
  }

  lifecycle() {
    return LIFECYCLE;
  }

  processStates() {
    return PROCESS_STATES;
  }

  failureHandlingCapabilities() {
    return Object.freeze(Object.values(WORKFLOW_FAILURE_HANDLING_CAPABILITIES));
  }

  observabilityTelemetry() {
    return Object.freeze(Object.values(WORKFLOW_OBSERVABILITY_TELEMETRY));
  }

  securityControls() {
    return Object.freeze(Object.values(WORKFLOW_SECURITY_CONTROLS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(WORKFLOW_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_WORKFLOW_PROCESS_DIRECTIONS));
  }

  validateWorkflow(profileInput) {
    const profile = profileInput instanceof WorkflowProcessProfile
      ? profileInput
      : new WorkflowProcessProfile(profileInput);
    const errors = [];

    if (!profile.workflowName) errors.push('Workflow must have a name.');
    appendMissing(errors, profile.modelStages, this.workflowModel(), 'Workflow model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Workflow principles should include');
    appendMissing(errors, profile.participants, this.participants(), 'Workflow participants should include');
    appendMissing(errors, profile.orchestrationModelStages, this.orchestrationModel(), 'Workflow orchestration model must include');
    appendMissing(errors, profile.activityExamples, this.activityExamples(), 'Workflow activities should include');
    appendMissing(errors, profile.decisionPoints, this.decisionPoints(), 'Workflow decision points should include');
    appendMissing(errors, profile.humanParticipationTypes, this.humanParticipationTypes(), 'Human participation should include');
    appendMissing(errors, profile.aiResponsibilities, this.aiResponsibilities(), 'AI participation should include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycle(), 'Workflow lifecycle must include');
    appendMissing(errors, profile.processStateStages, this.processStates(), 'Process states must include');
    appendMissing(errors, profile.failureHandlingCapabilities, this.failureHandlingCapabilities(), 'Workflow failure handling should include');
    appendMissing(errors, profile.observabilityTelemetry, this.observabilityTelemetry(), 'Workflow observability should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'Workflow security must include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Workflow governance should include');
    if (profile.representsBusinessProcess !== true) errors.push('Workflows must represent business processes rather than technical implementations.');
    if (profile.coordinatesWithoutOwningCapabilities !== true) errors.push('Workflows must coordinate services without assuming ownership.');
    if (profile.preservesServiceAutonomy !== true) errors.push('Workflows must preserve service autonomy.');
    if (profile.supportsLongRunningProcesses !== true) errors.push('Workflows must support long-running distributed processes.');
    if (profile.integratesHumanParticipation !== true) errors.push('Human participation should be integrated into workflow progression.');
    if (profile.integratesAiParticipation !== true) errors.push('AI participation should be integrated through governed controls.');
    if (profile.explicitProcessStates !== true) errors.push('Workflow processes must maintain explicit process states.');
    if (profile.deterministicObservableStateTransitions !== true) errors.push('State transitions should remain deterministic and observable.');
    if (profile.governedContracts !== true) errors.push('Every workflow participant must interact through governed integration contracts.');
    if (profile.securityControlsNotBypassed !== true) errors.push('Workflow orchestration must never bypass participating service security controls.');
    if (profile.technologyNeutral !== true) errors.push('Workflow & Process Integration must remain technology neutral.');
    if (profile.engineSpecific === true) errors.push('Specific workflow engines are outside ARCH-009-05 scope.');
    if (profile.frameworkSpecific === true) errors.push('Orchestration frameworks are outside ARCH-009-05 scope.');
    if (profile.bpmPlatformSpecific === true) errors.push('BPM platforms are outside ARCH-009-05 scope.');
    if (profile.stateMachineSpecific === true) errors.push('State machine implementations are outside ARCH-009-05 scope.');
    if (profile.vendorSpecific === true) errors.push('Workflow & Process Integration must remain vendor neutral.');
    if (profile.embedsServiceImplementationDetails === true) errors.push('Workflow logic should avoid service-specific implementation details.');
    if (profile.centralizesBusinessFunctionality === true) errors.push('Workflows orchestrate collaboration rather than centralize business functionality.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Workflow & Process Integration must include all documented objectives.');
    if (this.workflowModel().length !== 4) errors.push('Workflow & Process Integration must include the documented workflow model.');
    if (this.principles().length !== 5) errors.push('Workflow & Process Integration must include documented workflow principles.');
    if (this.participants().length !== 7) errors.push('Workflow & Process Integration must include documented participants.');
    if (this.orchestrationModel().length !== 5) errors.push('Workflow & Process Integration must include the documented orchestration model.');
    if (this.activityExamples().length !== 6) errors.push('Workflow & Process Integration must include documented activity examples.');
    if (this.decisionPoints().length !== 5) errors.push('Workflow & Process Integration must include documented decision points.');
    if (this.humanParticipationTypes().length !== 5) errors.push('Workflow & Process Integration must include documented human participation types.');
    if (this.aiResponsibilities().length !== 6) errors.push('Workflow & Process Integration must include documented AI responsibilities.');
    if (this.lifecycle().length !== 6) errors.push('Workflow & Process Integration must include the documented workflow lifecycle.');
    if (this.processStates().length !== 6) errors.push('Workflow & Process Integration must include documented process states.');
    if (this.failureHandlingCapabilities().length !== 6) errors.push('Workflow & Process Integration must include documented failure handling capabilities.');
    if (this.observabilityTelemetry().length !== 7) errors.push('Workflow & Process Integration must include documented observability telemetry.');
    if (this.securityControls().length !== 7) errors.push('Workflow & Process Integration must include documented security controls.');
    if (this.governanceActivities().length !== 7) errors.push('Workflow & Process Integration must include documented governance activities.');
    if (this.relationshipFlow().length !== 5) errors.push('Workflow & Process Integration must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('Workflow & Process Integration must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.WORKFLOW_PROCESS_INTEGRATION_INVALID,
        'Workflow & Process Integration violates ARCH-009-05.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new IntegrationArchitectureValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
