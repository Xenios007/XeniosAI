import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { PackageManifestRegistryProvenanceProfile } from '../contracts/package-manifest-registry-provenance-profile.js';
import * as constants from '../package-manifest-registry-provenance-constants.js';

const METADATA = Object.freeze({
  supplyChainPrinciples: constants.SUPPLY_CHAIN_PRINCIPLES, packageContents: constants.PACKAGE_CONTENTS,
  manifestFields: constants.MANIFEST_FIELDS, capabilityDeclarationTypes: constants.CAPABILITY_DECLARATION_TYPES,
  dataHandlingDeclarationFields: constants.DATA_HANDLING_DECLARATION_FIELDS, configurationSchemaAttributes: constants.CONFIGURATION_SCHEMA_ATTRIBUTES,
  entryPointFields: constants.ENTRY_POINT_FIELDS, packageDependencyTypes: constants.PACKAGE_DEPENDENCY_TYPES,
  dependencyInventoryFields: constants.DEPENDENCY_INVENTORY_FIELDS, extensionDependencyRequirements: constants.EXTENSION_DEPENDENCY_REQUIREMENTS,
  publisherIdentityElements: constants.PUBLISHER_IDENTITY_ELEMENTS, publishingAuthorityControls: constants.PUBLISHING_AUTHORITY_CONTROLS,
  buildProvenanceLinks: constants.BUILD_PROVENANCE_LINKS, supplyChainChecks: constants.SUPPLY_CHAIN_CHECKS,
  signatureVerificationChecks: constants.SIGNATURE_VERIFICATION_CHECKS, keyLifecycleRequirements: constants.KEY_LIFECYCLE_REQUIREMENTS,
  extensionRegistryResponsibilities: constants.EXTENSION_REGISTRY_RESPONSIBILITIES, registryBoundaries: constants.REGISTRY_BOUNDARIES,
  registryNamespaceFields: constants.REGISTRY_NAMESPACE_FIELDS, packagePublicationStates: constants.PACKAGE_PUBLICATION_STATES,
  distributionVerificationChecks: constants.DISTRIBUTION_VERIFICATION_CHECKS, packageAdvisoryFields: constants.PACKAGE_ADVISORY_FIELDS,
  emergencyRevocationActions: constants.EMERGENCY_REVOCATION_ACTIONS, registryRecoveryCoverage: constants.REGISTRY_RECOVERY_COVERAGE,
  supplyChainEvidenceTypes: constants.SUPPLY_CHAIN_EVIDENCE_TYPES, architecturalRules: constants.SUPPLY_CHAIN_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  publishedPackageVersionImmutable: 'ARCH-019-03 requires a published package version to be immutable.',
  packageIdentityBoundToDigest: 'ARCH-019-03 requires package identity to be bound to an integrity digest.',
  manifestsDeclareIntentNoAuthority: 'ARCH-019-03 requires manifests to declare intent without conferring authority.',
  publisherRuntimeIdentitySeparate: 'ARCH-019-03 requires publisher identity and runtime identity to remain separate.',
  provenanceTraceableSourceToDistribution: 'ARCH-019-03 requires provenance to be traceable from source through build and distribution.',
  dependenciesExplicitInspectableRiskManaged: 'ARCH-019-03 requires dependencies to be explicit, inspectable, and risk managed.',
  signaturesProveIntegrityNotBehavior: 'ARCH-019-03 requires signatures to prove association and integrity, not safe behavior.',
  registriesAuthoritativeForStatus: 'ARCH-019-03 requires registries to be authoritative for package status.',
  distributionVerifiesExactDigest: 'ARCH-019-03 requires distribution to verify exact digests.',
  vulnerablePackagesQuicklyActionable: 'ARCH-019-03 requires vulnerable packages to be matched, suspended, rebuilt, and revoked quickly.',
  secretsNeverInPackagesOrProvenance: 'ARCH-019-03 requires secrets to never enter packages or provenance records.',
  unknownMandatoryFieldsFailValidation: 'ARCH-019-03 requires unknown mandatory manifest fields to fail validation.',
  undeclaredEntryPointsNotLoaded: 'ARCH-019-03 requires undeclared entry points to never be loaded or invoked.',
  dependenciesDoNotInheritCapabilities: 'ARCH-019-03 requires each installed extension to receive its own grant, not inherited capabilities.',
  privatePackagesRetainSameControls: 'ARCH-019-03 requires private packages to retain the same manifest, supply-chain, host, and capability controls.',
  unavailableRegistryFailsClosed: 'ARCH-019-03 requires an unavailable registry to never cause acceptance of an unknown package.'
});

