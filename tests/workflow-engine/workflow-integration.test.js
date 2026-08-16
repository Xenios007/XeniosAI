import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_CHILD_VERSION_BINDINGS,
  WORKFLOW_COMMAND_OUTCOMES,
  WORKFLOW_COMMUNICATION_MODELS,
  WORKFLOW_INTEGRATION_BOUNDARIES,
  WORKFLOW_INTEGRATION_CONTRACT_FIELDS,
  WORKFLOW_INTEGRATION_ERROR_CODE,
  WORKFLOW_INTEGRATION_ERRORS,
  WORKFLOW_INTEGRATION_RULES,
  WorkflowIntegrationDescriptor,
  WorkflowIntegrationProfile,
  addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-07 exposes contract-first integration and command semantics', () => {
  const descriptor = new WorkflowIntegrationDescriptor();
  assert.ok(descriptor.communicationModels().includes(WORKFLOW_COMMUNICATION_MODELS.ASYNC_COMMAND));
  assert.deepEqual(descriptor.contractFields(), Object.values(WORKFLOW_INTEGRATION_CONTRACT_FIELDS));
  assert.ok(descriptor.commandOutcomes().includes(WORKFLOW_COMMAND_OUTCOMES.UNCERTAIN));
  assert.ok(descriptor.normalizedErrors().includes(WORKFLOW_INTEGRATION_ERRORS.RESULT_UNCERTAIN));
});

test('ARCH-015-07 exposes child-workflow, ownership, and provider boundaries', () => {
  const descriptor = new WorkflowIntegrationDescriptor();
  assert.deepEqual(descriptor.childVersionBindings(), Object.values(WORKFLOW_CHILD_VERSION_BINDINGS));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_INTEGRATION_RULES.NO_DATABASE_ACCESS));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_INTEGRATION_RULES.PROVIDER_ACL));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_INTEGRATION_BOUNDARIES.SERVICE_INTERNALS));
});

test('ARCH-015-07 validates profiles and rejects integration shortcuts', () => {
  const descriptor = new WorkflowIntegrationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'contractDriven', 'serviceOwnershipPreserved', 'domainAuthorityExternal', 'publishedInterfacesOnly',
    'durableOrchestrationSeparate', 'requestBoundaryPreserved', 'conversationNonAuthoritative',
    'versionedContracts', 'effectiveVersionBound', 'stableOperationIdentity',
    'targetAuthorizesIndependently', 'tenantPropertyIsolation', 'providerAntiCorruption',
    'childIdentityPreserved', 'humanAgentContractBound', 'credentialsExcluded', 'consistencyExplicit',
    'endToEndEvidence', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'ownsDomainLogic', 'directDatabaseAccess', 'conversationOwnsState',
    'transportSuccessMeansCompletion', 'workflowDecidesBusinessValidity',
    'providerPayloadsDefineWorkflow', 'credentialsInDefinitions', 'correlationIsCredential',
    'gatewayOwnsState', 'selectsProviderProduct', 'definesAdjacentDetails'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /asynchronous-command/);
  assert.match(validation.errors.join('\n'), /requires contractDriven/);
  assert.match(validation.errors.join('\n'), /prohibits directDatabaseAccess/);
});

test('ARCH-015-07 detects incomplete metadata', () => {
  class IncompleteDescriptor extends WorkflowIntegrationDescriptor {
    communicationModels() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === WORKFLOW_INTEGRATION_ERROR_CODE
  );
});

test('ARCH-015-07 profile is immutable', () => {
  const profile = complete(new WorkflowIntegrationDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.communicationModels.push('other'), TypeError);
});

test('ARCH-015-07 descriptor is registered', () => {
  const descriptor = addWorkflowEngine(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('WorkflowIntegrationDescriptor');
  assert.ok(descriptor instanceof WorkflowIntegrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const values = {};
  for (const key of [
    'communicationModels', 'integrationDomains', 'contractFields', 'initiators', 'commandOutcomes',
    'childVersionBindings', 'normalizedErrors', 'operations', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) values[key] = descriptor[key]();
  return new WorkflowIntegrationProfile({ profileName: 'Workflow Integration', ...values });
}
