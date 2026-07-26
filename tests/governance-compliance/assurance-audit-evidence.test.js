import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ASSURANCE_AUDIT_EVIDENCE_ARCHITECTURAL_RULES,
  ASSURANCE_AUDIT_EVIDENCE_OBJECTIVES,
  ASSURANCE_AUDIT_EVIDENCE_PRINCIPLES,
  ASSURANCE_EVIDENCE_TYPES,
  AssuranceAuditEvidenceDescriptor,
  AssuranceAuditEvidenceProfile,
  CHAIN_OF_CUSTODY_TRIGGERS,
  EVIDENCE_RECORD_FIELDS,
  FUTURE_ASSURANCE_AUDIT_EVIDENCE_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('assurance audit evidence exposes documented objectives, principles, evidence model, evidence types, records, roles, provenance, and integrity metadata', () => {
  const descriptor = new AssuranceAuditEvidenceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(ASSURANCE_AUDIT_EVIDENCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(ASSURANCE_AUDIT_EVIDENCE_PRINCIPLES));
  assert.equal(descriptor.evidenceModelStages().length, 7);
  assert.deepEqual(descriptor.evidenceTypes(), Object.values(ASSURANCE_EVIDENCE_TYPES));
  assert.ok(descriptor.evidenceRecordFields().includes(EVIDENCE_RECORD_FIELDS.LIFECYCLE_STATE));
  assert.ok(descriptor.evidenceRoles().includes('assurance-provider'));
  assert.ok(descriptor.provenanceFields().includes('current-version'));
  assert.ok(descriptor.chainOfCustodyTriggers().includes(CHAIN_OF_CUSTODY_TRIGGERS.HIGH_IMPACT_AI_INCIDENT));
  assert.ok(descriptor.integrityControls().includes('cryptographic-integrity'));
  assert.ok(descriptor.evidenceQualityAttributes().includes('reproducibility'));
});

test('assurance audit evidence exposes lifecycle, assurance, control assessment, testing, sampling, continuous assurance, and audit metadata', () => {
  const descriptor = new AssuranceAuditEvidenceDescriptor();

  assert.ok(descriptor.completenessDimensions().includes('ai-and-manual-activity'));
  assert.ok(descriptor.trustedTimeCorrelationAreas().includes('ai-actions'));
  assert.ok(descriptor.correlationIdentifiers().includes('tool-invocation'));
  assert.ok(descriptor.accessRequirements().includes('disclosure-control'));
  assert.ok(descriptor.minimizationFactors().includes('ai-prompts-and-outputs'));
  assert.ok(descriptor.retentionFactors().includes('legal-or-governance-hold'));
  assert.ok(descriptor.disposalScopes().includes('temporary-workspaces'));
  assert.ok(descriptor.evidenceLifecycleStages().includes('Retain, Hold, Archive, or Dispose'));
  assert.ok(descriptor.assuranceLevels().includes('independent-external-assurance'));
  assert.ok(descriptor.controlAssessmentAreas().includes('supplier-reliance'));
  assert.ok(descriptor.testMethods().includes('supplier-evidence-review'));
  assert.ok(descriptor.fullPopulationTestingValidations().includes('false-negatives'));
  assert.ok(descriptor.continuousAssuranceCapabilities().includes('finding-remediation-verification'));
  assert.ok(descriptor.auditUniverseAreas().includes('evidence-and-records'));
});

test('assurance audit evidence exposes audit reporting, attestation, reliance, supplier, domain, AI evidence, measures, rules, and future metadata', () => {
  const descriptor = new AssuranceAuditEvidenceDescriptor();

  assert.ok(descriptor.auditFindingFields().includes('closure-authority'));
  assert.ok(descriptor.managementResponseFields().includes('acceptance-authority-if-risk-remains'));
  assert.ok(descriptor.auditReportFields().includes('confidentiality'));
  assert.ok(descriptor.attestationTypes().includes('ai-governance-attestation'));
  assert.ok(descriptor.relianceEvaluationFields().includes('tenant-coverage'));
  assert.ok(descriptor.supplierAssuranceEvidenceTypes().includes('subprocessor-evidence'));
  assert.ok(descriptor.assuranceDomainAreas().includes('tenant-assurance'));
  assert.ok(descriptor.externalEvidencePackageRequirements().includes('explicit-about-limitations'));
  assert.ok(descriptor.aiEvidenceAssistanceUses().includes('finding-correlation'));
  assert.ok(descriptor.assuranceReportFields().includes('follow-up'));
  assert.ok(descriptor.measures().includes('assurance-invalidated-by-change'));
  assert.ok(descriptor.architecturalRules().includes(ASSURANCE_AUDIT_EVIDENCE_ARCHITECTURAL_RULES.PREVENT_AI_EVIDENCE_FABRICATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ASSURANCE_AUDIT_EVIDENCE_CAPABILITIES.GOVERNED_AUTONOMOUS_EVIDENCE_COLLECTION));
});

