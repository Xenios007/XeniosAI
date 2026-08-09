import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  COMPLIANCE_APPLICABILITY_DIMENSIONS,
  COMPLIANCE_APPLICABILITY_STATES,
  COMPLIANCE_CONTROL_ARCHITECTURAL_RULES,
  COMPLIANCE_CONTROL_FRAMEWORK_OBJECTIVES,
  COMPLIANCE_CONTROL_FRAMEWORK_PRINCIPLES,
  COMPLIANCE_CONTROL_MEASURES,
  COMPLIANCE_CONTROL_QUALITY_ATTRIBUTES,
  COMPLIANCE_CONTROL_RECORD_FIELDS,
  COMPLIANCE_CONTROL_TYPES,
  COMPLIANCE_MODEL_STAGES,
  COMPLIANCE_OBLIGATION_LIFECYCLE_STAGES,
  COMPLIANCE_OBLIGATION_RECORD_FIELDS,
  COMPLIANCE_OBLIGATION_SOURCES,
  COMPLIANCE_OBLIGATION_TYPES,
  COMPLIANCE_POSTURE_STATES_DETAIL,
  COMPLIANCE_REQUIREMENT_FIELDS,
  ComplianceControlFrameworkDescriptor,
  ComplianceControlFrameworkProfile,
  CONTINUOUS_COMPLIANCE_CAPABILITIES,
  CONTROL_DESIGN_EFFECTIVENESS_FACTORS,
  CONTROL_DESIGN_FIELDS,
  CONTROL_EXECUTION_MODELS,
  CONTROL_FAMILIES,
  CONTROL_FRAMEWORK_GOVERNANCE_FIELDS,
  CONTROL_IMPLEMENTATION_MECHANISMS,
  CONTROL_LIFECYCLE_STAGES,
  CONTROL_OBJECTIVE_QUALITIES,
  CONTROL_TESTING_FIELDS,
  DESIGN_EFFECTIVENESS_STATES,
  FUTURE_COMPLIANCE_CONTROL_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  OPERATING_EFFECTIVENESS_FACTORS,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('compliance control framework exposes documented objectives, principles, model, obligations, and applicability', () => {
  const descriptor = new ComplianceControlFrameworkDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(COMPLIANCE_CONTROL_FRAMEWORK_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(COMPLIANCE_CONTROL_FRAMEWORK_PRINCIPLES));
  assert.deepEqual(descriptor.complianceModelStages(), Object.values(COMPLIANCE_MODEL_STAGES));
  assert.deepEqual(descriptor.obligationSources(), Object.values(COMPLIANCE_OBLIGATION_SOURCES));
  assert.deepEqual(descriptor.obligationTypes(), Object.values(COMPLIANCE_OBLIGATION_TYPES));
  assert.ok(descriptor.obligationRecordFields().includes(COMPLIANCE_OBLIGATION_RECORD_FIELDS.CHANGE_TRIGGERS));
  assert.ok(descriptor.obligationLifecycleStages().includes(COMPLIANCE_OBLIGATION_LIFECYCLE_STAGES.UPDATE_SUPERSEDE_OR_RETIRE));
  assert.ok(descriptor.applicabilityDimensions().includes(COMPLIANCE_APPLICABILITY_DIMENSIONS.REVENUE_OR_SIZE_THRESHOLD));
  assert.ok(descriptor.applicabilityStates().includes(COMPLIANCE_APPLICABILITY_STATES.INTERPRETATION_REQUIRED));
});

test('compliance control framework exposes requirements, control objectives, implementation, execution, design, and testing metadata', () => {
  const descriptor = new ComplianceControlFrameworkDescriptor();

  assert.ok(descriptor.requirementFields().includes(COMPLIANCE_REQUIREMENT_FIELDS.ASSESSMENT_CRITERIA));
  assert.ok(descriptor.controlObjectiveQualities().includes(CONTROL_OBJECTIVE_QUALITIES.STABLE_FOR_REUSE));
  assert.ok(descriptor.implementationMechanisms().includes(CONTROL_IMPLEMENTATION_MECHANISMS.AUTOMATED_POLICY));
  assert.ok(descriptor.controlTypes().includes(COMPLIANCE_CONTROL_TYPES.COMPENSATING));
  assert.ok(descriptor.executionModels().includes(CONTROL_EXECUTION_MODELS.PROPERTY_OPERATED));
  assert.ok(descriptor.controlFamilies().includes(CONTROL_FAMILIES.EVIDENCE_AND_ASSURANCE));
  assert.ok(descriptor.controlRecordFields().includes(COMPLIANCE_CONTROL_RECORD_FIELDS.VERSION));
  assert.ok(descriptor.controlDesignFields().includes(CONTROL_DESIGN_FIELDS.LIFECYCLE));
  assert.ok(descriptor.designEffectivenessFactors().includes(CONTROL_DESIGN_EFFECTIVENESS_FACTORS.SUPPLIER_RELIANCE));
  assert.ok(descriptor.controlTestingFields().includes(CONTROL_TESTING_FIELDS.RETEST));
});

