import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import { EXTERNAL_COLLABORATORS, SERVICE_MAP_ERROR_CODES } from '../constants.js';
import { BoundaryValidationResult } from '../contracts/boundary-validation-result.js';
import { ServiceBoundary } from '../contracts/service-boundary.js';
import { SharedConcept } from '../contracts/shared-concept.js';

const DEFAULT_BOUNDARIES = Object.freeze([
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    owns: ['Reservations', 'Reservation lifecycle', 'Booking status', 'Booking history'],
    doesNotOwn: ['Pricing rules', 'Availability', 'Property configuration', 'Notifications'],
    collaboratesWith: [
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.CALENDAR,
      BUSINESS_SERVICE_NAMES.NOTIFICATION,
      BUSINESS_SERVICE_NAMES.PROPERTY
    ]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.PRICING,
    owns: ['Pricing rules', 'Discounts', 'Promotions', 'Taxes', 'Fees'],
    doesNotOwn: ['Reservations', 'Availability', 'Property media', 'Notifications'],
    collaboratesWith: [BUSINESS_SERVICE_NAMES.PROPERTY, BUSINESS_SERVICE_NAMES.BOOKING]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.CALENDAR,
    owns: ['Availability', 'Reservation blocks', 'Maintenance schedules', 'Calendar synchronization'],
    doesNotOwn: ['Reservations', 'Pricing', 'Guest communication'],
    collaboratesWith: [BUSINESS_SERVICE_NAMES.BOOKING]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
    owns: ['Policies', 'FAQs', 'Amenities', 'Operational procedures', 'House rules'],
    doesNotOwn: ['Reservations', 'Pricing', 'User accounts'],
    collaboratesWith: [BUSINESS_SERVICE_NAMES.PROPERTY, EXTERNAL_COLLABORATORS.AI_INTELLIGENCE_LAYER]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.PROPERTY,
    owns: ['Property configuration', 'Amenities configuration', 'Branding', 'Operational settings'],
    doesNotOwn: ['Pricing calculations', 'Reservations', 'Notifications'],
    collaboratesWith: [
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.KNOWLEDGE,
      BUSINESS_SERVICE_NAMES.BOOKING
    ]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.NOTIFICATION,
    owns: ['Notification templates', 'Delivery tracking', 'Message dispatch', 'Delivery channels'],
    doesNotOwn: ['Business decisions', 'Reservation state', 'Pricing logic'],
    collaboratesWith: [
      BUSINESS_SERVICE_NAMES.BOOKING,
      BUSINESS_SERVICE_NAMES.WORKFLOW,
      EXTERNAL_COLLABORATORS.INTEGRATION_LAYER
    ]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.AUTHENTICATION,
    owns: ['Users', 'Roles', 'Permissions', 'Authentication tokens', 'Identity lifecycle'],
    doesNotOwn: ['Reservations', 'Pricing', 'Property data'],
    collaboratesWith: [EXTERNAL_COLLABORATORS.GATEWAY_LAYER, BUSINESS_SERVICE_NAMES.WORKFLOW]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.ANALYTICS,
    owns: ['Metrics', 'KPIs', 'Reports', 'Dashboards', 'Business intelligence'],
    doesNotOwn: ['Operational data', 'Reservations', 'Pricing policies'],
    collaboratesWith: [EXTERNAL_COLLABORATORS.ALL_OPERATIONAL_SERVICES]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.MEDIA,
    owns: ['Images', 'Documents', 'Attachments', 'Media metadata'],
    doesNotOwn: ['Property configuration', 'Reservations', 'Business rules'],
    collaboratesWith: [BUSINESS_SERVICE_NAMES.PROPERTY, BUSINESS_SERVICE_NAMES.KNOWLEDGE]
  }),
  boundary({
    serviceName: BUSINESS_SERVICE_NAMES.WORKFLOW,
    owns: [
      'Workflow definitions',
      'Business process orchestration',
      'Scheduled execution',
      'Long-running processes'
    ],
    doesNotOwn: ['Reservation rules', 'Pricing rules', 'Calendar ownership', 'Authentication logic'],
    collaboratesWith: [
      BUSINESS_SERVICE_NAMES.BOOKING,
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.CALENDAR,
      BUSINESS_SERVICE_NAMES.NOTIFICATION,
      BUSINESS_SERVICE_NAMES.AUTHENTICATION
    ]
  })
]);

