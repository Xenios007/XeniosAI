import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  WORKFLOW_SERVICE_HEALTH_DIMENSIONS
} from '../constants.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';
import { ServiceOperationsProfile } from '../contracts/service-operations-profile.js';

const LIFECYCLE = Object.freeze(Object.values(SERVICE_OPERATIONAL_LIFECYCLE_STAGES));

export class ServiceOperationsDescriptor {
  objectives() {
    return Object.freeze(Object.values(SERVICE_OPERATIONS_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(SERVICE_OPERATIONS_PRINCIPLES));
  }

  lifecycleStages() {
    return LIFECYCLE;
  }

  classificationDimensions() {
    return Object.freeze(Object.values(SERVICE_CLASSIFICATION_DIMENSIONS));
  }

  serviceTypes() {
    return Object.freeze(Object.values(SERVICE_OPERATION_TYPES));
  }

  ownerAccountabilities() {
    return Object.freeze(Object.values(SERVICE_OWNER_ACCOUNTABILITIES));
  }

  supportingRoles() {
    return Object.freeze(Object.values(SERVICE_OPERATIONS_SUPPORTING_ROLES));
  }

  catalogFields() {
    return Object.freeze(Object.values(SERVICE_CATALOG_RECORD_FIELDS));
  }

  commitmentTypes() {
    return Object.freeze(Object.values(SERVICE_OPERATIONS_COMMITMENT_TYPES));
  }

  commitmentQualityRequirements() {
    return Object.freeze(Object.values(SERVICE_COMMITMENT_QUALITY_REQUIREMENTS));
  }

  serviceLevelIndicatorTypes() {
    return Object.freeze(Object.values(SERVICE_LEVEL_INDICATOR_TYPES));
  }

  lifecycleStates() {
    return Object.freeze(Object.values(SERVICE_OPERATIONAL_LIFECYCLE_STATES));
  }

  readinessRequirements() {
    return Object.freeze(Object.values(SERVICE_OPERATIONAL_READINESS_REQUIREMENTS));
  }

  healthDimensions() {
    return Object.freeze(Object.values(SERVICE_HEALTH_DIMENSIONS));
  }

  healthStates() {
    return Object.freeze(Object.values(SERVICE_HEALTH_STATES));
  }

  eventManagementSteps() {
    return Object.freeze(Object.values(SERVICE_EVENT_MANAGEMENT_STEPS));
  }

  eventCategories() {
    return Object.freeze(Object.values(SERVICE_EVENT_CATEGORIES));
  }

  requestTypes() {
    return Object.freeze(Object.values(SERVICE_REQUEST_TYPES));
  }

  requestRequirements() {
    return Object.freeze(Object.values(SERVICE_REQUEST_REQUIREMENTS));
  }

  supportModelFields() {
    return Object.freeze(Object.values(SERVICE_SUPPORT_MODEL_FIELDS));
  }

  supportTiers() {
    return Object.freeze(Object.values(SERVICE_SUPPORT_TIERS));
  }

  dependencyTypes() {
    return Object.freeze(Object.values(SERVICE_DEPENDENCY_TYPES));
  }

  dependencyOperationFields() {
    return Object.freeze(Object.values(SERVICE_DEPENDENCY_OPERATION_FIELDS));
  }

  sharedServiceControls() {
    return Object.freeze(Object.values(SHARED_SERVICE_OPERATION_CONTROLS));
  }

  degradedModes() {
    return Object.freeze(Object.values(DEGRADED_SERVICE_MODES));
  }

  restorationPriorities() {
    return Object.freeze(Object.values(SERVICE_RESTORATION_PRIORITIES));
  }

  recoveryVerificationDimensions() {
    return Object.freeze(Object.values(SERVICE_RECOVERY_VERIFICATION_DIMENSIONS));
  }

  maintenancePlanningFields() {
    return Object.freeze(Object.values(SERVICE_MAINTENANCE_PLANNING_FIELDS));
  }

  configurationRequirements() {
    return Object.freeze(Object.values(SERVICE_CONFIGURATION_REQUIREMENTS));
  }

  aiServiceHealthDimensions() {
    return Object.freeze(Object.values(AI_SERVICE_HEALTH_DIMENSIONS));
  }

  workflowServiceHealthDimensions() {
    return Object.freeze(Object.values(WORKFLOW_SERVICE_HEALTH_DIMENSIONS));
  }

  integrationServiceHealthDimensions() {
    return Object.freeze(Object.values(INTEGRATION_SERVICE_HEALTH_DIMENSIONS));
  }

  dataServiceHealthDimensions() {
    return Object.freeze(Object.values(DATA_SERVICE_HEALTH_DIMENSIONS));
  }

  multiTenantScopes() {
    return Object.freeze(Object.values(MULTI_TENANT_SERVICE_OPERATION_SCOPES));
  }

  propertyFacingContext() {
    return Object.freeze(Object.values(PROPERTY_FACING_SERVICE_CONTEXT));
  }

  performanceReviewInputs() {
    return Object.freeze(Object.values(SERVICE_PERFORMANCE_REVIEW_INPUTS));
  }

  improvementSources() {
    return Object.freeze(Object.values(SERVICE_IMPROVEMENT_SOURCES));
  }

  retirementRequirements() {
    return Object.freeze(Object.values(SERVICE_RETIREMENT_REQUIREMENTS));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(SERVICE_OPERATIONS_QUALITY_ATTRIBUTES));
  }

