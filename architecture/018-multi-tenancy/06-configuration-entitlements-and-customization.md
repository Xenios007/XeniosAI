# ARCH-018-06 — Configuration, Entitlements, and Customization

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-06

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines how XeniosAI provides tenant- and property-specific behavior without customer-specific source-code forks.

It covers configuration hierarchy, schemas, defaults, inheritance, validation, rollout, branding, localization, business rules, AI settings, integration configuration, feature entitlements, service tiers, overrides, extensions, and configuration assurance.

---

# Principles

* Configuration changes behavior only through declared, governed options.
* Mandatory platform controls cannot be weakened by tenant settings.
* Effective configuration is deterministic and explainable.
* Tenant and property scope is explicit.
* Schemas, defaults, and compatibility are versioned.
* Secrets are referenced, never embedded in ordinary configuration.
* Entitlement is distinct from configuration and authorization.
* Feature release is distinct from tenant purchase or permission.
* High-risk changes use approval, staging, validation, and rollback.
* Tenant variation uses configuration or approved extension points, not code forks.
* AI configuration remains inside platform safety and authority boundaries.

---

# Configuration Categories

XeniosAI recognizes:

* Platform mandatory controls
* Platform defaults
* Environment configuration
* Service-tier configuration
* Tenant configuration
* Organizational-unit configuration
* Property configuration
* Workflow or capability configuration
* User preferences
* Runtime request options explicitly permitted by policy

Each category has an owner, schema, precedence, scope, and lifecycle.

---

# Configuration Hierarchy

Effective configuration is resolved in this order:

1. Mandatory platform controls
2. Platform and environment defaults
3. Service-tier entitlements and limits
4. Tenant configuration
5. Organizational-unit configuration, where applicable
6. Property configuration
7. Capability or workflow configuration
8. User or request preferences explicitly allowed

Lower levels override only fields whose schema declares them overridable.

The resolution engine must expose the effective value, source scope, source version, and reason a requested override was accepted or rejected.

---

# Configuration Scope

Every configuration item declares:

* Owning capability
* Tenant and property applicability
* Schema and version
* Data type and allowed values
* Default value
* Override rules
* Classification and sensitivity
* Validation and dependencies
* Change risk
* Effective and expiry time
* Rollout and rollback behavior
* Evidence requirements

A property setting cannot refer to a resource owned by another tenant.

---

# Mandatory Platform Controls

Mandatory controls include minimum requirements for:

* Authentication and authorization
* Tenant and property isolation
* Privacy and data minimization
* Cryptography and secrets
* AI safety and tool boundaries
* Audit evidence
* Data residency and prohibited transfer
* Secure integration and extension execution
* Operational protection and rate limits

Tenant configuration may strengthen or narrow these controls but cannot disable or reduce them below the platform floor.

---

# Configuration Domains

## Brand and Experience

Logo references, color tokens, typography choices, tone, templates, approved channels, and accessibility settings.

## Locale and Regional Behavior

Languages, currencies, time zones, date and number formats, measurement units, calendars, and regional terminology.

## Hospitality Operations

Property classifications, room terminology, amenities, operating hours, service windows, routing, notifications, and approved business rules.

## Commercial Behavior

Pricing references, taxes, fees, packages, eligibility, promotions, and approval thresholds owned by the relevant domain services.

## Workflow and Approval

Enabled workflow definitions, assignment rules, escalation, timers, approvals, and human-intervention policy.

## Knowledge and Memory

Approved sources, curation rules, property scope, retrieval behavior, memory admission, retention, citation, and correction policy.

## AI and Agent Behavior

Approved models or capability classes, system instructions, tool catalogs, autonomy limits, human approval points, budgets, and evaluation thresholds within platform guardrails.

## Integration

Enabled connections, endpoints, mappings, schedules, callback policy, credential references, rate limits, and failure handling.

## Operations

Service contacts, maintenance preferences, notifications, escalation paths, support consent, recovery choices, and tenant-facing health views.

---

# Configuration Registry

The Configuration Registry maintains schemas, defaults, ownership, compatibility, and metadata.

It does not replace domain-owned configuration services. A domain service remains authoritative for configuration affecting its behavior.

The registry enables common discovery, validation, documentation, governance, and effective-configuration inspection.

---

# Schema Governance

Configuration schemas define:

* Stable key or resource identity
* Value structure and type
* Constraints and allowed ranges
* Default and null semantics
* Scope and inheritance
* Sensitivity classification
* Dependencies and conflicts
* Compatibility behavior
* Deprecation and migration
* User-facing documentation

Free-form configuration is restricted to low-risk, clearly bounded content. Executable expressions or scripts require the extension framework and sandbox policy.

---

# Configuration Versioning

Every accepted change produces an immutable version or version reference.

Versions support:

* Audit and attribution
* Effective-time scheduling
* Staged validation
* Rollback
* Reproduction of historical behavior
* Cache invalidation
* Workflow and agent execution evidence
* Compatibility migration

Services record the effective configuration version used for material decisions where required.

---

# Effective Configuration Resolution

Resolution follows:

