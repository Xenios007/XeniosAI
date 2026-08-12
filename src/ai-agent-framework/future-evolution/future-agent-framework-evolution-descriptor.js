import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { FutureAgentFrameworkEvolutionProfile } from '../contracts/future-agent-framework-evolution-profile.js';
import {
  ADAPTIVE_ROUTING_FACTORS, AGENT_ADOPTION_CRITERIA, AGENT_ADOPTION_PIPELINE, AGENT_COMPOSITION_COMPONENTS,
  AGENT_EVOLUTION_ADR_TRIGGERS, AGENT_EVOLUTION_HORIZONS, AGENT_EVOLUTION_NON_GOALS, AGENT_EVOLUTION_OBJECTIVES,
  AGENT_EVOLUTION_PRINCIPLES, AGENT_EVOLUTION_RISKS, AGENT_INTEROPERABILITY_CONTRACTS, AGENT_MARKETPLACE_ASSETS,
  AGENT_MATURITY_STAGES, AUTOMATED_RED_TEAM_CASES, AUTONOMOUS_MAINTENANCE_REQUIREMENTS,
  CONTINUOUS_EVALUATION_METHODS, CROSS_TENANT_INTELLIGENCE_CONTROLS, DYNAMIC_AGENT_REQUIREMENTS,
  DYNAMIC_AUTONOMY_FACTORS, FUTURE_AGENT_ARCHITECTURAL_RULES, FUTURE_AGENT_ARCHITECTURE_BOUNDARIES,
  FUTURE_AGENT_FRAMEWORK_EVOLUTION_ERROR_CODE, INNOVATION_SANDBOX_REQUIREMENTS, LONG_RUNNING_AGENT_REQUIREMENTS,
  MATURITY_GATE_CRITERIA, MODEL_PORTFOLIO_TYPES, MODEL_SUBSTITUTION_REQUIREMENTS, MULTIMODAL_REQUIREMENTS,
  PHYSICAL_INTERACTION_REQUIREMENTS, PROACTIVE_AGENT_REQUIREMENTS, SELF_IMPROVEMENT_PROPOSAL_TARGETS,
  SIMULATION_DIMENSIONS, STABLE_AGENT_RESPONSIBILITIES, VERIFIED_PLANNING_CAPABILITIES
} from '../future-evolution-constants.js';

const MAP = Object.freeze({
  stableResponsibilities: STABLE_AGENT_RESPONSIBILITIES,
  objectives: AGENT_EVOLUTION_OBJECTIVES,
  principles: AGENT_EVOLUTION_PRINCIPLES,
  horizons: AGENT_EVOLUTION_HORIZONS,
  maturityStages: AGENT_MATURITY_STAGES,
  maturityGateCriteria: MATURITY_GATE_CRITERIA,
  routingFactors: ADAPTIVE_ROUTING_FACTORS,
  modelPortfolioTypes: MODEL_PORTFOLIO_TYPES,
  substitutionRequirements: MODEL_SUBSTITUTION_REQUIREMENTS,
  verifiedPlanningCapabilities: VERIFIED_PLANNING_CAPABILITIES,
  simulationDimensions: SIMULATION_DIMENSIONS,
  proactiveRequirements: PROACTIVE_AGENT_REQUIREMENTS,
  longRunningRequirements: LONG_RUNNING_AGENT_REQUIREMENTS,
  dynamicAutonomyFactors: DYNAMIC_AUTONOMY_FACTORS,
  marketplaceAssets: AGENT_MARKETPLACE_ASSETS,
  compositionComponents: AGENT_COMPOSITION_COMPONENTS,
  dynamicAgentRequirements: DYNAMIC_AGENT_REQUIREMENTS,
  continuousEvaluationMethods: CONTINUOUS_EVALUATION_METHODS,
  redTeamCases: AUTOMATED_RED_TEAM_CASES,
  selfImprovementTargets: SELF_IMPROVEMENT_PROPOSAL_TARGETS,
  maintenanceRequirements: AUTONOMOUS_MAINTENANCE_REQUIREMENTS,
  crossTenantControls: CROSS_TENANT_INTELLIGENCE_CONTROLS,
  multimodalRequirements: MULTIMODAL_REQUIREMENTS,
  physicalRequirements: PHYSICAL_INTERACTION_REQUIREMENTS,
  interoperabilityContracts: AGENT_INTEROPERABILITY_CONTRACTS,
  adrTriggers: AGENT_EVOLUTION_ADR_TRIGGERS,
  sandboxRequirements: INNOVATION_SANDBOX_REQUIREMENTS,
  adoptionPipeline: AGENT_ADOPTION_PIPELINE,
  adoptionCriteria: AGENT_ADOPTION_CRITERIA,
  risks: AGENT_EVOLUTION_RISKS,
  nonGoals: AGENT_EVOLUTION_NON_GOALS,
  architecturalRules: FUTURE_AGENT_ARCHITECTURAL_RULES,
  architectureBoundaries: FUTURE_AGENT_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  evidenceBeforeAutonomy: 'Autonomy may increase only after acceptable evidence.',
  adoptionReversible: 'Future capability adoption must support rollback and safe withdrawal.',
  authorityExplicit: 'Authority must remain explicit and execution bound.',
  deterministicEnforcementPreserved: 'Control enforcement must remain deterministic.',
  businessServiceOwnershipPreserved: 'Business services must retain ownership of business rules and authoritative state.',
  workflowResponsibilityPreserved: 'The Workflow Engine must retain durable deterministic process responsibility.',
  tenantPropertyIsolationPreserved: 'Tenant and property isolation must remain mandatory.',
  humanControlPreserved: 'Human accountability, intervention, challenge, and takeover must remain available.',
  temporaryAgentsRegistered: 'Temporary agents must have registered identities and guaranteed retirement.',
  continuousAssuranceRequired: 'Higher autonomy requires continuous assurance.',
  selfModificationRequiresPromotion: 'Self-improvement proposals require versioning, testing, approval, release, and rollback.',
  experimentsHaveNoProductionAuthority: 'Experiments must have no production authority.',
  noveltyIsNotAdoptionCriterion: 'Novelty alone is not an adoption criterion.',
  providerExitSupported: 'Future capabilities must support provider replacement and exit.',
  weakCapabilitiesRetired: 'Weak and redundant capabilities must be retired.',
  vendorNeutral: 'Future Agent Framework Evolution must remain vendor neutral.',
  modelNeutral: 'Future Agent Framework Evolution must remain model neutral.',
  productNeutral: 'Future Agent Framework Evolution must remain product neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  grantsFutureAutonomy: 'ARCH-014-10 does not approve or grant future autonomy.',
  selectsModelProvider: 'ARCH-014-10 does not select a model or provider.',
  replacesDeterministicServices: 'Future agents must not replace deterministic business services or workflows.',
  permitsCrossTenantMemory: 'One tenant memory or proprietary data must not become another tenant context.',
  permitsSelfAuthorization: 'Agents must not self-authorize.'
});

