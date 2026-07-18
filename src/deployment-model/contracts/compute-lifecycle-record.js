export class ComputeLifecycleRecord {
  constructor({
    computeCategory,
    stages = [],
    independentOfApplicationLifecycle = true,
    supportsAutomatedRecovery = true,
    supportsGracefulShutdown = true,
    supportsRollingUpdates = true,
    supportsIndependentReplacement = true,
    predictableStartup = true
  }) {
    this.computeCategory = computeCategory;
    this.stages = Object.freeze([...stages]);
    this.independentOfApplicationLifecycle = Boolean(independentOfApplicationLifecycle);
    this.supportsAutomatedRecovery = Boolean(supportsAutomatedRecovery);
    this.supportsGracefulShutdown = Boolean(supportsGracefulShutdown);
    this.supportsRollingUpdates = Boolean(supportsRollingUpdates);
    this.supportsIndependentReplacement = Boolean(supportsIndependentReplacement);
    this.predictableStartup = Boolean(predictableStartup);

    Object.freeze(this);
  }
}
