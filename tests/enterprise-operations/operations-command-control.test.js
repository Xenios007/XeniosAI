import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_ASSISTED_COMMAND_SUPPORT_TYPES,
  AUTONOMOUS_ACTION_ESCALATION_TRIGGERS,
  AUTONOMOUS_OPERATIONAL_ACTION_CRITERIA,
  BUSINESS_SERVICE_PRIORITY_EXAMPLES,
  COMMAND_ASSIGNMENT_FACTORS,
  COMMAND_CONTROL_ARCHITECTURAL_RULES,
  COMMAND_CONTROL_QUALITY_ATTRIBUTES,
  COMMAND_DE_ESCALATION_CRITERIA,
  COMMAND_ESCALATION_TRIGGERS,
  COMMUNICATION_CADENCE_FACTORS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  ESCALATION_INCREASES,
  EXTERNAL_COORDINATION_PARTNERS,
  FUTURE_COMMAND_CONTROL_CAPABILITIES,
  MULTI_TENANT_COMMAND_SCOPES,
  OPERATIONAL_ACTION_CONTROL_FIELDS,
  OPERATIONAL_COMMAND_LEVELS,
  OPERATIONAL_COMMUNICATION_CLASSES,
  OPERATIONAL_CONTROL_PLANE_STAGES,
  OPERATIONAL_DECISION_CLASSES,
  OPERATIONAL_DECISION_RECORD_FIELDS,
  OPERATIONAL_DECLARATION_STEPS,
  OPERATIONAL_GUARDRAILS,
  OPERATIONAL_IMPACT_DIMENSIONS,
  OPERATIONAL_PRIORITY_USES,
  OPERATIONAL_RISK_FACTORS,
  OPERATIONAL_SITUATION_MODEL_FIELDS,
  OPERATIONAL_SITUATION_ORIGINS,
  OPERATIONAL_TIMELINE_EVENTS,
  OPERATIONAL_TRANSITION_CRITERIA,
  OPERATIONS_COMMAND_CONTROL_OBJECTIVES,
  OPERATIONS_COMMAND_CONTROL_PRINCIPLES,
  OPERATIONS_COMMAND_ROLES,
  OperationsCommandControlDescriptor,
  OperationsCommandControlProfile,
  POST_EVENT_LEARNING_AREAS,
  PROPERTY_COORDINATION_CONTEXT,
  RECOVERY_VERIFICATION_DIMENSIONS,
  SITUATION_REVIEW_CYCLE_STAGES,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

test('operations command and control exposes documented objectives, principles, control plane, and situation model', () => {
  const descriptor = new OperationsCommandControlDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(OPERATIONS_COMMAND_CONTROL_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(OPERATIONS_COMMAND_CONTROL_PRINCIPLES));
  assert.deepEqual(descriptor.controlPlaneStages(), Object.values(OPERATIONAL_CONTROL_PLANE_STAGES));
  assert.deepEqual(descriptor.situationOrigins(), Object.values(OPERATIONAL_SITUATION_ORIGINS));
  assert.deepEqual(descriptor.situationModelFields(), Object.values(OPERATIONAL_SITUATION_MODEL_FIELDS));
});

