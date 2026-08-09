import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_BUSINESS_OBSERVABILITY_TYPES,
  BUSINESS_CAPABILITY_EVIDENCE_TYPES,
  BUSINESS_CAPABILITY_EXAMPLES,
  BUSINESS_CONTEXT_ELEMENTS,
  BUSINESS_EVENT_EXAMPLES,
  BUSINESS_GOVERNANCE_ALIGNMENT_ACTIVITIES,
  BUSINESS_LIFECYCLE_VISIBILITY_STAGES,
  BUSINESS_METRIC_EXAMPLES,
  BUSINESS_OBSERVABILITY_ARCHITECTURAL_RULES,
  BUSINESS_OBSERVABILITY_MODEL_STAGES,
  BUSINESS_OBSERVABILITY_OBJECTIVES,
  BUSINESS_OBSERVABILITY_PRINCIPLES,
  BUSINESS_OBSERVABILITY_QUALITY_ATTRIBUTES,
  BUSINESS_OBSERVABILITY_RELATIONSHIP_STAGES,
  BUSINESS_OPERATIONAL_EVIDENCE_SOURCES,
  BUSINESS_OUTCOME_EXAMPLES,
  BUSINESS_PROCESS_EXAMPLES,
  CUSTOMER_JOURNEY_OBSERVABILITY_STAGES,
  FUTURE_BUSINESS_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { BusinessObservabilityProfile } from '../contracts/business-observability-profile.js';
