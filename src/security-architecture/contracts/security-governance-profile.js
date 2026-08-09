export class SecurityGovernanceProfile {
  constructor({
    governanceName,
    domains = [],
    principles = [],
    responsibilityAreas = [],
    transparencyAreas = [],
    applicationDomains = [],
    policyManagementStages = [],
    policyControlHierarchy = [],
    clearOwners = true,
    decisionsTraceable = true,
    policiesConsistent = true,
    accountable = true,
    technologyNeutral = true,
    unnecessarilySlowsInnovation = false,
    vendorSpecific = false
  }) {
    this.governanceName = governanceName;
    this.domains = Object.freeze([...domains]);
    this.principles = Object.freeze([...principles]);
    this.responsibilityAreas = Object.freeze([...responsibilityAreas]);
    this.transparencyAreas = Object.freeze([...transparencyAreas]);
    this.applicationDomains = Object.freeze([...applicationDomains]);
    this.policyManagementStages = Object.freeze([...policyManagementStages]);
    this.policyControlHierarchy = Object.freeze([...policyControlHierarchy]);
    this.clearOwners = Boolean(clearOwners);
    this.decisionsTraceable = Boolean(decisionsTraceable);
    this.policiesConsistent = Boolean(policiesConsistent);
    this.accountable = Boolean(accountable);
    this.technologyNeutral = Boolean(technologyNeutral);
    this.unnecessarilySlowsInnovation = Boolean(unnecessarilySlowsInnovation);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
