export class AssuranceAuditEvidenceProfile {
  constructor({
    assuranceName,
    objectives = [],
    principles = [],
    evidenceModelStages = [],
    evidenceTypes = [],
    evidenceRecordFields = [],
    evidenceRoles = [],
    provenanceFields = [],
    chainOfCustodyTriggers = [],
    integrityControls = [],
    evidenceQualityAttributes = [],
    completenessDimensions = [],
    trustedTimeCorrelationAreas = [],
    correlationIdentifiers = [],
    accessRequirements = [],
    minimizationFactors = [],
    retentionFactors = [],
    disposalScopes = [],
    disclosureRecipients = [],
    evidenceLifecycleStages = [],
    assuranceEvaluationAreas = [],
    assuranceLevels = [],
    independenceFactors = [],
    engagementFields = [],
    criteriaQualities = [],
    controlAssessmentAreas = [],
    assessmentLifecycleStages = [],
    testMethods = [],
    samplingFields = [],
    fullPopulationTestingValidations = [],
    continuousAssuranceCapabilities = [],
    assuranceValidityFields = [],
    auditPrinciples = [],
    auditUniverseAreas = [],
    auditPlanningFactors = [],
    auditPlanFields = [],
    auditLifecycleStages = [],
    auditEvidenceQualities = [],
    auditFindingFields = [],
    managementResponseFields = [],
    auditReportFields = [],
    auditFollowUpFields = [],
    attestationTypes = [],
    attestationRecordFields = [],
    relianceEvaluationFields = [],
    supplierAssuranceEvidenceTypes = [],
    assuranceDomainAreas = [],
    externalEvidencePackageRequirements = [],
    aiEvidenceAssistanceUses = [],
    assuranceFindingAreas = [],
    assuranceReportFields = [],
    measures = [],
    governanceAreas = [],
    qualityAttributes = [],
    architecturalRules = [],
    futureCapabilities = [],
    evidenceDesignedNotReconstructed = true,
    evidenceFitForPurpose = true,
    provenanceRequired = true,
    chainOfCustodyProtected = true,
    independenceProportionateToRisk = true,
    assuranceNotAbsolute = true,
    auditDoesNotCreateCompliance = true,
    automatedEvidenceRequiresAssurance = true,
    continuousAssuranceSupplemental = true,
    auditIndependentOfManagementDecisions = true,
    attestationsLimitedToEvidence = true,
    relianceDocumented = true,
    supplierRiskOwnershipRetained = true,
    aiGeneratedEvidenceHumanReviewed = true,
    aiMustNotFabricateEvidence = true,
    vendorNeutral = true,
    technologyIndependent = true,
    prescribesLoggingProduct = false,
    prescribesGovernancePlatform = false,
    prescribesAuditTool = false,
    prescribesEvidenceRepository = false,
    prescribesCertificationScheme = false,
    prescribesAuditFirm = false,
    prescribesRegulatoryFramework = false
  }) {
    this.assuranceName = assuranceName;
    for (const [key, value] of Object.entries({
      objectives,
      principles,
      evidenceModelStages,
      evidenceTypes,
      evidenceRecordFields,
      evidenceRoles,
      provenanceFields,
      chainOfCustodyTriggers,
      integrityControls,
      evidenceQualityAttributes,
      completenessDimensions,
      trustedTimeCorrelationAreas,
      correlationIdentifiers,
      accessRequirements,
      minimizationFactors,
      retentionFactors,
      disposalScopes,
      disclosureRecipients,
      evidenceLifecycleStages,
      assuranceEvaluationAreas,
      assuranceLevels,
      independenceFactors,
      engagementFields,
      criteriaQualities,
      controlAssessmentAreas,
      assessmentLifecycleStages,
      testMethods,
      samplingFields,
      fullPopulationTestingValidations,
      continuousAssuranceCapabilities,
      assuranceValidityFields,
      auditPrinciples,
      auditUniverseAreas,
      auditPlanningFactors,
      auditPlanFields,
      auditLifecycleStages,
      auditEvidenceQualities,
      auditFindingFields,
      managementResponseFields,
      auditReportFields,
      auditFollowUpFields,
      attestationTypes,
      attestationRecordFields,
      relianceEvaluationFields,
      supplierAssuranceEvidenceTypes,
      assuranceDomainAreas,
      externalEvidencePackageRequirements,
      aiEvidenceAssistanceUses,
      assuranceFindingAreas,
      assuranceReportFields,
      measures,
      governanceAreas,
      qualityAttributes,
      architecturalRules,
      futureCapabilities
    })) {
      this[key] = Object.freeze([...value]);
    }
    this.evidenceDesignedNotReconstructed = Boolean(evidenceDesignedNotReconstructed);
    this.evidenceFitForPurpose = Boolean(evidenceFitForPurpose);
    this.provenanceRequired = Boolean(provenanceRequired);
    this.chainOfCustodyProtected = Boolean(chainOfCustodyProtected);
    this.independenceProportionateToRisk = Boolean(independenceProportionateToRisk);
    this.assuranceNotAbsolute = Boolean(assuranceNotAbsolute);
    this.auditDoesNotCreateCompliance = Boolean(auditDoesNotCreateCompliance);
    this.automatedEvidenceRequiresAssurance = Boolean(automatedEvidenceRequiresAssurance);
    this.continuousAssuranceSupplemental = Boolean(continuousAssuranceSupplemental);
    this.auditIndependentOfManagementDecisions = Boolean(auditIndependentOfManagementDecisions);
    this.attestationsLimitedToEvidence = Boolean(attestationsLimitedToEvidence);
    this.relianceDocumented = Boolean(relianceDocumented);
    this.supplierRiskOwnershipRetained = Boolean(supplierRiskOwnershipRetained);
    this.aiGeneratedEvidenceHumanReviewed = Boolean(aiGeneratedEvidenceHumanReviewed);
    this.aiMustNotFabricateEvidence = Boolean(aiMustNotFabricateEvidence);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.prescribesLoggingProduct = Boolean(prescribesLoggingProduct);
    this.prescribesGovernancePlatform = Boolean(prescribesGovernancePlatform);
    this.prescribesAuditTool = Boolean(prescribesAuditTool);
    this.prescribesEvidenceRepository = Boolean(prescribesEvidenceRepository);
    this.prescribesCertificationScheme = Boolean(prescribesCertificationScheme);
    this.prescribesAuditFirm = Boolean(prescribesAuditFirm);
    this.prescribesRegulatoryFramework = Boolean(prescribesRegulatoryFramework);

    Object.freeze(this);
  }
}
