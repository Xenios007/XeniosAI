import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  OBSERVABILITY_CONSISTENCY_AREAS,
  OBSERVABILITY_CORRELATION_TARGETS,
  OBSERVABILITY_EXPLAINABILITY_TARGETS,
  OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  OBSERVABILITY_PRINCIPLE_NAMES,
  OBSERVABILITY_PRINCIPLE_OBJECTIVES,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES,
  OBSERVABILITY_PRIVACY_SECURITY_REQUIREMENTS,
  OBSERVABILITY_QUALITY_ATTRIBUTES,
  OBSERVABILITY_RESPONSIBILITY_OWNERS,
  OPERATIONAL_EVIDENCE_TYPES
} from '../constants.js';
import { ObservabilityPrinciple } from '../contracts/observability-principle.js';
import { ObservabilityResponsibility } from '../contracts/observability-responsibility.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const PRINCIPLE_SEQUENCE = Object.freeze([
  OBSERVABILITY_PRINCIPLE_NAMES.BUSINESS_DRIVEN_OBSERVABILITY,
  OBSERVABILITY_PRINCIPLE_NAMES.OBSERVABILITY_BY_DESIGN,
  OBSERVABILITY_PRINCIPLE_NAMES.END_TO_END_CORRELATION,
  OBSERVABILITY_PRINCIPLE_NAMES.ARCHITECTURAL_CONSISTENCY,
  OBSERVABILITY_PRINCIPLE_NAMES.EXPLAINABILITY,
  OBSERVABILITY_PRINCIPLE_NAMES.MINIMAL_COUPLING,
  OBSERVABILITY_PRINCIPLE_NAMES.CONTINUOUS_EVIDENCE,
  OBSERVABILITY_PRINCIPLE_NAMES.GOVERNANCE_ALIGNMENT,
  OBSERVABILITY_PRINCIPLE_NAMES.PRIVACY_AND_SECURITY,
  OBSERVABILITY_PRINCIPLE_NAMES.TECHNOLOGY_NEUTRALITY
]);

const RELATIONSHIP_FLOW = Object.freeze([
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.BUSINESS_ALIGNMENT,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.OBSERVABILITY_BY_DESIGN,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.CONTINUOUS_EVIDENCE,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.CORRELATION,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.EXPLAINABILITY,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.GOVERNANCE,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.ENTERPRISE_IMPROVEMENT
]);

const DEFAULT_PRINCIPLES = Object.freeze([
  principle(OBSERVABILITY_PRINCIPLE_NAMES.BUSINESS_DRIVEN_OBSERVABILITY, 'Business capabilities define what is important to observe.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.BUSINESS_ALIGNMENT
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.OBSERVABILITY_BY_DESIGN, 'Architectural components are designed with observability from inception.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.CONSISTENT_ARCHITECTURAL_GUIDANCE
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.END_TO_END_CORRELATION, 'Operational evidence is correlated across users, processes, services, AI, workflows, integrations, and infrastructure.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.ENTERPRISE_WIDE_VISIBILITY,
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.RELIABLE_DIAGNOSTICS
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.ARCHITECTURAL_CONSISTENCY, 'Observability follows consistent enterprise standards.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.SUSTAINABLE_OBSERVABILITY
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.EXPLAINABILITY, 'Significant architectural behavior is explainable using observable evidence.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.EXPLAINABLE_OPERATIONS
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.MINIMAL_COUPLING, 'Observability enhances architecture without constraining independent services.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.SUSTAINABLE_OBSERVABILITY
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.CONTINUOUS_EVIDENCE, 'Operational evidence is generated throughout enterprise operation lifecycles.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.RELIABLE_DIAGNOSTICS
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.GOVERNANCE_ALIGNMENT, 'Reliable operational evidence supports governance activities.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.GOVERNANCE_SUPPORT
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.PRIVACY_AND_SECURITY, 'Observability respects enterprise security and privacy requirements.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.GOVERNANCE_SUPPORT
  ]),
  principle(OBSERVABILITY_PRINCIPLE_NAMES.TECHNOLOGY_NEUTRALITY, 'Observability architecture remains independent of vendors and technology products.', [
    OBSERVABILITY_PRINCIPLE_OBJECTIVES.TECHNOLOGY_INDEPENDENCE
  ])
]);

