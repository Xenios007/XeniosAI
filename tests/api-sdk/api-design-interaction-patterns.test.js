import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_ASYNC_OPERATION_FIELDS, API_BATCH_PATTERN_FIELDS, API_CACHE_BEHAVIOR_FIELDS,
  API_CALLBACK_PATTERN_FIELDS, API_COLLECTION_QUERY_FIELDS, API_COMMAND_ACTION_FIELDS,
  API_COMPLETION_DISTINCTIONS, API_CONFORMANCE_REQUIREMENTS, API_CORRELATION_IDENTIFIERS,
  API_DEGRADED_OPERATION_MODES, API_DESIGN_INTERACTION_PATTERNS_ERROR_CODE,
  API_DESIGN_PATTERN_ARCHITECTURAL_RULES, API_DESIGN_PATTERN_BOUNDARIES, API_ERROR_MODEL_FIELDS,
  API_EVENT_PATTERN_FIELDS, API_EVIDENCE_FIELDS, API_IDEMPOTENCY_CONTRACT_FIELDS,
  API_INTERACTION_CLASSES, API_INTERACTION_PATTERN_OBJECTIVES, API_LONG_RUNNING_OPERATION_STATES,
  API_OBSERVABILITY_FIELDS, API_PAGINATION_FIELDS, API_PARTIAL_OUTCOME_FIELDS,
  API_PATTERN_SELECTION_CRITERIA, API_QUERY_CONSISTENCY_MODELS, API_RATE_LIMIT_QUOTA_SCOPES,
  API_STREAM_PATTERN_FIELDS, API_WORKFLOW_AGENT_INTERACTION_FIELDS,
  ApiDesignInteractionPatternsDescriptor, ApiDesignInteractionPatternsProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-03 exposes interaction objectives, classifications, selection, resource, query, collection, pagination, search, consistency, and command metadata', () => {
  const descriptor = new ApiDesignInteractionPatternsDescriptor();
  assert.ok(descriptor.objectives().includes(API_INTERACTION_PATTERN_OBJECTIVES.RECOVERABILITY));
  assert.ok(descriptor.interactionClasses().includes(API_INTERACTION_CLASSES.OPERATIONAL_CONTROL));
  assert.ok(descriptor.selectionCriteria().includes(API_PATTERN_SELECTION_CRITERIA.WORKFLOW_DURABILITY));
  assert.ok(descriptor.resourcePatternFields().includes('tenant-and-property-scope'));
  assert.ok(descriptor.resourceRepresentationFields().includes('freshness-or-source-metadata'));
  assert.ok(descriptor.queryPatternFields().includes('absence-behavior'));
  assert.ok(descriptor.collectionQueryFields().includes(API_COLLECTION_QUERY_FIELDS.RESULT_AUTHORIZATION));
  assert.ok(descriptor.paginationFields().includes(API_PAGINATION_FIELDS.TENANT_PROPERTY_BINDING));
  assert.ok(descriptor.filterSortSearchFields().includes('authorization-before-candidate-inclusion'));
  assert.ok(descriptor.queryConsistencyModels().includes(API_QUERY_CONSISTENCY_MODELS.HISTORICAL));
  assert.ok(descriptor.commandActionFields().includes(API_COMMAND_ACTION_FIELDS.EVIDENCE));
});

test('ARCH-017-03 exposes completion, async, idempotency, concurrency, error, partial outcome, event, callback, stream, and batch metadata', () => {
  const descriptor = new ApiDesignInteractionPatternsDescriptor();
  assert.ok(descriptor.completionDistinctions().includes(API_COMPLETION_DISTINCTIONS.SETTLEMENT));
  assert.ok(descriptor.asyncOperationFields().includes(API_ASYNC_OPERATION_FIELDS.STATUS_MECHANISM));
  assert.ok(descriptor.longRunningOperationStates().includes(API_LONG_RUNNING_OPERATION_STATES.RECONCILIATION_REQUIRED));
  assert.ok(descriptor.idempotencyFields().includes(API_IDEMPOTENCY_CONTRACT_FIELDS.RESPONSE_REPLAY));
  assert.ok(descriptor.concurrencyControls().includes('compare-and-set'));
  assert.ok(descriptor.errorModelFields().includes(API_ERROR_MODEL_FIELDS.REMEDIATION));
  assert.ok(descriptor.partialOutcomeFields().includes(API_PARTIAL_OUTCOME_FIELDS.PENDING_ITEMS));
  assert.ok(descriptor.eventPatternFields().includes(API_EVENT_PATTERN_FIELDS.REPLAY));
  assert.ok(descriptor.callbackPatternFields().includes(API_CALLBACK_PATTERN_FIELDS.DEAD_LETTER));
  assert.ok(descriptor.streamPatternFields().includes(API_STREAM_PATTERN_FIELDS.BACKPRESSURE));
  assert.ok(descriptor.batchPatternFields().includes(API_BATCH_PATTERN_FIELDS.PER_ITEM_AUTHORITY));
});

