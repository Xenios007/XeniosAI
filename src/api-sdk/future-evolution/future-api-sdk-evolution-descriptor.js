import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import { FutureApiSdkEvolutionProfile } from '../contracts/future-api-sdk-evolution-profile.js';
import * as constants from '../future-evolution-constants.js';

const METADATA = Object.freeze({
  objectives: constants.API_SDK_FUTURE_OBJECTIVES, strategicDrivers: constants.API_SDK_FUTURE_DRIVERS,
  invariants: constants.API_SDK_FUTURE_INVARIANTS, horizons: constants.API_SDK_FUTURE_HORIZONS,
  maturityLevels: constants.API_SDK_FUTURE_MATURITY_LEVELS, capabilityAreas: constants.API_SDK_FUTURE_CAPABILITY_AREAS,
  experimentStates: constants.API_SDK_FUTURE_EXPERIMENT_STATES, adoptionGates: constants.API_SDK_FUTURE_ADOPTION_GATES,
  evidenceTypes: constants.API_SDK_FUTURE_EVIDENCE, stopCriteria: constants.API_SDK_FUTURE_STOP_CRITERIA,
  architecturalRules: constants.API_SDK_FUTURE_RULES, architectureBoundaries: constants.API_SDK_FUTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  invariantsPreserved: 'ARCH-017-10 requires enduring invariants to be preserved.',
  businessFirst: 'ARCH-017-10 requires business and domain needs before technology selection.',
  authoritativeProviderContracts: 'ARCH-017-10 requires providers to retain authoritative contract enforcement.',
  discoveryNoAuthority: 'ARCH-017-10 requires discovery and SDK possession not to grant authority.',
  tenantIsolationPreserved: 'ARCH-017-10 requires tenant and property isolation through evolution.',
  generatedArtifactsTraceable: 'ARCH-017-10 requires generated and AI-produced artifacts to be traceable and reviewable.',
  humanAccountability: 'ARCH-017-10 requires human accountability for material decisions.',
  evidenceBasedPromotion: 'ARCH-017-10 requires evidence-based capability promotion.',
  experimentsControlled: 'ARCH-017-10 requires controlled experiments and explicit stop criteria.',
  compatibilityMigrationGoverned: 'ARCH-017-10 requires semantic compatibility and migration governance.',
  operationsAndRetirementRequired: 'ARCH-017-10 requires ownership, operations, support, and retirement for new capabilities.',
  boundedAutomation: 'ARCH-017-10 requires bounded, explainable, observable automation under human authority.',
  portabilityExitTested: 'ARCH-017-10 requires credible portability and exit testing.',
  technologyNeutral: 'ARCH-017-10 requires technology and provider neutrality.',
  adrDecisions: 'ARCH-017-10 requires material evolution decisions to use ADRs.'
});

const REQUIRED_FALSE = Object.freeze({
  technologyFirst: 'ARCH-017-10 rejects technology-first architecture.',
  discoveryGrantsAuthority: 'ARCH-017-10 rejects discovery or marketplace listing as authority.',
  tenantForksDefault: 'ARCH-017-10 rejects uncontrolled tenant-specific source forks.',
  permanentPreview: 'ARCH-017-10 rejects permanent preview capabilities.',
  aiAutonomousApproval: 'ARCH-017-10 rejects autonomous AI approval of contracts, risk, or legal compliance.',
  universalExactlyOnce: 'ARCH-017-10 does not promise universal exactly-once behavior.',
  marketplaceListingProvesTrust: 'ARCH-017-10 rejects marketplace listing as proof of trust.',
  experimentProductionApproved: 'ARCH-017-10 rejects treating experiments as production-approved.',
  portabilityClaimUntested: 'ARCH-017-10 rejects untested portability claims.',
  selectsTechnology: 'ARCH-017-10 does not select a mandatory implementation technology.',
  replacesChapterAuthorities: 'ARCH-017-10 does not replace adjacent architecture or lifecycle authorities.'
});

export class FutureApiSdkEvolutionDescriptor {
  objectives() { return values(METADATA.objectives); }
  strategicDrivers() { return values(METADATA.strategicDrivers); }
  invariants() { return values(METADATA.invariants); }
  horizons() { return values(METADATA.horizons); }
  maturityLevels() { return values(METADATA.maturityLevels); }
  capabilityAreas() { return values(METADATA.capabilityAreas); }
  experimentStates() { return values(METADATA.experimentStates); }
  adoptionGates() { return values(METADATA.adoptionGates); }
  evidenceTypes() { return values(METADATA.evidenceTypes); }
  stopCriteria() { return values(METADATA.stopCriteria); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof FutureApiSdkEvolutionProfile ? input : new FutureApiSdkEvolutionProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future API and SDK Evolution profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Future API and SDK Evolution must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(constants.API_SDK_FUTURE_EVOLUTION_ERROR_CODE,
      'Future API and SDK Evolution violates ARCH-017-10.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
