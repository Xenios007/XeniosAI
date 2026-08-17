export const MARKETPLACE_GOVERNANCE_AND_ASSURANCE_ERROR_CODE = 'MARKETPLACE_GOVERNANCE_AND_ASSURANCE_INVALID';

export const GOVERNANCE_PRINCIPLES = Object.freeze({
  DISCOVERY_SEPARATE_FROM_RUNTIME_AUTHORITY: 'marketplace-discovery-is-separate-from-runtime-authority',
  TRUST_EVIDENCE_BASED_REVIEWABLE: 'publisher-and-package-trust-are-evidence-based-and-continuously-reviewable',
  REVIEW_DEPTH_FOLLOWS_RISK: 'review-depth-follows-capability-and-risk',
  CERTIFICATION_SCOPED_VERSIONED_EXPIRING: 'certification-is-scoped-versioned-and-expiring',
  COMMERCIAL_NOT_OVERRIDE_SECURITY_CONSENT: 'commercial-incentives-do-not-override-security-or-tenant-consent',
  REVIEWS_RATINGS_PROTECTED: 'reviews-and-ratings-are-protected-from-manipulation',
  VULNERABILITY_EMERGENCY_MANDATORY: 'vulnerability-disclosure-and-emergency-containment-are-mandatory-ecosystem-capabilities',
  EXCEPTIONS_TEMPORARY_REMEDIATED: 'exceptions-are-temporary-and-remediated',
  TRUST_SIGNALS_CLEAR_MEANING_LIMITATIONS: 'tenant-facing-trust-signals-are-clear-about-their-meaning-and-limitations',
  GOVERNANCE_PRESERVES_COMPETITION: 'governance-preserves-competition-and-avoids-undocumented-privileged-access'
});

export const GOVERNANCE_SCOPE_AREAS = Object.freeze({
  ELIGIBLE_EXTENSION_POINTS_PUBLISHER_CLASSES: 'eligible-extension-points-and-publisher-classes', PUBLISHER_VERIFICATION: 'publisher-verification',
  PACKAGE_SUBMISSION_REVIEW: 'package-submission-and-review', CERTIFICATION_PROFILES: 'certification-profiles',
  REGISTRY_PUBLICATION: 'registry-publication', MARKETPLACE_LISTING: 'marketplace-listing',
  TENANT_INSTALLATION_POLICY: 'tenant-installation-policy', CAPABILITY_DATA_USE: 'capability-and-data-use',
  SUPPORT_SERVICE_TERMS: 'support-and-service-terms', PRICING_COMMERCIAL_DISCLOSURE: 'pricing-and-commercial-disclosure',
  REVIEWS_RANKING: 'reviews-and-ranking', ADVISORIES_VULNERABILITY_RESPONSE: 'advisories-and-vulnerability-response',
  SUSPENSION_REVOCATION_APPEAL: 'suspension-revocation-and-appeal', AUDIT_EVIDENCE_EXCEPTIONS_REMEDIATION: 'audit-evidence-exceptions-and-remediation'
});

export const DECISION_RIGHTS = Object.freeze({
  CREATE_EXTENSION_POINT: 'create-extension-point:owning-domain-plus-architecture-and-security-governance',
  VERIFY_PUBLISHER: 'verify-publisher:publisher-trust-authority', PUBLISH_PACKAGE: 'publish-package:registry-authority-after-required-review',
  CERTIFY_PACKAGE: 'certify-package:independent-or-designated-assurance-authority',
  LIST_MARKETPLACE_OFFERING: 'list-marketplace-offering:marketplace-operator',
  APPROVE_TENANT_INSTALLATION: 'approve-tenant-installation:tenant-delegate-within-platform-policy',
  GRANT_RESTRICTED_CAPABILITY: 'grant-restricted-capability:platform-control-owner',
  SUSPEND_EXECUTION: 'suspend-execution:security-or-operations-authority-by-policy',
  REVOKE_PACKAGE_OR_PUBLISHER: 'revoke-package-or-publisher:registry-and-security-authority',
  RESOLVE_COMMERCIAL_DISPUTE: 'resolve-commercial-dispute:marketplace-or-commercial-authority',
  ACCEPT_EXCEPTION: 'accept-exception:designated-risk-owner'
});

