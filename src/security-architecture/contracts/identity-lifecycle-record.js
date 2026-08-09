export class IdentityLifecycleRecord {
  constructor({
    identityName,
    categoryName,
    stages = [],
    credentials = [],
    sessions = [],
    verificationTriggers = [],
    observabilityEvents = [],
    governanceControls = [],
    controlledLifecycle = true,
    auditable = true,
    permanentTrust = false,
    vendorSpecific = false
  }) {
    this.identityName = identityName;
    this.categoryName = categoryName;
    this.stages = Object.freeze([...stages]);
    this.credentials = Object.freeze([...credentials]);
    this.sessions = Object.freeze([...sessions]);
    this.verificationTriggers = Object.freeze([...verificationTriggers]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.governanceControls = Object.freeze([...governanceControls]);
    this.controlledLifecycle = Boolean(controlledLifecycle);
    this.auditable = Boolean(auditable);
    this.permanentTrust = Boolean(permanentTrust);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
