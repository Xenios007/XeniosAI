import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  ChangeReleaseOperationsDescriptor,
  ChangeReleaseOperationsProfile,
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
  WORKFLOW_CHANGE_CONSIDERATIONS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new ChangeReleaseOperationsProfile({
    operationsName: 'Change and Release Operations',
    objectives: Object.values(CHANGE_RELEASE_OBJECTIVES),
    principles: Object.values(CHANGE_RELEASE_PRINCIPLES),
    changeExamples: Object.values(CHANGE_EXAMPLES),
    releaseRecordFields: Object.values(RELEASE_RECORD_FIELDS),
    changeTypes: Object.values(CHANGE_TYPES),
    classificationDimensions: Object.values(CHANGE_CLASSIFICATION_DIMENSIONS),
    changeRecordFields: Object.values(CHANGE_RECORD_FIELDS),
    lifecycleStages: Object.values(CHANGE_LIFECYCLE_STAGES),
    states: Object.values(CHANGE_STATES),
    roles: Object.values(CHANGE_RELEASE_ROLES),
    authorityLevels: Object.values(CHANGE_AUTHORITY_LEVELS),
    riskFactors: Object.values(CHANGE_RISK_FACTORS),
    impactDimensions: Object.values(CHANGE_IMPACT_DIMENSIONS),
    collisionFactors: Object.values(CHANGE_COLLISION_FACTORS),
    windowFactors: Object.values(CHANGE_WINDOW_FACTORS),
    freezeConditions: Object.values(CHANGE_FREEZE_CONDITIONS),
    readinessRequirements: Object.values(CHANGE_READINESS_REQUIREMENTS),
    releaseCompositionFactors: Object.values(RELEASE_COMPOSITION_FACTORS),
    releaseModels: Object.values(RELEASE_MODELS),
    progressiveScopes: Object.values(PROGRESSIVE_INTRODUCTION_SCOPES),
    progressionCriteria: Object.values(PROGRESSION_CRITERIA),
    deploymentReleaseSeparationControls: Object.values(DEPLOYMENT_RELEASE_SEPARATION_CONTROLS),
    implementationControls: Object.values(CHANGE_IMPLEMENTATION_CONTROLS),
    verificationDimensions: Object.values(CHANGE_VERIFICATION_DIMENSIONS),
    observationChecks: Object.values(CHANGE_OBSERVATION_CHECKS),
    rollbackPlanFields: Object.values(ROLLBACK_PLAN_FIELDS),
    compensationExamples: Object.values(COMPENSATION_EXAMPLES),
    stopConditions: Object.values(CHANGE_STOP_CONDITIONS),
    failedChangeRequirements: Object.values(FAILED_CHANGE_REQUIREMENTS),
    emergencyChangeFields: Object.values(EMERGENCY_CHANGE_FIELDS),
    configurationChangeRequirements: Object.values(CONFIGURATION_CHANGE_REQUIREMENTS),
    dataChangeTypes: Object.values(DATA_CHANGE_TYPES),
    dataChangeProtections: Object.values(DATA_CHANGE_PROTECTIONS),
    aiChangeTypes: Object.values(AI_CHANGE_TYPES),
    aiChangeAssessmentDimensions: Object.values(AI_CHANGE_ASSESSMENT_DIMENSIONS),
    workflowChangeConsiderations: Object.values(WORKFLOW_CHANGE_CONSIDERATIONS),
    integrationChangeAssessmentDimensions: Object.values(INTEGRATION_CHANGE_ASSESSMENT_DIMENSIONS),
    securityChangeRequirements: Object.values(SECURITY_CHANGE_REQUIREMENTS),
    multiTenantChangeRequirements: Object.values(MULTI_TENANT_CHANGE_REQUIREMENTS),
    propertyChangeConsiderations: Object.values(PROPERTY_CHANGE_CONSIDERATIONS),
    releaseCommunicationFields: Object.values(RELEASE_COMMUNICATION_FIELDS),
    postChangeReviewTriggers: Object.values(POST_CHANGE_REVIEW_TRIGGERS),
    measures: Object.values(CHANGE_RELEASE_MEASURES),
    governanceAreas: Object.values(CHANGE_RELEASE_GOVERNANCE_AREAS),
    qualityAttributes: Object.values(CHANGE_RELEASE_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(CHANGE_RELEASE_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_CHANGE_RELEASE_CAPABILITIES),
    ...overrides
  });
}

