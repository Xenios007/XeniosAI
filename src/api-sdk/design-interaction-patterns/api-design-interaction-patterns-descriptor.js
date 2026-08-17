import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiDesignInteractionPatternsProfile } from '../contracts/api-design-interaction-patterns-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  API_ASYNC_OPERATION_FIELDS, API_BATCH_PATTERN_FIELDS, API_CACHE_BEHAVIOR_FIELDS,
  API_CALLBACK_PATTERN_FIELDS, API_COLLECTION_QUERY_FIELDS, API_COMMAND_ACTION_FIELDS,
  API_COMPLETION_DISTINCTIONS, API_COMPOSITION_PATTERN_FIELDS, API_CONCURRENCY_CONTROLS,
  API_CONFORMANCE_REQUIREMENTS, API_CORRELATION_IDENTIFIERS, API_DEGRADED_OPERATION_MODES,
  API_DESIGN_INTERACTION_PATTERNS_ERROR_CODE, API_DESIGN_PATTERN_ARCHITECTURAL_RULES,
  API_DESIGN_PATTERN_BOUNDARIES, API_ERROR_MODEL_FIELDS, API_EVENT_PATTERN_FIELDS,
  API_EVIDENCE_FIELDS, API_FILTER_SORT_SEARCH_FIELDS, API_IDEMPOTENCY_CONTRACT_FIELDS,
  API_INTERACTION_CLASSES, API_INTERACTION_PATTERN_OBJECTIVES, API_LONG_RUNNING_OPERATION_STATES,
  API_OBSERVABILITY_FIELDS, API_PAGINATION_FIELDS, API_PARTIAL_OUTCOME_FIELDS,
  API_PATTERN_DECISION_RECORD_FIELDS, API_PATTERN_SELECTION_CRITERIA, API_QUERY_CONSISTENCY_MODELS,
  API_QUERY_PATTERN_FIELDS, API_RATE_LIMIT_QUOTA_SCOPES, API_RESOURCE_PATTERN_FIELDS,
  API_RESOURCE_REPRESENTATION_FIELDS, API_STREAM_PATTERN_FIELDS, API_WORKFLOW_AGENT_INTERACTION_FIELDS
} from '../design-interaction-patterns-constants.js';

