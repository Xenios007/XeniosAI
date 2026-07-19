import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_INTEGRATION_GOVERNANCE_DIRECTIONS,
  GOVERNED_CONTRACT_REVIEW_AREAS,
  GOVERNED_INTEGRATION_LIFECYCLE_STAGES,
  INTEGRATION_AI_GOVERNANCE_ACTIVITIES,
  INTEGRATION_COMPLIANCE_ALIGNMENT_AREAS,
  INTEGRATION_CONTRACT_LIFECYCLE_STAGES,
  INTEGRATION_DOCUMENTATION_REQUIREMENTS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  INTEGRATION_GOVERNANCE_EXPECTATIONS,
  INTEGRATION_GOVERNANCE_LIFECYCLE_STAGES,
  INTEGRATION_GOVERNANCE_METRICS,
  INTEGRATION_GOVERNANCE_MODEL_STAGES,
  INTEGRATION_GOVERNANCE_OBJECTIVES,
  INTEGRATION_GOVERNANCE_PRINCIPLES,
  INTEGRATION_GOVERNANCE_RELATIONSHIP_FLOW_STAGES,
  INTEGRATION_GOVERNANCE_SECURITY_CONTROLS,
  INTEGRATION_OPERATIONAL_GOVERNANCE_ACTIVITIES,
  INTEGRATION_OWNERSHIP_ASSIGNMENTS,
  INTEGRATION_OWNERSHIP_SCOPE,
  INTEGRATION_QUALITY_ASSURANCE_CONSIDERATIONS,
  INTEGRATION_STANDARDIZATION_AREAS,
  INTEGRATION_VERSION_GOVERNANCE_CAPABILITIES
} from '../constants.js';
import { IntegrationGovernanceProfile } from '../contracts/integration-governance-profile.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';

