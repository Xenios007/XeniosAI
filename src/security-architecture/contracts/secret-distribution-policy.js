export class SecretDistributionPolicy {
  constructor({
    policyName,
    authorizedWorkload,
    secretCategory,
    environment,
    requirements = [],
    administrativeControls = [],
    aiAccessTargets = [],
    leastExposure = true,
    justInTime = true,
    limitedDuration = true,
    avoidsDuplication = true,
    unrestrictedPlatformCredentials = false,
    crossEnvironmentReuse = false,
    auditable = true,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.authorizedWorkload = authorizedWorkload;
    this.secretCategory = secretCategory;
    this.environment = environment;
    this.requirements = Object.freeze([...requirements]);
    this.administrativeControls = Object.freeze([...administrativeControls]);
    this.aiAccessTargets = Object.freeze([...aiAccessTargets]);
    this.leastExposure = Boolean(leastExposure);
    this.justInTime = Boolean(justInTime);
    this.limitedDuration = Boolean(limitedDuration);
    this.avoidsDuplication = Boolean(avoidsDuplication);
    this.unrestrictedPlatformCredentials = Boolean(unrestrictedPlatformCredentials);
    this.crossEnvironmentReuse = Boolean(crossEnvironmentReuse);
    this.auditable = Boolean(auditable);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
