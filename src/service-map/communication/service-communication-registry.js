import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  COMMUNICATION_SURFACES,
  EXTERNAL_SERVICE_DEPENDENCIES,
  SERVICE_COMMUNICATION_PATTERNS,
  SERVICE_MAP_ERROR_CODES
} from '../constants.js';
import { CommunicationValidationResult } from '../contracts/communication-validation-result.js';
import { ServiceCommunicationContract } from '../contracts/service-communication-contract.js';
import { ServiceDependencyGraph } from '../dependencies/service-dependency-graph.js';

const DEFAULT_CONTRACTS = Object.freeze([
  query('booking.pricing.price-calculation.v1', BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.PRICING, 'Price calculation'),
  query('booking.calendar.availability-lookup.v1', BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.CALENDAR, 'Availability lookup'),
  command('booking.notification.send-notification.v1', BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.NOTIFICATION, 'Send notification'),
  query('booking.property.configuration-lookup.v1', BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.PROPERTY, 'Fetch property configuration'),
  query('pricing.property.configuration-lookup.v1', BUSINESS_SERVICE_NAMES.PRICING, BUSINESS_SERVICE_NAMES.PROPERTY, 'Fetch property configuration'),
  query('knowledge.property.configuration-lookup.v1', BUSINESS_SERVICE_NAMES.KNOWLEDGE, BUSINESS_SERVICE_NAMES.PROPERTY, 'Fetch property configuration'),
  command('notification.integration.dispatch.v1', BUSINESS_SERVICE_NAMES.NOTIFICATION, EXTERNAL_SERVICE_DEPENDENCIES.INTEGRATION_LAYER, 'Dispatch notification'),
  query('analytics.booking.reporting.v1', BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.BOOKING, 'Reporting'),
  query('analytics.calendar.reporting.v1', BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.CALENDAR, 'Reporting'),
  query('analytics.pricing.reporting.v1', BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.PRICING, 'Reporting'),
  query('analytics.notification.reporting.v1', BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.NOTIFICATION, 'Reporting'),
  command('media.object-storage.upload.v1', BUSINESS_SERVICE_NAMES.MEDIA, EXTERNAL_SERVICE_DEPENDENCIES.OBJECT_STORAGE, 'Media upload'),
  workflow('workflow.booking.process.v1', BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.BOOKING, 'Process automation'),
  workflow('workflow.calendar.process.v1', BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.CALENDAR, 'Workflow execution'),
  workflow('workflow.pricing.process.v1', BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.PRICING, 'Workflow execution'),
  workflow('workflow.notification.process.v1', BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.NOTIFICATION, 'Workflow execution'),
  workflow('workflow.authentication.process.v1', BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.AUTHENTICATION, 'Workflow execution')
]);

const PATTERN_CHARACTERISTICS = Object.freeze({
  [SERVICE_COMMUNICATION_PATTERNS.QUERY]: Object.freeze({
    read: true,
    write: false,
    responseRequired: true,
    synchronous: true
  }),
  [SERVICE_COMMUNICATION_PATTERNS.COMMAND]: Object.freeze({
    read: true,
    write: true,
    responseRequired: true,
    synchronous: true
  }),
  [SERVICE_COMMUNICATION_PATTERNS.DOMAIN_EVENT]: Object.freeze({
    read: false,
    write: false,
    responseRequired: false,
    synchronous: false
  }),
  [SERVICE_COMMUNICATION_PATTERNS.WORKFLOW_ORCHESTRATION]: Object.freeze({
    read: true,
    write: true,
    responseRequired: null,
    synchronous: false
  })
});

export class ServiceCommunicationRegistry {
  constructor({ contracts = DEFAULT_CONTRACTS, dependencyGraph = new ServiceDependencyGraph() } = {}) {
    this.contracts = new Map();
    this.dependencyGraph = dependencyGraph;

    for (const contract of contracts) {
      this.register(contract);
    }
  }

  register(contract) {
    if (this.contracts.has(contract.contractId)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_COMMUNICATION_CONTRACT,
        `Communication contract "${contract.contractId}" already exists.`
      );
    }

