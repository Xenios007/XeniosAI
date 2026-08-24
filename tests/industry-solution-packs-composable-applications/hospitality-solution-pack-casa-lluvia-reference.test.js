import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { HOSPITALITY_SOLUTION_PACK_CASA_LLUVIA_REFERENCE_ERROR_CODE, HospitalitySolutionPackCasaLluviaReferenceDescriptor as Descriptor, HospitalitySolutionPackCasaLluviaReferenceProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['boundedContexts', 'authorityMappings', 'propertyOperationFields', 'guestJourneyStages', 'bookingRuleFields', 'addOnFields', 'authorizationFields', 'validationFlow', 'contractFields', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia hospitality solution pack', ...profile }); };

test('ARCH-030-04 exposes hospitality contexts property operations guest journeys booking add-ons and authorization', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.boundedContexts().includes('property-profile-and-operations-context'));
  assert.ok(descriptor.authorityMappings().includes('reservation-and-stay-state:reservation-service'));
  assert.ok(descriptor.propertyOperationFields().includes('maintenance-block-references'));
  assert.ok(descriptor.guestJourneyStages().includes('provider-confirmed-booking'));
  assert.ok(descriptor.bookingRuleFields().includes('current-availability-version'));
  assert.ok(descriptor.addOnFields().includes('pool-parking-or-approved-amenity-type'));
  assert.ok(descriptor.authorizationFields().includes('authorization-evidence-reference'));
  assert.deepEqual(descriptor.validationFlow(), ['actor-tenant-purpose-input-and-expected-version', 'authorization-and-policy-check', 'deny-challenge-minimize-or-human-handoff', 'deterministic-validation-and-authoritative-source-checks', 'owning-capability-commit-or-evaluation', 'versioned-result-obligations-and-evidence']);
});

test('ARCH-030-04 validates Casa Lluvia authority pricing booking and tenant safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ hospitalityAsUniversalModel: true, packOwnsAllBusinessState: true, directDatabaseAccess: true, externalCalendarAuthoritative: true, aiComputesOrInventsPrice: true, aiChangesBookingState: true, configurationBypassesOccupancy: true, commandLacksTenantPropertyScope: true, guestDataInTelemetry: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /universal platform model/);
  assert.match(result.errors.join('\n'), /external calendars as internal authority/);
  assert.match(result.errors.join('\n'), /computing or inventing price/);
  assert.match(result.errors.join('\n'), /commands without tenant and property scope/);
});

test('ARCH-030-04 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { guestJourneyStages() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === HOSPITALITY_SOLUTION_PACK_CASA_LLUVIA_REFERENCE_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).bookingRuleFields.push('x'), TypeError);
});
