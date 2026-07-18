export class AiToolInvocationPolicy {
  constructor({
    policyName,
    agentIdentity,
    toolCategory,
    requirements = [],
    protectedOperations = [],
    explicitAuthorization = true,
    parameterValidation = true,
    auditLogging = true,
    errorHandling = true,
    operationalMonitoring = true,
    inheritsUnrestrictedPrivileges = false,
    bypassesPlatformSecurity = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.agentIdentity = agentIdentity;
    this.toolCategory = toolCategory;
    this.requirements = Object.freeze([...requirements]);
    this.protectedOperations = Object.freeze([...protectedOperations]);
    this.explicitAuthorization = Boolean(explicitAuthorization);
    this.parameterValidation = Boolean(parameterValidation);
    this.auditLogging = Boolean(auditLogging);
    this.errorHandling = Boolean(errorHandling);
    this.operationalMonitoring = Boolean(operationalMonitoring);
    this.inheritsUnrestrictedPrivileges = Boolean(inheritsUnrestrictedPrivileges);
    this.bypassesPlatformSecurity = Boolean(bypassesPlatformSecurity);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
