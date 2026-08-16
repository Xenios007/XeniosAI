import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeMemorySecurityGovernanceProfile } from '../contracts/security-governance-assurance-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_MEMORY_ASSURANCE_METHODS, KNOWLEDGE_MEMORY_ASSURANCE_SCOPE_FIELDS,
  KNOWLEDGE_MEMORY_CLASSIFICATIONS, KNOWLEDGE_MEMORY_CONTROL_CATEGORIES,
  KNOWLEDGE_MEMORY_CONTROL_FIELDS, KNOWLEDGE_MEMORY_DEGRADED_CONTROL_MODES,
  KNOWLEDGE_MEMORY_EVIDENCE_FIELDS, KNOWLEDGE_MEMORY_EVIDENCE_TYPES,
  KNOWLEDGE_MEMORY_GOVERNANCE_GATES, KNOWLEDGE_MEMORY_RISK_FIELDS,
  KNOWLEDGE_MEMORY_RISK_TYPES, KNOWLEDGE_MEMORY_SECURITY_BOUNDARIES,
  KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES, KNOWLEDGE_MEMORY_SECURITY_ERROR_CODE,
  KNOWLEDGE_MEMORY_SECURITY_OBJECTIVES, KNOWLEDGE_MEMORY_SECURITY_QUALITY_ATTRIBUTES,
  KNOWLEDGE_MEMORY_SECURITY_RESOURCES, KNOWLEDGE_MEMORY_SECURITY_RULES,
  KNOWLEDGE_MEMORY_SECURITY_SUBJECTS, KNOWLEDGE_MEMORY_TRUST_FACTORS
} from '../security-governance-assurance-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_MEMORY_SECURITY_OBJECTIVES,
  securitySubjects: KNOWLEDGE_MEMORY_SECURITY_SUBJECTS,
  protectedResources: KNOWLEDGE_MEMORY_SECURITY_RESOURCES,
  trustFactors: KNOWLEDGE_MEMORY_TRUST_FACTORS,
  capabilities: KNOWLEDGE_MEMORY_SECURITY_CAPABILITIES,
  classifications: KNOWLEDGE_MEMORY_CLASSIFICATIONS,
  controlFields: KNOWLEDGE_MEMORY_CONTROL_FIELDS,
  controlCategories: KNOWLEDGE_MEMORY_CONTROL_CATEGORIES,
  riskFields: KNOWLEDGE_MEMORY_RISK_FIELDS,
  riskTypes: KNOWLEDGE_MEMORY_RISK_TYPES,
  governanceGates: KNOWLEDGE_MEMORY_GOVERNANCE_GATES,
  assuranceMethods: KNOWLEDGE_MEMORY_ASSURANCE_METHODS,
  assuranceScopeFields: KNOWLEDGE_MEMORY_ASSURANCE_SCOPE_FIELDS,
  evidenceFields: KNOWLEDGE_MEMORY_EVIDENCE_FIELDS,
  evidenceTypes: KNOWLEDGE_MEMORY_EVIDENCE_TYPES,
  degradedModes: KNOWLEDGE_MEMORY_DEGRADED_CONTROL_MODES,
  qualityAttributes: KNOWLEDGE_MEMORY_SECURITY_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_MEMORY_SECURITY_RULES,
  architectureBoundaries: KNOWLEDGE_MEMORY_SECURITY_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  zeroTrust: 'ARCH-016-08 requires zeroTrust.',
  leastPrivilege: 'ARCH-016-08 requires leastPrivilege.',
  verifiableIdentities: 'ARCH-016-08 requires verifiableIdentities.',
  delegationBounded: 'ARCH-016-08 requires delegationBounded.',
  authorizationContextual: 'ARCH-016-08 requires authorizationContextual.',
  authorizationBeforeRetrieval: 'ARCH-016-08 requires authorizationBeforeRetrieval.',
  capabilitiesSeparated: 'ARCH-016-08 requires capabilitiesSeparated.',
  dutiesSeparated: 'ARCH-016-08 requires dutiesSeparated.',
  tenantIsolation: 'ARCH-016-08 requires tenantIsolation.',
  propertyIsolation: 'ARCH-016-08 requires propertyIsolation.',
  crossScopeExplicit: 'ARCH-016-08 requires crossScopeExplicit.',
  classificationApplied: 'ARCH-016-08 requires classificationApplied.',
  inheritancePreserved: 'ARCH-016-08 requires inheritancePreserved.',
  encryptionRequired: 'ARCH-016-08 requires encryptionRequired.',
  secretsExcluded: 'ARCH-016-08 requires secretsExcluded.',
  sourcesAuthenticated: 'ARCH-016-08 requires sourcesAuthenticated.',
  integrityValidated: 'ARCH-016-08 requires integrityValidated.',
  unsafeContentQuarantined: 'ARCH-016-08 requires unsafeContentQuarantined.',
  poisoningControlled: 'ARCH-016-08 requires poisoningControlled.',
  contentUntrusted: 'ARCH-016-08 requires contentUntrusted.',
  instructionBoundary: 'ARCH-016-08 requires instructionBoundary.',
  sideChannelsControlled: 'ARCH-016-08 requires sideChannelsControlled.',
  embeddingsProtected: 'ARCH-016-08 requires embeddingsProtected.',
  memoryAdmissionGoverned: 'ARCH-016-08 requires memoryAdmissionGoverned.',
  contextBound: 'ARCH-016-08 requires contextBound.',
  minimization: 'ARCH-016-08 requires minimization.',
  exfiltrationControlled: 'ARCH-016-08 requires exfiltrationControlled.',
  privilegedAccessGoverned: 'ARCH-016-08 requires privilegedAccessGoverned.',
  supplyChainGoverned: 'ARCH-016-08 requires supplyChainGoverned.',
  personalPurposeAuthorized: 'ARCH-016-08 requires personalPurposeAuthorized.',
  rightsSupported: 'ARCH-016-08 requires rightsSupported.',
  sensitiveInferenceControlled: 'ARCH-016-08 requires sensitiveInferenceControlled.',
  consentExplicit: 'ARCH-016-08 requires consentExplicit.',
  trainingSeparated: 'ARCH-016-08 requires trainingSeparated.',
  residencyEnforced: 'ARCH-016-08 requires residencyEnforced.',
  accountableOwnership: 'ARCH-016-08 requires accountableOwnership.',
  policyHierarchyGoverned: 'ARCH-016-08 requires policyHierarchyGoverned.',
  riskGoverned: 'ARCH-016-08 requires riskGoverned.',
  highRiskGatesRequired: 'ARCH-016-08 requires highRiskGatesRequired.',
  exceptionsGoverned: 'ARCH-016-08 requires exceptionsGoverned.',
  evidenceByDesign: 'ARCH-016-08 requires evidenceByDesign.',
  evidenceSeparatelyAuthorized: 'ARCH-016-08 requires evidenceSeparatelyAuthorized.',
  chainOfCustody: 'ARCH-016-08 requires chainOfCustody.',
  assuranceRiskBased: 'ARCH-016-08 requires assuranceRiskBased.',
  controlEffectivenessTested: 'ARCH-016-08 requires controlEffectivenessTested.',
  remediationVerified: 'ARCH-016-08 requires remediationVerified.',
  incidentsIntegrated: 'ARCH-016-08 requires incidentsIntegrated.',
  safeDegradation: 'ARCH-016-08 requires safeDegradation.',
  vendorNeutral: 'ARCH-016-08 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-08 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  rankGrantsAccess: 'ARCH-016-08 prohibits rankGrantsAccess.',
  similarityGrantsAccess: 'ARCH-016-08 prohibits similarityGrantsAccess.',
  citationGrantsAccess: 'ARCH-016-08 prohibits citationGrantsAccess.',
  memoryIdGrantsAccess: 'ARCH-016-08 prohibits memoryIdGrantsAccess.',
  internalIsTrusted: 'ARCH-016-08 prohibits internalIsTrusted.',
  sharedCredentialsDefault: 'ARCH-016-08 prohibits sharedCredentialsDefault.',
  serviceCredentialReplacesUserAuth: 'ARCH-016-08 prohibits serviceCredentialReplacesUserAuth.',
  readImpliesWrite: 'ARCH-016-08 prohibits readImpliesWrite.',
  writeImpliesAdmission: 'ARCH-016-08 prohibits writeImpliesAdmission.',
  postSearchRedactionOnly: 'ARCH-016-08 prohibits postSearchRedactionOnly.',
  embeddingsAnonymous: 'ARCH-016-08 prohibits embeddingsAnonymous.',
  modelWritesDurableMemory: 'ARCH-016-08 prohibits modelWritesDurableMemory.',
  contextCrossScopeReuse: 'ARCH-016-08 prohibits contextCrossScopeReuse.',
  logsStoreProtectedContent: 'ARCH-016-08 prohibits logsStoreProtectedContent.',
  technicalAvailabilityCreatesPurpose: 'ARCH-016-08 prohibits technicalAvailabilityCreatesPurpose.',
  silenceMeansConsent: 'ARCH-016-08 prohibits silenceMeansConsent.',
  sensitiveTraitsAutoInferred: 'ARCH-016-08 prohibits sensitiveTraitsAutoInferred.',
  productionDataAutoTraining: 'ARCH-016-08 prohibits productionDataAutoTraining.',
  exceptionsPermanent: 'ARCH-016-08 prohibits exceptionsPermanent.',
  evidenceInOrdinaryRetrieval: 'ARCH-016-08 prohibits evidenceInOrdinaryRetrieval.',
  directDatabaseAccess: 'ARCH-016-08 prohibits directDatabaseAccess.',
  degradedWeakensControls: 'ARCH-016-08 prohibits degradedWeakensControls.',
  selectsSecurityProduct: 'ARCH-016-08 prohibits selectsSecurityProduct.'
});

