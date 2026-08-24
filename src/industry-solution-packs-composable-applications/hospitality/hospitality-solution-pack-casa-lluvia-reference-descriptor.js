import { PlatformError } from '../../foundation/errors/platform-error.js';
import { HospitalitySolutionPackCasaLluviaReferenceProfile as Profile } from '../contracts/hospitality-solution-pack-casa-lluvia-reference-profile.js';
import * as constants from '../hospitality-solution-pack-casa-lluvia-reference-constants.js';

const metadata = Object.freeze({ boundedContexts: constants.HOSPITALITY_BOUNDED_CONTEXTS, authorityMappings: constants.HOSPITALITY_AUTHORITY_MAPPINGS, propertyOperationFields: constants.PROPERTY_OPERATION_FIELDS, guestJourneyStages: constants.GUEST_JOURNEY_STAGES, bookingRuleFields: constants.HOSPITALITY_BOOKING_RULE_FIELDS, addOnFields: constants.HOSPITALITY_ADD_ON_FIELDS, authorizationFields: constants.GUEST_AUTHORIZATION_FIELDS, validationFlow: constants.CASA_LLUVIA_VALIDATION_FLOW, contractFields: constants.CASA_LLUVIA_REFERENCE_CONTRACT_FIELDS, controls: constants.HOSPITALITY_REFERENCE_CONTROLS, failureRecovery: constants.HOSPITALITY_REFERENCE_FAILURE_RECOVERY, observabilityFields: constants.HOSPITALITY_REFERENCE_OBSERVABILITY_FIELDS, assuranceEvidence: constants.HOSPITALITY_REFERENCE_ASSURANCE_EVIDENCE, invariants: constants.HOSPITALITY_REFERENCE_INVARIANTS });
const required = Object.freeze({ productionShapedReference: 'requires Casa Lluvia to remain a production-shaped reference', providerAuthorityPreserved: 'requires preserved provider authority', tenantPropertyScoped: 'requires tenant and property scope', availabilityAuthoritative: 'requires authoritative availability', pricingDeterministic: 'requires deterministic pricing', bookingRulesProviderEnforced: 'requires provider-enforced booking rules', addOnsProviderPriced: 'requires provider-priced add-ons', guestAuthorizationRequired: 'requires guest authorization', validationDeterministic: 'requires deterministic validation', workflowsArch015Governed: 'requires ARCH-015 governed workflows', aiExplanationOnly: 'requires AI to remain limited to collection explanation and handoff' });
const prohibited = Object.freeze({ hospitalityAsUniversalModel: 'prohibits hospitality as a universal platform model', packOwnsAllBusinessState: 'prohibits the pack from owning all business state', directDatabaseAccess: 'prohibits direct database access', externalCalendarAuthoritative: 'prohibits external calendars as internal authority', aiComputesOrInventsPrice: 'prohibits AI from computing or inventing price', aiChangesBookingState: 'prohibits AI from changing booking state', configurationBypassesOccupancy: 'prohibits configuration bypassing occupancy controls', commandLacksTenantPropertyScope: 'prohibits commands without tenant and property scope', optimisticCompletionInferred: 'prohibits inferred optimistic completion', guestDataInTelemetry: 'prohibits guest data in telemetry', extensionWeakensControls: 'prohibits extensions weakening controls' });

export class HospitalitySolutionPackCasaLluviaReferenceDescriptor {
  boundedContexts() { return values(metadata.boundedContexts); }
  authorityMappings() { return values(metadata.authorityMappings); }
  propertyOperationFields() { return values(metadata.propertyOperationFields); }
  guestJourneyStages() { return values(metadata.guestJourneyStages); }
  bookingRuleFields() { return values(metadata.bookingRuleFields); }
  addOnFields() { return values(metadata.addOnFields); }
  authorizationFields() { return values(metadata.authorizationFields); }
  validationFlow() { return values(metadata.validationFlow); }
  contractFields() { return values(metadata.contractFields); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Hospitality Solution Pack and Casa Lluvia Reference profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-04 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-04 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.HOSPITALITY_SOLUTION_PACK_CASA_LLUVIA_REFERENCE_ERROR_CODE, 'Hospitality Solution Pack and Casa Lluvia Reference violates ARCH-030-04.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
