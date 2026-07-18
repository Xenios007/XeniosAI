export class FutureDomainEvaluationResult {
  constructor({ isValid, errors = [], decision }) {
    this.isValid = Boolean(isValid);
    this.errors = Object.freeze([...errors]);
    this.decision = decision;

    Object.freeze(this);
  }
}
