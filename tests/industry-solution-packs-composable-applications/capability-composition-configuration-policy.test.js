import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { CAPABILITY_COMPOSITION_CONFIGURATION_POLICY_ERROR_CODE, CapabilityCompositionConfigurationPolicyDescriptor as Descriptor, CapabilityCompositionConfigurationPolicyProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['compositionFields', 'apiFields', 'eventFields', 'workflowFields', 'agentFields', 'knowledgeFields', 'uiFields', 'policyFields', 'tenantConfigurationFields', 'lifecycleStates', 'boundaryControls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia capability composition', ...profile }); };

test('ARCH-030-03 exposes API event workflow agent knowledge UI policy and tenant configuration composition', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.apiFields().includes('authoritative-provider-reference'));
  assert.ok(descriptor.eventFields().includes('event-does-not-transfer-ownership'));
  assert.ok(descriptor.workflowFields().includes('arch-015-workflow-definition-version'));
  assert.ok(descriptor.agentFields().includes('delegated-authority-reference'));
  assert.ok(descriptor.knowledgeFields().includes('grounding-and-citation-policy'));
  assert.ok(descriptor.uiFields().includes('authorized-provider-mediated-actions'));
  assert.ok(descriptor.policyFields().includes('platform-industry-tenant-policy-precedence'));
  assert.ok(descriptor.tenantConfigurationFields().includes('previous-valid-configuration-reference'));
});

test('ARCH-030-03 validates composition authority policy and tenant safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ directDatabaseAccess: true, eventTransfersAuthority: true, optimisticCompletionInferred: true, agentAuthorityExpanded: true, unapprovedKnowledgeUsed: true, uiBypassesPolicy: true, tenantConfigurationCrossScope: true, packPolicyWeakensPlatform: true, generatedResponseAsTruth: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /events transferring authority/);
  assert.match(result.errors.join('\n'), /expanding agent authority/);
  assert.match(result.errors.join('\n'), /UI policy bypass/);
  assert.match(result.errors.join('\n'), /pack policy weakening platform controls/);
});

test('ARCH-030-03 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { policyFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === CAPABILITY_COMPOSITION_CONFIGURATION_POLICY_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).tenantConfigurationFields.push('x'), TypeError);
});
