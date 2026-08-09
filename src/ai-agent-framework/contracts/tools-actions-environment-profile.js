export class ToolsActionsEnvironmentProfile {
  constructor({
    toolsName,
    gatewayCapabilities = [], registryFields = [], identityTypes = [], discoveryFactors = [],
    contractFields = [], categories = [], actionClasses = [], actionMetadataFields = [],
    preInvocationChecks = [], authorizationFactors = [], authorityLevels = [], approvalBindings = [],
    credentialScopeRequirements = [], inputValidationTypes = [], outputValidationTypes = [],
    resultSemantics = [], sideEffectTypes = [], sideEffectLedgerFields = [], idempotencyStrategyFields = [],
    reconciliationSources = [], compensationContractFields = [], invocationStates = [], errorCategories = [],
    environmentTypes = [], environmentIdentityFields = [], environmentIsolationControls = [],
    sandboxRequirements = [], filesystemBoundaryFields = [], networkBoundaryFields = [], dataToolControls = [],
    lifecycleStates = [], evaluationAreas = [], observabilitySignals = [], evidenceFields = [],
    operationalCapabilities = [], securityThreats = [], qualityAttributes = [], architecturalRules = [],
    architectureBoundaries = [], registeredVersionedTools = true, gatewayMediated = true,
    discoverySeparateFromAuthorization = true, materialAuthorityEvaluated = true, identityPreserved = true,
    structuralSemanticInputValidation = true, sideEffectsDeclared = true, actionRiskClassified = true,
    approvalsBoundToExactActions = true, credentialsOutsideModelContext = true, scopedShortLivedCredentials = true,
    environmentEligibilityEnforced = true, environmentIsolation = true, generatedCodeUntrusted = true,
    outputsValidated = true, toolOutputAsData = true, idempotencyForRetries = true,
    reconcileUncertainEffectsBeforeRetry = true, domainDefinedCompensation = true,
    governedServicesOverDirectDatabase = true, draftAuthorityNotSendAuthority = true,
    exactDestructiveTargets = true, composedToolBoundaries = true, boundedToolChains = true,
    attributableEvidence = true, lifecycleControls = true, providerNeutral = true,
    toolAvailabilityIsAuthority = false, bypassesGateway = false, modelReceivesCredentials = false,
    broadToolPermissionPreferred = false, approvalReinterpretedBroader = false, schemaValidityMeansSemanticValidity = false,
    networkSuccessMeansBusinessSuccess = false, repeatsUncertainMaterialAction = false,
    compensationGuaranteedReversal = false, productionFromHostname = false, unrestrictedDatabaseAccess = false,
    generatedUrlBypassesPolicy = false, draftImpliesSendAuthority = false, ambiguousDestructiveScope = false,
    delegateReceivesRawCredentials = false, deprecatedToolDefaultForNewUse = false,
    rawErrorsToUsersOrModels = false, selectsCredentialTechnology = false, selectsSandboxTechnology = false,
    selectsToolProtocolVendor = false
  }) {
    this.toolsName = toolsName;
    for (const [key, value] of Object.entries({
      gatewayCapabilities, registryFields, identityTypes, discoveryFactors, contractFields, categories,
      actionClasses, actionMetadataFields, preInvocationChecks, authorizationFactors, authorityLevels,
      approvalBindings, credentialScopeRequirements, inputValidationTypes, outputValidationTypes,
      resultSemantics, sideEffectTypes, sideEffectLedgerFields, idempotencyStrategyFields,
      reconciliationSources, compensationContractFields, invocationStates, errorCategories, environmentTypes,
      environmentIdentityFields, environmentIsolationControls, sandboxRequirements, filesystemBoundaryFields,
      networkBoundaryFields, dataToolControls, lifecycleStates, evaluationAreas, observabilitySignals,
      evidenceFields, operationalCapabilities, securityThreats, qualityAttributes, architecturalRules,
      architectureBoundaries
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      registeredVersionedTools, gatewayMediated, discoverySeparateFromAuthorization, materialAuthorityEvaluated,
      identityPreserved, structuralSemanticInputValidation, sideEffectsDeclared, actionRiskClassified,
      approvalsBoundToExactActions, credentialsOutsideModelContext, scopedShortLivedCredentials,
      environmentEligibilityEnforced, environmentIsolation, generatedCodeUntrusted, outputsValidated,
      toolOutputAsData, idempotencyForRetries, reconcileUncertainEffectsBeforeRetry, domainDefinedCompensation,
      governedServicesOverDirectDatabase, draftAuthorityNotSendAuthority, exactDestructiveTargets,
      composedToolBoundaries, boundedToolChains, attributableEvidence, lifecycleControls, providerNeutral,
      toolAvailabilityIsAuthority, bypassesGateway, modelReceivesCredentials, broadToolPermissionPreferred,
      approvalReinterpretedBroader, schemaValidityMeansSemanticValidity, networkSuccessMeansBusinessSuccess,
      repeatsUncertainMaterialAction, compensationGuaranteedReversal, productionFromHostname,
      unrestrictedDatabaseAccess, generatedUrlBypassesPolicy, draftImpliesSendAuthority, ambiguousDestructiveScope,
      delegateReceivesRawCredentials, deprecatedToolDefaultForNewUse, rawErrorsToUsersOrModels,
      selectsCredentialTechnology, selectsSandboxTechnology, selectsToolProtocolVendor
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
