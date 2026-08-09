import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  COORDINATION_ARCHITECTURAL_RULES,
  COORDINATION_ARCHITECTURE_BOUNDARIES,
  COORDINATION_EVIDENCE_FIELDS,
  COORDINATION_PATTERNS,
  COORDINATION_ROLES,
  COORDINATION_DELEGATION_CONTRACT_FIELDS,
  MESSAGE_ENVELOPE_FIELDS,
  MULTI_AGENT_COORDINATION_ERROR_CODE,
  MULTI_AGENT_SELECTION_CRITERIA,
  MultiAgentCoordinationDescriptor,
  MultiAgentCoordinationProfile,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-06 exposes selection criteria, goals, roles, patterns, topology, goal, and task ownership metadata', () => {
  const descriptor = new MultiAgentCoordinationDescriptor();

  assert.ok(descriptor.selectionCriteria().includes(MULTI_AGENT_SELECTION_CRITERIA.INDEPENDENT_REVIEW));
  assert.ok(descriptor.inappropriateCriteria().includes('repeats-same-model-for-appearance-of-consensus'));
  assert.ok(descriptor.coordinationGoals().includes('attenuate-delegated-authority'));
  assert.ok(descriptor.roles().includes(COORDINATION_ROLES.SAFETY_MONITOR));
  assert.ok(descriptor.patterns().includes(COORDINATION_PATTERNS.WORKFLOW_MEDIATED));
  assert.ok(descriptor.topologies().includes('workflow-directed-graph'));
  assert.ok(descriptor.sharedGoalFields().includes('human-decision-points'));
  assert.ok(descriptor.taskOwnershipFields().includes('return-contract'));
});

test('ARCH-014-06 exposes delegation, messaging, state, concurrency, conflict, review, aggregation, and failure controls', () => {
  const descriptor = new MultiAgentCoordinationDescriptor();

  assert.ok(descriptor.delegationContractFields().includes(COORDINATION_DELEGATION_CONTRACT_FIELDS.FURTHER_DELEGATION));
  assert.ok(descriptor.authorityAttenuationDimensions().includes('delegation-depth'));
  assert.ok(descriptor.delegationAdmissionChecks().includes('delegation-depth-and-fan-out-remain-within-policy'));
  assert.ok(descriptor.delegationChainFields().includes('authority-subset'));
  assert.ok(descriptor.delegationLifecycleStates().includes('revoked'));
  assert.ok(descriptor.delegateSelectionFactors().includes('conflict-of-interest-rules'));
  assert.ok(descriptor.messageTypes().includes('evidence-reference'));
  assert.ok(descriptor.messageEnvelopeFields().includes(MESSAGE_ENVELOPE_FIELDS.TRUST_CLASSIFICATION));
  assert.ok(descriptor.messageAuthorizationChecks().includes('data-sharing-permission'));
  assert.ok(descriptor.sharedStateFields().includes('validated-results'));
  assert.ok(descriptor.concurrencyRequirements().includes('completion-barriers'));
  assert.ok(descriptor.barrierFields().includes('aggregation-rule'));
  assert.ok(descriptor.conflictTypes().includes('duplicate-task-ownership'));
  assert.ok(descriptor.conflictResolutionOrder().includes('independent-validation'));
  assert.ok(descriptor.independentReviewCriteria().includes('can-reject-contribution'));
  assert.ok(descriptor.delegateResultFields().includes('completion-claim'));
  assert.ok(descriptor.aggregationRequirements().includes('record-accepted-and-rejected-contributions'));
  assert.ok(descriptor.failurePropagationPolicies().includes('use-alternate-delegate'));
});

test('ARCH-014-06 exposes cancellation, human supervision, security, evidence, observability, evaluation, operations, quality, rules, and boundaries', () => {
  const descriptor = new MultiAgentCoordinationDescriptor();

  assert.ok(descriptor.cancellationFlowSteps().includes('close-delegation-records'));
  assert.ok(descriptor.humanSupervisionActions().includes('replace-coordinator'));
  assert.ok(descriptor.humanTakeoverSteps().includes('transfer-task-ownership'));
  assert.ok(descriptor.securityThreats().includes('collusive-false-validation'));
  assert.ok(descriptor.evidenceFields().includes(COORDINATION_EVIDENCE_FIELDS.ACCEPTED_REJECTED_RESULTS));
  assert.ok(descriptor.observabilitySignals().includes('delegation-fan-out'));
  assert.ok(descriptor.evaluationMeasures().includes('authority-compliance'));
  assert.ok(descriptor.operations().includes('coordinator-replacement'));
  assert.ok(descriptor.qualityAttributes().includes('portability'));
  assert.ok(descriptor.architecturalRules().includes(COORDINATION_ARCHITECTURAL_RULES.NO_MAJORITY_AS_TRUTH));
  assert.ok(descriptor.architectureBoundaries().includes(COORDINATION_ARCHITECTURE_BOUNDARIES.FRAMEWORK_PRODUCT));
});

test('ARCH-014-06 validates complete profiles and rejects coordination boundary violations', () => {
  const descriptor = new MultiAgentCoordinationDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    optionalComposition: false,
    participantsIdentified: false,
    authorityAttenuated: false,
    noCredentialTransfer: false,
    multiAgentDefault: true,
    complexityAsIntelligence: true,
    rolesGrantAuthority: true,
    unrestrictedPeerMesh: true,
    delegationExpandsAuthority: true,
    delegationTransfersCredentials: true,
    unregisteredDelegates: true,
    messagesAsAuthority: true,
    transcriptOnlySharedState: true,
    majorityAsTruth: true,
    crossTenantDelegationByDefault: true,
    selectsFrameworkProduct: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /specialized-domain-roles-improve-quality/);
  assert.match(invalid.errors.join('\n'), /coordinator/);
  assert.match(invalid.errors.join('\n'), /Delegated authority must be attenuated/);
  assert.match(invalid.errors.join('\n'), /Multi-agent coordination must not be the default/);
  assert.match(invalid.errors.join('\n'), /Delegation must not expand authority/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-06 does not select a multi-agent framework product/);
});

test('ARCH-014-06 assertion detects incomplete coordination metadata', () => {
  class IncompleteDescriptor extends MultiAgentCoordinationDescriptor {
    selectionCriteria() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === MULTI_AGENT_COORDINATION_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented selectionCriteria'))
  );
});

test('ARCH-014-06 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('MultiAgentCoordinationDescriptor');

  assert.ok(descriptor instanceof MultiAgentCoordinationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['selectionCriteria', 'inappropriateCriteria', 'coordinationGoals', 'roles',
    'patterns', 'topologies', 'sharedGoalFields', 'taskOwnershipFields', 'delegationContractFields',
    'authorityAttenuationDimensions', 'delegationAdmissionChecks', 'delegationChainFields',
    'delegationLifecycleStates', 'delegateSelectionFactors', 'messageTypes', 'messageEnvelopeFields',
    'messageAuthorizationChecks', 'sharedStateFields', 'concurrencyRequirements', 'barrierFields',
    'conflictTypes', 'conflictResolutionOrder', 'independentReviewCriteria', 'delegateResultFields',
    'aggregationRequirements', 'failurePropagationPolicies', 'cancellationFlowSteps',
    'humanSupervisionActions', 'humanTakeoverSteps', 'securityThreats', 'evidenceFields',
    'observabilitySignals', 'evaluationMeasures', 'operations', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries']) values[key] = descriptor[key]();
  return new MultiAgentCoordinationProfile({ coordinationName: 'Multi-Agent Coordination', ...values });
}
