import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { ResourceGovernanceMeteringBillingProfile } from '../contracts/resource-governance-metering-billing-profile.js';
import * as constants from '../resource-governance-metering-billing-constants.js';

const METADATA = Object.freeze({
  governancePrinciples: constants.GOVERNANCE_PRINCIPLES, responsibilityCapabilities: constants.RESPONSIBILITY_CAPABILITIES,
  governedResourceFamilies: constants.GOVERNED_RESOURCE_FAMILIES, resourceScopeFields: constants.RESOURCE_SCOPE_FIELDS,
  quotaFields: constants.QUOTA_FIELDS, limitTypes: constants.LIMIT_TYPES, quotaHierarchyLevels: constants.QUOTA_HIERARCHY_LEVELS,
  admissionControlFactors: constants.ADMISSION_CONTROL_FACTORS, fairSchedulingMechanisms: constants.FAIR_SCHEDULING_MECHANISMS,
  noisyNeighborProtectionTargets: constants.NOISY_NEIGHBOR_PROTECTION_TARGETS, workloadClasses: constants.WORKLOAD_CLASSES,
  gracefulDegradationActions: constants.GRACEFUL_DEGRADATION_ACTIONS, capacityReservationFields: constants.CAPACITY_RESERVATION_FIELDS,
  dedicatedResourceRequirements: constants.DEDICATED_RESOURCE_REQUIREMENTS, usageRecordFields: constants.USAGE_RECORD_FIELDS,
  measurementSemanticsFields: constants.MEASUREMENT_SEMANTICS_FIELDS, collectionArchitectureSteps: constants.COLLECTION_ARCHITECTURE_STEPS,
  usageCorrectionFields: constants.USAGE_CORRECTION_FIELDS, tenantUsageViewItems: constants.TENANT_USAGE_VIEW_ITEMS,
  usageNotificationFields: constants.USAGE_NOTIFICATION_FIELDS, aiAgentBudgetAreas: constants.AI_AGENT_BUDGET_AREAS,
  workflowResourceControls: constants.WORKFLOW_RESOURCE_CONTROLS, integrationResourceControls: constants.INTEGRATION_RESOURCE_CONTROLS,
  exportMigrationGovernanceDeclarations: constants.EXPORT_MIGRATION_GOVERNANCE_DECLARATIONS,
  capacityPlanningInputs: constants.CAPACITY_PLANNING_INPUTS, resourceAnomalyIndicators: constants.RESOURCE_ANOMALY_INDICATORS,
  governanceEvidenceItems: constants.GOVERNANCE_EVIDENCE_ITEMS, governanceReconciliationComparisons: constants.GOVERNANCE_RECONCILIATION_COMPARISONS,
  governanceFailureBehaviors: constants.GOVERNANCE_FAILURE_BEHAVIORS, governanceTestingAreas: constants.GOVERNANCE_TESTING_AREAS,
  architecturalRules: constants.RESOURCE_GOVERNANCE_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  sharedCapacityGovernedByTenantScope: 'ARCH-018-08 requires shared capacity to be governed explicitly by tenant scope.',
  oneTenantCannotExhaustAnothers: 'ARCH-018-08 requires that one tenant must not exhaust resources required by another.',
  commercialConcernsDistinctFromAuthorization: 'ARCH-018-08 requires entitlement, authorization, quota, metering, rating, and invoicing to remain distinct.',
  usageAttributableReproducibleReconcilable: 'ARCH-018-08 requires usage to be attributable, reproducible, and reconcilable.',
  limitsHaveStableDocumentedFailureBehavior: 'ARCH-018-08 requires limits to have stable, documented failure behavior.',
  safetyOperationsHaveProtectedCapacity: 'ARCH-018-08 requires safety and critical operations to be able to have protected capacity.',
  controlsApplyToSyncAndAsyncWork: 'ARCH-018-08 requires resource controls to apply to synchronous and asynchronous work.',
  dedicatedCapacityMeasurableAndGoverned: 'ARCH-018-08 requires dedicated capacity to remain measurable and governed.',
  tenantUsageDataProtected: 'ARCH-018-08 requires tenant usage data to be treated as protected tenant information.',
  commercialStateChangesOnlyThroughEntitlementOrLifecycle: 'ARCH-018-08 requires commercial state to change runtime access only through an approved entitlement or lifecycle decision.',
  adjustmentsPreserveHistory: 'ARCH-018-08 requires adjustments to preserve history rather than rewriting source usage.',
  usageRecordsImmutable: 'ARCH-018-08 requires usage records to be immutable, with corrections using reversal or adjustment records.',
  meterSemanticsVersionedOnChange: 'ARCH-018-08 requires changing meter semantics to create a new version and preserve comparability rules.',
  closedInvoicesAdjustedThroughGovernedProcess: 'ARCH-018-08 requires closed invoices to be adjusted through governed credit or debit processes rather than editing history.',
  reconciliationRequiredAcrossBoundaries: 'ARCH-018-08 requires reconciliation across provider, meter, quota, rating, and billing boundaries.'
});