export const MARKETPLACE_RESPONSIBILITIES = Object.freeze({
  DISCOVERY_SEARCH: 'discovery-and-search', CATEGORIES_CURATED_COLLECTIONS: 'categories-and-curated-collections',
  PUBLISHER_PROFILES: 'publisher-profiles', LISTINGS_DOCUMENTATION: 'listings-and-documentation',
  CERTIFICATION_COMPATIBILITY_INDICATORS: 'certification-and-compatibility-indicators',
  PRICING_SUBSCRIPTION_REFERENCES: 'pricing-and-subscription-references', REVIEWS_RATINGS: 'reviews-and-ratings',
  TRIAL_PROCUREMENT_PATHS: 'trial-and-procurement-paths', SUPPORT_DISPUTE_CHANNELS: 'support-and-dispute-channels',
  UPDATE_ADVISORY_NOTICES: 'update-and-advisory-notices', INSTALLATION_INITIATION: 'installation-initiation'
});

export const MARKETPLACE_BOUNDARIES = Object.freeze({
  REPLACE_EXTENSION_REGISTRY: 'replace-the-extension-registry', MODIFY_PACKAGE_ARTIFACTS: 'modify-package-artifacts',
  DECIDE_DOMAIN_AUTHORIZATION: 'decide-domain-authorization', STORE_TENANT_PRODUCTION_SECRETS: 'store-tenant-production-secrets',
  INSTALL_WITHOUT_TENANT_APPROVAL: 'install-without-tenant-approval', CERTIFY_THROUGH_POPULARITY: 'certify-behavior-through-popularity',
  GUARANTEE_PUBLISHER_UPTIME: 'guarantee-publisher-uptime', HIDE_EXTERNAL_PROCESSORS_DATA_USE: 'hide-external-processors-or-data-use',
  CONTINUE_LISTING_REVOKED_PACKAGES: 'continue-listing-revoked-packages'
});

export const LISTING_MODEL_FIELDS = Object.freeze({
  EXTENSION_PUBLISHER_IDENTITY: 'extension-and-publisher-identity', SUPPORTED_PACKAGE_CHANNELS: 'supported-package-channels',
  PURPOSE_USE_CASES: 'purpose-and-use-cases', CAPABILITY_DATA_SUMMARY: 'capability-and-data-summary',
  EXTERNAL_PROCESSORS: 'external-processors', COMPATIBLE_PLATFORM_EXTENSION_POINTS: 'compatible-platform-and-extension-points',
  PROPERTY_REGIONAL_ELIGIBILITY: 'property-and-regional-eligibility', CERTIFICATION_ADVISORY_STATUS: 'certification-and-advisory-status',
  PRICING_TRIAL_ENTITLEMENT_TERMS: 'pricing-trial-and-entitlement-terms', SUPPORT_SERVICE_COMMITMENTS: 'support-and-service-commitments',
  UPDATE_UNINSTALL_POLICY: 'update-and-uninstall-policy', REVIEWS_DISCLOSURES: 'reviews-and-disclosures'
});

export const PUBLISHER_ONBOARDING_EVALUATIONS = Object.freeze({
  IDENTITY_OWNERSHIP: 'identity-and-ownership', AUTHORIZED_REPRESENTATIVES: 'authorized-representatives',
  SECURITY_DISCLOSURE_CONTACTS: 'security-and-disclosure-contacts', SIGNING_BUILD_CONTROLS: 'signing-and-build-controls',
  SUPPORT_CAPABILITY: 'support-capability', RIGHTS_LICENSE_ELIGIBILITY: 'rights-and-license-eligibility',
  COMMERCIAL_TAX_REQUIREMENTS: 'commercial-and-tax-requirements-where-applicable', DATA_PROCESSOR_RESPONSIBILITIES: 'data-processor-responsibilities',
  SANCTIONS_ABUSE_LEGAL_RESTRICTIONS: 'sanctions-abuse-or-legal-restrictions-where-applicable'
});

