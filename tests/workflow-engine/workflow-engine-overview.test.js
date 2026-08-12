import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AUTHORITATIVE_WORKFLOW_STATE_FIELDS, FUTURE_WORKFLOW_CAPABILITIES, NON_WORKFLOW_CAPABILITIES,
  WORKFLOW_ACTORS, WORKFLOW_ARCHITECTURAL_RULES, WORKFLOW_ARCHITECTURE_BOUNDARIES, WORKFLOW_CLASSIFICATIONS,
  WORKFLOW_CONCEPTS, WORKFLOW_DEFINITION_FIELDS, WORKFLOW_DEFINITION_LIFECYCLE, WORKFLOW_ENGINE_CAPABILITIES,
  WORKFLOW_ENGINE_GOALS, WORKFLOW_ENGINE_OVERVIEW_ERROR_CODE, WORKFLOW_ENGINE_PRINCIPLES,
  WORKFLOW_EXECUTION_IDENTITY_FIELDS, WORKFLOW_EXECUTION_STATES, WORKFLOW_INAPPROPRIATE_CRITERIA,
  WORKFLOW_LOGICAL_PLANES, WORKFLOW_OPERATION_ACTIONS, WORKFLOW_QUALITY_ATTRIBUTES,
  WORKFLOW_REQUIRED_PROPERTIES, WORKFLOW_USE_CRITERIA,
  WorkflowEngineOverviewDescriptor, WorkflowEngineOverviewProfile, addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-01 exposes workflow properties, use boundaries, goals, principles, concepts, and planes', () => {
  const descriptor = new WorkflowEngineOverviewDescriptor();
  assert.deepEqual(descriptor.requiredProperties(), Object.values(WORKFLOW_REQUIRED_PROPERTIES));
  assert.ok(descriptor.nonWorkflowCapabilities().includes(NON_WORKFLOW_CAPABILITIES.AGENT_PLAN));
  assert.ok(descriptor.useCriteria().includes(WORKFLOW_USE_CRITERIA.DURABLE_TIMERS));
  assert.ok(descriptor.inappropriateCriteria().includes(WORKFLOW_INAPPROPRIATE_CRITERIA.LOCAL_TRANSACTION));
  assert.ok(descriptor.goals().includes(WORKFLOW_ENGINE_GOALS.ATTRIBUTABLE_EVIDENCE));
  assert.ok(descriptor.principles().includes(WORKFLOW_ENGINE_PRINCIPLES.EFFECTIVELY_ONCE_OUTCOMES));
  assert.ok(descriptor.concepts().includes(WORKFLOW_CONCEPTS.ACTIVITY_ATTEMPT));
  assert.deepEqual(descriptor.logicalPlanes(), Object.values(WORKFLOW_LOGICAL_PLANES));
});

test('ARCH-015-01 exposes capabilities, actors, classifications, definitions, lifecycle, identity, and state', () => {
  const descriptor = new WorkflowEngineOverviewDescriptor();
  assert.ok(descriptor.capabilities().includes(WORKFLOW_ENGINE_CAPABILITIES.COMPENSATION_RECONCILIATION));
  assert.ok(descriptor.actors().includes(WORKFLOW_ACTORS.AUDITOR));
  assert.ok(descriptor.classifications().includes(WORKFLOW_CLASSIFICATIONS.AGENT_COORDINATION));
  assert.ok(descriptor.definitionFields().includes(WORKFLOW_DEFINITION_FIELDS.COMPLETION));
  assert.deepEqual(descriptor.definitionLifecycle(), Object.values(WORKFLOW_DEFINITION_LIFECYCLE));
  assert.ok(descriptor.executionIdentityFields().includes(WORKFLOW_EXECUTION_IDENTITY_FIELDS.AUTHORITY_CONTEXT));
  assert.ok(descriptor.executionStates().includes(WORKFLOW_EXECUTION_STATES.COMPENSATING));
  assert.ok(descriptor.authoritativeStateFields().includes(AUTHORITATIVE_WORKFLOW_STATE_FIELDS.SIDE_EFFECTS));
});

test('ARCH-015-01 exposes operations, quality, rules, boundaries, and future directions', () => {
  const descriptor = new WorkflowEngineOverviewDescriptor();
  assert.ok(descriptor.operationActions().includes(WORKFLOW_OPERATION_ACTIONS.RECONCILE));
  assert.ok(descriptor.qualityAttributes().includes(WORKFLOW_QUALITY_ATTRIBUTES.ISOLATION));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_ARCHITECTURAL_RULES.RECONCILE_BEFORE_REPEAT));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_ARCHITECTURE_BOUNDARIES.COMPLETE_STATE_MACHINE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_WORKFLOW_CAPABILITIES.FORMAL_VERIFICATION));
});

test('ARCH-015-01 validates complete profiles and rejects workflow boundary violations', () => {
  const descriptor = new WorkflowEngineOverviewDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    definitionsFirstClassIdentities: false, executionsFirstClassIdentities: false,
    accountableOperationalOwnership: false, durableAuthoritativeState: false, deterministicTransitions: false,
    definitionVersionBinding: false, businessRulesRemainInDomainServices: false, publicContractsOnly: false,
    taskAttemptSeparation: false, queueDrivenWorkers: false, workersDoNotOwnState: false,
    identityAuthorityBeforeAction: false, tenantPropertyIsolation: false, eventValidation: false,
    durableIdempotentTimers: false, authenticatedHumanDecisions: false, boundedAgentParticipation: false,
    boundedRetriesResources: false, effectivelyOnceByControls: false, reconcileBeforeMaterialRetry: false,
    domainDefinedCompensationOnly: false, controlledCancellation: false, explicitCompletion: false,
    attributableEvidence: false, safeOperationalControl: false, vendorNeutral: false, technologyIndependent: false,
    replacesBusinessServices: true, ownsBusinessData: true, replacesAiOrchestrator: true,
    replacesAgentFramework: true, conversationAsProcessState: true, guaranteesUniversalExactlyOnce: true,
    infersAuthority: true, infersApprovalFromSilence: true, workerCodeHidesProcess: true,
    selectsWorkflowProduct: true, definesLaterChapterDetails: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /governed/);
  assert.match(invalid.errors.join('\n'), /workflow-registry/);
  assert.match(invalid.errors.join('\n'), /Authoritative workflow state must be persisted durably/);
  assert.match(invalid.errors.join('\n'), /must not replace business services/);
  assert.match(invalid.errors.join('\n'), /does not guarantee universal exactly-once/);
});

test('ARCH-015-01 assertion detects incomplete workflow overview metadata', () => {
  class IncompleteDescriptor extends WorkflowEngineOverviewDescriptor { goals() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === WORKFLOW_ENGINE_OVERVIEW_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented goals')));
});

test('ARCH-015-01 descriptor is available through Workflow Engine dependency injection', () => {
  const services = addWorkflowEngine(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('WorkflowEngineOverviewDescriptor');
  assert.ok(descriptor instanceof WorkflowEngineOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['requiredProperties', 'nonWorkflowCapabilities', 'useCriteria', 'inappropriateCriteria',
    'goals', 'principles', 'concepts', 'logicalPlanes', 'capabilities', 'actors', 'classifications',
    'definitionFields', 'definitionLifecycle', 'executionIdentityFields', 'executionStates',
    'authoritativeStateFields', 'operationActions', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries', 'futureCapabilities']) values[key] = descriptor[key]();
  return new WorkflowEngineOverviewProfile({ engineName: 'Workflow Engine Overview', ...values });
}