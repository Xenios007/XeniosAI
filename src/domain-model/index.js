export {
  DOMAIN_BOUNDARY_RULES,
  DOMAIN_CONSISTENCY_MODELS,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_MODELING_PRINCIPLES,
  DOMAIN_RELATIONSHIP_TYPES
} from './constants.js';
export { DomainCapability } from './contracts/domain-capability.js';
export { DomainConcept } from './contracts/domain-concept.js';
export { DomainDescriptor } from './contracts/domain-descriptor.js';
export { DomainRelationship } from './contracts/domain-relationship.js';
export { DomainStateModel } from './contracts/domain-state-model.js';
export { DomainValidationResult } from './contracts/domain-validation-result.js';
export { DomainOverviewDescriptor } from './overview/domain-overview-descriptor.js';
export { addDomainModel } from './service-registration.js';
