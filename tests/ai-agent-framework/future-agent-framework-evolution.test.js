import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  SIMULATION_DIMENSIONS, STABLE_AGENT_RESPONSIBILITIES, VERIFIED_PLANNING_CAPABILITIES,
  FutureAgentFrameworkEvolutionDescriptor, FutureAgentFrameworkEvolutionProfile, addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-10 exposes stable responsibilities, objectives, principles, horizons, maturity, and routing metadata', () => {
  const descriptor = new FutureAgentFrameworkEvolutionDescriptor();
  assert.ok(descriptor.stableResponsibilities().includes(STABLE_AGENT_RESPONSIBILITIES.BUSINESS_SERVICE_OWNERSHIP));
  assert.ok(descriptor.objectives().includes(AGENT_EVOLUTION_OBJECTIVES.PORTABILITY));
  assert.ok(descriptor.principles().includes(AGENT_EVOLUTION_PRINCIPLES.EVIDENCE_BEFORE_AUTONOMY));
  assert.deepEqual(descriptor.horizons(), Object.values(AGENT_EVOLUTION_HORIZONS));
  assert.ok(descriptor.maturityStages().includes(AGENT_MATURITY_STAGES.CONTINUOUSLY_ASSURED_AUTONOMOUS_OPERATIONS));
  assert.ok(descriptor.maturityGateCriteria().includes(MATURITY_GATE_CRITERIA.AUTHORITY_COMPLIANCE));
  assert.ok(descriptor.routingFactors().includes(ADAPTIVE_ROUTING_FACTORS.DATA_SENSITIVITY));
});

test('ARCH-014-10 exposes model, planning, simulation, proactive, durable, autonomy, marketplace, and composition metadata', () => {
  const descriptor = new FutureAgentFrameworkEvolutionDescriptor();
  assert.ok(descriptor.modelPortfolioTypes().includes(MODEL_PORTFOLIO_TYPES.DETERMINISTIC));
  assert.ok(descriptor.substitutionRequirements().includes(MODEL_SUBSTITUTION_REQUIREMENTS.ROLLBACK));
  assert.ok(descriptor.verifiedPlanningCapabilities().includes(VERIFIED_PLANNING_CAPABILITIES.BUSINESS_RULE_VALIDATION));
  assert.ok(descriptor.simulationDimensions().includes(SIMULATION_DIMENSIONS.HUMAN_DECISION_LOAD));
  assert.ok(descriptor.proactiveRequirements().includes(PROACTIVE_AGENT_REQUIREMENTS.DUPLICATE_PREVENTION));
  assert.ok(descriptor.longRunningRequirements().includes(LONG_RUNNING_AGENT_REQUIREMENTS.AUTHORITY_RENEWAL));
  assert.ok(descriptor.dynamicAutonomyFactors().includes(DYNAMIC_AUTONOMY_FACTORS.INCIDENT_STATUS));
  assert.ok(descriptor.marketplaceAssets().includes(AGENT_MARKETPLACE_ASSETS.EVALUATION_SUITES));
  assert.ok(descriptor.compositionComponents().includes(AGENT_COMPOSITION_COMPONENTS.POLICY_PROFILES));
  assert.ok(descriptor.dynamicAgentRequirements().includes(DYNAMIC_AGENT_REQUIREMENTS.GUARANTEED_RETIREMENT));
});

