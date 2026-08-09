import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_CHANGE_ASSESSMENT_DIMENSIONS,
  AI_CHANGE_TYPES,
  CHANGE_AUTHORITY_LEVELS,
  CHANGE_CLASSIFICATION_DIMENSIONS,
  CHANGE_COLLISION_FACTORS,
  CHANGE_EXAMPLES,
  CHANGE_FREEZE_CONDITIONS,
  CHANGE_IMPACT_DIMENSIONS,
  CHANGE_IMPLEMENTATION_CONTROLS,
  CHANGE_LIFECYCLE_STAGES,
  CHANGE_OBSERVATION_CHECKS,
  CHANGE_READINESS_REQUIREMENTS,
  CHANGE_RECORD_FIELDS,
  CHANGE_RELEASE_ARCHITECTURAL_RULES,
  CHANGE_RELEASE_GOVERNANCE_AREAS,
  CHANGE_RELEASE_MEASURES,
  CHANGE_RELEASE_OBJECTIVES,
  CHANGE_RELEASE_PRINCIPLES,
  CHANGE_RELEASE_QUALITY_ATTRIBUTES,
  CHANGE_RELEASE_ROLES,
  CHANGE_RISK_FACTORS,
  CHANGE_STATES,
  CHANGE_STOP_CONDITIONS,
  CHANGE_TYPES,
  CHANGE_VERIFICATION_DIMENSIONS,
  CHANGE_WINDOW_FACTORS,
  COMPENSATION_EXAMPLES,
  CONFIGURATION_CHANGE_REQUIREMENTS,
  DATA_CHANGE_PROTECTIONS,
  DATA_CHANGE_TYPES,
  DEPLOYMENT_RELEASE_SEPARATION_CONTROLS,
  EMERGENCY_CHANGE_FIELDS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  FAILED_CHANGE_REQUIREMENTS,
  FUTURE_CHANGE_RELEASE_CAPABILITIES,
  INTEGRATION_CHANGE_ASSESSMENT_DIMENSIONS,
  MULTI_TENANT_CHANGE_REQUIREMENTS,
  POST_CHANGE_REVIEW_TRIGGERS,
  PROGRESSION_CRITERIA,
  PROGRESSIVE_INTRODUCTION_SCOPES,
  PROPERTY_CHANGE_CONSIDERATIONS,
  RELEASE_COMMUNICATION_FIELDS,
  RELEASE_COMPOSITION_FACTORS,
  RELEASE_MODELS,
  RELEASE_RECORD_FIELDS,
  ROLLBACK_PLAN_FIELDS,
  SECURITY_CHANGE_REQUIREMENTS,
  WORKFLOW_CHANGE_CONSIDERATIONS
} from '../constants.js';
import { ChangeReleaseOperationsProfile } from '../contracts/change-release-operations-profile.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';

const MAP = Object.freeze({
  objectives: CHANGE_RELEASE_OBJECTIVES,
  principles: CHANGE_RELEASE_PRINCIPLES,
  changeExamples: CHANGE_EXAMPLES,
  releaseRecordFields: RELEASE_RECORD_FIELDS,
  changeTypes: CHANGE_TYPES,
  classificationDimensions: CHANGE_CLASSIFICATION_DIMENSIONS,
  changeRecordFields: CHANGE_RECORD_FIELDS,
  lifecycleStages: CHANGE_LIFECYCLE_STAGES,
  states: CHANGE_STATES,
  roles: CHANGE_RELEASE_ROLES,
  authorityLevels: CHANGE_AUTHORITY_LEVELS,
  riskFactors: CHANGE_RISK_FACTORS,
  impactDimensions: CHANGE_IMPACT_DIMENSIONS,
  collisionFactors: CHANGE_COLLISION_FACTORS,
  windowFactors: CHANGE_WINDOW_FACTORS,
  freezeConditions: CHANGE_FREEZE_CONDITIONS,
  readinessRequirements: CHANGE_READINESS_REQUIREMENTS,
  releaseCompositionFactors: RELEASE_COMPOSITION_FACTORS,
  releaseModels: RELEASE_MODELS,
  progressiveScopes: PROGRESSIVE_INTRODUCTION_SCOPES,
  progressionCriteria: PROGRESSION_CRITERIA,
  deploymentReleaseSeparationControls: DEPLOYMENT_RELEASE_SEPARATION_CONTROLS,
  implementationControls: CHANGE_IMPLEMENTATION_CONTROLS,
  verificationDimensions: CHANGE_VERIFICATION_DIMENSIONS,
  observationChecks: CHANGE_OBSERVATION_CHECKS,
  rollbackPlanFields: ROLLBACK_PLAN_FIELDS,
  compensationExamples: COMPENSATION_EXAMPLES,
  stopConditions: CHANGE_STOP_CONDITIONS,
  failedChangeRequirements: FAILED_CHANGE_REQUIREMENTS,
  emergencyChangeFields: EMERGENCY_CHANGE_FIELDS,
  configurationChangeRequirements: CONFIGURATION_CHANGE_REQUIREMENTS,
  dataChangeTypes: DATA_CHANGE_TYPES,
  dataChangeProtections: DATA_CHANGE_PROTECTIONS,
  aiChangeTypes: AI_CHANGE_TYPES,
  aiChangeAssessmentDimensions: AI_CHANGE_ASSESSMENT_DIMENSIONS,
  workflowChangeConsiderations: WORKFLOW_CHANGE_CONSIDERATIONS,
  integrationChangeAssessmentDimensions: INTEGRATION_CHANGE_ASSESSMENT_DIMENSIONS,
  securityChangeRequirements: SECURITY_CHANGE_REQUIREMENTS,
  multiTenantChangeRequirements: MULTI_TENANT_CHANGE_REQUIREMENTS,
  propertyChangeConsiderations: PROPERTY_CHANGE_CONSIDERATIONS,
  releaseCommunicationFields: RELEASE_COMMUNICATION_FIELDS,
  postChangeReviewTriggers: POST_CHANGE_REVIEW_TRIGGERS,
  measures: CHANGE_RELEASE_MEASURES,
  governanceAreas: CHANGE_RELEASE_GOVERNANCE_AREAS,
  qualityAttributes: CHANGE_RELEASE_QUALITY_ATTRIBUTES,
  architecturalRules: CHANGE_RELEASE_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_CHANGE_RELEASE_CAPABILITIES
});

