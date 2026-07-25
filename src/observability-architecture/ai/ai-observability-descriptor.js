import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGENT_COLLABORATION_OBSERVABILITY_INTERACTIONS,
  AGENT_OBSERVABILITY_INFORMATION,
  AI_ACCOUNTABILITY_DISTINCTIONS,
  AI_BUSINESS_CORRELATION_IDENTIFIERS,
  AI_DECISION_OBSERVABILITY_CHARACTERISTICS,
  AI_EXECUTION_LIFECYCLE_STAGES,
  AI_EXPLAINABILITY_EVIDENCE_TYPES,
  AI_FAILURE_OBSERVABILITY_CONDITIONS,
  AI_KNOWLEDGE_OBSERVABILITY_TYPES,
  AI_OBSERVABILITY_ARCHITECTURAL_RULES,
  AI_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  AI_OBSERVABILITY_MODEL_STAGES,
  AI_OBSERVABILITY_OBJECTIVES,
  AI_OBSERVABILITY_PRINCIPLES,
  AI_OBSERVABILITY_QUALITY_ATTRIBUTES,
  AI_OBSERVABILITY_RELATIONSHIP_STAGES,
  AI_PERFORMANCE_OBSERVABILITY_CHARACTERISTICS,
  AI_TOOL_OBSERVABILITY_ACTIVITIES,
  FUTURE_AI_OBSERVABILITY_CAPABILITIES,
  HUMAN_OVERSIGHT_ACTIVITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { AiObservabilityProfile } from '../contracts/ai-observability-profile.js';
