import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AUTHENTICATION_FACTOR_TYPES,
  AUTHENTICATION_PRINCIPLES,
  CREDENTIAL_MANAGEMENT_CAPABILITIES,
  FUTURE_IDENTITY_CAPABILITIES,
  IDENTITY_ARCHITECTURE_STAGES,
  IDENTITY_CATEGORY_NAMES,
  IDENTITY_GOVERNANCE_CONTROLS,
  IDENTITY_LIFECYCLE_STAGES,
  IDENTITY_OBJECTIVES,
  IDENTITY_OBSERVABILITY_EVENTS,
  IDENTITY_VERIFICATION_TRIGGERS,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SESSION_MANAGEMENT_CAPABILITIES
} from '../constants.js';
import { AuthenticationPolicy } from '../contracts/authentication-policy.js';
import { IdentityCategory } from '../contracts/identity-category.js';
import { IdentityLifecycleRecord } from '../contracts/identity-lifecycle-record.js';
import { IdentityValidationResult } from '../contracts/identity-validation-result.js';

const IDENTITY_FLOW = Object.freeze([
  IDENTITY_ARCHITECTURE_STAGES.IDENTITY,
  IDENTITY_ARCHITECTURE_STAGES.AUTHENTICATION,
  IDENTITY_ARCHITECTURE_STAGES.TRUST_EVALUATION,
  IDENTITY_ARCHITECTURE_STAGES.AUTHORIZATION,
  IDENTITY_ARCHITECTURE_STAGES.BUSINESS_OPERATIONS
]);

const IDENTITY_LIFECYCLE = Object.freeze([
  IDENTITY_LIFECYCLE_STAGES.PROVISION,
  IDENTITY_LIFECYCLE_STAGES.ACTIVATE,
  IDENTITY_LIFECYCLE_STAGES.AUTHENTICATE,
  IDENTITY_LIFECYCLE_STAGES.OPERATE,
  IDENTITY_LIFECYCLE_STAGES.SUSPEND,
  IDENTITY_LIFECYCLE_STAGES.REVOKE,
  IDENTITY_LIFECYCLE_STAGES.RETIRE
]);

const DEFAULT_CATEGORIES = Object.freeze([
  category(IDENTITY_CATEGORY_NAMES.HUMAN_USERS, ['Customers', 'Administrators', 'Operators', 'Developers', 'Support personnel', 'Business users'], 'Individually managed human actor identity.'),
  category(IDENTITY_CATEGORY_NAMES.SERVICES, ['Reservation Service', 'Identity Service', 'Payment Service', 'AI Gateway', 'Workflow Engine'], 'Dedicated service identity for service-to-service communication.'),
  category(IDENTITY_CATEGORY_NAMES.AI_AGENTS, ['AI Orchestrator', 'AI Agents', 'Retrieval Services', 'Embedding Services', 'Knowledge Services'], 'First-class AI component identity with scoped operational permissions.'),
  category(IDENTITY_CATEGORY_NAMES.INFRASTRUCTURE, ['Compute nodes', 'Gateways', 'Load balancers', 'Monitoring systems', 'Backup systems', 'Automation services'], 'Verifiable infrastructure component identity.'),
  category(IDENTITY_CATEGORY_NAMES.EXTERNAL_SYSTEMS, ['Payment providers', 'Email services', 'SMS gateways', 'Enterprise integrations', 'Third-party APIs'], 'Verified external system identity based on established trust relationships.')
]);

export class IdentityAuthenticationDescriptor {
  constructor({ categories = DEFAULT_CATEGORIES } = {}) {
    this.categories = new Map();

    for (const identityCategory of categories) {
      this.registerCategory(identityCategory);
    }
  }

  objectives() {
    return Object.freeze(Object.values(IDENTITY_OBJECTIVES));
  }

  identityFlow() {
    return IDENTITY_FLOW;
  }

  lifecycle() {
    return IDENTITY_LIFECYCLE;
  }

  authenticationPrinciples() {
    return Object.freeze(Object.values(AUTHENTICATION_PRINCIPLES));
  }

  authenticationFactors() {
    return Object.freeze(Object.values(AUTHENTICATION_FACTOR_TYPES));
  }

  credentialCapabilities() {
    return Object.freeze(Object.values(CREDENTIAL_MANAGEMENT_CAPABILITIES));
  }

  sessionCapabilities() {
    return Object.freeze(Object.values(SESSION_MANAGEMENT_CAPABILITIES));
  }

  verificationTriggers() {
    return Object.freeze(Object.values(IDENTITY_VERIFICATION_TRIGGERS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(IDENTITY_OBSERVABILITY_EVENTS));
  }

  governanceControls() {
    return Object.freeze(Object.values(IDENTITY_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_IDENTITY_CAPABILITIES));
  }

  listCategories() {
    return Object.freeze([...this.categories.values()]);
  }

  getCategory(categoryName) {
    return this.categories.get(categoryName);
  }

  registerCategory(categoryInput) {
    const identityCategory = categoryInput instanceof IdentityCategory
      ? categoryInput
      : new IdentityCategory(categoryInput);
    const result = this.validateCategory(identityCategory);

    if (!result.isValid) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.IDENTITY_CATEGORY_INVALID,
        'Identity category violates ARCH-008-02.',
        { errors: result.errors }
      );
    }

