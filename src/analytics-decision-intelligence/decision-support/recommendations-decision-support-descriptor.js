import { PlatformError } from '../../foundation/errors/platform-error.js';
import { RecommendationsDecisionSupportProfile as Profile } from '../contracts/recommendations-decision-support-profile.js';
import * as constants from '../recommendations-decision-support-constants.js';

const metadata = Object.freeze({ responsibilities: constants.DECISION_SUPPORT_RESPONSIBILITIES, recommendationFields: constants.RECOMMENDATION_FIELDS, alternativeFields: constants.ALTERNATIVE_FIELDS, explanationFields: constants.EXPLANATION_FIELDS, confidenceFields: constants.CONFIDENCE_FIELDS, approvalFields: constants.APPROVAL_FIELDS, decisionFields: constants.DECISION_FIELDS, outcomeFields: constants.OUTCOME_CAPTURE_FIELDS, lifecycleStates: constants.DECISION_SUPPORT_LIFECYCLE_STATES, controls: constants.DECISION_SUPPORT_CONTROLS, failureRecovery: constants.DECISION_SUPPORT_FAILURE_RECOVERY, observabilityFields: constants.DECISION_SUPPORT_OBSERVABILITY, assuranceEvidence: constants.DECISION_SUPPORT_ASSURANCE, invariants: constants.DECISION_SUPPORT_INVARIANTS });
const required = Object.freeze({ contractsVersioned: 'requires versioned recommendation contracts', alternativesPresented: 'requires presented alternatives', explanationsGrounded: 'requires grounded explanations', confidenceQualified: 'requires qualified confidence', approvalsEnforced: 'requires enforced approvals', recommendationsNonBinding: 'requires non-binding recommendations', outcomeCaptureReconciled: 'requires reconciled outcome capture', executionAuthorityExternal: 'requires external execution authority' });
const prohibited = Object.freeze({ sharedDatabases: 'prohibits shared databases', recommendationAsCommand: 'prohibits recommendations as commands', alternativesHidden: 'prohibits hidden alternatives', explanationFabricated: 'prohibits fabricated explanations', confidenceAsCertainty: 'prohibits confidence as certainty', approvalBypassed: 'prohibits approval bypass', operationalStateMutated: 'prohibits operational-state mutation', outcomeAsCausation: 'prohibits outcomes as causal proof', transportAcknowledgementAsCompletion: 'prohibits transport acknowledgement as completion' });

export class RecommendationsDecisionSupportDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  recommendationFields() { return values(metadata.recommendationFields); }
  alternativeFields() { return values(metadata.alternativeFields); }
  explanationFields() { return values(metadata.explanationFields); }
  confidenceFields() { return values(metadata.confidenceFields); }
  approvalFields() { return values(metadata.approvalFields); }
  decisionFields() { return values(metadata.decisionFields); }
  outcomeFields() { return values(metadata.outcomeFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Recommendations and Decision Support profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-07 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-07 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.RECOMMENDATIONS_DECISION_SUPPORT_ERROR_CODE, 'Recommendations and Decision Support violates ARCH-028-07.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
