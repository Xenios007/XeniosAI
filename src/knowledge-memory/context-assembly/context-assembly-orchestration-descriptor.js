import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ContextAssemblyOrchestrationProfile } from '../contracts/context-assembly-orchestration-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  CONTEXT_ASSEMBLY_BOUNDARIES, CONTEXT_ASSEMBLY_ERROR_CODE, CONTEXT_ASSEMBLY_OBJECTIVES,
  CONTEXT_ASSEMBLY_OPERATIONS, CONTEXT_ASSEMBLY_RULES, CONTEXT_ASSEMBLY_STAGES,
  CONTEXT_ASSEMBLY_STATUSES, CONTEXT_BUDGET_FIELDS, CONTEXT_CANDIDATE_FIELDS,
  CONTEXT_CONFLICT_FIELDS, CONTEXT_CONSUMERS, CONTEXT_DEGRADED_MODES,
  CONTEXT_EVALUATION_DIMENSIONS, CONTEXT_LAYERS, CONTEXT_PACKAGE_FIELDS,
  CONTEXT_PROFILE_FIELDS, CONTEXT_QUALITY_ATTRIBUTES, CONTEXT_REQUEST_FIELDS,
  MEMORY_ORCHESTRATION_OPERATIONS, MEMORY_RETRIEVAL_REQUEST_FIELDS, MEMORY_RETRIEVAL_STATUSES
} from '../context-assembly-orchestration-constants.js';

const METADATA = Object.freeze({
  objectives: CONTEXT_ASSEMBLY_OBJECTIVES,
  consumers: CONTEXT_CONSUMERS,
  profileFields: CONTEXT_PROFILE_FIELDS,
  requestFields: CONTEXT_REQUEST_FIELDS,
  contextLayers: CONTEXT_LAYERS,
  assemblyStages: CONTEXT_ASSEMBLY_STAGES,
  candidateFields: CONTEXT_CANDIDATE_FIELDS,
  memoryRequestFields: MEMORY_RETRIEVAL_REQUEST_FIELDS,
  memoryRetrievalStatuses: MEMORY_RETRIEVAL_STATUSES,
  conflictFields: CONTEXT_CONFLICT_FIELDS,
  budgetFields: CONTEXT_BUDGET_FIELDS,
  packageFields: CONTEXT_PACKAGE_FIELDS,
  assemblyStatuses: CONTEXT_ASSEMBLY_STATUSES,
  contextOperations: CONTEXT_ASSEMBLY_OPERATIONS,
  memoryOperations: MEMORY_ORCHESTRATION_OPERATIONS,
  degradedModes: CONTEXT_DEGRADED_MODES,
  evaluationDimensions: CONTEXT_EVALUATION_DIMENSIONS,
  qualityAttributes: CONTEXT_QUALITY_ATTRIBUTES,
  architecturalRules: CONTEXT_ASSEMBLY_RULES,
  architectureBoundaries: CONTEXT_ASSEMBLY_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  temporaryPurposeBound: 'ARCH-016-06 requires temporaryPurposeBound.',
  minimalAuthorizedContext: 'ARCH-016-06 requires minimalAuthorizedContext.',
  sourcesSeparated: 'ARCH-016-06 requires sourcesSeparated.',
  requestIdentityBound: 'ARCH-016-06 requires requestIdentityBound.',
  authorizationBeforeAcquisition: 'ARCH-016-06 requires authorizationBeforeAcquisition.',
  layerSemanticsPreserved: 'ARCH-016-06 requires layerSemanticsPreserved.',
  instructionSeparation: 'ARCH-016-06 requires instructionSeparation.',
  authorityExternal: 'ARCH-016-06 requires authorityExternal.',
  domainFactsCurrent: 'ARCH-016-06 requires domainFactsCurrent.',
  memoryNonAuthoritative: 'ARCH-016-06 requires memoryNonAuthoritative.',
  memoryNeedExplicit: 'ARCH-016-06 requires memoryNeedExplicit.',
  noMemoryValid: 'ARCH-016-06 requires noMemoryValid.',
  memoryEligibilityFirst: 'ARCH-016-06 requires memoryEligibilityFirst.',
  memoryTypesDistinct: 'ARCH-016-06 requires memoryTypesDistinct.',
  attributionPreserved: 'ARCH-016-06 requires attributionPreserved.',
  conflictVisible: 'ARCH-016-06 requires conflictVisible.',
  currentAuthorityPreferred: 'ARCH-016-06 requires currentAuthorityPreferred.',
  budgetsProtected: 'ARCH-016-06 requires budgetsProtected.',
  summariesDerived: 'ARCH-016-06 requires summariesDerived.',
  packageValidated: 'ARCH-016-06 requires packageValidated.',
  packageImmutable: 'ARCH-016-06 requires packageImmutable.',
  packageBound: 'ARCH-016-06 requires packageBound.',
  reuseReauthorized: 'ARCH-016-06 requires reuseReauthorized.',
  toolResultsValidated: 'ARCH-016-06 requires toolResultsValidated.',
  updatesVersioned: 'ARCH-016-06 requires updatesVersioned.',
  contextDisposed: 'ARCH-016-06 requires contextDisposed.',
  cacheInvalidated: 'ARCH-016-06 requires cacheInvalidated.',
  useNotReinforcement: 'ARCH-016-06 requires useNotReinforcement.',
  writebackCandidateOnly: 'ARCH-016-06 requires writebackCandidateOnly.',
  admissionPreserved: 'ARCH-016-06 requires admissionPreserved.',
  lifecycleStatusAccurate: 'ARCH-016-06 requires lifecycleStatusAccurate.',
  responseValidated: 'ARCH-016-06 requires responseValidated.',
  explicitStatus: 'ARCH-016-06 requires explicitStatus.',
  noFabrication: 'ARCH-016-06 requires noFabrication.',
  isolationEndToEnd: 'ARCH-016-06 requires isolationEndToEnd.',
  evidenceProtected: 'ARCH-016-06 requires evidenceProtected.',
  idempotencyAndConcurrency: 'ARCH-016-06 requires idempotencyAndConcurrency.',
  safeDegradation: 'ARCH-016-06 requires safeDegradation.',
  vendorNeutral: 'ARCH-016-06 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-06 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  contextDurableStore: 'ARCH-016-06 prohibits contextDurableStore.',
  fullConversationDefault: 'ARCH-016-06 prohibits fullConversationDefault.',
  contentGrantsAuthority: 'ARCH-016-06 prohibits contentGrantsAuthority.',
  requestTextDefinesScope: 'ARCH-016-06 prohibits requestTextDefinesScope.',
  rankingEqualsTruth: 'ARCH-016-06 prohibits rankingEqualsTruth.',
  memoryRequiredAlways: 'ARCH-016-06 prohibits memoryRequiredAlways.',
  memoryAuthorizes: 'ARCH-016-06 prohibits memoryAuthorizes.',
  memoryOverridesDomain: 'ARCH-016-06 prohibits memoryOverridesDomain.',
  budgetRemovesSafeguards: 'ARCH-016-06 prohibits budgetRemovesSafeguards.',
  conflictBlended: 'ARCH-016-06 prohibits conflictBlended.',
  packageCrossScopeReuse: 'ARCH-016-06 prohibits packageCrossScopeReuse.',
  modelIsSecurityBoundary: 'ARCH-016-06 prohibits modelIsSecurityBoundary.',
  toolResultTrustedInstruction: 'ARCH-016-06 prohibits toolResultTrustedInstruction.',
  contextWritesMemory: 'ARCH-016-06 prohibits contextWritesMemory.',
  useReinforcesMemory: 'ARCH-016-06 prohibits useReinforcesMemory.',
  candidateAutoAdmitted: 'ARCH-016-06 prohibits candidateAutoAdmitted.',
  expiredContextReused: 'ARCH-016-06 prohibits expiredContextReused.',
  cacheBypassesAuthorization: 'ARCH-016-06 prohibits cacheBypassesAuthorization.',
  degradedWeakensControls: 'ARCH-016-06 prohibits degradedWeakensControls.',
  directDatabaseAccess: 'ARCH-016-06 prohibits directDatabaseAccess.',
  selectsProvider: 'ARCH-016-06 prohibits selectsProvider.'
});

