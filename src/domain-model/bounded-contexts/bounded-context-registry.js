import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS,
  BOUNDED_CONTEXT_ISOLATION_ASPECTS,
  BOUNDED_CONTEXT_NAMES,
  BOUNDED_CONTEXT_PRINCIPLES,
  DOMAIN_MODEL_ERROR_CODES
} from '../constants.js';
import { BoundedContext } from '../contracts/bounded-context.js';
import { BoundedContextValidationResult } from '../contracts/bounded-context-validation-result.js';
import { ContextCollaboration } from '../contracts/context-collaboration.js';
import { ContextConceptOwnership } from '../contracts/context-concept-ownership.js';
import { ContextIsolationRecord } from '../contracts/context-isolation-record.js';

const DEFAULT_CONTEXTS = Object.freeze([
  context(BOUNDED_CONTEXT_NAMES.RESERVATION, 'Reservation lifecycle', 'Booking Service', [
    'Reservation creation',
    'Reservation modification',
    'Reservation cancellation',
    'Reservation lifecycle',
    'Reservation validation'
  ], ['Reservation', 'Status'], ['Reservation']),
  context(BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property information and availability', 'Property Service', [
    'Property registration',
    'Property details',
    'Availability management',
    'Amenities',
    'Capacity',
    'Property configuration'
  ], ['Property', 'Availability'], ['Property']),
  context(BOUNDED_CONTEXT_NAMES.GUEST, 'Guest identity and profile', 'Guest Service', [
    'Guest identity',
    'Guest profiles',
    'Contact information',
    'Preferences',
    'Guest history'
  ], ['Guest', 'Preference'], ['Guest']),
  context(BOUNDED_CONTEXT_NAMES.PRICING, 'Pricing and discounts', 'Pricing Service', [
    'Price calculation',
    'Discounts',
    'Promotions',
    'Seasonal pricing',
    'Dynamic pricing',
    'Pricing policies'
  ], ['Price', 'Discount', 'Promotion'], ['Price']),
  context(BOUNDED_CONTEXT_NAMES.PAYMENT, 'Financial transactions', 'Payment Service', [
    'Payment authorization',
    'Payment settlement',
    'Refund processing',
    'Transaction history',
    'Payment status'
  ], ['Payment', 'Status'], ['Payment']),
  context(BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'User communication', 'Notification Service', [
    'Email delivery',
    'SMS delivery',
    'Push notifications',
    'Messaging templates',
    'Delivery tracking'
  ], ['Notification', 'Status'], ['Notification']),
  context(BOUNDED_CONTEXT_NAMES.IDENTITY, 'Authentication and authorization', 'Identity Service', [
    'User identity',
    'Authentication',
    'Authorization',
    'Roles',
    'Permissions',
    'Access policies'
  ], ['Identity', 'Role', 'Permission'], ['Identity']),
  context(BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'AI knowledge and retrieval', 'Knowledge Service', [
    'Knowledge retrieval',
    'AI context',
    'Document indexing',
    'Semantic search',
    'Knowledge organization'
  ], ['Knowledge', 'AI Context'], ['Knowledge']),
  context(BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Business process coordination', 'Workflow Service', [
    'Business orchestration',
    'Long-running processes',
    'Process coordination',
    'Compensation',
    'Workflow state'
  ], ['Workflow', 'Compensation'], ['Workflow']),
  context(BOUNDED_CONTEXT_NAMES.PLATFORM, 'Shared platform capabilities', 'Platform Services', [
    'Configuration',
    'Audit',
    'Observability',
    'Scheduling',
    'Platform policies',
    'Shared infrastructure services'
  ], ['Configuration', 'Audit', 'Observability'], [])
]);

