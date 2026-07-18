import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ACCESS_CONTROL_PRINCIPLES,
  ADMINISTRATIVE_AUTHORIZATION_OPERATIONS,
  AI_AUTHORIZATION_CAPABILITIES,
  ATTRIBUTE_AUTHORIZATION_GROUPS,
  AUTHORIZATION_ACTIONS,
  AUTHORIZATION_COMPONENT_NAMES,
  AUTHORIZATION_FLOW_STAGES,
  AUTHORIZATION_GOVERNANCE_CONTROLS,
  AUTHORIZATION_OBJECTIVES,
  AUTHORIZATION_OBSERVABILITY_EVENTS,
  AuthorizationModelDescriptor,
  AuthorizationPermission,
  AuthorizationPolicy,
  BUSINESS_AUTHORIZATION_ROLES,
  DELEGATED_AUTHORIZATION_REQUIREMENTS,
  DelegatedAuthorizationRecord,
  FUTURE_AUTHORIZATION_CAPABILITIES,
  POLICY_EVALUATION_INPUTS,
  PROTECTED_RESOURCE_CATEGORIES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SERVICE_AUTHORIZATION_CHECKS,
  TECHNICAL_AUTHORIZATION_ROLES,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('authorization model exposes objectives and authorization flows', () => {
  const descriptor = new AuthorizationModelDescriptor();

  assert.ok(descriptor.objectives().includes(AUTHORIZATION_OBJECTIVES.LEAST_PRIVILEGE));
  assert.ok(descriptor.objectives().includes(AUTHORIZATION_OBJECTIVES.VENDOR_INDEPENDENCE));
  assert.deepEqual(descriptor.authorizationFlow(), [
    AUTHORIZATION_FLOW_STAGES.IDENTITY,
    AUTHORIZATION_FLOW_STAGES.AUTHENTICATION,
    AUTHORIZATION_FLOW_STAGES.AUTHORIZATION_POLICY,
    AUTHORIZATION_FLOW_STAGES.ACCESS_DECISION,
    AUTHORIZATION_FLOW_STAGES.BUSINESS_OPERATION
  ]);
  assert.deepEqual(descriptor.componentFlow(), [
    AUTHORIZATION_COMPONENT_NAMES.AUTHENTICATED_IDENTITY,
    AUTHORIZATION_COMPONENT_NAMES.REQUESTED_RESOURCE,
    AUTHORIZATION_COMPONENT_NAMES.REQUESTED_ACTION,
    AUTHORIZATION_COMPONENT_NAMES.POLICY_EVALUATION,
    AUTHORIZATION_COMPONENT_NAMES.ACCESS_DECISION
  ]);
});

test('authorization model exposes protected resources, actions, roles, and attributes', () => {
  const descriptor = new AuthorizationModelDescriptor();

  assert.ok(descriptor.protectedResourceCategories().includes(PROTECTED_RESOURCE_CATEGORIES.BUSINESS_RESOURCES));
  assert.ok(descriptor.protectedResourceCategories().includes(PROTECTED_RESOURCE_CATEGORIES.AI_RESOURCES));
  assert.ok(descriptor.actions().includes(AUTHORIZATION_ACTIONS.EXECUTE));
  assert.ok(descriptor.businessRoles().includes(BUSINESS_AUTHORIZATION_ROLES.AUDITOR));
  assert.ok(descriptor.technicalRoles().includes(TECHNICAL_AUTHORIZATION_ROLES.SECURITY_ADMINISTRATOR));
  assert.ok(descriptor.attributeGroups().includes(ATTRIBUTE_AUTHORIZATION_GROUPS.REQUEST));
});

