import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { AgentSecurityGovernanceAssuranceProfile } from '../contracts/agent-security-governance-assurance-profile.js';
import {
  AGENT_CONTROL_OBJECTIVES, AGENT_CREDENTIAL_SECURITY_REQUIREMENTS,
  AGENT_DATA_PROTECTION_CONTROLS, AGENT_GOVERNANCE_OBJECTIVES, AGENT_IMPACT_LEVELS,
  AGENT_INVENTORY_FIELDS, AGENT_LEAST_PRIVILEGE_DIMENSIONS, AGENT_MODEL_SECURITY_CONTROLS,
  AGENT_POLICY_DOMAINS, AGENT_PROVIDER_GOVERNANCE_FIELDS, AGENT_RUNTIME_SECURITY_CONTROLS,
  AGENT_SECURITY_BOUNDARIES, AGENT_SECURITY_GOVERNANCE_ARCHITECTURAL_RULES,
  AGENT_SECURITY_GOVERNANCE_ASSURANCE_ERROR_CODE, AGENT_SECURITY_GOVERNANCE_BOUNDARIES,
  AGENT_SECURITY_GOVERNANCE_QUALITY_ATTRIBUTES, AGENT_SECURITY_OBJECTIVES,
  AGENT_SECURITY_TRUST_ELEMENTS, AGENT_SUPPLY_CHAIN_CONTROLS, AGENT_THREAT_ACTORS,
  AGENT_THREAT_CATEGORIES, ASSURANCE_ACTIVITIES, DECISION_RIGHTS, EMERGENCY_SUSPENSION_SCOPES,
  EVIDENCE_GENERATION_POINTS, EVIDENCE_PROPERTIES, EXCEPTION_FIELDS, FINDING_SOURCES,
  GOVERNANCE_MODEL_STAGES, GOVERNANCE_SECURITY_METRICS, INCIDENT_RESPONSE_CAPABILITIES,
  POLICY_ENFORCEMENT_POINTS, PROMPT_INJECTION_CONTROLS, REASSESSMENT_TRIGGERS,
  RED_TEAM_SCENARIOS, REMEDIATION_ACTIONS, RESPONSIBLE_AI_DIMENSIONS,
  RISK_CLASSIFICATION_FACTORS, SECURE_FAILURE_ACTIONS, SECURE_RESTORATION_REQUIREMENTS,
  SECURITY_MONITORING_SIGNALS
} from '../security-governance-assurance-constants.js';

