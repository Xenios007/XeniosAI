import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  WORKFLOW_RESILIENCE_TOLERANCES
} from '../constants.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';
import { ReliabilityResilienceProfile } from '../contracts/reliability-resilience-profile.js';

const MODEL = Object.freeze(Object.values(RELIABILITY_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(RELIABILITY_RELATIONSHIP_FLOW_STAGES));

export class ReliabilityResilienceDescriptor {
  objectives() {
    return Object.freeze(Object.values(RELIABILITY_RESILIENCE_OBJECTIVES));
  }

  reliabilityModel() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(RELIABILITY_PRINCIPLES));
  }

  failureScenarios() {
    return Object.freeze(Object.values(RELIABILITY_FAILURE_SCENARIOS));
  }

  degradationApproaches() {
    return Object.freeze(Object.values(GRACEFUL_DEGRADATION_APPROACHES));
  }

  controlledDependencyTargets() {
    return Object.freeze(Object.values(CONTROLLED_DEPENDENCY_TARGETS));
  }

  failureCategories() {
    return Object.freeze(Object.values(FAILURE_CATEGORIES));
  }

  recoveryCapabilities() {
    return Object.freeze(Object.values(RECOVERY_STRATEGY_CAPABILITIES));
  }

  retryConsiderations() {
    return Object.freeze(Object.values(RETRY_CONSIDERATIONS));
  }

  timeoutSupports() {
    return Object.freeze(Object.values(TIMEOUT_MANAGEMENT_SUPPORTS));
  }

  dependencyTypes() {
    return Object.freeze(Object.values(RESILIENT_DEPENDENCY_TYPES));
  }

  workflowTolerances() {
    return Object.freeze(Object.values(WORKFLOW_RESILIENCE_TOLERANCES));
  }

  aiResilienceConsiderations() {
    return Object.freeze(Object.values(AI_RESILIENCE_CONSIDERATIONS));
  }

  operationalContinuityCapabilities() {
    return Object.freeze(Object.values(OPERATIONAL_CONTINUITY_CAPABILITIES));
  }

  availabilityEvaluationFactors() {
    return Object.freeze(Object.values(AVAILABILITY_EVALUATION_FACTORS));
  }

  observabilityTelemetry() {
    return Object.freeze(Object.values(RELIABILITY_OBSERVABILITY_TELEMETRY));
  }

  securityControls() {
    return Object.freeze(Object.values(RELIABILITY_SECURITY_CONTROLS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(RELIABILITY_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_RELIABILITY_RESILIENCE_DIRECTIONS));
  }

  validateReliability(profileInput) {
    const profile = profileInput instanceof ReliabilityResilienceProfile
      ? profileInput
      : new ReliabilityResilienceProfile(profileInput);
    const errors = [];

    if (!profile.reliabilityName) errors.push('Reliability profile must have a name.');
    appendMissing(errors, profile.modelStages, this.reliabilityModel(), 'Reliability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Reliability principles should include');
    appendMissing(errors, profile.failureScenarios, this.failureScenarios(), 'Failure assumptions should include');
    appendMissing(errors, profile.degradationApproaches, this.degradationApproaches(), 'Graceful degradation should include');
    appendMissing(errors, profile.controlledDependencyTargets, this.controlledDependencyTargets(), 'Controlled dependency should minimize dependence on');
    appendMissing(errors, profile.failureCategories, this.failureCategories(), 'Failure categories should include');
    appendMissing(errors, profile.recoveryCapabilities, this.recoveryCapabilities(), 'Recovery strategies should support');
    appendMissing(errors, profile.retryConsiderations, this.retryConsiderations(), 'Retry considerations should include');
    appendMissing(errors, profile.timeoutSupports, this.timeoutSupports(), 'Timeout management should support');
    appendMissing(errors, profile.dependencyTypes, this.dependencyTypes(), 'Dependency resilience should evaluate');
    appendMissing(errors, profile.workflowTolerances, this.workflowTolerances(), 'Workflow resilience should tolerate');
    appendMissing(errors, profile.aiResilienceConsiderations, this.aiResilienceConsiderations(), 'AI resilience should consider');
    appendMissing(errors, profile.operationalContinuityCapabilities, this.operationalContinuityCapabilities(), 'Operational continuity should include');
    appendMissing(errors, profile.availabilityEvaluationFactors, this.availabilityEvaluationFactors(), 'Availability considerations should include');
    appendMissing(errors, profile.observabilityTelemetry, this.observabilityTelemetry(), 'Reliability observability should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'Recovery security should enforce');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Reliability governance should include');
    if (profile.assumesFailure !== true) errors.push('Every integration must assume failures will occur.');
    if (profile.isolatesFailures !== true) errors.push('Failures should remain isolated whenever practical.');
    if (profile.preservesBusinessContinuity !== true) errors.push('Reliability must preserve business continuity.');
    if (profile.supportsGracefulDegradation !== true) errors.push('Business capabilities should support graceful degradation.');
    if (profile.enablesIndependentRecovery !== true) errors.push('Each service should recover independently.');
    if (profile.idempotencyConsideredDuringContractDesign !== true) errors.push('Idempotency should be considered during contract design.');
    if (profile.timeoutReflectsBusinessRequirements !== true) errors.push('Timeout values should reflect business requirements.');
    if (profile.dependencyFailuresObservableRecoverable !== true) errors.push('Dependency failures should remain observable and recoverable.');
    if (profile.aiFailuresNotAutomaticBusinessFailures !== true) errors.push('AI failures should not automatically become business failures.');
    if (profile.availabilityEvaluatedAtBusinessCapabilityLevel !== true) errors.push('Availability should be evaluated at the business capability level.');
    if (profile.securityPreservedDuringRecovery !== true) errors.push('Recovery activities must preserve enterprise security boundaries.');
    if (profile.vendorNeutral !== true) errors.push('Reliability & Resilience must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('Reliability & Resilience must remain technology neutral.');
    if (profile.resiliencyFrameworkSpecific === true) errors.push('Specific resiliency frameworks are outside ARCH-009-09 scope.');
    if (profile.infrastructureProductSpecific === true) errors.push('Infrastructure products are outside ARCH-009-09 scope.');
    if (profile.cloudServiceSpecific === true) errors.push('Cloud services are outside ARCH-009-09 scope.');
    if (profile.monitoringToolSpecific === true) errors.push('Monitoring tools are outside ARCH-009-09 scope.');
    if (profile.implementationMechanismSpecific === true) errors.push('Implementation mechanisms are outside ARCH-009-09 scope.');
    if (profile.createsCascadingOperationalProblems === true) errors.push('Retries should not create cascading operational problems.');
    if (profile.requiresUnrelatedRestartForRecovery === true) errors.push('Recovery should not require restarting unrelated platform capabilities.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Reliability & Resilience must include all documented objectives.');
    if (this.reliabilityModel().length !== 5) errors.push('Reliability & Resilience must include the documented reliability model.');
    if (this.principles().length !== 5) errors.push('Reliability & Resilience must include documented reliability principles.');
    if (this.failureScenarios().length !== 6) errors.push('Reliability & Resilience must include documented failure scenarios.');
    if (this.degradationApproaches().length !== 5) errors.push('Reliability & Resilience must include documented graceful degradation approaches.');
    if (this.controlledDependencyTargets().length !== 4) errors.push('Reliability & Resilience must include documented controlled dependency targets.');
    if (this.failureCategories().length !== 7) errors.push('Reliability & Resilience must include documented failure categories.');
    if (this.recoveryCapabilities().length !== 6) errors.push('Reliability & Resilience must include documented recovery capabilities.');
    if (this.retryConsiderations().length !== 5) errors.push('Reliability & Resilience must include documented retry considerations.');
    if (this.timeoutSupports().length !== 4) errors.push('Reliability & Resilience must include documented timeout supports.');
    if (this.dependencyTypes().length !== 6) errors.push('Reliability & Resilience must include documented dependency types.');
    if (this.workflowTolerances().length !== 5) errors.push('Reliability & Resilience must include documented workflow tolerances.');
    if (this.aiResilienceConsiderations().length !== 6) errors.push('Reliability & Resilience must include documented AI resilience considerations.');
    if (this.operationalContinuityCapabilities().length !== 5) errors.push('Reliability & Resilience must include documented operational continuity capabilities.');
    if (this.availabilityEvaluationFactors().length !== 4) errors.push('Reliability & Resilience must include documented availability factors.');
    if (this.observabilityTelemetry().length !== 7) errors.push('Reliability & Resilience must include documented observability telemetry.');
    if (this.securityControls().length !== 6) errors.push('Reliability & Resilience must include documented security controls.');
    if (this.governanceActivities().length !== 6) errors.push('Reliability & Resilience must include documented governance activities.');
    if (this.relationshipFlow().length !== 6) errors.push('Reliability & Resilience must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('Reliability & Resilience must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.RELIABILITY_RESILIENCE_INVALID,
        'Reliability & Resilience violates ARCH-009-09.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new IntegrationArchitectureValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
