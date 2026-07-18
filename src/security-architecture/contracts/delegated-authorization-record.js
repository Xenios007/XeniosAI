export class DelegatedAuthorizationRecord {
  constructor({
    delegationName,
    delegatingIdentity,
    receivingIdentity,
    workflow,
    requirements = [],
    transfersPermissionOwnership = false,
    auditable = true,
    timeLimited = true,
    accountable = true,
    explicit = true,
    vendorSpecific = false
  }) {
    this.delegationName = delegationName;
    this.delegatingIdentity = delegatingIdentity;
    this.receivingIdentity = receivingIdentity;
    this.workflow = workflow;
    this.requirements = Object.freeze([...requirements]);
    this.transfersPermissionOwnership = Boolean(transfersPermissionOwnership);
    this.auditable = Boolean(auditable);
    this.timeLimited = Boolean(timeLimited);
    this.accountable = Boolean(accountable);
    this.explicit = Boolean(explicit);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
