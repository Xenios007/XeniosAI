import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ASSESSMENT_LIFECYCLE_STAGES,
  ASSURANCE_AUDIT_EVIDENCE_ARCHITECTURAL_RULES,
  ASSURANCE_AUDIT_EVIDENCE_GOVERNANCE_AREAS,
  ASSURANCE_AUDIT_EVIDENCE_MEASURES,
  ASSURANCE_AUDIT_EVIDENCE_OBJECTIVES,
  ASSURANCE_AUDIT_EVIDENCE_PRINCIPLES,
  ASSURANCE_AUDIT_EVIDENCE_QUALITY_ATTRIBUTES,
  ASSURANCE_CRITERIA_QUALITIES,
  ASSURANCE_DOMAIN_AREAS,
  ASSURANCE_ENGAGEMENT_FIELDS,
  ASSURANCE_EVALUATION_AREAS,
  ASSURANCE_EVIDENCE_TYPES,
  ASSURANCE_FINDING_AREAS,
  ASSURANCE_INDEPENDENCE_FACTORS,
  ASSURANCE_LEVELS,
  ASSURANCE_REPORT_FIELDS,
  ASSURANCE_TEST_METHODS,
  ASSURANCE_VALIDITY_FIELDS,
  ATTESTATION_RECORD_FIELDS_DETAIL,
  ATTESTATION_TYPES,
  AUDIT_EVIDENCE_QUALITIES,
  AUDIT_FINDING_FIELDS,
  AUDIT_FOLLOW_UP_FIELDS,
  AUDIT_LIFECYCLE_STAGES,
  AUDIT_PLAN_FIELDS,
  AUDIT_PLANNING_FACTORS,
  AUDIT_PRINCIPLES,
  AUDIT_REPORT_FIELDS,
  AUDIT_UNIVERSE_AREAS,
  CHAIN_OF_CUSTODY_TRIGGERS,
  CONTINUOUS_ASSURANCE_CAPABILITIES_DETAIL,
  CONTROL_ASSESSMENT_AREAS,
  EVIDENCE_ACCESS_REQUIREMENTS,
  EVIDENCE_COMPLETENESS_DIMENSIONS,
  EVIDENCE_CORRELATION_IDENTIFIERS,
  EVIDENCE_DISCLOSURE_RECIPIENTS,
  EVIDENCE_DISPOSAL_SCOPES,
  EVIDENCE_INTEGRITY_CONTROLS,
  EVIDENCE_LIFECYCLE_STAGES,
  EVIDENCE_MINIMIZATION_FACTORS,
  EVIDENCE_MODEL_STAGES,
  EVIDENCE_PROVENANCE_FIELDS,
  EVIDENCE_QUALITY_ATTRIBUTES,
  EVIDENCE_RECORD_FIELDS,
  EVIDENCE_RETENTION_FACTORS,
  EVIDENCE_ROLES,
  EXTERNAL_EVIDENCE_PACKAGE_REQUIREMENTS,
  FULL_POPULATION_TESTING_VALIDATIONS,
  FUTURE_ASSURANCE_AUDIT_EVIDENCE_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  MANAGEMENT_RESPONSE_FIELDS,
  RELIANCE_EVALUATION_FIELDS,
  SAMPLING_FIELDS,
  SUPPLIER_ASSURANCE_EVIDENCE_TYPES,
  TRUSTED_TIME_CORRELATION_AREAS,
  AI_EVIDENCE_ASSISTANCE_USES
} from '../constants.js';
import { AssuranceAuditEvidenceProfile } from '../contracts/assurance-audit-evidence-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class AssuranceAuditEvidenceDescriptor {
  objectives() { return values(ASSURANCE_AUDIT_EVIDENCE_OBJECTIVES); }
  principles() { return values(ASSURANCE_AUDIT_EVIDENCE_PRINCIPLES); }
  evidenceModelStages() { return values(EVIDENCE_MODEL_STAGES); }
  evidenceTypes() { return values(ASSURANCE_EVIDENCE_TYPES); }
  evidenceRecordFields() { return values(EVIDENCE_RECORD_FIELDS); }
  evidenceRoles() { return values(EVIDENCE_ROLES); }
  provenanceFields() { return values(EVIDENCE_PROVENANCE_FIELDS); }
  chainOfCustodyTriggers() { return values(CHAIN_OF_CUSTODY_TRIGGERS); }
  integrityControls() { return values(EVIDENCE_INTEGRITY_CONTROLS); }
  evidenceQualityAttributes() { return values(EVIDENCE_QUALITY_ATTRIBUTES); }
  completenessDimensions() { return values(EVIDENCE_COMPLETENESS_DIMENSIONS); }
  trustedTimeCorrelationAreas() { return values(TRUSTED_TIME_CORRELATION_AREAS); }
  correlationIdentifiers() { return values(EVIDENCE_CORRELATION_IDENTIFIERS); }
  accessRequirements() { return values(EVIDENCE_ACCESS_REQUIREMENTS); }
  minimizationFactors() { return values(EVIDENCE_MINIMIZATION_FACTORS); }
  retentionFactors() { return values(EVIDENCE_RETENTION_FACTORS); }
  disposalScopes() { return values(EVIDENCE_DISPOSAL_SCOPES); }
  disclosureRecipients() { return values(EVIDENCE_DISCLOSURE_RECIPIENTS); }
  evidenceLifecycleStages() { return values(EVIDENCE_LIFECYCLE_STAGES); }
  assuranceEvaluationAreas() { return values(ASSURANCE_EVALUATION_AREAS); }
  assuranceLevels() { return values(ASSURANCE_LEVELS); }
  independenceFactors() { return values(ASSURANCE_INDEPENDENCE_FACTORS); }
  engagementFields() { return values(ASSURANCE_ENGAGEMENT_FIELDS); }
  criteriaQualities() { return values(ASSURANCE_CRITERIA_QUALITIES); }
  controlAssessmentAreas() { return values(CONTROL_ASSESSMENT_AREAS); }
  assessmentLifecycleStages() { return values(ASSESSMENT_LIFECYCLE_STAGES); }
  testMethods() { return values(ASSURANCE_TEST_METHODS); }
  samplingFields() { return values(SAMPLING_FIELDS); }
  fullPopulationTestingValidations() { return values(FULL_POPULATION_TESTING_VALIDATIONS); }
  continuousAssuranceCapabilities() { return values(CONTINUOUS_ASSURANCE_CAPABILITIES_DETAIL); }
  assuranceValidityFields() { return values(ASSURANCE_VALIDITY_FIELDS); }
  auditPrinciples() { return values(AUDIT_PRINCIPLES); }
  auditUniverseAreas() { return values(AUDIT_UNIVERSE_AREAS); }
  auditPlanningFactors() { return values(AUDIT_PLANNING_FACTORS); }
  auditPlanFields() { return values(AUDIT_PLAN_FIELDS); }
  auditLifecycleStages() { return values(AUDIT_LIFECYCLE_STAGES); }
  auditEvidenceQualities() { return values(AUDIT_EVIDENCE_QUALITIES); }
  auditFindingFields() { return values(AUDIT_FINDING_FIELDS); }
  managementResponseFields() { return values(MANAGEMENT_RESPONSE_FIELDS); }
  auditReportFields() { return values(AUDIT_REPORT_FIELDS); }
  auditFollowUpFields() { return values(AUDIT_FOLLOW_UP_FIELDS); }
  attestationTypes() { return values(ATTESTATION_TYPES); }
  attestationRecordFields() { return values(ATTESTATION_RECORD_FIELDS_DETAIL); }
  relianceEvaluationFields() { return values(RELIANCE_EVALUATION_FIELDS); }
  supplierAssuranceEvidenceTypes() { return values(SUPPLIER_ASSURANCE_EVIDENCE_TYPES); }
  assuranceDomainAreas() { return values(ASSURANCE_DOMAIN_AREAS); }
  externalEvidencePackageRequirements() { return values(EXTERNAL_EVIDENCE_PACKAGE_REQUIREMENTS); }
  aiEvidenceAssistanceUses() { return values(AI_EVIDENCE_ASSISTANCE_USES); }
  assuranceFindingAreas() { return values(ASSURANCE_FINDING_AREAS); }
  assuranceReportFields() { return values(ASSURANCE_REPORT_FIELDS); }
  measures() { return values(ASSURANCE_AUDIT_EVIDENCE_MEASURES); }
  governanceAreas() { return values(ASSURANCE_AUDIT_EVIDENCE_GOVERNANCE_AREAS); }
  qualityAttributes() { return values(ASSURANCE_AUDIT_EVIDENCE_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(ASSURANCE_AUDIT_EVIDENCE_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_ASSURANCE_AUDIT_EVIDENCE_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AssuranceAuditEvidenceProfile
      ? profileInput
      : new AssuranceAuditEvidenceProfile(profileInput);
    const errors = [];

    if (!profile.assuranceName) errors.push('Assurance, Audit, and Evidence profile must have a name.');
    for (const [field, getter, message] of validationMappings(this)) {
      appendMissing(errors, profile[field], getter(), message);
    }
    if (profile.evidenceDesignedNotReconstructed !== true) errors.push('Evidence must be designed into normal execution rather than reconstructed after events.');
    if (profile.evidenceFitForPurpose !== true) errors.push('Evidence must be fit for its governed purpose.');
    if (profile.provenanceRequired !== true) errors.push('Evidence provenance must identify origin, creator, time, change, and scope.');
    if (profile.chainOfCustodyProtected !== true) errors.push('Chain of custody must be protected when evidence supports high-risk matters.');
    if (profile.independenceProportionateToRisk !== true) errors.push('Assurance independence must be proportionate to risk and reliance.');
    if (profile.assuranceNotAbsolute !== true) errors.push('Assurance conclusions are not absolute and must state scope, criteria, period, evidence, assumptions, and limitations.');
    if (profile.auditDoesNotCreateCompliance !== true) errors.push('Audit does not create compliance or replace continuing ownership and control operation.');
    if (profile.automatedEvidenceRequiresAssurance !== true) errors.push('Automated evidence collection must itself be controlled, monitored, and tested.');
    if (profile.continuousAssuranceSupplemental !== true) errors.push('Continuous assurance supplements rather than automatically replaces independent review.');
    if (profile.auditIndependentOfManagementDecisions !== true) errors.push('Audit must not take ownership of management decisions or control operation.');
    if (profile.attestationsLimitedToEvidence !== true) errors.push('Attestations must not imply greater assurance than their evidence supports.');
    if (profile.relianceDocumented !== true) errors.push('Reliance on assurance or attestation must be documented where material.');
    if (profile.supplierRiskOwnershipRetained !== true) errors.push('Supplier evidence does not remove XeniosAI ownership of supplier risk.');
    if (profile.aiGeneratedEvidenceHumanReviewed !== true) errors.push('AI-generated evidence summaries require provenance, source references, uncertainty, and human review where consequential.');
    if (profile.aiMustNotFabricateEvidence !== true) errors.push('AI must not fabricate, alter, or conceal evidence.');
    if (profile.vendorNeutral !== true) errors.push('Assurance, Audit, and Evidence must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Assurance, Audit, and Evidence must remain technology independent.');
    if (profile.prescribesLoggingProduct === true) errors.push('Assurance, Audit, and Evidence does not prescribe a logging product.');
    if (profile.prescribesGovernancePlatform === true) errors.push('Assurance, Audit, and Evidence does not prescribe a governance platform.');
    if (profile.prescribesAuditTool === true) errors.push('Assurance, Audit, and Evidence does not prescribe an audit tool.');
    if (profile.prescribesEvidenceRepository === true) errors.push('Assurance, Audit, and Evidence does not prescribe an evidence repository.');
    if (profile.prescribesCertificationScheme === true) errors.push('Assurance, Audit, and Evidence does not prescribe a certification scheme.');
    if (profile.prescribesAuditFirm === true) errors.push('Assurance, Audit, and Evidence does not prescribe an audit firm.');
    if (profile.prescribesRegulatoryFramework === true) errors.push('Assurance, Audit, and Evidence does not prescribe a regulatory framework.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    const counts = {
      objectives: 17,
      principles: 9,
      evidenceModelStages: 7,
      evidenceTypes: 12,
      evidenceRecordFields: 27,
      evidenceRoles: 5,
      provenanceFields: 15,
      chainOfCustodyTriggers: 9,
      integrityControls: 13,
      evidenceQualityAttributes: 11,
      completenessDimensions: 14,
      trustedTimeCorrelationAreas: 10,
      correlationIdentifiers: 17,
      accessRequirements: 12,
      minimizationFactors: 12,
      retentionFactors: 12,
      disposalScopes: 11,
      disclosureRecipients: 11,
      evidenceLifecycleStages: 7,
      assuranceEvaluationAreas: 16,
      assuranceLevels: 4,
      independenceFactors: 9,
      engagementFields: 19,
      criteriaQualities: 8,
      controlAssessmentAreas: 14,
      assessmentLifecycleStages: 9,
      testMethods: 14,
      samplingFields: 10,
      fullPopulationTestingValidations: 10,
      continuousAssuranceCapabilities: 11,
      assuranceValidityFields: 10,
      auditPrinciples: 10,
      auditUniverseAreas: 20,
      auditPlanningFactors: 16,
      auditPlanFields: 18,
      auditLifecycleStages: 9,
      auditEvidenceQualities: 7,
      auditFindingFields: 14,
      managementResponseFields: 11,
      auditReportFields: 14,
      auditFollowUpFields: 8,
      attestationTypes: 7,
      attestationRecordFields: 14,
      relianceEvaluationFields: 12,
      supplierAssuranceEvidenceTypes: 12,
      assuranceDomainAreas: 7,
      externalEvidencePackageRequirements: 10,
      aiEvidenceAssistanceUses: 8,
      assuranceFindingAreas: 15,
      assuranceReportFields: 13,
      measures: 18,
      governanceAreas: 16,
      qualityAttributes: 12,
      architecturalRules: 19,
      futureCapabilities: 14
    };

    for (const [field, expected] of Object.entries(counts)) {
      assertLength(errors, this[field](), expected, field);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.ASSURANCE_AUDIT_EVIDENCE_INVALID,
        'Assurance, Audit, and Evidence violates ARCH-012-08.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function validationMappings(descriptor) {
  return [
    ['objectives', () => descriptor.objectives(), 'Assurance, Audit, and Evidence objectives must include'],
    ['principles', () => descriptor.principles(), 'Assurance, Audit, and Evidence principles must include'],
    ['evidenceModelStages', () => descriptor.evidenceModelStages(), 'Evidence model must include'],
    ['evidenceTypes', () => descriptor.evidenceTypes(), 'Evidence types must include'],
    ['evidenceRecordFields', () => descriptor.evidenceRecordFields(), 'Evidence records must include'],
    ['evidenceRoles', () => descriptor.evidenceRoles(), 'Evidence roles must include'],
    ['provenanceFields', () => descriptor.provenanceFields(), 'Evidence provenance must establish'],
    ['chainOfCustodyTriggers', () => descriptor.chainOfCustodyTriggers(), 'Chain of custody must support'],
    ['integrityControls', () => descriptor.integrityControls(), 'Evidence integrity controls must include'],
    ['evidenceQualityAttributes', () => descriptor.evidenceQualityAttributes(), 'Evidence quality must include'],
    ['completenessDimensions', () => descriptor.completenessDimensions(), 'Evidence completeness must consider'],
    ['trustedTimeCorrelationAreas', () => descriptor.trustedTimeCorrelationAreas(), 'Trusted time must correlate'],
    ['correlationIdentifiers', () => descriptor.correlationIdentifiers(), 'Evidence correlation identifiers must include'],
    ['accessRequirements', () => descriptor.accessRequirements(), 'Evidence access must follow'],
    ['minimizationFactors', () => descriptor.minimizationFactors(), 'Evidence minimization must consider'],
    ['retentionFactors', () => descriptor.retentionFactors(), 'Evidence retention must consider'],
    ['disposalScopes', () => descriptor.disposalScopes(), 'Evidence disposal must address'],
    ['disclosureRecipients', () => descriptor.disclosureRecipients(), 'Evidence disclosure recipients must include'],
    ['evidenceLifecycleStages', () => descriptor.evidenceLifecycleStages(), 'Evidence lifecycle must include'],
    ['assuranceEvaluationAreas', () => descriptor.assuranceEvaluationAreas(), 'Assurance must evaluate'],
    ['assuranceLevels', () => descriptor.assuranceLevels(), 'Assurance levels must include'],
    ['independenceFactors', () => descriptor.independenceFactors(), 'Assurance independence must consider'],
    ['engagementFields', () => descriptor.engagementFields(), 'Assurance engagements must define'],
    ['criteriaQualities', () => descriptor.criteriaQualities(), 'Assurance criteria must be'],
    ['controlAssessmentAreas', () => descriptor.controlAssessmentAreas(), 'Control assessment must evaluate'],
    ['assessmentLifecycleStages', () => descriptor.assessmentLifecycleStages(), 'Assessment lifecycle must include'],
    ['testMethods', () => descriptor.testMethods(), 'Test methods must include'],
    ['samplingFields', () => descriptor.samplingFields(), 'Sampling must define'],
    ['fullPopulationTestingValidations', () => descriptor.fullPopulationTestingValidations(), 'Full-population testing must validate'],
    ['continuousAssuranceCapabilities', () => descriptor.continuousAssuranceCapabilities(), 'Continuous assurance capabilities must include'],
    ['assuranceValidityFields', () => descriptor.assuranceValidityFields(), 'Assurance validity must identify'],
    ['auditPrinciples', () => descriptor.auditPrinciples(), 'Audit principles must include'],
    ['auditUniverseAreas', () => descriptor.auditUniverseAreas(), 'Audit universe must include'],
    ['auditPlanningFactors', () => descriptor.auditPlanningFactors(), 'Audit planning must consider'],
    ['auditPlanFields', () => descriptor.auditPlanFields(), 'Audit plan must define'],
    ['auditLifecycleStages', () => descriptor.auditLifecycleStages(), 'Audit lifecycle must include'],
    ['auditEvidenceQualities', () => descriptor.auditEvidenceQualities(), 'Audit evidence must be'],
    ['auditFindingFields', () => descriptor.auditFindingFields(), 'Audit findings must identify'],
    ['managementResponseFields', () => descriptor.managementResponseFields(), 'Management response must state'],
    ['auditReportFields', () => descriptor.auditReportFields(), 'Audit reporting must include'],
    ['auditFollowUpFields', () => descriptor.auditFollowUpFields(), 'Audit follow-up must verify'],
    ['attestationTypes', () => descriptor.attestationTypes(), 'Attestation types must include'],
    ['attestationRecordFields', () => descriptor.attestationRecordFields(), 'Attestation records must include'],
    ['relianceEvaluationFields', () => descriptor.relianceEvaluationFields(), 'Reliance evaluation must include'],
    ['supplierAssuranceEvidenceTypes', () => descriptor.supplierAssuranceEvidenceTypes(), 'Supplier assurance must include'],
    ['assuranceDomainAreas', () => descriptor.assuranceDomainAreas(), 'Assurance domains must include'],
    ['externalEvidencePackageRequirements', () => descriptor.externalEvidencePackageRequirements(), 'External evidence packages must be'],
    ['aiEvidenceAssistanceUses', () => descriptor.aiEvidenceAssistanceUses(), 'AI evidence assistance must support'],
    ['assuranceFindingAreas', () => descriptor.assuranceFindingAreas(), 'Assurance findings may relate to'],
    ['assuranceReportFields', () => descriptor.assuranceReportFields(), 'Assurance reporting must provide'],
    ['measures', () => descriptor.measures(), 'Assurance, Audit, and Evidence measures must include'],
    ['governanceAreas', () => descriptor.governanceAreas(), 'Assurance, Audit, and Evidence governance must cover'],
    ['qualityAttributes', () => descriptor.qualityAttributes(), 'Assurance, Audit, and Evidence quality attributes must include'],
    ['architecturalRules', () => descriptor.architecturalRules(), 'Assurance, Audit, and Evidence architectural rules must include'],
    ['futureCapabilities', () => descriptor.futureCapabilities(), 'Future Assurance, Audit, and Evidence capabilities must include']
  ];
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function assertLength(errors, actual, expected, label) {
  if (actual.length !== expected) errors.push(`Assurance, Audit, and Evidence must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
