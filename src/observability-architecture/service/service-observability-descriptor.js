import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DISTRIBUTED_DIAGNOSTIC_CAPABILITIES,
  FUTURE_SERVICE_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  SERVICE_BUSINESS_IDENTIFIERS,
  SERVICE_COLLABORATION_INTERACTIONS,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_DIAGNOSTIC_SUPPORT_AREAS,
  SERVICE_ERROR_OBSERVABILITY_CHARACTERISTICS,
  SERVICE_INTERACTION_TYPES,
  SERVICE_LIFECYCLE_VISIBILITY_STAGES,
  SERVICE_OBSERVABILITY_ARCHITECTURAL_RULES,
  SERVICE_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  SERVICE_OBSERVABILITY_MODEL_STAGES,
  SERVICE_OBSERVABILITY_OBJECTIVES,
  SERVICE_OBSERVABILITY_PRINCIPLES,
  SERVICE_OBSERVABILITY_QUALITY_ATTRIBUTES,
  SERVICE_OBSERVABILITY_RELATIONSHIP_STAGES,
  SERVICE_OBSERVABILITY_RESPONSIBILITIES,
  SERVICE_OPERATIONAL_EVIDENCE_TYPES,
  SERVICE_PERFORMANCE_CHARACTERISTICS,
  SERVICE_STATE_VISIBILITY_STATES
} from '../constants.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';
import { ServiceObservabilityProfile } from '../contracts/service-observability-profile.js';
import { ServiceOperationalEvidence } from '../contracts/service-operational-evidence.js';

