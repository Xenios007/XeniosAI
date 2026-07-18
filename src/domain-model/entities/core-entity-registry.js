import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  BOUNDED_CONTEXT_NAMES,
  CORE_ENTITY_CHARACTERISTICS,
  CORE_ENTITY_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  ENTITY_INTEGRITY_RULES,
  ENTITY_REFERENCE_RULES
} from '../constants.js';
import { EntityDefinition } from '../contracts/entity-definition.js';
import { EntityInstance } from '../contracts/entity-instance.js';
import { EntityReference } from '../contracts/entity-reference.js';
import { EntityStateTransition } from '../contracts/entity-state-transition.js';
import { EntityValidationResult } from '../contracts/entity-validation-result.js';

const DEFAULT_ENTITIES = Object.freeze([
  entity(CORE_ENTITY_NAMES.RESERVATION, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Reservation ID', [
    'Reservation identity',
    'Reservation status',
    'Stay details',
    'Guest association',
    'Property association',
    'Reservation lifecycle'
  ], ['Confirm', 'Cancel', 'Check In', 'Check Out'], ['Pending', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled'], ['Reservation identity remains stable', 'Only valid reservation states are allowed'], ['Guest ID', 'Property ID', 'Payment ID']),
  entity(CORE_ENTITY_NAMES.GUEST, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', 'Guest ID', [
    'Personal identity',
    'Contact information',
    'Communication preferences',
    'Reservation history',
    'Profile information'
  ], ['Update Contact Information', 'Change Communication Preference'], [], ['Guest identity remains stable']),
  entity(CORE_ENTITY_NAMES.PROPERTY, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', 'Property ID', [
    'Property identity',
    'Capacity',
    'Amenities',
    'Availability reference',
    'Operational configuration'
  ], [], [], ['Property identity remains stable']),
  entity(CORE_ENTITY_NAMES.PAYMENT, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Payment ID', [
    'Payment identity',
    'Payment status',
    'Amount',
    'Currency',
    'Payment method',
    'Settlement history'
  ], ['Authorize', 'Capture', 'Refund'], ['Pending', 'Authorized', 'Paid', 'Refunded', 'Failed'], ['Payment correctness remains within Payment Context'], ['Reservation ID']),
  entity(CORE_ENTITY_NAMES.NOTIFICATION, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', 'Notification ID', [
    'Delivery channel',
    'Recipient',
    'Delivery status',
    'Template reference',
    'Delivery history'
  ], [], ['Queued', 'Delivered', 'Failed'], ['Notification records communication, not business decisions'], ['Reservation ID', 'Guest ID']),
  entity(CORE_ENTITY_NAMES.USER, BOUNDED_CONTEXT_NAMES.IDENTITY, 'Identity Service', 'User ID', [
    'Authentication identity',
    'Roles',
    'Permissions',
    'Security status',
    'Authentication history'
  ], [], [], ['User governs platform access rather than customer information']),
  entity(CORE_ENTITY_NAMES.KNOWLEDGE_ITEM, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Knowledge Item ID', [
    'Knowledge identity',
    'Classification',
    'Source',
    'Metadata',
    'Semantic relationships',
    'Retrieval information'
  ], [], [], ['Knowledge remains independent of operational business data']),
  entity(CORE_ENTITY_NAMES.WORKFLOW_INSTANCE, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', 'Workflow ID', [
    'Workflow identity',
    'Current state',
    'Progress',
    'Execution history',
    'Correlation information'
  ], [], ['Created', 'Running', 'Completed', 'Failed', 'Cancelled'], ['Workflow instances coordinate but do not own business data'], ['Reservation ID', 'Payment ID'])
]);

const FUTURE_ENTITIES = Object.freeze([
  'Invoice',
  'Loyalty Account',
  'Promotion',
  'Campaign',
  'Vendor',
  'Maintenance Request',
  'AI Agent',
  'Conversation',
  'Task',
  'Asset'
]);

const ALLOWED_TRANSITIONS = Object.freeze({
  [CORE_ENTITY_NAMES.RESERVATION]: Object.freeze({
    Pending: ['Confirmed', 'Cancelled'],
    Confirmed: ['Checked In', 'Cancelled'],
    'Checked In': ['Checked Out'],
    'Checked Out': [],
    Cancelled: []
  }),
  [CORE_ENTITY_NAMES.PAYMENT]: Object.freeze({
    Pending: ['Authorized', 'Failed'],
    Authorized: ['Paid', 'Refunded', 'Failed'],
    Paid: ['Refunded'],
    Refunded: [],
    Failed: []
  })
});

export class CoreEntityRegistry {
  constructor({ entities = DEFAULT_ENTITIES } = {}) {
    this.entities = new Map();

    for (const entityDefinition of entities) {
      this.registerEntity(entityDefinition);
    }
  }

  characteristics() {
    return Object.freeze(Object.values(CORE_ENTITY_CHARACTERISTICS));
  }

  referenceRules() {
    return Object.freeze(Object.values(ENTITY_REFERENCE_RULES));
  }

  integrityRules() {
    return Object.freeze(Object.values(ENTITY_INTEGRITY_RULES));
  }

  futureEntityCandidates() {
    return FUTURE_ENTITIES;
  }

  listEntities() {
    return Object.freeze([...this.entities.values()]);
  }

  registerEntity(entityInput) {
    const entityDefinition = entityInput instanceof EntityDefinition ? entityInput : new EntityDefinition(entityInput);
    const result = this.validateDefinition(entityDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.CORE_ENTITY_DEFINITION_INVALID,
        'Core entity definition violates ARCH-006-03.',
        { errors: result.errors }
      );
    }

