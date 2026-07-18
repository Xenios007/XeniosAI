export class FailureDomainPolicy {
  constructor({
    policyName,
    failureDomains = [],
    isolatesFailures = true,
    preventsUnnecessaryPropagation = true,
    supportsIndependentRecovery = true,
    supportsMultiZoneDistribution = true,
    validInSingleZone = true,
    platformSpecific = false
  }) {
    this.policyName = policyName;
    this.failureDomains = Object.freeze([...failureDomains]);
    this.isolatesFailures = Boolean(isolatesFailures);
    this.preventsUnnecessaryPropagation = Boolean(preventsUnnecessaryPropagation);
    this.supportsIndependentRecovery = Boolean(supportsIndependentRecovery);
    this.supportsMultiZoneDistribution = Boolean(supportsMultiZoneDistribution);
    this.validInSingleZone = Boolean(validInSingleZone);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
