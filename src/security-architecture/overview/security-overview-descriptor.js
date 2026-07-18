import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_SECURITY_OVERVIEW_CAPABILITIES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SECURITY_DOMAIN_NAMES,
  SECURITY_GOVERNANCE_ACTIVITIES,
  SECURITY_LIFECYCLE_STAGES,
  SECURITY_OBJECTIVES,
  SECURITY_PRINCIPLES,
  SECURITY_RESPONSIBILITY_OWNERS,
  SECURITY_RISK_FACTORS,
  TRUST_BOUNDARY_NAMES
} from '../constants.js';
import { SecurityDomain } from '../contracts/security-domain.js';
import { SecurityResponsibility } from '../contracts/security-responsibility.js';
import { SecurityRiskAssessment } from '../contracts/security-risk-assessment.js';
import { SecurityValidationResult } from '../contracts/security-validation-result.js';
import { TrustBoundary } from '../contracts/trust-boundary.js';

const SECURITY_DOMAIN_SEQUENCE = Object.freeze([
  SECURITY_DOMAIN_NAMES.IDENTITY,
  SECURITY_DOMAIN_NAMES.AUTHENTICATION,
  SECURITY_DOMAIN_NAMES.AUTHORIZATION,
  SECURITY_DOMAIN_NAMES.TRUST,
  SECURITY_DOMAIN_NAMES.SECRETS,
  SECURITY_DOMAIN_NAMES.CRYPTOGRAPHY,
  SECURITY_DOMAIN_NAMES.AI_SECURITY,
  SECURITY_DOMAIN_NAMES.PLATFORM_SECURITY,
  SECURITY_DOMAIN_NAMES.COMPLIANCE,
  SECURITY_DOMAIN_NAMES.GOVERNANCE
]);

const SECURITY_LIFECYCLE = Object.freeze([
  SECURITY_LIFECYCLE_STAGES.DESIGN,
  SECURITY_LIFECYCLE_STAGES.DEVELOP,
  SECURITY_LIFECYCLE_STAGES.TEST,
  SECURITY_LIFECYCLE_STAGES.DEPLOY,
  SECURITY_LIFECYCLE_STAGES.OPERATE,
  SECURITY_LIFECYCLE_STAGES.MONITOR,
  SECURITY_LIFECYCLE_STAGES.IMPROVE
]);

const DEFAULT_DOMAINS = Object.freeze([
  domain(SECURITY_DOMAIN_NAMES.IDENTITY, 'Verified actor identity across users, services, AI agents, infrastructure, and external systems.'),
  domain(SECURITY_DOMAIN_NAMES.AUTHENTICATION, 'Verification that each actor is who it claims to be.'),
  domain(SECURITY_DOMAIN_NAMES.AUTHORIZATION, 'Control of allowed actions after identity is verified.'),
  domain(SECURITY_DOMAIN_NAMES.TRUST, 'Continuous trust evaluation rather than network-location trust.'),
  domain(SECURITY_DOMAIN_NAMES.SECRETS, 'Protection of operational secrets and privileged material.'),
  domain(SECURITY_DOMAIN_NAMES.CRYPTOGRAPHY, 'Protection of communication and sensitive information.'),
  domain(SECURITY_DOMAIN_NAMES.AI_SECURITY, 'Protection of AI decisions, knowledge, and agent behavior.'),
  domain(SECURITY_DOMAIN_NAMES.PLATFORM_SECURITY, 'Platform-wide operational and infrastructure security concerns.'),
  domain(SECURITY_DOMAIN_NAMES.COMPLIANCE, 'Validation against legal, contractual, and organizational obligations.'),
  domain(SECURITY_DOMAIN_NAMES.GOVERNANCE, 'Security oversight, policy, reviews, metrics, and continuous improvement.')
]);

const DEFAULT_BOUNDARIES = Object.freeze([
  boundary(TRUST_BOUNDARY_NAMES.INTERNET_EDGE, 'Internet', 'Edge'),
  boundary(TRUST_BOUNDARY_NAMES.CLIENT_GATEWAY, 'Client', 'Gateway'),
  boundary(TRUST_BOUNDARY_NAMES.GATEWAY_SERVICES, 'Gateway', 'Services'),
  boundary(TRUST_BOUNDARY_NAMES.SERVICE_SERVICE, 'Service', 'Service'),
  boundary(TRUST_BOUNDARY_NAMES.SERVICE_DATA, 'Service', 'Data'),
  boundary(TRUST_BOUNDARY_NAMES.AI_EXTERNAL_MODELS, 'AI', 'External Models'),
  boundary(TRUST_BOUNDARY_NAMES.PLATFORM_THIRD_PARTY, 'Platform', 'Third-party Systems'),
  boundary(TRUST_BOUNDARY_NAMES.PRODUCTION_ADMIN, 'Production', 'Administrative Operations')
]);

