import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  WORKFLOW_SECURITY_CONTROLS,
  WorkflowProcessIntegrationDescriptor,
  WorkflowProcessProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('workflow process integration exposes documented objectives, models, lifecycle, and relationship flow', () => {
  const descriptor = new WorkflowProcessIntegrationDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(WORKFLOW_PROCESS_OBJECTIVES));
  assert.deepEqual(descriptor.workflowModel(), Object.values(WORKFLOW_MODEL_STAGES));
  assert.deepEqual(descriptor.orchestrationModel(), Object.values(WORKFLOW_ORCHESTRATION_MODEL_STAGES));
  assert.deepEqual(descriptor.lifecycle(), Object.values(WORKFLOW_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.processStates(), Object.values(PROCESS_STATE_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(WORKFLOW_RELATIONSHIP_FLOW_STAGES));
});

test('workflow process integration exposes participants, activities, decisions, human, AI, reliability, security, and governance metadata', () => {
  const descriptor = new WorkflowProcessIntegrationDescriptor();

  assert.ok(descriptor.principles().includes(WORKFLOW_PRINCIPLES.ORCHESTRATION_WITHOUT_OWNERSHIP));
  assert.ok(descriptor.participants().includes(WORKFLOW_PARTICIPANTS.PARTNER_PLATFORMS));
  assert.ok(descriptor.activityExamples().includes(WORKFLOW_ACTIVITY_EXAMPLES.EXECUTE_AI_ANALYSIS));
  assert.ok(descriptor.decisionPoints().includes(WORKFLOW_DECISION_POINTS.AI_CONFIDENCE_SUFFICIENT));
  assert.ok(descriptor.humanParticipationTypes().includes(WORKFLOW_HUMAN_PARTICIPATION_TYPES.EXCEPTION_HANDLING));
  assert.ok(descriptor.aiResponsibilities().includes(WORKFLOW_AI_RESPONSIBILITIES.KNOWLEDGE_RETRIEVAL));
  assert.ok(descriptor.failureHandlingCapabilities().includes(WORKFLOW_FAILURE_HANDLING_CAPABILITIES.COMPENSATION));
  assert.ok(descriptor.observabilityTelemetry().includes(WORKFLOW_OBSERVABILITY_TELEMETRY.HUMAN_APPROVALS));
  assert.ok(descriptor.securityControls().includes(WORKFLOW_SECURITY_CONTROLS.ZERO_TRUST));
  assert.ok(descriptor.governanceActivities().includes(WORKFLOW_GOVERNANCE_ACTIVITIES.CONTINUOUS_REVIEW));
});

test('workflow process integration validates business-centric governed workflows', () => {
  const descriptor = new WorkflowProcessIntegrationDescriptor();
  const valid = descriptor.validateWorkflow(
    new WorkflowProcessProfile({
      workflowName: 'Reservation Approval Workflow',
      modelStages: Object.values(WORKFLOW_MODEL_STAGES),
      principles: Object.values(WORKFLOW_PRINCIPLES),
      participants: Object.values(WORKFLOW_PARTICIPANTS),
      orchestrationModelStages: Object.values(WORKFLOW_ORCHESTRATION_MODEL_STAGES),
      activityExamples: Object.values(WORKFLOW_ACTIVITY_EXAMPLES),
      decisionPoints: Object.values(WORKFLOW_DECISION_POINTS),
      humanParticipationTypes: Object.values(WORKFLOW_HUMAN_PARTICIPATION_TYPES),
      aiResponsibilities: Object.values(WORKFLOW_AI_RESPONSIBILITIES),
      lifecycleStages: Object.values(WORKFLOW_LIFECYCLE_STAGES),
      processStateStages: Object.values(PROCESS_STATE_STAGES),
      failureHandlingCapabilities: Object.values(WORKFLOW_FAILURE_HANDLING_CAPABILITIES),
      observabilityTelemetry: Object.values(WORKFLOW_OBSERVABILITY_TELEMETRY),
      securityControls: Object.values(WORKFLOW_SECURITY_CONTROLS),
      governanceActivities: Object.values(WORKFLOW_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateWorkflow({
    workflowName: '',
    modelStages: [WORKFLOW_MODEL_STAGES.BUSINESS_PROCESS],
    principles: [WORKFLOW_PRINCIPLES.PROCESS_CENTRIC_DESIGN],
    participants: [WORKFLOW_PARTICIPANTS.BUSINESS_SERVICES],
    orchestrationModelStages: [WORKFLOW_ORCHESTRATION_MODEL_STAGES.WORKFLOW],
    activityExamples: [WORKFLOW_ACTIVITY_EXAMPLES.VALIDATE_CUSTOMER],
    decisionPoints: [WORKFLOW_DECISION_POINTS.APPROVAL_REQUIRED],
    humanParticipationTypes: [WORKFLOW_HUMAN_PARTICIPATION_TYPES.APPROVALS],
    aiResponsibilities: [WORKFLOW_AI_RESPONSIBILITIES.CLASSIFICATION],
    lifecycleStages: [WORKFLOW_LIFECYCLE_STAGES.DESIGNED],
    processStateStages: [PROCESS_STATE_STAGES.CREATED],
    failureHandlingCapabilities: [WORKFLOW_FAILURE_HANDLING_CAPABILITIES.RETRY_POLICIES],
    observabilityTelemetry: [WORKFLOW_OBSERVABILITY_TELEMETRY.PROCESS_STATUS],
    securityControls: [WORKFLOW_SECURITY_CONTROLS.IDENTITY],
    governanceActivities: [WORKFLOW_GOVERNANCE_ACTIVITIES.PROCESS_OWNERSHIP],
    representsBusinessProcess: false,
    coordinatesWithoutOwningCapabilities: false,
    preservesServiceAutonomy: false,
    supportsLongRunningProcesses: false,
    integratesHumanParticipation: false,
    integratesAiParticipation: false,
    explicitProcessStates: false,
    deterministicObservableStateTransitions: false,
    governedContracts: false,
    securityControlsNotBypassed: false,
    technologyNeutral: false,
    engineSpecific: true,
    frameworkSpecific: true,
    bpmPlatformSpecific: true,
    stateMachineSpecific: true,
    vendorSpecific: true,
    embedsServiceImplementationDetails: true,
    centralizesBusinessFunctionality: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Workflow must have a name/);
  assert.match(invalid.errors.join('\n'), /Workflow/);
  assert.match(invalid.errors.join('\n'), /orchestration-without-ownership/);
  assert.match(invalid.errors.join('\n'), /ai-agents/);
  assert.match(invalid.errors.join('\n'), /Activity/);
  assert.match(invalid.errors.join('\n'), /approve-request/);
  assert.match(invalid.errors.join('\n'), /eligibility-verified/);
  assert.match(invalid.errors.join('\n'), /reviews/);
  assert.match(invalid.errors.join('\n'), /recommendation/);
  assert.match(invalid.errors.join('\n'), /Published/);
  assert.match(invalid.errors.join('\n'), /Validated/);
  assert.match(invalid.errors.join('\n'), /compensation/);
  assert.match(invalid.errors.join('\n'), /activity-completion/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /version-management/);
  assert.match(invalid.errors.join('\n'), /business processes rather than technical implementations/);
  assert.match(invalid.errors.join('\n'), /without assuming ownership/);
  assert.match(invalid.errors.join('\n'), /workflow engines are outside ARCH-009-05 scope/);
  assert.match(invalid.errors.join('\n'), /BPM platforms are outside ARCH-009-05 scope/);
  assert.match(invalid.errors.join('\n'), /centralize business functionality/);
});

test('workflow process integration reports future directions without implementing them', () => {
  const descriptor = new WorkflowProcessIntegrationDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_WORKFLOW_PROCESS_DIRECTIONS.AI_ASSISTED_ORCHESTRATION));
  assert.ok(descriptor.futureDirections().includes(FUTURE_WORKFLOW_PROCESS_DIRECTIONS.PREDICTIVE_EXCEPTION_HANDLING));
  assert.ok(descriptor.futureDirections().includes(FUTURE_WORKFLOW_PROCESS_DIRECTIONS.SELF_OPTIMIZING_ORCHESTRATION));
});

test('workflow process integration assertion rejects incomplete metadata', () => {
  class IncompleteWorkflowProcessIntegrationDescriptor extends WorkflowProcessIntegrationDescriptor {
    participants() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteWorkflowProcessIntegrationDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.WORKFLOW_PROCESS_INTEGRATION_INVALID &&
      error.details.errors.some(message => message.includes('participants'))
  );
});

test('workflow process integration descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('WorkflowProcessIntegrationDescriptor');

  assert.ok(descriptor instanceof WorkflowProcessIntegrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
