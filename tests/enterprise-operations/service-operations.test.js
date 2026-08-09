import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_SERVICE_HEALTH_DIMENSIONS,
  DATA_SERVICE_HEALTH_DIMENSIONS,
  DEGRADED_SERVICE_MODES,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  FUTURE_SERVICE_OPERATIONS_CAPABILITIES,
  INTEGRATION_SERVICE_HEALTH_DIMENSIONS,
  MULTI_TENANT_SERVICE_OPERATION_SCOPES,
  PROPERTY_FACING_SERVICE_CONTEXT,
  SERVICE_CATALOG_RECORD_FIELDS,
  SERVICE_CLASSIFICATION_DIMENSIONS,
  SERVICE_COMMITMENT_QUALITY_REQUIREMENTS,
  SERVICE_CONFIGURATION_REQUIREMENTS,
  SERVICE_DEPENDENCY_OPERATION_FIELDS,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_EVENT_CATEGORIES,
  SERVICE_EVENT_MANAGEMENT_STEPS,
  SERVICE_HEALTH_DIMENSIONS,
  SERVICE_HEALTH_STATES,
  SERVICE_IMPROVEMENT_SOURCES,
  SERVICE_LEVEL_INDICATOR_TYPES,
  SERVICE_MAINTENANCE_PLANNING_FIELDS,
  SERVICE_OPERATION_TYPES,
  SERVICE_OPERATIONAL_LIFECYCLE_STAGES,
  SERVICE_OPERATIONAL_LIFECYCLE_STATES,
  SERVICE_OPERATIONAL_READINESS_REQUIREMENTS,
  SERVICE_OPERATIONS_ARCHITECTURAL_RULES,
  SERVICE_OPERATIONS_COMMITMENT_TYPES,
  SERVICE_OPERATIONS_OBJECTIVES,
  SERVICE_OPERATIONS_PRINCIPLES,
  SERVICE_OPERATIONS_QUALITY_ATTRIBUTES,
  SERVICE_OPERATIONS_SUPPORTING_ROLES,
  SERVICE_OWNER_ACCOUNTABILITIES,
  SERVICE_PERFORMANCE_REVIEW_INPUTS,
  SERVICE_RECOVERY_VERIFICATION_DIMENSIONS,
  SERVICE_REQUEST_REQUIREMENTS,
  SERVICE_REQUEST_TYPES,
  SERVICE_RESTORATION_PRIORITIES,
  SERVICE_RETIREMENT_REQUIREMENTS,
  SERVICE_SUPPORT_MODEL_FIELDS,
  SERVICE_SUPPORT_TIERS,
  SHARED_SERVICE_OPERATION_CONTROLS,
  ServiceOperationsDescriptor,
  ServiceOperationsProfile,
  WORKFLOW_SERVICE_HEALTH_DIMENSIONS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new ServiceOperationsProfile({
    serviceOperationsName: 'Service Operations',
    objectives: Object.values(SERVICE_OPERATIONS_OBJECTIVES),
    principles: Object.values(SERVICE_OPERATIONS_PRINCIPLES),
    lifecycleStages: Object.values(SERVICE_OPERATIONAL_LIFECYCLE_STAGES),
    classificationDimensions: Object.values(SERVICE_CLASSIFICATION_DIMENSIONS),
    serviceTypes: Object.values(SERVICE_OPERATION_TYPES),
    ownerAccountabilities: Object.values(SERVICE_OWNER_ACCOUNTABILITIES),
    supportingRoles: Object.values(SERVICE_OPERATIONS_SUPPORTING_ROLES),
    catalogFields: Object.values(SERVICE_CATALOG_RECORD_FIELDS),
    commitmentTypes: Object.values(SERVICE_OPERATIONS_COMMITMENT_TYPES),
    commitmentQualityRequirements: Object.values(SERVICE_COMMITMENT_QUALITY_REQUIREMENTS),
    serviceLevelIndicatorTypes: Object.values(SERVICE_LEVEL_INDICATOR_TYPES),
    lifecycleStates: Object.values(SERVICE_OPERATIONAL_LIFECYCLE_STATES),
    readinessRequirements: Object.values(SERVICE_OPERATIONAL_READINESS_REQUIREMENTS),
    healthDimensions: Object.values(SERVICE_HEALTH_DIMENSIONS),
    healthStates: Object.values(SERVICE_HEALTH_STATES),
    eventManagementSteps: Object.values(SERVICE_EVENT_MANAGEMENT_STEPS),
    eventCategories: Object.values(SERVICE_EVENT_CATEGORIES),
    requestTypes: Object.values(SERVICE_REQUEST_TYPES),
    requestRequirements: Object.values(SERVICE_REQUEST_REQUIREMENTS),
    supportModelFields: Object.values(SERVICE_SUPPORT_MODEL_FIELDS),
    supportTiers: Object.values(SERVICE_SUPPORT_TIERS),
    dependencyTypes: Object.values(SERVICE_DEPENDENCY_TYPES),
    dependencyOperationFields: Object.values(SERVICE_DEPENDENCY_OPERATION_FIELDS),
    sharedServiceControls: Object.values(SHARED_SERVICE_OPERATION_CONTROLS),
    degradedModes: Object.values(DEGRADED_SERVICE_MODES),
    restorationPriorities: Object.values(SERVICE_RESTORATION_PRIORITIES),
    recoveryVerificationDimensions: Object.values(SERVICE_RECOVERY_VERIFICATION_DIMENSIONS),
    maintenancePlanningFields: Object.values(SERVICE_MAINTENANCE_PLANNING_FIELDS),
    configurationRequirements: Object.values(SERVICE_CONFIGURATION_REQUIREMENTS),
    aiServiceHealthDimensions: Object.values(AI_SERVICE_HEALTH_DIMENSIONS),
    workflowServiceHealthDimensions: Object.values(WORKFLOW_SERVICE_HEALTH_DIMENSIONS),
    integrationServiceHealthDimensions: Object.values(INTEGRATION_SERVICE_HEALTH_DIMENSIONS),
    dataServiceHealthDimensions: Object.values(DATA_SERVICE_HEALTH_DIMENSIONS),
    multiTenantScopes: Object.values(MULTI_TENANT_SERVICE_OPERATION_SCOPES),
    propertyFacingContext: Object.values(PROPERTY_FACING_SERVICE_CONTEXT),
    performanceReviewInputs: Object.values(SERVICE_PERFORMANCE_REVIEW_INPUTS),
    improvementSources: Object.values(SERVICE_IMPROVEMENT_SOURCES),
    retirementRequirements: Object.values(SERVICE_RETIREMENT_REQUIREMENTS),
    qualityAttributes: Object.values(SERVICE_OPERATIONS_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(SERVICE_OPERATIONS_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_SERVICE_OPERATIONS_CAPABILITIES),
    ...overrides
  });
}