export const PUBLISHER_OBLIGATIONS = Object.freeze({
  MAINTAIN_ACCURATE_MANIFESTS_LISTINGS: 'maintain-accurate-manifests-and-listings',
  PROTECT_ACCOUNTS_SIGNING_AUTHORITY: 'protect-accounts-and-signing-authority',
  TRACK_DEPENDENCIES_VULNERABILITIES: 'track-dependencies-and-vulnerabilities', SUPPORT_DECLARED_VERSIONS: 'support-declared-versions',
  PROVIDE_TIMELY_SECURITY_RESPONSE: 'provide-timely-security-response', RESPECT_TENANT_DATA_PURPOSE_RETENTION: 'respect-tenant-data-purpose-and-retention',
  COMMUNICATE_BREAKING_CHANGES: 'communicate-breaking-changes', PARTICIPATE_INCIDENT_UNINSTALL_PROCESSES: 'participate-in-incident-and-uninstall-processes',
  PRESERVE_REQUIRED_EVIDENCE: 'preserve-required-evidence', DISCLOSE_MATERIAL_CONFLICTS_PROCESSORS: 'disclose-material-conflicts-and-external-processors'
});

export const REVIEW_PROFILE_TYPES = Object.freeze({
  AUTOMATED_BASELINE_VALIDATION: 'automated-baseline-validation', PUBLISHER_SELF_ATTESTATION: 'publisher-self-attestation',
  PLATFORM_SPECIALIST_REVIEW: 'platform-specialist-review', SECURITY_PRIVACY_REVIEW: 'security-and-privacy-review',
  DOMAIN_OWNER_REVIEW: 'domain-owner-review', PENETRATION_ISOLATION_TESTING: 'penetration-or-isolation-testing',
  ACCESSIBILITY_USER_TRUST_REVIEW: 'accessibility-and-user-trust-review', AI_SAFETY_EVALUATION: 'ai-safety-evaluation',
  LEGAL_RIGHTS_PROCESSOR_REVIEW: 'legal-rights-or-processor-review', INDEPENDENT_CERTIFICATION: 'independent-certification'
});

export const CERTIFICATION_MODEL_FIELDS = Object.freeze({
  PROFILE_CONTROL_VERSION: 'profile-and-control-version', PACKAGE_DIGEST: 'package-digest',
  EXTENSION_POINTS_CAPABILITIES_EVALUATED: 'extension-points-and-capabilities-evaluated',
  TENANT_ENVIRONMENT_ASSUMPTIONS: 'tenant-and-environment-assumptions', EVIDENCE_EVALUATOR: 'evidence-and-evaluator',
  EXCEPTIONS_LIMITATIONS: 'exceptions-and-limitations', ISSUE_STATUS: 'issue-status', EFFECTIVE_EXPIRY_DATE: 'effective-and-expiry-date',
  RERUN_TRIGGERS: 'rerun-triggers'
});

export const TRUST_SIGNAL_TYPES = Object.freeze({
  PUBLISHER_VERIFICATION_LEVEL: 'publisher-verification-level',
  CLASSIFICATION: 'first-party-partner-tenant-commercial-or-community-classification',
  PACKAGE_CERTIFICATION_PROFILE: 'package-certification-profile', LAST_REVIEW_DATE: 'last-review-date',
  SUPPORT_STATUS: 'support-status', COMPATIBILITY_STATUS: 'compatibility-status', ADVISORY_STATUS: 'advisory-status',
  INSTALLATION_BASE_PRIVACY_AGGREGATES: 'installation-base-represented-through-privacy-preserving-aggregates',
  REVIEW_INTEGRITY_INDICATORS: 'review-integrity-indicators'
});

