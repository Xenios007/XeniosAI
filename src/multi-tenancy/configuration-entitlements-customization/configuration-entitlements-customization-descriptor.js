import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { ConfigurationEntitlementsCustomizationProfile } from '../contracts/configuration-entitlements-customization-profile.js';
import * as constants from '../configuration-entitlements-customization-constants.js';

const METADATA = Object.freeze({
  configPrinciples: constants.CONFIG_PRINCIPLES, configurationCategories: constants.CONFIGURATION_CATEGORIES,
  configurationHierarchyLevels: constants.CONFIGURATION_HIERARCHY_LEVELS, configurationItemScopeFields: constants.CONFIGURATION_ITEM_SCOPE_FIELDS,
  mandatoryPlatformControlAreas: constants.MANDATORY_PLATFORM_CONTROL_AREAS, configurationDomains: constants.CONFIGURATION_DOMAINS,
  schemaGovernanceFields: constants.SCHEMA_GOVERNANCE_FIELDS, versioningSupportCapabilities: constants.VERSIONING_SUPPORT_CAPABILITIES,
  configurationResolutionSteps: constants.CONFIGURATION_RESOLUTION_STEPS, inheritanceOverrideBehaviors: constants.INHERITANCE_OVERRIDE_BEHAVIORS,
  configurationValidationLevels: constants.CONFIGURATION_VALIDATION_LEVELS, changeLifecycleStages: constants.CHANGE_LIFECYCLE_STAGES,
  stagedRolloutTargets: constants.STAGED_ROLLOUT_TARGETS, brandingPreventions: constants.BRANDING_PREVENTIONS,
  localizationDistinctions: constants.LOCALIZATION_DISTINCTIONS, businessRuleRequirements: constants.BUSINESS_RULE_REQUIREMENTS,
  aiConfigurationElements: constants.AI_CONFIGURATION_ELEMENTS, entitlementFields: constants.ENTITLEMENT_FIELDS,
  featureReleaseQuestions: constants.FEATURE_RELEASE_QUESTIONS, serviceTierElements: constants.SERVICE_TIER_ELEMENTS,
  selfServiceCapabilities: constants.SELF_SERVICE_CAPABILITIES, extensionSettingFields: constants.EXTENSION_SETTING_FIELDS,
  secretsProhibitedLocations: constants.SECRETS_PROHIBITED_LOCATIONS, propagationDefinitions: constants.PROPAGATION_DEFINITIONS,
  configurationEvidenceFields: constants.CONFIGURATION_EVIDENCE_FIELDS, configurationObservabilitySignals: constants.CONFIGURATION_OBSERVABILITY_SIGNALS,
  configurationFailureBehaviors: constants.CONFIGURATION_FAILURE_BEHAVIORS, configurationTestingCoverageAreas: constants.CONFIGURATION_TESTING_COVERAGE_AREAS,
  architecturalRules: constants.CONFIGURATION_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  changesOnlyThroughGovernedOptions: 'ARCH-018-06 requires configuration to change behavior only through declared, governed options.',
  mandatoryControlsNonOverridable: 'ARCH-018-06 requires mandatory platform controls to remain non-overridable by tenant settings.',
  effectiveConfigDeterministicExplainable: 'ARCH-018-06 requires effective configuration to be deterministic and explainable.',
  tenantPropertyScopeExplicit: 'ARCH-018-06 requires tenant and property scope to be explicit.',
  schemasVersioned: 'ARCH-018-06 requires schemas, defaults, and compatibility to be versioned.',
  secretsReferencedNotEmbedded: 'ARCH-018-06 requires secrets to be referenced, never embedded in ordinary configuration.',
  entitlementDistinctFromConfigAndAuthorization: 'ARCH-018-06 requires entitlement to remain distinct from configuration and authorization.',
  featureReleaseDistinctFromEntitlement: 'ARCH-018-06 requires feature release to remain distinct from tenant purchase or permission.',
  highRiskChangesStagedApprovedReversible: 'ARCH-018-06 requires high-risk changes to use approval, staging, validation, and rollback.',
  tenantVariationUsesConfigurationNotForks: 'ARCH-018-06 requires tenant variation to use configuration or approved extension points, not code forks.',
  aiConfigWithinSafetyBoundaries: 'ARCH-018-06 requires AI configuration to remain inside platform safety and authority boundaries.',
  domainOwnersAuthoritativeForSemantics: 'ARCH-018-06 requires domain owners to remain authoritative for their configuration semantics.',
  resolutionExposesProvenanceAndReason: 'ARCH-018-06 requires the resolution engine to expose effective value, source scope, source version, and reason.',
  invalidConfigRejectedBeforeActivation: 'ARCH-018-06 requires invalid configuration to be rejected before activation.',
  unavailableProviderPreservesMandatoryControls: 'ARCH-018-06 requires an unavailable configuration provider to never cause mandatory controls to disappear.'
});