test('ARCH-017-03 exposes correlation, limits, caching, composition, workflow, agent, degraded, observability, evidence, conformance, decision, rule, and boundary metadata', () => {
  const descriptor = new ApiDesignInteractionPatternsDescriptor();
  assert.ok(descriptor.correlationIdentifiers().includes(API_CORRELATION_IDENTIFIERS.IDEMPOTENCY_IDENTITY));
  assert.ok(descriptor.rateLimitQuotaScopes().includes(API_RATE_LIMIT_QUOTA_SCOPES.RISK_CLASS));
  assert.ok(descriptor.cacheBehaviorFields().includes(API_CACHE_BEHAVIOR_FIELDS.DELETION_PROPAGATION));
  assert.ok(descriptor.compositionPatternFields().includes('per-provider-authorization'));
  assert.ok(descriptor.workflowAgentInteractionFields().includes(API_WORKFLOW_AGENT_INTERACTION_FIELDS.RESULT_VALIDATION));
  assert.ok(descriptor.degradedOperationModes().includes(API_DEGRADED_OPERATION_MODES.SUSPENDED_DELIVERY));
  assert.ok(descriptor.observabilityFields().includes(API_OBSERVABILITY_FIELDS.DEGRADED_STATE));
  assert.ok(descriptor.evidenceFields().includes(API_EVIDENCE_FIELDS.AUTHORIZATION_DECISION));
  assert.ok(descriptor.conformanceRequirements().includes(API_CONFORMANCE_REQUIREMENTS.STREAM_BACKPRESSURE_RESUMPTION));
  assert.ok(descriptor.decisionRecordFields().includes('compatibility-impact'));
  assert.ok(descriptor.architecturalRules().includes(API_DESIGN_PATTERN_ARCHITECTURAL_RULES.NO_EXACTLY_ONCE));
  assert.ok(descriptor.architectureBoundaries().includes(API_DESIGN_PATTERN_BOUNDARIES.SECURITY_ACCESS));
});

test('ARCH-017-03 validates complete profiles and rejects ambiguous interaction shortcuts', () => {
  const descriptor = new ApiDesignInteractionPatternsDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const validation = descriptor.validateProfile({
    capabilityFirstDesign: false,
    explicitInteractionSemantics: false,
    onePrimaryClass: false,
    acceptanceCompletionDistinct: false,
    retrySafeOnlyWhenEligible: false,
    beginsWithDatabase: true,
    queryMutatesBusinessState: true,
    identifierGrantsAccess: true,
    timeoutMeansFailure: true,
    exactlyOnceClaimed: true,
    cacheMissingTenantProperty: true,
    agentDescriptionGrantsPermission: true,
    payloadsInTelemetry: true,
    mandatesTransport: true
  });

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /clear-business-semantics/);
  assert.match(validation.errors.join('\n'), /requires interaction design to begin/);
  assert.match(validation.errors.join('\n'), /prohibits beginning interaction design with a database table/);
  assert.match(validation.errors.join('\n'), /does not mandate a specific transport/);
});

test('ARCH-017-03 detects incomplete interaction metadata', () => {
  class IncompleteDescriptor extends ApiDesignInteractionPatternsDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_DESIGN_INTERACTION_PATTERNS_ERROR_CODE
  );
});

test('ARCH-017-03 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('ApiDesignInteractionPatternsDescriptor');
  assert.ok(descriptor instanceof ApiDesignInteractionPatternsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'interactionClasses', 'selectionCriteria', 'resourcePatternFields',
    'resourceRepresentationFields', 'queryPatternFields', 'collectionQueryFields',
    'paginationFields', 'filterSortSearchFields', 'queryConsistencyModels',
    'commandActionFields', 'completionDistinctions', 'asyncOperationFields',
    'longRunningOperationStates', 'idempotencyFields', 'concurrencyControls',
    'errorModelFields', 'partialOutcomeFields', 'eventPatternFields', 'callbackPatternFields',
    'streamPatternFields', 'batchPatternFields', 'correlationIdentifiers',
    'rateLimitQuotaScopes', 'cacheBehaviorFields', 'compositionPatternFields',
    'workflowAgentInteractionFields', 'degradedOperationModes', 'observabilityFields',
    'evidenceFields', 'conformanceRequirements', 'decisionRecordFields',
    'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new ApiDesignInteractionPatternsProfile({ profileName: 'API Design and Interaction Patterns', ...metadata });
}