const DEFAULT_RESPONSIBILITIES = Object.freeze([
  responsibility('Identity', SECURITY_RESPONSIBILITY_OWNERS.SECURITY_PLATFORM),
  responsibility('Authentication', SECURITY_RESPONSIBILITY_OWNERS.IDENTITY_SERVICES),
  responsibility('Authorization', SECURITY_RESPONSIBILITY_OWNERS.BUSINESS_SERVICES),
  responsibility('Data Protection', SECURITY_RESPONSIBILITY_OWNERS.SERVICE_OWNERS),
  responsibility('Infrastructure Security', SECURITY_RESPONSIBILITY_OWNERS.PLATFORM_OPERATIONS),
  responsibility('AI Security', SECURITY_RESPONSIBILITY_OWNERS.AI_PLATFORM),
  responsibility('Monitoring', SECURITY_RESPONSIBILITY_OWNERS.OBSERVABILITY_PLATFORM),
  responsibility('Governance', SECURITY_RESPONSIBILITY_OWNERS.SECURITY_ARCHITECTURE)
]);

export class SecurityOverviewDescriptor {
  constructor({ domains = DEFAULT_DOMAINS, boundaries = DEFAULT_BOUNDARIES, responsibilities = DEFAULT_RESPONSIBILITIES } = {}) {
    this.domains = new Map();
    this.boundaries = new Map();
    this.responsibilities = new Map();

    for (const securityDomain of domains) this.registerDomain(securityDomain);
    for (const trustBoundary of boundaries) this.registerBoundary(trustBoundary);
    for (const securityResponsibility of responsibilities) this.registerResponsibility(securityResponsibility);
  }

  objectives() {
    return Object.freeze(Object.values(SECURITY_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(SECURITY_PRINCIPLES));
  }

  domainSequence() {
    return SECURITY_DOMAIN_SEQUENCE;
  }

  lifecycle() {
    return SECURITY_LIFECYCLE;
  }

  riskFactors() {
    return Object.freeze(Object.values(SECURITY_RISK_FACTORS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(SECURITY_GOVERNANCE_ACTIVITIES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_SECURITY_OVERVIEW_CAPABILITIES));
  }

  listDomains() {
    return Object.freeze([...this.domains.values()]);
  }

  listBoundaries() {
    return Object.freeze([...this.boundaries.values()]);
  }

  listResponsibilities() {
    return Object.freeze([...this.responsibilities.values()]);
  }

  getDomain(domainName) {
    return this.domains.get(domainName);
  }

  registerDomain(domainInput) {
    const securityDomain = domainInput instanceof SecurityDomain ? domainInput : new SecurityDomain(domainInput);
    const result = this.validateDomain(securityDomain);

    if (!result.isValid) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.SECURITY_DOMAIN_INVALID,
        'Security domain violates ARCH-008-01.',
        { errors: result.errors }
      );
    }

    this.domains.set(securityDomain.domainName, securityDomain);
    return this;
  }

