export class LifecycleTransitionResult {
  constructor({ isAllowed, errors = [], fromStage = null, toStage = null, record = null }) {
    this.isAllowed = Boolean(isAllowed);
    this.errors = Object.freeze([...errors]);
    this.fromStage = fromStage;
    this.toStage = toStage;
    this.record = record;

    Object.freeze(this);
  }

  static allowed({ fromStage, toStage, record = null }) {
    return new LifecycleTransitionResult({
      isAllowed: true,
      fromStage,
      toStage,
      record
    });
  }

  static rejected({ errors, fromStage = null, toStage = null, record = null }) {
    return new LifecycleTransitionResult({
      isAllowed: false,
      errors,
      fromStage,
      toStage,
      record
    });
  }
}