const EXPECTED_COUNTS = Object.freeze({
  objectives: 14,
  principles: 9,
  changeExamples: 18,
  releaseRecordFields: 14,
  changeTypes: 4,
  classificationDimensions: 18,
  changeRecordFields: 31,
  lifecycleStages: 12,
  states: 19,
  roles: 7,
  authorityLevels: 5,
  riskFactors: 22,
  impactDimensions: 17,
  collisionFactors: 10,
  windowFactors: 11,
  freezeConditions: 8,
  readinessRequirements: 18,
  releaseCompositionFactors: 10,
  releaseModels: 12,
  progressiveScopes: 9,
  progressionCriteria: 9,
  deploymentReleaseSeparationControls: 9,
  implementationControls: 10,
  verificationDimensions: 14,
  observationChecks: 11,
  rollbackPlanFields: 11,
  compensationExamples: 7,
  stopConditions: 12,
  failedChangeRequirements: 10,
  emergencyChangeFields: 11,
  configurationChangeRequirements: 11,
  dataChangeTypes: 10,
  dataChangeProtections: 9,
  aiChangeTypes: 10,
  aiChangeAssessmentDimensions: 11,
  workflowChangeConsiderations: 11,
  integrationChangeAssessmentDimensions: 12,
  securityChangeRequirements: 8,
  multiTenantChangeRequirements: 9,
  propertyChangeConsiderations: 10,
  releaseCommunicationFields: 10,
  postChangeReviewTriggers: 9,
  measures: 15,
  governanceAreas: 15,
  qualityAttributes: 12,
  architecturalRules: 18,
  futureCapabilities: 12
});

export class ChangeReleaseOperationsDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  changeExamples() { return values(MAP.changeExamples); }
  releaseRecordFields() { return values(MAP.releaseRecordFields); }
  changeTypes() { return values(MAP.changeTypes); }
  classificationDimensions() { return values(MAP.classificationDimensions); }
  changeRecordFields() { return values(MAP.changeRecordFields); }
  lifecycleStages() { return values(MAP.lifecycleStages); }
  states() { return values(MAP.states); }
  roles() { return values(MAP.roles); }
  authorityLevels() { return values(MAP.authorityLevels); }
  riskFactors() { return values(MAP.riskFactors); }
  impactDimensions() { return values(MAP.impactDimensions); }
  collisionFactors() { return values(MAP.collisionFactors); }
  windowFactors() { return values(MAP.windowFactors); }
  freezeConditions() { return values(MAP.freezeConditions); }
  readinessRequirements() { return values(MAP.readinessRequirements); }
  releaseCompositionFactors() { return values(MAP.releaseCompositionFactors); }
  releaseModels() { return values(MAP.releaseModels); }
  progressiveScopes() { return values(MAP.progressiveScopes); }
  progressionCriteria() { return values(MAP.progressionCriteria); }
  deploymentReleaseSeparationControls() { return values(MAP.deploymentReleaseSeparationControls); }
  implementationControls() { return values(MAP.implementationControls); }
  verificationDimensions() { return values(MAP.verificationDimensions); }
  observationChecks() { return values(MAP.observationChecks); }
  rollbackPlanFields() { return values(MAP.rollbackPlanFields); }
  compensationExamples() { return values(MAP.compensationExamples); }
  stopConditions() { return values(MAP.stopConditions); }
  failedChangeRequirements() { return values(MAP.failedChangeRequirements); }
  emergencyChangeFields() { return values(MAP.emergencyChangeFields); }
  configurationChangeRequirements() { return values(MAP.configurationChangeRequirements); }
  dataChangeTypes() { return values(MAP.dataChangeTypes); }
  dataChangeProtections() { return values(MAP.dataChangeProtections); }
  aiChangeTypes() { return values(MAP.aiChangeTypes); }
  aiChangeAssessmentDimensions() { return values(MAP.aiChangeAssessmentDimensions); }
  workflowChangeConsiderations() { return values(MAP.workflowChangeConsiderations); }
  integrationChangeAssessmentDimensions() { return values(MAP.integrationChangeAssessmentDimensions); }
  securityChangeRequirements() { return values(MAP.securityChangeRequirements); }
  multiTenantChangeRequirements() { return values(MAP.multiTenantChangeRequirements); }
  propertyChangeConsiderations() { return values(MAP.propertyChangeConsiderations); }
  releaseCommunicationFields() { return values(MAP.releaseCommunicationFields); }
  postChangeReviewTriggers() { return values(MAP.postChangeReviewTriggers); }
  measures() { return values(MAP.measures); }
  governanceAreas() { return values(MAP.governanceAreas); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ChangeReleaseOperationsProfile
      ? profileInput
      : new ChangeReleaseOperationsProfile(profileInput);
    const errors = [];

    if (!profile.operationsName) errors.push('Change and release operations profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.businessValueAligned !== true) errors.push('Change must enable business value.');
    if (profile.riskProportionateControl !== true) errors.push('Controls must be proportionate to risk and impact.');
    if (profile.accountableChangeOwnerRequired !== true) errors.push('Every change must have one accountable Change Owner.');
    if (profile.productionChangeRequiresAuthority !== true) errors.push('All production changes require authority.');
    if (profile.readinessVerifiedBeforeIntroduction !== true) errors.push('Readiness must be verified before introduction.');
    if (profile.blastRadiusMinimized !== true) errors.push('Changes should minimize scope and blast radius.');
    if (profile.deploymentReleaseSeparatedWhereBeneficial !== true) errors.push('Deployment and release must be separable where beneficial.');
    if (profile.outcomesVerified !== true) errors.push('Business and service outcomes must be verified.');
    if (profile.materialChangeLearningEnabled !== true) errors.push('Material changes must improve future practices.');
    if (profile.authorityExplicitReviewableConstrained !== true) errors.push('Change authority must be explicit, reviewable, and constrained.');
    if (profile.toolPermissionNotAuthority !== true) errors.push('Tool permission does not constitute change authority.');
    if (profile.rollbackOrCompensationProvided !== true) errors.push('Rollback or compensation must be provided.');
    if (profile.stopConditionsEnforced !== true) errors.push('Stop conditions must be enforced.');
    if (profile.emergencyChangeAccountable !== true) errors.push('Emergency change must not remove accountability.');
    if (profile.configurationDataAiWorkflowIntegrationSecurityGoverned !== true) errors.push('Configuration, data, AI, workflow, integration, and security changes must be governed.');
    if (profile.tenantPropertyIsolationPreserved !== true) errors.push('Tenant and property isolation must be preserved.');
    if (profile.failedChangesBecomeLearning !== true) errors.push('Failed changes must become incident and problem learning.');
    if (profile.technologyNeutral !== true) errors.push('Change and Release Operations must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Change and Release Operations must remain vendor neutral.');
    if (profile.sourceControlPlatformSpecific === true) errors.push('Source-control platforms are outside ARCH-011-06 scope.');
    if (profile.deploymentToolSpecific === true) errors.push('Deployment tools are outside ARCH-011-06 scope.');
    if (profile.releaseProductSpecific === true) errors.push('Release products are outside ARCH-011-06 scope.');
    if (profile.infrastructureProviderSpecific === true) errors.push('Infrastructure providers are outside ARCH-011-06 scope.');
    if (profile.organizationalApprovalBoardSpecific === true) errors.push('Organizational approval boards are outside ARCH-011-06 scope.');
    if (profile.sdlcSpecific === true) errors.push('Software-development lifecycle details are outside ARCH-011-06 scope.');
    if (profile.pipelineProductSpecific === true) errors.push('Pipeline products are outside ARCH-011-06 scope.');
    if (profile.approvalAsObjective === true) errors.push('Approval is not the objective.');
    if (profile.deploymentSuccessEqualsChangeSuccess === true) errors.push('Successful deployment does not prove successful change.');
    if (profile.unauthorizedProductionChange === true) errors.push('Unauthorized production change is prohibited.');
    if (profile.directUnrecordedProductionConfiguration === true) errors.push('Direct unrecorded production configuration is prohibited.');
    if (profile.emergencyBypassForConvenience === true) errors.push('Emergency status must not bypass planning for convenience.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, count] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== count) errors.push(`Change and Release Operations must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.CHANGE_RELEASE_OPERATIONS_INVALID,
        'Change and Release Operations violates ARCH-011-06.',
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
