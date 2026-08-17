export const IDENTITY_ACCESS_DELEGATED_ADMINISTRATION_ERROR_CODE = 'IDENTITY_ACCESS_DELEGATED_ADMINISTRATION_INVALID';

export const ACCESS_PRINCIPLES = Object.freeze({
  AUTHN_NOT_AUTHORITY: 'authentication-establishes-identity-not-tenant-authority',
  MEMBERSHIP_OR_BINDING: 'tenant-access-requires-a-current-membership-or-workload-binding',
  PROPERTY_NARROWS: 'property-scope-narrows-tenant-authority',
  FULL_CONTEXT: 'authorization-evaluates-actor-action-resource-tenant-property-purpose-entitlement-and-conditions',
  DELEGATION_NARROWS: 'delegation-may-preserve-or-narrow-authority-and-cannot-expand-it',
  ADMIN_SEPARATE: 'administrative-access-is-separate-from-ordinary-business-access',
  NO_IMPLICIT_OPERATOR_RIGHT: 'platform-operators-have-no-implicit-right-to-tenant-content',
  DEDICATED_CROSS_TENANT: 'cross-tenant-access-uses-dedicated-capabilities-and-enhanced-evidence',
  FAIL_CLOSED: 'missing-or-ambiguous-scope-fails-closed',
  REVOKED_ON_CHANGE: 'access-is-revoked-when-membership-policy-risk-or-tenant-lifecycle-changes',
  BOUNDED_AGENT_AUTHORITY: 'ai-agents-and-workflows-receive-bounded-delegated-authority-never-ambient-authority'
});

export const IDENTITY_CATEGORIES = Object.freeze({
  HUMAN_END_USER: 'human-end-users', TENANT_ADMIN: 'tenant-administrators', PROPERTY_ADMIN: 'property-administrators',
  TENANT_STAFF: 'tenant-staff-and-operators', GUEST: 'guests-or-customer-identities', PARTNER: 'partner-and-supplier-identities',
  WORKLOAD: 'workload-and-service-identities', INTEGRATION: 'integration-identities', WORKFLOW: 'workflow-execution-identities',
  AGENT: 'ai-agent-execution-identities', PLATFORM_OPERATOR: 'platform-operator-identities', EMERGENCY: 'emergency-access-identities'
});

export const IDENTITY_MEMBERSHIP_CARDINALITIES = Object.freeze({
  NONE: 'no-tenant-membership', ONE: 'one-tenant-membership', MULTIPLE: 'multiple-independent-tenant-memberships',
  PLATFORM_ROLE: 'a-platform-role-without-ordinary-tenant-membership'
});

export const TENANT_MEMBERSHIP_FIELDS = Object.freeze({
  MEMBERSHIP_ID: 'membership-identifier', IDENTITY_REF: 'identity-reference', TENANT_ID: 'tenant-identifier',
  PROPERTY_SCOPE: 'permitted-property-scope', ROLES: 'roles-and-attributes', DELEGATING_AUTHORITY: 'delegating-authority',
  PURPOSE: 'purpose-or-business-relationship', VALIDITY: 'valid-from-and-expiry-times', CONDITIONS: 'conditions-and-risk-constraints',
  STATUS: 'status-and-revocation-reason', EVIDENCE: 'source-and-approval-evidence'
});

export const MEMBERSHIP_LIFECYCLE_STAGES = Object.freeze({
  REQUESTED: 'requested-or-invited', VERIFIED: 'identity-verified', APPROVED: 'approved', ACTIVE: 'active',
  RECERTIFIED: 'changed-or-recertified', RESTRICTED: 'restricted', SUSPENDED: 'suspended', REVOKED: 'revoked-or-expired'
});

export const FEDERATION_REQUIREMENTS = Object.freeze({
  TRUST: 'tenant-owned-trust-relationship', ISSUER: 'approved-issuer-and-audience', SIGNING: 'verified-signing-and-encryption-configuration',
  MAPPING: 'attribute-and-group-mapping', PROVISIONING: 'provisioning-and-deprovisioning-model',
  ASSURANCE: 'authentication-assurance-requirements', RECOVERY: 'failure-and-recovery-procedures',
  MONITORING: 'monitoring-and-certificate-or-key-rotation'
});

