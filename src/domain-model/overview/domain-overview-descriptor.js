import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DOMAIN_BOUNDARY_RULES,
  DOMAIN_CONSISTENCY_MODELS,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_MODELING_PRINCIPLES,
  DOMAIN_RELATIONSHIP_TYPES
} from '../constants.js';
import { DomainCapability } from '../contracts/domain-capability.js';
import { DomainConcept } from '../contracts/domain-concept.js';
import { DomainDescriptor } from '../contracts/domain-descriptor.js';
import { DomainRelationship } from '../contracts/domain-relationship.js';
import { DomainStateModel } from '../contracts/domain-state-model.js';
import { DomainValidationResult } from '../contracts/domain-validation-result.js';

const DEFAULT_DOMAINS = Object.freeze([
  domain('Reservation Domain', 'Booking Service', ['Reservation'], ['Create Reservation', 'Cancel Reservation', 'Modify Reservation'], ['Reservation ID'], ['Pending', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled']),
  domain('Property Domain', 'Property Service', ['Property', 'Availability'], ['Register Property', 'Update Availability', 'Retrieve Property Information'], ['Property ID']),
  domain('Guest Domain', 'Guest Service', ['Guest'], [], ['Guest ID']),
  domain('Pricing Domain', 'Pricing Service', ['Price'], ['Calculate Price', 'Apply Discounts', 'Validate Pricing Rules']),
  domain('Payment Domain', 'Payment Service', ['Payment'], [], ['Payment ID'], ['Pending', 'Authorized', 'Paid', 'Refunded', 'Failed']),
  domain('Notification Domain', 'Notification Service', ['Notification']),
  domain('Knowledge Domain', 'Knowledge Service', ['Knowledge', 'Policy']),
  domain('Identity Domain', 'Identity Service', ['Identity']),
  domain('Workflow Domain', 'Workflow Service', ['Workflow']),
  domain('Platform Services Domain', 'Platform Services', [])
]);

const DEFAULT_CONCEPTS = Object.freeze([
  concept('Guest', 'A person interacting with the platform', 'Guest Service', 'Guest Domain'),
  concept('Reservation', 'A confirmed booking for a property', 'Booking Service', 'Reservation Domain'),
  concept('Property', 'A bookable accommodation or asset', 'Property Service', 'Property Domain'),
  concept('Availability', 'The current booking status of a property', 'Calendar Service', 'Property Domain'),
  concept('Payment', 'Financial settlement of a reservation', 'Payment Service', 'Payment Domain'),
  concept('Notification', 'Communication delivered to users', 'Notification Service', 'Notification Domain'),
  concept('Workflow', 'Coordinated business process', 'Workflow Service', 'Workflow Domain'),
  concept('Policy', 'Business or operational rule governing behavior', 'Knowledge Service', 'Knowledge Domain')
]);

const DEFAULT_RELATIONSHIPS = Object.freeze([
  relationship('Reservation Domain', 'Pricing Domain', DOMAIN_RELATIONSHIP_TYPES.REQUIRES, 'Reservations require pricing.'),
  relationship('Reservation Domain', 'Guest Domain', DOMAIN_RELATIONSHIP_TYPES.REFERENCES, 'Reservations reference guests.'),
  relationship('Reservation Domain', 'Property Domain', DOMAIN_RELATIONSHIP_TYPES.REFERENCES, 'Reservations reference properties.'),
  relationship('Payment Domain', 'Reservation Domain', DOMAIN_RELATIONSHIP_TYPES.SETTLES, 'Payments settle reservations.'),
  relationship('Notification Domain', 'Reservation Domain', DOMAIN_RELATIONSHIP_TYPES.COMMUNICATES, 'Notifications communicate reservation events.'),
  relationship('Knowledge Domain', 'Platform Services Domain', DOMAIN_RELATIONSHIP_TYPES.SUPPORTS_REASONING, 'Knowledge supports AI reasoning.')
]);

export class DomainOverviewDescriptor {
  constructor({ domains = DEFAULT_DOMAINS, concepts = DEFAULT_CONCEPTS, relationships = DEFAULT_RELATIONSHIPS } = {}) {
    this.domains = new Map();
    this.concepts = new Map();
    this.relationships = [];

    for (const domainDescriptor of domains) {
      this.registerDomain(domainDescriptor);
    }

    for (const domainConcept of concepts) {
      this.registerConcept(domainConcept);
    }

    for (const domainRelationship of relationships) {
      this.registerRelationship(domainRelationship);
    }
  }

  platformDomainName() {
    return 'Platform Domain';
  }

  modelingPrinciples() {
    return Object.freeze(Object.values(DOMAIN_MODELING_PRINCIPLES));
  }

  boundaryRules() {
    return Object.freeze(Object.values(DOMAIN_BOUNDARY_RULES));
  }

  consistencyModels() {
    return Object.freeze(Object.values(DOMAIN_CONSISTENCY_MODELS));
  }

  relationshipTypes() {
    return Object.freeze(Object.values(DOMAIN_RELATIONSHIP_TYPES));
  }

  listDomains() {
    return Object.freeze([...this.domains.values()]);
  }

  listConcepts() {
    return Object.freeze([...this.concepts.values()]);
  }

  listRelationships() {
    return Object.freeze([...this.relationships]);
  }

  registerDomain(domainInput) {
    const domainDescriptor = domainInput instanceof DomainDescriptor ? domainInput : new DomainDescriptor(domainInput);
    const result = this.validateDomain(domainDescriptor);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_OVERVIEW_INVALID,
        'Domain descriptor violates ARCH-006-01.',
        { errors: result.errors }
      );
    }

    this.domains.set(domainDescriptor.domainName, domainDescriptor);
    return this;
  }

  registerConcept(conceptInput) {
    const domainConcept = conceptInput instanceof DomainConcept ? conceptInput : new DomainConcept(conceptInput);
    const result = this.validateConcept(domainConcept);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_CONCEPT_INVALID,
        'Domain concept violates ARCH-006-01.',
        { errors: result.errors }
      );
    }

    this.concepts.set(domainConcept.term, domainConcept);
    return this;
  }

  registerRelationship(relationshipInput) {
    const domainRelationship = relationshipInput instanceof DomainRelationship
      ? relationshipInput
      : new DomainRelationship(relationshipInput);
    const result = this.validateRelationship(domainRelationship);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_RELATIONSHIP_INVALID,
        'Domain relationship violates ARCH-006-01.',
        { errors: result.errors }
      );
    }

    this.relationships.push(domainRelationship);
    return this;
  }

  getDomain(domainName) {
    const domainDescriptor = this.domains.get(domainName);

    if (!domainDescriptor) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_NOT_FOUND,
        `Domain "${domainName}" is not defined.`
      );
    }

    return domainDescriptor;
  }

  getConcept(term) {
    return this.concepts.get(term);
  }

  createCapability(capabilityInput) {
    const capability = capabilityInput instanceof DomainCapability
      ? capabilityInput
      : new DomainCapability(capabilityInput);
    const result = this.validateCapability(capability);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_CAPABILITY_INVALID,
        'Domain capability violates ARCH-006-01.',
        { errors: result.errors }
      );
    }

    return capability;
  }

  createStateModel(stateInput) {
    const stateModel = stateInput instanceof DomainStateModel ? stateInput : new DomainStateModel(stateInput);
    const result = this.validateStateModel(stateModel);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_STATE_INVALID,
        'Domain state model violates ARCH-006-01.',
        { errors: result.errors }
      );
    }

    return stateModel;
  }

  validateDomain(domainDescriptor) {
    const errors = [];

    if (!domainDescriptor.domainName) errors.push('Domain must have a business name.');
    if (!domainDescriptor.ownerService) errors.push('Domain must have one authoritative owner.');
    if (Array.isArray(domainDescriptor.ownerService)) errors.push('Domain ownership must not be shared.');
    if (domainDescriptor.terminology.some((term) => isTechnicalTerm(term))) {
      errors.push('Domain terminology must describe business concepts rather than technical implementation.');
    }

    return validation(errors);
  }

  validateConcept(domainConcept) {
    const errors = [];

    if (!domainConcept.term) errors.push('Domain concept must have a business term.');
    if (!domainConcept.meaning) errors.push('Domain concept must define meaning in ubiquitous language.');
    if (!domainConcept.ownerService) errors.push('Domain concept must have one authoritative owner.');
    if (Array.isArray(domainConcept.ownerService)) errors.push('Domain concept ownership must not be shared.');
    if (!this.domains.has(domainConcept.domainName)) errors.push(`Domain concept references unknown domain: ${domainConcept.domainName}.`);
    if (isTechnicalTerm(domainConcept.term) || isTechnicalTerm(domainConcept.meaning)) {
      errors.push('Domain concepts must not be represented as database tables, API payloads, framework objects, or programming classes.');
    }

    const existing = this.concepts.get(domainConcept.term);
    if (existing && existing.meaning !== domainConcept.meaning) {
      errors.push(`Business term ${domainConcept.term} already has a different meaning.`);
    }

    return validation(errors);
  }

  validateCapability(capability) {
    const errors = [];
    const domainDescriptor = this.domains.get(capability.domainName);

    if (!capability.capabilityName) errors.push('Domain capability must have a business name.');
    if (!domainDescriptor) errors.push(`Domain capability references unknown domain: ${capability.domainName}.`);
    if (!capability.ownerService) errors.push('Domain capability must have one authoritative owner.');
    if (domainDescriptor && capability.ownerService !== domainDescriptor.ownerService) {
      errors.push(`Domain capability ${capability.capabilityName} must be owned by ${domainDescriptor.ownerService}.`);
    }
    if (!capability.description) errors.push('Domain capability must describe what the domain can do.');
    if (isTechnicalTerm(capability.capabilityName) || isTechnicalTerm(capability.description)) {
      errors.push('Domain capabilities must describe what a domain can do rather than how implementation works.');
    }

    return validation(errors);
  }

  validateRelationship(domainRelationship) {
    const errors = [];

    if (!this.domains.has(domainRelationship.sourceDomain)) errors.push(`Relationship references unknown source domain: ${domainRelationship.sourceDomain}.`);
    if (!this.domains.has(domainRelationship.targetDomain)) errors.push(`Relationship references unknown target domain: ${domainRelationship.targetDomain}.`);
    if (!this.relationshipTypes().includes(domainRelationship.relationshipType)) errors.push(`Unsupported domain relationship type: ${domainRelationship.relationshipType}.`);
    if (!domainRelationship.description) errors.push('Domain relationship must describe business collaboration.');
    if (domainRelationship.transfersOwnership === true) errors.push('Domain relationships represent collaboration rather than ownership transfer.');

    return validation(errors);
  }

  validateStateModel(stateModel) {
    const errors = [];
    const domainDescriptor = this.domains.get(stateModel.domainName);

    if (!domainDescriptor) errors.push(`State model references unknown domain: ${stateModel.domainName}.`);
    if (!stateModel.entityName) errors.push('State model must identify the business object.');
    if (domainDescriptor && stateModel.ownerService !== domainDescriptor.ownerService) {
      errors.push(`Only ${domainDescriptor.ownerService} may change ${stateModel.entityName} state.`);
    }
    if (stateModel.states.length === 0) errors.push('State model must define business states.');
    if (stateModel.states.some((state) => isTechnicalTerm(state))) {
      errors.push('Business state must not expose implementation details.');
    }

    return validation(errors);
  }
}

function domain(domainName, ownerService, terminology = [], responsibilities = [], businessIdentities = [], stateNames = []) {
  return new DomainDescriptor({
    domainName,
    ownerService,
    terminology,
    responsibilities,
    businessIdentities,
    stateNames
  });
}

function concept(term, meaning, ownerService, domainName) {
  return new DomainConcept({ term, meaning, ownerService, domainName });
}

function relationship(sourceDomain, targetDomain, relationshipType, description) {
  return new DomainRelationship({ sourceDomain, targetDomain, relationshipType, description });
}

function validation(errors) {
  return new DomainValidationResult({
    isValid: errors.length === 0,
    errors
  });
}

function isTechnicalTerm(value) {
  return /\b(table|database|api payload|framework|class|object model|sql|orm)\b/i.test(String(value ?? ''));
}
