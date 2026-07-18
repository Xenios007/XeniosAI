import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import { SERVICE_MAP_ERROR_CODES } from '../constants.js';
import { CapabilityOwnershipRecord } from '../contracts/capability-ownership-record.js';
import { OwnershipValidationResult } from '../contracts/ownership-validation-result.js';

const OWNER_RESPONSIBILITIES = Object.freeze([
  'Business rules',
  'Validation',
  'State transitions',
  'Data integrity',
  'Public contracts',
  'Domain events',
  'Version compatibility'
]);

const DEFAULT_OWNERSHIP_RECORDS = Object.freeze([
  ownership('Reservations', BUSINESS_SERVICE_NAMES.BOOKING, [
    'Reservations',
    'Booking status',
    'Booking history'
  ]),
  ownership('Booking Lifecycle', BUSINESS_SERVICE_NAMES.BOOKING, [
    'Reservations',
    'Booking status',
    'Booking history'
  ]),
  ownership('Pricing Rules', BUSINESS_SERVICE_NAMES.PRICING, [
    'Rate tables',
    'Pricing policies'
  ]),
  ownership('Promotions', BUSINESS_SERVICE_NAMES.PRICING, ['Promotions']),
  ownership('Discounts', BUSINESS_SERVICE_NAMES.PRICING, ['Discount rules']),
  ownership('Availability', BUSINESS_SERVICE_NAMES.CALENDAR, [
    'Availability',
    'Maintenance schedules'
  ]),
  ownership('Reservation Blocks', BUSINESS_SERVICE_NAMES.CALENDAR, [
    'Reservation blocks',
    'Maintenance schedules'
  ]),
  ownership('Property Configuration', BUSINESS_SERVICE_NAMES.PROPERTY, [
    'Property configuration',
    'Operational settings'
  ]),
  ownership('Amenities', BUSINESS_SERVICE_NAMES.PROPERTY, ['Amenities']),
  ownership('Policies', BUSINESS_SERVICE_NAMES.KNOWLEDGE, ['Policies']),
  ownership('FAQs', BUSINESS_SERVICE_NAMES.KNOWLEDGE, ['FAQs']),
  ownership('Notifications', BUSINESS_SERVICE_NAMES.NOTIFICATION, [
    'Notification templates',
    'Delivery tracking'
  ]),
  ownership('User Identity', BUSINESS_SERVICE_NAMES.AUTHENTICATION, [
    'Users',
    'Credentials'
  ]),
  ownership('Roles & Permissions', BUSINESS_SERVICE_NAMES.AUTHENTICATION, [
    'Roles',
    'Permissions'
  ]),
  ownership('Digital Assets', BUSINESS_SERVICE_NAMES.MEDIA, [
    'Images',
    'Documents',
    'Attachments',
    'Media metadata'
  ]),
  ownership('Business Metrics', BUSINESS_SERVICE_NAMES.ANALYTICS, [
    'Metrics',
    'KPIs',
    'Reports',
    'Dashboards'
  ]),
  ownership('Workflow Definitions', BUSINESS_SERVICE_NAMES.WORKFLOW, [
    'Workflow definitions',
    'Workflow execution',
    'Task coordination'
  ])
]);

export class ServiceOwnershipRegistry {
  constructor({ records = DEFAULT_OWNERSHIP_RECORDS } = {}) {
    this.records = new Map();

    for (const record of records) {
      this.register(record);
    }
  }

  register(record) {
    const key = normalizeCapability(record.capability);

    if (this.records.has(key)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_CAPABILITY_OWNER,
        `Capability "${record.capability}" already has an authoritative owner.`
      );
    }

    this.records.set(key, record);
    return this;
  }

  listOwnershipRecords() {
    return Object.freeze([...this.records.values()]);
  }

  getOwner(capability) {
    const record = this.records.get(normalizeCapability(capability));

    if (!record) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.CAPABILITY_OWNER_NOT_FOUND,
        `Capability "${capability}" does not have an authoritative owner.`
      );
    }

    return record;
  }

  validateAuthority({ capability, serviceName }) {
    let record;

    try {
      record = this.getOwner(capability);
    } catch (error) {
      if (error instanceof PlatformError) {
        return OwnershipValidationResult.invalid({
          capability,
          errors: [{ code: error.code, message: error.message }]
        });
      }

      throw error;
    }

    if (record.ownerServiceName !== serviceName) {
      return OwnershipValidationResult.invalid({
        capability,
        owner: record,
        errors: [
          {
            code: SERVICE_MAP_ERROR_CODES.OWNERSHIP_VIOLATION,
            message: `${serviceName} is not the authoritative owner of ${capability}.`
          }
        ]
      });
    }

    return OwnershipValidationResult.valid({
      capability,
      owner: record
    });
  }

  assertAuthority(input) {
    const validation = this.validateAuthority(input);

    if (!validation.isValid) {
      throw new PlatformError(
        validation.errors[0].code,
        validation.errors[0].message,
        {
          capability: input.capability,
          requestedServiceName: input.serviceName,
          ownerServiceName: validation.owner?.ownerServiceName
        }
      );
    }

    return validation.owner;
  }
}

function ownership(capability, ownerServiceName, dataOwnership = []) {
  return new CapabilityOwnershipRecord({
    capability,
    ownerServiceName,
    responsibilities: OWNER_RESPONSIBILITIES,
    dataOwnership
  });
}

function normalizeCapability(capability) {
  return String(capability).trim().toLowerCase();
}
