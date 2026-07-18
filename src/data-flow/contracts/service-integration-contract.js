export class ServiceIntegrationContract {
  constructor({
    contractId,
    category,
    pattern,
    capability,
    sourceService,
    targetService,
    version,
    requestFields = [],
    responseFields = [],
    errorModel = [],
    compatibility = 'backward-compatible',
    publishedInterface = true,
    implementationDetailsExposed = false,
    targetInternalStateAccess = false,
    externalProviderIsolated = true,
    reliabilityStrategies = [],
    securityControls = [],
    observable = true
  }) {
    this.contractId = contractId;
    this.category = category;
    this.pattern = pattern;
    this.capability = capability;
    this.sourceService = sourceService;
    this.targetService = targetService;
    this.version = version;
    this.requestFields = Object.freeze([...requestFields]);
    this.responseFields = Object.freeze([...responseFields]);
    this.errorModel = Object.freeze([...errorModel]);
    this.compatibility = compatibility;
    this.publishedInterface = Boolean(publishedInterface);
    this.implementationDetailsExposed = Boolean(implementationDetailsExposed);
    this.targetInternalStateAccess = Boolean(targetInternalStateAccess);
    this.externalProviderIsolated = Boolean(externalProviderIsolated);
    this.reliabilityStrategies = Object.freeze([...reliabilityStrategies]);
    this.securityControls = Object.freeze([...securityControls]);
    this.observable = Boolean(observable);

    Object.freeze(this);
  }
}
