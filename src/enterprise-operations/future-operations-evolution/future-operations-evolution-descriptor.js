import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ADAPTIVE_BEHAVIOR_FIELDS,
  ADAPTIVE_OPERATION_TARGETS,
  AI_ASSISTED_COMMAND_CAPABILITIES,
  ARCHITECTURE_EVOLUTION_GOVERNANCE_REQUIREMENTS,
  AUTONOMOUS_OPERATIONS_FAILURE_HANDLING,
  AUTONOMY_SUITABILITY_CRITERIA,
  CONTINUOUS_CONTROL_VERIFICATION_CAPABILITIES,
  CROSS_PROPERTY_INTELLIGENCE_CAPABILITIES,
  DIGITAL_OPERATIONAL_TWIN_USES,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EXECUTABLE_POLICY_AREAS,
  FEDERATED_OPERATIONS_PARTICIPANTS,
  FUTURE_ARCHITECTURE_RELATIONSHIPS,
  FUTURE_CAPABILITY_ROADMAP_SEQUENCE,
  FUTURE_OPERATIONS_ARCHITECTURAL_RULES,
  FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES,
  FUTURE_OPERATIONS_EVOLUTION_RISKS,
  FUTURE_OPERATIONS_EXPLAINABILITY_FIELDS,
  FUTURE_OPERATIONS_LONG_TERM_QUALITY_ATTRIBUTES,
  FUTURE_OPERATIONS_TRANSITION_CRITERIA,
  FUTURE_OPERATIONS_TRUST_FACTORS,
  FUTURE_OPERATIONS_VISION_CAPABILITIES,
  HUMAN_OPERATION_STRENGTHS,
  INTELLIGENT_CAPACITY_CAPABILITIES,
  INTELLIGENT_CHANGE_RELEASE_CAPABILITIES,
  INTELLIGENT_INCIDENT_CAPABILITIES,
  INTELLIGENT_PROBLEM_CAPABILITIES,
  INTELLIGENT_RESILIENCE_CAPABILITIES,
  MACHINE_OPERATION_STRENGTHS,
  MULTI_AGENT_OPERATIONS_REQUIREMENTS,
  OPERATIONAL_AGENT_REQUIREMENTS,
  OPERATIONAL_AGENT_SPECIALIZATIONS,
  OPERATIONAL_AUTONOMY_LEVELS,
  OPERATIONAL_MEMORY_ITEMS,
  OPERATIONS_EVOLUTION_DRIVERS,
  OPERATIONS_EVOLUTION_FOUNDATIONS,
  OPERATIONS_EVOLUTION_MATURITY_STAGES,
  PREDICTION_RECORD_FIELDS,
  PREDICTIVE_OPERATIONS_CAPABILITIES,
  PRESCRIPTIVE_OPERATION_RECOMMENDATIONS,
  PROPERTY_SPECIFIC_EVOLUTION_FACTORS,
  PROVIDER_PORTABILITY_TARGETS,
  SELF_IMPROVING_OPERATION_REQUIREMENTS,
  SELF_IMPROVING_OPERATION_TARGETS,
  SEMANTIC_OPERATIONAL_KNOWLEDGE_ENTITIES,
  TENANT_SPECIFIC_EVOLUTION_FACTORS
} from '../constants.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';
import { FutureOperationsEvolutionProfile } from '../contracts/future-operations-evolution-profile.js';

