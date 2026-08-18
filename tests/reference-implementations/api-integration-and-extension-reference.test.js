import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { API_INTEGRATION_AND_EXTENSION_REFERENCE_ERROR_CODE, API_INTEGRATION_ARCHITECTURAL_RULES, API_PRODUCT_OPERATIONS, ApiIntegrationAndExtensionReferenceDescriptor, ApiIntegrationAndExtensionReferenceProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['apiProductOperations', 'apiOperationAttributes', 'gatewayResponsibilities', 'providerRevalidations', 'sdkCapabilities', 'integrationAdapterOwnership', 'inboundFlowSteps', 'outboundDeliveryRetryFields', 'pluginReferenceElements', 'mcpReferenceElements', 'compatibilityMatrixDimensions', 'compatibilityChangeControls', 'failureCases', 'referenceAcceptanceCriteria', 'architecturalRules'];

test('ARCH-020-07 exposes API-product, operation-attribute, and gateway metadata', () => { const descriptor = new ApiIntegrationAndExtensionReferenceDescriptor(); assert.ok(descriptor.apiProductOperations().includes(API_PRODUCT_OPERATIONS.RATE_QUOTE)); assert.ok(descriptor.apiOperationAttributes().includes('request-and-response-schema')); assert.ok(descriptor.gatewayResponsibilities().includes('applies-edge-controls')); });

test('ARCH-020-07 exposes provider-revalidation, SDK, and adapter-ownership metadata', () => { const descriptor = new ApiIntegrationAndExtensionReferenceDescriptor(); assert.ok(descriptor.providerRevalidations().includes('entitlement')); assert.ok(descriptor.sdkCapabilities().includes('secure-logging')); assert.ok(descriptor.integrationAdapterOwnership().includes('replay-protection')); });

test('ARCH-020-07 exposes inbound/outbound flow, plugin, and MCP metadata', () => { const descriptor = new ApiIntegrationAndExtensionReferenceDescriptor(); assert.ok(descriptor.inboundFlowSteps().includes('adapter-translates-external-semantics')); assert.ok(descriptor.outboundDeliveryRetryFields().includes('payload-digest')); assert.ok(descriptor.pluginReferenceElements().includes('deny-by-default-network')); assert.ok(descriptor.mcpReferenceElements().includes('output-validation')); });

test('ARCH-020-07 exposes compatibility, failure, acceptance, and architectural-rule metadata', () => {
  const descriptor = new ApiIntegrationAndExtensionReferenceDescriptor();
  assert.ok(descriptor.compatibilityMatrixDimensions().includes('extension-point'));
  assert.ok(descriptor.compatibilityChangeControls().includes('deprecation'));
  assert.ok(descriptor.failureCases().includes('mcp-server-identity-mismatch'));
  assert.ok(descriptor.referenceAcceptanceCriteria().includes('plugin-and-mcp-access-is-capability-mediated'));
  assert.ok(descriptor.architecturalRules().includes(API_INTEGRATION_ARCHITECTURAL_RULES.ADAPTERS_OWN_TRANSLATION_NOT_BUSINESS_TRUTH));
});

test('ARCH-020-07 validates profiles and rejects authority shortcuts', () => {
  const descriptor = new ApiIntegrationAndExtensionReferenceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ credentialsAreTenantAndConnectionBound: false, providersValidateResourceOwnership: false, sdkConvenienceBroadensAuthorityOrHidesProviderErrors: true, integrationAdapterOwnsInternalAvailabilityTruth: true, protocolDiscoveryAuthorizesToolExecution: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /tenant and connection bound/);
  assert.match(validation.errors.join('\n'), /validate resource ownership/);
  assert.match(validation.errors.join('\n'), /broadening authority or hiding provider errors/);
  assert.match(validation.errors.join('\n'), /owning internal availability truth/);
  assert.match(validation.errors.join('\n'), /authorizing tool execution/);
});

test('ARCH-020-07 detects incomplete API, integration, and extension reference metadata', () => { class IncompleteDescriptor extends ApiIntegrationAndExtensionReferenceDescriptor { mcpReferenceElements() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === API_INTEGRATION_AND_EXTENSION_REFERENCE_ERROR_CODE); });

test('ARCH-020-07 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('ApiIntegrationAndExtensionReferenceDescriptor');
  assert.ok(descriptor instanceof ApiIntegrationAndExtensionReferenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.pluginReferenceElements.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ApiIntegrationAndExtensionReferenceProfile({ referenceName: 'API, Integration, and Extension Reference', ...metadata }); }
