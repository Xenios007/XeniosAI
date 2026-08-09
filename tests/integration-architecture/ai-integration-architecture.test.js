import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  AiIntegrationArchitectureDescriptor,
  AiIntegrationProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('ai integration architecture exposes documented objectives, model, principles, lifecycle, and relationship flow', () => {
  const descriptor = new AiIntegrationArchitectureDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(AI_INTEGRATION_OBJECTIVES));
  assert.deepEqual(descriptor.integrationModel(), Object.values(AI_INTEGRATION_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(AI_INTEGRATION_PRINCIPLES));
  assert.deepEqual(descriptor.lifecycle(), Object.values(AI_INTEGRATION_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(AI_INTEGRATION_RELATIONSHIP_FLOW_STAGES));
});

test('ai integration architecture exposes capabilities, contracts, participants, collaboration, tools, knowledge, security, and governance metadata', () => {
  const descriptor = new AiIntegrationArchitectureDescriptor();

  assert.ok(descriptor.capabilityTypes().includes(AI_CAPABILITY_TYPES.DECISION_SUPPORT));
  assert.ok(descriptor.contractElements().includes(AI_CONTRACT_ELEMENTS.OPERATIONAL_EXPECTATIONS));
  assert.ok(descriptor.participants().includes(AI_INTEGRATION_PARTICIPANTS.EXTERNAL_AI_PROVIDERS));
  assert.ok(descriptor.agentCollaborationControls().includes(AGENT_COLLABORATION_CONTROLS.EXPLAINABILITY));
  assert.ok(descriptor.serviceIntegrationExamples().includes(AI_SERVICE_INTEGRATION_EXAMPLES.KNOWLEDGE_REPOSITORIES));
  assert.ok(descriptor.toolIntegrationTypes().includes(AI_TOOL_INTEGRATION_TYPES.CODE_EXECUTION));
  assert.ok(descriptor.knowledgeIntegrationSources().includes(AI_KNOWLEDGE_INTEGRATION_SOURCES.RETRIEVAL_SYSTEMS));
  assert.ok(descriptor.humanAiCollaborationTypes().includes(HUMAN_AI_COLLABORATION_TYPES.DECISION_CONFIRMATION));
  assert.ok(descriptor.communicationModels().includes(AI_COMMUNICATION_MODELS.HUMAN_IN_THE_LOOP));
  assert.ok(descriptor.observabilityTelemetry().includes(AI_INTEGRATION_OBSERVABILITY_TELEMETRY.PROCESSING_DURATION));
  assert.ok(descriptor.securityControls().includes(AI_INTEGRATION_SECURITY_CONTROLS.AI_GOVERNANCE));
  assert.ok(descriptor.governanceActivities().includes(AI_INTEGRATION_GOVERNANCE_ACTIVITIES.PROVIDER_GOVERNANCE));
});

test('ai integration architecture validates governed provider-independent AI services', () => {
  const descriptor = new AiIntegrationArchitectureDescriptor();
  const valid = descriptor.validateAiIntegration(
    new AiIntegrationProfile({
      integrationName: 'Reservation Recommendation Capability',
      capabilityType: AI_CAPABILITY_TYPES.RECOMMENDATION,
      modelStages: Object.values(AI_INTEGRATION_MODEL_STAGES),
      principles: Object.values(AI_INTEGRATION_PRINCIPLES),
      contractElements: Object.values(AI_CONTRACT_ELEMENTS),
      participants: Object.values(AI_INTEGRATION_PARTICIPANTS),
      agentCollaborationControls: Object.values(AGENT_COLLABORATION_CONTROLS),
      serviceIntegrationExamples: Object.values(AI_SERVICE_INTEGRATION_EXAMPLES),
      toolIntegrationTypes: Object.values(AI_TOOL_INTEGRATION_TYPES),
      knowledgeIntegrationSources: Object.values(AI_KNOWLEDGE_INTEGRATION_SOURCES),
      humanAiCollaborationTypes: Object.values(HUMAN_AI_COLLABORATION_TYPES),
      communicationModels: Object.values(AI_COMMUNICATION_MODELS),
      lifecycleStages: Object.values(AI_INTEGRATION_LIFECYCLE_STAGES),
      observabilityTelemetry: Object.values(AI_INTEGRATION_OBSERVABILITY_TELEMETRY),
      securityControls: Object.values(AI_INTEGRATION_SECURITY_CONTROLS),
      governanceActivities: Object.values(AI_INTEGRATION_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateAiIntegration({
    integrationName: '',
    capabilityType: 'model-temperature-tuning',
    modelStages: [AI_INTEGRATION_MODEL_STAGES.BUSINESS_PROCESS],
    principles: [AI_INTEGRATION_PRINCIPLES.AI_AS_A_SERVICE],
    contractElements: [AI_CONTRACT_ELEMENTS.BUSINESS_CAPABILITY],
    participants: [AI_INTEGRATION_PARTICIPANTS.AI_ORCHESTRATORS],
    agentCollaborationControls: [AGENT_COLLABORATION_CONTROLS.IDENTITY],
    serviceIntegrationExamples: [AI_SERVICE_INTEGRATION_EXAMPLES.CUSTOMER_INFORMATION],
    toolIntegrationTypes: [AI_TOOL_INTEGRATION_TYPES.SEARCH],
    knowledgeIntegrationSources: [AI_KNOWLEDGE_INTEGRATION_SOURCES.ENTERPRISE_KNOWLEDGE_BASES],
    humanAiCollaborationTypes: [HUMAN_AI_COLLABORATION_TYPES.REVIEW],
    communicationModels: [AI_COMMUNICATION_MODELS.REQUEST_RESPONSE],
    lifecycleStages: [AI_INTEGRATION_LIFECYCLE_STAGES.DESIGN],
    observabilityTelemetry: [AI_INTEGRATION_OBSERVABILITY_TELEMETRY.REQUESTS],
    securityControls: [AI_INTEGRATION_SECURITY_CONTROLS.IDENTITY],
    governanceActivities: [AI_INTEGRATION_GOVERNANCE_ACTIVITIES.CAPABILITY_APPROVAL],
    exposesAiAsEnterpriseService: false,
    capabilityOriented: false,
    providerIndependent: false,
    explicitContracts: false,
    humanAccountabilityPreserved: false,
    explainableInteractions: false,
    businessOwnershipPreserved: false,
    governedAgentCollaboration: false,
    governedToolInvocation: false,
    knowledgeSourcesGoverned: false,
    enterpriseSecurityApplied: false,
    supportsMultipleCommunicationModels: false,
    vendorNeutral: false,
    technologyNeutral: false,
    modelSpecificPrompting: true,
    providerSdkSpecific: true,
    inferenceEngineSpecific: true,
    frameworkSpecific: true,
    directModelImplementation: true,
    bypassesBusinessGovernance: true,
    bypassesEnterpriseSecurity: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Unsupported AI capability type/);
  assert.match(invalid.errors.join('\n'), /AI Orchestrator/);
  assert.match(invalid.errors.join('\n'), /capability-oriented-integration/);
  assert.match(invalid.errors.join('\n'), /inputs/);
  assert.match(invalid.errors.join('\n'), /ai-agents/);
  assert.match(invalid.errors.join('\n'), /authorization/);
  assert.match(invalid.errors.join('\n'), /business-workflows/);
  assert.match(invalid.errors.join('\n'), /document-processing/);
  assert.match(invalid.errors.join('\n'), /document-repositories/);
  assert.match(invalid.errors.join('\n'), /approval/);
  assert.match(invalid.errors.join('\n'), /event-driven-ai/);
  assert.match(invalid.errors.join('\n'), /Integrate/);
  assert.match(invalid.errors.join('\n'), /responses/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /contract-management/);
  assert.match(invalid.errors.join('\n'), /governed enterprise services/);
  assert.match(invalid.errors.join('\n'), /provider independence/);
  assert.match(invalid.errors.join('\n'), /human accountability/);
  assert.match(invalid.errors.join('\n'), /Model-specific prompting techniques are outside ARCH-009-07 scope/);
  assert.match(invalid.errors.join('\n'), /Provider SDKs are outside ARCH-009-07 scope/);
  assert.match(invalid.errors.join('\n'), /enterprise security controls/);
});

test('ai integration architecture reports future directions without implementing them', () => {
  const descriptor = new AiIntegrationArchitectureDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_AI_INTEGRATION_DIRECTIONS.AUTONOMOUS_AGENT_ECOSYSTEMS));
  assert.ok(descriptor.futureDirections().includes(FUTURE_AI_INTEGRATION_DIRECTIONS.MULTI_PROVIDER_AI_FEDERATION));
  assert.ok(descriptor.futureDirections().includes(FUTURE_AI_INTEGRATION_DIRECTIONS.AI_CAPABILITY_MARKETPLACES));
});

test('ai integration architecture assertion rejects incomplete metadata', () => {
  class IncompleteAiIntegrationArchitectureDescriptor extends AiIntegrationArchitectureDescriptor {
    participants() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteAiIntegrationArchitectureDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.AI_INTEGRATION_ARCHITECTURE_INVALID &&
      error.details.errors.some(message => message.includes('participants'))
  );
});

test('ai integration architecture descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('AiIntegrationArchitectureDescriptor');

  assert.ok(descriptor instanceof AiIntegrationArchitectureDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