const REQUIRED_FALSE = Object.freeze({
  propertySettingReferencesOtherTenantResource: 'ARCH-018-06 prohibits a property setting from referring to a resource owned by another tenant.',
  arbitraryTenantCodeExecutedAsConfiguration: 'ARCH-018-06 prohibits arbitrary tenant code from being executed as configuration.',
  aiConfigGrantsNewDataAuthority: 'ARCH-018-06 prohibits AI configuration from granting new data authority, bypassing safety policy, accessing another tenant, or revealing protected system instructions.',
  featureFlagsAuthoritativeForBillingOrSecurity: 'ARCH-018-06 prohibits engineering feature flags from becoming the authoritative billing or security system.',
  quotaAuthorizesUnpermittedCapabilityAccess: 'ARCH-018-06 prohibits a quota from authorizing access to a capability the tenant or actor is not otherwise permitted to use.',
  extensionConfigConvertsUntrustedPayloadToCode: 'ARCH-018-06 prohibits configuration from converting an untrusted payload into unrestricted executable code.',
  configurationFailureFallsBackToAnotherTenant: 'ARCH-018-06 prohibits configuration failures from falling back to another tenant’s value.',
  invalidConfigurationPartiallyActivated: 'ARCH-018-06 prohibits invalid configuration from being partially activated rather than quarantined.'
});

export class ConfigurationEntitlementsCustomizationDescriptor {
  configPrinciples() { return values(METADATA.configPrinciples); } configurationCategories() { return values(METADATA.configurationCategories); }
  configurationHierarchyLevels() { return values(METADATA.configurationHierarchyLevels); } configurationItemScopeFields() { return values(METADATA.configurationItemScopeFields); }
  mandatoryPlatformControlAreas() { return values(METADATA.mandatoryPlatformControlAreas); } configurationDomains() { return values(METADATA.configurationDomains); }
  schemaGovernanceFields() { return values(METADATA.schemaGovernanceFields); } versioningSupportCapabilities() { return values(METADATA.versioningSupportCapabilities); }
  configurationResolutionSteps() { return values(METADATA.configurationResolutionSteps); } inheritanceOverrideBehaviors() { return values(METADATA.inheritanceOverrideBehaviors); }
  configurationValidationLevels() { return values(METADATA.configurationValidationLevels); } changeLifecycleStages() { return values(METADATA.changeLifecycleStages); }
  stagedRolloutTargets() { return values(METADATA.stagedRolloutTargets); } brandingPreventions() { return values(METADATA.brandingPreventions); }
  localizationDistinctions() { return values(METADATA.localizationDistinctions); } businessRuleRequirements() { return values(METADATA.businessRuleRequirements); }
  aiConfigurationElements() { return values(METADATA.aiConfigurationElements); } entitlementFields() { return values(METADATA.entitlementFields); }
  featureReleaseQuestions() { return values(METADATA.featureReleaseQuestions); } serviceTierElements() { return values(METADATA.serviceTierElements); }
  selfServiceCapabilities() { return values(METADATA.selfServiceCapabilities); } extensionSettingFields() { return values(METADATA.extensionSettingFields); }
  secretsProhibitedLocations() { return values(METADATA.secretsProhibitedLocations); } propagationDefinitions() { return values(METADATA.propagationDefinitions); }
  configurationEvidenceFields() { return values(METADATA.configurationEvidenceFields); } configurationObservabilitySignals() { return values(METADATA.configurationObservabilitySignals); }
  configurationFailureBehaviors() { return values(METADATA.configurationFailureBehaviors); } configurationTestingCoverageAreas() { return values(METADATA.configurationTestingCoverageAreas); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ConfigurationEntitlementsCustomizationProfile ? input : new ConfigurationEntitlementsCustomizationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Configuration, entitlements, and customization profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Configuration, Entitlements, and Customization must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.CONFIGURATION_ENTITLEMENTS_CUSTOMIZATION_ERROR_CODE, 'Configuration, Entitlements, and Customization violates ARCH-018-06.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