const METADATA = Object.freeze({
  objectives: API_INTERACTION_PATTERN_OBJECTIVES,
  interactionClasses: API_INTERACTION_CLASSES,
  selectionCriteria: API_PATTERN_SELECTION_CRITERIA,
  resourcePatternFields: API_RESOURCE_PATTERN_FIELDS,
  resourceRepresentationFields: API_RESOURCE_REPRESENTATION_FIELDS,
  queryPatternFields: API_QUERY_PATTERN_FIELDS,
  collectionQueryFields: API_COLLECTION_QUERY_FIELDS,
  paginationFields: API_PAGINATION_FIELDS,
  filterSortSearchFields: API_FILTER_SORT_SEARCH_FIELDS,
  queryConsistencyModels: API_QUERY_CONSISTENCY_MODELS,
  commandActionFields: API_COMMAND_ACTION_FIELDS,
  completionDistinctions: API_COMPLETION_DISTINCTIONS,
  asyncOperationFields: API_ASYNC_OPERATION_FIELDS,
  longRunningOperationStates: API_LONG_RUNNING_OPERATION_STATES,
  idempotencyFields: API_IDEMPOTENCY_CONTRACT_FIELDS,
  concurrencyControls: API_CONCURRENCY_CONTROLS,
  errorModelFields: API_ERROR_MODEL_FIELDS,
  partialOutcomeFields: API_PARTIAL_OUTCOME_FIELDS,
  eventPatternFields: API_EVENT_PATTERN_FIELDS,
  callbackPatternFields: API_CALLBACK_PATTERN_FIELDS,
  streamPatternFields: API_STREAM_PATTERN_FIELDS,
  batchPatternFields: API_BATCH_PATTERN_FIELDS,
  correlationIdentifiers: API_CORRELATION_IDENTIFIERS,
  rateLimitQuotaScopes: API_RATE_LIMIT_QUOTA_SCOPES,
  cacheBehaviorFields: API_CACHE_BEHAVIOR_FIELDS,
  compositionPatternFields: API_COMPOSITION_PATTERN_FIELDS,
  workflowAgentInteractionFields: API_WORKFLOW_AGENT_INTERACTION_FIELDS,
  degradedOperationModes: API_DEGRADED_OPERATION_MODES,
  observabilityFields: API_OBSERVABILITY_FIELDS,
  evidenceFields: API_EVIDENCE_FIELDS,
  conformanceRequirements: API_CONFORMANCE_REQUIREMENTS,
  decisionRecordFields: API_PATTERN_DECISION_RECORD_FIELDS,
  architecturalRules: API_DESIGN_PATTERN_ARCHITECTURAL_RULES,
  architectureBoundaries: API_DESIGN_PATTERN_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  capabilityFirstDesign: 'ARCH-017-03 requires interaction design to begin with owned capability and consumer outcome.',
  explicitInteractionSemantics: 'ARCH-017-03 requires every interaction to make identity, purpose, scope, state change, completion, failure, retry, and evidence explicit.',
  onePrimaryClass: 'ARCH-017-03 requires every operation to have one clear primary interaction class.',
  simplestSemanticPattern: 'ARCH-017-03 requires the simplest pattern that preserves required semantics.',
  resourcesHideInternals: 'ARCH-017-03 requires resource representations not to expose provider internals.',
  identifiersNotAuthority: 'ARCH-017-03 requires identifiers not to grant authority or prove tenant/property eligibility.',
  boundedAuthorizedCollections: 'ARCH-017-03 requires bounded, authorized, ordered, and safely paginated collections.',
  opaqueScopedPagination: 'ARCH-017-03 requires pagination tokens to be opaque, scoped, and authorization-revalidated.',
  filtersAuthorized: 'ARCH-017-03 requires filters not to enable unauthorized discovery.',
  searchAuthorizationBeforeRelevance: 'ARCH-017-03 requires authorization before search candidate inclusion.',
  freshnessConsistencyDeclared: 'ARCH-017-03 requires consistency and freshness declarations.',
  commandActionIntentBased: 'ARCH-017-03 requires commands and actions to express intent rather than internal state manipulation.',
  acceptanceCompletionDistinct: 'ARCH-017-03 requires acceptance and completion to remain distinct.',
  asyncOperationTraceable: 'ARCH-017-03 requires asynchronous operations to return stable traceable operation references.',
  idempotencyBusinessGuarantee: 'ARCH-017-03 requires idempotency to be a business and provider guarantee.',
  concurrencyContractual: 'ARCH-017-03 requires concurrency semantics to be contractual.',
  retrySafeOnlyWhenEligible: 'ARCH-017-03 requires retry only for eligible errors and idempotent or protected operations.',
  cancellationNotCompensation: 'ARCH-017-03 requires cancellation not to imply compensation or reversal.',
  errorsStructuredSafe: 'ARCH-017-03 requires errors to be structured, stable, safe, correlated, and actionable.',
  partialOutcomesExplicit: 'ARCH-017-03 requires partial outcomes to be explicit.',
  eventsReplayAware: 'ARCH-017-03 requires event consumers to tolerate documented duplicate, delay, ordering, replay, and resumption behavior.',
  callbacksAuthenticatedRetryable: 'ARCH-017-03 requires secure callback delivery with acknowledgement, retry, deduplication, and recovery behavior.',
  streamsBoundedBackpressured: 'ARCH-017-03 requires bounded streams with backpressure and resumption behavior.',
  batchesPerItemControlled: 'ARCH-017-03 requires batch processing to preserve per-item controls and outcomes.',
  correlationSafe: 'ARCH-017-03 requires safe correlation that does not grant access.',
  quotasDoNotExpandAuthority: 'ARCH-017-03 requires quotas not to expand business authorization.',
  cacheScopedAuthorized: 'ARCH-017-03 requires caching to be scoped, authorized, isolated, and deletion-aware.',
  compositionPreservesProviderOwnership: 'ARCH-017-03 requires composition to preserve provider ownership and authoritative sources.',
  workflowStateOwnedByWorkflow: 'ARCH-017-03 requires workflow APIs not to own workflow state or transition rules.',
  agentDiscoveryNoAuthority: 'ARCH-017-03 requires API or tool discovery not to grant agent authority.',
  degradedModeDoesNotWeakenControls: 'ARCH-017-03 requires degraded operation not to weaken security, privacy, isolation, validation, or evidence.',
  telemetryPrivacySafe: 'ARCH-017-03 requires material interaction telemetry to be privacy safe.',
  evidenceProtected: 'ARCH-017-03 requires evidence to be attributable, integrity protected, access controlled, and retention managed.',
  conformanceTestable: 'ARCH-017-03 requires provider and consumer conformance tests.',
  decisionRecordsForUnusualPatterns: 'ARCH-017-03 requires material or unusual interaction choices to be recorded.',
  transportNeutral: 'ARCH-017-03 requires transport, framework, language, cloud, and vendor neutrality.'
});

