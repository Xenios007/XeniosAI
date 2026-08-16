import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeMemoryEvolutionProfile } from '../contracts/future-evolution-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_MEMORY_AUTOMATION_LEVELS, KNOWLEDGE_MEMORY_ENDURING_INVARIANTS,
  KNOWLEDGE_MEMORY_EVOLUTION_ANTI_PATTERNS, KNOWLEDGE_MEMORY_EVOLUTION_BOUNDARIES,
  KNOWLEDGE_MEMORY_EVOLUTION_DECISION_CRITERIA, KNOWLEDGE_MEMORY_EVOLUTION_DRIVERS,
  KNOWLEDGE_MEMORY_EVOLUTION_ERROR_CODE, KNOWLEDGE_MEMORY_EVOLUTION_GOALS,
  KNOWLEDGE_MEMORY_EVOLUTION_GUARDRAILS, KNOWLEDGE_MEMORY_EVOLUTION_HORIZONS,
  KNOWLEDGE_MEMORY_EVOLUTION_QUALITY_ATTRIBUTES, KNOWLEDGE_MEMORY_EVOLUTION_RULES,
  KNOWLEDGE_MEMORY_EXPERIMENT_FIELDS, KNOWLEDGE_MEMORY_FEDERATED_MEMORY_REQUIREMENTS,
  KNOWLEDGE_MEMORY_FUTURE_MEMORY_CAPABILITIES, KNOWLEDGE_MEMORY_FUTURE_MODALITIES,
  KNOWLEDGE_MEMORY_FUTURE_RETRIEVAL_METHODS, KNOWLEDGE_MEMORY_FUTURE_RISKS,
  KNOWLEDGE_MEMORY_INCUBATION_STAGES, KNOWLEDGE_MEMORY_MATURITY_LEVELS,
  KNOWLEDGE_MEMORY_PROMOTION_CRITERIA, KNOWLEDGE_MEMORY_VALUE_METRICS
} from '../future-evolution-constants.js';