test('operations command and control exposes command, decision, action, escalation, communication, recovery, and future metadata', () => {
  const descriptor = new OperationsCommandControlDescriptor();

  assert.ok(descriptor.commandLevels().includes(OPERATIONAL_COMMAND_LEVELS.ENTERPRISE_CRISIS_COMMAND));
  assert.ok(descriptor.commandRoles().includes(OPERATIONS_COMMAND_ROLES.RECORDER_OR_EVIDENCE_CUSTODIAN));
  assert.ok(descriptor.commandAssignmentFactors().includes(COMMAND_ASSIGNMENT_FACTORS.CONTINUITY_OBLIGATIONS));
  assert.ok(descriptor.declarationSteps().includes(OPERATIONAL_DECLARATION_STEPS.DEFINE_NEXT_ASSESSMENT_POINT));
  assert.ok(descriptor.impactDimensions().includes(OPERATIONAL_IMPACT_DIMENSIONS.DEPENDENCY_PROPAGATION));
  assert.ok(descriptor.riskFactors().includes(OPERATIONAL_RISK_FACTORS.CHANGE_COLLISION));
  assert.ok(descriptor.priorityUses().includes(OPERATIONAL_PRIORITY_USES.RECOVERY_SEQUENCING));
  assert.ok(descriptor.businessServicePriorities().includes(BUSINESS_SERVICE_PRIORITY_EXAMPLES.ANALYTICS_AND_NONCRITICAL_PROCESSING));
  assert.ok(descriptor.decisionRecordFields().includes(OPERATIONAL_DECISION_RECORD_FIELDS.REVIEW_REQUIREMENT));
  assert.ok(descriptor.decisionClasses().includes(OPERATIONAL_DECISION_CLASSES.EMERGENCY_DECISIONS));
  assert.ok(descriptor.actionControlFields().includes(OPERATIONAL_ACTION_CONTROL_FIELDS.EVIDENCE_PRODUCED));
  assert.ok(descriptor.guardrails().includes(OPERATIONAL_GUARDRAILS.STOP_CONDITIONS));
  assert.ok(descriptor.escalationIncreases().includes(ESCALATION_INCREASES.EXTERNAL_ENGAGEMENT));
  assert.ok(descriptor.escalationTriggers().includes(COMMAND_ESCALATION_TRIGGERS.EXTERNAL_DEPENDENCY_FAILURE));
  assert.ok(descriptor.deEscalationCriteria().includes(COMMAND_DE_ESCALATION_CRITERIA.OWNERSHIP_ACCEPTED_BY_RECEIVING_LEVEL));
  assert.ok(descriptor.communicationClasses().includes(OPERATIONAL_COMMUNICATION_CLASSES.POST_EVENT_REPORTING));
  assert.ok(descriptor.communicationCadenceFactors().includes(COMMUNICATION_CADENCE_FACTORS.UNCERTAINTY));
  assert.ok(descriptor.timelineEvents().includes(OPERATIONAL_TIMELINE_EVENTS.TRANSITION_AND_CLOSURE));
  assert.ok(descriptor.reviewCycleStages().includes(SITUATION_REVIEW_CYCLE_STAGES.NEXT_REVIEW));
  assert.ok(descriptor.aiSupportTypes().includes(AI_ASSISTED_COMMAND_SUPPORT_TYPES.POST_EVENT_ANALYSIS));
  assert.ok(descriptor.autonomousActionCriteria().includes(AUTONOMOUS_OPERATIONAL_ACTION_CRITERIA.SUBJECT_TO_STOP_CONDITIONS));
  assert.ok(descriptor.autonomousActionEscalationTriggers().includes(AUTONOMOUS_ACTION_ESCALATION_TRIGGERS.HUMAN_INTERVENTION_REQUESTED));
  assert.ok(descriptor.multiTenantScopes().includes(MULTI_TENANT_COMMAND_SCOPES.EXTERNAL_ECOSYSTEM_SITUATIONS));
  assert.ok(descriptor.propertyCoordinationContext().includes(PROPERTY_COORDINATION_CONTEXT.AVAILABLE_MANUAL_ALTERNATIVES));
  assert.ok(descriptor.externalCoordinationPartners().includes(EXTERNAL_COORDINATION_PARTNERS.EMERGENCY_SERVICES));
  assert.ok(descriptor.recoveryVerificationDimensions().includes(RECOVERY_VERIFICATION_DIMENSIONS.STAKEHOLDER_CONFIRMATION));
  assert.ok(descriptor.transitionCriteria().includes(OPERATIONAL_TRANSITION_CRITERIA.REVIEW_OBLIGATIONS_SCHEDULED));
  assert.ok(descriptor.postEventLearningAreas().includes(POST_EVENT_LEARNING_AREAS.CAPACITY));
  assert.ok(descriptor.qualityAttributes().includes(COMMAND_CONTROL_QUALITY_ATTRIBUTES.STAKEHOLDER_TRUST));
  assert.ok(descriptor.architecturalRules().includes(COMMAND_CONTROL_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_COMMAND_CONTROL_CAPABILITIES.FEDERATED_CROSS_ENTERPRISE_COMMAND));
});

