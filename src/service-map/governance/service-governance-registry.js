import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  SERVICE_GOVERNANCE_SCOPES,
  SERVICE_MAP_ERROR_CODES,
  SERVICE_MATURITY_LEVELS
} from '../constants.js';
import { GovernanceChangeRequest } from '../contracts/governance-change-request.js';
import { GovernanceExceptionRecord } from '../contracts/governance-exception-record.js';
import { GovernanceReviewResult } from '../contracts/governance-review-result.js';
import { ServiceGovernanceProfile } from '../contracts/service-governance-profile.js';

const DEFAULT_PROFILES = Object.freeze(
  Object.values(BUSINESS_SERVICE_NAMES).map(serviceName =>
    new ServiceGovernanceProfile({
      serviceName,
      maturity: SERVICE_MATURITY_LEVELS.PROPOSED,
      architectureRefs: [
        'architecture/003-service-map/02-service-catalog.md',
        'architecture/003-service-map/03-service-ownership.md'
      ],
      publicContractRefs: ['docs/service-communication-implementation.md'],
      testRefs: ['tests/service-map/'],
      operationalGuidanceRefs: ['architecture/010-observability-architecture/'],
      versionHistoryRefs: ['CHANGELOG.md'],
      ownerRef: `${serviceName}-owner`
    })
  )
);

export class ServiceGovernanceRegistry {
  constructor({ profiles = DEFAULT_PROFILES, exceptions = [] } = {}) {
    this.profiles = new Map();
    this.exceptions = new Map();

    for (const profile of profiles) {
      this.registerProfile(profile);
    }

    for (const exception of exceptions) {
      this.registerException(exception);
    }
  }

  registerProfile(profile) {
    if (!Object.values(SERVICE_MATURITY_LEVELS).includes(profile.maturity)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.GOVERNANCE_MATURITY_INVALID,
        `Unknown service maturity "${profile.maturity}".`
      );
    }

    this.profiles.set(profile.serviceName, profile);
    return this;
  }

  listProfiles() {
    return Object.freeze([...this.profiles.values()]);
  }

  getProfile(serviceName) {
    return this.profiles.get(serviceName) ?? null;
  }

  registerException(exception) {
    const validationErrors = [];

    if (!exception.reason || !exception.approvedBy || !exception.adrRef) {
      validationErrors.push({
        code: SERVICE_MAP_ERROR_CODES.GOVERNANCE_EXCEPTION_INVALID,
        message: 'Governance exceptions require reason, approval, and ADR reference.'
      });
    }

    if (exception.expiresAt && Number.isNaN(Date.parse(exception.expiresAt))) {
      validationErrors.push({
        code: SERVICE_MAP_ERROR_CODES.GOVERNANCE_EXCEPTION_INVALID,
        message: 'Governance exception expiration must be a valid date when provided.'
      });
    }

    if (validationErrors.length > 0) {
      throw new PlatformError(validationErrors[0].code, validationErrors[0].message, {
        exception
      });
    }

    this.exceptions.set(exception.exceptionId, exception);
    return this;
  }

  listExceptions() {
    return Object.freeze([...this.exceptions.values()]);
  }

  reviewChange(input) {
    const changeRequest = input instanceof GovernanceChangeRequest
      ? input
      : new GovernanceChangeRequest(input);
    const errors = [];

    for (const field of ['documented', 'reviewable', 'traceable', 'justified', 'reversible']) {
      if (!changeRequest[field]) {
        errors.push(reviewError(`Governance change "${changeRequest.changeId}" must be ${field}.`));
      }
    }

    const checklistFields = [
      'singleDomainOwnership',
      'ownershipUnambiguous',
      'dependenciesMinimal',
      'communicationAppropriate',
      'publicContractsDocumented',
      'versioningUnderstood',
      'documentationUpdated'
    ];

    for (const field of checklistFields) {
      if (!changeRequest[field]) {
        errors.push(reviewError(`Governance checklist item "${field}" is not satisfied.`));
      }
    }

    if (!Object.values(SERVICE_GOVERNANCE_SCOPES).includes(changeRequest.scope)) {
      errors.push(reviewError(`Governance scope "${changeRequest.scope}" is not recognized.`));
    }

    if (changeRequest.adrRequired && !changeRequest.adrRef) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.GOVERNANCE_REVIEW_INVALID,
        message: `Governance change "${changeRequest.changeId}" requires an ADR reference.`
      });
    }

    return errors.length === 0
      ? GovernanceReviewResult.approved(changeRequest)
      : GovernanceReviewResult.rejected({ changeRequest, errors });
  }

  assertArchitectureOwner({ requesterRole }) {
    if (requesterRole !== 'architecture-owner') {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.GOVERNANCE_DECISION_UNAUTHORIZED,
        'Only the architecture owner may approve architectural decisions.'
      );
    }

    return true;
  }

  calculateMetrics({
    dependencyCount = 0,
    circularDependencyViolations = 0,
    breakingChangeFrequency = 0,
    adrCount = 0
  } = {}) {
    const profiles = this.listProfiles();
    const documentationComplete = profiles.filter(profile =>
      profile.architectureRefs.length > 0 &&
      profile.publicContractRefs.length > 0 &&
      profile.testRefs.length > 0 &&
      profile.operationalGuidanceRefs.length > 0 &&
      profile.versionHistoryRefs.length > 0
    ).length;
    const maturityDistribution = {};

    for (const profile of profiles) {
      maturityDistribution[profile.maturity] = (maturityDistribution[profile.maturity] ?? 0) + 1;
    }

    return Object.freeze({
      architectureCompliance: profiles.length,
      documentationCompleteness: profiles.length === 0 ? 1 : documentationComplete / profiles.length,
      dependencyCount,
      circularDependencyViolations,
      breakingChangeFrequency,
      maturityDistribution: Object.freeze(maturityDistribution),
      adrAdoption: adrCount
    });
  }
}

function reviewError(message) {
  return {
    code: SERVICE_MAP_ERROR_CODES.GOVERNANCE_REVIEW_INVALID,
    message
  };
}
