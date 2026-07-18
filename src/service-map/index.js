export {
  EXTERNAL_SERVICE_DEPENDENCIES,
  SERVICE_CATEGORY_NAMES,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_LIFECYCLE_STAGES,
  SERVICE_MAP_ERROR_CODES
} from './constants.js';
export { ServiceCatalog } from './catalog/service-catalog.js';
export { CapabilityOwnershipRecord } from './contracts/capability-ownership-record.js';
export { OwnershipValidationResult } from './contracts/ownership-validation-result.js';
export { ServiceCategory } from './contracts/service-category.js';
export { ServiceCatalogEntry } from './contracts/service-catalog-entry.js';
export { ServiceDependencyRecord } from './contracts/service-dependency-record.js';
export { ServiceDependencyValidationResult } from './contracts/service-dependency-validation-result.js';
export { ServiceDescriptor } from './contracts/service-descriptor.js';
export { ServiceLandscapeSnapshot } from './contracts/service-landscape-snapshot.js';
export { ServiceDependencyGraph } from './dependencies/service-dependency-graph.js';
export { ServiceLandscape } from './landscape/service-landscape.js';
export { ServiceOwnershipRegistry } from './ownership/service-ownership-registry.js';
export { addServiceMap } from './service-registration.js';
