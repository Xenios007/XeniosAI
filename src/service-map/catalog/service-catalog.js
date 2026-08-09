import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import { SERVICE_MAP_ERROR_CODES } from '../constants.js';
import { ServiceCatalogEntry } from '../contracts/service-catalog-entry.js';

const EXTERNAL_DEPENDENCIES = Object.freeze({
  INTEGRATION_LAYER: 'integration-layer',
  OBJECT_STORAGE: 'object-storage',
  ALL_OPERATIONAL_SERVICES: 'all-operational-services',
  MULTIPLE_BUSINESS_SERVICES: 'multiple-business-services'
});

const EXTERNAL_CONSUMERS = Object.freeze({
  AI_INTELLIGENCE_LAYER: 'ai-intelligence-layer',
  GATEWAY_LAYER: 'gateway-layer',
  ADMINISTRATIVE_SERVICES: 'administrative-services',
  ADMINISTRATORS: 'administrators',
  OWNERS: 'owners',
  ADMINISTRATIVE_INTERFACES: 'administrative-interfaces'
});

const DEFAULT_CATALOG_ENTRIES = Object.freeze([
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.BOOKING,
    displayName: 'Booking Service',
    primaryDomain: 'Reservations',
    purpose: 'Manages the reservation lifecycle.',
    primaryResponsibility: 'Booking operations.',
    owns: ['Reservations', 'Booking status', 'Reservation lifecycle'],
    dependsOn: [
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.CALENDAR,
      BUSINESS_SERVICE_NAMES.NOTIFICATION,
      BUSINESS_SERVICE_NAMES.PROPERTY
    ],
    provides: ['Create booking', 'Modify booking', 'Cancel booking', 'Retrieve booking'],
    consumers: [EXTERNAL_CONSUMERS.AI_INTELLIGENCE_LAYER, BUSINESS_SERVICE_NAMES.WORKFLOW]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.PRICING,
    displayName: 'Pricing Service',
    primaryDomain: 'Pricing',
    purpose: 'Calculates reservation costs.',
    primaryResponsibility: 'Pricing logic.',
    owns: ['Rate rules', 'Discounts', 'Promotions', 'Taxes', 'Fees'],
    dependsOn: [BUSINESS_SERVICE_NAMES.PROPERTY],
    provides: ['Price calculation', 'Discount validation', 'Promotion evaluation'],
    consumers: [BUSINESS_SERVICE_NAMES.BOOKING, EXTERNAL_CONSUMERS.AI_INTELLIGENCE_LAYER]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.CALENDAR,
    displayName: 'Calendar Service',
    primaryDomain: 'Availability',
    purpose: 'Maintains property availability.',
    primaryResponsibility: 'Calendar management.',
    owns: ['Availability', 'Reservation blocks', 'Maintenance periods'],
    provides: ['Availability lookup', 'Reservation blocking', 'Calendar synchronization'],
    consumers: [BUSINESS_SERVICE_NAMES.BOOKING, EXTERNAL_CONSUMERS.AI_INTELLIGENCE_LAYER]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.KNOWLEDGE,
    displayName: 'Knowledge Service',
    primaryDomain: 'Operational Knowledge',
    purpose: 'Provides authoritative operational knowledge.',
    primaryResponsibility: 'Knowledge management.',
    owns: ['Policies', 'FAQs', 'Amenities', 'Procedures'],
    dependsOn: [BUSINESS_SERVICE_NAMES.PROPERTY],
    provides: ['Knowledge retrieval', 'Policy lookup', 'FAQ search'],
    consumers: [EXTERNAL_CONSUMERS.AI_INTELLIGENCE_LAYER]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.NOTIFICATION,
    displayName: 'Notification Service',
    primaryDomain: 'Communications',
    purpose: 'Delivers communications.',
    primaryResponsibility: 'Message delivery.',
    owns: ['Notification templates', 'Delivery tracking'],
    dependsOn: [EXTERNAL_DEPENDENCIES.INTEGRATION_LAYER],
    provides: ['Email', 'SMS', 'Messenger', 'Push notifications'],
    consumers: [BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.WORKFLOW]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.PROPERTY,
    displayName: 'Property Service',
    primaryDomain: 'Property Management',
    purpose: 'Maintains property configuration.',
    primaryResponsibility: 'Property management.',
    owns: ['Property configuration', 'Amenities', 'Branding', 'Operational settings'],
    provides: ['Property information', 'Configuration lookup'],
    consumers: [
      BUSINESS_SERVICE_NAMES.PRICING,
      BUSINESS_SERVICE_NAMES.KNOWLEDGE,
      BUSINESS_SERVICE_NAMES.BOOKING
    ]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.AUTHENTICATION,
    displayName: 'Authentication Service',
    primaryDomain: 'Identity & Access',
    purpose: 'Manages platform identity.',
    primaryResponsibility: 'Authentication and authorization.',
    owns: ['Users', 'Roles', 'Permissions', 'Credentials'],
    provides: ['Login', 'Token validation', 'Permission checks'],
    consumers: [EXTERNAL_CONSUMERS.GATEWAY_LAYER, EXTERNAL_CONSUMERS.ADMINISTRATIVE_SERVICES]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.ANALYTICS,
    displayName: 'Analytics Service',
    primaryDomain: 'Reporting & Metrics',
    purpose: 'Produces operational insight.',
    primaryResponsibility: 'Reporting and analytics.',
    owns: ['Metrics', 'Dashboards', 'Business reports'],
    dependsOn: [EXTERNAL_DEPENDENCIES.ALL_OPERATIONAL_SERVICES],
    provides: ['Reporting', 'KPIs', 'Operational dashboards'],
    consumers: [EXTERNAL_CONSUMERS.ADMINISTRATORS, EXTERNAL_CONSUMERS.OWNERS]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.MEDIA,
    displayName: 'Media Service',
    primaryDomain: 'Digital Assets',
    purpose: 'Manages digital assets.',
    primaryResponsibility: 'Media management.',
    owns: ['Images', 'Documents', 'Attachments', 'Generated media'],
    dependsOn: [EXTERNAL_DEPENDENCIES.OBJECT_STORAGE],
    provides: ['Media upload', 'Retrieval', 'Transformation'],
    consumers: [BUSINESS_SERVICE_NAMES.PROPERTY, BUSINESS_SERVICE_NAMES.KNOWLEDGE]
  }),
  new ServiceCatalogEntry({
    serviceName: BUSINESS_SERVICE_NAMES.WORKFLOW,
    displayName: 'Workflow Service',
    primaryDomain: 'Business Process Automation',
    purpose: 'Coordinates multi-step business workflows.',
    primaryResponsibility: 'Business process orchestration.',
    owns: ['Workflow definitions', 'Workflow execution', 'Task coordination'],
    dependsOn: [EXTERNAL_DEPENDENCIES.MULTIPLE_BUSINESS_SERVICES],
    provides: ['Process automation', 'Workflow execution', 'Scheduled jobs'],
    consumers: [EXTERNAL_CONSUMERS.AI_INTELLIGENCE_LAYER, EXTERNAL_CONSUMERS.ADMINISTRATIVE_INTERFACES]
  })
]);

export class ServiceCatalog {
  constructor({ entries = DEFAULT_CATALOG_ENTRIES } = {}) {
    this.entries = new Map();

    for (const entry of entries) {
      this.register(entry);
    }
  }

  register(entry) {
    if (this.entries.has(entry.serviceName)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_CATALOG_ENTRY,
        `Catalog entry for service "${entry.serviceName}" already exists.`
      );
    }

    this.entries.set(entry.serviceName, entry);
    return this;
  }

  listEntries() {
    return Object.freeze([...this.entries.values()]);
  }

  getEntry(serviceName) {
    const entry = this.entries.get(serviceName);

    if (!entry) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.CATALOG_ENTRY_NOT_FOUND,
        `Catalog entry for service "${serviceName}" is not defined.`
      );
    }

    return entry;
  }

  listByPrimaryDomain(primaryDomain) {
    return Object.freeze(
      this.listEntries().filter(entry => entry.primaryDomain === primaryDomain)
    );
  }
}
