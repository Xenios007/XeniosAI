import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { FutureDeveloperPlatformEvolutionProfile } from '../contracts/future-developer-platform-evolution-profile.js';
import {
  AGENT_COORDINATION_CONTRACT_FIELDS, ARCHITECTURE_AWARE_ASSISTANCE_CAPABILITIES,
  ARCHITECTURE_KNOWLEDGE_GRAPH_NODES, AUTONOMY_DEMOTION_TRIGGERS, AUTONOMY_LEVELS,
  AUTONOMY_PROMOTION_CRITERIA, CAPABILITY_EVOLUTION_STATES, CAPABILITY_MATURITY_DIMENSIONS,
  DIGITAL_TWIN_TYPES, ECOSYSTEM_EVOLUTION_AREAS, EVOLUTION_ANTI_PATTERNS, EVOLUTION_GOVERNANCE_AREAS,
  EVOLUTION_HORIZONS, EVOLUTION_INVARIANTS, EVOLUTION_RISKS, EVOLUTION_SAFEGUARDS,
  EVOLUTION_STRATEGIC_DRIVERS, EVOLUTION_SUCCESS_MEASURES, FEDERATION_REQUIREMENTS,
  FUTURE_DEVELOPER_PLATFORM_EVOLUTION_ERROR_CODE, FUTURE_DEVELOPER_PLATFORM_EVOLUTION_OBJECTIVES,
  FUTURE_EVOLUTION_ARCHITECTURAL_RULES, FUTURE_EXPERIENCE_ATTRIBUTES, FUTURE_PLATFORM_CAPABILITY_AREAS,
  HUMAN_AI_TEAM_ROLES, INNOVATION_CONTROL_FIELDS, INTENT_RESOLUTION_OUTPUTS,
  RECOMMENDED_EVOLUTION_SEQUENCE, TRANSITION_ARCHITECTURE_FIELDS
} from '../future-developer-platform-evolution-constants.js';

const MAP = Object.freeze({
  objectives: FUTURE_DEVELOPER_PLATFORM_EVOLUTION_OBJECTIVES,
  strategicDrivers: EVOLUTION_STRATEGIC_DRIVERS,
  invariants: EVOLUTION_INVARIANTS,
  horizons: EVOLUTION_HORIZONS,
  capabilityStates: CAPABILITY_EVOLUTION_STATES,
  maturityDimensions: CAPABILITY_MATURITY_DIMENSIONS,
  experienceAttributes: FUTURE_EXPERIENCE_ATTRIBUTES,
  intentResolutionOutputs: INTENT_RESOLUTION_OUTPUTS,
  architectureAssistanceCapabilities: ARCHITECTURE_AWARE_ASSISTANCE_CAPABILITIES,
  knowledgeGraphNodes: ARCHITECTURE_KNOWLEDGE_GRAPH_NODES,
  humanAiTeamRoles: HUMAN_AI_TEAM_ROLES,
  agentCoordinationFields: AGENT_COORDINATION_CONTRACT_FIELDS,
  autonomyLevels: AUTONOMY_LEVELS,
  autonomyPromotionCriteria: AUTONOMY_PROMOTION_CRITERIA,
  autonomyDemotionTriggers: AUTONOMY_DEMOTION_TRIGGERS,
  futureCapabilityAreas: FUTURE_PLATFORM_CAPABILITY_AREAS,
  digitalTwinTypes: DIGITAL_TWIN_TYPES,
  federationRequirements: FEDERATION_REQUIREMENTS,
  ecosystemEvolutionAreas: ECOSYSTEM_EVOLUTION_AREAS,
  innovationControlFields: INNOVATION_CONTROL_FIELDS,
  transitionArchitectureFields: TRANSITION_ARCHITECTURE_FIELDS,
  governanceAreas: EVOLUTION_GOVERNANCE_AREAS,
  successMeasures: EVOLUTION_SUCCESS_MEASURES,
  risks: EVOLUTION_RISKS,
  safeguards: EVOLUTION_SAFEGUARDS,
  antiPatterns: EVOLUTION_ANTI_PATTERNS,
  architecturalRules: FUTURE_EVOLUTION_ARCHITECTURAL_RULES,
  recommendedSequence: RECOMMENDED_EVOLUTION_SEQUENCE
});

