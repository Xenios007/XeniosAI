import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { TenantLifecycleProvisioningProfile } from '../contracts/tenant-lifecycle-provisioning-profile.js';
import * as constants from '../tenant-lifecycle-provisioning-constants.js';

const METADATA = Object.freeze({
  lifecyclePrinciples: constants.TENANT_LIFECYCLE_PRINCIPLES, lifecycleStates: constants.TENANT_LIFECYCLE_STATES,
  transitionContractFields: constants.TRANSITION_CONTRACT_FIELDS, requestInputs: constants.TENANT_REQUEST_INPUTS,
  assessmentAreas: constants.TENANT_ASSESSMENT_AREAS, approvalElements: constants.TENANT_APPROVAL_ELEMENTS,
  provisioningSteps: constants.PROVISIONING_COORDINATOR_STEPS, provisioningDomains: constants.PROVISIONING_DOMAINS,
  manifestProperties: constants.DESIRED_STATE_MANIFEST_PROPERTIES, concurrencyDistinctions: constants.IDEMPOTENCY_CONCURRENCY_DISTINCTIONS,
  failureResponses: constants.FAILURE_COMPENSATION_RESPONSES, readinessChecks: constants.VALIDATION_READINESS_CHECKS,
  activationPreconditions: constants.ACTIVATION_PRECONDITIONS, activeStateChanges: constants.ACTIVE_STATE_CHANGES,
  restrictionExamples: constants.RESTRICTION_EXAMPLES, suspensionExceptions: constants.SUSPENSION_EXCEPTIONS,
  reactivationChecks: constants.REACTIVATION_CHECKS, migrationSteps: constants.TENANT_MIGRATION_STEPS,
  offboardingPlanElements: constants.OFFBOARDING_PLAN_ELEMENTS, exportRequirements: constants.DATA_EXPORT_REQUIREMENTS,
  retentionClassifications: constants.RETENTION_CLASSIFICATIONS, retirementConditions: constants.RETIREMENT_CONDITIONS,
  reconciliationFindings: constants.LIFECYCLE_RECONCILIATION_FINDINGS, lifecycleEvents: constants.TENANT_LIFECYCLE_EVENTS,
  lifecycleRoles: constants.TENANT_LIFECYCLE_ROLES, evidenceQuestions: constants.LIFECYCLE_EVIDENCE_QUESTIONS,
  serviceObjectives: constants.LIFECYCLE_SERVICE_OBJECTIVES, architecturalRules: constants.TENANT_LIFECYCLE_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  authoritativeEffectiveDatedState: 'ARCH-018-03 requires tenant state to be authoritative, explicit, and effective-dated.',
  transitionsUseCommands: 'ARCH-018-03 requires state transitions to be commands, not direct field edits.',
  transitionsHaveEvidenceAndOwner: 'ARCH-018-03 requires every transition to have authorization, preconditions, evidence, and an accountable owner.',
  provisioningIdempotentResumable: 'ARCH-018-03 requires provisioning to be idempotent, resumable, and reconcilable.',
  activationRequiresValidation: 'ARCH-018-03 requires activation to follow validation.',
  partialFailureVisibleRecoverable: 'ARCH-018-03 requires partial failure to be visible and recoverable.',
  suspensionPolicyDrivenPreservesObligations: 'ARCH-018-03 requires suspension to be policy driven and preserve required access and obligations.',
  migrationPreservesIdentity: 'ARCH-018-03 requires migration to preserve tenant identity and business continuity.',
  offboardingCoversDerivedResources: 'ARCH-018-03 requires offboarding to cover authoritative and derived resources.',
  retentionCanOutliveAccess: 'ARCH-018-03 requires legal hold and retention to be able to outlive service access.',
  providersOwnResourceLifecycle: 'ARCH-018-03 requires each provider to own its resource lifecycle and report status to the lifecycle coordinator.',
  conflictingStaleCommandsRejected: 'ARCH-018-03 requires conflicting or stale transition commands to be rejected.',
  repeatedCommandsIdempotent: 'ARCH-018-03 requires repeating a completed command to return the established outcome.',
  manifestVersionedAndComparable: 'ARCH-018-03 requires the desired-state manifest to be versioned and comparable with provider-reported state.',
  reconciliationDrivesRemediation: 'ARCH-018-03 requires reconciliation findings to create governed issues and remediation work.'
});

