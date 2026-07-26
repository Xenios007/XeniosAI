import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  DATA_INCIDENT_ASSESSMENT_FIELDS,
  DATA_INCIDENT_TYPES,
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
  PrivacyDataGovernanceDescriptor,
  PrivacyDataGovernanceProfile,
  RETENTION_BASIS_FACTORS,
  RETENTION_SCHEDULE_FIELDS,
  RIGHTS_HANDLING_FIELDS,
  SENSITIVE_DATA_CATEGORIES,
  SUPPLIER_PROCESSOR_GOVERNANCE_FIELDS,
  TENANT_DATA_GOVERNANCE_FIELDS,
  TRANSPARENCY_FIELDS,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('privacy and data governance exposes documented objectives, principles, model, domains, roles, inventory, and classification', () => {
  const descriptor = new PrivacyDataGovernanceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(PRIVACY_DATA_GOVERNANCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(PRIVACY_DATA_GOVERNANCE_PRINCIPLES));
  assert.deepEqual(descriptor.governanceModelStages(), Object.values(PRIVACY_DATA_GOVERNANCE_MODEL_STAGES));
  assert.deepEqual(descriptor.dataDomains(), Object.values(DATA_GOVERNANCE_DOMAINS));
  assert.deepEqual(descriptor.dataRoles(), Object.values(DATA_ROLES));
  assert.ok(descriptor.inventoryFields().includes(DATA_INVENTORY_FIELDS.LIFECYCLE_STATE));
  assert.ok(descriptor.classificationClasses().includes(DATA_CLASSIFICATION_CLASSES.HIGHLY_RESTRICTED));
  assert.ok(descriptor.classificationLabels().includes(DATA_CLASSIFICATION_LABELS.DERIVED_OR_INFERRED));
  assert.ok(descriptor.personalDataCategories().includes(PERSONAL_DATA_CATEGORIES.SECURITY_AND_ACCESS));
  assert.ok(descriptor.sensitiveDataCategories().includes(SENSITIVE_DATA_CATEGORIES.CHILDREN_DATA));
});

test('privacy and data governance exposes lifecycle, purpose, access, quality, metadata, lineage, sharing, residency, and retention metadata', () => {
  const descriptor = new PrivacyDataGovernanceDescriptor();

  assert.ok(descriptor.purposeFields().includes(DATA_PURPOSE_FIELDS.END_CONDITION));
  assert.ok(descriptor.authorizedBasisFields().includes(AUTHORIZED_BASIS_FIELDS.WITHDRAWAL_OR_OBJECTION_HANDLING));
  assert.ok(descriptor.lifecycleStages().includes(DATA_LIFECYCLE_STAGES.DELETE_ANONYMIZE_RETURN_OR_DISPOSE));
  assert.ok(descriptor.collectionQualities().includes(DATA_COLLECTION_QUALITIES.EVIDENCE_GENERATING));
  assert.ok(descriptor.minimizationLevers().includes(DATA_MINIMIZATION_LEVERS.CONTEXT_PROVIDED_TO_AI));
  assert.ok(descriptor.anonymizationFields().includes(ANONYMIZATION_PSEUDONYMIZATION_FIELDS.RE_IDENTIFICATION_RISK));
  assert.ok(descriptor.transparencyFields().includes(TRANSPARENCY_FIELDS.MATERIAL_CHANGES));
  assert.ok(descriptor.accessRequirements().includes(DATA_ACCESS_REQUIREMENTS.AUTHORIZED_PURPOSE));
  assert.ok(descriptor.purposeAwareAccessDimensions().includes(PURPOSE_AWARE_ACCESS_DIMENSIONS.CONSENT_OR_AUTHORIZATION_CONDITION));
  assert.ok(descriptor.qualityDimensions().includes(DATA_QUALITY_DIMENSIONS.RELEVANCE));
  assert.ok(descriptor.qualityRuleFields().includes(DATA_QUALITY_RULE_FIELDS.FAILURE_HANDLING));
  assert.ok(descriptor.metadataFields().includes(DATA_METADATA_FIELDS.AI_USE));
  assert.ok(descriptor.lineageFields().includes(DATA_LINEAGE_FIELDS.INFERENCE));
  assert.ok(descriptor.derivedInferredDataFields().includes(DERIVED_INFERRED_DATA_FIELDS.RIGHTS_IMPACT));
  assert.ok(descriptor.sharingFields().includes(DATA_SHARING_FIELDS.INCIDENT_OBLIGATIONS));
  assert.ok(descriptor.disclosureClasses().includes(DATA_DISCLOSURE_CLASSES.LEGAL_OR_REGULATORY));
  assert.ok(descriptor.residencyFields().includes(DATA_RESIDENCY_FIELDS.AI_PROVIDERS));
  assert.ok(descriptor.crossBorderMovementVectors().includes(CROSS_BORDER_MOVEMENT_VECTORS.REMOTE_ACCESS));
  assert.ok(descriptor.retentionBasisFactors().includes(RETENTION_BASIS_FACTORS.LITIGATION_OR_LEGAL_HOLD));
  assert.ok(descriptor.retentionScheduleFields().includes(RETENTION_SCHEDULE_FIELDS.REVIEW));
});