test('compliance control framework exposes effectiveness, posture, continuous compliance, governance, measures, rules, and future metadata', () => {
  const descriptor = new ComplianceControlFrameworkDescriptor();

  assert.ok(descriptor.designEffectivenessStates().includes(DESIGN_EFFECTIVENESS_STATES.ASSESSMENT_OVERDUE));
  assert.ok(descriptor.operatingEffectivenessFactors().includes(OPERATING_EFFECTIVENESS_FACTORS.TENANT_OR_SCOPE_GAPS));
  assert.ok(descriptor.postureStates().includes(COMPLIANCE_POSTURE_STATES_DETAIL.OBLIGATION_CHANGE_PENDING));
  assert.ok(descriptor.continuousComplianceCapabilities().includes(CONTINUOUS_COMPLIANCE_CAPABILITIES.ASSURANCE_VALIDITY));
  assert.ok(descriptor.frameworkGovernanceFields().includes(CONTROL_FRAMEWORK_GOVERNANCE_FIELDS.REPORTING));
  assert.ok(descriptor.controlLifecycleStages().includes(CONTROL_LIFECYCLE_STAGES.IMPROVE_REPLACE_OR_RETIRE));
  assert.ok(descriptor.measures().includes(COMPLIANCE_CONTROL_MEASURES.OBLIGATION_CHANGE_RESPONSE));
  assert.ok(descriptor.qualityAttributes().includes(COMPLIANCE_CONTROL_QUALITY_ATTRIBUTES.REUSABILITY));
  assert.ok(descriptor.architecturalRules().includes(COMPLIANCE_CONTROL_ARCHITECTURAL_RULES.AVOID_UNSUPPORTED_COMPLIANCE_CLAIMS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMPLIANCE_CONTROL_CAPABILITIES.GOVERNED_AUTONOMOUS_REMEDIATION));
});

