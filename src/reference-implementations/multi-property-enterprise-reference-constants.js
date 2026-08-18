export const MULTI_PROPERTY_ENTERPRISE_REFERENCE_ERROR_CODE = 'MULTI_PROPERTY_ENTERPRISE_REFERENCE_INVALID';

export const ENTERPRISE_ACTORS = Object.freeze({
  PLATFORM: 'platform', TENANT_HOSPITALITY_ORGANIZATION: 'tenant-hospitality-organization',
  CORPORATE_TEAM: 'corporate-team', PROPERTY_TEAM: 'property-team'
});

export const HIERARCHY_LEVELS = Object.freeze({
  PLATFORM: 'platform', TENANT: 'tenant', REGION_OR_BRAND: 'region-or-brand', PROPERTY: 'property'
});

export const ENTERPRISE_CAPABILITIES = Object.freeze({
  TENANT_ONBOARDING_LIFECYCLE: 'tenant-onboarding-and-lifecycle', PROPERTY_PROVISIONING_TRANSFER: 'property-provisioning-and-transfer',
  IDENTITY_FEDERATION: 'identity-federation', PORTFOLIO_PROPERTY_ROLES: 'portfolio-and-property-roles',
  SHARED_LOCAL_CONFIGURATION: 'shared-and-local-configuration', PORTFOLIO_AVAILABILITY_REPORTING: 'portfolio-availability-and-reporting',
  CROSS_PROPERTY_WORKFLOWS: 'cross-property-workflows', SHARED_PROPERTY_SPECIFIC_INTEGRATIONS: 'shared-and-property-specific-integrations',
  SERVICE_TIERS_ENTITLEMENTS_QUOTAS_USAGE: 'service-tiers-entitlements-quotas-and-usage', REGION_RESIDENCY_PLACEMENT: 'region-and-residency-placement',
  TENANT_AWARE_INCIDENTS_CONTINUITY: 'tenant-aware-incidents-and-continuity'
});

export const ACCESS_MODEL_DIMENSIONS = Object.freeze({
  AUTHENTICATION: 'authentication', TENANT_MEMBERSHIP: 'tenant-membership', PROPERTY_SCOPE: 'property-scope',
  ROLE: 'role', PURPOSE: 'purpose', ENTITLEMENT: 'entitlement', RESOURCE_OWNERSHIP: 'resource-ownership',
  LIFECYCLE: 'lifecycle', POLICY: 'policy'
});

export const CONFIGURATION_PRECEDENCE_LEVELS = Object.freeze({
  MANDATORY_PLATFORM_CONTROLS: 'mandatory-platform-controls', PLATFORM_DEFAULTS: 'platform-defaults',
  SERVICE_TIER: 'service-tier', TENANT: 'tenant', ORGANIZATIONAL_UNIT: 'organizational-unit',
  PROPERTY: 'property', WORKFLOW: 'workflow', PERMITTED_USER_PREFERENCES: 'permitted-user-preferences'
});

export const DATA_ISOLATION_CONTROLS = Object.freeze({
  TENANT_OWNERSHIP: 'tenant-ownership', PROPERTY_OWNERSHIP: 'property-ownership', SHARED_PLACEMENT: 'shared-placement',
  PARTITIONED_PLACEMENT: 'partitioned-placement', DEDICATED_PLACEMENT: 'dedicated-placement'
});

export const KNOWLEDGE_AND_MEMORY_SCOPES = Object.freeze({
  TENANT_WIDE_KNOWLEDGE: 'tenant-wide-knowledge', PROPERTY_LOCAL_KNOWLEDGE: 'property-local-knowledge',
  RETRIEVAL_SCOPE_FILTER: 'retrieval-scope-filter', MEMORY_SUBJECT: 'memory-subject', MEMORY_TENANT: 'memory-tenant',
  MEMORY_PROPERTY: 'memory-property', MEMORY_PURPOSE: 'memory-purpose', MEMORY_RETENTION: 'memory-retention',
  MEMORY_DELETION: 'memory-deletion'
});

export const CROSS_PROPERTY_WORKFLOW_STEPS = Object.freeze({
  QUERY_ELIGIBLE_PROPERTIES: 'query-eligible-properties', APPLY_TENANT_POLICY: 'apply-tenant-policy',
  DELEGATE_PROPERTY_SPECIFIC_TASKS: 'delegate-property-specific-tasks', COLLECT_RESULTS: 'collect-results',
  HANDLE_TIMEOUTS: 'handle-timeouts', PRESERVE_PER_PROPERTY_AUTHORIZATION: 'preserve-per-property-authorization'
});

