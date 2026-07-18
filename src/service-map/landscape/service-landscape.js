import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  SERVICE_CATEGORY_NAMES,
  SERVICE_LIFECYCLE_STAGES,
  SERVICE_MAP_ERROR_CODES
} from '../constants.js';
import { ServiceCategory } from '../contracts/service-category.js';
import { ServiceDescriptor } from '../contracts/service-descriptor.js';
import { ServiceLandscapeSnapshot } from '../contracts/service-landscape-snapshot.js';

const DEFAULT_CATEGORIES = Object.freeze([
  new ServiceCategory({
    categoryName: SERVICE_CATEGORY_NAMES.HOSPITALITY_OPERATIONS,
    displayName: 'Hospitality Operations',
    description: 'Reservations, availability, and commercial operations.',
    serviceNames: [
      BUSINESS_SERVICE_NAMES.BOOKING,
      BUSINESS_SERVICE_NAMES.CALENDAR,
      BUSINESS_SERVICE_NAMES.PRICING
    ]
  }),
  new ServiceCategory({
    categoryName: SERVICE_CATEGORY_NAMES.KNOWLEDGE_MANAGEMENT,
    displayName: 'Knowledge Management',
    description: 'Operational information, policies, FAQs, and property knowledge.',
    serviceNames: [BUSINESS_SERVICE_NAMES.KNOWLEDGE]
  }),
  new ServiceCategory({
    categoryName: SERVICE_CATEGORY_NAMES.PROPERTY_MANAGEMENT,
    displayName: 'Property Management',
    description: 'Property configuration, branding, amenities, and digital assets.',
    serviceNames: [BUSINESS_SERVICE_NAMES.PROPERTY, BUSINESS_SERVICE_NAMES.MEDIA]
  }),
  new ServiceCategory({
    categoryName: SERVICE_CATEGORY_NAMES.PLATFORM_SERVICES,
    displayName: 'Platform Services',
    description: 'Reusable operational capabilities across the platform.',
    serviceNames: [
      BUSINESS_SERVICE_NAMES.AUTHENTICATION,
      BUSINESS_SERVICE_NAMES.NOTIFICATION,
      BUSINESS_SERVICE_NAMES.WORKFLOW
    ]
  }),
  new ServiceCategory({
    categoryName: SERVICE_CATEGORY_NAMES.BUSINESS_INTELLIGENCE,
    displayName: 'Business Intelligence',
    description: 'Reporting, operational insights, and performance metrics.',
    serviceNames: [BUSINESS_SERVICE_NAMES.ANALYTICS]
  })
]);

const DEFAULT_SERVICES = Object.freeze([
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    displayName: 'Booking Service',
    category: SERVICE_CATEGORY_NAMES.HOSPITALITY_OPERATIONS,
    primaryResponsibility: 'Booking operations.',
    summary: 'Manages reservation lifecycle capabilities.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.PRICING,
    displayName: 'Pricing Service',
    category: SERVICE_CATEGORY_NAMES.HOSPITALITY_OPERATIONS,
    primaryResponsibility: 'Pricing logic.',
    summary: 'Calculates reservation costs through authoritative pricing rules.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.CALENDAR,
    displayName: 'Calendar Service',
    category: SERVICE_CATEGORY_NAMES.HOSPITALITY_OPERATIONS,
    primaryResponsibility: 'Calendar management.',
    summary: 'Maintains property availability and reservation blocks.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
    displayName: 'Knowledge Service',
    category: SERVICE_CATEGORY_NAMES.KNOWLEDGE_MANAGEMENT,
    primaryResponsibility: 'Knowledge management.',
    summary: 'Provides authoritative operational knowledge.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.NOTIFICATION,
    displayName: 'Notification Service',
    category: SERVICE_CATEGORY_NAMES.PLATFORM_SERVICES,
    primaryResponsibility: 'Message delivery.',
    summary: 'Delivers communications through approved integration boundaries.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.PROPERTY,
    displayName: 'Property Service',
    category: SERVICE_CATEGORY_NAMES.PROPERTY_MANAGEMENT,
    primaryResponsibility: 'Property management.',
    summary: 'Maintains property configuration and operational settings.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.AUTHENTICATION,
    displayName: 'Authentication Service',
    category: SERVICE_CATEGORY_NAMES.PLATFORM_SERVICES,
    primaryResponsibility: 'Authentication and authorization.',
    summary: 'Manages platform identity and access capabilities.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.ANALYTICS,
    displayName: 'Analytics Service',
    category: SERVICE_CATEGORY_NAMES.BUSINESS_INTELLIGENCE,
    primaryResponsibility: 'Reporting and analytics.',
    summary: 'Produces operational insights and performance metrics.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.MEDIA,
    displayName: 'Media Service',
    category: SERVICE_CATEGORY_NAMES.PROPERTY_MANAGEMENT,
    primaryResponsibility: 'Media management.',
    summary: 'Manages digital assets for property and knowledge experiences.'
  }),
  createServiceDescriptor({
    serviceName: BUSINESS_SERVICE_NAMES.WORKFLOW,
    displayName: 'Workflow Service',
    category: SERVICE_CATEGORY_NAMES.PLATFORM_SERVICES,
    primaryResponsibility: 'Business process orchestration.',
    summary: 'Coordinates multi-step business workflows without taking domain ownership.'
  })
]);

export class ServiceLandscape {
  constructor({ services = DEFAULT_SERVICES, categories = DEFAULT_CATEGORIES, clock = null } = {}) {
    this.services = new Map();
    this.categories = new Map();
    this.clock = clock;

    for (const category of categories) {
      this.categories.set(category.categoryName, category);
    }

    for (const service of services) {
      this.registerService(service);
    }
  }

  registerService(service) {
    if (this.services.has(service.serviceName)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE,
        `Service "${service.serviceName}" already exists in the service landscape.`
      );
    }

    if (!this.categories.has(service.category)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.CATEGORY_NOT_FOUND,
        `Service category "${service.category}" is not defined.`
      );
    }

    this.services.set(service.serviceName, service);
    return this;
  }

  listServices() {
    return Object.freeze([...this.services.values()]);
  }

  listCategories() {
    return Object.freeze([...this.categories.values()]);
  }

  getService(serviceName) {
    const service = this.services.get(serviceName);

    if (!service) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.SERVICE_NOT_FOUND,
        `Service "${serviceName}" is not defined in the service landscape.`
      );
    }

    return service;
  }

  listServicesByCategory(categoryName) {
    const category = this.categories.get(categoryName);

    if (!category) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.CATEGORY_NOT_FOUND,
        `Service category "${categoryName}" is not defined.`
      );
    }

    return Object.freeze(category.serviceNames.map(serviceName => this.getService(serviceName)));
  }

  snapshot() {
    return new ServiceLandscapeSnapshot({
      services: this.listServices(),
      categories: this.listCategories(),
      generatedAt: this.clock?.now?.().toISOString?.() ?? null
    });
  }
}

function createServiceDescriptor(input) {
  return new ServiceDescriptor({
    lifecycleStage: SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
    ...input
  });
}
