import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AUTHENTICATION_FACTOR_TYPES,
  AUTHENTICATION_PRINCIPLES,
  AuthenticationPolicy,
  CREDENTIAL_MANAGEMENT_CAPABILITIES,
  FUTURE_IDENTITY_CAPABILITIES,
  IDENTITY_ARCHITECTURE_STAGES,
  IDENTITY_CATEGORY_NAMES,
  IDENTITY_GOVERNANCE_CONTROLS,
  IDENTITY_LIFECYCLE_STAGES,
  IDENTITY_OBJECTIVES,
  IDENTITY_OBSERVABILITY_EVENTS,
  IDENTITY_VERIFICATION_TRIGGERS,
  IdentityAuthenticationDescriptor,
  IdentityCategory,
  IdentityLifecycleRecord,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SESSION_MANAGEMENT_CAPABILITIES,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('identity authentication exposes objectives, identity flow, and lifecycle', () => {
  const descriptor = new IdentityAuthenticationDescriptor();

  assert.ok(descriptor.objectives().includes(IDENTITY_OBJECTIVES.STRONG_IDENTITY_VERIFICATION));
  assert.ok(descriptor.objectives().includes(IDENTITY_OBJECTIVES.VENDOR_INDEPENDENCE));
  assert.deepEqual(descriptor.identityFlow(), [
    IDENTITY_ARCHITECTURE_STAGES.IDENTITY,
    IDENTITY_ARCHITECTURE_STAGES.AUTHENTICATION,
    IDENTITY_ARCHITECTURE_STAGES.TRUST_EVALUATION,
    IDENTITY_ARCHITECTURE_STAGES.AUTHORIZATION,
    IDENTITY_ARCHITECTURE_STAGES.BUSINESS_OPERATIONS
  ]);
  assert.deepEqual(descriptor.lifecycle(), [
    IDENTITY_LIFECYCLE_STAGES.PROVISION,
    IDENTITY_LIFECYCLE_STAGES.ACTIVATE,
    IDENTITY_LIFECYCLE_STAGES.AUTHENTICATE,
    IDENTITY_LIFECYCLE_STAGES.OPERATE,
    IDENTITY_LIFECYCLE_STAGES.SUSPEND,
    IDENTITY_LIFECYCLE_STAGES.REVOKE,
    IDENTITY_LIFECYCLE_STAGES.RETIRE
  ]);
});

test('identity authentication registers documented identity categories', () => {
  const descriptor = new IdentityAuthenticationDescriptor();

  assert.deepEqual(descriptor.listCategories().map(category => category.categoryName), [
    IDENTITY_CATEGORY_NAMES.HUMAN_USERS,
    IDENTITY_CATEGORY_NAMES.SERVICES,
    IDENTITY_CATEGORY_NAMES.AI_AGENTS,
    IDENTITY_CATEGORY_NAMES.INFRASTRUCTURE,
    IDENTITY_CATEGORY_NAMES.EXTERNAL_SYSTEMS
  ]);
  assert.ok(descriptor.getCategory(IDENTITY_CATEGORY_NAMES.AI_AGENTS).examples.includes('AI Orchestrator'));
  assert.equal(descriptor.getCategory(IDENTITY_CATEGORY_NAMES.SERVICES).authenticatesIndependently, true);
});

