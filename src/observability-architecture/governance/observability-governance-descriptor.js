import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_OBSERVABILITY_GOVERNANCE_REQUIREMENTS,
  FUTURE_OBSERVABILITY_GOVERNANCE_CAPABILITIES,
  OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS,
  OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES,
  OBSERVABILITY_EXPLAINABILITY_AREAS,
  OBSERVABILITY_GOVERNANCE_ARCHITECTURAL_RULES,
  OBSERVABILITY_GOVERNANCE_BUSINESS_CONTEXT,
  OBSERVABILITY_GOVERNANCE_IMPROVEMENT_ACTIVITIES,
  OBSERVABILITY_GOVERNANCE_METRICS,
  OBSERVABILITY_GOVERNANCE_MODEL_STAGES,
  OBSERVABILITY_GOVERNANCE_OBJECTIVES,
  OBSERVABILITY_GOVERNANCE_PRINCIPLES,
  OBSERVABILITY_GOVERNANCE_RELATIONSHIP_STAGES,
  OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS,
  OBSERVABILITY_OWNERSHIP_RESPONSIBILITIES,
  OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS,
  OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES,
  OBSERVABILITY_STANDARDIZATION_AREAS,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  TELEMETRY_GOVERNANCE_CONSIDERATIONS
} from '../constants.js';
import { GovernedObservabilityEvidence } from '../contracts/governed-observability-evidence.js';
import { ObservabilityGovernanceProfile } from '../contracts/observability-governance-profile.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const MODEL = Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_RELATIONSHIP_STAGES));

