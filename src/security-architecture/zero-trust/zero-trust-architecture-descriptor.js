import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_TRUST_REQUIREMENTS,
  DATA_TRUST_RESOURCES,
  DEVICE_TRUST_FACTORS,
  FUTURE_ZERO_TRUST_CAPABILITIES,
  HUMAN_TRUST_REQUIREMENTS,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SERVICE_TO_SERVICE_TRUST_REQUIREMENTS,
  SERVICE_TRUST_REQUIREMENTS,
  TRUST_LIFECYCLE_STAGES,
  WORKLOAD_TRUST_IDENTITIES,
  ZERO_TRUST_BOUNDARY_NAMES,
  ZERO_TRUST_CONTEXT_GROUPS,
  ZERO_TRUST_DECISION_FLOW_STAGES,
  ZERO_TRUST_GOVERNANCE_ACTIVITIES,
  ZERO_TRUST_OBJECTIVES,
  ZERO_TRUST_OBSERVABILITY_EVENTS,
  ZERO_TRUST_PRINCIPLES,
  ZERO_TRUST_RISK_FACTORS,
  ZERO_TRUST_SESSION_REQUIREMENTS,
  ZERO_TRUST_SUBJECT_TYPES
} from '../constants.js';
import { ZeroTrustBoundary } from '../contracts/zero-trust-boundary.js';
import { ZeroTrustEvaluation } from '../contracts/zero-trust-evaluation.js';
import { ZeroTrustValidationResult } from '../contracts/zero-trust-validation-result.js';

const ZERO_TRUST_DECISION_FLOW = Object.freeze([
  ZERO_TRUST_DECISION_FLOW_STAGES.REQUEST,
  ZERO_TRUST_DECISION_FLOW_STAGES.IDENTITY_VERIFICATION,
  ZERO_TRUST_DECISION_FLOW_STAGES.AUTHENTICATION,
  ZERO_TRUST_DECISION_FLOW_STAGES.AUTHORIZATION,
  ZERO_TRUST_DECISION_FLOW_STAGES.CONTEXT_EVALUATION,
  ZERO_TRUST_DECISION_FLOW_STAGES.RISK_ASSESSMENT,
  ZERO_TRUST_DECISION_FLOW_STAGES.POLICY_DECISION,
  ZERO_TRUST_DECISION_FLOW_STAGES.ACCESS_OUTCOME
]);

export class ZeroTrustArchitectureDescriptor {
  philosophy() {
    return 'Never trust. Always verify.';
  }

