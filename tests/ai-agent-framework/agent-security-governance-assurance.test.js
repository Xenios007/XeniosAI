import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_CONTROL_OBJECTIVES,
  AGENT_CREDENTIAL_SECURITY_REQUIREMENTS,
  AGENT_DATA_PROTECTION_CONTROLS,
  AGENT_GOVERNANCE_OBJECTIVES,
  AGENT_IMPACT_LEVELS,
  AGENT_INVENTORY_FIELDS,
  AGENT_LEAST_PRIVILEGE_DIMENSIONS,
  AGENT_MODEL_SECURITY_CONTROLS,
  AGENT_POLICY_DOMAINS,
  AGENT_PROVIDER_GOVERNANCE_FIELDS,
  AGENT_RUNTIME_SECURITY_CONTROLS,
  AGENT_SECURITY_BOUNDARIES,
  AGENT_SECURITY_GOVERNANCE_ARCHITECTURAL_RULES,
  AGENT_SECURITY_GOVERNANCE_ASSURANCE_ERROR_CODE,
  AGENT_SECURITY_GOVERNANCE_BOUNDARIES,
  AGENT_SECURITY_GOVERNANCE_QUALITY_ATTRIBUTES,
  AGENT_SECURITY_OBJECTIVES,
  AGENT_SECURITY_TRUST_ELEMENTS,
  AGENT_SUPPLY_CHAIN_CONTROLS,
  AGENT_THREAT_ACTORS,
  AGENT_THREAT_CATEGORIES,
  ASSURANCE_ACTIVITIES,
  AgentSecurityGovernanceAssuranceDescriptor,
  AgentSecurityGovernanceAssuranceProfile,
  DECISION_RIGHTS,
  EMERGENCY_SUSPENSION_SCOPES,
  EVIDENCE_GENERATION_POINTS,
  EVIDENCE_PROPERTIES,
  EXCEPTION_FIELDS,
  FINDING_SOURCES,
  GOVERNANCE_MODEL_STAGES,
  GOVERNANCE_SECURITY_METRICS,
  INCIDENT_RESPONSE_CAPABILITIES,
  POLICY_ENFORCEMENT_POINTS,
  PROMPT_INJECTION_CONTROLS,
  REASSESSMENT_TRIGGERS,
  RED_TEAM_SCENARIOS,
  REMEDIATION_ACTIONS,
  RESPONSIBLE_AI_DIMENSIONS,
  RISK_CLASSIFICATION_FACTORS,
  SECURE_FAILURE_ACTIONS,
  SECURE_RESTORATION_REQUIREMENTS,
  SECURITY_MONITORING_SIGNALS,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-08 exposes security objectives, governance objectives, trust, boundaries, threats, privilege, credentials, runtime, and prompt-injection controls', () => {
  const descriptor = new AgentSecurityGovernanceAssuranceDescriptor();

  assert.ok(descriptor.securityObjectives().includes(AGENT_SECURITY_OBJECTIVES.CREDENTIALS));
  assert.ok(descriptor.governanceObjectives().includes(AGENT_GOVERNANCE_OBJECTIVES.INDEPENDENT_ASSURANCE));
  assert.ok(descriptor.trustElements().includes(AGENT_SECURITY_TRUST_ELEMENTS.AGENT_OUTPUT));
  assert.ok(descriptor.securityBoundaries().includes(AGENT_SECURITY_BOUNDARIES.MODEL_INVOCATION));
  assert.ok(descriptor.threatActors().includes(AGENT_THREAT_ACTORS.MALICIOUS_PLUGINS));
  assert.ok(descriptor.threatCategories().includes(AGENT_THREAT_CATEGORIES.EVIDENCE_TAMPERING));
  assert.ok(descriptor.leastPrivilegeDimensions().includes(AGENT_LEAST_PRIVILEGE_DIMENSIONS.DELEGATION));
  assert.ok(descriptor.credentialRequirements().includes(AGENT_CREDENTIAL_SECURITY_REQUIREMENTS.BROKERED_OUTSIDE_MODEL));
  assert.ok(descriptor.runtimeControls().includes(AGENT_RUNTIME_SECURITY_CONTROLS.EMERGENCY_TERMINATION));
  assert.ok(descriptor.promptInjectionControls().includes(PROMPT_INJECTION_CONTROLS.DETECTION_MONITORING));
});

