import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  BUSINESS_AUTHORIZATION_ROLES,
  DELEGATED_AUTHORIZATION_REQUIREMENTS,
  FUTURE_AUTHORIZATION_CAPABILITIES,
  POLICY_EVALUATION_INPUTS,
  PROTECTED_RESOURCE_CATEGORIES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SERVICE_AUTHORIZATION_CHECKS,
  TECHNICAL_AUTHORIZATION_ROLES
} from '../constants.js';
import { AuthorizationPermission } from '../contracts/authorization-permission.js';
import { AuthorizationPolicy } from '../contracts/authorization-policy.js';
import { AuthorizationValidationResult } from '../contracts/authorization-validation-result.js';
import { DelegatedAuthorizationRecord } from '../contracts/delegated-authorization-record.js';

const AUTHORIZATION_FLOW = Object.freeze([
  AUTHORIZATION_FLOW_STAGES.IDENTITY,
  AUTHORIZATION_FLOW_STAGES.AUTHENTICATION,
  AUTHORIZATION_FLOW_STAGES.AUTHORIZATION_POLICY,
  AUTHORIZATION_FLOW_STAGES.ACCESS_DECISION,
  AUTHORIZATION_FLOW_STAGES.BUSINESS_OPERATION
]);

const AUTHORIZATION_COMPONENT_FLOW = Object.freeze([
  AUTHORIZATION_COMPONENT_NAMES.AUTHENTICATED_IDENTITY,
  AUTHORIZATION_COMPONENT_NAMES.REQUESTED_RESOURCE,
  AUTHORIZATION_COMPONENT_NAMES.REQUESTED_ACTION,
  AUTHORIZATION_COMPONENT_NAMES.POLICY_EVALUATION,
  AUTHORIZATION_COMPONENT_NAMES.ACCESS_DECISION
]);

export class AuthorizationModelDescriptor {
  objectives() {
    return Object.freeze(Object.values(AUTHORIZATION_OBJECTIVES));
  }

  authorizationFlow() {
    return AUTHORIZATION_FLOW;
  }

  componentFlow() {
    return AUTHORIZATION_COMPONENT_FLOW;
  }

  accessControlPrinciples() {
    return Object.freeze(Object.values(ACCESS_CONTROL_PRINCIPLES));
  }

  protectedResourceCategories() {
    return Object.freeze(Object.values(PROTECTED_RESOURCE_CATEGORIES));
  }

  actions() {
    return Object.freeze(Object.values(AUTHORIZATION_ACTIONS));
  }

  policyEvaluationInputs() {
    return Object.freeze(Object.values(POLICY_EVALUATION_INPUTS));
  }

  businessRoles() {
    return Object.freeze(Object.values(BUSINESS_AUTHORIZATION_ROLES));
  }

  technicalRoles() {
    return Object.freeze(Object.values(TECHNICAL_AUTHORIZATION_ROLES));
  }

  attributeGroups() {
    return Object.freeze(Object.values(ATTRIBUTE_AUTHORIZATION_GROUPS));
  }

  serviceAuthorizationChecks() {
    return Object.freeze(Object.values(SERVICE_AUTHORIZATION_CHECKS));
  }

  aiAuthorizationCapabilities() {
    return Object.freeze(Object.values(AI_AUTHORIZATION_CAPABILITIES));
  }

  administrativeOperations() {
    return Object.freeze(Object.values(ADMINISTRATIVE_AUTHORIZATION_OPERATIONS));
  }

