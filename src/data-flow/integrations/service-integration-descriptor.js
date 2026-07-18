import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  SERVICE_INTEGRATION_CATEGORIES,
  SERVICE_INTEGRATION_LIFECYCLE_STAGES,
  SERVICE_INTEGRATION_PATTERNS,
  SERVICE_INTEGRATION_RELIABILITY_STRATEGIES,
  SERVICE_INTEGRATION_RESPONSE_STATUSES,
  SERVICE_INTEGRATION_SECURITY_CONTROLS,
  SERVICE_INTEGRATION_TELEMETRY_FIELDS
} from '../constants.js';
import { ServiceIntegrationContract } from '../contracts/service-integration-contract.js';
import { ServiceIntegrationLifecycleStage } from '../contracts/service-integration-lifecycle-stage.js';
import { ServiceIntegrationRequest } from '../contracts/service-integration-request.js';
import { ServiceIntegrationResponse } from '../contracts/service-integration-response.js';
import { ServiceIntegrationValidationResult } from '../contracts/service-integration-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.IDENTIFY_CAPABILITY, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Identify what capability is needed without binding to implementation details.'],
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.RESOLVE_TARGET_SERVICE, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Resolve the authoritative service responsible for the capability.'],
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.VALIDATE_CONTRACT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate required inputs, interface compatibility, and authorization.'],
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.EXECUTE_REQUEST, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER, 'Execute communication through an agreed interface.'],
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.RECEIVE_RESPONSE, EXECUTION_PARTICIPANTS.INTEGRATION_LAYER, 'Receive explicit information, results, errors, or business outcomes.'],
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.VALIDATE_RESULT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate response integrity, authorization, business correctness, and contract compliance.'],
  [SERVICE_INTEGRATION_LIFECYCLE_STAGES.RETURN_OUTCOME, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Return a validated outcome to the requesting component.']
]);

const DEFAULT_CONTRACTS = Object.freeze([
  contract('booking.pricing.calculate.v1', SERVICE_INTEGRATION_CATEGORIES.INTERNAL_SERVICE, SERVICE_INTEGRATION_PATTERNS.REQUEST_RESPONSE, 'Calculate pricing', 'booking', 'pricing', ['propertyId', 'checkIn', 'checkOut'], ['price', 'currency']),
  contract('booking.calendar.availability.v1', SERVICE_INTEGRATION_CATEGORIES.INTERNAL_SERVICE, SERVICE_INTEGRATION_PATTERNS.QUERY, 'Retrieve availability', 'booking', 'calendar', ['propertyId', 'checkIn', 'checkOut'], ['available']),
  contract('notification.template.render.v1', SERVICE_INTEGRATION_CATEGORIES.INTERNAL_SERVICE, SERVICE_INTEGRATION_PATTERNS.REQUEST_RESPONSE, 'Render notification template', 'notification', 'template', ['templateId', 'locale'], ['body']),
  contract('payment.gateway.verify.v1', SERVICE_INTEGRATION_CATEGORIES.EXTERNAL, SERVICE_INTEGRATION_PATTERNS.REQUEST_RESPONSE, 'Verify payment', 'payment', 'payment-gateway', ['paymentId'], ['verified'], true),
  contract('notification.email.dispatch.v1', SERVICE_INTEGRATION_CATEGORIES.EXTERNAL, SERVICE_INTEGRATION_PATTERNS.COMMAND, 'Send email', 'notification', 'email-provider', ['recipient', 'message'], ['deliveryId'], true),
  contract('knowledge.memory.lookup.v1', SERVICE_INTEGRATION_CATEGORIES.PLATFORM, SERVICE_INTEGRATION_PATTERNS.QUERY, 'Lookup memory context', 'knowledge', 'memory-service', ['subjectId'], ['memories']),
  contract('booking.policy.evaluate.v1', SERVICE_INTEGRATION_CATEGORIES.PLATFORM, SERVICE_INTEGRATION_PATTERNS.REQUEST_RESPONSE, 'Evaluate policy', 'booking', 'policy-service', ['policyId', 'subject'], ['allowed'])
]);