    const validation = this.validateContract(contract);
    if (!validation.isValid) {
      throw new PlatformError(
        validation.errors[0].code,
        validation.errors[0].message,
        { contract }
      );
    }

    this.contracts.set(contract.contractId, contract);
    return this;
  }

  listContracts() {
    return Object.freeze([...this.contracts.values()]);
  }

  listContractsFor(sourceServiceName) {
    return Object.freeze(
      this.listContracts().filter(contract => contract.sourceServiceName === sourceServiceName)
    );
  }

  getContract(contractId) {
    const contract = this.contracts.get(contractId);

    if (!contract) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.COMMUNICATION_CONTRACT_NOT_FOUND,
        `Communication contract "${contractId}" is not defined.`
      );
    }

    return contract;
  }

  getPatternCharacteristics(pattern) {
    const characteristics = PATTERN_CHARACTERISTICS[pattern];

    if (!characteristics) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.COMMUNICATION_PATTERN_NOT_ALLOWED,
        `Communication pattern "${pattern}" is not approved.`
      );
    }

    return characteristics;
  }

  validateContract(contract) {
    const errors = [];

    if (!PATTERN_CHARACTERISTICS[contract.pattern]) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.COMMUNICATION_PATTERN_NOT_ALLOWED,
        message: `Communication pattern "${contract.pattern}" is not approved.`
      });
    }

    if (contract.surface !== COMMUNICATION_SURFACES.PUBLIC_CONTRACT) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.COMMUNICATION_ANTI_PATTERN,
        message: `Communication contract "${contract.contractId}" uses prohibited surface "${contract.surface}".`
      });
    }

    if (!contract.version) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.COMMUNICATION_CONTRACT_INVALID,
        message: `Communication contract "${contract.contractId}" must be versioned.`
      });
    }

    if (!contract.observable || !contract.secure) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.COMMUNICATION_CONTRACT_INVALID,
        message: `Communication contract "${contract.contractId}" must be observable and secure.`
      });
    }

    const dependencyValidation = this.dependencyGraph.validateDependency(
      contract.sourceServiceName,
      contract.targetServiceName
    );
    if (!dependencyValidation.isAllowed) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.SERVICE_DEPENDENCY_NOT_ALLOWED,
        message: `${contract.sourceServiceName} may not communicate directly with ${contract.targetServiceName}.`
      });
    }

    if (contract.isQuery && contract.idempotent !== true) {
      errors.push({
        code: SERVICE_MAP_ERROR_CODES.COMMUNICATION_CONTRACT_INVALID,
        message: `Query contract "${contract.contractId}" must be idempotent.`
      });
    }

    if (errors.length > 0) {
      return CommunicationValidationResult.invalid({
        contract,
        errors
      });
    }

    return CommunicationValidationResult.valid(contract);
  }
}

function query(contractId, sourceServiceName, targetServiceName, capability) {
  return contract({
    contractId,
    sourceServiceName,
    targetServiceName,
    pattern: SERVICE_COMMUNICATION_PATTERNS.QUERY,
    capability,
    idempotent: true,
    description: `${sourceServiceName} retrieves ${capability} from ${targetServiceName}.`
  });
}

function command(contractId, sourceServiceName, targetServiceName, capability) {
  return contract({
    contractId,
    sourceServiceName,
    targetServiceName,
    pattern: SERVICE_COMMUNICATION_PATTERNS.COMMAND,
    capability,
    idempotent: false,
    description: `${sourceServiceName} requests ${capability} from ${targetServiceName}.`
  });
}

function workflow(contractId, sourceServiceName, targetServiceName, capability) {
  return contract({
    contractId,
    sourceServiceName,
    targetServiceName,
    pattern: SERVICE_COMMUNICATION_PATTERNS.WORKFLOW_ORCHESTRATION,
    capability,
    idempotent: true,
    description: `${sourceServiceName} orchestrates ${capability} through ${targetServiceName}.`
  });
}

function contract(input) {
  return new ServiceCommunicationContract({
    version: 'v1',
    surface: COMMUNICATION_SURFACES.PUBLIC_CONTRACT,
    observable: true,
    secure: true,
    ...input
  });
}
