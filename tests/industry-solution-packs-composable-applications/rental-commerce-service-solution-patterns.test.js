import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { RENTAL_COMMERCE_SERVICE_SOLUTION_PATTERNS_ERROR_CODE, RentalCommerceServiceSolutionPatternsDescriptor as Descriptor, RentalCommerceServiceSolutionPatternsProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['patternFields', 'rentalFields', 'commerceFields', 'customerServiceFields', 'professionalServiceFields', 'authorityMappings', 'contractFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Bounded industry solution patterns', ...profile }); };

test('ARCH-030-05 exposes rental commerce customer service and professional service patterns', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.rentalFields().includes('handover-return-and-condition-evidence'));
  assert.ok(descriptor.commerceFields().includes('authoritative-price-tax-fee-and-promotion-reference'));
  assert.ok(descriptor.customerServiceFields().includes('resolution-compensation-and-appeal-reference'));
  assert.ok(descriptor.professionalServiceFields().includes('deliverable-version-review-and-acceptance-reference'));
  assert.ok(descriptor.authorityMappings().includes('cross-domain-orchestration:arch-015-workflow-engine'));
  assert.ok(descriptor.controls().includes('patterns-remain-bounded-specializations'));
});

test('ARCH-030-05 validates bounded pattern and provider-authority safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ patternBecomesUniversalModel: true, packReownsProviderState: true, directDatabaseAccess: true, rentalDoubleAllocationAccepted: true, commercePriceInvented: true, serviceCaseInferredClosed: true, professionalWorkAutoAccepted: true, eventTransfersOwnership: true, optimisticCompletionInferred: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /universal domain model/);
  assert.match(result.errors.join('\n'), /rental double allocation/);
  assert.match(result.errors.join('\n'), /inferred service-case closure/);
  assert.match(result.errors.join('\n'), /automatic professional-work acceptance/);
});

test('ARCH-030-05 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { commerceFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === RENTAL_COMMERCE_SERVICE_SOLUTION_PATTERNS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).professionalServiceFields.push('x'), TypeError);
});
