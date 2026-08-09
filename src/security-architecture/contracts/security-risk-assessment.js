export class SecurityRiskAssessment {
  constructor({
    assessmentName,
    riskFactors = [],
    controlsProportional = true,
    includesSecurityReview = true,
    enablesBusinessOperations = true,
    unnecessarilyRestrictsCapabilities = false,
    vendorSpecific = false
  }) {
    this.assessmentName = assessmentName;
    this.riskFactors = Object.freeze([...riskFactors]);
    this.controlsProportional = Boolean(controlsProportional);
    this.includesSecurityReview = Boolean(includesSecurityReview);
    this.enablesBusinessOperations = Boolean(enablesBusinessOperations);
    this.unnecessarilyRestrictsCapabilities = Boolean(unnecessarilyRestrictsCapabilities);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
