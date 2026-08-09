import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_AGENT_IDENTITY_FIELDS,
  AI_SECURITY_STOP_CONDITIONS,
  AI_TOOL_SECURITY_STEPS,
  AUTHORIZATION_FACTORS,
  AUTHORIZATION_MODELS,
  DEVELOPER_IDENTITY_TYPES,
  DEVELOPER_SECURITY_ACTORS,
  DEVELOPER_SECURITY_ANTI_PATTERNS,
  DEVELOPER_SECURITY_ARCHITECTURAL_RULES,
  DEVELOPER_SECURITY_GOVERNANCE_ERROR_CODE,
  DEVELOPER_SECURITY_GOVERNANCE_OBJECTIVES,
  DEVELOPER_SECURITY_GOVERNANCE_PRINCIPLES,
  DEVELOPER_SECURITY_MEASURES,
  DeveloperSecurityGovernanceDescriptor,
  DeveloperSecurityGovernanceProfile,
  ENGINEERING_SECURITY_DOMAINS,
  FUTURE_DEVELOPER_SECURITY_CAPABILITIES,
  POLICY_CHARACTERISTICS,
  POLICY_ENFORCEMENT_POINTS,
  SECRET_PROHIBITED_LOCATIONS,
  SECURITY_GOVERNANCE_AREAS,
  SECURITY_INCIDENT_TRIGGERS,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('developer security governance exposes identity, authorization, access, delegation, and separation metadata', () => {
  const descriptor = new DeveloperSecurityGovernanceDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(DEVELOPER_SECURITY_GOVERNANCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(DEVELOPER_SECURITY_GOVERNANCE_PRINCIPLES));
  assert.ok(descriptor.actors().includes(DEVELOPER_SECURITY_ACTORS.AI_IMPLEMENTATION_AGENTS));
  assert.ok(descriptor.identityTypes().includes(DEVELOPER_IDENTITY_TYPES.AI_AGENT));
  assert.ok(descriptor.aiAgentIdentityFields().includes(AI_AGENT_IDENTITY_FIELDS.HUMAN_SPONSOR));
  assert.ok(descriptor.authorizationFactors().includes(AUTHORIZATION_FACTORS.TENANT_PROPERTY));
  assert.ok(descriptor.authorizationModels().includes(AUTHORIZATION_MODELS.JUST_IN_TIME));
  assert.ok(descriptor.accessLifecycleStates().includes('revoked'));
  assert.ok(descriptor.aiDelegationFields().includes('commit-and-push-authority'));
  assert.ok(descriptor.separationOfDutiesPairs().includes('ai-implementation-agent-and-accountable-approver'));
});

test('developer security governance exposes source, secrets, lifecycle-domain, AI-tool, and threat-model metadata', () => {
  const descriptor = new DeveloperSecurityGovernanceDescriptor();
  assert.ok(descriptor.sourceSecurityControls().includes('protected-integration-paths'));
  assert.ok(descriptor.secretProhibitedLocations().includes(SECRET_PROHIBITED_LOCATIONS.PROMPTS));
  assert.ok(descriptor.secretResponseSteps().includes('evaluate-logs-caches-and-ai-context'));
  assert.ok(descriptor.engineeringSecurityDomains().includes(ENGINEERING_SECURITY_DOMAINS.AI_ASSISTED_DEVELOPMENT));
  assert.deepEqual(descriptor.aiToolSecuritySteps(), Object.values(AI_TOOL_SECURITY_STEPS));
  assert.ok(descriptor.aiStopConditions().includes(AI_SECURITY_STOP_CONDITIONS.HUMAN_JUDGMENT_REQUIRED));
  assert.ok(descriptor.threatModelFields().includes('tenant-and-property-boundaries'));
});

test('developer security governance exposes policy, evidence, findings, assurance, incident, supplier, observability, and governance metadata', () => {
  const descriptor = new DeveloperSecurityGovernanceDescriptor();
  assert.ok(descriptor.policyCharacteristics().includes(POLICY_CHARACTERISTICS.TRACEABLE_TO_AUTHORITY));
  assert.ok(descriptor.policyEvaluationFields().includes('exception-eligibility'));
  assert.ok(descriptor.policyEnforcementPoints().includes(POLICY_ENFORCEMENT_POINTS.RELEASE_READINESS));
  assert.ok(descriptor.riskControlEvidenceFields().includes('effectiveness'));
  assert.ok(descriptor.evidenceLinks().includes('configuration-and-secret-reference-use'));
  assert.ok(descriptor.reviewApprovalTypes().includes('tenant-or-property-authority'));
  assert.ok(descriptor.findingFields().includes('exception-relationship'));
  assert.ok(descriptor.exceptionLifecycleStates().includes('expiring'));
  assert.ok(descriptor.remediationSteps().includes('verify-effectiveness'));
  assert.ok(descriptor.assuranceAreas().includes('ai-agent-controls'));
  assert.ok(descriptor.incidentTriggers().includes(SECURITY_INCIDENT_TRIGGERS.CROSS_TENANT_EXPOSURE));
  assert.ok(descriptor.supplierGovernanceFields().includes('exit-strategy'));
  assert.ok(descriptor.observabilitySignals().includes('ai-agent-tool-actions'));
  assert.ok(descriptor.governanceAreas().includes(SECURITY_GOVERNANCE_AREAS.AI_DEVELOPMENT_CONTROLS));
  assert.ok(descriptor.maturityLevels().includes('adaptive'));
  assert.ok(descriptor.measures().includes(DEVELOPER_SECURITY_MEASURES.AI_STOP_CONDITION_QUALITY));
  assert.ok(descriptor.antiPatterns().includes(DEVELOPER_SECURITY_ANTI_PATTERNS.AI_SELF_APPROVAL));
  assert.ok(descriptor.architecturalRules().includes(DEVELOPER_SECURITY_ARCHITECTURAL_RULES.POLICY_AUTOMATION_NOT_AUTHORITY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DEVELOPER_SECURITY_CAPABILITIES.AI_BEHAVIOR_ATTESTATION));
});