export class FutureAgentFrameworkEvolutionDescriptor {
  stableResponsibilities() { return values(MAP.stableResponsibilities); }
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  horizons() { return values(MAP.horizons); }
  maturityStages() { return values(MAP.maturityStages); }
  maturityGateCriteria() { return values(MAP.maturityGateCriteria); }
  routingFactors() { return values(MAP.routingFactors); }
  modelPortfolioTypes() { return values(MAP.modelPortfolioTypes); }
  substitutionRequirements() { return values(MAP.substitutionRequirements); }
  verifiedPlanningCapabilities() { return values(MAP.verifiedPlanningCapabilities); }
  simulationDimensions() { return values(MAP.simulationDimensions); }
  proactiveRequirements() { return values(MAP.proactiveRequirements); }
  longRunningRequirements() { return values(MAP.longRunningRequirements); }
  dynamicAutonomyFactors() { return values(MAP.dynamicAutonomyFactors); }
  marketplaceAssets() { return values(MAP.marketplaceAssets); }
  compositionComponents() { return values(MAP.compositionComponents); }
  dynamicAgentRequirements() { return values(MAP.dynamicAgentRequirements); }
  continuousEvaluationMethods() { return values(MAP.continuousEvaluationMethods); }
  redTeamCases() { return values(MAP.redTeamCases); }
  selfImprovementTargets() { return values(MAP.selfImprovementTargets); }
  maintenanceRequirements() { return values(MAP.maintenanceRequirements); }
  crossTenantControls() { return values(MAP.crossTenantControls); }
  multimodalRequirements() { return values(MAP.multimodalRequirements); }
  physicalRequirements() { return values(MAP.physicalRequirements); }
  interoperabilityContracts() { return values(MAP.interoperabilityContracts); }
  adrTriggers() { return values(MAP.adrTriggers); }
  sandboxRequirements() { return values(MAP.sandboxRequirements); }
  adoptionPipeline() { return values(MAP.adoptionPipeline); }
  adoptionCriteria() { return values(MAP.adoptionCriteria); }
  risks() { return values(MAP.risks); }
  nonGoals() { return values(MAP.nonGoals); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof FutureAgentFrameworkEvolutionProfile
      ? profileInput : new FutureAgentFrameworkEvolutionProfile(profileInput);
    const errors = [];
    if (!profile.evolutionName) errors.push('Future Agent Framework Evolution profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Future Agent Framework Evolution must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(
      FUTURE_AGENT_FRAMEWORK_EVOLUTION_ERROR_CODE,
      'Future Agent Framework Evolution violates ARCH-014-10.',
      { errors }
    );
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }