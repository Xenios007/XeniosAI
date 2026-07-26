import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  OPERATING_EFFECTIVENESS_FACTORS
} from '../constants.js';
import { ComplianceControlFrameworkProfile } from '../contracts/compliance-control-framework-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class ComplianceControlFrameworkDescriptor {
  objectives() { return values(COMPLIANCE_CONTROL_FRAMEWORK_OBJECTIVES); }
  principles() { return values(COMPLIANCE_CONTROL_FRAMEWORK_PRINCIPLES); }
  complianceModelStages() { return values(COMPLIANCE_MODEL_STAGES); }
  obligationSources() { return values(COMPLIANCE_OBLIGATION_SOURCES); }
  obligationTypes() { return values(COMPLIANCE_OBLIGATION_TYPES); }
  obligationRecordFields() { return values(COMPLIANCE_OBLIGATION_RECORD_FIELDS); }
  obligationLifecycleStages() { return values(COMPLIANCE_OBLIGATION_LIFECYCLE_STAGES); }
  applicabilityDimensions() { return values(COMPLIANCE_APPLICABILITY_DIMENSIONS); }
  applicabilityStates() { return values(COMPLIANCE_APPLICABILITY_STATES); }
  requirementFields() { return values(COMPLIANCE_REQUIREMENT_FIELDS); }
  controlObjectiveQualities() { return values(CONTROL_OBJECTIVE_QUALITIES); }
  implementationMechanisms() { return values(CONTROL_IMPLEMENTATION_MECHANISMS); }
  controlTypes() { return values(COMPLIANCE_CONTROL_TYPES); }
  executionModels() { return values(CONTROL_EXECUTION_MODELS); }
  controlFamilies() { return values(CONTROL_FAMILIES); }
  controlRecordFields() { return values(COMPLIANCE_CONTROL_RECORD_FIELDS); }
  controlDesignFields() { return values(CONTROL_DESIGN_FIELDS); }
  designEffectivenessFactors() { return values(CONTROL_DESIGN_EFFECTIVENESS_FACTORS); }
  controlTestingFields() { return values(CONTROL_TESTING_FIELDS); }
  designEffectivenessStates() { return values(DESIGN_EFFECTIVENESS_STATES); }
  operatingEffectivenessFactors() { return values(OPERATING_EFFECTIVENESS_FACTORS); }
  postureStates() { return values(COMPLIANCE_POSTURE_STATES_DETAIL); }
  continuousComplianceCapabilities() { return values(CONTINUOUS_COMPLIANCE_CAPABILITIES); }
  frameworkGovernanceFields() { return values(CONTROL_FRAMEWORK_GOVERNANCE_FIELDS); }
  controlLifecycleStages() { return values(CONTROL_LIFECYCLE_STAGES); }
  measures() { return values(COMPLIANCE_CONTROL_MEASURES); }
  qualityAttributes() { return values(COMPLIANCE_CONTROL_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(COMPLIANCE_CONTROL_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_COMPLIANCE_CONTROL_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ComplianceControlFrameworkProfile
      ? profileInput
      : new ComplianceControlFrameworkProfile(profileInput);
    const errors = [];

    if (!profile.frameworkName) errors.push('Compliance and control framework profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Compliance and Control Framework objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Compliance principles must include');
    appendMissing(errors, profile.complianceModelStages, this.complianceModelStages(), 'Compliance model must include');
    appendMissing(errors, profile.obligationSources, this.obligationSources(), 'Obligation sources must include');
    appendMissing(errors, profile.obligationTypes, this.obligationTypes(), 'Obligation types must include');
    appendMissing(errors, profile.obligationRecordFields, this.obligationRecordFields(), 'Obligation records must include');
    appendMissing(errors, profile.obligationLifecycleStages, this.obligationLifecycleStages(), 'Obligation lifecycle must include');
    appendMissing(errors, profile.applicabilityDimensions, this.applicabilityDimensions(), 'Applicability model must include');
    appendMissing(errors, profile.applicabilityStates, this.applicabilityStates(), 'Applicability states must include');
    appendMissing(errors, profile.requirementFields, this.requirementFields(), 'Compliance requirements must include');
    appendMissing(errors, profile.controlObjectiveQualities, this.controlObjectiveQualities(), 'Control objectives must be');
    appendMissing(errors, profile.implementationMechanisms, this.implementationMechanisms(), 'Controls may be implemented through');
    appendMissing(errors, profile.controlTypes, this.controlTypes(), 'Control types must include');
    appendMissing(errors, profile.executionModels, this.executionModels(), 'Control execution models must include');
    appendMissing(errors, profile.controlFamilies, this.controlFamilies(), 'Control families must include');
    appendMissing(errors, profile.controlRecordFields, this.controlRecordFields(), 'Control records must include');
    appendMissing(errors, profile.controlDesignFields, this.controlDesignFields(), 'Control design should identify');
    appendMissing(errors, profile.designEffectivenessFactors, this.designEffectivenessFactors(), 'Design effectiveness should consider');
    appendMissing(errors, profile.controlTestingFields, this.controlTestingFields(), 'Control testing should define');
    appendMissing(errors, profile.designEffectivenessStates, this.designEffectivenessStates(), 'Design-effectiveness states must include');
    appendMissing(errors, profile.operatingEffectivenessFactors, this.operatingEffectivenessFactors(), 'Operating effectiveness should consider');
    appendMissing(errors, profile.postureStates, this.postureStates(), 'Compliance posture states must include');
    appendMissing(errors, profile.continuousComplianceCapabilities, this.continuousComplianceCapabilities(), 'Continuous compliance capabilities must include');
    appendMissing(errors, profile.frameworkGovernanceFields, this.frameworkGovernanceFields(), 'Control framework governance requires');
    appendMissing(errors, profile.controlLifecycleStages, this.controlLifecycleStages(), 'Control lifecycle must include');
    appendMissing(errors, profile.measures, this.measures(), 'Compliance and control measures must include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Compliance and Control Framework quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Compliance and Control Framework architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future Compliance and Control capabilities must include');
    if (profile.obligationBeforeControl !== true) errors.push('The enterprise must understand the obligation before selecting a control.');
    if (profile.qualifiedInterpretationRequired !== true) errors.push('Qualified interpretation remains an accountable human responsibility.');
    if (profile.reusableControlsPreserveApplicability !== true) errors.push('Control reuse must preserve obligation-specific applicability, evidence, and assurance.');
    if (profile.controlsOutcomeBased !== true) errors.push('Control objectives must be outcome based.');
    if (profile.evidenceByDesign !== true) errors.push('Controls should generate reliable evidence as part of normal execution.');
    if (profile.effectivenessDemonstrated !== true) errors.push('Control effectiveness must be demonstrated.');
    if (profile.applicabilityExplicit !== true) errors.push('Obligation and control applicability must be explicit.');
    if (profile.complianceContinuous !== true) errors.push('Compliance must be monitored and reassessed continuously.');
    if (profile.sourceVersionedAuthoritative !== true) errors.push('Obligation sources must be versioned and authoritative.');
    if (profile.notApplicableRequiresEvidence !== true) errors.push('Not-applicable conclusions must identify authority, criteria, evidence, and review trigger.');
    if (profile.inheritedControlVerificationRequired !== true) errors.push('Control inheritance must not become assumed compliance without verification.');
    if (profile.controlOwnershipRetained !== true) errors.push('Control ownership must remain within XeniosAI even when operation is outsourced.');
    if (profile.automatedEvidencePurposeAuthorized !== true) errors.push('Automated evidence must not collect excessive sensitive data without purpose and authorization.');
    if (profile.postureContextPreserved !== true) errors.push('Compliance posture must preserve context and not be reduced to one unexplained percentage.');
    if (profile.continuousMonitoringNotAuditReplacement !== true) errors.push('Continuous monitoring does not replace qualified interpretation or independent audit.');
    if (profile.unsupportedComplianceClaimsForbidden !== true) errors.push('Unsupported compliance or certification claims are forbidden.');
    if (profile.vendorNeutral !== true) errors.push('Compliance and Control Framework must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Compliance and Control Framework must remain technology independent.');
    if (profile.providesLegalAdvice === true) errors.push('Compliance and Control Framework does not provide legal advice.');
    if (profile.certifiesCompliance === true) errors.push('Compliance and Control Framework does not certify compliance.');
    if (profile.prescribesRegulatoryStandard === true) errors.push('Compliance and Control Framework does not prescribe a regulatory standard.');
    if (profile.prescribesAuditFramework === true) errors.push('Compliance and Control Framework does not prescribe an audit framework.');
    if (profile.prescribesGovernanceProduct === true) errors.push('Compliance and Control Framework does not prescribe a governance product.');
    if (profile.prescribesJurisdiction === true) errors.push('Compliance and Control Framework does not prescribe a jurisdiction.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    assertLength(errors, this.objectives(), 17, 'objectives');
    assertLength(errors, this.principles(), 8, 'principles');
    assertLength(errors, this.complianceModelStages(), 9, 'compliance model stages');
    assertLength(errors, this.obligationSources(), 19, 'obligation sources');
    assertLength(errors, this.obligationTypes(), 8, 'obligation types');
    assertLength(errors, this.obligationRecordFields(), 32, 'obligation record fields');
    assertLength(errors, this.obligationLifecycleStages(), 10, 'obligation lifecycle stages');
    assertLength(errors, this.applicabilityDimensions(), 19, 'applicability dimensions');
    assertLength(errors, this.applicabilityStates(), 8, 'applicability states');
    assertLength(errors, this.requirementFields(), 12, 'requirement fields');
    assertLength(errors, this.controlObjectiveQualities(), 8, 'control objective qualities');
    assertLength(errors, this.implementationMechanisms(), 17, 'implementation mechanisms');
    assertLength(errors, this.controlTypes(), 7, 'control types');
    assertLength(errors, this.executionModels(), 14, 'execution models');
    assertLength(errors, this.controlFamilies(), 12, 'control families');
    assertLength(errors, this.controlRecordFields(), 30, 'control record fields');
    assertLength(errors, this.controlDesignFields(), 17, 'control design fields');
    assertLength(errors, this.designEffectivenessFactors(), 14, 'design effectiveness factors');
    assertLength(errors, this.controlTestingFields(), 15, 'control testing fields');
    assertLength(errors, this.designEffectivenessStates(), 6, 'design effectiveness states');
    assertLength(errors, this.operatingEffectivenessFactors(), 11, 'operating effectiveness factors');
    assertLength(errors, this.postureStates(), 14, 'posture states');
    assertLength(errors, this.continuousComplianceCapabilities(), 11, 'continuous compliance capabilities');
    assertLength(errors, this.frameworkGovernanceFields(), 14, 'framework governance fields');
    assertLength(errors, this.controlLifecycleStages(), 7, 'control lifecycle stages');
    assertLength(errors, this.measures(), 18, 'measures');
    assertLength(errors, this.qualityAttributes(), 12, 'quality attributes');
    assertLength(errors, this.architecturalRules(), 19, 'architectural rules');
    assertLength(errors, this.futureCapabilities(), 14, 'future capabilities');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.COMPLIANCE_CONTROL_FRAMEWORK_INVALID,
        'Compliance and Control Framework violates ARCH-012-05.',
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
  if (actual.length !== expected) errors.push(`Compliance and Control Framework must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
