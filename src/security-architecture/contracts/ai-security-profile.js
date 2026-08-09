export class AiSecurityProfile {
  constructor({
    componentName,
    identityType,
    trustModelStages = [],
    identityCapabilities = [],
    protectedOperations = [],
    promptControls = [],
    promptInjectionControls = [],
    knowledgeControls = [],
    agentCommunicationControls = [],
    memoryControls = [],
    uniqueIdentity = true,
    independentlyAuthenticated = true,
    explicitlyAuthorized = true,
    leastPrivilege = true,
    humanAccountabilityPreserved = true,
    defenseInDepth = true,
    auditable = true,
    sharesUserCredentials = false,
    unrestrictedAccess = false,
    implicitTrust = false,
    vendorSpecific = false
  }) {
    this.componentName = componentName;
    this.identityType = identityType;
    this.trustModelStages = Object.freeze([...trustModelStages]);
    this.identityCapabilities = Object.freeze([...identityCapabilities]);
    this.protectedOperations = Object.freeze([...protectedOperations]);
    this.promptControls = Object.freeze([...promptControls]);
    this.promptInjectionControls = Object.freeze([...promptInjectionControls]);
    this.knowledgeControls = Object.freeze([...knowledgeControls]);
    this.agentCommunicationControls = Object.freeze([...agentCommunicationControls]);
    this.memoryControls = Object.freeze([...memoryControls]);
    this.uniqueIdentity = Boolean(uniqueIdentity);
    this.independentlyAuthenticated = Boolean(independentlyAuthenticated);
    this.explicitlyAuthorized = Boolean(explicitlyAuthorized);
    this.leastPrivilege = Boolean(leastPrivilege);
    this.humanAccountabilityPreserved = Boolean(humanAccountabilityPreserved);
    this.defenseInDepth = Boolean(defenseInDepth);
    this.auditable = Boolean(auditable);
    this.sharesUserCredentials = Boolean(sharesUserCredentials);
    this.unrestrictedAccess = Boolean(unrestrictedAccess);
    this.implicitTrust = Boolean(implicitTrust);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
