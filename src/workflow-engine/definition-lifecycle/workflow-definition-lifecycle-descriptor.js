import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowDefinitionLifecycleProfile } from '../contracts/workflow-definition-lifecycle-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
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
  WORKFLOW_SCOPE_CLASSIFICATIONS, WORKFLOW_TRIGGER_TYPES
} from '../definition-lifecycle-constants.js';

const MAP = Object.freeze({
  identityDomains: WORKFLOW_DEFINITION_IDENTITY_DOMAINS,
  ownerRoles: WORKFLOW_DEFINITION_OWNER_ROLES,
  purposeClassifications: WORKFLOW_PURPOSE_CLASSIFICATIONS,
  durationClassifications: WORKFLOW_DURATION_CLASSIFICATIONS,
  interactionClassifications: WORKFLOW_INTERACTION_CLASSIFICATIONS,
  impactClassifications: WORKFLOW_IMPACT_CLASSIFICATIONS,
  scopeClassifications: WORKFLOW_SCOPE_CLASSIFICATIONS,
  definitionSections: WORKFLOW_DEFINITION_SECTIONS,
  contracts: WORKFLOW_DEFINITION_CONTRACTS,
  processElements: WORKFLOW_PROCESS_ELEMENTS,
  reliabilityElements: WORKFLOW_RELIABILITY_ELEMENTS,
  triggerTypes: WORKFLOW_TRIGGER_TYPES,
  validationAreas: WORKFLOW_DEFINITION_VALIDATION_AREAS,
  migrationTypes: WORKFLOW_MIGRATION_TYPES,
  lifecycleStates: WORKFLOW_DEFINITION_LIFECYCLE_STATES,
  lifecycleGates: WORKFLOW_LIFECYCLE_GATES,
  activationScopes: WORKFLOW_ACTIVATION_SCOPES,
  operations: WORKFLOW_DEFINITION_OPERATIONS,
  qualityAttributes: WORKFLOW_DEFINITION_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_DEFINITION_ARCHITECTURAL_RULES,
  architectureBoundaries: WORKFLOW_DEFINITION_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  stableIdentities: 'Workflow definitions and related lifecycle artifacts must have stable, distinct identities.',
  explicitOwnership: 'Every workflow must have accountable, operational, definition, and participating domain ownership.',
  humanAccountability: 'An authorized human or organizational role must retain final accountability.',
  runtimeStateSeparated: 'Mutable runtime execution state must remain outside the workflow definition.',
  machineValidatable: 'The authoritative definition must be machine validatable and semantically complete.',
  canonicalRepresentation: 'Every definition version must have one canonical representation.',
  immutableActivatedVersions: 'An activated definition version must be immutable.',
  materialChangesVersioned: 'Material behavioral changes must create a new governed version.',
  explicitVersionSelection: 'Workflow initiation must select an approved definition version through an explicit rule.',
  exactExecutionBinding: 'Every admitted execution must bind to one exact effective definition version.',
  releaseActivationSeparated: 'Release and scoped activation must remain separate lifecycle actions.',
  scopedActivation: 'Activation must support environment, tenant, and property scope.',
  migrationExceptional: 'Existing executions should remain on their original version unless governed migration is necessary.',
  migrationSafe: 'Migration must be idempotent, observable, attributable, and preserve history and scope.',
  lifecycleControlled: 'Lifecycle transitions must be explicit, authorized, idempotent, attributable, and auditable.',
  warningsRequireDisposition: 'Validation warnings require explicit disposition.',
  domainRulesRemainInServices: 'Business rules and authoritative business state must remain in domain services.',
  deterministicControl: 'Definition control semantics must be deterministic.',
  boundedResources: 'Loops, fan-out, retries, duration, state, and resource use must be bounded.',
  explicitContracts: 'Workflow participants and interactions must use explicit governed contracts.',
  completionVerified: 'Completion must use explicit verified criteria rather than transport or worker success alone.',
  evidenceProtected: 'Lifecycle evidence must be attributable, scoped, integrity protected, and retained.',
  vendorNeutral: 'Workflow definition semantics must remain vendor neutral.',
  technologyIndependent: 'Workflow definition semantics must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  runtimeStateInDefinition: 'Workflow definitions must not contain mutable runtime execution state.',
  diagramIsAuthoritative: 'A process diagram alone must not be the authoritative workflow definition.',
  workerCodeIsAuthoritative: 'Worker code must not hide or own authoritative process behavior.',
  modelInfersRequiredInputs: 'AI models must not infer missing authoritative workflow inputs.',
  silentActiveVersionMutation: 'A newly activated version must not silently alter existing executions.',
  migrationRewritesHistory: 'Migration must not rewrite history as though the target version produced it.',
  releaseEqualsActivation: 'Artifact release must not itself authorize workflow execution.',
  reusesRetiredIdentifiers: 'Retired workflow identifiers must not be reassigned.',
  embedsSecretsOrPersonalData: 'Definitions must not embed secrets or real personal data.',
  selectsNotationOrProduct: 'ARCH-015-02 must not select a definition notation or workflow product.',
  definesRuntimeMechanics: 'ARCH-015-02 must not define detailed runtime, queue, event, timer, or transaction mechanics.'
});

export class WorkflowDefinitionLifecycleDescriptor {
  identityDomains() { return values(MAP.identityDomains); }
  ownerRoles() { return values(MAP.ownerRoles); }
  purposeClassifications() { return values(MAP.purposeClassifications); }
  durationClassifications() { return values(MAP.durationClassifications); }
  interactionClassifications() { return values(MAP.interactionClassifications); }
  impactClassifications() { return values(MAP.impactClassifications); }
  scopeClassifications() { return values(MAP.scopeClassifications); }
  definitionSections() { return values(MAP.definitionSections); }
  contracts() { return values(MAP.contracts); }
  processElements() { return values(MAP.processElements); }
  reliabilityElements() { return values(MAP.reliabilityElements); }
  triggerTypes() { return values(MAP.triggerTypes); }
  validationAreas() { return values(MAP.validationAreas); }
  migrationTypes() { return values(MAP.migrationTypes); }
  lifecycleStates() { return values(MAP.lifecycleStates); }
  lifecycleGates() { return values(MAP.lifecycleGates); }
  activationScopes() { return values(MAP.activationScopes); }
  operations() { return values(MAP.operations); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof WorkflowDefinitionLifecycleProfile
      ? profileInput : new WorkflowDefinitionLifecycleProfile(profileInput);
    const errors = [];
    if (!profile.definitionName) errors.push('Workflow definition lifecycle profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) {
      appendMissing(errors, profile[key], values(source), `${key} must include`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Workflow Definition and Lifecycle must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      WORKFLOW_DEFINITION_LIFECYCLE_ERROR_CODE,
      'Workflow Definition and Lifecycle violates ARCH-015-02.',
      { errors }
    );
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) {
  return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors });
}
