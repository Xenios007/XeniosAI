import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGENT_MEMORY_GOVERNANCE_FIELDS,
  AI_DATA_GOVERNANCE_CATEGORIES,
  AI_PROVIDER_DATA_USE_FIELDS,
  ANONYMIZATION_PSEUDONYMIZATION_FIELDS,
  AUTHORIZED_BASIS_FIELDS,
  AUTOMATED_DECISION_FIELDS,
  CROSS_BORDER_MOVEMENT_VECTORS,
  CROSS_TENANT_DATA_USE_CONDITIONS,
  DATA_ACCESS_REQUIREMENTS,
  DATA_CLASSIFICATION_CLASSES,
  DATA_CLASSIFICATION_LABELS,
  DATA_COLLECTION_QUALITIES,
  DATA_DELETION_SCOPES,
  DATA_DISCLOSURE_CLASSES,
  DATA_GOVERNANCE_DOMAINS,
  DATA_GOVERNANCE_EVIDENCE_TYPES,
  DATA_GOVERNANCE_MEASURES,
  DATA_HOLD_FIELDS,
  DATA_INVENTORY_FIELDS,
  DATA_LIFECYCLE_STAGES,
  DATA_LINEAGE_FIELDS,
  DATA_METADATA_FIELDS,
  DATA_MINIMIZATION_LEVERS,
  DATA_PROTECTION_BY_DESIGN_CONTROLS,
  DATA_PURPOSE_FIELDS,
  DATA_QUALITY_DIMENSIONS,
  DATA_QUALITY_RULE_FIELDS,
  DATA_RESIDENCY_FIELDS,
  DATA_RETURN_PORTABILITY_FIELDS,
  DATA_ROLES,
  DATA_SHARING_FIELDS,
  DERIVED_INFERRED_DATA_FIELDS,
  FUTURE_PRIVACY_DATA_GOVERNANCE_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  INDIVIDUAL_RIGHTS,
  PERSONAL_DATA_CATEGORIES,
  PRIVACY_DATA_ASSURANCE_AREAS,
  PRIVACY_DATA_GOVERNANCE_ARCHITECTURAL_RULES,
  PRIVACY_DATA_GOVERNANCE_MODEL_STAGES,
  PRIVACY_DATA_GOVERNANCE_OBJECTIVES,
  PRIVACY_DATA_GOVERNANCE_PRINCIPLES,
  PRIVACY_DATA_GOVERNANCE_QUALITY_ATTRIBUTES,
  PRIVACY_IMPACT_ASSESSMENT_FIELDS,
  PRIVACY_IMPACT_ASSESSMENT_TRIGGERS,
  PRIVACY_RISK_HARMS,
  PROPERTY_DATA_GOVERNANCE_FIELDS,
  PURPOSE_AWARE_ACCESS_DIMENSIONS,
  RETENTION_BASIS_FACTORS,
  RETENTION_SCHEDULE_FIELDS,
  RIGHTS_HANDLING_FIELDS,
  SENSITIVE_DATA_CATEGORIES,
  SUPPLIER_PROCESSOR_GOVERNANCE_FIELDS,
  TENANT_DATA_GOVERNANCE_FIELDS,
  TRANSPARENCY_FIELDS,
  DATA_INCIDENT_ASSESSMENT_FIELDS,
  DATA_INCIDENT_TYPES
} from '../constants.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';
import { PrivacyDataGovernanceProfile } from '../contracts/privacy-data-governance-profile.js';

