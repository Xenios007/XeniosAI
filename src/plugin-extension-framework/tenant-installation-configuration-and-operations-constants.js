export const TENANT_INSTALLATION_CONFIGURATION_AND_OPERATIONS_ERROR_CODE = 'TENANT_INSTALLATION_CONFIGURATION_AND_OPERATIONS_INVALID';

export const TENANT_PRINCIPLES = Object.freeze({
  TENANTS_CONTROL_WITHIN_POLICY: 'tenants-control-installation-within-platform-policy',
  APPROVAL_INFORMED_CAPABILITY_SPECIFIC: 'installation-approval-is-informed-and-capability-specific',
  EXPLICIT_PROPERTY_SCOPE: 'property-scope-is-explicit', CONFIG_CANNOT_WEAKEN_CONTROLS: 'configuration-cannot-weaken-mandatory-controls',
  SECRETS_PLATFORM_MANAGED: 'secrets-remain-platform-managed',
  HEALTH_COST_VISIBLE: 'extension-health-and-cost-are-visible-to-authorized-tenant-roles',
  UPDATES_FOLLOW_POLICY: 'updates-follow-tenant-policy-and-security-authority',
  SUPPORT_PRESERVES_IDENTITY: 'support-access-preserves-actor-identity',
  DATA_PARTICIPATES_LIFECYCLE: 'extension-owned-data-participates-in-tenant-lifecycle',
  UNINSTALL_COMPLETE_AFTER_RECONCILIATION: 'uninstall-is-complete-only-after-access-and-data-reconciliation'
});

export const TENANT_ROLES = Object.freeze({
  CATALOG_VIEWER: 'extension-catalog-viewer', EXTENSION_REQUESTER: 'extension-requester',
  TENANT_EXTENSION_ADMINISTRATOR: 'tenant-extension-administrator', PROPERTY_EXTENSION_ADMINISTRATOR: 'property-extension-administrator',
  SECURITY_PRIVACY_APPROVER: 'security-or-privacy-approver', INTEGRATION_ADMINISTRATOR: 'integration-administrator',
  BILLING_ADMINISTRATOR: 'billing-administrator', TENANT_AUDITOR: 'tenant-auditor', SUPPORT_PARTICIPANT: 'support-participant'
});

export const DISCOVERY_CATALOG_FIELDS = Object.freeze({
  PUBLISHER_SUPPORT_OWNER: 'publisher-and-support-owner', PURPOSE_COMPATIBLE_CAPABILITIES: 'purpose-and-compatible-platform-capabilities',
  CERTIFICATION_ADVISORY_STATUS: 'certification-and-advisory-status', REQUESTED_CAPABILITIES: 'requested-capabilities',
  DATA_CATEGORIES_EXTERNAL_PROCESSORS: 'data-categories-and-external-processors', PROPERTY_SUPPORT: 'property-support',
  RESOURCE_USAGE_EXPECTATIONS: 'resource-and-usage-expectations', PRICING_ENTITLEMENT_REFERENCES: 'pricing-and-entitlement-references',
  UPDATE_POLICY: 'update-policy', UNINSTALL_DATA_DISPOSITION: 'uninstall-and-data-disposition'
});

export const INSTALLATION_REQUEST_FIELDS = Object.freeze({
  TENANT_REQUESTED_PROPERTIES: 'tenant-and-requested-properties', PACKAGE_VERSION_POLICY: 'package-and-version-policy',
  REQUESTER_BUSINESS_PURPOSE: 'requester-and-business-purpose', CAPABILITIES_DATA_NEEDED: 'capabilities-and-data-needed',
  EXTERNAL_DESTINATIONS_PROCESSORS: 'external-destinations-and-processors', CONFIGURATION_SECRETS_REFERENCES: 'configuration-and-secrets-references',
  EXPECTED_VOLUME_COST: 'expected-volume-and-cost', SUPPORT_OWNER: 'support-owner', EFFECTIVE_REVIEW_DATES: 'effective-and-review-dates'
});

export const ASSESSMENT_CONSIDERATIONS = Object.freeze({
  TENANT_POLICY_LIFECYCLE: 'tenant-policy-and-lifecycle', INSTALLER_DELEGATED_AUTHORITY: 'installer-delegated-authority',
  EXTENSION_RISK_CERTIFICATION: 'extension-risk-and-certification', CAPABILITY_SENSITIVITY: 'capability-sensitivity',
  PROPERTY_USER_SCOPE: 'property-and-user-scope', DATA_CLASSIFICATION_RESIDENCY: 'data-classification-and-residency',
  EXTERNAL_PROCESSOR_APPROVAL: 'external-processor-approval', RESOURCE_CAPACITY_QUOTA: 'resource-capacity-and-quota',
  EXISTING_EXTENSION_CONFLICTS: 'existing-extension-conflicts', COMMERCIAL_ENTITLEMENT: 'commercial-entitlement',
  SUPPORT_CONTINUITY: 'support-and-continuity', UNINSTALL_OBLIGATIONS: 'uninstall-obligations'
});