export const JUST_IN_TIME_CONDITIONS = Object.freeze({
  TRUST_APPROVED: 'the-federation-trust-is-approved', CLAIM_BOUNDED: 'claim-mappings-are-bounded',
  LOW_PRIVILEGE: 'default-roles-are-low-privilege', PROPERTY_DETERMINABLE: 'property-scope-is-determinable',
  SAFE_CONFLICT_HANDLING: 'conflicting-identities-are-handled-safely', EVIDENCE_PRODUCED: 'creation-and-use-produce-evidence',
  RELIABLE_DEPROVISIONING: 'deprovisioning-is-reliable'
});

export const TENANT_SELECTION_CONTROLS = Object.freeze({
  CLEAR_INDICATORS: 'clear-tenant-and-property-indicators-in-user-experiences', REAUTH: 'reauthorization-for-sensitive-tenant-changes',
  BOUND_SESSIONS: 'tenant-bound-sessions-or-tokens', CLIENT_STATE_SEPARATION: 'separation-of-browser-tab-or-client-state',
  CACHE_CLEARING: 'cache-clearing-on-context-changes', DEEP_LINK_PROTECTION: 'protection-against-stale-deep-links',
  SWITCH_AUDIT: 'audit-of-selection-and-switch-activity'
});

export const TENANT_CONTEXT_CLAIMS = Object.freeze({
  ACTOR: 'actor-identity-and-type', TENANT_ID: 'tenant-identifier', PROPERTY: 'property-identifier-or-approved-property-set',
  BINDING: 'membership-or-workload-binding-reference', ROLES: 'roles-and-attributes', PURPOSE: 'purpose',
  ASSURANCE: 'authentication-assurance', ENTITLEMENT: 'entitlement-references', LIFECYCLE: 'tenant-lifecycle-state-reference',
  POLICY: 'policy-decision-or-version', ISSUANCE: 'issuance-expiry-audience-and-correlation'
});

export const AUTHORIZATION_FACTORS = Object.freeze({
  SUBJECT: 'subject-identity', TENANT: 'tenant-relationship', PROPERTY: 'property-relationship', OPERATION: 'requested-operation',
  OWNERSHIP: 'resource-ownership', CLASSIFICATION: 'resource-classification', ROLE: 'role-and-attributes',
  PURPOSE: 'business-purpose', POLICY: 'tenant-and-platform-policy', ENTITLEMENT: 'entitlement-and-quota-state',
  RISK: 'environmental-and-risk-signals', LIFECYCLE: 'tenant-property-and-membership-lifecycle'
});

export const RESOURCE_OWNERSHIP_CHECKS = Object.freeze({
  TRUSTED_CONTEXT: 'the-tenant-context-is-trusted-and-intended-for-the-provider',
  SAME_TENANT: 'the-requested-resource-belongs-to-the-same-tenant',
  PROPERTY_MATCH: 'any-property-scope-matches-the-tenant-and-resource',
  ACTOR_AUTHORIZED: 'the-actor-is-authorized-for-the-operation-and-purpose',
  PERMITTED_STATES: 'the-tenant-membership-resource-and-entitlement-are-in-permitted-states'
});

export const ROLE_CATEGORIES = Object.freeze({
  TENANT_OWNER: 'tenant-owner', TENANT_ADMIN: 'tenant-administrator', TENANT_AUDITOR: 'tenant-auditor',
  PORTFOLIO_OPERATOR: 'portfolio-operator', PROPERTY_ADMIN: 'property-administrator', PROPERTY_STAFF: 'property-staff',
  INTEGRATION_ADMIN: 'integration-administrator', KNOWLEDGE_CURATOR: 'knowledge-curator', WORKFLOW_ADMIN: 'workflow-administrator',
  AGENT_ADMIN: 'agent-administrator', BILLING_ADMIN: 'billing-administrator', SUPPORT_READ_ONLY: 'read-only-support-participant'
});

export const PROPERTY_SCOPED_ACCESS_GRANTS = Object.freeze({
  ONE: 'one-property', EXPLICIT_SET: 'an-explicit-set-of-properties', ORG_UNIT: 'a-governed-organizational-unit',
  PORTFOLIO: 'all-current-properties-under-an-approved-portfolio-role'
});

