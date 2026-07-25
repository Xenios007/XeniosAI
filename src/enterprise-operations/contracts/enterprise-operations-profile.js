export class EnterpriseOperationsProfile {
  constructor({
    operationsName,
    objectives = [],
    principles = [],
    domains = [],
    controlLoopStages = [],
    commandControlCapabilities = [],
    relationshipStages = [],
    chapters = [],
    expectedOutcomes = [],
    businessFirst = true,
    unifiedOperatingModel = true,
    operationsByDesign = true,
    observableSignalsActionable = true,
    automationAccountable = true,
    serviceOwnershipRequired = true,
    resiliencePreferredOverReaction = true,
    tenantPropertyIsolationPreserved = true,
    policyDrivenControl = true,
    technologyIndependent = true,
    vendorNeutral = true,
    implementationTechnologySpecific = false,
    serviceManagementProductSpecific = false,
    orchestrationPlatformSpecific = false,
    monitoringVendorSpecific = false,
    ticketingSystemSpecific = false,
    deploymentToolSpecific = false,
    infrastructureProviderSpecific = false,
    organizationalChartSpecific = false,
    implementationRunbookSpecific = false,
    propertyProcedureSpecific = false
  }) {
    this.operationsName = operationsName;
    this.objectives = Object.freeze([...objectives]);
    this.principles = Object.freeze([...principles]);
    this.domains = Object.freeze([...domains]);
    this.controlLoopStages = Object.freeze([...controlLoopStages]);
    this.commandControlCapabilities = Object.freeze([...commandControlCapabilities]);
    this.relationshipStages = Object.freeze([...relationshipStages]);
    this.chapters = Object.freeze([...chapters]);
    this.expectedOutcomes = Object.freeze([...expectedOutcomes]);
    this.businessFirst = Boolean(businessFirst);
    this.unifiedOperatingModel = Boolean(unifiedOperatingModel);
    this.operationsByDesign = Boolean(operationsByDesign);
    this.observableSignalsActionable = Boolean(observableSignalsActionable);
    this.automationAccountable = Boolean(automationAccountable);
    this.serviceOwnershipRequired = Boolean(serviceOwnershipRequired);
    this.resiliencePreferredOverReaction = Boolean(resiliencePreferredOverReaction);
    this.tenantPropertyIsolationPreserved = Boolean(tenantPropertyIsolationPreserved);
    this.policyDrivenControl = Boolean(policyDrivenControl);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.vendorNeutral = Boolean(vendorNeutral);
    this.implementationTechnologySpecific = Boolean(implementationTechnologySpecific);
    this.serviceManagementProductSpecific = Boolean(serviceManagementProductSpecific);
    this.orchestrationPlatformSpecific = Boolean(orchestrationPlatformSpecific);
    this.monitoringVendorSpecific = Boolean(monitoringVendorSpecific);
    this.ticketingSystemSpecific = Boolean(ticketingSystemSpecific);
    this.deploymentToolSpecific = Boolean(deploymentToolSpecific);
    this.infrastructureProviderSpecific = Boolean(infrastructureProviderSpecific);
    this.organizationalChartSpecific = Boolean(organizationalChartSpecific);
    this.implementationRunbookSpecific = Boolean(implementationRunbookSpecific);
    this.propertyProcedureSpecific = Boolean(propertyProcedureSpecific);

    Object.freeze(this);
  }
}
