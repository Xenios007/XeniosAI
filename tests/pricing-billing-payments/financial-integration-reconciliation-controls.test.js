import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import {
  FINANCIAL_INTEGRATION_RECONCILIATION_CONTROLS_ERROR_CODE,
  FinancialIntegrationReconciliationControlsDescriptor as Descriptor,
  FinancialIntegrationReconciliationControlsProfile as Profile
} from '../../src/pricing-billing-payments/index.js';

const keys = ['responsibilities', 'adapterFields', 'tokenBoundaryFields', 'reconciliationFields', 'closeFields', 'exceptionFields', 'controlFields', 'invariants'];
const complete = descriptor => {
  const metadata = {};
  for (const key of keys) metadata[key] = descriptor[key]();
  return new Profile({ profileName: 'Financial integration controls', ...metadata });
};

test('ARCH-026-08 exposes adapters tokens reconciliation close exceptions and controls', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.adapterFields().includes('contract-version'));
  assert.ok(descriptor.tokenBoundaryFields().includes('token-scope'));
  assert.ok(descriptor.reconciliationFields().includes('variance'));
  assert.ok(descriptor.closeFields().includes('approval-evidence'));
  assert.ok(descriptor.exceptionFields().includes('resolution-owner'));
});

test('ARCH-026-08 validates integration and reconciliation safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ rawPaymentCredentialsStored: true, silentVarianceWriteOff: true, unapprovedClose: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /raw payment credentials/);
  assert.match(result.errors.join('\n'), /silent variance write-off/);
  assert.match(result.errors.join('\n'), /unapproved financial close/);
});

test('ARCH-026-08 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { controlFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === FINANCIAL_INTEGRATION_RECONCILIATION_CONTROLS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).controlFields.push('x'), TypeError);
});
