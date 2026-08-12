import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowEngineOverviewProfile } from '../contracts/workflow-engine-overview-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  AUTHORITATIVE_WORKFLOW_STATE_FIELDS, FUTURE_WORKFLOW_CAPABILITIES, NON_WORKFLOW_CAPABILITIES,
  WORKFLOW_ACTORS, WORKFLOW_ARCHITECTURAL_RULES, WORKFLOW_ARCHITECTURE_BOUNDARIES, WORKFLOW_CLASSIFICATIONS,
  WORKFLOW_CONCEPTS, WORKFLOW_DEFINITION_FIELDS, WORKFLOW_DEFINITION_LIFECYCLE, WORKFLOW_ENGINE_CAPABILITIES,
  WORKFLOW_ENGINE_GOALS, WORKFLOW_ENGINE_OVERVIEW_ERROR_CODE, WORKFLOW_ENGINE_PRINCIPLES,
  WORKFLOW_EXECUTION_IDENTITY_FIELDS, WORKFLOW_EXECUTION_STATES, WORKFLOW_INAPPROPRIATE_CRITERIA,
  WORKFLOW_LOGICAL_PLANES, WORKFLOW_OPERATION_ACTIONS, WORKFLOW_QUALITY_ATTRIBUTES,
  WORKFLOW_REQUIRED_PROPERTIES, WORKFLOW_USE_CRITERIA
} from '../overview-constants.js';

const MAP = Object.freeze({
  requiredProperties: WORKFLOW_REQUIRED_PROPERTIES,
  nonWorkflowCapabilities: NON_WORKFLOW_CAPABILITIES,
  useCriteria: WORKFLOW_USE_CRITERIA,
  inappropriateCriteria: WORKFLOW_INAPPROPRIATE_CRITERIA,
  goals: WORKFLOW_ENGINE_GOALS,
  principles: WORKFLOW_ENGINE_PRINCIPLES,
  concepts: WORKFLOW_CONCEPTS,
  logicalPlanes: WORKFLOW_LOGICAL_PLANES,
  capabilities: WORKFLOW_ENGINE_CAPABILITIES,
  actors: WORKFLOW_ACTORS,
  classifications: WORKFLOW_CLASSIFICATIONS,
  definitionFields: WORKFLOW_DEFINITION_FIELDS,
  definitionLifecycle: WORKFLOW_DEFINITION_LIFECYCLE,
  executionIdentityFields: WORKFLOW_EXECUTION_IDENTITY_FIELDS,
  executionStates: WORKFLOW_EXECUTION_STATES,
  authoritativeStateFields: AUTHORITATIVE_WORKFLOW_STATE_FIELDS,
  operationActions: WORKFLOW_OPERATION_ACTIONS,
  qualityAttributes: WORKFLOW_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_ARCHITECTURAL_RULES,
  architectureBoundaries: WORKFLOW_ARCHITECTURE_BOUNDARIES,
  futureCapabilities: FUTURE_WORKFLOW_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  definitionsFirstClassIdentities: 'Workflow definitions must be first-class platform identities.',
  executionsFirstClassIdentities: 'Workflow executions must be first-class platform identities.',
  accountableOperationalOwnership: 'Workflows must require accountable and operational ownership.',
  durableAuthoritativeState: 'Authoritative workflow state must be persisted durably.',
  deterministicTransitions: 'Workflow state transitions must be deterministic.',
  definitionVersionBinding: 'Every execution must bind to an identifiable definition version.',
  businessRulesRemainInDomainServices: 'Business rules and authoritative business state must remain in domain services.',
  publicContractsOnly: 'Workflows must coordinate services only through public contracts.',
  taskAttemptSeparation: 'Logical tasks must remain distinct from activity attempts.',
  queueDrivenWorkers: 'Executable activities must use governed queue-driven workers.',
  workersDoNotOwnState: 'Workers must not own authoritative workflow state.',
  identityAuthorityBeforeAction: 'Identity and authority must be established before workflow action or intervention.',
  tenantPropertyIsolation: 'Tenant and property isolation must apply across workflow resources and evidence.',
  eventValidation: 'Event source, contract, scope, and correlation must be validated.',
  durableIdempotentTimers: 'Timers must be durable and idempotent.',
  authenticatedHumanDecisions: 'Human decisions must be authenticated, authorized, attributable, explicit, and time bounded.',
  boundedAgentParticipation: 'Agent participation must be bound to ARCH-014 identity, authority, limits, and validation.',
  boundedRetriesResources: 'Retries, time, fan-out, loops, and resource use must be bounded.',
  effectivelyOnceByControls: 'Effectively-once outcomes require idempotency, deduplication, reconciliation, and domain invariants.',
  reconcileBeforeMaterialRetry: 'Uncertain material effects must be reconciled before repetition.',
  domainDefinedCompensationOnly: 'Compensation must be domain defined.',
  controlledCancellation: 'Cancellation must be a controlled process.',
  explicitCompletion: 'Completion and termination criteria must be explicit.',
  attributableEvidence: 'Material workflow behavior must produce attributable evidence.',
  safeOperationalControl: 'Safe pause, resume, recovery, suspension, and termination must be supported.',
  vendorNeutral: 'The Workflow Engine must remain vendor neutral.',
  technologyIndependent: 'Workflow semantics must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  replacesBusinessServices: 'The Workflow Engine must not replace business services.',
  ownsBusinessData: 'The Workflow Engine must not own all business data.',
  replacesAiOrchestrator: 'The Workflow Engine must not replace the AI Orchestrator.',
  replacesAgentFramework: 'The Workflow Engine must not replace the AI Agent Framework.',
  conversationAsProcessState: 'Conversation history must not be treated as authoritative process state.',
  guaranteesUniversalExactlyOnce: 'The architecture does not guarantee universal exactly-once physical delivery.',
  infersAuthority: 'The Workflow Engine must not infer missing authority.',
  infersApprovalFromSilence: 'Human silence must not become approval by default.',
  workerCodeHidesProcess: 'Process behavior must not be hidden inside worker code.',
  selectsWorkflowProduct: 'ARCH-015-01 does not select a workflow product or infrastructure vendor.',
  definesLaterChapterDetails: 'ARCH-015-01 does not define detailed schemas, protocols, state machines, or operational procedures.'
});

