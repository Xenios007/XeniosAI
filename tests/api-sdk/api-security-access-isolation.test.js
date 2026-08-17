import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_ABUSE_BUDGET_CONTROLS, API_ACCESS_INTERSECTION_FACTORS, API_AUTHENTICATION_CLASSES,
  API_CREDENTIAL_CLASSES, API_DATA_CLASSIFICATIONS, API_GATEWAY_AUTHORIZATION_CONTROLS,
  API_IDENTITY_DOMAINS, API_PRIVILEGED_ACCESS_CONTROLS, API_PROVIDER_AUTHORIZATION_CONTROLS,
  API_SECURITY_ACCESS_ISOLATION_ERROR_CODE, API_SECURITY_ARCHITECTURAL_RULES,
  API_SECURITY_BOUNDARIES, API_SECURITY_OBJECTIVES, API_SECURITY_TEST_TYPES,
  API_SURFACE_SECURITY_CONTROLS, API_TENANT_ISOLATION_PATHS,
  ApiSecurityAccessIsolationDescriptor, ApiSecurityAccessIsolationProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-05 exposes security objectives, identity domains, credentials, and access decision metadata', () => {
  const descriptor = new ApiSecurityAccessIsolationDescriptor();
  assert.ok(descriptor.objectives().includes(API_SECURITY_OBJECTIVES.REPLAY_RESISTANCE));
  assert.ok(descriptor.identityDomains().includes(API_IDENTITY_DOMAINS.AGENT));
  assert.ok(descriptor.identityContextFields().includes('delegation-chain'));
  assert.ok(descriptor.authenticationClasses().includes(API_AUTHENTICATION_CLASSES.ELEVATED_MFA));
  assert.ok(descriptor.credentialClasses().includes(API_CREDENTIAL_CLASSES.CALLBACK_VERIFICATION));
  assert.ok(descriptor.credentialRequirements().includes('protected-from-logs-and-model-context'));
  assert.ok(descriptor.authorizationDecisionFields().includes('policy-versions'));
  assert.ok(descriptor.accessIntersectionFactors().includes(API_ACCESS_INTERSECTION_FACTORS.DATA_CLASSIFICATION));
});

test('ARCH-017-05 exposes gateway, provider, delegation, isolation, data, validation, surface, automation, and privileged controls', () => {
  const descriptor = new ApiSecurityAccessIsolationDescriptor();
  assert.ok(descriptor.gatewayAuthorizationControls().includes(API_GATEWAY_AUTHORIZATION_CONTROLS.ABUSE));
  assert.ok(descriptor.providerAuthorizationControls().includes(API_PROVIDER_AUTHORIZATION_CONTROLS.CURRENT_STATE));
  assert.ok(descriptor.delegationRecordFields().includes('further-delegation-rule'));
  assert.ok(descriptor.tenantIsolationPaths().includes(API_TENANT_ISOLATION_PATHS.SEARCH_INDEXES));
  assert.ok(descriptor.propertyIsolationProhibitions().includes('receive-another-property-events-or-callbacks'));
  assert.ok(descriptor.dataClassifications().includes(API_DATA_CLASSIFICATIONS.SECURITY_SENSITIVE));
  assert.ok(descriptor.validationControlTypes().includes('idempotency-and-replay-metadata'));
  assert.ok(descriptor.surfaceSecurityControls().includes(API_SURFACE_SECURITY_CONTROLS.STREAMS));
  assert.ok(descriptor.automationAccessControls().includes('model-content-cannot-change-policy-authority-scope-credentials-validation-or-evidence'));
  assert.ok(descriptor.privilegedAccessControls().includes(API_PRIVILEGED_ACCESS_CONTROLS.EMERGENCY));
});

test('ARCH-017-05 exposes abuse controls, tests, rules, and boundaries', () => {
  const descriptor = new ApiSecurityAccessIsolationDescriptor();
  assert.ok(descriptor.abuseBudgetControls().includes(API_ABUSE_BUDGET_CONTROLS.AI_AGENT_LOOPS));
  assert.ok(descriptor.securityTestTypes().includes(API_SECURITY_TEST_TYPES.STREAM));
  assert.ok(descriptor.architecturalRules().includes(API_SECURITY_ARCHITECTURAL_RULES.AI_METADATA_NOT_AUTHORITY));
  assert.ok(descriptor.architectureBoundaries().includes(API_SECURITY_BOUNDARIES.ARCH_018));
});

test('ARCH-017-05 validates complete profiles and rejects security, access, and isolation shortcuts', () => {
  const descriptor = new ApiSecurityAccessIsolationDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const validation = descriptor.validateProfile({
    everyInteractionTrustBoundary: false,
    providerRevalidatesAuthority: false,
    credentialsProtectedFromArtifacts: false,
    tenantClaimsValidated: false,
    isolationBeforeCandidateSets: false,
    modelOutputAuthorizesCalls: true,
    gatewayOnlyAuthorization: true,
    credentialPossessionAloneAuthorizes: true,
    postProcessingRedactionPrimaryIsolation: true,
    searchRelevanceOverridesIsolation: true,
    secretsInContractsSdkDocsLogsPrompts: true,
    replacesArch018: true
  });

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /authenticity/);
  assert.match(validation.errors.join('\n'), /trust-boundary crossing/);
  assert.match(validation.errors.join('\n'), /gateway from being the sole owner/);
  assert.match(validation.errors.join('\n'), /model output from being an authorization decision/);
  assert.match(validation.errors.join('\n'), /does not replace ARCH-018/);
});

test('ARCH-017-05 detects incomplete security metadata', () => {
  class IncompleteDescriptor extends ApiSecurityAccessIsolationDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_SECURITY_ACCESS_ISOLATION_ERROR_CODE
  );
});

test('ARCH-017-05 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('ApiSecurityAccessIsolationDescriptor');
  assert.ok(descriptor instanceof ApiSecurityAccessIsolationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'identityDomains', 'identityContextFields', 'authenticationClasses',
    'credentialClasses', 'credentialRequirements', 'authorizationDecisionFields',
    'accessIntersectionFactors', 'gatewayAuthorizationControls', 'providerAuthorizationControls',
    'delegationRecordFields', 'tenantIsolationPaths', 'propertyIsolationProhibitions',
    'dataClassifications', 'validationControlTypes', 'surfaceSecurityControls',
    'automationAccessControls', 'privilegedAccessControls', 'abuseBudgetControls',
    'securityTestTypes', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new ApiSecurityAccessIsolationProfile({
    profileName: 'API Security, Access, and Isolation',
    ...metadata
  });
}