const MAP = Object.freeze({
  securityObjectives: AGENT_SECURITY_OBJECTIVES,
  governanceObjectives: AGENT_GOVERNANCE_OBJECTIVES,
  trustElements: AGENT_SECURITY_TRUST_ELEMENTS,
  securityBoundaries: AGENT_SECURITY_BOUNDARIES,
  threatActors: AGENT_THREAT_ACTORS,
  threatCategories: AGENT_THREAT_CATEGORIES,
  leastPrivilegeDimensions: AGENT_LEAST_PRIVILEGE_DIMENSIONS,
  credentialRequirements: AGENT_CREDENTIAL_SECURITY_REQUIREMENTS,
  runtimeControls: AGENT_RUNTIME_SECURITY_CONTROLS,
  promptInjectionControls: PROMPT_INJECTION_CONTROLS,
  dataProtectionControls: AGENT_DATA_PROTECTION_CONTROLS,
  modelSecurityControls: AGENT_MODEL_SECURITY_CONTROLS,
  providerGovernanceFields: AGENT_PROVIDER_GOVERNANCE_FIELDS,
  supplyChainControls: AGENT_SUPPLY_CHAIN_CONTROLS,
  secureFailureActions: SECURE_FAILURE_ACTIONS,
  emergencyScopes: EMERGENCY_SUSPENSION_SCOPES,
  governanceStages: GOVERNANCE_MODEL_STAGES,
  inventoryFields: AGENT_INVENTORY_FIELDS,
  riskFactors: RISK_CLASSIFICATION_FACTORS,
  impactLevels: AGENT_IMPACT_LEVELS,
  decisionRights: DECISION_RIGHTS,
  policyDomains: AGENT_POLICY_DOMAINS,
  enforcementPoints: POLICY_ENFORCEMENT_POINTS,
  controlObjectives: AGENT_CONTROL_OBJECTIVES,
  responsibleAiDimensions: RESPONSIBLE_AI_DIMENSIONS,
  evidenceGenerationPoints: EVIDENCE_GENERATION_POINTS,
  evidenceProperties: EVIDENCE_PROPERTIES,
  assuranceActivities: ASSURANCE_ACTIVITIES,
  redTeamScenarios: RED_TEAM_SCENARIOS,
  exceptionFields: EXCEPTION_FIELDS,
  findingSources: FINDING_SOURCES,
  remediationActions: REMEDIATION_ACTIONS,
  reassessmentTriggers: REASSESSMENT_TRIGGERS,
  monitoringSignals: SECURITY_MONITORING_SIGNALS,
  incidentResponseCapabilities: INCIDENT_RESPONSE_CAPABILITIES,
  restorationRequirements: SECURE_RESTORATION_REQUIREMENTS,
  metrics: GOVERNANCE_SECURITY_METRICS,
  qualityAttributes: AGENT_SECURITY_GOVERNANCE_QUALITY_ATTRIBUTES,
  architecturalRules: AGENT_SECURITY_GOVERNANCE_ARCHITECTURAL_RULES,
  architectureBoundaries: AGENT_SECURITY_GOVERNANCE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  untrustedOutput: 'Agent output must be treated as untrusted until validated.',
  accountableOwners: 'Agents must have accountable and operational owners.',
  authoritativeInventory: 'An authoritative agent inventory must be maintained.',
  riskImpactClassified: 'Risk and impact must be classified.',
  riskProportionateControls: 'Controls must be proportionate to risk.',
  leastPrivilegePerExecution: 'Least privilege must be granted per execution.',
  identityScopePreserved: 'Initiator, tenant, and property identity must be preserved.',
  credentialsProtected: 'Credentials must be protected from models and context.',
  tenantPropertyIsolation: 'Tenant and property isolation must be enforced at every layer.',
  trustClassifiedContent: 'Retrieved content and agent messages must be treated according to trust.',
  promptInjectionDefense: 'Direct and indirect prompt injection must be defended against.',
  materialActionsValidated: 'Every material tool action must be independently validated.',
  modelProviderBoundaries: 'Model and provider data boundaries must be controlled.',
  supplyChainProtected: 'The agent supply chain must be protected.',
  boundedResourcesDelegation: 'Resource use and delegation must be bounded.',
  humanOversight: 'Human oversight must be proportionate to impact.',
  transparencyContestability: 'Transparency and contestability must be supported.',
  trustworthyEvidence: 'Trustworthy evidence must be produced during normal operation.',
  hiddenReasoningExcluded: 'Unrestricted hidden reasoning must be excluded from evidence.',
  independentAssurance: 'Higher-risk agents must receive independent assurance.',
  governedExceptions: 'Exceptions must be governed with owners and expiration.',
  verifiedRemediation: 'Findings must be tracked through verified remediation.',
  continuousReassessment: 'Agents must be reassessed after material change or incident.',
  rapidSuspensionSecureRestoration: 'Rapid scoped suspension and secure restoration must be supported.',
  noSelfRiskAcceptance: 'Agents must not accept their own risk or exceptions.',
  technologyNeutral: 'Security governance must remain technology, model, and provider neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  outputBecomesAuthority: 'Agent output must not directly become authority.',
  outputBecomesCredential: 'Agent output must not directly become credential.',
  outputBecomesPolicy: 'Agent output must not directly become policy.',
  outputBecomesApproval: 'Agent output must not directly become approval.',
  outputBecomesBusinessTruth: 'Agent output must not directly become business truth.',
  outputBecomesRuntimeState: 'Agent output must not directly become runtime state.',
  outputBecomesKnowledge: 'Agent output must not directly become knowledge.',
  outputBecomesExternalAction: 'Agent output must not directly become external action.',
  agentOwnsRisk: 'An agent must not own or approve its own enterprise risk.',
  singleBoundaryOnly: 'No single boundary should be the only protection against agent misuse.',
  approvalMakesContentAuthoritative: 'Authentication or approval of one element must not make all content produced by it authoritative.',
  credentialsInPrompts: 'Credentials must not appear in prompts, memory, plans, logs, or evidence.',
  modelControlsSecurityState: 'The model must not control runtime security state.',
  contextTransfersAuthority: 'Context must not transfer authority by containing an instruction.',
  detectionOnlyPromptInjectionControl: 'Prompt-injection detection alone is not sufficient.',
  unrestrictedDataAccess: 'Agent usefulness must not justify unrestricted data access.',
  modelCapabilityAsAuthority: 'Model capability must not establish business authority.',
  agentFabricatesApproval: 'The agent must not fabricate, infer, or reuse expired approval.',
  agentImpersonatesHuman: 'Agents must not impersonate humans.',
  policyTextOnlyEnforcement: 'Policy text alone is not enforcement.',
  agentCreatesOwnException: 'Agents must not create or approve their own exceptions.',
  selfAttestedHighRiskAssurance: 'Higher-risk agents must not rely on self-attested assurance.',
  symptomOnlyRestoration: 'Restoration must not occur merely because the immediate symptom disappeared.',
  selectsSecurityProduct: 'ARCH-014-08 does not define security-product implementation.',
  selectsIdentityProvider: 'ARCH-014-08 does not define identity-provider implementation.',
  selectsComplianceFramework: 'ARCH-014-08 does not select a compliance framework.',
  replacesEnterpriseSecurity: 'ARCH-014-08 does not replace enterprise Security Architecture.',
  replacesGovernanceCompliance: 'ARCH-014-08 does not replace ARCH-012 Governance & Compliance.',
  replacesHumanDecisionMaking: 'ARCH-014-08 does not replace accountable human decision making.'
});