const MODEL = Object.freeze(Object.values(SERVICE_OBSERVABILITY_MODEL_STAGES));
const LIFECYCLE = Object.freeze(Object.values(SERVICE_LIFECYCLE_VISIBILITY_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(SERVICE_OBSERVABILITY_RELATIONSHIP_STAGES));

export class ServiceObservabilityDescriptor {
  objectives() {
    return Object.freeze(Object.values(SERVICE_OBSERVABILITY_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(SERVICE_OBSERVABILITY_PRINCIPLES));
  }

  responsibilities() {
    return Object.freeze(Object.values(SERVICE_OBSERVABILITY_RESPONSIBILITIES));
  }

  businessIdentifiers() {
    return Object.freeze(Object.values(SERVICE_BUSINESS_IDENTIFIERS));
  }

  lifecycleStages() {
    return LIFECYCLE;
  }

  interactionTypes() {
    return Object.freeze(Object.values(SERVICE_INTERACTION_TYPES));
  }

  diagnosticSupportAreas() {
    return Object.freeze(Object.values(SERVICE_DIAGNOSTIC_SUPPORT_AREAS));
  }

  serviceStates() {
    return Object.freeze(Object.values(SERVICE_STATE_VISIBILITY_STATES));
  }

  performanceCharacteristics() {
    return Object.freeze(Object.values(SERVICE_PERFORMANCE_CHARACTERISTICS));
  }

  collaborationInteractions() {
    return Object.freeze(Object.values(SERVICE_COLLABORATION_INTERACTIONS));
  }

  errorCharacteristics() {
    return Object.freeze(Object.values(SERVICE_ERROR_OBSERVABILITY_CHARACTERISTICS));
  }

  dependencyTypes() {
    return Object.freeze(Object.values(SERVICE_DEPENDENCY_TYPES));
  }

  distributedDiagnosticCapabilities() {
    return Object.freeze(Object.values(DISTRIBUTED_DIAGNOSTIC_CAPABILITIES));
  }

  operationalEvidenceTypes() {
    return Object.freeze(Object.values(SERVICE_OPERATIONAL_EVIDENCE_TYPES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(SERVICE_OBSERVABILITY_GOVERNANCE_ACTIVITIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(SERVICE_OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(SERVICE_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_SERVICE_OBSERVABILITY_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ServiceObservabilityProfile
      ? profileInput
      : new ServiceObservabilityProfile(profileInput);
    const errors = [];

    if (!profile.observabilityName) errors.push('Service observability profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Service observability objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'Service observability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Service observability principles must include');
    appendMissing(errors, profile.responsibilities, this.responsibilities(), 'Service observability responsibilities must include');
    appendMissing(errors, profile.businessIdentifiers, this.businessIdentifiers(), 'Business correlation identifiers must include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'Service lifecycle visibility must include');
    appendMissing(errors, profile.interactionTypes, this.interactionTypes(), 'Service interaction visibility must include');
    appendMissing(errors, profile.diagnosticSupportAreas, this.diagnosticSupportAreas(), 'Independent diagnostics must support');
    appendMissing(errors, profile.serviceStates, this.serviceStates(), 'Service state visibility must include');
    appendMissing(errors, profile.performanceCharacteristics, this.performanceCharacteristics(), 'Service performance observability should include');
    appendMissing(errors, profile.collaborationInteractions, this.collaborationInteractions(), 'Service collaboration observability should include');
    appendMissing(errors, profile.errorCharacteristics, this.errorCharacteristics(), 'Error observability should include');
    appendMissing(errors, profile.dependencyTypes, this.dependencyTypes(), 'Dependency observability should include');
    appendMissing(errors, profile.distributedDiagnosticCapabilities, this.distributedDiagnosticCapabilities(), 'Distributed diagnostics should support');
    appendMissing(errors, profile.operationalEvidenceTypes, this.operationalEvidenceTypes(), 'Service operational evidence should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Service observability governance should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Service observability quality attributes should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Service observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Service observability architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future service observability capabilities should include');
    if (profile.serviceAutonomyPreserved !== true) errors.push('Service observability must preserve service autonomy.');
    if (profile.businessContextCorrelated !== true) errors.push('Service telemetry must retain business context.');
    if (profile.lifecycleVisible !== true) errors.push('Every service should expose meaningful lifecycle evidence.');
    if (profile.interactionsTraceable !== true) errors.push('Service interactions should remain traceable across architectural boundaries.');
    if (profile.independentlyDiagnosable !== true) errors.push('Each service should be diagnosable independently.');
    if (profile.operationalEvidenceTrustworthyCorrelated !== true) errors.push('Service operational evidence should remain trustworthy and correlated.');
    if (profile.governanceEvidenceBased !== true) errors.push('Governance should rely upon observable service evidence.');
    if (profile.technologyIndependent !== true) errors.push('Service Observability must preserve technology independence.');
    if (profile.vendorNeutral !== true) errors.push('Service Observability must remain vendor neutral.');
    if (profile.implementationFrameworkSpecific === true) errors.push('Implementation frameworks are outside ARCH-010-04 scope.');
    if (profile.loggingLibrarySpecific === true) errors.push('Logging libraries are outside ARCH-010-04 scope.');
    if (profile.monitoringPlatformSpecific === true) errors.push('Monitoring platforms are outside ARCH-010-04 scope.');
    if (profile.telemetryCollectorSpecific === true) errors.push('Telemetry collectors are outside ARCH-010-04 scope.');
    if (profile.vendorTechnologySpecific === true) errors.push('Vendor-specific technologies are outside ARCH-010-04 scope.');
    if (profile.exposesUnnecessaryImplementationDetails === true) errors.push('Error evidence must not expose unnecessary implementation details.');
    if (profile.reducesEnterpriseVisibility === true) errors.push('Service autonomy should not reduce enterprise visibility.');

    return validation(errors);
  }

  validateOperationalEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof ServiceOperationalEvidence
      ? evidenceInput
      : new ServiceOperationalEvidence(evidenceInput);
    const errors = [];

    if (!this.operationalEvidenceTypes().includes(evidence.evidenceType)) errors.push(`Unsupported service operational evidence type: ${evidence.evidenceType}.`);
    if (!evidence.serviceName) errors.push('Service operational evidence must identify the service.');
    if (!this.serviceStates().includes(evidence.serviceState)) errors.push(`Unsupported service state: ${evidence.serviceState}.`);
    if (!this.lifecycleStages().includes(evidence.lifecycleStage)) errors.push(`Unsupported service lifecycle stage: ${evidence.lifecycleStage}.`);
    if (!this.interactionTypes().includes(evidence.interactionType)) errors.push(`Unsupported service interaction type: ${evidence.interactionType}.`);
    if (!evidence.correlationId) errors.push('Service operational evidence must include correlation identity.');
    if (!evidence.businessContext.businessCapability) errors.push('Service operational evidence must include business capability context.');
    if (!evidence.businessContext.businessRequest) errors.push('Service operational evidence must include business request context.');
    if (evidence.dependencyType && !this.dependencyTypes().includes(evidence.dependencyType)) errors.push(`Unsupported service dependency type: ${evidence.dependencyType}.`);
    if (evidence.technologyIndependent !== true) errors.push('Service operational evidence must remain technology independent.');
    if (evidence.exposesImplementationDetails === true) errors.push('Service operational evidence must not expose implementation details.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Service Observability must include all documented objectives.');
    if (this.modelStages().length !== 5) errors.push('Service Observability must include the documented model.');
    if (this.principles().length !== 5) errors.push('Service Observability must include documented principles.');
    if (this.responsibilities().length !== 6) errors.push('Service Observability must include documented responsibilities.');
    if (this.businessIdentifiers().length !== 5) errors.push('Service Observability must include documented business identifiers.');
    if (this.lifecycleStages().length !== 5) errors.push('Service Observability must include documented lifecycle stages.');
    if (this.interactionTypes().length !== 6) errors.push('Service Observability must include documented interaction types.');
    if (this.diagnosticSupportAreas().length !== 4) errors.push('Service Observability must include documented diagnostic support areas.');
    if (this.serviceStates().length !== 7) errors.push('Service Observability must include documented service states.');
    if (this.performanceCharacteristics().length !== 6) errors.push('Service Observability must include documented performance characteristics.');
    if (this.collaborationInteractions().length !== 6) errors.push('Service Observability must include documented collaboration interactions.');
    if (this.errorCharacteristics().length !== 5) errors.push('Service Observability must include documented error characteristics.');
    if (this.dependencyTypes().length !== 6) errors.push('Service Observability must include documented dependency types.');
    if (this.distributedDiagnosticCapabilities().length !== 5) errors.push('Service Observability must include documented distributed diagnostics.');
    if (this.operationalEvidenceTypes().length !== 6) errors.push('Service Observability must include documented operational evidence types.');
    if (this.governanceActivities().length !== 5) errors.push('Service Observability must include documented governance activities.');
    if (this.qualityAttributes().length !== 8) errors.push('Service Observability must include documented quality attributes.');
    if (this.relationshipFlow().length !== 5) errors.push('Service Observability must include the documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Service Observability must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('Service Observability must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.SERVICE_OBSERVABILITY_INVALID,
        'Service Observability violates ARCH-010-04.',
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