  architecturalRules() {
    return Object.freeze(Object.values(SERVICE_OPERATIONS_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_SERVICE_OPERATIONS_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ServiceOperationsProfile
      ? profileInput
      : new ServiceOperationsProfile(profileInput);
    const errors = [];

    if (!profile.serviceOperationsName) errors.push('Service operations profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Service operations objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Service operations principles must include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'Service operational lifecycle must include');
    appendMissing(errors, profile.classificationDimensions, this.classificationDimensions(), 'Service classification dimensions must include');
    appendMissing(errors, profile.serviceTypes, this.serviceTypes(), 'Service types must include');
    appendMissing(errors, profile.ownerAccountabilities, this.ownerAccountabilities(), 'Service Owner accountability must include');
    appendMissing(errors, profile.supportingRoles, this.supportingRoles(), 'Supporting service roles may include');
    appendMissing(errors, profile.catalogFields, this.catalogFields(), 'Service catalog records should include');
    appendMissing(errors, profile.commitmentTypes, this.commitmentTypes(), 'Service commitments may include');
    appendMissing(errors, profile.commitmentQualityRequirements, this.commitmentQualityRequirements(), 'Service commitments should be');
    appendMissing(errors, profile.serviceLevelIndicatorTypes, this.serviceLevelIndicatorTypes(), 'Operational measurement should distinguish');
    appendMissing(errors, profile.lifecycleStates, this.lifecycleStates(), 'Operational lifecycle states must include');
    appendMissing(errors, profile.readinessRequirements, this.readinessRequirements(), 'Operational readiness requires');
    appendMissing(errors, profile.healthDimensions, this.healthDimensions(), 'Service health model must include');
    appendMissing(errors, profile.healthStates, this.healthStates(), 'Service health states should include');
    appendMissing(errors, profile.eventManagementSteps, this.eventManagementSteps(), 'Event management should');
    appendMissing(errors, profile.eventCategories, this.eventCategories(), 'Service events may be');
    appendMissing(errors, profile.requestTypes, this.requestTypes(), 'Service request examples include');
    appendMissing(errors, profile.requestRequirements, this.requestRequirements(), 'Service requests should have');
    appendMissing(errors, profile.supportModelFields, this.supportModelFields(), 'Support model should specify');
    appendMissing(errors, profile.supportTiers, this.supportTiers(), 'Support tiers may include');
    appendMissing(errors, profile.dependencyTypes, this.dependencyTypes(), 'Service owners must maintain awareness of');
    appendMissing(errors, profile.dependencyOperationFields, this.dependencyOperationFields(), 'Dependency operations should define');
    appendMissing(errors, profile.sharedServiceControls, this.sharedServiceControls(), 'Shared-service operations must provide');
    appendMissing(errors, profile.degradedModes, this.degradedModes(), 'Degraded modes may include');
    appendMissing(errors, profile.restorationPriorities, this.restorationPriorities(), 'Service restoration should prioritize');
    appendMissing(errors, profile.recoveryVerificationDimensions, this.recoveryVerificationDimensions(), 'Recovery verification should evaluate');
    appendMissing(errors, profile.maintenancePlanningFields, this.maintenancePlanningFields(), 'Maintenance planning should include');
    appendMissing(errors, profile.configurationRequirements, this.configurationRequirements(), 'Operational configuration must be');
    appendMissing(errors, profile.aiServiceHealthDimensions, this.aiServiceHealthDimensions(), 'AI service health includes');
    appendMissing(errors, profile.workflowServiceHealthDimensions, this.workflowServiceHealthDimensions(), 'Workflow service health includes');
    appendMissing(errors, profile.integrationServiceHealthDimensions, this.integrationServiceHealthDimensions(), 'Integration service health includes');
    appendMissing(errors, profile.dataServiceHealthDimensions, this.dataServiceHealthDimensions(), 'Data service health includes');
    appendMissing(errors, profile.multiTenantScopes, this.multiTenantScopes(), 'Multi-tenant service operations must distinguish');
    appendMissing(errors, profile.propertyFacingContext, this.propertyFacingContext(), 'Property-facing services must account for');
    appendMissing(errors, profile.performanceReviewInputs, this.performanceReviewInputs(), 'Service performance should be reviewed using');
    appendMissing(errors, profile.improvementSources, this.improvementSources(), 'Improvement opportunities may originate from');
    appendMissing(errors, profile.retirementRequirements, this.retirementRequirements(), 'Service retirement must address');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Service operations quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Service operations architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future service operations capabilities may include');
    if (profile.businessOutcomeFirst !== true) errors.push('Service operations must protect business capability and user outcomes.');
    if (profile.accountableServiceOwnerRequired !== true) errors.push('Every production service must have one accountable service owner.');
    if (profile.readinessBeforeProduction !== true) errors.push('Operational readiness must be verified before production use.');
    if (profile.healthMultidimensional !== true) errors.push('Service health must be multidimensional.');
    if (profile.dependenciesOperatedExplicitly !== true) errors.push('Service dependencies must be operated explicitly.');
    if (profile.failureBehaviorDefined !== true) errors.push('Services must define degradation, containment, recovery, and continuity behavior.');
    if (profile.automationGoverned !== true) errors.push('Routine automation must remain bounded, attributable, observable, and verifiable.');
    if (profile.continuousImprovementEnabled !== true) errors.push('Service operations must drive continuous service improvement.');
    if (profile.catalogAuthoritative !== true) errors.push('The enterprise service catalog must be the authoritative logical inventory.');
    if (profile.commitmentsMeasurableOwnedReviewed !== true) errors.push('Service commitments must be measurable, owned, achievable, dependency-aware, and reviewed.');
    if (profile.serviceHealthBusinessAligned !== true) errors.push('Service health must align with business outcomes and commitments.');
    if (profile.supportAndEscalationExplicit !== true) errors.push('Support responsibilities and escalation paths must be explicit.');
    if (profile.degradedModesExplicitObservableCommunicatedTimeBounded !== true) errors.push('Degraded operation must be explicit, observable, communicated, and time bounded.');
    if (profile.restorationEndToEndVerified !== true) errors.push('Service restoration must verify the end-to-end service outcome.');
    if (profile.configurationAndMaintenanceGovernedAsChange !== true) errors.push('Configuration and maintenance must be governed as operational change.');
    if (profile.tenantPropertyIsolationPreserved !== true) errors.push('Service operations must preserve tenant and property isolation.');
    if (profile.operationalObligationsCompleteBeforeRetirement !== true) errors.push('A service is not retired until operational obligations are complete.');
    if (profile.technologyNeutral !== true) errors.push('Service Operations must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Service Operations must remain vendor neutral.');
    if (profile.serviceManagementFrameworkSpecific === true) errors.push('Service-management frameworks are outside ARCH-011-04 scope.');
    if (profile.ticketingPlatformSpecific === true) errors.push('Ticketing platforms are outside ARCH-011-04 scope.');
    if (profile.monitoringProductSpecific === true) errors.push('Monitoring products are outside ARCH-011-04 scope.');
    if (profile.organizationalTeamSpecific === true) errors.push('Organizational team structures are outside ARCH-011-04 scope.');
    if (profile.anonymousTechnicalComponent === true) errors.push('Services must not be operated as anonymous technical components.');
    if (profile.technicalAvailabilityOnly === true) errors.push('Technical availability alone does not demonstrate service success.');
    if (profile.implementationSizeClassification === true) errors.push('Service classification must not be based solely on implementation size or technology.');
    if (profile.silentSecurityOrIsolationWeakening === true) errors.push('Degraded operation must not silently weaken security, data integrity, or tenant isolation.');
    if (profile.providerAvailabilityEqualsAiQuality === true) errors.push('Provider availability must not be treated as proof of acceptable AI service quality.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 13) errors.push('Service Operations must include documented objectives.');
    if (this.principles().length !== 8) errors.push('Service Operations must include documented principles.');
    if (this.lifecycleStages().length !== 9) errors.push('Service Operations must include documented operational lifecycle.');
    if (this.classificationDimensions().length !== 15) errors.push('Service Operations must include documented classification dimensions.');
    if (this.serviceTypes().length !== 8) errors.push('Service Operations must include documented service types.');
    if (this.ownerAccountabilities().length !== 17) errors.push('Service Operations must include documented service owner accountabilities.');
    if (this.supportingRoles().length !== 16) errors.push('Service Operations must include documented supporting roles.');
    if (this.catalogFields().length !== 22) errors.push('Service Operations must include documented service catalog fields.');
    if (this.commitmentTypes().length !== 15) errors.push('Service Operations must include documented commitment types.');
    if (this.commitmentQualityRequirements().length !== 7) errors.push('Service Operations must include documented commitment quality requirements.');
    if (this.serviceLevelIndicatorTypes().length !== 10) errors.push('Service Operations must include documented service-level indicator types.');
    if (this.lifecycleStates().length !== 13) errors.push('Service Operations must include documented lifecycle states.');
    if (this.readinessRequirements().length !== 21) errors.push('Service Operations must include documented readiness requirements.');
    if (this.healthDimensions().length !== 8) errors.push('Service Operations must include documented health dimensions.');
    if (this.healthStates().length !== 9) errors.push('Service Operations must include documented health states.');
    if (this.eventManagementSteps().length !== 9) errors.push('Service Operations must include documented event management steps.');
    if (this.eventCategories().length !== 5) errors.push('Service Operations must include documented event categories.');
    if (this.requestTypes().length !== 9) errors.push('Service Operations must include documented request types.');
    if (this.requestRequirements().length !== 8) errors.push('Service Operations must include documented request requirements.');
    if (this.supportModelFields().length !== 13) errors.push('Service Operations must include documented support model fields.');
    if (this.supportTiers().length !== 5) errors.push('Service Operations must include documented support tiers.');
    if (this.dependencyTypes().length !== 10) errors.push('Service Operations must include documented dependency types.');
    if (this.dependencyOperationFields().length !== 10) errors.push('Service Operations must include documented dependency operation fields.');
    if (this.sharedServiceControls().length !== 10) errors.push('Service Operations must include documented shared-service controls.');
    if (this.degradedModes().length !== 11) errors.push('Service Operations must include documented degraded modes.');
    if (this.restorationPriorities().length !== 10) errors.push('Service Operations must include documented restoration priorities.');
    if (this.recoveryVerificationDimensions().length !== 13) errors.push('Service Operations must include documented recovery verification dimensions.');
    if (this.maintenancePlanningFields().length !== 12) errors.push('Service Operations must include documented maintenance planning fields.');
    if (this.configurationRequirements().length !== 10) errors.push('Service Operations must include documented configuration requirements.');
    if (this.aiServiceHealthDimensions().length !== 12) errors.push('Service Operations must include documented AI service health dimensions.');
    if (this.workflowServiceHealthDimensions().length !== 11) errors.push('Service Operations must include documented workflow service health dimensions.');
    if (this.integrationServiceHealthDimensions().length !== 12) errors.push('Service Operations must include documented integration service health dimensions.');
    if (this.dataServiceHealthDimensions().length !== 12) errors.push('Service Operations must include documented data service health dimensions.');
    if (this.multiTenantScopes().length !== 6) errors.push('Service Operations must include documented multi-tenant scopes.');
    if (this.propertyFacingContext().length !== 10) errors.push('Service Operations must include documented property-facing context.');
    if (this.performanceReviewInputs().length !== 15) errors.push('Service Operations must include documented performance review inputs.');
    if (this.improvementSources().length !== 14) errors.push('Service Operations must include documented improvement sources.');
    if (this.retirementRequirements().length !== 12) errors.push('Service Operations must include documented retirement requirements.');
    if (this.qualityAttributes().length !== 13) errors.push('Service Operations must include documented quality attributes.');
    if (this.architecturalRules().length !== 18) errors.push('Service Operations must include documented architectural rules.');
    if (this.futureCapabilities().length !== 12) errors.push('Service Operations must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.SERVICE_OPERATIONS_INVALID,
        'Service Operations violates ARCH-011-04.',
        { errors }
      );
    }

    return validation(errors);
  }
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
