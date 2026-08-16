import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CANONICAL_KNOWLEDGE_MODEL,
  KNOWLEDGE_LIFECYCLE_ERROR_CODE,
  KNOWLEDGE_LIFECYCLE_RULES,
  KNOWLEDGE_LIFECYCLE_STATES,
  KNOWLEDGE_PUBLICATION_CHANNELS,
  KNOWLEDGE_REPRESENTATION_STATES,
  KNOWLEDGE_SOURCE_LIFECYCLE_STATES,
  KnowledgeLifecycleDescriptor,
  KnowledgeLifecycleProfile,
  addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-02 exposes canonical identities and lifecycle semantics', () => {
  const descriptor = new KnowledgeLifecycleDescriptor();
  assert.deepEqual(descriptor.canonicalModel(), Object.values(CANONICAL_KNOWLEDGE_MODEL));
  assert.ok(descriptor.sourceLifecycleStates().includes(KNOWLEDGE_SOURCE_LIFECYCLE_STATES.WITHDRAWN));
  assert.deepEqual(descriptor.lifecycleStates(), Object.values(KNOWLEDGE_LIFECYCLE_STATES));
  assert.ok(descriptor.lifecycleStates().includes(KNOWLEDGE_LIFECYCLE_STATES.QUARANTINED));
});

test('ARCH-016-02 exposes publication, representation, and authority boundaries', () => {
  const descriptor = new KnowledgeLifecycleDescriptor();
  assert.ok(descriptor.publicationChannels().includes(KNOWLEDGE_PUBLICATION_CHANNELS.AGENT));
  assert.ok(descriptor.representationStates().includes(KNOWLEDGE_REPRESENTATION_STATES.INVALIDATED));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_LIFECYCLE_RULES.DECISION_SEPARATION));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_LIFECYCLE_RULES.REGISTRY_AUTHORITY));
});

test('ARCH-016-02 validates profiles and rejects lifecycle shortcuts', () => {
  const descriptor = new KnowledgeLifecycleDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'domainOwnershipExplicit', 'sourcesRegistered', 'stableIdentities', 'distinctVersionTypes',
    'contextualAuthority', 'explicitEligibility', 'publishedVersionsImmutable',
    'materialChangesVersioned', 'provenanceComplete', 'canonicalDerivedSeparated',
    'aiContentDerived', 'tenantPropertyIsolation', 'inheritanceGoverned',
    'approvalPublicationActivationSeparated', 'representationReadinessRequired',
    'inactiveStatesExcluded', 'historicalCitationsPreserved', 'lifecyclePropagation',
    'registryLifecycleAuthority', 'indexesRebuildable', 'citationsLifecycleAware',
    'correctionVersioned', 'retentionAssetSpecific', 'tombstonesMinimal',
    'legalHoldNotCurrentUse', 'transitionsIdempotent', 'lifecycleReconciled',
    'evidenceProduced', 'versionedContracts', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'ingestionMakesActive', 'indexIsAuthority', 'sourcePopularityCreatesAuthority',
    'publishedVersionMutable', 'approvalMeansPublication', 'publicationMeansActivation',
    'representationOverridesLifecycle', 'citationSilentlyRedirects',
    'suspensionLeavesRepresentationsActive', 'deletionLeavesContent', 'legalHoldMakesCurrent',
    'technicalCustodyCreatesAuthority', 'tenantContentOverridesScope', 'directDatabaseAccess',
    'selectsStorageProduct', 'definesAdjacentLifecycles'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /knowledge-item-version/);
  assert.match(validation.errors.join('\n'), /requires publishedVersionsImmutable/);
  assert.match(validation.errors.join('\n'), /prohibits indexIsAuthority/);
});

test('ARCH-016-02 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeLifecycleDescriptor {
    lifecycleStates() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_LIFECYCLE_ERROR_CODE
  );
});

test('ARCH-016-02 profile is immutable', () => {
  const profile = complete(new KnowledgeLifecycleDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.lifecycleStates.push('other'), TypeError);
});

test('ARCH-016-02 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeLifecycleDescriptor');
  assert.ok(descriptor instanceof KnowledgeLifecycleDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'canonicalModel', 'sourceLifecycleStates', 'authorityClasses', 'scopeTypes',
    'lifecycleStates', 'publicationChannels', 'representationStates', 'lifecycleApis',
    'lifecycleEvents', 'operations', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeLifecycleProfile({ profileName: 'Knowledge Lifecycle', ...metadata });
}
