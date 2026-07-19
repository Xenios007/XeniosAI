import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGENT_COLLABORATION_CONTROLS,
  AI_CAPABILITY_TYPES,
  AI_COMMUNICATION_MODELS,
  AI_CONTRACT_ELEMENTS,
  AI_INTEGRATION_GOVERNANCE_ACTIVITIES,
  AI_INTEGRATION_LIFECYCLE_STAGES,
  AI_INTEGRATION_MODEL_STAGES,
  AI_INTEGRATION_OBJECTIVES,
  AI_INTEGRATION_OBSERVABILITY_TELEMETRY,
  AI_INTEGRATION_PARTICIPANTS,
  AI_INTEGRATION_PRINCIPLES,
  AI_INTEGRATION_RELATIONSHIP_FLOW_STAGES,
  AI_INTEGRATION_SECURITY_CONTROLS,
  AI_KNOWLEDGE_INTEGRATION_SOURCES,
  AI_SERVICE_INTEGRATION_EXAMPLES,
  AI_TOOL_INTEGRATION_TYPES,
  FUTURE_AI_INTEGRATION_DIRECTIONS,
  HUMAN_AI_COLLABORATION_TYPES,
  INTEGRATION_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { AiIntegrationProfile } from '../contracts/ai-integration-profile.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';

