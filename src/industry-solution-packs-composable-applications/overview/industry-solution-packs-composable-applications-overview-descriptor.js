import { PlatformError } from '../../foundation/errors/platform-error.js';
import { IndustrySolutionPacksComposableApplicationsOverviewProfile as Profile } from '../contracts/industry-solution-packs-composable-applications-overview-profile.js';
import * as constants from '../industry-solution-packs-composable-applications-overview-constants.js';

const metadata = Object.freeze({ responsibilities: constants.SOLUTION_PACK_RESPONSIBILITIES, authorities: constants.SOLUTION_PACK_AUTHORITIES, capabilities: constants.SOLUTION_PACK_CAPABILITIES, contractFields: constants.SOLUTION_PACK_CONTRACT_FIELDS, packFields: constants.SOLUTION_PACK_FIELDS, lifecycleStates: constants.SOLUTION_PACK_LIFECYCLE_STATES, boundaries: constants.SOLUTION_PACK_BOUNDARIES, casaLluviaObjectives: constants.CASA_LLUVIA_SOLUTION_OBJECTIVES, governanceControls: constants.SOLUTION_PACK_GOVERNANCE_CONTROLS, failureRecovery: constants.SOLUTION_PACK_FAILURE_RECOVERY, observabilityFields: constants.SOLUTION_PACK_OBSERVABILITY_FIELDS, assuranceEvidence: constants.SOLUTION_PACK_ASSURANCE_EVIDENCE, invariants: constants.SOLUTION_PACK_INVARIANTS });
const required = Object.freeze({ composesApprovedCapabilities: 'requires composition of approved capabilities', platformCorePreserved: 'requires the platform core to remain preserved', tenantIsolationPreserved: 'requires preserved tenant isolation', authorityPreserved: 'requires preserved shared authority', domainModelBounded: 'requires bounded industry domain models', providerValidationRequired: 'requires owning-provider validation', contractsVersioned: 'requires versioned contracts', lifecycleGoverned: 'requires governed lifecycle', humanReviewRiskBased: 'requires risk-based human review and appeal' });
const prohibited = Object.freeze({ platformCoreFork: 'prohibits platform core forks', tenantIsolationBypass: 'prohibits tenant-isolation bypass', sharedAuthorityRedefined: 'prohibits redefinition of shared authority', unrestrictedUniversalDomainModel: 'prohibits unrestricted universal domain models', businessStateReownedByPack: 'prohibits solution packs from reowning business state', directServiceDatabaseAccess: 'prohibits direct service database access', optimisticCompletionInferred: 'prohibits inferred optimistic completion', generatedOutputAsTruth: 'prohibits generated output as source truth', extensionWeakensControls: 'prohibits extensions weakening controls', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', aiBehaviorOutsideArch029: 'prohibits AI behavior changes outside ARCH-029' });

export class IndustrySolutionPacksComposableApplicationsOverviewDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  authorities() { return values(metadata.authorities); }
  capabilities() { return values(metadata.capabilities); }
  contractFields() { return values(metadata.contractFields); }
  packFields() { return values(metadata.packFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  boundaries() { return values(metadata.boundaries); }
  casaLluviaObjectives() { return values(metadata.casaLluviaObjectives); }
  governanceControls() { return values(metadata.governanceControls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Industry Solution Packs and Composable Applications Overview profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-01 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-01 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.INDUSTRY_SOLUTION_PACKS_COMPOSABLE_APPLICATIONS_OVERVIEW_ERROR_CODE, 'Industry Solution Packs and Composable Applications Overview violates ARCH-030-01.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
