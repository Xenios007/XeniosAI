import { PlatformError } from '../../foundation/errors/platform-error.js';
import { FutureIndustrySolutionEvolutionProfile as Profile } from '../contracts/future-industry-solution-evolution-profile.js';
import * as constants from '../future-industry-solution-evolution-constants.js';

const metadata = Object.freeze({ evolutionPrinciples: constants.INDUSTRY_SOLUTION_EVOLUTION_PRINCIPLES, evolutionHorizons: constants.INDUSTRY_SOLUTION_EVOLUTION_HORIZONS, federationContractFields: constants.FEDERATED_SOLUTION_CONTRACT_FIELDS, partnerContributionFields: constants.PARTNER_SOLUTION_CONTRIBUTION_FIELDS, portabilityControls: constants.INDUSTRY_SOLUTION_PORTABILITY_CONTROLS, intelligenceControls: constants.EXPLAINABLE_SOLUTION_INTELLIGENCE_CONTROLS, lifecycleStates: constants.INDUSTRY_SOLUTION_EVOLUTION_LIFECYCLE, controls: constants.INDUSTRY_SOLUTION_EVOLUTION_CONTROLS, failureRecovery: constants.INDUSTRY_SOLUTION_EVOLUTION_FAILURE_RECOVERY, observabilityFields: constants.INDUSTRY_SOLUTION_EVOLUTION_OBSERVABILITY_FIELDS, assuranceEvidence: constants.INDUSTRY_SOLUTION_EVOLUTION_ASSURANCE, invariants: constants.INDUSTRY_SOLUTION_EVOLUTION_INVARIANTS });
const required = Object.freeze({ capabilityCompositionPreserved: 'requires approved capability composition', providerAuthorityPreserved: 'requires preserved provider authority', boundedSemanticsPreserved: 'requires bounded industry semantics', partnerContributionsGoverned: 'requires governed partner contributions', federationExplicitlyContracted: 'requires explicitly contracted federation', portabilityVerified: 'requires verified portability', intelligenceExplainable: 'requires explainable solution intelligence', tenantIsolated: 'requires tenant isolation', humanReviewAvailable: 'requires risk-based human review and appeal', rollbackAndExitReady: 'requires tested rollback and exit readiness' });
const prohibited = Object.freeze({ platformCoreForkAllowed: 'prohibits solution packs from forking the platform core', universalDomainModelAllowed: 'prohibits an unrestricted universal domain model', implicitFederationAuthority: 'prohibits implicit authority through federation', partnerSelfPublishes: 'prohibits partner self-publication without independent controls', tenantDataSharedWithoutAuthority: 'prohibits tenant data sharing without authority', generatedOutputBecomesTruth: 'prohibits generated output becoming source truth', clientInfersCompletion: 'prohibits clients inferring completion', telemetryCopiesProtectedPayload: 'prohibits protected payloads in telemetry', irreversibleEvolution: 'prohibits irreversible evolution', aiSelfPromotes: 'prohibits AI self-promotion', extensionWeakensControls: 'prohibits extensions weakening platform controls' });

export class FutureIndustrySolutionEvolutionDescriptor {
  evolutionPrinciples() { return values(metadata.evolutionPrinciples); }
  evolutionHorizons() { return values(metadata.evolutionHorizons); }
  federationContractFields() { return values(metadata.federationContractFields); }
  partnerContributionFields() { return values(metadata.partnerContributionFields); }
  portabilityControls() { return values(metadata.portabilityControls); }
  intelligenceControls() { return values(metadata.intelligenceControls); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }
  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future Industry Solution Evolution profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-10 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-10 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }
  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.FUTURE_INDUSTRY_SOLUTION_EVOLUTION_ERROR_CODE, 'Future Industry Solution Evolution violates ARCH-030-10.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