test('privacy and data governance exposes deletion, rights, AI data, tenant, property, supplier, risk, incident, assurance, measures, rules, and future metadata', () => {
  const descriptor = new PrivacyDataGovernanceDescriptor();

  assert.ok(descriptor.holdFields().includes(DATA_HOLD_FIELDS.DELETION_RESUMPTION));
  assert.ok(descriptor.deletionScopes().includes(DATA_DELETION_SCOPES.EMBEDDINGS));
  assert.ok(descriptor.returnPortabilityFields().includes(DATA_RETURN_PORTABILITY_FIELDS.THIRD_PARTY_DATA_SEPARATION));
  assert.ok(descriptor.individualRights().includes(INDIVIDUAL_RIGHTS.REVIEW_OF_AUTOMATED_DECISION));
  assert.ok(descriptor.rightsHandlingFields().includes(RIGHTS_HANDLING_FIELDS.SUPPLIER_COORDINATION));
  assert.ok(descriptor.automatedDecisionFields().includes(AUTOMATED_DECISION_FIELDS.LOGIC_OR_MEANINGFUL_EXPLANATION));
  assert.ok(descriptor.aiDataCategories().includes(AI_DATA_GOVERNANCE_CATEGORIES.AGENT_MEMORY));
  assert.ok(descriptor.aiProviderDataUseFields().includes(AI_PROVIDER_DATA_USE_FIELDS.SUBPROCESSORS));
  assert.ok(descriptor.agentMemoryFields().includes(AGENT_MEMORY_GOVERNANCE_FIELDS.CROSS_AGENT_SHARING));
  assert.ok(descriptor.tenantDataFields().includes(TENANT_DATA_GOVERNANCE_FIELDS.PROPERTY_DELEGATION));
  assert.ok(descriptor.crossTenantDataUseConditions().includes(CROSS_TENANT_DATA_USE_CONDITIONS.RE_IDENTIFICATION_RISK_CONTROL));
  assert.ok(descriptor.propertyDataFields().includes(PROPERTY_DATA_GOVERNANCE_FIELDS.RECONCILIATION));
  assert.ok(descriptor.supplierProcessorFields().includes(SUPPLIER_PROCESSOR_GOVERNANCE_FIELDS.INCIDENT_NOTIFICATION));
  assert.ok(descriptor.privacyRiskHarms().includes(PRIVACY_RISK_HARMS.MANIPULATION));
  assert.ok(descriptor.privacyImpactAssessmentTriggers().includes(PRIVACY_IMPACT_ASSESSMENT_TRIGGERS.HIGH_RISK_PROCESSING));
  assert.ok(descriptor.privacyImpactAssessmentFields().includes(PRIVACY_IMPACT_ASSESSMENT_FIELDS.RESIDUAL_RISK));
  assert.ok(descriptor.dataProtectionByDesignControls().includes(DATA_PROTECTION_BY_DESIGN_CONTROLS.SAFE_AI_CONTEXT));
  assert.ok(descriptor.incidentTypes().includes(DATA_INCIDENT_TYPES.AI_LEAKAGE));
  assert.ok(descriptor.incidentAssessmentFields().includes(DATA_INCIDENT_ASSESSMENT_FIELDS.NOTIFICATION_OBLIGATION));
  assert.ok(descriptor.evidenceTypes().includes(DATA_GOVERNANCE_EVIDENCE_TYPES.RIGHTS_REQUESTS));
  assert.ok(descriptor.assuranceAreas().includes(PRIVACY_DATA_ASSURANCE_AREAS.TENANT_ISOLATION));
  assert.ok(descriptor.measures().includes(DATA_GOVERNANCE_MEASURES.AI_DATA_USE_REVIEWS));
  assert.ok(descriptor.qualityAttributes().includes(PRIVACY_DATA_GOVERNANCE_QUALITY_ATTRIBUTES.PORTABILITY));
  assert.ok(descriptor.architecturalRules().includes(PRIVACY_DATA_GOVERNANCE_ARCHITECTURAL_RULES.GOVERN_DERIVED_AND_INFERRED_DATA));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_PRIVACY_DATA_GOVERNANCE_CAPABILITIES.VERIFIABLE_DELETION));
});

