export const API_INTEGRATION_AND_EXTENSION_REFERENCE_ERROR_CODE = 'API_INTEGRATION_AND_EXTENSION_REFERENCE_INVALID';

export const API_PRODUCT_OPERATIONS = Object.freeze({
  AVAILABILITY_QUERY: 'availability-query', RATE_QUOTE: 'rate-quote', RESERVATION_COMMAND: 'reservation-command',
  STATUS_QUERY: 'status-query', CANCELLATION: 'cancellation', EVENT_CONTRACTS: 'event-contracts'
});

export const API_OPERATION_ATTRIBUTES = Object.freeze({
  IDENTITY: 'identity', TENANT_PROPERTY_CONTEXT: 'tenant-property-context',
  REQUEST_AND_RESPONSE_SCHEMA: 'request-and-response-schema', ERRORS: 'errors', IDEMPOTENCY: 'idempotency',
  CONCURRENCY: 'concurrency', LIMITS: 'limits', VERSIONING: 'versioning', SERVICE_EXPECTATIONS: 'service-expectations'
});

export const GATEWAY_RESPONSIBILITIES = Object.freeze({
  AUTHENTICATES: 'authenticates', NORMALIZES: 'normalizes', APPLIES_EDGE_CONTROLS: 'applies-edge-controls',
  ESTABLISHES_TENANT_CONTEXT: 'establishes-tenant-context', ROUTES: 'routes'
});

export const PROVIDER_REVALIDATIONS = Object.freeze({
  CONTEXT: 'context', ACTOR_AUTHORITY: 'actor-authority', RESOURCE_OWNERSHIP: 'resource-ownership',
  POLICY: 'policy', ENTITLEMENT: 'entitlement', CURRENT_LIFECYCLE: 'current-lifecycle'
});

export const SDK_CAPABILITIES = Object.freeze({
  EXPLICIT_CLIENT_CONFIGURATION: 'explicit-client-configuration', CREDENTIAL_ACQUISITION: 'credential-acquisition',
  TENANT_PROPERTY_SCOPE: 'tenant-property-scope', TYPED_CONTRACTS: 'typed-contracts', IDEMPOTENCY: 'idempotency',
  DEADLINES: 'deadlines', RETRIES: 'retries', ERROR_MAPPING: 'error-mapping', TELEMETRY_HOOKS: 'telemetry-hooks',
  SECURE_LOGGING: 'secure-logging'
});

export const INTEGRATION_ADAPTER_OWNERSHIP = Object.freeze({
  EXTERNAL_CREDENTIALS: 'external-credentials', MAPPINGS: 'mappings', CURSOR: 'cursor', RATE_LIMITS: 'rate-limits',
  RETRY: 'retry', REPLAY_PROTECTION: 'replay-protection', DELIVERY_EVIDENCE: 'delivery-evidence'
});

export const INBOUND_FLOW_STEPS = Object.freeze({
  AUTHENTICATE_CONNECTION: 'platform-endpoint-authenticates-the-connection',
  RESOLVE_TENANT_AND_PROPERTY: 'tenant-and-property-resolve-from-trusted-binding',
  VALIDATE_PAYLOAD_SCHEMA_AND_REPLAY: 'payload-schema-and-replay-are-validated',
  TRANSLATE_EXTERNAL_SEMANTICS: 'adapter-translates-external-semantics',
  VALIDATE_AND_APPLY_AUTHORIZED_COMMAND: 'domain-provider-validates-and-applies-an-authorized-command',
  RECORD_DELIVERY_RESULT_AND_EVIDENCE: 'delivery-result-and-evidence-are-recorded'
});

export const OUTBOUND_DELIVERY_RETRY_FIELDS = Object.freeze({
  TENANT: 'tenant', DESTINATION: 'destination', PAYLOAD_DIGEST: 'payload-digest', IDEMPOTENCY: 'idempotency', BUDGET: 'budget'
});