export const DELEGABLE_RESPONSIBILITIES = Object.freeze({
  INVITATIONS: 'membership-invitations-and-revocation', ROLE_ASSIGNMENT: 'property-scoped-role-assignment',
  CONFIGURATION: 'tenant-and-property-configuration', FEDERATION: 'federation-mappings-within-approved-constraints',
  INTEGRATION: 'integration-connection-administration', QUOTA: 'feature-and-quota-allocation-within-purchased-limits',
  KNOWLEDGE_WORKFLOW: 'knowledge-source-and-workflow-administration', EVIDENCE: 'tenant-local-evidence-review'
});

export const DELEGATION_PROHIBITIONS = Object.freeze({
  IDENTITY: 'change-tenant-identity-or-platform-ownership-records', POLICY: 'weaken-mandatory-platform-policy',
  CROSS_TENANT: 'access-another-tenant', UNAUTHORIZED_GRANT: 'grant-roles-they-do-not-possess-authority-to-delegate',
  EVIDENCE: 'modify-immutable-evidence', RELATIONSHIP: 'create-unapproved-cross-tenant-relationships',
  DEDICATED_INFRASTRUCTURE: 'change-dedicated-infrastructure-outside-approved-lifecycle-processes'
});

export const DELEGATION_RULES = Object.freeze({
  DELEGABLE_AUTHORITY: 'the-delegator-must-possess-delegable-authority', SCOPE_BOUND: 'the-grant-cannot-exceed-the-delegators-scope',
  NON_DELEGABLE: 'non-delegable-duties-remain-non-delegable', EXPIRY_BOUND: 'expiry-cannot-exceed-the-parent-grant',
  TRANSITIVE_REVOCATION: 'revoking-a-parent-grant-invalidates-dependent-grants',
  SOD_PREVENTED: 'sensitive-combinations-are-prevented-through-segregation-of-duties-policy',
  BOUNDED_CHAINS: 'delegation-chains-are-bounded-and-inspectable'
});

export const SEGREGATION_OF_DUTIES_EXAMPLES = Object.freeze({
  PRIVILEGED_ACCESS: 'requesting-and-approving-privileged-access', FEDERATION: 'configuring-and-validating-federation',
  PAYMENT_INTEGRATION: 'creating-and-approving-payment-related-integrations', RETENTION: 'changing-retention-policy-and-approving-deletion',
  EXPORT: 'initiating-and-approving-tenant-export', COMMERCIAL: 'modifying-quotas-and-approving-commercial-adjustments',
  EXTENSION: 'developing-and-approving-an-extension', EMERGENCY: 'executing-and-reviewing-emergency-access'
});

export const WORKLOAD_IDENTITY_CONTROLS = Object.freeze({
  OWNING_TEAM: 'explicit-owning-team', SCOPE: 'defined-tenant-or-platform-scope', LEAST_PRIVILEGE: 'least-privilege-operations',
  SHORT_LIVED: 'short-lived-credentials-where-practical', AUDIENCE: 'audience-and-environment-restrictions',
  ROTATION: 'rotation-and-revocation', PROVENANCE: 'deployment-provenance', OBSERVABLE: 'observable-use'
});

export const INTEGRATION_IDENTITY_CONTROLS = Object.freeze({
  CONSENT: 'tenant-specific-authorization-and-consent', ACCOUNT_MAPPING: 'provider-account-mapping', SECRET_ISOLATION: 'secret-isolation',
  ALLOWED_SCOPE: 'allowed-operations-and-data-classes', NETWORK: 'network-restrictions-where-required',
  RATE_LIMITS: 'rate-limits-and-expiry', CALLBACK: 'callback-validation', ROTATION: 'rotation-suspension-and-revocation',
  EVIDENCE: 'delivery-and-access-evidence'
});

export const WORKFLOW_AGENT_AUTHORITY_ELEMENTS = Object.freeze({
  SCOPE: 'tenant-and-property-scope', TOOLS: 'permitted-tools-and-operations', PURPOSE: 'purpose',
  CLASSIFICATIONS: 'data-classifications', LIMITS: 'resource-and-time-limits', APPROVAL: 'human-approval-requirements',
  EXPIRY: 'expiry-and-revocation-behavior'
});

