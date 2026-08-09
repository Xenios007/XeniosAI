import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { MultiAgentCoordinationProfile } from '../contracts/multi-agent-coordination-profile.js';
import {
  AUTHORITY_ATTENUATION_DIMENSIONS, CANCELLATION_FLOW_STEPS, CONFLICT_RESOLUTION_ORDER,
  CONFLICT_TYPES, CONCURRENCY_REQUIREMENTS, COORDINATION_ARCHITECTURAL_RULES,
  COORDINATION_ARCHITECTURE_BOUNDARIES, COORDINATION_BARRIER_FIELDS, COORDINATION_EVALUATION_MEASURES,
  COORDINATION_EVIDENCE_FIELDS, COORDINATION_GOALS, COORDINATION_OBSERVABILITY_SIGNALS,
  COORDINATION_OPERATIONS, COORDINATION_PATTERNS, COORDINATION_QUALITY_ATTRIBUTES, COORDINATION_ROLES,
  COORDINATION_SECURITY_THREATS, COORDINATION_TOPOLOGIES, DELEGATE_RESULT_FIELDS,
  DELEGATE_SELECTION_FACTORS, DELEGATION_ADMISSION_CHECKS, DELEGATION_CHAIN_FIELDS,
  COORDINATION_DELEGATION_CONTRACT_FIELDS, DELEGATION_LIFECYCLE_STATES, FAILURE_PROPAGATION_POLICIES,
  HUMAN_SUPERVISION_ACTIONS, HUMAN_TAKEOVER_STEPS, INDEPENDENT_REVIEW_CRITERIA,
  MESSAGE_AUTHORIZATION_CHECKS, MESSAGE_ENVELOPE_FIELDS, MESSAGE_TYPES,
  MULTI_AGENT_COORDINATION_ERROR_CODE, MULTI_AGENT_INAPPROPRIATE_CRITERIA,
  MULTI_AGENT_SELECTION_CRITERIA, RESULT_AGGREGATION_REQUIREMENTS, SHARED_GOAL_FIELDS,
  SHARED_STATE_FIELDS, TASK_OWNERSHIP_FIELDS
} from '../multi-agent-coordination-constants.js';