export const INTEGRATION_TOPOLOGY_DIMENSIONS = Object.freeze({
  TENANT_WIDE_CONNECTIONS: 'tenant-wide-connections', PROPERTY_SPECIFIC_CONNECTIONS: 'property-specific-connections',
  CREDENTIALS: 'credentials', EXTERNAL_ACCOUNT_MAPPINGS: 'external-account-mappings', CALLBACKS: 'callbacks',
  QUOTAS: 'quotas', DELIVERY_HISTORY: 'delivery-history', RESIDENCY: 'residency'
});

export const RESOURCE_GOVERNANCE_SCOPES = Object.freeze({
  PLATFORM: 'platform', CELL: 'cell', TIER: 'tier', TENANT: 'tenant', PROPERTY: 'property',
  CAPABILITY: 'capability', WORKFLOW: 'workflow', AGENT: 'agent', INTEGRATION: 'integration'
});

export const DEPLOYMENT_VARIANTS = Object.freeze({
  SHARED_LOGICAL_ISOLATION: 'shared-logical-isolation', PARTITIONED_TENANT_PLACEMENT: 'partitioned-tenant-placement',
  DEDICATED_TENANT_PLACEMENT: 'dedicated-tenant-placement', REGIONAL_CELLS: 'regional-cells'
});

export const OPERATIONS_VISIBILITY_DIMENSIONS = Object.freeze({
  TENANT: 'tenant', PROPERTY: 'property', TIER: 'tier', REGION: 'region', CELL: 'cell',
  CAPABILITY: 'capability', INTEGRATION: 'integration'
});

export const ENTERPRISE_FAILURE_SCENARIOS = Object.freeze({
  TENANT_ROUTING_MISMATCH: 'tenant-routing-mismatch', PROPERTY_OWNERSHIP_CONFLICT: 'property-ownership-conflict',
  FEDERATION_OUTAGE: 'federation-outage', NOISY_TENANT_WORKLOAD: 'noisy-tenant-workload',
  REGIONAL_INTEGRATION_FAILURE: 'regional-integration-failure', CROSS_PROPERTY_WORKFLOW_PARTIAL_COMPLETION: 'cross-property-workflow-partial-completion',
  TENANT_SPECIFIC_DATA_CORRUPTION: 'tenant-specific-data-corruption', PLACEMENT_MIGRATION_ROLLBACK: 'placement-migration-rollback'
});

export const ENTERPRISE_REFERENCE_ACCEPTANCE_CRITERIA = Object.freeze({
  TENANT_PROPERTY_CONTEXTS_SURVIVE_SYNC_ASYNC_BOUNDARIES: 'tenant-and-property-contexts-survive-all-sync-and-async-boundaries',
  PROVIDER_SERVICES_REJECT_CROSS_TENANT_RESOURCES: 'provider-services-reject-cross-tenant-resources',
  TENANT_CONFIGURATION_CANNOT_CHANGE_PLATFORM_POLICY_FLOORS: 'tenant-configuration-cannot-change-platform-policy-floors',
  WORKLOAD_CONTENTION_REMAINS_BOUNDED: 'workload-contention-remains-bounded',
  INCIDENTS_IDENTIFY_AFFECTED_TENANT_SCOPE: 'incidents-identify-affected-tenant-scope',
  TENANT_RESTORE_AND_MIGRATION_PRESERVE_OTHER_TENANTS: 'tenant-restore-and-migration-preserve-other-tenants'
});

export const MULTI_PROPERTY_ARCHITECTURAL_RULES = Object.freeze({
  ENTERPRISE_REFERENCE_EVOLVES_SAME_DOMAIN_SEMANTICS: 'enterprise-reference-evolves-the-same-domain-semantics-rather-than-forking-the-single-property-product',
  PORTFOLIO_HIERARCHY_DOES_NOT_IMPLY_VISIBILITY: 'portfolio-hierarchy-does-not-imply-visibility',
  ISOLATION_TOPOLOGY_REPLACEABLE_BEHIND_STABLE_TENANT_CONTRACTS: 'isolation-topology-is-replaceable-behind-stable-tenant-contracts',
  SHARED_SERVICES_RETAIN_PROVIDER_SIDE_TENANT_VALIDATION: 'shared-services-retain-provider-side-tenant-validation'
});
