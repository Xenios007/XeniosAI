import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { DeveloperSecurityGovernanceProfile } from '../contracts/developer-security-governance-profile.js';
import {
  ACCESS_LIFECYCLE_STATES, AI_AGENT_IDENTITY_FIELDS, AI_DELEGATION_CONTRACT_FIELDS,
  AI_SECURITY_STOP_CONDITIONS, AI_TOOL_SECURITY_STEPS, ASSURANCE_AREAS, AUTHORIZATION_FACTORS,
  AUTHORIZATION_MODELS, DEVELOPER_IDENTITY_TYPES, DEVELOPER_SECURITY_ACTORS,
  DEVELOPER_SECURITY_ANTI_PATTERNS, DEVELOPER_SECURITY_ARCHITECTURAL_RULES,
  DEVELOPER_SECURITY_GOVERNANCE_ERROR_CODE, DEVELOPER_SECURITY_GOVERNANCE_OBJECTIVES,
  DEVELOPER_SECURITY_GOVERNANCE_PRINCIPLES, DEVELOPER_SECURITY_MATURITY_LEVELS,
  DEVELOPER_SECURITY_MEASURES, ENGINEERING_SECURITY_DOMAINS, EVIDENCE_LINKS,
  EXCEPTION_LIFECYCLE_STATES, FINDING_FIELDS, FUTURE_DEVELOPER_SECURITY_CAPABILITIES,
  POLICY_CHARACTERISTICS, POLICY_ENFORCEMENT_POINTS, POLICY_EVALUATION_FIELDS,
  REMEDIATION_STEPS, REVIEW_APPROVAL_TYPES, RISK_CONTROL_EVIDENCE_FIELDS, SECRET_PROHIBITED_LOCATIONS,
  SECRET_RESPONSE_STEPS, SECURITY_GOVERNANCE_AREAS, SECURITY_INCIDENT_TRIGGERS,
  SECURITY_OBSERVABILITY_SIGNALS, SEPARATION_OF_DUTIES_PAIRS, SOURCE_SECURITY_CONTROLS,
  SUPPLIER_GOVERNANCE_FIELDS, THREAT_MODEL_FIELDS
} from '../developer-security-governance-constants.js';

const MAP = Object.freeze({
  objectives: DEVELOPER_SECURITY_GOVERNANCE_OBJECTIVES,
  principles: DEVELOPER_SECURITY_GOVERNANCE_PRINCIPLES,
  actors: DEVELOPER_SECURITY_ACTORS,
  identityTypes: DEVELOPER_IDENTITY_TYPES,
  aiAgentIdentityFields: AI_AGENT_IDENTITY_FIELDS,
  authorizationFactors: AUTHORIZATION_FACTORS,
  authorizationModels: AUTHORIZATION_MODELS,
  accessLifecycleStates: ACCESS_LIFECYCLE_STATES,
  aiDelegationFields: AI_DELEGATION_CONTRACT_FIELDS,
  separationOfDutiesPairs: SEPARATION_OF_DUTIES_PAIRS,
  sourceSecurityControls: SOURCE_SECURITY_CONTROLS,
  secretProhibitedLocations: SECRET_PROHIBITED_LOCATIONS,
  secretResponseSteps: SECRET_RESPONSE_STEPS,
  engineeringSecurityDomains: ENGINEERING_SECURITY_DOMAINS,
  aiToolSecuritySteps: AI_TOOL_SECURITY_STEPS,
  aiStopConditions: AI_SECURITY_STOP_CONDITIONS,
  threatModelFields: THREAT_MODEL_FIELDS,
  policyCharacteristics: POLICY_CHARACTERISTICS,
  policyEvaluationFields: POLICY_EVALUATION_FIELDS,
  policyEnforcementPoints: POLICY_ENFORCEMENT_POINTS,
  riskControlEvidenceFields: RISK_CONTROL_EVIDENCE_FIELDS,
  evidenceLinks: EVIDENCE_LINKS,
  reviewApprovalTypes: REVIEW_APPROVAL_TYPES,
  findingFields: FINDING_FIELDS,
  exceptionLifecycleStates: EXCEPTION_LIFECYCLE_STATES,
  remediationSteps: REMEDIATION_STEPS,
  assuranceAreas: ASSURANCE_AREAS,
  incidentTriggers: SECURITY_INCIDENT_TRIGGERS,
  supplierGovernanceFields: SUPPLIER_GOVERNANCE_FIELDS,
  observabilitySignals: SECURITY_OBSERVABILITY_SIGNALS,
  governanceAreas: SECURITY_GOVERNANCE_AREAS,
  maturityLevels: DEVELOPER_SECURITY_MATURITY_LEVELS,
  measures: DEVELOPER_SECURITY_MEASURES,
  antiPatterns: DEVELOPER_SECURITY_ANTI_PATTERNS,
  architecturalRules: DEVELOPER_SECURITY_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_DEVELOPER_SECURITY_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  verifiesEveryIdentity: 'Every human, workload, automation, service, and AI-agent identity must be verified.',
  explicitAuthority: 'Authority must be explicit and contextual.',
  leastPrivilegeZeroTrustSeparation: 'Least privilege, Zero Trust, and separation of duties must be applied.',
  boundedAiDelegation: 'AI agents require bounded delegation, stop conditions, attribution, and revocation.',
  protectsEngineeringLifecycle: 'Source, repositories, development environments, builds, dependencies, artifacts, environments, and delivery must be protected.',
  preventsSecretUnsafeStorage: 'Secrets must be prevented from entering source, prompts, logs, artifacts, documentation, or general metadata.',
  usesWorkloadIdentitySecretReferences: 'Workload identity and secret references must be used where practical.',
  embedsSecurityPrivacyInPavedPaths: 'Security and privacy must be embedded in paved paths.',
  protectsTenantPropertyIsolation: 'Tenant and property isolation must be protected throughout developer workflows.',
  minimizesSensitiveData: 'Sensitive data must be minimized in development and AI context.',
  approvedPolicyAtBoundaries: 'Approved policy must be resolved and evaluated at lifecycle boundaries.',
  policyAutomationNotAuthority: 'Policy automation must remain distinct from policy authority.',
  evidenceByDesign: 'Integrity-protected evidence must be generated during execution.',
  independentReviewPreserved: 'Independent review must be preserved where risk requires it.',
  exceptionsTemporaryScoped: 'Exceptions must be temporary, scoped, evidenced risk decisions.',
  findingsOwnedUntilVerified: 'Findings must remain owned until verified remediation or authorized disposition.',
  incidentsEmergencyContinuity: 'Incidents, emergency access, recovery, and continuity must be integrated.',
  governsExternalTools: 'External tools and third-party AI must be governed.',
  protectsDeveloperPrivacy: 'Developer privacy must be protected.',
  vendorNeutralTechnologyIndependent: 'Developer security and governance must preserve vendor neutrality and technology independence.'
});

