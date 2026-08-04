# ARCH-018-03 — Tenant Lifecycle and Provisioning

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-03

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines how a XeniosAI tenant is requested, assessed, approved, provisioned, validated, activated, changed, restricted, suspended, migrated, offboarded, retained, and retired.

Tenant lifecycle is a governed, distributed business process. It coordinates authoritative state across identity, data, configuration, integrations, observability, resilience, service management, and commercial capabilities without relying on one cross-service transaction.

---

# Lifecycle Principles

* Tenant state is authoritative, explicit, and effective-dated.
* State transitions are commands, not direct field edits.
* Every transition has authorization, preconditions, evidence, and an accountable owner.
* Provisioning is idempotent, resumable, and reconcilable.
* Activation follows validation; resource creation alone is insufficient.
* Partial failure is visible and recoverable.
* Suspension is policy driven and preserves required access and obligations.
* Migration preserves identity and business continuity.
* Offboarding covers authoritative and derived resources.
* Legal hold and retention may outlive service access.
* Retirement never causes tenant identifiers to be reused.

---

# Lifecycle States

| State | Meaning | General access posture |
|---|---|---|
| Requested | A tenant request exists but is not yet approved | Assessment only |
| Assessed | Business, risk, residency, service, and technical needs are recorded | Assessment and approval workflows |
| Approved | The tenant profile is authorized for provisioning | Provisioning commands only |
| Provisioning | Required resources and control-plane state are being created | Controlled setup and validation |
| Validating | Provisioned capabilities are undergoing readiness tests | Test and administrative access only |
| Active | Approved production capabilities are available | Entitlement- and policy-governed access |
| Restricted | Selected operations are limited while core service may continue | Explicit permitted subset |
| Suspended | Ordinary tenant use is stopped | Recovery, compliance, export, and authorized administration only |
| Migrating | Placement or isolation is changing under a governed plan | Controlled source and destination access |
| Offboarding | Service termination and closure activities are underway | Export, reconciliation, retention, and closure only |
| Retained | Service is closed but records remain under retention or legal hold | Highly restricted custodial access |
| Retired | Obligations are complete and active resources are removed | Evidence lookup only where required |

A tenant may have secondary conditions such as incident containment or legal hold. These conditions supplement rather than overload the primary lifecycle state.

---

# Lifecycle Authority

The Tenant Lifecycle capability owns the authoritative state and transition history.

It coordinates but does not directly own:

* User and workload identities
* Domain service data
* Infrastructure resources
* Integration credentials
* Knowledge and memory stores
* Usage and invoices
* Legal records and audit evidence

Each provider owns its resource lifecycle and reports status to the lifecycle coordinator.

---

# Transition Contract

Every transition records:

* Tenant identifier
* Current and requested state
* Command identifier and idempotency key
* Requesting actor and authority
* Business purpose and reason
* Preconditions and policy result
* Effective time
* Required approvals
* Expected provider actions
* Completion and exception status
* Correlation and evidence references

Conflicting or stale transition commands are rejected. Repeating a completed command returns the established outcome rather than performing the action twice.

---

# Tenant Request

A request captures enough information to assess the desired service without prematurely creating production authority.

Required inputs may include:

* Legal and business identity
* Tenant owner and accountable contacts
* Expected properties, users, workload, and growth
* Regions and operating jurisdictions
* Data classifications and privacy obligations
* Identity federation requirements
* Required integrations
* Knowledge and content sources
* Service, availability, and recovery expectations
* Isolation and connectivity needs
* Commercial reference
* Target onboarding dates

Unverified request data is treated as applicant-provided information, not authoritative platform state.

---

# Assessment

Assessment determines whether and how XeniosAI can serve the tenant.

## Business Assessment

Confirms ownership, product fit, properties, service tier, commercial sponsorship, and responsibilities.

## Risk and Compliance Assessment

Identifies data classes, jurisdictions, regulatory obligations, security risks, third parties, residency, retention, and evidence requirements.

## Architecture Assessment

Selects isolation profile, placement, identity model, integration pattern, capacity baseline, recovery objectives, and required exceptions.

## Operational Assessment

Confirms support, escalation, maintenance, monitoring, incident communication, continuity, and offboarding readiness.

