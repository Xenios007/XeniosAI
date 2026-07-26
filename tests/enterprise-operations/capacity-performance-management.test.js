import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  CapacityPerformanceManagementDescriptor,
  CapacityPerformanceManagementProfile,
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
  WORKFLOW_CAPACITY_FACTORS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new CapacityPerformanceManagementProfile({
    operationsName: 'Capacity and Performance Management',
    objectives: Object.values(CAPACITY_PERFORMANCE_OBJECTIVES),
    principles: Object.values(CAPACITY_PERFORMANCE_PRINCIPLES),
    capacityDomains: Object.values(CAPACITY_DOMAINS),
    demandSources: Object.values(CAPACITY_DEMAND_SOURCES),
    demandDimensions: Object.values(CAPACITY_DEMAND_DIMENSIONS),
    demandProfiles: Object.values(CAPACITY_DEMAND_PROFILES),
    planningHorizons: Object.values(CAPACITY_PLANNING_HORIZONS),
    forecastInputs: Object.values(CAPACITY_FORECAST_INPUTS),
    forecastScenarios: Object.values(CAPACITY_FORECAST_SCENARIOS),
    capacityPlanFields: Object.values(CAPACITY_PLAN_FIELDS),
    performanceObjectiveExamples: Object.values(PERFORMANCE_OBJECTIVE_EXAMPLES),
    performanceIndicators: Object.values(PERFORMANCE_INDICATORS),
    baselineConditions: Object.values(CAPACITY_BASELINE_CONDITIONS),
    capacityLimitTypes: Object.values(CAPACITY_LIMIT_TYPES),
    usableCapacityFactors: Object.values(USABLE_CAPACITY_FACTORS),
    headroomFactors: Object.values(CAPACITY_HEADROOM_FACTORS),
    resourceAllocationQualities: Object.values(RESOURCE_ALLOCATION_QUALITIES),
    tenantFairnessControls: Object.values(TENANT_FAIRNESS_CONTROLS),
    propertyPrioritizationFactors: Object.values(PROPERTY_PRIORITIZATION_FACTORS),
    scalingActions: Object.values(CAPACITY_SCALING_ACTIONS),
    elasticityPolicyFields: Object.values(ELASTICITY_POLICY_FIELDS),
    admissionControlActions: Object.values(ADMISSION_CONTROL_ACTIONS),
    backpressureFailureModes: Object.values(BACKPRESSURE_FAILURE_MODES),
    backlogManagementDimensions: Object.values(BACKLOG_MANAGEMENT_DIMENSIONS),
    gracefulDegradationOptions: Object.values(GRACEFUL_DEGRADATION_OPTIONS),
    performanceIsolationDimensions: Object.values(PERFORMANCE_ISOLATION_DIMENSIONS),
    aiCapacityFactors: Object.values(AI_CAPACITY_FACTORS),
    aiPerformanceFactors: Object.values(AI_PERFORMANCE_FACTORS),
    workflowCapacityFactors: Object.values(WORKFLOW_CAPACITY_FACTORS),
    integrationCapacityFactors: Object.values(INTEGRATION_CAPACITY_FACTORS),
    dataCapacityFactors: Object.values(DATA_CAPACITY_FACTORS),
    humanCapacityFactors: Object.values(HUMAN_CAPACITY_FACTORS),
    externalProviderCapacityConstraints: Object.values(EXTERNAL_PROVIDER_CAPACITY_CONSTRAINTS),
    performanceTestingScenarios: Object.values(PERFORMANCE_TESTING_SCENARIOS),
    capacityChangeValidationTriggers: Object.values(CAPACITY_CHANGE_VALIDATION_TRIGGERS),
    capacityEventTypes: Object.values(CAPACITY_EVENT_TYPES),
    costEfficiencyFactors: Object.values(CAPACITY_COST_EFFICIENCY_FACTORS),
    capacityReservationReasons: Object.values(CAPACITY_RESERVATION_REASONS),
    capacityReviewInputs: Object.values(CAPACITY_REVIEW_INPUTS),
    performanceOptimizationTargets: Object.values(PERFORMANCE_OPTIMIZATION_TARGETS),
    capacityRiskTriggers: Object.values(CAPACITY_RISK_TRIGGERS),
    measures: Object.values(CAPACITY_PERFORMANCE_MEASURES),
    governanceAreas: Object.values(CAPACITY_PERFORMANCE_GOVERNANCE_AREAS),
    qualityAttributes: Object.values(CAPACITY_PERFORMANCE_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(CAPACITY_PERFORMANCE_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_CAPACITY_PERFORMANCE_CAPABILITIES),
    ...overrides
  });
}

