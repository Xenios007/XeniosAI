export class EntityStateTransition {
  constructor({
    entityName,
    fromState,
    toState,
    behavior,
    requestedByContext,
    invariantsPreserved = true
  }) {
    this.entityName = entityName;
    this.fromState = fromState;
    this.toState = toState;
    this.behavior = behavior;
    this.requestedByContext = requestedByContext;
    this.invariantsPreserved = Boolean(invariantsPreserved);

    Object.freeze(this);
  }
}
