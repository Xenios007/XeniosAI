import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { ExtensionLifecycleDistributionCompatibilityProfile } from '../contracts/extension-lifecycle-distribution-compatibility-profile.js';
import * as constants from '../extension-lifecycle-distribution-compatibility-constants.js';

const METADATA = Object.freeze({
  lifecyclePrinciples: constants.EXTENSION_LIFECYCLE_PRINCIPLES, packageLifecycleStates: constants.PACKAGE_LIFECYCLE_STATES,
  installationLifecycleStates: constants.INSTALLATION_LIFECYCLE_STATES, designRegistrationFields: constants.EXTENSION_DESIGN_REGISTRATION_FIELDS,
  buildCandidateOutputs: constants.BUILD_CANDIDATE_OUTPUTS, validationReviewCoverage: constants.VALIDATION_REVIEW_COVERAGE,
  certificationFields: constants.PACKAGE_CERTIFICATION_FIELDS, publicationRequirements: constants.EXTENSION_PUBLICATION_REQUIREMENTS,
  installationRequestReviewItems: constants.INSTALLATION_REQUEST_REVIEW_ITEMS, installationAssessmentFactors: constants.INSTALLATION_ASSESSMENT_FACTORS,
  provisioningOutputs: constants.EXTENSION_PROVISIONING_OUTPUTS, tenantSpecificValidationChecks: constants.TENANT_SPECIFIC_VALIDATION_CHECKS,
  compatibilityDimensions: constants.EXTENSION_COMPATIBILITY_DIMENSIONS, compatibilityPolicyElements: constants.COMPATIBILITY_POLICY_ELEMENTS,
  updatePolicies: constants.EXTENSION_UPDATE_POLICIES, updateAssessmentDifferences: constants.UPDATE_ASSESSMENT_DIFFERENCES,
  stagedRolloutStages: constants.STAGED_ROLLOUT_STAGES, dataMigrationDeclarations: constants.PACKAGE_DATA_MIGRATION_DECLARATIONS,
  rollbackAccountingItems: constants.LIFECYCLE_ROLLBACK_ACCOUNTING_ITEMS, emergencySecurityActions: constants.EMERGENCY_SECURITY_ACTIONS,
  deprecationFields: constants.EXTENSION_DEPRECATION_FIELDS, uninstallSteps: constants.EXTENSION_UNINSTALL_STEPS,
  lifecycleReconciliationComparisons: constants.LIFECYCLE_RECONCILIATION_COMPARISONS, lifecycleEvidenceElements: constants.LIFECYCLE_EVIDENCE_ELEMENTS,
  architecturalRules: constants.EXTENSION_LIFECYCLE_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  packageInstallationLifecyclesIndependent: 'ARCH-019-04 requires package and installation lifecycles to remain independent.',
  lifecycleTransitionsAuthorizedWithEvidence: 'ARCH-019-04 requires lifecycle transitions to be authorized commands with evidence.',
  validationPrecedesPublicationActivation: 'ARCH-019-04 requires validation to precede publication and activation.',
  installationsResolveExactDigests: 'ARCH-019-04 requires installations to resolve exact package digests.',
  updatesRespectCompatibilityAndPolicy: 'ARCH-019-04 requires updates to respect compatibility and tenant policy.',
  automaticUpdatesBoundedReversible: 'ARCH-019-04 requires automatic updates to remain bounded and reversible where practical.',
  securitySuspensionOverridesReleasePolicy: 'ARCH-019-04 requires security suspension to be able to override ordinary release policy.',
  deprecationProvidesMigrationVisibility: 'ARCH-019-04 requires deprecation to provide migration and usage visibility.',
  uninstallRemovesAllAccessAndData: 'ARCH-019-04 requires uninstall to remove execution, access, credentials, schedules, and eligible data.',
  lifecycleStateReconciledAcrossCapabilities: 'ARCH-019-04 requires lifecycle state to be reconciled across registry, host, tenant, and marketplace capabilities.',
  registrationGrantsNoPublicationOrRuntimeAuthority: 'ARCH-019-04 requires extension registration to grant no publication or runtime authority.',
  resubmissionAfterChangeGetsNewDigest: 'ARCH-019-04 requires every resubmission after code or dependency change to receive a new digest and rerun affected controls.',
  hostRevalidatesAtExecution: 'ARCH-019-04 requires the host to revalidate current state at execution rather than relying solely on activation history.',
  newCapabilityRequiresRenewedApproval: 'ARCH-019-04 requires new or broadened capability to trigger renewed approval.',
  cohortsNeverMixTenantData: 'ARCH-019-04 requires staged rollout cohorts to never mix tenant data or grants.',
  uninstallRequiresProviderAcknowledgments: 'ARCH-019-04 requires uninstall completion to require provider acknowledgments.'
});

