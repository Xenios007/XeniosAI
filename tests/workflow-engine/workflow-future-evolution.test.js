import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_ADOPTION_GATES,
  WORKFLOW_CANONICAL_MODEL_ELEMENTS,
  WORKFLOW_EVOLUTION_STOP_CRITERIA,
  WORKFLOW_FUTURE_BOUNDARIES,
  WORKFLOW_FUTURE_EVOLUTION_ERROR_CODE,
  WORKFLOW_FUTURE_RULES,
  WORKFLOW_MATURITY_STAGES,
  WORKFLOW_MIGRATION_PATTERNS,
  WorkflowFutureEvolutionDescriptor,
  WorkflowFutureEvolutionProfile,
  addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-10 exposes maturity, canonical-model, and migration semantics', () => {
  const descriptor = new WorkflowFutureEvolutionDescriptor();
  assert.deepEqual(descriptor.maturityStages(), Object.values(WORKFLOW_MATURITY_STAGES));
  assert.ok(descriptor.canonicalModelElements().includes(WORKFLOW_CANONICAL_MODEL_ELEMENTS.COMPENSATION));
  assert.ok(descriptor.migrationPatterns().includes(WORKFLOW_MIGRATION_PATTERNS.DRAIN));
  assert.deepEqual(descriptor.adoptionGates(), Object.values(WORKFLOW_ADOPTION_GATES));
});

test('ARCH-015-10 exposes bounded evolution, stop criteria, and scope boundaries', () => {
  const descriptor = new WorkflowFutureEvolutionDescriptor();
  assert.ok(descriptor.stopCriteria().includes(WORKFLOW_EVOLUTION_STOP_CRITERIA.ISOLATION));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_FUTURE_RULES.BOUNDED_ADAPTATION));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_FUTURE_RULES.SINGLE_AUTHORITY));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_FUTURE_BOUNDARIES.EXPERIMENT));
});

test('ARCH-015-10 validates profiles and rejects evolution shortcuts', () => {
  const descriptor = new WorkflowFutureEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'additiveGovernedReversible', 'durableExecutionPreserved', 'deterministicControl',
    'ownershipPreserved', 'canonicalProviderIndependent', 'semanticEquivalence',
    'versionCoexistence', 'boundedAdaptiveBehavior', 'predictionNonAuthoritative',
    'agentProposalReviewed', 'conversationNonAuthoritative', 'portablePackagesExcludeSecrets',
    'silentSemanticLossRejected', 'oneTransitionAuthority', 'migrationIntegrity',
    'drainWhenTransferUnproven', 'stagedAdoption', 'explicitExit', 'adrDecisions',
    'riskReassessed', 'evidenceBased', 'tenantPropertyIsolation', 'humanAccountability',
    'boundedAgentAutonomy', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'productRoadmapCommitment', 'providerDefinesSemantics', 'untrustedCodeControlsWorkflow',
    'predictionIsFact', 'agentSelfActivation', 'activeSemanticMutation',
    'implicitFederationAuthority', 'sharedDatabasesRequired', 'offlineUnboundedAuthority',
    'dualTransitionAuthority', 'replayExternalEffects', 'eventSourcingRequired',
    'experimentProductionApproved', 'universalExactlyOnce', 'unboundedAutonomy',
    'selectsWorkflowProduct', 'definesDeliveryDates'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /durable-foundation/);
  assert.match(validation.errors.join('\n'), /requires additiveGovernedReversible/);
  assert.match(validation.errors.join('\n'), /prohibits agentSelfActivation/);
});

test('ARCH-015-10 detects incomplete metadata', () => {
  class IncompleteDescriptor extends WorkflowFutureEvolutionDescriptor {
    maturityStages() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === WORKFLOW_FUTURE_EVOLUTION_ERROR_CODE
  );
});

test('ARCH-015-10 profile is immutable', () => {
  const profile = complete(new WorkflowFutureEvolutionDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.maturityStages.push('other'), TypeError);
});

test('ARCH-015-10 descriptor is registered', () => {
  const descriptor = addWorkflowEngine(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('WorkflowFutureEvolutionDescriptor');
  assert.ok(descriptor instanceof WorkflowFutureEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'evolutionGoals', 'evolutionGuardrails', 'maturityStages', 'evolutionHorizons',
    'canonicalModelElements', 'validationFindings', 'adaptationInputs', 'migrationPatterns',
    'technologyRadarStates', 'adoptionGates', 'stopCriteria', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new WorkflowFutureEvolutionProfile({ profileName: 'Future Workflow Evolution', ...metadata });
}