export class WorkflowEngineOverviewDescriptor {
  requiredProperties() { return values(MAP.requiredProperties); }
  nonWorkflowCapabilities() { return values(MAP.nonWorkflowCapabilities); }
  useCriteria() { return values(MAP.useCriteria); }
  inappropriateCriteria() { return values(MAP.inappropriateCriteria); }
  goals() { return values(MAP.goals); }
  principles() { return values(MAP.principles); }
  concepts() { return values(MAP.concepts); }
  logicalPlanes() { return values(MAP.logicalPlanes); }
  capabilities() { return values(MAP.capabilities); }
  actors() { return values(MAP.actors); }
  classifications() { return values(MAP.classifications); }
  definitionFields() { return values(MAP.definitionFields); }
  definitionLifecycle() { return values(MAP.definitionLifecycle); }
  executionIdentityFields() { return values(MAP.executionIdentityFields); }
  executionStates() { return values(MAP.executionStates); }
  authoritativeStateFields() { return values(MAP.authoritativeStateFields); }
  operationActions() { return values(MAP.operationActions); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof WorkflowEngineOverviewProfile ? profileInput : new WorkflowEngineOverviewProfile(profileInput);
    const errors = [];
    if (!profile.engineName) errors.push('Workflow Engine overview profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Workflow Engine Overview must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(
      WORKFLOW_ENGINE_OVERVIEW_ERROR_CODE, 'Workflow Engine Overview violates ARCH-015-01.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors }); }