const MODEL = Object.freeze(Object.values(INTEGRATION_GOVERNANCE_MODEL_STAGES));
const INTEGRATION_LIFECYCLE = Object.freeze(Object.values(GOVERNED_INTEGRATION_LIFECYCLE_STAGES));
const CONTRACT_LIFECYCLE = Object.freeze(Object.values(INTEGRATION_CONTRACT_LIFECYCLE_STAGES));
const GOVERNANCE_LIFECYCLE = Object.freeze(Object.values(INTEGRATION_GOVERNANCE_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(INTEGRATION_GOVERNANCE_RELATIONSHIP_FLOW_STAGES));

export class IntegrationGovernanceDescriptor {
  objectives() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_OBJECTIVES));
  }

  governanceModel() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_PRINCIPLES));
  }

  expectations() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_EXPECTATIONS));
  }

  ownershipAssignments() {
    return Object.freeze(Object.values(INTEGRATION_OWNERSHIP_ASSIGNMENTS));
  }

  ownershipScope() {
    return Object.freeze(Object.values(INTEGRATION_OWNERSHIP_SCOPE));
  }

  contractReviewAreas() {
    return Object.freeze(Object.values(GOVERNED_CONTRACT_REVIEW_AREAS));
  }

  standardizationAreas() {
    return Object.freeze(Object.values(INTEGRATION_STANDARDIZATION_AREAS));
  }

  integrationLifecycle() {
    return INTEGRATION_LIFECYCLE;
  }

  contractLifecycle() {
    return CONTRACT_LIFECYCLE;
  }

  versionGovernanceCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_VERSION_GOVERNANCE_CAPABILITIES));
  }

  documentationRequirements() {
    return Object.freeze(Object.values(INTEGRATION_DOCUMENTATION_REQUIREMENTS));
  }

  securityControls() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_SECURITY_CONTROLS));
  }

  operationalGovernanceActivities() {
    return Object.freeze(Object.values(INTEGRATION_OPERATIONAL_GOVERNANCE_ACTIVITIES));
  }

  aiGovernanceActivities() {
    return Object.freeze(Object.values(INTEGRATION_AI_GOVERNANCE_ACTIVITIES));
  }

  complianceAlignmentAreas() {
    return Object.freeze(Object.values(INTEGRATION_COMPLIANCE_ALIGNMENT_AREAS));
  }

  qualityAssuranceConsiderations() {
    return Object.freeze(Object.values(INTEGRATION_QUALITY_ASSURANCE_CONSIDERATIONS));
  }

  governanceMetrics() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_METRICS));
  }

  governanceLifecycle() {
    return GOVERNANCE_LIFECYCLE;
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_GOVERNANCE_DIRECTIONS));
  }

  validateGovernance(profileInput) {
    const profile = profileInput instanceof IntegrationGovernanceProfile
      ? profileInput
      : new IntegrationGovernanceProfile(profileInput);
    const errors = [];

    if (!profile.governanceName) errors.push('Integration governance must have a name.');
    appendMissing(errors, profile.modelStages, this.governanceModel(), 'Governance model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Governance principles should include');
    appendMissing(errors, profile.expectations, this.expectations(), 'Governance expectations should include');
    appendMissing(errors, profile.ownershipAssignments, this.ownershipAssignments(), 'Integration ownership assignments should include');
    appendMissing(errors, profile.ownershipScope, this.ownershipScope(), 'Integration ownership scope should include');
    appendMissing(errors, profile.contractReviewAreas, this.contractReviewAreas(), 'Contract governance should include');
    appendMissing(errors, profile.standardizationAreas, this.standardizationAreas(), 'Standardization should apply to');
    appendMissing(errors, profile.integrationLifecycleStages, this.integrationLifecycle(), 'Integration lifecycle governance should include');
    appendMissing(errors, profile.contractLifecycleStages, this.contractLifecycle(), 'Contract lifecycle should include');
    appendMissing(errors, profile.versionGovernanceCapabilities, this.versionGovernanceCapabilities(), 'Version governance should support');
    appendMissing(errors, profile.documentationRequirements, this.documentationRequirements(), 'Documentation should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'Security governance should include');
    appendMissing(errors, profile.operationalGovernanceActivities, this.operationalGovernanceActivities(), 'Operational governance should include');
    appendMissing(errors, profile.aiGovernanceActivities, this.aiGovernanceActivities(), 'AI governance should include');
    appendMissing(errors, profile.complianceAlignmentAreas, this.complianceAlignmentAreas(), 'Compliance alignment should include');
    appendMissing(errors, profile.qualityAssuranceConsiderations, this.qualityAssuranceConsiderations(), 'Quality assurance should include');
    appendMissing(errors, profile.governanceMetrics, this.governanceMetrics(), 'Governance metrics should include');
    appendMissing(errors, profile.governanceLifecycleStages, this.governanceLifecycle(), 'Governance lifecycle should include');
    if (profile.explicitOwnershipAssigned !== true) errors.push('Every integration must have explicit ownership.');
    if (profile.contractsGovernedThroughoutLifecycle !== true) errors.push('Integration contracts must be governed throughout their lifecycle.');
    if (profile.enterprisePracticesStandardized !== true) errors.push('Enterprise integration practices must be standardized.');
    if (profile.consumersProtectedThroughControlledEvolution !== true) errors.push('Governance must protect consumers through controlled evolution.');
    if (profile.enterpriseSecurityConsistent !== true) errors.push('Enterprise security must apply consistently across every integration.');
    if (profile.comprehensiveDocumentationMaintained !== true) errors.push('Integration governance must maintain comprehensive documentation.');
    if (profile.governanceEffectivenessMeasured !== true) errors.push('Governance effectiveness must be measurable.');
    if (profile.preservesServiceAutonomy !== true) errors.push('Integration governance must preserve service autonomy.');
    if (profile.supportsImplementationFlexibility !== true) errors.push('Governance must allow implementation flexibility.');
    if (profile.vendorNeutral !== true) errors.push('Integration Governance must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('Integration Governance must remain technology neutral.');
    if (profile.organizationalStructureSpecific === true) errors.push('Specific organizational structures are outside ARCH-009-08 scope.');
    if (profile.approvalWorkflowSpecific === true) errors.push('Approval workflows are outside ARCH-009-08 scope.');
    if (profile.governanceToolSpecific === true) errors.push('Governance tools are outside ARCH-009-08 scope.');
    if (profile.implementationProcedureSpecific === true) errors.push('Implementation procedures are outside ARCH-009-08 scope.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Integration Governance must include all documented objectives.');
    if (this.governanceModel().length !== 7) errors.push('Integration Governance must include the documented governance model.');
    if (this.principles().length !== 5) errors.push('Integration Governance must include documented principles.');
    if (this.expectations().length !== 6) errors.push('Integration Governance must include documented governance expectations.');
    if (this.ownershipAssignments().length !== 7) errors.push('Integration Governance must include documented ownership assignments.');
    if (this.ownershipScope().length !== 7) errors.push('Integration Governance must include documented ownership scope.');
    if (this.contractReviewAreas().length !== 5) errors.push('Integration Governance must include documented contract review areas.');
    if (this.standardizationAreas().length !== 6) errors.push('Integration Governance must include documented standardization areas.');
    if (this.integrationLifecycle().length !== 7) errors.push('Integration Governance must include documented integration lifecycle stages.');
    if (this.contractLifecycle().length !== 7) errors.push('Integration Governance must include the documented contract lifecycle.');
    if (this.versionGovernanceCapabilities().length !== 5) errors.push('Integration Governance must include documented version governance capabilities.');
    if (this.documentationRequirements().length !== 6) errors.push('Integration Governance must include documented documentation requirements.');
    if (this.securityControls().length !== 7) errors.push('Integration Governance must include documented security controls.');
    if (this.operationalGovernanceActivities().length !== 6) errors.push('Integration Governance must include documented operational governance activities.');
    if (this.aiGovernanceActivities().length !== 6) errors.push('Integration Governance must include documented AI governance activities.');
    if (this.complianceAlignmentAreas().length !== 5) errors.push('Integration Governance must include documented compliance alignment areas.');
    if (this.qualityAssuranceConsiderations().length !== 6) errors.push('Integration Governance must include documented quality assurance considerations.');
    if (this.governanceMetrics().length !== 7) errors.push('Integration Governance must include documented governance metrics.');
    if (this.governanceLifecycle().length !== 6) errors.push('Integration Governance must include the documented governance lifecycle.');
    if (this.relationshipFlow().length !== 7) errors.push('Integration Governance must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('Integration Governance must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.INTEGRATION_GOVERNANCE_INVALID,
        'Integration Governance violates ARCH-009-08.',
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
  return new IntegrationArchitectureValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
