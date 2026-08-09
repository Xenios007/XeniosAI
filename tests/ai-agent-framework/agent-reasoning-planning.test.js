import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_REASONING_PLANNING_ERROR_CODE,
  AgentReasoningPlanningDescriptor,
  AgentReasoningPlanningProfile,
  AMBIGUITY_CATEGORIES,
  CAPABILITY_CATALOG_FIELDS,
  GROUNDING_SOURCES,
  LOOP_DETECTION_SIGNALS,
  PLAN_FIELDS,
  PLAN_STATES,
  PLAN_VALIDATION_CHECKS,
  REASONING_ARCHITECTURAL_RULES,
  REASONING_ARCHITECTURE_BOUNDARIES,
  REASONING_EVIDENCE_FIELDS,
  REASONING_INPUTS,
  REASONING_MODES,
  REASONING_OUTPUT_TYPES,
  REASONING_QUALITY_ATTRIBUTES,
  REASONING_RESPONSIBILITIES,
  STOP_CONDITIONS,
  TASK_DEPENDENCY_TYPES,
  TRUTH_HIERARCHY_LEVELS,
  UNCERTAINTY_CATEGORIES,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-04 exposes reasoning responsibilities, inputs, outputs, ambiguity, and modes', () => {
  const descriptor = new AgentReasoningPlanningDescriptor();

  assert.ok(descriptor.reasoningResponsibilities().includes(REASONING_RESPONSIBILITIES.INTERPRET_GOALS));
  assert.ok(descriptor.reasoningInputs().includes(REASONING_INPUTS.AUTHORIZED_GOAL));
  assert.ok(descriptor.reasoningOutputTypes().includes(REASONING_OUTPUT_TYPES.CANDIDATE_PLAN));
  assert.ok(descriptor.reasoningOutputFields().includes('required-validation'));
  assert.ok(descriptor.structuredReasoningFields().includes('confidence-category'));
  assert.ok(descriptor.goalInterpretationFields().includes('completion-criteria'));
  assert.ok(descriptor.ambiguityCategories().includes(AMBIGUITY_CATEGORIES.PROPERTY));
  assert.ok(descriptor.missingInformationClasses().includes('required-for-authorization'));
  assert.ok(descriptor.conflictResolutionFactors().includes('business-service-state'));
  assert.ok(descriptor.reasoningModes().includes(REASONING_MODES.RETRIEVAL_GROUNDED));
  assert.ok(descriptor.reasoningStrategyFields().includes('human-decision-points'));
});

test('ARCH-014-04 exposes plan model, constraints, authority, capability, validation, approval, and replanning metadata', () => {
  const descriptor = new AgentReasoningPlanningDescriptor();

  assert.ok(descriptor.planFields().includes(PLAN_FIELDS.SUPERSESSION_RELATIONSHIP));
  assert.ok(descriptor.planStates().includes(PLAN_STATES.AWAITING_APPROVAL));
  assert.ok(descriptor.planCreationSteps().includes('submit-plan-for-deterministic-validation'));
  assert.ok(descriptor.taskDependencyTypes().includes(TASK_DEPENDENCY_TYPES.WORKFLOW));
  assert.ok(descriptor.planConstraints().includes('delegation-limits'));
  assert.ok(descriptor.authorityAwareTaskFields().includes('required-delegation-right'));
  assert.ok(descriptor.capabilityCatalogFields().includes(CAPABILITY_CATALOG_FIELDS.ERROR_MODEL));
  assert.ok(descriptor.planSelectionFactors().includes('completion-verifiability'));
  assert.ok(descriptor.planValidationChecks().includes(PLAN_VALIDATION_CHECKS.UNBOUNDED_LOOPS));
  assert.ok(descriptor.planApprovalBindings().includes('validity-period'));
  assert.ok(descriptor.planVersionRecordFields().includes('changed-completion-path'));
  assert.ok(descriptor.replanningTriggers().includes('authority-changes'));
  assert.ok(descriptor.replanningRules().includes('preserve-completed-task-evidence'));
  assert.ok(descriptor.planDriftIndicators().includes('unplanned-tool-use'));
});

