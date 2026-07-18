export class RuntimeWorkloadProfile {
  constructor({
    workloadCategory,
    examples = [],
    independentlyScalable = true,
    isolated = true,
    statelessWherePractical = true,
    sharesFailureDomain = false,
    storesPersistentStateInRuntime = false
  }) {
    this.workloadCategory = workloadCategory;
    this.examples = Object.freeze([...examples]);
    this.independentlyScalable = Boolean(independentlyScalable);
    this.isolated = Boolean(isolated);
    this.statelessWherePractical = Boolean(statelessWherePractical);
    this.sharesFailureDomain = Boolean(sharesFailureDomain);
    this.storesPersistentStateInRuntime = Boolean(storesPersistentStateInRuntime);

    Object.freeze(this);
  }
}