  delegationRequirements() {
    return Object.freeze(Object.values(DELEGATED_AUTHORIZATION_REQUIREMENTS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(AUTHORIZATION_OBSERVABILITY_EVENTS));
  }

  governanceControls() {
    return Object.freeze(Object.values(AUTHORIZATION_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_AUTHORIZATION_CAPABILITIES));
  }

  validatePermission(permissionInput) {
    const permission = permissionInput instanceof AuthorizationPermission
      ? permissionInput
      : new AuthorizationPermission(permissionInput);
    const errors = [];

    if (!permission.identity) errors.push('Permission must identify an authenticated identity.');
    if (!permission.resource) errors.push('Permission must identify a requested resource.');
    if (!this.actions().includes(permission.action)) errors.push(`Unsupported authorization action: ${permission.action}.`);
    if (!this.protectedResourceCategories().includes(permission.resourceCategory)) errors.push(`Unsupported protected resource category: ${permission.resourceCategory}.`);
    if (permission.explicit !== true) errors.push('Permissions should remain explicit and independently auditable.');
    if (permission.leastPrivilege !== true) errors.push('Authorization must enforce least privilege.');
    if (permission.fineGrained !== true) errors.push('Authorization must support fine-grained permissions.');
    if (permission.reviewable !== true) errors.push('Permissions should be reviewable.');
    if (permission.revocable !== true) errors.push('Permissions should be revocable.');
    if (permission.auditable !== true) errors.push('Permissions should remain independently auditable.');
    if (permission.impliedByNetwork === true) errors.push('Permissions should never be implied by network location.');
    if (permission.impliedByServiceOwnership === true) errors.push('Permissions should never be implied by service ownership.');
    if (permission.impliedByDeploymentEnvironment === true) errors.push('Permissions should never be implied by deployment environment.');
    if (permission.vendorSpecific === true) errors.push('Authorization permissions must remain technology independent.');

    return validation(errors);
  }

  validatePolicy(policyInput) {
    const policy = policyInput instanceof AuthorizationPolicy
      ? policyInput
      : new AuthorizationPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Authorization policy must have a name.');
    if (!policy.protectedResource) errors.push('Every protected resource requires an authorization policy.');
    appendMissing(errors, policy.evaluationInputs, this.policyEvaluationInputs(), 'Policy evaluation should consider');
    appendMissing(errors, policy.accessControlPrinciples, this.accessControlPrinciples(), 'Access control must apply');
    appendMissing(errors, policy.serviceChecks, this.serviceAuthorizationChecks(), 'Services should verify');
    appendMissing(errors, policy.aiCapabilities, this.aiAuthorizationCapabilities(), 'AI authorization may govern');
    appendMissing(errors, policy.administrativeOperations, this.administrativeOperations(), 'Administrative authorization must cover');
    appendMissing(errors, policy.observabilityEvents, this.observabilityEvents(), 'Authorization observability should expose');
    appendMissing(errors, policy.governanceControls, this.governanceControls(), 'Authorization governance must include');
    if (policy.defaultDeny !== true) errors.push('Access should be denied unless explicitly permitted.');
    if (policy.policyExternalToBusinessCode !== true) errors.push('Policy logic should remain external to business implementation whenever practical.');
    if (policy.authenticationSeparated !== true) errors.push('Authorization must separate authentication from authorization.');
    if (policy.consistentEnforcement !== true) errors.push('Authorization must support consistent enforcement.');
    if (policy.preservesServiceOwnership !== true) errors.push('Authorization responsibility should remain within the owning service.');
    if (policy.vendorSpecific === true) errors.push('Authorization Model must remain technology independent.');

    return validation(errors);
  }

  validateDelegation(recordInput) {
    const record = recordInput instanceof DelegatedAuthorizationRecord
      ? recordInput
      : new DelegatedAuthorizationRecord(recordInput);
    const errors = [];

    if (!record.delegationName) errors.push('Delegated authorization must have a name.');
    if (!record.delegatingIdentity) errors.push('Delegated authorization must identify the delegating identity.');
    if (!record.receivingIdentity) errors.push('Delegated authorization must identify the receiving identity.');
    if (!record.workflow) errors.push('Delegated authorization must identify the workflow.');
    appendMissing(errors, record.requirements, this.delegationRequirements(), 'Delegation should be');
    if (record.transfersPermissionOwnership === true) errors.push('Delegation never transfers ownership of permissions.');
    if (record.auditable !== true) errors.push('Delegation must remain auditable.');
    if (record.timeLimited !== true) errors.push('Delegation must be time-limited.');
    if (record.accountable !== true) errors.push('Delegation must preserve accountability.');
    if (record.explicit !== true) errors.push('Delegation must be explicit.');
    if (record.vendorSpecific === true) errors.push('Delegation must remain technology independent.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Authorization Model must include all documented objectives.');
    if (this.authorizationFlow().length !== 5) errors.push('Authorization Model must include the documented authorization flow.');
    if (this.componentFlow().length !== 5) errors.push('Authorization Model must include the documented authorization components.');
    if (this.accessControlPrinciples().length !== 4) errors.push('Authorization Model must include documented access control principles.');
    if (this.protectedResourceCategories().length !== 4) errors.push('Authorization Model must include all protected resource categories.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.AUTHORIZATION_MODEL_INVALID,
        'Authorization Model violates ARCH-008-03.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new AuthorizationValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
