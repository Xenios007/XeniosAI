export class SoftwareDeliverySecurityProfile {
  constructor({
    deliverySystem,
    domainStages = [],
    developmentPractices = [],
    buildRequirements = [],
    deploymentControls = [],
    traceableEndToEnd = true,
    secureDevelopmentIntegrated = true,
    buildTrustworthyRepeatable = true,
    onlyApprovedArtifactsDeployed = true,
    sourceToRuntimeTraceability = true,
    unauthorizedModificationDetectable = true,
    vendorSpecific = false
  }) {
    this.deliverySystem = deliverySystem;
    this.domainStages = Object.freeze([...domainStages]);
    this.developmentPractices = Object.freeze([...developmentPractices]);
    this.buildRequirements = Object.freeze([...buildRequirements]);
    this.deploymentControls = Object.freeze([...deploymentControls]);
    this.traceableEndToEnd = Boolean(traceableEndToEnd);
    this.secureDevelopmentIntegrated = Boolean(secureDevelopmentIntegrated);
    this.buildTrustworthyRepeatable = Boolean(buildTrustworthyRepeatable);
    this.onlyApprovedArtifactsDeployed = Boolean(onlyApprovedArtifactsDeployed);
    this.sourceToRuntimeTraceability = Boolean(sourceToRuntimeTraceability);
    this.unauthorizedModificationDetectable = Boolean(unauthorizedModificationDetectable);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
