export class ApiIntegrationAndExtensionReferenceProfile {
  constructor({
    referenceName,
    apiProductOperations = [], apiOperationAttributes = [], gatewayResponsibilities = [], providerRevalidations = [],
    sdkCapabilities = [], integrationAdapterOwnership = [], inboundFlowSteps = [], outboundDeliveryRetryFields = [],
    pluginReferenceElements = [], mcpReferenceElements = [], compatibilityMatrixDimensions = [],
    compatibilityChangeControls = [], failureCases = [], referenceAcceptanceCriteria = [], architecturalRules = [],
    allIntegrationsUsePublishedContracts = true, credentialsAreTenantAndConnectionBound = true,
    providersValidateResourceOwnership = true, retriesAreIdempotentAndBudgeted = true,
    pluginAndMcpAccessIsCapabilityMediated = true, compatibilityAndRetirementAreDemonstrable = true,
    apisExposeBusinessCapabilityRatherThanDatabases = true, adaptersOwnTranslationNotBusinessTruth = true,
    sdksPreserveContracts = true, extensionsAndMcpUseTheSameTenantCapabilityHostAndEvidenceRules = true,
    sdkConvenienceBroadensAuthorityOrHidesProviderErrors = false,
    integrationAdapterOwnsInternalAvailabilityTruth = false, protocolDiscoveryAuthorizesToolExecution = false
  }) {
    this.referenceName = referenceName;
    for (const [key, value] of Object.entries({
      apiProductOperations, apiOperationAttributes, gatewayResponsibilities, providerRevalidations, sdkCapabilities,
      integrationAdapterOwnership, inboundFlowSteps, outboundDeliveryRetryFields, pluginReferenceElements,
      mcpReferenceElements, compatibilityMatrixDimensions, compatibilityChangeControls, failureCases,
      referenceAcceptanceCriteria, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      allIntegrationsUsePublishedContracts, credentialsAreTenantAndConnectionBound, providersValidateResourceOwnership,
      retriesAreIdempotentAndBudgeted, pluginAndMcpAccessIsCapabilityMediated, compatibilityAndRetirementAreDemonstrable,
      apisExposeBusinessCapabilityRatherThanDatabases, adaptersOwnTranslationNotBusinessTruth, sdksPreserveContracts,
      extensionsAndMcpUseTheSameTenantCapabilityHostAndEvidenceRules, sdkConvenienceBroadensAuthorityOrHidesProviderErrors,
      integrationAdapterOwnsInternalAvailabilityTruth, protocolDiscoveryAuthorizesToolExecution
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