const REQUIRED_FALSE = Object.freeze({
  undeclaredDataCollectionPermitted: 'ARCH-019-03 treats undeclared data collection or transfer as a policy violation and potential incident.',
  floatingProductionDependenciesAllowed: 'ARCH-019-03 prohibits floating production dependencies.',
  similarNamesImplyCommonOwnership: 'ARCH-019-03 prohibits similar display names from implying common ownership.',
  privateLocationReducesControls: 'ARCH-019-03 prohibits a private location from reducing host or capability controls.',
  revokedBytesRemainExecutable: 'ARCH-019-03 prohibits revoked packages from being executable merely because their bytes remain retained.',
  validSignatureReplacesCapabilityEnforcement: 'ARCH-019-03 prohibits a valid signature from replacing capability enforcement or behavioral testing.',
  localUnauditedPublicationAllowedForHighRisk: 'ARCH-019-03 prohibits local, unaudited production publication for moderate-, high-, or restricted-risk packages.'
});

export class PackageManifestRegistryProvenanceDescriptor {
  supplyChainPrinciples() { return values(METADATA.supplyChainPrinciples); } packageContents() { return values(METADATA.packageContents); }
  manifestFields() { return values(METADATA.manifestFields); } capabilityDeclarationTypes() { return values(METADATA.capabilityDeclarationTypes); }
  dataHandlingDeclarationFields() { return values(METADATA.dataHandlingDeclarationFields); } configurationSchemaAttributes() { return values(METADATA.configurationSchemaAttributes); }
  entryPointFields() { return values(METADATA.entryPointFields); } packageDependencyTypes() { return values(METADATA.packageDependencyTypes); }
  dependencyInventoryFields() { return values(METADATA.dependencyInventoryFields); } extensionDependencyRequirements() { return values(METADATA.extensionDependencyRequirements); }
  publisherIdentityElements() { return values(METADATA.publisherIdentityElements); } publishingAuthorityControls() { return values(METADATA.publishingAuthorityControls); }
  buildProvenanceLinks() { return values(METADATA.buildProvenanceLinks); } supplyChainChecks() { return values(METADATA.supplyChainChecks); }
  signatureVerificationChecks() { return values(METADATA.signatureVerificationChecks); } keyLifecycleRequirements() { return values(METADATA.keyLifecycleRequirements); }
  extensionRegistryResponsibilities() { return values(METADATA.extensionRegistryResponsibilities); } registryBoundaries() { return values(METADATA.registryBoundaries); }
  registryNamespaceFields() { return values(METADATA.registryNamespaceFields); } packagePublicationStates() { return values(METADATA.packagePublicationStates); }
  distributionVerificationChecks() { return values(METADATA.distributionVerificationChecks); } packageAdvisoryFields() { return values(METADATA.packageAdvisoryFields); }
  emergencyRevocationActions() { return values(METADATA.emergencyRevocationActions); } registryRecoveryCoverage() { return values(METADATA.registryRecoveryCoverage); }
  supplyChainEvidenceTypes() { return values(METADATA.supplyChainEvidenceTypes); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof PackageManifestRegistryProvenanceProfile ? input : new PackageManifestRegistryProvenanceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Package, manifest, registry, and provenance profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Package, Manifest, Registry, and Provenance must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.PACKAGE_MANIFEST_REGISTRY_PROVENANCE_ERROR_CODE, 'Package, Manifest, Registry, and Provenance violates ARCH-019-03.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
