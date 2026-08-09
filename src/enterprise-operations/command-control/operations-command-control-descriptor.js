import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  POST_EVENT_LEARNING_AREAS,
  PROPERTY_COORDINATION_CONTEXT,
  RECOVERY_VERIFICATION_DIMENSIONS,
  SITUATION_REVIEW_CYCLE_STAGES
} from '../constants.js';
import { OperationsCommandControlProfile } from '../contracts/operations-command-control-profile.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';

const CONTROL_PLANE = Object.freeze(Object.values(OPERATIONAL_CONTROL_PLANE_STAGES));
const REVIEW_CYCLE = Object.freeze(Object.values(SITUATION_REVIEW_CYCLE_STAGES));

export class OperationsCommandControlDescriptor {
  objectives() {
    return Object.freeze(Object.values(OPERATIONS_COMMAND_CONTROL_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(OPERATIONS_COMMAND_CONTROL_PRINCIPLES));
  }

  controlPlaneStages() {
    return CONTROL_PLANE;
  }

  situationOrigins() {
    return Object.freeze(Object.values(OPERATIONAL_SITUATION_ORIGINS));
  }

  situationModelFields() {
    return Object.freeze(Object.values(OPERATIONAL_SITUATION_MODEL_FIELDS));
  }

  commandLevels() {
    return Object.freeze(Object.values(OPERATIONAL_COMMAND_LEVELS));
  }

  commandRoles() {
    return Object.freeze(Object.values(OPERATIONS_COMMAND_ROLES));
  }

  commandAssignmentFactors() {
    return Object.freeze(Object.values(COMMAND_ASSIGNMENT_FACTORS));
  }

  declarationSteps() {
    return Object.freeze(Object.values(OPERATIONAL_DECLARATION_STEPS));
  }

  impactDimensions() {
    return Object.freeze(Object.values(OPERATIONAL_IMPACT_DIMENSIONS));
  }

  riskFactors() {
    return Object.freeze(Object.values(OPERATIONAL_RISK_FACTORS));
  }

  priorityUses() {
    return Object.freeze(Object.values(OPERATIONAL_PRIORITY_USES));
  }

  businessServicePriorities() {
    return Object.freeze(Object.values(BUSINESS_SERVICE_PRIORITY_EXAMPLES));
  }

  decisionRecordFields() {
    return Object.freeze(Object.values(OPERATIONAL_DECISION_RECORD_FIELDS));
  }

  decisionClasses() {
    return Object.freeze(Object.values(OPERATIONAL_DECISION_CLASSES));
  }

  actionControlFields() {
    return Object.freeze(Object.values(OPERATIONAL_ACTION_CONTROL_FIELDS));
  }

  guardrails() {
    return Object.freeze(Object.values(OPERATIONAL_GUARDRAILS));
  }

  escalationIncreases() {
    return Object.freeze(Object.values(ESCALATION_INCREASES));
  }

  escalationTriggers() {
    return Object.freeze(Object.values(COMMAND_ESCALATION_TRIGGERS));
  }

  deEscalationCriteria() {
    return Object.freeze(Object.values(COMMAND_DE_ESCALATION_CRITERIA));
  }

  communicationClasses() {
    return Object.freeze(Object.values(OPERATIONAL_COMMUNICATION_CLASSES));
  }

  communicationCadenceFactors() {
    return Object.freeze(Object.values(COMMUNICATION_CADENCE_FACTORS));
  }

  timelineEvents() {
    return Object.freeze(Object.values(OPERATIONAL_TIMELINE_EVENTS));
  }

  reviewCycleStages() {
    return REVIEW_CYCLE;
  }

  aiSupportTypes() {
    return Object.freeze(Object.values(AI_ASSISTED_COMMAND_SUPPORT_TYPES));
  }

  autonomousActionCriteria() {
    return Object.freeze(Object.values(AUTONOMOUS_OPERATIONAL_ACTION_CRITERIA));
  }

  autonomousActionEscalationTriggers() {
    return Object.freeze(Object.values(AUTONOMOUS_ACTION_ESCALATION_TRIGGERS));
  }

  multiTenantScopes() {
    return Object.freeze(Object.values(MULTI_TENANT_COMMAND_SCOPES));
  }

  propertyCoordinationContext() {
    return Object.freeze(Object.values(PROPERTY_COORDINATION_CONTEXT));
  }

  externalCoordinationPartners() {
    return Object.freeze(Object.values(EXTERNAL_COORDINATION_PARTNERS));
  }

  recoveryVerificationDimensions() {
    return Object.freeze(Object.values(RECOVERY_VERIFICATION_DIMENSIONS));
  }

  transitionCriteria() {
    return Object.freeze(Object.values(OPERATIONAL_TRANSITION_CRITERIA));
  }

  postEventLearningAreas() {
    return Object.freeze(Object.values(POST_EVENT_LEARNING_AREAS));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(COMMAND_CONTROL_QUALITY_ATTRIBUTES));
  }

