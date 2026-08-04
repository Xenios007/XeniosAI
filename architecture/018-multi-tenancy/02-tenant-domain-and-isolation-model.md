# ARCH-018-02 — Tenant Domain and Isolation Model

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-02

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines the canonical tenant and property domain model and the isolation models used by XeniosAI.

It establishes stable identities, ownership boundaries, organizational relationships, placement semantics, isolation dimensions, and rules for selecting, changing, and assuring tenant isolation.

---

# Domain Principles

* Tenant identity is stable, globally unique, and non-semantic.
* A display name, brand, domain, external account, or billing reference is an alias, not identity.
* Property scope is subordinate to tenant scope.
* Ownership is authoritative and effective-dated where it can change.
* Business hierarchy does not automatically grant access.
* Isolation policy is explicit, versioned, and evidence producing.
* Dedicated infrastructure supplements rather than replaces application controls.
* Tenant placement can evolve without changing domain identity.
* Cross-tenant relationships never merge trust boundaries.

---

# Canonical Domain Concepts

## Tenant

The aggregate representing an independent customer or business trust boundary.

A tenant owns or controls:

* Tenant profile and lifecycle
* Properties and approved organizational relationships
* Memberships and delegated administration
* Tenant-level configuration and policy
* Data, knowledge, memory, and artifacts
* Integration connections and credential references
* Entitlements, quotas, and service commitments
* Isolation, placement, residency, and retention requirements
* Usage attribution and tenant-facing evidence

## Property

A hospitality operating unit governed within one tenant boundary.

A property may own local configuration, users, resources, operational data, knowledge, workflows, devices, and integrations. A property identifier is always interpreted together with its tenant ownership.

## Tenant Profile

The authoritative set of business and architectural attributes required to govern a tenant. It includes identity, lifecycle, ownership, service tier, isolation profile, residency, retention, administrative contacts, and routing references.

## Tenant Relationship

A governed relationship between tenants for an explicit purpose, such as a management agreement, approved data exchange, shared-service arrangement, or transfer.

A relationship grants no access by itself. APIs, policies, consent, contracts, and evidence define permitted exchange.

## Organizational Unit

A tenant-internal grouping such as brand, region, division, department, or portfolio. Organizational units aid policy, delegation, configuration, and reporting but remain inside one tenant.

## Tenant Resource

An object whose ownership or scope is bound to a tenant, including data, configuration, files, executions, messages, indexes, integrations, quotas, credentials, telemetry, and evidence.

## Placement

The approved runtime and data location selected for a tenant resource, including region, cell, partition, store, compute pool, and recovery placement.

## Isolation Profile

A governed bundle of control requirements applied to a tenant, property, data class, or workload.

---

# Aggregate Boundaries

The Tenant aggregate governs identity, lifecycle, and references to profile-level policy. It does not absorb domain resources owned by reservations, guests, payments, inventory, workflows, knowledge, or other bounded contexts.

The Property aggregate governs property identity, tenant ownership, operating state, and core property references. Domain services retain ownership of property-scoped business entities.

Cross-service invariants are coordinated through contracts, events, policy, and reconciliation rather than shared database ownership.

No service may update another service's tenant-owned records directly.

---

# Identity Model

## Internal Identifiers

Tenant and property identifiers must be:

* Globally unique within their defined namespace
* Immutable after issuance
* Opaque and non-semantic
* Safe for correlation without revealing customer meaning
* Never recycled

## Aliases

Aliases may include:

* Legal or trading name
* Brand name
* DNS domain
* Human-readable slug
* External customer number
* Partner account reference
* Billing account reference

Aliases are versioned mappings with validity and provenance. An alias collision or stale mapping must not route a request to an arbitrary tenant.

## External Identifiers

External identifiers are interpreted within a provider or integration namespace. They must map to an internal tenant or property through an authoritative, tenant-bound connection.

---

# Hierarchy Model

The canonical hierarchy is:

1. Platform
2. Tenant
3. Organizational unit, where used
4. Property
5. Property-scoped resources

Organizational units may be nested where governed, but the hierarchy must remain acyclic and bounded.

