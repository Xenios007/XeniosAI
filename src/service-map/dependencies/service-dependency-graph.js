import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  EXTERNAL_SERVICE_DEPENDENCIES,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_MAP_ERROR_CODES
} from '../constants.js';
import { ServiceDependencyRecord } from '../contracts/service-dependency-record.js';
import { ServiceDependencyValidationResult } from '../contracts/service-dependency-validation-result.js';

const DEFAULT_DEPENDENCIES = Object.freeze([
  dependency(BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.PRICING, SERVICE_DEPENDENCY_TYPES.FUNCTIONAL),
  dependency(BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.CALENDAR, SERVICE_DEPENDENCY_TYPES.FUNCTIONAL),
  dependency(BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.NOTIFICATION, SERVICE_DEPENDENCY_TYPES.FUNCTIONAL),
  dependency(BUSINESS_SERVICE_NAMES.BOOKING, BUSINESS_SERVICE_NAMES.PROPERTY, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.PRICING, BUSINESS_SERVICE_NAMES.PROPERTY, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.KNOWLEDGE, BUSINESS_SERVICE_NAMES.PROPERTY, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.NOTIFICATION, EXTERNAL_SERVICE_DEPENDENCIES.INTEGRATION_LAYER, SERVICE_DEPENDENCY_TYPES.INFRASTRUCTURE),
  dependency(BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.BOOKING, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.CALENDAR, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.PRICING, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.ANALYTICS, BUSINESS_SERVICE_NAMES.NOTIFICATION, SERVICE_DEPENDENCY_TYPES.INFORMATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.MEDIA, EXTERNAL_SERVICE_DEPENDENCIES.OBJECT_STORAGE, SERVICE_DEPENDENCY_TYPES.INFRASTRUCTURE),
  dependency(BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.BOOKING, SERVICE_DEPENDENCY_TYPES.OPERATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.CALENDAR, SERVICE_DEPENDENCY_TYPES.OPERATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.PRICING, SERVICE_DEPENDENCY_TYPES.OPERATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.NOTIFICATION, SERVICE_DEPENDENCY_TYPES.OPERATIONAL),
  dependency(BUSINESS_SERVICE_NAMES.WORKFLOW, BUSINESS_SERVICE_NAMES.AUTHENTICATION, SERVICE_DEPENDENCY_TYPES.OPERATIONAL)
]);

export class ServiceDependencyGraph {
  constructor({ dependencies = DEFAULT_DEPENDENCIES } = {}) {
    this.dependencies = new Map();
    this.outgoing = new Map();

    for (const dependencyRecord of dependencies) {
      this.register(dependencyRecord);
    }

    this.#assertAcyclic();
  }

  register(dependencyRecord) {
    const key = dependencyKey(dependencyRecord.sourceServiceName, dependencyRecord.targetServiceName);

    if (this.dependencies.has(key)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_SERVICE_DEPENDENCY,
        `Dependency ${key} is already registered.`
      );
    }

    this.dependencies.set(key, dependencyRecord);

    const targets = this.outgoing.get(dependencyRecord.sourceServiceName) ?? new Set();
    targets.add(dependencyRecord.targetServiceName);
    this.outgoing.set(dependencyRecord.sourceServiceName, targets);

    this.#assertAcyclic();
    return this;
  }

  listDependencies() {
    return Object.freeze([...this.dependencies.values()]);
  }

  listDependenciesFor(serviceName) {
    return Object.freeze(
      this.listDependencies().filter(dependencyRecord => dependencyRecord.sourceServiceName === serviceName)
    );
  }

  getDependency(sourceServiceName, targetServiceName) {
    const key = dependencyKey(sourceServiceName, targetServiceName);
    const dependencyRecord = this.dependencies.get(key);

    if (!dependencyRecord) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.SERVICE_DEPENDENCY_NOT_FOUND,
        `Dependency ${key} is not registered.`
      );
    }

    return dependencyRecord;
  }

  validateDependency(sourceServiceName, targetServiceName) {
    const key = dependencyKey(sourceServiceName, targetServiceName);
    const dependencyRecord = this.dependencies.get(key);

    if (!dependencyRecord) {
      return ServiceDependencyValidationResult.rejected({
        errors: [
          {
            code: SERVICE_MAP_ERROR_CODES.SERVICE_DEPENDENCY_NOT_ALLOWED,
            message: `Dependency ${key} is not allowed by ARCH-003-04.`
          }
        ]
      });
    }

    return ServiceDependencyValidationResult.allowed(dependencyRecord);
  }

  assertDependencyAllowed(sourceServiceName, targetServiceName) {
    const validation = this.validateDependency(sourceServiceName, targetServiceName);

    if (!validation.isAllowed) {
      throw new PlatformError(
        validation.errors[0].code,
        validation.errors[0].message,
        {
          sourceServiceName,
          targetServiceName
        }
      );
    }

    return validation.dependency;
  }

  #assertAcyclic() {
    const visiting = new Set();
    const visited = new Set();

    for (const serviceName of this.outgoing.keys()) {
      if (this.#hasCycleFrom(serviceName, visiting, visited)) {
        throw new PlatformError(
          SERVICE_MAP_ERROR_CODES.CIRCULAR_SERVICE_DEPENDENCY,
          `Circular service dependency detected at "${serviceName}".`
        );
      }
    }
  }

  #hasCycleFrom(serviceName, visiting, visited) {
    if (visiting.has(serviceName)) return true;
    if (visited.has(serviceName)) return false;

    visiting.add(serviceName);

    for (const targetServiceName of this.outgoing.get(serviceName) ?? []) {
      if (isExternalDependency(targetServiceName)) continue;
      if (this.#hasCycleFrom(targetServiceName, visiting, visited)) return true;
    }

    visiting.delete(serviceName);
    visited.add(serviceName);
    return false;
  }
}

function dependency(sourceServiceName, targetServiceName, dependencyType) {
  return new ServiceDependencyRecord({
    sourceServiceName,
    targetServiceName,
    dependencyType,
    contractVersion: 'v1',
    description: `${sourceServiceName} depends on ${targetServiceName} through a documented contract.`
  });
}

function dependencyKey(sourceServiceName, targetServiceName) {
  return `${sourceServiceName}->${targetServiceName}`;
}

function isExternalDependency(serviceName) {
  return Object.values(EXTERNAL_SERVICE_DEPENDENCIES).includes(serviceName);
}
