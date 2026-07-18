import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_SERVICE_CHARACTERISTICS,
  DOMAIN_SERVICE_COLLABORATION_TARGETS,
  DOMAIN_SERVICE_INTERACTION_RULES,
  DOMAIN_SERVICE_NAMES,
  FUTURE_DOMAIN_SERVICE_CANDIDATES
} from '../constants.js';
import { DomainServiceCollaboration } from '../contracts/domain-service-collaboration.js';
import { DomainServiceDefinition } from '../contracts/domain-service-definition.js';
import { DomainServiceOperation } from '../contracts/domain-service-operation.js';
import { DomainServiceValidationResult } from '../contracts/domain-service-validation-result.js';

const DEFAULT_DOMAIN_SERVICES = Object.freeze([
  service(DOMAIN_SERVICE_NAMES.RESERVATION_VALIDATION, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', [
    'Reservation eligibility',
    'Reservation validation',
    'Reservation conflict detection',
    'Reservation policy evaluation'
  ], ['Evaluate Reservation Eligibility', 'Validate Reservation Policy', 'Detect Reservation Conflict'], [
    'Reservation policies',
    'Cancellation policies'
  ], ['Reservation', 'Property', 'Pricing'], ['Date Range', 'Guest Count', 'Money']),
  service(DOMAIN_SERVICE_NAMES.PRICING_CALCULATION, BOUNDED_CONTEXT_NAMES.PRICING, 'Pricing Service', [
    'Price calculation',
    'Discount application',
    'Seasonal pricing',
    'Promotional pricing',
    'Pricing validation'
  ], ['Calculate Price', 'Apply Discount', 'Validate Pricing'], ['Pricing policies'], ['Reservation'], ['Money', 'Percentage', 'Date Range']),
  service(DOMAIN_SERVICE_NAMES.AVAILABILITY_EVALUATION, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', [
    'Date availability',
    'Capacity validation',
    'Maintenance windows',
    'Booking conflicts',
    'Operational restrictions'
  ], ['Evaluate Availability', 'Validate Capacity', 'Detect Maintenance Conflict'], ['Capacity policies'], ['Property', 'Reservation'], ['Date Range', 'Guest Count']),
  service(DOMAIN_SERVICE_NAMES.PAYMENT_AUTHORIZATION, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', [
    'Payment authorization',
    'Settlement validation',
    'Refund eligibility',
    'Currency validation'
  ], ['Authorize Payment', 'Validate Settlement', 'Evaluate Refund Eligibility'], ['Refund policies'], ['Payment'], ['Money', 'Currency']),
  service(DOMAIN_SERVICE_NAMES.NOTIFICATION_COMPOSITION, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', [
    'Business event interpretation',
    'Communication preference evaluation',
    'Delivery channel selection',
    'Notification policy evaluation'
  ], ['Compose Notification', 'Evaluate Notification Policy'], ['Notification policies'], ['Notification', 'Guest'], ['Language']),
  service(DOMAIN_SERVICE_NAMES.KNOWLEDGE_SERVICE, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', [
    'Knowledge retrieval',
    'Semantic matching',
    'Context assembly',
    'Document ranking',
    'Knowledge validation'
  ], ['Retrieve Knowledge', 'Rank Documents', 'Assemble Context'], ['Knowledge validation'], ['Knowledge Item'], [])
]);

export class DomainServiceRegistry {
  constructor({ domainServices = DEFAULT_DOMAIN_SERVICES } = {}) {
    this.domainServices = new Map();

    for (const domainService of domainServices) {
      this.registerService(domainService);
    }
  }

  characteristics() {
    return Object.freeze(Object.values(DOMAIN_SERVICE_CHARACTERISTICS));
  }

  interactionRules() {
    return Object.freeze(Object.values(DOMAIN_SERVICE_INTERACTION_RULES));
  }

  collaborationTargets() {
    return Object.freeze(Object.values(DOMAIN_SERVICE_COLLABORATION_TARGETS));
  }

