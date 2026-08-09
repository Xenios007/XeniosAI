import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { ProjectServiceLifecycleProfile } from '../contracts/project-service-lifecycle-profile.js';
import {
  FUTURE_LIFECYCLE_CAPABILITIES, LIFECYCLE_ANTI_PATTERNS, LIFECYCLE_AUTHORITY_SOURCES,
  LIFECYCLE_COMMANDS, LIFECYCLE_CONCEPTS, LIFECYCLE_CONTROLS, LIFECYCLE_EVENTS,
  LIFECYCLE_FAILURE_RECOVERY_FIELDS, LIFECYCLE_GATES, LIFECYCLE_GOVERNANCE_AREAS,
  LIFECYCLE_MEASURES, LIFECYCLE_PRINCIPLES, METADATA_VALIDATION_AREAS, PROJECT_CREATION_FIELDS,
  PROJECT_IDENTITY_FIELDS, PROJECT_LIFECYCLE_STATES, PROJECT_METADATA_FIELDS,
  PROJECT_SERVICE_LIFECYCLE_ARCHITECTURAL_RULES, PROJECT_SERVICE_LIFECYCLE_ERROR_CODE,
  PROJECT_SERVICE_LIFECYCLE_OBJECTIVES, PROJECT_SERVICE_RELATIONSHIPS, PROJECT_TYPES,
  SERVICE_BOUNDARY_FIELDS, SERVICE_IDENTITY_FIELDS, SERVICE_LIFECYCLE_STATES,
  SERVICE_METADATA_FIELDS, SERVICE_OWNERSHIP_FIELDS, SERVICE_READINESS_FIELDS
} from '../lifecycle-constants.js';

const MAP = Object.freeze({
  objectives: PROJECT_SERVICE_LIFECYCLE_OBJECTIVES,
  principles: LIFECYCLE_PRINCIPLES,
  concepts: LIFECYCLE_CONCEPTS,
  relationships: PROJECT_SERVICE_RELATIONSHIPS,
  projectStates: PROJECT_LIFECYCLE_STATES,
  projectCreationFields: PROJECT_CREATION_FIELDS,
  projectTypes: PROJECT_TYPES,
  projectIdentityFields: PROJECT_IDENTITY_FIELDS,
  projectMetadataFields: PROJECT_METADATA_FIELDS,
  serviceStates: SERVICE_LIFECYCLE_STATES,
  serviceIdentityFields: SERVICE_IDENTITY_FIELDS,
  serviceMetadataFields: SERVICE_METADATA_FIELDS,
  serviceOwnershipFields: SERVICE_OWNERSHIP_FIELDS,
  serviceBoundaryFields: SERVICE_BOUNDARY_FIELDS,
  serviceReadinessFields: SERVICE_READINESS_FIELDS,
  controls: LIFECYCLE_CONTROLS,
  gates: LIFECYCLE_GATES,
  events: LIFECYCLE_EVENTS,
  commands: LIFECYCLE_COMMANDS,
  authoritySources: LIFECYCLE_AUTHORITY_SOURCES,
  metadataValidationAreas: METADATA_VALIDATION_AREAS,
  failureRecoveryFields: LIFECYCLE_FAILURE_RECOVERY_FIELDS,
  measures: LIFECYCLE_MEASURES,
  governanceAreas: LIFECYCLE_GOVERNANCE_AREAS,
  antiPatterns: LIFECYCLE_ANTI_PATTERNS,
  architecturalRules: PROJECT_SERVICE_LIFECYCLE_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_LIFECYCLE_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  identityBeforeAutomation: 'Lifecycle actions require identity before automation.',
  projectServiceDistinct: 'Project and service identities must remain distinct.',
  accountableOwnershipRequired: 'Projects and services require accountable ownership.',
  lifecycleStateAuthoritative: 'Lifecycle state must be authoritative and discoverable.',
  operationalMetadataRequired: 'Project and service metadata must be operational records.',
  readinessBeforeProduction: 'Operational readiness is required before production authorization.',
  tenantPropertyScopeExplicit: 'Tenant and property scope must be explicit throughout lifecycle actions.',
  architectureAdrBindingRequired: 'Projects and services must be bound to architecture and ADRs.',
  aiAccountableOwnershipProhibited: 'AI agents must not become accountable owners.',
  deprecationRetirementGoverned: 'Deprecation, consumer migration, and retirement must be governed first-class states.',
  evidenceHistoryPreserved: 'Evidence and history must be preserved after closure or retirement.',
  vendorNeutral: 'Project and Service Lifecycle must remain vendor neutral.',
  technologyIndependent: 'Project and Service Lifecycle must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  prescribesProjectManagementTool: 'ARCH-013-04 does not prescribe a project-management tool.',
  prescribesSourceControl: 'ARCH-013-04 does not prescribe a source-control product.',
  prescribesServiceCatalogProduct: 'ARCH-013-04 does not prescribe a service-catalog product.',
  treatsRepositoryAsProject: 'Repositories must not be treated as projects.',
  treatsDeploymentUnitAsService: 'Deployment units must not automatically be treated as services.',
  allowsOrphanedProductionService: 'Production services must not be orphaned or unowned.',
  allowsAiAccountableOwner: 'AI agents must not be accountable owners.',
  reusesRetiredIdentifiers: 'Retired identifiers must not be reused.'
});

export class ProjectServiceLifecycleDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  concepts() { return values(MAP.concepts); }
  relationships() { return values(MAP.relationships); }
  projectStates() { return values(MAP.projectStates); }
  projectCreationFields() { return values(MAP.projectCreationFields); }
  projectTypes() { return values(MAP.projectTypes); }
  projectIdentityFields() { return values(MAP.projectIdentityFields); }
  projectMetadataFields() { return values(MAP.projectMetadataFields); }
  serviceStates() { return values(MAP.serviceStates); }
  serviceIdentityFields() { return values(MAP.serviceIdentityFields); }
  serviceMetadataFields() { return values(MAP.serviceMetadataFields); }
  serviceOwnershipFields() { return values(MAP.serviceOwnershipFields); }
  serviceBoundaryFields() { return values(MAP.serviceBoundaryFields); }
  serviceReadinessFields() { return values(MAP.serviceReadinessFields); }
  controls() { return values(MAP.controls); }
  gates() { return values(MAP.gates); }
  events() { return values(MAP.events); }
  commands() { return values(MAP.commands); }
  authoritySources() { return values(MAP.authoritySources); }
  metadataValidationAreas() { return values(MAP.metadataValidationAreas); }
  failureRecoveryFields() { return values(MAP.failureRecoveryFields); }
  measures() { return values(MAP.measures); }
  governanceAreas() { return values(MAP.governanceAreas); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ProjectServiceLifecycleProfile ? profileInput :
      new ProjectServiceLifecycleProfile(profileInput);
    const errors = [];
    if (!profile.lifecycleName) errors.push('Project and Service Lifecycle profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Project and Service Lifecycle must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(PROJECT_SERVICE_LIFECYCLE_ERROR_CODE, 'Project and Service Lifecycle violates ARCH-013-04.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
