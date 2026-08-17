import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { CapabilitySecurityIsolationProfile } from '../contracts/capability-security-isolation-profile.js';
import * as constants from '../capability-security-isolation-constants.js';

const METADATA = Object.freeze({
  securityPrinciples: constants.CAPABILITY_SECURITY_PRINCIPLES, threatModelItems: constants.EXTENSION_THREAT_MODEL_ITEMS,
  capabilityGrantFields: constants.SECURITY_CAPABILITY_GRANT_FIELDS, grantDerivationLayers: constants.GRANT_DERIVATION_LAYERS,
  capabilityGranularityExamples: constants.CAPABILITY_GRANULARITY_EXAMPLES, runtimeIdentityFields: constants.EXTENSION_RUNTIME_IDENTITY_FIELDS,
  tenantIsolationDimensions: constants.EXTENSION_TENANT_ISOLATION_DIMENSIONS, hostIsolationClasses: constants.HOST_ISOLATION_CLASSES,
  hostSecurityControls: constants.HOST_SECURITY_CONTROLS, providerEnforcementChecks: constants.PROVIDER_ENFORCEMENT_CHECKS,
  dataAccessProhibitions: constants.EXTENSION_DATA_ACCESS_PROHIBITIONS, extensionStoragePolicyFields: constants.EXTENSION_STORAGE_POLICY_FIELDS,
  secretMediationControls: constants.SECRET_MEDIATION_CONTROLS, networkSecurityControls: constants.EXTENSION_NETWORK_SECURITY_CONTROLS,
  inboundConnectivityControls: constants.INBOUND_CONNECTIVITY_CONTROLS, eventSecurityFields: constants.EXTENSION_EVENT_SECURITY_FIELDS,
  workflowAgentSecurityProhibitions: constants.WORKFLOW_AGENT_SECURITY_PROHIBITIONS, uiExtensionSecurityControls: constants.UI_EXTENSION_SECURITY_CONTROLS,
  mcpSecurityVerificationItems: constants.MCP_SECURITY_VERIFICATION_ITEMS, supplyChainAdmissionChecks: constants.SUPPLY_CHAIN_ADMISSION_CHECKS,
  resourceContainmentLimits: constants.RESOURCE_CONTAINMENT_LIMITS, failureContainmentControls: constants.EXTENSION_FAILURE_CONTAINMENT_CONTROLS,
  revocationTargets: constants.SECURITY_REVOCATION_TARGETS, incidentResponseSteps: constants.SECURITY_INCIDENT_RESPONSE_STEPS,
  securityEvidenceTypes: constants.CAPABILITY_SECURITY_EVIDENCE_TYPES, securityTestingAreas: constants.CAPABILITY_SECURITY_TESTING_AREAS,
  architecturalRules: constants.CAPABILITY_SECURITY_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  extensionsUntrustedByDefault: 'ARCH-019-05 requires extensions to be untrusted by default.',
  capabilityExplicitlyGrantedEnforceable: 'ARCH-019-05 requires capability to be explicitly granted and continuously enforceable.',
  tenantPropertyScopeMandatory: 'ARCH-019-05 requires tenant and property scope to be mandatory.',
  hostProviderDefenseInDepth: 'ARCH-019-05 requires host and provider controls to form defense in depth.',
  networkEgressDenyByDefault: 'ARCH-019-05 requires network egress to be deny by default.',
  dataUsePurposeClassificationRetentionBounded: 'ARCH-019-05 requires data use to be purpose, classification, and retention bounded.',
  executionStorageIsolatedByInstallation: 'ARCH-019-05 requires execution and storage to be isolated by installation.',
  delegationCannotExpandCapability: 'ARCH-019-05 requires delegation to never expand capability.',
  securityStateRevokesRapidly: 'ARCH-019-05 requires security state to be able to revoke active authority rapidly.',
  evidenceCompleteWithoutLeakage: 'ARCH-019-05 requires evidence to be complete without leaking secrets or tenant content.',
  noLayerBroadensStricterBound: 'ARCH-019-05 requires that no grant-derivation layer can broaden a stricter upstream bound.',
  hostValidationDoesNotReplaceProviderAuthorization: 'ARCH-019-05 requires host validation to never replace provider authorization.',
  responsesMinimizedToCapabilityPurpose: 'ARCH-019-05 requires data-access responses to be minimized to the capability purpose.',
  redirectsRevalidatedToPreventBypass: 'ARCH-019-05 requires redirects, alternate addresses, and dynamic resolution to be revalidated to prevent allowlist bypass.',
  toolDiscoveryFilteredByGrant: 'ARCH-019-05 requires MCP tool discovery to be filtered by current grant.',
  criticalAdvisoryCanDenyPreviouslyApprovedPackage: 'ARCH-019-05 requires critical advisory data to be able to deny execution even for a previously approved package.',
  crossTenantExposureTreatedAsMaterialEvent: 'ARCH-019-05 requires cross-tenant exposure to be treated as a material security and privacy event.'
});