test('identity authentication rejects invalid identity categories', () => {
  assert.throws(
    () =>
      new IdentityAuthenticationDescriptor({
        categories: [
          new IdentityCategory({
            categoryName: 'Trusted Network',
            examples: [],
            operationalRequirement: '',
            uniquelyIdentifiable: false,
            independentlyManaged: false,
            authenticatesIndependently: false,
            usesSharedUserCredentials: true,
            trustsNetworkLocation: true,
            vendorSpecific: true
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.IDENTITY_CATEGORY_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported identity category')) &&
      error.details.errors.some(message => message.includes('documented examples')) &&
      error.details.errors.some(message => message.includes('shared user credentials')) &&
      error.details.errors.some(message => message.includes('network location')) &&
      error.details.errors.some(message => message.includes('vendor neutral'))
  );
});

test('identity authentication validates authentication policy', () => {
  const descriptor = new IdentityAuthenticationDescriptor();
  const valid = descriptor.validateAuthenticationPolicy(
    new AuthenticationPolicy({
      policyName: 'Strong Authentication',
      principles: Object.values(AUTHENTICATION_PRINCIPLES),
      factors: Object.values(AUTHENTICATION_FACTOR_TYPES)
    })
  );
  const invalid = descriptor.validateAuthenticationPolicy({
    policyName: '',
    principles: [AUTHENTICATION_PRINCIPLES.EXPLICIT],
    factors: [AUTHENTICATION_FACTOR_TYPES.KNOWLEDGE],
    supportsMfa: false,
    mfaForPrivilegedIdentities: false,
    mfaForHighRiskOperations: false,
    supportsMachineCredentials: false,
    supportsFederation: false,
    preservesLocalAuthorization: false,
    authenticatesBeforeAuthorization: false,
    strengthAlignedWithRisk: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /policy must have a name/);
  assert.match(invalid.errors.join('\n'), /repeatable/);
  assert.match(invalid.errors.join('\n'), /Possession/);
  assert.match(invalid.errors.join('\n'), /privileged identities/);
  assert.match(invalid.errors.join('\n'), /local authorization policies/);
  assert.match(invalid.errors.join('\n'), /before authorization/);
});

test('identity authentication validates controlled identity lifecycle', () => {
  const descriptor = new IdentityAuthenticationDescriptor();
  const valid = descriptor.validateLifecycle(
    new IdentityLifecycleRecord({
      identityName: 'Reservation Service',
      categoryName: IDENTITY_CATEGORY_NAMES.SERVICES,
      stages: Object.values(IDENTITY_LIFECYCLE_STAGES),
      credentials: Object.values(CREDENTIAL_MANAGEMENT_CAPABILITIES),
      sessions: Object.values(SESSION_MANAGEMENT_CAPABILITIES),
      verificationTriggers: Object.values(IDENTITY_VERIFICATION_TRIGGERS),
      observabilityEvents: Object.values(IDENTITY_OBSERVABILITY_EVENTS),
      governanceControls: Object.values(IDENTITY_GOVERNANCE_CONTROLS)
    })
  );
  const invalid = descriptor.validateLifecycle({
    identityName: '',
    categoryName: 'Unknown',
    stages: [IDENTITY_LIFECYCLE_STAGES.PROVISION],
    credentials: [CREDENTIAL_MANAGEMENT_CAPABILITIES.SECURE_CREATION],
    sessions: [SESSION_MANAGEMENT_CAPABILITIES.SECURE_ESTABLISHMENT],
    verificationTriggers: [IDENTITY_VERIFICATION_TRIGGERS.INITIAL_AUTHENTICATION],
    observabilityEvents: [IDENTITY_OBSERVABILITY_EVENTS.AUTHENTICATION_SUCCESS],
    governanceControls: [IDENTITY_GOVERNANCE_CONTROLS.IDENTITY_OWNERSHIP],
    controlledLifecycle: false,
    auditable: false,
    permanentTrust: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /identify the identity/);
  assert.match(invalid.errors.join('\n'), /unknown category/);
  assert.match(invalid.errors.join('\n'), /7 stages/);
  assert.match(invalid.errors.join('\n'), /rotation/);
  assert.match(invalid.errors.join('\n'), /reauthentication/);
  assert.match(invalid.errors.join('\n'), /permanent trust/);
});

test('identity authentication reports future capabilities without implementing them', () => {
  const descriptor = new IdentityAuthenticationDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_IDENTITY_CAPABILITIES.PASSWORDLESS_AUTHENTICATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_IDENTITY_CAPABILITIES.DECENTRALIZED_IDENTITY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_IDENTITY_CAPABILITIES.POST_QUANTUM_AUTHENTICATION));
});

test('identity authentication assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new IdentityAuthenticationDescriptor({ categories: [] }).assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.IDENTITY_AUTHENTICATION_INVALID &&
      error.details.errors.some(message => message.includes('identity categories'))
  );
});

test('identity authentication descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('IdentityAuthenticationDescriptor');

  assert.ok(descriptor instanceof IdentityAuthenticationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