  objectives() {
    return Object.freeze(Object.values(ZERO_TRUST_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(ZERO_TRUST_PRINCIPLES));
  }

  trustLifecycle() {
    return Object.freeze(Object.values(TRUST_LIFECYCLE_STAGES));
  }

  decisionFlow() {
    return ZERO_TRUST_DECISION_FLOW;
  }

  trustBoundaries() {
    return Object.freeze(Object.values(ZERO_TRUST_BOUNDARY_NAMES));
  }

  subjectTypes() {
    return Object.freeze(Object.values(ZERO_TRUST_SUBJECT_TYPES));
  }

  humanTrustRequirements() {
    return Object.freeze(Object.values(HUMAN_TRUST_REQUIREMENTS));
  }

  serviceTrustRequirements() {
    return Object.freeze(Object.values(SERVICE_TRUST_REQUIREMENTS));
  }

  aiTrustRequirements() {
    return Object.freeze(Object.values(AI_TRUST_REQUIREMENTS));
  }

  deviceTrustFactors() {
    return Object.freeze(Object.values(DEVICE_TRUST_FACTORS));
  }

  workloadTrustIdentities() {
    return Object.freeze(Object.values(WORKLOAD_TRUST_IDENTITIES));
  }

  dataTrustResources() {
    return Object.freeze(Object.values(DATA_TRUST_RESOURCES));
  }

  contextGroups() {
    return Object.freeze(Object.values(ZERO_TRUST_CONTEXT_GROUPS));
  }

  riskFactors() {
    return Object.freeze(Object.values(ZERO_TRUST_RISK_FACTORS));
  }

  sessionRequirements() {
    return Object.freeze(Object.values(ZERO_TRUST_SESSION_REQUIREMENTS));
  }

  serviceToServiceRequirements() {
    return Object.freeze(Object.values(SERVICE_TO_SERVICE_TRUST_REQUIREMENTS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(ZERO_TRUST_OBSERVABILITY_EVENTS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(ZERO_TRUST_GOVERNANCE_ACTIVITIES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_ZERO_TRUST_CAPABILITIES));
  }

  validateEvaluation(evaluationInput) {
    const evaluation = evaluationInput instanceof ZeroTrustEvaluation
      ? evaluationInput
      : new ZeroTrustEvaluation(evaluationInput);
    const errors = [];

    if (!evaluation.request) errors.push('Zero Trust evaluation must identify the request.');
    if (!evaluation.subject) errors.push('Zero Trust evaluation must identify the subject.');
    if (!this.subjectTypes().includes(evaluation.subjectType)) errors.push(`Unsupported Zero Trust subject type: ${evaluation.subjectType}.`);
    if (!this.trustBoundaries().includes(evaluation.boundary)) errors.push(`Unsupported Zero Trust boundary: ${evaluation.boundary}.`);
    appendMissing(errors, evaluation.decisionFlow, this.decisionFlow(), 'Zero Trust decision flow must include');
    appendMissing(errors, evaluation.principles, this.principles(), 'Zero Trust evaluation must apply');
    appendMissing(errors, evaluation.contextGroups, this.contextGroups(), 'Context evaluation should consider');
    appendMissing(errors, evaluation.riskFactors, this.riskFactors(), 'Risk-based trust should consider');
    appendMissing(errors, evaluation.observabilityEvents, this.observabilityEvents(), 'Zero Trust observability should expose');
    appendMissing(errors, evaluation.governanceActivities, this.governanceActivities(), 'Zero Trust governance must include');
    if (evaluation.explicitlyVerified !== true) errors.push('Every request should be explicitly verified.');
    if (evaluation.leastPrivilege !== true) errors.push('Zero Trust must enforce least privilege.');
    if (evaluation.assumesBreach !== true) errors.push('Zero Trust must assume breach.');
    if (evaluation.continuouslyValidated !== true) errors.push('Trust should be continuously validated.');
    if (evaluation.authorizationEvaluated !== true) errors.push('Every protected request requires authorization evaluation.');
    if (evaluation.policyDriven !== true) errors.push('Trust must be established through policy-driven decision making.');
    if (evaluation.auditable !== true) errors.push('Zero Trust actions must remain auditable.');
    if (evaluation.networkTrusted === true) errors.push('Network location alone must never establish trust.');
    if (evaluation.permanentTrust === true) errors.push('Trust is not permanent.');
    if (evaluation.vendorSpecific === true) errors.push('Zero Trust Architecture must remain technology neutral.');

    return validation(errors);
  }

  validateBoundary(boundaryInput) {
    const boundary = boundaryInput instanceof ZeroTrustBoundary
      ? boundaryInput
      : new ZeroTrustBoundary(boundaryInput);
    const errors = [];

    if (!boundary.name) errors.push('Trust boundary must have a name.');
    if (!this.trustBoundaries().includes(boundary.crossing)) errors.push(`Unsupported trust boundary crossing: ${boundary.crossing}.`);
    appendMissing(errors, boundary.subjects, this.subjectTypes(), 'Trust boundary should protect');
    if (boundary.requiresPolicyEvaluation !== true) errors.push('Crossing any trust boundary requires policy evaluation.');
    if (boundary.verifiesIdentity !== true) errors.push('Trust boundary crossing must verify identity.');
    if (boundary.evaluatesContext !== true) errors.push('Trust boundary crossing must evaluate context.');
    if (boundary.assessesRisk !== true) errors.push('Trust boundary crossing must assess risk.');
    if (boundary.enforcesLeastPrivilege !== true) errors.push('Trust boundary crossing must enforce least privilege.');
    if (boundary.auditable !== true) errors.push('Trust boundary crossing must be auditable.');
    if (boundary.networkLocationTrusted === true) errors.push('Network location must not establish trust.');
    if (boundary.infrastructurePlacementTrusted === true) errors.push('Infrastructure placement must not establish trust.');
    if (boundary.vendorSpecific === true) errors.push('Trust boundary controls must remain technology neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Zero Trust Architecture must include all documented objectives.');
    if (this.principles().length !== 4) errors.push('Zero Trust Architecture must include all documented core principles.');
    if (this.trustLifecycle().length !== 4) errors.push('Zero Trust Architecture must include the documented trust lifecycle.');
    if (this.decisionFlow().length !== 8) errors.push('Zero Trust Architecture must include the documented decision flow.');
    if (this.trustBoundaries().length !== 9) errors.push('Zero Trust Architecture must include all documented trust boundaries.');
    if (this.subjectTypes().length !== 7) errors.push('Zero Trust Architecture must include every documented trust subject category.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.ZERO_TRUST_ARCHITECTURE_INVALID,
        'Zero Trust Architecture violates ARCH-008-04.',
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
  return new ZeroTrustValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
