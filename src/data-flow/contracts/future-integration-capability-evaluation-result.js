import { FUTURE_INTEGRATION_EVALUATION_DECISIONS } from '../constants.js';

export class FutureIntegrationCapabilityEvaluationResult {
  constructor({ decision, evaluation, candidate = undefined, errors = [] }) {
    this.decision = decision;
    this.accepted = decision === FUTURE_INTEGRATION_EVALUATION_DECISIONS.ACCEPT;
    this.evaluation = evaluation;
    this.candidate = candidate;
    this.errors = Object.freeze([...errors]);

    Object.freeze(this);
  }

  static accepted({ evaluation, candidate }) {
    return new FutureIntegrationCapabilityEvaluationResult({
      decision: FUTURE_INTEGRATION_EVALUATION_DECISIONS.ACCEPT,
      evaluation,
      candidate
    });
  }

  static rejected({ evaluation, candidate = undefined, errors = [] }) {
    return new FutureIntegrationCapabilityEvaluationResult({
      decision: FUTURE_INTEGRATION_EVALUATION_DECISIONS.REJECT,
      evaluation,
      candidate,
      errors
    });
  }
}