const REQUIRED_FALSE = Object.freeze({
  retiredIdentifiersReused: 'ARCH-018-03 prohibits retired tenant identifiers from being reused.',
  resourceCreationAloneActivates: 'ARCH-018-03 prohibits resource creation alone from being sufficient for activation.',
  reactivationUnconditional: 'ARCH-018-03 prohibits reactivation from being an unconditional reversal.',
  invoiceStatusModifiesAuthorization: 'ARCH-018-03 prohibits invoice status alone from modifying authorization.',
  compensationGuaranteesExactRestore: 'ARCH-018-03 prohibits assuming compensation restores an exact prior state.',
  migrationChangesTenantIdentifier: 'ARCH-018-03 prohibits migration from changing the tenant identifier or silently altering contractual obligations.',
  exportIncludesPlatformSecrets: 'ARCH-018-03 prohibits export from including platform secrets, another tenant’s data, restricted third-party content, or internal security information.',
  manualDriftTreatedAsExpected: 'ARCH-018-03 prohibits manual resources not represented in desired state from being treated as expected.',
  providerWorkRequiresDistributedLock: 'ARCH-018-03 prohibits long-running provider work from requiring a distributed lock.'
});

export class TenantLifecycleProvisioningDescriptor {
  lifecyclePrinciples() { return values(METADATA.lifecyclePrinciples); } lifecycleStates() { return values(METADATA.lifecycleStates); }
  transitionContractFields() { return values(METADATA.transitionContractFields); } requestInputs() { return values(METADATA.requestInputs); }
  assessmentAreas() { return values(METADATA.assessmentAreas); } approvalElements() { return values(METADATA.approvalElements); }
  provisioningSteps() { return values(METADATA.provisioningSteps); } provisioningDomains() { return values(METADATA.provisioningDomains); }
  manifestProperties() { return values(METADATA.manifestProperties); } concurrencyDistinctions() { return values(METADATA.concurrencyDistinctions); }
  failureResponses() { return values(METADATA.failureResponses); } readinessChecks() { return values(METADATA.readinessChecks); }
  activationPreconditions() { return values(METADATA.activationPreconditions); } activeStateChanges() { return values(METADATA.activeStateChanges); }
  restrictionExamples() { return values(METADATA.restrictionExamples); } suspensionExceptions() { return values(METADATA.suspensionExceptions); }
  reactivationChecks() { return values(METADATA.reactivationChecks); } migrationSteps() { return values(METADATA.migrationSteps); }
  offboardingPlanElements() { return values(METADATA.offboardingPlanElements); } exportRequirements() { return values(METADATA.exportRequirements); }
  retentionClassifications() { return values(METADATA.retentionClassifications); } retirementConditions() { return values(METADATA.retirementConditions); }
  reconciliationFindings() { return values(METADATA.reconciliationFindings); } lifecycleEvents() { return values(METADATA.lifecycleEvents); }
  lifecycleRoles() { return values(METADATA.lifecycleRoles); } evidenceQuestions() { return values(METADATA.evidenceQuestions); }
  serviceObjectives() { return values(METADATA.serviceObjectives); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof TenantLifecycleProvisioningProfile ? input : new TenantLifecycleProvisioningProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Tenant lifecycle and provisioning profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Tenant Lifecycle and Provisioning must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.TENANT_LIFECYCLE_PROVISIONING_ERROR_CODE, 'Tenant Lifecycle and Provisioning violates ARCH-018-03.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
