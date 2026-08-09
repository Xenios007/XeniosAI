import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  AiObservabilityDescriptor,
  AiObservabilityProfile,
  AiOperationalEvidence,
  FUTURE_AI_OBSERVABILITY_CAPABILITIES,
  HUMAN_OVERSIGHT_ACTIVITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('ai observability exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new AiObservabilityDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(AI_OBSERVABILITY_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(AI_OBSERVABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(AI_OBSERVABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(AI_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('ai observability exposes explainability, accountability, agent, tool, knowledge, governance, and future metadata', () => {
  const descriptor = new AiObservabilityDescriptor();

  assert.ok(descriptor.explainabilityEvidenceTypes().includes(AI_EXPLAINABILITY_EVIDENCE_TYPES.AI_CONFIDENCE));
  assert.ok(descriptor.accountabilityDistinctions().includes(AI_ACCOUNTABILITY_DISTINCTIONS.HUMAN_DECISIONS));
  assert.ok(descriptor.agentInformation().includes(AGENT_OBSERVABILITY_INFORMATION.TOOL_USAGE));
  assert.ok(descriptor.humanOversightActivities().includes(HUMAN_OVERSIGHT_ACTIVITIES.EXCEPTION_HANDLING));
  assert.ok(descriptor.executionLifecycleStages().includes(AI_EXECUTION_LIFECYCLE_STAGES.KNOWLEDGE_RETRIEVAL));
  assert.ok(descriptor.decisionCharacteristics().includes(AI_DECISION_OBSERVABILITY_CHARACTERISTICS.SUPPORTING_KNOWLEDGE));
  assert.ok(descriptor.collaborationInteractions().includes(AGENT_COLLABORATION_OBSERVABILITY_INTERACTIONS.TASK_DELEGATION));
  assert.ok(descriptor.toolActivities().includes(AI_TOOL_OBSERVABILITY_ACTIVITIES.AUTHORIZATION));
  assert.ok(descriptor.knowledgeObservationTypes().includes(AI_KNOWLEDGE_OBSERVABILITY_TYPES.BUSINESS_RELEVANCE));
  assert.ok(descriptor.performanceCharacteristics().includes(AI_PERFORMANCE_OBSERVABILITY_CHARACTERISTICS.HUMAN_OVERRIDE_FREQUENCY));
  assert.ok(descriptor.failureConditions().includes(AI_FAILURE_OBSERVABILITY_CONDITIONS.POLICY_RESTRICTION));
  assert.ok(descriptor.businessCorrelationIdentifiers().includes(AI_BUSINESS_CORRELATION_IDENTIFIERS.SERVICE_IDENTIFIER));
  assert.ok(descriptor.governanceActivities().includes(AI_OBSERVABILITY_GOVERNANCE_ACTIVITIES.HUMAN_ACCOUNTABILITY));
  assert.ok(descriptor.qualityAttributes().includes(AI_OBSERVABILITY_QUALITY_ATTRIBUTES.TRUST));
  assert.ok(descriptor.architecturalRules().includes(AI_OBSERVABILITY_ARCHITECTURAL_RULES.ENABLE_HUMAN_OVERSIGHT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AI_OBSERVABILITY_CAPABILITIES.MULTI_AGENT_BEHAVIOR_ANALYSIS));
});

