export class AuthorizationPermission {
  constructor({
    identity,
    resource,
    action,
    resourceCategory,
    explicit = true,
    leastPrivilege = true,
    fineGrained = true,
    reviewable = true,
    revocable = true,
    auditable = true,
    impliedByNetwork = false,
    impliedByServiceOwnership = false,
    impliedByDeploymentEnvironment = false,
    vendorSpecific = false
  }) {
    this.identity = identity;
    this.resource = resource;
    this.action = action;
    this.resourceCategory = resourceCategory;
    this.explicit = Boolean(explicit);
    this.leastPrivilege = Boolean(leastPrivilege);
    this.fineGrained = Boolean(fineGrained);
    this.reviewable = Boolean(reviewable);
    this.revocable = Boolean(revocable);
    this.auditable = Boolean(auditable);
    this.impliedByNetwork = Boolean(impliedByNetwork);
    this.impliedByServiceOwnership = Boolean(impliedByServiceOwnership);
    this.impliedByDeploymentEnvironment = Boolean(impliedByDeploymentEnvironment);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