const REQUIRED_FALSE = Object.freeze({
  beginsWithDatabase: 'ARCH-017-03 prohibits beginning interaction design with a database table.',
  beginsWithTransportVerb: 'ARCH-017-03 prohibits beginning interaction design with a transport verb or route convention.',
  queryMutatesBusinessState: 'ARCH-017-03 prohibits queries from requesting hidden business mutations.',
  resourceExposesPersistence: 'ARCH-017-03 prohibits resource representations from exposing persistence internals.',
  identifierGrantsAccess: 'ARCH-017-03 prohibits identifier knowledge from granting access.',
  paginationTokenCredential: 'ARCH-017-03 prohibits pagination cursors from acting as credentials.',
  filterLeaksUnauthorizedData: 'ARCH-017-03 prohibits filters from leaking unauthorized data through counts, timing, errors, or probing.',
  relevanceGrantsAuthority: 'ARCH-017-03 prohibits search relevance from granting authority.',
  partialUpdateConflatesPresence: 'ARCH-017-03 prohibits partial updates from conflating absent, unchanged, cleared, empty, null, and default.',
  commandInstructsInternalState: 'ARCH-017-03 prohibits commands from instructing providers how to manipulate internal state.',
  queuedMeansCompleted: 'ARCH-017-03 prohibits reporting success merely because work was queued or transmitted.',
  timeoutMeansFailure: 'ARCH-017-03 prohibits treating timeout as proof that a business operation failed.',
  retryAllFailures: 'ARCH-017-03 prohibits retrying all failures.',
  cancellationMeansReversal: 'ARCH-017-03 prohibits treating cancellation as compensation or reversal.',
  errorsExposeSecrets: 'ARCH-017-03 prohibits errors from exposing secrets or sensitive provider internals.',
  exactlyOnceClaimed: 'ARCH-017-03 prohibits claiming universal exactly-once physical delivery.',
  unboundedStreamBuffering: 'ARCH-017-03 prohibits unbounded stream buffering.',
  batchSkipsPerItemAuthorization: 'ARCH-017-03 prohibits batch processing from skipping per-item authorization.',
  correlationGrantsAccess: 'ARCH-017-03 prohibits correlation identifiers from granting access.',
  higherQuotaExpandsAuthority: 'ARCH-017-03 prohibits higher quota from expanding business authorization.',
  cacheMissingTenantProperty: 'ARCH-017-03 prohibits scoped cache keys missing tenant or property dimensions.',
  gatewayDuplicatesDomainRules: 'ARCH-017-03 prohibits gateway composition from duplicating provider business rules.',
  crossServiceAtomicCommand: 'ARCH-017-03 prohibits one API command from implying atomic state transition across independently owned services without specific architecture.',
  sdkInventsRetrySemantics: 'ARCH-017-03 prohibits SDKs from inventing retry, idempotency, or completion semantics.',
  degradedWeakensSecurity: 'ARCH-017-03 prohibits degraded operation from weakening security, privacy, tenant isolation, property isolation, validation, or evidence.',
  agentDescriptionGrantsPermission: 'ARCH-017-03 prohibits API descriptions or SDK methods from granting agent permission.',
  payloadsInTelemetry: 'ARCH-017-03 prohibits payloads, credentials, secrets, and unnecessary personal information in ordinary telemetry.',
  replacesProductModel: 'ARCH-017-03 does not replace ARCH-017-02 product and contract model.',
  definesLifecycleVersioning: 'ARCH-017-03 does not define API lifecycle, versioning, and compatibility.',
  definesSecurityAccess: 'ARCH-017-03 does not define detailed API security, access, and isolation.',
  definesSdkDistribution: 'ARCH-017-03 does not define SDK architecture and distribution.',
  mandatesTransport: 'ARCH-017-03 does not mandate a specific transport, framework, language, cloud, or vendor.'
});

