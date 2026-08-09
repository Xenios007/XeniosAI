import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  SECURITY_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { AiGovernancePolicy } from '../contracts/ai-governance-policy.js';
import { AiSecurityProfile } from '../contracts/ai-security-profile.js';
import { AiSecurityValidationResult } from '../contracts/ai-security-validation-result.js';
import { AiToolInvocationPolicy } from '../contracts/ai-tool-invocation-policy.js';

const AI_TRUST_MODEL = Object.freeze(Object.values(AI_TRUST_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(AI_SECURITY_RELATIONSHIP_FLOW_STAGES));

export class AiSecurityDescriptor {
  objectives() {
    return Object.freeze(Object.values(AI_SECURITY_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(AI_SECURITY_PRINCIPLES));
  }

  componentIdentityTypes() {
    return Object.freeze(Object.values(AI_COMPONENT_IDENTITY_TYPES));
  }

  trustModel() {
    return AI_TRUST_MODEL;
  }

  identityCapabilities() {
    return Object.freeze(Object.values(AI_IDENTITY_CAPABILITIES));
  }

  protectedOperations() {
    return Object.freeze(Object.values(AI_PROTECTED_OPERATIONS));
  }

  promptSecurityControls() {
    return Object.freeze(Object.values(PROMPT_SECURITY_CONTROLS));
  }

  promptInjectionResistanceControls() {
    return Object.freeze(Object.values(PROMPT_INJECTION_RESISTANCE_CONTROLS));
  }

  knowledgeProtectionControls() {
    return Object.freeze(Object.values(KNOWLEDGE_PROTECTION_CONTROLS));
  }

  agentCommunicationControls() {
    return Object.freeze(Object.values(AGENT_COMMUNICATION_CONTROLS));
  }

  toolCategories() {
    return Object.freeze(Object.values(AI_TOOL_CATEGORIES));
  }

  toolInvocationRequirements() {
    return Object.freeze(Object.values(AI_TOOL_INVOCATION_REQUIREMENTS));
  }

  memoryProtectionControls() {
    return Object.freeze(Object.values(AI_MEMORY_PROTECTION_CONTROLS));
  }

  modelGovernanceActivities() {
    return Object.freeze(Object.values(MODEL_GOVERNANCE_ACTIVITIES));
  }

  supplyChainComponents() {
    return Object.freeze(Object.values(AI_SUPPLY_CHAIN_COMPONENTS));
  }

  riskTypes() {
    return Object.freeze(Object.values(AI_SECURITY_RISK_TYPES));
  }

  humanOversightActivities() {
    return Object.freeze(Object.values(HUMAN_OVERSIGHT_ACTIVITIES));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(AI_SECURITY_OBSERVABILITY_EVENTS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(AI_SECURITY_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_AI_SECURITY_CAPABILITIES));
  }

  validateSecurityProfile(profileInput) {
    const profile = profileInput instanceof AiSecurityProfile ? profileInput : new AiSecurityProfile(profileInput);
    const errors = [];

    if (!profile.componentName) errors.push('AI security profile must identify the AI component.');
    if (!this.componentIdentityTypes().includes(profile.identityType)) errors.push(`Unsupported AI identity type: ${profile.identityType}.`);
    appendMissing(errors, profile.trustModelStages, this.trustModel(), 'AI trust model must include');
    appendMissing(errors, profile.identityCapabilities, this.identityCapabilities(), 'AI identity should enable');
    appendMissing(errors, profile.protectedOperations, this.protectedOperations(), 'AI authorization must protect');
    appendMissing(errors, profile.promptControls, this.promptSecurityControls(), 'Prompt security should include');
    appendMissing(errors, profile.promptInjectionControls, this.promptInjectionResistanceControls(), 'Prompt injection resistance should include');
    appendMissing(errors, profile.knowledgeControls, this.knowledgeProtectionControls(), 'Knowledge protection should follow');
    appendMissing(errors, profile.agentCommunicationControls, this.agentCommunicationControls(), 'Agent communication should support');
    appendMissing(errors, profile.memoryControls, this.memoryProtectionControls(), 'AI memory protection should include');
    if (profile.uniqueIdentity !== true) errors.push('Every AI workload should possess a unique identity.');
    if (profile.independentlyAuthenticated !== true) errors.push('Each AI identity should authenticate independently.');
    if (profile.explicitlyAuthorized !== true) errors.push('AI capabilities must operate within explicitly assigned permissions.');
    if (profile.leastPrivilege !== true) errors.push('AI agents should receive only the permissions required for assigned tasks.');
    if (profile.humanAccountabilityPreserved !== true) errors.push('Organizational accountability remains with authorized human stakeholders.');
    if (profile.defenseInDepth !== true) errors.push('AI security should consist of multiple independent controls.');
    if (profile.auditable !== true) errors.push('AI actions must remain auditable.');
    if (profile.sharesUserCredentials === true) errors.push('AI identities should never share credentials with users or platform services.');
    if (profile.unrestrictedAccess === true) errors.push('AI should never access unrestricted information or execute unrestricted actions.');
    if (profile.implicitTrust === true) errors.push('AI should never possess implicit trust.');
    if (profile.vendorSpecific === true) errors.push('AI Security must remain technology neutral.');

    return validation(errors);
  }

  validateToolInvocation(policyInput) {
    const policy = policyInput instanceof AiToolInvocationPolicy ? policyInput : new AiToolInvocationPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('AI tool invocation policy must have a name.');
    if (!policy.agentIdentity) errors.push('AI tool invocation policy must identify the agent identity.');
    if (!this.toolCategories().includes(policy.toolCategory)) errors.push(`Unsupported AI tool category: ${policy.toolCategory}.`);
    appendMissing(errors, policy.requirements, this.toolInvocationRequirements(), 'Tool invocation requires');
    appendMissing(errors, policy.protectedOperations, this.protectedOperations(), 'Tool policy should protect');
    if (policy.explicitAuthorization !== true) errors.push('Tool invocation requires explicit authorization.');
    if (policy.parameterValidation !== true) errors.push('Tool invocation requires parameter validation.');
    if (policy.auditLogging !== true) errors.push('Tool invocation requires audit logging.');
    if (policy.errorHandling !== true) errors.push('Tool invocation requires error handling.');
    if (policy.operationalMonitoring !== true) errors.push('Tool invocation requires operational monitoring.');
    if (policy.inheritsUnrestrictedPrivileges === true) errors.push('Tools should never inherit unrestricted AI privileges.');
    if (policy.bypassesPlatformSecurity === true) errors.push('Tool invocation should never bypass platform security controls.');
    if (policy.vendorSpecific === true) errors.push('AI tool invocation security must remain technology neutral.');

    return validation(errors);
  }

  validateGovernance(policyInput) {
    const policy = policyInput instanceof AiGovernancePolicy ? policyInput : new AiGovernancePolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('AI governance policy must have a name.');
    appendMissing(errors, policy.modelGovernanceActivities, this.modelGovernanceActivities(), 'Model governance must include');
    appendMissing(errors, policy.supplyChainComponents, this.supplyChainComponents(), 'AI supply chain review should cover');
    appendMissing(errors, policy.riskTypes, this.riskTypes(), 'AI risk management should address');
    appendMissing(errors, policy.oversightActivities, this.humanOversightActivities(), 'Human oversight should cover');
    appendMissing(errors, policy.observabilityEvents, this.observabilityEvents(), 'AI security observability should expose');
    appendMissing(errors, policy.governanceActivities, this.governanceActivities(), 'AI security governance must include');
    if (policy.externalDependenciesReviewed !== true) errors.push('External AI dependencies should undergo security review before production use.');
    if (policy.modelVendorIndependent !== true) errors.push('Model governance should be independent of model vendors.');
    if (policy.riskControlsPreventiveDetectiveCorrective !== true) errors.push('AI risk management must combine preventive, detective, and corrective controls.');
    if (policy.oversightRiskBased !== true) errors.push('Oversight requirements should be defined by business risk.');
    if (policy.auditable !== true) errors.push('AI governance must remain auditable.');
    if (policy.aiAssumesOrganizationalResponsibility === true) errors.push('AI supports decisions rather than assuming organizational responsibility.');
    if (policy.modelSelectionSpecific === true) errors.push('Model selection is outside ARCH-008-07 scope.');
    if (policy.promptEngineeringSpecific === true) errors.push('Prompt engineering techniques are outside ARCH-008-07 scope.');
    if (policy.vendorSpecific === true) errors.push('AI governance must remain technology neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('AI Security must include all documented objectives.');
    if (this.principles().length !== 4) errors.push('AI Security must include all documented principles.');
    if (this.componentIdentityTypes().length !== 6) errors.push('AI Security must include documented AI identity examples.');
    if (this.trustModel().length !== 8) errors.push('AI Security must include the documented trust model.');
    if (this.protectedOperations().length !== 6) errors.push('AI Security must include documented protected operations.');
    if (this.relationshipFlow().length !== 8) errors.push('AI Security must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.AI_SECURITY_ARCHITECTURE_INVALID,
        'AI Security violates ARCH-008-07.',
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
  return new AiSecurityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
