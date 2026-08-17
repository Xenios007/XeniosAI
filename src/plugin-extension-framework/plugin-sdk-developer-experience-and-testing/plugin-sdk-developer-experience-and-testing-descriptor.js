import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { PluginSdkDeveloperExperienceAndTestingProfile } from '../contracts/plugin-sdk-developer-experience-and-testing-profile.js';
import * as constants from '../plugin-sdk-developer-experience-and-testing-constants.js';

const METADATA = Object.freeze({
  developerExperiencePrinciples: constants.DEVELOPER_EXPERIENCE_PRINCIPLES, sdkScopeItems: constants.PLUGIN_SDK_SCOPE_ITEMS,
  sdkLayers: constants.SDK_LAYERS, sdkProhibitedBehaviors: constants.SDK_PROHIBITED_BEHAVIORS,
  languageSdkReleaseDeclarations: constants.LANGUAGE_SDK_RELEASE_DECLARATIONS, sdkGenerationProperties: constants.SDK_GENERATION_PROPERTIES,
  developerPortalCapabilities: constants.DEVELOPER_PORTAL_CAPABILITIES, extensionPointCatalogFields: constants.EXTENSION_POINT_CATALOG_FIELDS,
  projectTemplateElements: constants.PROJECT_TEMPLATE_ELEMENTS, localSandboxEmulations: constants.LOCAL_SANDBOX_EMULATIONS,
  testTenantRequirements: constants.TEST_TENANT_REQUIREMENTS, unitTestingCoverageAreas: constants.UNIT_TESTING_COVERAGE_AREAS,
  contractTestingAreas: constants.CONTRACT_TESTING_AREAS, integrationTestingAreas: constants.INTEGRATION_TESTING_AREAS,
  securityTestingRequirements: constants.SECURITY_TESTING_REQUIREMENTS, failureTestingScenarios: constants.FAILURE_TESTING_SCENARIOS,
  compatibilityTestingDimensions: constants.COMPATIBILITY_TESTING_DIMENSIONS, uninstallTestingRequirements: constants.UNINSTALL_TESTING_REQUIREMENTS,
  conformanceProfileResultFields: constants.CONFORMANCE_PROFILE_RESULT_FIELDS, developerWorkflowSteps: constants.DEVELOPER_WORKFLOW_STEPS,
  packagingToolingCapabilities: constants.PACKAGING_TOOLING_CAPABILITIES, publishingToolingBehaviors: constants.PUBLISHING_TOOLING_BEHAVIORS,
  documentationRequirements: constants.DOCUMENTATION_REQUIREMENTS, referenceExtensionExamples: constants.REFERENCE_EXTENSION_EXAMPLES,
  developerObservabilityElements: constants.DEVELOPER_OBSERVABILITY_ELEMENTS, sdkLifecycleFields: constants.SDK_LIFECYCLE_FIELDS,
  architecturalRules: constants.SDK_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  pavedRoadFasterThanPrivateIntegrationShortcuts: 'ARCH-019-07 requires the paved road to be faster than private integration shortcuts.',
  sdkTracesToCanonicalContractsWithoutHiddenAuthority: 'ARCH-019-07 requires SDKs to trace to canonical contracts and not create hidden authority.',
  localDevelopmentBehavesLikeHostForCapabilityAndTenantRules: 'ARCH-019-07 requires local development to behave like the host for capability and tenant rules.',
  everyPackagePassesApplicableMultiTenantSecurityFailureCompatibilityTests: 'ARCH-019-07 requires every package to pass applicable multi-tenant, security, failure, and compatibility tests.',
  buildArtifactsHaveExactDigestsInventoriesProvenance: 'ARCH-019-07 requires build artifacts to have exact digests, inventories, and provenance.',
  publishingSeparatesPackageSubmissionFromTenantInstallation: 'ARCH-019-07 requires publishing to separate package submission from tenant installation.',
  documentationCoversOperationSupportUpdateUninstall: 'ARCH-019-07 requires documentation to cover operation, support, update, and uninstall.',
  developerFeedbackHasAccountableOwnersVisibleLifecycle: 'ARCH-019-07 requires developer feedback to have accountable owners and a visible lifecycle.',
  generatedCodeSeparatedFromHandwrittenAndRegenerationCompatible: 'ARCH-019-07 requires generated code to be clearly separated from handwritten code and compatible with regeneration.',
  manualEditsToGeneratedFilesProhibitedOrIsolated: 'ARCH-019-07 requires manual edits to generated files to be prohibited or isolated in supported extension layers.',
  undocumentedInternalEndpointsNotShownAsSupportedExtensionPoints: 'ARCH-019-07 requires undocumented internal endpoints to never be shown as supported extension points.',
  templatesDefaultToMinimalCapabilityDenyByDefaultNetwork: 'ARCH-019-07 requires templates to default to minimal capability and deny-by-default network access.',
  publishersCannotSelfDeclareHigherCertificationThanVerifiedResult: 'ARCH-019-07 requires publishers to be unable to self-declare a higher certification than the verified result.',
  publishingToolsNeverAcceptProductionCredentialsOrCreateRuntimeGrants: 'ARCH-019-07 requires publishing tools to never accept production tenant credentials or create runtime capability grants.',
  failedReviewReturnsMachineAndHumanReadableRemediationGuidance: 'ARCH-019-07 requires failed review to return machine-readable and human-readable remediation guidance.',
  cliHistoryBuildLogsExamplesDiagnosticsRedactSecrets: 'ARCH-019-07 requires CLI history, build logs, examples, and generated diagnostics to redact secrets.'
});