  futureCandidates() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_SERVICE_CANDIDATES));
  }

  listServices() {
    return Object.freeze([...this.domainServices.values()]);
  }

  registerService(serviceInput) {
    const domainService = serviceInput instanceof DomainServiceDefinition
      ? serviceInput
      : new DomainServiceDefinition(serviceInput);
    const result = this.validateDefinition(domainService);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_SERVICE_DEFINITION_INVALID,
        'Domain service definition violates ARCH-006-06.',
        { errors: result.errors }
      );
    }

    this.domainServices.set(domainService.serviceName, domainService);
    return this;
  }

  getService(serviceName) {
    const domainService = this.domainServices.get(serviceName);

    if (!domainService) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_SERVICE_NOT_FOUND,
        `Domain service "${serviceName}" is not defined.`
      );
    }

    return domainService;
  }

  validateDefinition(serviceInput) {
    const domainService = serviceInput instanceof DomainServiceDefinition
      ? serviceInput
      : new DomainServiceDefinition(serviceInput);
    const errors = [];

    if (!domainService.serviceName) errors.push('Domain Service must have a business name.');
    if (!domainService.owningContext) errors.push('Domain Service must operate within one bounded context.');
    if (Array.isArray(domainService.owningContext)) errors.push('Domain Service bounded context ownership must not be shared.');
    if (!domainService.ownerService) errors.push('Domain Service must have one owner service.');
    if (domainService.responsibilities.length === 0) errors.push('Domain Service must represent business behavior.');
    if (domainService.businessOperations.length === 0) errors.push('Domain Service must define business operations.');
    if (domainService.businessRules.length === 0) errors.push('Domain Service must protect business rules.');
    if (domainService.stateless !== true) errors.push('Domain Services must remain stateless.');
    if (domainService.ownsBusinessState === true) errors.push('Domain Services must avoid persistent business state ownership.');
    if (domainService.applicationService === true) errors.push('Domain Services perform business reasoning rather than application coordination.');
    if (domainService.infrastructureConcern === true) errors.push('Domain Services express business expertise, not technical infrastructure.');
    if (domainService.bypassesAggregateRoot === true) errors.push('Domain Services must never bypass Aggregate Roots.');
    if (containsTechnicalTerm(domainService.serviceName) || domainService.responsibilities.some(containsTechnicalTerm)) {
      errors.push('Domain Services must preserve ubiquitous language rather than technical terminology.');
    }

    return validation(errors);
  }

  validateOperation(operationInput) {
    const operation = operationInput instanceof DomainServiceOperation
      ? operationInput
      : new DomainServiceOperation(operationInput);
    const domainService = this.domainServices.get(operation.serviceName);
    const errors = [];

    if (!domainService) errors.push(`Domain Service operation references unknown service: ${operation.serviceName}.`);
    if (!operation.operationName) errors.push('Domain Service operation must identify business behavior.');
    if (domainService && operation.owningContext !== domainService.owningContext) {
      errors.push(`Domain Service operation must remain within ${domainService.owningContext} bounded context.`);
    }
    if (operation.inputs.length === 0) errors.push('Domain Service operation must operate on Entities, Aggregates, or Value Objects.');
    if (operation.businessRules.length === 0) errors.push('Domain Service operation must centralize business rules.');
    if (operation.modifiesAggregateThroughRoot !== true) errors.push('Domain Service operation must modify Aggregates through Aggregate behavior.');
    if (operation.ownsBusinessState === true) errors.push('Domain Service operation must not own business state.');
    if (operation.coordinatesApplicationFlow === true) errors.push('Application Services coordinate execution; Domain Services perform business reasoning.');
    if (operation.invokesInfrastructure === true) errors.push('Domain Service operation must not implement infrastructure concerns.');
    if (operation.bypassesAggregateRoot === true) errors.push('Domain Service operation must never bypass Aggregate Roots.');

    return validation(errors);
  }

  validateCollaboration(collaborationInput) {
    const collaboration = collaborationInput instanceof DomainServiceCollaboration
      ? collaborationInput
      : new DomainServiceCollaboration(collaborationInput);
    const domainService = this.domainServices.get(collaboration.serviceName);
    const errors = [];

    if (!domainService) errors.push(`Domain Service collaboration references unknown service: ${collaboration.serviceName}.`);
    if (!collaboration.collaboratorName) errors.push('Domain Service collaboration must identify the domain collaborator.');
    if (!this.collaborationTargets().includes(collaboration.collaboratorType)) {
      errors.push(`Unsupported Domain Service collaborator type: ${collaboration.collaboratorType}.`);
    }
    if (!collaboration.interaction) errors.push('Domain Service collaboration must describe business interaction.');
    if (collaboration.throughAggregateRoot !== true) errors.push('Domain Services must respect Aggregate Root boundaries.');
    if (collaboration.transfersOwnership === true) errors.push('Domain Service collaboration must not transfer Aggregate ownership.');
    if (collaboration.sharedState === true) errors.push('Domain Services collaborate without owning or sharing business state.');
    if (collaboration.crossesBoundedContext === true) errors.push('Domain Services must operate within one bounded context.');

    return validation(errors);
  }
}

function service(serviceName, owningContext, ownerService, responsibilities, businessOperations, businessRules, collaborators = [], valueObjects = []) {
  return new DomainServiceDefinition({
    serviceName,
    owningContext,
    ownerService,
    responsibilities,
    businessOperations,
    businessRules,
    collaborators,
    valueObjects
  });
}

function validation(errors) {
  return new DomainServiceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}

function containsTechnicalTerm(value) {
  return /\b(database|infrastructure|framework|http|api endpoint|queue|orm|table|repository)\b/i.test(String(value ?? ''));
}
