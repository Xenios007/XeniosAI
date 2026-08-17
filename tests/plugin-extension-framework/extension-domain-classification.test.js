import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { EXTENSION_CONTRIBUTION_CLASSES, EXTENSION_DOMAIN_CLASSIFICATION_ERROR_CODE, EXTENSION_DOMAIN_EVENTS, EXTENSION_RISK_CLASSIFICATION_LEVELS, ExtensionDomainClassificationDescriptor, ExtensionDomainClassificationProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['domainPrinciples', 'coreAggregates', 'supportingEntities', 'packageCoordinateFields', 'contributionClasses', 'publisherClassifications', 'riskClassificationLevels', 'extensionPointCategories', 'extensionPointOwnershipResponsibilities', 'compositionModels', 'authorityValidationChecks', 'installationScopeOptions', 'extensionOwnedDataFields', 'dependencyTypes', 'relationshipModelItems', 'domainEvents', 'domainInvariants', 'serviceBoundaries', 'failureBoundaries', 'governanceOwnershipObjects', 'architecturalRules'];

test('ARCH-019-02 exposes aggregate, entity, and classification metadata', () => { const descriptor = new ExtensionDomainClassificationDescriptor(); assert.ok(descriptor.coreAggregates().includes('publisher-aggregate')); assert.ok(descriptor.contributionClasses().includes(EXTENSION_CONTRIBUTION_CLASSES.DEVICE)); assert.ok(descriptor.riskClassificationLevels().includes(EXTENSION_RISK_CLASSIFICATION_LEVELS.RESTRICTED)); assert.ok(descriptor.publisherClassifications().includes('tenant-developed')); });

test('ARCH-019-02 exposes extension-point, composition, and installation metadata', () => { const descriptor = new ExtensionDomainClassificationDescriptor(); assert.ok(descriptor.extensionPointCategories().includes('agent-tools-or-skills')); assert.ok(descriptor.compositionModels().includes('policy-selected-provider')); assert.ok(descriptor.authorityValidationChecks().includes('acting-user-service-workflow-or-agent-authority')); assert.ok(descriptor.installationScopeOptions().includes('a-tenant-organizational-unit')); });

test('ARCH-019-02 exposes event, invariant, and governance metadata', () => { const descriptor = new ExtensionDomainClassificationDescriptor(); assert.ok(descriptor.domainEvents().includes(EXTENSION_DOMAIN_EVENTS.EXTENSION_RETIRED)); assert.ok(descriptor.domainInvariants().includes('a-revoked-package-cannot-start-new-executions')); assert.ok(descriptor.serviceBoundaries().includes('advisory-and-revocation-service')); assert.ok(descriptor.governanceOwnershipObjects().includes('runtime-host')); });

test('ARCH-019-02 validates profiles and rejects domain shortcuts', () => {
  const descriptor = new ExtensionDomainClassificationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ packageVersionsImmutable: false, installationsLockToExactDigest: false, listingDeterminesRuntimeState: true, revokedPackageStartsNewExecutions: true, firstPartyWaivesControls: true, relationshipsGrantImplicitAccess: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /package versions to be immutable/);
  assert.match(validation.errors.join('\n'), /lock to an exact package digest/);
  assert.match(validation.errors.join('\n'), /listing from determining runtime state/);
  assert.match(validation.errors.join('\n'), /revoked package from starting new executions/);
  assert.match(validation.errors.join('\n'), /first-party status from waiving/);
  assert.match(validation.errors.join('\n'), /relationships from granting implicit access/);
});

test('ARCH-019-02 detects incomplete extension domain and classification metadata', () => { class IncompleteDescriptor extends ExtensionDomainClassificationDescriptor { contributionClasses() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === EXTENSION_DOMAIN_CLASSIFICATION_ERROR_CODE); });

test('ARCH-019-02 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('ExtensionDomainClassificationDescriptor');
  assert.ok(descriptor instanceof ExtensionDomainClassificationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.contributionClasses.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ExtensionDomainClassificationProfile({ profileName: 'Extension Domain and Classification', ...metadata }); }
