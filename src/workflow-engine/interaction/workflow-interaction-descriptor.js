import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowInteractionProfile } from '../contracts/workflow-interaction-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_AGENT_RESULT_FIELDS, WORKFLOW_AGENT_TASK_TYPES, WORKFLOW_CORRELATION_CARDINALITIES,
  WORKFLOW_DECISION_CONTRACT_FIELDS, WORKFLOW_EVENT_ACCEPTANCE_OUTCOMES, WORKFLOW_EVENT_ARRIVAL_POLICIES,
  WORKFLOW_EVENT_CONTRACT_FIELDS, WORKFLOW_EVENT_WAIT_FIELDS, WORKFLOW_HUMAN_ASSIGNMENT_TARGETS,
  WORKFLOW_HUMAN_TASK_STATES, WORKFLOW_INTERACTION_BOUNDARIES, WORKFLOW_INTERACTION_ERROR_CODE,
  WORKFLOW_INTERACTION_OPERATIONS, WORKFLOW_INTERACTION_QUALITY_ATTRIBUTES, WORKFLOW_INTERACTION_RULES,
  WORKFLOW_INTERACTION_TYPES, WORKFLOW_MULTI_PERSON_DECISIONS, WORKFLOW_TIMER_FIELDS,
  WORKFLOW_TIMER_MISFIRE_POLICIES, WORKFLOW_TIMER_TYPES
} from '../interaction-constants.js';

const MAP = Object.freeze({
  interactionTypes: WORKFLOW_INTERACTION_TYPES, eventContractFields: WORKFLOW_EVENT_CONTRACT_FIELDS,
  eventAcceptanceOutcomes: WORKFLOW_EVENT_ACCEPTANCE_OUTCOMES, eventWaitFields: WORKFLOW_EVENT_WAIT_FIELDS,
  correlationCardinalities: WORKFLOW_CORRELATION_CARDINALITIES, eventArrivalPolicies: WORKFLOW_EVENT_ARRIVAL_POLICIES,
  timerTypes: WORKFLOW_TIMER_TYPES, timerFields: WORKFLOW_TIMER_FIELDS,
  timerMisfirePolicies: WORKFLOW_TIMER_MISFIRE_POLICIES, humanTaskStates: WORKFLOW_HUMAN_TASK_STATES,
  humanAssignmentTargets: WORKFLOW_HUMAN_ASSIGNMENT_TARGETS, decisionContractFields: WORKFLOW_DECISION_CONTRACT_FIELDS,
  multiPersonDecisions: WORKFLOW_MULTI_PERSON_DECISIONS, agentTaskTypes: WORKFLOW_AGENT_TASK_TYPES,
  agentResultFields: WORKFLOW_AGENT_RESULT_FIELDS, operations: WORKFLOW_INTERACTION_OPERATIONS,
  qualityAttributes: WORKFLOW_INTERACTION_QUALITY_ATTRIBUTES, architecturalRules: WORKFLOW_INTERACTION_RULES,
  architectureBoundaries: WORKFLOW_INTERACTION_BOUNDARIES
});
const REQUIRED_TRUE = Object.freeze({
  stableIdentities: 'Events, signals, callbacks, timers, decisions, and agent results require stable identities.',
  versionedContracts: 'All workflow interaction contracts must be versioned.',
  authenticatedAuthorizedSources: 'Interaction sources and senders must be authenticated and authorized.',
  trustedTenantProperty: 'Tenant and property must be resolved from trusted identity and workflow state.',
  correlationNotAuthorization: 'Correlation must identify a candidate wait without granting authority.',
  activeWaitRequired: 'Ordinary state advancement requires an active expected wait.',
  duplicateReplayHarmless: 'Duplicate and replayed interactions must remain harmless.',
  boundedArrivalPolicies: 'Early, late, unmatched, and out-of-order interaction behavior must be explicit and bounded.',
  authoritativeOwnershipPreserved: 'Events and interactions must preserve owning-service business authority.',
  durableTimers: 'Workflow timers must be durable and survive process and infrastructure restart.',
  explicitClockCalendarSemantics: 'Timers must bind explicit clock, time-zone, and calendar semantics.',
  distinctOccurrences: 'Recurring schedule occurrences require distinct identities.',
  boundedMisfire: 'Timer misfire and catch-up behavior must be bounded.',
  humanDecisionsAttributable: 'Human decisions must be authenticated, authorized, explicit, and attributable.',
  separationOfDuties: 'Required human separation-of-duties checks must occur at decision time.',
  silenceNotApproval: 'Silence must not be approval unless an explicit governed policy permits it.',
  decisionsImmutableWithCorrection: 'Accepted human decisions must be preserved and corrected through explicit records.',
  boundedAgentTasks: 'Agent tasks must bind ARCH-014 identity, version, authority, context, limits, and stop conditions.',
  agentResultsValidated: 'Agent results must be contract and authority validated before workflow application.',
  deterministicRaceResolution: 'Interaction races must resolve through expected state and atomic transition.',
  fullValidationBeforeResume: 'Wake-ups resume workflows only after full interaction validation commits.',
  tenantPropertyIsolation: 'Interaction state, correlation, assignment, search, telemetry, and evidence require isolation.',
  recoverableInteractions: 'Events, timers, decisions, callbacks, and agent results must recover without duplicate change.',
  privacyMinimized: 'Interaction payloads, notifications, telemetry, and evidence must be minimized and protected.',
  vendorNeutral: 'Interaction semantics must remain vendor neutral.',
  technologyIndependent: 'Interaction semantics must remain technology independent.'
});
const REQUIRED_FALSE = Object.freeze({
  endpointReceiptAdvancesState: 'Endpoint or topic receipt alone must not advance workflow state.',
  correlationGrantsAuthority: 'A correlation match must not grant authority.',
  globalOrderingAssumed: 'The runtime must not assume global event ordering.',
  lateInputReopensTerminal: 'Late interaction must not reopen a terminal workflow.',
  timerIsSleepingProcess: 'A timer must not depend on a sleeping process or open connection.',
  universalExactlyOnceTimer: 'Universal exactly-once timer delivery must not be assumed.',
  notificationGrantsAuthority: 'Notification delivery or possession must not grant human-task authority.',
  freeTextControlsMaterialDecision: 'Free-form text must not replace structured material decisions.',
  agentInfersAuthority: 'An agent must not infer authority from context, credentials, or available tools.',
  agentResultOwnsBusinessTruth: 'Agent output must not become authoritative business truth without verification.',
  operatorForgesInteraction: 'Operators must not fabricate events, approvals, timer history, or unvalidated agent results.',
  untrustedScopeOverrides: 'Untrusted payload fields must not override tenant or property scope.',
  selectsInfrastructure: 'ARCH-015-05 does not select brokers, schedulers, providers, interfaces, or agent frameworks.',
  definesAdjacentDetails: 'ARCH-015-05 does not define detailed infrastructure, reasoning, reliability-policy, or API contracts.'
});

