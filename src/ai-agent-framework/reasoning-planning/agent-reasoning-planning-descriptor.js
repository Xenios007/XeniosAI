import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { AgentReasoningPlanningProfile } from '../contracts/agent-reasoning-planning-profile.js';
import {
  AGENT_REASONING_PLANNING_ERROR_CODE, AMBIGUITY_CATEGORIES, AUTHORITY_AWARE_TASK_FIELDS,
  CAPABILITY_CATALOG_FIELDS, CONFLICT_RESOLUTION_FACTORS, GOAL_INTERPRETATION_FIELDS,
  GROUNDING_SOURCES, HUMAN_DECISION_REQUEST_FIELDS, INSTRUCTION_FIELDS, INSTRUCTION_PRIORITY_LEVELS,
  LOOP_DETECTION_SIGNALS, MISSING_INFORMATION_CLASSES, MODEL_SELECTION_FACTORS,
  MULTI_AGENT_PLAN_FIELDS, PLAN_APPROVAL_BINDINGS, PLAN_CONSTRAINTS, PLAN_CREATION_STEPS,
  PLAN_DRIFT_INDICATORS, PLAN_FIELDS, PLAN_SELECTION_FACTORS, PLAN_STATES, PLAN_VALIDATION_CHECKS,
  PLAN_VERSION_RECORD_FIELDS, REASONING_ARCHITECTURAL_RULES, REASONING_ARCHITECTURE_BOUNDARIES,
  REASONING_EVALUATION_DIMENSIONS, REASONING_EVIDENCE_FIELDS, REASONING_INPUTS, REASONING_MODES,
  REASONING_OBSERVABILITY_SIGNALS, REASONING_OUTPUT_FIELDS, REASONING_OUTPUT_TYPES,
  REASONING_QUALITY_ATTRIBUTES, REASONING_RESPONSIBILITIES, REASONING_STRATEGY_FIELDS,
  REPLANNING_RULES, REPLANNING_TRIGGERS, STOP_CONDITIONS, STRUCTURED_REASONING_FIELDS,
  TASK_DEPENDENCY_TYPES, TRUTH_HIERARCHY_LEVELS, UNCERTAINTY_CATEGORIES, VALIDATION_MECHANISMS
} from '../reasoning-planning-constants.js';

