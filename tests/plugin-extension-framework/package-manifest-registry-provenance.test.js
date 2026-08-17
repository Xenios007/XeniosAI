import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { PACKAGE_MANIFEST_REGISTRY_PROVENANCE_ERROR_CODE, PACKAGE_PUBLICATION_STATES, SUPPLY_CHAIN_PRINCIPLES, PackageManifestRegistryProvenanceDescriptor, PackageManifestRegistryProvenanceProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['supplyChainPrinciples', 'packageContents', 'manifestFields', 'capabilityDeclarationTypes', 'dataHandlingDeclarationFields', 'configurationSchemaAttributes', 'entryPointFields', 'packageDependencyTypes', 'dependencyInventoryFields', 'extensionDependencyRequirements', 'publisherIdentityElements', 'publishingAuthorityControls', 'buildProvenanceLinks', 'supplyChainChecks', 'signatureVerificationChecks', 'keyLifecycleRequirements', 'extensionRegistryResponsibilities', 'registryBoundaries', 'registryNamespaceFields', 'packagePublicationStates', 'distributionVerificationChecks', 'packageAdvisoryFields', 'emergencyRevocationActions', 'registryRecoveryCoverage', 'supplyChainEvidenceTypes', 'architecturalRules'];

test('ARCH-019-03 exposes principle, manifest, and capability metadata', () => { const descriptor = new PackageManifestRegistryProvenanceDescriptor(); assert.ok(descriptor.supplyChainPrinciples().includes(SUPPLY_CHAIN_PRINCIPLES.NO_SECRETS_IN_PACKAGES)); assert.ok(descriptor.manifestFields().includes('secret-reference-requirements')); assert.ok(descriptor.capabilityDeclarationTypes().includes('resource-budget-class')); assert.ok(descriptor.dataHandlingDeclarationFields().includes('model-training-or-improvement-use-if-any')); });

test('ARCH-019-03 exposes provenance, build, and registry metadata', () => { const descriptor = new PackageManifestRegistryProvenanceDescriptor(); assert.ok(descriptor.buildProvenanceLinks().includes('builder-and-workflow-identity')); assert.ok(descriptor.supplyChainChecks().includes('malware-and-behavior-analysis')); assert.ok(descriptor.extensionRegistryResponsibilities().includes('advisory-and-vulnerability-associations')); assert.ok(descriptor.packagePublicationStates().includes(PACKAGE_PUBLICATION_STATES.RETIRED)); });

test('ARCH-019-03 exposes advisory, revocation, and evidence metadata', () => { const descriptor = new PackageManifestRegistryProvenanceDescriptor(); assert.ok(descriptor.packageAdvisoryFields().includes('publication-and-embargo-policy')); assert.ok(descriptor.emergencyRevocationActions().includes('terminate-or-quarantine-active-executions')); assert.ok(descriptor.registryRecoveryCoverage().includes('read-only-degraded-behavior')); assert.ok(descriptor.supplyChainEvidenceTypes().includes('advisory-matching')); });

test('ARCH-019-03 validates profiles and rejects supply-chain shortcuts', () => {
  const descriptor = new PackageManifestRegistryProvenanceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ publishedPackageVersionImmutable: false, unavailableRegistryFailsClosed: false, floatingProductionDependenciesAllowed: true, revokedBytesRemainExecutable: true, validSignatureReplacesCapabilityEnforcement: true, localUnauditedPublicationAllowedForHighRisk: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /published package version to be immutable/);
  assert.match(validation.errors.join('\n'), /acceptance of an unknown package/);
  assert.match(validation.errors.join('\n'), /floating production dependencies/);
  assert.match(validation.errors.join('\n'), /bytes remain retained/);
  assert.match(validation.errors.join('\n'), /replacing capability enforcement/);
  assert.match(validation.errors.join('\n'), /unaudited production publication/);
});

test('ARCH-019-03 detects incomplete package, manifest, registry, and provenance metadata', () => { class IncompleteDescriptor extends PackageManifestRegistryProvenanceDescriptor { packagePublicationStates() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === PACKAGE_MANIFEST_REGISTRY_PROVENANCE_ERROR_CODE); });

test('ARCH-019-03 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('PackageManifestRegistryProvenanceDescriptor');
  assert.ok(descriptor instanceof PackageManifestRegistryProvenanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.packagePublicationStates.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new PackageManifestRegistryProvenanceProfile({ profileName: 'Package, Manifest, Registry, and Provenance', ...metadata }); }
