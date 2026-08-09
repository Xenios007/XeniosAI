export class ContextIsolationRecord {
  constructor({
    contextName,
    isolatedAspects = [],
    sharesImplementation = false,
    sharesDatabase = false,
    sharesLifecycle = false,
    terminologyConflated = false
  }) {
    this.contextName = contextName;
    this.isolatedAspects = Object.freeze([...isolatedAspects]);
    this.sharesImplementation = Boolean(sharesImplementation);
    this.sharesDatabase = Boolean(sharesDatabase);
    this.sharesLifecycle = Boolean(sharesLifecycle);
    this.terminologyConflated = Boolean(terminologyConflated);

    Object.freeze(this);
  }
}
