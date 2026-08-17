import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionOverviewProfile } from '../contracts/plugin-extension-overview-profile.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import * as constants from '../overview-constants.js';

const MAP = Object.freeze({
  businessScope: constants.EXTENSION_BUSINESS_SCOPE, informationScope: constants.EXTENSION_INFORMATION_SCOPE,
  applicationScope: constants.EXTENSION_APPLICATION_SCOPE, technologyScope: constants.EXTENSION_TECHNOLOGY_SCOPE,
  scopeBoundaries: constants.EXTENSION_SCOPE_BOUNDARIES, stakeholders: constants.EXTENSION_ECOSYSTEM_STAKEHOLDERS,
  ecosystemBenefits: constants.EXTENSION_ECOSYSTEM_BENEFITS, commonFailureModes: constants.EXTENSION_COMMON_FAILURE_MODES,
  architectureGoals: constants.EXTENSION_ARCHITECTURE_GOALS, nonGoals: constants.EXTENSION_NON_GOALS,
  foundationalInvariants: constants.EXTENSION_FOUNDATIONAL_INVARIANTS, extensionCategories: constants.EXTENSION_CATEGORIES,
  ecosystemRoles: constants.EXTENSION_ECOSYSTEM_ROLES, controlPlaneElements: constants.EXTENSION_CONTROL_PLANE_ELEMENTS,
  runtimePlaneElements: constants.EXTENSION_RUNTIME_PLANE_ELEMENTS, capabilityMapAreas: constants.EXTENSION_CAPABILITY_MAP_AREAS,
  trustModelSignals: constants.EXTENSION_TRUST_MODEL_SIGNALS, capabilityGrantFields: constants.EXTENSION_CAPABILITY_GRANT_FIELDS,
  extensionPointQuestions: constants.EXTENSION_POINT_QUESTIONS, targetStateRuntimeSteps: constants.EXTENSION_TARGET_STATE_RUNTIME_STEPS,
  targetStateCharacteristics: constants.EXTENSION_TARGET_STATE_CHARACTERISTICS, adoptionPhases: constants.EXTENSION_ADOPTION_PHASES,
  architectureRisks: constants.EXTENSION_ARCHITECTURE_RISKS, ecosystemMeasures: constants.EXTENSION_ECOSYSTEM_MEASURES,
  safetyMeasures: constants.EXTENSION_SAFETY_MEASURES, reliabilityMeasures: constants.EXTENSION_RELIABILITY_MEASURES,
  developerMeasures: constants.EXTENSION_DEVELOPER_MEASURES, governanceMeasures: constants.EXTENSION_GOVERNANCE_MEASURES,
  architectureDeliverables: constants.EXTENSION_ARCHITECTURE_DELIVERABLES, keyDecisions: constants.EXTENSION_KEY_DECISIONS
});

const REQUIRED_TRUE = Object.freeze({
  everyExtensionHasStableIdentityOwnership: 'ARCH-019-01 requires every extension to have stable identity and accountable ownership.',
  everyPackageVersionImmutableVerifiable: 'ARCH-019-01 requires every package version to be immutable and integrity verifiable.',
  everyExtensionPointHasOwningCapability: 'ARCH-019-01 requires every extension point to have an owning platform or domain capability.',
  manifestIsRequestNotGrant: 'ARCH-019-01 requires manifests to be validated but remain a request for capability.',
  everyInstallationHasExplicitScope: 'ARCH-019-01 requires every installation to have explicit tenant or platform scope.',
  runtimeActionsUseCurrentCapabilityPolicy: 'ARCH-019-01 requires every runtime action to use current capability and policy.',
  extensionStorageIsolatedAttributable: 'ARCH-019-01 requires extension storage to be isolated and attributable.',
  oneTenantInstallationGrantsNothingToAnother: 'ARCH-019-01 requires one tenant installation to grant nothing to another tenant.',
  failureAndConsumptionContained: 'ARCH-019-01 requires failure and resource consumption to be contained.',
  uninstallRemovesAccessAndDisposesData: 'ARCH-019-01 requires uninstall to remove execution paths and dispose of eligible data.',
  highRiskExtensionsRapidlySuspendable: 'ARCH-019-01 requires high-risk extensions to be rapidly suspendable or revocable.',
  materialActionsProduceEvidence: 'ARCH-019-01 requires material actions and lifecycle changes to produce evidence.',
  hostsMediateAllSensitiveAccess: 'ARCH-019-01 requires hosts to mediate all sensitive access.',
  domainServicesRetainAuthorityAndOwnership: 'ARCH-019-01 requires domain services to retain business authority and data ownership.',
  marketplacePurchaseCertificationInstallationExecutionDistinct: 'ARCH-019-01 requires marketplace, purchase, certification, installation, and execution to remain distinct states.',
  mcpProvidersFollowSameControls: 'ARCH-019-01 requires MCP providers to follow the same extension controls.',
  ecosystemGrowthGovernedByEvidence: 'ARCH-019-01 requires ecosystem growth to be governed by measurable evidence.'
});

