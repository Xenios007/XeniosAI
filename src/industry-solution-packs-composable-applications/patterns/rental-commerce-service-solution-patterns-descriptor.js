import { PlatformError } from '../../foundation/errors/platform-error.js';
import { RentalCommerceServiceSolutionPatternsProfile as Profile } from '../contracts/rental-commerce-service-solution-patterns-profile.js';
import * as constants from '../rental-commerce-service-solution-patterns-constants.js';

const metadata = Object.freeze({ patternFields: constants.SOLUTION_PATTERN_FIELDS, rentalFields: constants.RENTAL_SOLUTION_PATTERN_FIELDS, commerceFields: constants.COMMERCE_SOLUTION_PATTERN_FIELDS, customerServiceFields: constants.CUSTOMER_SERVICE_SOLUTION_PATTERN_FIELDS, professionalServiceFields: constants.PROFESSIONAL_SERVICE_SOLUTION_PATTERN_FIELDS, authorityMappings: constants.PATTERN_AUTHORITY_MAPPINGS, contractFields: constants.SOLUTION_PATTERN_CONTRACT_FIELDS, lifecycleStates: constants.SOLUTION_PATTERN_LIFECYCLE_STATES, controls: constants.SOLUTION_PATTERN_CONTROLS, failureRecovery: constants.SOLUTION_PATTERN_FAILURE_RECOVERY, observabilityFields: constants.SOLUTION_PATTERN_OBSERVABILITY_FIELDS, assuranceEvidence: constants.SOLUTION_PATTERN_ASSURANCE_EVIDENCE, invariants: constants.SOLUTION_PATTERN_INVARIANTS });
const required = Object.freeze({ patternsReusableAndBounded: 'requires reusable bounded patterns', providerAuthorityPreserved: 'requires preserved provider authority', rentalAvailabilityAuthoritative: 'requires authoritative rental availability', commerceOrderAuthoritative: 'requires authoritative commerce orders', serviceCaseAuthoritative: 'requires authoritative service cases', professionalWorkAuthoritative: 'requires authoritative professional work and acceptance', contractsVersioned: 'requires versioned contracts', workflowsArch015Governed: 'requires ARCH-015 governed workflows', tenantIsolated: 'requires tenant isolation' });
const prohibited = Object.freeze({ patternBecomesUniversalModel: 'prohibits patterns becoming a universal domain model', packReownsProviderState: 'prohibits packs from reowning provider state', directDatabaseAccess: 'prohibits direct database access', rentalDoubleAllocationAccepted: 'prohibits accepted rental double allocation', commercePriceInvented: 'prohibits invented commerce prices', serviceCaseInferredClosed: 'prohibits inferred service-case closure', professionalWorkAutoAccepted: 'prohibits automatic professional-work acceptance', eventTransfersOwnership: 'prohibits events transferring ownership', optimisticCompletionInferred: 'prohibits inferred optimistic completion', extensionWeakensControls: 'prohibits extensions weakening controls', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', aiBehaviorOutsideArch029: 'prohibits AI behavior changes outside ARCH-029' });

export class RentalCommerceServiceSolutionPatternsDescriptor {
  patternFields() { return values(metadata.patternFields); }
  rentalFields() { return values(metadata.rentalFields); }
  commerceFields() { return values(metadata.commerceFields); }
  customerServiceFields() { return values(metadata.customerServiceFields); }
  professionalServiceFields() { return values(metadata.professionalServiceFields); }
  authorityMappings() { return values(metadata.authorityMappings); }
  contractFields() { return values(metadata.contractFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Rental Commerce and Service Solution Patterns profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-05 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-05 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.RENTAL_COMMERCE_SERVICE_SOLUTION_PATTERNS_ERROR_CODE, 'Rental Commerce and Service Solution Patterns violates ARCH-030-05.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
