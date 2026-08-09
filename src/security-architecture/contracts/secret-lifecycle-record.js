export class SecretLifecycleRecord {
  constructor({
    secretName,
    category,
    owner,
    environment,
    lifecycleStages = [],
    ownershipResponsibilities = [],
    generationRequirements = [],
    usageRequirements = [],
    rotationTriggers = [],
    revocationRequirements = [],
    observabilityEvents = [],
    governanceActivities = [],
    unique = true,
    shortLived = true,
    leastPrivilege = true,
    environmentIsolated = true,
    auditable = true,
    embeddedInSource = false,
    reusedAcrossEnvironments = false,
    plaintextStorage = false,
    diagnosticExposure = false,
    vendorSpecific = false
  }) {
    this.secretName = secretName;
    this.category = category;
    this.owner = owner;
    this.environment = environment;
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.ownershipResponsibilities = Object.freeze([...ownershipResponsibilities]);
    this.generationRequirements = Object.freeze([...generationRequirements]);
    this.usageRequirements = Object.freeze([...usageRequirements]);
    this.rotationTriggers = Object.freeze([...rotationTriggers]);
    this.revocationRequirements = Object.freeze([...revocationRequirements]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.unique = Boolean(unique);
    this.shortLived = Boolean(shortLived);
    this.leastPrivilege = Boolean(leastPrivilege);
    this.environmentIsolated = Boolean(environmentIsolated);
    this.auditable = Boolean(auditable);
    this.embeddedInSource = Boolean(embeddedInSource);
    this.reusedAcrossEnvironments = Boolean(reusedAcrossEnvironments);
    this.plaintextStorage = Boolean(plaintextStorage);
    this.diagnosticExposure = Boolean(diagnosticExposure);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
