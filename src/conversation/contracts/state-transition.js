export class StateTransition {
  constructor({
    fromState,
    toState,
    timestamp,
    reason
  }) {
    this.fromState = fromState;
    this.toState = toState;
    this.timestamp = timestamp;
    this.reason = reason;
    Object.freeze(this);
  }
}