Assessment outputs are versioned and linked to approvals.

---

# Approval

Approval establishes the authorized tenant profile.

Approval must identify:

* Accountable business owner
* Approved tenant type and service tier
* Isolation and placement profile
* Residency and retention policy
* Identity and administrative model
* Initial properties
* Entitlements and quotas
* Required integrations
* Risk acceptances or exceptions
* Activation criteria

Approval does not activate the tenant. It authorizes provisioning within the approved profile.

---

# Provisioning Architecture

Provisioning is an orchestrated workflow over independently owned providers.

The coordinator:

1. Creates the immutable tenant identifier.
2. Establishes the tenant registry record.
3. Reserves placement and capacity.
4. Requests provider resources.
5. Tracks acknowledgments and evidence.
6. Reconciles desired and actual state.
7. Routes failures to retry, compensation, or intervention.
8. Declares readiness only after validation.

Providers expose idempotent commands and status queries. They do not share a provisioning database with the coordinator.

---

# Provisioning Domains

## Registry and Routing

Create identity, aliases, lifecycle, profile, region, cell, partition, routing, and reconciliation metadata.

## Identity and Administration

Establish federation references, initial administrative membership, privileged-role constraints, invitations, and recovery ownership.

## Policy and Security

Apply authorization policy, encryption material, secrets references, residency controls, audit configuration, and security monitoring.

## Data and Runtime

Create or allocate stores, partitions, namespaces, indexes, caches, queues, compute pools, and recovery resources according to the isolation profile.

## Configuration and Entitlements

Apply platform defaults, service tier, tenant configuration, feature entitlements, quotas, branding, locales, and property templates.

## Knowledge, Memory, Workflow, and Agents

Create tenant-bounded source registries, indexes, memory policy, workflow namespaces, agent policy, tool bindings, and evaluation controls.

## Integration

Create tenant-owned connections, credential references, callbacks, mappings, limits, and delivery observability.

## Operations

Create health views, alert routing, service records, runbook references, backup policy, support scope, incident contacts, and evidence collection.

## Commercial Operations

Bind product catalog, entitlement source, usage account, billing reference, and effective dates without placing payment data in the tenant registry.

---

# Desired-State Manifest

Provisioning uses a versioned desired-state manifest derived from the approved tenant profile.

The manifest contains references and non-secret configuration sufficient to determine expected resources. Secrets are resolved through approved secret-management capabilities.

The manifest is:

* Immutable by version
* Schema validated
* Policy checked
* Attributable to an approval
* Safe to replay idempotently
* Comparable with provider-reported state

Manual resources not represented in desired state are treated as drift and investigated.

---

# Idempotency and Concurrency

Provisioning commands carry stable operation identifiers.

Providers must distinguish:

* A safe retry of the same command
* A new desired-state version
* A conflicting concurrent request
* A command for the wrong tenant or placement

Concurrent lifecycle transitions for one tenant are serialized or rejected through optimistic concurrency. Long-running provider work does not require holding a distributed lock.

---

# Failure and Compensation

Provisioning can partially succeed. The coordinator records per-provider state and applies one of four responses:

* Retry a transient failure
* Resume from the last verified step
* Compensate resources that are safe to remove
* Pause for accountable intervention

Compensation is not assumed to restore an exact prior state. Once external data, credentials, communications, or regulated records exist, explicit remediation may be required.

The tenant remains non-active until activation criteria are satisfied.

---

# Validation and Readiness

Validation confirms that provisioned resources enforce the approved architecture.

Readiness checks include:

* Tenant and property identity resolution
* Positive and negative authorization
* Cross-tenant isolation
* Placement and residency
* Encryption and key access
* Configuration and entitlements
* Quota and resource policy
* Event and integration routing
* Knowledge and memory filtering
* Workflow and agent context
* Telemetry and alert delivery
* Backup and recovery registration
* Support and escalation readiness
* Usage attribution

Validation evidence is linked to the tenant profile version.

---

# Activation

Activation is a controlled transition from Validating to Active.

Preconditions include:

* All mandatory providers report ready.
* Critical validation tests pass.
* Required exceptions are approved and current.
* Administrative ownership is confirmed.
* Monitoring and support routes are active.
* Commercial and entitlement effective times are consistent.
* No blocking security, privacy, or residency issue remains.