export const INFORMED_CONSENT_ELEMENTS = Object.freeze({
  READ_WRITE_OPERATIONS: 'read-and-write-operations', DATA_CATEGORIES: 'data-categories', PROPERTY_BREADTH: 'property-breadth',
  EXTERNAL_TRANSFERS: 'external-transfers', BACKGROUND_EXECUTION: 'background-execution',
  AGENT_WORKFLOW_AUTHORITY: 'agent-or-workflow-authority', UI_ACCESS: 'user-interface-access',
  SECRETS_CONNECTIONS: 'secrets-and-connections', RESOURCE_COMMERCIAL_IMPACT: 'resource-and-commercial-impact',
  RETENTION_AFTER_UNINSTALL: 'retention-after-uninstall'
});

export const PROPERTY_SCOPE_RULES = Object.freeze({
  TENANT_WIDE_INSTALL_LIMITED_GRANTS: 'installation-may-be-tenant-wide-while-grants-are-limited-to-selected-properties',
  DELEGATED_SCOPE_ONLY: 'property-administrators-act-only-within-delegated-property-scope-and-tenant-policy',
  NEW_PROPERTIES_NOT_AUTO_INCLUDED: 'new-properties-are-not-automatically-included-without-approved-dynamic-tenant-wide-scope'
});

export const CONFIGURATION_PROPERTIES = Object.freeze({
  TENANT_INSTALLATION_SCOPED: 'tenant-and-installation-scoped', SCHEMA_VALIDATED: 'schema-validated', VERSIONED: 'versioned',
  ATTRIBUTABLE: 'attributable', EFFECTIVE_DATED: 'effective-dated', POLICY_CHECKED: 'policy-checked',
  ROLLBACK_GOVERNED: 'rollback-governed', FREE_OF_SECRET_VALUES: 'free-of-secret-values'
});

export const CONNECTION_RECORD_FIELDS = Object.freeze({
  TENANT: 'tenant', PROPERTY: 'property', EXTERNAL_ACCOUNT: 'external-account', DESTINATION: 'destination', PURPOSE: 'purpose',
  DATA: 'data', CREDENTIAL: 'credential', RATE: 'rate', CALLBACK: 'callback', RESIDENCY: 'residency', LIFECYCLE: 'lifecycle'
});

export const PROVISIONING_ELEMENTS = Object.freeze({
  INSTALLATION_IDENTITY: 'installation-identity', PACKAGE_BINDING: 'package-binding', CAPABILITY_GRANTS: 'capability-grants',
  RUNTIME_HOST_PLACEMENT: 'runtime-host-placement', CONFIGURATION: 'configuration', STORAGE: 'storage',
  SCHEDULES_EVENT_SUBSCRIPTIONS: 'schedules-and-event-subscriptions', CONNECTIONS_SECRET_REFERENCES: 'connections-and-secret-references',
  QUOTAS: 'quotas', HEALTH_SUPPORT_VIEWS: 'health-and-support-views', EVIDENCE: 'evidence'
});

export const ACTIVATION_VALIDATION_CHECKS = Object.freeze({
  CORRECT_PROPERTIES: 'correct-properties', EXPECTED_CAPABILITIES: 'expected-capabilities', TEST_CONNECTION: 'test-connection',
  DATA_NETWORK_BEHAVIOR: 'data-and-network-behavior', USER_EXPERIENCE: 'user-experience',
  WORKFLOW_AGENT_APPROVAL_PATHS: 'workflow-or-agent-approval-paths', HEALTH_SUPPORT_ROUTING: 'health-and-support-routing',
  USAGE_QUOTA: 'usage-and-quota', ROLLBACK_UNINSTALL_READINESS: 'rollback-and-uninstall-readiness'
});

export const TENANT_OPERATIONS_VIEW_FIELDS = Object.freeze({
  INSTALLED_EXTENSIONS_VERSIONS: 'installed-extensions-and-package-versions', PROPERTY_CAPABILITY_SCOPE: 'property-and-capability-scope',
  CONFIGURATION_STATUS: 'configuration-status', HEALTH_RECENT_FAILURES: 'health-and-recent-failures',
  USAGE_QUOTA_COST_REFERENCES: 'usage-quota-and-cost-references', EXTERNAL_CONNECTIONS: 'external-connections',
  PENDING_UPDATES: 'pending-updates', ADVISORIES_REQUIRED_ACTION: 'advisories-and-required-action', SUPPORT_CASES: 'support-cases',
  DATA_RETENTION_UNINSTALL_STATE: 'data-retention-and-uninstall-state'
});