const DEFAULT_RESPONSIBILITIES = Object.freeze([
  responsibility('Business Observability', OBSERVABILITY_RESPONSIBILITY_OWNERS.BUSINESS_CAPABILITY_OWNER),
  responsibility('Service Observability', OBSERVABILITY_RESPONSIBILITY_OWNERS.SERVICE_OWNER),
  responsibility('AI Observability', OBSERVABILITY_RESPONSIBILITY_OWNERS.AI_ARCHITECTURE),
  responsibility('Security Observability', OBSERVABILITY_RESPONSIBILITY_OWNERS.SECURITY_ARCHITECTURE),
  responsibility('Operational Observability', OBSERVABILITY_RESPONSIBILITY_OWNERS.PLATFORM_OPERATIONS),
  responsibility('Governance', OBSERVABILITY_RESPONSIBILITY_OWNERS.ENTERPRISE_ARCHITECTURE)
]);

export class ObservabilityPrinciplesDescriptor {
  constructor({ principles = DEFAULT_PRINCIPLES, responsibilities = DEFAULT_RESPONSIBILITIES } = {}) {
    this.principles = new Map();
    this.responsibilities = new Map();

    for (const observabilityPrinciple of principles) this.registerPrinciple(observabilityPrinciple);
    for (const observabilityResponsibility of responsibilities) this.registerResponsibility(observabilityResponsibility);
  }

  objectives() {
    return Object.freeze(Object.values(OBSERVABILITY_PRINCIPLE_OBJECTIVES));
  }