const DEFAULT_SHARED_CONCEPTS = Object.freeze([
  new SharedConcept({
    concept: 'Reservation',
    ownerServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
    consumers: [BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.ANALYTICS]
  }),
  new SharedConcept({
    concept: 'Price',
    ownerServiceName: BUSINESS_SERVICE_NAMES.PRICING,
    consumers: [BUSINESS_SERVICE_NAMES.BOOKING, EXTERNAL_COLLABORATORS.AI_INTELLIGENCE_LAYER]
  }),
  new SharedConcept({
    concept: 'Availability',
    ownerServiceName: BUSINESS_SERVICE_NAMES.CALENDAR,
    consumers: [BUSINESS_SERVICE_NAMES.BOOKING, EXTERNAL_COLLABORATORS.AI_INTELLIGENCE_LAYER]
  }),
  new SharedConcept({
    concept: 'Property',
    ownerServiceName: BUSINESS_SERVICE_NAMES.PROPERTY,
    consumers: [BUSINESS_SERVICE_NAMES.PRICING, BUSINESS_SERVICE_NAMES.KNOWLEDGE]
  }),
  new SharedConcept({
    concept: 'Policy',
    ownerServiceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
    consumers: [EXTERNAL_COLLABORATORS.AI_INTELLIGENCE_LAYER]
  }),
  new SharedConcept({
    concept: 'User Identity',
    ownerServiceName: BUSINESS_SERVICE_NAMES.AUTHENTICATION,
    consumers: [EXTERNAL_COLLABORATORS.GATEWAY_LAYER, BUSINESS_SERVICE_NAMES.WORKFLOW]
  })
]);

export class ServiceBoundaryRegistry {
  constructor({ boundaries = DEFAULT_BOUNDARIES, sharedConcepts = DEFAULT_SHARED_CONCEPTS } = {}) {
    this.boundaries = new Map();
    this.sharedConcepts = new Map();

    for (const serviceBoundary of boundaries) {
      this.registerBoundary(serviceBoundary);
    }

    for (const sharedConcept of sharedConcepts) {
      this.sharedConcepts.set(normalize(sharedConcept.concept), sharedConcept);
    }
  }

  registerBoundary(serviceBoundary) {
    if (this.boundaries.has(serviceBoundary.serviceName)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE_BOUNDARY,
        `Boundary for service "${serviceBoundary.serviceName}" already exists.`
      );
    }

    this.boundaries.set(serviceBoundary.serviceName, serviceBoundary);
    return this;
  }

  listBoundaries() {
    return Object.freeze([...this.boundaries.values()]);
  }

  getBoundary(serviceName) {
    const serviceBoundary = this.boundaries.get(serviceName);

    if (!serviceBoundary) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.SERVICE_BOUNDARY_NOT_FOUND,
        `Boundary for service "${serviceName}" is not defined.`
      );
    }

    return serviceBoundary;
  }

  listSharedConcepts() {
    return Object.freeze([...this.sharedConcepts.values()]);
  }

  getSharedConcept(concept) {
    return this.sharedConcepts.get(normalize(concept)) ?? null;
  }

  validateOwnershipClaim({ serviceName, concept }) {
    const serviceBoundary = this.getBoundary(serviceName);
    const normalizedConcept = normalize(concept);

    if (serviceBoundary.doesNotOwn.some(item => normalize(item) === normalizedConcept)) {
      return BoundaryValidationResult.invalid({
        boundary: serviceBoundary,
        concept,
        errors: [
          {
            code: SERVICE_MAP_ERROR_CODES.SERVICE_BOUNDARY_VIOLATION,
            message: `${serviceName} explicitly does not own ${concept}.`
          }
        ]
      });
    }

    if (!serviceBoundary.owns.some(item => normalize(item) === normalizedConcept)) {
      return BoundaryValidationResult.invalid({
        boundary: serviceBoundary,
        concept,
        errors: [
          {
            code: SERVICE_MAP_ERROR_CODES.SERVICE_BOUNDARY_VIOLATION,
            message: `${serviceName} does not define ${concept} inside its ownership boundary.`
          }
        ]
      });
    }

    return BoundaryValidationResult.valid({
      boundary: serviceBoundary,
      concept
    });
  }

  assertOwnershipClaim(input) {
    const validation = this.validateOwnershipClaim(input);

    if (!validation.isValid) {
      throw new PlatformError(
        validation.errors[0].code,
        validation.errors[0].message,
        {
          serviceName: input.serviceName,
          concept: input.concept
        }
      );
    }

    return validation.boundary;
  }

  canCollaborate(sourceServiceName, targetName) {
    const serviceBoundary = this.getBoundary(sourceServiceName);
    return serviceBoundary.collaboratesWith.includes(targetName);
  }
}

function boundary(input) {
  return new ServiceBoundary(input);
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}