test('capacity and performance management exposes documented objectives, principles, demand, forecasting, and planning metadata', () => {
  const descriptor = new CapacityPerformanceManagementDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(CAPACITY_PERFORMANCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(CAPACITY_PERFORMANCE_PRINCIPLES));
  assert.ok(descriptor.capacityDomains().includes(CAPACITY_DOMAINS.HUMAN_OPERATIONAL_CAPACITY));
  assert.ok(descriptor.demandSources().includes(CAPACITY_DEMAND_SOURCES.REGULATORY_PROCESSES));
  assert.ok(descriptor.demandDimensions().includes(CAPACITY_DEMAND_DIMENSIONS.SERVICE_DEPENDENCY));
  assert.ok(descriptor.demandProfiles().includes(CAPACITY_DEMAND_PROFILES.EXTERNAL_PROVIDER_RETRY_STORM));
  assert.ok(descriptor.planningHorizons().includes(CAPACITY_PLANNING_HORIZONS.STRATEGIC));
  assert.ok(descriptor.forecastInputs().includes(CAPACITY_FORECAST_INPUTS.SCENARIO_ASSUMPTIONS));
  assert.ok(descriptor.forecastScenarios().includes(CAPACITY_FORECAST_SCENARIOS.MULTI_TENANT_INCIDENT));
  assert.ok(descriptor.capacityPlanFields().includes(CAPACITY_PLAN_FIELDS.REVIEW_DATES));
});

test('capacity and performance management exposes performance, allocation, overload, domain-specific, and governance metadata', () => {
  const descriptor = new CapacityPerformanceManagementDescriptor();

  assert.ok(descriptor.performanceObjectiveExamples().includes(PERFORMANCE_OBJECTIVE_EXAMPLES.DATA_QUERY_RESPONSIVENESS));
  assert.ok(descriptor.performanceIndicators().includes(PERFORMANCE_INDICATORS.MANUAL_FALLBACK_DEMAND));
  assert.ok(descriptor.baselineConditions().includes(CAPACITY_BASELINE_CONDITIONS.EXTERNAL_RATE_LIMITS));
  assert.ok(descriptor.capacityLimitTypes().includes(CAPACITY_LIMIT_TYPES.COST_LIMIT));
  assert.ok(descriptor.usableCapacityFactors().includes(USABLE_CAPACITY_FACTORS.SAFE_OPERATING_MARGIN));
  assert.ok(descriptor.tenantFairnessControls().includes(TENANT_FAIRNESS_CONTROLS.ADMISSION_CONTROL));
  assert.ok(descriptor.elasticityPolicyFields().includes(ELASTICITY_POLICY_FIELDS.HUMAN_ESCALATION));
  assert.ok(descriptor.backpressureFailureModes().includes(BACKPRESSURE_FAILURE_MODES.PROVIDER_LIMIT_VIOLATION));
  assert.ok(descriptor.aiCapacityFactors().includes(AI_CAPACITY_FACTORS.FALLBACK_CAPACITY));
  assert.ok(descriptor.workflowCapacityFactors().includes(WORKFLOW_CAPACITY_FACTORS.BACKLOG_RECOVERY));
  assert.ok(descriptor.integrationCapacityFactors().includes(INTEGRATION_CAPACITY_FACTORS.AUTHENTICATION_LIMITS));
  assert.ok(descriptor.dataCapacityFactors().includes(DATA_CAPACITY_FACTORS.TENANT_ISOLATION));
  assert.ok(descriptor.humanCapacityFactors().includes(HUMAN_CAPACITY_FACTORS.CRISIS_RESERVE));
  assert.ok(descriptor.performanceTestingScenarios().includes(PERFORMANCE_TESTING_SCENARIOS.INTEGRATION_THROTTLING));
  assert.ok(descriptor.capacityReviewInputs().includes(CAPACITY_REVIEW_INPUTS.REQUIRED_DECISIONS));
  assert.ok(descriptor.architecturalRules().includes(CAPACITY_PERFORMANCE_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CAPACITY_PERFORMANCE_CAPABILITIES.SELF_OPTIMIZING_SERVICE_PERFORMANCE));
});