  architecturalRules() {
    return Object.freeze(Object.values(COMMAND_CONTROL_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_COMMAND_CONTROL_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof OperationsCommandControlProfile
      ? profileInput
      : new OperationsCommandControlProfile(profileInput);
    const errors = [];

    if (!profile.commandName) errors.push('Operations command and control profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Operations command and control objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Operations command and control principles must include');
    appendMissing(errors, profile.controlPlaneStages, this.controlPlaneStages(), 'Operational control plane must include');
    appendMissing(errors, profile.situationOrigins, this.situationOrigins(), 'Operational situation origins may include');
    appendMissing(errors, profile.situationModelFields, this.situationModelFields(), 'Operational situation model should include');
    appendMissing(errors, profile.commandLevels, this.commandLevels(), 'Command levels must include');
    appendMissing(errors, profile.commandRoles, this.commandRoles(), 'Command roles should include');
    appendMissing(errors, profile.commandAssignmentFactors, this.commandAssignmentFactors(), 'Command assignment should consider');
    appendMissing(errors, profile.declarationSteps, this.declarationSteps(), 'Declaration process should');
    appendMissing(errors, profile.impactDimensions, this.impactDimensions(), 'Impact assessment dimensions must include');
    appendMissing(errors, profile.riskFactors, this.riskFactors(), 'Risk assessment must consider');
    appendMissing(errors, profile.priorityUses, this.priorityUses(), 'Operational priority should determine');
    appendMissing(errors, profile.businessServicePriorities, this.businessServicePriorities(), 'Business service priorities may include');
    appendMissing(errors, profile.decisionRecordFields, this.decisionRecordFields(), 'Decision records should capture');
    appendMissing(errors, profile.decisionClasses, this.decisionClasses(), 'Decision classes must include');
    appendMissing(errors, profile.actionControlFields, this.actionControlFields(), 'Operational actions should define');
    appendMissing(errors, profile.guardrails, this.guardrails(), 'Operational guardrails must include');
    appendMissing(errors, profile.escalationIncreases, this.escalationIncreases(), 'Escalation may increase');
    appendMissing(errors, profile.escalationTriggers, this.escalationTriggers(), 'Escalation triggers may include');
    appendMissing(errors, profile.deEscalationCriteria, this.deEscalationCriteria(), 'De-escalation criteria should include');
    appendMissing(errors, profile.communicationClasses, this.communicationClasses(), 'Communication classes must include');
    appendMissing(errors, profile.communicationCadenceFactors, this.communicationCadenceFactors(), 'Communication cadence should consider');
    appendMissing(errors, profile.timelineEvents, this.timelineEvents(), 'Operational timeline must include');
    appendMissing(errors, profile.reviewCycleStages, this.reviewCycleStages(), 'Situation review cycle must include');
    appendMissing(errors, profile.aiSupportTypes, this.aiSupportTypes(), 'AI may assist command and control through');
    appendMissing(errors, profile.autonomousActionCriteria, this.autonomousActionCriteria(), 'Autonomous actions may be permitted when');
    appendMissing(errors, profile.autonomousActionEscalationTriggers, this.autonomousActionEscalationTriggers(), 'Autonomous action must escalate when');
    appendMissing(errors, profile.multiTenantScopes, this.multiTenantScopes(), 'Multi-tenant command must distinguish');
    appendMissing(errors, profile.propertyCoordinationContext, this.propertyCoordinationContext(), 'Property-level command must preserve');
    appendMissing(errors, profile.externalCoordinationPartners, this.externalCoordinationPartners(), 'External coordination may include');
    appendMissing(errors, profile.recoveryVerificationDimensions, this.recoveryVerificationDimensions(), 'Recovery verification may include');
    appendMissing(errors, profile.transitionCriteria, this.transitionCriteria(), 'Transition and closure should require');
    appendMissing(errors, profile.postEventLearningAreas, this.postEventLearningAreas(), 'Post-event learning should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Command and control quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Command and control architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future command and control capabilities may include');
    if (profile.accountableCommandOwnerRequired !== true) errors.push('Significant operational conditions must have one accountable command owner.');
    if (profile.businessOutcomePriorityRequired !== true) errors.push('Command objectives must be expressed in business terms.');
    if (profile.sharedSituationalAwarenessMaintained !== true) errors.push('Participants must share current situational awareness.');
    if (profile.decisionAuthorityExplicit !== true) errors.push('Command and control must make decision authority explicit.');
    if (profile.federatedExecutionCoordinated !== true) errors.push('Command may coordinate centrally while execution remains federated.');
    if (profile.materialDecisionsRecorded !== true) errors.push('Material decisions and actions must be recorded.');
    if (profile.tenantPropertyIsolationPreserved !== true) errors.push('Command and control must preserve tenant and property isolation.');
    if (profile.guardrailsRemainActive !== true) errors.push('Operational guardrails remain active during urgency.');
    if (profile.escalationAndDeEscalationSupported !== true) errors.push('Command and control must support escalation and de-escalation.');
    if (profile.communicationOperationalCapability !== true) errors.push('Communication is an operational capability.');
    if (profile.aiAndAutomationBoundedGoverned !== true) errors.push('AI and automated action must be bounded and governed.');
    if (profile.recoveryBusinessAndTechnicalVerified !== true) errors.push('Recovery must be verified through business and technical evidence.');
    if (profile.authoritativeTimelinePreserved !== true) errors.push('Coordinated response must preserve an authoritative operational timeline.');
    if (profile.residualWorkTransferredBeforeClosure !== true) errors.push('Residual work must transfer before closure.');
    if (profile.learningConvertedToImprovement !== true) errors.push('Operational experience must convert into improvement.');
    if (profile.humanControlPreserved !== true) errors.push('Future evolution must preserve human control.');
    if (profile.technologyIndependent !== true) errors.push('Command and control must remain technology independent.');
    if (profile.vendorNeutral !== true) errors.push('Command and control must remain vendor neutral.');
    if (profile.operationsCenterSpecific === true) errors.push('A single operations center is outside ARCH-011-03 scope.');
    if (profile.organizationalTeamSpecific === true) errors.push('A specific organizational team is outside ARCH-011-03 scope.');
    if (profile.communicationChannelSpecific === true) errors.push('A specific communication channel is outside ARCH-011-03 scope.');
    if (profile.vendorProductSpecific === true) errors.push('Vendor products are outside ARCH-011-03 scope.');
    if (profile.centralizedExecutionRequired === true) errors.push('Command and control must not require centralized execution.');
    if (profile.ambiguousCommandOwnership === true) errors.push('Overall coordination cannot be ambiguous.');
    if (profile.autonomousCommandAuthorityByDefault === true) errors.push('AI must not assume command authority by default.');
    if (profile.technicalRestorationSufficient === true) errors.push('Technical restoration alone is not sufficient.');
    if (profile.crossTenantInformationExposure === true) errors.push('Cross-tenant coordination must not expose sensitive tenant information.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 14) errors.push('Operations Command and Control must include documented objectives.');
    if (this.principles().length !== 9) errors.push('Operations Command and Control must include documented principles.');
    if (this.controlPlaneStages().length !== 8) errors.push('Operations Command and Control must include the documented control plane.');
    if (this.situationOrigins().length !== 13) errors.push('Operations Command and Control must include documented situation origins.');
    if (this.situationModelFields().length !== 23) errors.push('Operations Command and Control must include documented situation model fields.');
    if (this.commandLevels().length !== 4) errors.push('Operations Command and Control must include documented command levels.');
    if (this.commandRoles().length !== 10) errors.push('Operations Command and Control must include documented command roles.');
    if (this.commandAssignmentFactors().length !== 10) errors.push('Operations Command and Control must include documented command assignment factors.');
    if (this.declarationSteps().length !== 8) errors.push('Operations Command and Control must include documented declaration steps.');
    if (this.impactDimensions().length !== 18) errors.push('Operations Command and Control must include documented impact dimensions.');
    if (this.riskFactors().length !== 14) errors.push('Operations Command and Control must include documented risk factors.');
    if (this.priorityUses().length !== 7) errors.push('Operations Command and Control must include documented priority uses.');
    if (this.businessServicePriorities().length !== 10) errors.push('Operations Command and Control must include documented business service priorities.');
    if (this.decisionRecordFields().length !== 15) errors.push('Operations Command and Control must include documented decision record fields.');
    if (this.decisionClasses().length !== 5) errors.push('Operations Command and Control must include documented decision classes.');
    if (this.actionControlFields().length !== 11) errors.push('Operations Command and Control must include documented action control fields.');
    if (this.guardrails().length !== 12) errors.push('Operations Command and Control must include documented guardrails.');
    if (this.escalationIncreases().length !== 9) errors.push('Operations Command and Control must include documented escalation increase areas.');
    if (this.escalationTriggers().length !== 12) errors.push('Operations Command and Control must include documented escalation triggers.');
    if (this.deEscalationCriteria().length !== 7) errors.push('Operations Command and Control must include documented de-escalation criteria.');
    if (this.communicationClasses().length !== 10) errors.push('Operations Command and Control must include documented communication classes.');
    if (this.communicationCadenceFactors().length !== 7) errors.push('Operations Command and Control must include documented communication cadence factors.');
    if (this.timelineEvents().length !== 12) errors.push('Operations Command and Control must include documented timeline events.');
    if (this.reviewCycleStages().length !== 7) errors.push('Operations Command and Control must include documented review cycle.');
    if (this.aiSupportTypes().length !== 12) errors.push('Operations Command and Control must include documented AI support types.');
    if (this.autonomousActionCriteria().length !== 10) errors.push('Operations Command and Control must include documented autonomous action criteria.');
    if (this.autonomousActionEscalationTriggers().length !== 7) errors.push('Operations Command and Control must include documented autonomous escalation triggers.');
    if (this.multiTenantScopes().length !== 6) errors.push('Operations Command and Control must include documented multi-tenant command scopes.');
    if (this.propertyCoordinationContext().length !== 8) errors.push('Operations Command and Control must include documented property coordination context.');
    if (this.externalCoordinationPartners().length !== 9) errors.push('Operations Command and Control must include documented external coordination partners.');
    if (this.recoveryVerificationDimensions().length !== 12) errors.push('Operations Command and Control must include documented recovery verification dimensions.');
    if (this.transitionCriteria().length !== 8) errors.push('Operations Command and Control must include documented transition criteria.');
    if (this.postEventLearningAreas().length !== 15) errors.push('Operations Command and Control must include documented learning areas.');
    if (this.qualityAttributes().length !== 12) errors.push('Operations Command and Control must include documented quality attributes.');
    if (this.architecturalRules().length !== 16) errors.push('Operations Command and Control must include documented architectural rules.');
    if (this.futureCapabilities().length !== 11) errors.push('Operations Command and Control must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.OPERATIONS_COMMAND_CONTROL_INVALID,
        'Operations Command and Control violates ARCH-011-03.',
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
