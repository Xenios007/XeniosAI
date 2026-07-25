import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_OPERATIONAL_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  OPERATIONAL_CAPACITY_OBSERVATIONS,
  OPERATIONAL_CORRELATION_DOMAINS,
  OPERATIONAL_DIAGNOSTIC_AREAS,
  OPERATIONAL_HEALTH_INDICATORS,
  OPERATIONAL_IMPROVEMENT_DRIVERS,
  OPERATIONAL_INCIDENT_OBSERVATIONS,
  OPERATIONAL_OBSERVABILITY_ARCHITECTURAL_RULES,
  OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES,
  OPERATIONAL_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  OPERATIONAL_OBSERVABILITY_MODEL_STAGES,
  OPERATIONAL_OBSERVABILITY_OBJECTIVES,
  OPERATIONAL_OBSERVABILITY_PRINCIPLES,
  OPERATIONAL_OBSERVABILITY_QUALITY_ATTRIBUTES,
  OPERATIONAL_OBSERVABILITY_RELATIONSHIP_STAGES,
  OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES,
  OPERATIONAL_RELIABILITY_OBSERVATIONS,
  OPERATIONAL_VISIBILITY_DOMAINS,
  PROACTIVE_OPERATION_CAPABILITIES
} from '../constants.js';
import { OperationalObservabilityEvidence } from '../contracts/operational-observability-evidence.js';
import { OperationalObservabilityProfile } from '../contracts/operational-observability-profile.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const MODEL = Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_RELATIONSHIP_STAGES));

