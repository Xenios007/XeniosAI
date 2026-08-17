import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { TENANT_ARCHITECTURAL_RULES, TENANT_INSTALLATION_CONFIGURATION_AND_OPERATIONS_ERROR_CODE, TENANT_PRINCIPLES, UNINSTALL_EXECUTION_STEPS, TenantInstallationConfigurationAndOperationsDescriptor, TenantInstallationConfigurationAndOperationsProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['tenantPrinciples', 'tenantRoles', 'discoveryCatalogFields', 'installationRequestFields', 'assessmentConsiderations', 'informedConsentElements', 'propertyScopeRules', 'configurationProperties', 'connectionRecordFields', 'provisioningElements', 'activationValidationChecks', 'tenantOperationsViewFields', 'healthSignalSources', 'resourceGovernanceLimits', 'usageCostViewDistinctions', 'notificationTypes', 'tenantPilotRolloutStages', 'supportModelParties', 'supportAccessRequirements', 'incidentResponseElements', 'dataPortabilityExportItems', 'uninstallRequestDisclosures', 'uninstallExecutionSteps', 'tenantEvidenceTypes', 'reconciliationDomains', 'architecturalRules'];

test('ARCH-019-08 exposes tenant principle, role, and discovery-catalog metadata', () => { const descriptor = new TenantInstallationConfigurationAndOperationsDescriptor(); assert.ok(descriptor.tenantPrinciples().includes(TENANT_PRINCIPLES.APPROVAL_INFORMED_CAPABILITY_SPECIFIC)); assert.ok(descriptor.tenantRoles().includes('property-extension-administrator')); assert.ok(descriptor.discoveryCatalogFields().includes('certification-and-advisory-status')); assert.ok(descriptor.assessmentConsiderations().includes('existing-extension-conflicts')); });

test('ARCH-019-08 exposes consent, provisioning, and activation metadata', () => { const descriptor = new TenantInstallationConfigurationAndOperationsDescriptor(); assert.ok(descriptor.informedConsentElements().includes('agent-or-workflow-authority')); assert.ok(descriptor.provisioningElements().includes('runtime-host-placement')); assert.ok(descriptor.activationValidationChecks().includes('rollback-and-uninstall-readiness')); assert.ok(descriptor.connectionRecordFields().includes('residency')); });

test('ARCH-019-08 exposes operations, health, resource, and cost metadata', () => { const descriptor = new TenantInstallationConfigurationAndOperationsDescriptor(); assert.ok(descriptor.tenantOperationsViewFields().includes('data-retention-and-uninstall-state')); assert.ok(descriptor.healthSignalSources().includes('package-advisory-status')); assert.ok(descriptor.resourceGovernanceLimits().includes('model-and-tool-budgets')); assert.ok(descriptor.usageCostViewDistinctions().includes('external-provider-costs')); });

test('ARCH-019-08 exposes support, incident, portability, and uninstall metadata', () => { const descriptor = new TenantInstallationConfigurationAndOperationsDescriptor(); assert.ok(descriptor.supportAccessRequirements().includes('monitoring-and-review')); assert.ok(descriptor.incidentResponseElements().includes('containment-status')); assert.ok(descriptor.dataPortabilityExportItems().includes('connection-metadata-without-secrets')); assert.ok(descriptor.uninstallExecutionSteps().includes(UNINSTALL_EXECUTION_STEPS.REVOKE_GRANTS_CONNECTIONS_SECRETS)); assert.ok(descriptor.reconciliationDomains().includes('marketplace-entitlement')); assert.ok(descriptor.architecturalRules().includes(TENANT_ARCHITECTURAL_RULES.UNINSTALL_REQUIRES_PROVIDER_RECONCILIATION)); });

test('ARCH-019-08 validates profiles and rejects tenant-operations shortcuts', () => {
  const descriptor = new TenantInstallationConfigurationAndOperationsDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ noOtherTenantsInstallationsOrUsageExposed: false, tenantOffboardingIncludesEveryInstalledExtensionResource: false, propertyAdministratorsExceedDelegatedScope: true, configurationStoresSecretValuesOrOverridesMandatoryControls: true, rollbackAllowsReEnablingRevokedVulnerablePackage: true, uninstallLeavesActiveSchedulesGrantsCredentialsOrOrphanedData: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /no other tenant/);
  assert.match(validation.errors.join('\n'), /tenant offboarding to include every/);
  assert.match(validation.errors.join('\n'), /exceeding delegated scope/);
  assert.match(validation.errors.join('\n'), /overriding mandatory controls/);
  assert.match(validation.errors.join('\n'), /revoked vulnerable package/);
  assert.match(validation.errors.join('\n'), /orphaned data/);
});

test('ARCH-019-08 detects incomplete tenant installation and operations metadata', () => { class IncompleteDescriptor extends TenantInstallationConfigurationAndOperationsDescriptor { tenantRoles() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === TENANT_INSTALLATION_CONFIGURATION_AND_OPERATIONS_ERROR_CODE); });

test('ARCH-019-08 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('TenantInstallationConfigurationAndOperationsDescriptor');
  assert.ok(descriptor instanceof TenantInstallationConfigurationAndOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.tenantRoles.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new TenantInstallationConfigurationAndOperationsProfile({ profileName: 'Tenant Installation, Configuration, and Operations', ...metadata }); }
