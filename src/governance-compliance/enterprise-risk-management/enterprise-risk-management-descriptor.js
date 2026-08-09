import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  CONCENTRATION_RISK_SOURCES,
  CONTROL_EFFECTIVENESS_FACTORS,
  DEPENDENCY_RISK_FIELDS,
  EMERGING_RISK_SOURCES,
  ENTERPRISE_RISK_MANAGEMENT_ARCHITECTURAL_RULES,
  ENTERPRISE_RISK_MANAGEMENT_OBJECTIVES,
  ENTERPRISE_RISK_MANAGEMENT_PRINCIPLES,
  ENTERPRISE_RISK_MANAGEMENT_QUALITY_ATTRIBUTES,
  FUTURE_ENTERPRISE_RISK_MANAGEMENT_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  IMPACT_FACTORS,
  LIKELIHOOD_FACTORS,
  RESIDUAL_RISK_FACTORS,
  RISK_ACCEPTANCE_FIELDS,
  RISK_AGGREGATION_DIMENSIONS,
  RISK_APPETITE_FACTORS,
  RISK_APPETITE_HIERARCHY_LEVELS,
  RISK_ESCALATION_TRIGGERS,
  RISK_IDENTIFICATION_SOURCES,
  RISK_INDICATORS,
  RISK_LIFECYCLE_STAGES,
  RISK_MEASURES,
  RISK_MODEL_STAGES,
  RISK_RECORD_FIELDS,
  RISK_REGISTER_CAPABILITIES,
  RISK_TAXONOMY_CATEGORIES,
  RISK_TOLERANCE_EXPRESSIONS,
  RISK_TREATMENT_PLAN_FIELDS,
  RISK_TREATMENT_STRATEGIES
} from '../constants.js';
import { EnterpriseRiskManagementProfile } from '../contracts/enterprise-risk-management-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class EnterpriseRiskManagementDescriptor {
  objectives() { return values(ENTERPRISE_RISK_MANAGEMENT_OBJECTIVES); }
  principles() { return values(ENTERPRISE_RISK_MANAGEMENT_PRINCIPLES); }
  riskModelStages() { return values(RISK_MODEL_STAGES); }
  taxonomyCategories() { return values(RISK_TAXONOMY_CATEGORIES); }
  appetiteFactors() { return values(RISK_APPETITE_FACTORS); }
  toleranceExpressions() { return values(RISK_TOLERANCE_EXPRESSIONS); }
  appetiteHierarchyLevels() { return values(RISK_APPETITE_HIERARCHY_LEVELS); }
  identificationSources() { return values(RISK_IDENTIFICATION_SOURCES); }
  recordFields() { return values(RISK_RECORD_FIELDS); }
  lifecycleStages() { return values(RISK_LIFECYCLE_STAGES); }
  controlEffectivenessFactors() { return values(CONTROL_EFFECTIVENESS_FACTORS); }
  residualRiskFactors() { return values(RESIDUAL_RISK_FACTORS); }
  likelihoodFactors() { return values(LIKELIHOOD_FACTORS); }
  impactFactors() { return values(IMPACT_FACTORS); }
  treatmentStrategies() { return values(RISK_TREATMENT_STRATEGIES); }
  treatmentPlanFields() { return values(RISK_TREATMENT_PLAN_FIELDS); }
  acceptanceFields() { return values(RISK_ACCEPTANCE_FIELDS); }
  escalationTriggers() { return values(RISK_ESCALATION_TRIGGERS); }
  aggregationDimensions() { return values(RISK_AGGREGATION_DIMENSIONS); }
  concentrationSources() { return values(CONCENTRATION_RISK_SOURCES); }
  dependencyFields() { return values(DEPENDENCY_RISK_FIELDS); }
  emergingRiskSources() { return values(EMERGING_RISK_SOURCES); }
  indicators() { return values(RISK_INDICATORS); }
  registerCapabilities() { return values(RISK_REGISTER_CAPABILITIES); }
  measures() { return values(RISK_MEASURES); }
  qualityAttributes() { return values(ENTERPRISE_RISK_MANAGEMENT_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(ENTERPRISE_RISK_MANAGEMENT_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_ENTERPRISE_RISK_MANAGEMENT_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof EnterpriseRiskManagementProfile
      ? profileInput
      : new EnterpriseRiskManagementProfile(profileInput);
    const errors = [];

    if (!profile.riskManagementName) errors.push('Enterprise risk management profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Enterprise Risk Management objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Risk principles must include');
    appendMissing(errors, profile.riskModelStages, this.riskModelStages(), 'Risk model must include');
    appendMissing(errors, profile.taxonomyCategories, this.taxonomyCategories(), 'Risk taxonomy must include');
    appendMissing(errors, profile.appetiteFactors, this.appetiteFactors(), 'Risk appetite should consider');
    appendMissing(errors, profile.toleranceExpressions, this.toleranceExpressions(), 'Risk tolerance may be expressed through');
    appendMissing(errors, profile.appetiteHierarchyLevels, this.appetiteHierarchyLevels(), 'Risk appetite hierarchy must include');
    appendMissing(errors, profile.identificationSources, this.identificationSources(), 'Risk identification sources must include');
    appendMissing(errors, profile.recordFields, this.recordFields(), 'Risk record should include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'Risk lifecycle must include');
    appendMissing(errors, profile.controlEffectivenessFactors, this.controlEffectivenessFactors(), 'Control effectiveness should assess');
    appendMissing(errors, profile.residualRiskFactors, this.residualRiskFactors(), 'Residual risk assessment must include');
    appendMissing(errors, profile.likelihoodFactors, this.likelihoodFactors(), 'Likelihood may consider');
    appendMissing(errors, profile.impactFactors, this.impactFactors(), 'Impact may include');
    appendMissing(errors, profile.treatmentStrategies, this.treatmentStrategies(), 'Risk treatment strategies must include');
    appendMissing(errors, profile.treatmentPlanFields, this.treatmentPlanFields(), 'Risk treatment plan should define');
    appendMissing(errors, profile.acceptanceFields, this.acceptanceFields(), 'Risk acceptance must include');
    appendMissing(errors, profile.escalationTriggers, this.escalationTriggers(), 'Risk escalation should occur when');
    appendMissing(errors, profile.aggregationDimensions, this.aggregationDimensions(), 'Risk aggregation must evaluate');
    appendMissing(errors, profile.concentrationSources, this.concentrationSources(), 'Concentration risk may arise from');
    appendMissing(errors, profile.dependencyFields, this.dependencyFields(), 'Dependency risk should identify');
    appendMissing(errors, profile.emergingRiskSources, this.emergingRiskSources(), 'Emerging risk sources must include');
    appendMissing(errors, profile.indicators, this.indicators(), 'Risk indicators may include');
    appendMissing(errors, profile.registerCapabilities, this.registerCapabilities(), 'Risk register should support');
    appendMissing(errors, profile.measures, this.measures(), 'Risk measures may include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Enterprise Risk Management quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Enterprise Risk Management architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future Enterprise Risk Management capabilities must include');
    if (profile.riskConnectedToObjective !== true) errors.push('Risk must be connected to an enterprise objective.');
    if (profile.oneRiskOwnerRequired !== true) errors.push('Every material risk must have one accountable Risk Owner.');
    if (profile.appetiteWithinCapacity !== true) errors.push('Risk appetite must remain within risk capacity.');
    if (profile.inherentResidualDistinct !== true) errors.push('Inherent and residual risk must remain distinct.');
    if (profile.evidenceSupportsAssessment !== true) errors.push('Risk assessments should identify evidence, assumptions, uncertainty, time horizon, and limitations.');
    if (profile.treatmentProportionate !== true) errors.push('Risk treatment must be proportionate.');
    if (profile.passiveAcceptanceForbidden !== true) errors.push('Risk must not be accepted passively through delay or inaction.');
    if (profile.acceptanceAuthorityExplicit !== true) errors.push('Risk acceptance requires explicit authority.');
    if (profile.aggregationRequired !== true) errors.push('Risk aggregation must evaluate combined exposure.');
    if (profile.closureRequiresEvidenceAndAuthority !== true) errors.push('Risk closure requires evidence and authority.');
    if (profile.complianceNotReducedToProbabilityImpact !== true) errors.push('Compliance obligations may not be reduced to a probability-impact score.');
    if (profile.vendorNeutral !== true) errors.push('Enterprise Risk Management must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Enterprise Risk Management must remain technology independent.');
    if (profile.prescribesRiskManagementProduct === true) errors.push('Enterprise Risk Management does not prescribe a risk-management product.');
    if (profile.prescribesQuantitativeModel === true) errors.push('Enterprise Risk Management does not prescribe a quantitative model.');
    if (profile.prescribesScoringMethod === true) errors.push('Enterprise Risk Management does not prescribe a scoring method.');
    if (profile.prescribesInsuranceArrangement === true) errors.push('Enterprise Risk Management does not prescribe an insurance arrangement.');
    if (profile.prescribesRegulatoryFramework === true) errors.push('Enterprise Risk Management does not prescribe a regulatory framework.');
    if (profile.providesFinancialModels === true) errors.push('Specific financial models are outside Enterprise Risk Management scope.');
    if (profile.providesLegalConclusions === true) errors.push('Legal conclusions are outside Enterprise Risk Management scope.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    assertLength(errors, this.objectives(), 16, 'objectives');
    assertLength(errors, this.principles(), 9, 'principles');
    assertLength(errors, this.riskModelStages(), 8, 'risk model stages');
    assertLength(errors, this.taxonomyCategories(), 17, 'taxonomy categories');
    assertLength(errors, this.appetiteFactors(), 14, 'appetite factors');
    assertLength(errors, this.toleranceExpressions(), 12, 'tolerance expressions');
    assertLength(errors, this.appetiteHierarchyLevels(), 5, 'appetite hierarchy levels');
    assertLength(errors, this.identificationSources(), 21, 'identification sources');
    assertLength(errors, this.recordFields(), 34, 'risk record fields');
    assertLength(errors, this.lifecycleStages(), 10, 'lifecycle stages');
    assertLength(errors, this.controlEffectivenessFactors(), 11, 'control effectiveness factors');
    assertLength(errors, this.residualRiskFactors(), 8, 'residual risk factors');
    assertLength(errors, this.likelihoodFactors(), 12, 'likelihood factors');
    assertLength(errors, this.impactFactors(), 17, 'impact factors');
    assertLength(errors, this.treatmentStrategies(), 6, 'treatment strategies');
    assertLength(errors, this.treatmentPlanFields(), 16, 'treatment plan fields');
    assertLength(errors, this.acceptanceFields(), 15, 'acceptance fields');
    assertLength(errors, this.escalationTriggers(), 13, 'escalation triggers');
    assertLength(errors, this.aggregationDimensions(), 13, 'aggregation dimensions');
    assertLength(errors, this.concentrationSources(), 13, 'concentration sources');
    assertLength(errors, this.dependencyFields(), 11, 'dependency fields');
    assertLength(errors, this.emergingRiskSources(), 12, 'emerging risk sources');
    assertLength(errors, this.indicators(), 16, 'risk indicators');
    assertLength(errors, this.registerCapabilities(), 14, 'risk register capabilities');
    assertLength(errors, this.measures(), 15, 'risk measures');
    assertLength(errors, this.qualityAttributes(), 12, 'quality attributes');
    assertLength(errors, this.architecturalRules(), 18, 'architectural rules');
    assertLength(errors, this.futureCapabilities(), 12, 'future capabilities');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.ENTERPRISE_RISK_MANAGEMENT_INVALID,
        'Enterprise Risk Management violates ARCH-012-04.',
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
  if (actual.length !== expected) errors.push(`Enterprise Risk Management must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
