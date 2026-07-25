import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_SECURITY_OBSERVABILITY_ACTIVITIES,
  AUTHORIZATION_OBSERVABILITY_ACTIVITIES,
  FUTURE_SECURITY_OBSERVABILITY_CAPABILITIES,
  IDENTITY_OBSERVABILITY_ACTIVITIES,
  INTEGRATION_SECURITY_OBSERVABILITY_ACTIVITIES,
  LEAST_PRIVILEGE_OBSERVATIONS,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  SECURITY_AUDITABILITY_SUPPORTS,
  SECURITY_BUSINESS_CONTEXT_ELEMENTS,
  SECURITY_DECISION_OUTCOMES,
  SECURITY_INCIDENT_OBSERVABILITY_CHARACTERISTICS,
  SECURITY_OBSERVABILITY_ARCHITECTURAL_RULES,
  SECURITY_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  SECURITY_OBSERVABILITY_MODEL_STAGES,
  SECURITY_OBSERVABILITY_OBJECTIVES,
  SECURITY_OBSERVABILITY_PRINCIPLES,
  SECURITY_OBSERVABILITY_QUALITY_ATTRIBUTES,
  SECURITY_OBSERVABILITY_RELATIONSHIP_STAGES,
  SECURITY_OPERATIONAL_EVIDENCE_TYPES,
  SECURITY_RISK_VISIBILITY_TYPES,
  SECURITY_VISIBILITY_AREAS,
  ZERO_TRUST_OBSERVABILITY_ACTIVITIES
} from '../constants.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';
import { SecurityObservabilityProfile } from '../contracts/security-observability-profile.js';
import { SecurityOperationalEvidence } from '../contracts/security-operational-evidence.js';

