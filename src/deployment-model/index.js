export {
  APPLICATION_RECOVERY_AREAS,
  DEPLOYMENT_ENVIRONMENT_NAMES,
  DEPLOYMENT_LAYER_NAMES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  DEPLOYMENT_OBJECTIVES,
  DEPLOYMENT_PRINCIPLES,
  DEPLOYMENT_RESILIENCE_STRATEGIES,
  DEPLOYMENT_SCALABILITY_STRATEGIES,
  DEPLOYMENT_UNIT_RESPONSIBILITIES,
  CONFIGURATION_PRINCIPLES,
  AUTOMATIC_RECOVERY_MECHANISMS,
  AVAILABILITY_GOVERNANCE_CONTROLS,
  AVAILABILITY_MODEL_STAGES,
  AVAILABILITY_MONITORING_METRICS,
  COMPUTE_CATEGORY_NAMES,
  COMPUTE_ISOLATION_AREAS,
  COMPUTE_LIFECYCLE_STAGES,
  COMPUTE_OBJECTIVES,
  COMPUTE_OPERATIONAL_CHARACTERISTICS,
  COMPUTE_RESOURCE_OWNERSHIP,
  COMPUTE_SCHEDULING_CONSIDERATIONS,
  COMPUTE_WORKLOAD_CLASSIFICATIONS,
  BACKUP_CAPABILITIES,
  BACKUP_PRINCIPLES,
  DATA_LIFECYCLE_STAGES,
  DATA_RECOVERY_AREAS,
  DEPLOYMENT_EVOLUTION_GOVERNANCE_CONTROLS,
  DEPLOYMENT_EVOLUTION_OBJECTIVES,
  DEPLOYMENT_EVOLUTION_PRINCIPLES,
  ENVIRONMENT_GOVERNANCE_CONTROLS,
  ENVIRONMENT_ISOLATION_AREAS,
  ENVIRONMENT_MONITORING_CAPABILITIES,
  ENVIRONMENT_OBJECTIVES,
  ENVIRONMENT_RESPONSIBILITIES,
  FEATURE_ROLLOUT_STAGES,
  CAPACITY_BUFFER_DRIVERS,
  DEPENDENCY_RESILIENCE_STRATEGIES,
  FAILURE_DETECTION_MECHANISMS,
  FAILURE_DOMAIN_TYPES,
  DISASTER_CLASSIFICATION_TYPES,
  DISASTER_RECOVERY_GOVERNANCE_CONTROLS,
  DISASTER_RECOVERY_MODEL_STAGES,
  DISASTER_RECOVERY_OBJECTIVES,
  DISASTER_RECOVERY_TESTING_ACTIVITIES,
  FUTURE_DEPLOYMENT_CAPABILITIES,
  FUTURE_AI_INFRASTRUCTURE_CAPABILITIES,
  FUTURE_COMPUTE_CAPABILITIES,
  FUTURE_COMPUTE_EVOLUTION_CAPABILITIES,
  FUTURE_DEPLOYMENT_AUTOMATION_CAPABILITIES,
  FUTURE_DISASTER_RECOVERY_CAPABILITIES,
  FUTURE_ENVIRONMENT_CAPABILITIES,
  FUTURE_HIGH_AVAILABILITY_CAPABILITIES,
  FUTURE_NETWORK_CAPABILITIES,
  FUTURE_NETWORK_EVOLUTION_CAPABILITIES,
  FUTURE_OBSERVABILITY_EVOLUTION_CAPABILITIES,
  FUTURE_OPERATIONAL_INTELLIGENCE_CAPABILITIES,
  FUTURE_RUNTIME_CAPABILITIES,
  FUTURE_SECURITY_EVOLUTION_CAPABILITIES,
  FUTURE_SERVICE_DEPLOYMENT_CAPABILITIES,
  FUTURE_STORAGE_EVOLUTION_CAPABILITIES,
  FUTURE_STORAGE_CAPABILITIES,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES,
  GRACEFUL_DEGRADATION_STRATEGIES,
  HEALTH_INDICATORS,
  HIGH_AVAILABILITY_OBJECTIVES,
  INFRASTRUCTURE_EVOLUTION_STAGES,
  INFRASTRUCTURE_RECOVERY_AREAS,
  LONG_TERM_DEPLOYMENT_CHARACTERISTICS,
  MAINTENANCE_PRINCIPLES,
  NETWORK_COMMUNICATION_METHODS,
  NETWORK_DISCOVERY_CAPABILITIES,
  NETWORK_GOVERNANCE_CONTROLS,
  NETWORK_OBJECTIVES,
  NETWORK_OBSERVABILITY_CAPABILITIES,
  NETWORK_RESILIENCE_CAPABILITIES,
  NETWORK_SEGMENTATION_AREAS,
  NETWORK_TRAFFIC_DIRECTIONS,
  NETWORK_ZONE_NAMES,
  RUNTIME_BOUNDARY_RESPONSIBILITIES,
  RUNTIME_FAILURE_HANDLING_CAPABILITIES,
  RUNTIME_GOVERNANCE_CONTROLS,
  RUNTIME_INTERACTION_PATTERNS,
  RUNTIME_ISOLATION_AREAS,
  RUNTIME_LAYER_NAMES,
  RUNTIME_OBJECTIVES,
  RUNTIME_OBSERVABILITY_CAPABILITIES,
  RUNTIME_RESPONSIBILITIES,
  REDUNDANCY_TARGETS,
  RECOVERY_ARCHITECTURE_CAPABILITIES,
  RECOVERY_ENVIRONMENT_MODELS,
  RECOVERY_PRIORITY_ORDER,
  RECOVERY_VALIDATION_ACTIVITIES,
  REPLICATION_OBJECTIVES,
  SERVICE_COMPATIBILITY_APPROACHES,
  SERVICE_CONFIGURATION_INPUTS,
  SERVICE_DEPENDENCY_CATEGORIES,
  SERVICE_DEPLOYMENT_GOVERNANCE,
  SERVICE_DEPLOYMENT_LIFECYCLE_ACTIVITIES,
  SERVICE_DEPLOYMENT_LIFECYCLE_STAGES,
  SERVICE_DEPLOYMENT_OBJECTIVES,
  SERVICE_DEPLOYMENT_OBSERVABILITY,
  SERVICE_DEPLOYMENT_STRATEGIES,
  SERVICE_DEPLOYMENT_UNIT_OWNERSHIP,
  SERVICE_HEALTH_SIGNALS,
  SERVICE_PACKAGE_CONTENTS,
  SERVICE_RECOVERY_CAPABILITIES,
  SERVICE_SCALING_CONSIDERATIONS,
  SERVICE_VERSION_METADATA_FIELDS,
  STORAGE_CATEGORY_NAMES,
  STORAGE_CONSISTENCY_MODELS,
  STORAGE_GOVERNANCE_CONTROLS,
  STORAGE_ISOLATION_AREAS,
  STORAGE_OBJECTIVES,
  STORAGE_PROTECTION_CAPABILITIES,
  SUSTAINABILITY_OBJECTIVES,
  TECHNOLOGY_INDEPENDENCE_TARGETS,
  WORKLOAD_CATEGORIES
} from './constants.js';
export { AvailabilityComponent } from './contracts/availability-component.js';
export { AvailabilityValidationResult } from './contracts/availability-validation-result.js';
export { ComputeCategory } from './contracts/compute-category.js';
export { ComputeLifecycleRecord } from './contracts/compute-lifecycle-record.js';
export { ComputeResourceAllocation } from './contracts/compute-resource-allocation.js';
export { ComputeSchedulingPolicy } from './contracts/compute-scheduling-policy.js';
export { ComputeValidationResult } from './contracts/compute-validation-result.js';
export { DeploymentBoundary } from './contracts/deployment-boundary.js';
export { DeploymentEvolutionAssessment } from './contracts/deployment-evolution-assessment.js';
export { DeploymentEvolutionCandidate } from './contracts/deployment-evolution-candidate.js';
export { DeploymentEvolutionValidationResult } from './contracts/deployment-evolution-validation-result.js';
export { DeploymentEnvironment } from './contracts/deployment-environment.js';
export { DeploymentLayer } from './contracts/deployment-layer.js';
export { DeploymentUnit } from './contracts/deployment-unit.js';
export { DeploymentValidationResult } from './contracts/deployment-validation-result.js';
export { DataLifecyclePolicy } from './contracts/data-lifecycle-policy.js';
export { DegradationStrategy } from './contracts/degradation-strategy.js';
export { DisasterClassification } from './contracts/disaster-classification.js';
export { DisasterRecoveryValidationResult } from './contracts/disaster-recovery-validation-result.js';
export { EnvironmentConfiguration } from './contracts/environment-configuration.js';
export { EnvironmentDataStrategy } from './contracts/environment-data-strategy.js';
export { EnvironmentDefinition } from './contracts/environment-definition.js';
export { EnvironmentPromotion } from './contracts/environment-promotion.js';
export { EnvironmentValidationResult } from './contracts/environment-validation-result.js';
export { FailureDomainPolicy } from './contracts/failure-domain-policy.js';
export { NetworkRoute } from './contracts/network-route.js';
export { NetworkValidationResult } from './contracts/network-validation-result.js';
export { NetworkZone } from './contracts/network-zone.js';
export { RuntimeComponent } from './contracts/runtime-component.js';
export { RuntimeInteraction } from './contracts/runtime-interaction.js';
export { RuntimeValidationResult } from './contracts/runtime-validation-result.js';
export { RuntimeWorkloadProfile } from './contracts/runtime-workload-profile.js';
export { RecoveryPlan } from './contracts/recovery-plan.js';
export { RecoveryValidationPolicy } from './contracts/recovery-validation-policy.js';
export { ServiceDeploymentUnit } from './contracts/service-deployment-unit.js';
export { ServiceDeploymentValidationResult } from './contracts/service-deployment-validation-result.js';
export { ServicePackageDefinition } from './contracts/service-package-definition.js';
export { ServiceReleasePolicy } from './contracts/service-release-policy.js';
export { StorageBackupPolicy } from './contracts/storage-backup-policy.js';
export { StorageCategory } from './contracts/storage-category.js';
export { StorageOwnershipRecord } from './contracts/storage-ownership-record.js';
export { StorageValidationResult } from './contracts/storage-validation-result.js';
export { HighAvailabilityDescriptor } from './availability/high-availability-descriptor.js';
export { ComputeModelDescriptor } from './compute/compute-model-descriptor.js';
export { DisasterRecoveryDescriptor } from './disaster-recovery/disaster-recovery-descriptor.js';
export { EnvironmentStrategyDescriptor } from './environments/environment-strategy-descriptor.js';
export { FutureDeploymentEvolutionDescriptor } from './future/future-deployment-evolution-descriptor.js';
export { NetworkTopologyDescriptor } from './network/network-topology-descriptor.js';
export { DeploymentOverviewDescriptor } from './overview/deployment-overview-descriptor.js';
export { RuntimeTopologyDescriptor } from './runtime/runtime-topology-descriptor.js';
export { ServiceDeploymentDescriptor } from './service-deployment/service-deployment-descriptor.js';
export { StorageTopologyDescriptor } from './storage/storage-topology-descriptor.js';
export { addDeploymentModel } from './service-registration.js';
