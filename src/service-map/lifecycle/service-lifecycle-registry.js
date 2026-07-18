import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  SERVICE_LIFECYCLE_CHECKPOINTS,
  SERVICE_LIFECYCLE_STAGES,
  SERVICE_MAP_ERROR_CODES
} from '../constants.js';
import { LifecycleTransitionResult } from '../contracts/lifecycle-transition-result.js';
import { ServiceLifecycleRecord } from '../contracts/service-lifecycle-record.js';

const STAGE_ORDER = Object.freeze([
  SERVICE_LIFECYCLE_STAGES.PROPOSAL,
  SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
  SERVICE_LIFECYCLE_STAGES.IMPLEMENTATION,
  SERVICE_LIFECYCLE_STAGES.TESTING,
  SERVICE_LIFECYCLE_STAGES.DEPLOYMENT,
  SERVICE_LIFECYCLE_STAGES.OPERATION,
  SERVICE_LIFECYCLE_STAGES.EVOLUTION,
  SERVICE_LIFECYCLE_STAGES.DEPRECATION,
  SERVICE_LIFECYCLE_STAGES.RETIREMENT
]);

const CHECKPOINTS_BY_STAGE = Object.freeze({
  [SERVICE_LIFECYCLE_STAGES.PROPOSAL]: SERVICE_LIFECYCLE_CHECKPOINTS.PROPOSAL_APPROVAL,
  [SERVICE_LIFECYCLE_STAGES.ARCHITECTURE]: SERVICE_LIFECYCLE_CHECKPOINTS.ARCHITECTURE_REVIEW,
  [SERVICE_LIFECYCLE_STAGES.DEPLOYMENT]: SERVICE_LIFECYCLE_CHECKPOINTS.PRODUCTION_READINESS_REVIEW,
  [SERVICE_LIFECYCLE_STAGES.DEPRECATION]: SERVICE_LIFECYCLE_CHECKPOINTS.DEPRECATION_APPROVAL,
  [SERVICE_LIFECYCLE_STAGES.RETIREMENT]: SERVICE_LIFECYCLE_CHECKPOINTS.RETIREMENT_APPROVAL
});

const DEFAULT_RECORDS = Object.freeze(
  Object.values(BUSINESS_SERVICE_NAMES).map(serviceName =>
    new ServiceLifecycleRecord({
      serviceName,
      stage: SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
      businessOwner: `${serviceName}-business-owner`,
      technicalOwner: `${serviceName}-technical-owner`,
      architecturalOwner: 'architecture',
      documentationRefs: [`architecture/003-service-map/02-service-catalog.md#${serviceName}`],
      testRefs: ['tests/service-map/'],
      observabilityRefs: ['architecture/010-observability-architecture/'],
      securityRefs: ['architecture/008-security-architecture/'],
      retirementStrategy: 'Retirement requires architecture review, dependency removal, documentation update, and historical record preservation.',
      metrics: {
        serviceAgeDays: 0,
        deploymentFrequency: 0,
        meanTimeToRecoveryMinutes: null,
        incidentCount: 0,
        consumerCount: 0,
        versionAdoption: {},
        deprecationStatus: 'active'
      }
    })
  )
);

export class ServiceLifecycleRegistry {
  constructor({ records = DEFAULT_RECORDS } = {}) {
    this.records = new Map();

    for (const record of records) {
      this.register(record);
    }
  }

  register(record) {
    if (this.records.has(record.serviceName)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE_LIFECYCLE_RECORD,
        `Lifecycle record for service "${record.serviceName}" already exists.`
      );
    }

    this.#assertManaged(record);
    this.records.set(record.serviceName, record);
    return this;
  }

  listRecords() {
    return Object.freeze([...this.records.values()]);
  }

  getRecord(serviceName) {
    const record = this.records.get(serviceName);

    if (!record) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_RECORD_NOT_FOUND,
        `Lifecycle record for service "${serviceName}" is not defined.`
      );
    }

    return record;
  }

  getStageOrder() {
    return STAGE_ORDER;
  }

  getGovernanceCheckpoint(stage) {
    return CHECKPOINTS_BY_STAGE[stage] ?? null;
  }

  validateTransition(serviceName, toStage) {
    const record = this.getRecord(serviceName);
    const fromIndex = STAGE_ORDER.indexOf(record.stage);
    const toIndex = STAGE_ORDER.indexOf(toStage);

    if (toIndex === -1 || fromIndex === -1 || toIndex < fromIndex || toIndex > fromIndex + 1) {
      return LifecycleTransitionResult.rejected({
        fromStage: record.stage,
        toStage,
        record,
        errors: [
          {
            code: SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_TRANSITION_INVALID,
            message: `Lifecycle transition from ${record.stage} to ${toStage} is not allowed.`
          }
        ]
      });
    }

    const requirements = this.validateStageRequirements(record, toStage);
    if (requirements.length > 0) {
      return LifecycleTransitionResult.rejected({
        fromStage: record.stage,
        toStage,
        record,
        errors: requirements
      });
    }

    return LifecycleTransitionResult.allowed({
      fromStage: record.stage,
      toStage,
      record
    });
  }

  validateStageRequirements(record, stage = record.stage) {
    const errors = [];

    if (!record.businessOwner || !record.technicalOwner || !record.architecturalOwner) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_OWNER_MISSING,
        message: `Service "${record.serviceName}" must have business, technical, and architectural owners.`
      });
    }

    if (isAtLeast(stage, SERVICE_LIFECYCLE_STAGES.ARCHITECTURE) && record.documentationRefs.length === 0) {
      errors.push(requirementError(record.serviceName, 'documentation'));
    }

    if (isAtLeast(stage, SERVICE_LIFECYCLE_STAGES.TESTING) && record.testRefs.length === 0) {
      errors.push(requirementError(record.serviceName, 'automated tests'));
    }

    if (isAtLeast(stage, SERVICE_LIFECYCLE_STAGES.OPERATION) && record.observabilityRefs.length === 0) {
      errors.push(requirementError(record.serviceName, 'observability'));
    }

    if (isAtLeast(stage, SERVICE_LIFECYCLE_STAGES.IMPLEMENTATION) && record.securityRefs.length === 0) {
      errors.push(requirementError(record.serviceName, 'security controls'));
    }

    if (isAtLeast(stage, SERVICE_LIFECYCLE_STAGES.RETIREMENT) && !record.retirementStrategy) {
      errors.push(requirementError(record.serviceName, 'retirement strategy'));
    }

    return Object.freeze(errors);
  }

  #assertManaged(record) {
    const errors = this.validateStageRequirements(record);

    if (errors.length > 0) {
      throw new PlatformError(errors[0].code, errors[0].message, { record });
    }
  }
}

function isAtLeast(stage, minimumStage) {
  return STAGE_ORDER.indexOf(stage) >= STAGE_ORDER.indexOf(minimumStage);
}

function requirementError(serviceName, requirement) {
  return {
    code: SERVICE_MAP_ERROR_CODES.SERVICE_LIFECYCLE_REQUIREMENT_MISSING,
    message: `Service "${serviceName}" is missing required ${requirement}.`
  };
}