const MODEL = Object.freeze(Object.values(SECURITY_OBSERVABILITY_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(SECURITY_OBSERVABILITY_RELATIONSHIP_STAGES));

export class SecurityObservabilityDescriptor {
  objectives() {
    return Object.freeze(Object.values(SECURITY_OBSERVABILITY_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(SECURITY_OBSERVABILITY_PRINCIPLES));
  }

  visibilityAreas() {
    return Object.freeze(Object.values(SECURITY_VISIBILITY_AREAS));
  }

  businessContextElements() {
    return Object.freeze(Object.values(SECURITY_BUSINESS_CONTEXT_ELEMENTS));
  }

  zeroTrustActivities() {
    return Object.freeze(Object.values(ZERO_TRUST_OBSERVABILITY_ACTIVITIES));
  }

  decisionOutcomes() {
    return Object.freeze(Object.values(SECURITY_DECISION_OUTCOMES));
  }

  leastPrivilegeObservations() {
    return Object.freeze(Object.values(LEAST_PRIVILEGE_OBSERVATIONS));
  }

  identityActivities() {
    return Object.freeze(Object.values(IDENTITY_OBSERVABILITY_ACTIVITIES));
  }

  authorizationActivities() {
    return Object.freeze(Object.values(AUTHORIZATION_OBSERVABILITY_ACTIVITIES));
  }

  aiSecurityActivities() {
    return Object.freeze(Object.values(AI_SECURITY_OBSERVABILITY_ACTIVITIES));
  }

  integrationSecurityActivities() {
    return Object.freeze(Object.values(INTEGRATION_SECURITY_OBSERVABILITY_ACTIVITIES));
  }

  incidentCharacteristics() {
    return Object.freeze(Object.values(SECURITY_INCIDENT_OBSERVABILITY_CHARACTERISTICS));
  }

  auditabilitySupports() {
    return Object.freeze(Object.values(SECURITY_AUDITABILITY_SUPPORTS));
  }

  riskVisibilityTypes() {
    return Object.freeze(Object.values(SECURITY_RISK_VISIBILITY_TYPES));
  }

  operationalEvidenceTypes() {
    return Object.freeze(Object.values(SECURITY_OPERATIONAL_EVIDENCE_TYPES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(SECURITY_OBSERVABILITY_GOVERNANCE_ACTIVITIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(SECURITY_OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(SECURITY_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_SECURITY_OBSERVABILITY_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof SecurityObservabilityProfile
      ? profileInput
      : new SecurityObservabilityProfile(profileInput);
    const errors = [];

    if (!profile.observabilityName) errors.push('Security observability profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Security observability objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'Security observability model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Security observability principles must include');
    appendMissing(errors, profile.visibilityAreas, this.visibilityAreas(), 'Continuous security visibility must include');
    appendMissing(errors, profile.businessContextElements, this.businessContextElements(), 'Business-correlated security must include');
    appendMissing(errors, profile.zeroTrustActivities, this.zeroTrustActivities(), 'Zero Trust observability must include');
    appendMissing(errors, profile.decisionOutcomes, this.decisionOutcomes(), 'Explainable security decisions must include');
    appendMissing(errors, profile.leastPrivilegeObservations, this.leastPrivilegeObservations(), 'Least privilege verification should include');
    appendMissing(errors, profile.identityActivities, this.identityActivities(), 'Identity observability should include');
    appendMissing(errors, profile.authorizationActivities, this.authorizationActivities(), 'Authorization observability should include');
    appendMissing(errors, profile.aiSecurityActivities, this.aiSecurityActivities(), 'AI security observability should include');
    appendMissing(errors, profile.integrationSecurityActivities, this.integrationSecurityActivities(), 'Integration security observability should include');
    appendMissing(errors, profile.incidentCharacteristics, this.incidentCharacteristics(), 'Security incident observability should include');
    appendMissing(errors, profile.auditabilitySupports, this.auditabilitySupports(), 'Auditability should support');
    appendMissing(errors, profile.riskVisibilityTypes, this.riskVisibilityTypes(), 'Risk visibility should include');
    appendMissing(errors, profile.operationalEvidenceTypes, this.operationalEvidenceTypes(), 'Security operational evidence should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Security observability governance should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Security observability quality attributes should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Security observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Security observability architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future security observability capabilities should include');
    if (profile.continuouslyObservable !== true) errors.push('Security should be continuously observable throughout enterprise operations.');
    if (profile.businessContextPreserved !== true) errors.push('Security evidence should retain business context.');
    if (profile.zeroTrustSupported !== true) errors.push('Security observability must support Zero Trust.');
    if (profile.decisionsExplainable !== true) errors.push('Security outcomes should be understandable.');
    if (profile.leastPrivilegeVerifiable !== true) errors.push('Security observability should support verification of least privilege principles.');
    if (profile.auditabilityEnabled !== true) errors.push('Observable security evidence should support auditability.');
    if (profile.governanceEvidenceReliable !== true) errors.push('Governance depends upon reliable security evidence.');
    if (profile.trustworthyCorrelatedGoverned !== true) errors.push('Security evidence should remain trustworthy, correlated, and governed.');
    if (profile.technologyNeutral !== true) errors.push('Security Observability must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Security Observability must remain vendor neutral.');
    if (profile.securityProductSpecific === true) errors.push('Specific security products are outside ARCH-010-07 scope.');
    if (profile.siemPlatformSpecific === true) errors.push('SIEM platforms are outside ARCH-010-07 scope.');
    if (profile.endpointTechnologySpecific === true) errors.push('Endpoint technologies are outside ARCH-010-07 scope.');
    if (profile.securityToolingSpecific === true) errors.push('Security tooling is outside ARCH-010-07 scope.');
    if (profile.implementationMechanismSpecific === true) errors.push('Implementation mechanisms are outside ARCH-010-07 scope.');
    if (profile.exposesSensitiveImplementationDetails === true) errors.push('Security outcomes should be explained without exposing sensitive implementation details.');
    if (profile.disruptsBusinessCapabilities === true) errors.push('Security evidence should support enterprise trust without disrupting business capabilities.');

    return validation(errors);
  }

  validateOperationalEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof SecurityOperationalEvidence
      ? evidenceInput
      : new SecurityOperationalEvidence(evidenceInput);
    const errors = [];

    if (!this.operationalEvidenceTypes().includes(evidence.evidenceType)) errors.push(`Unsupported security operational evidence type: ${evidence.evidenceType}.`);
    if (!evidence.identity) errors.push('Security operational evidence must identify who performed the action.');
    if (!evidence.action) errors.push('Security operational evidence must identify what action occurred.');
    if (!evidence.affectedResource) errors.push('Security operational evidence must identify affected resources.');
    if (!this.decisionOutcomes().includes(evidence.securityDecision)) errors.push(`Unsupported security decision outcome: ${evidence.securityDecision}.`);
    if (!evidence.businessContext.businessCapability) errors.push('Security operational evidence must include business capability context.');
    if (!evidence.businessContext.transaction) errors.push('Security operational evidence must include transaction context.');
    if (!evidence.correlationId) errors.push('Security operational evidence must include correlation identity.');
    if (evidence.riskType && !this.riskVisibilityTypes().includes(evidence.riskType)) errors.push(`Unsupported security risk type: ${evidence.riskType}.`);
    if (evidence.zeroTrustActivity && !this.zeroTrustActivities().includes(evidence.zeroTrustActivity)) errors.push(`Unsupported Zero Trust activity: ${evidence.zeroTrustActivity}.`);
    if (evidence.technologyNeutral !== true) errors.push('Security operational evidence must remain technology neutral.');
    if (evidence.exposesSensitiveImplementationDetails === true) errors.push('Security operational evidence must not expose sensitive implementation details.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Security Observability must include all documented objectives.');
    if (this.modelStages().length !== 5) errors.push('Security Observability must include the documented model.');
    if (this.principles().length !== 5) errors.push('Security Observability must include documented principles.');
    if (this.visibilityAreas().length !== 6) errors.push('Security Observability must include documented visibility areas.');
    if (this.businessContextElements().length !== 6) errors.push('Security Observability must include documented business context elements.');
    if (this.zeroTrustActivities().length !== 5) errors.push('Security Observability must include documented Zero Trust activities.');
    if (this.decisionOutcomes().length !== 5) errors.push('Security Observability must include documented decision outcomes.');
    if (this.leastPrivilegeObservations().length !== 5) errors.push('Security Observability must include documented least privilege observations.');
    if (this.identityActivities().length !== 5) errors.push('Security Observability must include documented identity activities.');
    if (this.authorizationActivities().length !== 5) errors.push('Security Observability must include documented authorization activities.');
    if (this.aiSecurityActivities().length !== 6) errors.push('Security Observability must include documented AI security activities.');
    if (this.integrationSecurityActivities().length !== 5) errors.push('Security Observability must include documented integration security activities.');
    if (this.incidentCharacteristics().length !== 6) errors.push('Security Observability must include documented incident characteristics.');
    if (this.auditabilitySupports().length !== 5) errors.push('Security Observability must include documented auditability supports.');
    if (this.riskVisibilityTypes().length !== 6) errors.push('Security Observability must include documented risk visibility types.');
    if (this.operationalEvidenceTypes().length !== 6) errors.push('Security Observability must include documented operational evidence types.');
    if (this.governanceActivities().length !== 6) errors.push('Security Observability must include documented governance activities.');
    if (this.qualityAttributes().length !== 8) errors.push('Security Observability must include documented quality attributes.');
    if (this.relationshipFlow().length !== 5) errors.push('Security Observability must include the documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Security Observability must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('Security Observability must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.SECURITY_OBSERVABILITY_INVALID,
        'Security Observability violates ARCH-010-07.',
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