export const REVIEW_RATING_CONTROLS = Object.freeze({
  FRAUD_MANIPULATION: 'fraud-and-manipulation', INCENTIVIZED_REVIEWS: 'incentivized-reviews', PUBLISHER_RETALIATION: 'publisher-retaliation',
  CONFIDENTIAL_TENANT_INFORMATION: 'confidential-tenant-information', SECURITY_VULNERABILITY_DISCLOSURE: 'security-vulnerability-disclosure',
  HARASSMENT_ABUSE: 'harassment-and-abuse', VERSION_RELEVANCE: 'version-relevance', APPEALS_MODERATION: 'appeals-and-moderation'
});

export const RANKING_RECOMMENDATION_FACTORS = Object.freeze({
  RELEVANCE: 'relevance', COMPATIBILITY: 'compatibility', QUALITY: 'quality', SUPPORT: 'support', ADOPTION: 'adoption',
  HEALTH: 'health', TENANT_PREFERENCE: 'tenant-preference'
});

export const COMMERCIAL_MODEL_MANAGED_ITEMS = Object.freeze({
  OFFERS_PRICE_VERSIONS: 'offers-and-price-versions', TRIALS_SUBSCRIPTIONS: 'trials-and-subscriptions',
  PUBLISHER_REVENUE_SHARE: 'publisher-revenue-share', TAXES_INVOICES: 'taxes-and-invoices', REFUNDS_CREDITS: 'refunds-and-credits',
  SETTLEMENT_DISPUTES: 'settlement-and-disputes'
});

export const USAGE_BILLING_ASSURANCE_TRACE_FIELDS = Object.freeze({
  TENANT: 'tenant', INSTALLATION: 'installation', EXTENSION: 'extension', PACKAGE: 'package', CAPABILITY: 'capability',
  UNIT: 'unit', TIME: 'time', METER_VERSION: 'meter-version', ADJUSTMENT: 'adjustment'
});

export const VULNERABILITY_DISCLOSURE_ELEMENTS = Object.freeze({
  PROTECTED_REPORTING_CHANNEL: 'protected-reporting-channel', ACKNOWLEDGMENT_TRIAGE_TARGETS: 'acknowledgment-and-triage-targets',
  EMBARGO_HANDLING: 'embargo-handling', PUBLISHER_COORDINATION: 'publisher-coordination',
  PACKAGE_INSTALLATION_IMPACT_MATCHING: 'package-and-installation-impact-matching',
  FIX_MITIGATION_SUSPENSION_REVOCATION_PATHS: 'fix-mitigation-suspension-and-revocation-paths',
  TENANT_PUBLIC_COMMUNICATION: 'tenant-and-public-communication', CREDIT_SAFE_HARBOR_POLICY: 'credit-and-safe-harbor-policy-where-applicable'
});

export const ADVISORY_ACTION_OPTIONS = Object.freeze({
  NOTIFY_ONLY: 'notify-only', BLOCK_NEW_INSTALLATION: 'block-new-installation', REQUIRE_UPDATE: 'require-update',
  RESTRICT_CAPABILITY: 'restrict-capability', SUSPEND_EXECUTION: 'suspend-execution', REVOKE_PACKAGE_OR_PUBLISHER: 'revoke-package-or-publisher'
});

export const INCIDENT_GOVERNANCE_ROLES = Object.freeze({
  INCIDENT_COMMANDER: 'incident-commander', PUBLISHER_LIAISON: 'publisher-liaison',
  HOST_EXTENSION_POINT_OWNERS: 'host-and-extension-point-owners', SECURITY_PRIVACY_LEGAL_OPERATIONS_ROLES: 'security-privacy-legal-and-operations-roles',
  TENANT_COMMUNICATION_OWNER: 'tenant-communication-owner', COMMERCIAL_SUPPORT_OWNER: 'commercial-and-support-owner'
});

export const SUSPENSION_APPEAL_RECORD_FIELDS = Object.freeze({
  SCOPE: 'scope', REASON: 'reason', EVIDENCE: 'evidence', EFFECTIVE_TIME: 'effective-time', TENANT_IMPACT: 'tenant-impact',
  PERMITTED_REMEDIATION: 'permitted-remediation', REVIEW_DATE: 'review-date', APPEAL_CHANNEL: 'appeal-channel'
});

