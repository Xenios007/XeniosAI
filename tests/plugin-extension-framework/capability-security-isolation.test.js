import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { CAPABILITY_SECURITY_ISOLATION_ERROR_CODE, CAPABILITY_SECURITY_PRINCIPLES, EXTENSION_THREAT_MODEL_ITEMS, HOST_ISOLATION_CLASSES, CapabilitySecurityIsolationDescriptor, CapabilitySecurityIsolationProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['securityPrinciples', 'threatModelItems', 'capabilityGrantFields', 'grantDerivationLayers', 'capabilityGranularityExamples', 'runtimeIdentityFields', 'tenantIsolationDimensions', 'hostIsolationClasses', 'hostSecurityControls', 'providerEnforcementChecks', 'dataAccessProhibitions', 'extensionStoragePolicyFields', 'secretMediationControls', 'networkSecurityControls', 'inboundConnectivityControls', 'eventSecurityFields', 'workflowAgentSecurityProhibitions', 'uiExtensionSecurityControls', 'mcpSecurityVerificationItems', 'supplyChainAdmissionChecks', 'resourceContainmentLimits', 'failureContainmentControls', 'revocationTargets', 'incidentResponseSteps', 'securityEvidenceTypes', 'securityTestingAreas', 'architecturalRules'];

test('ARCH-019-05 exposes principle, threat, and grant metadata', () => { const descriptor = new CapabilitySecurityIsolationDescriptor(); assert.ok(descriptor.securityPrinciples().includes(CAPABILITY_SECURITY_PRINCIPLES.NO_AMBIENT_ACCESS)); assert.ok(descriptor.threatModelItems().includes(EXTENSION_THREAT_MODEL_ITEMS.PROMPT_INJECTION)); assert.ok(descriptor.capabilityGrantFields().includes('delegation-policy')); assert.ok(descriptor.grantDerivationLayers().includes('platform-security-policy')); });

test('ARCH-019-05 exposes isolation, host, and network metadata', () => { const descriptor = new CapabilitySecurityIsolationDescriptor(); assert.ok(descriptor.hostIsolationClasses().includes(HOST_ISOLATION_CLASSES.DEDICATED_HOST)); assert.ok(descriptor.hostSecurityControls().includes('ephemeral-execution-where-appropriate')); assert.ok(descriptor.networkSecurityControls().includes('transport-security')); assert.ok(descriptor.tenantIsolationDimensions().includes('backups-and-exports')); });

test('ARCH-019-05 exposes MCP, revocation, and testing metadata', () => { const descriptor = new CapabilitySecurityIsolationDescriptor(); assert.ok(descriptor.mcpSecurityVerificationItems().includes('response-content')); assert.ok(descriptor.revocationTargets().includes('host-class')); assert.ok(descriptor.securityTestingAreas().includes('mcp-prompt-or-tool-description-injection')); assert.ok(descriptor.incidentResponseSteps().includes('retest-and-close-remediation')); });

test('ARCH-019-05 validates profiles and rejects security shortcuts', () => {
  const descriptor = new CapabilitySecurityIsolationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ extensionsUntrustedByDefault: false, networkEgressDenyByDefault: false, ambientCredentialsOrDatabaseAccessPermitted: true, extensionsExposeArbitraryListeners: true, serverDescriptionsModifyPolicy: true, uiExtensionsRenderAuthPrompts: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /untrusted by default/);
  assert.match(validation.errors.join('\n'), /egress to be deny by default/);
  assert.match(validation.errors.join('\n'), /ambient credentials or direct database access/);
  assert.match(validation.errors.join('\n'), /arbitrary listeners/);
  assert.match(validation.errors.join('\n'), /descriptions from modifying policy/);
  assert.match(validation.errors.join('\n'), /authentication prompts/);
});

test('ARCH-019-05 detects incomplete capability security and isolation metadata', () => { class IncompleteDescriptor extends CapabilitySecurityIsolationDescriptor { hostIsolationClasses() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === CAPABILITY_SECURITY_ISOLATION_ERROR_CODE); });

test('ARCH-019-05 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('CapabilitySecurityIsolationDescriptor');
  assert.ok(descriptor instanceof CapabilitySecurityIsolationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.hostIsolationClasses.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new CapabilitySecurityIsolationProfile({ profileName: 'Capability Security and Isolation', ...metadata }); }
