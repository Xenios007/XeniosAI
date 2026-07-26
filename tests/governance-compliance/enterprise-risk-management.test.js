import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CONCENTRATION_RISK_SOURCES,
  CONTROL_EFFECTIVENESS_FACTORS,
  DEPENDENCY_RISK_FIELDS,
  EMERGING_RISK_SOURCES,
  ENTERPRISE_RISK_MANAGEMENT_ARCHITECTURAL_RULES,
  ENTERPRISE_RISK_MANAGEMENT_OBJECTIVES,
  ENTERPRISE_RISK_MANAGEMENT_PRINCIPLES,
  ENTERPRISE_RISK_MANAGEMENT_QUALITY_ATTRIBUTES,
  EnterpriseRiskManagementDescriptor,
  EnterpriseRiskManagementProfile,
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
  RISK_TREATMENT_STRATEGIES,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('enterprise risk management exposes documented objectives, principles, model, taxonomy, appetite, and tolerance', () => {
  const descriptor = new EnterpriseRiskManagementDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(ENTERPRISE_RISK_MANAGEMENT_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(ENTERPRISE_RISK_MANAGEMENT_PRINCIPLES));
  assert.deepEqual(descriptor.riskModelStages(), Object.values(RISK_MODEL_STAGES));
  assert.deepEqual(descriptor.taxonomyCategories(), Object.values(RISK_TAXONOMY_CATEGORIES));
  assert.deepEqual(descriptor.appetiteFactors(), Object.values(RISK_APPETITE_FACTORS));
  assert.deepEqual(descriptor.toleranceExpressions(), Object.values(RISK_TOLERANCE_EXPRESSIONS));
});

test('enterprise risk management exposes risk records, lifecycle, assessment factors, treatment, acceptance, and escalation', () => {
  const descriptor = new EnterpriseRiskManagementDescriptor();

  assert.ok(descriptor.appetiteHierarchyLevels().includes(RISK_APPETITE_HIERARCHY_LEVELS.SERVICE_AI_DATA_WORKFLOW_AND_SUPPLIER_BOUNDARIES));
  assert.ok(descriptor.identificationSources().includes(RISK_IDENTIFICATION_SOURCES.SCENARIO_ANALYSIS));
  assert.ok(descriptor.recordFields().includes(RISK_RECORD_FIELDS.UNCERTAINTY));
  assert.ok(descriptor.lifecycleStages().includes(RISK_LIFECYCLE_STAGES.TREAT_ACCEPT_AVOID_TRANSFER_OR_ESCALATE));
  assert.ok(descriptor.controlEffectivenessFactors().includes(CONTROL_EFFECTIVENESS_FACTORS.KNOWN_EXCEPTIONS));
  assert.ok(descriptor.residualRiskFactors().includes(RESIDUAL_RISK_FACTORS.CHANGE_SINCE_LAST_REVIEW));
  assert.ok(descriptor.likelihoodFactors().includes(LIKELIHOOD_FACTORS.AI_UNCERTAINTY));
  assert.ok(descriptor.impactFactors().includes(IMPACT_FACTORS.STRATEGIC_DELAY));
  assert.ok(descriptor.treatmentStrategies().includes(RISK_TREATMENT_STRATEGIES.MONITOR));
  assert.ok(descriptor.treatmentPlanFields().includes(RISK_TREATMENT_PLAN_FIELDS.EXPECTED_COST_AND_BENEFIT));
  assert.ok(descriptor.acceptanceFields().includes(RISK_ACCEPTANCE_FIELDS.REMEDIATION_IF_TEMPORARY));
  assert.ok(descriptor.escalationTriggers().includes(RISK_ESCALATION_TRIGGERS.MULTIPLE_RISKS_AGGREGATE));
});

test('enterprise risk management exposes aggregation, concentration, dependency, emerging risk, indicators, measures, and future metadata', () => {
  const descriptor = new EnterpriseRiskManagementDescriptor();

  assert.ok(descriptor.aggregationDimensions().includes(RISK_AGGREGATION_DIMENSIONS.AI_PROVIDERS_AND_MODELS));
  assert.ok(descriptor.concentrationSources().includes(CONCENTRATION_RISK_SOURCES.MODEL_FAMILY));
  assert.ok(descriptor.dependencyFields().includes(DEPENDENCY_RISK_FIELDS.CHANGE_NOTIFICATION));
  assert.ok(descriptor.emergingRiskSources().includes(EMERGING_RISK_SOURCES.GEOPOLITICAL_CONDITIONS));
  assert.ok(descriptor.indicators().includes(RISK_INDICATORS.COST_ANOMALIES));
  assert.ok(descriptor.registerCapabilities().includes(RISK_REGISTER_CAPABILITIES.TENANT_ISOLATION));
  assert.ok(descriptor.measures().includes(RISK_MEASURES.FORECAST_ACCURACY));
  assert.ok(descriptor.qualityAttributes().includes(ENTERPRISE_RISK_MANAGEMENT_QUALITY_ATTRIBUTES.PREDICTABILITY));
  assert.ok(descriptor.architecturalRules().includes(ENTERPRISE_RISK_MANAGEMENT_ARCHITECTURAL_RULES.PREVENT_PASSIVE_ACCEPTANCE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ENTERPRISE_RISK_MANAGEMENT_CAPABILITIES.GOVERNED_AUTONOMOUS_RISK_RESPONSE));
});