const MAP = Object.freeze({
  selectionCriteria: MULTI_AGENT_SELECTION_CRITERIA,
  inappropriateCriteria: MULTI_AGENT_INAPPROPRIATE_CRITERIA,
  coordinationGoals: COORDINATION_GOALS,
  roles: COORDINATION_ROLES,
  patterns: COORDINATION_PATTERNS,
  topologies: COORDINATION_TOPOLOGIES,
  sharedGoalFields: SHARED_GOAL_FIELDS,
  taskOwnershipFields: TASK_OWNERSHIP_FIELDS,
  delegationContractFields: COORDINATION_DELEGATION_CONTRACT_FIELDS,
  authorityAttenuationDimensions: AUTHORITY_ATTENUATION_DIMENSIONS,
  delegationAdmissionChecks: DELEGATION_ADMISSION_CHECKS,
  delegationChainFields: DELEGATION_CHAIN_FIELDS,
  delegationLifecycleStates: DELEGATION_LIFECYCLE_STATES,
  delegateSelectionFactors: DELEGATE_SELECTION_FACTORS,
  messageTypes: MESSAGE_TYPES,
  messageEnvelopeFields: MESSAGE_ENVELOPE_FIELDS,
  messageAuthorizationChecks: MESSAGE_AUTHORIZATION_CHECKS,
  sharedStateFields: SHARED_STATE_FIELDS,
  concurrencyRequirements: CONCURRENCY_REQUIREMENTS,
  barrierFields: COORDINATION_BARRIER_FIELDS,
  conflictTypes: CONFLICT_TYPES,
  conflictResolutionOrder: CONFLICT_RESOLUTION_ORDER,
  independentReviewCriteria: INDEPENDENT_REVIEW_CRITERIA,
  delegateResultFields: DELEGATE_RESULT_FIELDS,
  aggregationRequirements: RESULT_AGGREGATION_REQUIREMENTS,
  failurePropagationPolicies: FAILURE_PROPAGATION_POLICIES,
  cancellationFlowSteps: CANCELLATION_FLOW_STEPS,
  humanSupervisionActions: HUMAN_SUPERVISION_ACTIONS,
  humanTakeoverSteps: HUMAN_TAKEOVER_STEPS,
  securityThreats: COORDINATION_SECURITY_THREATS,
  evidenceFields: COORDINATION_EVIDENCE_FIELDS,
  observabilitySignals: COORDINATION_OBSERVABILITY_SIGNALS,
  evaluationMeasures: COORDINATION_EVALUATION_MEASURES,
  operations: COORDINATION_OPERATIONS,
  qualityAttributes: COORDINATION_QUALITY_ATTRIBUTES,
  architecturalRules: COORDINATION_ARCHITECTURAL_RULES,
  architectureBoundaries: COORDINATION_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  optionalComposition: 'Multi-agent coordination must remain an optional composition pattern.',
  smallestAgentSet: 'The smallest number of agents needed for a controlled outcome must be preferred.',
  participantsIdentified: 'Every participant must be registered and independently identifiable.',
  sharedAuthorizedGoal: 'Coordination must preserve one shared authorized goal.',
  oneOwnerPerTask: 'Every active task must have one accountable executing owner.',
  explicitDelegationContracts: 'Delegation must use explicit contracts.',
  authorityAttenuated: 'Delegated authority must be attenuated.',
  noCredentialTransfer: 'Delegation must not transfer credentials.',
  initiatorPrincipalPreserved: 'Original initiator and represented principal must be preserved.',
  tenantPropertyScopePreserved: 'Tenant and property scope must be preserved.',
  boundedDepthFanout: 'Delegation depth and fan-out must be bounded.',
  circularDelegationPrevented: 'Circular delegation must be prevented.',
  versionedMessageContracts: 'Agent communication must use versioned message contracts.',
  authorizedMessagesContext: 'Messages and context sharing must be authorized.',
  messagesTreatedByTrust: 'Agent messages must be treated according to trust level.',
  sharedStateOutsideConversation: 'Authoritative shared state must remain outside conversations.',
  systemOfRecordOwnershipPreserved: 'System-of-record ownership must be preserved.',
  delegateResultsValidated: 'Delegate results must be validated before task completion.',
  attributionPreserved: 'Attribution and disagreement must be preserved during aggregation.',
  majorityNotTruth: 'Agent majority must not be treated as truth.',
  failurePropagationDefined: 'Failure propagation must be defined explicitly.',
  cancellationSuspensionPropagated: 'Cancellation and suspension must propagate through coordination.',
  childLimitsCountAgainstParent: 'Child resource use must count against parent limits.',
  humanSupervisionSupported: 'Human supervision and takeover must be supported.',
  coordinationEvidenceProduced: 'Complete coordination evidence must be produced.',
  workflowForDurableCoordination: 'Durable coordination must use the Workflow Engine.',
  modelFrameworkNeutral: 'Coordination must remain model and framework neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  multiAgentDefault: 'Multi-agent coordination must not be the default form of every agent solution.',
  complexityAsIntelligence: 'Complexity must not be treated as evidence of intelligence.',
  rolesGrantAuthority: 'Roles must not grant authority by themselves.',
  falseIndependence: 'Role separation must not create false independence.',
  unrestrictedPeerMesh: 'Unrestricted peer-to-peer meshes must be avoided.',
  ambiguousTaskOwnership: 'Ambiguous task ownership must not hide responsibility.',
  delegationImpersonates: 'Delegation must not use identity impersonation.',
  delegationExpandsAuthority: 'Delegation must not expand authority.',
  delegationTransfersCredentials: 'Delegation must not transfer credentials.',
  unboundedSubcontracting: 'Delegation must not allow unbounded subcontracting.',
  unregisteredDelegates: 'Agents must not invent or select unregistered delegates.',
  messagesAsAuthority: 'Messages from another agent must not automatically become authoritative instructions.',
  fullParentContextShared: 'Delegates must not automatically receive the parent full model context.',
  transcriptOnlySharedState: 'A conversation transcript must not be the only shared state.',
  agentsOverwriteSystemOfRecord: 'Agents must not overwrite another system authoritative state.',
  majorityAsTruth: 'Agent majority must not substitute for truth.',
  fabricatedConsensus: 'The coordinator must not fabricate consensus.',
  childStateErasedByCoordinatorFailure: 'Coordinator failure must not erase child state or evidence.',
  delegationMultipliesResources: 'Delegation must not multiply resources without explicit policy.',
  crossTenantDelegationByDefault: 'Cross-tenant delegation is prohibited by default.',
  competingActionsDuringTakeover: 'Agents must not continue competing actions during takeover.',
  selectsCommunicationProtocol: 'ARCH-014-06 does not select an agent communication protocol.',
  selectsFrameworkProduct: 'ARCH-014-06 does not select a multi-agent framework product.'
});

