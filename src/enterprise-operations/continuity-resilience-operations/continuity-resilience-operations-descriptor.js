import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  WORKFLOW_CONTINUITY_REQUIREMENTS
} from '../constants.js';
import { ContinuityResilienceOperationsProfile } from '../contracts/continuity-resilience-operations-profile.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';

const MAP = Object.freeze({
  objectives: CONTINUITY_RESILIENCE_OBJECTIVES,
  principles: CONTINUITY_RESILIENCE_PRINCIPLES,
  lifecycleStages: RESILIENCE_LIFECYCLE_STAGES,
  criticalBusinessServices: CRITICAL_BUSINESS_SERVICE_EXAMPLES,
  criticalServiceRecordFields: CRITICAL_SERVICE_RECORD_FIELDS,
  businessImpactDimensions: BUSINESS_IMPACT_ANALYSIS_DIMENSIONS,
  timeBasedImpactDimensions: TIME_BASED_IMPACT_DIMENSIONS,
  continuityToleranceTypes: CONTINUITY_TOLERANCE_TYPES,
  recoveryObjectiveTypes: RECOVERY_OBJECTIVE_TYPES,
  resilienceStrategies: RESILIENCE_STRATEGIES,
  continuityPlanFields: CONTINUITY_PLAN_FIELDS,
  operatingModes: CONTINUITY_OPERATING_MODES,
  activationTriggers: CONTINUITY_ACTIVATION_TRIGGERS,
  authorityLevels: CONTINUITY_AUTHORITY_LEVELS,
  commandFields: CONTINUITY_COMMAND_FIELDS,
  serviceContinuityFields: SERVICE_CONTINUITY_FIELDS,
  aiContinuityRisks: AI_CONTINUITY_RISKS,
  aiContinuityOptions: AI_CONTINUITY_OPTIONS,
  workflowContinuityRequirements: WORKFLOW_CONTINUITY_REQUIREMENTS,
  integrationContinuityRisks: INTEGRATION_CONTINUITY_RISKS,
  integrationContinuityOptions: INTEGRATION_CONTINUITY_OPTIONS,
  dataContinuityProtections: DATA_CONTINUITY_PROTECTIONS,
  platformContinuityCapabilities: PLATFORM_CONTINUITY_CAPABILITIES,
  securityContinuityControls: SECURITY_CONTINUITY_CONTROLS,
  humanContinuityFactors: HUMAN_CONTINUITY_FACTORS,
  propertyContinuityConsiderations: PROPERTY_CONTINUITY_CONSIDERATIONS,
  tenantContinuityFields: TENANT_CONTINUITY_FIELDS,
  multiTenantRecoveryFactors: MULTI_TENANT_RECOVERY_FACTORS,
  externalProviderContinuityFields: EXTERNAL_PROVIDER_CONTINUITY_FIELDS,
  providerConcentrationRiskControls: PROVIDER_CONCENTRATION_RISK_CONTROLS,
  disasterRecoveryOperationFields: DISASTER_RECOVERY_OPERATION_FIELDS,
  backupOperationRequirements: BACKUP_OPERATION_REQUIREMENTS,
  restorationSteps: RESTORATION_STEPS,
  recoveryPriorities: RECOVERY_PRIORITIES,
  recoveryDependencyAreas: RECOVERY_DEPENDENCY_AREAS,
  backlogRecoveryControls: CONTINUITY_BACKLOG_RECOVERY_CONTROLS,
  reconciliationRequirements: RECONCILIATION_REQUIREMENTS,
  returnToNormalCriteria: RETURN_TO_NORMAL_CRITERIA,
  failbackPlanFields: FAILBACK_PLAN_FIELDS,
  communicationFields: CONTINUITY_COMMUNICATION_FIELDS,
  exerciseTypes: CONTINUITY_EXERCISE_TYPES,
  exerciseDesignFields: EXERCISE_DESIGN_FIELDS,
  resilienceValidationAreas: RESILIENCE_VALIDATION_AREAS,
  resilienceAssessmentAreas: RESILIENCE_ASSESSMENT_AREAS,
  incidentTransitions: CONTINUITY_INCIDENT_TRANSITIONS,
  measures: CONTINUITY_RESILIENCE_MEASURES,
  governanceAreas: CONTINUITY_RESILIENCE_GOVERNANCE_AREAS,
  qualityAttributes: CONTINUITY_RESILIENCE_QUALITY_ATTRIBUTES,
  architecturalRules: CONTINUITY_RESILIENCE_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_CONTINUITY_RESILIENCE_CAPABILITIES
});

