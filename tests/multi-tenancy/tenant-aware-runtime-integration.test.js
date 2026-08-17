import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { API_SCOPE_CLASSIFICATIONS, CONTEXT_ESTABLISHMENT_STEPS, RUNTIME_TRUST_BOUNDARIES, TENANT_AWARE_RUNTIME_INTEGRATION_ERROR_CODE, TenantAwareRuntimeIntegrationDescriptor, TenantAwareRuntimeIntegrationProfile, addMultiTenancy } from '../../src/multi-tenancy/index.js';

const METADATA_KEYS = ['runtimePrinciples', 'runtimeContextFields', 'runtimeTrustBoundaries', 'contextEstablishmentSteps', 'contextRepresentations', 'experienceLayerRequirements', 'gatewayResponsibilities', 'apiScopeClassifications', 'sdkBehaviors', 'providerResponsibilitySteps', 'serviceToServicePropagatedFields', 'dataAccessPatterns', 'runtimeCacheAccessRules', 'runtimeEventEnvelopeFields', 'eventConsumptionSteps', 'batchJobFields', 'workflowBindingPreservedThrough', 'orchestratorBindingTargets', 'agentGrantElements', 'runtimeMemoryScopeLevels', 'integrationConnectionFields', 'outboundValidationFactors', 'extensionRuntimeControls', 'operatorToolCapabilities', 'contextExpiryTriggers', 'runtimeObservabilitySignals', 'runtimeFailureBehaviors', 'runtimeConformanceTestingAreas', 'architecturalRules'];

test('ARCH-018-07 exposes context, boundary, and establishment metadata', () => { const descriptor = new TenantAwareRuntimeIntegrationDescriptor(); assert.ok(descriptor.runtimeTrustBoundaries().includes(RUNTIME_TRUST_BOUNDARIES.ORCHESTRATOR_TO_AGENT)); assert.ok(descriptor.contextEstablishmentSteps().includes(CONTEXT_ESTABLISHMENT_STEPS.RESOLVE_REGISTRY)); assert.ok(descriptor.apiScopeClassifications().includes(API_SCOPE_CLASSIFICATIONS.CROSS_TENANT)); assert.ok(descriptor.runtimeContextFields().includes('issuance-expiry-audience-and-provenance')); });

test('ARCH-018-07 exposes runtime execution and integration metadata', () => { const descriptor = new TenantAwareRuntimeIntegrationDescriptor(); assert.ok(descriptor.workflowBindingPreservedThrough().includes('retries-and-compensation')); assert.ok(descriptor.agentGrantElements().includes('delegation-rules')); assert.ok(descriptor.integrationConnectionFields().includes('callback-validation')); assert.ok(descriptor.outboundValidationFactors().includes('consent-or-legal-basis')); });

test('ARCH-018-07 exposes observability, failure, and testing metadata', () => { const descriptor = new TenantAwareRuntimeIntegrationDescriptor(); assert.ok(descriptor.runtimeObservabilitySignals().includes('cross-tenant-mismatch-attempts')); assert.ok(descriptor.runtimeFailureBehaviors().includes('no-partial-cross-tenant-output')); assert.ok(descriptor.runtimeConformanceTestingAreas().includes('extension-capability-containment')); assert.ok(descriptor.contextExpiryTriggers().includes('integration-connection-is-disabled')); });

test('ARCH-018-07 validates profiles and rejects runtime shortcuts', () => {
  const descriptor = new TenantAwareRuntimeIntegrationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ everyExecutionHasExplicitTrustedContext: false, gatewayEstablishesButProvidersOwnValidation: false, unsafeDefaultTenantUsed: true, clientInputTrustedAsAuthority: true, modelOutputChangesTenantContext: true, hiddenImpersonationInOperatorTools: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /explicit, trusted context/);
  assert.match(validation.errors.join('\n'), /providers own resource validation/);
  assert.match(validation.errors.join('\n'), /unsafe default tenant/);
  assert.match(validation.errors.join('\n'), /trusted as authority/);
  assert.match(validation.errors.join('\n'), /model output from changing tenant context/);
  assert.match(validation.errors.join('\n'), /hidden impersonation/);
});

test('ARCH-018-07 detects incomplete tenant-aware runtime and integration metadata', () => { class IncompleteDescriptor extends TenantAwareRuntimeIntegrationDescriptor { runtimeTrustBoundaries() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === TENANT_AWARE_RUNTIME_INTEGRATION_ERROR_CODE); });

test('ARCH-018-07 profile is immutable and descriptor is registered', () => {
  const descriptor = addMultiTenancy(new ServiceCollection()).buildServiceProvider().getRequiredService('TenantAwareRuntimeIntegrationDescriptor');
  assert.ok(descriptor instanceof TenantAwareRuntimeIntegrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.runtimeTrustBoundaries.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new TenantAwareRuntimeIntegrationProfile({ profileName: 'Tenant-Aware Runtime and Integration', ...metadata }); }
