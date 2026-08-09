import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_GOVERNANCE_LIFECYCLE_STAGES,
  APPLICABILITY_DIMENSIONS,
  COMPLIANCE_POSTURE_STATES,
  FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES,
  GOVERNANCE_ARCHITECTURE_BOUNDARIES,
  GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES,
  GOVERNANCE_ARTIFACT_TYPES,
  GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES,
  GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES,
  GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES,
  GOVERNANCE_CONTROL_TYPES,
  GOVERNANCE_DECISION_TYPES,
  GOVERNANCE_DOMAINS,
  GOVERNANCE_EVIDENCE_QUALITIES,
  GOVERNANCE_LIFECYCLE_STAGES,
  GOVERNANCE_OWNED_OBJECTS,
  GOVERNANCE_REPORTING_AUDIENCES,
  GOVERNANCE_TRACEABILITY_STAGES,
  GOVERNING_ACTORS,
  HUMAN_OVERSIGHT_REQUIREMENTS,
  OBLIGATION_INTERPRETATION_FIELDS,
  OBLIGATION_SOURCES,
  THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES
} from '../constants.js';
import { GovernanceComplianceOverviewProfile } from '../contracts/governance-compliance-overview-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class GovernanceComplianceOverviewDescriptor {
  objectives() {
    return Object.freeze(Object.values(GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES));
  }

  landscapeStages() {
    return Object.freeze(Object.values(GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES));
  }

  domains() {
    return Object.freeze(Object.values(GOVERNANCE_DOMAINS));
  }

  governingActors() {
    return Object.freeze(Object.values(GOVERNING_ACTORS));
  }

  ownedObjects() {
    return Object.freeze(Object.values(GOVERNANCE_OWNED_OBJECTS));
  }

  artifactTypes() {
    return Object.freeze(Object.values(GOVERNANCE_ARTIFACT_TYPES));
  }

  obligationSources() {
    return Object.freeze(Object.values(OBLIGATION_SOURCES));
  }

  obligationInterpretationFields() {
    return Object.freeze(Object.values(OBLIGATION_INTERPRETATION_FIELDS));
  }

  applicabilityDimensions() {
    return Object.freeze(Object.values(APPLICABILITY_DIMENSIONS));
  }

  traceabilityStages() {
    return Object.freeze(Object.values(GOVERNANCE_TRACEABILITY_STAGES));
  }

  controlTypes() {
    return Object.freeze(Object.values(GOVERNANCE_CONTROL_TYPES));
  }

  evidenceQualities() {
    return Object.freeze(Object.values(GOVERNANCE_EVIDENCE_QUALITIES));
  }

  lifecycleStages() {
    return Object.freeze(Object.values(GOVERNANCE_LIFECYCLE_STAGES));
  }

  decisionTypes() {
    return Object.freeze(Object.values(GOVERNANCE_DECISION_TYPES));
  }

  aiGovernanceLifecycleStages() {
    return Object.freeze(Object.values(AI_GOVERNANCE_LIFECYCLE_STAGES));
  }

  humanOversightRequirements() {
    return Object.freeze(Object.values(HUMAN_OVERSIGHT_REQUIREMENTS));
  }

  compliancePostureStates() {
    return Object.freeze(Object.values(COMPLIANCE_POSTURE_STATES));
  }

  thirdPartyLifecycleStages() {
    return Object.freeze(Object.values(THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES));
  }

  reportingAudiences() {
    return Object.freeze(Object.values(GOVERNANCE_REPORTING_AUDIENCES));
  }

  architectureRelationshipStages() {
    return Object.freeze(Object.values(GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES));
  }

  architectureBoundaries() {
    return Object.freeze(Object.values(GOVERNANCE_ARCHITECTURE_BOUNDARIES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES));
  }

  architecturalRules() {
    return Object.freeze(Object.values(GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof GovernanceComplianceOverviewProfile
      ? profileInput
      : new GovernanceComplianceOverviewProfile(profileInput);
    const errors = [];

    if (!profile.overviewName) errors.push('Governance and compliance overview profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Governance and compliance objectives must include');
    appendMissing(errors, profile.landscapeStages, this.landscapeStages(), 'Governance landscape must include');
    appendMissing(errors, profile.domains, this.domains(), 'Governance domains must include');
    appendMissing(errors, profile.governingActors, this.governingActors(), 'Governing actors must include');
    appendMissing(errors, profile.ownedObjects, this.ownedObjects(), 'Governance-owned objects must include');
    appendMissing(errors, profile.artifactTypes, this.artifactTypes(), 'Governance artifacts must include');
    appendMissing(errors, profile.obligationSources, this.obligationSources(), 'Obligation sources must include');
    appendMissing(errors, profile.obligationInterpretationFields, this.obligationInterpretationFields(), 'Obligation interpretation should identify');
    appendMissing(errors, profile.applicabilityDimensions, this.applicabilityDimensions(), 'Applicability must support');
    appendMissing(errors, profile.traceabilityStages, this.traceabilityStages(), 'Governance traceability must include');
    appendMissing(errors, profile.controlTypes, this.controlTypes(), 'Control types must include');
    appendMissing(errors, profile.evidenceQualities, this.evidenceQualities(), 'Evidence qualities must include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'Governance lifecycle must include');
    appendMissing(errors, profile.decisionTypes, this.decisionTypes(), 'Governance decisions may include');
    appendMissing(errors, profile.aiGovernanceLifecycleStages, this.aiGovernanceLifecycleStages(), 'AI governance lifecycle must include');
    appendMissing(errors, profile.humanOversightRequirements, this.humanOversightRequirements(), 'Human oversight should provide');
    appendMissing(errors, profile.compliancePostureStates, this.compliancePostureStates(), 'Compliance posture should distinguish');
    appendMissing(errors, profile.thirdPartyLifecycleStages, this.thirdPartyLifecycleStages(), 'Third-party governance lifecycle must include');
    appendMissing(errors, profile.reportingAudiences, this.reportingAudiences(), 'Governance reporting should support');
    appendMissing(errors, profile.architectureRelationshipStages, this.architectureRelationshipStages(), 'Architecture relationship flow must include');
    appendMissing(errors, profile.architectureBoundaries, this.architectureBoundaries(), 'ARCH-012 must not replace');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Governance and compliance quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Governance and compliance architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future governance capabilities may include');
    if (profile.governanceContinuousEnterpriseCapability !== true) errors.push('Governance must be a continuous enterprise capability.');
    if (profile.complianceContinuousCapability !== true) errors.push('Compliance must be a continuing capability.');
    if (profile.accountableOwnershipRequired !== true) errors.push('Every material governance object must have an accountable owner.');
    if (profile.applicabilityExplicitMachineReadableWherePractical !== true) errors.push('Applicability must be explicit and machine-readable where practical.');
    if (profile.traceabilityEndToEnd !== true) errors.push('Governance requires end-to-end traceability.');
    if (profile.evidenceByDesignRequired !== true) errors.push('Architecture components should emit governance evidence during normal operation.');
    if (profile.assuranceIndependenceRiskProportionate !== true) errors.push('Assurance independence should increase with risk and reliance.');
    if (profile.aiGovernanceLifecycleCovered !== true) errors.push('AI governance must cover the entire lifecycle.');
    if (profile.humanOversightMeaningful !== true) errors.push('Meaningful human oversight requires more than nominal approval.');
    if (profile.exceptionsTemporaryExpiring !== true) errors.push('Exceptions should be rare, explicit, temporary, and transparent.');
    if (profile.remediationVerifiedBeforeClosure !== true) errors.push('Closure requires verified correction or authorized residual-risk acceptance.');
    if (profile.tenantPropertyControlsCannotSilentlyWeaken !== true) errors.push('Tenant-specific governance must not silently weaken mandatory controls.');
    if (profile.vendorNeutral !== true) errors.push('Governance and Compliance must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Governance and Compliance must remain technology independent.');
    if (profile.replacesLegalAdvice === true) errors.push('ARCH-012 does not provide legal advice.');
    if (profile.guaranteesComplianceOrCertification === true) errors.push('ARCH-012 does not guarantee compliance or certification.');
    if (profile.replacesSecurityArchitecture === true) errors.push('ARCH-012 does not replace Security Architecture.');
    if (profile.replacesOperationalProcedures === true) errors.push('ARCH-012 does not replace operational procedures.');
    if (profile.replacesAiAgentFramework === true) errors.push('ARCH-012 does not replace the AI Agent Framework.');
    if (profile.replacesDataOrKnowledgeArchitecture === true) errors.push('ARCH-012 does not replace Data or Knowledge Architecture.');
    if (profile.prescribesGovernanceProducts === true) errors.push('ARCH-012 does not prescribe governance products.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 18) errors.push('Governance and Compliance Overview must include all documented objectives.');
    if (this.landscapeStages().length !== 8) errors.push('Governance and Compliance Overview must include the documented landscape.');
    if (this.domains().length !== 11) errors.push('Governance and Compliance Overview must include documented governance domains.');
    if (this.governingActors().length !== 25) errors.push('Governance and Compliance Overview must include documented governing actors.');
    if (this.ownedObjects().length !== 17) errors.push('Governance and Compliance Overview must include documented owned objects.');
    if (this.artifactTypes().length !== 14) errors.push('Governance and Compliance Overview must include documented artifact types.');
    if (this.obligationSources().length !== 16) errors.push('Governance and Compliance Overview must include documented obligation sources.');
    if (this.obligationInterpretationFields().length !== 14) errors.push('Governance and Compliance Overview must include documented obligation interpretation fields.');
    if (this.applicabilityDimensions().length !== 16) errors.push('Governance and Compliance Overview must include documented applicability dimensions.');
    if (this.traceabilityStages().length !== 8) errors.push('Governance and Compliance Overview must include documented traceability stages.');
    if (this.controlTypes().length !== 7) errors.push('Governance and Compliance Overview must include documented control types.');
    if (this.evidenceQualities().length !== 11) errors.push('Governance and Compliance Overview must include documented evidence qualities.');
    if (this.lifecycleStages().length !== 10) errors.push('Governance and Compliance Overview must include documented lifecycle stages.');
    if (this.decisionTypes().length !== 14) errors.push('Governance and Compliance Overview must include documented decision types.');
    if (this.aiGovernanceLifecycleStages().length !== 9) errors.push('Governance and Compliance Overview must include documented AI governance lifecycle stages.');
    if (this.humanOversightRequirements().length !== 9) errors.push('Governance and Compliance Overview must include documented human oversight requirements.');
    if (this.compliancePostureStates().length !== 13) errors.push('Governance and Compliance Overview must include documented compliance posture states.');
    if (this.thirdPartyLifecycleStages().length !== 7) errors.push('Governance and Compliance Overview must include documented third-party lifecycle stages.');
    if (this.reportingAudiences().length !== 13) errors.push('Governance and Compliance Overview must include documented reporting audiences.');
    if (this.architectureRelationshipStages().length !== 5) errors.push('Governance and Compliance Overview must include documented architecture relationship stages.');
    if (this.architectureBoundaries().length !== 10) errors.push('Governance and Compliance Overview must include documented architecture boundaries.');
    if (this.qualityAttributes().length !== 14) errors.push('Governance and Compliance Overview must include documented quality attributes.');
    if (this.architecturalRules().length !== 17) errors.push('Governance and Compliance Overview must include documented architectural rules.');
    if (this.futureCapabilities().length !== 13) errors.push('Governance and Compliance Overview must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.GOVERNANCE_COMPLIANCE_OVERVIEW_INVALID,
        'Governance and Compliance Overview violates ARCH-012-01.',
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
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
