export {
  EXTERNAL_COLLABORATORS,
  EXTERNAL_SERVICE_DEPENDENCIES,
  COMMUNICATION_SURFACES,
  FUTURE_SERVICE_EVALUATION_DECISIONS,
  FUTURE_SERVICE_TYPES,
  SERVICE_CATEGORY_NAMES,
  SERVICE_COMMUNICATION_PATTERNS,
  SERVICE_DEPENDENCY_TYPES,
  SERVICE_LIFECYCLE_CHECKPOINTS,
  SERVICE_LIFECYCLE_STAGES,
  SERVICE_MAP_ERROR_CODES,
  SERVICE_GOVERNANCE_SCOPES,
  SERVICE_MATURITY_LEVELS,
  VERSION_CHANGE_TYPES,
  VERSIONED_ARTIFACT_TYPES
} from './constants.js';
export { ServiceBoundaryRegistry } from './boundaries/service-boundary-registry.js';
export { ServiceCommunicationRegistry } from './communication/service-communication-registry.js';
export { BoundaryValidationResult } from './contracts/boundary-validation-result.js';
export { CommunicationValidationResult } from './contracts/communication-validation-result.js';
export { FutureServiceCandidate } from './contracts/future-service-candidate.js';
export { FutureServiceEvaluation } from './contracts/future-service-evaluation.js';
export { FutureServiceEvaluationResult } from './contracts/future-service-evaluation-result.js';
export { GovernanceChangeRequest } from './contracts/governance-change-request.js';
export { GovernanceExceptionRecord } from './contracts/governance-exception-record.js';
export { GovernanceReviewResult } from './contracts/governance-review-result.js';
export { LifecycleTransitionResult } from './contracts/lifecycle-transition-result.js';
export { ServiceCatalog } from './catalog/service-catalog.js';
export { CapabilityOwnershipRecord } from './contracts/capability-ownership-record.js';
export { OwnershipValidationResult } from './contracts/ownership-validation-result.js';
export { ServiceCategory } from './contracts/service-category.js';
export { ServiceCatalogEntry } from './contracts/service-catalog-entry.js';
export { ServiceCommunicationContract } from './contracts/service-communication-contract.js';
export { ServiceBoundary } from './contracts/service-boundary.js';
export { ServiceDependencyRecord } from './contracts/service-dependency-record.js';
export { ServiceDependencyValidationResult } from './contracts/service-dependency-validation-result.js';
export { ServiceDescriptor } from './contracts/service-descriptor.js';
export { ServiceGovernanceProfile } from './contracts/service-governance-profile.js';
export { ServiceLandscapeSnapshot } from './contracts/service-landscape-snapshot.js';
export { ServiceLifecycleRecord } from './contracts/service-lifecycle-record.js';
export { VersionChangeProposal } from './contracts/version-change-proposal.js';
export { VersionValidationResult } from './contracts/version-validation-result.js';
export { VersionedArtifactRecord } from './contracts/versioned-artifact-record.js';
export { SharedConcept } from './contracts/shared-concept.js';
export { ServiceDependencyGraph } from './dependencies/service-dependency-graph.js';
export { FutureServiceRegistry } from './future/future-service-registry.js';
export { ServiceGovernanceRegistry } from './governance/service-governance-registry.js';
export { ServiceLandscape } from './landscape/service-landscape.js';
export { ServiceLifecycleRegistry } from './lifecycle/service-lifecycle-registry.js';
export { ServiceOwnershipRegistry } from './ownership/service-ownership-registry.js';
export { ServiceVersionRegistry } from './versioning/service-version-registry.js';
export { addServiceMap } from './service-registration.js';
