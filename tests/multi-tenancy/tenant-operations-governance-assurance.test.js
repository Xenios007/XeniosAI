import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { INCIDENT_TENANT_IMPACT_CLASSIFICATIONS, OPERATING_MODEL_ROLES, TENANT_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, TENANT_POLICY_HIERARCHY_LEVELS, TenantOperationsGovernanceAssuranceDescriptor, TenantOperationsGovernanceAssuranceProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['tenantOperationsPrinciples', 'operatingModelRoles', 'operationalScopeClassifications', 'serviceInventoryFields', 'opsObservabilityCapabilities', 'tenantHealthFactors', 'tenantFacingStatusItems', 'alertingPreventions', 'operationalAccessRequirements', 'opsSupportSessionFields', 'emergencyOperationsRequirements', 'incidentTenantImpactClassifications', 'incidentResponseSteps', 'crossTenantIncidentResponseActions', 'problemManagementPatterns', 'changeAssessmentFactors', 'releaseCohorts', 'capacityOperationsMonitoringAreas', 'continuityPlanElements', 'tenantRecoveryValidationAreas', 'recoveryExerciseTypes', 'governanceDecisionForums', 'tenantPolicyHierarchyLevels', 'tenantControlObjectives', 'controlOwnershipFields', 'opsAssuranceMethods', 'opsIsolationTestingAreas', 'opsEvidenceElements', 'tenantFacingAssuranceItems', 'opsExceptionFields', 'issueRemediationFields', 'tenantOperationsGovernanceMetrics', 'automationGovernanceFields', 'runbookCoverageAreas', 'architecturalRules'];

test('ARCH-018-09 exposes operating model, scope, and inventory metadata', () => { const descriptor = new TenantOperationsGovernanceAssuranceDescriptor(); assert.ok(descriptor.operatingModelRoles().includes(OPERATING_MODEL_ROLES.INTERNAL_AUDIT)); assert.ok(descriptor.operationalScopeClassifications().includes('privileged-cross-tenant')); assert.ok(descriptor.serviceInventoryFields().includes('backup-and-recovery-unit')); assert.ok(descriptor.tenantHealthFactors().includes('data-consistency-and-reconciliation')); });

test('ARCH-018-09 exposes incident, change, and recovery metadata', () => { const descriptor = new TenantOperationsGovernanceAssuranceDescriptor(); assert.ok(descriptor.incidentTenantImpactClassifications().includes(INCIDENT_TENANT_IMPACT_CLASSIFICATIONS.COHORT)); assert.ok(descriptor.crossTenantIncidentResponseActions().includes('retest-the-complete-control-path')); assert.ok(descriptor.changeAssessmentFactors().includes('rollback-and-tenant-specific-recovery')); assert.ok(descriptor.recoveryExerciseTypes().includes('region-evacuation')); });

test('ARCH-018-09 exposes governance, assurance, and exception metadata', () => { const descriptor = new TenantOperationsGovernanceAssuranceDescriptor(); assert.ok(descriptor.tenantPolicyHierarchyLevels().includes(TENANT_POLICY_HIERARCHY_LEVELS.LAW)); assert.ok(descriptor.opsAssuranceMethods().includes('multi-tenant-integration-tests')); assert.ok(descriptor.opsIsolationTestingAreas().includes('noisy-neighbor-resource-exhaustion')); assert.ok(descriptor.opsExceptionFields().includes('remediation-plan-and-milestones')); });

test('ARCH-018-09 validates profiles and rejects operations shortcuts', () => {
  const descriptor = new TenantOperationsGovernanceAssuranceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ operatorsHaveAccountableDutiesNotAmbientAuthority: false, incidentsIdentifyAndProtectTenants: false, sharedPasswordsOrInvisibleImpersonationUsed: true, statusViewsRevealOtherTenantInfo: true, communicationsDiscloseTenantToAnother: true, exceptionsPermanentByDefault: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /not ambient tenant authority/);
  assert.match(validation.errors.join('\n'), /identify affected tenants/);
  assert.match(validation.errors.join('\n'), /shared passwords, invisible impersonation/);
  assert.match(validation.errors.join('\n'), /revealing another tenant/);
  assert.match(validation.errors.join('\n'), /disclosing one affected tenant/);
  assert.match(validation.errors.join('\n'), /permanent by default/);
});

test('ARCH-018-09 detects incomplete tenant operations, governance, and assurance metadata', () => { class IncompleteDescriptor extends TenantOperationsGovernanceAssuranceDescriptor { operatingModelRoles() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === TENANT_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE); });

test('ARCH-018-09 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('TenantOperationsGovernanceAssuranceDescriptor');
  assert.ok(descriptor instanceof TenantOperationsGovernanceAssuranceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.operatingModelRoles.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new TenantOperationsGovernanceAssuranceProfile({ profileName: 'Tenant Operations, Governance, and Assurance', ...metadata }); }