test('operations command and control validates complete command profiles', () => {
  const descriptor = new OperationsCommandControlDescriptor();
  const valid = descriptor.validateProfile(
    new OperationsCommandControlProfile({
      commandName: 'Operations Command and Control',
      objectives: Object.values(OPERATIONS_COMMAND_CONTROL_OBJECTIVES),
      principles: Object.values(OPERATIONS_COMMAND_CONTROL_PRINCIPLES),
      controlPlaneStages: Object.values(OPERATIONAL_CONTROL_PLANE_STAGES),
      situationOrigins: Object.values(OPERATIONAL_SITUATION_ORIGINS),
      situationModelFields: Object.values(OPERATIONAL_SITUATION_MODEL_FIELDS),
      commandLevels: Object.values(OPERATIONAL_COMMAND_LEVELS),
      commandRoles: Object.values(OPERATIONS_COMMAND_ROLES),
      commandAssignmentFactors: Object.values(COMMAND_ASSIGNMENT_FACTORS),
      declarationSteps: Object.values(OPERATIONAL_DECLARATION_STEPS),
      impactDimensions: Object.values(OPERATIONAL_IMPACT_DIMENSIONS),
      riskFactors: Object.values(OPERATIONAL_RISK_FACTORS),
      priorityUses: Object.values(OPERATIONAL_PRIORITY_USES),
      businessServicePriorities: Object.values(BUSINESS_SERVICE_PRIORITY_EXAMPLES),
      decisionRecordFields: Object.values(OPERATIONAL_DECISION_RECORD_FIELDS),
      decisionClasses: Object.values(OPERATIONAL_DECISION_CLASSES),
      actionControlFields: Object.values(OPERATIONAL_ACTION_CONTROL_FIELDS),
      guardrails: Object.values(OPERATIONAL_GUARDRAILS),
      escalationIncreases: Object.values(ESCALATION_INCREASES),
      escalationTriggers: Object.values(COMMAND_ESCALATION_TRIGGERS),
      deEscalationCriteria: Object.values(COMMAND_DE_ESCALATION_CRITERIA),
      communicationClasses: Object.values(OPERATIONAL_COMMUNICATION_CLASSES),
      communicationCadenceFactors: Object.values(COMMUNICATION_CADENCE_FACTORS),
      timelineEvents: Object.values(OPERATIONAL_TIMELINE_EVENTS),
      reviewCycleStages: Object.values(SITUATION_REVIEW_CYCLE_STAGES),
      aiSupportTypes: Object.values(AI_ASSISTED_COMMAND_SUPPORT_TYPES),
      autonomousActionCriteria: Object.values(AUTONOMOUS_OPERATIONAL_ACTION_CRITERIA),
      autonomousActionEscalationTriggers: Object.values(AUTONOMOUS_ACTION_ESCALATION_TRIGGERS),
      multiTenantScopes: Object.values(MULTI_TENANT_COMMAND_SCOPES),
      propertyCoordinationContext: Object.values(PROPERTY_COORDINATION_CONTEXT),
      externalCoordinationPartners: Object.values(EXTERNAL_COORDINATION_PARTNERS),
      recoveryVerificationDimensions: Object.values(RECOVERY_VERIFICATION_DIMENSIONS),
      transitionCriteria: Object.values(OPERATIONAL_TRANSITION_CRITERIA),
      postEventLearningAreas: Object.values(POST_EVENT_LEARNING_AREAS),
      qualityAttributes: Object.values(COMMAND_CONTROL_QUALITY_ATTRIBUTES),
      architecturalRules: Object.values(COMMAND_CONTROL_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_COMMAND_CONTROL_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    commandName: '',
    objectives: [OPERATIONS_COMMAND_CONTROL_OBJECTIVES.RAPID_ACCURATE_SITUATIONAL_AWARENESS],
    principles: [OPERATIONS_COMMAND_CONTROL_PRINCIPLES.OUTCOME_ORIENTED_COMMAND],
    controlPlaneStages: [OPERATIONAL_CONTROL_PLANE_STAGES.OPERATIONAL_EVIDENCE],
    situationOrigins: [OPERATIONAL_SITUATION_ORIGINS.BUSINESS_OUTCOME_DEVIATION],
    situationModelFields: [OPERATIONAL_SITUATION_MODEL_FIELDS.SITUATION_IDENTIFIER],
    commandLevels: [OPERATIONAL_COMMAND_LEVELS.LOCAL_CONTROL],
    commandRoles: [OPERATIONS_COMMAND_ROLES.COMMAND_OWNER],
    commandAssignmentFactors: [COMMAND_ASSIGNMENT_FACTORS.BUSINESS_CRITICALITY],
    declarationSteps: [OPERATIONAL_DECLARATION_STEPS.CORRELATE_AVAILABLE_EVIDENCE],
    impactDimensions: [OPERATIONAL_IMPACT_DIMENSIONS.GUEST_EXPERIENCE],
    riskFactors: [OPERATIONAL_RISK_FACTORS.UNCERTAINTY],
    priorityUses: [OPERATIONAL_PRIORITY_USES.RESPONSE_OBJECTIVE],
    businessServicePriorities: [BUSINESS_SERVICE_PRIORITY_EXAMPLES.SAFETY_AND_SECURITY],
    decisionRecordFields: [OPERATIONAL_DECISION_RECORD_FIELDS.DECISION_IDENTIFIER],
    decisionClasses: [OPERATIONAL_DECISION_CLASSES.PREAUTHORIZED_DECISIONS],
    actionControlFields: [OPERATIONAL_ACTION_CONTROL_FIELDS.ACTION_OWNER],
    guardrails: [OPERATIONAL_GUARDRAILS.LEAST_PRIVILEGE],
    escalationIncreases: [ESCALATION_INCREASES.EXPERTISE],
    escalationTriggers: [COMMAND_ESCALATION_TRIGGERS.INCREASED_IMPACT],
    deEscalationCriteria: [COMMAND_DE_ESCALATION_CRITERIA.IMPACT_CONTAINED],
    communicationClasses: [OPERATIONAL_COMMUNICATION_CLASSES.INTERNAL_OPERATIONAL_COORDINATION],
    communicationCadenceFactors: [COMMUNICATION_CADENCE_FACTORS.COMMAND_LEVEL],
    timelineEvents: [OPERATIONAL_TIMELINE_EVENTS.DETECTION],
    reviewCycleStages: [SITUATION_REVIEW_CYCLE_STAGES.CURRENT_STATE],
    aiSupportTypes: [AI_ASSISTED_COMMAND_SUPPORT_TYPES.EVIDENCE_CORRELATION],
    autonomousActionCriteria: [AUTONOMOUS_OPERATIONAL_ACTION_CRITERIA.PREAUTHORIZED],
    autonomousActionEscalationTriggers: [AUTONOMOUS_ACTION_ESCALATION_TRIGGERS.CONFIDENCE_INSUFFICIENT],
    multiTenantScopes: [MULTI_TENANT_COMMAND_SCOPES.SINGLE_PROPERTY_SITUATIONS],
    propertyCoordinationContext: [PROPERTY_COORDINATION_CONTEXT.GUEST_IMPACT],
    externalCoordinationPartners: [EXTERNAL_COORDINATION_PARTNERS.PAYMENT_PROVIDERS],
    recoveryVerificationDimensions: [RECOVERY_VERIFICATION_DIMENSIONS.BUSINESS_OUTCOME_RESTORATION],
    transitionCriteria: [OPERATIONAL_TRANSITION_CRITERIA.RECOVERY_VERIFIED],
    postEventLearningAreas: [POST_EVENT_LEARNING_AREAS.DETECTION],
    qualityAttributes: [COMMAND_CONTROL_QUALITY_ATTRIBUTES.RESPONSIVENESS],
    architecturalRules: [COMMAND_CONTROL_ARCHITECTURAL_RULES.DEFINE_ACCOUNTABLE_COMMAND_OWNER],
    futureCapabilities: [FUTURE_COMMAND_CONTROL_CAPABILITIES.PREDICTIVE_SITUATION_FORMATION],
    accountableCommandOwnerRequired: false,
    businessOutcomePriorityRequired: false,
    sharedSituationalAwarenessMaintained: false,
    decisionAuthorityExplicit: false,
    federatedExecutionCoordinated: false,
    materialDecisionsRecorded: false,
    tenantPropertyIsolationPreserved: false,
    guardrailsRemainActive: false,
    escalationAndDeEscalationSupported: false,
    communicationOperationalCapability: false,
    aiAndAutomationBoundedGoverned: false,
    recoveryBusinessAndTechnicalVerified: false,
    authoritativeTimelinePreserved: false,
    residualWorkTransferredBeforeClosure: false,
    learningConvertedToImprovement: false,
    humanControlPreserved: false,
    technologyIndependent: false,
    vendorNeutral: false,
    operationsCenterSpecific: true,
    organizationalTeamSpecific: true,
    communicationChannelSpecific: true,
    vendorProductSpecific: true,
    centralizedExecutionRequired: true,
    ambiguousCommandOwnership: true,
    autonomousCommandAuthorityByDefault: true,
    technicalRestorationSufficient: true,
    crossTenantInformationExposure: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /business-impact-driven-prioritization/);
  assert.match(invalid.errors.join('\n'), /single-accountable-command/);
  assert.match(invalid.errors.join('\n'), /Situation Management/);
  assert.match(invalid.errors.join('\n'), /service-degradation/);
  assert.match(invalid.errors.join('\n'), /detection-time/);
  assert.match(invalid.errors.join('\n'), /level-1-coordinated-response/);
  assert.match(invalid.errors.join('\n'), /situation-manager/);
  assert.match(invalid.errors.join('\n'), /scope-of-impact/);
  assert.match(invalid.errors.join('\n'), /establish-initial-scope/);
  assert.match(invalid.errors.join('\n'), /booking-and-revenue/);
  assert.match(invalid.errors.join('\n'), /blast-radius/);
  assert.match(invalid.errors.join('\n'), /resource-allocation/);
  assert.match(invalid.errors.join('\n'), /guest-access-and-essential-communication/);
  assert.match(invalid.errors.join('\n'), /decision-statement/);
  assert.match(invalid.errors.join('\n'), /delegated-decisions/);
  assert.match(invalid.errors.join('\n'), /authorized-scope/);
  assert.match(invalid.errors.join('\n'), /tenant-and-property-isolation/);
  assert.match(invalid.errors.join('\n'), /coordination/);
  assert.match(invalid.errors.join('\n'), /expanding-scope/);
  assert.match(invalid.errors.join('\n'), /recovery-stable/);
  assert.match(invalid.errors.join('\n'), /leadership-updates/);
  assert.match(invalid.errors.join('\n'), /rate-of-change/);
  assert.match(invalid.errors.join('\n'), /declaration/);
  assert.match(invalid.errors.join('\n'), /New Evidence/);
  assert.match(invalid.errors.join('\n'), /situation-summarization/);
  assert.match(invalid.errors.join('\n'), /low-risk/);
  assert.match(invalid.errors.join('\n'), /impact-expands/);
  assert.match(invalid.errors.join('\n'), /multi-tenant-platform-situations/);
  assert.match(invalid.errors.join('\n'), /facility-conditions/);
  assert.match(invalid.errors.join('\n'), /messaging-platforms/);
  assert.match(invalid.errors.join('\n'), /guest-journey-completion/);
  assert.match(invalid.errors.join('\n'), /residual-risk-has-owner/);
  assert.match(invalid.errors.join('\n'), /situational-awareness/);
  assert.match(invalid.errors.join('\n'), /accountability/);
  assert.match(invalid.errors.join('\n'), /prioritize-business-and-guest-outcomes/);
  assert.match(invalid.errors.join('\n'), /ai-assisted-incident-command/);
  assert.match(invalid.errors.join('\n'), /one accountable command owner/);
  assert.match(invalid.errors.join('\n'), /single operations center/);
  assert.match(invalid.errors.join('\n'), /Technical restoration alone is not sufficient/);
});

test('operations command and control assertion rejects incomplete metadata', () => {
  class IncompleteOperationsCommandControlDescriptor extends OperationsCommandControlDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteOperationsCommandControlDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.OPERATIONS_COMMAND_CONTROL_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('operations command and control descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('OperationsCommandControlDescriptor');

  assert.ok(descriptor instanceof OperationsCommandControlDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