  registerBoundary(boundaryInput) {
    const trustBoundary = boundaryInput instanceof TrustBoundary ? boundaryInput : new TrustBoundary(boundaryInput);
    const result = this.validateBoundary(trustBoundary);

    if (!result.isValid) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.TRUST_BOUNDARY_INVALID,
        'Trust boundary violates ARCH-008-01.',
        { errors: result.errors }
      );
    }

    this.boundaries.set(trustBoundary.boundaryName, trustBoundary);
    return this;
  }

  registerResponsibility(responsibilityInput) {
    const securityResponsibility = responsibilityInput instanceof SecurityResponsibility
      ? responsibilityInput
      : new SecurityResponsibility(responsibilityInput);
    const result = this.validateResponsibility(securityResponsibility);

    if (!result.isValid) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.SECURITY_RESPONSIBILITY_INVALID,
        'Security responsibility violates ARCH-008-01.',
        { errors: result.errors }
      );
    }

    this.responsibilities.set(securityResponsibility.responsibility, securityResponsibility);
    return this;
  }

  validateDomain(domainInput) {
    const securityDomain = domainInput instanceof SecurityDomain ? domainInput : new SecurityDomain(domainInput);
    const errors = [];

    if (!Object.values(SECURITY_DOMAIN_NAMES).includes(securityDomain.domainName)) errors.push(`Unsupported security domain: ${securityDomain.domainName}.`);
    if (!securityDomain.responsibility) errors.push('Security domain must define its responsibility.');
    if (securityDomain.protectsPlatformWide !== true) errors.push('Security is a platform-wide architectural capability.');
    if (securityDomain.participatesInZeroTrust !== true) errors.push('Every security domain must participate in Zero Trust.');
    if (securityDomain.supportsGovernance !== true) errors.push('Every security domain must support governance and review.');
    if (securityDomain.vendorSpecific === true) errors.push('Security Architecture must remain vendor neutral.');

    return validation(errors);
  }

  validateBoundary(boundaryInput) {
    const trustBoundary = boundaryInput instanceof TrustBoundary ? boundaryInput : new TrustBoundary(boundaryInput);
    const errors = [];

    if (!Object.values(TRUST_BOUNDARY_NAMES).includes(trustBoundary.boundaryName)) errors.push(`Unsupported trust boundary: ${trustBoundary.boundaryName}.`);
    if (!trustBoundary.source) errors.push('Trust boundary must define a source.');
    if (!trustBoundary.target) errors.push('Trust boundary must define a target.');
    if (trustBoundary.controls.length === 0) errors.push('Crossing a trust boundary requires appropriate security controls.');
    if (trustBoundary.authenticated !== true) errors.push('Every access request should be authenticated.');
    if (trustBoundary.authorized !== true) errors.push('Every access request should be authorized.');
    if (trustBoundary.evaluated !== true) errors.push('Every access request should be evaluated.');
    if (trustBoundary.loggedWhereAppropriate !== true) errors.push('Every access request should be logged where appropriate.');
    if (trustBoundary.trustsNetworkLocation === true) errors.push('Trust should be based on verified identity rather than network location.');
    if (trustBoundary.vendorSpecific === true) errors.push('Trust boundaries must remain independent of specific security products.');

    return validation(errors);
  }

  validateResponsibility(responsibilityInput) {
    const securityResponsibility = responsibilityInput instanceof SecurityResponsibility
      ? responsibilityInput
      : new SecurityResponsibility(responsibilityInput);
    const errors = [];

    if (!securityResponsibility.responsibility) errors.push('Security responsibility must be named.');
    if (!Object.values(SECURITY_RESPONSIBILITY_OWNERS).includes(securityResponsibility.primaryOwner)) errors.push(`Unsupported security responsibility owner: ${securityResponsibility.primaryOwner}.`);
    if (securityResponsibility.clearlyAssigned !== true) errors.push('Security responsibilities should be clearly assigned.');
    if (securityResponsibility.continuouslyReviewed !== true) errors.push('Security responsibilities should be continuously reviewed.');
    if (securityResponsibility.changesBusinessResponsibility === true) errors.push('ARCH-008 protects previous capabilities without changing their responsibilities.');
    if (securityResponsibility.vendorSpecific === true) errors.push('Security responsibility ownership must remain vendor neutral.');

    return validation(errors);
  }

  validateRiskAssessment(assessmentInput) {
    const assessment = assessmentInput instanceof SecurityRiskAssessment
      ? assessmentInput
      : new SecurityRiskAssessment(assessmentInput);
    const errors = [];

    if (!assessment.assessmentName) errors.push('Security risk assessment must have a name.');
    appendMissing(errors, assessment.riskFactors, this.riskFactors(), 'Risk evaluation must consider');
    if (assessment.controlsProportional !== true) errors.push('Security controls should be proportional to the associated risk.');
    if (assessment.includesSecurityReview !== true) errors.push('Every new capability should include an associated security review.');
    if (assessment.enablesBusinessOperations !== true) errors.push('Security should enable business operations while reducing risk.');
    if (assessment.unnecessarilyRestrictsCapabilities === true) errors.push('Security should not unnecessarily restrict platform capabilities.');
    if (assessment.vendorSpecific === true) errors.push('Risk management must remain independent of specific security products.');

    return validation(errors);
  }

  validateGovernance(activities = []) {
    const errors = [];

    appendMissing(errors, activities, this.governanceActivities(), 'Security governance must include');

    return validation(errors);
  }

  assertOverview() {
    const errors = [];

    if (this.objectives().length !== 6) errors.push('Security Overview must include all documented security objectives.');
    if (this.principles().length !== 7) errors.push('Security Overview must include all documented security principles.');
    if (this.domains.size !== 10) errors.push('Security Overview must include all documented security domains.');
    if (this.boundaries.size !== 8) errors.push('Security Overview must include all documented trust boundaries.');
    if (this.responsibilities.size !== 8) errors.push('Security Overview must include all documented shared responsibilities.');
    if (this.lifecycle().length !== 7) errors.push('Security Overview must include the documented security lifecycle.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.SECURITY_OVERVIEW_INVALID,
        'Security Overview violates ARCH-008-01.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function domain(domainName, responsibility) {
  return new SecurityDomain({ domainName, responsibility });
}

function boundary(boundaryName, source, target) {
  return new TrustBoundary({
    boundaryName,
    source,
    target,
    controls: [
      SECURITY_PRINCIPLES.ZERO_TRUST,
      SECURITY_PRINCIPLES.LEAST_PRIVILEGE,
      SECURITY_PRINCIPLES.CONTINUOUS_VERIFICATION
    ]
  });
}

function responsibility(responsibilityName, primaryOwner) {
  return new SecurityResponsibility({
    responsibility: responsibilityName,
    primaryOwner
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new SecurityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