export class AgentSecurityGovernanceAssuranceDescriptor {
  securityObjectives() { return values(MAP.securityObjectives); }
  governanceObjectives() { return values(MAP.governanceObjectives); }
  trustElements() { return values(MAP.trustElements); }
  securityBoundaries() { return values(MAP.securityBoundaries); }
  threatActors() { return values(MAP.threatActors); }
  threatCategories() { return values(MAP.threatCategories); }
  leastPrivilegeDimensions() { return values(MAP.leastPrivilegeDimensions); }
  credentialRequirements() { return values(MAP.credentialRequirements); }
  runtimeControls() { return values(MAP.runtimeControls); }
  promptInjectionControls() { return values(MAP.promptInjectionControls); }
  dataProtectionControls() { return values(MAP.dataProtectionControls); }
  modelSecurityControls() { return values(MAP.modelSecurityControls); }
  providerGovernanceFields() { return values(MAP.providerGovernanceFields); }
  supplyChainControls() { return values(MAP.supplyChainControls); }
  secureFailureActions() { return values(MAP.secureFailureActions); }
  emergencyScopes() { return values(MAP.emergencyScopes); }
  governanceStages() { return values(MAP.governanceStages); }
  inventoryFields() { return values(MAP.inventoryFields); }
  riskFactors() { return values(MAP.riskFactors); }
  impactLevels() { return values(MAP.impactLevels); }
  decisionRights() { return values(MAP.decisionRights); }
  policyDomains() { return values(MAP.policyDomains); }
  enforcementPoints() { return values(MAP.enforcementPoints); }
  controlObjectives() { return values(MAP.controlObjectives); }
  responsibleAiDimensions() { return values(MAP.responsibleAiDimensions); }
  evidenceGenerationPoints() { return values(MAP.evidenceGenerationPoints); }
  evidenceProperties() { return values(MAP.evidenceProperties); }
  assuranceActivities() { return values(MAP.assuranceActivities); }
  redTeamScenarios() { return values(MAP.redTeamScenarios); }
  exceptionFields() { return values(MAP.exceptionFields); }
  findingSources() { return values(MAP.findingSources); }
  remediationActions() { return values(MAP.remediationActions); }
  reassessmentTriggers() { return values(MAP.reassessmentTriggers); }
  monitoringSignals() { return values(MAP.monitoringSignals); }
  incidentResponseCapabilities() { return values(MAP.incidentResponseCapabilities); }
  restorationRequirements() { return values(MAP.restorationRequirements); }
  metrics() { return values(MAP.metrics); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AgentSecurityGovernanceAssuranceProfile
      ? profileInput
      : new AgentSecurityGovernanceAssuranceProfile(profileInput);
    const errors = [];
    if (!profile.securityName) errors.push('Agent Security, Governance, and Assurance profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Agent Security, Governance, and Assurance must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        AGENT_SECURITY_GOVERNANCE_ASSURANCE_ERROR_CODE,
        'Agent Security, Governance, and Assurance violates ARCH-014-08.',
        { errors }
      );
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
