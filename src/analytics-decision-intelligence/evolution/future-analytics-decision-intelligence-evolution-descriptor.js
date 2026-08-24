import { PlatformError } from '../../foundation/errors/platform-error.js';
import { FutureAnalyticsDecisionIntelligenceEvolutionProfile as Profile } from '../contracts/future-analytics-decision-intelligence-evolution-profile.js';
import * as constants from '../future-analytics-decision-intelligence-evolution-constants.js';

const metadata = Object.freeze({ evolutionPrinciples: constants.ANALYTICS_EVOLUTION_PRINCIPLES, evolutionHorizons: constants.ANALYTICS_EVOLUTION_HORIZONS, realTimeAnalytics: constants.REAL_TIME_ANALYTICS, causalDecisionIntelligence: constants.CAUSAL_DECISION_INTELLIGENCE, federatedAnalytics: constants.FEDERATED_ANALYTICS, adaptiveDecisionSupport: constants.ADAPTIVE_DECISION_SUPPORT, researchPromotionRetirement: constants.ANALYTICS_RESEARCH_PROMOTION_RETIREMENT, controls: constants.ANALYTICS_EVOLUTION_CONTROLS, measures: constants.ANALYTICS_EVOLUTION_MEASURES, invariants: constants.ANALYTICS_EVOLUTION_INVARIANTS });
const required = Object.freeze({ evidenceGated: 'requires evidence-gated evolution', sourceAuthorityPreserved: 'requires preserved source authority', evolutionReversible: 'requires reversible evolution', tenantBounded: 'requires tenant-bounded evolution', humanAuthorityPreserved: 'requires preserved human authority', arch029PromotionRequired: 'requires ARCH-029 promotion', qualityGatesPreserved: 'requires preserved quality gates', retirementPlanned: 'requires planned retirement' });
const prohibited = Object.freeze({ realTimeBypassesQuality: 'prohibits real-time quality bypass', causalClaimWithoutEvidence: 'prohibits causal claims without evidence', federationWeakensIsolation: 'prohibits federation weakening isolation', adaptationOutsidePromotion: 'prohibits adaptation outside promotion', modelOutputAsSourceTruth: 'prohibits model output as source truth', automaticActionWithoutAuthority: 'prohibits automatic action without authority', irreversibleRollout: 'prohibits irreversible rollout', researchUsesUnapprovedData: 'prohibits research with unapproved data' });

export class FutureAnalyticsDecisionIntelligenceEvolutionDescriptor {
  evolutionPrinciples() { return values(metadata.evolutionPrinciples); }
  evolutionHorizons() { return values(metadata.evolutionHorizons); }
  realTimeAnalytics() { return values(metadata.realTimeAnalytics); }
  causalDecisionIntelligence() { return values(metadata.causalDecisionIntelligence); }
  federatedAnalytics() { return values(metadata.federatedAnalytics); }
  adaptiveDecisionSupport() { return values(metadata.adaptiveDecisionSupport); }
  researchPromotionRetirement() { return values(metadata.researchPromotionRetirement); }
  controls() { return values(metadata.controls); }
  measures() { return values(metadata.measures); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future Analytics and Decision Intelligence Evolution profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-10 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-10 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.FUTURE_ANALYTICS_DECISION_INTELLIGENCE_EVOLUTION_ERROR_CODE, 'Future Analytics and Decision Intelligence Evolution violates ARCH-028-10.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
