import { FUTURE_SERVICE_EVALUATION_DECISIONS } from '../constants.js';

export class FutureServiceEvaluationResult {
  constructor({ decision, errors = [], evaluation = null, candidate = null }) {
    this.decision = decision;
    this.errors = Object.freeze([...errors]);
    this.evaluation = evaluation;
    this.candidate = candidate;

    Object.freeze(this);
  }

  static accepted({ evaluation, candidate }) {
    return new FutureServiceEvaluationResult({
      decision: FUTURE_SERVICE_EVALUATION_DECISIONS.ACCEPT,
      evaluation,
      candidate
    });
  }

  static rejected({ errors, evaluation = null, candidate = null }) {
    return new FutureServiceEvaluationResult({
      decision: FUTURE_SERVICE_EVALUATION_DECISIONS.REJECT,
      errors,
      evaluation,
      candidate
    });
  }
}