import { AiOperationalEvidence } from '../contracts/ai-operational-evidence.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const MODEL = Object.freeze(Object.values(AI_OBSERVABILITY_MODEL_STAGES));
const LIFECYCLE = Object.freeze(Object.values(AI_EXECUTION_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(AI_OBSERVABILITY_RELATIONSHIP_STAGES));

export class AiObservabilityDescriptor {
  objectives() {
    return Object.freeze(Object.values(AI_OBSERVABILITY_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(AI_OBSERVABILITY_PRINCIPLES));
  }

  explainabilityEvidenceTypes() {
    return Object.freeze(Object.values(AI_EXPLAINABILITY_EVIDENCE_TYPES));
  }

  accountabilityDistinctions() {
    return Object.freeze(Object.values(AI_ACCOUNTABILITY_DISTINCTIONS));
  }

  agentInformation() {
    return Object.freeze(Object.values(AGENT_OBSERVABILITY_INFORMATION));
  }

  humanOversightActivities() {
    return Object.freeze(Object.values(HUMAN_OVERSIGHT_ACTIVITIES));
  }

  executionLifecycleStages() {
    return LIFECYCLE;
  }

  decisionCharacteristics() {
    return Object.freeze(Object.values(AI_DECISION_OBSERVABILITY_CHARACTERISTICS));
  }

  collaborationInteractions() {
    return Object.freeze(Object.values(AGENT_COLLABORATION_OBSERVABILITY_INTERACTIONS));
  }

  toolActivities() {
    return Object.freeze(Object.values(AI_TOOL_OBSERVABILITY_ACTIVITIES));
  }

  knowledgeObservationTypes() {
    return Object.freeze(Object.values(AI_KNOWLEDGE_OBSERVABILITY_TYPES));
  }

  performanceCharacteristics() {
    return Object.freeze(Object.values(AI_PERFORMANCE_OBSERVABILITY_CHARACTERISTICS));
  }

  failureConditions() {
    return Object.freeze(Object.values(AI_FAILURE_OBSERVABILITY_CONDITIONS));
  }

  businessCorrelationIdentifiers() {
    return Object.freeze(Object.values(AI_BUSINESS_CORRELATION_IDENTIFIERS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(AI_OBSERVABILITY_GOVERNANCE_ACTIVITIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(AI_OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(AI_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_AI_OBSERVABILITY_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AiObservabilityProfile
      ? profileInput
      : new AiObservabilityProfile(profileInput);
    const errors = [];

    if (!profile.observabilityName) errors.push('AI observability profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'AI observability objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'AI observability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'AI observability principles must include');
    appendMissing(errors, profile.explainabilityEvidenceTypes, this.explainabilityEvidenceTypes(), 'Explainable AI evidence must include');
    appendMissing(errors, profile.accountabilityDistinctions, this.accountabilityDistinctions(), 'AI accountability must distinguish');
    appendMissing(errors, profile.agentInformation, this.agentInformation(), 'Agent transparency should include');
    appendMissing(errors, profile.humanOversightActivities, this.humanOversightActivities(), 'Human oversight should include');
    appendMissing(errors, profile.executionLifecycleStages, this.executionLifecycleStages(), 'AI execution lifecycle must include');
    appendMissing(errors, profile.decisionCharacteristics, this.decisionCharacteristics(), 'AI decision observability should include');
    appendMissing(errors, profile.collaborationInteractions, this.collaborationInteractions(), 'Agent collaboration observability should include');
    appendMissing(errors, profile.toolActivities, this.toolActivities(), 'Tool observability should include');
    appendMissing(errors, profile.knowledgeObservationTypes, this.knowledgeObservationTypes(), 'Knowledge observability should include');
    appendMissing(errors, profile.performanceCharacteristics, this.performanceCharacteristics(), 'AI performance observability should include');
    appendMissing(errors, profile.failureConditions, this.failureConditions(), 'AI failure observability should include');
    appendMissing(errors, profile.businessCorrelationIdentifiers, this.businessCorrelationIdentifiers(), 'AI business correlation should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'AI governance alignment should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'AI observability quality attributes should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'AI observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'AI observability architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future AI observability capabilities should include');
    if (profile.businessContextPreserved !== true) errors.push('AI observability must preserve the relationship between AI activity and business outcomes.');
    if (profile.explainabilityPreserved !== true) errors.push('AI interactions should remain understandable.');
    if (profile.accountabilityUnambiguous !== true) errors.push('Operational evidence should support accountability without ambiguity.');
    if (profile.agentTransparencySupported !== true) errors.push('Agent behavior should remain visible throughout execution.');
    if (profile.humanOversightObservable !== true) errors.push('Human participation should remain observable whenever applicable.');
    if (profile.executionLifecycleObservable !== true) errors.push('Each AI execution lifecycle stage should contribute observable evidence.');
    if (profile.governanceEvidenceBased !== true) errors.push('Governance should rely upon observable AI evidence rather than assumptions.');
    if (profile.sensitiveKnowledgeProtected !== true) errors.push('Knowledge observability must strengthen explainability without exposing sensitive information.');
    if (profile.technologyNeutral !== true) errors.push('AI Observability must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('AI Observability must remain vendor neutral.');
    if (profile.modelInternalsSpecific === true) errors.push('Model internals are outside ARCH-010-05 scope.');
    if (profile.neuralNetworkArchitectureSpecific === true) errors.push('Neural network architectures are outside ARCH-010-05 scope.');
    if (profile.providerDiagnosticSpecific === true) errors.push('Provider-specific diagnostics are outside ARCH-010-05 scope.');
    if (profile.inferenceOptimizationSpecific === true) errors.push('Inference optimization is outside ARCH-010-05 scope.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-010-05 scope.');
    if (profile.opaqueComputationalComponent === true) errors.push('AI capabilities should be observable as enterprise business participants rather than opaque computational components.');

    return validation(errors);
  }

  validateOperationalEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof AiOperationalEvidence
      ? evidenceInput
      : new AiOperationalEvidence(evidenceInput);
    const errors = [];

    if (!this.explainabilityEvidenceTypes().includes(evidence.evidenceType)) errors.push(`Unsupported AI operational evidence type: ${evidence.evidenceType}.`);
    if (!evidence.aiObjective) errors.push('AI operational evidence must include the AI objective.');
    if (!evidence.agentIdentity) errors.push('AI operational evidence must include agent identity.');
    if (!this.executionLifecycleStages().includes(evidence.lifecycleStage)) errors.push(`Unsupported AI execution lifecycle stage: ${evidence.lifecycleStage}.`);
    if (!evidence.businessContext.businessCapability) errors.push('AI operational evidence must include business capability context.');
    if (!evidence.businessContext.businessOutcome) errors.push('AI operational evidence must include business outcome context.');
    if (!evidence.correlationId) errors.push('AI operational evidence must include correlation identity.');
    if (evidence.confidence !== undefined && (typeof evidence.confidence !== 'number' || evidence.confidence < 0 || evidence.confidence > 1)) {
      errors.push('AI confidence must be a number between 0 and 1.');
    }
    if (evidence.humanOversightActivity && !this.humanOversightActivities().includes(evidence.humanOversightActivity)) {
      errors.push(`Unsupported human oversight activity: ${evidence.humanOversightActivity}.`);
    }
    if (evidence.technologyNeutral !== true) errors.push('AI operational evidence must remain technology neutral.');
    if (evidence.exposesSensitiveKnowledge === true) errors.push('AI operational evidence must not expose sensitive knowledge.');
    if (evidence.exposesModelInternals === true) errors.push('AI operational evidence must not expose model internals.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('AI Observability must include all documented objectives.');
    if (this.modelStages().length !== 5) errors.push('AI Observability must include the documented model.');
    if (this.principles().length !== 5) errors.push('AI Observability must include documented principles.');
    if (this.explainabilityEvidenceTypes().length !== 6) errors.push('AI Observability must include documented explainability evidence.');
    if (this.accountabilityDistinctions().length !== 4) errors.push('AI Observability must include documented accountability distinctions.');
    if (this.agentInformation().length !== 6) errors.push('AI Observability must include documented agent information.');
    if (this.humanOversightActivities().length !== 6) errors.push('AI Observability must include documented human oversight activities.');
    if (this.executionLifecycleStages().length !== 6) errors.push('AI Observability must include documented execution lifecycle stages.');
    if (this.decisionCharacteristics().length !== 6) errors.push('AI Observability must include documented decision characteristics.');
    if (this.collaborationInteractions().length !== 5) errors.push('AI Observability must include documented collaboration interactions.');
    if (this.toolActivities().length !== 6) errors.push('AI Observability must include documented tool activities.');
    if (this.knowledgeObservationTypes().length !== 5) errors.push('AI Observability must include documented knowledge observations.');
    if (this.performanceCharacteristics().length !== 6) errors.push('AI Observability must include documented performance characteristics.');
    if (this.failureConditions().length !== 6) errors.push('AI Observability must include documented failure conditions.');
    if (this.businessCorrelationIdentifiers().length !== 5) errors.push('AI Observability must include documented business correlation identifiers.');
    if (this.governanceActivities().length !== 6) errors.push('AI Observability must include documented governance activities.');
    if (this.qualityAttributes().length !== 8) errors.push('AI Observability must include documented quality attributes.');
    if (this.relationshipFlow().length !== 5) errors.push('AI Observability must include the documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('AI Observability must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('AI Observability must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.AI_OBSERVABILITY_INVALID,
        'AI Observability violates ARCH-010-05.',
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