1. Establish trusted tenant and property context.
2. Load applicable mandatory controls and defaults.
3. Resolve service tier and entitlements.
4. Apply tenant and property values in precedence order.
5. Validate dependencies and policy.
6. Reject conflicting or unauthorized overrides.
7. Produce an immutable effective view with provenance.
8. Cache using tenant, property, schema, version, and policy scope.

An unavailable configuration provider must not cause mandatory controls to disappear. Safe defaults or fail-closed behavior are defined per capability.

---

# Inheritance and Overrides

Configuration fields declare one of these behaviors:

* Fixed platform value
* Inherited without override
* Inherited with narrower override
* Fully tenant configurable within schema
* Property configurable within tenant constraints
* Additive composition
* Explicit replacement

Collection merge semantics are defined; they are never assumed. Removal, empty value, missing value, and inherited value have distinct meanings.

---

# Validation

Validation occurs at multiple levels:

* Schema validation
* Business-rule validation
* Cross-field dependency validation
* Tenant and resource ownership validation
* Entitlement validation
* Security and privacy policy validation
* Residency and integration validation
* Operational and capacity validation
* Compatibility validation

Invalid configuration is rejected before activation. Existing valid configuration remains active unless a security containment action explicitly overrides it.

---

# Configuration Change Lifecycle

The lifecycle includes:

1. Draft
2. Validate
3. Review and approve according to risk
4. Schedule or stage
5. Activate
6. Observe
7. Confirm or roll back
8. Retire superseded version

Low-risk preferences may use simplified self-service. High-risk identity, integration, retention, AI autonomy, or data-location changes require stronger controls.

---

# Scheduled and Effective-Dated Changes

Configuration may become effective at a future business time, such as a seasonal rule, property opening, rate policy, or tenant migration.

Scheduled changes record time zone, effective instant, author, approval, target version, dependencies, and cancellation policy.

Services must use consistent time semantics and avoid local-clock ambiguity.

---

# Staged Rollout

High-impact changes may be released to:

* Test or sandbox environment
* Internal validation property
* Explicit pilot properties
* Percentage or cohort within one tenant
* Entire tenant

Rollout scope never mixes data or authority between tenants. Evaluation compares service, safety, business, and user outcomes before expansion.

---

# Rollback

Rollback restores a known compatible configuration version.

It must account for irreversible side effects already caused by the prior configuration. Reverting a setting does not automatically undo bookings, messages, workflow actions, integration deliveries, or AI tool execution.

High-risk changes define compensating procedures before activation.

---

# Branding and Experience

Brand customization is constrained to approved presentation tokens and content slots.

Controls prevent:

* Executable content injection
* Inaccessible color or typography combinations
* Deceptive platform or security presentation
* Leakage through shared asset caches
* References to assets owned by another tenant
* Unreviewed collection of personal data

Platform safety, privacy, and legal notices remain available where required.

---

# Localization

Locale configuration distinguishes:

* Display language
* Content language
* Currency
* Tenant and property time zone
* User time zone
* Business date
* Date, time, number, and address format
* Measurement units

Canonical domain values remain independent of presentation. Currency conversion, tax, or legal meaning is owned by the appropriate business service rather than inferred from locale.

---

# Business Rules

Tenant-configurable business rules use bounded domain constructs.

Rules must have:

* Owning domain
* Declared inputs and outputs
* Deterministic or explicitly non-deterministic behavior
* Validation and conflict handling
* Effective time
* Test cases
* Decision evidence where material
* Version and rollback

Arbitrary tenant code is not executed as configuration.

---

# AI Configuration

Tenant AI configuration may select approved behavior within platform guardrails.

It can define:

* Approved use cases
* Tone and domain instructions
* Knowledge sources
* Tool access within tenant scope
* Human approval thresholds
* Memory and retention policy
* Cost and execution budgets
* Model capability preferences
* Evaluation thresholds

It cannot grant new data authority, bypass safety policy, access another tenant, reveal protected system instructions, or make generated content authoritative without governance.

---

# Integration Configuration

Integration configuration is tenant bound and includes non-secret connection metadata, mappings, schedules, callbacks, allowed operations, and limits.

Secrets remain in the secrets capability and are referenced by opaque identifier.

Configuration validation verifies endpoint policy, tenant ownership, residency, schema compatibility, credential availability, and test connectivity without exposing secrets.

---

# Entitlement Model

An entitlement grants access to a product capability, service level, capacity class, integration class, or administrative function.

An entitlement records:

* Tenant and optional property scope
* Capability identifier
* Grant source
* Effective and expiry time
* Quantity or tier where relevant
* Conditions and dependencies
* Status and reason
* Commercial reference
* Approval and evidence

Entitlement does not replace actor authorization or resource ownership validation.

---

# Feature Release and Entitlement Separation

Four decisions remain separate:

1. Is the feature technically deployed?
2. Is the feature operationally released for this cohort?
3. Is the tenant entitled to use it?
4. Is this actor authorized for this operation?

A positive answer to one does not imply the others.

Feature flags used for engineering rollout must not become the authoritative billing or security system.

---

# Service Tiers

A service tier packages defined:

