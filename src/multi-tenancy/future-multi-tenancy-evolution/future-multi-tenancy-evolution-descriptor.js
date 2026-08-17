import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { FutureMultiTenancyEvolutionProfile } from '../contracts/future-multi-tenancy-evolution-profile.js';
import * as constants from '../future-multi-tenancy-evolution-constants.js';

const METADATA = Object.freeze({
  evolutionPrinciples: constants.EVOLUTION_PRINCIPLES, stableArchitecturalInvariants: constants.STABLE_ARCHITECTURAL_INVARIANTS,
  evolutionDrivers: constants.EVOLUTION_DRIVERS, evolutionHorizons: constants.EVOLUTION_HORIZONS,
  cellModelRequirements: constants.CELL_MODEL_REQUIREMENTS, cellDesignOptions: constants.CELL_DESIGN_OPTIONS,
  placementEvaluationFactors: constants.PLACEMENT_EVALUATION_FACTORS, placementRebalancingSteps: constants.PLACEMENT_REBALANCING_STEPS,
  progressiveIsolationRequirements: constants.PROGRESSIVE_ISOLATION_REQUIREMENTS, sovereignDeploymentElements: constants.SOVEREIGN_DEPLOYMENT_ELEMENTS,
  providerPortabilityImprovements: constants.PROVIDER_PORTABILITY_IMPROVEMENTS, futurePortabilityPackageContents: constants.FUTURE_PORTABILITY_PACKAGE_CONTENTS,
  continuousVerificationCapabilities: constants.CONTINUOUS_VERIFICATION_CAPABILITIES, digitalTwinFields: constants.DIGITAL_TWIN_FIELDS,
  policyAsCodeMaturityItems: constants.POLICY_AS_CODE_MATURITY_ITEMS, adaptiveGovernanceTargets: constants.ADAPTIVE_GOVERNANCE_TARGETS,
  predictiveCapacityInputs: constants.PREDICTIVE_CAPACITY_INPUTS, privacyPreservingControls: constants.PRIVACY_PRESERVING_CONTROLS,
  federatedLearningGovernanceAreas: constants.FEDERATED_LEARNING_GOVERNANCE_AREAS, aiAssistedOperationsAreas: constants.AI_ASSISTED_OPERATIONS_AREAS,
  remediationDefinitionFields: constants.REMEDIATION_DEFINITION_FIELDS, selfServiceEvolutionItems: constants.SELF_SERVICE_EVOLUTION_ITEMS,
  ecosystemGrowthAreas: constants.ECOSYSTEM_GROWTH_AREAS, collaborationEvolutionFields: constants.COLLABORATION_EVOLUTION_FIELDS,
  identityEvolutionPreservedElements: constants.IDENTITY_EVOLUTION_PRESERVED_ELEMENTS, migrationFactoryMovementTypes: constants.MIGRATION_FACTORY_MOVEMENT_TYPES,
  deletionVerificationDistinctions: constants.DELETION_VERIFICATION_DISTINCTIONS, sustainabilityConsiderations: constants.SUSTAINABILITY_CONSIDERATIONS,
  evolutionGovernanceSteps: constants.EVOLUTION_GOVERNANCE_STEPS, evolutionMetrics: constants.EVOLUTION_METRICS,
  evolutionRisks: constants.EVOLUTION_RISKS, architecturalRules: constants.FUTURE_MULTI_TENANCY_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  tenantSemanticsStableAcrossEvolution: 'ARCH-018-10 requires tenant and property semantics to remain stable while implementation changes.',
  evolutionIncrementalReversibleEvidenceDriven: 'ARCH-018-10 requires evolution to be incremental, reversible where practical, and evidence driven.',
  automationNarrowsRiskNotHidesDecisions: 'ARCH-018-10 requires new automation to narrow operational risk rather than hide decisions.',
  isolationImprovementsPortable: 'ARCH-018-10 requires isolation improvements to be portable across providers and deployment models.',
  dedicatedSovereignReuseCommonContracts: 'ARCH-018-10 requires dedicated and sovereign options to reuse common platform contracts.',
  migrationIsProductCapability: 'ARCH-018-10 requires migration to be a product capability, not a one-time project.',
  portabilityIncludesEvidence: 'ARCH-018-10 requires tenant portability to include data, configuration, policy references, and evidence.',
  aiOperationsBoundedByAccountability: 'ARCH-018-10 requires AI-assisted operations to remain bounded by human accountability and policy.',
  privacyInsightsNoImplicitRights: 'ARCH-018-10 requires privacy-preserving insights to never create implicit rights to tenant data.',
  optimizationCannotWeakenCommitments: 'ARCH-018-10 requires future optimization to never weaken current security or contractual commitments.',
  cellsSupplementNotReplaceIsolation: 'ARCH-018-10 requires cell boundaries to supplement tenant isolation, with tenants inside a cell remaining mutually isolated.',
  placementDecisionsExplainable: 'ARCH-018-10 requires placement decisions to remain explainable through inputs, rules, versions, and evidence.',
  unknownContaminationContainedAndEscalated: 'ARCH-018-10 requires unknown cross-tenant contamination to be contained and escalated rather than autonomously rewritten.',
  selfServiceUsesSameControlsAsOperator: 'ARCH-018-10 requires self-service to use the same assessment, policy, approval, provisioning, validation, and evidence controls as operator-initiated processes.',
  arch018AuthoritativeForTenantScope: 'ARCH-018-10 requires ARCH-018 to remain authoritative for tenant scope and isolation as extension mechanisms evolve.'
});

