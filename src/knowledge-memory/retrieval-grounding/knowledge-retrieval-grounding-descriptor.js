import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeRetrievalGroundingProfile } from '../contracts/knowledge-retrieval-grounding-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_CANDIDATE_FIELDS,
  KNOWLEDGE_CITATION_FIELDS,
  KNOWLEDGE_DEGRADED_RETRIEVAL_MODES,
  KNOWLEDGE_ELIGIBLE_CORPUS_FACTORS,
  KNOWLEDGE_GROUNDING_PACKAGE_FIELDS,
  KNOWLEDGE_RETRIEVAL_BOUNDARIES,
  KNOWLEDGE_RETRIEVAL_CONSUMERS,
  KNOWLEDGE_RETRIEVAL_ERROR_CODE,
  KNOWLEDGE_RETRIEVAL_EVALUATION_DIMENSIONS,
  KNOWLEDGE_RETRIEVAL_OBJECTIVES,
  KNOWLEDGE_RETRIEVAL_PURPOSES,
  KNOWLEDGE_RETRIEVAL_QUALITY_ATTRIBUTES,
  KNOWLEDGE_RETRIEVAL_RULES,
  KNOWLEDGE_RETRIEVAL_TIMEOUTS,
  KNOWLEDGE_RESULT_STATUSES,
  KNOWLEDGE_SEARCH_METHODS,
  KNOWLEDGE_SEARCH_PLAN_FIELDS
} from '../retrieval-grounding-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_RETRIEVAL_OBJECTIVES,
  consumers: KNOWLEDGE_RETRIEVAL_CONSUMERS,
  purposes: KNOWLEDGE_RETRIEVAL_PURPOSES,
  searchMethods: KNOWLEDGE_SEARCH_METHODS,
  eligibleCorpusFactors: KNOWLEDGE_ELIGIBLE_CORPUS_FACTORS,
  searchPlanFields: KNOWLEDGE_SEARCH_PLAN_FIELDS,
  candidateFields: KNOWLEDGE_CANDIDATE_FIELDS,
  resultStatuses: KNOWLEDGE_RESULT_STATUSES,
  groundingPackageFields: KNOWLEDGE_GROUNDING_PACKAGE_FIELDS,
  citationFields: KNOWLEDGE_CITATION_FIELDS,
  degradedModes: KNOWLEDGE_DEGRADED_RETRIEVAL_MODES,
  timeoutLayers: KNOWLEDGE_RETRIEVAL_TIMEOUTS,
  evaluationDimensions: KNOWLEDGE_RETRIEVAL_EVALUATION_DIMENSIONS,
  qualityAttributes: KNOWLEDGE_RETRIEVAL_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_RETRIEVAL_RULES,
  architectureBoundaries: KNOWLEDGE_RETRIEVAL_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  retrievalIsEvidence: 'ARCH-016-04 requires retrievalIsEvidence.',
  authenticatedPurposeBound: 'ARCH-016-04 requires authenticatedPurposeBound.',
  authorizationBeforeSearch: 'ARCH-016-04 requires authorizationBeforeSearch.',
  noCandidateLeakage: 'ARCH-016-04 requires noCandidateLeakage.',
  eligibleCorpusConstrained: 'ARCH-016-04 requires eligibleCorpusConstrained.',
  lifecycleEligibility: 'ARCH-016-04 requires lifecycleEligibility.',
  historicalProfileExplicit: 'ARCH-016-04 requires historicalProfileExplicit.',
  trustedScopeExternal: 'ARCH-016-04 requires trustedScopeExternal.',
  methodSelectionExplicit: 'ARCH-016-04 requires methodSelectionExplicit.',
  methodSemanticsDistinct: 'ARCH-016-04 requires methodSemanticsDistinct.',
  similarityNonAuthoritative: 'ARCH-016-04 requires similarityNonAuthoritative.',
  compatibilityPreserved: 'ARCH-016-04 requires compatibilityPreserved.',
  domainFactsQueried: 'ARCH-016-04 requires domainFactsQueried.',
  hybridProvenance: 'ARCH-016-04 requires hybridProvenance.',
  scoresNormalized: 'ARCH-016-04 requires scoresNormalized.',
  authorityFreshnessConstrained: 'ARCH-016-04 requires authorityFreshnessConstrained.',
  personalizationBounded: 'ARCH-016-04 requires personalizationBounded.',
  conflictPreserved: 'ARCH-016-04 requires conflictPreserved.',
  resultBudgetsBounded: 'ARCH-016-04 requires resultBudgetsBounded.',
  explicitResultStatus: 'ARCH-016-04 requires explicitResultStatus.',
  noFabrication: 'ARCH-016-04 requires noFabrication.',
  groundingAttributable: 'ARCH-016-04 requires groundingAttributable.',
  citationsStable: 'ARCH-016-04 requires citationsStable.',
  claimSupportValidated: 'ARCH-016-04 requires claimSupportValidated.',
  instructionBoundary: 'ARCH-016-04 requires instructionBoundary.',
  actionSeparatelyAuthorized: 'ARCH-016-04 requires actionSeparatelyAuthorized.',
  searchConfigurationVersioned: 'ARCH-016-04 requires searchConfigurationVersioned.',
  evaluationGoverned: 'ARCH-016-04 requires evaluationGoverned.',
  projectionsReconciled: 'ARCH-016-04 requires projectionsReconciled.',
  safeDegradation: 'ARCH-016-04 requires safeDegradation.',
  retrievalEvidenceProtected: 'ARCH-016-04 requires retrievalEvidenceProtected.',
  vendorNeutral: 'ARCH-016-04 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-04 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  securityIsRankingBoost: 'ARCH-016-04 prohibits securityIsRankingBoost.',
  postSearchFilteringOnly: 'ARCH-016-04 prohibits postSearchFilteringOnly.',
  queryTextDefinesScope: 'ARCH-016-04 prohibits queryTextDefinesScope.',
  semanticSearchUniversal: 'ARCH-016-04 prohibits semanticSearchUniversal.',
  similarityEqualsTruth: 'ARCH-016-04 prohibits similarityEqualsTruth.',
  scoresDirectlyComparable: 'ARCH-016-04 prohibits scoresDirectlyComparable.',
  rankCreatesAuthority: 'ARCH-016-04 prohibits rankCreatesAuthority.',
  personalizationExpandsCorpus: 'ARCH-016-04 prohibits personalizationExpandsCorpus.',
  deduplicationHidesConflict: 'ARCH-016-04 prohibits deduplicationHidesConflict.',
  emptyResultFabricated: 'ARCH-016-04 prohibits emptyResultFabricated.',
  conflictBecomesConsensus: 'ARCH-016-04 prohibits conflictBecomesConsensus.',
  citationSilentlyRedirects: 'ARCH-016-04 prohibits citationSilentlyRedirects.',
  retrievedContentChangesPolicy: 'ARCH-016-04 prohibits retrievedContentChangesPolicy.',
  groundingAuthorizesAction: 'ARCH-016-04 prohibits groundingAuthorizesAction.',
  cacheBypassesAuthorization: 'ARCH-016-04 prohibits cacheBypassesAuthorization.',
  indexIsLifecycleAuthority: 'ARCH-016-04 prohibits indexIsLifecycleAuthority.',
  degradedModeWeakensSecurity: 'ARCH-016-04 prohibits degradedModeWeakensSecurity.',
  directDatabaseAccess: 'ARCH-016-04 prohibits directDatabaseAccess.',
  selectsSearchProduct: 'ARCH-016-04 prohibits selectsSearchProduct.'
});

export class KnowledgeRetrievalGroundingDescriptor {
  objectives() { return values(METADATA.objectives); }
  consumers() { return values(METADATA.consumers); }
  purposes() { return values(METADATA.purposes); }
  searchMethods() { return values(METADATA.searchMethods); }
  eligibleCorpusFactors() { return values(METADATA.eligibleCorpusFactors); }
  searchPlanFields() { return values(METADATA.searchPlanFields); }
  candidateFields() { return values(METADATA.candidateFields); }
  resultStatuses() { return values(METADATA.resultStatuses); }
  groundingPackageFields() { return values(METADATA.groundingPackageFields); }
  citationFields() { return values(METADATA.citationFields); }
  degradedModes() { return values(METADATA.degradedModes); }
  timeoutLayers() { return values(METADATA.timeoutLayers); }
  evaluationDimensions() { return values(METADATA.evaluationDimensions); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeRetrievalGroundingProfile
      ? input
      : new KnowledgeRetrievalGroundingProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Knowledge retrieval and grounding profile must have a name.');
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
        errors.push(`Retrieval, Search, and Grounding must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_RETRIEVAL_ERROR_CODE,
        'Retrieval, Search, and Grounding violates ARCH-016-04.',
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
