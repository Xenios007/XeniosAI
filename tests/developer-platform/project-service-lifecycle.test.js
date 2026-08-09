import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FUTURE_LIFECYCLE_CAPABILITIES,
  LIFECYCLE_ANTI_PATTERNS,
  LIFECYCLE_COMMANDS,
  LIFECYCLE_CONTROLS,
  LIFECYCLE_EVENTS,
  LIFECYCLE_FAILURE_RECOVERY_FIELDS,
  LIFECYCLE_GATES,
  LIFECYCLE_GOVERNANCE_AREAS,
  LIFECYCLE_PRINCIPLES,
  PROJECT_LIFECYCLE_STATES,
  PROJECT_SERVICE_LIFECYCLE_ARCHITECTURAL_RULES,
  PROJECT_SERVICE_LIFECYCLE_ERROR_CODE,
  PROJECT_SERVICE_LIFECYCLE_OBJECTIVES,
  PROJECT_SERVICE_RELATIONSHIPS,
  PROJECT_TYPES,
  ProjectServiceLifecycleDescriptor,
  ProjectServiceLifecycleProfile,
  SERVICE_LIFECYCLE_STATES,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('project and service lifecycle exposes objectives, principles, relationships, and states', () => {
  const descriptor = new ProjectServiceLifecycleDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(PROJECT_SERVICE_LIFECYCLE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(LIFECYCLE_PRINCIPLES));
  assert.ok(descriptor.relationships().includes(PROJECT_SERVICE_RELATIONSHIPS.MULTIPLE_PROJECTS_ONE_SERVICE));
  assert.ok(descriptor.projectStates().includes(PROJECT_LIFECYCLE_STATES.CANCELLED_OR_REJECTED));
  assert.ok(descriptor.serviceStates().includes(SERVICE_LIFECYCLE_STATES.RETIRING));
  assert.ok(descriptor.projectTypes().includes(PROJECT_TYPES.TENANT_ONBOARDING));
});

test('project and service lifecycle exposes identity, metadata, ownership, boundary, and readiness records', () => {
  const descriptor = new ProjectServiceLifecycleDescriptor();
  assert.ok(descriptor.projectIdentityFields().includes('independent-of-repository-name'));
  assert.ok(descriptor.projectMetadataFields().includes('tenant-and-property-scope'));
  assert.ok(descriptor.serviceIdentityFields().includes('independent-of-implementation-technology'));
  assert.ok(descriptor.serviceMetadataFields().includes('deprecation-and-retirement'));
  assert.ok(descriptor.serviceOwnershipFields().includes('accountable-service-owner'));
  assert.ok(descriptor.serviceBoundaryFields().includes('owned-data-and-schema'));
  assert.ok(descriptor.serviceReadinessFields().includes('operational-readiness') === false);
  assert.ok(descriptor.serviceReadinessFields().includes('tests-and-evaluations'));
});

test('project and service lifecycle exposes controls, gates, events, commands, governance, and future metadata', () => {
  const descriptor = new ProjectServiceLifecycleDescriptor();
  assert.ok(descriptor.controls().includes(LIFECYCLE_CONTROLS.DUPLICATE_DETECTION));
  assert.ok(descriptor.gates().includes(LIFECYCLE_GATES.PRODUCTION_AUTHORIZATION));
  assert.ok(descriptor.events().includes(LIFECYCLE_EVENTS.SERVICE_OWNERSHIP_TRANSFERRED));
  assert.ok(descriptor.commands().includes(LIFECYCLE_COMMANDS.START_SERVICE_RETIREMENT));
  assert.ok(descriptor.authoritySources().includes('policy-decisions'));
  assert.ok(descriptor.metadataValidationAreas().includes('lifecycle-state-consistency'));
  assert.ok(descriptor.failureRecoveryFields().includes(LIFECYCLE_FAILURE_RECOVERY_FIELDS.COMPENSATION));
  assert.ok(descriptor.measures().includes('consumer-migration-progress'));
  assert.ok(descriptor.governanceAreas().includes(LIFECYCLE_GOVERNANCE_AREAS.READINESS_CRITERIA));
  assert.ok(descriptor.antiPatterns().includes(LIFECYCLE_ANTI_PATTERNS.AI_ACCOUNTABLE_OWNERSHIP));
  assert.ok(descriptor.architecturalRules().includes(PROJECT_SERVICE_LIFECYCLE_ARCHITECTURAL_RULES.READINESS_BEFORE_PRODUCTION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_LIFECYCLE_CAPABILITIES.DIGITAL_TWINS));
});

test('project and service lifecycle validates complete profiles and rejects boundary violations', () => {
  const descriptor = new ProjectServiceLifecycleDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    lifecycleName: '',
    ...partialProfile(descriptor),
    identityBeforeAutomation: false,
    projectServiceDistinct: false,
    accountableOwnershipRequired: false,
    lifecycleStateAuthoritative: false,
    operationalMetadataRequired: false,
    readinessBeforeProduction: false,
    tenantPropertyScopeExplicit: false,
    architectureAdrBindingRequired: false,
    aiAccountableOwnershipProhibited: false,
    deprecationRetirementGoverned: false,
    evidenceHistoryPreserved: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesProjectManagementTool: true,
    prescribesSourceControl: true,
    prescribesServiceCatalogProduct: true,
    treatsRepositoryAsProject: true,
    treatsDeploymentUnitAsService: true,
    allowsOrphanedProductionService: true,
    allowsAiAccountableOwner: true,
    reusesRetiredIdentifiers: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /establish-accountable-ownership-before-resources/);
  assert.match(invalid.errors.join('\n'), /project-is-not-service/);
  assert.match(invalid.errors.join('\n'), /cancelled-or-rejected/);
  assert.match(invalid.errors.join('\n'), /Project and service identities must remain distinct/);
  assert.match(invalid.errors.join('\n'), /Operational readiness is required/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a project-management tool/);
  assert.match(invalid.errors.join('\n'), /Repositories must not be treated as projects/);
  assert.match(invalid.errors.join('\n'), /Retired identifiers must not be reused/);
});

test('project and service lifecycle assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends ProjectServiceLifecycleDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === PROJECT_SERVICE_LIFECYCLE_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('project and service lifecycle descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('ProjectServiceLifecycleDescriptor');
  assert.ok(descriptor instanceof ProjectServiceLifecycleDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'concepts', 'relationships', 'projectStates', 'projectCreationFields',
    'projectTypes', 'projectIdentityFields', 'projectMetadataFields', 'serviceStates', 'serviceIdentityFields',
    'serviceMetadataFields', 'serviceOwnershipFields', 'serviceBoundaryFields', 'serviceReadinessFields', 'controls',
    'gates', 'events', 'commands', 'authoritySources', 'metadataValidationAreas', 'failureRecoveryFields', 'measures',
    'governanceAreas', 'antiPatterns', 'architecturalRules', 'futureCapabilities']) values[key] = descriptor[key]();
  return new ProjectServiceLifecycleProfile({ lifecycleName: 'Project and Service Lifecycle', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