const REQUIRED_FALSE = Object.freeze({
  tenantPurchaseCompletesInstallationApproval: 'ARCH-019-04 prohibits tenant purchase or entitlement alone from completing installation approval.',
  listingReplacesArtifactsOrPermissions: 'ARCH-019-04 prohibits a listing from replacing package artifacts or changing runtime permissions.',
  listingRemovalSilentlyUninstalls: 'ARCH-019-04 prohibits listing removal from silently uninstalling existing instances.',
  automaticUpdateCrossesBreakingCompatibility: 'ARCH-019-04 prohibits automatic update from crossing declared breaking compatibility or new-capability consent without approval.',
  migrationsReadAnotherTenant: 'ARCH-019-04 prohibits migrations from reading another tenant or mutating authoritative domain data directly.',
  publisherDisappearanceTransfersOwnership: 'ARCH-019-04 prohibits publisher disappearance from transferring unrestricted ownership to the platform.',
  compatibilityIsSyntacticOnly: 'ARCH-019-04 prohibits treating compatibility as syntactic alone rather than behavioral.'
});

export class ExtensionLifecycleDistributionCompatibilityDescriptor {
  lifecyclePrinciples() { return values(METADATA.lifecyclePrinciples); } packageLifecycleStates() { return values(METADATA.packageLifecycleStates); }
  installationLifecycleStates() { return values(METADATA.installationLifecycleStates); } designRegistrationFields() { return values(METADATA.designRegistrationFields); }
  buildCandidateOutputs() { return values(METADATA.buildCandidateOutputs); } validationReviewCoverage() { return values(METADATA.validationReviewCoverage); }
  certificationFields() { return values(METADATA.certificationFields); } publicationRequirements() { return values(METADATA.publicationRequirements); }
  installationRequestReviewItems() { return values(METADATA.installationRequestReviewItems); } installationAssessmentFactors() { return values(METADATA.installationAssessmentFactors); }
  provisioningOutputs() { return values(METADATA.provisioningOutputs); } tenantSpecificValidationChecks() { return values(METADATA.tenantSpecificValidationChecks); }
  compatibilityDimensions() { return values(METADATA.compatibilityDimensions); } compatibilityPolicyElements() { return values(METADATA.compatibilityPolicyElements); }
  updatePolicies() { return values(METADATA.updatePolicies); } updateAssessmentDifferences() { return values(METADATA.updateAssessmentDifferences); }
  stagedRolloutStages() { return values(METADATA.stagedRolloutStages); } dataMigrationDeclarations() { return values(METADATA.dataMigrationDeclarations); }
  rollbackAccountingItems() { return values(METADATA.rollbackAccountingItems); } emergencySecurityActions() { return values(METADATA.emergencySecurityActions); }
  deprecationFields() { return values(METADATA.deprecationFields); } uninstallSteps() { return values(METADATA.uninstallSteps); }
  lifecycleReconciliationComparisons() { return values(METADATA.lifecycleReconciliationComparisons); } lifecycleEvidenceElements() { return values(METADATA.lifecycleEvidenceElements); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ExtensionLifecycleDistributionCompatibilityProfile ? input : new ExtensionLifecycleDistributionCompatibilityProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Extension lifecycle, distribution, and compatibility profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Extension Lifecycle, Distribution, and Compatibility must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.EXTENSION_LIFECYCLE_DISTRIBUTION_COMPATIBILITY_ERROR_CODE, 'Extension Lifecycle, Distribution, and Compatibility violates ARCH-019-04.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