Activation publishes a versioned lifecycle event. Consumers still query or validate current state for high-risk decisions.

---

# Property Provisioning

Property provisioning is subordinate to an active or otherwise permitted tenant.

It creates property identity, tenant ownership, local configuration, roles, data scopes, knowledge sources, workflows, integrations, quotas, telemetry, and operational readiness.

Adding a property may alter tenant capacity, service, residency, integration, or commercial requirements and can require renewed assessment.

Property activation does not expand a user's access without an explicit membership or delegation change.

---

# Active-State Changes

Common changes include:

* Adding or closing properties
* Changing service tier or entitlements
* Increasing quotas or reserved capacity
* Updating federation or administrators
* Changing residency or isolation profile
* Adding integrations or extensions
* Updating retention and knowledge policy

Changes follow a smaller version of request, assessment, approval, provisioning, validation, and activation. Risk determines the required controls.

---

# Restriction

Restricted state limits selected capabilities while preserving approved operations.

Examples include:

* Blocking new high-risk actions while allowing read access
* Disabling an affected integration
* Limiting AI agents while maintaining manual service
* Reducing resource consumption during abuse investigation
* Preventing configuration changes during migration

Restrictions are explicit, time bounded where possible, communicated, observable, and reviewable.

---

# Suspension

Suspension stops ordinary tenant use due to security, legal, operational, commercial, or tenant-requested reasons.

The suspension policy must specify permitted exceptions, including:

* Tenant administrator recovery
* Authorized data export
* Legal or privacy requests
* Incident response
* Evidence preservation
* Billing review

Invoice status alone does not modify authorization. A commercial system requests an approved lifecycle decision, and the tenant capability enforces the resulting state.

---

# Reactivation

Reactivation is not an unconditional reversal.

It verifies:

* The suspension reason is resolved.
* Credentials and memberships remain appropriate.
* Configuration and integrations are current.
* Data and resources remain consistent.
* Capacity and entitlements are valid.
* Security, privacy, and operational readiness are restored.

Long suspensions may require full validation comparable to initial activation.

---

# Tenant Migration

Migration changes placement, isolation, provider, version, or region while preserving tenant identity.

The migration lifecycle includes:

1. Assess and approve the target profile.
2. Inventory authoritative and derived resources.
3. Establish target capacity and controls.
4. Copy or reconstruct data with provenance.
5. Synchronize changes during transition.
6. Validate isolation, completeness, and performance.
7. Freeze or coordinate writes where required.
8. Cut over trusted routing.
9. Monitor and reconcile.
10. Retain rollback capability for an approved window.
11. Retire source resources under policy.

Migration does not change the tenant identifier or silently alter contractual obligations.

---

# Offboarding Initiation

Offboarding begins with an authorized termination request or approved platform decision.

The plan establishes:

* Effective termination date
* Permitted service during notice
* Export scope and recipient
* Retention and legal-hold obligations
* Integration closure
* Credential and membership revocation
* Data and derivative inventory
* Usage and billing reconciliation
* Communication and evidence requirements
* Irreversible action approvals

---

# Data Export

Export must be:

* Explicitly authorized
* Scoped to the tenant and permitted properties
* Complete according to a published manifest
* Provided in documented, usable formats
* Integrity protected
* Encrypted in transit and at rest
* Time-limited for retrieval
* Attributable and auditable

Export does not include platform secrets, another tenant's data, restricted third-party content, or internal security information.

---

# Retention, Legal Hold, and Erasure

Offboarding classifies resources as:

* Eligible for immediate deletion
* Retained for a defined obligation
* Subject to legal hold
* Aggregated or anonymized under approved policy
* Required as immutable platform evidence

Deletion propagates to caches, indexes, files, knowledge representations, memory, model artifacts where applicable, workflow state, integration queues, analytics copies, backups according to policy, and temporary support artifacts.

Where immediate backup deletion is impractical, access is revoked and expiry is enforced through the approved backup lifecycle.

---

# Retirement

Retirement occurs only when:

