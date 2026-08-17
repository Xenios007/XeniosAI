import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { TenantInstallationConfigurationAndOperationsProfile } from '../contracts/tenant-installation-configuration-and-operations-profile.js';
import * as constants from '../tenant-installation-configuration-and-operations-constants.js';

const METADATA = Object.freeze({
  tenantPrinciples: constants.TENANT_PRINCIPLES, tenantRoles: constants.TENANT_ROLES,
  discoveryCatalogFields: constants.DISCOVERY_CATALOG_FIELDS, installationRequestFields: constants.INSTALLATION_REQUEST_FIELDS,
  assessmentConsiderations: constants.ASSESSMENT_CONSIDERATIONS, informedConsentElements: constants.INFORMED_CONSENT_ELEMENTS,
  propertyScopeRules: constants.PROPERTY_SCOPE_RULES, configurationProperties: constants.CONFIGURATION_PROPERTIES,
  connectionRecordFields: constants.CONNECTION_RECORD_FIELDS, provisioningElements: constants.PROVISIONING_ELEMENTS,
  activationValidationChecks: constants.ACTIVATION_VALIDATION_CHECKS, tenantOperationsViewFields: constants.TENANT_OPERATIONS_VIEW_FIELDS,
  healthSignalSources: constants.HEALTH_SIGNAL_SOURCES, resourceGovernanceLimits: constants.RESOURCE_GOVERNANCE_LIMITS,
  usageCostViewDistinctions: constants.USAGE_COST_VIEW_DISTINCTIONS, notificationTypes: constants.NOTIFICATION_TYPES,
  tenantPilotRolloutStages: constants.TENANT_PILOT_ROLLOUT_STAGES, supportModelParties: constants.SUPPORT_MODEL_PARTIES,
  supportAccessRequirements: constants.SUPPORT_ACCESS_REQUIREMENTS, incidentResponseElements: constants.INCIDENT_RESPONSE_ELEMENTS,
  dataPortabilityExportItems: constants.DATA_PORTABILITY_EXPORT_ITEMS, uninstallRequestDisclosures: constants.UNINSTALL_REQUEST_DISCLOSURES,
  uninstallExecutionSteps: constants.UNINSTALL_EXECUTION_STEPS, tenantEvidenceTypes: constants.TENANT_EVIDENCE_TYPES,
  reconciliationDomains: constants.RECONCILIATION_DOMAINS, architecturalRules: constants.TENANT_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  installersSeeEffectiveGrantNotOnlyManifestRequest: 'ARCH-019-08 requires the installer to see the effective grant rather than only the manifest request.',
  materialExpansionRequiresRenewedApproval: 'ARCH-019-08 requires material expansion of consent to require renewed approval.',
  effectiveConfigurationAndProvenanceAreInspectable: 'ARCH-019-08 requires the effective configuration and provenance to be inspectable.',
  provisioningIsIdempotentAndReportsPartialStatus: 'ARCH-019-08 requires provisioning to be idempotent and report partial status.',
  platformControlsIndependentlyVerifySecurityAndIsolation: 'ARCH-019-08 requires platform controls to independently verify security and isolation.',
  noOtherTenantsInstallationsOrUsageExposed: 'ARCH-019-08 requires no other tenant’s installations or usage to be exposed.',
  tenantsReceiveActionableHealthWithoutInternalSecurityDetails: 'ARCH-019-08 requires tenants to receive actionable status without internal security details that could increase risk.',
  billingDoesNotDirectlyMakeRuntimeAuthorizationDecisions: 'ARCH-019-08 requires billing to never directly make runtime authorization decisions.',
  updatePreviewsShowCapabilityDataNetworkConfigDependencyResourceSupportChanges: 'ARCH-019-08 requires update previews to show capability, data, network, configuration, dependency, resource, and support changes.',
  materialNewAccessRequiresRenewedConsent: 'ARCH-019-08 requires material new access to require renewed consent.',
  pilotDataAndGrantsRemainIsolated: 'ARCH-019-08 requires pilot data and grants to remain isolated.',
  platformExplainsNonReversibleSideEffectsAndDataMigrationConstraints: 'ARCH-019-08 requires the platform to explain non-reversible side effects and data migration constraints for rollback.',
  suspensionBlocksOrdinaryExecutionAndPreservesDataOnlyAsPolicyRequires: 'ARCH-019-08 requires suspension to block ordinary execution and preserve data only as policy requires.',
  supportCasesRouteWithTenantSafeDiagnosticEvidence: 'ARCH-019-08 requires support cases to route with tenant-safe diagnostic evidence.',
  publisherSupportAccessExcludesDirectDatabaseHostOrTenantSecretAccess: 'ARCH-019-08 requires publisher support access to exclude direct database, host, or tenant secret access.',
  tenantOffboardingIncludesEveryInstalledExtensionResource: 'ARCH-019-08 requires tenant offboarding to include every installed extension resource.',
  orphanedExecutionOrDataAfterRemovalIsControlFailure: 'ARCH-019-08 requires orphaned execution or data after removal to be treated as a control failure.'
});

