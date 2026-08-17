import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { EXTENSION_HOST_TYPES, RUNTIME_FAILURE_CLASSIFICATIONS, RUNTIME_HOSTS_EXTENSION_POINTS_ERROR_CODE, RUNTIME_HOST_PRINCIPLES, RuntimeHostsExtensionPointsDescriptor, RuntimeHostsExtensionPointsProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['runtimePrinciples', 'hostResponsibilities', 'hostBoundaries', 'hostTypes', 'runtimeAdmissionChecks', 'invocationContextFields', 'extensionPointContractFields', 'idempotencyScopeElements', 'apiExtensionPointValidations', 'eventExtensionPointValidations', 'workflowExtensionPointElements', 'agentToolContractFields', 'agentExtensionInheritedRequirements', 'knowledgeExtensionPointContracts', 'memoryExtensionPointDeclarations', 'uiExtensionPointControls', 'mcpRuntimeMediationItems', 'connectorRuntimeCapabilities', 'resultValidationChecks', 'failureClassifications', 'healthEvaluationFactors', 'recoveryRestorationElements', 'recoveryExerciseTypes', 'observabilityTelemetryFields', 'usageMeteringDimensions', 'architecturalRules'];

test('ARCH-019-06 exposes principle, responsibility, and host-type metadata', () => { const descriptor = new RuntimeHostsExtensionPointsDescriptor(); assert.ok(descriptor.runtimePrinciples().includes(RUNTIME_HOST_PRINCIPLES.OUTSIDE_CORE_TRANSACTIONS)); assert.ok(descriptor.hostResponsibilities().includes('quarantines-or-terminates-execution')); assert.ok(descriptor.hostTypes().includes(EXTENSION_HOST_TYPES.AGENT_TOOL_HOST)); assert.ok(descriptor.runtimeAdmissionChecks().includes('resource-budget-and-quota-are-available')); });

test('ARCH-019-06 exposes extension-point contract and per-domain metadata', () => { const descriptor = new RuntimeHostsExtensionPointsDescriptor(); assert.ok(descriptor.extensionPointContractFields().includes('side-effect-classification')); assert.ok(descriptor.agentToolContractFields().includes('reversibility')); assert.ok(descriptor.knowledgeExtensionPointContracts().includes('deletion-contracts')); assert.ok(descriptor.mcpRuntimeMediationItems().includes('capability-filtering')); });

test('ARCH-019-06 exposes failure, recovery, and observability metadata', () => { const descriptor = new RuntimeHostsExtensionPointsDescriptor(); assert.ok(descriptor.failureClassifications().includes(RUNTIME_FAILURE_CLASSIFICATIONS.SECURITY_CONTAINMENT)); assert.ok(descriptor.recoveryExerciseTypes().includes('secret-rotation')); assert.ok(descriptor.observabilityTelemetryFields().includes('grant-decision')); assert.ok(descriptor.usageMeteringDimensions().includes('model-or-tool-use')); });

test('ARCH-019-06 validates profiles and rejects runtime shortcuts', () => {
  const descriptor = new RuntimeHostsExtensionPointsDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ hostsExecuteOnlyVerifiedActiveDigests: false, extensionFailureOutsideCoreTransactionsByDefault: false, authorizationFailsOpenToExtensionDefault: true, extensionParticipatesInSharedDatabaseTransaction: true, mcpDiscoveryRegistersUnrestrictedTools: true, directStorageCredentialsPermitted: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /verified, active package digests/);
  assert.match(validation.errors.join('\n'), /outside core authoritative transactions/);
  assert.match(validation.errors.join('\n'), /failing open to an extension default/);
  assert.match(validation.errors.join('\n'), /shared database transaction/);
  assert.match(validation.errors.join('\n'), /unrestricted tools into an agent/);
  assert.match(validation.errors.join('\n'), /direct storage credentials/);
});

test('ARCH-019-06 detects incomplete runtime hosts and extension points metadata', () => { class IncompleteDescriptor extends RuntimeHostsExtensionPointsDescriptor { hostTypes() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === RUNTIME_HOSTS_EXTENSION_POINTS_ERROR_CODE); });

test('ARCH-019-06 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('RuntimeHostsExtensionPointsDescriptor');
  assert.ok(descriptor instanceof RuntimeHostsExtensionPointsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.hostTypes.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new RuntimeHostsExtensionPointsProfile({ profileName: 'Runtime Hosts and Extension Points', ...metadata }); }
