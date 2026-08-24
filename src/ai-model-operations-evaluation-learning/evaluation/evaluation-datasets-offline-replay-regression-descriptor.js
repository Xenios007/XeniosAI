import { PlatformError } from '../../foundation/errors/platform-error.js';
import { EvaluationDatasetsOfflineReplayRegressionProfile as Profile } from '../contracts/evaluation-datasets-offline-replay-regression-profile.js';
import * as constants from '../evaluation-datasets-offline-replay-regression-constants.js';

const metadata = Object.freeze({ responsibilities: constants.EVALUATION_DATASET_RESPONSIBILITIES, datasetFields: constants.EVALUATION_DATASET_FIELDS, caseFields: constants.EVALUATION_CASE_FIELDS, provenanceFields: constants.DATASET_PROVENANCE_FIELDS, sliceFields: constants.EVALUATION_SLICE_FIELDS, goldenOutcomeFields: constants.GOLDEN_OUTCOME_FIELDS, replayFields: constants.OFFLINE_REPLAY_FIELDS, judgeFields: constants.EVALUATION_JUDGE_FIELDS, regressionFields: constants.REGRESSION_RESULT_FIELDS, safetyGroundingFields: constants.SAFETY_GROUNDING_TEST_FIELDS, lifecycleStates: constants.EVALUATION_DATASET_LIFECYCLE_STATES, controls: constants.EVALUATION_DATASET_CONTROLS, failureRecovery: constants.EVALUATION_DATASET_FAILURE_RECOVERY, observabilityFields: constants.EVALUATION_DATASET_OBSERVABILITY, assuranceEvidence: constants.EVALUATION_DATASET_ASSURANCE, invariants: constants.EVALUATION_DATASET_INVARIANTS });
const required = Object.freeze({ datasetsVersioned: 'requires versioned evaluation datasets', provenanceComplete: 'requires complete case provenance', slicesDefined: 'requires defined evaluation slices', goldenOutcomesReviewed: 'requires reviewed golden outcomes', replayVersionPinned: 'requires version-pinned offline replay', judgesCalibrated: 'requires calibrated judges', regressionsGated: 'requires regression gates', safetyGroundingTested: 'requires safety and grounding tests' });
const prohibited = Object.freeze({ mutablePublishedDataset: 'prohibits mutable published datasets', unprovenancedCase: 'prohibits unprovenanced evaluation cases', crossTenantDataset: 'prohibits cross-tenant datasets', protectedDataIncluded: 'prohibits unapproved protected data', liveDependencyDuringReplay: 'prohibits live dependencies during replay', aggregateOnlyDecision: 'prohibits aggregate-only quality decisions', uncalibratedModelJudge: 'prohibits uncalibrated model judges', regressionGateBypassed: 'prohibits regression gate bypass', evaluationDirectlyPromotes: 'prohibits evaluation from directly promoting production behavior', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class EvaluationDatasetsOfflineReplayRegressionDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  datasetFields() { return values(metadata.datasetFields); }
  caseFields() { return values(metadata.caseFields); }
  provenanceFields() { return values(metadata.provenanceFields); }
  sliceFields() { return values(metadata.sliceFields); }
  goldenOutcomeFields() { return values(metadata.goldenOutcomeFields); }
  replayFields() { return values(metadata.replayFields); }
  judgeFields() { return values(metadata.judgeFields); }
  regressionFields() { return values(metadata.regressionFields); }
  safetyGroundingFields() { return values(metadata.safetyGroundingFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Evaluation Datasets Offline Replay and Regression profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-06 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-06 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.EVALUATION_DATASETS_OFFLINE_REPLAY_REGRESSION_ERROR_CODE, 'Evaluation Datasets Offline Replay and Regression violates ARCH-029-06.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