const REQUIRED_TRUE = Object.freeze({
  preservesAdd: 'Future evolution must preserve Architecture-Driven Development.',
  evidenceBackedEvolution: 'Future evolution must progress through evidence-backed capability maturity.',
  futureCapabilitiesOptionalUntilProven: 'Future capabilities must remain optional until reliability, security, value, and governance are demonstrated.',
  architectureRepositoryAuthoritative: 'The architecture repository must remain authoritative.',
  intentDoesNotInventAuthority: 'Intent resolution must not invent architecture or authority.',
  semanticInferenceDistinguished: 'Semantic inference must remain distinguishable from authoritative declaration.',
  explicitAgentCoordination: 'Agent coordination must be explicit, attributable, and bounded.',
  autonomyExplicitlyLeveled: 'Autonomy must use explicit levels.',
  autonomyPromotionEvidenceBased: 'Autonomy promotion must be evidence based.',
  autonomyDemotionImmediateWhenUnsafe: 'Autonomy demotion must be immediate when safety requires it.',
  digitalTwinsDecisionAidOnly: 'Digital twins must remain decision aids, not authoritative operating state.',
  federationUsesCommonContracts: 'Federation must preserve common identities, contracts, authority, evidence, and tenant isolation.',
  controlledInnovation: 'Innovation must be validated in controlled environments.',
  transitionArchitectureRequired: 'Major evolution requires transition architecture.',
  backwardCompatibilityGoverned: 'Breaking changes require explicit architecture, migration, communication, and authorization.',
  vendorNeutralAiProviderIndependent: 'Future evolution must avoid vendor and AI-provider lock-in.',
  humanAccountabilityPreserved: 'Human accountability must remain explicit.',
  tenantPropertyIsolationPreserved: 'Tenant and property isolation must be preserved.'
});

const REQUIRED_FALSE = Object.freeze({
  preselectsVendors: 'ARCH-013-10 does not preselect vendors.',
  mandatesSpeculativeTechnology: 'ARCH-013-10 does not mandate speculative technology.',
  authorizesAutonomyWithoutControls: 'ARCH-013-10 does not authorize autonomy before required controls exist.',
  treatsAiCapabilityAsAuthority: 'AI capability must not be treated as authority.',
  writesInferenceAsFact: 'Semantic inference must not be written back as authoritative fact.',
  treatsDigitalTwinAsOperatingState: 'Digital twins must not be treated as actual operating state.',
  permitsUnboundedMultiAgentAuthority: 'Multi-agent systems must not have shared unbounded permissions.',
  permitsProductionDataInExperiments: 'Experiments must not use production data or credentials without control.',
  allowsPermanentExperimentalServices: 'Experimental services must not become permanent unsupported services.',
  letsVendorContractsBecomeArchitecture: 'Vendor-specific contracts must not become architecture.',
  measuresNoveltyAsValue: 'Novelty or automation volume must not be measured as value.',
  erodesHumanExpertise: 'Automation must not erode needed human expertise.',
  fragmentsFederatedAuthority: 'Federation and marketplaces must not fragment authority.'
});

export class FutureDeveloperPlatformEvolutionDescriptor {
  objectives() { return values(MAP.objectives); }
  strategicDrivers() { return values(MAP.strategicDrivers); }
  invariants() { return values(MAP.invariants); }
  horizons() { return values(MAP.horizons); }
  capabilityStates() { return values(MAP.capabilityStates); }
  maturityDimensions() { return values(MAP.maturityDimensions); }
  experienceAttributes() { return values(MAP.experienceAttributes); }
  intentResolutionOutputs() { return values(MAP.intentResolutionOutputs); }
  architectureAssistanceCapabilities() { return values(MAP.architectureAssistanceCapabilities); }
  knowledgeGraphNodes() { return values(MAP.knowledgeGraphNodes); }
  humanAiTeamRoles() { return values(MAP.humanAiTeamRoles); }
  agentCoordinationFields() { return values(MAP.agentCoordinationFields); }
  autonomyLevels() { return values(MAP.autonomyLevels); }
  autonomyPromotionCriteria() { return values(MAP.autonomyPromotionCriteria); }
  autonomyDemotionTriggers() { return values(MAP.autonomyDemotionTriggers); }
  futureCapabilityAreas() { return values(MAP.futureCapabilityAreas); }
  digitalTwinTypes() { return values(MAP.digitalTwinTypes); }
  federationRequirements() { return values(MAP.federationRequirements); }
  ecosystemEvolutionAreas() { return values(MAP.ecosystemEvolutionAreas); }
  innovationControlFields() { return values(MAP.innovationControlFields); }
  transitionArchitectureFields() { return values(MAP.transitionArchitectureFields); }
  governanceAreas() { return values(MAP.governanceAreas); }
  successMeasures() { return values(MAP.successMeasures); }
  risks() { return values(MAP.risks); }
  safeguards() { return values(MAP.safeguards); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  recommendedSequence() { return values(MAP.recommendedSequence); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof FutureDeveloperPlatformEvolutionProfile ?
      profileInput : new FutureDeveloperPlatformEvolutionProfile(profileInput);
    const errors = [];
    if (!profile.evolutionName) errors.push('Future Developer Platform Evolution profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Future Developer Platform Evolution must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(FUTURE_DEVELOPER_PLATFORM_EVOLUTION_ERROR_CODE, 'Future Developer Platform Evolution violates ARCH-013-10.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
