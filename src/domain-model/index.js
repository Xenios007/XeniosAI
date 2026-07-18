export {
  BOUNDED_CONTEXT_COMMUNICATION_MECHANISMS,
  BOUNDED_CONTEXT_ISOLATION_ASPECTS,
  BOUNDED_CONTEXT_NAMES,
  BOUNDED_CONTEXT_PRINCIPLES,
  CORE_ENTITY_CHARACTERISTICS,
  CORE_ENTITY_NAMES,
  DOMAIN_BOUNDARY_RULES,
  DOMAIN_CONSISTENCY_MODELS,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_MODELING_PRINCIPLES,
  DOMAIN_RELATIONSHIP_TYPES,
  ENTITY_INTEGRITY_RULES,
  ENTITY_REFERENCE_RULES,
  VALUE_OBJECT_CHARACTERISTICS,
  VALUE_OBJECT_FUTURE_CANDIDATES,
  VALUE_OBJECT_NAMES,
  VALUE_OBJECT_OWNERSHIP_RULES
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
export { EntityDefinition } from './contracts/entity-definition.js';
export { EntityInstance } from './contracts/entity-instance.js';
export { EntityReference } from './contracts/entity-reference.js';
export { EntityStateTransition } from './contracts/entity-state-transition.js';
export { EntityValidationResult } from './contracts/entity-validation-result.js';
export { ValueObjectDefinition } from './contracts/value-object-definition.js';
export { ValueObjectInstance } from './contracts/value-object-instance.js';
export { ValueObjectValidationResult } from './contracts/value-object-validation-result.js';
export { BoundedContextRegistry } from './bounded-contexts/bounded-context-registry.js';
export { CoreEntityRegistry } from './entities/core-entity-registry.js';
export { DomainOverviewDescriptor } from './overview/domain-overview-descriptor.js';
export { ValueObjectRegistry } from './value-objects/value-object-registry.js';
export { addDomainModel } from './service-registration.js';
