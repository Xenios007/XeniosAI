export class ZeroTrustBoundary {
  constructor({
    name,
    crossing,
    subjects = [],
    requiresPolicyEvaluation = true,
    verifiesIdentity = true,
    evaluatesContext = true,
    assessesRisk = true,
    enforcesLeastPrivilege = true,
    auditable = true,
    networkLocationTrusted = false,
    infrastructurePlacementTrusted = false,
    vendorSpecific = false
  }) {
    this.name = name;
    this.crossing = crossing;
    this.subjects = Object.freeze([...subjects]);
    this.requiresPolicyEvaluation = Boolean(requiresPolicyEvaluation);
    this.verifiesIdentity = Boolean(verifiesIdentity);
    this.evaluatesContext = Boolean(evaluatesContext);
    this.assessesRisk = Boolean(assessesRisk);
    this.enforcesLeastPrivilege = Boolean(enforcesLeastPrivilege);
    this.auditable = Boolean(auditable);
    this.networkLocationTrusted = Boolean(networkLocationTrusted);
    this.infrastructurePlacementTrusted = Boolean(infrastructurePlacementTrusted);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