test('change and release operations exposes documented objectives, principles, records, lifecycle, and authority', () => {
  const descriptor = new ChangeReleaseOperationsDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(CHANGE_RELEASE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(CHANGE_RELEASE_PRINCIPLES));
  assert.ok(descriptor.changeExamples().includes(CHANGE_EXAMPLES.OPERATIONAL_PROCEDURE_CHANGE));
  assert.ok(descriptor.releaseRecordFields().includes(RELEASE_RECORD_FIELDS.OWNERSHIP));
  assert.ok(descriptor.changeTypes().includes(CHANGE_TYPES.EXCEPTIONAL_CHANGE));
  assert.ok(descriptor.classificationDimensions().includes(CHANGE_CLASSIFICATION_DIMENSIONS.PLANNED_OR_EMERGENCY_STATUS));
  assert.ok(descriptor.changeRecordFields().includes(CHANGE_RECORD_FIELDS.REVIEW_STATUS));
  assert.ok(descriptor.lifecycleStages().includes(CHANGE_LIFECYCLE_STAGES.REVIEW_AND_IMPROVE));
  assert.ok(descriptor.states().includes(CHANGE_STATES.UNDER_REVIEW));
  assert.ok(descriptor.roles().includes(CHANGE_RELEASE_ROLES.BUSINESS_OWNER));
  assert.ok(descriptor.authorityLevels().includes(CHANGE_AUTHORITY_LEVELS.EMERGENCY_AUTHORITY));
});

test('change and release operations exposes risk, readiness, release, verification, rollback, specialized change, and governance metadata', () => {
  const descriptor = new ChangeReleaseOperationsDescriptor();

  assert.ok(descriptor.riskFactors().includes(CHANGE_RISK_FACTORS.REGULATORY_RELEVANCE));
  assert.ok(descriptor.impactDimensions().includes(CHANGE_IMPACT_DIMENSIONS.CONTINUITY_ARRANGEMENTS));
  assert.ok(descriptor.collisionFactors().includes(CHANGE_COLLISION_FACTORS.LIMITED_SUPPORT_RESOURCES));
  assert.ok(descriptor.windowFactors().includes(CHANGE_WINDOW_FACTORS.FREEZE_PERIODS));
  assert.ok(descriptor.readinessRequirements().includes(CHANGE_READINESS_REQUIREMENTS.CONTINUITY_ARRANGEMENTS));
  assert.ok(descriptor.releaseModels().includes(RELEASE_MODELS.WORKFLOW_RELEASE));
  assert.ok(descriptor.progressiveScopes().includes(PROGRESSIVE_INTRODUCTION_SCOPES.BUSINESS_CAPABILITIES));
  assert.ok(descriptor.verificationDimensions().includes(CHANGE_VERIFICATION_DIMENSIONS.NO_UNINTENDED_SCOPE));
  assert.ok(descriptor.rollbackPlanFields().includes(ROLLBACK_PLAN_FIELDS.MAXIMUM_DECISION_TIME));
  assert.ok(descriptor.compensationExamples().includes(COMPENSATION_EXAMPLES.MANUAL_RECONCILIATION));
  assert.ok(descriptor.stopConditions().includes(CHANGE_STOP_CONDITIONS.REQUIRED_OWNER_UNAVAILABLE));
  assert.ok(descriptor.dataChangeTypes().includes(DATA_CHANGE_TYPES.DELETION));
  assert.ok(descriptor.aiChangeTypes().includes(AI_CHANGE_TYPES.AUTONOMY_LEVEL));
  assert.ok(descriptor.workflowChangeConsiderations().includes(WORKFLOW_CHANGE_CONSIDERATIONS.RECOVERY));
  assert.ok(descriptor.integrationChangeAssessmentDimensions().includes(INTEGRATION_CHANGE_ASSESSMENT_DIMENSIONS.COMMUNICATION));
  assert.ok(descriptor.releaseCommunicationFields().includes(RELEASE_COMMUNICATION_FIELDS.COMPLETION_CONFIRMATION));
  assert.ok(descriptor.governanceAreas().includes(CHANGE_RELEASE_GOVERNANCE_AREAS.METRICS));
  assert.ok(descriptor.architecturalRules().includes(CHANGE_RELEASE_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CHANGE_RELEASE_CAPABILITIES.SELF_IMPROVING_CHANGE_MODELS));
});

