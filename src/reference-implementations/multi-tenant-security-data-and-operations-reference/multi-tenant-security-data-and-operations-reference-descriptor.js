import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { MultiTenantSecurityDataAndOperationsReferenceProfile } from '../contracts/multi-tenant-security-data-and-operations-reference-profile.js';
import * as constants from '../multi-tenant-security-data-and-operations-reference-constants.js';

const METADATA = Object.freeze({
  trustedTenantContextFields: constants.TRUSTED_TENANT_CONTEXT_FIELDS, testIdentityRoles: constants.TEST_IDENTITY_ROLES, dataIsolationPaths: constants.DATA_ISOLATION_PATHS, dataLifecycleFixtures: constants.DATA_LIFECYCLE_FIXTURES,
  securityControls: constants.SECURITY_CONTROLS, telemetryCorrelationSignals: constants.TELEMETRY_CORRELATION_SIGNALS, capacityAndFairnessControls: constants.CAPACITY_AND_FAIRNESS_CONTROLS, incidentScenarios: constants.INCIDENT_SCENARIOS,
  incidentResponseSteps: constants.INCIDENT_RESPONSE_STEPS, backupAndRecoveryExercises: constants.BACKUP_AND_RECOVERY_EXERCISES, continuityElements: constants.CONTINUITY_ELEMENTS, evidenceFields: constants.EVIDENCE_FIELDS,
  referenceAcceptanceCriteria: constants.MULTI_TENANT_SECURITY_REFERENCE_ACCEPTANCE_CRITERIA, architecturalRules: constants.MULTI_TENANT_SECURITY_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  missingConflictingOrAmbiguousScopeFailsClosed: 'ARCH-020-08 requires missing, conflicting, or ambiguous scope to fail closed.', providerValidationComplementsGatewayControls: 'ARCH-020-08 requires provider validation to complement gateway controls.',
  sensitiveTelemetryIsMinimizedRedactedAndAccessControlled: 'ARCH-020-08 requires sensitive telemetry to be minimized, redacted, and access controlled.', noisyNeighborTestsPreserveOtherTenantService: 'ARCH-020-08 requires noisy-neighbor tests to preserve other tenant service.',
  tenantRestoreAndErasureAreEvidenced: 'ARCH-020-08 requires tenant restore and erasure to be evidenced.', supportAccessIsTimeBoundedAndAttributable: 'ARCH-020-08 requires support access to be time bounded and attributable.',
  recoveryAndDeletionAreTenantAwareLifecycleOperations: 'ARCH-020-08 requires recovery and deletion to be tenant-aware lifecycle operations.'
});

const REQUIRED_FALSE = Object.freeze({
  workflowCompletionIsAssumedToEqualDeletion: 'ARCH-020-08 prohibits assuming workflow completion equals deletion.', tenantRestoreCanOverwriteAnotherTenant: 'ARCH-020-08 prohibits tenant restore from overwriting another tenant.',
  restoreCanReintroduceErasedDataWithoutPolicyHandling: 'ARCH-020-08 prohibits restore from reintroducing erased data without policy handling.', supportAccessIsUnattributedOrUnbounded: 'ARCH-020-08 prohibits unattributed or unbounded support access.',
  telemetryContainsSecretsOrUnnecessarySensitiveContent: 'ARCH-020-08 prohibits telemetry from containing secrets or unnecessary sensitive content.'
});

export class MultiTenantSecurityDataAndOperationsReferenceDescriptor {
  trustedTenantContextFields() { return values(METADATA.trustedTenantContextFields); } testIdentityRoles() { return values(METADATA.testIdentityRoles); } dataIsolationPaths() { return values(METADATA.dataIsolationPaths); } dataLifecycleFixtures() { return values(METADATA.dataLifecycleFixtures); }
  securityControls() { return values(METADATA.securityControls); } telemetryCorrelationSignals() { return values(METADATA.telemetryCorrelationSignals); } capacityAndFairnessControls() { return values(METADATA.capacityAndFairnessControls); } incidentScenarios() { return values(METADATA.incidentScenarios); }
  incidentResponseSteps() { return values(METADATA.incidentResponseSteps); } backupAndRecoveryExercises() { return values(METADATA.backupAndRecoveryExercises); } continuityElements() { return values(METADATA.continuityElements); } evidenceFields() { return values(METADATA.evidenceFields); }
  referenceAcceptanceCriteria() { return values(METADATA.referenceAcceptanceCriteria); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof MultiTenantSecurityDataAndOperationsReferenceProfile ? input : new MultiTenantSecurityDataAndOperationsReferenceProfile(input);
    const errors = [];
    if (!profile.referenceName) errors.push('Multi-Tenant Security, Data, and Operations Reference profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Multi-Tenant Security, Data, and Operations Reference must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.MULTI_TENANT_SECURITY_DATA_AND_OPERATIONS_REFERENCE_ERROR_CODE, 'Multi-Tenant Security, Data, and Operations Reference violates ARCH-020-08.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
