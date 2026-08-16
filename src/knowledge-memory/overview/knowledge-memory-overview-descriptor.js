import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeMemoryOverviewProfile } from '../contracts/knowledge-memory-overview-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_AUTHORITY_CLASSES,
  KNOWLEDGE_AUTHORITY_PRECEDENCE,
  KNOWLEDGE_DOMAINS,
  KNOWLEDGE_FRESHNESS_STATES,
  KNOWLEDGE_MEMORY_BOUNDARIES,
  KNOWLEDGE_MEMORY_CAPABILITIES,
  KNOWLEDGE_MEMORY_CONCEPTS,
  KNOWLEDGE_MEMORY_DEGRADED_MODES,
  KNOWLEDGE_MEMORY_NON_OBJECTIVES,
  KNOWLEDGE_MEMORY_OBJECTIVES,
  KNOWLEDGE_MEMORY_OVERVIEW_ERROR_CODE,
  KNOWLEDGE_MEMORY_QUALITY_ATTRIBUTES,
  KNOWLEDGE_MEMORY_RULES,
  KNOWLEDGE_RETRIEVAL_METHODS,
  KNOWLEDGE_TENANT_SCOPES,
  MEMORY_CATEGORIES,
  MEMORY_SUBJECTS
} from '../overview-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_MEMORY_OBJECTIVES,
  nonObjectives: KNOWLEDGE_MEMORY_NON_OBJECTIVES,
  concepts: KNOWLEDGE_MEMORY_CONCEPTS,
  authorityPrecedence: KNOWLEDGE_AUTHORITY_PRECEDENCE,
  freshnessStates: KNOWLEDGE_FRESHNESS_STATES,
  authorityClasses: KNOWLEDGE_AUTHORITY_CLASSES,
  knowledgeDomains: KNOWLEDGE_DOMAINS,
  memoryCategories: MEMORY_CATEGORIES,
  memorySubjects: MEMORY_SUBJECTS,
  capabilities: KNOWLEDGE_MEMORY_CAPABILITIES,
  retrievalMethods: KNOWLEDGE_RETRIEVAL_METHODS,
  tenantScopes: KNOWLEDGE_TENANT_SCOPES,
  degradedModes: KNOWLEDGE_MEMORY_DEGRADED_MODES,
  qualityAttributes: KNOWLEDGE_MEMORY_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_MEMORY_RULES,
  architectureBoundaries: KNOWLEDGE_MEMORY_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  domainFactsRemainAuthoritative: 'ARCH-016-01 requires domainFactsRemainAuthoritative.',
  knowledgeSourceAttributable: 'ARCH-016-01 requires knowledgeSourceAttributable.',
  memoryPurposeBound: 'ARCH-016-01 requires memoryPurposeBound.',
  contextTemporary: 'ARCH-016-01 requires contextTemporary.',
  explicitAuthorityPrecedence: 'ARCH-016-01 requires explicitAuthorityPrecedence.',
  freshnessExplicit: 'ARCH-016-01 requires freshnessExplicit.',
  temporalMeaningPreserved: 'ARCH-016-01 requires temporalMeaningPreserved.',
  provenancePreserved: 'ARCH-016-01 requires provenancePreserved.',
  authorizationBeforeRetrieval: 'ARCH-016-01 requires authorizationBeforeRetrieval.',
  tenantPropertyIsolation: 'ARCH-016-01 requires tenantPropertyIsolation.',
  representationsReplaceable: 'ARCH-016-01 requires representationsReplaceable.',
  memoryAdmissionRequired: 'ARCH-016-01 requires memoryAdmissionRequired.',
  memoryProposalAdmissionSeparated: 'ARCH-016-01 requires memoryProposalAdmissionSeparated.',
  correctionAndForgetting: 'ARCH-016-01 requires correctionAndForgetting.',
  derivedLifecyclePropagation: 'ARCH-016-01 requires derivedLifecyclePropagation.',
  contextMinimized: 'ARCH-016-01 requires contextMinimized.',
  conflictResolutionExplicit: 'ARCH-016-01 requires conflictResolutionExplicit.',
  retrievedContentUntrusted: 'ARCH-016-01 requires retrievedContentUntrusted.',
  promptInjectionBoundary: 'ARCH-016-01 requires promptInjectionBoundary.',
  citationsAccessControlled: 'ARCH-016-01 requires citationsAccessControlled.',
  generatedSynthesisDistinct: 'ARCH-016-01 requires generatedSynthesisDistinct.',
  evaluationGoverned: 'ARCH-016-01 requires evaluationGoverned.',
  safeDegradation: 'ARCH-016-01 requires safeDegradation.',
  vendorNeutral: 'ARCH-016-01 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-01 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  replacesDomainDatabases: 'ARCH-016-01 prohibits replacesDomainDatabases.',
  universalDataWarehouse: 'ARCH-016-01 prohibits universalDataWarehouse.',
  retainsEveryConversation: 'ARCH-016-01 prohibits retainsEveryConversation.',
  remembersEveryInteraction: 'ARCH-016-01 prohibits remembersEveryInteraction.',
  storesWorkflowState: 'ARCH-016-01 prohibits storesWorkflowState.',
  storesAgentState: 'ARCH-016-01 prohibits storesAgentState.',
  ownsIdentityAuthorization: 'ARCH-016-01 prohibits ownsIdentityAuthorization.',
  automaticProductionTraining: 'ARCH-016-01 prohibits automaticProductionTraining.',
  similarityEqualsTruth: 'ARCH-016-01 prohibits similarityEqualsTruth.',
  aiProposalBecomesMemory: 'ARCH-016-01 prohibits aiProposalBecomesMemory.',
  contextIsPersistentStore: 'ARCH-016-01 prohibits contextIsPersistentStore.',
  lowerAuthorityOverrides: 'ARCH-016-01 prohibits lowerAuthorityOverrides.',
  directDatabaseAccess: 'ARCH-016-01 prohibits directDatabaseAccess.',
  retrievalFailureMeansAbsent: 'ARCH-016-01 prohibits retrievalFailureMeansAbsent.',
  selectsProvider: 'ARCH-016-01 prohibits selectsProvider.',
  definesLaterDetails: 'ARCH-016-01 prohibits definesLaterDetails.'
});

export class KnowledgeMemoryOverviewDescriptor {
  objectives() { return values(METADATA.objectives); }
  nonObjectives() { return values(METADATA.nonObjectives); }
  concepts() { return values(METADATA.concepts); }
  authorityPrecedence() { return values(METADATA.authorityPrecedence); }
  freshnessStates() { return values(METADATA.freshnessStates); }
  authorityClasses() { return values(METADATA.authorityClasses); }
  knowledgeDomains() { return values(METADATA.knowledgeDomains); }
  memoryCategories() { return values(METADATA.memoryCategories); }
  memorySubjects() { return values(METADATA.memorySubjects); }
  capabilities() { return values(METADATA.capabilities); }
  retrievalMethods() { return values(METADATA.retrievalMethods); }
  tenantScopes() { return values(METADATA.tenantScopes); }
  degradedModes() { return values(METADATA.degradedModes); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeMemoryOverviewProfile
      ? input
      : new KnowledgeMemoryOverviewProfile(input);
    const errors = [];
    if (!profile.platformName) errors.push('Knowledge & Memory overview profile must have a name.');
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
        errors.push(`Knowledge & Memory Overview must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_MEMORY_OVERVIEW_ERROR_CODE,
        'Knowledge & Memory Overview violates ARCH-016-01.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