const REQUIRED_FALSE = Object.freeze({
  replacesArch008OrArch012: 'ARCH-013-08 must not replace or reinterpret ARCH-008 or ARCH-012.',
  infersAuthorityFromCredentials: 'Authority must not be inferred from credentials or network location.',
  allowsSharedIdentities: 'Shared developer or automation identities must not be allowed as a normal pattern.',
  allowsAiImpersonation: 'AI agents must not impersonate human sponsors.',
  allowsAiSelfApproval: 'AI agents must not approve their own material changes.',
  allowsStandingBroadAccess: 'Standing broad production access must not be allowed as a default.',
  storesSecretsUnsafely: 'Secrets must not be stored in unsafe locations.',
  treatsMissingContextAsPermission: 'Missing policy or authorization context must not be interpreted as permission.',
  allowsCrossTenantConvenienceAccess: 'Cross-tenant development access for convenience must not be allowed.',
  permitsIndefiniteExceptions: 'Indefinite exceptions must be prohibited.',
  closesFindingsWithoutEvidence: 'Findings must not be closed without effectiveness evidence.',
  treatsScannerOutputAsFinalRisk: 'Scanner output must not be treated as final risk.',
  usesDeveloperTelemetryForSurveillance: 'Developer telemetry must not be used as inappropriate surveillance.',
  reconstructsEvidenceAfterFact: 'Compliance evidence must not be reconstructed only after the fact.'
});

export class DeveloperSecurityGovernanceDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  actors() { return values(MAP.actors); }
  identityTypes() { return values(MAP.identityTypes); }
  aiAgentIdentityFields() { return values(MAP.aiAgentIdentityFields); }
  authorizationFactors() { return values(MAP.authorizationFactors); }
  authorizationModels() { return values(MAP.authorizationModels); }
  accessLifecycleStates() { return values(MAP.accessLifecycleStates); }
  aiDelegationFields() { return values(MAP.aiDelegationFields); }
  separationOfDutiesPairs() { return values(MAP.separationOfDutiesPairs); }
  sourceSecurityControls() { return values(MAP.sourceSecurityControls); }
  secretProhibitedLocations() { return values(MAP.secretProhibitedLocations); }
  secretResponseSteps() { return values(MAP.secretResponseSteps); }
  engineeringSecurityDomains() { return values(MAP.engineeringSecurityDomains); }
  aiToolSecuritySteps() { return values(MAP.aiToolSecuritySteps); }
  aiStopConditions() { return values(MAP.aiStopConditions); }
  threatModelFields() { return values(MAP.threatModelFields); }
  policyCharacteristics() { return values(MAP.policyCharacteristics); }
  policyEvaluationFields() { return values(MAP.policyEvaluationFields); }
  policyEnforcementPoints() { return values(MAP.policyEnforcementPoints); }
  riskControlEvidenceFields() { return values(MAP.riskControlEvidenceFields); }
  evidenceLinks() { return values(MAP.evidenceLinks); }
  reviewApprovalTypes() { return values(MAP.reviewApprovalTypes); }
  findingFields() { return values(MAP.findingFields); }
  exceptionLifecycleStates() { return values(MAP.exceptionLifecycleStates); }
  remediationSteps() { return values(MAP.remediationSteps); }
  assuranceAreas() { return values(MAP.assuranceAreas); }
  incidentTriggers() { return values(MAP.incidentTriggers); }
  supplierGovernanceFields() { return values(MAP.supplierGovernanceFields); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  governanceAreas() { return values(MAP.governanceAreas); }
  maturityLevels() { return values(MAP.maturityLevels); }
  measures() { return values(MAP.measures); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof DeveloperSecurityGovernanceProfile ?
      profileInput : new DeveloperSecurityGovernanceProfile(profileInput);
    const errors = [];
    if (!profile.programName) errors.push('Developer Security and Governance profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Developer Security and Governance must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(DEVELOPER_SECURITY_GOVERNANCE_ERROR_CODE, 'Developer Security and Governance violates ARCH-013-08.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
