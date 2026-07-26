import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ADMISSION_CONTROL_ACTIONS,
  AI_CAPACITY_FACTORS,
  AI_PERFORMANCE_FACTORS,
  BACKLOG_MANAGEMENT_DIMENSIONS,
  BACKPRESSURE_FAILURE_MODES,
  CAPACITY_BASELINE_CONDITIONS,
  CAPACITY_CHANGE_VALIDATION_TRIGGERS,
  CAPACITY_COST_EFFICIENCY_FACTORS,
  CAPACITY_DEMAND_DIMENSIONS,
  CAPACITY_DEMAND_PROFILES,
  CAPACITY_DEMAND_SOURCES,
  CAPACITY_DOMAINS,
  CAPACITY_EVENT_TYPES,
  CAPACITY_FORECAST_INPUTS,
  CAPACITY_FORECAST_SCENARIOS,
  CAPACITY_HEADROOM_FACTORS,
  CAPACITY_LIMIT_TYPES,
  CAPACITY_PERFORMANCE_ARCHITECTURAL_RULES,
  CAPACITY_PERFORMANCE_GOVERNANCE_AREAS,
  CAPACITY_PERFORMANCE_MEASURES,
  CAPACITY_PERFORMANCE_OBJECTIVES,
  CAPACITY_PERFORMANCE_PRINCIPLES,
  CAPACITY_PERFORMANCE_QUALITY_ATTRIBUTES,
  CAPACITY_PLAN_FIELDS,
  CAPACITY_PLANNING_HORIZONS,
  CAPACITY_RESERVATION_REASONS,
  CAPACITY_REVIEW_INPUTS,
  CAPACITY_RISK_TRIGGERS,
  CAPACITY_SCALING_ACTIONS,
  DATA_CAPACITY_FACTORS,
  ELASTICITY_POLICY_FIELDS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EXTERNAL_PROVIDER_CAPACITY_CONSTRAINTS,
  FUTURE_CAPACITY_PERFORMANCE_CAPABILITIES,
  GRACEFUL_DEGRADATION_OPTIONS,
  HUMAN_CAPACITY_FACTORS,
  INTEGRATION_CAPACITY_FACTORS,
  PERFORMANCE_INDICATORS,
  PERFORMANCE_ISOLATION_DIMENSIONS,
  PERFORMANCE_OBJECTIVE_EXAMPLES,
  PERFORMANCE_OPTIMIZATION_TARGETS,
  PERFORMANCE_TESTING_SCENARIOS,
  PROPERTY_PRIORITIZATION_FACTORS,
  RESOURCE_ALLOCATION_QUALITIES,
  TENANT_FAIRNESS_CONTROLS,
  USABLE_CAPACITY_FACTORS,
  WORKFLOW_CAPACITY_FACTORS
} from '../constants.js';
import { CapacityPerformanceManagementProfile } from '../contracts/capacity-performance-management-profile.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';

const MAP = Object.freeze({
  objectives: CAPACITY_PERFORMANCE_OBJECTIVES,
  principles: CAPACITY_PERFORMANCE_PRINCIPLES,
  capacityDomains: CAPACITY_DOMAINS,
  demandSources: CAPACITY_DEMAND_SOURCES,
  demandDimensions: CAPACITY_DEMAND_DIMENSIONS,
  demandProfiles: CAPACITY_DEMAND_PROFILES,
  planningHorizons: CAPACITY_PLANNING_HORIZONS,
  forecastInputs: CAPACITY_FORECAST_INPUTS,
  forecastScenarios: CAPACITY_FORECAST_SCENARIOS,
  capacityPlanFields: CAPACITY_PLAN_FIELDS,
  performanceObjectiveExamples: PERFORMANCE_OBJECTIVE_EXAMPLES,
  performanceIndicators: PERFORMANCE_INDICATORS,
  baselineConditions: CAPACITY_BASELINE_CONDITIONS,
  capacityLimitTypes: CAPACITY_LIMIT_TYPES,
  usableCapacityFactors: USABLE_CAPACITY_FACTORS,
  headroomFactors: CAPACITY_HEADROOM_FACTORS,
  resourceAllocationQualities: RESOURCE_ALLOCATION_QUALITIES,
  tenantFairnessControls: TENANT_FAIRNESS_CONTROLS,
  propertyPrioritizationFactors: PROPERTY_PRIORITIZATION_FACTORS,
  scalingActions: CAPACITY_SCALING_ACTIONS,
  elasticityPolicyFields: ELASTICITY_POLICY_FIELDS,
  admissionControlActions: ADMISSION_CONTROL_ACTIONS,
  backpressureFailureModes: BACKPRESSURE_FAILURE_MODES,
  backlogManagementDimensions: BACKLOG_MANAGEMENT_DIMENSIONS,
  gracefulDegradationOptions: GRACEFUL_DEGRADATION_OPTIONS,
  performanceIsolationDimensions: PERFORMANCE_ISOLATION_DIMENSIONS,
  aiCapacityFactors: AI_CAPACITY_FACTORS,
  aiPerformanceFactors: AI_PERFORMANCE_FACTORS,
  workflowCapacityFactors: WORKFLOW_CAPACITY_FACTORS,
  integrationCapacityFactors: INTEGRATION_CAPACITY_FACTORS,
  dataCapacityFactors: DATA_CAPACITY_FACTORS,
  humanCapacityFactors: HUMAN_CAPACITY_FACTORS,
  externalProviderCapacityConstraints: EXTERNAL_PROVIDER_CAPACITY_CONSTRAINTS,
  performanceTestingScenarios: PERFORMANCE_TESTING_SCENARIOS,
  capacityChangeValidationTriggers: CAPACITY_CHANGE_VALIDATION_TRIGGERS,
  capacityEventTypes: CAPACITY_EVENT_TYPES,
  costEfficiencyFactors: CAPACITY_COST_EFFICIENCY_FACTORS,
  capacityReservationReasons: CAPACITY_RESERVATION_REASONS,
  capacityReviewInputs: CAPACITY_REVIEW_INPUTS,
  performanceOptimizationTargets: PERFORMANCE_OPTIMIZATION_TARGETS,
  capacityRiskTriggers: CAPACITY_RISK_TRIGGERS,
  measures: CAPACITY_PERFORMANCE_MEASURES,
  governanceAreas: CAPACITY_PERFORMANCE_GOVERNANCE_AREAS,
  qualityAttributes: CAPACITY_PERFORMANCE_QUALITY_ATTRIBUTES,
  architecturalRules: CAPACITY_PERFORMANCE_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_CAPACITY_PERFORMANCE_CAPABILITIES
});