const METADATA = Object.freeze({
  enduringInvariants: KNOWLEDGE_MEMORY_ENDURING_INVARIANTS,
  strategicDrivers: KNOWLEDGE_MEMORY_EVOLUTION_DRIVERS,
  evolutionGoals: KNOWLEDGE_MEMORY_EVOLUTION_GOALS,
  guardrails: KNOWLEDGE_MEMORY_EVOLUTION_GUARDRAILS,
  horizons: KNOWLEDGE_MEMORY_EVOLUTION_HORIZONS,
  maturityLevels: KNOWLEDGE_MEMORY_MATURITY_LEVELS,
  futureModalities: KNOWLEDGE_MEMORY_FUTURE_MODALITIES,
  futureRetrievalMethods: KNOWLEDGE_MEMORY_FUTURE_RETRIEVAL_METHODS,
  futureMemoryCapabilities: KNOWLEDGE_MEMORY_FUTURE_MEMORY_CAPABILITIES,
  federatedMemoryRequirements: KNOWLEDGE_MEMORY_FEDERATED_MEMORY_REQUIREMENTS,
  automationLevels: KNOWLEDGE_MEMORY_AUTOMATION_LEVELS,
  experimentFields: KNOWLEDGE_MEMORY_EXPERIMENT_FIELDS,
  promotionCriteria: KNOWLEDGE_MEMORY_PROMOTION_CRITERIA,
  incubationStages: KNOWLEDGE_MEMORY_INCUBATION_STAGES,
  futureRisks: KNOWLEDGE_MEMORY_FUTURE_RISKS,
  antiPatterns: KNOWLEDGE_MEMORY_EVOLUTION_ANTI_PATTERNS,
  valueMetrics: KNOWLEDGE_MEMORY_VALUE_METRICS,
  decisionCriteria: KNOWLEDGE_MEMORY_EVOLUTION_DECISION_CRITERIA,
  qualityAttributes: KNOWLEDGE_MEMORY_EVOLUTION_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_MEMORY_EVOLUTION_RULES,
  architectureBoundaries: KNOWLEDGE_MEMORY_EVOLUTION_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  additiveGoverned: 'ARCH-016-10 requires additiveGoverned.',
  invariantsPreserved: 'ARCH-016-10 requires invariantsPreserved.',
  architectureBeforeProduct: 'ARCH-016-10 requires architectureBeforeProduct.',
  maturityGated: 'ARCH-016-10 requires maturityGated.',
  evidenceBased: 'ARCH-016-10 requires evidenceBased.',
  reversible: 'ARCH-016-10 requires reversible.',
  multimodalGoverned: 'ARCH-016-10 requires multimodalGoverned.',
  temporalDistinction: 'ARCH-016-10 requires temporalDistinction.',
  graphProvenance: 'ARCH-016-10 requires graphProvenance.',
  eligibilityFirst: 'ARCH-016-10 requires eligibilityFirst.',
  adaptiveRetrievalBounded: 'ARCH-016-10 requires adaptiveRetrievalBounded.',
  retrievalAgentsBounded: 'ARCH-016-10 requires retrievalAgentsBounded.',
  citationIntegrity: 'ARCH-016-10 requires citationIntegrity.',
  memoryNotHistory: 'ARCH-016-10 requires memoryNotHistory.',
  memoryTransparent: 'ARCH-016-10 requires memoryTransparent.',
  federatedMemoryGoverned: 'ARCH-016-10 requires federatedMemoryGoverned.',
  adaptiveContextBounded: 'ARCH-016-10 requires adaptiveContextBounded.',
  edgeBounded: 'ARCH-016-10 requires edgeBounded.',
  residencyPreserved: 'ARCH-016-10 requires residencyPreserved.',
  privacyClaimsEvaluated: 'ARCH-016-10 requires privacyClaimsEvaluated.',
  protocolCanonical: 'ARCH-016-10 requires protocolCanonical.',
  extensionsGoverned: 'ARCH-016-10 requires extensionsGoverned.',
  marketplaceLocallyAdmitted: 'ARCH-016-10 requires marketplaceLocallyAdmitted.',
  automationBounded: 'ARCH-016-10 requires automationBounded.',
  authorityNotAutomated: 'ARCH-016-10 requires authorityNotAutomated.',
  continuousAssuranceGoverned: 'ARCH-016-10 requires continuousAssuranceGoverned.',
  selfHealingBounded: 'ARCH-016-10 requires selfHealingBounded.',
  researchIsolated: 'ARCH-016-10 requires researchIsolated.',
  pilotsControlled: 'ARCH-016-10 requires pilotsControlled.',
  coexistenceSupported: 'ARCH-016-10 requires coexistenceSupported.',
  migrationPreservesLifecycle: 'ARCH-016-10 requires migrationPreservesLifecycle.',
  providerExitDefined: 'ARCH-016-10 requires providerExitDefined.',
  retirementIntentional: 'ARCH-016-10 requires retirementIntentional.',
  valueBalanced: 'ARCH-016-10 requires valueBalanced.',
  structureGoverned: 'ARCH-016-10 requires structureGoverned.',
  vendorNeutral: 'ARCH-016-10 requires vendorNeutral.',
  providerIndependent: 'ARCH-016-10 requires providerIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  technologyNoveltySufficient: 'ARCH-016-10 prohibits technologyNoveltySufficient.',
  advancedSkipsMaturity: 'ARCH-016-10 prohibits advancedSkipsMaturity.',
  sourceDiscoveryApproves: 'ARCH-016-10 prohibits sourceDiscoveryApproves.',
  adaptiveChangesAuthority: 'ARCH-016-10 prohibits adaptiveChangesAuthority.',
  retrievalAgentUnbounded: 'ARCH-016-10 prohibits retrievalAgentUnbounded.',
  groundingGuaranteesCorrectness: 'ARCH-016-10 prohibits groundingGuaranteesCorrectness.',
  globalPersonalProfile: 'ARCH-016-10 prohibits globalPersonalProfile.',
  allHistoryBecomesMemory: 'ARCH-016-10 prohibits allHistoryBecomesMemory.',
  federationSharesDatabase: 'ARCH-016-10 prohibits federationSharesDatabase.',
  privacyLabelProvesProtection: 'ARCH-016-10 prohibits privacyLabelProvesProtection.',
  protocolGrantsAccess: 'ARCH-016-10 prohibits protocolGrantsAccess.',
  marketplaceAutoActive: 'ARCH-016-10 prohibits marketplaceAutoActive.',
  autonomousHighRiskPublication: 'ARCH-016-10 prohibits autonomousHighRiskPublication.',
  sensitiveInferenceAutomatic: 'ARCH-016-10 prohibits sensitiveInferenceAutomatic.',
  scopePromotionAutomatic: 'ARCH-016-10 prohibits scopePromotionAutomatic.',
  indefiniteRetention: 'ARCH-016-10 prohibits indefiniteRetention.',
  deletionAvoidance: 'ARCH-016-10 prohibits deletionAvoidance.',
  selfHealingPublishes: 'ARCH-016-10 prohibits selfHealingPublishes.',
  researchUsesProductionAuthority: 'ARCH-016-10 prohibits researchUsesProductionAuthority.',
  migrationResetsRetention: 'ARCH-016-10 prohibits migrationResetsRetention.',
  providerLocked: 'ARCH-016-10 prohibits providerLocked.',
  oneMetricPromotes: 'ARCH-016-10 prohibits oneMetricPromotes.',
  directDatabaseAccess: 'ARCH-016-10 prohibits directDatabaseAccess.',
  selectsEvolutionProduct: 'ARCH-016-10 prohibits selectsEvolutionProduct.'
});

export class KnowledgeMemoryEvolutionDescriptor {
  enduringInvariants() { return values(METADATA.enduringInvariants); }
  strategicDrivers() { return values(METADATA.strategicDrivers); }
  evolutionGoals() { return values(METADATA.evolutionGoals); }
  guardrails() { return values(METADATA.guardrails); }
  horizons() { return values(METADATA.horizons); }
  maturityLevels() { return values(METADATA.maturityLevels); }
  futureModalities() { return values(METADATA.futureModalities); }
  futureRetrievalMethods() { return values(METADATA.futureRetrievalMethods); }
  futureMemoryCapabilities() { return values(METADATA.futureMemoryCapabilities); }
  federatedMemoryRequirements() { return values(METADATA.federatedMemoryRequirements); }
  automationLevels() { return values(METADATA.automationLevels); }
  experimentFields() { return values(METADATA.experimentFields); }
  promotionCriteria() { return values(METADATA.promotionCriteria); }
  incubationStages() { return values(METADATA.incubationStages); }
  futureRisks() { return values(METADATA.futureRisks); }
  antiPatterns() { return values(METADATA.antiPatterns); }
  valueMetrics() { return values(METADATA.valueMetrics); }
  decisionCriteria() { return values(METADATA.decisionCriteria); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeMemoryEvolutionProfile
      ? input
      : new KnowledgeMemoryEvolutionProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future Knowledge and Memory evolution profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Future Knowledge and Memory Evolution must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_MEMORY_EVOLUTION_ERROR_CODE,
        'Future Knowledge and Memory Evolution violates ARCH-016-10.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