const MAP = Object.freeze({
  visionCapabilities: FUTURE_OPERATIONS_VISION_CAPABILITIES,
  evolutionDrivers: OPERATIONS_EVOLUTION_DRIVERS,
  foundations: OPERATIONS_EVOLUTION_FOUNDATIONS,
  principles: FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES,
  maturityStages: OPERATIONS_EVOLUTION_MATURITY_STAGES,
  predictiveCapabilities: PREDICTIVE_OPERATIONS_CAPABILITIES,
  predictionRecordFields: PREDICTION_RECORD_FIELDS,
  prescriptiveRecommendations: PRESCRIPTIVE_OPERATION_RECOMMENDATIONS,
  adaptiveTargets: ADAPTIVE_OPERATION_TARGETS,
  adaptiveBehaviorFields: ADAPTIVE_BEHAVIOR_FIELDS,
  autonomySuitabilityCriteria: AUTONOMY_SUITABILITY_CRITERIA,
  autonomyLevels: OPERATIONAL_AUTONOMY_LEVELS,
  aiAssistedCommandCapabilities: AI_ASSISTED_COMMAND_CAPABILITIES,
  intelligentIncidentCapabilities: INTELLIGENT_INCIDENT_CAPABILITIES,
  intelligentProblemCapabilities: INTELLIGENT_PROBLEM_CAPABILITIES,
  intelligentChangeReleaseCapabilities: INTELLIGENT_CHANGE_RELEASE_CAPABILITIES,
  intelligentCapacityCapabilities: INTELLIGENT_CAPACITY_CAPABILITIES,
  intelligentResilienceCapabilities: INTELLIGENT_RESILIENCE_CAPABILITIES,
  semanticKnowledgeEntities: SEMANTIC_OPERATIONAL_KNOWLEDGE_ENTITIES,
  operationalMemoryItems: OPERATIONAL_MEMORY_ITEMS,
  digitalTwinUses: DIGITAL_OPERATIONAL_TWIN_USES,
  crossPropertyIntelligenceCapabilities: CROSS_PROPERTY_INTELLIGENCE_CAPABILITIES,
  federatedParticipants: FEDERATED_OPERATIONS_PARTICIPANTS,
  operationalAgentSpecializations: OPERATIONAL_AGENT_SPECIALIZATIONS,
  operationalAgentRequirements: OPERATIONAL_AGENT_REQUIREMENTS,
  multiAgentRequirements: MULTI_AGENT_OPERATIONS_REQUIREMENTS,
  humanStrengths: HUMAN_OPERATION_STRENGTHS,
  machineStrengths: MACHINE_OPERATION_STRENGTHS,
  trustFactors: FUTURE_OPERATIONS_TRUST_FACTORS,
  explainabilityFields: FUTURE_OPERATIONS_EXPLAINABILITY_FIELDS,
  executablePolicyAreas: EXECUTABLE_POLICY_AREAS,
  continuousVerificationCapabilities: CONTINUOUS_CONTROL_VERIFICATION_CAPABILITIES,
  selfImprovingTargets: SELF_IMPROVING_OPERATION_TARGETS,
  selfImprovingRequirements: SELF_IMPROVING_OPERATION_REQUIREMENTS,
  tenantEvolutionFactors: TENANT_SPECIFIC_EVOLUTION_FACTORS,
  propertyEvolutionFactors: PROPERTY_SPECIFIC_EVOLUTION_FACTORS,
  providerPortabilityTargets: PROVIDER_PORTABILITY_TARGETS,
  architectureRelationships: FUTURE_ARCHITECTURE_RELATIONSHIPS,
  transitionCriteria: FUTURE_OPERATIONS_TRANSITION_CRITERIA,
  evolutionRisks: FUTURE_OPERATIONS_EVOLUTION_RISKS,
  failureHandling: AUTONOMOUS_OPERATIONS_FAILURE_HANDLING,
  architectureGovernanceRequirements: ARCHITECTURE_EVOLUTION_GOVERNANCE_REQUIREMENTS,
  qualityAttributes: FUTURE_OPERATIONS_LONG_TERM_QUALITY_ATTRIBUTES,
  architecturalRules: FUTURE_OPERATIONS_ARCHITECTURAL_RULES,
  roadmapSequence: FUTURE_CAPABILITY_ROADMAP_SEQUENCE
});

