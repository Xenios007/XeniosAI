export class ResourceGovernanceMeteringBillingProfile {
  constructor({
    profileName,
    governancePrinciples = [], responsibilityCapabilities = [], governedResourceFamilies = [], resourceScopeFields = [],
    quotaFields = [], limitTypes = [], quotaHierarchyLevels = [], admissionControlFactors = [], fairSchedulingMechanisms = [],
    noisyNeighborProtectionTargets = [], workloadClasses = [], gracefulDegradationActions = [], capacityReservationFields = [],
    dedicatedResourceRequirements = [], usageRecordFields = [], measurementSemanticsFields = [], collectionArchitectureSteps = [],
    usageCorrectionFields = [], tenantUsageViewItems = [], usageNotificationFields = [], aiAgentBudgetAreas = [],
    workflowResourceControls = [], integrationResourceControls = [], exportMigrationGovernanceDeclarations = [],
    capacityPlanningInputs = [], resourceAnomalyIndicators = [], governanceEvidenceItems = [], governanceReconciliationComparisons = [],
    governanceFailureBehaviors = [], governanceTestingAreas = [], architecturalRules = [],
    sharedCapacityGovernedByTenantScope = true, oneTenantCannotExhaustAnothers = true, commercialConcernsDistinctFromAuthorization = true,
    usageAttributableReproducibleReconcilable = true, limitsHaveStableDocumentedFailureBehavior = true,
    safetyOperationsHaveProtectedCapacity = true, controlsApplyToSyncAndAsyncWork = true, dedicatedCapacityMeasurableAndGoverned = true,
    tenantUsageDataProtected = true, commercialStateChangesOnlyThroughEntitlementOrLifecycle = true, adjustmentsPreserveHistory = true,
    usageRecordsImmutable = true, meterSemanticsVersionedOnChange = true, closedInvoicesAdjustedThroughGovernedProcess = true,
    reconciliationRequiredAcrossBoundaries = true,
    tenantLimitOverridesMandatorySafetyControl = false, quotasStoredOnlyAtEdgeGateway = false,
    tenantRelabelsWorkAsCriticalWithoutEntitlement = false, degradationSubstitutesAnotherTenantsResult = false,
    retriesCreateDuplicateChargeableUsage = false, runtimeAsksIfChargeWasPaid = false,
    agentBypassesBudgetViaChildrenOrRetries = false, failingConnectionConsumesSharedRetryCapacity = false,
    exitRightsDeniedForExhaustedInteractiveQuota = false, anomalyDetectionExposesTenantToOthers = false,
    estimatedDataChargedAsConfirmedUsage = false
  }) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({
      governancePrinciples, responsibilityCapabilities, governedResourceFamilies, resourceScopeFields, quotaFields, limitTypes,
      quotaHierarchyLevels, admissionControlFactors, fairSchedulingMechanisms, noisyNeighborProtectionTargets, workloadClasses,
      gracefulDegradationActions, capacityReservationFields, dedicatedResourceRequirements, usageRecordFields,
      measurementSemanticsFields, collectionArchitectureSteps, usageCorrectionFields, tenantUsageViewItems,
      usageNotificationFields, aiAgentBudgetAreas, workflowResourceControls, integrationResourceControls,
      exportMigrationGovernanceDeclarations, capacityPlanningInputs, resourceAnomalyIndicators, governanceEvidenceItems,
      governanceReconciliationComparisons, governanceFailureBehaviors, governanceTestingAreas, architecturalRules
    })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({
      sharedCapacityGovernedByTenantScope, oneTenantCannotExhaustAnothers, commercialConcernsDistinctFromAuthorization,
      usageAttributableReproducibleReconcilable, limitsHaveStableDocumentedFailureBehavior, safetyOperationsHaveProtectedCapacity,
      controlsApplyToSyncAndAsyncWork, dedicatedCapacityMeasurableAndGoverned, tenantUsageDataProtected,
      commercialStateChangesOnlyThroughEntitlementOrLifecycle, adjustmentsPreserveHistory, usageRecordsImmutable,
      meterSemanticsVersionedOnChange, closedInvoicesAdjustedThroughGovernedProcess, reconciliationRequiredAcrossBoundaries,
      tenantLimitOverridesMandatorySafetyControl, quotasStoredOnlyAtEdgeGateway, tenantRelabelsWorkAsCriticalWithoutEntitlement,
      degradationSubstitutesAnotherTenantsResult, retriesCreateDuplicateChargeableUsage, runtimeAsksIfChargeWasPaid,
      agentBypassesBudgetViaChildrenOrRetries, failingConnectionConsumesSharedRetryCapacity,
      exitRightsDeniedForExhaustedInteractiveQuota, anomalyDetectionExposesTenantToOthers, estimatedDataChargedAsConfirmedUsage
    })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