test('enterprise risk management validates complete profiles and rejects architecture violations', () => {
  const descriptor = new EnterpriseRiskManagementDescriptor();
  const valid = descriptor.validateProfile(new EnterpriseRiskManagementProfile({
    riskManagementName: 'Enterprise Risk Management',
    objectives: Object.values(ENTERPRISE_RISK_MANAGEMENT_OBJECTIVES),
    principles: Object.values(ENTERPRISE_RISK_MANAGEMENT_PRINCIPLES),
    riskModelStages: Object.values(RISK_MODEL_STAGES),
    taxonomyCategories: Object.values(RISK_TAXONOMY_CATEGORIES),
    appetiteFactors: Object.values(RISK_APPETITE_FACTORS),
    toleranceExpressions: Object.values(RISK_TOLERANCE_EXPRESSIONS),
    appetiteHierarchyLevels: Object.values(RISK_APPETITE_HIERARCHY_LEVELS),
    identificationSources: Object.values(RISK_IDENTIFICATION_SOURCES),
    recordFields: Object.values(RISK_RECORD_FIELDS),
    lifecycleStages: Object.values(RISK_LIFECYCLE_STAGES),
    controlEffectivenessFactors: Object.values(CONTROL_EFFECTIVENESS_FACTORS),
    residualRiskFactors: Object.values(RESIDUAL_RISK_FACTORS),
    likelihoodFactors: Object.values(LIKELIHOOD_FACTORS),
    impactFactors: Object.values(IMPACT_FACTORS),
    treatmentStrategies: Object.values(RISK_TREATMENT_STRATEGIES),
    treatmentPlanFields: Object.values(RISK_TREATMENT_PLAN_FIELDS),
    acceptanceFields: Object.values(RISK_ACCEPTANCE_FIELDS),
    escalationTriggers: Object.values(RISK_ESCALATION_TRIGGERS),
    aggregationDimensions: Object.values(RISK_AGGREGATION_DIMENSIONS),
    concentrationSources: Object.values(CONCENTRATION_RISK_SOURCES),
    dependencyFields: Object.values(DEPENDENCY_RISK_FIELDS),
    emergingRiskSources: Object.values(EMERGING_RISK_SOURCES),
    indicators: Object.values(RISK_INDICATORS),
    registerCapabilities: Object.values(RISK_REGISTER_CAPABILITIES),
    measures: Object.values(RISK_MEASURES),
    qualityAttributes: Object.values(ENTERPRISE_RISK_MANAGEMENT_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(ENTERPRISE_RISK_MANAGEMENT_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_ENTERPRISE_RISK_MANAGEMENT_CAPABILITIES)
  }));
  const invalid = descriptor.validateProfile({
    riskManagementName: '',
    objectives: [ENTERPRISE_RISK_MANAGEMENT_OBJECTIVES.BUSINESS_ALIGNED_RISK_DECISIONS],
    principles: [ENTERPRISE_RISK_MANAGEMENT_PRINCIPLES.RISK_IS_UNCERTAINTY_ABOUT_OBJECTIVES],
    riskModelStages: [RISK_MODEL_STAGES.ENTERPRISE_OBJECTIVE],
    taxonomyCategories: [RISK_TAXONOMY_CATEGORIES.STRATEGIC],
    appetiteFactors: [RISK_APPETITE_FACTORS.ENTERPRISE_STRATEGY],
    toleranceExpressions: [RISK_TOLERANCE_EXPRESSIONS.QUALITATIVE_BOUNDARIES],
    appetiteHierarchyLevels: [RISK_APPETITE_HIERARCHY_LEVELS.ENTERPRISE_RISK_APPETITE],
    identificationSources: [RISK_IDENTIFICATION_SOURCES.STRATEGY],
    recordFields: [RISK_RECORD_FIELDS.RISK_IDENTIFIER],
    lifecycleStages: [RISK_LIFECYCLE_STAGES.IDENTIFY],
    controlEffectivenessFactors: [CONTROL_EFFECTIVENESS_FACTORS.DESIGN],
    residualRiskFactors: [RESIDUAL_RISK_FACTORS.CONTROL_EFFECTIVENESS],
    likelihoodFactors: [LIKELIHOOD_FACTORS.HISTORICAL_FREQUENCY],
    impactFactors: [IMPACT_FACTORS.GUEST_HARM],
    treatmentStrategies: [RISK_TREATMENT_STRATEGIES.AVOID],
    treatmentPlanFields: [RISK_TREATMENT_PLAN_FIELDS.RISK],
    acceptanceFields: [RISK_ACCEPTANCE_FIELDS.RISK_STATEMENT],
    escalationTriggers: [RISK_ESCALATION_TRIGGERS.RESIDUAL_RISK_EXCEEDS_TOLERANCE],
    aggregationDimensions: [RISK_AGGREGATION_DIMENSIONS.COMMON_DEPENDENCIES],
    concentrationSources: [CONCENTRATION_RISK_SOURCES.CLOUD_PROVIDER],
    dependencyFields: [DEPENDENCY_RISK_FIELDS.UPSTREAM_SERVICE],
    emergingRiskSources: [EMERGING_RISK_SOURCES.NEW_AI_CAPABILITY],
    indicators: [RISK_INDICATORS.INCIDENT_TRENDS],
    registerCapabilities: [RISK_REGISTER_CAPABILITIES.STABLE_IDENTIFIERS],
    measures: [RISK_MEASURES.RISKS_WITH_OWNERS],
    qualityAttributes: [ENTERPRISE_RISK_MANAGEMENT_QUALITY_ATTRIBUTES.ACCOUNTABILITY],
    architecturalRules: [ENTERPRISE_RISK_MANAGEMENT_ARCHITECTURAL_RULES.CONNECT_RISK_TO_OBJECTIVE],
    futureCapabilities: [FUTURE_ENTERPRISE_RISK_MANAGEMENT_CAPABILITIES.SEMANTIC_RISK_MODELS],
    riskConnectedToObjective: false,
    oneRiskOwnerRequired: false,
    appetiteWithinCapacity: false,
    inherentResidualDistinct: false,
    evidenceSupportsAssessment: false,
    treatmentProportionate: false,
    passiveAcceptanceForbidden: false,
    acceptanceAuthorityExplicit: false,
    aggregationRequired: false,
    closureRequiresEvidenceAndAuthority: false,
    complianceNotReducedToProbabilityImpact: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesRiskManagementProduct: true,
    prescribesQuantitativeModel: true,
    prescribesScoringMethod: true,
    prescribesInsuranceArrangement: true,
    prescribesRegulatoryFramework: true,
    providesFinancialModels: true,
    providesLegalConclusions: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /consistent-risk-language/);
  assert.match(invalid.errors.join('\n'), /Decision, Monitoring, and Review/);
  assert.match(invalid.errors.join('\n'), /reputational-risk/);
  assert.match(invalid.errors.join('\n'), /innovation/);
  assert.match(invalid.errors.join('\n'), /exception-limits/);
  assert.match(invalid.errors.join('\n'), /Service, AI, Data, Workflow, and Supplier Boundaries/);
  assert.match(invalid.errors.join('\n'), /scenario-analysis/);
  assert.match(invalid.errors.join('\n'), /uncertainty/);
  assert.match(invalid.errors.join('\n'), /Review, Reassess, and Close/);
  assert.match(invalid.errors.join('\n'), /known-exceptions/);
  assert.match(invalid.errors.join('\n'), /change-since-last-review/);
  assert.match(invalid.errors.join('\n'), /ai-uncertainty/);
  assert.match(invalid.errors.join('\n'), /strategic-delay/);
  assert.match(invalid.errors.join('\n'), /monitor/);
  assert.match(invalid.errors.join('\n'), /expected-cost-and-benefit/);
  assert.match(invalid.errors.join('\n'), /remediation-if-temporary/);
  assert.match(invalid.errors.join('\n'), /multiple-risks-aggregate/);
  assert.match(invalid.errors.join('\n'), /ai-providers-and-models/);
  assert.match(invalid.errors.join('\n'), /model-family/);
  assert.match(invalid.errors.join('\n'), /change-notification/);
  assert.match(invalid.errors.join('\n'), /geopolitical-conditions/);
  assert.match(invalid.errors.join('\n'), /cost-anomalies/);
  assert.match(invalid.errors.join('\n'), /tenant-isolation/);
  assert.match(invalid.errors.join('\n'), /forecast-accuracy/);
  assert.match(invalid.errors.join('\n'), /predictability/);
  assert.match(invalid.errors.join('\n'), /prevent-passive-acceptance-through-delay/);
  assert.match(invalid.errors.join('\n'), /governed-autonomous-risk-response/);
  assert.match(invalid.errors.join('\n'), /connected to an enterprise objective/);
  assert.match(invalid.errors.join('\n'), /one accountable Risk Owner/);
  assert.match(invalid.errors.join('\n'), /risk capacity/);
  assert.match(invalid.errors.join('\n'), /passively through delay/);
  assert.match(invalid.errors.join('\n'), /probability-impact score/);
  assert.match(invalid.errors.join('\n'), /risk-management product/);
  assert.match(invalid.errors.join('\n'), /Legal conclusions/);
});

test('enterprise risk management assertion rejects incomplete metadata', () => {
  class IncompleteEnterpriseRiskManagementDescriptor extends EnterpriseRiskManagementDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteEnterpriseRiskManagementDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.ENTERPRISE_RISK_MANAGEMENT_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('enterprise risk management descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('EnterpriseRiskManagementDescriptor');

  assert.ok(descriptor instanceof EnterpriseRiskManagementDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