export class OperationalObservabilityDescriptor {
  objectives() {
    return Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_PRINCIPLES));
  }

  visibilityDomains() {
    return Object.freeze(Object.values(OPERATIONAL_VISIBILITY_DOMAINS));
  }

  proactiveCapabilities() {
    return Object.freeze(Object.values(PROACTIVE_OPERATION_CAPABILITIES));
  }

  correlationDomains() {
    return Object.freeze(Object.values(OPERATIONAL_CORRELATION_DOMAINS));
  }

  improvementDrivers() {
    return Object.freeze(Object.values(OPERATIONAL_IMPROVEMENT_DRIVERS));
  }

  healthIndicators() {
    return Object.freeze(Object.values(OPERATIONAL_HEALTH_INDICATORS));
  }

  performanceEvidenceTypes() {
    return Object.freeze(Object.values(OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES));
  }

  capacityObservations() {
    return Object.freeze(Object.values(OPERATIONAL_CAPACITY_OBSERVATIONS));
  }

  reliabilityObservations() {
    return Object.freeze(Object.values(OPERATIONAL_RELIABILITY_OBSERVATIONS));
  }

  incidentObservations() {
    return Object.freeze(Object.values(OPERATIONAL_INCIDENT_OBSERVATIONS));
  }

  diagnosticAreas() {
    return Object.freeze(Object.values(OPERATIONAL_DIAGNOSTIC_AREAS));
  }

  operationalEvidenceTypes() {
    return Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_GOVERNANCE_ACTIVITIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(OPERATIONAL_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_OPERATIONAL_OBSERVABILITY_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof OperationalObservabilityProfile
      ? profileInput
      : new OperationalObservabilityProfile(profileInput);
    const errors = [];

    if (!profile.observabilityName) errors.push('Operational observability profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Operational observability objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'Operational observability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Operational observability principles must include');
    appendMissing(errors, profile.visibilityDomains, this.visibilityDomains(), 'Continuous operational visibility should include');
    appendMissing(errors, profile.proactiveCapabilities, this.proactiveCapabilities(), 'Proactive operations should include');
    appendMissing(errors, profile.correlationDomains, this.correlationDomains(), 'Operational correlation should include');
    appendMissing(errors, profile.improvementDrivers, this.improvementDrivers(), 'Continuous improvement should drive');
    appendMissing(errors, profile.healthIndicators, this.healthIndicators(), 'Operational health should include');
    appendMissing(errors, profile.performanceEvidenceTypes, this.performanceEvidenceTypes(), 'Performance observability should include');
    appendMissing(errors, profile.capacityObservations, this.capacityObservations(), 'Capacity observability should include');
    appendMissing(errors, profile.reliabilityObservations, this.reliabilityObservations(), 'Reliability observability should include');
    appendMissing(errors, profile.incidentObservations, this.incidentObservations(), 'Incident observability should include');
    appendMissing(errors, profile.diagnosticAreas, this.diagnosticAreas(), 'Operational diagnostics should support');
    appendMissing(errors, profile.operationalEvidenceTypes, this.operationalEvidenceTypes(), 'Operational evidence should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Operational governance should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Operational observability quality attributes should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Operational observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Operational observability architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future operational observability capabilities should include');
    if (profile.continuouslyObservable !== true) errors.push('Enterprise operations should remain continuously observable.');
    if (profile.businessAligned !== true) errors.push('Operational measurements should remain aligned to business outcomes.');
    if (profile.proactiveSupported !== true) errors.push('Operational evidence should support proactive management.');
    if (profile.evidenceCorrelated !== true) errors.push('Operational evidence should remain correlated across enterprise domains.');
    if (profile.continuousImprovementEnabled !== true) errors.push('Operational observability should support continuous improvement.');
    if (profile.operationalResilienceStrengthened !== true) errors.push('Operational observability should strengthen operational resilience.');
    if (profile.evidenceGoverned !== true) errors.push('Operational evidence should remain governed.');
    if (profile.technologyNeutral !== true) errors.push('Operational Observability must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Operational Observability must remain vendor neutral.');
    if (profile.monitoringProductSpecific === true) errors.push('Monitoring products are outside ARCH-010-08 scope.');
    if (profile.infrastructureToolingSpecific === true) errors.push('Infrastructure tooling is outside ARCH-010-08 scope.');
    if (profile.cloudPlatformSpecific === true) errors.push('Cloud platforms are outside ARCH-010-08 scope.');
    if (profile.analyticsSolutionSpecific === true) errors.push('Analytics solutions are outside ARCH-010-08 scope.');
    if (profile.alertingSystemSpecific === true) errors.push('Alerting systems are outside ARCH-010-08 scope.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-010-08 scope.');
    if (profile.isolatesTechnicalMetricsFromBusinessValue === true) errors.push('Operational success should not be isolated from business capability delivery.');

    return validation(errors);
  }

  validateOperationalEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof OperationalObservabilityEvidence
      ? evidenceInput
      : new OperationalObservabilityEvidence(evidenceInput);
    const errors = [];

    if (!this.operationalEvidenceTypes().includes(evidence.evidenceType)) errors.push(`Unsupported operational evidence type: ${evidence.evidenceType}.`);
    if (!this.visibilityDomains().includes(evidence.operationalDomain)) errors.push(`Unsupported operational domain: ${evidence.operationalDomain}.`);
    if (!this.healthIndicators().includes(evidence.healthIndicator)) errors.push(`Unsupported operational health indicator: ${evidence.healthIndicator}.`);
    if (!evidence.businessCapability) errors.push('Operational evidence must include business capability context.');
    if (!evidence.operationalState) errors.push('Operational evidence must include operational state.');
    if (evidence.measurement === undefined || evidence.measurement === null) errors.push('Operational evidence must include an observable measurement.');
    if (!evidence.correlationId) errors.push('Operational evidence must include correlation identity.');
    if (evidence.performanceEvidenceType && !this.performanceEvidenceTypes().includes(evidence.performanceEvidenceType)) errors.push(`Unsupported performance evidence type: ${evidence.performanceEvidenceType}.`);
    if (evidence.capacityObservation && !this.capacityObservations().includes(evidence.capacityObservation)) errors.push(`Unsupported capacity observation: ${evidence.capacityObservation}.`);
    if (evidence.reliabilityObservation && !this.reliabilityObservations().includes(evidence.reliabilityObservation)) errors.push(`Unsupported reliability observation: ${evidence.reliabilityObservation}.`);
    if (evidence.incidentObservation && !this.incidentObservations().includes(evidence.incidentObservation)) errors.push(`Unsupported incident observation: ${evidence.incidentObservation}.`);
    if (evidence.diagnosticArea && !this.diagnosticAreas().includes(evidence.diagnosticArea)) errors.push(`Unsupported diagnostic area: ${evidence.diagnosticArea}.`);
    if (evidence.technologyNeutral !== true) errors.push('Operational evidence must remain technology neutral.');
    if (evidence.vendorNeutral !== true) errors.push('Operational evidence must remain vendor neutral.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Operational Observability must include all documented objectives.');
    if (this.modelStages().length !== 5) errors.push('Operational Observability must include the documented model.');
    if (this.principles().length !== 5) errors.push('Operational Observability must include documented principles.');
    if (this.visibilityDomains().length !== 7) errors.push('Operational Observability must include documented visibility domains.');
    if (this.proactiveCapabilities().length !== 5) errors.push('Operational Observability must include documented proactive capabilities.');
    if (this.correlationDomains().length !== 6) errors.push('Operational Observability must include documented correlation domains.');
    if (this.improvementDrivers().length !== 5) errors.push('Operational Observability must include documented improvement drivers.');
    if (this.healthIndicators().length !== 6) errors.push('Operational Observability must include documented health indicators.');
    if (this.performanceEvidenceTypes().length !== 6) errors.push('Operational Observability must include documented performance evidence types.');
    if (this.capacityObservations().length !== 6) errors.push('Operational Observability must include documented capacity observations.');
    if (this.reliabilityObservations().length !== 6) errors.push('Operational Observability must include documented reliability observations.');
    if (this.incidentObservations().length !== 6) errors.push('Operational Observability must include documented incident observations.');
    if (this.diagnosticAreas().length !== 6) errors.push('Operational Observability must include documented diagnostic areas.');
    if (this.operationalEvidenceTypes().length !== 6) errors.push('Operational Observability must include documented evidence types.');
    if (this.governanceActivities().length !== 6) errors.push('Operational Observability must include documented governance activities.');
    if (this.qualityAttributes().length !== 8) errors.push('Operational Observability must include documented quality attributes.');
    if (this.relationshipFlow().length !== 7) errors.push('Operational Observability must include documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Operational Observability must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('Operational Observability must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OPERATIONAL_OBSERVABILITY_INVALID,
        'Operational Observability violates ARCH-010-08.',
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
  return new ObservabilityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
