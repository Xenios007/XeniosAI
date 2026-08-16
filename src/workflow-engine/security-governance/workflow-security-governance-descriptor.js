import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowSecurityGovernanceProfile } from '../contracts/workflow-security-governance-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_ASSURANCE_METHODS,
  WORKFLOW_EVIDENCE_FIELDS,
  WORKFLOW_POLICY_ENFORCEMENT_POINTS,
  WORKFLOW_RISK_TIERS,
  WORKFLOW_SECURITY_BOUNDARIES,
  WORKFLOW_SECURITY_GOVERNANCE_ERROR_CODE,
  WORKFLOW_SECURITY_IDENTITIES,
  WORKFLOW_SECURITY_OBJECTIVES,
  WORKFLOW_SECURITY_OPERATIONS,
  WORKFLOW_SECURITY_QUALITY_ATTRIBUTES,
  WORKFLOW_SECURITY_RULES,
  WORKFLOW_SECURITY_THREATS,
  WORKFLOW_UNTRUSTED_INPUTS
} from '../security-governance-constants.js';

const METADATA = Object.freeze({
  identities: WORKFLOW_SECURITY_IDENTITIES,
  securityObjectives: WORKFLOW_SECURITY_OBJECTIVES,
  untrustedInputs: WORKFLOW_UNTRUSTED_INPUTS,
  riskTiers: WORKFLOW_RISK_TIERS,
  policyEnforcementPoints: WORKFLOW_POLICY_ENFORCEMENT_POINTS,
  threats: WORKFLOW_SECURITY_THREATS,
  evidenceFields: WORKFLOW_EVIDENCE_FIELDS,
  assuranceMethods: WORKFLOW_ASSURANCE_METHODS,
  operations: WORKFLOW_SECURITY_OPERATIONS,
  qualityAttributes: WORKFLOW_SECURITY_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_SECURITY_RULES,
  architectureBoundaries: WORKFLOW_SECURITY_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  protectedTransitions: 'ARCH-015-08 requires protectedTransitions.',
  distinctIdentities: 'ARCH-015-08 requires distinctIdentities.',
  actorsAuthenticated: 'ARCH-015-08 requires actorsAuthenticated.',
  effectiveAuthorityEvaluated: 'ARCH-015-08 requires effectiveAuthorityEvaluated.',
  delegationPreserved: 'ARCH-015-08 requires delegationPreserved.',
  scopeBound: 'ARCH-015-08 requires scopeBound.',
  immutableDefinitions: 'ARCH-015-08 requires immutableDefinitions.',
  governedLifecycle: 'ARCH-015-08 requires governedLifecycle.',
  separationOfDuties: 'ARCH-015-08 requires separationOfDuties.',
  runtimeOwnsTransitions: 'ARCH-015-08 requires runtimeOwnsTransitions.',
  domainOwnershipPreserved: 'ARCH-015-08 requires domainOwnershipPreserved.',
  agentOwnershipPreserved: 'ARCH-015-08 requires agentOwnershipPreserved.',
  leastPrivilegeCredentials: 'ARCH-015-08 requires leastPrivilegeCredentials.',
  externalInputsValidated: 'ARCH-015-08 requires externalInputsValidated.',
  threatControls: 'ARCH-015-08 requires threatControls.',
  explicitHumanDecisions: 'ARCH-015-08 requires explicitHumanDecisions.',
  boundedAgentParticipation: 'ARCH-015-08 requires boundedAgentParticipation.',
  evidenceByDesign: 'ARCH-015-08 requires evidenceByDesign.',
  domainEvidenceDistinct: 'ARCH-015-08 requires domainEvidenceDistinct.',
  privacyGoverned: 'ARCH-015-08 requires privacyGoverned.',
  incidentIntegrated: 'ARCH-015-08 requires incidentIntegrated.',
  riskBasedAssurance: 'ARCH-015-08 requires riskBasedAssurance.',
  governedExceptions: 'ARCH-015-08 requires governedExceptions.',
  materialChangeReassessed: 'ARCH-015-08 requires materialChangeReassessed.',
  reconciledRecovery: 'ARCH-015-08 requires reconciledRecovery.',
  vendorNeutral: 'ARCH-015-08 requires vendorNeutral.',
  technologyIndependent: 'ARCH-015-08 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  identifierGrantsAuthority: 'ARCH-015-08 prohibits identifierGrantsAuthority.',
  internalNetworkTrusted: 'ARCH-015-08 prohibits internalNetworkTrusted.',
  authenticationImpliesAuthorization: 'ARCH-015-08 prohibits authenticationImpliesAuthorization.',
  workflowExpandsAuthority: 'ARCH-015-08 prohibits workflowExpandsAuthority.',
  callersOverrideScope: 'ARCH-015-08 prohibits callersOverrideScope.',
  plaintextSecretsInState: 'ARCH-015-08 prohibits plaintextSecretsInState.',
  workersMutateState: 'ARCH-015-08 prohibits workersMutateState.',
  aiOutputAuthoritative: 'ARCH-015-08 prohibits aiOutputAuthoritative.',
  silenceMeansApproval: 'ARCH-015-08 prohibits silenceMeansApproval.',
  unreviewedActivation: 'ARCH-015-08 prohibits unreviewedActivation.',
  directDatabaseCorrection: 'ARCH-015-08 prohibits directDatabaseCorrection.',
  blindReplay: 'ARCH-015-08 prohibits blindReplay.',
  universalExactlyOnce: 'ARCH-015-08 prohibits universalExactlyOnce.',
  automaticComplianceClaim: 'ARCH-015-08 prohibits automaticComplianceClaim.',
  selectsSecurityProduct: 'ARCH-015-08 prohibits selectsSecurityProduct.',
  definesAdjacentDomains: 'ARCH-015-08 prohibits definesAdjacentDomains.'
});

export class WorkflowSecurityGovernanceDescriptor {
  identities() { return values(METADATA.identities); }
  securityObjectives() { return values(METADATA.securityObjectives); }
  untrustedInputs() { return values(METADATA.untrustedInputs); }
  riskTiers() { return values(METADATA.riskTiers); }
  policyEnforcementPoints() { return values(METADATA.policyEnforcementPoints); }
  threats() { return values(METADATA.threats); }
  evidenceFields() { return values(METADATA.evidenceFields); }
  assuranceMethods() { return values(METADATA.assuranceMethods); }
  operations() { return values(METADATA.operations); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof WorkflowSecurityGovernanceProfile
      ? input
      : new WorkflowSecurityGovernanceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow security governance profile must have a name.');
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
        errors.push(`Workflow Security, Governance, and Assurance must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        WORKFLOW_SECURITY_GOVERNANCE_ERROR_CODE,
        'Workflow Security, Governance, and Assurance violates ARCH-015-08.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function result(errors) {
  return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors });
}