const EXPECTED_COUNTS = Object.freeze({
  objectives: 14,
  principles: 9,
  capacityDomains: 8,
  demandSources: 22,
  demandDimensions: 19,
  demandProfiles: 14,
  planningHorizons: 3,
  forecastInputs: 13,
  forecastScenarios: 7,
  capacityPlanFields: 17,
  performanceObjectiveExamples: 11,
  performanceIndicators: 18,
  baselineConditions: 10,
  capacityLimitTypes: 11,
  usableCapacityFactors: 12,
  headroomFactors: 9,
  resourceAllocationQualities: 9,
  tenantFairnessControls: 10,
  propertyPrioritizationFactors: 9,
  scalingActions: 10,
  elasticityPolicyFields: 12,
  admissionControlActions: 11,
  backpressureFailureModes: 7,
  backlogManagementDimensions: 11,
  gracefulDegradationOptions: 11,
  performanceIsolationDimensions: 11,
  aiCapacityFactors: 13,
  aiPerformanceFactors: 10,
  workflowCapacityFactors: 11,
  integrationCapacityFactors: 11,
  dataCapacityFactors: 12,
  humanCapacityFactors: 11,
  externalProviderCapacityConstraints: 9,
  performanceTestingScenarios: 14,
  capacityChangeValidationTriggers: 11,
  capacityEventTypes: 10,
  costEfficiencyFactors: 9,
  capacityReservationReasons: 11,
  capacityReviewInputs: 17,
  performanceOptimizationTargets: 12,
  capacityRiskTriggers: 10,
  measures: 17,
  governanceAreas: 15,
  qualityAttributes: 12,
  architecturalRules: 18,
  futureCapabilities: 12
});

export class CapacityPerformanceManagementDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  capacityDomains() { return values(MAP.capacityDomains); }
  demandSources() { return values(MAP.demandSources); }
  demandDimensions() { return values(MAP.demandDimensions); }
  demandProfiles() { return values(MAP.demandProfiles); }
  planningHorizons() { return values(MAP.planningHorizons); }
  forecastInputs() { return values(MAP.forecastInputs); }
  forecastScenarios() { return values(MAP.forecastScenarios); }
  capacityPlanFields() { return values(MAP.capacityPlanFields); }
  performanceObjectiveExamples() { return values(MAP.performanceObjectiveExamples); }
  performanceIndicators() { return values(MAP.performanceIndicators); }
  baselineConditions() { return values(MAP.baselineConditions); }
  capacityLimitTypes() { return values(MAP.capacityLimitTypes); }
  usableCapacityFactors() { return values(MAP.usableCapacityFactors); }
  headroomFactors() { return values(MAP.headroomFactors); }
  resourceAllocationQualities() { return values(MAP.resourceAllocationQualities); }
  tenantFairnessControls() { return values(MAP.tenantFairnessControls); }
  propertyPrioritizationFactors() { return values(MAP.propertyPrioritizationFactors); }
  scalingActions() { return values(MAP.scalingActions); }
  elasticityPolicyFields() { return values(MAP.elasticityPolicyFields); }
  admissionControlActions() { return values(MAP.admissionControlActions); }
  backpressureFailureModes() { return values(MAP.backpressureFailureModes); }
  backlogManagementDimensions() { return values(MAP.backlogManagementDimensions); }
  gracefulDegradationOptions() { return values(MAP.gracefulDegradationOptions); }
  performanceIsolationDimensions() { return values(MAP.performanceIsolationDimensions); }
  aiCapacityFactors() { return values(MAP.aiCapacityFactors); }
  aiPerformanceFactors() { return values(MAP.aiPerformanceFactors); }
  workflowCapacityFactors() { return values(MAP.workflowCapacityFactors); }
  integrationCapacityFactors() { return values(MAP.integrationCapacityFactors); }
  dataCapacityFactors() { return values(MAP.dataCapacityFactors); }
  humanCapacityFactors() { return values(MAP.humanCapacityFactors); }
  externalProviderCapacityConstraints() { return values(MAP.externalProviderCapacityConstraints); }
  performanceTestingScenarios() { return values(MAP.performanceTestingScenarios); }
  capacityChangeValidationTriggers() { return values(MAP.capacityChangeValidationTriggers); }
  capacityEventTypes() { return values(MAP.capacityEventTypes); }
  costEfficiencyFactors() { return values(MAP.costEfficiencyFactors); }
  capacityReservationReasons() { return values(MAP.capacityReservationReasons); }
  capacityReviewInputs() { return values(MAP.capacityReviewInputs); }
  performanceOptimizationTargets() { return values(MAP.performanceOptimizationTargets); }
  capacityRiskTriggers() { return values(MAP.capacityRiskTriggers); }
  measures() { return values(MAP.measures); }
  governanceAreas() { return values(MAP.governanceAreas); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof CapacityPerformanceManagementProfile
      ? profileInput
      : new CapacityPerformanceManagementProfile(profileInput);
    const errors = [];

    if (!profile.operationsName) errors.push('Capacity and performance management profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.businessDemandDrivesCapacity !== true) errors.push('Capacity planning must begin with business demand.');
    if (profile.endToEndPerformanceRequired !== true) errors.push('Performance must be evaluated end to end.');
    if (profile.capacityBeforeSaturation !== true) errors.push('Capacity risk must be addressed before saturation.');
    if (profile.elasticityGuardrailsRequired !== true) errors.push('Elasticity must operate within approved guardrails.');
    if (profile.fairnessWithBusinessPriority !== true) errors.push('Shared capacity must balance fairness with business priority.');
    if (profile.gracefulDegradationProtected !== true) errors.push('Graceful degradation must protect critical outcomes.');
    if (profile.costManagedAsConstraint !== true) errors.push('Cost must be managed as an operational constraint.');
    if (profile.evidenceBasedPlanning !== true) errors.push('Capacity decisions must use trustworthy evidence.');
    if (profile.providerIndependent !== true) errors.push('Capacity architecture must remain provider independent.');
    if (profile.safeHeadroomPreserved !== true) errors.push('Safe operating headroom must be preserved.');
    if (profile.tenantPropertyFairnessProtected !== true) errors.push('Tenant and property workloads must be protected from unfair contention.');
    if (profile.capacityRiskGoverned !== true) errors.push('Capacity risk must be recorded and governed.');
    if (profile.technologyNeutral !== true) errors.push('Capacity and Performance Management must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Capacity and Performance Management must remain vendor neutral.');
    if (profile.deploymentTopologySpecific === true) errors.push('Detailed deployment topology is outside ARCH-011-07 scope.');
    if (profile.observabilityToolSpecific === true) errors.push('Observability tooling is outside ARCH-011-07 scope.');
    if (profile.cloudProviderSpecific === true) errors.push('Cloud providers are outside ARCH-011-07 scope.');
    if (profile.infrastructureProductSpecific === true) errors.push('Infrastructure products are outside ARCH-011-07 scope.');
    if (profile.aiProviderSpecific === true) errors.push('AI providers are outside ARCH-011-07 scope.');
    if (profile.scalingTechnologySpecific === true) errors.push('Scaling technologies are outside ARCH-011-07 scope.');
    if (profile.averageOnlyPerformance === true) errors.push('Average-only performance measurement is insufficient.');
    if (profile.maximumUtilizationObjective === true) errors.push('Maximum utilization is not the capacity objective.');
    if (profile.unboundedElasticity === true) errors.push('Unbounded elasticity is prohibited.');
    if (profile.hiddenLimitsAccepted === true) errors.push('Unknown or unobservable limits are operational risks.');
    if (profile.uncontrolledSaturationAccepted === true) errors.push('Uncontrolled saturation is prohibited.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, count] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== count) errors.push(`Capacity and Performance Management must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.CAPACITY_PERFORMANCE_MANAGEMENT_INVALID,
        'Capacity and Performance Management violates ARCH-011-07.',
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

function validation(errors) {
  return new EnterpriseOperationsValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
