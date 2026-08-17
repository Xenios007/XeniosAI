import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_ACTIVATION_SCOPES, API_BREAKING_CHANGE_TYPES, API_COMPATIBILITY_CLASSIFICATIONS,
  API_COMPATIBILITY_DIMENSIONS, API_DEPRECATION_NOTICE_FIELDS, API_EMERGENCY_TRIGGERS,
  API_EXCEPTION_FIELDS, API_LIFECYCLE_ARCHITECTURAL_RULES, API_LIFECYCLE_BOUNDARIES,
  API_LIFECYCLE_DOMAINS, API_LIFECYCLE_GATES, API_LIFECYCLE_METRICS, API_LIFECYCLE_OBJECTIVES,
  API_LIFECYCLE_OPERATIONS, API_LIFECYCLE_VERSIONING_COMPATIBILITY_ERROR_CODE,
  API_ORPHAN_DETECTION_SIGNALS, API_PARALLEL_VERSION_REQUIREMENTS,
  API_PRODUCT_LIFECYCLE_STATES, API_RETIREMENT_READINESS_FIELDS, API_ROLLBACK_SAFETY_FIELDS,
  API_SEMVER_COMPONENTS, API_VERSION_IDENTITY_TYPES, API_VERSION_ROUTING_PROHIBITIONS,
  ApiLifecycleVersioningCompatibilityDescriptor, ApiLifecycleVersioningCompatibilityProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-04 exposes lifecycle objectives, domains, states, gates, version identities, semver, boundaries, and dimensions', () => {
  const descriptor = new ApiLifecycleVersioningCompatibilityDescriptor();
  assert.ok(descriptor.objectives().includes(API_LIFECYCLE_OBJECTIVES.EVIDENCE_CLASSIFICATION));
  assert.ok(descriptor.lifecycleDomains().includes(API_LIFECYCLE_DOMAINS.CONSUMER_ADOPTION));
  assert.ok(descriptor.lifecycleStates().includes(API_PRODUCT_LIFECYCLE_STATES.ARCHIVED));
  assert.ok(descriptor.transitionFields().includes('rollback-or-reversal-behavior'));
  assert.ok(descriptor.gates().includes(API_LIFECYCLE_GATES.RETIREMENT));
  assert.ok(descriptor.versionIdentityTypes().includes(API_VERSION_IDENTITY_TYPES.POLICY_VERSION));
  assert.ok(descriptor.semverComponents().includes(API_SEMVER_COMPONENTS.MAJOR));
  assert.ok(descriptor.compatibilityBoundaryFields().includes('explicit-exclusions'));
  assert.ok(descriptor.compatibilityDimensions().includes(API_COMPATIBILITY_DIMENSIONS.SDK));
  assert.ok(descriptor.compatibilityClassifications().includes(API_COMPATIBILITY_CLASSIFICATIONS.UNKNOWN));
});

test('ARCH-017-04 exposes change classification, release, activation, parallel version, routing, migration, deprecation, exception, and retirement metadata', () => {
  const descriptor = new ApiLifecycleVersioningCompatibilityDescriptor();
  assert.ok(descriptor.potentiallyCompatibleChanges().includes('add-response-field-with-unknown-field-tolerance'));
  assert.ok(descriptor.conditionallyCompatibleChanges().includes('new-sdk-behavior-behind-explicit-configuration'));
  assert.ok(descriptor.breakingChangeTypes().includes(API_BREAKING_CHANGE_TYPES.CHANGE_FIELD_MEANING));
  assert.ok(descriptor.changeAssessmentFields().includes('compatibility-dimensions'));
  assert.ok(descriptor.releaseActivationFields().includes('controlled-suspension-capability'));
  assert.ok(descriptor.activationScopes().includes(API_ACTIVATION_SCOPES.CONSUMER_CLASS));
  assert.ok(descriptor.parallelVersionRequirements().includes(API_PARALLEL_VERSION_REQUIREMENTS.EXIT_DATE));
  assert.ok(descriptor.versionRoutingProhibitions().includes(API_VERSION_ROUTING_PROHIBITIONS.HIDDEN_HEURISTICS));
  assert.ok(descriptor.migrationPlanFields().includes('completion-criteria'));
  assert.ok(descriptor.deprecationNoticeFields().includes(API_DEPRECATION_NOTICE_FIELDS.RETIREMENT_TARGET));
  assert.ok(descriptor.deprecationEnforcementMechanisms().includes('new-access-restrictions'));
  assert.ok(descriptor.exceptionFields().includes(API_EXCEPTION_FIELDS.COMPENSATING_CONTROLS));
  assert.ok(descriptor.retirementReadinessFields().includes(API_RETIREMENT_READINESS_FIELDS.DATA_CACHE_DISPOSITION));
});

