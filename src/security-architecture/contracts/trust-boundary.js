export class TrustBoundary {
  constructor({
    boundaryName,
    source,
    target,
    controls = [],
    authenticated = true,
    authorized = true,
    evaluated = true,
    loggedWhereAppropriate = true,
    trustsNetworkLocation = false,
    vendorSpecific = false
  }) {
    this.boundaryName = boundaryName;
    this.source = source;
    this.target = target;
    this.controls = Object.freeze([...controls]);
    this.authenticated = Boolean(authenticated);
    this.authorized = Boolean(authorized);
    this.evaluated = Boolean(evaluated);
    this.loggedWhereAppropriate = Boolean(loggedWhereAppropriate);
    this.trustsNetworkLocation = Boolean(trustsNetworkLocation);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