export class WorkflowInteractionDescriptor {
  interactionTypes() { return values(MAP.interactionTypes); }
  eventContractFields() { return values(MAP.eventContractFields); }
  eventAcceptanceOutcomes() { return values(MAP.eventAcceptanceOutcomes); }
  eventWaitFields() { return values(MAP.eventWaitFields); }
  correlationCardinalities() { return values(MAP.correlationCardinalities); }
  eventArrivalPolicies() { return values(MAP.eventArrivalPolicies); }
  timerTypes() { return values(MAP.timerTypes); }
  timerFields() { return values(MAP.timerFields); }
  timerMisfirePolicies() { return values(MAP.timerMisfirePolicies); }
  humanTaskStates() { return values(MAP.humanTaskStates); }
  humanAssignmentTargets() { return values(MAP.humanAssignmentTargets); }
  decisionContractFields() { return values(MAP.decisionContractFields); }
  multiPersonDecisions() { return values(MAP.multiPersonDecisions); }
  agentTaskTypes() { return values(MAP.agentTaskTypes); }
  agentResultFields() { return values(MAP.agentResultFields); }
  operations() { return values(MAP.operations); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }
  validateProfile(profileInput) {
    const profile = profileInput instanceof WorkflowInteractionProfile ? profileInput : new WorkflowInteractionProfile(profileInput);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow interaction profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }
  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) if (this[key]().length !== Object.keys(source).length) errors.push(`Events, Timers, and Human Interaction must include documented ${key}.`);
    if (errors.length) throw new PlatformError(WORKFLOW_INTERACTION_ERROR_CODE, 'Events, Timers, and Human Interaction violates ARCH-015-05.', { errors });
    return validation(errors);
  }
}
function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) { for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`); }
function validation(errors) { return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors }); }
