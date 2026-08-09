export class GovernanceChangeRequest {
  constructor({
    changeId,
    serviceName,
    scope,
    description = '',
    documented = false,
    reviewable = false,
    traceable = false,
    justified = false,
    reversible = false,
    singleDomainOwnership = false,
    ownershipUnambiguous = false,
    dependenciesMinimal = false,
    communicationAppropriate = false,
    publicContractsDocumented = false,
    versioningUnderstood = false,
    documentationUpdated = false,
    adrRequired = false,
    adrRef = ''
  }) {
    this.changeId = changeId;
    this.serviceName = serviceName;
    this.scope = scope;
    this.description = description;
    this.documented = Boolean(documented);
    this.reviewable = Boolean(reviewable);
    this.traceable = Boolean(traceable);
    this.justified = Boolean(justified);
    this.reversible = Boolean(reversible);
    this.singleDomainOwnership = Boolean(singleDomainOwnership);
    this.ownershipUnambiguous = Boolean(ownershipUnambiguous);
    this.dependenciesMinimal = Boolean(dependenciesMinimal);
    this.communicationAppropriate = Boolean(communicationAppropriate);
    this.publicContractsDocumented = Boolean(publicContractsDocumented);
    this.versioningUnderstood = Boolean(versioningUnderstood);
    this.documentationUpdated = Boolean(documentationUpdated);
    this.adrRequired = Boolean(adrRequired);
    this.adrRef = adrRef;

    Object.freeze(this);
  }
}