export class ObservabilityGovernanceDescriptor {
  objectives() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_OBJECTIVES));
  }

  modelStages() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_PRINCIPLES));
  }

  ownershipResponsibilities() {
    return Object.freeze(Object.values(OBSERVABILITY_OWNERSHIP_RESPONSIBILITIES));
  }

  integrityRequirements() {
    return Object.freeze(Object.values(OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS));
  }

  businessContext() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_BUSINESS_CONTEXT));
  }

  standardizationAreas() {
    return Object.freeze(Object.values(OBSERVABILITY_STANDARDIZATION_AREAS));
  }

  explainabilityAreas() {
    return Object.freeze(Object.values(OBSERVABILITY_EXPLAINABILITY_AREAS));
  }

  responsibilityOwners() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS));
  }

  evidenceLifecycleStages() {
    return Object.freeze(Object.values(OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES));
  }

  telemetryGovernanceConsiderations() {
    return Object.freeze(Object.values(TELEMETRY_GOVERNANCE_CONSIDERATIONS));
  }

  aiGovernanceRequirements() {
    return Object.freeze(Object.values(AI_OBSERVABILITY_GOVERNANCE_REQUIREMENTS));
  }

  securityAlignmentActivities() {
    return Object.freeze(Object.values(OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES));
  }

  qualityAssuranceConsiderations() {
    return Object.freeze(Object.values(OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS));
  }

  governanceMetrics() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_METRICS));
  }

  improvementActivities() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_IMPROVEMENT_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_GOVERNANCE_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ObservabilityGovernanceProfile
      ? profileInput
      : new ObservabilityGovernanceProfile(profileInput);
    const errors = [];

    if (!profile.governanceName) errors.push('Observability governance profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Observability governance objectives must include');
    appendMissing(errors, profile.modelStages, this.modelStages(), 'Observability governance model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Observability governance principles must include');
    appendMissing(errors, profile.ownershipResponsibilities, this.ownershipResponsibilities(), 'Explicit ownership responsibilities should include');
    appendMissing(errors, profile.integrityRequirements, this.integrityRequirements(), 'Evidence integrity should ensure evidence is');
    appendMissing(errors, profile.businessContext, this.businessContext(), 'Business context preservation should include');
    appendMissing(errors, profile.standardizationAreas, this.standardizationAreas(), 'Observability standardization should include');
    appendMissing(errors, profile.explainabilityAreas, this.explainabilityAreas(), 'Explainability should explain');
    appendMissing(errors, profile.responsibilityOwners, this.responsibilityOwners(), 'Governance responsibility owners should include');
    appendMissing(errors, profile.evidenceLifecycleStages, this.evidenceLifecycleStages(), 'Evidence lifecycle must include');
    appendMissing(errors, profile.telemetryGovernanceConsiderations, this.telemetryGovernanceConsiderations(), 'Telemetry governance should include');
    appendMissing(errors, profile.aiGovernanceRequirements, this.aiGovernanceRequirements(), 'AI observability governance should include');
    appendMissing(errors, profile.securityAlignmentActivities, this.securityAlignmentActivities(), 'Security alignment should include');
    appendMissing(errors, profile.qualityAssuranceConsiderations, this.qualityAssuranceConsiderations(), 'Quality assurance should include');
    appendMissing(errors, profile.governanceMetrics, this.governanceMetrics(), 'Governance metrics should include');
    appendMissing(errors, profile.improvementActivities, this.improvementActivities(), 'Continuous improvement should include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Observability governance relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Observability governance architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future observability governance capabilities should include');
    if (profile.explicitOwnershipAssigned !== true) errors.push('Every observable artifact should have explicit ownership.');
    if (profile.evidenceIntegrityPreserved !== true) errors.push('Operational evidence should remain accurate, complete, and trustworthy.');
    if (profile.businessContextPreserved !== true) errors.push('Observable evidence should retain business meaning throughout its lifecycle.');
    if (profile.standardsEnforced !== true) errors.push('Observability should follow enterprise standards.');
    if (profile.explainabilitySupported !== true) errors.push('Governed observability should enable understanding.');
    if (profile.securityAligned !== true) errors.push('Observability governance should align with enterprise security.');
    if (profile.lifecycleGoverned !== true) errors.push('Observable evidence should follow a governed lifecycle.');
    if (profile.continuousImprovementEnabled !== true) errors.push('Observability governance should continuously evolve.');
    if (profile.technologyNeutral !== true) errors.push('Observability Governance must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Observability Governance must remain vendor neutral.');
    if (profile.governanceOrganizationSpecific === true) errors.push('Specific governance organizations are outside ARCH-010-09 scope.');
    if (profile.operationalProcessSpecific === true) errors.push('Operational processes are outside ARCH-010-09 scope.');
    if (profile.observabilityProductSpecific === true) errors.push('Observability products are outside ARCH-010-09 scope.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-010-09 scope.');

    return validation(errors);
  }

  validateGovernedEvidence(evidenceInput) {
    const evidence = evidenceInput instanceof GovernedObservabilityEvidence
      ? evidenceInput
      : new GovernedObservabilityEvidence(evidenceInput);
    const errors = [];

    if (!evidence.evidenceType) errors.push('Governed observability evidence must identify the evidence type.');
    if (!this.responsibilityOwners().includes(evidence.owner)) errors.push(`Unsupported observability evidence owner: ${evidence.owner}.`);
    if (!evidence.businessCapability) errors.push('Governed observability evidence must include business capability context.');
    if (!this.evidenceLifecycleStages().includes(evidence.lifecycleStage)) errors.push(`Unsupported evidence lifecycle stage: ${evidence.lifecycleStage}.`);
    if (!this.integrityRequirements().includes(evidence.integrityRequirement)) errors.push(`Unsupported evidence integrity requirement: ${evidence.integrityRequirement}.`);
    if (!evidence.correlationId) errors.push('Governed observability evidence must include correlation identity.');
    if (!evidence.governanceClassification) errors.push('Governed observability evidence must include governance classification.');
    if (evidence.telemetryConsideration && !this.telemetryGovernanceConsiderations().includes(evidence.telemetryConsideration)) errors.push(`Unsupported telemetry governance consideration: ${evidence.telemetryConsideration}.`);
    if (evidence.securityAlignmentActivity && !this.securityAlignmentActivities().includes(evidence.securityAlignmentActivity)) errors.push(`Unsupported security alignment activity: ${evidence.securityAlignmentActivity}.`);
    if (evidence.qualityAssuranceConsideration && !this.qualityAssuranceConsiderations().includes(evidence.qualityAssuranceConsideration)) errors.push(`Unsupported quality assurance consideration: ${evidence.qualityAssuranceConsideration}.`);
    if (evidence.explainabilityArea && !this.explainabilityAreas().includes(evidence.explainabilityArea)) errors.push(`Unsupported explainability area: ${evidence.explainabilityArea}.`);
    if (evidence.technologyNeutral !== true) errors.push('Governed observability evidence must remain technology neutral.');
    if (evidence.vendorNeutral !== true) errors.push('Governed observability evidence must remain vendor neutral.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Observability Governance must include all documented objectives.');
    if (this.modelStages().length !== 6) errors.push('Observability Governance must include the documented governance model.');
    if (this.principles().length !== 5) errors.push('Observability Governance must include documented principles.');
    if (this.ownershipResponsibilities().length !== 6) errors.push('Observability Governance must include documented ownership responsibilities.');
    if (this.integrityRequirements().length !== 5) errors.push('Observability Governance must include documented evidence integrity requirements.');
    if (this.businessContext().length !== 5) errors.push('Observability Governance must include documented business context.');
    if (this.standardizationAreas().length !== 5) errors.push('Observability Governance must include documented standardization areas.');
    if (this.explainabilityAreas().length !== 5) errors.push('Observability Governance must include documented explainability areas.');
    if (this.responsibilityOwners().length !== 6) errors.push('Observability Governance must include documented responsibility owners.');
    if (this.evidenceLifecycleStages().length !== 6) errors.push('Observability Governance must include documented evidence lifecycle stages.');
    if (this.telemetryGovernanceConsiderations().length !== 6) errors.push('Observability Governance must include documented telemetry governance considerations.');
    if (this.aiGovernanceRequirements().length !== 6) errors.push('Observability Governance must include documented AI governance requirements.');
    if (this.securityAlignmentActivities().length !== 6) errors.push('Observability Governance must include documented security alignment activities.');
    if (this.qualityAssuranceConsiderations().length !== 6) errors.push('Observability Governance must include documented quality assurance considerations.');
    if (this.governanceMetrics().length !== 6) errors.push('Observability Governance must include documented governance metrics.');
    if (this.improvementActivities().length !== 6) errors.push('Observability Governance must include documented improvement activities.');
    if (this.relationshipFlow().length !== 7) errors.push('Observability Governance must include documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Observability Governance must include documented architectural rules.');
    if (this.futureCapabilities().length !== 8) errors.push('Observability Governance must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_GOVERNANCE_INVALID,
        'Observability Governance violates ARCH-010-09.',
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