  principleSequence() {
    return PRINCIPLE_SEQUENCE;
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  correlationTargets() {
    return Object.freeze(Object.values(OBSERVABILITY_CORRELATION_TARGETS));
  }

  consistencyAreas() {
    return Object.freeze(Object.values(OBSERVABILITY_CONSISTENCY_AREAS));
  }

  explainabilityTargets() {
    return Object.freeze(Object.values(OBSERVABILITY_EXPLAINABILITY_TARGETS));
  }

  evidenceTypes() {
    return Object.freeze(Object.values(OPERATIONAL_EVIDENCE_TYPES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_ACTIVITIES));
  }

  privacySecurityRequirements() {
    return Object.freeze(Object.values(OBSERVABILITY_PRIVACY_SECURITY_REQUIREMENTS));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES));
  }

  listPrinciples() {
    return Object.freeze([...this.principles.values()]);
  }

  listResponsibilities() {
    return Object.freeze([...this.responsibilities.values()]);
  }

  getPrinciple(principleName) {
    return this.principles.get(principleName);
  }

  registerPrinciple(principleInput) {
    const observabilityPrinciple = principleInput instanceof ObservabilityPrinciple
      ? principleInput
      : new ObservabilityPrinciple(principleInput);
    const result = this.validatePrinciple(observabilityPrinciple);

    if (!result.isValid) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_PRINCIPLE_INVALID,
        'Observability principle violates ARCH-010-02.',
        { errors: result.errors }
      );
    }

    this.principles.set(observabilityPrinciple.principleName, observabilityPrinciple);
    return this;
  }

  registerResponsibility(responsibilityInput) {
    const observabilityResponsibility = responsibilityInput instanceof ObservabilityResponsibility
      ? responsibilityInput
      : new ObservabilityResponsibility(responsibilityInput);
    const result = this.validateResponsibility(observabilityResponsibility);

    if (!result.isValid) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_RESPONSIBILITY_INVALID,
        'Observability responsibility violates ARCH-010-02.',
        { errors: result.errors }
      );
    }

    this.responsibilities.set(observabilityResponsibility.responsibility, observabilityResponsibility);
    return this;
  }

  validatePrinciple(principleInput) {
    const observabilityPrinciple = principleInput instanceof ObservabilityPrinciple
      ? principleInput
      : new ObservabilityPrinciple(principleInput);
    const errors = [];

    if (!Object.values(OBSERVABILITY_PRINCIPLE_NAMES).includes(observabilityPrinciple.principleName)) errors.push(`Unsupported observability principle: ${observabilityPrinciple.principleName}.`);
    if (!observabilityPrinciple.responsibility) errors.push('Observability principle must define its responsibility.');
    if (observabilityPrinciple.requiredCapabilities.length === 0) errors.push('Observability principle must define required capabilities.');
    if (observabilityPrinciple.businessAligned !== true) errors.push('Observability principles must align with business objectives.');
    if (observabilityPrinciple.supportsCorrelation !== true) errors.push('Observability principles must support end-to-end correlation.');
    if (observabilityPrinciple.supportsExplainability !== true) errors.push('Observability principles must support explainability.');
    if (observabilityPrinciple.supportsGovernance !== true) errors.push('Observability principles must support enterprise governance.');
    if (observabilityPrinciple.preservesSecurityAndPrivacy !== true) errors.push('Observability principles must preserve security and privacy.');
    if (observabilityPrinciple.minimallyCoupled !== true) errors.push('Observability principles must avoid tight architectural coupling.');
    if (observabilityPrinciple.vendorSpecific === true) errors.push('Observability principles must remain vendor and technology neutral.');

    return validation(errors);
  }

  validateResponsibility(responsibilityInput) {
    const observabilityResponsibility = responsibilityInput instanceof ObservabilityResponsibility
      ? responsibilityInput
      : new ObservabilityResponsibility(responsibilityInput);
    const errors = [];

    if (!observabilityResponsibility.responsibility) errors.push('Observability responsibility must be named.');
    if (!Object.values(OBSERVABILITY_RESPONSIBILITY_OWNERS).includes(observabilityResponsibility.primaryOwner)) errors.push(`Unsupported observability responsibility owner: ${observabilityResponsibility.primaryOwner}.`);
    if (observabilityResponsibility.clearlyAssigned !== true) errors.push('Observability responsibilities must be clearly assigned.');
    if (observabilityResponsibility.supportsEnterpriseConsistency !== true) errors.push('Observability responsibilities must support enterprise consistency.');
    if (observabilityResponsibility.evidenceAccountable !== true) errors.push('Observability responsibilities must be accountable for operational evidence.');
    if (observabilityResponsibility.vendorSpecific === true) errors.push('Observability responsibilities must remain vendor neutral.');

    return validation(errors);
  }

  validateCorrelationCoverage(targets = []) {
    const errors = [];

    appendMissing(errors, targets, this.correlationTargets(), 'Observability correlation must cover');

    return validation(errors);
  }

  validateGovernanceAlignment(activities = []) {
    const errors = [];

    appendMissing(errors, activities, this.governanceActivities(), 'Observability governance must support');

    return validation(errors);
  }

  validatePrivacySecurity(requirements = []) {
    const errors = [];

    appendMissing(errors, requirements, this.privacySecurityRequirements(), 'Observability privacy and security must');

    return validation(errors);
  }

  assertPrinciples() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Observability Principles must include all documented objectives.');
    if (this.principles.size !== 10) errors.push('Observability Principles must include all documented principles.');
    if (this.responsibilities.size !== 6) errors.push('Observability Principles must include all documented shared responsibilities.');
    if (this.correlationTargets().length !== 7) errors.push('Observability Principles must include all documented correlation targets.');
    if (this.consistencyAreas().length !== 6) errors.push('Observability Principles must include all documented consistency areas.');
    if (this.explainabilityTargets().length !== 5) errors.push('Observability Principles must include all documented explainability targets.');
    if (this.governanceActivities().length !== 5) errors.push('Observability Principles must include all documented governance activities.');
    if (this.privacySecurityRequirements().length !== 4) errors.push('Observability Principles must include all documented privacy and security requirements.');
    if (this.relationshipFlow().length !== 7) errors.push('Observability Principles must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_PRINCIPLES_INVALID,
        'Observability Principles violate ARCH-010-02.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function principle(principleName, responsibility, requiredCapabilities) {
  return new ObservabilityPrinciple({ principleName, responsibility, requiredCapabilities });
}

function responsibility(responsibilityName, primaryOwner) {
  return new ObservabilityResponsibility({
    responsibility: responsibilityName,
    primaryOwner
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new ObservabilityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
