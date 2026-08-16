import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  KNOWLEDGE_MEMORY_API_CAPABILITIES, KNOWLEDGE_MEMORY_EVENT_DELIVERY_CONTROLS,
  KNOWLEDGE_MEMORY_INTEGRATION_ENVELOPE_FIELDS, KNOWLEDGE_MEMORY_INTEGRATION_ERROR_CODE,
  KNOWLEDGE_MEMORY_INTEGRATION_RULES, KNOWLEDGE_MEMORY_PORTABILITY_FIELDS,
  KNOWLEDGE_MEMORY_RESPONSE_STATUSES, KnowledgeMemoryIntegrationDescriptor,
  KnowledgeMemoryIntegrationProfile, addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-07 exposes canonical envelopes and capability contracts', () => {
  const descriptor = new KnowledgeMemoryIntegrationDescriptor();
  assert.deepEqual(descriptor.envelopeFields(), Object.values(KNOWLEDGE_MEMORY_INTEGRATION_ENVELOPE_FIELDS));
  assert.deepEqual(descriptor.apiCapabilities(), Object.values(KNOWLEDGE_MEMORY_API_CAPABILITIES));
  assert.ok(descriptor.apiCapabilities().includes(KNOWLEDGE_MEMORY_API_CAPABILITIES.MEMORY));
  assert.ok(descriptor.responseStatuses().includes(KNOWLEDGE_MEMORY_RESPONSE_STATUSES.NOT_ELIGIBLE));
});

test('ARCH-016-07 exposes replay-safe delivery and portable lifecycle semantics', () => {
  const descriptor = new KnowledgeMemoryIntegrationDescriptor();
  assert.deepEqual(descriptor.portabilityFields(), Object.values(KNOWLEDGE_MEMORY_PORTABILITY_FIELDS));
  assert.ok(descriptor.eventDeliveryControls().includes(KNOWLEDGE_MEMORY_EVENT_DELIVERY_CONTROLS.REPLAY));
  assert.ok(descriptor.eventDeliveryControls().includes(KNOWLEDGE_MEMORY_EVENT_DELIVERY_CONTROLS.RECONCILIATION));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_INTEGRATION_RULES.NO_DATABASE_ACCESS));
  assert.ok(descriptor.architecturalRules().includes(KNOWLEDGE_MEMORY_INTEGRATION_RULES.NO_RESURRECTION));
});

test('ARCH-016-07 validates profiles and rejects integration shortcuts', () => {
  const descriptor = new KnowledgeMemoryIntegrationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'publishedContracts', 'authoritativeOwnership', 'semanticCompatibility',
    'capabilityEncapsulation', 'providerAbstraction', 'identityPropagated', 'purposePropagated',
    'trustedScopePropagated', 'classificationPropagated', 'provenancePropagated',
    'temporalSemantics', 'referenceFirst', 'referenceAuthorizationIndependent',
    'statusSemanticsDistinct', 'safeErrorContracts', 'idempotentMutations',
    'concurrencyControlled', 'deadlinesBounded', 'contractsVersioned', 'backwardCompatible',
    'deprecationGoverned', 'immutableEvents', 'atLeastOnceSafe', 'replaySafe',
    'deadLetterGoverned', 'reconciliationEnabled', 'schemasGoverned', 'connectorsGoverned',
    'antiCorruptionLayers', 'domainTruthPreserved', 'externalOutputValidated',
    'bulkControlParity', 'portableLifecycle', 'correctionPropagated', 'deletionPropagated',
    'projectionsSynchronized', 'divergenceContained', 'isolationEndToEnd', 'secretsExcluded',
    'evidenceProtected', 'safeDegradation', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'directDatabaseAccess', 'sharedInternalTables', 'hiddenFilesystemExchange',
    'unversionedPayloads', 'providerObjectsCanonical', 'searchIndexAuthoritative',
    'copiedCredentialsGrantAuthority', 'transportCreatesAuthority', 'payloadTextDefinesScope',
    'referenceGrantsAccess', 'classificationLoweredByTransform', 'acceptanceMeansPublication',
    'providerOutputAutoApproved', 'connectorPublishesKnowledge', 'eventIsUnboundedCommand',
    'exactlyOnceAssumed', 'replayResurrectsRecords', 'bulkWeakensControls',
    'integrationSharesSecrets', 'degradedWeakensControls', 'selectsIntegrationProduct'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /contract-identity-and-version/);
  assert.match(validation.errors.join('\n'), /requires authoritativeOwnership/);
  assert.match(validation.errors.join('\n'), /prohibits directDatabaseAccess/);
});

test('ARCH-016-07 detects incomplete metadata', () => {
  class IncompleteDescriptor extends KnowledgeMemoryIntegrationDescriptor {
    envelopeFields() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === KNOWLEDGE_MEMORY_INTEGRATION_ERROR_CODE
  );
});

test('ARCH-016-07 profile is immutable', () => {
  const profile = complete(new KnowledgeMemoryIntegrationDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.integrationStyles.push('other'), TypeError);
});

test('ARCH-016-07 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('KnowledgeMemoryIntegrationDescriptor');
  assert.ok(descriptor instanceof KnowledgeMemoryIntegrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'participants', 'profileFields', 'integrationStyles', 'envelopeFields',
    'apiCapabilities', 'apiContractFields', 'responseStatuses', 'errorFields',
    'eventEnvelopeFields', 'eventDeliveryControls', 'connectorCapabilities', 'checkpointFields',
    'bulkManifestFields', 'bulkItemStatuses', 'portabilityFields', 'degradedModes',
    'qualityAttributes', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new KnowledgeMemoryIntegrationProfile({ profileName: 'Knowledge Memory Integration', ...metadata });
}