const REQUIRED_FALSE = Object.freeze({
  developmentToolsUseProductionTenantCredentials: 'ARCH-019-07 prohibits developer tools from using production tenant credentials instead of developer identities and short-lived sandbox credentials.',
  sandboxContainsProductionCredentialsOrNetworkPathByDefault: 'ARCH-019-07 prohibits the local sandbox from containing production credentials or a production network path by default.',
  singleTenantSuccessDemonstratesIsolation: 'ARCH-019-07 prohibits treating single-tenant success as a demonstration of isolation.',
  credentialsBundledInToolsOrTemplates: 'ARCH-019-07 prohibits credentials from being bundled in tools or templates.',
  languageConvenienceWeakensCapabilityOrTenantContext: 'ARCH-019-07 prohibits language convenience from weakening capability or tenant context.',
  productionDataCopiedToDeveloperSandboxesWithoutApprovedControls: 'ARCH-019-07 prohibits production data from being copied to developer sandboxes without explicit approved controls.',
  developersCanQueryOtherPublishersPrivateEvidence: 'ARCH-019-07 prohibits developers from querying other publishers’ private evidence.',
  extensionPointOwnersCreatePrivateExceptionsForIndividualPublishers: 'ARCH-019-07 prohibits extension-point owners from creating private contract exceptions for individual publishers.',
  oldSdkUseExemptFromSupportedVersionCertificationRequirement: 'ARCH-019-07 prohibits old SDK use from being exempt from a certification requirement for a supported version.',
  languageParityRequiresIdenticalApiShape: 'ARCH-019-07 prohibits requiring identical API shape across languages instead of measuring parity by behavior.',
  sdkReleasesOmitSupportWindowOrMigrationGuidance: 'ARCH-019-07 prohibits SDK releases from omitting support window or migration guidance.'
});

export class PluginSdkDeveloperExperienceAndTestingDescriptor {
  developerExperiencePrinciples() { return values(METADATA.developerExperiencePrinciples); } sdkScopeItems() { return values(METADATA.sdkScopeItems); }
  sdkLayers() { return values(METADATA.sdkLayers); } sdkProhibitedBehaviors() { return values(METADATA.sdkProhibitedBehaviors); }
  languageSdkReleaseDeclarations() { return values(METADATA.languageSdkReleaseDeclarations); } sdkGenerationProperties() { return values(METADATA.sdkGenerationProperties); }
  developerPortalCapabilities() { return values(METADATA.developerPortalCapabilities); } extensionPointCatalogFields() { return values(METADATA.extensionPointCatalogFields); }
  projectTemplateElements() { return values(METADATA.projectTemplateElements); } localSandboxEmulations() { return values(METADATA.localSandboxEmulations); }
  testTenantRequirements() { return values(METADATA.testTenantRequirements); } unitTestingCoverageAreas() { return values(METADATA.unitTestingCoverageAreas); }
  contractTestingAreas() { return values(METADATA.contractTestingAreas); } integrationTestingAreas() { return values(METADATA.integrationTestingAreas); }
  securityTestingRequirements() { return values(METADATA.securityTestingRequirements); } failureTestingScenarios() { return values(METADATA.failureTestingScenarios); }
  compatibilityTestingDimensions() { return values(METADATA.compatibilityTestingDimensions); } uninstallTestingRequirements() { return values(METADATA.uninstallTestingRequirements); }
  conformanceProfileResultFields() { return values(METADATA.conformanceProfileResultFields); } developerWorkflowSteps() { return values(METADATA.developerWorkflowSteps); }
  packagingToolingCapabilities() { return values(METADATA.packagingToolingCapabilities); } publishingToolingBehaviors() { return values(METADATA.publishingToolingBehaviors); }
  documentationRequirements() { return values(METADATA.documentationRequirements); } referenceExtensionExamples() { return values(METADATA.referenceExtensionExamples); }
  developerObservabilityElements() { return values(METADATA.developerObservabilityElements); } sdkLifecycleFields() { return values(METADATA.sdkLifecycleFields); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof PluginSdkDeveloperExperienceAndTestingProfile ? input : new PluginSdkDeveloperExperienceAndTestingProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Plugin SDK, Developer Experience, and Testing profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Plugin SDK, Developer Experience, and Testing must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.PLUGIN_SDK_DEVELOPER_EXPERIENCE_AND_TESTING_ERROR_CODE, 'Plugin SDK, Developer Experience, and Testing violates ARCH-019-07.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