test('ARCH-014-08 exposes data, model, provider, supply-chain, failure, emergency, governance, inventory, risk, policy, and enforcement metadata', () => {
  const descriptor = new AgentSecurityGovernanceAssuranceDescriptor();

  assert.ok(descriptor.dataProtectionControls().includes(AGENT_DATA_PROTECTION_CONTROLS.LEGAL_HOLD));
  assert.ok(descriptor.modelSecurityControls().includes(AGENT_MODEL_SECURITY_CONTROLS.WITHDRAWAL));
  assert.ok(descriptor.providerGovernanceFields().includes(AGENT_PROVIDER_GOVERNANCE_FIELDS.EXIT_STRATEGY));
  assert.ok(descriptor.supplyChainControls().includes(AGENT_SUPPLY_CHAIN_CONTROLS.LICENSING));
  assert.ok(descriptor.secureFailureActions().includes(SECURE_FAILURE_ACTIONS.TERMINATE_SAFELY));
  assert.ok(descriptor.emergencyScopes().includes(EMERGENCY_SUSPENSION_SCOPES.PROVIDER));
  assert.ok(descriptor.governanceStages().includes(GOVERNANCE_MODEL_STAGES.REMEDIATION_IMPROVEMENT));
  assert.ok(descriptor.inventoryFields().includes(AGENT_INVENTORY_FIELDS.REVIEW_DATE));
  assert.ok(descriptor.riskFactors().includes(RISK_CLASSIFICATION_FACTORS.MODEL_UNCERTAINTY));
  assert.ok(descriptor.impactLevels().includes(AGENT_IMPACT_LEVELS.CRITICAL));
  assert.ok(descriptor.decisionRights().includes(DECISION_RIGHTS.RESTORE));
  assert.ok(descriptor.policyDomains().includes(AGENT_POLICY_DOMAINS.SUSPENSION));
  assert.ok(descriptor.enforcementPoints().includes(POLICY_ENFORCEMENT_POINTS.KNOWLEDGE_PUBLICATION));
});

test('ARCH-014-08 exposes controls, responsible AI, evidence, assurance, remediation, monitoring, restoration, metrics, quality, rules, and boundaries', () => {
  const descriptor = new AgentSecurityGovernanceAssuranceDescriptor();

  assert.ok(descriptor.controlObjectives().includes(AGENT_CONTROL_OBJECTIVES.OUTPUT_NOT_TRUTH));
  assert.ok(descriptor.responsibleAiDimensions().includes(RESPONSIBLE_AI_DIMENSIONS.CONTESTABILITY));
  assert.ok(descriptor.evidenceGenerationPoints().includes(EVIDENCE_GENERATION_POINTS.INCIDENT));
  assert.ok(descriptor.evidenceProperties().includes(EVIDENCE_PROPERTIES.INTEGRITY_PROTECTED));
  assert.ok(descriptor.assuranceActivities().includes(ASSURANCE_ACTIVITIES.RED_TEAMING));
  assert.ok(descriptor.redTeamScenarios().includes(RED_TEAM_SCENARIOS.UNSAFE_RECOVERY));
  assert.ok(descriptor.exceptionFields().includes(EXCEPTION_FIELDS.REMEDIATION_PLAN));
  assert.ok(descriptor.findingSources().includes(FINDING_SOURCES.PROVIDER_CHANGE));
  assert.ok(descriptor.remediationActions().includes(REMEDIATION_ACTIONS.MEMORY_DELETION));
  assert.ok(descriptor.reassessmentTriggers().includes(REASSESSMENT_TRIGGERS.NEW_THREAT));
  assert.ok(descriptor.monitoringSignals().includes(SECURITY_MONITORING_SIGNALS.PROMPT_INJECTION_SIGNALS));
  assert.ok(descriptor.incidentResponseCapabilities().includes(INCIDENT_RESPONSE_CAPABILITIES.EVIDENCE_PRESERVATION));
  assert.ok(descriptor.restorationRequirements().includes(SECURE_RESTORATION_REQUIREMENTS.ENHANCED_MONITORING));
  assert.ok(descriptor.metrics().includes(GOVERNANCE_SECURITY_METRICS.ASSURANCE_COVERAGE));
  assert.ok(descriptor.qualityAttributes().includes(AGENT_SECURITY_GOVERNANCE_QUALITY_ATTRIBUTES.ASSURANCE));
  assert.ok(descriptor.architecturalRules().includes(AGENT_SECURITY_GOVERNANCE_ARCHITECTURAL_RULES.NO_SELF_RISK_ACCEPTANCE));
  assert.ok(descriptor.architectureBoundaries().includes(AGENT_SECURITY_GOVERNANCE_BOUNDARIES.GOVERNANCE_REPLACEMENT));
});

