import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_COMMUNICATION_CONTROLS,
  AI_COMPONENT_IDENTITY_TYPES,
  AI_IDENTITY_CAPABILITIES,
  AI_MEMORY_PROTECTION_CONTROLS,
  AI_PROTECTED_OPERATIONS,
  AI_SECURITY_GOVERNANCE_ACTIVITIES,
  AI_SECURITY_OBJECTIVES,
  AI_SECURITY_OBSERVABILITY_EVENTS,
  AI_SECURITY_PRINCIPLES,
  AI_SECURITY_RELATIONSHIP_FLOW_STAGES,
  AI_SECURITY_RISK_TYPES,
  AI_SUPPLY_CHAIN_COMPONENTS,
  AI_TOOL_CATEGORIES,
  AI_TOOL_INVOCATION_REQUIREMENTS,
  AI_TRUST_MODEL_STAGES,
  FUTURE_AI_SECURITY_CAPABILITIES,
  HUMAN_OVERSIGHT_ACTIVITIES,
  KNOWLEDGE_PROTECTION_CONTROLS,
  MODEL_GOVERNANCE_ACTIVITIES,
  PROMPT_INJECTION_RESISTANCE_CONTROLS,
  PROMPT_SECURITY_CONTROLS,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  AiGovernancePolicy,
  AiSecurityDescriptor,
  AiSecurityProfile,
  AiToolInvocationPolicy,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('ai security exposes objectives, principles, identities, trust model, and relationship flow', () => {
  const descriptor = new AiSecurityDescriptor();

  assert.ok(descriptor.objectives().includes(AI_SECURITY_OBJECTIVES.SECURE_AI_EXECUTION));
  assert.ok(descriptor.objectives().includes(AI_SECURITY_OBJECTIVES.ENTERPRISE_RESILIENCE));
  assert.ok(descriptor.principles().includes(AI_SECURITY_PRINCIPLES.AI_AS_SECURITY_SUBJECT));
  assert.ok(descriptor.componentIdentityTypes().includes(AI_COMPONENT_IDENTITY_TYPES.AI_ORCHESTRATOR));
  assert.deepEqual(descriptor.trustModel(), Object.values(AI_TRUST_MODEL_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(AI_SECURITY_RELATIONSHIP_FLOW_STAGES));
});

test('ai security exposes prompt, knowledge, agent, tool, memory, governance, and risk metadata', () => {
  const descriptor = new AiSecurityDescriptor();

  assert.ok(descriptor.identityCapabilities().includes(AI_IDENTITY_CAPABILITIES.DELEGATION));
  assert.ok(descriptor.protectedOperations().includes(AI_PROTECTED_OPERATIONS.TOOL_INVOCATION));
  assert.ok(descriptor.promptSecurityControls().includes(PROMPT_SECURITY_CONTROLS.CONTEXT_ISOLATION));
  assert.ok(descriptor.promptInjectionResistanceControls().includes(PROMPT_INJECTION_RESISTANCE_CONTROLS.KNOWLEDGE_FILTERING));
  assert.ok(descriptor.knowledgeProtectionControls().includes(KNOWLEDGE_PROTECTION_CONTROLS.INFORMATION_CLASSIFICATION));
  assert.ok(descriptor.agentCommunicationControls().includes(AGENT_COMMUNICATION_CONTROLS.CONTROLLED_CONTEXT_SHARING));
  assert.ok(descriptor.toolCategories().includes(AI_TOOL_CATEGORIES.PAYMENT_SERVICES));
  assert.ok(descriptor.toolInvocationRequirements().includes(AI_TOOL_INVOCATION_REQUIREMENTS.PARAMETER_VALIDATION));
  assert.ok(descriptor.memoryProtectionControls().includes(AI_MEMORY_PROTECTION_CONTROLS.SECURE_DISPOSAL));
  assert.ok(descriptor.modelGovernanceActivities().includes(MODEL_GOVERNANCE_ACTIVITIES.VERSION_MANAGEMENT));
  assert.ok(descriptor.supplyChainComponents().includes(AI_SUPPLY_CHAIN_COMPONENTS.AGENT_EXTENSIONS));
  assert.ok(descriptor.riskTypes().includes(AI_SECURITY_RISK_TYPES.PROMPT_INJECTION));
  assert.ok(descriptor.humanOversightActivities().includes(HUMAN_OVERSIGHT_ACTIVITIES.PRODUCTION_DEPLOYMENTS));
  assert.ok(descriptor.observabilityEvents().includes(AI_SECURITY_OBSERVABILITY_EVENTS.SECURITY_VIOLATIONS));
  assert.ok(descriptor.governanceActivities().includes(AI_SECURITY_GOVERNANCE_ACTIVITIES.PROMPT_GOVERNANCE));
});

test('ai security validates first-class AI security subjects', () => {
  const descriptor = new AiSecurityDescriptor();
  const valid = descriptor.validateSecurityProfile(
    new AiSecurityProfile({
      componentName: 'Knowledge Retrieval Agent',
      identityType: AI_COMPONENT_IDENTITY_TYPES.RETRIEVAL_AGENT,
      trustModelStages: Object.values(AI_TRUST_MODEL_STAGES),
      identityCapabilities: Object.values(AI_IDENTITY_CAPABILITIES),
      protectedOperations: Object.values(AI_PROTECTED_OPERATIONS),
      promptControls: Object.values(PROMPT_SECURITY_CONTROLS),
      promptInjectionControls: Object.values(PROMPT_INJECTION_RESISTANCE_CONTROLS),
      knowledgeControls: Object.values(KNOWLEDGE_PROTECTION_CONTROLS),
      agentCommunicationControls: Object.values(AGENT_COMMUNICATION_CONTROLS),
      memoryControls: Object.values(AI_MEMORY_PROTECTION_CONTROLS)
    })
  );
  const invalid = descriptor.validateSecurityProfile({
    componentName: '',
    identityType: 'shared-user-account',
    trustModelStages: [AI_TRUST_MODEL_STAGES.AI_IDENTITY],
    identityCapabilities: [AI_IDENTITY_CAPABILITIES.AUTHENTICATION],
    protectedOperations: [AI_PROTECTED_OPERATIONS.PROMPT_EXECUTION],
    promptControls: [PROMPT_SECURITY_CONTROLS.VALIDATION],
    promptInjectionControls: [PROMPT_INJECTION_RESISTANCE_CONTROLS.INSTRUCTION_ISOLATION],
    knowledgeControls: [KNOWLEDGE_PROTECTION_CONTROLS.IDENTITY_VERIFICATION],
    agentCommunicationControls: [AGENT_COMMUNICATION_CONTROLS.VERIFIED_IDENTITIES],
    memoryControls: [AI_MEMORY_PROTECTION_CONTROLS.AUTHORIZATION],
    uniqueIdentity: false,
    independentlyAuthenticated: false,
    explicitlyAuthorized: false,
    leastPrivilege: false,
    humanAccountabilityPreserved: false,
    defenseInDepth: false,
    auditable: false,
    sharesUserCredentials: true,
    unrestrictedAccess: true,
    implicitTrust: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /AI component/);
  assert.match(invalid.errors.join('\n'), /Unsupported AI identity type/);
  assert.match(invalid.errors.join('\n'), /Authentication/);
  assert.match(invalid.errors.join('\n'), /knowledge-retrieval/);
  assert.match(invalid.errors.join('\n'), /share credentials/);
  assert.match(invalid.errors.join('\n'), /implicit trust/);
});

test('ai security validates safe tool invocation policies', () => {
  const descriptor = new AiSecurityDescriptor();
  const valid = descriptor.validateToolInvocation(
    new AiToolInvocationPolicy({
      policyName: 'Reservation Tool Invocation',
      agentIdentity: 'Workflow Agent',
      toolCategory: AI_TOOL_CATEGORIES.RESERVATION_SYSTEMS,
      requirements: Object.values(AI_TOOL_INVOCATION_REQUIREMENTS),
      protectedOperations: Object.values(AI_PROTECTED_OPERATIONS)
    })
  );
  const invalid = descriptor.validateToolInvocation({
    policyName: '',
    agentIdentity: '',
    toolCategory: 'shell-admin',
    requirements: [AI_TOOL_INVOCATION_REQUIREMENTS.EXPLICIT_AUTHORIZATION],
    protectedOperations: [AI_PROTECTED_OPERATIONS.TOOL_INVOCATION],
    explicitAuthorization: false,
    parameterValidation: false,
    auditLogging: false,
    errorHandling: false,
    operationalMonitoring: false,
    inheritsUnrestrictedPrivileges: true,
    bypassesPlatformSecurity: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /agent identity/);
  assert.match(invalid.errors.join('\n'), /parameter-validation/);
  assert.match(invalid.errors.join('\n'), /workflow-execution/);
  assert.match(invalid.errors.join('\n'), /unrestricted AI privileges/);
  assert.match(invalid.errors.join('\n'), /platform security controls/);
});

test('ai security validates model governance, supply chain, risk, and oversight', () => {
  const descriptor = new AiSecurityDescriptor();
  const valid = descriptor.validateGovernance(
    new AiGovernancePolicy({
      policyName: 'AI Security Governance',
      modelGovernanceActivities: Object.values(MODEL_GOVERNANCE_ACTIVITIES),
      supplyChainComponents: Object.values(AI_SUPPLY_CHAIN_COMPONENTS),
      riskTypes: Object.values(AI_SECURITY_RISK_TYPES),
      oversightActivities: Object.values(HUMAN_OVERSIGHT_ACTIVITIES),
      observabilityEvents: Object.values(AI_SECURITY_OBSERVABILITY_EVENTS),
      governanceActivities: Object.values(AI_SECURITY_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateGovernance({
    policyName: '',
    modelGovernanceActivities: [MODEL_GOVERNANCE_ACTIVITIES.MODEL_APPROVAL],
    supplyChainComponents: [AI_SUPPLY_CHAIN_COMPONENTS.FOUNDATION_MODELS],
    riskTypes: [AI_SECURITY_RISK_TYPES.PROMPT_INJECTION],
    oversightActivities: [HUMAN_OVERSIGHT_ACTIVITIES.HIGH_VALUE_TRANSACTIONS],
    observabilityEvents: [AI_SECURITY_OBSERVABILITY_EVENTS.PROMPT_EXECUTION],
    governanceActivities: [AI_SECURITY_GOVERNANCE_ACTIVITIES.SECURITY_POLICY_REVIEWS],
    externalDependenciesReviewed: false,
    modelVendorIndependent: false,
    riskControlsPreventiveDetectiveCorrective: false,
    oversightRiskBased: false,
    auditable: false,
    aiAssumesOrganizationalResponsibility: true,
    modelSelectionSpecific: true,
    promptEngineeringSpecific: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /version-management/);
  assert.match(invalid.errors.join('\n'), /embedding-models/);
  assert.match(invalid.errors.join('\n'), /data-leakage/);
  assert.match(invalid.errors.join('\n'), /business risk/);
  assert.match(invalid.errors.join('\n'), /Model selection is outside/);
});

test('ai security reports future capabilities without implementing them', () => {
  const descriptor = new AiSecurityDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AI_SECURITY_CAPABILITIES.AUTONOMOUS_POLICY_VALIDATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AI_SECURITY_CAPABILITIES.SECURE_MULTI_AGENT_COORDINATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AI_SECURITY_CAPABILITIES.CRYPTOGRAPHIC_ATTESTATION_OF_AI_OUTPUTS));
});

test('ai security assertion rejects incomplete metadata', () => {
  class IncompleteAiSecurityDescriptor extends AiSecurityDescriptor {
    trustModel() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteAiSecurityDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.AI_SECURITY_ARCHITECTURE_INVALID &&
      error.details.errors.some(message => message.includes('trust model'))
  );
});

test('ai security descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('AiSecurityDescriptor');

  assert.ok(descriptor instanceof AiSecurityDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