const MAP = Object.freeze({
  reasoningResponsibilities: REASONING_RESPONSIBILITIES,
  reasoningInputs: REASONING_INPUTS,
  reasoningOutputTypes: REASONING_OUTPUT_TYPES,
  reasoningOutputFields: REASONING_OUTPUT_FIELDS,
  structuredReasoningFields: STRUCTURED_REASONING_FIELDS,
  goalInterpretationFields: GOAL_INTERPRETATION_FIELDS,
  ambiguityCategories: AMBIGUITY_CATEGORIES,
  missingInformationClasses: MISSING_INFORMATION_CLASSES,
  conflictResolutionFactors: CONFLICT_RESOLUTION_FACTORS,
  reasoningModes: REASONING_MODES,
  reasoningStrategyFields: REASONING_STRATEGY_FIELDS,
  planFields: PLAN_FIELDS,
  planStates: PLAN_STATES,
  planCreationSteps: PLAN_CREATION_STEPS,
  taskDependencyTypes: TASK_DEPENDENCY_TYPES,
  planConstraints: PLAN_CONSTRAINTS,
  authorityAwareTaskFields: AUTHORITY_AWARE_TASK_FIELDS,
  capabilityCatalogFields: CAPABILITY_CATALOG_FIELDS,
  planSelectionFactors: PLAN_SELECTION_FACTORS,
  planValidationChecks: PLAN_VALIDATION_CHECKS,
  planApprovalBindings: PLAN_APPROVAL_BINDINGS,
  planVersionRecordFields: PLAN_VERSION_RECORD_FIELDS,
  replanningTriggers: REPLANNING_TRIGGERS,
  replanningRules: REPLANNING_RULES,
  planDriftIndicators: PLAN_DRIFT_INDICATORS,
  uncertaintyCategories: UNCERTAINTY_CATEGORIES,
  groundingSources: GROUNDING_SOURCES,
  truthHierarchyLevels: TRUTH_HIERARCHY_LEVELS,
  validationMechanisms: VALIDATION_MECHANISMS,
  humanDecisionRequestFields: HUMAN_DECISION_REQUEST_FIELDS,
  instructionFields: INSTRUCTION_FIELDS,
  instructionPriorityLevels: INSTRUCTION_PRIORITY_LEVELS,
  modelSelectionFactors: MODEL_SELECTION_FACTORS,
  multiAgentPlanFields: MULTI_AGENT_PLAN_FIELDS,
  stopConditions: STOP_CONDITIONS,
  loopDetectionSignals: LOOP_DETECTION_SIGNALS,
  observabilitySignals: REASONING_OBSERVABILITY_SIGNALS,
  evidenceFields: REASONING_EVIDENCE_FIELDS,
  evaluationDimensions: REASONING_EVALUATION_DIMENSIONS,
  qualityAttributes: REASONING_QUALITY_ATTRIBUTES,
  architecturalRules: REASONING_ARCHITECTURAL_RULES,
  architectureBoundaries: REASONING_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  advisoryReasoning: 'Reasoning must remain advisory to deterministic control.',
  deterministicValidation: 'Runtime, policy, tools, workflows, and business services must validate reasoning proposals.',
  preservesGoalFidelity: 'Reasoning must preserve authorized goal fidelity.',
  identifiesAmbiguity: 'Reasoning must identify ambiguity and missing material information.',
  clarifiesMaterialMissingInfo: 'Material missing information must be clarified or obtained from approved sources.',
  usesAuthoritativeSources: 'Authoritative sources must be used before inference.',
  labelsAssumptions: 'Material assumptions and uncertainty must be labeled.',
  structuredVersionedOutputs: 'Reasoning outputs must be structured and versioned where practical.',
  boundedPlans: 'Plans must remain bounded and task oriented.',
  explicitDependencies: 'Plans must identify dependencies and completion criteria.',
  authorityAwareWithoutGranting: 'Planning must identify required authority without granting it.',
  registeredCapabilitiesOnly: 'Plans must use registered capabilities only.',
  businessLogicInServices: 'Authoritative business logic must remain in business services.',
  workflowForDurableProcess: 'Durable deterministic processes must use the Workflow Engine.',
  explicitHumanDecisions: 'Human decisions must be included explicitly.',
  planValidationBeforeActivation: 'Plans must be validated before activation.',
  materialRevisionsVersioned: 'Material plan revisions must be versioned.',
  completedEvidencePreserved: 'Completed task evidence must be preserved across replanning.',
  planDriftDetection: 'Plan drift must be detected.',
  reasoningLoopDetection: 'Reasoning loops must be detected.',
  localWithinGlobalConstraints: 'Local adaptation must remain within approved global constraints.',
  retrievedContentAsData: 'Retrieved content must be treated as data according to trust level.',
  confidenceNotEvidence: 'Model confidence must not replace evidence.',
  independentValidationByRisk: 'Independent validation must be proportionate to risk.',
  hiddenReasoningNotEvidence: 'Unrestricted hidden reasoning must stay out of required evidence.',
  stopWhenUnsafeOrUnverifiable: 'Reasoning must recommend stopping when truth, authority, safety, or progress cannot be established.',
  completionRuntimeValidated: 'Completion claims must be submitted to deterministic runtime validation.',
  modelProviderNeutral: 'Reasoning and planning must remain model and provider neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  grantsAuthority: 'Reasoning must not grant authority.',
  controlsRuntimeState: 'Reasoning must not control runtime state.',
  ownsBusinessTruth: 'Reasoning must not own business truth.',
  ownsWorkflowSemantics: 'Reasoning must not own durable workflow semantics.',
  inventsRequiredValues: 'Reasoning must not invent required values.',
  silentlyBroadensGoal: 'Reasoning must not silently broaden the authorized goal.',
  infersMissingAuthority: 'Missing authority or tenant scope must not be inferred.',
  resolvesConflictByFluency: 'Material conflicts must not be resolved through fluency.',
  embedsHiddenBusinessRules: 'Reasoning strategies must not embed hidden business rules.',
  planIsAuthority: 'A plan must not be treated as authority.',
  planIsWorkflowDefinition: 'A plan must not be treated as a workflow definition.',
  inventsCapabilities: 'The planner must not invent unregistered capabilities.',
  marksDependencySatisfiedWithoutEvidence: 'Dependencies must not be marked satisfied without evidence.',
  activatesUnvalidatedPlan: 'Unvalidated plans must not be activated.',
  erasesPriorEvidenceOnReplan: 'Replanning must not erase prior evidence.',
  modelConfidenceOverridesEvidence: 'Model confidence must not override evidence.',
  retrievedContentAsInstructionAuthority: 'Retrieved content must not become higher-priority instruction authority.',
  unboundedDelegation: 'Multi-agent planning must not create unbounded delegation graphs.',
  fluentSummaryAsCompletionEvidence: 'A fluent summary must not be treated as completion evidence.',
  selectsModelOrAgentLibrary: 'ARCH-014-04 does not select a model or agent library.'
});

