import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { ExtensionDomainClassificationProfile } from '../contracts/extension-domain-classification-profile.js';
import * as constants from '../extension-domain-classification-constants.js';

const METADATA = Object.freeze({
  domainPrinciples: constants.EXTENSION_DOMAIN_PRINCIPLES, coreAggregates: constants.EXTENSION_CORE_AGGREGATES,
  supportingEntities: constants.EXTENSION_SUPPORTING_ENTITIES, packageCoordinateFields: constants.PACKAGE_COORDINATE_FIELDS,
  contributionClasses: constants.EXTENSION_CONTRIBUTION_CLASSES, publisherClassifications: constants.EXTENSION_PUBLISHER_CLASSIFICATIONS,
  riskClassificationLevels: constants.EXTENSION_RISK_CLASSIFICATION_LEVELS, extensionPointCategories: constants.EXTENSION_POINT_CATEGORIES,
  extensionPointOwnershipResponsibilities: constants.EXTENSION_POINT_OWNERSHIP_RESPONSIBILITIES,
  compositionModels: constants.EXTENSION_COMPOSITION_MODELS, authorityValidationChecks: constants.EXTENSION_AUTHORITY_VALIDATION_CHECKS,
  installationScopeOptions: constants.EXTENSION_INSTALLATION_SCOPE_OPTIONS, extensionOwnedDataFields: constants.EXTENSION_OWNED_DATA_FIELDS,
  dependencyTypes: constants.EXTENSION_DEPENDENCY_TYPES, relationshipModelItems: constants.EXTENSION_RELATIONSHIP_MODEL_ITEMS,
  domainEvents: constants.EXTENSION_DOMAIN_EVENTS, domainInvariants: constants.EXTENSION_DOMAIN_INVARIANTS,
  serviceBoundaries: constants.EXTENSION_SERVICE_BOUNDARIES, failureBoundaries: constants.EXTENSION_FAILURE_BOUNDARIES,
  governanceOwnershipObjects: constants.EXTENSION_GOVERNANCE_OWNERSHIP_OBJECTS, architecturalRules: constants.EXTENSION_DOMAIN_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  extensionIdentityStableAcrossVersions: 'ARCH-019-02 requires extension identity to be stable across package versions.',
  packageVersionsImmutable: 'ARCH-019-02 requires package versions to be immutable.',
  listingsSeparateFromRegistryIdentity: 'ARCH-019-02 requires marketplace listings to be separate from registry identity.',
  installationsScopedAggregates: 'ARCH-019-02 requires installations to be tenant- or platform-scoped aggregates.',
  grantsSeparateFromManifestRequests: 'ARCH-019-02 requires capability grants to be separate from manifest requests.',
  executionsAttributableToInstallationAndVersion: 'ARCH-019-02 requires executions to be attributable to an installation and package version.',
  extensionPointOwnersRetainDomainAuthority: 'ARCH-019-02 requires extension-point owners to retain domain authority.',
  riskClassificationChangesControlsNotOwnership: 'ARCH-019-02 requires risk classification to change controls, not business ownership.',
  historicalLifecyclePreserved: 'ARCH-019-02 requires historical lifecycle and ownership to be preserved.',
  installationsLockToExactDigest: 'ARCH-019-02 requires installations to lock to an exact package digest.',
  dependenciesDeclaredNotSilent: 'ARCH-019-02 requires dependencies to be declared and resolved before activation, never installed silently.',
  domainEventsCarryMinimalSensitiveMetadata: 'ARCH-019-02 requires domain events to carry minimal sensitive metadata.',
  platformWideCapabilitiesRestrictedAndGoverned: 'ARCH-019-02 requires platform-wide capabilities to be restricted and separately governed.',
  ownershipTransferRequiresVerifiedReview: 'ARCH-019-02 requires publisher ownership transfer to use verified parties, rights review, signing transition, tenant notification, and preserved history.',
  undefinedOrderingProhibitedForSideEffects: 'ARCH-019-02 prohibits undefined composition ordering where side effects or conflicting results are possible.',
  extensionFailureContainedFromAuthoritativeState: 'ARCH-019-02 requires extension failure to never corrupt registry, installation, grant, or authoritative domain state.'
});

const REQUIRED_FALSE = Object.freeze({
  relationshipsGrantImplicitAccess: 'ARCH-019-02 prohibits relationships from granting implicit access.',
  publisherOwnershipGrantsAccessToTenantData: 'ARCH-019-02 prohibits publisher ownership from granting access to tenant extension data without a declared authorized processor relationship.',
  tenantWideInstallationExposesAllData: 'ARCH-019-02 prohibits tenant-wide installation from automatically exposing all tenant data.',
  installingOneExtensionImplicitlyInstallsAnother: 'ARCH-019-02 prohibits installing one extension from implicitly installing or authorizing another.',
  listingDeterminesRuntimeState: 'ARCH-019-02 prohibits a listing from determining runtime state.',
  extensionOwnsDataOutsideBoundedScope: 'ARCH-019-02 prohibits an extension from owning authoritative domain data outside its declared bounded data.',
  possessionOfHandleIsAuthorization: 'ARCH-019-02 prohibits possession of an extension point handle from being treated as authorization.',
  serviceReadsAnotherServiceDatabase: 'ARCH-019-02 prohibits a service from reading another service’s database.',
  revokedPackageStartsNewExecutions: 'ARCH-019-02 prohibits a revoked package from starting new executions.',
  firstPartyWaivesControls: 'ARCH-019-02 prohibits first-party status from waiving package, capability, isolation, compatibility, or operational controls.'
});

export class ExtensionDomainClassificationDescriptor {
  domainPrinciples() { return values(METADATA.domainPrinciples); } coreAggregates() { return values(METADATA.coreAggregates); }
  supportingEntities() { return values(METADATA.supportingEntities); } packageCoordinateFields() { return values(METADATA.packageCoordinateFields); }
  contributionClasses() { return values(METADATA.contributionClasses); } publisherClassifications() { return values(METADATA.publisherClassifications); }
  riskClassificationLevels() { return values(METADATA.riskClassificationLevels); } extensionPointCategories() { return values(METADATA.extensionPointCategories); }
  extensionPointOwnershipResponsibilities() { return values(METADATA.extensionPointOwnershipResponsibilities); }
  compositionModels() { return values(METADATA.compositionModels); } authorityValidationChecks() { return values(METADATA.authorityValidationChecks); }
  installationScopeOptions() { return values(METADATA.installationScopeOptions); } extensionOwnedDataFields() { return values(METADATA.extensionOwnedDataFields); }
  dependencyTypes() { return values(METADATA.dependencyTypes); } relationshipModelItems() { return values(METADATA.relationshipModelItems); }
  domainEvents() { return values(METADATA.domainEvents); } domainInvariants() { return values(METADATA.domainInvariants); }
  serviceBoundaries() { return values(METADATA.serviceBoundaries); } failureBoundaries() { return values(METADATA.failureBoundaries); }
  governanceOwnershipObjects() { return values(METADATA.governanceOwnershipObjects); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ExtensionDomainClassificationProfile ? input : new ExtensionDomainClassificationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Extension domain and classification profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Extension Domain and Classification must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.EXTENSION_DOMAIN_CLASSIFICATION_ERROR_CODE, 'Extension Domain and Classification violates ARCH-019-02.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