test('ARCH-014-08 validates complete profiles and rejects security governance violations', () => {
  const descriptor = new AgentSecurityGovernanceAssuranceDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    untrustedOutput: false,
    accountableOwners: false,
    leastPrivilegePerExecution: false,
    credentialsProtected: false,
    outputBecomesAuthority: true,
    agentOwnsRisk: true,
    credentialsInPrompts: true,
    detectionOnlyPromptInjectionControl: true,
    modelCapabilityAsAuthority: true,
    agentFabricatesApproval: true,
    policyTextOnlyEnforcement: true,
    agentCreatesOwnException: true,
    selfAttestedHighRiskAssurance: true,
    selectsComplianceFramework: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /identity/);
  assert.match(invalid.errors.join('\n'), /clear-decision-rights/);
  assert.match(invalid.errors.join('\n'), /Agent output must be treated as untrusted/);
  assert.match(invalid.errors.join('\n'), /Agent output must not directly become authority/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-08 does not select a compliance framework/);
});

test('ARCH-014-08 assertion detects incomplete security governance metadata', () => {
  class IncompleteDescriptor extends AgentSecurityGovernanceAssuranceDescriptor {
    securityObjectives() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === AGENT_SECURITY_GOVERNANCE_ASSURANCE_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented securityObjectives'))
  );
});

test('ARCH-014-08 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('AgentSecurityGovernanceAssuranceDescriptor');

  assert.ok(descriptor instanceof AgentSecurityGovernanceAssuranceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['securityObjectives', 'governanceObjectives', 'trustElements', 'securityBoundaries',
    'threatActors', 'threatCategories', 'leastPrivilegeDimensions', 'credentialRequirements',
    'runtimeControls', 'promptInjectionControls', 'dataProtectionControls', 'modelSecurityControls',
    'providerGovernanceFields', 'supplyChainControls', 'secureFailureActions', 'emergencyScopes',
    'governanceStages', 'inventoryFields', 'riskFactors', 'impactLevels', 'decisionRights',
    'policyDomains', 'enforcementPoints', 'controlObjectives', 'responsibleAiDimensions',
    'evidenceGenerationPoints', 'evidenceProperties', 'assuranceActivities', 'redTeamScenarios',
    'exceptionFields', 'findingSources', 'remediationActions', 'reassessmentTriggers',
    'monitoringSignals', 'incidentResponseCapabilities', 'restorationRequirements', 'metrics',
    'qualityAttributes', 'architecturalRules', 'architectureBoundaries']) values[key] = descriptor[key]();
  return new AgentSecurityGovernanceAssuranceProfile({
    securityName: 'Agent Security, Governance, and Assurance',
    ...values
  });
}
