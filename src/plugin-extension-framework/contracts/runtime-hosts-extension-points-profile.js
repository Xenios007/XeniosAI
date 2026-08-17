export class RuntimeHostsExtensionPointsProfile {
  constructor({
    profileName,
    runtimePrinciples = [], hostResponsibilities = [], hostBoundaries = [], hostTypes = [],
    runtimeAdmissionChecks = [], invocationContextFields = [], extensionPointContractFields = [],
    idempotencyScopeElements = [], apiExtensionPointValidations = [], eventExtensionPointValidations = [],
    workflowExtensionPointElements = [], agentToolContractFields = [], agentExtensionInheritedRequirements = [],
    knowledgeExtensionPointContracts = [], memoryExtensionPointDeclarations = [], uiExtensionPointControls = [],
    mcpRuntimeMediationItems = [], connectorRuntimeCapabilities = [], resultValidationChecks = [],
    failureClassifications = [], healthEvaluationFactors = [], recoveryRestorationElements = [],
    recoveryExerciseTypes = [], observabilityTelemetryFields = [], usageMeteringDimensions = [], architecturalRules = [],
    hostsExecuteOnlyVerifiedActiveDigests = true, everyInvocationBindsInstallationTenantGrantPurpose = true,
    extensionPointsOwnedContractsNotHooks = true, providersAuthoritativeForDomainAccess = true,
    sensitiveInterfacesHostMediated = true, executionCancelableResourceBounded = true,
    extensionFailureOutsideCoreTransactionsByDefault = true, asyncPreservesRevalidatesTenantScope = true,
    resultsUntrustedUntilValidated = true, hostsEmitTenantSafeEvidence = true, admissionFailureProducesStableEvidence = true,
    extensionCannotModifyTrustedFields = true, longRunningWorkCannotUseOldGrantIndefinitely = true,
    toolInvocationsValidatedByHost = true, packageAgentUpdateCoordinatedVersioned = true,
    inboundPayloadTenantClaimsCrossChecked = true, meteringFailureDoesNotRemoveSafetyLimits = true,
    authorizationFailsOpenToExtensionDefault = false, extensionParticipatesInSharedDatabaseTransaction = false,
    removingPackageErasesInFlightWorkflowEvidence = false, extensionPromotesKnowledgeSilently = false,
    extensionsCreateGlobalMemoryOrStoreCredentials = false, uiExtensionsOverwriteSecurityChrome = false,
    mcpDiscoveryRegistersUnrestrictedTools = false, failingDestinationConsumesOtherTenantBudget = false,
    directStorageCredentialsPermitted = false, requestsToInternalEndpointsPermitted = false,
    recoveryBlindlyRestartsNonIdempotentWork = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      runtimePrinciples, hostResponsibilities, hostBoundaries, hostTypes, runtimeAdmissionChecks,
      invocationContextFields, extensionPointContractFields, idempotencyScopeElements, apiExtensionPointValidations,
      eventExtensionPointValidations, workflowExtensionPointElements, agentToolContractFields,
      agentExtensionInheritedRequirements, knowledgeExtensionPointContracts, memoryExtensionPointDeclarations,
      uiExtensionPointControls, mcpRuntimeMediationItems, connectorRuntimeCapabilities, resultValidationChecks,
      failureClassifications, healthEvaluationFactors, recoveryRestorationElements, recoveryExerciseTypes,
      observabilityTelemetryFields, usageMeteringDimensions, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      hostsExecuteOnlyVerifiedActiveDigests, everyInvocationBindsInstallationTenantGrantPurpose,
      extensionPointsOwnedContractsNotHooks, providersAuthoritativeForDomainAccess, sensitiveInterfacesHostMediated,
      executionCancelableResourceBounded, extensionFailureOutsideCoreTransactionsByDefault,
      asyncPreservesRevalidatesTenantScope, resultsUntrustedUntilValidated, hostsEmitTenantSafeEvidence,
      admissionFailureProducesStableEvidence, extensionCannotModifyTrustedFields,
      longRunningWorkCannotUseOldGrantIndefinitely, toolInvocationsValidatedByHost,
      packageAgentUpdateCoordinatedVersioned, inboundPayloadTenantClaimsCrossChecked,
      meteringFailureDoesNotRemoveSafetyLimits, authorizationFailsOpenToExtensionDefault,
      extensionParticipatesInSharedDatabaseTransaction, removingPackageErasesInFlightWorkflowEvidence,
      extensionPromotesKnowledgeSilently, extensionsCreateGlobalMemoryOrStoreCredentials,
      uiExtensionsOverwriteSecurityChrome, mcpDiscoveryRegistersUnrestrictedTools,
      failingDestinationConsumesOtherTenantBudget, directStorageCredentialsPermitted,
      requestsToInternalEndpointsPermitted, recoveryBlindlyRestartsNonIdempotentWork
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