A property has exactly one owning tenant at a point in business time. Management or data-sharing relationships are modeled separately from ownership.

Tenant-wide operations must explicitly declare portfolio scope. They cannot assume every property is visible to every tenant member.

---

# Property Ownership and Transfer

Property transfer is a governed business process, not an identifier edit.

A transfer must address:

* Effective business time
* Source and destination tenant approval
* Data classification and legal basis
* Historical record ownership
* Active reservations, payments, and obligations
* Identity and staff access
* Integrations and credentials
* Knowledge, memory, and workflow state
* Configuration and branding
* Data export, migration, retention, and deletion
* Usage and billing allocation
* Reconciliation and evidence

Historical records may remain linked to the tenant that owned the property when the activity occurred. The ownership model must not rewrite history merely to simplify current queries.

---

# Tenant Registry

The Tenant Registry is the authoritative source for routing and control-plane tenant facts.

It records at minimum:

* Tenant identifier and aliases
* Lifecycle and effective time
* Tenant type and ownership references
* Property relationships
* Isolation profile and version
* Placement and routing references
* Residency and sovereignty requirements
* Retention and legal-hold references
* Service tier and entitlement references
* Identity federation references
* Administrative ownership
* Provisioning and reconciliation state

The registry must not become a general-purpose store for domain data or secrets.

Changes publish versioned events. Consumers must tolerate propagation delay safely and reconcile critical state.

---

# Isolation Objectives

Isolation prevents one tenant from improperly:

* Reading another tenant's information
* Modifying or deleting another tenant's resources
* Executing commands or tools in another tenant's scope
* Inferring sensitive activity through identifiers, errors, timing, or telemetry
* Consuming capacity reserved for another tenant
* Influencing another tenant's configuration, AI context, workflow, or integration
* Affecting another tenant's backup, restore, retention, or deletion
* Acquiring administrative or cryptographic authority over another tenant

Isolation also limits platform failures to the smallest practical blast radius.

---

# Isolation Dimensions

## Logical Isolation

Tenant ownership attributes, policy decisions, query constraints, namespaces, and provider validation separate resources inside shared services.

## Data Isolation

Rows, documents, objects, indexes, graphs, files, caches, messages, and analytics are scoped through approved tenant-aware structures.

## Cryptographic Isolation

Keys, key derivation, encryption context, rotation, revocation, and access policy create cryptographic boundaries appropriate to classification and risk.

## Compute Isolation

Namespaces, pools, cells, runtimes, queues, scheduling, and dedicated compute constrain workload interaction and resource contention.

## Network Isolation

Service identity, segmentation, ingress and egress control, private connectivity, tenant-specific endpoints, and policy restrict communication paths.

## Operational Isolation

Operator roles, support tooling, diagnostics, deployment, backup, recovery, and evidence preserve tenant scope.

## Temporal Isolation

Effective dates, lifecycle state, token expiry, cache invalidation, deletion, retention, and transfer prevent stale authority from crossing time boundaries.

---

# Reference Isolation Models

## Shared Logical Model

Multiple tenants use shared runtime and storage resources.

Required controls include:

* Mandatory tenant ownership attributes
* Provider-side authorization
* Tenant-bound queries and mutations
* Tenant-aware cache and index keys
* Scoped messaging and background execution
* Fair resource governance
* Negative isolation tests
* Tenant-safe telemetry and operations

This model provides efficient scale but demands strong automated application and data controls.

## Partitioned Model

Tenants use managed partitions such as separate schemas, databases, indexes, queues, namespaces, shards, key domains, or compute pools.

Partitioning improves blast-radius containment, placement, scale, or performance predictability. Shared control-plane and application capabilities may remain.

Routing to the correct partition must use trusted registry state. A routing error must fail closed rather than fall back to a default partition.

## Dedicated Model

A tenant receives dedicated stores, runtime cells, accounts, environments, networks, or combinations of these.

Dedicated isolation may support strict regulation, contractual separation, sovereign operation, extreme scale, or specialized recovery.

The application still carries tenant context, validates ownership, applies authorization, and emits tenant-scoped evidence.

---

# Hybrid Isolation