export const SUPPORT_SESSION_FIELDS = Object.freeze({
  ACTOR: 'support-actor', SCOPE: 'tenant-and-property-scope', TICKET: 'ticket-or-incident-reference',
  PURPOSE: 'business-purpose', CAPABILITIES: 'approved-capabilities', CONSENT: 'consent-or-approval-where-required',
  DURATION: 'start-expiry-and-termination', ACCESSED: 'actions-and-data-classes-accessed',
  REDACTION: 'redaction-and-export-controls', OUTCOME: 'review-outcome'
});

export const EMERGENCY_ACCESS_REQUIREMENTS = Object.freeze({
  STRONG_AUTHN: 'strong-authentication', SCOPE: 'explicit-tenant-and-capability-scope', JUSTIFICATION: 'justification-and-incident-reference',
  SHORT_DURATION: 'short-duration', MONITORING: 'enhanced-monitoring', NO_BULK: 'prohibition-on-avoidable-bulk-access',
  IMMEDIATE_REVOCATION: 'immediate-revocation-after-use', POST_REVIEW: 'independent-post-event-review'
});

export const CROSS_TENANT_CAPABILITY_REQUIREMENTS = Object.freeze({
  SEPARATE_IDENTITY: 'separate-workload-identity', POLICY: 'explicit-platform-policy', LEGAL_BASIS: 'approved-purpose-and-legal-basis',
  MINIMAL_SCOPE: 'minimal-data-scope', SEGREGATION: 'strong-segregation-from-tenant-facing-apis',
  DEIDENTIFICATION: 'aggregation-or-de-identification-where-appropriate', TELEMETRY: 'enhanced-telemetry-and-evidence',
  REVIEW: 'periodic-access-review'
});

export const SESSION_TOKEN_BOUNDARIES = Object.freeze({
  TENANT_AUDIENCE: 'bound-to-an-intended-tenant-and-audience', PROPERTY: 'bound-to-property-scope-where-required',
  SHORT_LIVED: 'short-lived-according-to-risk', REEVALUATED: 'invalidated-or-re-evaluated-after-critical-lifecycle-change',
  ENVIRONMENT: 'protected-from-use-across-environments', REVOCABLE: 'revocable-for-incidents-and-offboarding'
});

export const CACHING_PROHIBITIONS = Object.freeze({
  CROSS_TENANT_REUSE: 'reuse-one-tenants-decision-for-another', BROAD_ALLOW_ON_OUTAGE: 'turn-an-unavailable-policy-service-into-broad-allow-behavior',
  OUTLIVE_REVOCATION: 'outlive-critical-revocation-requirements', HIDDEN_VERSION: 'hide-the-policy-version-used'
});

export const ACCESS_LIFECYCLE_TRIGGERS = Object.freeze({
  TENANT_STATE: 'tenant-state-changes', PROPERTY_OWNERSHIP: 'property-ownership-changes', MEMBERSHIP: 'membership-changes-or-expires',
  FEDERATION: 'federation-trust-changes', POLICY: 'role-or-policy-changes', ENTITLEMENT: 'entitlement-changes',
  RISK_POSTURE: 'risk-or-device-posture-changes', INTEGRATION_CONSENT: 'integration-consent-is-revoked',
  WORKFLOW_END: 'workflow-or-agent-execution-ends', INCIDENT: 'incident-containment-is-activated'
});

export const PROTECTED_ACCESS_DATA_TYPES = Object.freeze({
  DIRECTORIES: 'tenant-membership-directories', ROLE_ASSIGNMENTS: 'role-assignments', SUPPORT_ACTIVITY: 'support-activity',
  AUTHN_TELEMETRY: 'authentication-telemetry', FEDERATION_ATTRIBUTES: 'federation-attributes'
});