export const PUBLISHER_TERMINATION_ADDRESSES = Object.freeze({
  PUBLISHING_SIGNING_ACCESS: 'publishing-and-signing-access', EXISTING_PACKAGE_STATUS: 'existing-package-status',
  INSTALLED_TENANT_CONTINUITY: 'installed-tenant-continuity', SECURITY_ADVISORY_SUPPORT: 'security-and-advisory-support',
  MARKETPLACE_LISTINGS_COMMERCIAL_SETTLEMENT: 'marketplace-listings-and-commercial-settlement',
  DATA_PROCESSOR_OBLIGATIONS: 'data-processor-obligations', MIGRATION_UNINSTALL: 'migration-and-uninstall',
  EVIDENCE_RETENTION: 'evidence-retention'
});

export const AUDIT_EVIDENCE_TYPES = Object.freeze({
  PUBLISHER_VERIFICATION: 'publisher-verification', PACKAGE_REVIEW_CERTIFICATION: 'package-review-and-certification',
  LISTING_APPROVAL_CHANGES: 'listing-approval-and-changes', CAPABILITY_PROCESSOR_DISCLOSURES: 'capability-and-processor-disclosures',
  COMMERCIAL_TERMS_METER_VERSIONS: 'commercial-terms-and-meter-versions', REVIEWS_MODERATION: 'reviews-and-moderation',
  ADVISORIES_RESPONSE: 'advisories-and-response', SUSPENSION_APPEAL_REVOCATION: 'suspension-appeal-and-revocation',
  TENANT_NOTIFICATIONS: 'tenant-notifications', EXCEPTIONS_REMEDIATION: 'exceptions-and-remediation'
});

export const CONTROL_OBJECTIVES = Object.freeze({
  MARKETPLACE_STATUS_CANNOT_GRANT_RUNTIME_AUTHORITY: 'marketplace-status-cannot-grant-runtime-authority',
  PUBLISHER_IDENTITY_PACKAGE_INTEGRITY_VERIFIABLE: 'publisher-identity-and-package-integrity-are-verifiable',
  REVIEW_DEPTH_MATCHES_RISK: 'review-depth-matches-extension-risk', TENANT_DISCLOSURES_ACCURATE_CURRENT: 'tenant-disclosures-are-accurate-and-current',
  COMMERCIAL_SEPARATE_FROM_SECURITY: 'commercial-decisions-remain-separate-from-security-authorization',
  VULNERABLE_PACKAGES_IDENTIFIED_CONTAINED: 'vulnerable-packages-can-be-identified-and-contained',
  REVIEWS_RANKING_RESIST_MANIPULATION: 'reviews-and-ranking-resist-manipulation',
  EXCEPTIONS_FINDINGS_REMEDIATED: 'exceptions-and-findings-are-remediated',
  DISPUTES_ACCOUNTABLE_RESOLUTION: 'tenant-and-publisher-disputes-have-accountable-resolution'
});

export const ASSURANCE_ACTIVITIES = Object.freeze({
  POLICY_CONFORMANCE: 'policy-conformance', EVIDENCE_SAMPLING: 'evidence-sampling', PUBLISHER_CONTROL_REVIEW: 'publisher-control-review',
  PACKAGE_RETESTING: 'package-retesting', HOST_CAPABILITY_TESTING: 'host-and-capability-testing',
  MARKETPLACE_INTEGRITY_ANALYSIS: 'marketplace-integrity-analysis', METERING_RECONCILIATION: 'metering-reconciliation',
  TENANT_SUPPORT_REVIEW: 'tenant-support-review', INCIDENT_EXERCISE: 'incident-exercise', INDEPENDENT_AUDIT: 'independent-audit'
});

export const EXCEPTION_RECORD_FIELDS = Object.freeze({
  UNMET_CONTROL: 'unmet-control', AFFECTED_SCOPE: 'package-publisher-extension-point-tenants-and-data-affected',
  RISK_BUSINESS_REASON: 'risk-and-business-reason', COMPENSATING_CONTROLS: 'compensating-controls', OWNER_APPROVER: 'owner-and-approver',
  START_EXPIRY: 'start-and-expiry', MONITORING: 'monitoring', REMEDIATION_PLAN: 'remediation-plan',
  TENANT_DISCLOSURE_WHERE_REQUIRED: 'tenant-disclosure-where-required'
});

