import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { FutureExtensionEcosystemEvolutionProfile } from '../contracts/future-extension-ecosystem-evolution-profile.js';
import * as constants from '../future-extension-ecosystem-evolution-constants.js';

const METADATA = Object.freeze({
  evolutionPrinciples: constants.EVOLUTION_PRINCIPLES, stableInvariants: constants.STABLE_INVARIANTS,
  evolutionDrivers: constants.EVOLUTION_DRIVERS, evolutionHorizons: constants.EVOLUTION_HORIZONS,
  mcpMappingItems: constants.MCP_MAPPING_ITEMS, portableCapabilityDescriptorEnablements: constants.PORTABLE_CAPABILITY_DESCRIPTOR_ENABLEMENTS,
  federationRequirements: constants.FEDERATION_REQUIREMENTS, sovereignDistributionElements: constants.SOVEREIGN_DISTRIBUTION_ELEMENTS,
  solutionBundleComponents: constants.SOLUTION_BUNDLE_COMPONENTS, composableExtensionRequirements: constants.COMPOSABLE_EXTENSION_REQUIREMENTS,
  aiAssistedDevelopmentAreas: constants.AI_ASSISTED_DEVELOPMENT_AREAS, behavioralAttestationObservations: constants.BEHAVIORAL_ATTESTATION_OBSERVATIONS,
  continuousCertificationInputs: constants.CONTINUOUS_CERTIFICATION_INPUTS, adaptiveIsolationRequirements: constants.ADAPTIVE_ISOLATION_REQUIREMENTS,
  predictiveOperationsForecasts: constants.PREDICTIVE_OPERATIONS_FORECASTS, automatedRemediationActions: constants.AUTOMATED_REMEDIATION_ACTIONS,
  crossPlatformPortabilityItems: constants.CROSS_PLATFORM_PORTABILITY_ITEMS, communityEcosystemItems: constants.COMMUNITY_ECOSYSTEM_ITEMS,
  selfServiceEcosystemItems: constants.SELF_SERVICE_ECOSYSTEM_ITEMS, evolutionGovernanceSteps: constants.EVOLUTION_GOVERNANCE_STEPS,
  evolutionMetrics: constants.EVOLUTION_METRICS, evolutionRiskGuardrails: constants.EVOLUTION_RISK_GUARDRAILS,
  architecturalRules: constants.FUTURE_EXTENSION_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  protocolEvolutionIsolatedBehindStableHostContracts: 'ARCH-019-10 requires protocol evolution to be isolated behind stable host and capability contracts.',
  portableDescriptorsRemainSubjectToLocalPolicy: 'ARCH-019-10 requires portable capability descriptors to remain subject to local tenant and platform policy.',
  federationNeverImportsRuntimeAuthorityAutomatically: 'ARCH-019-10 requires federation to never import runtime authority automatically.',
  privateCatalogsStillConsumeAuthoritativePackageIdentityAndRevocation: 'ARCH-019-10 requires private tenant marketplaces to still consume authoritative package identity, host isolation, provider authorization, advisories, and platform revocation.',
  bundleInstallationExpandsIntoVisibleComponentsGrantsAndDependencies: 'ARCH-019-10 requires bundle installation to expand into visible component packages, grants, dependencies, configuration, and lifecycle.',
  bundleIsNotShortcutAroundIndividualCapabilityApproval: 'ARCH-019-10 requires a bundle to never be a shortcut around individual capability approval.',
  compositionCannotLaunderDataOrAuthorityThroughIntermediateExtension: 'ARCH-019-10 requires composition to be unable to launder data or authority through an intermediate extension.',
  aiAuthorshipDoesNotReduceHumanOrPublisherAccountability: 'ARCH-019-10 requires AI authorship to never reduce human or publisher accountability.',
  reviewAutomationProvidesEvidenceNotFinalAuthorityForHighRiskDecisions: 'ARCH-019-10 requires review automation to provide evidence and confidence, not final authority, for high-risk decisions.',
  behavioralEvidenceComplementsNotReplacesStaticReview: 'ARCH-019-10 requires behavioral evidence to complement, not replace, static review.',
  trustSignalsUpdatePromptlyAndIdentifyScope: 'ARCH-019-10 requires trust signals to update promptly when evidence changes and always identify their scope.',
  automationCannotMoveDataOutsideResidencyOrTenantPolicy: 'ARCH-019-10 requires automation to be unable to move data outside residency or tenant policy.',
  predictionsDoNotSilentlyRevokeOrExpandCapabilityWithoutPolicy: 'ARCH-019-10 requires predictions to never silently revoke or expand capability without policy.',
  everyRemediationActionHasScopePreconditionsLimitsVerificationRollbackEscalation: 'ARCH-019-10 requires every automated remediation action to have scope, preconditions, limits, verification, rollback or containment, and escalation.',
  escrowDoesNotTransferTenantDataOrPublisherRightsBeyondAgreement: 'ARCH-019-10 requires escrow to never transfer tenant data or publisher rights beyond the agreement.',
  platformDoesNotExposeTenantInstallationListsOrSensitiveUsageToPublishers: 'ARCH-019-10 requires the platform to never expose tenant installation lists, sensitive usage, failures, or business patterns to publishers or other tenants without authority.',
  communityStatusVisibleAndNeverMisrepresentedAsEnterpriseSupport: 'ARCH-019-10 requires community status to be visible and never misrepresented as enterprise support.',
  selfServiceInvokesSameGovernanceAndEvidencePathsAsOperatorWorkflows: 'ARCH-019-10 requires self-service to invoke the same governance and evidence paths as operator workflows.'
});