export const HEALTH_SIGNAL_SOURCES = Object.freeze({
  HOST_STATUS: 'host-status', EXTENSION_ERROR_LATENCY: 'extension-error-and-latency',
  EXTERNAL_DEPENDENCY_HEALTH: 'external-dependency-health', EVENT_QUEUE_BACKLOG: 'event-or-queue-backlog',
  WORKFLOW_AGENT_OUTCOMES: 'workflow-and-agent-outcomes', CONNECTION_CREDENTIAL_STATUS: 'connection-and-credential-status',
  RESOURCE_SATURATION: 'resource-saturation', PACKAGE_ADVISORY_STATUS: 'package-advisory-status'
});

export const RESOURCE_GOVERNANCE_LIMITS = Object.freeze({
  ACTIVE_INSTALLATIONS: 'active-installations', CONCURRENT_EXECUTIONS: 'concurrent-executions', API_EVENT_VOLUME: 'api-and-event-volume',
  WORKFLOW_AGENT_USE: 'workflow-and-agent-use', MODEL_TOOL_BUDGETS: 'model-and-tool-budgets', STORAGE: 'storage',
  NETWORK_PAYLOAD: 'network-and-payload', SCHEDULED_JOBS: 'scheduled-jobs', RETRIES: 'retries'
});

export const USAGE_COST_VIEW_DISTINCTIONS = Object.freeze({
  PLATFORM_RESOURCE_USE: 'platform-resource-use', PUBLISHER_CHARGES: 'publisher-charges', EXTERNAL_PROVIDER_COSTS: 'external-provider-costs',
  INCLUDED_ENTITLEMENT: 'included-entitlement', QUOTA_FORECAST: 'quota-and-forecast', ADJUSTMENTS: 'adjustments'
});

export const NOTIFICATION_TYPES = Object.freeze({
  INSTALLATION_ACTIVATION: 'installation-or-activation', CAPABILITY_EXPANSION_REQUEST: 'capability-expansion-request',
  CONFIGURATION_FAILURE: 'configuration-failure', QUOTA_THRESHOLD: 'quota-threshold', HEALTH_DEGRADATION: 'health-degradation',
  SECURITY_COMPATIBILITY_ADVISORY: 'security-or-compatibility-advisory', UPDATE_AVAILABILITY: 'update-availability',
  SCHEDULED_UPDATE: 'scheduled-update', SUSPENSION: 'suspension', UNINSTALL_COMPLETION: 'uninstall-completion'
});

export const TENANT_PILOT_ROLLOUT_STAGES = Object.freeze({
  SANDBOX: 'sandbox', TEST_TENANT: 'test-tenant', SELECTED_PROPERTY: 'selected-property',
  SELECTED_USERS_OR_WORKFLOWS: 'selected-users-or-workflows', TENANT_WIDE_PRODUCTION: 'tenant-wide-production'
});

export const SUPPORT_MODEL_PARTIES = Object.freeze({
  TENANT_ADMINISTRATOR: 'tenant-administrator', PUBLISHER: 'publisher', MARKETPLACE_OPERATOR: 'marketplace-operator',
  EXTENSION_POINT_OWNER: 'extension-point-owner', HOST_OPERATOR: 'host-operator', EXTERNAL_PROVIDER: 'external-provider'
});

export const SUPPORT_ACCESS_REQUIREMENTS = Object.freeze({
  NAMED_IDENTITY: 'named-identity', TENANT_INSTALLATION_SCOPE: 'tenant-and-installation-scope', CASE_REFERENCE: 'case-reference',
  PURPOSE: 'purpose', CAPABILITIES_DATA_CLASSES: 'capabilities-and-data-classes',
  TENANT_CONSENT_APPROVAL: 'tenant-consent-or-approval-where-required', EXPIRY: 'expiry', MONITORING_REVIEW: 'monitoring-and-review'
});

export const INCIDENT_RESPONSE_ELEMENTS = Object.freeze({
  AFFECTED_EXTENSION_CAPABILITIES: 'affected-extension-and-capabilities', PROPERTY_SERVICE_IMPACT: 'property-and-service-impact',
  CONTAINMENT_STATUS: 'containment-status', REQUIRED_TENANT_ACTION: 'required-tenant-action',
  DATA_TRANSFER_ASSESSMENT: 'data-or-external-transfer-assessment-where-applicable',
  UPDATE_CREDENTIAL_UNINSTALL_GUIDANCE: 'update-credential-rotation-or-uninstall-guidance',
  RESOLUTION_FOLLOW_UP: 'resolution-and-follow-up'
});

