export class AuditCompliancePolicy {
  constructor({
    policyName,
    riskActivities = [],
    complianceObligations = [],
    auditEvidenceTypes = [],
    dataGovernanceActivities = [],
    aiGovernanceActivities = [],
    thirdPartyCriteria = [],
    securityMetrics = [],
    riskProportional = true,
    auditEvidenceAccurateCompleteProtected = true,
    frameworkNeutral = true,
    evidenceBasedMetrics = true,
    continuousAuditReadiness = true,
    specificLegalInterpretation = false,
    certificationProcedure = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.riskActivities = Object.freeze([...riskActivities]);
    this.complianceObligations = Object.freeze([...complianceObligations]);
    this.auditEvidenceTypes = Object.freeze([...auditEvidenceTypes]);
    this.dataGovernanceActivities = Object.freeze([...dataGovernanceActivities]);
    this.aiGovernanceActivities = Object.freeze([...aiGovernanceActivities]);
    this.thirdPartyCriteria = Object.freeze([...thirdPartyCriteria]);
    this.securityMetrics = Object.freeze([...securityMetrics]);
    this.riskProportional = Boolean(riskProportional);
    this.auditEvidenceAccurateCompleteProtected = Boolean(auditEvidenceAccurateCompleteProtected);
    this.frameworkNeutral = Boolean(frameworkNeutral);
    this.evidenceBasedMetrics = Boolean(evidenceBasedMetrics);
    this.continuousAuditReadiness = Boolean(continuousAuditReadiness);
    this.specificLegalInterpretation = Boolean(specificLegalInterpretation);
    this.certificationProcedure = Boolean(certificationProcedure);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