const REQUIRED_FALSE = Object.freeze({
  profilesTreatedAsCustomerCodeForksRatherThanArchitectureProducts: 'ARCH-019-10 prohibits industry solution profiles from being treated as customer code forks rather than versioned architecture products.',
  rankingRecommendationModelsUnevaluatedForManipulationOrBias: 'ARCH-019-10 prohibits ranking and recommendation models from going unevaluated for manipulation and inappropriate bias.',
  mcpToolsUnfilteredOrUntenantBound: 'ARCH-019-10 prohibits MCP tools from remaining unfiltered, unvalidated, or not tenant bound.',
  aiGeneratedPackagesBypassStandardControls: 'ARCH-019-10 prohibits AI-generated packages from bypassing the same or stronger controls.',
  bundlesHideComponentGrantsOrDataFlow: 'ARCH-019-10 prohibits bundles from hiding any component, grant, dependency, or data flow.',
  adaptiveAutomationUnboundedOrUnexplained: 'ARCH-019-10 prohibits adaptive automation from being unbounded, unexplainable, or unevidenced.',
  crossTenantMarketplaceInsightsLackPrivacyProtection: 'ARCH-019-10 prohibits cross-tenant marketplace insights from lacking demonstrated privacy protection.',
  sovereignOrPortablePackagesSkipCommonConformanceProfiles: 'ARCH-019-10 prohibits sovereign or portable packages from skipping common conformance profiles.',
  stableExtensionAndTenantSemanticsChangeAcrossEvolution: 'ARCH-019-10 prohibits stable extension and tenant semantics from changing across evolution.',
  hostSpecificOptimizationsBreakPortableExtensionPointSemantics: 'ARCH-019-10 prohibits host-specific optimizations from breaking portable extension-point semantics.',
  externalMarketplacePurchaseBypassesTenantInstallationApproval: 'ARCH-019-10 prohibits external marketplace purchase from bypassing XeniosAI tenant installation and capability approval.'
});

export class FutureExtensionEcosystemEvolutionDescriptor {
  evolutionPrinciples() { return values(METADATA.evolutionPrinciples); } stableInvariants() { return values(METADATA.stableInvariants); }
  evolutionDrivers() { return values(METADATA.evolutionDrivers); } evolutionHorizons() { return values(METADATA.evolutionHorizons); }
  mcpMappingItems() { return values(METADATA.mcpMappingItems); } portableCapabilityDescriptorEnablements() { return values(METADATA.portableCapabilityDescriptorEnablements); }
  federationRequirements() { return values(METADATA.federationRequirements); } sovereignDistributionElements() { return values(METADATA.sovereignDistributionElements); }
  solutionBundleComponents() { return values(METADATA.solutionBundleComponents); } composableExtensionRequirements() { return values(METADATA.composableExtensionRequirements); }
  aiAssistedDevelopmentAreas() { return values(METADATA.aiAssistedDevelopmentAreas); } behavioralAttestationObservations() { return values(METADATA.behavioralAttestationObservations); }
  continuousCertificationInputs() { return values(METADATA.continuousCertificationInputs); } adaptiveIsolationRequirements() { return values(METADATA.adaptiveIsolationRequirements); }
  predictiveOperationsForecasts() { return values(METADATA.predictiveOperationsForecasts); } automatedRemediationActions() { return values(METADATA.automatedRemediationActions); }
  crossPlatformPortabilityItems() { return values(METADATA.crossPlatformPortabilityItems); } communityEcosystemItems() { return values(METADATA.communityEcosystemItems); }
  selfServiceEcosystemItems() { return values(METADATA.selfServiceEcosystemItems); } evolutionGovernanceSteps() { return values(METADATA.evolutionGovernanceSteps); }
  evolutionMetrics() { return values(METADATA.evolutionMetrics); } evolutionRiskGuardrails() { return values(METADATA.evolutionRiskGuardrails); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof FutureExtensionEcosystemEvolutionProfile ? input : new FutureExtensionEcosystemEvolutionProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Future Extension Ecosystem Evolution profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Future Extension Ecosystem Evolution must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.FUTURE_EXTENSION_ECOSYSTEM_EVOLUTION_ERROR_CODE, 'Future Extension Ecosystem Evolution violates ARCH-019-10.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