test('compliance control framework validates complete profiles and rejects architecture violations', () => {
  const descriptor = new ComplianceControlFrameworkDescriptor();
  const valid = descriptor.validateProfile(new ComplianceControlFrameworkProfile({
    frameworkName: 'Compliance and Control Framework',
    objectives: Object.values(COMPLIANCE_CONTROL_FRAMEWORK_OBJECTIVES),
    principles: Object.values(COMPLIANCE_CONTROL_FRAMEWORK_PRINCIPLES),
    complianceModelStages: Object.values(COMPLIANCE_MODEL_STAGES),
    obligationSources: Object.values(COMPLIANCE_OBLIGATION_SOURCES),
    obligationTypes: Object.values(COMPLIANCE_OBLIGATION_TYPES),
    obligationRecordFields: Object.values(COMPLIANCE_OBLIGATION_RECORD_FIELDS),
    obligationLifecycleStages: Object.values(COMPLIANCE_OBLIGATION_LIFECYCLE_STAGES),
    applicabilityDimensions: Object.values(COMPLIANCE_APPLICABILITY_DIMENSIONS),
    applicabilityStates: Object.values(COMPLIANCE_APPLICABILITY_STATES),
    requirementFields: Object.values(COMPLIANCE_REQUIREMENT_FIELDS),
    controlObjectiveQualities: Object.values(CONTROL_OBJECTIVE_QUALITIES),
    implementationMechanisms: Object.values(CONTROL_IMPLEMENTATION_MECHANISMS),
    controlTypes: Object.values(COMPLIANCE_CONTROL_TYPES),
    executionModels: Object.values(CONTROL_EXECUTION_MODELS),
    controlFamilies: Object.values(CONTROL_FAMILIES),
    controlRecordFields: Object.values(COMPLIANCE_CONTROL_RECORD_FIELDS),
    controlDesignFields: Object.values(CONTROL_DESIGN_FIELDS),
    designEffectivenessFactors: Object.values(CONTROL_DESIGN_EFFECTIVENESS_FACTORS),
    controlTestingFields: Object.values(CONTROL_TESTING_FIELDS),
    designEffectivenessStates: Object.values(DESIGN_EFFECTIVENESS_STATES),
    operatingEffectivenessFactors: Object.values(OPERATING_EFFECTIVENESS_FACTORS),
    postureStates: Object.values(COMPLIANCE_POSTURE_STATES_DETAIL),
    continuousComplianceCapabilities: Object.values(CONTINUOUS_COMPLIANCE_CAPABILITIES),
    frameworkGovernanceFields: Object.values(CONTROL_FRAMEWORK_GOVERNANCE_FIELDS),
    controlLifecycleStages: Object.values(CONTROL_LIFECYCLE_STAGES),
    measures: Object.values(COMPLIANCE_CONTROL_MEASURES),
    qualityAttributes: Object.values(COMPLIANCE_CONTROL_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(COMPLIANCE_CONTROL_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_COMPLIANCE_CONTROL_CAPABILITIES)
  }));
  const invalid = descriptor.validateProfile({
    frameworkName: '',
    objectives: [COMPLIANCE_CONTROL_FRAMEWORK_OBJECTIVES.TRACEABLE_OBLIGATIONS],
    principles: [COMPLIANCE_CONTROL_FRAMEWORK_PRINCIPLES.OBLIGATION_BEFORE_CONTROL],
    complianceModelStages: [COMPLIANCE_MODEL_STAGES.OBLIGATION_SOURCE],
    obligationSources: [COMPLIANCE_OBLIGATION_SOURCES.LAWS],
    obligationTypes: [COMPLIANCE_OBLIGATION_TYPES.LEGAL],
    obligationRecordFields: [COMPLIANCE_OBLIGATION_RECORD_FIELDS.OBLIGATION_IDENTIFIER],
    obligationLifecycleStages: [COMPLIANCE_OBLIGATION_LIFECYCLE_STAGES.DISCOVER],
    applicabilityDimensions: [COMPLIANCE_APPLICABILITY_DIMENSIONS.LEGAL_ENTITY],
    applicabilityStates: [COMPLIANCE_APPLICABILITY_STATES.APPLICABLE],
    requirementFields: [COMPLIANCE_REQUIREMENT_FIELDS.REQUIRED_OUTCOME],
    controlObjectiveQualities: [CONTROL_OBJECTIVE_QUALITIES.PURPOSEFUL],
    implementationMechanisms: [CONTROL_IMPLEMENTATION_MECHANISMS.ARCHITECTURE],
    controlTypes: [COMPLIANCE_CONTROL_TYPES.PREVENTIVE],
    executionModels: [CONTROL_EXECUTION_MODELS.MANUAL],
    controlFamilies: [CONTROL_FAMILIES.GOVERNANCE_AND_ACCOUNTABILITY],
    controlRecordFields: [COMPLIANCE_CONTROL_RECORD_FIELDS.CONTROL_IDENTIFIER],
    controlDesignFields: [CONTROL_DESIGN_FIELDS.EXPECTED_OUTCOME],
    designEffectivenessFactors: [CONTROL_DESIGN_EFFECTIVENESS_FACTORS.COVERAGE],
    controlTestingFields: [CONTROL_TESTING_FIELDS.OBJECTIVE],
    designEffectivenessStates: [DESIGN_EFFECTIVENESS_STATES.EFFECTIVE],
    operatingEffectivenessFactors: [OPERATING_EFFECTIVENESS_FACTORS.EXECUTION_FREQUENCY],
    postureStates: [COMPLIANCE_POSTURE_STATES_DETAIL.APPLICABLE_AND_SATISFIED],
    continuousComplianceCapabilities: [CONTINUOUS_COMPLIANCE_CAPABILITIES.APPLICABILITY_MONITORING],
    frameworkGovernanceFields: [CONTROL_FRAMEWORK_GOVERNANCE_FIELDS.FRAMEWORK_OWNER],
    controlLifecycleStages: [CONTROL_LIFECYCLE_STAGES.IDENTIFY_OBJECTIVE],
    measures: [COMPLIANCE_CONTROL_MEASURES.OBLIGATIONS_WITH_OWNERS],
    qualityAttributes: [COMPLIANCE_CONTROL_QUALITY_ATTRIBUTES.TRACEABILITY],
    architecturalRules: [COMPLIANCE_CONTROL_ARCHITECTURAL_RULES.IDENTIFY_AUTHORITATIVE_OBLIGATION_SOURCES],
    futureCapabilities: [FUTURE_COMPLIANCE_CONTROL_CAPABILITIES.MACHINE_READABLE_OBLIGATIONS],
    obligationBeforeControl: false,
    qualifiedInterpretationRequired: false,
    reusableControlsPreserveApplicability: false,
    controlsOutcomeBased: false,
    evidenceByDesign: false,
    effectivenessDemonstrated: false,
    applicabilityExplicit: false,
    complianceContinuous: false,
    sourceVersionedAuthoritative: false,
    notApplicableRequiresEvidence: false,
    inheritedControlVerificationRequired: false,
    controlOwnershipRetained: false,
    automatedEvidencePurposeAuthorized: false,
    postureContextPreserved: false,
    continuousMonitoringNotAuditReplacement: false,
    unsupportedComplianceClaimsForbidden: false,
    vendorNeutral: false,
    technologyIndependent: false,
    providesLegalAdvice: true,
    certifiesCompliance: true,
    prescribesRegulatoryStandard: true,
    prescribesAuditFramework: true,
    prescribesGovernanceProduct: true,
    prescribesJurisdiction: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /explicit-applicability/);
  assert.match(invalid.errors.join('\n'), /Compliance Posture, Finding, or Remediation/);
  assert.match(invalid.errors.join('\n'), /risk-treatment-decisions/);
  assert.match(invalid.errors.join('\n'), /service-obligation/);
  assert.match(invalid.errors.join('\n'), /change-triggers/);
  assert.match(invalid.errors.join('\n'), /Update, Supersede, or Retire/);
  assert.match(invalid.errors.join('\n'), /revenue-or-size-threshold/);
  assert.match(invalid.errors.join('\n'), /interpretation-required/);
  assert.match(invalid.errors.join('\n'), /assessment-criteria/);
  assert.match(invalid.errors.join('\n'), /stable-enough-for-reuse/);
  assert.match(invalid.errors.join('\n'), /automated-policy/);
  assert.match(invalid.errors.join('\n'), /compensating-control/);
  assert.match(invalid.errors.join('\n'), /property-operated/);
  assert.match(invalid.errors.join('\n'), /evidence-and-assurance/);
  assert.match(invalid.errors.join('\n'), /version/);
  assert.match(invalid.errors.join('\n'), /supplier-reliance/);
  assert.match(invalid.errors.join('\n'), /retest/);
  assert.match(invalid.errors.join('\n'), /assessment-overdue/);
  assert.match(invalid.errors.join('\n'), /tenant-or-scope-gaps/);
  assert.match(invalid.errors.join('\n'), /obligation-change-pending/);
  assert.match(invalid.errors.join('\n'), /assurance-validity/);
  assert.match(invalid.errors.join('\n'), /obligation-change-response/);
  assert.match(invalid.errors.join('\n'), /governed-autonomous-remediation/);
  assert.match(invalid.errors.join('\n'), /obligation before selecting a control/);
  assert.match(invalid.errors.join('\n'), /assumed compliance without verification/);
  assert.match(invalid.errors.join('\n'), /one unexplained percentage/);
  assert.match(invalid.errors.join('\n'), /does not provide legal advice/);
  assert.match(invalid.errors.join('\n'), /does not certify compliance/);
});

test('compliance control framework assertion rejects incomplete metadata', () => {
  class IncompleteComplianceControlFrameworkDescriptor extends ComplianceControlFrameworkDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteComplianceControlFrameworkDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.COMPLIANCE_CONTROL_FRAMEWORK_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('compliance control framework descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ComplianceControlFrameworkDescriptor');

  assert.ok(descriptor instanceof ComplianceControlFrameworkDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