test('capacity and performance management validates complete and incomplete profiles', () => {
  const descriptor = new CapacityPerformanceManagementDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    operationsName: '',
    objectives: [CAPACITY_PERFORMANCE_OBJECTIVES.SUFFICIENT_CAPACITY_FOR_BUSINESS_DEMAND],
    principles: [CAPACITY_PERFORMANCE_PRINCIPLES.BUSINESS_DEMAND_DRIVES_CAPACITY],
    capacityDomains: [CAPACITY_DOMAINS.BUSINESS_CAPACITY],
    demandSources: [CAPACITY_DEMAND_SOURCES.GUEST_INTERACTIONS],
    demandDimensions: [CAPACITY_DEMAND_DIMENSIONS.VOLUME],
    demandProfiles: [CAPACITY_DEMAND_PROFILES.STEADY_BASELINE],
    businessDemandDrivesCapacity: false,
    endToEndPerformanceRequired: false,
    capacityBeforeSaturation: false,
    elasticityGuardrailsRequired: false,
    fairnessWithBusinessPriority: false,
    gracefulDegradationProtected: false,
    costManagedAsConstraint: false,
    evidenceBasedPlanning: false,
    providerIndependent: false,
    safeHeadroomPreserved: false,
    tenantPropertyFairnessProtected: false,
    capacityRiskGoverned: false,
    technologyNeutral: false,
    vendorNeutral: false,
    deploymentTopologySpecific: true,
    observabilityToolSpecific: true,
    cloudProviderSpecific: true,
    infrastructureProductSpecific: true,
    aiProviderSpecific: true,
    scalingTechnologySpecific: true,
    averageOnlyPerformance: true,
    maximumUtilizationObjective: true,
    unboundedElasticity: true,
    hiddenLimitsAccepted: true,
    uncontrolledSaturationAccepted: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /vendor-neutral-capacity-capabilities/);
  assert.match(invalid.errors.join('\n'), /provider-independence/);
  assert.match(invalid.errors.join('\n'), /human-operational-capacity/);
  assert.match(invalid.errors.join('\n'), /business demand/);
  assert.match(invalid.errors.join('\n'), /end to end/);
  assert.match(invalid.errors.join('\n'), /before saturation/);
  assert.match(invalid.errors.join('\n'), /Cloud providers are outside ARCH-011-07 scope/);
  assert.match(invalid.errors.join('\n'), /Maximum utilization is not the capacity objective/);
  assert.match(invalid.errors.join('\n'), /Uncontrolled saturation is prohibited/);
});

test('capacity and performance management assertion rejects incomplete metadata', () => {
  class IncompleteCapacityPerformanceManagementDescriptor extends CapacityPerformanceManagementDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteCapacityPerformanceManagementDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.CAPACITY_PERFORMANCE_MANAGEMENT_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('capacity and performance management descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('CapacityPerformanceManagementDescriptor');

  assert.ok(descriptor instanceof CapacityPerformanceManagementDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
