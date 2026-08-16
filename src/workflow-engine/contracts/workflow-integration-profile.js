export class WorkflowIntegrationProfile {
  constructor({
    profileName,
    communicationModels = [], integrationDomains = [], contractFields = [], initiators = [],
    commandOutcomes = [], childVersionBindings = [], normalizedErrors = [], operations = [],
    qualityAttributes = [], architecturalRules = [], architectureBoundaries = [],
    contractDriven = true, serviceOwnershipPreserved = true, domainAuthorityExternal = true,
    publishedInterfacesOnly = true, durableOrchestrationSeparate = true, requestBoundaryPreserved = true,
    conversationNonAuthoritative = true, versionedContracts = true, effectiveVersionBound = true,
    stableOperationIdentity = true, targetAuthorizesIndependently = true, tenantPropertyIsolation = true,
    providerAntiCorruption = true, childIdentityPreserved = true, humanAgentContractBound = true,
    credentialsExcluded = true, consistencyExplicit = true, endToEndEvidence = true,
    vendorNeutral = true, technologyIndependent = true,
    ownsDomainLogic = false, directDatabaseAccess = false, conversationOwnsState = false,
    transportSuccessMeansCompletion = false, workflowDecidesBusinessValidity = false,
    providerPayloadsDefineWorkflow = false, credentialsInDefinitions = false,
    correlationIsCredential = false, gatewayOwnsState = false, selectsProviderProduct = false,
    definesAdjacentDetails = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      communicationModels, integrationDomains, contractFields, initiators, commandOutcomes,
      childVersionBindings, normalizedErrors, operations, qualityAttributes, architecturalRules,
      architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      contractDriven, serviceOwnershipPreserved, domainAuthorityExternal, publishedInterfacesOnly,
      durableOrchestrationSeparate, requestBoundaryPreserved, conversationNonAuthoritative,
      versionedContracts, effectiveVersionBound, stableOperationIdentity, targetAuthorizesIndependently,
      tenantPropertyIsolation, providerAntiCorruption, childIdentityPreserved, humanAgentContractBound,
      credentialsExcluded, consistencyExplicit, endToEndEvidence, vendorNeutral, technologyIndependent,
      ownsDomainLogic, directDatabaseAccess, conversationOwnsState, transportSuccessMeansCompletion,
      workflowDecidesBusinessValidity, providerPayloadsDefineWorkflow, credentialsInDefinitions,
      correlationIsCredential, gatewayOwnsState, selectsProviderProduct, definesAdjacentDetails
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