test('service operations exposes documented objectives, principles, lifecycle, classification, and ownership metadata', () => {
  const descriptor = new ServiceOperationsDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(SERVICE_OPERATIONS_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(SERVICE_OPERATIONS_PRINCIPLES));
  assert.deepEqual(descriptor.lifecycleStages(), Object.values(SERVICE_OPERATIONAL_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.classificationDimensions(), Object.values(SERVICE_CLASSIFICATION_DIMENSIONS));
  assert.deepEqual(descriptor.serviceTypes(), Object.values(SERVICE_OPERATION_TYPES));
  assert.deepEqual(descriptor.ownerAccountabilities(), Object.values(SERVICE_OWNER_ACCOUNTABILITIES));
});

test('service operations exposes readiness, health, support, dependency, restoration, specialized service, and retirement metadata', () => {
  const descriptor = new ServiceOperationsDescriptor();

  assert.ok(descriptor.supportingRoles().includes(SERVICE_OPERATIONS_SUPPORTING_ROLES.PROPERTY_OPERATOR));
  assert.ok(descriptor.catalogFields().includes(SERVICE_CATALOG_RECORD_FIELDS.DOCUMENTATION_REFERENCES));
  assert.ok(descriptor.commitmentTypes().includes(SERVICE_OPERATIONS_COMMITMENT_TYPES.MAINTENANCE_NOTICE));
  assert.ok(descriptor.commitmentQualityRequirements().includes(SERVICE_COMMITMENT_QUALITY_REQUIREMENTS.REVIEWED_REGULARLY));
  assert.ok(descriptor.serviceLevelIndicatorTypes().includes(SERVICE_LEVEL_INDICATOR_TYPES.CAPACITY_INDICATORS));
  assert.ok(descriptor.lifecycleStates().includes(SERVICE_OPERATIONAL_LIFECYCLE_STATES.RETIRED));
  assert.ok(descriptor.readinessRequirements().includes(SERVICE_OPERATIONAL_READINESS_REQUIREMENTS.KNOWN_RESIDUAL_RISKS));
  assert.ok(descriptor.healthDimensions().includes(SERVICE_HEALTH_DIMENSIONS.RECOVERY_READINESS));
  assert.ok(descriptor.healthStates().includes(SERVICE_HEALTH_STATES.RESTRICTED));
  assert.ok(descriptor.eventManagementSteps().includes(SERVICE_EVENT_MANAGEMENT_STEPS.RETAIN_APPROPRIATE_EVIDENCE));
  assert.ok(descriptor.eventCategories().includes(SERVICE_EVENT_CATEGORIES.CRITICAL));
  assert.ok(descriptor.requestTypes().includes(SERVICE_REQUEST_TYPES.SERVICE_ACTIVATION_OR_DEACTIVATION));
  assert.ok(descriptor.requestRequirements().includes(SERVICE_REQUEST_REQUIREMENTS.ESCALATION));
  assert.ok(descriptor.supportModelFields().includes(SERVICE_SUPPORT_MODEL_FIELDS.EVIDENCE_REQUIREMENTS));
  assert.ok(descriptor.supportTiers().includes(SERVICE_SUPPORT_TIERS.SUPPLIER_OR_EXTERNAL_SUPPORT));
  assert.ok(descriptor.dependencyTypes().includes(SERVICE_DEPENDENCY_TYPES.HUMAN_AND_PROPERTY_PROCEDURES));
  assert.ok(descriptor.dependencyOperationFields().includes(SERVICE_DEPENDENCY_OPERATION_FIELDS.CONTINUITY_ALTERNATIVES));
  assert.ok(descriptor.sharedServiceControls().includes(SHARED_SERVICE_OPERATION_CONTROLS.ENTERPRISE_LEVEL_OWNERSHIP));
  assert.ok(descriptor.degradedModes().includes(DEGRADED_SERVICE_MODES.CONTROLLED_QUEUEING));
  assert.ok(descriptor.restorationPriorities().includes(SERVICE_RESTORATION_PRIORITIES.IMPROVEMENT_FOLLOW_UP));
  assert.ok(descriptor.recoveryVerificationDimensions().includes(SERVICE_RECOVERY_VERIFICATION_DIMENSIONS.USER_CONFIRMATION_WHERE_APPROPRIATE));
  assert.ok(descriptor.maintenancePlanningFields().includes(SERVICE_MAINTENANCE_PLANNING_FIELDS.CONTINUITY_ALTERNATIVES));
  assert.ok(descriptor.configurationRequirements().includes(SERVICE_CONFIGURATION_REQUIREMENTS.AUDITABLE));
  assert.ok(descriptor.aiServiceHealthDimensions().includes(AI_SERVICE_HEALTH_DIMENSIONS.DRIFT));
  assert.ok(descriptor.workflowServiceHealthDimensions().includes(WORKFLOW_SERVICE_HEALTH_DIMENSIONS.RECOVERY));
  assert.ok(descriptor.integrationServiceHealthDimensions().includes(INTEGRATION_SERVICE_HEALTH_DIMENSIONS.PARTNER_COMMUNICATION));
  assert.ok(descriptor.dataServiceHealthDimensions().includes(DATA_SERVICE_HEALTH_DIMENSIONS.AUTHORIZED_ACCESS));
  assert.ok(descriptor.multiTenantScopes().includes(MULTI_TENANT_SERVICE_OPERATION_SCOPES.PARTNER_SPECIFIC_HEALTH));
  assert.ok(descriptor.propertyFacingContext().includes(PROPERTY_FACING_SERVICE_CONTEXT.COMMUNICATION_CHANNELS));
  assert.ok(descriptor.performanceReviewInputs().includes(SERVICE_PERFORMANCE_REVIEW_INPUTS.IMPROVEMENT_PROGRESS));
  assert.ok(descriptor.improvementSources().includes(SERVICE_IMPROVEMENT_SOURCES.ARCHITECTURE_EVOLUTION));
  assert.ok(descriptor.retirementRequirements().includes(SERVICE_RETIREMENT_REQUIREMENTS.CATALOG_UPDATE));
  assert.ok(descriptor.qualityAttributes().includes(SERVICE_OPERATIONS_QUALITY_ATTRIBUTES.BUSINESS_CONTINUITY));
  assert.ok(descriptor.architecturalRules().includes(SERVICE_OPERATIONS_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SERVICE_OPERATIONS_CAPABILITIES.FEDERATED_SERVICE_OPERATIONS));
});

test('service operations validates complete and incomplete service operations profiles', () => {
  const descriptor = new ServiceOperationsDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    serviceOperationsName: '',
    objectives: [SERVICE_OPERATIONS_OBJECTIVES.RELIABLE_PREDICTABLE_SERVICE_DELIVERY],
    principles: [SERVICE_OPERATIONS_PRINCIPLES.SERVICE_OUTCOME_FIRST],
    lifecycleStages: [SERVICE_OPERATIONAL_LIFECYCLE_STAGES.DEFINE],
    classificationDimensions: [SERVICE_CLASSIFICATION_DIMENSIONS.BUSINESS_CRITICALITY],
    serviceTypes: [SERVICE_OPERATION_TYPES.BUSINESS_SERVICES],
    ownerAccountabilities: [SERVICE_OWNER_ACCOUNTABILITIES.SERVICE_PURPOSE],
    supportingRoles: [SERVICE_OPERATIONS_SUPPORTING_ROLES.BUSINESS_CAPABILITY_OWNER],
    catalogFields: [SERVICE_CATALOG_RECORD_FIELDS.SERVICE_IDENTIFIER],
    commitmentTypes: [SERVICE_OPERATIONS_COMMITMENT_TYPES.AVAILABILITY],
    commitmentQualityRequirements: [SERVICE_COMMITMENT_QUALITY_REQUIREMENTS.BUSINESS_ALIGNED],
    serviceLevelIndicatorTypes: [SERVICE_LEVEL_INDICATOR_TYPES.BUSINESS_INDICATORS],
    lifecycleStates: [SERVICE_OPERATIONAL_LIFECYCLE_STATES.PROPOSED],
    readinessRequirements: [SERVICE_OPERATIONAL_READINESS_REQUIREMENTS.ACCOUNTABLE_OWNER],
    healthDimensions: [SERVICE_HEALTH_DIMENSIONS.BUSINESS_OUTCOME_HEALTH],
    healthStates: [SERVICE_HEALTH_STATES.HEALTHY],
    eventManagementSteps: [SERVICE_EVENT_MANAGEMENT_STEPS.RECEIVE_OR_DETECT_EVIDENCE],
    eventCategories: [SERVICE_EVENT_CATEGORIES.INFORMATIONAL],
    requestTypes: [SERVICE_REQUEST_TYPES.TENANT_CONFIGURATION],
    requestRequirements: [SERVICE_REQUEST_REQUIREMENTS.DEFINED_ELIGIBILITY],
    supportModelFields: [SERVICE_SUPPORT_MODEL_FIELDS.SUPPORT_CONSUMERS],
    supportTiers: [SERVICE_SUPPORT_TIERS.SELF_SERVICE_AND_AUTOMATED_SUPPORT],
    dependencyTypes: [SERVICE_DEPENDENCY_TYPES.UPSTREAM_DEPENDENCIES],
    dependencyOperationFields: [SERVICE_DEPENDENCY_OPERATION_FIELDS.OWNERSHIP],
    sharedServiceControls: [SHARED_SERVICE_OPERATION_CONTROLS.STRONG_ISOLATION],
    degradedModes: [DEGRADED_SERVICE_MODES.REDUCED_FUNCTIONALITY],
    restorationPriorities: [SERVICE_RESTORATION_PRIORITIES.SAFETY_AND_SECURITY],
    recoveryVerificationDimensions: [SERVICE_RECOVERY_VERIFICATION_DIMENSIONS.BUSINESS_TRANSACTIONS],
    maintenancePlanningFields: [SERVICE_MAINTENANCE_PLANNING_FIELDS.PURPOSE],
    configurationRequirements: [SERVICE_CONFIGURATION_REQUIREMENTS.OWNED],
    aiServiceHealthDimensions: [AI_SERVICE_HEALTH_DIMENSIONS.AVAILABILITY],
    workflowServiceHealthDimensions: [WORKFLOW_SERVICE_HEALTH_DIMENSIONS.WORKFLOW_INITIATION],
    integrationServiceHealthDimensions: [INTEGRATION_SERVICE_HEALTH_DIMENSIONS.CONNECTIVITY],
    dataServiceHealthDimensions: [DATA_SERVICE_HEALTH_DIMENSIONS.AVAILABILITY],
    multiTenantScopes: [MULTI_TENANT_SERVICE_OPERATION_SCOPES.PLATFORM_WIDE_HEALTH],
    propertyFacingContext: [PROPERTY_FACING_SERVICE_CONTEXT.LOCAL_OPERATING_HOURS],
    performanceReviewInputs: [SERVICE_PERFORMANCE_REVIEW_INPUTS.BUSINESS_OUTCOMES],
    improvementSources: [SERVICE_IMPROVEMENT_SOURCES.SERVICE_LEVEL_TRENDS],
    retirementRequirements: [SERVICE_RETIREMENT_REQUIREMENTS.CONSUMER_MIGRATION],
    qualityAttributes: [SERVICE_OPERATIONS_QUALITY_ATTRIBUTES.RELIABILITY],
    architecturalRules: [SERVICE_OPERATIONS_ARCHITECTURAL_RULES.ASSIGN_ONE_ACCOUNTABLE_OWNER_TO_EVERY_PRODUCTION_SERVICE],
    futureCapabilities: [FUTURE_SERVICE_OPERATIONS_CAPABILITIES.PREDICTIVE_SERVICE_HEALTH],
    businessOutcomeFirst: false,
    accountableServiceOwnerRequired: false,
    readinessBeforeProduction: false,
    healthMultidimensional: false,
    dependenciesOperatedExplicitly: false,
    failureBehaviorDefined: false,
    automationGoverned: false,
    continuousImprovementEnabled: false,
    catalogAuthoritative: false,
    commitmentsMeasurableOwnedReviewed: false,
    serviceHealthBusinessAligned: false,
    supportAndEscalationExplicit: false,
    degradedModesExplicitObservableCommunicatedTimeBounded: false,
    restorationEndToEndVerified: false,
    configurationAndMaintenanceGovernedAsChange: false,
    tenantPropertyIsolationPreserved: false,
    operationalObligationsCompleteBeforeRetirement: false,
    technologyNeutral: false,
    vendorNeutral: false,
    serviceManagementFrameworkSpecific: true,
    ticketingPlatformSpecific: true,
    monitoringProductSpecific: true,
    organizationalTeamSpecific: true,
    anonymousTechnicalComponent: true,
    technicalAvailabilityOnly: true,
    implementationSizeClassification: true,
    silentSecurityOrIsolationWeakening: true,
    providerAvailabilityEqualsAiQuality: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /clear-service-accountability/);
  assert.match(invalid.errors.join('\n'), /one-accountable-service-owner/);
  assert.match(invalid.errors.join('\n'), /Prepare/);
  assert.match(invalid.errors.join('\n'), /guest-impact/);
  assert.match(invalid.errors.join('\n'), /application-services/);
  assert.match(invalid.errors.join('\n'), /business-outcomes/);
  assert.match(invalid.errors.join('\n'), /product-owner/);
  assert.match(invalid.errors.join('\n'), /service-name/);
  assert.match(invalid.errors.join('\n'), /performance/);
  assert.match(invalid.errors.join('\n'), /measurable/);
  assert.match(invalid.errors.join('\n'), /service-indicators/);
  assert.match(invalid.errors.join('\n'), /designed/);
  assert.match(invalid.errors.join('\n'), /approved-service-classification/);
  assert.match(invalid.errors.join('\n'), /user-experience-health/);
  assert.match(invalid.errors.join('\n'), /at-risk/);
  assert.match(invalid.errors.join('\n'), /validate-and-enrich/);
  assert.match(invalid.errors.join('\n'), /advisory/);
  assert.match(invalid.errors.join('\n'), /property-onboarding/);
  assert.match(invalid.errors.join('\n'), /required-authorization/);
  assert.match(invalid.errors.join('\n'), /coverage/);
  assert.match(invalid.errors.join('\n'), /operational-triage/);
  assert.match(invalid.errors.join('\n'), /downstream-consumers/);
  assert.match(invalid.errors.join('\n'), /commitments/);
  assert.match(invalid.errors.join('\n'), /fair-policy-driven-capacity/);
  assert.match(invalid.errors.join('\n'), /read-only-operation/);
  assert.match(invalid.errors.join('\n'), /data-integrity/);
  assert.match(invalid.errors.join('\n'), /guest-journeys/);
  assert.match(invalid.errors.join('\n'), /scope/);
  assert.match(invalid.errors.join('\n'), /versioned/);
  assert.match(invalid.errors.join('\n'), /latency/);
  assert.match(invalid.errors.join('\n'), /state-persistence/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /integrity/);
  assert.match(invalid.errors.join('\n'), /tenant-specific-health/);
  assert.match(invalid.errors.join('\n'), /guest-arrival-and-stay-activity/);
  assert.match(invalid.errors.join('\n'), /service-commitments/);
  assert.match(invalid.errors.join('\n'), /incidents/);
  assert.match(invalid.errors.join('\n'), /dependency-removal/);
  assert.match(invalid.errors.join('\n'), /availability/);
  assert.match(invalid.errors.join('\n'), /define-services-through-business-outcomes/);
  assert.match(invalid.errors.join('\n'), /automated-service-level-optimization/);
  assert.match(invalid.errors.join('\n'), /one accountable service owner/);
  assert.match(invalid.errors.join('\n'), /Ticketing platforms are outside ARCH-011-04 scope/);
  assert.match(invalid.errors.join('\n'), /Technical availability alone does not demonstrate service success/);
});

test('service operations assertion rejects incomplete metadata', () => {
  class IncompleteServiceOperationsDescriptor extends ServiceOperationsDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteServiceOperationsDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.SERVICE_OPERATIONS_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('service operations descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ServiceOperationsDescriptor');

  assert.ok(descriptor instanceof ServiceOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