test('assurance audit evidence validates complete profiles and rejects architecture violations', () => {
  const descriptor = new AssuranceAuditEvidenceDescriptor();
  const valid = descriptor.validateProfile(completeProfile(descriptor));
  const invalid = descriptor.validateProfile({
    assuranceName: '',
    ...partialProfile(descriptor),
    evidenceDesignedNotReconstructed: false,
    evidenceFitForPurpose: false,
    provenanceRequired: false,
    chainOfCustodyProtected: false,
    independenceProportionateToRisk: false,
    assuranceNotAbsolute: false,
    auditDoesNotCreateCompliance: false,
    automatedEvidenceRequiresAssurance: false,
    continuousAssuranceSupplemental: false,
    auditIndependentOfManagementDecisions: false,
    attestationsLimitedToEvidence: false,
    relianceDocumented: false,
    supplierRiskOwnershipRetained: false,
    aiGeneratedEvidenceHumanReviewed: false,
    aiMustNotFabricateEvidence: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesLoggingProduct: true,
    prescribesGovernancePlatform: true,
    prescribesAuditTool: true,
    prescribesEvidenceRepository: true,
    prescribesCertificationScheme: true,
    prescribesAuditFirm: true,
    prescribesRegulatoryFramework: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /complete-provenance/);
  assert.match(invalid.errors.join('\n'), /automated-evidence-requires-assurance/);
  assert.match(invalid.errors.join('\n'), /ai-evidence/);
  assert.match(invalid.errors.join('\n'), /lifecycle-state/);
  assert.match(invalid.errors.join('\n'), /high-impact-ai-incident/);
  assert.match(invalid.errors.join('\n'), /supplier-evidence-review/);
  assert.match(invalid.errors.join('\n'), /assurance-invalidated-by-change/);
  assert.match(invalid.errors.join('\n'), /designed into normal execution/);
  assert.match(invalid.errors.join('\n'), /does not create compliance/);
  assert.match(invalid.errors.join('\n'), /must not fabricate/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a logging product/);
});

test('assurance audit evidence assertion rejects incomplete metadata', () => {
  class IncompleteAssuranceAuditEvidenceDescriptor extends AssuranceAuditEvidenceDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteAssuranceAuditEvidenceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.ASSURANCE_AUDIT_EVIDENCE_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('assurance audit evidence descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('AssuranceAuditEvidenceDescriptor');

  assert.ok(descriptor instanceof AssuranceAuditEvidenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  return new AssuranceAuditEvidenceProfile({
    assuranceName: 'Assurance, Audit, and Evidence',
    objectives: descriptor.objectives(),
    principles: descriptor.principles(),
    evidenceModelStages: descriptor.evidenceModelStages(),
    evidenceTypes: descriptor.evidenceTypes(),
    evidenceRecordFields: descriptor.evidenceRecordFields(),
    evidenceRoles: descriptor.evidenceRoles(),
    provenanceFields: descriptor.provenanceFields(),
    chainOfCustodyTriggers: descriptor.chainOfCustodyTriggers(),
    integrityControls: descriptor.integrityControls(),
    evidenceQualityAttributes: descriptor.evidenceQualityAttributes(),
    completenessDimensions: descriptor.completenessDimensions(),
    trustedTimeCorrelationAreas: descriptor.trustedTimeCorrelationAreas(),
    correlationIdentifiers: descriptor.correlationIdentifiers(),
    accessRequirements: descriptor.accessRequirements(),
    minimizationFactors: descriptor.minimizationFactors(),
    retentionFactors: descriptor.retentionFactors(),
    disposalScopes: descriptor.disposalScopes(),
    disclosureRecipients: descriptor.disclosureRecipients(),
    evidenceLifecycleStages: descriptor.evidenceLifecycleStages(),
    assuranceEvaluationAreas: descriptor.assuranceEvaluationAreas(),
    assuranceLevels: descriptor.assuranceLevels(),
    independenceFactors: descriptor.independenceFactors(),
    engagementFields: descriptor.engagementFields(),
    criteriaQualities: descriptor.criteriaQualities(),
    controlAssessmentAreas: descriptor.controlAssessmentAreas(),
    assessmentLifecycleStages: descriptor.assessmentLifecycleStages(),
    testMethods: descriptor.testMethods(),
    samplingFields: descriptor.samplingFields(),
    fullPopulationTestingValidations: descriptor.fullPopulationTestingValidations(),
    continuousAssuranceCapabilities: descriptor.continuousAssuranceCapabilities(),
    assuranceValidityFields: descriptor.assuranceValidityFields(),
    auditPrinciples: descriptor.auditPrinciples(),
    auditUniverseAreas: descriptor.auditUniverseAreas(),
    auditPlanningFactors: descriptor.auditPlanningFactors(),
    auditPlanFields: descriptor.auditPlanFields(),
    auditLifecycleStages: descriptor.auditLifecycleStages(),
    auditEvidenceQualities: descriptor.auditEvidenceQualities(),
    auditFindingFields: descriptor.auditFindingFields(),
    managementResponseFields: descriptor.managementResponseFields(),
    auditReportFields: descriptor.auditReportFields(),
    auditFollowUpFields: descriptor.auditFollowUpFields(),
    attestationTypes: descriptor.attestationTypes(),
    attestationRecordFields: descriptor.attestationRecordFields(),
    relianceEvaluationFields: descriptor.relianceEvaluationFields(),
    supplierAssuranceEvidenceTypes: descriptor.supplierAssuranceEvidenceTypes(),
    assuranceDomainAreas: descriptor.assuranceDomainAreas(),
    externalEvidencePackageRequirements: descriptor.externalEvidencePackageRequirements(),
    aiEvidenceAssistanceUses: descriptor.aiEvidenceAssistanceUses(),
    assuranceFindingAreas: descriptor.assuranceFindingAreas(),
    assuranceReportFields: descriptor.assuranceReportFields(),
    measures: descriptor.measures(),
    governanceAreas: descriptor.governanceAreas(),
    qualityAttributes: descriptor.qualityAttributes(),
    architecturalRules: descriptor.architecturalRules(),
    futureCapabilities: descriptor.futureCapabilities()
  });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) {
    if (Array.isArray(value)) result[key] = value.slice(0, 1);
  }
  return result;
}
