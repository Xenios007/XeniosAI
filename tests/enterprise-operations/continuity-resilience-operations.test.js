import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_CONTINUITY_OPTIONS,
  AI_CONTINUITY_RISKS,
  BACKUP_OPERATION_REQUIREMENTS,
  BUSINESS_IMPACT_ANALYSIS_DIMENSIONS,
  CONTINUITY_ACTIVATION_TRIGGERS,
  CONTINUITY_AUTHORITY_LEVELS,
  CONTINUITY_BACKLOG_RECOVERY_CONTROLS,
  CONTINUITY_COMMAND_FIELDS,
  CONTINUITY_COMMUNICATION_FIELDS,
  CONTINUITY_EXERCISE_TYPES,
  CONTINUITY_INCIDENT_TRANSITIONS,
  CONTINUITY_OPERATING_MODES,
  CONTINUITY_PLAN_FIELDS,
  CONTINUITY_RESILIENCE_ARCHITECTURAL_RULES,
  CONTINUITY_RESILIENCE_GOVERNANCE_AREAS,
  CONTINUITY_RESILIENCE_MEASURES,
  CONTINUITY_RESILIENCE_OBJECTIVES,
  CONTINUITY_RESILIENCE_PRINCIPLES,
  CONTINUITY_RESILIENCE_QUALITY_ATTRIBUTES,
  CONTINUITY_TOLERANCE_TYPES,
  CRITICAL_BUSINESS_SERVICE_EXAMPLES,
  CRITICAL_SERVICE_RECORD_FIELDS,
  ContinuityResilienceOperationsDescriptor,
  ContinuityResilienceOperationsProfile,
  DATA_CONTINUITY_PROTECTIONS,
  DISASTER_RECOVERY_OPERATION_FIELDS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EXERCISE_DESIGN_FIELDS,
  EXTERNAL_PROVIDER_CONTINUITY_FIELDS,
  FAILBACK_PLAN_FIELDS,
  FUTURE_CONTINUITY_RESILIENCE_CAPABILITIES,
  HUMAN_CONTINUITY_FACTORS,
  INTEGRATION_CONTINUITY_OPTIONS,
  INTEGRATION_CONTINUITY_RISKS,
  MULTI_TENANT_RECOVERY_FACTORS,
  PLATFORM_CONTINUITY_CAPABILITIES,
  PROPERTY_CONTINUITY_CONSIDERATIONS,
  PROVIDER_CONCENTRATION_RISK_CONTROLS,
  RECOVERY_DEPENDENCY_AREAS,
  RECOVERY_OBJECTIVE_TYPES,
  RECOVERY_PRIORITIES,
  RECONCILIATION_REQUIREMENTS,
  RESILIENCE_ASSESSMENT_AREAS,
  RESILIENCE_LIFECYCLE_STAGES,
  RESILIENCE_STRATEGIES,
  RESILIENCE_VALIDATION_AREAS,
  RESTORATION_STEPS,
  RETURN_TO_NORMAL_CRITERIA,
  SECURITY_CONTINUITY_CONTROLS,
  SERVICE_CONTINUITY_FIELDS,
  TENANT_CONTINUITY_FIELDS,
  TIME_BASED_IMPACT_DIMENSIONS,
  WORKFLOW_CONTINUITY_REQUIREMENTS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new ContinuityResilienceOperationsProfile({
    operationsName: 'Continuity and Resilience Operations',
    objectives: Object.values(CONTINUITY_RESILIENCE_OBJECTIVES),
    principles: Object.values(CONTINUITY_RESILIENCE_PRINCIPLES),
    lifecycleStages: Object.values(RESILIENCE_LIFECYCLE_STAGES),
    criticalBusinessServices: Object.values(CRITICAL_BUSINESS_SERVICE_EXAMPLES),
    criticalServiceRecordFields: Object.values(CRITICAL_SERVICE_RECORD_FIELDS),
    businessImpactDimensions: Object.values(BUSINESS_IMPACT_ANALYSIS_DIMENSIONS),
    timeBasedImpactDimensions: Object.values(TIME_BASED_IMPACT_DIMENSIONS),
    continuityToleranceTypes: Object.values(CONTINUITY_TOLERANCE_TYPES),
    recoveryObjectiveTypes: Object.values(RECOVERY_OBJECTIVE_TYPES),
    resilienceStrategies: Object.values(RESILIENCE_STRATEGIES),
    continuityPlanFields: Object.values(CONTINUITY_PLAN_FIELDS),
    operatingModes: Object.values(CONTINUITY_OPERATING_MODES),
    activationTriggers: Object.values(CONTINUITY_ACTIVATION_TRIGGERS),
    authorityLevels: Object.values(CONTINUITY_AUTHORITY_LEVELS),
    commandFields: Object.values(CONTINUITY_COMMAND_FIELDS),
    serviceContinuityFields: Object.values(SERVICE_CONTINUITY_FIELDS),
    aiContinuityRisks: Object.values(AI_CONTINUITY_RISKS),
    aiContinuityOptions: Object.values(AI_CONTINUITY_OPTIONS),
    workflowContinuityRequirements: Object.values(WORKFLOW_CONTINUITY_REQUIREMENTS),
    integrationContinuityRisks: Object.values(INTEGRATION_CONTINUITY_RISKS),
    integrationContinuityOptions: Object.values(INTEGRATION_CONTINUITY_OPTIONS),
    dataContinuityProtections: Object.values(DATA_CONTINUITY_PROTECTIONS),
    platformContinuityCapabilities: Object.values(PLATFORM_CONTINUITY_CAPABILITIES),
    securityContinuityControls: Object.values(SECURITY_CONTINUITY_CONTROLS),
    humanContinuityFactors: Object.values(HUMAN_CONTINUITY_FACTORS),
    propertyContinuityConsiderations: Object.values(PROPERTY_CONTINUITY_CONSIDERATIONS),
    tenantContinuityFields: Object.values(TENANT_CONTINUITY_FIELDS),
    multiTenantRecoveryFactors: Object.values(MULTI_TENANT_RECOVERY_FACTORS),
    externalProviderContinuityFields: Object.values(EXTERNAL_PROVIDER_CONTINUITY_FIELDS),
    providerConcentrationRiskControls: Object.values(PROVIDER_CONCENTRATION_RISK_CONTROLS),
    disasterRecoveryOperationFields: Object.values(DISASTER_RECOVERY_OPERATION_FIELDS),
    backupOperationRequirements: Object.values(BACKUP_OPERATION_REQUIREMENTS),
    restorationSteps: Object.values(RESTORATION_STEPS),
    recoveryPriorities: Object.values(RECOVERY_PRIORITIES),
    recoveryDependencyAreas: Object.values(RECOVERY_DEPENDENCY_AREAS),
    backlogRecoveryControls: Object.values(CONTINUITY_BACKLOG_RECOVERY_CONTROLS),
    reconciliationRequirements: Object.values(RECONCILIATION_REQUIREMENTS),
    returnToNormalCriteria: Object.values(RETURN_TO_NORMAL_CRITERIA),
    failbackPlanFields: Object.values(FAILBACK_PLAN_FIELDS),
    communicationFields: Object.values(CONTINUITY_COMMUNICATION_FIELDS),
    exerciseTypes: Object.values(CONTINUITY_EXERCISE_TYPES),
    exerciseDesignFields: Object.values(EXERCISE_DESIGN_FIELDS),
    resilienceValidationAreas: Object.values(RESILIENCE_VALIDATION_AREAS),
    resilienceAssessmentAreas: Object.values(RESILIENCE_ASSESSMENT_AREAS),
    incidentTransitions: Object.values(CONTINUITY_INCIDENT_TRANSITIONS),
    measures: Object.values(CONTINUITY_RESILIENCE_MEASURES),
    governanceAreas: Object.values(CONTINUITY_RESILIENCE_GOVERNANCE_AREAS),
    qualityAttributes: Object.values(CONTINUITY_RESILIENCE_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(CONTINUITY_RESILIENCE_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_CONTINUITY_RESILIENCE_CAPABILITIES),
    ...overrides
  });
}