export class PrivacyDataGovernanceDescriptor {
  objectives() { return values(PRIVACY_DATA_GOVERNANCE_OBJECTIVES); }
  principles() { return values(PRIVACY_DATA_GOVERNANCE_PRINCIPLES); }
  governanceModelStages() { return values(PRIVACY_DATA_GOVERNANCE_MODEL_STAGES); }
  dataDomains() { return values(DATA_GOVERNANCE_DOMAINS); }
  dataRoles() { return values(DATA_ROLES); }
  inventoryFields() { return values(DATA_INVENTORY_FIELDS); }
  classificationClasses() { return values(DATA_CLASSIFICATION_CLASSES); }
  classificationLabels() { return values(DATA_CLASSIFICATION_LABELS); }
  personalDataCategories() { return values(PERSONAL_DATA_CATEGORIES); }
  sensitiveDataCategories() { return values(SENSITIVE_DATA_CATEGORIES); }
  purposeFields() { return values(DATA_PURPOSE_FIELDS); }
  authorizedBasisFields() { return values(AUTHORIZED_BASIS_FIELDS); }
  lifecycleStages() { return values(DATA_LIFECYCLE_STAGES); }
  collectionQualities() { return values(DATA_COLLECTION_QUALITIES); }
  minimizationLevers() { return values(DATA_MINIMIZATION_LEVERS); }
  anonymizationFields() { return values(ANONYMIZATION_PSEUDONYMIZATION_FIELDS); }
  transparencyFields() { return values(TRANSPARENCY_FIELDS); }
  accessRequirements() { return values(DATA_ACCESS_REQUIREMENTS); }
  purposeAwareAccessDimensions() { return values(PURPOSE_AWARE_ACCESS_DIMENSIONS); }
  qualityDimensions() { return values(DATA_QUALITY_DIMENSIONS); }
  qualityRuleFields() { return values(DATA_QUALITY_RULE_FIELDS); }
  metadataFields() { return values(DATA_METADATA_FIELDS); }
  lineageFields() { return values(DATA_LINEAGE_FIELDS); }
  derivedInferredDataFields() { return values(DERIVED_INFERRED_DATA_FIELDS); }
  sharingFields() { return values(DATA_SHARING_FIELDS); }
  disclosureClasses() { return values(DATA_DISCLOSURE_CLASSES); }
  residencyFields() { return values(DATA_RESIDENCY_FIELDS); }
  crossBorderMovementVectors() { return values(CROSS_BORDER_MOVEMENT_VECTORS); }
  retentionBasisFactors() { return values(RETENTION_BASIS_FACTORS); }
  retentionScheduleFields() { return values(RETENTION_SCHEDULE_FIELDS); }
  holdFields() { return values(DATA_HOLD_FIELDS); }
  deletionScopes() { return values(DATA_DELETION_SCOPES); }
  returnPortabilityFields() { return values(DATA_RETURN_PORTABILITY_FIELDS); }
  individualRights() { return values(INDIVIDUAL_RIGHTS); }
  rightsHandlingFields() { return values(RIGHTS_HANDLING_FIELDS); }
  automatedDecisionFields() { return values(AUTOMATED_DECISION_FIELDS); }
  aiDataCategories() { return values(AI_DATA_GOVERNANCE_CATEGORIES); }
  aiProviderDataUseFields() { return values(AI_PROVIDER_DATA_USE_FIELDS); }
  agentMemoryFields() { return values(AGENT_MEMORY_GOVERNANCE_FIELDS); }
  tenantDataFields() { return values(TENANT_DATA_GOVERNANCE_FIELDS); }
  crossTenantDataUseConditions() { return values(CROSS_TENANT_DATA_USE_CONDITIONS); }
  propertyDataFields() { return values(PROPERTY_DATA_GOVERNANCE_FIELDS); }
  supplierProcessorFields() { return values(SUPPLIER_PROCESSOR_GOVERNANCE_FIELDS); }
  privacyRiskHarms() { return values(PRIVACY_RISK_HARMS); }
  privacyImpactAssessmentTriggers() { return values(PRIVACY_IMPACT_ASSESSMENT_TRIGGERS); }
  privacyImpactAssessmentFields() { return values(PRIVACY_IMPACT_ASSESSMENT_FIELDS); }
  dataProtectionByDesignControls() { return values(DATA_PROTECTION_BY_DESIGN_CONTROLS); }
  incidentTypes() { return values(DATA_INCIDENT_TYPES); }
  incidentAssessmentFields() { return values(DATA_INCIDENT_ASSESSMENT_FIELDS); }
  evidenceTypes() { return values(DATA_GOVERNANCE_EVIDENCE_TYPES); }
  assuranceAreas() { return values(PRIVACY_DATA_ASSURANCE_AREAS); }
  measures() { return values(DATA_GOVERNANCE_MEASURES); }
  qualityAttributes() { return values(PRIVACY_DATA_GOVERNANCE_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(PRIVACY_DATA_GOVERNANCE_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_PRIVACY_DATA_GOVERNANCE_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof PrivacyDataGovernanceProfile
      ? profileInput
      : new PrivacyDataGovernanceProfile(profileInput);
    const errors = [];

    if (!profile.governanceName) errors.push('Privacy and Data Governance profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Privacy and Data Governance objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Privacy and Data Governance principles must include');
    appendMissing(errors, profile.governanceModelStages, this.governanceModelStages(), 'Privacy and Data Governance model must include');
    appendMissing(errors, profile.dataDomains, this.dataDomains(), 'Data governance domains must include');
    appendMissing(errors, profile.dataRoles, this.dataRoles(), 'Data roles must include');
    appendMissing(errors, profile.inventoryFields, this.inventoryFields(), 'Data inventory must include');
    appendMissing(errors, profile.classificationClasses, this.classificationClasses(), 'Data classification classes must include');
    appendMissing(errors, profile.classificationLabels, this.classificationLabels(), 'Data classification labels must include');
    appendMissing(errors, profile.personalDataCategories, this.personalDataCategories(), 'Personal data categories must include');
    appendMissing(errors, profile.sensitiveDataCategories, this.sensitiveDataCategories(), 'Sensitive data categories must include');
    appendMissing(errors, profile.purposeFields, this.purposeFields(), 'Data purpose must identify');
    appendMissing(errors, profile.authorizedBasisFields, this.authorizedBasisFields(), 'Authorized basis must record');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'Data lifecycle must include');
    appendMissing(errors, profile.collectionQualities, this.collectionQualities(), 'Data collection should be');
    appendMissing(errors, profile.minimizationLevers, this.minimizationLevers(), 'Data minimization may reduce');
    appendMissing(errors, profile.anonymizationFields, this.anonymizationFields(), 'Anonymization and pseudonymization must define');
    appendMissing(errors, profile.transparencyFields, this.transparencyFields(), 'Transparency should explain');
    appendMissing(errors, profile.accessRequirements, this.accessRequirements(), 'Data access must follow');
    appendMissing(errors, profile.purposeAwareAccessDimensions, this.purposeAwareAccessDimensions(), 'Purpose-aware access must consider');
    appendMissing(errors, profile.qualityDimensions, this.qualityDimensions(), 'Data quality dimensions must include');
    appendMissing(errors, profile.qualityRuleFields, this.qualityRuleFields(), 'Data-quality rules must identify');
    appendMissing(errors, profile.metadataFields, this.metadataFields(), 'Governed metadata must describe');
    appendMissing(errors, profile.lineageFields, this.lineageFields(), 'Data lineage must identify');
    appendMissing(errors, profile.derivedInferredDataFields, this.derivedInferredDataFields(), 'Derived and inferred data governance must identify');
    appendMissing(errors, profile.sharingFields, this.sharingFields(), 'Data sharing must define');
    appendMissing(errors, profile.disclosureClasses, this.disclosureClasses(), 'Data disclosure classes must include');
    appendMissing(errors, profile.residencyFields, this.residencyFields(), 'Data residency governance must identify');
    appendMissing(errors, profile.crossBorderMovementVectors, this.crossBorderMovementVectors(), 'Cross-border movement vectors must include');
    appendMissing(errors, profile.retentionBasisFactors, this.retentionBasisFactors(), 'Retention basis must include');
    appendMissing(errors, profile.retentionScheduleFields, this.retentionScheduleFields(), 'Retention schedules must define');
    appendMissing(errors, profile.holdFields, this.holdFields(), 'Legal and governance holds must identify');
    appendMissing(errors, profile.deletionScopes, this.deletionScopes(), 'Data deletion must address');
    appendMissing(errors, profile.returnPortabilityFields, this.returnPortabilityFields(), 'Data return and portability must require');
    appendMissing(errors, profile.individualRights, this.individualRights(), 'Individual rights handling must support');
    appendMissing(errors, profile.rightsHandlingFields, this.rightsHandlingFields(), 'Rights handling must define');
    appendMissing(errors, profile.automatedDecisionFields, this.automatedDecisionFields(), 'Automated decisions must define');
    appendMissing(errors, profile.aiDataCategories, this.aiDataCategories(), 'AI data governance must cover');
    appendMissing(errors, profile.aiProviderDataUseFields, this.aiProviderDataUseFields(), 'AI provider data use must assess');
    appendMissing(errors, profile.agentMemoryFields, this.agentMemoryFields(), 'Agent memory governance must define');
    appendMissing(errors, profile.tenantDataFields, this.tenantDataFields(), 'Tenant data governance must define');
    appendMissing(errors, profile.crossTenantDataUseConditions, this.crossTenantDataUseConditions(), 'Cross-tenant data use conditions must include');
    appendMissing(errors, profile.propertyDataFields, this.propertyDataFields(), 'Property data governance must define');
    appendMissing(errors, profile.supplierProcessorFields, this.supplierProcessorFields(), 'Supplier and processor governance must include');
    appendMissing(errors, profile.privacyRiskHarms, this.privacyRiskHarms(), 'Privacy risk harms must include');
    appendMissing(errors, profile.privacyImpactAssessmentTriggers, this.privacyImpactAssessmentTriggers(), 'Privacy impact assessment triggers must include');
    appendMissing(errors, profile.privacyImpactAssessmentFields, this.privacyImpactAssessmentFields(), 'Privacy impact assessments must identify');
    appendMissing(errors, profile.dataProtectionByDesignControls, this.dataProtectionByDesignControls(), 'Data protection by design must incorporate');
    appendMissing(errors, profile.incidentTypes, this.incidentTypes(), 'Data incidents may involve');
    appendMissing(errors, profile.incidentAssessmentFields, this.incidentAssessmentFields(), 'Data incident assessment must identify');
    appendMissing(errors, profile.evidenceTypes, this.evidenceTypes(), 'Data-governance evidence must include');
    appendMissing(errors, profile.assuranceAreas, this.assuranceAreas(), 'Privacy and Data Assurance must evaluate');
    appendMissing(errors, profile.measures, this.measures(), 'Data Governance measures must include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Privacy and Data Governance quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Privacy and Data Governance architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future Privacy and Data Governance capabilities must include');
    if (profile.accountableOwnersRequired !== true) errors.push('Every governed data domain and material data product must have an accountable owner.');
    if (profile.purposeBeforeProcessing !== true) errors.push('Purpose must be defined before data processing.');
    if (profile.dataMinimizationRequired !== true) errors.push('Data collection, use, sharing, and retention must be minimized.');
    if (profile.tenantIsolationPreserved !== true) errors.push('Tenant data must remain segregated in access, processing, evidence, and assurance.');
    if (profile.qualifiedInterpretationRequired !== true) errors.push('Personal data classification and notification decisions require qualified interpretation.');
    if (profile.aiCreatesNoIndependentDataRights !== true) errors.push('AI capabilities do not create independent rights to collect, reuse, infer, combine, or retain data.');
    if (profile.providerConfigurationVerified !== true) errors.push('AI provider configuration must be verified against policy.');
    if (profile.persistentMemoryRequiresPurpose !== true) errors.push('Persistent memory must not be created merely for convenience.');
    if (profile.crossTenantLearningProtected !== true) errors.push('Cross-tenant learning must not expose tenant confidential information.');
    if (profile.outsourcingDoesNotOutsourceAccountability !== true) errors.push('Outsourcing processing does not outsource XeniosAI accountability.');
    if (profile.notificationDecisionsRequireQualifiedAuthority !== true) errors.push('Notification decisions require qualified authority.');
    if (profile.evidenceGoverned !== true) errors.push('Data-governance evidence must itself be governed for privacy, security, retention, and tenant isolation.');
    if (profile.vendorNeutral !== true) errors.push('Privacy and Data Governance must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Privacy and Data Governance must remain technology independent.');
    if (profile.providesLegalAdvice === true) errors.push('Privacy and Data Governance does not provide legal advice.');
    if (profile.prescribesPrivacyLaw === true) errors.push('Privacy and Data Governance does not prescribe a specific privacy law.');
    if (profile.prescribesDataPlatform === true) errors.push('Privacy and Data Governance does not prescribe a data platform.');
    if (profile.prescribesCatalogProduct === true) errors.push('Privacy and Data Governance does not prescribe a catalog product.');
    if (profile.prescribesConsentProduct === true) errors.push('Privacy and Data Governance does not prescribe a consent product.');
    if (profile.prescribesResidencyTechnology === true) errors.push('Privacy and Data Governance does not prescribe a residency technology.');
    if (profile.prescribesRegulatoryFramework === true) errors.push('Privacy and Data Governance does not prescribe a regulatory framework.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    assertLength(errors, this.objectives(), 18, 'objectives');
    assertLength(errors, this.principles(), 10, 'principles');
    assertLength(errors, this.governanceModelStages(), 7, 'governance model stages');
    assertLength(errors, this.dataDomains(), 7, 'data governance domains');
    assertLength(errors, this.dataRoles(), 7, 'data roles');
    assertLength(errors, this.inventoryFields(), 29, 'data inventory fields');
    assertLength(errors, this.classificationClasses(), 5, 'classification classes');
    assertLength(errors, this.classificationLabels(), 12, 'classification labels');
    assertLength(errors, this.personalDataCategories(), 15, 'personal data categories');
    assertLength(errors, this.sensitiveDataCategories(), 11, 'sensitive data categories');
    assertLength(errors, this.purposeFields(), 14, 'purpose fields');
    assertLength(errors, this.authorizedBasisFields(), 9, 'authorized basis fields');
    assertLength(errors, this.lifecycleStages(), 8, 'data lifecycle stages');
    assertLength(errors, this.collectionQualities(), 10, 'collection qualities');
    assertLength(errors, this.minimizationLevers(), 11, 'minimization levers');
    assertLength(errors, this.anonymizationFields(), 10, 'anonymization fields');
    assertLength(errors, this.transparencyFields(), 11, 'transparency fields');
    assertLength(errors, this.accessRequirements(), 12, 'access requirements');
    assertLength(errors, this.purposeAwareAccessDimensions(), 12, 'purpose-aware access dimensions');
    assertLength(errors, this.qualityDimensions(), 8, 'quality dimensions');
    assertLength(errors, this.qualityRuleFields(), 12, 'quality rule fields');
    assertLength(errors, this.metadataFields(), 15, 'metadata fields');
    assertLength(errors, this.lineageFields(), 13, 'lineage fields');
    assertLength(errors, this.derivedInferredDataFields(), 13, 'derived and inferred data fields');
    assertLength(errors, this.sharingFields(), 15, 'sharing fields');
    assertLength(errors, this.disclosureClasses(), 9, 'disclosure classes');
    assertLength(errors, this.residencyFields(), 14, 'residency fields');
    assertLength(errors, this.crossBorderMovementVectors(), 10, 'cross-border movement vectors');
    assertLength(errors, this.retentionBasisFactors(), 12, 'retention basis factors');
    assertLength(errors, this.retentionScheduleFields(), 10, 'retention schedule fields');
    assertLength(errors, this.holdFields(), 12, 'hold fields');
    assertLength(errors, this.deletionScopes(), 13, 'deletion scopes');
    assertLength(errors, this.returnPortabilityFields(), 11, 'return and portability fields');
    assertLength(errors, this.individualRights(), 10, 'individual rights');
    assertLength(errors, this.rightsHandlingFields(), 12, 'rights handling fields');
    assertLength(errors, this.automatedDecisionFields(), 13, 'automated decision fields');
    assertLength(errors, this.aiDataCategories(), 14, 'AI data categories');
    assertLength(errors, this.aiProviderDataUseFields(), 14, 'AI provider data use fields');
    assertLength(errors, this.agentMemoryFields(), 14, 'agent memory fields');
    assertLength(errors, this.tenantDataFields(), 14, 'tenant data fields');
    assertLength(errors, this.crossTenantDataUseConditions(), 8, 'cross-tenant data use conditions');
    assertLength(errors, this.propertyDataFields(), 13, 'property data fields');
    assertLength(errors, this.supplierProcessorFields(), 17, 'supplier and processor fields');
    assertLength(errors, this.privacyRiskHarms(), 16, 'privacy risk harms');
    assertLength(errors, this.privacyImpactAssessmentTriggers(), 13, 'privacy impact assessment triggers');
    assertLength(errors, this.privacyImpactAssessmentFields(), 11, 'privacy impact assessment fields');
    assertLength(errors, this.dataProtectionByDesignControls(), 14, 'data protection by design controls');
    assertLength(errors, this.incidentTypes(), 12, 'incident types');
    assertLength(errors, this.incidentAssessmentFields(), 16, 'incident assessment fields');
    assertLength(errors, this.evidenceTypes(), 19, 'evidence types');
    assertLength(errors, this.assuranceAreas(), 19, 'assurance areas');
    assertLength(errors, this.measures(), 16, 'measures');
    assertLength(errors, this.qualityAttributes(), 13, 'quality attributes');
    assertLength(errors, this.architecturalRules(), 19, 'architectural rules');
    assertLength(errors, this.futureCapabilities(), 15, 'future capabilities');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.PRIVACY_DATA_GOVERNANCE_INVALID,
        'Privacy and Data Governance violates ARCH-012-06.',
        { errors }
      );
    }

    return validation(errors);
  }
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
  if (actual.length !== expected) errors.push(`Privacy and Data Governance must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