export class KnowledgeMemorySecurityGovernanceDescriptor {
  objectives() { return values(METADATA.objectives); }
  securitySubjects() { return values(METADATA.securitySubjects); }
  protectedResources() { return values(METADATA.protectedResources); }
  trustFactors() { return values(METADATA.trustFactors); }
  capabilities() { return values(METADATA.capabilities); }
  classifications() { return values(METADATA.classifications); }
  controlFields() { return values(METADATA.controlFields); }
  controlCategories() { return values(METADATA.controlCategories); }
  riskFields() { return values(METADATA.riskFields); }
  riskTypes() { return values(METADATA.riskTypes); }
  governanceGates() { return values(METADATA.governanceGates); }
  assuranceMethods() { return values(METADATA.assuranceMethods); }
  assuranceScopeFields() { return values(METADATA.assuranceScopeFields); }
  evidenceFields() { return values(METADATA.evidenceFields); }
  evidenceTypes() { return values(METADATA.evidenceTypes); }
  degradedModes() { return values(METADATA.degradedModes); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeMemorySecurityGovernanceProfile
      ? input
      : new KnowledgeMemorySecurityGovernanceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Knowledge and Memory security governance profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Knowledge and Memory Security, Governance, and Assurance must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_MEMORY_SECURITY_ERROR_CODE,
        'Knowledge and Memory Security, Governance, and Assurance violates ARCH-016-08.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