export const PLUGIN_REFERENCE_ELEMENTS = Object.freeze({
  IMMUTABLE_PACKAGE_AND_MANIFEST: 'immutable-package-and-manifest', PUBLISHER_PROVENANCE: 'publisher-provenance',
  TENANT_INSTALLATION: 'tenant-installation', CAPABILITY_GRANT: 'capability-grant', SECRET_REFERENCE: 'secret-reference',
  DENY_BY_DEFAULT_NETWORK: 'deny-by-default-network', ISOLATED_HOST: 'isolated-host',
  PROVIDER_AUTHORIZATION: 'provider-authorization', USAGE_AND_HEALTH: 'usage-and-health',
  SUSPENSION_AND_UNINSTALL: 'suspension-and-uninstall'
});

export const MCP_REFERENCE_ELEMENTS = Object.freeze({
  SERVER_IDENTITY: 'server-identity', CONNECTION: 'connection', DISCOVERY: 'discovery', SCHEMAS: 'schemas',
  USER_OR_AGENT_AUTHORITY: 'user-or-agent-authority', TENANT_SCOPE: 'tenant-scope', BUDGETS: 'budgets',
  OUTPUT_VALIDATION: 'output-validation', EVIDENCE: 'evidence'
});

export const COMPATIBILITY_MATRIX_DIMENSIONS = Object.freeze({
  API: 'api', EVENT: 'event', SDK: 'sdk', PLUGIN_MANIFEST: 'plugin-manifest',
  EXTENSION_POINT: 'extension-point', EXTERNAL_PROVIDER_VERSION: 'external-provider-version'
});

export const COMPATIBILITY_CHANGE_CONTROLS = Object.freeze({
  NEW_COMPATIBILITY_BOUNDARIES: 'new-compatibility-boundaries', MIGRATION: 'migration',
  USAGE_VISIBILITY: 'usage-visibility', DEPRECATION: 'deprecation', RETIREMENT: 'retirement'
});

export const INTEGRATION_FAILURE_CASES = Object.freeze({
  INVALID_TENANT_HEADER: 'invalid-tenant-header', DUPLICATE_CALLBACK: 'duplicate-callback',
  EXPIRED_CREDENTIAL: 'expired-credential', PROVIDER_RATE_LIMIT: 'provider-rate-limit',
  SCHEMA_INCOMPATIBILITY: 'schema-incompatibility', PLUGIN_PACKAGE_SUSPENSION: 'plugin-package-suspension',
  MCP_SERVER_IDENTITY_MISMATCH: 'mcp-server-identity-mismatch', EXTERNAL_DELIVERY_TIMEOUT: 'external-delivery-timeout'
});

export const API_INTEGRATION_REFERENCE_ACCEPTANCE_CRITERIA = Object.freeze({
  ALL_INTEGRATIONS_USE_PUBLISHED_CONTRACTS: 'all-integrations-use-published-contracts',
  CREDENTIALS_ARE_TENANT_AND_CONNECTION_BOUND: 'credentials-are-tenant-and-connection-bound',
  PROVIDERS_VALIDATE_RESOURCE_OWNERSHIP: 'providers-validate-resource-ownership',
  RETRIES_ARE_IDEMPOTENT_AND_BUDGETED: 'retries-are-idempotent-and-budgeted',
  PLUGIN_AND_MCP_ACCESS_IS_CAPABILITY_MEDIATED: 'plugin-and-mcp-access-is-capability-mediated',
  COMPATIBILITY_AND_RETIREMENT_ARE_DEMONSTRABLE: 'compatibility-and-retirement-are-demonstrable'
});

export const API_INTEGRATION_ARCHITECTURAL_RULES = Object.freeze({
  APIS_EXPOSE_BUSINESS_CAPABILITY_RATHER_THAN_DATABASES: 'apis-expose-business-capability-rather-than-databases',
  ADAPTERS_OWN_TRANSLATION_NOT_BUSINESS_TRUTH: 'adapters-own-translation-not-business-truth',
  SDKS_PRESERVE_CONTRACTS: 'sdks-preserve-contracts',
  EXTENSIONS_AND_MCP_USE_THE_SAME_TENANT_CAPABILITY_HOST_AND_EVIDENCE_RULES: 'extensions-and-mcp-use-the-same-tenant-capability-host-and-evidence-rules'
});
