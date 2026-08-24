import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { CONFORMANCE_VERSIONING_MIGRATION_EXIT_ERROR_CODE, ConformanceVersioningMigrationExitDescriptor as Descriptor, ConformanceVersioningMigrationExitProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['conformanceFields', 'certificationFields', 'versionFields', 'compatibilityFields', 'upgradeFields', 'migrationFields', 'rollbackFields', 'deprecationFields', 'portabilityFields', 'removalFields', 'releaseFlow', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia pack lifecycle', ...profile }); };

test('ARCH-030-08 exposes certification compatibility upgrade migration rollback deprecation portability and removal', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.certificationFields().includes('independent-certification-approver-reference'));
  assert.ok(descriptor.compatibilityFields().includes('compatible-conditional-or-incompatible'));
  assert.ok(descriptor.upgradeFields().includes('progressive-wave-and-canary-plan'));
  assert.ok(descriptor.migrationFields().includes('source-target-count-digest-and-business-reconciliation'));
  assert.ok(descriptor.rollbackFields().includes('rollback-test-evidence'));
  assert.ok(descriptor.portabilityFields().includes('documented-vendor-neutral-formats'));
  assert.ok(descriptor.removalFields().includes('runtime-data-config-route-job-and-secret-removal-verification'));
  assert.deepEqual(descriptor.releaseFlow(), ['governed-facts-outcomes-feedback-and-telemetry', 'quality-privacy-safety-risk-and-conformance-assessment', 'authorized-approval-or-promotion', 'bounded-release-or-operational-action', 'objectives-drift-incidents-and-customer-impact-monitoring', 'stop-rollback-restrict-or-remediate']);
});

test('ARCH-030-08 validates lifecycle conformance migration and exit safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ selfCertification: true, compatibilityAssumed: true, versionMutatedInPlace: true, untestedBigBangUpgrade: true, sourceDeletedBeforeReconciliation: true, rollbackUnavailable: true, deprecationWithoutNotice: true, proprietaryOnlyExport: true, removalLeavesAuthority: true, removalLeavesSecretsOrRuntime: true, aiApprovesOwnPromotion: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /self-certification/);
  assert.match(result.errors.join('\n'), /source deletion before reconciliation/);
  assert.match(result.errors.join('\n'), /proprietary-only export/);
  assert.match(result.errors.join('\n'), /removal leaving secrets or runtime artifacts/);
});

test('ARCH-030-08 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { migrationFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === CONFORMANCE_VERSIONING_MIGRATION_EXIT_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).portabilityFields.push('x'), TypeError);
});