test('ARCH-014-04 exposes uncertainty, grounding, validation, instructions, multi-agent, stop, evidence, evaluation, and boundaries', () => {
  const descriptor = new AgentReasoningPlanningDescriptor();

  assert.ok(descriptor.uncertaintyCategories().includes(UNCERTAINTY_CATEGORIES.CONFLICTED));
  assert.ok(descriptor.groundingSources().includes(GROUNDING_SOURCES.BUSINESS_SERVICE_RESULTS));
  assert.ok(descriptor.truthHierarchyLevels().includes(TRUTH_HIERARCHY_LEVELS.AGENT_INFERENCE));
  assert.ok(descriptor.validationMechanisms().includes('business-service-validation'));
  assert.ok(descriptor.humanDecisionRequestFields().includes('default-behavior-if-unanswered'));
  assert.ok(descriptor.instructionFields().includes('stop-conditions'));
  assert.ok(descriptor.instructionPriorityLevels().includes('retrieved-content'));
  assert.ok(descriptor.modelSelectionFactors().includes('evaluation-performance'));
  assert.ok(descriptor.multiAgentPlanFields().includes('return-contract'));
  assert.ok(descriptor.stopConditions().includes(STOP_CONDITIONS.NO_VALID_PLAN));
  assert.ok(descriptor.loopDetectionSignals().includes(LOOP_DETECTION_SIGNALS.NO_STATE_PROGRESS));
  assert.ok(descriptor.observabilitySignals().includes('replan-triggers'));
  assert.ok(descriptor.evidenceFields().includes(REASONING_EVIDENCE_FIELDS.PLAN_VALIDATION));
  assert.ok(descriptor.evaluationDimensions().includes('uncertainty-communication'));
  assert.ok(descriptor.qualityAttributes().includes(REASONING_QUALITY_ATTRIBUTES.SAFETY));
  assert.ok(descriptor.architecturalRules().includes(REASONING_ARCHITECTURAL_RULES.CONFIDENCE_NOT_EVIDENCE));
  assert.ok(descriptor.architectureBoundaries().includes(REASONING_ARCHITECTURE_BOUNDARIES.MODEL_AGENT_LIBRARY_SELECTION));
});

test('ARCH-014-04 validates complete profiles and rejects reasoning boundary violations', () => {
  const descriptor = new AgentReasoningPlanningDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    advisoryReasoning: false,
    deterministicValidation: false,
    preservesGoalFidelity: false,
    registeredCapabilitiesOnly: false,
    grantsAuthority: true,
    controlsRuntimeState: true,
    ownsBusinessTruth: true,
    inventsRequiredValues: true,
    silentlyBroadensGoal: true,
    infersMissingAuthority: true,
    resolvesConflictByFluency: true,
    planIsAuthority: true,
    inventsCapabilities: true,
    activatesUnvalidatedPlan: true,
    modelConfidenceOverridesEvidence: true,
    fluentSummaryAsCompletionEvidence: true,
    selectsModelOrAgentLibrary: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /interpret-natural-language-goals/);
  assert.match(invalid.errors.join('\n'), /authorized-goal/);
  assert.match(invalid.errors.join('\n'), /candidate-plan/);
  assert.match(invalid.errors.join('\n'), /Reasoning must remain advisory/);
  assert.match(invalid.errors.join('\n'), /Reasoning must not grant authority/);
  assert.match(invalid.errors.join('\n'), /The planner must not invent unregistered capabilities/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-04 does not select a model or agent library/);
});

test('ARCH-014-04 assertion detects incomplete reasoning metadata', () => {
  class IncompleteDescriptor extends AgentReasoningPlanningDescriptor {
    reasoningResponsibilities() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === AGENT_REASONING_PLANNING_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented reasoningResponsibilities'))
  );
});

test('ARCH-014-04 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('AgentReasoningPlanningDescriptor');

  assert.ok(descriptor instanceof AgentReasoningPlanningDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['reasoningResponsibilities', 'reasoningInputs', 'reasoningOutputTypes',
    'reasoningOutputFields', 'structuredReasoningFields', 'goalInterpretationFields',
    'ambiguityCategories', 'missingInformationClasses', 'conflictResolutionFactors', 'reasoningModes',
    'reasoningStrategyFields', 'planFields', 'planStates', 'planCreationSteps', 'taskDependencyTypes',
    'planConstraints', 'authorityAwareTaskFields', 'capabilityCatalogFields', 'planSelectionFactors',
    'planValidationChecks', 'planApprovalBindings', 'planVersionRecordFields', 'replanningTriggers',
    'replanningRules', 'planDriftIndicators', 'uncertaintyCategories', 'groundingSources',
    'truthHierarchyLevels', 'validationMechanisms', 'humanDecisionRequestFields', 'instructionFields',
    'instructionPriorityLevels', 'modelSelectionFactors', 'multiAgentPlanFields', 'stopConditions',
    'loopDetectionSignals', 'observabilitySignals', 'evidenceFields', 'evaluationDimensions',
    'qualityAttributes', 'architecturalRules', 'architectureBoundaries']) values[key] = descriptor[key]();
  return new AgentReasoningPlanningProfile({ reasoningName: 'Agent Reasoning and Planning', ...values });
}