export const DATA_PORTABILITY_EXPORT_ITEMS = Object.freeze({
  CONFIGURATION: 'configuration', TENANT_CREATED_EXTENSION_DATA: 'tenant-created-extension-data',
  WORKFLOW_TEMPLATE_DEFINITIONS: 'workflow-or-template-definitions', REPORTS_ARTIFACTS: 'reports-and-artifacts',
  CONNECTION_METADATA_WITHOUT_SECRETS: 'connection-metadata-without-secrets', USAGE_EVIDENCE_PERMITTED: 'usage-or-evidence-permitted-by-policy'
});

export const UNINSTALL_REQUEST_DISCLOSURES = Object.freeze({
  RUNNING_WORK: 'running-work', DEPENDENT_WORKFLOWS_AGENTS_UI_CONNECTIONS: 'dependent-workflows-agents-ui-and-connections',
  DATA_EXPORT_OPTIONS: 'data-export-options', RETENTION_LEGAL_HOLD_EFFECTS: 'retention-and-legal-hold-effects',
  IRREVERSIBLE_CONSEQUENCES: 'irreversible-consequences', COMMERCIAL_SUPPORT_IMPACT: 'commercial-and-support-impact'
});

export const UNINSTALL_EXECUTION_STEPS = Object.freeze({
  STOP_ADMISSION: 'stops-admission', DRAIN_CANCEL_COMPENSATE: 'drains-cancels-or-compensates-work',
  REMOVE_SCHEDULES_SUBSCRIPTIONS_UI_CALLBACKS: 'removes-schedules-subscriptions-ui-and-callbacks',
  REVOKE_GRANTS_CONNECTIONS_SECRETS: 'revokes-grants-connections-and-secrets-access', EXPORT_AUTHORIZED_DATA: 'exports-authorized-data',
  APPLY_RETENTION_HOLD_ERASURE: 'applies-retention-hold-or-erasure',
  REMOVE_CACHES_INDEXES_DERIVED_STATE: 'removes-caches-indexes-and-derived-state',
  RECONCILE_USAGE_ENTITLEMENTS: 'reconciles-usage-and-entitlements', PRESERVE_REQUIRED_EVIDENCE: 'preserves-required-evidence',
  CONFIRM_COMPLETION: 'confirms-completion'
});

export const TENANT_EVIDENCE_TYPES = Object.freeze({
  REQUEST_APPROVAL: 'request-and-approval', CAPABILITIES_CONFIGURATION_HISTORY: 'capabilities-and-configuration-history',
  INSTALLATION_PACKAGE_VERSIONS: 'installation-and-package-versions', SUPPORT_ACCESS: 'support-access',
  UPDATES_ADVISORIES: 'updates-and-advisories', USAGE_LIMITS: 'usage-and-limits',
  SUSPENSION_INCIDENT_ACTIVITY: 'suspension-and-incident-activity', EXPORT_UNINSTALL_COMPLETION: 'export-and-uninstall-completion'
});

export const RECONCILIATION_DOMAINS = Object.freeze({
  REGISTRY: 'registry', HOST: 'host', GRANTS: 'grants', CONFIGURATION: 'configuration', SECRETS_REFERENCES: 'secrets-references',
  CONNECTIONS: 'connections', SUBSCRIPTIONS: 'subscriptions', STORAGE: 'storage', USAGE: 'usage',
  MARKETPLACE_ENTITLEMENT: 'marketplace-entitlement', UNINSTALL_STATE: 'uninstall-state'
});

export const TENANT_ARCHITECTURAL_RULES = Object.freeze({
  APPROVAL_CAPABILITY_SPECIFIC_INFORMED: 'tenant-installation-approval-is-capability-specific-and-informed',
  SCOPE_EXPLICIT_THROUGH_RUNTIME_DATA: 'tenant-and-property-scope-remain-explicit-through-runtime-and-data',
  CONFIG_NEVER_STORES_SECRETS_OR_OVERRIDES: 'configuration-never-stores-secret-values-or-overrides-mandatory-controls',
  HEALTH_USAGE_ADVISORIES_SUPPORT_VISIBLE: 'health-usage-advisories-and-support-ownership-are-visible-to-tenants',
  UPDATES_RESPECT_POLICY_EXCEPT_EMERGENCY: 'updates-respect-tenant-policy-except-governed-emergency-action',
  PUBLISHER_SUPPORT_ACCESS_SCOPED_MEDIATED: 'publisher-support-access-is-scoped-and-mediated',
  OFFBOARDING_INCLUDES_EVERY_RESOURCE: 'tenant-offboarding-includes-every-extension-resource',
  UNINSTALL_REQUIRES_PROVIDER_RECONCILIATION: 'uninstall-completion-requires-provider-reconciliation'
});
