import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { WORKFLOW_AGENT_KNOWLEDGE_INTEGRATION_PACKAGING_ERROR_CODE, WorkflowAgentKnowledgeIntegrationPackagingDescriptor as Descriptor, WorkflowAgentKnowledgeIntegrationPackagingProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['packageFields', 'workflowFields', 'agentFields', 'promptFields', 'toolFields', 'knowledgeFields', 'connectorFields', 'permissionFields', 'testFields', 'contractFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia automation package', ...profile }); };

test('ARCH-030-06 exposes workflow agent prompt tool knowledge connector permission test and lifecycle packaging', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.workflowFields().includes('arch-015-workflow-definition-version'));
  assert.ok(descriptor.agentFields().includes('arch-029-promoted-behavior-package-reference'));
  assert.ok(descriptor.promptFields().includes('arch-029-promotion-record-reference'));
  assert.ok(descriptor.toolFields().includes('untrusted-result-schema'));
  assert.ok(descriptor.knowledgeFields().includes('correction-deletion-and-retirement-policy'));
  assert.ok(descriptor.connectorFields().includes('secret-reference-not-secret-value'));
  assert.ok(descriptor.permissionFields().includes('expiry-revocation-and-review-policy'));
  assert.ok(descriptor.testFields().includes('pass-restrict-or-reject'));
});

test('ARCH-030-06 validates packaged artifact authority and lifecycle safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ mutablePackageInPlace: true, workflowBypassesProvider: true, agentUsesSharedIdentity: true, promptChangesProductionDirectly: true, unrestrictedTool: true, unapprovedKnowledge: true, connectorDirectDatabaseAccess: true, wildcardPermission: true, testsSkipped: true, installationGrantsRuntimeAuthority: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /in-place package mutation/);
  assert.match(result.errors.join('\n'), /shared agent identity/);
  assert.match(result.errors.join('\n'), /wildcard permissions/);
  assert.match(result.errors.join('\n'), /installation granting runtime authority/);
});

test('ARCH-030-06 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { connectorFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === WORKFLOW_AGENT_KNOWLEDGE_INTEGRATION_PACKAGING_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).permissionFields.push('x'), TypeError);
});