* Active access and integrations are revoked.
* Required exports are completed or expired.
* Usage and billing are reconciled.
* Retention and legal-hold disposition is recorded.
* Eligible resources and derivatives are deleted.
* Residual evidence is minimized and access controlled.
* Provider inventories reconcile with the registry.
* Closure approval and evidence are complete.

The retired tenant identifier remains reserved permanently.

---

# Reconciliation

Lifecycle reconciliation compares desired state with provider-reported actual state.

It detects:

* Missing required resources
* Orphaned resources
* Incorrect placement or profile version
* Active access for suspended or retired tenants
* Missing telemetry or backup coverage
* Stale integrations or credentials
* Incomplete deletion
* Entitlement and quota drift

Reconciliation findings create governed issues and remediation work. Automated correction is limited to safe, approved actions.

---

# Events

Lifecycle events may include:

* TenantRequested
* TenantApproved
* TenantProvisioningStarted
* TenantProviderReady
* TenantValidationFailed
* TenantActivated
* TenantRestricted
* TenantSuspended
* TenantReactivated
* TenantMigrationStarted
* TenantPlacementChanged
* TenantOffboardingStarted
* TenantRetentionApplied
* TenantErasureCompleted
* TenantRetired

Events contain no unnecessary sensitive profile information. Consumers validate sequence, version, tenant identity, and authority.

---

# Roles and Accountability

| Role | Responsibility |
|---|---|
| Tenant lifecycle owner | State model, transition policy, orchestration, reconciliation |
| Business owner | Customer relationship and business approval |
| Architecture | Isolation, placement, integration, and exception assessment |
| Security and privacy | Risk, access, residency, retention, and control approval |
| Platform engineering | Provisioning framework and shared providers |
| Domain owners | Idempotent resource lifecycle and readiness reporting |
| Operations | Support, monitoring, continuity, migration, and closure execution |
| Finance | Entitlement and billing references, reconciliation, closure |
| Tenant administrator | Delegated inputs, validation, and tenant-owned decisions |

---

# Observability and Evidence

Lifecycle telemetry records state duration, provider progress, failures, retries, manual interventions, drift, and completion.

Evidence must answer:

* Who requested and approved the transition?
* What tenant profile and policy version applied?
* Which providers were expected and completed?
* What validation ran and what passed?
* What exceptions remained?
* When did the state become effective?
* What data, access, and resources remain?

Sensitive evidence is access controlled and retained under policy.

---

# Service Objectives

Lifecycle service objectives may cover:

* Request assessment time
* Provisioning completion time
* Activation success rate
* Provider convergence time
* Migration duration and disruption
* Suspension enforcement time
* Export availability time
* Offboarding and erasure completion time
* Drift detection and remediation time

Targets vary by tenant profile and risk. Safety and legal obligations take precedence over speed.

---

# Architecture Decisions

* Tenant lifecycle state is centrally authoritative but provider execution is distributed.
* State transitions use commands, concurrency controls, and evidence.
* Provisioning uses versioned desired state and idempotent provider contracts.
* Activation requires validation and readiness, not merely successful resource creation.
* Partial failure is reconciled rather than hidden.
* Restriction and suspension have explicit permitted-operation policies.
* Migration preserves tenant identity and supports rollback.
* Offboarding governs export, revocation, retention, erasure, and reconciliation.
* Legal hold can preserve records after service access ends.
* Retired tenant identifiers are never reused.

---

# Validation Criteria

This architecture is satisfied when:

* Every tenant has one authoritative lifecycle state and complete transition history.
* Provisioning steps are idempotent, observable, and resumable.
* Desired and actual provider state are reconciled.
* Activation requires documented readiness evidence.
* Suspension and restriction are consistently enforced across providers.
* Migration can be validated and rolled back within an approved window.
* Offboarding identifies and disposes of authoritative and derived resources.
* Retention and legal hold prevent unauthorized erasure.
* Tenant retirement produces verifiable closure evidence.

---

# Summary

Tenant lifecycle is the controlled progression of a XeniosAI customer boundary from request through retirement.

The architecture coordinates independently owned providers through approved profiles, versioned desired state, idempotent commands, validation, reconciliation, and evidence. It supports safe activation, controlled restriction, portable migration, and complete exit without weakening tenant isolation or historical accountability.
