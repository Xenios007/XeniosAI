import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ENTERPRISE_OPERATIONS_ACTOR_TYPES,
  ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS,
  ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES,
  ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES,
  ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES,
  ENTERPRISE_OPERATIONS_DOMAINS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS,
  ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS,
  ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS,
  ENTERPRISE_OPERATIONS_HUMAN_ACTORS,
  ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS,
  ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES,
  ENTERPRISE_OPERATIONS_INFORMATION_TYPES,
  ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES,
  ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES,
  ENTERPRISE_OPERATIONS_OPERATING_MODES,
  ENTERPRISE_OPERATIONS_OPERATIONAL_STATES,
  ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES,
  ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES,
  ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES,
  ENTERPRISE_OPERATIONS_PRIORITY_FACTORS,
  ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES,
  ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES,
  ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES,
  ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES,
  FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES,
  ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS
} from '../constants.js';
import { EnterpriseOperationsOverviewProfile } from '../contracts/enterprise-operations-overview-profile.js';
import { EnterpriseOperationsValidationResult } from '../contracts/enterprise-operations-validation-result.js';

const LANDSCAPE = Object.freeze(Object.values(ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES));
const CONTROL_FLOW = Object.freeze(Object.values(ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES));

export class EnterpriseOperationsOverviewDescriptor {
  objectives() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES));
  }

  landscapeStages() {
    return LANDSCAPE;
  }

  capabilityGroups() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS));
  }

  directCapabilities() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES));
  }

  operateCapabilities() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES));
  }

  protectCapabilities() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES));
  }

  changeCapabilities() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES));
  }

  improveCapabilities() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES));
  }

  domains() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_DOMAINS));
  }

  actorTypes() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_ACTOR_TYPES));
  }

  humanActors() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_HUMAN_ACTORS));
  }

  automatedActors() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS));
  }

  responsibilityTypes() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES));
  }

  informationTypes() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_INFORMATION_TYPES));
  }

  controlFlowStages() {
    return CONTROL_FLOW;
  }

  operationalStates() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OPERATIONAL_STATES));
  }

  priorityFactors() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_PRIORITY_FACTORS));
  }

  highImpactDecisionRequirements() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS));
  }

  escalationTriggers() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS));
  }

  operatingModes() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OPERATING_MODES));
  }

  collaborationRequirements() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS));
  }

  scopeBoundaries() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  qualityAttributes() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES));
  }

  governanceFoundations() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS));
  }

  architecturalRules() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof EnterpriseOperationsOverviewProfile
      ? profileInput
      : new EnterpriseOperationsOverviewProfile(profileInput);
    const errors = [];

    if (!profile.overviewName) errors.push('Enterprise operations overview profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Enterprise operations overview objectives must include');
    appendMissing(errors, profile.landscapeStages, this.landscapeStages(), 'Enterprise operations landscape must include');
    appendMissing(errors, profile.capabilityGroups, this.capabilityGroups(), 'Operations capability model must include');
    appendMissing(errors, profile.directCapabilities, this.directCapabilities(), 'Direct capabilities should include');
    appendMissing(errors, profile.operateCapabilities, this.operateCapabilities(), 'Operate capabilities should include');
    appendMissing(errors, profile.protectCapabilities, this.protectCapabilities(), 'Protect capabilities should include');
    appendMissing(errors, profile.changeCapabilities, this.changeCapabilities(), 'Change capabilities should include');
    appendMissing(errors, profile.improveCapabilities, this.improveCapabilities(), 'Improve capabilities should include');
    appendMissing(errors, profile.domains, this.domains(), 'Operational domains must include');
    appendMissing(errors, profile.actorTypes, this.actorTypes(), 'Operational actors must include');
    appendMissing(errors, profile.humanActors, this.humanActors(), 'Human actors should include');
    appendMissing(errors, profile.automatedActors, this.automatedActors(), 'Automated actors should include');
    appendMissing(errors, profile.responsibilityTypes, this.responsibilityTypes(), 'Operational responsibility must distinguish');
    appendMissing(errors, profile.informationTypes, this.informationTypes(), 'Operational information model should include');
    appendMissing(errors, profile.controlFlowStages, this.controlFlowStages(), 'Operational control flow must include');
    appendMissing(errors, profile.operationalStates, this.operationalStates(), 'Operational states should include');
    appendMissing(errors, profile.priorityFactors, this.priorityFactors(), 'Operational priority should reflect');
    appendMissing(errors, profile.highImpactDecisionRequirements, this.highImpactDecisionRequirements(), 'High-impact decisions may require');
    appendMissing(errors, profile.escalationTriggers, this.escalationTriggers(), 'Escalation may be triggered by');
    appendMissing(errors, profile.operatingModes, this.operatingModes(), 'Operating model must support');
    appendMissing(errors, profile.collaborationRequirements, this.collaborationRequirements(), 'Human and automated collaboration must support');
    appendMissing(errors, profile.scopeBoundaries, this.scopeBoundaries(), 'Multi-tenant and multi-property operations must distinguish');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Enterprise operations overview relationship flow must include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Enterprise operations quality attributes must include');
    appendMissing(errors, profile.governanceFoundations, this.governanceFoundations(), 'Enterprise operations governance requires');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Enterprise operations overview architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future enterprise operations capabilities may include');
    if (profile.businessOutcomeProtected !== true) errors.push('Enterprise operations must protect business outcomes.');
    if (profile.operationalConditionObservable !== true) errors.push('Enterprise operations must understand the current operational condition.');
    if (profile.ownershipAndDecisionAuthorityExplicit !== true) errors.push('Enterprise operations must make ownership and decision authority explicit.');
    if (profile.actionPolicyGoverned !== true) errors.push('Operational actions must be permitted and appropriate under policy.');
    if (profile.outcomeVerified !== true) errors.push('Operational actions are incomplete until outcomes are verified.');
    if (profile.informationTrustworthyContextualCorrelated !== true) errors.push('Operational information must be trustworthy, timely, contextual, access-controlled, and correlated.');
    if (profile.signalNotResponseAlone !== true) errors.push('A signal alone does not constitute an operational response.');
    if (profile.tenantPropertyIsolationPreserved !== true) errors.push('Operational actions must preserve tenant and property isolation.');
    if (profile.automationAugmentsHumanOperators !== true) errors.push('Operational automation should augment enterprise operators.');
    if (profile.aiRecommendationsNotAuthoritativeByDefault !== true) errors.push('AI-generated operational recommendations must not be inherently authoritative.');
    if (profile.technicalSeverityNotSolePriority !== true) errors.push('Technical severity must not independently determine enterprise response.');
    if (profile.technologyNeutral !== true) errors.push('Enterprise Operations Overview must remain technology neutral.');
    if (profile.vendorNeutral !== true) errors.push('Enterprise Operations Overview must remain vendor neutral.');
    if (profile.replacesDomainOwnership === true) errors.push('Enterprise Operations must not replace business domain ownership.');
    if (profile.replacesSecurityArchitecture === true) errors.push('Enterprise Operations must not replace Security Architecture.');
    if (profile.replacesObservabilityArchitecture === true) errors.push('Enterprise Operations must not replace Observability Architecture.');
    if (profile.governanceComplianceSpecific === true) errors.push('Governance and compliance architecture is defined separately in ARCH-012.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 14) errors.push('Enterprise Operations Overview must include all documented objectives.');
    if (this.landscapeStages().length !== 8) errors.push('Enterprise Operations Overview must include the documented landscape.');
    if (this.capabilityGroups().length !== 5) errors.push('Enterprise Operations Overview must include capability groups.');
    if (this.directCapabilities().length !== 6) errors.push('Enterprise Operations Overview must include documented direct capabilities.');
    if (this.operateCapabilities().length !== 8) errors.push('Enterprise Operations Overview must include documented operate capabilities.');
    if (this.protectCapabilities().length !== 7) errors.push('Enterprise Operations Overview must include documented protect capabilities.');
    if (this.changeCapabilities().length !== 7) errors.push('Enterprise Operations Overview must include documented change capabilities.');
    if (this.improveCapabilities().length !== 7) errors.push('Enterprise Operations Overview must include documented improve capabilities.');
    if (this.domains().length !== 9) errors.push('Enterprise Operations Overview must include documented domains.');
    if (this.actorTypes().length !== 2) errors.push('Enterprise Operations Overview must include human and automated actor types.');
    if (this.humanActors().length !== 15) errors.push('Enterprise Operations Overview must include documented human actors.');
    if (this.automatedActors().length !== 10) errors.push('Enterprise Operations Overview must include documented automated actors.');
    if (this.responsibilityTypes().length !== 8) errors.push('Enterprise Operations Overview must include documented responsibility types.');
    if (this.informationTypes().length !== 19) errors.push('Enterprise Operations Overview must include documented operational information types.');
    if (this.controlFlowStages().length !== 10) errors.push('Enterprise Operations Overview must include documented control flow.');
    if (this.operationalStates().length !== 10) errors.push('Enterprise Operations Overview must include documented operational states.');
    if (this.priorityFactors().length !== 13) errors.push('Enterprise Operations Overview must include documented priority factors.');
    if (this.highImpactDecisionRequirements().length !== 7) errors.push('Enterprise Operations Overview must include documented high-impact decision requirements.');
    if (this.escalationTriggers().length !== 10) errors.push('Enterprise Operations Overview must include documented escalation triggers.');
    if (this.operatingModes().length !== 3) errors.push('Enterprise Operations Overview must include documented operating modes.');
    if (this.collaborationRequirements().length !== 10) errors.push('Enterprise Operations Overview must include documented collaboration requirements.');
    if (this.scopeBoundaries().length !== 7) errors.push('Enterprise Operations Overview must include documented scope boundaries.');
    if (this.relationshipFlow().length !== 7) errors.push('Enterprise Operations Overview must include documented relationship flow.');
    if (this.qualityAttributes().length !== 14) errors.push('Enterprise Operations Overview must include documented quality attributes.');
    if (this.governanceFoundations().length !== 12) errors.push('Enterprise Operations Overview must include documented governance foundations.');
    if (this.architecturalRules().length !== 13) errors.push('Enterprise Operations Overview must include documented architectural rules.');
    if (this.futureCapabilities().length !== 12) errors.push('Enterprise Operations Overview must include documented future capabilities.');

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.ENTERPRISE_OPERATIONS_OVERVIEW_INVALID,
        'Enterprise Operations Overview violates ARCH-011-01.',
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