export class MultiAgentCoordinationDescriptor {
  selectionCriteria() { return values(MAP.selectionCriteria); }
  inappropriateCriteria() { return values(MAP.inappropriateCriteria); }
  coordinationGoals() { return values(MAP.coordinationGoals); }
  roles() { return values(MAP.roles); }
  patterns() { return values(MAP.patterns); }
  topologies() { return values(MAP.topologies); }
  sharedGoalFields() { return values(MAP.sharedGoalFields); }
  taskOwnershipFields() { return values(MAP.taskOwnershipFields); }
  delegationContractFields() { return values(MAP.delegationContractFields); }
  authorityAttenuationDimensions() { return values(MAP.authorityAttenuationDimensions); }
  delegationAdmissionChecks() { return values(MAP.delegationAdmissionChecks); }
  delegationChainFields() { return values(MAP.delegationChainFields); }
  delegationLifecycleStates() { return values(MAP.delegationLifecycleStates); }
  delegateSelectionFactors() { return values(MAP.delegateSelectionFactors); }
  messageTypes() { return values(MAP.messageTypes); }
  messageEnvelopeFields() { return values(MAP.messageEnvelopeFields); }
  messageAuthorizationChecks() { return values(MAP.messageAuthorizationChecks); }
  sharedStateFields() { return values(MAP.sharedStateFields); }
  concurrencyRequirements() { return values(MAP.concurrencyRequirements); }
  barrierFields() { return values(MAP.barrierFields); }
  conflictTypes() { return values(MAP.conflictTypes); }
  conflictResolutionOrder() { return values(MAP.conflictResolutionOrder); }
  independentReviewCriteria() { return values(MAP.independentReviewCriteria); }
  delegateResultFields() { return values(MAP.delegateResultFields); }
  aggregationRequirements() { return values(MAP.aggregationRequirements); }
  failurePropagationPolicies() { return values(MAP.failurePropagationPolicies); }
  cancellationFlowSteps() { return values(MAP.cancellationFlowSteps); }
  humanSupervisionActions() { return values(MAP.humanSupervisionActions); }
  humanTakeoverSteps() { return values(MAP.humanTakeoverSteps); }
  securityThreats() { return values(MAP.securityThreats); }
  evidenceFields() { return values(MAP.evidenceFields); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  evaluationMeasures() { return values(MAP.evaluationMeasures); }
  operations() { return values(MAP.operations); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof MultiAgentCoordinationProfile ? profileInput : new MultiAgentCoordinationProfile(profileInput);
    const errors = [];
    if (!profile.coordinationName) errors.push('Multi-Agent Coordination profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Multi-Agent Coordination must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(MULTI_AGENT_COORDINATION_ERROR_CODE, 'Multi-Agent Coordination violates ARCH-014-06.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