export class ServiceIntegrationDescriptor {
  constructor({ contracts = DEFAULT_CONTRACTS } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new ServiceIntegrationLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.contracts = new Map();

    for (const integrationContract of contracts) {
      this.registerContract(integrationContract);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  categories() {
    return Object.freeze(Object.values(SERVICE_INTEGRATION_CATEGORIES));
  }

  communicationPatterns() {
    return Object.freeze(Object.values(SERVICE_INTEGRATION_PATTERNS));
  }

  reliabilityStrategies() {
    return Object.freeze(Object.values(SERVICE_INTEGRATION_RELIABILITY_STRATEGIES));
  }

  securityControls() {
    return Object.freeze(Object.values(SERVICE_INTEGRATION_SECURITY_CONTROLS));
  }

  responseStatuses() {
    return Object.freeze(Object.values(SERVICE_INTEGRATION_RESPONSE_STATUSES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(SERVICE_INTEGRATION_TELEMETRY_FIELDS));
  }

  listContracts() {
    return Object.freeze([...this.contracts.values()]);
  }

  registerContract(contractInput) {
    const integrationContract = contractInput instanceof ServiceIntegrationContract
      ? contractInput
      : new ServiceIntegrationContract(contractInput);
    const result = this.validateContract(integrationContract);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_CONTRACT_INVALID,
        'Service integration contract violates ARCH-005-06.',
        { errors: result.errors }
      );
    }

    this.contracts.set(integrationContract.contractId, integrationContract);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_STAGE_NOT_FOUND,
        `Service integration lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getContract(contractId) {
    return this.contracts.get(contractId);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Service integration lifecycle must include ${expectedStages.length} stages in canonical order.`);
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
        DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_LIFECYCLE_INVALID,
        'Service integration lifecycle does not match ARCH-005-06.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateContract(contractInput) {
    const integrationContract = contractInput instanceof ServiceIntegrationContract
      ? contractInput
      : new ServiceIntegrationContract(contractInput);
    const errors = [];

    if (!integrationContract.contractId) errors.push('Service integration contract must have an ID.');
    if (!this.categories().includes(integrationContract.category)) errors.push(`Unsupported service integration category: ${integrationContract.category}.`);
    if (!this.communicationPatterns().includes(integrationContract.pattern)) errors.push(`Unsupported service integration pattern: ${integrationContract.pattern}.`);
    if (!integrationContract.capability) errors.push('Service integration contract must identify a capability.');
    if (!integrationContract.sourceService) errors.push('Service integration contract must identify a source service.');
    if (!integrationContract.targetService) errors.push('Service integration contract must identify a target service.');
    if (!integrationContract.version) errors.push('Service integration contract must be versioned.');
    if (integrationContract.requestFields.length === 0) errors.push('Service integration contract must define a request structure.');
    if (integrationContract.responseFields.length === 0) errors.push('Service integration contract must define a response structure.');
    if (integrationContract.errorModel.length === 0) errors.push('Service integration contract must define an error model.');
    if (integrationContract.publishedInterface !== true) errors.push('Service integration must use published interfaces.');
    if (integrationContract.implementationDetailsExposed === true) errors.push('Service integration must hide implementation details.');
    if (integrationContract.targetInternalStateAccess === true) errors.push('Service integration must not directly access another service internal state.');
    if (integrationContract.observable !== true) errors.push('Service integration must be observable.');

    for (const strategy of integrationContract.reliabilityStrategies) {
      if (!this.reliabilityStrategies().includes(strategy)) errors.push(`Unsupported service integration reliability strategy: ${strategy}.`);
    }

    for (const control of integrationContract.securityControls) {
      if (!this.securityControls().includes(control)) errors.push(`Unsupported service integration security control: ${control}.`);
    }

    for (const requiredControl of [SERVICE_INTEGRATION_SECURITY_CONTROLS.AUTHENTICATION, SERVICE_INTEGRATION_SECURITY_CONTROLS.AUTHORIZATION, SERVICE_INTEGRATION_SECURITY_CONTROLS.AUDITABILITY]) {
      if (!integrationContract.securityControls.includes(requiredControl)) {
        errors.push(`Service integration contract must include ${requiredControl}.`);
      }
    }

    if (
      integrationContract.category === SERVICE_INTEGRATION_CATEGORIES.EXTERNAL &&
      integrationContract.externalProviderIsolated !== true
    ) {
      errors.push('External integrations must isolate provider APIs, SDKs, protocols, and data formats.');
    }

    return validation(errors);
  }