const MODEL = Object.freeze(Object.values(AI_INTEGRATION_MODEL_STAGES));
const LIFECYCLE = Object.freeze(Object.values(AI_INTEGRATION_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(AI_INTEGRATION_RELATIONSHIP_FLOW_STAGES));

export class AiIntegrationArchitectureDescriptor {
  objectives() {
    return Object.freeze(Object.values(AI_INTEGRATION_OBJECTIVES));
  }

  integrationModel() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(AI_INTEGRATION_PRINCIPLES));
  }

  capabilityTypes() {
    return Object.freeze(Object.values(AI_CAPABILITY_TYPES));
  }

  contractElements() {
    return Object.freeze(Object.values(AI_CONTRACT_ELEMENTS));
  }

  participants() {
    return Object.freeze(Object.values(AI_INTEGRATION_PARTICIPANTS));
  }

  agentCollaborationControls() {
    return Object.freeze(Object.values(AGENT_COLLABORATION_CONTROLS));
  }

  serviceIntegrationExamples() {
    return Object.freeze(Object.values(AI_SERVICE_INTEGRATION_EXAMPLES));
  }

  toolIntegrationTypes() {
    return Object.freeze(Object.values(AI_TOOL_INTEGRATION_TYPES));
  }

  knowledgeIntegrationSources() {
    return Object.freeze(Object.values(AI_KNOWLEDGE_INTEGRATION_SOURCES));
  }

  humanAiCollaborationTypes() {
    return Object.freeze(Object.values(HUMAN_AI_COLLABORATION_TYPES));
  }

  communicationModels() {
    return Object.freeze(Object.values(AI_COMMUNICATION_MODELS));
  }

  lifecycle() {
    return LIFECYCLE;
  }

  observabilityTelemetry() {
    return Object.freeze(Object.values(AI_INTEGRATION_OBSERVABILITY_TELEMETRY));
  }

  securityControls() {
    return Object.freeze(Object.values(AI_INTEGRATION_SECURITY_CONTROLS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(AI_INTEGRATION_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_AI_INTEGRATION_DIRECTIONS));
  }

  validateAiIntegration(profileInput) {
    const profile = profileInput instanceof AiIntegrationProfile
      ? profileInput
      : new AiIntegrationProfile(profileInput);
    const errors = [];

    if (!profile.integrationName) errors.push('AI integration must have a name.');
    if (!this.capabilityTypes().includes(profile.capabilityType)) errors.push(`Unsupported AI capability type: ${profile.capabilityType}.`);
    appendMissing(errors, profile.modelStages, this.integrationModel(), 'AI integration model must include');
    appendMissing(errors, profile.principles, this.principles(), 'AI integration principles should include');
    appendMissing(errors, profile.contractElements, this.contractElements(), 'AI contracts should define');
    appendMissing(errors, profile.participants, this.participants(), 'AI integration participants should include');
    appendMissing(errors, profile.agentCollaborationControls, this.agentCollaborationControls(), 'Agent collaboration should preserve');
    appendMissing(errors, profile.serviceIntegrationExamples, this.serviceIntegrationExamples(), 'AI-to-service integration should include');
    appendMissing(errors, profile.toolIntegrationTypes, this.toolIntegrationTypes(), 'Tool integration should include');
    appendMissing(errors, profile.knowledgeIntegrationSources, this.knowledgeIntegrationSources(), 'Knowledge integration should include');
    appendMissing(errors, profile.humanAiCollaborationTypes, this.humanAiCollaborationTypes(), 'Human-AI collaboration should include');
    appendMissing(errors, profile.communicationModels, this.communicationModels(), 'AI communication models should include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycle(), 'AI integration lifecycle must include');
    appendMissing(errors, profile.observabilityTelemetry, this.observabilityTelemetry(), 'AI observability should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'AI security must include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'AI governance should include');
    if (profile.exposesAiAsEnterpriseService !== true) errors.push('AI capabilities must be exposed as governed enterprise services.');
    if (profile.capabilityOriented !== true) errors.push('AI integrations should expose business capabilities instead of model-specific features.');
    if (profile.providerIndependent !== true) errors.push('AI Integration Architecture must preserve provider independence.');
    if (profile.explicitContracts !== true) errors.push('Every AI interaction should define explicit integration contracts.');
    if (profile.humanAccountabilityPreserved !== true) errors.push('AI integration must maintain human accountability.');
    if (profile.explainableInteractions !== true) errors.push('AI integration must support explainable AI interactions.');
    if (profile.businessOwnershipPreserved !== true) errors.push('Business services must remain authoritative owners of enterprise data and business rules.');
    if (profile.governedAgentCollaboration !== true) errors.push('Agent collaboration must be governed through defined contracts.');
    if (profile.governedToolInvocation !== true) errors.push('Tool invocation should occur through governed interfaces with explicit authorization.');
    if (profile.knowledgeSourcesGoverned !== true) errors.push('Knowledge sources must remain independently governed and versioned.');
    if (profile.enterpriseSecurityApplied !== true) errors.push('AI integrations must apply enterprise security.');
    if (profile.supportsMultipleCommunicationModels !== true) errors.push('AI Integration Architecture must support multiple communication models.');
    if (profile.vendorNeutral !== true) errors.push('AI Integration Architecture must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('AI Integration Architecture must remain technology neutral.');
    if (profile.modelSpecificPrompting === true) errors.push('Model-specific prompting techniques are outside ARCH-009-07 scope.');
    if (profile.providerSdkSpecific === true) errors.push('Provider SDKs are outside ARCH-009-07 scope.');
    if (profile.inferenceEngineSpecific === true) errors.push('Inference engines are outside ARCH-009-07 scope.');
    if (profile.frameworkSpecific === true) errors.push('Implementation frameworks are outside ARCH-009-07 scope.');
    if (profile.directModelImplementation === true) errors.push('Consumers must not depend on direct model implementations.');
    if (profile.bypassesBusinessGovernance === true) errors.push('AI recommendations should not bypass established business governance.');
    if (profile.bypassesEnterpriseSecurity === true) errors.push('AI participants should never bypass enterprise security controls.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('AI Integration Architecture must include all documented objectives.');
    if (this.integrationModel().length !== 5) errors.push('AI Integration Architecture must include the documented integration model.');
    if (this.principles().length !== 5) errors.push('AI Integration Architecture must include documented principles.');
    if (this.capabilityTypes().length !== 7) errors.push('AI Integration Architecture must include documented capability types.');
    if (this.contractElements().length !== 7) errors.push('AI Integration Architecture must include documented contract elements.');
    if (this.participants().length !== 9) errors.push('AI Integration Architecture must include documented participants.');
    if (this.agentCollaborationControls().length !== 6) errors.push('AI Integration Architecture must include documented agent collaboration controls.');
    if (this.serviceIntegrationExamples().length !== 6) errors.push('AI Integration Architecture must include documented service integration examples.');
    if (this.toolIntegrationTypes().length !== 7) errors.push('AI Integration Architecture must include documented tool integration types.');
    if (this.knowledgeIntegrationSources().length !== 5) errors.push('AI Integration Architecture must include documented knowledge integration sources.');
    if (this.humanAiCollaborationTypes().length !== 6) errors.push('AI Integration Architecture must include documented Human-AI collaboration types.');
    if (this.communicationModels().length !== 6) errors.push('AI Integration Architecture must include documented communication models.');
    if (this.lifecycle().length !== 7) errors.push('AI Integration Architecture must include the documented lifecycle.');
    if (this.observabilityTelemetry().length !== 7) errors.push('AI Integration Architecture must include documented observability telemetry.');
    if (this.securityControls().length !== 7) errors.push('AI Integration Architecture must include documented security controls.');
    if (this.governanceActivities().length !== 7) errors.push('AI Integration Architecture must include documented governance activities.');
    if (this.relationshipFlow().length !== 5) errors.push('AI Integration Architecture must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('AI Integration Architecture must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.AI_INTEGRATION_ARCHITECTURE_INVALID,
        'AI Integration Architecture violates ARCH-009-07.',
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