test('continuity and resilience operations exposes documented objectives, principles, lifecycle, impact, tolerances, and plans', () => {
  const descriptor = new ContinuityResilienceOperationsDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(CONTINUITY_RESILIENCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(CONTINUITY_RESILIENCE_PRINCIPLES));
  assert.ok(descriptor.lifecycleStages().includes(RESILIENCE_LIFECYCLE_STAGES.LEARN_AND_IMPROVE));
  assert.ok(descriptor.criticalBusinessServices().includes(CRITICAL_BUSINESS_SERVICE_EXAMPLES.EMERGENCY_PROPERTY_COORDINATION));
  assert.ok(descriptor.criticalServiceRecordFields().includes(CRITICAL_SERVICE_RECORD_FIELDS.RESIDUAL_RISKS));
  assert.ok(descriptor.businessImpactDimensions().includes(BUSINESS_IMPACT_ANALYSIS_DIMENSIONS.DEPENDENCY_PROPAGATION));
  assert.ok(descriptor.timeBasedImpactDimensions().includes(TIME_BASED_IMPACT_DIMENSIONS.PROPERTY_OPERATING_WINDOWS));
  assert.ok(descriptor.continuityToleranceTypes().includes(CONTINUITY_TOLERANCE_TYPES.TENANT_SCOPE));
  assert.ok(descriptor.recoveryObjectiveTypes().includes(RECOVERY_OBJECTIVE_TYPES.RECOVERY_CAPACITY_OBJECTIVE));
  assert.ok(descriptor.continuityPlanFields().includes(CONTINUITY_PLAN_FIELDS.EVIDENCE_AND_MAINTENANCE_OWNER));
});

