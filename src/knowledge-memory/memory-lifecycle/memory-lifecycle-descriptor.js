import { PlatformError } from '../../foundation/errors/platform-error.js';
import { MemoryLifecycleProfile } from '../contracts/memory-lifecycle-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  MEMORY_ADMISSION_DECISIONS, MEMORY_AUTHORITY_CLASSES, MEMORY_CANDIDATE_FIELDS,
  MEMORY_CANDIDATE_SOURCES, MEMORY_DEGRADED_MODES, MEMORY_EVALUATION_DIMENSIONS,
  MEMORY_LIFECYCLE_BOUNDARIES, MEMORY_LIFECYCLE_ERROR_CODE, MEMORY_LIFECYCLE_OBJECTIVES,
  MEMORY_LIFECYCLE_RULES, MEMORY_LIFECYCLE_STATES, MEMORY_QUALITY_ATTRIBUTES,
  MEMORY_READ_OPERATIONS, MEMORY_RECORD_FIELDS, MEMORY_SCOPES, MEMORY_SENSITIVITY_CLASSES,
  MEMORY_TRANSITION_FIELDS, MEMORY_TYPES, MEMORY_WRITE_OPERATIONS
} from '../memory-lifecycle-constants.js';

const METADATA = Object.freeze({
  objectives: MEMORY_LIFECYCLE_OBJECTIVES,
  memoryTypes: MEMORY_TYPES,
  scopes: MEMORY_SCOPES,
  recordFields: MEMORY_RECORD_FIELDS,
  candidateFields: MEMORY_CANDIDATE_FIELDS,
  candidateSources: MEMORY_CANDIDATE_SOURCES,
  admissionDecisions: MEMORY_ADMISSION_DECISIONS,
  authorityClasses: MEMORY_AUTHORITY_CLASSES,
  sensitivityClasses: MEMORY_SENSITIVITY_CLASSES,
  lifecycleStates: MEMORY_LIFECYCLE_STATES,
  transitionFields: MEMORY_TRANSITION_FIELDS,
  writeOperations: MEMORY_WRITE_OPERATIONS,
  readOperations: MEMORY_READ_OPERATIONS,
  degradedModes: MEMORY_DEGRADED_MODES,
  evaluationDimensions: MEMORY_EVALUATION_DIMENSIONS,
  qualityAttributes: MEMORY_QUALITY_ATTRIBUTES,
  architecturalRules: MEMORY_LIFECYCLE_RULES,
  architectureBoundaries: MEMORY_LIFECYCLE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  deliberateRetention: 'ARCH-016-05 requires deliberateRetention.',
  admissionRequired: 'ARCH-016-05 requires admissionRequired.',
  candidatesSeparated: 'ARCH-016-05 requires candidatesSeparated.',
  modelOutputGoverned: 'ARCH-016-05 requires modelOutputGoverned.',
  conversationBoundary: 'ARCH-016-05 requires conversationBoundary.',
  executionStateBoundary: 'ARCH-016-05 requires executionStateBoundary.',
  domainAuthorityPreserved: 'ARCH-016-05 requires domainAuthorityPreserved.',
  policyAuthorityPreserved: 'ARCH-016-05 requires policyAuthorityPreserved.',
  memoryNonAuthoritative: 'ARCH-016-05 requires memoryNonAuthoritative.',
  explicitRecordContract: 'ARCH-016-05 requires explicitRecordContract.',
  scopePreserved: 'ARCH-016-05 requires scopePreserved.',
  promotionGoverned: 'ARCH-016-05 requires promotionGoverned.',
  materialChangeReadmitted: 'ARCH-016-05 requires materialChangeReadmitted.',
  assertionStatesDistinct: 'ARCH-016-05 requires assertionStatesDistinct.',
  temporalSemantics: 'ARCH-016-05 requires temporalSemantics.',
  provenancePreserved: 'ARCH-016-05 requires provenancePreserved.',
  confidenceQualified: 'ARCH-016-05 requires confidenceQualified.',
  conflictVisible: 'ARCH-016-05 requires conflictVisible.',
  consolidationReadmitted: 'ARCH-016-05 requires consolidationReadmitted.',
  personalizationBounded: 'ARCH-016-05 requires personalizationBounded.',
  sensitiveInferenceControlled: 'ARCH-016-05 requires sensitiveInferenceControlled.',
  instructionBoundary: 'ARCH-016-05 requires instructionBoundary.',
  authoritiesSeparated: 'ARCH-016-05 requires authoritiesSeparated.',
  materialChangesVersioned: 'ARCH-016-05 requires materialChangesVersioned.',
  lifecycleRecordAuthoritative: 'ARCH-016-05 requires lifecycleRecordAuthoritative.',
  inactiveExcluded: 'ARCH-016-05 requires inactiveExcluded.',
  uncertainResultsQualified: 'ARCH-016-05 requires uncertainResultsQualified.',
  completeLifecycle: 'ARCH-016-05 requires completeLifecycle.',
  correctionPropagated: 'ARCH-016-05 requires correctionPropagated.',
  deletionPropagated: 'ARCH-016-05 requires deletionPropagated.',
  resurrectionPrevented: 'ARCH-016-05 requires resurrectionPrevented.',
  tombstonesMinimal: 'ARCH-016-05 requires tombstonesMinimal.',
  legalHoldSeparated: 'ARCH-016-05 requires legalHoldSeparated.',
  retentionControlled: 'ARCH-016-05 requires retentionControlled.',
  trainingSeparated: 'ARCH-016-05 requires trainingSeparated.',
  isolationEndToEnd: 'ARCH-016-05 requires isolationEndToEnd.',
  lifecycleEvidenceProtected: 'ARCH-016-05 requires lifecycleEvidenceProtected.',
  idempotencyAndConcurrency: 'ARCH-016-05 requires idempotencyAndConcurrency.',
  reconciliationEnabled: 'ARCH-016-05 requires reconciliationEnabled.',
  safeDegradation: 'ARCH-016-05 requires safeDegradation.',
  vendorNeutral: 'ARCH-016-05 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-05 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  transcriptCopiedByDefault: 'ARCH-016-05 prohibits transcriptCopiedByDefault.',
  memoryGrantsAuthority: 'ARCH-016-05 prohibits memoryGrantsAuthority.',
  workflowStateStored: 'ARCH-016-05 prohibits workflowStateStored.',
  agentStateStored: 'ARCH-016-05 prohibits agentStateStored.',
  knowledgeAutoRemembered: 'ARCH-016-05 prohibits knowledgeAutoRemembered.',
  modelDirectlyAdmits: 'ARCH-016-05 prohibits modelDirectlyAdmits.',
  frequencyProvesTruth: 'ARCH-016-05 prohibits frequencyProvesTruth.',
  scopeAutoPromoted: 'ARCH-016-05 prohibits scopeAutoPromoted.',
  confidenceEqualsTruth: 'ARCH-016-05 prohibits confidenceEqualsTruth.',
  contradictionsBlended: 'ARCH-016-05 prohibits contradictionsBlended.',
  useExtendsRetention: 'ARCH-016-05 prohibits useExtendsRetention.',
  derivedStoreAuthoritative: 'ARCH-016-05 prohibits derivedStoreAuthoritative.',
  legalHoldActivatesMemory: 'ARCH-016-05 prohibits legalHoldActivatesMemory.',
  deletionLeavesRepresentations: 'ARCH-016-05 prohibits deletionLeavesRepresentations.',
  restoreReactivatesMemory: 'ARCH-016-05 prohibits restoreReactivatesMemory.',
  productionMemoryTrainsModels: 'ARCH-016-05 prohibits productionMemoryTrainsModels.',
  degradedModeWeakensControls: 'ARCH-016-05 prohibits degradedModeWeakensControls.',
  directDatabaseAccess: 'ARCH-016-05 prohibits directDatabaseAccess.',
  selectsMemoryProduct: 'ARCH-016-05 prohibits selectsMemoryProduct.'
});

export class MemoryLifecycleDescriptor {
  objectives() { return values(METADATA.objectives); }
  memoryTypes() { return values(METADATA.memoryTypes); }
  scopes() { return values(METADATA.scopes); }
  recordFields() { return values(METADATA.recordFields); }
  candidateFields() { return values(METADATA.candidateFields); }
  candidateSources() { return values(METADATA.candidateSources); }
  admissionDecisions() { return values(METADATA.admissionDecisions); }
  authorityClasses() { return values(METADATA.authorityClasses); }
  sensitivityClasses() { return values(METADATA.sensitivityClasses); }
  lifecycleStates() { return values(METADATA.lifecycleStates); }
  transitionFields() { return values(METADATA.transitionFields); }
  writeOperations() { return values(METADATA.writeOperations); }
  readOperations() { return values(METADATA.readOperations); }
  degradedModes() { return values(METADATA.degradedModes); }
  evaluationDimensions() { return values(METADATA.evaluationDimensions); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof MemoryLifecycleProfile ? input : new MemoryLifecycleProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Memory model and lifecycle profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Memory Model and Lifecycle must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        MEMORY_LIFECYCLE_ERROR_CODE,
        'Memory Model and Lifecycle violates ARCH-016-05.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
