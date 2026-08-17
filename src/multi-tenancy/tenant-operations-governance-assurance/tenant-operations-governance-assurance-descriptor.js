import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { TenantOperationsGovernanceAssuranceProfile } from '../contracts/tenant-operations-governance-assurance-profile.js';
import * as constants from '../tenant-operations-governance-assurance-constants.js';

const METADATA = Object.freeze({
  tenantOperationsPrinciples: constants.TENANT_OPERATIONS_PRINCIPLES, operatingModelRoles: constants.OPERATING_MODEL_ROLES,
  operationalScopeClassifications: constants.OPERATIONAL_SCOPE_CLASSIFICATIONS, serviceInventoryFields: constants.SERVICE_INVENTORY_FIELDS,
  opsObservabilityCapabilities: constants.OPS_OBSERVABILITY_CAPABILITIES, tenantHealthFactors: constants.TENANT_HEALTH_FACTORS,
  tenantFacingStatusItems: constants.TENANT_FACING_STATUS_ITEMS, alertingPreventions: constants.ALERTING_PREVENTIONS,
  operationalAccessRequirements: constants.OPERATIONAL_ACCESS_REQUIREMENTS, opsSupportSessionFields: constants.OPS_SUPPORT_SESSION_FIELDS,
  emergencyOperationsRequirements: constants.EMERGENCY_OPERATIONS_REQUIREMENTS,
  incidentTenantImpactClassifications: constants.INCIDENT_TENANT_IMPACT_CLASSIFICATIONS, incidentResponseSteps: constants.INCIDENT_RESPONSE_STEPS,
  crossTenantIncidentResponseActions: constants.CROSS_TENANT_INCIDENT_RESPONSE_ACTIONS, problemManagementPatterns: constants.PROBLEM_MANAGEMENT_PATTERNS,
  changeAssessmentFactors: constants.CHANGE_ASSESSMENT_FACTORS, releaseCohorts: constants.RELEASE_COHORTS,
  capacityOperationsMonitoringAreas: constants.CAPACITY_OPERATIONS_MONITORING_AREAS, continuityPlanElements: constants.CONTINUITY_PLAN_ELEMENTS,
  tenantRecoveryValidationAreas: constants.TENANT_RECOVERY_VALIDATION_AREAS, recoveryExerciseTypes: constants.RECOVERY_EXERCISE_TYPES,
  governanceDecisionForums: constants.GOVERNANCE_DECISION_FORUMS, tenantPolicyHierarchyLevels: constants.TENANT_POLICY_HIERARCHY_LEVELS,
  tenantControlObjectives: constants.TENANT_CONTROL_OBJECTIVES, controlOwnershipFields: constants.CONTROL_OWNERSHIP_FIELDS,
  opsAssuranceMethods: constants.OPS_ASSURANCE_METHODS, opsIsolationTestingAreas: constants.OPS_ISOLATION_TESTING_AREAS,
  opsEvidenceElements: constants.OPS_EVIDENCE_ELEMENTS, tenantFacingAssuranceItems: constants.TENANT_FACING_ASSURANCE_ITEMS,
  opsExceptionFields: constants.OPS_EXCEPTION_FIELDS, issueRemediationFields: constants.ISSUE_REMEDIATION_FIELDS,
  tenantOperationsGovernanceMetrics: constants.TENANT_OPERATIONS_GOVERNANCE_METRICS, automationGovernanceFields: constants.AUTOMATION_GOVERNANCE_FIELDS,
  runbookCoverageAreas: constants.RUNBOOK_COVERAGE_AREAS, architecturalRules: constants.TENANT_OPERATIONS_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  operationalVisibilityTenantAwareAccessControlled: 'ARCH-018-09 requires operational visibility to be tenant aware and access controlled.',
  operatorsHaveAccountableDutiesNotAmbientAuthority: 'ARCH-018-09 requires platform operators to have accountable duties, not ambient tenant authority.',
  supportAccessExplicitBoundedEvidenced: 'ARCH-018-09 requires support access to be explicit, time bounded, purpose bound, and evidenced.',
  incidentsIdentifyAndProtectTenants: 'ARCH-018-09 requires incidents to identify affected tenants and protect unaffected tenants.',
  changesAssessMultiDimensionalImpact: 'ARCH-018-09 requires changes to assess tenant, tier, property, region, and isolation-profile impact.',
  recoveryPreservesOwnershipTimeIsolation: 'ARCH-018-09 requires recovery to preserve tenant ownership, business time, and isolation.',
  governanceDefinesDecisionRightsAndOwnership: 'ARCH-018-09 requires governance to define decision rights and control ownership.',
  assuranceTestsEffectivenessNotExistence: 'ARCH-018-09 requires assurance to test control effectiveness, not merely control existence.',
  exceptionsTemporaryMonitoredRemediated: 'ARCH-018-09 requires exceptions to be temporary, risk accepted, monitored, and remediated.',
  tenantFacingEvidenceProtectsOthers: 'ARCH-018-09 requires tenant-facing evidence to protect other tenants and platform security.',
  automationReversibleOrContainable: 'ARCH-018-09 requires operational automation to be reversible or safely containable.',
  inventoryReconcilesAuthoritativeSources: 'ARCH-018-09 requires the operational inventory to reconcile authoritative sources rather than become an uncontrolled duplicate.',
  unknownImpactTreatedConservatively: 'ARCH-018-09 requires unknown tenant impact to be treated conservatively until evidence narrows scope.',
  platformControlPlaneCriticalDependency: 'ARCH-018-09 requires the tenant control plane to be treated as a critical dependency.',
  lowerPolicyCannotOverrideHigherObligation: 'ARCH-018-09 requires policy conflicts to escalate rather than let a lower-level policy override a higher mandatory obligation.'
});

