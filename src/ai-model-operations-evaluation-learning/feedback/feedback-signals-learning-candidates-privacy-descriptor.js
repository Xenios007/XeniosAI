import { PlatformError } from '../../foundation/errors/platform-error.js';
import { FeedbackSignalsLearningCandidatesPrivacyProfile as Profile } from '../contracts/feedback-signals-learning-candidates-privacy-profile.js';
import * as constants from '../feedback-signals-learning-candidates-privacy-constants.js';

const metadata = Object.freeze({ responsibilities: constants.FEEDBACK_LEARNING_RESPONSIBILITIES, signalFields: constants.FEEDBACK_SIGNAL_FIELDS, signalTypes: constants.FEEDBACK_SIGNAL_TYPES, outcomeFields: constants.OUTCOME_SIGNAL_FIELDS, consentFields: constants.FEEDBACK_CONSENT_FIELDS, minimizationFields: constants.FEEDBACK_MINIMIZATION_FIELDS, deidentificationFields: constants.DEIDENTIFICATION_FIELDS, candidateFields: constants.LEARNING_CANDIDATE_FIELDS, reviewFields: constants.LEARNING_REVIEW_FIELDS, deletionFields: constants.FEEDBACK_DELETION_FIELDS, lifecycleStates: constants.FEEDBACK_LEARNING_LIFECYCLE_STATES, controls: constants.FEEDBACK_LEARNING_CONTROLS, failureRecovery: constants.FEEDBACK_LEARNING_FAILURE_RECOVERY, observabilityFields: constants.FEEDBACK_LEARNING_OBSERVABILITY, assuranceEvidence: constants.FEEDBACK_LEARNING_ASSURANCE, invariants: constants.FEEDBACK_LEARNING_INVARIANTS });
const required = Object.freeze({ consentVerified: 'requires verified consent or lawful basis', tenantBoundariesEnforced: 'requires tenant boundaries', dataMinimized: 'requires data minimization', signalsDeidentified: 'requires de-identification', candidatesReviewed: 'requires candidate review', provenanceComplete: 'requires complete provenance', outcomesQualified: 'requires qualified outcomes', directLearningProhibited: 'requires prohibition of direct learning' });
const prohibited = Object.freeze({ rawMessageUsedForLearning: 'prohibits raw messages for learning', paymentDataIncluded: 'prohibits payment data in learning', crossTenantAggregation: 'prohibits cross-tenant aggregation', consentInferred: 'prohibits inferred consent', implicitSignalAsTruth: 'prohibits implicit signals as truth', outcomeAsCausation: 'prohibits outcomes as causal proof', candidateAutoPromoted: 'prohibits automatic candidate promotion', deletionIgnored: 'prohibits ignored deletion', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class FeedbackSignalsLearningCandidatesPrivacyDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  signalFields() { return values(metadata.signalFields); }
  signalTypes() { return values(metadata.signalTypes); }
  outcomeFields() { return values(metadata.outcomeFields); }
  consentFields() { return values(metadata.consentFields); }
  minimizationFields() { return values(metadata.minimizationFields); }
  deidentificationFields() { return values(metadata.deidentificationFields); }
  candidateFields() { return values(metadata.candidateFields); }
  reviewFields() { return values(metadata.reviewFields); }
  deletionFields() { return values(metadata.deletionFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Feedback Signals Learning Candidates and Privacy profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-05 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-05 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.FEEDBACK_SIGNALS_LEARNING_CANDIDATES_PRIVACY_ERROR_CODE, 'Feedback Signals Learning Candidates and Privacy violates ARCH-029-05.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