const REQUIRED_FALSE = Object.freeze({
  ambientCredentialsOrDatabaseAccessPermitted: 'ARCH-019-05 prohibits ambient credentials or direct database access.',
  extensionsModifyHostPolicyOrInspectNeighbors: 'ARCH-019-05 prohibits extensions from modifying host policy or inspecting neighboring executions.',
  publisherAccessesStorageWithoutProcessorRelationship: 'ARCH-019-05 prohibits publisher access to extension storage without a separate declared processor relationship and authorization.',
  extensionsExposeArbitraryListeners: 'ARCH-019-05 prohibits extensions from exposing arbitrary listeners or controlling public routing directly.',
  publishersForgeTenantScope: 'ARCH-019-05 prohibits publishers from forging tenant scope in event grants.',
  serverDescriptionsModifyPolicy: 'ARCH-019-05 prohibits MCP server-provided descriptions from modifying policy.',
  extensionFailureAllowedInAuthoritativeTransaction: 'ARCH-019-05 prohibits extension failure inside an authoritative transaction unless the extension point explicitly defines safe, bounded semantics.',
  uiExtensionsRenderAuthPrompts: 'ARCH-019-05 prohibits UI extensions from rendering platform authentication prompts or capturing platform credentials.'
});

export class CapabilitySecurityIsolationDescriptor {
  securityPrinciples() { return values(METADATA.securityPrinciples); } threatModelItems() { return values(METADATA.threatModelItems); }
  capabilityGrantFields() { return values(METADATA.capabilityGrantFields); } grantDerivationLayers() { return values(METADATA.grantDerivationLayers); }
  capabilityGranularityExamples() { return values(METADATA.capabilityGranularityExamples); } runtimeIdentityFields() { return values(METADATA.runtimeIdentityFields); }
  tenantIsolationDimensions() { return values(METADATA.tenantIsolationDimensions); } hostIsolationClasses() { return values(METADATA.hostIsolationClasses); }
  hostSecurityControls() { return values(METADATA.hostSecurityControls); } providerEnforcementChecks() { return values(METADATA.providerEnforcementChecks); }
  dataAccessProhibitions() { return values(METADATA.dataAccessProhibitions); } extensionStoragePolicyFields() { return values(METADATA.extensionStoragePolicyFields); }
  secretMediationControls() { return values(METADATA.secretMediationControls); } networkSecurityControls() { return values(METADATA.networkSecurityControls); }
  inboundConnectivityControls() { return values(METADATA.inboundConnectivityControls); } eventSecurityFields() { return values(METADATA.eventSecurityFields); }
  workflowAgentSecurityProhibitions() { return values(METADATA.workflowAgentSecurityProhibitions); } uiExtensionSecurityControls() { return values(METADATA.uiExtensionSecurityControls); }
  mcpSecurityVerificationItems() { return values(METADATA.mcpSecurityVerificationItems); } supplyChainAdmissionChecks() { return values(METADATA.supplyChainAdmissionChecks); }
  resourceContainmentLimits() { return values(METADATA.resourceContainmentLimits); } failureContainmentControls() { return values(METADATA.failureContainmentControls); }
  revocationTargets() { return values(METADATA.revocationTargets); } incidentResponseSteps() { return values(METADATA.incidentResponseSteps); }
  securityEvidenceTypes() { return values(METADATA.securityEvidenceTypes); } securityTestingAreas() { return values(METADATA.securityTestingAreas); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof CapabilitySecurityIsolationProfile ? input : new CapabilitySecurityIsolationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Capability security and isolation profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Capability Security and Isolation must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.CAPABILITY_SECURITY_ISOLATION_ERROR_CODE, 'Capability Security and Isolation violates ARCH-019-05.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