test('privacy and data governance validates complete profiles and rejects architecture violations', () => {
  const descriptor = new PrivacyDataGovernanceDescriptor();
  const valid = descriptor.validateProfile(new PrivacyDataGovernanceProfile({
    governanceName: 'Privacy and Data Governance',
    objectives: Object.values(PRIVACY_DATA_GOVERNANCE_OBJECTIVES),
    principles: Object.values(PRIVACY_DATA_GOVERNANCE_PRINCIPLES),
    governanceModelStages: Object.values(PRIVACY_DATA_GOVERNANCE_MODEL_STAGES),
    dataDomains: Object.values(DATA_GOVERNANCE_DOMAINS),
    dataRoles: Object.values(DATA_ROLES),
    inventoryFields: Object.values(DATA_INVENTORY_FIELDS),
    classificationClasses: Object.values(DATA_CLASSIFICATION_CLASSES),
    classificationLabels: Object.values(DATA_CLASSIFICATION_LABELS),
    personalDataCategories: Object.values(PERSONAL_DATA_CATEGORIES),
    sensitiveDataCategories: Object.values(SENSITIVE_DATA_CATEGORIES),
    purposeFields: Object.values(DATA_PURPOSE_FIELDS),
    authorizedBasisFields: Object.values(AUTHORIZED_BASIS_FIELDS),
    lifecycleStages: Object.values(DATA_LIFECYCLE_STAGES),
    collectionQualities: Object.values(DATA_COLLECTION_QUALITIES),
    minimizationLevers: Object.values(DATA_MINIMIZATION_LEVERS),
    anonymizationFields: Object.values(ANONYMIZATION_PSEUDONYMIZATION_FIELDS),
    transparencyFields: Object.values(TRANSPARENCY_FIELDS),
    accessRequirements: Object.values(DATA_ACCESS_REQUIREMENTS),
    purposeAwareAccessDimensions: Object.values(PURPOSE_AWARE_ACCESS_DIMENSIONS),
    qualityDimensions: Object.values(DATA_QUALITY_DIMENSIONS),
    qualityRuleFields: Object.values(DATA_QUALITY_RULE_FIELDS),
    metadataFields: Object.values(DATA_METADATA_FIELDS),
    lineageFields: Object.values(DATA_LINEAGE_FIELDS),
    derivedInferredDataFields: Object.values(DERIVED_INFERRED_DATA_FIELDS),
    sharingFields: Object.values(DATA_SHARING_FIELDS),
    disclosureClasses: Object.values(DATA_DISCLOSURE_CLASSES),
    residencyFields: Object.values(DATA_RESIDENCY_FIELDS),
    crossBorderMovementVectors: Object.values(CROSS_BORDER_MOVEMENT_VECTORS),
    retentionBasisFactors: Object.values(RETENTION_BASIS_FACTORS),
    retentionScheduleFields: Object.values(RETENTION_SCHEDULE_FIELDS),
    holdFields: Object.values(DATA_HOLD_FIELDS),
    deletionScopes: Object.values(DATA_DELETION_SCOPES),
    returnPortabilityFields: Object.values(DATA_RETURN_PORTABILITY_FIELDS),
    individualRights: Object.values(INDIVIDUAL_RIGHTS),
    rightsHandlingFields: Object.values(RIGHTS_HANDLING_FIELDS),
    automatedDecisionFields: Object.values(AUTOMATED_DECISION_FIELDS),
    aiDataCategories: Object.values(AI_DATA_GOVERNANCE_CATEGORIES),
    aiProviderDataUseFields: Object.values(AI_PROVIDER_DATA_USE_FIELDS),
    agentMemoryFields: Object.values(AGENT_MEMORY_GOVERNANCE_FIELDS),
    tenantDataFields: Object.values(TENANT_DATA_GOVERNANCE_FIELDS),
    crossTenantDataUseConditions: Object.values(CROSS_TENANT_DATA_USE_CONDITIONS),
    propertyDataFields: Object.values(PROPERTY_DATA_GOVERNANCE_FIELDS),
    supplierProcessorFields: Object.values(SUPPLIER_PROCESSOR_GOVERNANCE_FIELDS),
    privacyRiskHarms: Object.values(PRIVACY_RISK_HARMS),
    privacyImpactAssessmentTriggers: Object.values(PRIVACY_IMPACT_ASSESSMENT_TRIGGERS),
    privacyImpactAssessmentFields: Object.values(PRIVACY_IMPACT_ASSESSMENT_FIELDS),
    dataProtectionByDesignControls: Object.values(DATA_PROTECTION_BY_DESIGN_CONTROLS),
    incidentTypes: Object.values(DATA_INCIDENT_TYPES),
    incidentAssessmentFields: Object.values(DATA_INCIDENT_ASSESSMENT_FIELDS),
    evidenceTypes: Object.values(DATA_GOVERNANCE_EVIDENCE_TYPES),
    assuranceAreas: Object.values(PRIVACY_DATA_ASSURANCE_AREAS),
    measures: Object.values(DATA_GOVERNANCE_MEASURES),
    qualityAttributes: Object.values(PRIVACY_DATA_GOVERNANCE_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(PRIVACY_DATA_GOVERNANCE_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_PRIVACY_DATA_GOVERNANCE_CAPABILITIES)
  }));
  const invalid = descriptor.validateProfile({
    governanceName: '',
    objectives: [PRIVACY_DATA_GOVERNANCE_OBJECTIVES.CLEAR_DATA_ACCOUNTABILITY],
    principles: [PRIVACY_DATA_GOVERNANCE_PRINCIPLES.DATA_HAS_ACCOUNTABLE_OWNER],
    governanceModelStages: [PRIVACY_DATA_GOVERNANCE_MODEL_STAGES.BUSINESS_PURPOSE_AND_OBLIGATION],
    dataDomains: [DATA_GOVERNANCE_DOMAINS.BUSINESS_DATA],
    dataRoles: [DATA_ROLES.DATA_OWNER],
    inventoryFields: [DATA_INVENTORY_FIELDS.DATA_IDENTIFIER],
    classificationClasses: [DATA_CLASSIFICATION_CLASSES.PUBLIC],
    classificationLabels: [DATA_CLASSIFICATION_LABELS.PERSONAL_DATA],
    personalDataCategories: [PERSONAL_DATA_CATEGORIES.IDENTITY],
    sensitiveDataCategories: [SENSITIVE_DATA_CATEGORIES.AUTHENTICATION_CREDENTIALS],
    purposeFields: [DATA_PURPOSE_FIELDS.BUSINESS_PURPOSE],
    authorizedBasisFields: [AUTHORIZED_BASIS_FIELDS.JURISDICTION],
    lifecycleStages: [DATA_LIFECYCLE_STAGES.PLAN_PURPOSE],
    collectionQualities: [DATA_COLLECTION_QUALITIES.PURPOSEFUL],
    minimizationLevers: [DATA_MINIMIZATION_LEVERS.FIELDS_COLLECTED],
    anonymizationFields: [ANONYMIZATION_PSEUDONYMIZATION_FIELDS.METHOD],
    transparencyFields: [TRANSPARENCY_FIELDS.DATA_USED],
    accessRequirements: [DATA_ACCESS_REQUIREMENTS.VERIFIED_IDENTITY],
    purposeAwareAccessDimensions: [PURPOSE_AWARE_ACCESS_DIMENSIONS.REQUESTED_PURPOSE],
    qualityDimensions: [DATA_QUALITY_DIMENSIONS.ACCURACY],
    qualityRuleFields: [DATA_QUALITY_RULE_FIELDS.DATA_ELEMENT],
    metadataFields: [DATA_METADATA_FIELDS.MEANING],
    lineageFields: [DATA_LINEAGE_FIELDS.ORIGIN],
    derivedInferredDataFields: [DERIVED_INFERRED_DATA_FIELDS.SOURCE_DATA],
    sharingFields: [DATA_SHARING_FIELDS.PURPOSE],
    disclosureClasses: [DATA_DISCLOSURE_CLASSES.INTERNAL],
    residencyFields: [DATA_RESIDENCY_FIELDS.DATA_CATEGORY],
    crossBorderMovementVectors: [CROSS_BORDER_MOVEMENT_VECTORS.STORAGE],
    retentionBasisFactors: [RETENTION_BASIS_FACTORS.PURPOSE],
    retentionScheduleFields: [RETENTION_SCHEDULE_FIELDS.DATA_SCOPE],
    holdFields: [DATA_HOLD_FIELDS.AUTHORITY],
    deletionScopes: [DATA_DELETION_SCOPES.PRIMARY_STORES],
    returnPortabilityFields: [DATA_RETURN_PORTABILITY_FIELDS.IDENTITY_VERIFICATION],
    individualRights: [INDIVIDUAL_RIGHTS.ACCESS],
    rightsHandlingFields: [RIGHTS_HANDLING_FIELDS.REQUEST_INTAKE],
    automatedDecisionFields: [AUTOMATED_DECISION_FIELDS.PURPOSE],
    aiDataCategories: [AI_DATA_GOVERNANCE_CATEGORIES.TRAINING_DATA],
    aiProviderDataUseFields: [AI_PROVIDER_DATA_USE_FIELDS.PURPOSE],
    agentMemoryFields: [AGENT_MEMORY_GOVERNANCE_FIELDS.PURPOSE],
    tenantDataFields: [TENANT_DATA_GOVERNANCE_FIELDS.TENANT_OWNERSHIP],
    crossTenantDataUseConditions: [CROSS_TENANT_DATA_USE_CONDITIONS.AUTHORIZED_PURPOSE],
    propertyDataFields: [PROPERTY_DATA_GOVERNANCE_FIELDS.PROPERTY_OWNER],
    supplierProcessorFields: [SUPPLIER_PROCESSOR_GOVERNANCE_FIELDS.DUE_DILIGENCE],
    privacyRiskHarms: [PRIVACY_RISK_HARMS.UNAUTHORIZED_ACCESS],
    privacyImpactAssessmentTriggers: [PRIVACY_IMPACT_ASSESSMENT_TRIGGERS.NEW_DATA_PURPOSE],
    privacyImpactAssessmentFields: [PRIVACY_IMPACT_ASSESSMENT_FIELDS.PURPOSE],
    dataProtectionByDesignControls: [DATA_PROTECTION_BY_DESIGN_CONTROLS.MINIMIZATION],
    incidentTypes: [DATA_INCIDENT_TYPES.LOSS],
    incidentAssessmentFields: [DATA_INCIDENT_ASSESSMENT_FIELDS.DATA],
    evidenceTypes: [DATA_GOVERNANCE_EVIDENCE_TYPES.OWNERSHIP],
    assuranceAreas: [PRIVACY_DATA_ASSURANCE_AREAS.INVENTORY_COMPLETENESS],
    measures: [DATA_GOVERNANCE_MEASURES.DATA_DOMAINS_WITH_OWNERS],
    qualityAttributes: [PRIVACY_DATA_GOVERNANCE_QUALITY_ATTRIBUTES.PRIVACY],
    architecturalRules: [PRIVACY_DATA_GOVERNANCE_ARCHITECTURAL_RULES.ASSIGN_ACCOUNTABLE_DATA_OWNERS],
    futureCapabilities: [FUTURE_PRIVACY_DATA_GOVERNANCE_CAPABILITIES.SEMANTIC_DATA_INVENTORIES],
    accountableOwnersRequired: false,
    purposeBeforeProcessing: false,
    dataMinimizationRequired: false,
    tenantIsolationPreserved: false,
    qualifiedInterpretationRequired: false,
    aiCreatesNoIndependentDataRights: false,
    providerConfigurationVerified: false,
    persistentMemoryRequiresPurpose: false,
    crossTenantLearningProtected: false,
    outsourcingDoesNotOutsourceAccountability: false,
    notificationDecisionsRequireQualifiedAuthority: false,
    evidenceGoverned: false,
    vendorNeutral: false,
    technologyIndependent: false,
    providesLegalAdvice: true,
    prescribesPrivacyLaw: true,
    prescribesDataPlatform: true,
    prescribesCatalogProduct: true,
    prescribesConsentProduct: true,
    prescribesResidencyTechnology: true,
    prescribesRegulatoryFramework: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /purpose-limitation/);
  assert.match(invalid.errors.join('\n'), /privacy-and-security-work-together/);
  assert.match(invalid.errors.join('\n'), /retention-rights-deletion-and-exit|Retention, Rights, Deletion, and Exit/);
  assert.match(invalid.errors.join('\n'), /ai-data-governance/);
  assert.match(invalid.errors.join('\n'), /tenant-data-authority/);
  assert.match(invalid.errors.join('\n'), /lifecycle-state/);
  assert.match(invalid.errors.join('\n'), /highly-restricted/);
  assert.match(invalid.errors.join('\n'), /derived-or-inferred/);
  assert.match(invalid.errors.join('\n'), /security-and-access/);
  assert.match(invalid.errors.join('\n'), /children-data/);
  assert.match(invalid.errors.join('\n'), /end-condition/);
  assert.match(invalid.errors.join('\n'), /withdrawal-or-objection-handling/);
  assert.match(invalid.errors.join('\n'), /Delete, Anonymize, Return, or Dispose/);
  assert.match(invalid.errors.join('\n'), /context-provided-to-ai/);
  assert.match(invalid.errors.join('\n'), /consent-or-authorization-condition/);
  assert.match(invalid.errors.join('\n'), /rights-impact/);
  assert.match(invalid.errors.join('\n'), /ai-provider/);
  assert.match(invalid.errors.join('\n'), /review-of-automated-decision/);
  assert.match(invalid.errors.join('\n'), /agent-memory/);
  assert.match(invalid.errors.join('\n'), /cross-tenant-use/);
  assert.match(invalid.errors.join('\n'), /ai-leakage/);
  assert.match(invalid.errors.join('\n'), /verifiable-deletion/);
  assert.match(invalid.errors.join('\n'), /accountable owner/);
  assert.match(invalid.errors.join('\n'), /independent rights/);
  assert.match(invalid.errors.join('\n'), /configuration must be verified/);
  assert.match(invalid.errors.join('\n'), /does not provide legal advice/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a specific privacy law/);
});

test('privacy and data governance assertion rejects incomplete metadata', () => {
  class IncompletePrivacyDataGovernanceDescriptor extends PrivacyDataGovernanceDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompletePrivacyDataGovernanceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.PRIVACY_DATA_GOVERNANCE_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('privacy and data governance descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('PrivacyDataGovernanceDescriptor');

  assert.ok(descriptor instanceof PrivacyDataGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
