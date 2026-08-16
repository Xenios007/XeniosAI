import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_AUDIENCE_CLASSIFICATIONS, API_CONTRACT_FIELDS, API_INTERACTION_CLASSIFICATIONS,
  API_SDK_ARCHITECTURAL_RULES, API_SDK_ARCHITECTURAL_SEPARATIONS, API_SDK_CAPABILITIES,
  API_SDK_LOGICAL_LAYERS, API_SDK_OVERVIEW_ERROR_CODE, SDK_LOGICAL_LAYERS,
  ApiSdkOverviewDescriptor, ApiSdkOverviewProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-01 exposes capability, contract, authority, and artifact separations', () => {
  const descriptor = new ApiSdkOverviewDescriptor();
  assert.deepEqual(descriptor.architecturalSeparations(), Object.values(API_SDK_ARCHITECTURAL_SEPARATIONS));
  assert.deepEqual(descriptor.contractFields(), Object.values(API_CONTRACT_FIELDS));
  assert.ok(descriptor.architecturalRules().includes(API_SDK_ARCHITECTURAL_RULES.CONTRACT_AUTHORITY));
  assert.ok(descriptor.architecturalRules().includes(API_SDK_ARCHITECTURAL_RULES.SDK_BOUNDARY));
});

test('ARCH-017-01 exposes audience, interaction, logical-layer, and capability semantics', () => {
  const descriptor = new ApiSdkOverviewDescriptor();
  assert.deepEqual(descriptor.audienceClassifications(), Object.values(API_AUDIENCE_CLASSIFICATIONS));
  assert.deepEqual(descriptor.interactionClassifications(), Object.values(API_INTERACTION_CLASSIFICATIONS));
  assert.deepEqual(descriptor.logicalLayers(), Object.values(API_SDK_LOGICAL_LAYERS));
  assert.ok(descriptor.capabilities().includes(API_SDK_CAPABILITIES.CONTRACT_VALIDATOR));
  assert.deepEqual(descriptor.sdkLayers(), Object.values(SDK_LOGICAL_LAYERS));
});

test('ARCH-017-01 validates profiles and rejects interface shortcuts', () => {
  const descriptor = new ApiSdkOverviewDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'capabilityBeforeExposure', 'ownershipBeforePublication', 'contractBeforeImplementation',
    'identityBeforeProcessing', 'authorityBeforeAction', 'validateTrustBoundaries',
    'compatibilityBeforeConvenience', 'idempotencyBeforeRetry', 'errorsContractual',
    'evidenceBeforeRetirement', 'providerOwnsDomain', 'gatewayBounded',
    'contractAuthoritative', 'derivedArtifactsTraceable', 'productOwned', 'consumerRegistered',
    'runtimeAuthorizationIndependent', 'tenantPropertyEndToEnd', 'missingScopeFailsSafe',
    'asyncDeliverySeparateCompletion', 'errorsSafe', 'sideEffectsDefined',
    'breakingChangesMigrated', 'sdkSupportedProduct', 'sdkLayered', 'sdkPreservesSemantics',
    'docsVersionAligned', 'lifecycleGated', 'agentAuthorityBounded', 'telemetryProtected',
    'operationsReliable', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'apiMirrorsDatabase', 'gatewayOwnsBusinessLogic', 'reachabilityAuthorizes',
    'apiKeyCompleteIdentity', 'sdkOwnsDomainRules', 'generatedArtifactAuthoritative',
    'directDatabaseAccess', 'oneTransportRequired', 'oneLanguageRequired',
    'exactlyOnceGuaranteed', 'sdkHidesProviderFailure', 'obsoletePreservedForever',
    'everyInternalCapabilityPublic', 'tenantSelfAssigned', 'gatewayAcceptanceMeansCompletion',
    'retryAllFailures', 'agentDiscoveryExpandsAuthority', 'selectsApiProduct',
    'definesLaterChapterDetails'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /capability-separate-from-exposure/);
  assert.match(validation.errors.join('\n'), /requires contractBeforeImplementation/);
  assert.match(validation.errors.join('\n'), /prohibits gatewayOwnsBusinessLogic/);
});

test('ARCH-017-01 detects incomplete overview metadata', () => {
  class IncompleteDescriptor extends ApiSdkOverviewDescriptor {
    capabilities() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_SDK_OVERVIEW_ERROR_CODE
  );
});

test('ARCH-017-01 profile is immutable', () => {
  const profile = complete(new ApiSdkOverviewDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.contractFields.push('other'), TypeError);
});

test('ARCH-017-01 descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('ApiSdkOverviewDescriptor');
  assert.ok(descriptor instanceof ApiSdkOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'businessDrivers', 'objectives', 'architecturalSeparations', 'coreConcepts',
    'corePrinciples', 'productFields', 'consumerTypes', 'audienceClassifications',
    'interactionClassifications', 'logicalLayers', 'capabilities', 'contractFields',
    'authorityContextFields', 'errorClasses', 'lifecycleStates', 'sdkCapabilities',
    'sdkLayers', 'lifecycleStages', 'operatingRoles', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries', 'expectedOutcomes'
  ]) metadata[key] = descriptor[key]();
  return new ApiSdkOverviewProfile({ profileName: 'API SDK Overview', ...metadata });
}
