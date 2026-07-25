import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  API_OBSERVABILITY_CHARACTERISTICS,
  EVENT_OBSERVABILITY_LIFECYCLE_STAGES,
  EXTERNAL_INTEGRATION_OBSERVABILITY_TYPES,
  FUTURE_INTEGRATION_OBSERVABILITY_CAPABILITIES,
  INTEGRATION_BUSINESS_COLLABORATION_TYPES,
  INTEGRATION_CONTEXT_ELEMENTS,
  INTEGRATION_CONTRACT_VISIBILITY_AREAS,
  INTEGRATION_CORRELATION_SPANS,
  INTEGRATION_DEPENDENCY_TYPES,
  INTEGRATION_DISTRIBUTED_DIAGNOSTIC_CAPABILITIES,
  INTEGRATION_OBSERVABILITY_ARCHITECTURAL_RULES,
  INTEGRATION_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  INTEGRATION_OBSERVABILITY_MODEL_STAGES,
  INTEGRATION_OBSERVABILITY_OBJECTIVES,
  INTEGRATION_OBSERVABILITY_PRINCIPLES,
  INTEGRATION_OBSERVABILITY_QUALITY_ATTRIBUTES,
  INTEGRATION_OBSERVABILITY_RELATIONSHIP_STAGES,
  INTEGRATION_OPERATIONAL_EVIDENCE_TYPES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  WORKFLOW_OBSERVABILITY_TYPES
} from '../constants.js';
import { IntegrationObservabilityProfile } from '../contracts/integration-observability-profile.js';
import { IntegrationOperationalEvidence } from '../contracts/integration-operational-evidence.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const MODEL = Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_MODEL_STAGES));
const EVENT_LIFECYCLE = Object.freeze(Object.values(EVENT_OBSERVABILITY_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_RELATIONSHIP_STAGES));