test('ARCH-014-10 exposes assurance, cross-tenant, multimodal, physical, interoperability, adoption, risk, and boundary metadata', () => {
  const descriptor = new FutureAgentFrameworkEvolutionDescriptor();
  assert.ok(descriptor.continuousEvaluationMethods().includes(CONTINUOUS_EVALUATION_METHODS.DRIFT_TRIGGERED));
  assert.ok(descriptor.redTeamCases().includes(AUTOMATED_RED_TEAM_CASES.MEMORY_POISONING));
  assert.ok(descriptor.selfImprovementTargets().includes(SELF_IMPROVEMENT_PROPOSAL_TARGETS.EVALUATION_SCENARIOS));
  assert.ok(descriptor.maintenanceRequirements().includes(AUTONOMOUS_MAINTENANCE_REQUIREMENTS.INDEPENDENT_VALIDATION));
  assert.ok(descriptor.crossTenantControls().includes(CROSS_TENANT_INTELLIGENCE_CONTROLS.MINIMUM_COHORTS));
  assert.ok(descriptor.multimodalRequirements().includes(MULTIMODAL_REQUIREMENTS.CONSENT));
  assert.ok(descriptor.physicalRequirements().includes(PHYSICAL_INTERACTION_REQUIREMENTS.MANUAL_OVERRIDE));
  assert.ok(descriptor.interoperabilityContracts().includes(AGENT_INTEROPERABILITY_CONTRACTS.EVIDENCE));
  assert.ok(descriptor.adrTriggers().includes(AGENT_EVOLUTION_ADR_TRIGGERS.HUMAN_AUTHORITY));
  assert.ok(descriptor.sandboxRequirements().includes(INNOVATION_SANDBOX_REQUIREMENTS.NO_PRODUCTION_AUTHORITY));
  assert.deepEqual(descriptor.adoptionPipeline(), Object.values(AGENT_ADOPTION_PIPELINE));
  assert.ok(descriptor.adoptionCriteria().includes(AGENT_ADOPTION_CRITERIA.EXIT_STRATEGY));
  assert.ok(descriptor.risks().includes(AGENT_EVOLUTION_RISKS.AUTHORITY_CREEP));
  assert.ok(descriptor.nonGoals().includes(AGENT_EVOLUTION_NON_GOALS.SELF_AUTHORIZATION));
  assert.ok(descriptor.architecturalRules().includes(FUTURE_AGENT_ARCHITECTURAL_RULES.NO_DIRECT_SELF_MODIFICATION));
  assert.ok(descriptor.architectureBoundaries().includes(FUTURE_AGENT_ARCHITECTURE_BOUNDARIES.APPROVE_AUTONOMY));
});

test('ARCH-014-10 validates complete profiles and rejects evolution boundary violations', () => {
  const descriptor = new FutureAgentFrameworkEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    evidenceBeforeAutonomy: false, adoptionReversible: false, authorityExplicit: false,
    deterministicEnforcementPreserved: false, businessServiceOwnershipPreserved: false,
    workflowResponsibilityPreserved: false, tenantPropertyIsolationPreserved: false, humanControlPreserved: false,
    temporaryAgentsRegistered: false, continuousAssuranceRequired: false, selfModificationRequiresPromotion: false,
    experimentsHaveNoProductionAuthority: false, noveltyIsNotAdoptionCriterion: false, providerExitSupported: false,
    weakCapabilitiesRetired: false, vendorNeutral: false, modelNeutral: false, productNeutral: false,
    grantsFutureAutonomy: true, selectsModelProvider: true, replacesDeterministicServices: true,
    permitsCrossTenantMemory: true, permitsSelfAuthorization: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /registered-and-accountable-agent-identities/);
  assert.match(invalid.errors.join('\n'), /evidence-before-autonomy/);
  assert.match(invalid.errors.join('\n'), /Autonomy may increase only after acceptable evidence/);
  assert.match(invalid.errors.join('\n'), /does not approve or grant future autonomy/);
  assert.match(invalid.errors.join('\n'), /must not self-authorize/);
});

test('ARCH-014-10 assertion detects incomplete future evolution metadata', () => {
  class IncompleteDescriptor extends FutureAgentFrameworkEvolutionDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === FUTURE_AGENT_FRAMEWORK_EVOLUTION_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('ARCH-014-10 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('FutureAgentFrameworkEvolutionDescriptor');
  assert.ok(descriptor instanceof FutureAgentFrameworkEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['stableResponsibilities', 'objectives', 'principles', 'horizons', 'maturityStages',
    'maturityGateCriteria', 'routingFactors', 'modelPortfolioTypes', 'substitutionRequirements',
    'verifiedPlanningCapabilities', 'simulationDimensions', 'proactiveRequirements', 'longRunningRequirements',
    'dynamicAutonomyFactors', 'marketplaceAssets', 'compositionComponents', 'dynamicAgentRequirements',
    'continuousEvaluationMethods', 'redTeamCases', 'selfImprovementTargets', 'maintenanceRequirements',
    'crossTenantControls', 'multimodalRequirements', 'physicalRequirements', 'interoperabilityContracts',
    'adrTriggers', 'sandboxRequirements', 'adoptionPipeline', 'adoptionCriteria', 'risks', 'nonGoals',
    'architecturalRules', 'architectureBoundaries']) values[key] = descriptor[key]();
  return new FutureAgentFrameworkEvolutionProfile({ evolutionName: 'Future Agent Framework Evolution', ...values });
}