test('change and release operations validates complete and incomplete profiles', () => {
  const descriptor = new ChangeReleaseOperationsDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    operationsName: '',
    objectives: [CHANGE_RELEASE_OBJECTIVES.SAFE_AND_PREDICTABLE_CHANGE],
    principles: [CHANGE_RELEASE_PRINCIPLES.CHANGE_ENABLES_BUSINESS_VALUE],
    changeExamples: [CHANGE_EXAMPLES.APPLICATION_DEPLOYMENT],
    releaseRecordFields: [RELEASE_RECORD_FIELDS.PURPOSE],
    changeTypes: [CHANGE_TYPES.STANDARD_CHANGE],
    classificationDimensions: [CHANGE_CLASSIFICATION_DIMENSIONS.BUSINESS_CAPABILITY],
    changeRecordFields: [CHANGE_RECORD_FIELDS.CHANGE_IDENTIFIER],
    lifecycleStages: [CHANGE_LIFECYCLE_STAGES.IDENTIFY_NEED],
    states: [CHANGE_STATES.PROPOSED],
    roles: [CHANGE_RELEASE_ROLES.CHANGE_OWNER],
    authorityLevels: [CHANGE_AUTHORITY_LEVELS.PREAUTHORIZED_AUTHORITY],
    riskFactors: [CHANGE_RISK_FACTORS.BUSINESS_CRITICALITY],
    businessValueAligned: false,
    riskProportionateControl: false,
    accountableChangeOwnerRequired: false,
    productionChangeRequiresAuthority: false,
    readinessVerifiedBeforeIntroduction: false,
    rollbackOrCompensationProvided: false,
    stopConditionsEnforced: false,
    emergencyChangeAccountable: false,
    tenantPropertyIsolationPreserved: false,
    technologyNeutral: false,
    vendorNeutral: false,
    sourceControlPlatformSpecific: true,
    deploymentToolSpecific: true,
    releaseProductSpecific: true,
    infrastructureProviderSpecific: true,
    organizationalApprovalBoardSpecific: true,
    sdlcSpecific: true,
    pipelineProductSpecific: true,
    approvalAsObjective: true,
    deploymentSuccessEqualsChangeSuccess: true,
    unauthorizedProductionChange: true,
    directUnrecordedProductionConfiguration: true,
    emergencyBypassForConvenience: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /business-aligned-release-outcomes/);
  assert.match(invalid.errors.join('\n'), /risk-proportionate-control/);
  assert.match(invalid.errors.join('\n'), /service-configuration/);
  assert.match(invalid.errors.join('\n'), /business-value/);
  assert.match(invalid.errors.join('\n'), /normal-change/);
  assert.match(invalid.errors.join('\n'), /service-or-domain/);
  assert.match(invalid.errors.join('\n'), /title-and-description/);
  assert.match(invalid.errors.join('\n'), /Record and Classify/);
  assert.match(invalid.errors.join('\n'), /assessing/);
  assert.match(invalid.errors.join('\n'), /release-owner/);
  assert.match(invalid.errors.join('\n'), /service-or-domain-authority/);
  assert.match(invalid.errors.join('\n'), /guest-and-property-impact/);
  assert.match(invalid.errors.join('\n'), /Change must enable business value/);
  assert.match(invalid.errors.join('\n'), /All production changes require authority/);
  assert.match(invalid.errors.join('\n'), /Source-control platforms are outside ARCH-011-06 scope/);
  assert.match(invalid.errors.join('\n'), /Approval is not the objective/);
  assert.match(invalid.errors.join('\n'), /Direct unrecorded production configuration is prohibited/);
});

test('change and release operations assertion rejects incomplete metadata', () => {
  class IncompleteChangeReleaseOperationsDescriptor extends ChangeReleaseOperationsDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteChangeReleaseOperationsDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.CHANGE_RELEASE_OPERATIONS_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('change and release operations descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ChangeReleaseOperationsDescriptor');

  assert.ok(descriptor instanceof ChangeReleaseOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