test('continuity and resilience operations exposes activation, domain continuity, recovery, exercises, and governance metadata', () => {
  const descriptor = new ContinuityResilienceOperationsDescriptor();

  assert.ok(descriptor.operatingModes().includes(CONTINUITY_OPERATING_MODES.RETURN_TO_NORMAL_MODE));
  assert.ok(descriptor.activationTriggers().includes(CONTINUITY_ACTIVATION_TRIGGERS.CRISIS_DECLARATION));
  assert.ok(descriptor.authorityLevels().includes(CONTINUITY_AUTHORITY_LEVELS.CRISIS_AUTHORITY));
  assert.ok(descriptor.commandFields().includes(CONTINUITY_COMMAND_FIELDS.EXIT_CRITERIA));
  assert.ok(descriptor.aiContinuityOptions().includes(AI_CONTINUITY_OPTIONS.SUSPENDING_NONCRITICAL_AI_CAPABILITIES));
  assert.ok(descriptor.workflowContinuityRequirements().includes(WORKFLOW_CONTINUITY_REQUIREMENTS.RECONCILIATION));
  assert.ok(descriptor.integrationContinuityOptions().includes(INTEGRATION_CONTINUITY_OPTIONS.PROPERTY_LOCAL_PROCEDURE));
  assert.ok(descriptor.dataContinuityProtections().includes(DATA_CONTINUITY_PROTECTIONS.EVIDENCE));
  assert.ok(descriptor.propertyContinuityConsiderations().includes(PROPERTY_CONTINUITY_CONSIDERATIONS.GUEST_COMMUNICATION));
  assert.ok(descriptor.disasterRecoveryOperationFields().includes(DISASTER_RECOVERY_OPERATION_FIELDS.EVIDENCE));
  assert.ok(descriptor.restorationSteps().includes(RESTORATION_STEPS.MONITOR_STABILITY));
  assert.ok(descriptor.recoveryPriorities().includes(RECOVERY_PRIORITIES.DEFERRED_AND_NONCRITICAL_CAPABILITIES));
  assert.ok(descriptor.exerciseTypes().includes(CONTINUITY_EXERCISE_TYPES.FULL_OR_PARTIAL_CONTINUITY_EXERCISE));
  assert.ok(descriptor.governanceAreas().includes(CONTINUITY_RESILIENCE_GOVERNANCE_AREAS.IMPROVEMENT));
  assert.ok(descriptor.architecturalRules().includes(CONTINUITY_RESILIENCE_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CONTINUITY_RESILIENCE_CAPABILITIES.CONTINUOUS_RESILIENCE_VERIFICATION));
});

test('continuity and resilience operations validates complete and incomplete profiles', () => {
  const descriptor = new ContinuityResilienceOperationsDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    operationsName: '',
    objectives: [CONTINUITY_RESILIENCE_OBJECTIVES.PROTECT_CRITICAL_GUEST_AND_BUSINESS_OUTCOMES],
    principles: [CONTINUITY_RESILIENCE_PRINCIPLES.BUSINESS_OUTCOMES_DEFINE_RESILIENCE],
    lifecycleStages: [RESILIENCE_LIFECYCLE_STAGES.UNDERSTAND_CRITICAL_OUTCOMES],
    criticalBusinessServices: [CRITICAL_BUSINESS_SERVICE_EXAMPLES.GUEST_ACCESS_AND_ESSENTIAL_COMMUNICATION],
    businessOutcomesDefineResilience: false,
    disruptionAssumed: false,
    continueBeforeFullRestoration: false,
    blastRadiusContained: false,
    businessPriorityRecoveryRequired: false,
    dataIntegrityBeforeSpeed: false,
    continuityPracticedBeforeCrisis: false,
    explicitAuthorityRequired: false,
    learningEnabled: false,
    tenantPropertySecurityIsolationPreserved: false,
    recoveryVerifiedByBusinessOutcome: false,
    technologyNeutral: false,
    vendorNeutral: false,
    cloudProviderSpecific: true,
    backupProductSpecific: true,
    disasterRecoveryPlatformSpecific: true,
    organizationalStructureSpecific: true,
    deploymentMechanismSpecific: true,
    securityContinuityReplacement: true,
    disasterRecoveryAsBusinessContinuitySubstitute: true,
    speedOverDataIntegrity: true,
    untestedBackupsAccepted: true,
    silentPermanentSecurityExceptions: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /vendor-neutral-continuity-capabilities/);
  assert.match(invalid.errors.join('\n'), /assume-disruption/);
  assert.match(invalid.errors.join('\n'), /Learn and Improve/);
  assert.match(invalid.errors.join('\n'), /critical business outcomes/);
  assert.match(invalid.errors.join('\n'), /assume disruption/);
  assert.match(invalid.errors.join('\n'), /business priority and dependency order/);
  assert.match(invalid.errors.join('\n'), /Cloud providers are outside ARCH-011-08 scope/);
  assert.match(invalid.errors.join('\n'), /Disaster recovery is not a substitute/);
  assert.match(invalid.errors.join('\n'), /Backups are not reliable/);
});

test('continuity and resilience operations assertion rejects incomplete metadata', () => {
  class IncompleteContinuityResilienceOperationsDescriptor extends ContinuityResilienceOperationsDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteContinuityResilienceOperationsDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.CONTINUITY_RESILIENCE_OPERATIONS_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('continuity and resilience operations descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ContinuityResilienceOperationsDescriptor');

  assert.ok(descriptor instanceof ContinuityResilienceOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