import { BusinessOperationalEvidence } from '../contracts/business-operational-evidence.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const MODEL = Object.freeze(Object.values(BUSINESS_OBSERVABILITY_MODEL_STAGES));
const LIFECYCLE = Object.freeze(Object.values(BUSINESS_LIFECYCLE_VISIBILITY_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(BUSINESS_OBSERVABILITY_RELATIONSHIP_STAGES));

export class BusinessObservabilityDescriptor {
  objectives() {
    return Object.freeze(Object.values(BUSINESS_OBSERVABILITY_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(BUSINESS_OBSERVABILITY_PRINCIPLES));
  }

  capabilityExamples() {
    return Object.freeze(Object.values(BUSINESS_CAPABILITY_EXAMPLES));
  }

  processExamples() {
    return Object.freeze(Object.values(BUSINESS_PROCESS_EXAMPLES));
  }

  outcomeExamples() {
    return Object.freeze(Object.values(BUSINESS_OUTCOME_EXAMPLES));
  }

  contextElements() {
    return Object.freeze(Object.values(BUSINESS_CONTEXT_ELEMENTS));
  }

  lifecycleStages() {
    return LIFECYCLE;
  }

  capabilityEvidenceTypes() {
    return Object.freeze(Object.values(BUSINESS_CAPABILITY_EVIDENCE_TYPES));
  }

  customerJourneyStages() {
    return Object.freeze(Object.values(CUSTOMER_JOURNEY_OBSERVABILITY_STAGES));
  }

  businessEvents() {
    return Object.freeze(Object.values(BUSINESS_EVENT_EXAMPLES));
  }

  metrics() {
    return Object.freeze(Object.values(BUSINESS_METRIC_EXAMPLES));
  }

  aiObservationTypes() {
    return Object.freeze(Object.values(AI_BUSINESS_OBSERVABILITY_TYPES));
  }

  evidenceSources() {
    return Object.freeze(Object.values(BUSINESS_OPERATIONAL_EVIDENCE_SOURCES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(BUSINESS_GOVERNANCE_ALIGNMENT_ACTIVITIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(BUSINESS_OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(BUSINESS_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_BUSINESS_OBSERVABILITY_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof BusinessObservabilityProfile
      ? profileInput
      : new BusinessObservabilityProfile(profileInput);
    const errors = [];

    if (!profile.observabilityName) errors.push('Business observability profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Business observability objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'Business observability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Business observability principles must include');
    appendMissing(errors, profile.capabilityExamples, this.capabilityExamples(), 'Business capability visibility should include');
    appendMissing(errors, profile.processExamples, this.processExamples(), 'Business process observability should include');
    appendMissing(errors, profile.outcomeExamples, this.outcomeExamples(), 'Business outcome observability should include');
    appendMissing(errors, profile.contextElements, this.contextElements(), 'Business context must include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'End-to-end business visibility must include');
    appendMissing(errors, profile.capabilityEvidenceTypes, this.capabilityEvidenceTypes(), 'Capability evidence should include');
    appendMissing(errors, profile.customerJourneyStages, this.customerJourneyStages(), 'Customer journey observability should include');
    appendMissing(errors, profile.businessEvents, this.businessEvents(), 'Business event observability should include');
    appendMissing(errors, profile.metrics, this.metrics(), 'Business metrics should include');
    appendMissing(errors, profile.aiObservationTypes, this.aiObservationTypes(), 'AI business observability should include');
    appendMissing(errors, profile.evidenceSources, this.evidenceSources(), 'Operational evidence sources should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Governance alignment should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Business observability quality attributes should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Business observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Business observability architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future business observability capabilities should include');
    if (profile.businessCapabilitiesObservable !== true) errors.push('Business capabilities must remain observable independently of implementation.');
    if (profile.processesObservable !== true) errors.push('Business processes must remain observable.');
    if (profile.outcomesObservable !== true) errors.push('Business outcomes must remain observable.');
    if (profile.businessContextPreserved !== true) errors.push('Technical evidence must preserve business context.');
    if (profile.endToEndVisibilitySupported !== true) errors.push('Business activities must remain observable through the complete lifecycle.');
    if (profile.operationalEvidenceCorrelated !== true) errors.push('Operational evidence must remain correlated throughout the enterprise.');
    if (profile.governanceEvidenceBased !== true) errors.push('Governance should rely upon observable business evidence.');
    if (profile.aiObservedInBusinessContext !== true) errors.push('AI participation must remain observable within business context.');
    if (profile.technologyIndependent !== true) errors.push('Business Observability must preserve technology independence.');
    if (profile.vendorNeutral !== true) errors.push('Business Observability must remain vendor neutral.');
    if (profile.businessIntelligencePlatformSpecific === true) errors.push('Business intelligence platforms are outside ARCH-010-03 scope.');
    if (profile.financialReportingSystemSpecific === true) errors.push('Financial reporting systems are outside ARCH-010-03 scope.');
    if (profile.analyticalDashboardSpecific === true) errors.push('Analytical dashboards are outside ARCH-010-03 scope.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-010-03 scope.');
    if (profile.infrastructureFirst === true) errors.push('Business Observability must observe business capabilities before infrastructure.');
    if (profile.exposesImplementationDetails === true) errors.push('Business events must not expose implementation details.');

    return validation(errors);
  }

  validateOperationalEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof BusinessOperationalEvidence
      ? evidenceInput
      : new BusinessOperationalEvidence(evidenceInput);
    const errors = [];

    if (!this.evidenceSources().includes(evidence.source)) errors.push(`Unsupported business operational evidence source: ${evidence.source}.`);
    if (!evidence.evidenceType) errors.push('Business operational evidence must define an evidence type.');
    if (!evidence.businessCapability) errors.push('Business operational evidence must include a business capability.');
    if (!evidence.businessProcess) errors.push('Business operational evidence must include a business process.');
    if (!evidence.businessOutcome) errors.push('Business operational evidence must include a business outcome.');
    if (!this.customerJourneyStages().includes(evidence.customerJourneyStage)) errors.push(`Unsupported customer journey stage: ${evidence.customerJourneyStage}.`);
    if (!evidence.correlationId) errors.push('Business operational evidence must include correlation identity.');
    if (!evidence.context.businessCapability) errors.push('Business operational evidence context must include business capability.');
    if (!evidence.context.businessTransaction) errors.push('Business operational evidence context must include business transaction.');
    if (evidence.technologyIndependent !== true) errors.push('Business operational evidence must remain technology independent.');
    if (evidence.exposesImplementationDetails === true) errors.push('Business operational evidence must not expose implementation details.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Business Observability must include all documented objectives.');
    if (this.modelStages().length !== 5) errors.push('Business Observability must include the documented model.');
    if (this.principles().length !== 5) errors.push('Business Observability must include documented principles.');
    if (this.capabilityExamples().length !== 6) errors.push('Business Observability must include documented capability examples.');
    if (this.processExamples().length !== 6) errors.push('Business Observability must include documented process examples.');
    if (this.outcomeExamples().length !== 6) errors.push('Business Observability must include documented outcome examples.');
    if (this.contextElements().length !== 5) errors.push('Business Observability must include documented business context elements.');
    if (this.lifecycleStages().length !== 5) errors.push('Business Observability must include documented lifecycle stages.');
    if (this.capabilityEvidenceTypes().length !== 6) errors.push('Business Observability must include documented capability evidence.');
    if (this.customerJourneyStages().length !== 6) errors.push('Business Observability must include documented customer journey stages.');
    if (this.businessEvents().length !== 6) errors.push('Business Observability must include documented business events.');
    if (this.metrics().length !== 6) errors.push('Business Observability must include documented business metrics.');
    if (this.aiObservationTypes().length !== 5) errors.push('Business Observability must include documented AI observations.');
    if (this.evidenceSources().length !== 6) errors.push('Business Observability must include documented operational evidence sources.');
    if (this.governanceActivities().length !== 5) errors.push('Business Observability must include documented governance activities.');
    if (this.qualityAttributes().length !== 8) errors.push('Business Observability must include documented quality attributes.');
    if (this.relationshipFlow().length !== 6) errors.push('Business Observability must include the documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Business Observability must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('Business Observability must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.BUSINESS_OBSERVABILITY_INVALID,
        'Business Observability violates ARCH-010-03.',
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