const REQUIRED_FALSE = Object.freeze({
  extensionsAccessAnotherServiceDatabaseDirectly: 'ARCH-019-01 prohibits extensions from directly accessing another service’s database.',
  extensionsReceiveAmbientCredentials: 'ARCH-019-01 prohibits extensions from receiving ambient platform or tenant credentials.',
  networkAccessAllowByDefault: 'ARCH-019-01 requires network access to be deny by default, never allow by default.',
  marketplaceStatusGrantsRuntimeAuthority: 'ARCH-019-01 prohibits marketplace status from granting runtime authority.',
  packageUpdatesCrossBoundariesSilently: 'ARCH-019-01 prohibits package updates from silently crossing compatibility or consent boundaries.',
  arbitraryCodeSafeByDeclaration: 'ARCH-019-01 does not make arbitrary code safe by declaration.',
  codeSigningTreatedAsBehavioralCertification: 'ARCH-019-01 does not treat code signing as behavioral certification.',
  tenantsWeakenPlatformSecurityControls: 'ARCH-019-01 does not allow tenants to weaken platform security controls.',
  communityContributionsAutomaticallyProductionEligible: 'ARCH-019-01 does not make community contributions automatically production eligible.',
  aiGeneratedExtensionsReceiveSpecialTrust: 'ARCH-019-01 does not grant AI-generated extensions special trust.'
});

export class PluginExtensionOverviewDescriptor {
  businessScope() { return values(MAP.businessScope); } informationScope() { return values(MAP.informationScope); }
  applicationScope() { return values(MAP.applicationScope); } technologyScope() { return values(MAP.technologyScope); }
  scopeBoundaries() { return values(MAP.scopeBoundaries); } stakeholders() { return values(MAP.stakeholders); }
  ecosystemBenefits() { return values(MAP.ecosystemBenefits); } commonFailureModes() { return values(MAP.commonFailureModes); }
  architectureGoals() { return values(MAP.architectureGoals); } nonGoals() { return values(MAP.nonGoals); }
  foundationalInvariants() { return values(MAP.foundationalInvariants); } extensionCategories() { return values(MAP.extensionCategories); }
  ecosystemRoles() { return values(MAP.ecosystemRoles); } controlPlaneElements() { return values(MAP.controlPlaneElements); }
  runtimePlaneElements() { return values(MAP.runtimePlaneElements); } capabilityMapAreas() { return values(MAP.capabilityMapAreas); }
  trustModelSignals() { return values(MAP.trustModelSignals); } capabilityGrantFields() { return values(MAP.capabilityGrantFields); }
  extensionPointQuestions() { return values(MAP.extensionPointQuestions); } targetStateRuntimeSteps() { return values(MAP.targetStateRuntimeSteps); }
  targetStateCharacteristics() { return values(MAP.targetStateCharacteristics); } adoptionPhases() { return values(MAP.adoptionPhases); }
  architectureRisks() { return values(MAP.architectureRisks); } ecosystemMeasures() { return values(MAP.ecosystemMeasures); }
  safetyMeasures() { return values(MAP.safetyMeasures); } reliabilityMeasures() { return values(MAP.reliabilityMeasures); }
  developerMeasures() { return values(MAP.developerMeasures); } governanceMeasures() { return values(MAP.governanceMeasures); }
  architectureDeliverables() { return values(MAP.architectureDeliverables); } keyDecisions() { return values(MAP.keyDecisions); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof PluginExtensionOverviewProfile ? profileInput : new PluginExtensionOverviewProfile(profileInput);
    const errors = [];
    if (!profile.frameworkName) errors.push('Plugin extension overview profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) if (this[key]().length !== Object.keys(source).length) errors.push(`Plugin and Extension Overview must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.PLUGIN_EXTENSION_OVERVIEW_ERROR_CODE, 'Plugin and Extension Overview violates ARCH-019-01.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function validation(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
