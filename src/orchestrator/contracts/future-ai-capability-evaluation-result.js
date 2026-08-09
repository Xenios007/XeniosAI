export class FutureAiCapabilityEvaluationResult {
  constructor({ accepted, evaluation, candidate = undefined, errors = [] }) {
    this.accepted = Boolean(accepted);
    this.evaluation = evaluation;
    this.candidate = candidate;
    this.errors = Object.freeze([...errors]);

    Object.freeze(this);
  }

  static accepted({ evaluation, candidate }) {
    return new FutureAiCapabilityEvaluationResult({
      accepted: true,
      evaluation,
      candidate
    });
  }

  static rejected({ evaluation, candidate = undefined, errors = [] }) {
    return new FutureAiCapabilityEvaluationResult({
      accepted: false,
      evaluation,
      candidate,
      errors
    });
  }
}
