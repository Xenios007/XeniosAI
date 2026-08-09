export class SecurityDomain {
  constructor({
    domainName,
    responsibility,
    protectsPlatformWide = true,
    participatesInZeroTrust = true,
    supportsGovernance = true,
    vendorSpecific = false
  }) {
    this.domainName = domainName;
    this.responsibility = responsibility;
    this.protectsPlatformWide = Boolean(protectsPlatformWide);
    this.participatesInZeroTrust = Boolean(participatesInZeroTrust);
    this.supportsGovernance = Boolean(supportsGovernance);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
