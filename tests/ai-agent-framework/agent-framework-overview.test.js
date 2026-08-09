import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_AUTONOMY_LEVELS,
  AGENT_CONCEPT_IDENTITIES,
  AGENT_DEFINITION_FIELDS,
  AGENT_DURATION_CLASSIFICATIONS,
  AGENT_EXECUTION_STATES,
  AGENT_FRAMEWORK_ARCHITECTURAL_RULES,
  AGENT_FRAMEWORK_CAPABILITIES,
  AGENT_FRAMEWORK_LAYERS,
  AGENT_FRAMEWORK_OBJECTIVES,
  AGENT_FRAMEWORK_PRINCIPLES,
  AGENT_IMPACT_CLASSIFICATIONS,
  AI_AGENT_FRAMEWORK_OVERVIEW_ERROR_CODE,
  ARCHITECTURE_BOUNDARIES,
  FUTURE_AGENT_FRAMEWORK_CAPABILITIES,
  AgentFrameworkOverviewDescriptor,
  AgentFrameworkOverviewProfile,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('agent framework overview exposes objectives, principles, agent boundaries, and use criteria', () => {
  const descriptor = new AgentFrameworkOverviewDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(AGENT_FRAMEWORK_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(AGENT_FRAMEWORK_PRINCIPLES));
  assert.ok(descriptor.nonAgentCapabilities().includes('prompt'));
  assert.ok(descriptor.nonAgentCapabilities().includes('workflow-definition'));
  assert.ok(descriptor.useCriteria().includes('planning-under-incomplete-information'));
  assert.ok(descriptor.inappropriateCriteria().includes('simple-api-call-is-sufficient'));
});

test('agent framework overview exposes logical layers, capabilities, definitions, identities, classifications, and autonomy', () => {
  const descriptor = new AgentFrameworkOverviewDescriptor();
  assert.ok(descriptor.layers().includes(AGENT_FRAMEWORK_LAYERS.AGENT_CONTROL));
  assert.ok(descriptor.capabilities().includes(AGENT_FRAMEWORK_CAPABILITIES.TOOL_GATEWAY));
  assert.ok(descriptor.definitionFields().includes(AGENT_DEFINITION_FIELDS.MODEL_SELECTION_POLICY));
  assert.ok(descriptor.conceptIdentities().includes(AGENT_CONCEPT_IDENTITIES.EXECUTION));
  assert.ok(descriptor.purposeClassifications().includes('governance'));
  assert.ok(descriptor.durationClassifications().includes(AGENT_DURATION_CLASSIFICATIONS.LONG_RUNNING));
  assert.ok(descriptor.interactionClassifications().includes('human-supervised'));
  assert.ok(descriptor.impactClassifications().includes(AGENT_IMPACT_CLASSIFICATIONS.MATERIAL_STATE_CHANGE));
  assert.ok(descriptor.autonomyLevels().includes(AGENT_AUTONOMY_LEVELS.A4_COORDINATE_BOUNDED));
});

test('agent framework overview exposes lifecycle, execution, goal, tool, human, delegation, context, quality, rule, boundary, and future metadata', () => {
  const descriptor = new AgentFrameworkOverviewDescriptor();
  assert.ok(descriptor.lifecycleStages().includes('suspend-deprecate-and-retire'));
  assert.ok(descriptor.executionStates().includes(AGENT_EXECUTION_STATES.WAITING_FOR_APPROVAL));
  assert.ok(descriptor.executionLoopSteps().includes('act-through-an-approved-capability'));
  assert.ok(descriptor.goalFields().includes('authority-source'));
  assert.ok(descriptor.toolBoundaryRequirements().includes('idempotency'));
  assert.ok(descriptor.humanParticipationRoles().includes('exception-authorities'));
  assert.ok(descriptor.delegationContractFields().includes('return-contract'));
  assert.ok(descriptor.contextRequirements().includes('source-attributable'));
  assert.ok(descriptor.qualityAttributes().includes('operability'));
  assert.ok(descriptor.architecturalRules().includes(AGENT_FRAMEWORK_ARCHITECTURAL_RULES.STATE_OUTSIDE_MODEL_CONTEXT));
  assert.ok(descriptor.architectureBoundaries().includes(ARCHITECTURE_BOUNDARIES.EVALUATION_SUITES));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AGENT_FRAMEWORK_CAPABILITIES.VERIFIED_PLANNING));
});

test('agent framework overview validates complete profiles and rejects boundary violations', () => {
  const descriptor = new AgentFrameworkOverviewDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    frameworkName: '',
    ...partialProfile(descriptor),
    agentsFirstClassIdentities: false,
    accountableOwnership: false,
    versionedDefinitions: false,
    scopeBeforeAccess: false,
    authorityBeforeCapability: false,
    autonomyExplicit: false,
    plansWithinGoals: false,
    governedTools: false,
    deterministicBusinessServices: false,
    workflowOwnsDurableProcess: false,
    stateOutsideModelContext: false,
    validatesMaterialSteps: false,
    boundedRetriesDelegationBudgets: false,
    humanControls: false,
    attributableEvidence: false,
    evaluatedBeforeAndDuringOperation: false,
    suspensionStopControls: false,
    tenantIsolation: false,
    trustClassifiedContent: false,
    vendorModelNeutral: false,
    treatsPromptAsAgent: true,
    treatsToolAvailabilityAsAuthority: true,
    expandsGoalDuringPlanning: true,
    agentsOwnBusinessRules: true,
    replacesWorkflowEngine: true,
    modelContextAsExecutionRecord: true,
    unboundedDelegation: true,
    infersApprovalFromSilence: true,
    retriesMaterialActionsBlindly: true,
    selectsModelProvider: true,
    selectsAgentFrameworkProduct: true,
    replacesHumanAccountability: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /bounded-and-reviewable-autonomy/);
  assert.match(invalid.errors.join('\n'), /truth-before-fluency/);
  assert.match(invalid.errors.join('\n'), /workflow-definition/);
  assert.match(invalid.errors.join('\n'), /Agents must be treated as first-class platform identities/);
  assert.match(invalid.errors.join('\n'), /Tool availability must not be treated as authorization/);
  assert.match(invalid.errors.join('\n'), /Agents must not own authoritative business rules/);
  assert.match(invalid.errors.join('\n'), /does not select models or providers/);
  assert.match(invalid.errors.join('\n'), /must not replace human accountability/);
});

test('agent framework overview assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends AgentFrameworkOverviewDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === AI_AGENT_FRAMEWORK_OVERVIEW_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('agent framework overview descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addAiAgentFramework(services);
  const descriptor = services.buildServiceProvider().getRequiredService('AgentFrameworkOverviewDescriptor');
  assert.ok(descriptor instanceof AgentFrameworkOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'nonAgentCapabilities', 'useCriteria', 'inappropriateCriteria',
    'layers', 'capabilities', 'definitionFields', 'conceptIdentities', 'purposeClassifications',
    'durationClassifications', 'interactionClassifications', 'impactClassifications', 'autonomyLevels',
    'lifecycleStages', 'executionStates', 'executionLoopSteps', 'goalFields', 'toolBoundaryRequirements',
    'humanParticipationRoles', 'delegationContractFields', 'contextRequirements', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries', 'futureCapabilities']) values[key] = descriptor[key]();
  return new AgentFrameworkOverviewProfile({ frameworkName: 'AI Agent Framework Overview', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