    this.categories.set(identityCategory.categoryName, identityCategory);
    return this;
  }

  validateCategory(categoryInput) {
    const identityCategory = categoryInput instanceof IdentityCategory
      ? categoryInput
      : new IdentityCategory(categoryInput);
    const errors = [];

    if (!Object.values(IDENTITY_CATEGORY_NAMES).includes(identityCategory.categoryName)) errors.push(`Unsupported identity category: ${identityCategory.categoryName}.`);
    if (identityCategory.examples.length === 0) errors.push('Identity category must include documented examples.');
    if (!identityCategory.operationalRequirement) errors.push('Identity category must define operational requirements.');
    if (identityCategory.uniquelyIdentifiable !== true) errors.push('Human identities should be uniquely identifiable and independently managed.');
    if (identityCategory.independentlyManaged !== true) errors.push('Identities should be independently managed.');
    if (identityCategory.authenticatesIndependently !== true) errors.push('Every identity category must authenticate independently.');
    if (identityCategory.usesSharedUserCredentials === true) errors.push('Machine authentication should never rely upon shared user credentials.');
    if (identityCategory.trustsNetworkLocation === true) errors.push('Trust is granted to verified identities, not to infrastructure or network location.');
    if (identityCategory.vendorSpecific === true) errors.push('Identity Architecture must remain vendor neutral.');

    return validation(errors);
  }

  validateAuthenticationPolicy(policyInput) {
    const policy = policyInput instanceof AuthenticationPolicy
      ? policyInput
      : new AuthenticationPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Authentication policy must have a name.');
    appendMissing(errors, policy.principles, this.authenticationPrinciples(), 'Authentication should be');
    appendMissing(errors, policy.factors, this.authenticationFactors(), 'Authentication factors should support');
    if (policy.supportsMfa !== true) errors.push('Multi-Factor Authentication should be supported.');
    if (policy.mfaForPrivilegedIdentities !== true) errors.push('MFA should be supported for privileged identities.');
    if (policy.mfaForHighRiskOperations !== true) errors.push('MFA should be supported for high-risk operations.');
    if (policy.supportsMachineCredentials !== true) errors.push('Non-human identities should authenticate using secure machine credentials.');
    if (policy.supportsFederation !== true) errors.push('Identity federation should enable trusted external identity providers.');
    if (policy.preservesLocalAuthorization !== true) errors.push('Federation should preserve local authorization policies.');
    if (policy.authenticatesBeforeAuthorization !== true) errors.push('Authentication should occur before authorization.');
    if (policy.strengthAlignedWithRisk !== true) errors.push('Authentication strength should align with risk.');
    if (policy.vendorSpecific === true) errors.push('Authentication must remain independent of identity provider implementations.');

    return validation(errors);
  }

  validateLifecycle(recordInput) {
    const record = recordInput instanceof IdentityLifecycleRecord
      ? recordInput
      : new IdentityLifecycleRecord(recordInput);
    const errors = [];

    if (!record.identityName) errors.push('Identity lifecycle record must identify the identity.');
    if (!this.categories.has(record.categoryName)) errors.push(`Identity lifecycle references unknown category: ${record.categoryName}.`);
    if (record.stages.length !== this.lifecycle().length) errors.push(`Identity lifecycle must include ${this.lifecycle().length} stages.`);
    this.lifecycle().forEach((stage, index) => {
      if (record.stages[index] !== stage) errors.push(`Identity lifecycle step ${index + 1} must be ${stage}; received ${record.stages[index] ?? 'missing'}.`);
    });
    appendMissing(errors, record.credentials, this.credentialCapabilities(), 'Authentication credentials should support');
    appendMissing(errors, record.sessions, this.sessionCapabilities(), 'Authenticated sessions should support');
    appendMissing(errors, record.verificationTriggers, this.verificationTriggers(), 'Identity verification should occur for');
    appendMissing(errors, record.observabilityEvents, this.observabilityEvents(), 'Identity observability should include');
    appendMissing(errors, record.governanceControls, this.governanceControls(), 'Identity governance must include');
    if (record.controlledLifecycle !== true) errors.push('Identity lifecycle management must be controlled.');
    if (record.auditable !== true) errors.push('Identity management must maintain complete auditability.');
    if (record.permanentTrust === true) errors.push('Sessions represent authenticated identity, not permanent trust.');
    if (record.vendorSpecific === true) errors.push('Identity lifecycle management must remain vendor neutral.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Identity & Authentication must include all documented objectives.');
    if (this.identityFlow().length !== 5) errors.push('Identity & Authentication must include the documented identity architecture flow.');
    if (this.categories.size !== 5) errors.push('Identity & Authentication must include all documented identity categories.');
    if (this.lifecycle().length !== 7) errors.push('Identity & Authentication must include the documented identity lifecycle.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.IDENTITY_AUTHENTICATION_INVALID,
        'Identity & Authentication violates ARCH-008-02.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function category(categoryName, examples, operationalRequirement) {
  return new IdentityCategory({
    categoryName,
    examples,
    operationalRequirement
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new IdentityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