const REQUIRED_FALSE = Object.freeze({
  rebalancingChangesTenantIdentity: 'ARCH-018-10 prohibits rebalancing from changing tenant identity or weakening residency policy to achieve utilization targets.',
  sharedInfrastructureMoveTreatedAsSimpleCostOptimization: 'ARCH-018-10 prohibits treating a move to more shared infrastructure as a simple cost optimization.',
  portabilityRequiresLowestCommonDenominator: 'ARCH-018-10 prohibits requiring the lowest common denominator for portability.',
  policyAutomationResolvesAmbiguityAutonomously: 'ARCH-018-10 prohibits policy automation from making legal, ethical, or business ambiguity disappear.',
  adaptiveControlsDiscriminateOnSensitiveAttributes: 'ARCH-018-10 prohibits adaptive controls from discriminating using inappropriate sensitive attributes.',
  forecastsOverrideHealthOrContracts: 'ARCH-018-10 prohibits predictions from overriding actual health signals or contractual commitments.',
  tenantDataFreeTrainingAsset: 'ARCH-018-10 prohibits treating tenant data as a free training or benchmarking asset merely because the platform hosts it.',
  federatedComputationGuaranteesPrivacyAutomatically: 'ARCH-018-10 prohibits assuming federated computation automatically guarantees privacy or tenant isolation.',
  cryptographicIdentityProvesResourceAuthority: 'ARCH-018-10 prohibits treating cryptographic proof of identity as proof of resource authority.',
  singleWorkflowFlagProvesErasure: 'ARCH-018-10 prohibits treating a single workflow completion flag as sufficient proof of erasure.',
  sustainabilityMovesDataOutsideApprovedLocations: 'ARCH-018-10 prohibits sustainability optimization from moving tenant data outside approved locations or compromising recovery and isolation.',
  experimentalCapabilityRedefinesMandatoryControls: 'ARCH-018-10 prohibits experimental capability from redefining mandatory production controls without approval.'
});

export class FutureMultiTenancyEvolutionDescriptor {
  evolutionPrinciples() { return values(METADATA.evolutionPrinciples); } stableArchitecturalInvariants() { return values(METADATA.stableArchitecturalInvariants); }
  evolutionDrivers() { return values(METADATA.evolutionDrivers); } evolutionHorizons() { return values(METADATA.evolutionHorizons); }
  cellModelRequirements() { return values(METADATA.cellModelRequirements); } cellDesignOptions() { return values(METADATA.cellDesignOptions); }
  placementEvaluationFactors() { return values(METADATA.placementEvaluationFactors); } placementRebalancingSteps() { return values(METADATA.placementRebalancingSteps); }
  progressiveIsolationRequirements() { return values(METADATA.progressiveIsolationRequirements); } sovereignDeploymentElements() { return values(METADATA.sovereignDeploymentElements); }
  providerPortabilityImprovements() { return values(METADATA.providerPortabilityImprovements); } futurePortabilityPackageContents() { return values(METADATA.futurePortabilityPackageContents); }
  continuousVerificationCapabilities() { return values(METADATA.continuousVerificationCapabilities); } digitalTwinFields() { return values(METADATA.digitalTwinFields); }
  policyAsCodeMaturityItems() { return values(METADATA.policyAsCodeMaturityItems); } adaptiveGovernanceTargets() { return values(METADATA.adaptiveGovernanceTargets); }
  predictiveCapacityInputs() { return values(METADATA.predictiveCapacityInputs); } privacyPreservingControls() { return values(METADATA.privacyPreservingControls); }
  federatedLearningGovernanceAreas() { return values(METADATA.federatedLearningGovernanceAreas); } aiAssistedOperationsAreas() { return values(METADATA.aiAssistedOperationsAreas); }
  remediationDefinitionFields() { return values(METADATA.remediationDefinitionFields); } selfServiceEvolutionItems() { return values(METADATA.selfServiceEvolutionItems); }
  ecosystemGrowthAreas() { return values(METADATA.ecosystemGrowthAreas); } collaborationEvolutionFields() { return values(METADATA.collaborationEvolutionFields); }
  identityEvolutionPreservedElements() { return values(METADATA.identityEvolutionPreservedElements); } migrationFactoryMovementTypes() { return values(METADATA.migrationFactoryMovementTypes); }
  deletionVerificationDistinctions() { return values(METADATA.deletionVerificationDistinctions); } sustainabilityConsiderations() { return values(METADATA.sustainabilityConsiderations); }
  evolutionGovernanceSteps() { return values(METADATA.evolutionGovernanceSteps); } evolutionMetrics() { return values(METADATA.evolutionMetrics); }
  evolutionRisks() { return values(METADATA.evolutionRisks); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof FutureMultiTenancyEvolutionProfile ? input : new FutureMultiTenancyEvolutionProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future multi-tenancy evolution profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Future Multi-Tenancy Evolution must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.FUTURE_MULTI_TENANCY_EVOLUTION_ERROR_CODE, 'Future Multi-Tenancy Evolution violates ARCH-018-10.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