export class ApiDesignInteractionPatternsDescriptor {
  objectives() { return values(METADATA.objectives); }
  interactionClasses() { return values(METADATA.interactionClasses); }
  selectionCriteria() { return values(METADATA.selectionCriteria); }
  resourcePatternFields() { return values(METADATA.resourcePatternFields); }
  resourceRepresentationFields() { return values(METADATA.resourceRepresentationFields); }
  queryPatternFields() { return values(METADATA.queryPatternFields); }
  collectionQueryFields() { return values(METADATA.collectionQueryFields); }
  paginationFields() { return values(METADATA.paginationFields); }
  filterSortSearchFields() { return values(METADATA.filterSortSearchFields); }
  queryConsistencyModels() { return values(METADATA.queryConsistencyModels); }
  commandActionFields() { return values(METADATA.commandActionFields); }
  completionDistinctions() { return values(METADATA.completionDistinctions); }
  asyncOperationFields() { return values(METADATA.asyncOperationFields); }
  longRunningOperationStates() { return values(METADATA.longRunningOperationStates); }
  idempotencyFields() { return values(METADATA.idempotencyFields); }
  concurrencyControls() { return values(METADATA.concurrencyControls); }
  errorModelFields() { return values(METADATA.errorModelFields); }
  partialOutcomeFields() { return values(METADATA.partialOutcomeFields); }
  eventPatternFields() { return values(METADATA.eventPatternFields); }
  callbackPatternFields() { return values(METADATA.callbackPatternFields); }
  streamPatternFields() { return values(METADATA.streamPatternFields); }
  batchPatternFields() { return values(METADATA.batchPatternFields); }
  correlationIdentifiers() { return values(METADATA.correlationIdentifiers); }
  rateLimitQuotaScopes() { return values(METADATA.rateLimitQuotaScopes); }
  cacheBehaviorFields() { return values(METADATA.cacheBehaviorFields); }
  compositionPatternFields() { return values(METADATA.compositionPatternFields); }
  workflowAgentInteractionFields() { return values(METADATA.workflowAgentInteractionFields); }
  degradedOperationModes() { return values(METADATA.degradedOperationModes); }
  observabilityFields() { return values(METADATA.observabilityFields); }
  evidenceFields() { return values(METADATA.evidenceFields); }
  conformanceRequirements() { return values(METADATA.conformanceRequirements); }
  decisionRecordFields() { return values(METADATA.decisionRecordFields); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof ApiDesignInteractionPatternsProfile ? input : new ApiDesignInteractionPatternsProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API Design and Interaction Patterns profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`API Design and Interaction Patterns must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      API_DESIGN_INTERACTION_PATTERNS_ERROR_CODE,
      'API Design and Interaction Patterns violates ARCH-017-03.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
