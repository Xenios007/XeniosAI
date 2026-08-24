import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { PROMPT_RETRIEVAL_TOOL_POLICY_CONFIGURATION_ERROR_CODE, PromptRetrievalToolPolicyConfigurationDescriptor as Descriptor, PromptRetrievalToolPolicyConfigurationProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'packageFields', 'promptFields', 'retrievalFields', 'toolFields', 'policyFields', 'dependencyFields', 'compatibilityFields', 'approvalFields', 'rollbackFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia AI behavior package', ...profile }); };

test('ARCH-029-04 exposes packages prompts retrieval tools policies dependencies compatibility approval and rollback', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.packageFields().includes('dependency-lock-reference'));
  assert.ok(descriptor.promptFields().includes('output-schema-reference'));
  assert.ok(descriptor.retrievalFields().includes('untrusted-content-isolation'));
  assert.ok(descriptor.toolFields().includes('side-effect-classification'));
  assert.ok(descriptor.policyFields().includes('default-deny-result'));
  assert.ok(descriptor.compatibilityFields().includes('regression-evaluation-reference'));
  assert.ok(descriptor.rollbackFields().includes('atomic-rollback-procedure'));
});

test('ARCH-029-04 validates behavior configuration safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ mutableProductionPackage: true, floatingDependency: true, untrustedRetrievalAsInstruction: true, unapprovedTool: true, policyBypassed: true, secretEmbedded: true, partialRollback: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /mutable production packages/);
  assert.match(result.errors.join('\n'), /floating dependencies/);
  assert.match(result.errors.join('\n'), /untrusted retrieval as instruction/);
  assert.match(result.errors.join('\n'), /embedded secrets/);
});

test('ARCH-029-04 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { dependencyFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === PROMPT_RETRIEVAL_TOOL_POLICY_CONFIGURATION_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).packageFields.push('x'), TypeError);
});
