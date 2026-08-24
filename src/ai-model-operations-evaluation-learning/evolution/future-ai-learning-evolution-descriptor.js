import { PlatformError } from '../../foundation/errors/platform-error.js';
import { FutureAiLearningEvolutionProfile as Profile } from '../contracts/future-ai-learning-evolution-profile.js';
import * as constants from '../future-ai-learning-evolution-constants.js';

const metadata = Object.freeze({ evolutionPrinciples: constants.AI_LEARNING_EVOLUTION_PRINCIPLES, evolutionHorizons: constants.AI_LEARNING_EVOLUTION_HORIZONS, adaptiveRouting: constants.ADAPTIVE_ROUTING_EVOLUTION, specializedModels: constants.SPECIALIZED_MODEL_EVOLUTION, privacyPreservingLearning: constants.PRIVACY_PRESERVING_LEARNING, verifiableImprovement: constants.VERIFIABLE_AI_IMPROVEMENT, lifecycle: constants.AI_EVOLUTION_LIFECYCLE, controls: constants.AI_EVOLUTION_CONTROLS, failureRecovery: constants.AI_EVOLUTION_FAILURE_RECOVERY, observabilityFields: constants.AI_EVOLUTION_OBSERVABILITY, assuranceEvidence: constants.AI_EVOLUTION_ASSURANCE, invariants: constants.AI_EVOLUTION_INVARIANTS });
const required = Object.freeze({ governedEvaluationPromotionLoop: 'requires a governed evaluation and promotion loop', directProductionLearningProhibited: 'requires direct production learning to be prohibited', adaptiveRoutingBounded: 'requires bounded adaptive routing', specializedModelsPurposeScoped: 'requires purpose-scoped specialized models', privacyPreservingLearningGoverned: 'requires governed privacy-preserving learning', improvementEvidenceVerified: 'requires verified improvement evidence', sourceAuthorityPreserved: 'requires preserved source authority', humanReviewAvailable: 'requires risk-based human review and appeal', rollbackAndExitReady: 'requires tested rollback and exit readiness' });
const prohibited = Object.freeze({ customerInteractionDirectlyRewritesBehavior: 'prohibits customer interactions from directly rewriting production behavior', modelOutputAsTrainingTruth: 'prohibits model output from becoming training truth', tenantDataSharedWithoutAuthority: 'prohibits tenant data sharing without authority', adaptiveRoutingBypassesPolicy: 'prohibits adaptive routing from bypassing policy', specializedModelUnscoped: 'prohibits unscoped specialized models', privacyClaimWithoutThreatModel: 'prohibits privacy claims without a threat model', improvementClaimWithoutBaseline: 'prohibits improvement claims without a baseline', selfPromotionAllowed: 'prohibits self-promotion to production', irreversibleLearningChange: 'prohibits irreversible learning changes', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', extensionsWeakenControls: 'prohibits extensions weakening controls' });

export class FutureAiLearningEvolutionDescriptor {
  evolutionPrinciples() { return values(metadata.evolutionPrinciples); }
  evolutionHorizons() { return values(metadata.evolutionHorizons); }
  adaptiveRouting() { return values(metadata.adaptiveRouting); }
  specializedModels() { return values(metadata.specializedModels); }
  privacyPreservingLearning() { return values(metadata.privacyPreservingLearning); }
  verifiableImprovement() { return values(metadata.verifiableImprovement); }
  lifecycle() { return values(metadata.lifecycle); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future AI Learning Evolution profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-10 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-10 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.FUTURE_AI_LEARNING_EVOLUTION_ERROR_CODE, 'Future AI Learning Evolution violates ARCH-029-10.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
