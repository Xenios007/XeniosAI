export class ComputeSchedulingPolicy {
  constructor({
    policyName,
    considerations = [],
    optimizesPlatformStability = true,
    optimizesIndividualThroughputOnly = false,
    respectsFaultDomains = true,
    respectsCapacityConstraints = true,
    preservesWorkloadIsolation = true
  }) {
    this.policyName = policyName;
    this.considerations = Object.freeze([...considerations]);
    this.optimizesPlatformStability = Boolean(optimizesPlatformStability);
    this.optimizesIndividualThroughputOnly = Boolean(optimizesIndividualThroughputOnly);
    this.respectsFaultDomains = Boolean(respectsFaultDomains);
    this.respectsCapacityConstraints = Boolean(respectsCapacityConstraints);
    this.preservesWorkloadIsolation = Boolean(preservesWorkloadIsolation);

    Object.freeze(this);
  }
}
