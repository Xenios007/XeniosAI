export const DEPLOYMENT_MODEL_ERROR_CODES = Object.freeze({
  DEPLOYMENT_OVERVIEW_INVALID: 'DEPLOYMENT_MODEL_OVERVIEW_INVALID',
  DEPLOYMENT_UNIT_INVALID: 'DEPLOYMENT_MODEL_DEPLOYMENT_UNIT_INVALID',
  DEPLOYMENT_ENVIRONMENT_INVALID: 'DEPLOYMENT_MODEL_ENVIRONMENT_INVALID',
  DEPLOYMENT_BOUNDARY_INVALID: 'DEPLOYMENT_MODEL_BOUNDARY_INVALID'
});

export const DEPLOYMENT_OBJECTIVES = Object.freeze({
  HIGH_AVAILABILITY: 'high-availability',
  HORIZONTAL_SCALABILITY: 'horizontal-scalability',
  FAULT_ISOLATION: 'fault-isolation',
  OPERATIONAL_RESILIENCE: 'operational-resilience',
  PREDICTABLE_PERFORMANCE: 'predictable-performance',
  INFRASTRUCTURE_PORTABILITY: 'infrastructure-portability',
  INDEPENDENT_SERVICE_DEPLOYMENT: 'independent-service-deployment',
  ENTERPRISE_GRADE_RELIABILITY: 'enterprise-grade-reliability'
});

export const DEPLOYMENT_PRINCIPLES = Object.freeze({
  INDEPENDENT_DEPLOYMENT: 'independent-deployment',
  LOOSE_COUPLING: 'loose-coupling',
  INFRASTRUCTURE_INDEPENDENCE: 'infrastructure-independence',
  ELASTIC_SCALABILITY: 'elastic-scalability',
  FAULT_ISOLATION: 'fault-isolation',
  OPERATIONAL_SIMPLICITY: 'operational-simplicity'
});

export const DEPLOYMENT_LAYER_NAMES = Object.freeze({
  USERS: 'Users',
  EDGE: 'Edge',
  GATEWAY: 'Gateway',
  APPLICATION_SERVICES: 'Application Services',
  AI_SERVICES: 'AI Services',
  INFRASTRUCTURE_SERVICES: 'Infrastructure Services',
  STORAGE: 'Storage',
  PLATFORM_INFRASTRUCTURE: 'Platform Infrastructure'
});

export const DEPLOYMENT_ENVIRONMENT_NAMES = Object.freeze({
  DEVELOPMENT: 'Development',
  INTEGRATION: 'Integration',
  TESTING: 'Testing',
  STAGING: 'Staging',
  PRODUCTION: 'Production',
  DISASTER_RECOVERY: 'Disaster Recovery'
});

export const DEPLOYMENT_UNIT_RESPONSIBILITIES = Object.freeze({
  RUNTIME_PROCESS: 'runtime-process',
  CONFIGURATION: 'configuration',
  SCALING_POLICY: 'scaling-policy',
  LIFECYCLE: 'lifecycle',
  HEALTH: 'health',
  OPERATIONAL_METRICS: 'operational-metrics'
});

export const RUNTIME_RESPONSIBILITIES = Object.freeze({
  PROCESS_EXECUTION: 'process-execution',
  NETWORKING: 'networking',
  STORAGE_ACCESS: 'storage-access',
  SERVICE_DISCOVERY: 'service-discovery',
  CONFIGURATION_DELIVERY: 'configuration-delivery',
  HEALTH_MONITORING: 'health-monitoring',
  WORKLOAD_SCHEDULING: 'workload-scheduling'
});

export const DEPLOYMENT_SCALABILITY_STRATEGIES = Object.freeze({
  ADDITIONAL_SERVICE_INSTANCES: 'additional-service-instances',
  INDEPENDENT_WORKLOAD_SCALING: 'independent-workload-scaling',
  DISTRIBUTED_PROCESSING: 'distributed-processing',
  ASYNCHRONOUS_EXECUTION: 'asynchronous-execution',
  STATELESS_COMPUTE: 'stateless-compute'
});

export const DEPLOYMENT_RESILIENCE_STRATEGIES = Object.freeze({
  SERVICE_ISOLATION: 'service-isolation',
  REDUNDANCY: 'redundancy',
  HEALTH_MONITORING: 'health-monitoring',
  GRACEFUL_DEGRADATION: 'graceful-degradation',
  WORKLOAD_REDISTRIBUTION: 'workload-redistribution',
  RETRY_POLICIES: 'retry-policies',
  FAILURE_RECOVERY: 'failure-recovery'
});

export const FUTURE_DEPLOYMENT_CAPABILITIES = Object.freeze({
  MULTI_REGION_DEPLOYMENTS: 'Multi-region deployments',
  ACTIVE_ACTIVE_RUNTIME_TOPOLOGY: 'Active-active runtime topology',
  EDGE_COMPUTING: 'Edge computing',
  AUTONOMOUS_INFRASTRUCTURE_OPTIMIZATION: 'Autonomous infrastructure optimization',
  AI_ASSISTED_WORKLOAD_PLACEMENT: 'AI-assisted workload placement',
  SERVERLESS_EXECUTION_MODELS: 'Serverless execution models',
  GLOBAL_TRAFFIC_DISTRIBUTION: 'Global traffic distribution',
  CARBON_AWARE_WORKLOAD_SCHEDULING: 'Carbon-aware workload scheduling'
});