const REQUIRED_FALSE = Object.freeze({
  catalogRankingImpliesTenantSuitabilityOrPermission: 'ARCH-019-08 prohibits catalog ranking from implying tenant suitability or permission.',
  requestsWithMissingScopeOrOwnershipProgressAutomatically: 'ARCH-019-08 prohibits requests with missing scope or ownership from progressing automatically.',
  propertyAdministratorsExceedDelegatedScope: 'ARCH-019-08 prohibits property administrators from exceeding delegated scope.',
  newPropertiesAutomaticallyIncludedWithoutApprovedDynamicScope: 'ARCH-019-08 prohibits new properties from being automatically included without approved dynamic tenant-wide scope.',
  configurationStoresSecretValuesOrOverridesMandatoryControls: 'ARCH-019-08 prohibits configuration from storing secret values or overriding mandatory controls.',
  tenantAdministratorsViewSecretsAfterProtectedEntryWherePolicyProhibits: 'ARCH-019-08 prohibits tenant administrators from viewing secrets after protected entry where policy prohibits it.',
  rollbackAllowsReEnablingRevokedVulnerablePackage: 'ARCH-019-08 prohibits rollback authority from re-enabling a revoked vulnerable package.',
  supportResponsibilityRequiresTenantToCoordinateHiddenInternalTeams: 'ARCH-019-08 prohibits support responsibility from requiring the tenant to coordinate hidden internal teams.',
  incidentCommunicationsIncludeOtherTenantsOrProtectedInvestigationDetail: 'ARCH-019-08 prohibits incident communications from including other tenants or protected investigation detail.',
  uninstallLeavesActiveSchedulesGrantsCredentialsOrOrphanedData: 'ARCH-019-08 prohibits uninstall from leaving active schedules, grants, credentials, or orphaned data.',
  extensionOwnedDataExcludedFromTenantExportAndOffboarding: 'ARCH-019-08 prohibits extension-owned data from being excluded from tenant export and offboarding.'
});

export class TenantInstallationConfigurationAndOperationsDescriptor {
  tenantPrinciples() { return values(METADATA.tenantPrinciples); } tenantRoles() { return values(METADATA.tenantRoles); }
  discoveryCatalogFields() { return values(METADATA.discoveryCatalogFields); } installationRequestFields() { return values(METADATA.installationRequestFields); }
  assessmentConsiderations() { return values(METADATA.assessmentConsiderations); } informedConsentElements() { return values(METADATA.informedConsentElements); }
  propertyScopeRules() { return values(METADATA.propertyScopeRules); } configurationProperties() { return values(METADATA.configurationProperties); }
  connectionRecordFields() { return values(METADATA.connectionRecordFields); } provisioningElements() { return values(METADATA.provisioningElements); }
  activationValidationChecks() { return values(METADATA.activationValidationChecks); } tenantOperationsViewFields() { return values(METADATA.tenantOperationsViewFields); }
  healthSignalSources() { return values(METADATA.healthSignalSources); } resourceGovernanceLimits() { return values(METADATA.resourceGovernanceLimits); }
  usageCostViewDistinctions() { return values(METADATA.usageCostViewDistinctions); } notificationTypes() { return values(METADATA.notificationTypes); }
  tenantPilotRolloutStages() { return values(METADATA.tenantPilotRolloutStages); } supportModelParties() { return values(METADATA.supportModelParties); }
  supportAccessRequirements() { return values(METADATA.supportAccessRequirements); } incidentResponseElements() { return values(METADATA.incidentResponseElements); }
  dataPortabilityExportItems() { return values(METADATA.dataPortabilityExportItems); } uninstallRequestDisclosures() { return values(METADATA.uninstallRequestDisclosures); }
  uninstallExecutionSteps() { return values(METADATA.uninstallExecutionSteps); } tenantEvidenceTypes() { return values(METADATA.tenantEvidenceTypes); }
  reconciliationDomains() { return values(METADATA.reconciliationDomains); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof TenantInstallationConfigurationAndOperationsProfile ? input : new TenantInstallationConfigurationAndOperationsProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Tenant Installation, Configuration, and Operations profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Tenant Installation, Configuration, and Operations must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.TENANT_INSTALLATION_CONFIGURATION_AND_OPERATIONS_ERROR_CODE, 'Tenant Installation, Configuration, and Operations violates ARCH-019-08.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
