export {
  BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS,
  BOUNDED_CONTEXT_ISOLATION_ASPECTS,
  BOUNDED_CONTEXT_NAMES,
  BOUNDED_CONTEXT_PRINCIPLES,
  DOMAIN_BOUNDARY_RULES,
  DOMAIN_CONSISTENCY_MODELS,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_MODELING_PRINCIPLES,
  DOMAIN_RELATIONSHIP_TYPES
} from './constants.js';
export { BoundedContext } from './contracts/bounded-context.js';
export { BoundedContextValidationResult } from './contracts/bounded-context-validation-result.js';
export { ContextCollaboration } from './contracts/context-collaboration.js';
export { ContextConceptOwnership } from './contracts/context-concept-ownership.js';
export { ContextIsolationRecord } from './contracts/context-isolation-record.js';
export { DomainCapability } from './contracts/domain-capability.js';
export { DomainConcept } from './contracts/domain-concept.js';
export { DomainDescriptor } from './contracts/domain-descriptor.js';
export { DomainRelationship } from './contracts/domain-relationship.js';
export { DomainStateModel } from './contracts/domain-state-model.js';
export { DomainValidationResult } from './contracts/domain-validation-result.js';
export { BoundedContextRegistry } from './bounded-contexts/bounded-context-registry.js';
export { DomainOverviewDescriptor } from './overview/domain-overview-descriptor.js';
export { addDomainModel } from './service-registration.js';