const EXPECTED_COUNTS = Object.freeze({
  visionCapabilities: 13,
  evolutionDrivers: 15,
  foundations: 11,
  principles: 6,
  maturityStages: 7,
  predictiveCapabilities: 11,
  predictionRecordFields: 10,
  prescriptiveRecommendations: 13,
  adaptiveTargets: 13,
  adaptiveBehaviorFields: 11,
  autonomySuitabilityCriteria: 12,
  autonomyLevels: 6,
  aiAssistedCommandCapabilities: 12,
  intelligentIncidentCapabilities: 10,
  intelligentProblemCapabilities: 8,
  intelligentChangeReleaseCapabilities: 10,
  intelligentCapacityCapabilities: 11,
  intelligentResilienceCapabilities: 11,
  semanticKnowledgeEntities: 16,
  operationalMemoryItems: 14,
  digitalTwinUses: 10,
  crossPropertyIntelligenceCapabilities: 10,
  federatedParticipants: 7,
  operationalAgentSpecializations: 13,
  operationalAgentRequirements: 14,
  multiAgentRequirements: 10,
  humanStrengths: 11,
  machineStrengths: 9,
  trustFactors: 10,
  explainabilityFields: 10,
  executablePolicyAreas: 13,
  continuousVerificationCapabilities: 10,
  selfImprovingTargets: 13,
  selfImprovingRequirements: 9,
  tenantEvolutionFactors: 9,
  propertyEvolutionFactors: 10,
  providerPortabilityTargets: 9,
  architectureRelationships: 9,
  transitionCriteria: 15,
  evolutionRisks: 15,
  failureHandling: 11,
  architectureGovernanceRequirements: 12,
  qualityAttributes: 13,
  architecturalRules: 17,
  roadmapSequence: 7
});