const REQUIRED_FALSE = Object.freeze({
  tenantLimitOverridesMandatorySafetyControl: 'ARCH-018-08 prohibits a tenant limit from overriding a stricter mandatory safety control.',
  quotasStoredOnlyAtEdgeGateway: 'ARCH-018-08 prohibits quotas from being stored only in edge gateways.',
  tenantRelabelsWorkAsCriticalWithoutEntitlement: 'ARCH-018-08 prohibits a tenant from relabeling ordinary work as critical without an approved entitlement and provider policy.',
  degradationSubstitutesAnotherTenantsResult: 'ARCH-018-08 prohibits degradation from substituting another tenant’s cached result or weakening authorization.',
  retriesCreateDuplicateChargeableUsage: 'ARCH-018-08 prohibits retries from creating duplicate chargeable usage unless explicitly separately metered.',
  runtimeAsksIfChargeWasPaid: 'ARCH-018-08 prohibits runtime services from calculating access by asking whether a charge was paid.',
  agentBypassesBudgetViaChildrenOrRetries: 'ARCH-018-08 prohibits an agent from bypassing a tenant budget by spawning children, retrying under new identifiers, or switching tools.',
  failingConnectionConsumesSharedRetryCapacity: 'ARCH-018-08 prohibits one tenant’s failing provider connection from consuming the shared retry capacity of other tenants.',
  exitRightsDeniedForExhaustedInteractiveQuota: 'ARCH-018-08 prohibits denying commercial or tenant exit rights solely because ordinary interactive quota is exhausted.',
  anomalyDetectionExposesTenantToOthers: 'ARCH-018-08 prohibits anomaly detection from automatically exposing a tenant’s detailed behavior to other tenants.',
  estimatedDataChargedAsConfirmedUsage: 'ARCH-018-08 prohibits charging estimated data as confirmed usage without governed policy.'
});

export class ResourceGovernanceMeteringBillingDescriptor {
  governancePrinciples() { return values(METADATA.governancePrinciples); } responsibilityCapabilities() { return values(METADATA.responsibilityCapabilities); }
  governedResourceFamilies() { return values(METADATA.governedResourceFamilies); } resourceScopeFields() { return values(METADATA.resourceScopeFields); }
  quotaFields() { return values(METADATA.quotaFields); } limitTypes() { return values(METADATA.limitTypes); }
  quotaHierarchyLevels() { return values(METADATA.quotaHierarchyLevels); } admissionControlFactors() { return values(METADATA.admissionControlFactors); }
  fairSchedulingMechanisms() { return values(METADATA.fairSchedulingMechanisms); } noisyNeighborProtectionTargets() { return values(METADATA.noisyNeighborProtectionTargets); }
  workloadClasses() { return values(METADATA.workloadClasses); } gracefulDegradationActions() { return values(METADATA.gracefulDegradationActions); }
  capacityReservationFields() { return values(METADATA.capacityReservationFields); } dedicatedResourceRequirements() { return values(METADATA.dedicatedResourceRequirements); }
  usageRecordFields() { return values(METADATA.usageRecordFields); } measurementSemanticsFields() { return values(METADATA.measurementSemanticsFields); }
  collectionArchitectureSteps() { return values(METADATA.collectionArchitectureSteps); } usageCorrectionFields() { return values(METADATA.usageCorrectionFields); }
  tenantUsageViewItems() { return values(METADATA.tenantUsageViewItems); } usageNotificationFields() { return values(METADATA.usageNotificationFields); }
  aiAgentBudgetAreas() { return values(METADATA.aiAgentBudgetAreas); } workflowResourceControls() { return values(METADATA.workflowResourceControls); }
  integrationResourceControls() { return values(METADATA.integrationResourceControls); } exportMigrationGovernanceDeclarations() { return values(METADATA.exportMigrationGovernanceDeclarations); }
  capacityPlanningInputs() { return values(METADATA.capacityPlanningInputs); } resourceAnomalyIndicators() { return values(METADATA.resourceAnomalyIndicators); }
  governanceEvidenceItems() { return values(METADATA.governanceEvidenceItems); } governanceReconciliationComparisons() { return values(METADATA.governanceReconciliationComparisons); }
  governanceFailureBehaviors() { return values(METADATA.governanceFailureBehaviors); } governanceTestingAreas() { return values(METADATA.governanceTestingAreas); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ResourceGovernanceMeteringBillingProfile ? input : new ResourceGovernanceMeteringBillingProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Resource governance, metering, and billing profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Resource Governance, Metering, and Billing must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.RESOURCE_GOVERNANCE_METERING_BILLING_ERROR_CODE, 'Resource Governance, Metering, and Billing violates ARCH-018-08.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