const DEFAULT_COLLABORATIONS = Object.freeze([
  collaboration(BOUNDED_CONTEXT_NAMES.RESERVATION, BOUNDED_CONTEXT_NAMES.PRICING, 'Reservation requests pricing.', BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.QUERIES),
  collaboration(BOUNDED_CONTEXT_NAMES.PRICING, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Pricing calculates cost for Reservation.', BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.APIS),
  collaboration(BOUNDED_CONTEXT_NAMES.RESERVATION, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Reservation requests payment processing.', BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.COMMANDS),
  collaboration(BOUNDED_CONTEXT_NAMES.RESERVATION, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Reservation publishes event for confirmation notification.', BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.EVENTS),
  collaboration(BOUNDED_CONTEXT_NAMES.WORKFLOW, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Workflow coordinates reservation business process.', BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS.WORKFLOWS)
]);

export class BoundedContextRegistry {
  constructor({ contexts = DEFAULT_CONTEXTS, collaborations = DEFAULT_COLLABORATIONS } = {}) {
    this.contexts = new Map();
    this.collaborations = [];
    this.conceptOwners = new Map();

    for (const boundedContext of contexts) {
      this.registerContext(boundedContext);
    }

    for (const collaborationRecord of collaborations) {
      this.registerCollaboration(collaborationRecord);
    }
  }

  principles() {
    return Object.freeze(Object.values(BOUNDED_CONTEXT_PRINCIPLES));
  }

  communicationMechanisms() {
    return Object.freeze(Object.values(BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS));
  }

  isolationAspects() {
    return Object.freeze(Object.values(BOUNDED_CONTEXT_ISOLATION_ASPECTS));
  }

  listContexts() {
    return Object.freeze([...this.contexts.values()]);
  }

  listCollaborations() {
    return Object.freeze([...this.collaborations]);
  }

  getContext(contextName) {
    const boundedContext = this.contexts.get(contextName);

    if (!boundedContext) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_NOT_FOUND,
        `Bounded context "${contextName}" is not defined.`
      );
    }

    return boundedContext;
  }

  getConceptOwner(conceptName) {
    return this.conceptOwners.get(conceptName);
  }

  registerContext(contextInput) {
    const boundedContext = contextInput instanceof BoundedContext ? contextInput : new BoundedContext(contextInput);
    const result = this.validateContext(boundedContext);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_INVALID,
        'Bounded context violates ARCH-006-02.',
        { errors: result.errors }
      );
    }

    this.contexts.set(boundedContext.contextName, boundedContext);

    for (const conceptName of boundedContext.ownedConcepts) {
      this.registerConceptOwnership(new ContextConceptOwnership({
        conceptName,
        contextName: boundedContext.contextName,
        ownerService: boundedContext.ownerService
      }));
    }

    return this;
  }

  registerConceptOwnership(ownershipInput) {
    const ownership = ownershipInput instanceof ContextConceptOwnership
      ? ownershipInput
      : new ContextConceptOwnership(ownershipInput);
    const result = this.validateConceptOwnership(ownership);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_OWNERSHIP_INVALID,
        'Bounded context concept ownership violates ARCH-006-02.',
        { errors: result.errors }
      );
    }

    this.conceptOwners.set(ownership.conceptName, ownership);
    return this;
  }

  registerCollaboration(collaborationInput) {
    const collaborationRecord = collaborationInput instanceof ContextCollaboration
      ? collaborationInput
      : new ContextCollaboration(collaborationInput);
    const result = this.validateCollaboration(collaborationRecord);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.BOUNDED_CONTEXT_COLLABORATION_INVALID,
        'Bounded context collaboration violates ARCH-006-02.',
        { errors: result.errors }
      );
    }

    this.collaborations.push(collaborationRecord);
    return this;
  }

  validateContext(contextInput) {
    const boundedContext = contextInput instanceof BoundedContext ? contextInput : new BoundedContext(contextInput);
    const errors = [];

    if (!boundedContext.contextName) errors.push('Bounded context must have a name.');
    if (!boundedContext.primaryResponsibility) errors.push('Bounded context must define one primary responsibility.');
    if (!boundedContext.ownerService) errors.push('Bounded context must have one authoritative owner.');
    if (Array.isArray(boundedContext.ownerService) || boundedContext.sharedOwnership) errors.push('Bounded context ownership must not be shared.');
    if (boundedContext.businessCapabilities.length === 0) errors.push('Bounded context must own at least one business capability.');
    if (boundedContext.terminology.length === 0) errors.push('Bounded context must maintain its own ubiquitous language.');
    if (boundedContext.exposesContracts !== true) errors.push('Bounded contexts must expose explicit contracts.');
    if (boundedContext.duplicatesOtherContextData === true) errors.push('Bounded contexts must not duplicate another context business data.');

    return validation(errors);
  }

  validateConceptOwnership(ownershipInput) {
    const ownership = ownershipInput instanceof ContextConceptOwnership
      ? ownershipInput
      : new ContextConceptOwnership(ownershipInput);
    const errors = [];
    const existing = this.conceptOwners.get(ownership.conceptName);
    const boundedContext = this.contexts.get(ownership.contextName);

    if (!ownership.conceptName) errors.push('Business concept ownership must identify a concept.');
    if (!boundedContext) errors.push(`Concept ownership references unknown bounded context: ${ownership.contextName}.`);
    if (!ownership.ownerService) errors.push('Business concept ownership must identify an owner service.');
    if (boundedContext && ownership.ownerService !== boundedContext.ownerService) {
      errors.push(`Concept ${ownership.conceptName} must be owned by ${boundedContext.ownerService}.`);
    }
    if (existing && existing.contextName !== ownership.contextName) {
      errors.push(`Business concept ${ownership.conceptName} already belongs to bounded context ${existing.contextName}.`);
    }

    return validation(errors);
  }

  validateCollaboration(collaborationInput) {
    const collaborationRecord = collaborationInput instanceof ContextCollaboration
      ? collaborationInput
      : new ContextCollaboration(collaborationInput);
    const errors = [];

    if (!this.contexts.has(collaborationRecord.sourceContext)) errors.push(`Collaboration references unknown source context: ${collaborationRecord.sourceContext}.`);
    if (!this.contexts.has(collaborationRecord.targetContext)) errors.push(`Collaboration references unknown target context: ${collaborationRecord.targetContext}.`);
    if (!collaborationRecord.interaction) errors.push('Context collaboration must describe the business interaction.');
    if (!this.communicationMechanisms().includes(collaborationRecord.mechanism)) errors.push(`Unsupported context communication mechanism: ${collaborationRecord.mechanism}.`);
    if (!collaborationRecord.description) errors.push('Context collaboration must describe explicit contract-based communication.');
    if (collaborationRecord.directDatabaseSharing === true) errors.push('Direct database sharing between contexts is prohibited.');
    if (collaborationRecord.modifiesTargetState === true) errors.push('Only the owning context may change its own business state.');
    if (collaborationRecord.assumesTargetResponsibility === true) errors.push('Context collaboration must not assume another context responsibility.');
    if (collaborationRecord.implementationDependency === true) errors.push('Context dependencies must be business collaboration, not implementation dependency.');

    return validation(errors);
  }

  validateIsolation(isolationInput) {
    const isolation = isolationInput instanceof ContextIsolationRecord
      ? isolationInput
      : new ContextIsolationRecord(isolationInput);
    const errors = [];

    if (!this.contexts.has(isolation.contextName)) errors.push(`Isolation record references unknown context: ${isolation.contextName}.`);

    for (const aspect of this.isolationAspects()) {
      if (!isolation.isolatedAspects.includes(aspect)) {
        errors.push(`Bounded context isolation must cover ${aspect}.`);
      }
    }

    if (isolation.sharesImplementation === true) errors.push('Bounded contexts must communicate without sharing implementation.');
    if (isolation.sharesDatabase === true) errors.push('Bounded contexts must not share databases.');
    if (isolation.sharesLifecycle === true) errors.push('Bounded contexts must maintain independent lifecycles.');
    if (isolation.terminologyConflated === true) errors.push('Bounded contexts must not conflate terminology across contexts.');

    return validation(errors);
  }
}

function context(contextName, primaryResponsibility, ownerService, businessCapabilities, terminology, ownedConcepts) {
  return new BoundedContext({
    contextName,
    primaryResponsibility,
    ownerService,
    businessCapabilities,
    terminology,
    ownedConcepts,
    lifecycle: ['Proposed', 'Defined', 'Implemented', 'Evolved'],
    exposesContracts: true
  });
}

function collaboration(sourceContext, targetContext, interaction, mechanism) {
  return new ContextCollaboration({
    sourceContext,
    targetContext,
    interaction,
    mechanism,
    description: `${sourceContext} collaborates with ${targetContext} through ${mechanism}.`
  });
}

function validation(errors) {
  return new BoundedContextValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