test('ai observability validates complete explainable AI observability profiles', () => {
  const descriptor = new AiObservabilityDescriptor();
  const valid = descriptor.validateProfile(
    new AiObservabilityProfile({
      observabilityName: 'AI Enterprise Trust Evidence',
      objectives: Object.values(AI_OBSERVABILITY_OBJECTIVES),
      modelStages: Object.values(AI_OBSERVABILITY_MODEL_STAGES),
      principles: Object.values(AI_OBSERVABILITY_PRINCIPLES),
      explainabilityEvidenceTypes: Object.values(AI_EXPLAINABILITY_EVIDENCE_TYPES),
      accountabilityDistinctions: Object.values(AI_ACCOUNTABILITY_DISTINCTIONS),
      agentInformation: Object.values(AGENT_OBSERVABILITY_INFORMATION),
      humanOversightActivities: Object.values(HUMAN_OVERSIGHT_ACTIVITIES),
      executionLifecycleStages: Object.values(AI_EXECUTION_LIFECYCLE_STAGES),
      decisionCharacteristics: Object.values(AI_DECISION_OBSERVABILITY_CHARACTERISTICS),
      collaborationInteractions: Object.values(AGENT_COLLABORATION_OBSERVABILITY_INTERACTIONS),
      toolActivities: Object.values(AI_TOOL_OBSERVABILITY_ACTIVITIES),
      knowledgeObservationTypes: Object.values(AI_KNOWLEDGE_OBSERVABILITY_TYPES),
      performanceCharacteristics: Object.values(AI_PERFORMANCE_OBSERVABILITY_CHARACTERISTICS),
      failureConditions: Object.values(AI_FAILURE_OBSERVABILITY_CONDITIONS),
      businessCorrelationIdentifiers: Object.values(AI_BUSINESS_CORRELATION_IDENTIFIERS),
      governanceActivities: Object.values(AI_OBSERVABILITY_GOVERNANCE_ACTIVITIES),
      qualityAttributes: Object.values(AI_OBSERVABILITY_QUALITY_ATTRIBUTES),
      relationshipStages: Object.values(AI_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(AI_OBSERVABILITY_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_AI_OBSERVABILITY_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    observabilityName: '',
    objectives: [AI_OBSERVABILITY_OBJECTIVES.AI_TRANSPARENCY],
    modelStages: [AI_OBSERVABILITY_MODEL_STAGES.BUSINESS_REQUEST],
    principles: [AI_OBSERVABILITY_PRINCIPLES.BUSINESS_CENTRIC_AI_VISIBILITY],
    explainabilityEvidenceTypes: [AI_EXPLAINABILITY_EVIDENCE_TYPES.AI_OBJECTIVE],
    accountabilityDistinctions: [AI_ACCOUNTABILITY_DISTINCTIONS.AI_RECOMMENDATIONS],
    agentInformation: [AGENT_OBSERVABILITY_INFORMATION.ASSIGNED_OBJECTIVE],
    humanOversightActivities: [HUMAN_OVERSIGHT_ACTIVITIES.REVIEW],
    executionLifecycleStages: [AI_EXECUTION_LIFECYCLE_STAGES.REQUEST],
    decisionCharacteristics: [AI_DECISION_OBSERVABILITY_CHARACTERISTICS.DECISION_OBJECTIVE],
    collaborationInteractions: [AGENT_COLLABORATION_OBSERVABILITY_INTERACTIONS.TASK_DELEGATION],
    toolActivities: [AI_TOOL_OBSERVABILITY_ACTIVITIES.TOOL_SELECTION],
    knowledgeObservationTypes: [AI_KNOWLEDGE_OBSERVABILITY_TYPES.KNOWLEDGE_SOURCE],
    performanceCharacteristics: [AI_PERFORMANCE_OBSERVABILITY_CHARACTERISTICS.REQUEST_VOLUME],
    failureConditions: [AI_FAILURE_OBSERVABILITY_CONDITIONS.MODEL_UNAVAILABLE],
    businessCorrelationIdentifiers: [AI_BUSINESS_CORRELATION_IDENTIFIERS.BUSINESS_CAPABILITY],
    governanceActivities: [AI_OBSERVABILITY_GOVERNANCE_ACTIVITIES.EXPLAINABILITY],
    qualityAttributes: [AI_OBSERVABILITY_QUALITY_ATTRIBUTES.TRANSPARENCY],
    relationshipStages: [AI_OBSERVABILITY_RELATIONSHIP_STAGES.BUSINESS_REQUEST],
    architecturalRules: [AI_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_AI_WITHIN_BUSINESS_CONTEXT],
    futureCapabilities: [FUTURE_AI_OBSERVABILITY_CAPABILITIES.AUTONOMOUS_EXPLAINABILITY],
    businessContextPreserved: false,
    explainabilityPreserved: false,
    accountabilityUnambiguous: false,
    agentTransparencySupported: false,
    humanOversightObservable: false,
    executionLifecycleObservable: false,
    governanceEvidenceBased: false,
    sensitiveKnowledgeProtected: false,
    technologyNeutral: false,
    vendorNeutral: false,
    modelInternalsSpecific: true,
    neuralNetworkArchitectureSpecific: true,
    providerDiagnosticSpecific: true,
    inferenceOptimizationSpecific: true,
    implementationTechnologySpecific: true,
    opaqueComputationalComponent: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /explainable-ai-behavior/);
  assert.match(invalid.errors.join('\n'), /AI Orchestrator/);
  assert.match(invalid.errors.join('\n'), /explainable-ai-participation/);
  assert.match(invalid.errors.join('\n'), /ai-recommendation/);
  assert.match(invalid.errors.join('\n'), /human-decisions/);
  assert.match(invalid.errors.join('\n'), /agent-identity/);
  assert.match(invalid.errors.join('\n'), /approval/);
  assert.match(invalid.errors.join('\n'), /Reasoning/);
  assert.match(invalid.errors.join('\n'), /decision-context/);
  assert.match(invalid.errors.join('\n'), /information-exchange/);
  assert.match(invalid.errors.join('\n'), /authorization/);
  assert.match(invalid.errors.join('\n'), /retrieval-objective/);
  assert.match(invalid.errors.join('\n'), /response-duration/);
  assert.match(invalid.errors.join('\n'), /tool-failure/);
  assert.match(invalid.errors.join('\n'), /customer-interaction/);
  assert.match(invalid.errors.join('\n'), /auditability/);
  assert.match(invalid.errors.join('\n'), /trust/);
  assert.match(invalid.errors.join('\n'), /AI Orchestrator/);
  assert.match(invalid.errors.join('\n'), /preserve-explainability/);
  assert.match(invalid.errors.join('\n'), /ai-assisted-operational-diagnostics/);
  assert.match(invalid.errors.join('\n'), /business outcomes/);
  assert.match(invalid.errors.join('\n'), /Model internals are outside ARCH-010-05 scope/);
  assert.match(invalid.errors.join('\n'), /Provider-specific diagnostics are outside ARCH-010-05 scope/);
  assert.match(invalid.errors.join('\n'), /opaque computational components/);
});

test('ai observability validates AI operational evidence with explainability, business context, oversight, and correlation', () => {
  const descriptor = new AiObservabilityDescriptor();
  const valid = descriptor.validateOperationalEvidence(
    new AiOperationalEvidence({
      evidenceType: AI_EXPLAINABILITY_EVIDENCE_TYPES.AI_RECOMMENDATION,
      aiObjective: 'Recommend policy response',
      agentIdentity: 'policy-agent',
      lifecycleStage: AI_EXECUTION_LIFECYCLE_STAGES.DECISION,
      businessContext: {
        businessCapability: 'policy-assistance',
        businessOutcome: 'customer-guidance'
      },
      recommendation: 'Suggest policy article',
      confidence: 0.82,
      humanOversightActivity: HUMAN_OVERSIGHT_ACTIVITIES.REVIEW,
      correlationId: 'corr-ai-1'
    })
  );
  const invalid = descriptor.validateOperationalEvidence({
    evidenceType: 'model-layer-activation',
    aiObjective: '',
    agentIdentity: '',
    lifecycleStage: 'token-sampling',
    businessContext: {},
    confidence: 2,
    humanOversightActivity: 'console-debug',
    correlationId: '',
    technologyNeutral: false,
    exposesSensitiveKnowledge: true,
    exposesModelInternals: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported AI operational evidence type/);
  assert.match(invalid.errors.join('\n'), /AI objective/);
  assert.match(invalid.errors.join('\n'), /agent identity/);
  assert.match(invalid.errors.join('\n'), /Unsupported AI execution lifecycle stage/);
  assert.match(invalid.errors.join('\n'), /business capability context/);
  assert.match(invalid.errors.join('\n'), /business outcome context/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /between 0 and 1/);
  assert.match(invalid.errors.join('\n'), /Unsupported human oversight activity/);
  assert.match(invalid.errors.join('\n'), /technology neutral/);
  assert.match(invalid.errors.join('\n'), /sensitive knowledge/);
  assert.match(invalid.errors.join('\n'), /model internals/);
});

test('ai observability assertion rejects incomplete metadata', () => {
  class IncompleteAiObservabilityDescriptor extends AiObservabilityDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteAiObservabilityDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.AI_OBSERVABILITY_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('ai observability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('AiObservabilityDescriptor');

  assert.ok(descriptor instanceof AiObservabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