  createRequest(requestInput) {
    const request = requestInput instanceof ServiceIntegrationRequest
      ? requestInput
      : new ServiceIntegrationRequest(requestInput);
    const integrationContract = this.getContract(request.contractId);
    const errors = [];

    if (!integrationContract) errors.push(`Service integration contract is not registered: ${request.contractId}.`);
    if (!request.requestId) errors.push('Service integration request must include a request ID.');
    if (!request.correlationId) errors.push('Service integration request must include a correlation ID.');
    if (integrationContract && request.sourceService !== integrationContract.sourceService) errors.push(`Service integration source must be ${integrationContract.sourceService}.`);
    if (integrationContract && request.targetService !== integrationContract.targetService) errors.push(`Service integration target must be ${integrationContract.targetService}.`);
    if (integrationContract && request.capability !== integrationContract.capability) errors.push(`Service integration request must identify capability ${integrationContract.capability}.`);
    if (request.authorized !== true) errors.push('Service integration request must be authorized before execution.');
    if (request.metadata?.targetInternalStateAccess === true) errors.push('Service integration request must not access target internal state.');

    for (const field of integrationContract?.requestFields ?? []) {
      if (request.payload[field] === undefined || request.payload[field] === null) {
        errors.push(`Service integration request is missing required field ${field}.`);
      }
    }

    if (errors.length > 0) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.SERVICE_INTEGRATION_REQUEST_INVALID,
        'Service integration request violates ARCH-005-06.',
        { errors }
      );
    }

    return request;
  }

  validateResponse(responseInput, requestInput) {
    const response = responseInput instanceof ServiceIntegrationResponse
      ? responseInput
      : new ServiceIntegrationResponse(responseInput);
    const request = requestInput instanceof ServiceIntegrationRequest
      ? requestInput
      : new ServiceIntegrationRequest(requestInput);
    const integrationContract = this.getContract(request.contractId);
    const errors = [];

    if (response.requestId !== request.requestId || response.correlationId !== request.correlationId) {
      errors.push('Service integration response must match the initiating request.');
    }
    if (response.contractId !== request.contractId) errors.push('Service integration response must use the request contract.');
    if (response.sourceService !== request.targetService) errors.push('Service integration response source must be the target service.');
    if (response.targetService !== request.sourceService) errors.push('Service integration response target must be the requesting service.');
    if (!this.responseStatuses().includes(response.status)) errors.push(`Unsupported service integration response status: ${response.status}.`);

    if (response.status === SERVICE_INTEGRATION_RESPONSE_STATUSES.SUCCESS) {
      for (const field of integrationContract?.responseFields ?? []) {
        if (response.data[field] === undefined || response.data[field] === null) {
          errors.push(`Service integration response is missing required field ${field}.`);
        }
      }
    } else if (!response.error) {
      errors.push('Failed service integration responses must include error information.');
    }

    return validation(errors);
  }

  validateBoundary({ sourceService, targetService, targetInternalStateAccess = false, implementationDetailsExposed = false } = {}) {
    const errors = [];

    if (!sourceService) errors.push('Service integration boundary validation requires a source service.');
    if (!targetService) errors.push('Service integration boundary validation requires a target service.');
    if (sourceService === targetService) errors.push('Service integration should connect distinct responsibilities.');
    if (targetInternalStateAccess === true) errors.push('Service integration must prevent direct access to another service internal state.');
    if (implementationDetailsExposed === true) errors.push('Service integration must not depend on another service implementation details.');

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === SERVICE_INTEGRATION_TELEMETRY_FIELDS.FAILURE_REASON) continue;

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Service integration telemetry is missing field ${field}.`);
      }
    }

    if (record?.requestDurationMs !== undefined && record.requestDurationMs < 0) {
      errors.push('Service integration request duration must not be negative.');
    }

    if (record?.retryCount !== undefined && record.retryCount < 0) {
      errors.push('Service integration retry count must not be negative.');
    }

    if (record?.responseStatus && !this.responseStatuses().includes(record.responseStatus)) {
      errors.push(`Unsupported service integration response status: ${record.responseStatus}.`);
    }

    if (record?.success === false && !record.failureReason) {
      errors.push('Failed service integration telemetry must include a failure reason.');
    }

    return validation(errors);
  }
}

function contract(contractId, category, pattern, capability, sourceService, targetService, requestFields, responseFields, externalProviderIsolated = true) {
  return new ServiceIntegrationContract({
    contractId,
    category,
    pattern,
    capability,
    sourceService,
    targetService,
    version: 'v1',
    requestFields,
    responseFields,
    errorModel: ['code', 'message'],
    reliabilityStrategies: [
      SERVICE_INTEGRATION_RELIABILITY_STRATEGIES.RETRY,
      SERVICE_INTEGRATION_RELIABILITY_STRATEGIES.TIMEOUT,
      SERVICE_INTEGRATION_RELIABILITY_STRATEGIES.CIRCUIT_BREAKER
    ],
    securityControls: [
      SERVICE_INTEGRATION_SECURITY_CONTROLS.AUTHENTICATION,
      SERVICE_INTEGRATION_SECURITY_CONTROLS.AUTHORIZATION,
      SERVICE_INTEGRATION_SECURITY_CONTROLS.AUDITABILITY
    ],
    externalProviderIsolated
  });
}

function validation(errors) {
  return new ServiceIntegrationValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
