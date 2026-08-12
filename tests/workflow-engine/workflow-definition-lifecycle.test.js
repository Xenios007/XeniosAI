import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_ACTIVATION_SCOPES, WORKFLOW_DEFINITION_ARCHITECTURAL_RULES,
  WORKFLOW_DEFINITION_ARCHITECTURE_BOUNDARIES, WORKFLOW_DEFINITION_CONTRACTS,
  WORKFLOW_DEFINITION_IDENTITY_DOMAINS, WORKFLOW_DEFINITION_LIFECYCLE_ERROR_CODE,
  WORKFLOW_DEFINITION_LIFECYCLE_STATES, WORKFLOW_DEFINITION_OPERATIONS,
  WORKFLOW_DEFINITION_OWNER_ROLES, WORKFLOW_DEFINITION_QUALITY_ATTRIBUTES,
  WORKFLOW_DEFINITION_SECTIONS, WORKFLOW_DEFINITION_VALIDATION_AREAS,
  WORKFLOW_DURATION_CLASSIFICATIONS, WORKFLOW_IMPACT_CLASSIFICATIONS,
  WORKFLOW_INTERACTION_CLASSIFICATIONS, WORKFLOW_LIFECYCLE_GATES, WORKFLOW_MIGRATION_TYPES,
  WORKFLOW_PROCESS_ELEMENTS, WORKFLOW_PURPOSE_CLASSIFICATIONS, WORKFLOW_RELIABILITY_ELEMENTS,
  WORKFLOW_SCOPE_CLASSIFICATIONS, WORKFLOW_TRIGGER_TYPES,
  WorkflowDefinitionLifecycleDescriptor, WorkflowDefinitionLifecycleProfile, addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-02 exposes identity, ownership, classifications, and definition structure', () => {
  const descriptor = new WorkflowDefinitionLifecycleDescriptor();
  assert.deepEqual(descriptor.identityDomains(), Object.values(WORKFLOW_DEFINITION_IDENTITY_DOMAINS));
  assert.ok(descriptor.ownerRoles().includes(WORKFLOW_DEFINITION_OWNER_ROLES.ACCOUNTABLE));
  assert.ok(descriptor.purposeClassifications().includes(WORKFLOW_PURPOSE_CLASSIFICATIONS.AGENT_COORDINATION));
  assert.deepEqual(descriptor.durationClassifications(), Object.values(WORKFLOW_DURATION_CLASSIFICATIONS));
  assert.ok(descriptor.interactionClassifications().includes(WORKFLOW_INTERACTION_CLASSIFICATIONS.HUMAN_AGENT));
  assert.ok(descriptor.impactClassifications().includes(WORKFLOW_IMPACT_CLASSIFICATIONS.IRREVERSIBLE));
  assert.ok(descriptor.scopeClassifications().includes(WORKFLOW_SCOPE_CLASSIFICATIONS.CROSS_PROPERTY));
  assert.deepEqual(descriptor.definitionSections(), Object.values(WORKFLOW_DEFINITION_SECTIONS));
});

test('ARCH-015-02 exposes contracts, process, reliability, triggers, and validation coverage', () => {
  const descriptor = new WorkflowDefinitionLifecycleDescriptor();
  assert.ok(descriptor.contracts().includes(WORKFLOW_DEFINITION_CONTRACTS.AGENT_RESULTS));
  assert.ok(descriptor.processElements().includes(WORKFLOW_PROCESS_ELEMENTS.CHILD_WORKFLOWS));
  assert.ok(descriptor.reliabilityElements().includes(WORKFLOW_RELIABILITY_ELEMENTS.RECONCILIATION));
  assert.ok(descriptor.triggerTypes().includes(WORKFLOW_TRIGGER_TYPES.OPERATIONAL_ACTION));
  assert.ok(descriptor.validationAreas().includes(WORKFLOW_DEFINITION_VALIDATION_AREAS.TENANT));
});