test('authorization model validates explicit auditable permissions', () => {
  const descriptor = new AuthorizationModelDescriptor();
  const valid = descriptor.validatePermission(
    new AuthorizationPermission({
      identity: 'Reservation Operator',
      resource: 'Reservation',
      action: AUTHORIZATION_ACTIONS.READ,
      resourceCategory: PROTECTED_RESOURCE_CATEGORIES.BUSINESS_RESOURCES
    })
  );
  const invalid = descriptor.validatePermission({
    identity: '',
    resource: '',
    action: 'Impersonate',
    resourceCategory: 'Internal LAN',
    explicit: false,
    leastPrivilege: false,
    fineGrained: false,
    reviewable: false,
    revocable: false,
    auditable: false,
    impliedByNetwork: true,
    impliedByServiceOwnership: true,
    impliedByDeploymentEnvironment: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /authenticated identity/);
  assert.match(invalid.errors.join('\n'), /Unsupported authorization action/);
  assert.match(invalid.errors.join('\n'), /least privilege/);
  assert.match(invalid.errors.join('\n'), /network location/);
  assert.match(invalid.errors.join('\n'), /service ownership/);
});

test('authorization model validates policy-driven access', () => {
  const descriptor = new AuthorizationModelDescriptor();
  const valid = descriptor.validatePolicy(
    new AuthorizationPolicy({
      policyName: 'Reservation Access Policy',
      protectedResource: 'Reservation',
      evaluationInputs: Object.values(POLICY_EVALUATION_INPUTS),
      accessControlPrinciples: Object.values(ACCESS_CONTROL_PRINCIPLES),
      serviceChecks: Object.values(SERVICE_AUTHORIZATION_CHECKS),
      aiCapabilities: Object.values(AI_AUTHORIZATION_CAPABILITIES),
      administrativeOperations: Object.values(ADMINISTRATIVE_AUTHORIZATION_OPERATIONS),
      observabilityEvents: Object.values(AUTHORIZATION_OBSERVABILITY_EVENTS),
      governanceControls: Object.values(AUTHORIZATION_GOVERNANCE_CONTROLS)
    })
  );
  const invalid = descriptor.validatePolicy({
    policyName: '',
    protectedResource: '',
    evaluationInputs: [POLICY_EVALUATION_INPUTS.IDENTITY],
    accessControlPrinciples: [ACCESS_CONTROL_PRINCIPLES.LEAST_PRIVILEGE],
    serviceChecks: [SERVICE_AUTHORIZATION_CHECKS.CALLER_IDENTITY],
    aiCapabilities: [AI_AUTHORIZATION_CAPABILITIES.PROMPT_EXECUTION],
    administrativeOperations: [ADMINISTRATIVE_AUTHORIZATION_OPERATIONS.DEPLOYMENT],
    observabilityEvents: [AUTHORIZATION_OBSERVABILITY_EVENTS.ACCESS_GRANTS],
    governanceControls: [AUTHORIZATION_GOVERNANCE_CONTROLS.PERMISSION_REVIEWS],
    defaultDeny: false,
    policyExternalToBusinessCode: false,
    authenticationSeparated: false,
    consistentEnforcement: false,
    preservesServiceOwnership: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /authorization policy/);
  assert.match(invalid.errors.join('\n'), /requested-action/);
  assert.match(invalid.errors.join('\n'), /default-deny/);
  assert.match(invalid.errors.join('\n'), /resource-ownership/);
  assert.match(invalid.errors.join('\n'), /tool-invocation/);
  assert.match(invalid.errors.join('\n'), /policy-validation/);
  assert.match(invalid.errors.join('\n'), /business implementation/);
});

test('authorization model validates delegated authorization', () => {
  const descriptor = new AuthorizationModelDescriptor();
  const valid = descriptor.validateDelegation(
    new DelegatedAuthorizationRecord({
      delegationName: 'Workflow Delegation',
      delegatingIdentity: 'Reservation Service',
      receivingIdentity: 'Workflow Engine',
      workflow: 'Scheduled confirmation',
      requirements: Object.values(DELEGATED_AUTHORIZATION_REQUIREMENTS)
    })
  );
  const invalid = descriptor.validateDelegation({
    delegationName: '',
    delegatingIdentity: '',
    receivingIdentity: '',
    workflow: '',
    requirements: [DELEGATED_AUTHORIZATION_REQUIREMENTS.EXPLICIT],
    transfersPermissionOwnership: true,
    auditable: false,
    timeLimited: false,
    accountable: false,
    explicit: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /receiving identity/);
  assert.match(invalid.errors.join('\n'), /time-limited/);
  assert.match(invalid.errors.join('\n'), /transfers ownership/);
  assert.match(invalid.errors.join('\n'), /preserve accountability/);
});

test('authorization model reports future capabilities without implementing them', () => {
  const descriptor = new AuthorizationModelDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AUTHORIZATION_CAPABILITIES.RISK_ADAPTIVE_AUTHORIZATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AUTHORIZATION_CAPABILITIES.POLICY_AS_CODE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AUTHORIZATION_CAPABILITIES.PREDICTIVE_ACCESS_RECOMMENDATIONS));
});

test('authorization model assertion rejects incomplete metadata', () => {
  class IncompleteAuthorizationDescriptor extends AuthorizationModelDescriptor {
    protectedResourceCategories() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteAuthorizationDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.AUTHORIZATION_MODEL_INVALID &&
      error.details.errors.some(message => message.includes('protected resource categories'))
  );
});

test('authorization model descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('AuthorizationModelDescriptor');

  assert.ok(descriptor instanceof AuthorizationModelDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