export class ContextAssemblyOrchestrationDescriptor {
  objectives() { return values(METADATA.objectives); }
  consumers() { return values(METADATA.consumers); }
  profileFields() { return values(METADATA.profileFields); }
  requestFields() { return values(METADATA.requestFields); }
  contextLayers() { return values(METADATA.contextLayers); }
  assemblyStages() { return values(METADATA.assemblyStages); }
  candidateFields() { return values(METADATA.candidateFields); }
  memoryRequestFields() { return values(METADATA.memoryRequestFields); }
  memoryRetrievalStatuses() { return values(METADATA.memoryRetrievalStatuses); }
  conflictFields() { return values(METADATA.conflictFields); }
  budgetFields() { return values(METADATA.budgetFields); }
  packageFields() { return values(METADATA.packageFields); }
  assemblyStatuses() { return values(METADATA.assemblyStatuses); }
  contextOperations() { return values(METADATA.contextOperations); }
  memoryOperations() { return values(METADATA.memoryOperations); }
  degradedModes() { return values(METADATA.degradedModes); }
  evaluationDimensions() { return values(METADATA.evaluationDimensions); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof ContextAssemblyOrchestrationProfile
      ? input
      : new ContextAssemblyOrchestrationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Context assembly and memory orchestration profile must have a name.');
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
        errors.push(`Context Assembly and Memory Orchestration must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        CONTEXT_ASSEMBLY_ERROR_CODE,
        'Context Assembly and Memory Orchestration violates ARCH-016-06.',
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
