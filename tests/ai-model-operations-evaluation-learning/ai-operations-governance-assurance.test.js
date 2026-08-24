import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { AI_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, AiOperationsGovernanceAssuranceDescriptor as Descriptor, AiOperationsGovernanceAssuranceProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'accountabilityFields', 'riskFields', 'evidenceFields', 'redTeamFields', 'conformanceFields', 'auditFields', 'exceptionFields', 'remediationFields', 'readinessFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia AI governance assurance', ...profile }); };

test('ARCH-029-09 exposes accountability risk evidence red-team conformance audit exceptions remediation and readiness', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.accountabilityFields().includes('risk-owner-reference'));
  assert.ok(descriptor.riskFields().includes('approved-risk-tier'));
  assert.ok(descriptor.evidenceFields().includes('immutable-bundle-digest'));
  assert.ok(descriptor.redTeamFields().includes('prompt-injection-result'));
  assert.ok(descriptor.conformanceFields().includes('architecture-requirement-results'));
  assert.ok(descriptor.auditFields().includes('tamper-evident-integrity-proof'));
  assert.ok(descriptor.exceptionFields().includes('mandatory-expiry'));
  assert.ok(descriptor.readinessFields().includes('tested-rollback-reference'));
});

test('ARCH-029-09 validates governance and assurance safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ selfApproval: true, unclassifiedProductionUse: true, missingEvidenceAccepted: true, redTeamSkipped: true, auditMutable: true, exceptionWithoutExpiry: true, readinessSelfCertified: true, controlsWeakenedByExtension: true, assuranceDirectlyPromotes: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /self-approval/);
  assert.match(result.errors.join('\n'), /missing evidence/);
  assert.match(result.errors.join('\n'), /exceptions without expiry/);
  assert.match(result.errors.join('\n'), /extensions weakening controls/);
});

test('ARCH-029-09 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { evidenceFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === AI_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).readinessFields.push('x'), TypeError);
});