export class FutureOperationsEvolutionDescriptor {
  visionCapabilities() { return values(MAP.visionCapabilities); }
  evolutionDrivers() { return values(MAP.evolutionDrivers); }
  foundations() { return values(MAP.foundations); }
  principles() { return values(MAP.principles); }
  maturityStages() { return values(MAP.maturityStages); }
  predictiveCapabilities() { return values(MAP.predictiveCapabilities); }
  predictionRecordFields() { return values(MAP.predictionRecordFields); }
  prescriptiveRecommendations() { return values(MAP.prescriptiveRecommendations); }
  adaptiveTargets() { return values(MAP.adaptiveTargets); }
  adaptiveBehaviorFields() { return values(MAP.adaptiveBehaviorFields); }
  autonomySuitabilityCriteria() { return values(MAP.autonomySuitabilityCriteria); }
  autonomyLevels() { return values(MAP.autonomyLevels); }
  aiAssistedCommandCapabilities() { return values(MAP.aiAssistedCommandCapabilities); }
  intelligentIncidentCapabilities() { return values(MAP.intelligentIncidentCapabilities); }
  intelligentProblemCapabilities() { return values(MAP.intelligentProblemCapabilities); }
  intelligentChangeReleaseCapabilities() { return values(MAP.intelligentChangeReleaseCapabilities); }
  intelligentCapacityCapabilities() { return values(MAP.intelligentCapacityCapabilities); }
  intelligentResilienceCapabilities() { return values(MAP.intelligentResilienceCapabilities); }
  semanticKnowledgeEntities() { return values(MAP.semanticKnowledgeEntities); }
  operationalMemoryItems() { return values(MAP.operationalMemoryItems); }
  digitalTwinUses() { return values(MAP.digitalTwinUses); }
  crossPropertyIntelligenceCapabilities() { return values(MAP.crossPropertyIntelligenceCapabilities); }
  federatedParticipants() { return values(MAP.federatedParticipants); }
  operationalAgentSpecializations() { return values(MAP.operationalAgentSpecializations); }
  operationalAgentRequirements() { return values(MAP.operationalAgentRequirements); }
  multiAgentRequirements() { return values(MAP.multiAgentRequirements); }
  humanStrengths() { return values(MAP.humanStrengths); }
  machineStrengths() { return values(MAP.machineStrengths); }
  trustFactors() { return values(MAP.trustFactors); }
  explainabilityFields() { return values(MAP.explainabilityFields); }
  executablePolicyAreas() { return values(MAP.executablePolicyAreas); }
  continuousVerificationCapabilities() { return values(MAP.continuousVerificationCapabilities); }
  selfImprovingTargets() { return values(MAP.selfImprovingTargets); }
  selfImprovingRequirements() { return values(MAP.selfImprovingRequirements); }
  tenantEvolutionFactors() { return values(MAP.tenantEvolutionFactors); }
  propertyEvolutionFactors() { return values(MAP.propertyEvolutionFactors); }
  providerPortabilityTargets() { return values(MAP.providerPortabilityTargets); }
  architectureRelationships() { return values(MAP.architectureRelationships); }
  transitionCriteria() { return values(MAP.transitionCriteria); }
  evolutionRisks() { return values(MAP.evolutionRisks); }
  failureHandling() { return values(MAP.failureHandling); }
  architectureGovernanceRequirements() { return values(MAP.architectureGovernanceRequirements); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  roadmapSequence() { return values(MAP.roadmapSequence); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof FutureOperationsEvolutionProfile
      ? profileInput
      : new FutureOperationsEvolutionProfile(profileInput);
    const errors = [];

    if (!profile.operationsName) errors.push('Future operations evolution profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.futureCapabilitiesArePlaceholders !== true) errors.push('Future capabilities must remain placeholders until explicitly implemented by later architecture.');
    if (profile.humanAccountabilityPreserved !== true) errors.push('Future operations must preserve accountable human authority.');
    if (profile.gradualAutonomyRequired !== true) errors.push('Autonomy must be introduced gradually.');
    if (profile.provenBoundedAutomationRequired !== true) errors.push('Automation must target proven, bounded, and verifiable decisions.');
    if (profile.explicitIdentityPermissionPolicyRequired !== true) errors.push('Future operations require explicit identity, permission, scope, and policy.');
    if (profile.securityPrivacyDataTenantProtected !== true) errors.push('Security, privacy, data integrity, and tenant isolation must be preserved.');
    if (profile.explainabilityRequired !== true) errors.push('Predictions, recommendations, decisions, and actions must be explainable.');
    if (profile.hypothesesDistinguishedFromFacts !== true) errors.push('Hypotheses must be distinguished from facts.');
    if (profile.stopReversalCompensationTakeoverRequired !== true) errors.push('Stop, reversal, compensation, and human takeover must be defined.');
    if (profile.governedLearningRequired !== true) errors.push('Learning must be governed before changing production behavior.');
    if (profile.uncontrolledSelfModificationPrevented !== true) errors.push('Uncontrolled self-modification must be prevented.');
    if (profile.vendorNeutral !== true) errors.push('Future Operations Evolution must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('Future Operations Evolution must remain technology neutral.');
    if (profile.productsVendorsModelsTimelinesSpecific === true) errors.push('Products, vendors, AI models, automation platforms, and implementation timelines are outside ARCH-011-10 scope.');
    if (profile.runtimeCapabilityImplemented === true) errors.push('ARCH-011-10 must not implement future runtime capabilities.');
    if (profile.autonomyWithoutAuthority === true) errors.push('Autonomy must not advance without evidence, authority, testing, and safe fallback.');
    if (profile.technologyNoveltyDriven === true) errors.push('Evolution must be driven by business and operational needs rather than technology novelty.');
    if (profile.universalMaturityAssumed === true) errors.push('The platform must not assume one universal maturity level.');
    if (profile.aiAgreementAsAuthority === true) errors.push('Agreement between agents does not create authority or prove correctness.');
    if (profile.predictionAsFact === true) errors.push('Prediction must not be confused with fact.');
    if (profile.selfRewritingProductionPolicy === true) errors.push('Production policy or architecture must not rewrite itself without governed authority.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, count] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== count) errors.push(`Future Operations Evolution must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.FUTURE_OPERATIONS_EVOLUTION_INVALID,
        'Future Operations Evolution violates ARCH-011-10.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new EnterpriseOperationsValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