export class IntegrationObservabilityDescriptor {
  objectives() {
    return Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_PRINCIPLES));
  }

  collaborationTypes() {
    return Object.freeze(Object.values(INTEGRATION_BUSINESS_COLLABORATION_TYPES));
  }

  correlationSpans() {
    return Object.freeze(Object.values(INTEGRATION_CORRELATION_SPANS));
  }

  contractVisibilityAreas() {
    return Object.freeze(Object.values(INTEGRATION_CONTRACT_VISIBILITY_AREAS));
  }

  contextElements() {
    return Object.freeze(Object.values(INTEGRATION_CONTEXT_ELEMENTS));
  }

  apiCharacteristics() {
    return Object.freeze(Object.values(API_OBSERVABILITY_CHARACTERISTICS));
  }

  eventLifecycleStages() {
    return EVENT_LIFECYCLE;
  }

  workflowObservationTypes() {
    return Object.freeze(Object.values(WORKFLOW_OBSERVABILITY_TYPES));
  }

  externalObservationTypes() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_OBSERVABILITY_TYPES));
  }

  distributedDiagnosticCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_DISTRIBUTED_DIAGNOSTIC_CAPABILITIES));
  }

  dependencyTypes() {
    return Object.freeze(Object.values(INTEGRATION_DEPENDENCY_TYPES));
  }

  operationalEvidenceTypes() {
    return Object.freeze(Object.values(INTEGRATION_OPERATIONAL_EVIDENCE_TYPES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_GOVERNANCE_ACTIVITIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_OBSERVABILITY_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof IntegrationObservabilityProfile
      ? profileInput
      : new IntegrationObservabilityProfile(profileInput);
    const errors = [];

    if (!profile.observabilityName) errors.push('Integration observability profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Integration observability objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'Integration observability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Integration observability principles must include');
    appendMissing(errors, profile.collaborationTypes, this.collaborationTypes(), 'Observable business collaboration must include');
    appendMissing(errors, profile.correlationSpans, this.correlationSpans(), 'End-to-end correlation must span');
    appendMissing(errors, profile.contractVisibilityAreas, this.contractVisibilityAreas(), 'Contract-centric visibility should align with');
    appendMissing(errors, profile.contextElements, this.contextElements(), 'Integration business context must include');
    appendMissing(errors, profile.apiCharacteristics, this.apiCharacteristics(), 'API observability should include');
    appendMissing(errors, profile.eventLifecycleStages, this.eventLifecycleStages(), 'Event observability lifecycle must include');
    appendMissing(errors, profile.workflowObservationTypes, this.workflowObservationTypes(), 'Workflow observability should include');
    appendMissing(errors, profile.externalObservationTypes, this.externalObservationTypes(), 'External integration observability should include');
    appendMissing(errors, profile.distributedDiagnosticCapabilities, this.distributedDiagnosticCapabilities(), 'Distributed diagnostics should support');
    appendMissing(errors, profile.dependencyTypes, this.dependencyTypes(), 'Dependency visibility should include');
    appendMissing(errors, profile.operationalEvidenceTypes, this.operationalEvidenceTypes(), 'Integration operational evidence should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Integration observability governance should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Integration observability quality attributes should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Integration observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Integration observability architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future integration observability capabilities should include');
    if (profile.businessCollaborationFocused !== true) errors.push('Integration observability must focus on business collaboration rather than communication protocols.');
    if (profile.endToEndCorrelated !== true) errors.push('Enterprise interactions should remain observable from initiation through completion.');
    if (profile.contractCentricVisibility !== true) errors.push('Integration contracts define observable boundaries.');
    if (profile.serviceAutonomyPreserved !== true) errors.push('Integration observability should not reduce service independence.');
    if (profile.businessContextPreserved !== true) errors.push('Integration evidence should retain business context throughout communication.');
    if (profile.workflowsApisEventsExternalObserved !== true) errors.push('Integration observability must observe workflows, APIs, events, and external interactions.');
    if (profile.distributedDiagnosticsSupported !== true) errors.push('Distributed integrations require correlated diagnostics.');
    if (profile.governanceEvidenceBased !== true) errors.push('Governance should rely upon observable integration evidence.');
    if (profile.technologyNeutral !== true) errors.push('Integration Observability must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Integration Observability must remain vendor neutral.');
    if (profile.messagingPlatformSpecific === true) errors.push('Messaging platforms are outside ARCH-010-06 scope.');
    if (profile.apiGatewaySpecific === true) errors.push('API gateways are outside ARCH-010-06 scope.');
    if (profile.integrationMiddlewareSpecific === true) errors.push('Integration middleware is outside ARCH-010-06 scope.');
    if (profile.tracingFrameworkSpecific === true) errors.push('Tracing frameworks are outside ARCH-010-06 scope.');
    if (profile.monitoringProductSpecific === true) errors.push('Monitoring products are outside ARCH-010-06 scope.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-010-06 scope.');
    if (profile.protocolFocused === true) errors.push('API observability should emphasize business interaction over transport mechanics.');

    return validation(errors);
  }

  validateOperationalEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof IntegrationOperationalEvidence
      ? evidenceInput
      : new IntegrationOperationalEvidence(evidenceInput);
    const errors = [];

    if (!this.operationalEvidenceTypes().includes(evidence.evidenceType)) errors.push(`Unsupported integration operational evidence type: ${evidence.evidenceType}.`);
    if (!evidence.integrationContract) errors.push('Integration operational evidence must include an integration contract.');
    if (!evidence.businessCollaboration) errors.push('Integration operational evidence must include business collaboration.');
    if (!evidence.businessOutcome) errors.push('Integration operational evidence must include business outcome.');
    if (!evidence.correlationId) errors.push('Integration operational evidence must include correlation identity.');
    if (!evidence.context.businessCapability) errors.push('Integration operational evidence must include business capability context.');
    if (!evidence.context.transactionIdentifier) errors.push('Integration operational evidence must include transaction identifier context.');
    if (evidence.dependencyType && !this.dependencyTypes().includes(evidence.dependencyType)) errors.push(`Unsupported integration dependency type: ${evidence.dependencyType}.`);
    if (evidence.lifecycleStage && !this.eventLifecycleStages().includes(evidence.lifecycleStage)) errors.push(`Unsupported integration lifecycle stage: ${evidence.lifecycleStage}.`);
    if (evidence.technologyNeutral !== true) errors.push('Integration operational evidence must remain technology neutral.');
    if (evidence.exposesProtocolMechanics === true) errors.push('Integration operational evidence must not focus on protocol mechanics.');
    if (evidence.violatesServiceAutonomy === true) errors.push('Integration operational evidence must respect service autonomy.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Integration Observability must include all documented objectives.');
    if (this.modelStages().length !== 5) errors.push('Integration Observability must include the documented model.');
    if (this.principles().length !== 5) errors.push('Integration Observability must include documented principles.');
    if (this.collaborationTypes().length !== 5) errors.push('Integration Observability must include documented collaboration types.');
    if (this.correlationSpans().length !== 7) errors.push('Integration Observability must include documented correlation spans.');
    if (this.contractVisibilityAreas().length !== 5) errors.push('Integration Observability must include documented contract visibility areas.');
    if (this.contextElements().length !== 5) errors.push('Integration Observability must include documented context elements.');
    if (this.apiCharacteristics().length !== 6) errors.push('Integration Observability must include documented API characteristics.');
    if (this.eventLifecycleStages().length !== 5) errors.push('Integration Observability must include documented event lifecycle stages.');
    if (this.workflowObservationTypes().length !== 6) errors.push('Integration Observability must include documented workflow observations.');
    if (this.externalObservationTypes().length !== 5) errors.push('Integration Observability must include documented external observations.');
    if (this.distributedDiagnosticCapabilities().length !== 5) errors.push('Integration Observability must include documented distributed diagnostics.');
    if (this.dependencyTypes().length !== 6) errors.push('Integration Observability must include documented dependency types.');
    if (this.operationalEvidenceTypes().length !== 6) errors.push('Integration Observability must include documented operational evidence.');
    if (this.governanceActivities().length !== 6) errors.push('Integration Observability must include documented governance activities.');
    if (this.qualityAttributes().length !== 8) errors.push('Integration Observability must include documented quality attributes.');
    if (this.relationshipFlow().length !== 5) errors.push('Integration Observability must include the documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Integration Observability must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('Integration Observability must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.INTEGRATION_OBSERVABILITY_INVALID,
        'Integration Observability violates ARCH-010-06.',
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