One tenant may use different models by capability or data class.

Examples include:

* Dedicated payment data with shared content delivery
* Region-specific guest data with a shared global tenant registry
* Dedicated knowledge indexes with shared workflow compute
* Shared transactional storage with a reserved AI execution pool

Hybrid models require an explicit placement map. Complexity, failure modes, recovery dependencies, and operational ownership must be assessed before approval.

---

# Isolation Profile Model

An isolation profile defines:

| Category | Required content |
|---|---|
| Applicability | Tenant types, workloads, classifications, and exclusions |
| Logical controls | Ownership, policy, query, namespace, and context rules |
| Placement | Regions, cells, partitions, stores, and routing |
| Cryptography | Key ownership, scope, rotation, revocation, and recovery |
| Compute | Pooling, scheduling, limits, and dedicated requirements |
| Network | Connectivity, segmentation, ingress, egress, and private access |
| Operations | Access, diagnostics, deployment, maintenance, and support |
| Resilience | Backup, replication, restore unit, RTO, RPO, and validation |
| Assurance | Tests, telemetry, evidence, review frequency, and exceptions |
| Lifecycle | Provisioning, migration, downgrade, offboarding, and deletion |

Profiles are versioned architecture products. A tenant references an approved version, and changes use governed migration.

---

# Isolation Selection

Selection considers:

* Information classification
* Privacy and regulatory obligations
* Data residency and sovereignty
* Contractual commitments
* Tenant size and projected growth
* Workload variability and latency
* Availability and recovery objectives
* Blast-radius tolerance
* Integration connectivity
* Support and operational capability
* Cost and commercial model
* Migration and exit requirements

Selection must use documented criteria and accountable approval. Revenue or customer preference alone cannot justify weakening mandatory controls.

---

# Placement Model

Placement resolves an abstract tenant scope to approved physical or logical runtime locations.

Placement attributes may include:

* Sovereign or geographic region
* Deployment cell
* Compute pool or namespace
* Transactional partition
* Object-storage location
* Search or knowledge index
* Messaging partition
* Key domain
* Backup and recovery location

The routing layer consumes signed or otherwise trusted placement state. Business clients do not choose arbitrary placement targets.

Placement state is versioned and supports a migration window in which old and new locations may coexist under controlled rules.

---

# Tenant Context and Ownership Enforcement

For each resource access, the provider evaluates:

1. Is the context authentic and current enough for the operation?
2. Is the tenant active for this capability?
3. Is the actor or workload related to the tenant?
4. Does the requested property belong to that tenant?
5. Does the target resource belong to the same tenant and property scope?
6. Is the operation permitted by role, purpose, entitlement, and policy?
7. Is the selected placement valid for the tenant?
8. Are required evidence and obligations satisfied?

Resource identifiers must not be used to discover or bypass tenant ownership. Error behavior should avoid confirming another tenant's resources.

---

# Data Modeling Rules

For shared logical storage:

* Tenant ownership is mandatory for tenant-scoped records.
* Ownership is included in primary access paths and uniqueness rules where appropriate.
* Foreign relationships cannot cross tenants unless a specific platform relation permits it.
* Bulk operations require explicit tenant scope or privileged cross-tenant capability.
* Database maintenance and analytics preserve tenant constraints.
* Deletion, retention, and export can identify all tenant-owned records and derivatives.

Application validation and data-layer safeguards should reinforce each other. Neither is assumed infallible.

---

# Shared Services and Platform Resources

Not every resource belongs to a tenant. Platform-scoped resources may include public catalogs, global model definitions, shared schemas, and platform policy.

Every interface must declare its scope classification:

* Platform scoped
* Tenant scoped
* Property scoped
* Explicit privileged cross-tenant scope

A resource must not silently change classification. Promotion of tenant content into a platform resource requires provenance, rights, review, sanitization, and approval.

---

# Cross-Tenant Relationships

Approved cross-tenant scenarios may include:

* Marketplace or partner exchange
* Shared service provider relationships
* Property management transitions
* Aggregated regulatory reporting
* Platform fraud or security operations
* Anonymized benchmarking