test('developer security governance validates complete profiles and rejects boundary violations', () => {
  const descriptor = new DeveloperSecurityGovernanceDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    programName: '',
    ...partialProfile(descriptor),
    verifiesEveryIdentity: false,
    explicitAuthority: false,
    leastPrivilegeZeroTrustSeparation: false,
    boundedAiDelegation: false,
    protectsEngineeringLifecycle: false,
    preventsSecretUnsafeStorage: false,
    usesWorkloadIdentitySecretReferences: false,
    embedsSecurityPrivacyInPavedPaths: false,
    protectsTenantPropertyIsolation: false,
    minimizesSensitiveData: false,
    approvedPolicyAtBoundaries: false,
    policyAutomationNotAuthority: false,
    evidenceByDesign: false,
    independentReviewPreserved: false,
    exceptionsTemporaryScoped: false,
    findingsOwnedUntilVerified: false,
    incidentsEmergencyContinuity: false,
    governsExternalTools: false,
    protectsDeveloperPrivacy: false,
    vendorNeutralTechnologyIndependent: false,
    replacesArch008OrArch012: true,
    infersAuthorityFromCredentials: true,
    allowsSharedIdentities: true,
    allowsAiImpersonation: true,
    allowsAiSelfApproval: true,
    allowsStandingBroadAccess: true,
    storesSecretsUnsafely: true,
    treatsMissingContextAsPermission: true,
    allowsCrossTenantConvenienceAccess: true,
    permitsIndefiniteExceptions: true,
    closesFindingsWithoutEvidence: true,
    treatsScannerOutputAsFinalRisk: true,
    usesDeveloperTelemetryForSurveillance: true,
    reconstructsEvidenceAfterFact: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /apply-least-privilege-and-continuous-authorization/);
  assert.match(invalid.errors.join('\n'), /authority-is-explicit/);
  assert.match(invalid.errors.join('\n'), /ai-implementation-agents/);
  assert.match(invalid.errors.join('\n'), /Every human, workload, automation, service, and AI-agent identity must be verified/);
  assert.match(invalid.errors.join('\n'), /must not replace or reinterpret ARCH-008 or ARCH-012/);
  assert.match(invalid.errors.join('\n'), /AI agents must not approve their own material changes/);
  assert.match(invalid.errors.join('\n'), /Indefinite exceptions must be prohibited/);
  assert.match(invalid.errors.join('\n'), /Compliance evidence must not be reconstructed only after the fact/);
});

test('developer security governance assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends DeveloperSecurityGovernanceDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === DEVELOPER_SECURITY_GOVERNANCE_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('developer security governance descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('DeveloperSecurityGovernanceDescriptor');
  assert.ok(descriptor instanceof DeveloperSecurityGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'actors', 'identityTypes', 'aiAgentIdentityFields',
    'authorizationFactors', 'authorizationModels', 'accessLifecycleStates', 'aiDelegationFields',
    'separationOfDutiesPairs', 'sourceSecurityControls', 'secretProhibitedLocations', 'secretResponseSteps',
    'engineeringSecurityDomains', 'aiToolSecuritySteps', 'aiStopConditions', 'threatModelFields',
    'policyCharacteristics', 'policyEvaluationFields', 'policyEnforcementPoints', 'riskControlEvidenceFields',
    'evidenceLinks', 'reviewApprovalTypes', 'findingFields', 'exceptionLifecycleStates', 'remediationSteps',
    'assuranceAreas', 'incidentTriggers', 'supplierGovernanceFields', 'observabilitySignals', 'governanceAreas',
    'maturityLevels', 'measures', 'antiPatterns', 'architecturalRules', 'futureCapabilities']) {
    values[key] = descriptor[key]();
  }
  return new DeveloperSecurityGovernanceProfile({ programName: 'Developer Security and Governance', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
