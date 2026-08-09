import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_RESILIENCE_CONSIDERATIONS,
  AVAILABILITY_EVALUATION_FACTORS,
  CONTROLLED_DEPENDENCY_TARGETS,
  FAILURE_CATEGORIES,
  FUTURE_RELIABILITY_RESILIENCE_DIRECTIONS,
  GRACEFUL_DEGRADATION_APPROACHES,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  OPERATIONAL_CONTINUITY_CAPABILITIES,
  RECOVERY_STRATEGY_CAPABILITIES,
  RELIABILITY_FAILURE_SCENARIOS,
  RELIABILITY_GOVERNANCE_ACTIVITIES,
  RELIABILITY_MODEL_STAGES,
  RELIABILITY_OBSERVABILITY_TELEMETRY,
  RELIABILITY_PRINCIPLES,
  RELIABILITY_RELATIONSHIP_FLOW_STAGES,
  RELIABILITY_RESILIENCE_OBJECTIVES,
  RELIABILITY_SECURITY_CONTROLS,
  RESILIENT_DEPENDENCY_TYPES,
  RETRY_CONSIDERATIONS,
  TIMEOUT_MANAGEMENT_SUPPORTS,
  WORKFLOW_RESILIENCE_TOLERANCES,
  ReliabilityResilienceDescriptor,
  ReliabilityResilienceProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('reliability resilience exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new ReliabilityResilienceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(RELIABILITY_RESILIENCE_OBJECTIVES));
  assert.deepEqual(descriptor.reliabilityModel(), Object.values(RELIABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(RELIABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(RELIABILITY_RELATIONSHIP_FLOW_STAGES));
});

test('reliability resilience exposes failure, recovery, dependency, continuity, observability, security, and governance metadata', () => {
  const descriptor = new ReliabilityResilienceDescriptor();

  assert.ok(descriptor.failureScenarios().includes(RELIABILITY_FAILURE_SCENARIOS.AI_PROVIDER_UNAVAILABILITY));
  assert.ok(descriptor.degradationApproaches().includes(GRACEFUL_DEGRADATION_APPROACHES.HUMAN_INTERVENTION));
  assert.ok(descriptor.controlledDependencyTargets().includes(CONTROLLED_DEPENDENCY_TARGETS.SINGLE_AI_PROVIDERS));
  assert.ok(descriptor.failureCategories().includes(FAILURE_CATEGORIES.CAPACITY_FAILURES));
  assert.ok(descriptor.recoveryCapabilities().includes(RECOVERY_STRATEGY_CAPABILITIES.CONTROLLED_TERMINATION));
  assert.ok(descriptor.retryConsiderations().includes(RETRY_CONSIDERATIONS.DUPLICATE_PREVENTION));
  assert.ok(descriptor.timeoutSupports().includes(TIMEOUT_MANAGEMENT_SUPPORTS.RECOVERY_INITIATION));
  assert.ok(descriptor.dependencyTypes().includes(RESILIENT_DEPENDENCY_TYPES.KNOWLEDGE_REPOSITORIES));
  assert.ok(descriptor.workflowTolerances().includes(WORKFLOW_RESILIENCE_TOLERANCES.RESTART_SCENARIOS));
  assert.ok(descriptor.aiResilienceConsiderations().includes(AI_RESILIENCE_CONSIDERATIONS.MODEL_SUBSTITUTION));
  assert.ok(descriptor.operationalContinuityCapabilities().includes(OPERATIONAL_CONTINUITY_CAPABILITIES.RECOVERY_VALIDATION));
  assert.ok(descriptor.availabilityEvaluationFactors().includes(AVAILABILITY_EVALUATION_FACTORS.BUSINESS_PRIORITIES));
  assert.ok(descriptor.observabilityTelemetry().includes(RELIABILITY_OBSERVABILITY_TELEMETRY.WORKFLOW_PROGRESS));
  assert.ok(descriptor.securityControls().includes(RELIABILITY_SECURITY_CONTROLS.GOVERNANCE));
  assert.ok(descriptor.governanceActivities().includes(RELIABILITY_GOVERNANCE_ACTIVITIES.CONTINUOUS_IMPROVEMENT));
});

test('reliability resilience validates complete resilience architecture profiles', () => {
  const descriptor = new ReliabilityResilienceDescriptor();
  const valid = descriptor.validateReliability(
    new ReliabilityResilienceProfile({
      reliabilityName: 'Enterprise Integration Resilience',
      modelStages: Object.values(RELIABILITY_MODEL_STAGES),
      principles: Object.values(RELIABILITY_PRINCIPLES),
      failureScenarios: Object.values(RELIABILITY_FAILURE_SCENARIOS),
      degradationApproaches: Object.values(GRACEFUL_DEGRADATION_APPROACHES),
      controlledDependencyTargets: Object.values(CONTROLLED_DEPENDENCY_TARGETS),
      failureCategories: Object.values(FAILURE_CATEGORIES),
      recoveryCapabilities: Object.values(RECOVERY_STRATEGY_CAPABILITIES),
      retryConsiderations: Object.values(RETRY_CONSIDERATIONS),
      timeoutSupports: Object.values(TIMEOUT_MANAGEMENT_SUPPORTS),
      dependencyTypes: Object.values(RESILIENT_DEPENDENCY_TYPES),
      workflowTolerances: Object.values(WORKFLOW_RESILIENCE_TOLERANCES),
      aiResilienceConsiderations: Object.values(AI_RESILIENCE_CONSIDERATIONS),
      operationalContinuityCapabilities: Object.values(OPERATIONAL_CONTINUITY_CAPABILITIES),
      availabilityEvaluationFactors: Object.values(AVAILABILITY_EVALUATION_FACTORS),
      observabilityTelemetry: Object.values(RELIABILITY_OBSERVABILITY_TELEMETRY),
      securityControls: Object.values(RELIABILITY_SECURITY_CONTROLS),
      governanceActivities: Object.values(RELIABILITY_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateReliability({
    reliabilityName: '',
    modelStages: [RELIABILITY_MODEL_STAGES.BUSINESS_CAPABILITY],
    principles: [RELIABILITY_PRINCIPLES.ASSUME_FAILURE],
    failureScenarios: [RELIABILITY_FAILURE_SCENARIOS.NETWORK_INTERRUPTION],
    degradationApproaches: [GRACEFUL_DEGRADATION_APPROACHES.REDUCED_FUNCTIONALITY],
    controlledDependencyTargets: [CONTROLLED_DEPENDENCY_TARGETS.INDIVIDUAL_VENDORS],
    failureCategories: [FAILURE_CATEGORIES.TEMPORARY_FAILURES],
    recoveryCapabilities: [RECOVERY_STRATEGY_CAPABILITIES.RETRY],
    retryConsiderations: [RETRY_CONSIDERATIONS.RETRY_ELIGIBILITY],
    timeoutSupports: [TIMEOUT_MANAGEMENT_SUPPORTS.FAILURE_DETECTION],
    dependencyTypes: [RESILIENT_DEPENDENCY_TYPES.BUSINESS_SERVICES],
    workflowTolerances: [WORKFLOW_RESILIENCE_TOLERANCES.DELAYED_PARTICIPANTS],
    aiResilienceConsiderations: [AI_RESILIENCE_CONSIDERATIONS.PROVIDER_AVAILABILITY],
    operationalContinuityCapabilities: [OPERATIONAL_CONTINUITY_CAPABILITIES.MONITORING],
    availabilityEvaluationFactors: [AVAILABILITY_EVALUATION_FACTORS.CRITICALITY],
    observabilityTelemetry: [RELIABILITY_OBSERVABILITY_TELEMETRY.AVAILABILITY],
    securityControls: [RELIABILITY_SECURITY_CONTROLS.IDENTITY],
    governanceActivities: [RELIABILITY_GOVERNANCE_ACTIVITIES.DEPENDENCY_REVIEWS],
    assumesFailure: false,
    isolatesFailures: false,
    preservesBusinessContinuity: false,
    supportsGracefulDegradation: false,
    enablesIndependentRecovery: false,
    idempotencyConsideredDuringContractDesign: false,
    timeoutReflectsBusinessRequirements: false,
    dependencyFailuresObservableRecoverable: false,
    aiFailuresNotAutomaticBusinessFailures: false,
    availabilityEvaluatedAtBusinessCapabilityLevel: false,
    securityPreservedDuringRecovery: false,
    vendorNeutral: false,
    technologyNeutral: false,
    resiliencyFrameworkSpecific: true,
    infrastructureProductSpecific: true,
    cloudServiceSpecific: true,
    monitoringToolSpecific: true,
    implementationMechanismSpecific: true,
    createsCascadingOperationalProblems: true,
    requiresUnrelatedRestartForRecovery: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Failure Detection/);
  assert.match(invalid.errors.join('\n'), /graceful-degradation/);
  assert.match(invalid.errors.join('\n'), /service-outages/);
  assert.match(invalid.errors.join('\n'), /alternative-processing/);
  assert.match(invalid.errors.join('\n'), /single-ai-providers/);
  assert.match(invalid.errors.join('\n'), /permanent-failures/);
  assert.match(invalid.errors.join('\n'), /compensation/);
  assert.match(invalid.errors.join('\n'), /retry-limits/);
  assert.match(invalid.errors.join('\n'), /resource-protection/);
  assert.match(invalid.errors.join('\n'), /ai-providers/);
  assert.match(invalid.errors.join('\n'), /human-approvals/);
  assert.match(invalid.errors.join('\n'), /model-substitution/);
  assert.match(invalid.errors.join('\n'), /incident-response/);
  assert.match(invalid.errors.join('\n'), /recovery-expectations/);
  assert.match(invalid.errors.join('\n'), /latency/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /failure-analysis/);
  assert.match(invalid.errors.join('\n'), /assume failures/);
  assert.match(invalid.errors.join('\n'), /business continuity/);
  assert.match(invalid.errors.join('\n'), /contract design/);
  assert.match(invalid.errors.join('\n'), /AI failures should not automatically become business failures/);
  assert.match(invalid.errors.join('\n'), /Specific resiliency frameworks are outside ARCH-009-09 scope/);
  assert.match(invalid.errors.join('\n'), /Monitoring tools are outside ARCH-009-09 scope/);
  assert.match(invalid.errors.join('\n'), /cascading operational problems/);
});

test('reliability resilience reports future directions without implementing them', () => {
  const descriptor = new ReliabilityResilienceDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_RELIABILITY_RESILIENCE_DIRECTIONS.AI_ASSISTED_FAILURE_PREDICTION));
  assert.ok(descriptor.futureDirections().includes(FUTURE_RELIABILITY_RESILIENCE_DIRECTIONS.SELF_HEALING_INTEGRATIONS));
  assert.ok(descriptor.futureDirections().includes(FUTURE_RELIABILITY_RESILIENCE_DIRECTIONS.INTELLIGENT_SERVICE_SUBSTITUTION));
});

test('reliability resilience assertion rejects incomplete metadata', () => {
  class IncompleteReliabilityResilienceDescriptor extends ReliabilityResilienceDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteReliabilityResilienceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.RELIABILITY_RESILIENCE_INVALID &&
      error.details.errors.some(message => message.includes('reliability principles'))
  );
});

test('reliability resilience descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ReliabilityResilienceDescriptor');

  assert.ok(descriptor instanceof ReliabilityResilienceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