const REQUIRED_FALSE = Object.freeze({
  sharedPasswordsOrInvisibleImpersonationUsed: 'ARCH-018-09 prohibits shared passwords, invisible impersonation, and unbounded production queries.',
  emergencyAccessUsedToBypassOrdinaryApproval: 'ARCH-018-09 prohibits emergency operation from being used to bypass an inconvenient approval for ordinary work.',
  rolloutMixesTenantDataOrAuthorization: 'ARCH-018-09 prohibits a rollout from mixing tenant data or authorization state.',
  maintenanceRevealsTenantRosterInCommunications: 'ARCH-018-09 prohibits maintenance communications from revealing the tenant roster.',
  restoringOneTenantRegressesAnother: 'ARCH-018-09 prohibits restoring one tenant from regressing another tenant or reintroducing erased data without policy handling.',
  automationBroadensScopeOrErasesEvidence: 'ARCH-018-09 prohibits automation from broadening tenant scope or erasing evidence to simplify recovery.',
  exceptionsPermanentByDefault: 'ARCH-018-09 prohibits exceptions from being permanent by default or redefining the architecture standard.',
  statusViewsRevealOtherTenantInfo: 'ARCH-018-09 prohibits status views from revealing another tenant’s name, activity, topology, volume, or incident details.',
  communicationsDiscloseTenantToAnother: 'ARCH-018-09 prohibits communications from disclosing one affected tenant’s information to another.',
  repeatedExceptionsRenewedIndefinitely: 'ARCH-018-09 prohibits repeated exceptions or findings from being renewed indefinitely instead of triggering architectural review.'
});

export class TenantOperationsGovernanceAssuranceDescriptor {
  tenantOperationsPrinciples() { return values(METADATA.tenantOperationsPrinciples); } operatingModelRoles() { return values(METADATA.operatingModelRoles); }
  operationalScopeClassifications() { return values(METADATA.operationalScopeClassifications); } serviceInventoryFields() { return values(METADATA.serviceInventoryFields); }
  opsObservabilityCapabilities() { return values(METADATA.opsObservabilityCapabilities); } tenantHealthFactors() { return values(METADATA.tenantHealthFactors); }
  tenantFacingStatusItems() { return values(METADATA.tenantFacingStatusItems); } alertingPreventions() { return values(METADATA.alertingPreventions); }
  operationalAccessRequirements() { return values(METADATA.operationalAccessRequirements); } opsSupportSessionFields() { return values(METADATA.opsSupportSessionFields); }
  emergencyOperationsRequirements() { return values(METADATA.emergencyOperationsRequirements); }
  incidentTenantImpactClassifications() { return values(METADATA.incidentTenantImpactClassifications); } incidentResponseSteps() { return values(METADATA.incidentResponseSteps); }
  crossTenantIncidentResponseActions() { return values(METADATA.crossTenantIncidentResponseActions); } problemManagementPatterns() { return values(METADATA.problemManagementPatterns); }
  changeAssessmentFactors() { return values(METADATA.changeAssessmentFactors); } releaseCohorts() { return values(METADATA.releaseCohorts); }
  capacityOperationsMonitoringAreas() { return values(METADATA.capacityOperationsMonitoringAreas); } continuityPlanElements() { return values(METADATA.continuityPlanElements); }
  tenantRecoveryValidationAreas() { return values(METADATA.tenantRecoveryValidationAreas); } recoveryExerciseTypes() { return values(METADATA.recoveryExerciseTypes); }
  governanceDecisionForums() { return values(METADATA.governanceDecisionForums); } tenantPolicyHierarchyLevels() { return values(METADATA.tenantPolicyHierarchyLevels); }
  tenantControlObjectives() { return values(METADATA.tenantControlObjectives); } controlOwnershipFields() { return values(METADATA.controlOwnershipFields); }
  opsAssuranceMethods() { return values(METADATA.opsAssuranceMethods); } opsIsolationTestingAreas() { return values(METADATA.opsIsolationTestingAreas); }
  opsEvidenceElements() { return values(METADATA.opsEvidenceElements); } tenantFacingAssuranceItems() { return values(METADATA.tenantFacingAssuranceItems); }
  opsExceptionFields() { return values(METADATA.opsExceptionFields); } issueRemediationFields() { return values(METADATA.issueRemediationFields); }
  tenantOperationsGovernanceMetrics() { return values(METADATA.tenantOperationsGovernanceMetrics); } automationGovernanceFields() { return values(METADATA.automationGovernanceFields); }
  runbookCoverageAreas() { return values(METADATA.runbookCoverageAreas); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof TenantOperationsGovernanceAssuranceProfile ? input : new TenantOperationsGovernanceAssuranceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Tenant operations, governance, and assurance profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Tenant Operations, Governance, and Assurance must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.TENANT_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, 'Tenant Operations, Governance, and Assurance violates ARCH-018-09.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