export class AgentReasoningPlanningDescriptor {
  reasoningResponsibilities() { return values(MAP.reasoningResponsibilities); }
  reasoningInputs() { return values(MAP.reasoningInputs); }
  reasoningOutputTypes() { return values(MAP.reasoningOutputTypes); }
  reasoningOutputFields() { return values(MAP.reasoningOutputFields); }
  structuredReasoningFields() { return values(MAP.structuredReasoningFields); }
  goalInterpretationFields() { return values(MAP.goalInterpretationFields); }
  ambiguityCategories() { return values(MAP.ambiguityCategories); }
  missingInformationClasses() { return values(MAP.missingInformationClasses); }
  conflictResolutionFactors() { return values(MAP.conflictResolutionFactors); }
  reasoningModes() { return values(MAP.reasoningModes); }
  reasoningStrategyFields() { return values(MAP.reasoningStrategyFields); }
  planFields() { return values(MAP.planFields); }
  planStates() { return values(MAP.planStates); }
  planCreationSteps() { return values(MAP.planCreationSteps); }
  taskDependencyTypes() { return values(MAP.taskDependencyTypes); }
  planConstraints() { return values(MAP.planConstraints); }
  authorityAwareTaskFields() { return values(MAP.authorityAwareTaskFields); }
  capabilityCatalogFields() { return values(MAP.capabilityCatalogFields); }
  planSelectionFactors() { return values(MAP.planSelectionFactors); }
  planValidationChecks() { return values(MAP.planValidationChecks); }
  planApprovalBindings() { return values(MAP.planApprovalBindings); }
  planVersionRecordFields() { return values(MAP.planVersionRecordFields); }
  replanningTriggers() { return values(MAP.replanningTriggers); }
  replanningRules() { return values(MAP.replanningRules); }
  planDriftIndicators() { return values(MAP.planDriftIndicators); }
  uncertaintyCategories() { return values(MAP.uncertaintyCategories); }
  groundingSources() { return values(MAP.groundingSources); }
  truthHierarchyLevels() { return values(MAP.truthHierarchyLevels); }
  validationMechanisms() { return values(MAP.validationMechanisms); }
  humanDecisionRequestFields() { return values(MAP.humanDecisionRequestFields); }
  instructionFields() { return values(MAP.instructionFields); }
  instructionPriorityLevels() { return values(MAP.instructionPriorityLevels); }
  modelSelectionFactors() { return values(MAP.modelSelectionFactors); }
  multiAgentPlanFields() { return values(MAP.multiAgentPlanFields); }
  stopConditions() { return values(MAP.stopConditions); }
  loopDetectionSignals() { return values(MAP.loopDetectionSignals); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  evidenceFields() { return values(MAP.evidenceFields); }
  evaluationDimensions() { return values(MAP.evaluationDimensions); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AgentReasoningPlanningProfile ? profileInput : new AgentReasoningPlanningProfile(profileInput);
    const errors = [];
    if (!profile.reasoningName) errors.push('Agent Reasoning and Planning profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Agent Reasoning and Planning must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(AGENT_REASONING_PLANNING_ERROR_CODE, 'Agent Reasoning and Planning violates ARCH-014-04.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