Each scenario requires a purpose-specific contract, minimal data scope, independent authorization, classification controls, tenant-safe output, retention, and evidence.

The architecture prohibits general cross-tenant query access through ordinary tenant APIs.

---

# Transfer, Merge, and Split

Tenant reorganization may require:

* Property transfer
* Tenant split
* Tenant merger
* Brand reorganization
* Legal-entity change

These operations create new ownership relationships and controlled migrations. They must preserve historical truth, legal obligations, audit continuity, identifier stability where appropriate, and clear effective dates.

A merger does not automatically authorize combining all data. Purpose, consent, retention, and contractual restrictions remain applicable.

---

# Resilience Boundaries

The isolation model must define the recovery unit.

Possible units include:

* Individual tenant
* Tenant partition
* Deployment cell
* Shared service instance
* Region

Recovery design must prevent one tenant's restore from overwriting another tenant or violating a later retention, transfer, or deletion decision.

Tenant-specific restoration from shared backups requires tested extraction, authorization, validation, and reconciliation.

---

# Operational Requirements

Operations must maintain an inventory connecting tenants to profiles, placements, versions, dependencies, and recovery units.

Operational controls include:

* Tenant-aware health and impact analysis
* Capacity by tenant and partition
* Placement drift detection
* Scoped diagnostics and support access
* Tenant-specific maintenance records
* Backup and restore validation
* Isolation control monitoring
* Migration and rollback runbooks

Internal topology details are not exposed to tenant consumers unless contractually required and safe.

---

# Assurance Model

Isolation assurance includes:

* Domain-model and threat review
* Static analysis of tenant ownership patterns
* Unit and contract tests
* Multi-tenant integration tests
* Negative authorization tests
* Cross-partition routing tests
* Cache, message, search, knowledge, and memory tests
* Privileged-access review
* Backup and restore exercises
* Migration and offboarding verification
* Production control telemetry

Tests should use at least two intentionally distinct tenant fixtures and attempt prohibited cross-tenant access. A single-tenant test environment cannot demonstrate isolation.

---

# Failure Handling

The system fails closed when:

* Tenant or property context is absent or contradictory
* Registry or placement data cannot be trusted
* Ownership cannot be established
* Isolation policy is unavailable for a high-risk operation
* A partition target does not match tenant placement
* A cross-tenant relationship is expired or unapproved

Failures are correlated without exposing another tenant's identifiers or resources. Suspicious mismatches produce security evidence and may trigger containment.

---

# Architecture Decisions

* Tenant is the primary customer trust boundary.
* Property is a subordinate operational boundary.
* Tenant and property identifiers are opaque, immutable, and never reused.
* Organizational relationships do not grant implicit access.
* Ownership and placement are distinct concepts.
* Shared, partitioned, dedicated, and hybrid isolation are supported through approved profiles.
* Tenant context remains mandatory in dedicated deployments.
* Provider services validate tenant ownership.
* Routing uses authoritative placement state and has no unsafe default.
* Cross-tenant operations use segregated capabilities.
* Isolation profiles include lifecycle, operations, recovery, and evidence.
* Tenant reorganization preserves historical ownership and obligations.

---

# Validation Criteria

This architecture is satisfied when:

* The tenant and property model is used consistently across bounded contexts.
* Every tenant resource has an accountable ownership strategy.
* Every runtime interface declares its scope classification.
* Approved isolation profiles are documented and testable.
* Placement can be resolved without trusting client-selected infrastructure.
* Dedicated tenants retain application-level tenant controls.
* Cross-tenant access is segregated and evidenced.
* Recovery, migration, transfer, and deletion preserve tenant boundaries.
* Multi-tenant negative tests cover all critical data and execution paths.

---

# Summary

The tenant domain model gives XeniosAI stable customer and property boundaries independent of deployment technology.

The isolation model composes logical, data, cryptographic, compute, network, operational, and temporal controls into approved profiles. Shared efficiency, partitioned containment, and dedicated separation are deployment choices governed by the same tenant semantics and provider obligations.

This foundation enables the lifecycle, access, data, runtime, resource, and operations designs defined in subsequent ARCH-018 chapters.
