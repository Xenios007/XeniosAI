export class ComputeResourceAllocation {
  constructor({
    computeCategory,
    ownsCpuAllocation = true,
    ownsMemoryAllocation = true,
    ownsStorageLimits = true,
    ownsNetworkAccess = true,
    ownsRuntimeConfiguration = true,
    independentBetweenWorkloads = true,
    predictableUtilization = true,
    resourceContention = false
  }) {
    this.computeCategory = computeCategory;
    this.ownsCpuAllocation = Boolean(ownsCpuAllocation);
    this.ownsMemoryAllocation = Boolean(ownsMemoryAllocation);
    this.ownsStorageLimits = Boolean(ownsStorageLimits);
    this.ownsNetworkAccess = Boolean(ownsNetworkAccess);
    this.ownsRuntimeConfiguration = Boolean(ownsRuntimeConfiguration);
    this.independentBetweenWorkloads = Boolean(independentBetweenWorkloads);
    this.predictableUtilization = Boolean(predictableUtilization);
    this.resourceContention = Boolean(resourceContention);

    Object.freeze(this);
  }
}