* Feature entitlements
* Default quotas
* Availability and support targets
* Capacity priority or reservation
* Isolation options
* Backup and recovery objectives
* Retention or export capabilities
* Operational reporting

Tenant-specific contractual variations are represented as governed profile data, not undocumented conditionals in application code.

---

# Quota Configuration

Quota configuration specifies resource, scope, measurement window, hard or soft limit, burst behavior, notification thresholds, and exceedance behavior.

Tenants may allocate a purchased quota among properties only where the entitlement explicitly permits delegation.

Quota changes are effective-dated and reconciled with metering. A quota does not authorize access to a capability the tenant or actor is not otherwise permitted to use.

---

# Tenant Self-Service

Self-service capabilities expose only configuration and entitlement actions delegated to the tenant.

They provide:

* Clear current and effective values
* Source and inheritance
* Validation before save
* Impact and dependency information
* Preview where useful
* Change history
* Rollback where safe
* Approval status

Self-service APIs use the same policy and validation as administrative interfaces.

---

# Extensions and Plugins

Configuration selects only extensions approved by ARCH-019 controls.

Tenant extension settings define:

* Approved package and version
* Tenant and property scope
* Granted capabilities
* Data access
* Network access
* Resource limits
* Lifecycle and rollback
* Evidence and support ownership

Configuration cannot convert an untrusted payload into unrestricted executable code.

---

# Secrets Boundary

Configuration records may contain secret references but never secret values in:

* Source control
* Ordinary configuration APIs
* Logs or traces
* Workflow definitions
* Tenant export
* Support screenshots
* Client-side feature payloads

Secret resolution is performed by an authorized workload at the last practical moment and is tenant and environment scoped.

---

# Caching and Propagation

Effective configuration may be cached using tenant, property, capability, schema version, configuration version, and policy version.

Propagation defines:

* Maximum convergence time
* Critical invalidation path
* Behavior during provider outage
* Event ordering and replay
* Stale-read policy
* Reconciliation

Security containment changes use a higher-priority revocation or policy path rather than waiting for ordinary cache expiry.

---

# Configuration Evidence

Evidence records:

* Requested and previous value
* Effective resolved value
* Tenant and property scope
* Actor and delegated authority
* Validation and policy results
* Approvals
* Version and effective time
* Rollout, observation, and rollback
* Affected capabilities

Sensitive values are redacted while preserving proof of change and version.

---

# Observability

Operational signals include:

* Configuration read and resolution failures
* Invalid or rejected changes
* Propagation lag
* Version drift
* Override-policy violations
* Entitlement mismatch
* Feature rollout outcomes
* Rollback frequency
* Secret-resolution failures
* Tenant-specific performance changes after activation

Telemetry preserves tenant isolation and controls cardinality.

---

# Failure Handling

When configuration cannot be resolved:

* Mandatory controls remain enforced.
* High-risk operations fail closed.
* Low-risk presentation may use an approved safe default.
* The last known valid version may be used only where policy permits.
* Failures are correlated and surfaced to the owning team.
* No other tenant's value is used as fallback.

Invalid configuration is quarantined, not partially activated.

---

# Testing and Assurance

Testing covers:

* Schema and boundary values
* Precedence and inheritance
* Missing, null, empty, and removal semantics
* Tenant and property isolation
* Unauthorized overrides
* Mandatory-control preservation
* Entitlement and authorization separation
* Scheduled activation and time zones
* Cache invalidation and propagation
* Rollout and rollback
* AI and integration guardrails
* Extension capability limits
* Secret non-disclosure

Representative test tenants exercise different tiers, locales, properties, profiles, and configurations.

---

# Architecture Decisions

* Tenant variation is schema-governed configuration, not source-code forks.
* Configuration precedence is deterministic and inspectable.
* Mandatory platform controls are non-overridable.
* Configuration, entitlement, feature release, authorization, and quota are separate decisions.
* Domain owners remain authoritative for their configuration semantics.
* High-risk changes are staged, approved, observed, and reversible where practical.
* AI settings cannot expand tenant or actor authority.
* Integration secrets are referenced, not stored in configuration.
* Extension configuration consumes approved ARCH-019 packages and capabilities.
* Configuration failures never fall back to another tenant.

---

# Validation Criteria

This architecture is satisfied when:

* Every tenant setting has a schema, owner, scope, and version.
* Effective values can be explained through precedence and provenance.
* Tenant and property overrides remain within declared bounds.
* Mandatory controls cannot be disabled by configuration.
* Entitlement and authorization are independently enforced.
* Changes support validation, attribution, effective time, and rollback policy.
* Secrets never appear in ordinary configuration or exports.
* Configuration caches and events preserve tenant isolation.
* Customer variation does not require tenant-specific code branches.

---

# Summary

XeniosAI supports tenant differentiation through governed configuration, entitlements, service tiers, and approved extensions.

Deterministic hierarchy, schema validation, non-overridable platform controls, versioned change, staged rollout, and explainable effective values enable customization without weakening security or creating code forks. Configuration determines permitted variation; it never creates authority beyond tenant ownership, entitlement, authorization, and platform policy.
