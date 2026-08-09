import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkOverviewProfile } from '../contracts/agent-framework-overview-profile.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import {
  AGENT_AUTONOMY_LEVELS, AGENT_CONCEPT_IDENTITIES, AGENT_DEFINITION_FIELDS, AGENT_DURATION_CLASSIFICATIONS,
  AGENT_EXECUTION_LOOP_STEPS, AGENT_EXECUTION_STATES, AGENT_FRAMEWORK_ARCHITECTURAL_RULES,
  AGENT_FRAMEWORK_CAPABILITIES, AGENT_FRAMEWORK_LAYERS, AGENT_FRAMEWORK_OBJECTIVES,
  AI_AGENT_FRAMEWORK_OVERVIEW_ERROR_CODE, AGENT_FRAMEWORK_PRINCIPLES, AGENT_IMPACT_CLASSIFICATIONS,
  AGENT_INAPPROPRIATE_CRITERIA, AGENT_INTERACTION_CLASSIFICATIONS, AGENT_LIFECYCLE_STAGES,
  AGENT_PURPOSE_CLASSIFICATIONS, AGENT_USE_CRITERIA, ARCHITECTURE_BOUNDARIES, CONTEXT_REQUIREMENTS,
  DELEGATION_CONTRACT_FIELDS, FUTURE_AGENT_FRAMEWORK_CAPABILITIES, AGENT_GOAL_FIELDS,
  HUMAN_PARTICIPATION_ROLES, NON_AGENT_CAPABILITIES, QUALITY_ATTRIBUTES, TOOL_BOUNDARY_REQUIREMENTS
} from '../overview-constants.js';

const MAP = Object.freeze({
  objectives: AGENT_FRAMEWORK_OBJECTIVES,
  principles: AGENT_FRAMEWORK_PRINCIPLES,
  nonAgentCapabilities: NON_AGENT_CAPABILITIES,
  useCriteria: AGENT_USE_CRITERIA,
  inappropriateCriteria: AGENT_INAPPROPRIATE_CRITERIA,
  layers: AGENT_FRAMEWORK_LAYERS,
  capabilities: AGENT_FRAMEWORK_CAPABILITIES,
  definitionFields: AGENT_DEFINITION_FIELDS,
  conceptIdentities: AGENT_CONCEPT_IDENTITIES,
  purposeClassifications: AGENT_PURPOSE_CLASSIFICATIONS,
  durationClassifications: AGENT_DURATION_CLASSIFICATIONS,
  interactionClassifications: AGENT_INTERACTION_CLASSIFICATIONS,
  impactClassifications: AGENT_IMPACT_CLASSIFICATIONS,
  autonomyLevels: AGENT_AUTONOMY_LEVELS,
  lifecycleStages: AGENT_LIFECYCLE_STAGES,
  executionStates: AGENT_EXECUTION_STATES,
  executionLoopSteps: AGENT_EXECUTION_LOOP_STEPS,
  goalFields: AGENT_GOAL_FIELDS,
  toolBoundaryRequirements: TOOL_BOUNDARY_REQUIREMENTS,
  humanParticipationRoles: HUMAN_PARTICIPATION_ROLES,
  delegationContractFields: DELEGATION_CONTRACT_FIELDS,
  contextRequirements: CONTEXT_REQUIREMENTS,
  qualityAttributes: QUALITY_ATTRIBUTES,
  architecturalRules: AGENT_FRAMEWORK_ARCHITECTURAL_RULES,
  architectureBoundaries: ARCHITECTURE_BOUNDARIES,
  futureCapabilities: FUTURE_AGENT_FRAMEWORK_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  agentsFirstClassIdentities: 'Agents must be treated as first-class platform identities.',
  accountableOwnership: 'Agents must require accountable ownership.',
  versionedDefinitions: 'Agent definitions must be versioned.',
  scopeBeforeAccess: 'Tenant and property scope must be established before scoped access.',
  authorityBeforeCapability: 'Authority must be established before making a capability available.',
  autonomyExplicit: 'Autonomy must be represented explicitly.',
  plansWithinGoals: 'Plans must remain within authorized goals.',
  governedTools: 'Agents must use governed tools and service contracts.',
  deterministicBusinessServices: 'Deterministic business rules must remain in business services.',
  workflowOwnsDurableProcess: 'Durable deterministic process must remain owned by the Workflow Engine.',
  stateOutsideModelContext: 'Authoritative execution state must remain outside model context.',
  validatesMaterialSteps: 'Material step results must be validated.',
  boundedRetriesDelegationBudgets: 'Retries, delegation, time, cost, and step count must be bounded.',
  humanControls: 'Human clarification, approval, intervention, and cancellation must be supported.',
  attributableEvidence: 'Attributable evidence must be produced.',
  evaluatedBeforeAndDuringOperation: 'Agents must be evaluated before release and during operation.',
  suspensionStopControls: 'Suspension and emergency stop controls must be provided.',
  tenantIsolation: 'Tenant isolation must be preserved in state, context, tools, memory, telemetry, and evidence.',
  trustClassifiedContent: 'External and retrieved content must be treated according to trust level.',
  vendorModelNeutral: 'The framework must remain vendor and model neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  treatsPromptAsAgent: 'A prompt, model, conversation, tool, service, workflow, job, index, memory record, rules engine, or UI is not an agent by itself.',
  treatsToolAvailabilityAsAuthority: 'Tool availability must not be treated as authorization.',
  expandsGoalDuringPlanning: 'Planning must not silently redefine the goal, expand scope, or create authority.',
  agentsOwnBusinessRules: 'Agents must not own authoritative business rules.',
  replacesWorkflowEngine: 'Agents must not replace the Workflow Engine.',
  modelContextAsExecutionRecord: 'Model context must not be the authoritative execution record.',
  unboundedDelegation: 'Delegation depth, fan-out, resource use, and duration must be bounded.',
  infersApprovalFromSilence: 'Silence must not be interpreted as approval without explicit governed policy.',
  retriesMaterialActionsBlindly: 'Agents must not retry material actions blindly.',
  selectsModelProvider: 'ARCH-014-01 does not select models or providers.',
  selectsAgentFrameworkProduct: 'ARCH-014-01 does not select an agent-framework product.',
  replacesHumanAccountability: 'Agent execution must not replace human accountability.'
});

export class AgentFrameworkOverviewDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  nonAgentCapabilities() { return values(MAP.nonAgentCapabilities); }
  useCriteria() { return values(MAP.useCriteria); }
  inappropriateCriteria() { return values(MAP.inappropriateCriteria); }
  layers() { return values(MAP.layers); }
  capabilities() { return values(MAP.capabilities); }
  definitionFields() { return values(MAP.definitionFields); }
  conceptIdentities() { return values(MAP.conceptIdentities); }
  purposeClassifications() { return values(MAP.purposeClassifications); }
  durationClassifications() { return values(MAP.durationClassifications); }
  interactionClassifications() { return values(MAP.interactionClassifications); }
  impactClassifications() { return values(MAP.impactClassifications); }
  autonomyLevels() { return values(MAP.autonomyLevels); }
  lifecycleStages() { return values(MAP.lifecycleStages); }
  executionStates() { return values(MAP.executionStates); }
  executionLoopSteps() { return values(MAP.executionLoopSteps); }
  goalFields() { return values(MAP.goalFields); }
  toolBoundaryRequirements() { return values(MAP.toolBoundaryRequirements); }
  humanParticipationRoles() { return values(MAP.humanParticipationRoles); }
  delegationContractFields() { return values(MAP.delegationContractFields); }
  contextRequirements() { return values(MAP.contextRequirements); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AgentFrameworkOverviewProfile ?
      profileInput : new AgentFrameworkOverviewProfile(profileInput);
    const errors = [];
    if (!profile.frameworkName) errors.push('AI Agent Framework overview profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`AI Agent Framework Overview must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(AI_AGENT_FRAMEWORK_OVERVIEW_ERROR_CODE, 'AI Agent Framework Overview violates ARCH-014-01.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