test('ARCH-015-02 exposes migration, lifecycle gates, scoped activation, operations, quality, rules, and boundaries', () => {
  const descriptor = new WorkflowDefinitionLifecycleDescriptor();
  assert.deepEqual(descriptor.migrationTypes(), Object.values(WORKFLOW_MIGRATION_TYPES));
  assert.ok(descriptor.lifecycleStates().includes(WORKFLOW_DEFINITION_LIFECYCLE_STATES.SUSPENDED));
  assert.deepEqual(descriptor.lifecycleGates(), Object.values(WORKFLOW_LIFECYCLE_GATES));
  assert.ok(descriptor.activationScopes().includes(WORKFLOW_ACTIVATION_SCOPES.PROPERTY));
  assert.ok(descriptor.operations().includes(WORKFLOW_DEFINITION_OPERATIONS.MIGRATION));
  assert.ok(descriptor.qualityAttributes().includes(WORKFLOW_DEFINITION_QUALITY_ATTRIBUTES.TENANT_ISOLATION));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_DEFINITION_ARCHITECTURAL_RULES.EXECUTION_BINDING));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_DEFINITION_ARCHITECTURE_BOUNDARIES.RUNTIME_PERSISTENCE));
});

test('ARCH-015-02 accepts complete profiles and rejects lifecycle boundary violations', () => {
  const descriptor = new WorkflowDefinitionLifecycleDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    stableIdentities: false, explicitOwnership: false, humanAccountability: false, runtimeStateSeparated: false,
    machineValidatable: false, canonicalRepresentation: false, immutableActivatedVersions: false,
    materialChangesVersioned: false, explicitVersionSelection: false, exactExecutionBinding: false,
    releaseActivationSeparated: false, scopedActivation: false, migrationExceptional: false, migrationSafe: false,
    lifecycleControlled: false, warningsRequireDisposition: false, domainRulesRemainInServices: false,
    deterministicControl: false, boundedResources: false, explicitContracts: false, completionVerified: false,
    evidenceProtected: false, vendorNeutral: false, technologyIndependent: false,
    runtimeStateInDefinition: true, diagramIsAuthoritative: true, workerCodeIsAuthoritative: true,
    modelInfersRequiredInputs: true, silentActiveVersionMutation: true, migrationRewritesHistory: true,
    releaseEqualsActivation: true, reusesRetiredIdentifiers: true, embedsSecretsOrPersonalData: true,
    selectsNotationOrProduct: true, definesRuntimeMechanics: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /workflow-identity/);
  assert.match(invalid.errors.join('\n'), /activated definition version must be immutable/);
  assert.match(invalid.errors.join('\n'), /Artifact release must not itself authorize/);
});

test('ARCH-015-02 assertion detects incomplete definition lifecycle metadata', () => {
  class IncompleteDescriptor extends WorkflowDefinitionLifecycleDescriptor { lifecycleGates() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === WORKFLOW_DEFINITION_LIFECYCLE_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented lifecycleGates')));
});

test('ARCH-015-02 descriptor is immutable and available through Workflow Engine dependency injection', () => {
  const services = addWorkflowEngine(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('WorkflowDefinitionLifecycleDescriptor');
  assert.ok(descriptor instanceof WorkflowDefinitionLifecycleDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = completeProfile(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.ok(Object.isFrozen(profile.lifecycleStates));
  assert.throws(() => profile.lifecycleStates.push('unknown'), TypeError);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of [
    'identityDomains', 'ownerRoles', 'purposeClassifications', 'durationClassifications',
    'interactionClassifications', 'impactClassifications', 'scopeClassifications', 'definitionSections',
    'contracts', 'processElements', 'reliabilityElements', 'triggerTypes', 'validationAreas', 'migrationTypes',
    'lifecycleStates', 'lifecycleGates', 'activationScopes', 'operations', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) values[key] = descriptor[key]();
  return new WorkflowDefinitionLifecycleProfile({ definitionName: 'Reservation Fulfillment', ...values });
}
