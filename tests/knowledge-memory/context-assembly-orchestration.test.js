import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CONTEXT_ASSEMBLY_ERROR_CODE, CONTEXT_ASSEMBLY_RULES, CONTEXT_ASSEMBLY_STAGES,
  CONTEXT_ASSEMBLY_STATUSES, CONTEXT_LAYERS, CONTEXT_PACKAGE_FIELDS,
  MEMORY_ORCHESTRATION_OPERATIONS, MEMORY_RETRIEVAL_STATUSES,
  ContextAssemblyOrchestrationDescriptor, ContextAssemblyOrchestrationProfile, addKnowledgeMemory
} from '../../src/knowledge-memory/index.js';

test('ARCH-016-06 exposes independent context layers and canonical assembly stages', () => {
  const descriptor = new ContextAssemblyOrchestrationDescriptor();
  assert.deepEqual(descriptor.contextLayers(), Object.values(CONTEXT_LAYERS));
  assert.deepEqual(descriptor.assemblyStages(), Object.values(CONTEXT_ASSEMBLY_STAGES));
  assert.ok(descriptor.contextLayers().includes(CONTEXT_LAYERS.DOMAIN));
  assert.ok(descriptor.contextLayers().includes(CONTEXT_LAYERS.MEMORY));
});

test('ARCH-016-06 exposes package, memory orchestration, and safe-status semantics', () => {
  const descriptor = new ContextAssemblyOrchestrationDescriptor();
  assert.deepEqual(descriptor.packageFields(), Object.values(CONTEXT_PACKAGE_FIELDS));
  assert.ok(descriptor.memoryOperations().includes(MEMORY_ORCHESTRATION_OPERATIONS.PROPOSE));
  assert.ok(descriptor.memoryRetrievalStatuses().includes(MEMORY_RETRIEVAL_STATUSES.EMPTY));
  assert.ok(descriptor.assemblyStatuses().includes(CONTEXT_ASSEMBLY_STATUSES.CLARIFICATION));
  assert.ok(descriptor.architecturalRules().includes(CONTEXT_ASSEMBLY_RULES.AUTHORIZATION_FIRST));
  assert.ok(descriptor.architecturalRules().includes(CONTEXT_ASSEMBLY_RULES.INSTRUCTION_SEPARATION));
});

test('ARCH-016-06 validates profiles and rejects context shortcuts', () => {
  const descriptor = new ContextAssemblyOrchestrationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'temporaryPurposeBound', 'minimalAuthorizedContext', 'sourcesSeparated', 'requestIdentityBound',
    'authorizationBeforeAcquisition', 'layerSemanticsPreserved', 'instructionSeparation',
    'authorityExternal', 'domainFactsCurrent', 'memoryNonAuthoritative', 'memoryNeedExplicit',
    'noMemoryValid', 'memoryEligibilityFirst', 'memoryTypesDistinct', 'attributionPreserved',
    'conflictVisible', 'currentAuthorityPreferred', 'budgetsProtected', 'summariesDerived',
    'packageValidated', 'packageImmutable', 'packageBound', 'reuseReauthorized',
    'toolResultsValidated', 'updatesVersioned', 'contextDisposed', 'cacheInvalidated',
    'useNotReinforcement', 'writebackCandidateOnly', 'admissionPreserved',
    'lifecycleStatusAccurate', 'responseValidated', 'explicitStatus', 'noFabrication',
    'isolationEndToEnd', 'evidenceProtected', 'idempotencyAndConcurrency', 'safeDegradation',
    'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'contextDurableStore', 'fullConversationDefault', 'contentGrantsAuthority',
    'requestTextDefinesScope', 'rankingEqualsTruth', 'memoryRequiredAlways', 'memoryAuthorizes',
    'memoryOverridesDomain', 'budgetRemovesSafeguards', 'conflictBlended',
    'packageCrossScopeReuse', 'modelIsSecurityBoundary', 'toolResultTrustedInstruction',
    'contextWritesMemory', 'useReinforcesMemory', 'candidateAutoAdmitted', 'expiredContextReused',
    'cacheBypassesAuthorization', 'degradedWeakensControls', 'directDatabaseAccess', 'selectsProvider'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /system-instruction-layer/);
  assert.match(validation.errors.join('\n'), /requires authorizationBeforeAcquisition/);
  assert.match(validation.errors.join('\n'), /prohibits contentGrantsAuthority/);
});

test('ARCH-016-06 detects incomplete metadata', () => {
  class IncompleteDescriptor extends ContextAssemblyOrchestrationDescriptor {
    contextLayers() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === CONTEXT_ASSEMBLY_ERROR_CODE
  );
});

test('ARCH-016-06 profile is immutable', () => {
  const profile = complete(new ContextAssemblyOrchestrationDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.contextLayers.push('other'), TypeError);
});

test('ARCH-016-06 descriptor is registered', () => {
  const descriptor = addKnowledgeMemory(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('ContextAssemblyOrchestrationDescriptor');
  assert.ok(descriptor instanceof ContextAssemblyOrchestrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'consumers', 'profileFields', 'requestFields', 'contextLayers', 'assemblyStages',
    'candidateFields', 'memoryRequestFields', 'memoryRetrievalStatuses', 'conflictFields',
    'budgetFields', 'packageFields', 'assemblyStatuses', 'contextOperations', 'memoryOperations',
    'degradedModes', 'evaluationDimensions', 'qualityAttributes', 'architecturalRules',
    'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new ContextAssemblyOrchestrationProfile({ profileName: 'Context Assembly', ...metadata });
}