export const ACCESS_EVIDENCE_TYPES = Object.freeze({
  AUTHN_RESULT: 'authentication-result-and-assurance', SELECTION: 'tenant-selection-and-context-issuance',
  AUTHORIZATION: 'authorization-decision-and-policy-version', MEMBERSHIP: 'membership-and-delegation-changes',
  SUPPORT_SESSIONS: 'privileged-and-support-sessions', EMERGENCY: 'emergency-access', CROSS_TENANT: 'cross-tenant-processing',
  FEDERATION: 'federation-configuration-changes', CREDENTIAL: 'credential-issuance-rotation-and-revocation',
  SUSPICIOUS: 'denied-and-suspicious-cross-tenant-attempts'
});

export const ACCESS_REVIEW_AREAS = Object.freeze({
  OWNERS: 'tenant-owners-and-administrators', HIGH_RISK_ROLES: 'high-risk-property-roles', DORMANT: 'dormant-memberships',
  NON_EXPIRING: 'non-expiring-grants', DELEGATION_CHAINS: 'delegation-chains', CONFLICTING_DUTIES: 'conflicting-duties',
  WORKLOAD_INTEGRATION: 'workload-and-integration-identities', SUPPORT: 'platform-support-access',
  CROSS_TENANT: 'cross-tenant-capabilities', FEDERATION_MAPPINGS: 'federation-mappings'
});

export const ACCESS_FAILURE_CONDITIONS = Object.freeze({
  AMBIGUOUS_SELECTION: 'tenant-selection-is-ambiguous', UNVALIDATED_MEMBERSHIP: 'membership-cannot-be-validated',
  RELATIONSHIP_CONFLICT: 'tenant-or-property-relationship-conflicts', UNKNOWN_OWNERSHIP: 'resource-ownership-is-unknown',
  INVALID_FEDERATION: 'federation-trust-is-invalid', UNAVAILABLE_POLICY: 'policy-or-critical-revocation-state-is-unavailable',
  AUDIENCE_MISMATCH: 'a-token-audience-or-tenant-does-not-match-the-provider', DELEGATION_EXCEEDED: 'delegation-exceeds-its-parent-authority'
});

export const ACCESS_TESTING_REQUIREMENTS = Object.freeze({
  MULTI_TENANT: 'multi-tenant-positive-and-negative-authorization', TENANT_SWITCHING: 'multi-membership-tenant-switching',
  PORTFOLIO: 'property-set-and-portfolio-access', ROLE_COMBINATIONS: 'role-and-attribute-combinations',
  DELEGATION: 'delegation-depth-and-revocation', FEDERATION_MANIPULATION: 'federation-claim-manipulation',
  TOKEN_MISMATCH: 'token-audience-and-tenant-mismatch', CACHE: 'cache-isolation-and-revocation',
  EXECUTION_SCOPE: 'workload-workflow-and-agent-scope', SUPPORT_EMERGENCY: 'support-and-emergency-access',
  CROSS_TENANT_API: 'cross-tenant-api-segregation', LIFECYCLE_ENFORCEMENT: 'tenant-suspension-and-retirement-enforcement'
});

export const IDENTITY_ACCESS_ARCHITECTURAL_RULES = Object.freeze({
  SEPARATE_LIFECYCLES: 'identity-and-tenant-membership-are-separate-records-and-lifecycles',
  EXPLICIT_SELECTION: 'tenant-selection-is-explicit-when-more-than-one-valid-scope-exists',
  PROVIDER_VALIDATION: 'provider-services-validate-resource-ownership-and-authorization',
  MINIMIZED_CONTEXT: 'tenant-context-is-integrity-protected-audience-restricted-and-minimized',
  REVOCABLE_DELEGATION: 'delegation-cannot-expand-authority-and-is-transitively-revocable',
  EXPLICIT_WIDE_GRANTS: 'property-wide-and-portfolio-wide-access-are-explicit-grants',
  SCOPED_SUPPORT: 'platform-support-uses-scoped-sessions-not-invisible-impersonation',
  REVIEWED_EMERGENCY: 'emergency-access-is-temporary-monitored-and-independently-reviewed',
  SEGREGATED_CROSS_TENANT: 'cross-tenant-capabilities-are-separate-from-ordinary-tenant-interfaces',
  NO_AMBIENT_AUTHORITY: 'workflow-and-agent-delegation-cannot-create-ambient-authority'
});