export const FINDING_FIELDS = Object.freeze({
  SEVERITY: 'severity', SCOPE: 'scope', CONTAINMENT: 'containment', ROOT_CAUSE: 'root-cause', OWNER: 'owner',
  DUE_DATE: 'due-date', MILESTONES: 'milestones', VERIFICATION: 'verification', CLOSURE_EVIDENCE: 'closure-evidence'
});

export const ECOSYSTEM_METRICS = Object.freeze({
  PUBLISHER_ONBOARDING_REVIEW_TIME: 'publisher-onboarding-and-review-time', PACKAGE_VALIDATION_REJECTION_REASONS: 'package-validation-and-rejection-reasons',
  CERTIFICATION_FRESHNESS: 'certification-freshness', TENANT_ADOPTION_UNINSTALL: 'tenant-adoption-and-uninstall',
  EXTENSION_ATTRIBUTABLE_INCIDENTS: 'extension-attributable-incidents', ADVISORY_TO_CONTAINMENT_TIME: 'advisory-to-containment-time',
  UPDATE_ADOPTION_UNSUPPORTED_VERSIONS: 'update-adoption-and-unsupported-versions', SUPPORT_RESPONSE_RESOLUTION: 'support-response-and-resolution',
  REVIEW_FRAUD_MODERATION: 'review-fraud-and-moderation', USAGE_SETTLEMENT_RECONCILIATION: 'usage-and-settlement-reconciliation',
  EXCEPTION_AGE_RECURRENCE: 'exception-age-and-recurrence'
});

export const GOVERNANCE_FORUM_TOPICS = Object.freeze({
  EXTENSION_ARCHITECTURE_STANDARDS: 'extension-architecture-and-standards', PUBLISHER_MARKETPLACE_POLICY: 'publisher-and-marketplace-policy',
  SECURITY_PRIVACY_SUPPLY_CHAIN_RISK: 'security-privacy-and-supply-chain-risk', HIGH_RISK_CERTIFICATION: 'high-risk-certification',
  COMMERCIAL_TENANT_DISPUTES: 'commercial-and-tenant-disputes', INCIDENT_EMERGENCY_ACTION: 'incident-and-emergency-action',
  EXCEPTIONS_SYSTEMIC_REMEDIATION: 'exceptions-and-systemic-remediation'
});

export const MARKETPLACE_ARCHITECTURAL_RULES = Object.freeze({
  AUTHORITY_SEPARATION: 'marketplace-registry-certification-entitlement-installation-and-runtime-authority-remain-separate',
  REVIEW_CERTIFICATION_DIGEST_SPECIFIC: 'review-and-certification-are-package-digest-specific',
  TRUST_LABELS_DEFINED_EVIDENCE_LIMITATIONS: 'trust-labels-communicate-defined-evidence-and-limitations',
  PAID_PLACEMENT_CANNOT_BYPASS_POLICY_SUSPENSION: 'paid-placement-cannot-bypass-policy-or-suspension',
  PROCESSOR_CHANGES_MAY_REQUIRE_RENEWED_CONSENT: 'processor-changes-may-require-renewed-tenant-consent',
  VULNERABILITY_DISCLOSURE_IMPACT_MATCHING_FIRST_CLASS: 'vulnerability-disclosure-and-impact-matching-are-first-class-capabilities',
  EMERGENCY_CONTAINMENT_AUTHORITY_PREDEFINED: 'emergency-containment-authority-is-predefined',
  COMMERCIAL_USAGE_RECONCILED_NOT_SECURITY_DETERMINING: 'commercial-usage-is-reconciled-but-does-not-determine-security-directly',
  EXCEPTIONS_EXPIRE_RETAIN_ACCOUNTABILITY: 'exceptions-expire-and-retain-remediation-accountability'
});