test('ARCH-017-04 exposes emergency, rollback, orphan, observability, evidence, metrics, operations, rules, and boundaries', () => {
  const descriptor = new ApiLifecycleVersioningCompatibilityDescriptor();
  assert.ok(descriptor.emergencyTriggers().includes(API_EMERGENCY_TRIGGERS.CROSS_TENANT_EXPOSURE));
  assert.ok(descriptor.rollbackSafetyFields().includes(API_ROLLBACK_SAFETY_FIELDS.STATE_INTERPRETABLE));
  assert.ok(descriptor.orphanDetectionSignals().includes(API_ORPHAN_DETECTION_SIGNALS.RELEASE_WITHOUT_CONTRACT));
  assert.ok(descriptor.observabilityFields().includes('retirement-readiness'));
  assert.ok(descriptor.evidenceTypes().includes('emergency-actions'));
  assert.ok(descriptor.metrics().includes(API_LIFECYCLE_METRICS.COMPATIBILITY_DEFECT_RATE));
  assert.ok(descriptor.lifecycleOperations().includes(API_LIFECYCLE_OPERATIONS.RECORD_COMPATIBILITY));
  assert.ok(descriptor.architecturalRules().includes(API_LIFECYCLE_ARCHITECTURAL_RULES.UNKNOWN_NOT_COMPATIBLE));
  assert.ok(descriptor.architectureBoundaries().includes(API_LIFECYCLE_BOUNDARIES.INTERACTION_SEMANTICS));
});

test('ARCH-017-04 validates complete profiles and rejects lifecycle/versioning shortcuts', () => {
  const descriptor = new ApiLifecycleVersioningCompatibilityDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const validation = descriptor.validateProfile({
    continuousOwnership: false,
    distinctLifecycleIdentities: false,
    compatibilityBeyondSyntax: false,
    unknownNotCompatible: false,
    lifecycleCollapsed: true,
    versionAvoidsImpactAnalysis: true,
    syntaxOnlyCompatibility: true,
    unknownReleasedAsCompatible: true,
    unboundedParallelVersions: true,
    routingUsesHiddenHeuristics: true,
    exceptionPermanent: true,
    retirementReusesIdentity: true,
    replacesProductModel: true
  });

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /stable-contract-commitments/);
  assert.match(validation.errors.join('\n'), /requires continuous ownership/);
  assert.match(validation.errors.join('\n'), /prohibits collapsing product, contract, release, SDK/);
  assert.match(validation.errors.join('\n'), /does not replace ARCH-017-02/);
});

test('ARCH-017-04 detects incomplete lifecycle metadata', () => {
  class IncompleteDescriptor extends ApiLifecycleVersioningCompatibilityDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_LIFECYCLE_VERSIONING_COMPATIBILITY_ERROR_CODE
  );
});

test('ARCH-017-04 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('ApiLifecycleVersioningCompatibilityDescriptor');
  assert.ok(descriptor instanceof ApiLifecycleVersioningCompatibilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'lifecycleDomains', 'lifecycleStates', 'transitionFields', 'gates',
    'versionIdentityTypes', 'semverComponents', 'compatibilityBoundaryFields',
    'compatibilityDimensions', 'compatibilityClassifications', 'potentiallyCompatibleChanges',
    'conditionallyCompatibleChanges', 'breakingChangeTypes', 'changeAssessmentFields',
    'releaseActivationFields', 'activationScopes', 'parallelVersionRequirements',
    'versionRoutingProhibitions', 'migrationPlanFields', 'deprecationNoticeFields',
    'deprecationEnforcementMechanisms', 'exceptionFields', 'retirementReadinessFields',
    'emergencyTriggers', 'rollbackSafetyFields', 'orphanDetectionSignals', 'observabilityFields',
    'evidenceTypes', 'metrics', 'lifecycleOperations', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new ApiLifecycleVersioningCompatibilityProfile({
    profileName: 'API Lifecycle, Versioning, and Compatibility',
    ...metadata
  });
}