const EXPECTED_COUNTS = Object.freeze({
  objectives: 14,
  principles: 9,
  lifecycleStages: 11,
  criticalBusinessServices: 12,
  criticalServiceRecordFields: 20,
  businessImpactDimensions: 15,
  timeBasedImpactDimensions: 10,
  continuityToleranceTypes: 13,
  recoveryObjectiveTypes: 5,
  resilienceStrategies: 18,
  continuityPlanFields: 22,
  operatingModes: 6,
  activationTriggers: 16,
  authorityLevels: 6,
  commandFields: 13,
  serviceContinuityFields: 11,
  aiContinuityRisks: 9,
  aiContinuityOptions: 9,
  workflowContinuityRequirements: 11,
  integrationContinuityRisks: 10,
  integrationContinuityOptions: 9,
  dataContinuityProtections: 12,
  platformContinuityCapabilities: 12,
  securityContinuityControls: 10,
  humanContinuityFactors: 11,
  propertyContinuityConsiderations: 13,
  tenantContinuityFields: 10,
  multiTenantRecoveryFactors: 10,
  externalProviderContinuityFields: 12,
  providerConcentrationRiskControls: 7,
  disasterRecoveryOperationFields: 14,
  backupOperationRequirements: 12,
  restorationSteps: 12,
  recoveryPriorities: 11,
  recoveryDependencyAreas: 13,
  backlogRecoveryControls: 11,
  reconciliationRequirements: 10,
  returnToNormalCriteria: 11,
  failbackPlanFields: 10,
  communicationFields: 9,
  exerciseTypes: 12,
  exerciseDesignFields: 12,
  resilienceValidationAreas: 12,
  resilienceAssessmentAreas: 15,
  incidentTransitions: 8,
  measures: 16,
  governanceAreas: 15,
  qualityAttributes: 12,
  architecturalRules: 18,
  futureCapabilities: 12
});

export class ContinuityResilienceOperationsDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  lifecycleStages() { return values(MAP.lifecycleStages); }
  criticalBusinessServices() { return values(MAP.criticalBusinessServices); }
  criticalServiceRecordFields() { return values(MAP.criticalServiceRecordFields); }
  businessImpactDimensions() { return values(MAP.businessImpactDimensions); }
  timeBasedImpactDimensions() { return values(MAP.timeBasedImpactDimensions); }
  continuityToleranceTypes() { return values(MAP.continuityToleranceTypes); }
  recoveryObjectiveTypes() { return values(MAP.recoveryObjectiveTypes); }
  resilienceStrategies() { return values(MAP.resilienceStrategies); }
  continuityPlanFields() { return values(MAP.continuityPlanFields); }
  operatingModes() { return values(MAP.operatingModes); }
  activationTriggers() { return values(MAP.activationTriggers); }
  authorityLevels() { return values(MAP.authorityLevels); }
  commandFields() { return values(MAP.commandFields); }
  serviceContinuityFields() { return values(MAP.serviceContinuityFields); }
  aiContinuityRisks() { return values(MAP.aiContinuityRisks); }
  aiContinuityOptions() { return values(MAP.aiContinuityOptions); }
  workflowContinuityRequirements() { return values(MAP.workflowContinuityRequirements); }
  integrationContinuityRisks() { return values(MAP.integrationContinuityRisks); }
  integrationContinuityOptions() { return values(MAP.integrationContinuityOptions); }
  dataContinuityProtections() { return values(MAP.dataContinuityProtections); }
  platformContinuityCapabilities() { return values(MAP.platformContinuityCapabilities); }
  securityContinuityControls() { return values(MAP.securityContinuityControls); }
  humanContinuityFactors() { return values(MAP.humanContinuityFactors); }
  propertyContinuityConsiderations() { return values(MAP.propertyContinuityConsiderations); }
  tenantContinuityFields() { return values(MAP.tenantContinuityFields); }
  multiTenantRecoveryFactors() { return values(MAP.multiTenantRecoveryFactors); }
  externalProviderContinuityFields() { return values(MAP.externalProviderContinuityFields); }
  providerConcentrationRiskControls() { return values(MAP.providerConcentrationRiskControls); }
  disasterRecoveryOperationFields() { return values(MAP.disasterRecoveryOperationFields); }
  backupOperationRequirements() { return values(MAP.backupOperationRequirements); }
  restorationSteps() { return values(MAP.restorationSteps); }
  recoveryPriorities() { return values(MAP.recoveryPriorities); }
  recoveryDependencyAreas() { return values(MAP.recoveryDependencyAreas); }
  backlogRecoveryControls() { return values(MAP.backlogRecoveryControls); }
  reconciliationRequirements() { return values(MAP.reconciliationRequirements); }
  returnToNormalCriteria() { return values(MAP.returnToNormalCriteria); }
  failbackPlanFields() { return values(MAP.failbackPlanFields); }
  communicationFields() { return values(MAP.communicationFields); }
  exerciseTypes() { return values(MAP.exerciseTypes); }
  exerciseDesignFields() { return values(MAP.exerciseDesignFields); }
  resilienceValidationAreas() { return values(MAP.resilienceValidationAreas); }
  resilienceAssessmentAreas() { return values(MAP.resilienceAssessmentAreas); }
  incidentTransitions() { return values(MAP.incidentTransitions); }
  measures() { return values(MAP.measures); }
  governanceAreas() { return values(MAP.governanceAreas); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ContinuityResilienceOperationsProfile
      ? profileInput
      : new ContinuityResilienceOperationsProfile(profileInput);
    const errors = [];

    if (!profile.operationsName) errors.push('Continuity and resilience operations profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.businessOutcomesDefineResilience !== true) errors.push('Resilience must be defined through critical business outcomes.');
    if (profile.disruptionAssumed !== true) errors.push('Continuity architecture must assume disruption.');
    if (profile.continueBeforeFullRestoration !== true) errors.push('Priority outcomes must continue before full restoration when needed.');
    if (profile.blastRadiusContained !== true) errors.push('Failure and recovery actions must contain blast radius.');
    if (profile.businessPriorityRecoveryRequired !== true) errors.push('Recovery must follow business priority and dependency order.');
    if (profile.dataIntegrityBeforeSpeed !== true) errors.push('Recovery must preserve data integrity before speed.');
    if (profile.continuityPracticedBeforeCrisis !== true) errors.push('Continuity capabilities must be exercised before crisis.');
    if (profile.explicitAuthorityRequired !== true) errors.push('Activation and recovery must have explicit authority.');
    if (profile.learningEnabled !== true) errors.push('Incidents, exercises, and recovery attempts must improve resilience.');
    if (profile.tenantPropertySecurityIsolationPreserved !== true) errors.push('Tenant, property, data, service, and security isolation must be preserved.');
    if (profile.recoveryVerifiedByBusinessOutcome !== true) errors.push('Recovery must be verified through business outcomes.');
    if (profile.technologyNeutral !== true) errors.push('Continuity and Resilience Operations must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Continuity and Resilience Operations must remain vendor neutral.');
    if (profile.cloudProviderSpecific === true) errors.push('Cloud providers are outside ARCH-011-08 scope.');
    if (profile.backupProductSpecific === true) errors.push('Backup products are outside ARCH-011-08 scope.');
    if (profile.disasterRecoveryPlatformSpecific === true) errors.push('Disaster-recovery platforms are outside ARCH-011-08 scope.');
    if (profile.organizationalStructureSpecific === true) errors.push('Organizational structures are outside ARCH-011-08 scope.');
    if (profile.deploymentMechanismSpecific === true) errors.push('Detailed deployment mechanisms are outside ARCH-011-08 scope.');
    if (profile.securityContinuityReplacement === true) errors.push('Security continuity must remain aligned with ARCH-008.');
    if (profile.disasterRecoveryAsBusinessContinuitySubstitute === true) errors.push('Disaster recovery is not a substitute for business continuity.');
    if (profile.speedOverDataIntegrity === true) errors.push('Recovery must not sacrifice data integrity for speed.');
    if (profile.untestedBackupsAccepted === true) errors.push('Backups are not reliable until restoration has been tested.');
    if (profile.silentPermanentSecurityExceptions === true) errors.push('Temporary continuity measures must not become silent permanent security exceptions.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, count] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== count) errors.push(`Continuity and Resilience Operations must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.CONTINUITY_RESILIENCE_OPERATIONS_INVALID,
        'Continuity and Resilience Operations violates ARCH-011-08.',
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
