import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  API_COMPATIBILITY_TYPES,
  API_CONTRACT_CHARACTERISTICS,
  API_CONTRACT_LIFECYCLE_STAGES,
  API_ERROR_CATEGORIES,
  API_PAGINATION_STRATEGIES,
  API_RESPONSE_STATUSES,
  API_SECURITY_REQUIREMENTS,
  API_TELEMETRY_FIELDS,
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS
} from '../constants.js';
import { ApiContractDefinition } from '../contracts/api-contract-definition.js';
import { ApiLifecycleStage } from '../contracts/api-lifecycle-stage.js';
import { ApiRequestContract } from '../contracts/api-request-contract.js';
import { ApiResponseContract } from '../contracts/api-response-contract.js';
import { ApiValidationResult } from '../contracts/api-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [API_CONTRACT_LIFECYCLE_STAGES.CLIENT_REQUEST, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, 'Submit an explicit self-describing request.'],
  [API_CONTRACT_LIFECYCLE_STAGES.GATEWAY_VALIDATION, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, 'Validate gateway-facing request structure before authorization.'],
  [API_CONTRACT_LIFECYCLE_STAGES.AUTHORIZATION, EXECUTION_PARTICIPANTS.DECISION_ENGINE, 'Confirm the request is authenticated and authorized.'],
  [API_CONTRACT_LIFECYCLE_STAGES.CONTRACT_VALIDATION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate inputs against the owning service contract.'],
  [API_CONTRACT_LIFECYCLE_STAGES.BUSINESS_EXECUTION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Execute the service-owned business capability.'],
  [API_CONTRACT_LIFECYCLE_STAGES.RESPONSE_CONSTRUCTION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Construct a response containing business information, metadata, and correlation.'],
  [API_CONTRACT_LIFECYCLE_STAGES.RESPONSE_VALIDATION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate response structure and contract compliance.'],
  [API_CONTRACT_LIFECYCLE_STAGES.RETURN_RESPONSE, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, 'Return the validated response to the consumer.']
]);

const DEFAULT_CONTRACTS = Object.freeze([
  contract('Reservation API', 'Booking Service', 'Reservation management', ['CreateReservation', 'GetReservation'], ['reservationId', 'guestId', 'propertyId'], ['status', 'reservation']),
  contract('Pricing API', 'Pricing Service', 'Pricing calculation', ['CalculatePrice'], ['propertyId', 'checkIn', 'checkOut'], ['price', 'currency']),
  contract('Guest API', 'Guest Service', 'Guest profile access', ['RegisterGuest', 'GetGuest'], ['guestId'], ['guest']),
  contract('Property API', 'Property Service', 'Property information', ['GetProperty', 'UpdateProperty'], ['propertyId'], ['property'], API_PAGINATION_STRATEGIES.CURSOR, true, true),
  contract('Notification API', 'Notification Service', 'Notification delivery', ['SendNotification'], ['recipient', 'message'], ['deliveryStatus'])
]);

export class ApiContractDescriptor {
  constructor({ contracts = DEFAULT_CONTRACTS } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new ApiLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.contracts = new Map();

    for (const apiContract of contracts) {
      this.registerContract(apiContract);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  characteristics() {
    return Object.freeze(Object.values(API_CONTRACT_CHARACTERISTICS));
  }

  compatibilityTypes() {
    return Object.freeze(Object.values(API_COMPATIBILITY_TYPES));
  }

  errorCategories() {
    return Object.freeze(Object.values(API_ERROR_CATEGORIES));
  }

  securityRequirements() {
    return Object.freeze(Object.values(API_SECURITY_REQUIREMENTS));
  }

  paginationStrategies() {
    return Object.freeze(Object.values(API_PAGINATION_STRATEGIES));
  }

  responseStatuses() {
    return Object.freeze(Object.values(API_RESPONSE_STATUSES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(API_TELEMETRY_FIELDS));
  }

  listContracts() {
    return Object.freeze([...this.contracts.values()]);
  }

  registerContract(contractInput) {
    const apiContract = contractInput instanceof ApiContractDefinition
      ? contractInput
      : new ApiContractDefinition(contractInput);
    const result = this.validateContract(apiContract);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.API_CONTRACT_DEFINITION_INVALID,
        'API contract definition violates ARCH-005-07.',
        { errors: result.errors }
      );
    }

    this.contracts.set(apiContract.contractName, apiContract);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.API_CONTRACT_STAGE_NOT_FOUND,
        `API contract lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getContract(contractName) {
    return this.contracts.get(contractName);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`API contract lifecycle must include ${expectedStages.length} stages in canonical order.`);
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(`Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`);
      }
    });

    return validation(errors);
  }

  assertLifecycle(stages) {
    const result = this.validateLifecycle(stages);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.API_CONTRACT_LIFECYCLE_INVALID,
        'API contract lifecycle does not match ARCH-005-07.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateContract(contractInput) {
    const apiContract = contractInput instanceof ApiContractDefinition
      ? contractInput
      : new ApiContractDefinition(contractInput);
    const errors = [];

    if (!apiContract.contractName) errors.push('API contract must have a name.');
    if (!apiContract.ownerService) errors.push('API contract must have one authoritative owner.');
    if (Array.isArray(apiContract.ownerService)) errors.push('API contract ownership must not be shared.');
    if (!apiContract.capability) errors.push('API contract must represent a business capability.');
    if (!apiContract.version) errors.push('API contract must be versioned.');
    if (apiContract.operations.length === 0) errors.push('API contract must define explicit operations.');
    if (apiContract.requestFields.length === 0) errors.push('API contract must define request structure.');
    if (apiContract.responseFields.length === 0) errors.push('API contract must define response structure.');
    if (apiContract.errorCategories.length === 0) errors.push('API contract must define an error contract.');
    if (!this.compatibilityTypes().includes(apiContract.compatibility)) errors.push(`Unsupported API compatibility type: ${apiContract.compatibility}.`);
    if (apiContract.documented !== true) errors.push('API contract documentation is part of the contract.');
    if (apiContract.implementationDetailsExposed || apiContract.internalStorageExposed || apiContract.frameworkBehaviorExposed) {
      errors.push('API contracts must not expose implementation details, storage models, or framework-specific behavior.');
    }
    if (apiContract.deprecated && !apiContract.deprecationStrategy) {
      errors.push('Deprecated API contracts must define a deprecation strategy.');
    }
    if (apiContract.paginationStrategy && !this.paginationStrategies().includes(apiContract.paginationStrategy)) {
      errors.push(`Unsupported API pagination strategy: ${apiContract.paginationStrategy}.`);
    }

    for (const category of apiContract.errorCategories) {
      if (!this.errorCategories().includes(category)) errors.push(`Unsupported API error category: ${category}.`);
    }

    for (const requirement of apiContract.securityRequirements) {
      if (!this.securityRequirements().includes(requirement)) errors.push(`Unsupported API security requirement: ${requirement}.`);
    }

    for (const requiredRequirement of [API_SECURITY_REQUIREMENTS.AUTHENTICATION, API_SECURITY_REQUIREMENTS.AUTHORIZATION, API_SECURITY_REQUIREMENTS.INPUT_VALIDATION, API_SECURITY_REQUIREMENTS.AUDITABILITY]) {
      if (!apiContract.securityRequirements.includes(requiredRequirement)) {
        errors.push(`API contract must include ${requiredRequirement}.`);
      }
    }

    return validation(errors);
  }

  createRequest(requestInput) {
    const request = requestInput instanceof ApiRequestContract ? requestInput : new ApiRequestContract(requestInput);
    const apiContract = this.getContract(request.contractName);
    const errors = [];

    if (!apiContract) errors.push(`API contract is not registered: ${request.contractName}.`);
    if (!request.requestId) errors.push('API request must include a request ID.');
    if (!request.correlationId) errors.push('API request must include a correlation ID.');
    if (apiContract && request.ownerService !== apiContract.ownerService) errors.push(`API request must target owner ${apiContract.ownerService}.`);
    if (apiContract && !apiContract.operations.includes(request.operation)) errors.push(`API operation is not defined by contract ${request.contractName}: ${request.operation}.`);
    if (request.authenticated !== true) errors.push('API request must include authentication context.');
    if (request.authorized !== true) errors.push('API request must be authorized before business execution.');
    if (request.metadata?.implementationDetailDependency === true) errors.push('API consumers must not depend on internal implementation behavior.');

    for (const field of apiContract?.requestFields ?? []) {
      if (request.parameters[field] === undefined || request.parameters[field] === null) {
        errors.push(`API request is missing required parameter ${field}.`);
      }
    }

    if (errors.length > 0) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.API_REQUEST_INVALID,
        'API request violates ARCH-005-07.',
        { errors }
      );
    }

    return request;
  }

  validateResponse(responseInput, requestInput) {
    const response = responseInput instanceof ApiResponseContract ? responseInput : new ApiResponseContract(responseInput);
    const request = requestInput instanceof ApiRequestContract ? requestInput : new ApiRequestContract(requestInput);
    const apiContract = this.getContract(request.contractName);
    const errors = [];

    if (response.requestId !== request.requestId || response.correlationId !== request.correlationId) {
      errors.push('API response must match the initiating request.');
    }
    if (response.contractName !== request.contractName) errors.push('API response must use the request contract.');
    if (response.operation !== request.operation) errors.push('API response must use the request operation.');
    if (!this.responseStatuses().includes(response.status)) errors.push(`Unsupported API response status: ${response.status}.`);

    if (response.status === API_RESPONSE_STATUSES.SUCCESS) {
      for (const field of apiContract?.responseFields ?? []) {
        if (response.data[field] === undefined || response.data[field] === null) {
          errors.push(`API response is missing required data field ${field}.`);
        }
      }
      if (apiContract?.paginationStrategy && !response.pagination) {
        errors.push('API response for paginated contract must include pagination metadata.');
      }
    } else if (!response.error) {
      errors.push('Failed API responses must include an error contract.');
    }

    if (response.error) {
      if (!response.error.code) errors.push('API error contract must include an error code.');
      if (!this.errorCategories().includes(response.error.category)) errors.push(`Unsupported API error category: ${response.error.category}.`);
      if (!response.error.message) errors.push('API error contract must include a human-readable message.');
      if (response.error.correlationId !== request.correlationId) errors.push('API error contract must preserve correlation ID.');
    }

    return validation(errors);
  }

  validateCompatibility(change) {
    const errors = [];

    if (!this.compatibilityTypes().includes(change?.compatibility)) errors.push(`Unsupported API compatibility type: ${change?.compatibility}.`);
    if (change?.removesRequiredField === true) errors.push('API compatibility must not remove required fields without a new major version.');
    if (change?.changesFieldMeaning === true) errors.push('API compatibility must not change existing field meaning without a new major version.');
    if (change?.altersBusinessSemantics === true) errors.push('API compatibility must not alter business semantics without a new major version.');
    if (change?.unexpectedBehavioralChange === true) errors.push('API compatibility must not introduce unexpected behavioral changes.');
    if (change?.compatibility === API_COMPATIBILITY_TYPES.BREAKING_CHANGE && !change?.newMajorVersion) {
      errors.push('Breaking API contract changes must result in a new major contract version.');
    }
    if (change?.compatibility === API_COMPATIBILITY_TYPES.DEPRECATED && !change?.deprecationStrategy) {
      errors.push('Deprecated API contract changes must include a clear deprecation strategy.');
    }

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === API_TELEMETRY_FIELDS.ERROR_INFORMATION) continue;

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`API telemetry is missing field ${field}.`);
      }
    }

    if (record?.responseTimeMs !== undefined && record.responseTimeMs < 0) {
      errors.push('API response time must not be negative.');
    }

    if (record?.result && !this.responseStatuses().includes(record.result)) {
      errors.push(`Unsupported API telemetry result: ${record.result}.`);
    }

    if (record?.result && record.result !== API_RESPONSE_STATUSES.SUCCESS && !record.errorInformation) {
      errors.push('Failed API telemetry must include error information.');
    }

    return validation(errors);
  }
}

function contract(contractName, ownerService, capability, operations, requestFields, responseFields, paginationStrategy = undefined, supportsFiltering = false, supportsSorting = false) {
  return new ApiContractDefinition({
    contractName,
    ownerService,
    capability,
    version: 'v1',
    operations,
    requestFields,
    responseFields,
    errorCategories: [
      API_ERROR_CATEGORIES.VALIDATION,
      API_ERROR_CATEGORIES.AUTHORIZATION,
      API_ERROR_CATEGORIES.BUSINESS,
      API_ERROR_CATEGORIES.SYSTEM
    ],
    securityRequirements: [
      API_SECURITY_REQUIREMENTS.AUTHENTICATION,
      API_SECURITY_REQUIREMENTS.AUTHORIZATION,
      API_SECURITY_REQUIREMENTS.INPUT_VALIDATION,
      API_SECURITY_REQUIREMENTS.AUDITABILITY
    ],
    paginationStrategy,
    supportsFiltering,
    supportsSorting
  });
}

function validation(errors) {
  return new ApiValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