    this.entities.set(entityDefinition.entityName, entityDefinition);
    return this;
  }

  getEntity(entityName) {
    const entityDefinition = this.entities.get(entityName);

    if (!entityDefinition) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.CORE_ENTITY_NOT_FOUND,
        `Core entity "${entityName}" is not defined.`
      );
    }

    return entityDefinition;
  }

  validateDefinition(entityInput) {
    const entityDefinition = entityInput instanceof EntityDefinition ? entityInput : new EntityDefinition(entityInput);
    const errors = [];

    if (!entityDefinition.entityName) errors.push('Entity must have a business name.');
    if (!entityDefinition.owningContext) errors.push('Entity must belong to exactly one bounded context.');
    if (Array.isArray(entityDefinition.owningContext)) errors.push('Entity bounded context ownership must not be shared.');
    if (!entityDefinition.ownerService) errors.push('Entity must have an authoritative owning service.');
    if (!entityDefinition.identityName) errors.push('Entity must define stable business identity.');
    if (entityDefinition.responsibilities.length === 0) errors.push('Entity must define business responsibilities.');
    if (entityDefinition.invariants.length === 0) errors.push('Entity must define business invariants.');
    if (isTechnicalTerm(entityDefinition.entityName) || entityDefinition.responsibilities.some(isTechnicalTerm)) {
      errors.push('Entities must model business concepts rather than persistence structures.');
    }

    return validation(errors);
  }

  createEntity(instanceInput) {
    const instance = instanceInput instanceof EntityInstance ? instanceInput : new EntityInstance(instanceInput);
    const definition = this.entities.get(instance.entityName);
    const errors = [];

    if (!definition) errors.push(`Core entity definition is not registered: ${instance.entityName}.`);
    if (!instance.entityId) errors.push('Entity instance must include stable business identity.');
    if (definition && instance.owningContext !== definition.owningContext) errors.push(`Entity ${instance.entityName} must belong to ${definition.owningContext}.`);
    if (definition && instance.ownerService !== definition.ownerService) errors.push(`Entity ${instance.entityName} must be owned by ${definition.ownerService}.`);
    if (definition?.lifecycleStates.length > 0 && !definition.lifecycleStates.includes(instance.businessState)) {
      errors.push(`Entity ${instance.entityName} state is not valid: ${instance.businessState}.`);
    }
    if (instance.identityChanged === true) errors.push('Entity identity must remain stable for its lifetime.');
    if (instance.invariantsPreserved !== true) errors.push('Entity must preserve business invariants.');
    if (instance.persistenceStructure === true) errors.push('Entity must not represent a persistence structure.');

    if (errors.length > 0) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.CORE_ENTITY_INSTANCE_INVALID,
        'Core entity instance violates ARCH-006-03.',
        { errors }
      );
    }

    return instance;
  }

  validateReference(referenceInput) {
    const reference = referenceInput instanceof EntityReference ? referenceInput : new EntityReference(referenceInput);
    const source = this.entities.get(reference.sourceEntity);
    const target = this.entities.get(reference.targetEntity);
    const errors = [];

    if (!source) errors.push(`Entity reference source is not registered: ${reference.sourceEntity}.`);
    if (!target) errors.push(`Entity reference target is not registered: ${reference.targetEntity}.`);
    if (!reference.referenceName) errors.push('Entity reference must describe the business association.');
    if (target && reference.targetIdentityName !== target.identityName) errors.push(`Entity references to ${reference.targetEntity} must use ${target.identityName}.`);
    if (reference.embeddedForeignObject === true) errors.push('Entities should reference foreign entities through stable business identity, not embedded objects.');
    if (reference.transfersOwnership === true) errors.push('Entity relationships express business association rather than ownership.');

    return validation(errors);
  }

  validateStateTransition(transitionInput) {
    const transition = transitionInput instanceof EntityStateTransition
      ? transitionInput
      : new EntityStateTransition(transitionInput);
    const definition = this.entities.get(transition.entityName);
    const errors = [];

    if (!definition) errors.push(`Core entity definition is not registered: ${transition.entityName}.`);
    if (definition && transition.requestedByContext !== definition.owningContext) {
      errors.push(`Only ${definition.owningContext} may modify ${transition.entityName} state.`);
    }
    if (definition && !definition.behaviors.includes(transition.behavior)) {
      errors.push(`Behavior ${transition.behavior} is not cohesive with ${transition.entityName} responsibilities.`);
    }
    if (transition.invariantsPreserved !== true) errors.push('Entity state transitions must preserve business invariants.');

    const transitions = ALLOWED_TRANSITIONS[transition.entityName];
    if (transitions && !(transitions[transition.fromState] ?? []).includes(transition.toState)) {
      errors.push(`Entity state transition from ${transition.fromState} to ${transition.toState} is not allowed.`);
    }

    return validation(errors);
  }
}

function entity(entityName, owningContext, ownerService, identityName, responsibilities, behaviors = [], lifecycleStates = [], invariants = [], references = []) {
  return new EntityDefinition({
    entityName,
    owningContext,
    ownerService,
    identityName,
    responsibilities,
    behaviors,
    lifecycleStates,
    invariants,
    references
  });
}

function validation(errors) {
  return new EntityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}

function isTechnicalTerm(value) {
  return /\b(table|database|api payload|framework|class|orm|row|column)\b/i.test(String(value ?? ''));
}
