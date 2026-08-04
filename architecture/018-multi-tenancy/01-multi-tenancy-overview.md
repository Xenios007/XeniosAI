# ARCH-018-01 — Multi-Tenancy Overview

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-01

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document provides the business and architectural overview for multi-tenancy in XeniosAI.

It explains why tenant separation is a platform concern, identifies the stakeholders and capabilities involved, establishes the target operating state, and defines the outcomes by which the architecture is assessed.

The detailed tenant domain, lifecycle, access, data, configuration, runtime, resource, operational, and evolutionary designs are defined in the remaining ARCH-018 chapters.

---

# Executive Summary

XeniosAI is intended to serve independent hospitality organizations through a common platform. Each organization may operate one property or a large portfolio, use different identity providers, apply different policies, maintain distinct knowledge and memory, connect different systems, purchase different service levels, and operate under different legal or residency obligations.

The platform must create economies of scale without combining those organizations into one trust boundary.

Multi-tenancy therefore has two simultaneous goals:

* Share platform capabilities where sharing is safe and valuable.
* Preserve independent ownership, authority, isolation, service management, and evidence for every tenant.

The target architecture uses explicit tenant and property context, authoritative ownership, policy-based isolation, governed lifecycle automation, tenant-aware runtime controls, fair resource management, and auditable operations.

The target state is not limited to a single storage pattern. XeniosAI can place workloads in shared, partitioned, or dedicated isolation models while preserving the same business semantics and security invariants.

---

# Business Context

Hospitality organizations vary materially in size, operating model, geography, brand, risk, systems, and service expectations.

A small independent property may need rapid onboarding and standardized capabilities. A regional group may require shared corporate configuration with property-level delegation. A global operator may require federation, data residency, portfolio controls, dedicated capacity, contractual isolation, and controlled integration with many existing systems.

XeniosAI must support these differences without maintaining separate products or source-code branches for every customer.

Multi-tenancy enables:

* Consistent platform capability delivery
* Faster tenant and property onboarding
* Centralized improvement and security maintenance
* Tenant-specific configuration and branding
* Portfolio-wide and property-level operating models
* Efficient shared infrastructure
* Selective dedicated isolation
* Measurable service tiers and usage
* Controlled tenant migration and exit

These benefits are acceptable only when the platform can demonstrate that one tenant cannot improperly view, change, execute against, or exhaust another tenant's resources.

---

# Problem Statement

Without a coherent multi-tenancy architecture, different teams may implement tenant scope independently. Common failure modes include:

* Treating a request header as trusted authority
* Applying tenant filters only in primary database queries
* Omitting tenant scope from caches, events, files, or search indexes
* Allowing background jobs to run with an implicit default tenant
* Reusing integration credentials across customers
* Mixing tenant knowledge or memory in AI context
* Giving support personnel broad standing access
* Using commercial status directly as an authorization decision
* Creating tenant-specific code forks
* Restoring shared data in a way that changes another tenant
* Reporting aggregate telemetry that exposes customer identity or activity
* Scaling high-volume tenants at the expense of other tenants
* Retaining derived data after tenant deletion

ARCH-018 replaces fragmented conventions with common concepts, responsibilities, controls, lifecycle, evidence, and conformance expectations.

---

# Architecture Scope

The architecture covers the full path from tenant request to tenant retirement.

## Business Scope

* Tenant definition and accountable ownership
* Property hierarchy and portfolio relationships
* Service tiers and entitlements
* Delegated tenant and property administration
* Commercial and operational separation
* Tenant support and communications

## Information Scope

* Transactional and analytical data
* Configuration and metadata
* Files, indexes, caches, and messages
* Knowledge, memory, and AI context
* Telemetry and audit evidence
* Backups, exports, and retained records

## Application Scope

* Experience applications
* APIs and SDKs
* Domain and platform services
* Workflows and human tasks
* AI orchestration and agents
* Integrations and extensions
* Administrative and support tooling

## Technology Scope

* Context propagation
* Policy enforcement
* Storage and compute placement
* Encryption boundaries
* Resource controls
* Observability and recovery

The architecture defines required behavior and logical capabilities. Product or provider selection remains an implementation concern.

---

# Scope Boundaries

ARCH-018 does not:

* Define the complete enterprise identity architecture
* Replace domain-service ownership of business data
* Define product pricing or contractual terms
* Select a database-per-tenant or shared-database product
* Prescribe a cloud-account structure
* Define every jurisdiction's legal requirements
* Replace security, privacy, governance, or operations architecture
* Make AI systems authoritative for tenant access decisions
* Make the gateway the only tenant enforcement point

It defines the tenant-specific requirements those capabilities must satisfy.

---

# Primary Stakeholders

| Stakeholder | Primary concerns |
|---|---|
| Tenant owners | Isolation, business control, service commitments, portability, trust |
| Tenant administrators | Membership, configuration, properties, entitlements, integrations |
| Property administrators | Local operations, delegated access, property configuration, support |
| Guests and end users | Privacy, correct property context, consistent experience, data rights |
| Platform product management | Scalable offerings, differentiation, adoption, commercial alignment |
| Enterprise architecture | Coherent boundaries, reusable patterns, portability, evolution |
| Platform engineering | Registry, context, provisioning, placement, quotas, operations |
| Domain service teams | Tenant ownership validation, data isolation, events, recovery |
| Security and privacy | Least privilege, cross-tenant risk, residency, evidence, incident response |
| Operations and support | Health, diagnosis, access, maintenance, recovery, communication |
| Finance and commercial teams | Entitlements, attribution, usage integrity, rating, reconciliation |
| Risk, compliance, and audit | Control objectives, evidence, exceptions, testing, remediation |
| Integration partners | Explicit tenant bindings, credentials, contracts, quotas, support |
| Developers | Paved-road libraries, test fixtures, policy APIs, clear failure behavior |

Stakeholder convenience does not override the tenant boundary. High-privilege operational needs require explicit, governed capabilities.

---

# Stakeholder Concerns and Architecture Responses

## Tenant Trust

Concern: a tenant must know its data, configuration, and operations cannot be exposed to or changed by another tenant.

Response: end-to-end tenant scope, independent provider validation, isolation profiles, negative testing, tenant-aware telemetry, and auditable administration.

## Portfolio Control

Concern: a multi-property tenant needs centralized governance without eliminating property autonomy.

Response: tenant-to-property hierarchy, scoped delegation, inherited configuration with controlled overrides, and explicit cross-property authority.

## Regulatory Variation

Concern: tenants may have different residency, retention, access, or evidence requirements.

Response: policy-driven tenant profiles, governed placement, classified data flows, processor inventory, and enforceable lifecycle obligations.

## Cost Efficiency

Concern: the platform must share capabilities economically while maintaining protection and predictability.

Response: shared-by-default reference patterns where risk permits, isolation-profile selection, quotas, fair scheduling, and attributable consumption.

## Growth

Concern: a tenant may grow from one property to hundreds without disruptive redesign.

Response: stable tenant semantics, property hierarchy, automated provisioning, partition-aware routing, capacity thresholds, and controlled migration.

## Customization

Concern: customers require unique branding, integrations, policies, and workflows.

Response: schema-governed configuration, entitlement-controlled features, approved extensions, and platform guardrails instead of code forks.

## Operational Support

Concern: support teams need enough access to diagnose issues without receiving unrestricted customer-data access.

Response: tenant-scoped diagnostics, consent or approval where appropriate, time-bound elevation, redaction, activity capture, and post-access review.

## Tenant Exit

Concern: a tenant must be able to leave with its data and receive evidence of closure.

Response: governed export, integrity validation, revocation, retention and legal-hold evaluation, derived-data cleanup, erasure, and completion evidence.

---

# Architectural Goals

## Isolation

Prevent unauthorized cross-tenant disclosure, modification, execution, inference, and resource interference.

## Consistency

Apply the same tenant semantics across synchronous requests, asynchronous work, storage, analytics, AI, integration, and operations.

## Scalability

Support growth in tenants, properties, users, data, workloads, integrations, and regions without tenant-specific product forks.

## Flexibility

Allow isolation, placement, capacity, and service models to vary according to approved tenant needs.

## Operability

Provide tenant-aware health, incident, change, capacity, continuity, and support capabilities.

## Accountability

Make tenant lifecycle, access, configuration, usage, migration, and administrative activity attributable and reviewable.

## Portability

Enable movement between approved isolation models and providers while keeping tenant identity and business semantics stable.

---

# Non-Goals

The target architecture does not seek to:

* Eliminate all shared infrastructure
* Require dedicated infrastructure for every tenant
* Give tenants direct access to platform internals
* Allow unrestricted tenant-defined code
* Guarantee identical service levels for all tiers
* Centralize all tenant data in one service
* Use tenant identity as a substitute for user authorization
* Provide anonymous administrative access
* Hide tenancy from domain services that own tenant resources
* Promise instantaneous migration or deletion where legal and technical dependencies exist

---

# Foundational Invariants

The following invariants apply across XeniosAI:

1. Every tenant has a stable, globally unique internal identifier.
2. Display names, domains, brands, and external account numbers are mutable aliases, not authoritative identity.
3. Every property is associated with an authoritative tenant relationship.
4. Every tenant-scoped operation carries validated tenant context.
5. Every property-scoped operation validates both tenant and property.
6. Every provider validates ownership before accessing a protected resource.
7. Missing, ambiguous, or conflicting tenant context fails closed.
8. Tenant context cannot be elevated through delegation, retries, or asynchronous processing.
9. Tenant-owned data remains identifiable through its full lifecycle.
10. Tenant policy cannot weaken mandatory platform controls.
11. Cross-tenant capabilities are segregated from ordinary tenant capabilities.
12. Platform access to tenant resources is least privilege and attributable.
13. Shared resource use is limited, measurable, and fairly scheduled.
14. Tenant retirement addresses authoritative and derived data.
15. Tenant isolation is continuously tested and evidenced.

---

# Tenant Hierarchy Overview

The default structural model contains three primary levels.

## Platform

The platform owns common capabilities, global policy floors, approved isolation patterns, shared operational controls, and platform-wide evidence.

## Tenant

The tenant owns its properties, memberships, tenant-level configuration, data, integrations, knowledge, memory policy, entitlements, and service relationship.

## Property

The property is a subordinate operational boundary with local users, resources, settings, knowledge, integrations, and workflows.

Some capabilities are tenant wide; others require property scope. An operation must state which model it uses.

Organizational groups, brands, regions, departments, and business units may support administration or reporting, but they must not create an implicit path around tenant or property authorization.

---

# Context Model Overview

Tenant context is a verified security and routing construct, not merely a string field.

A context may include:

* Tenant identifier
* Property identifier or approved property set
* Actor identifier and actor type
* Membership or workload binding
* Roles and delegated authority
* Requested purpose
* Entitlements and constraints
* Tenant lifecycle state
* Isolation and residency references
* Policy decision references
* Issuance, expiry, and correlation metadata

Only attributes required by the receiver should be propagated. Sensitive membership or commercial detail should not be copied indiscriminately.

Context integrity must be protected. Services must distinguish trusted platform assertions from untrusted caller input.

---

# Multi-Tenancy Capability Map

## Strategy and Governance

Defines principles, patterns, risk appetite, ownership, decision rights, control objectives, and approved exceptions.

## Tenant Registry

Maintains authoritative tenant identity, lifecycle, hierarchy, service tier, isolation profile, residency, and routing metadata.

## Lifecycle Management

Coordinates request, assessment, approval, provisioning, validation, activation, restriction, migration, offboarding, and retirement.

## Membership and Delegation

Manages tenant relationships, property scope, roles, federation, invitations, administrative delegation, and revocation.

## Context and Policy

Establishes tenant context and enables services to evaluate ownership, purpose, role, entitlement, and conditions.

## Isolation and Placement

Selects and enforces logical, partitioned, cryptographic, compute, storage, network, backup, and operational boundaries.

## Configuration and Entitlement

Manages tenant and property behavior, branding, locale, policies, features, service tiers, limits, and controlled override.

## Resource Governance

Measures demand, protects capacity, schedules fairly, applies quotas, and contains noisy neighbors.

## Metering and Commercial Attribution

Produces governed usage records and reconciles them with entitlements and commercial systems.

## Tenant-Aware Operations

Provides health, observability, support, incident, change, continuity, migration, and service-level capabilities by authorized scope.

## Assurance

Tests isolation, collects evidence, reports control performance, manages exceptions, and drives remediation.

---

# Control Plane and Data Plane

Multi-tenancy spans two related planes.

## Tenant Control Plane

The control plane manages:

* Tenant registry and hierarchy
* Lifecycle commands
* Isolation and placement profiles
* Membership and delegation
* Configuration and entitlements
* Quotas and service tiers
* Residency and retention policy
* Provisioning and migration coordination
* Administrative evidence

Control-plane changes are authorized, versioned, observable, and reconciled across affected services.

## Tenant Data Plane

The data plane executes:

* Tenant and property requests
* Domain commands and queries
* Events and background work
* Workflows and agent executions
* Retrieval and memory operations
* Integration exchanges
* Tenant-bound storage and computation

The data plane consumes approved control-plane state but must remain safe when configuration is stale, unavailable, or conflicting. High-risk ambiguity fails closed.

---

# Isolation Dimensions

Isolation is composed across several dimensions.

| Dimension | Examples of controls |
|---|---|
| Identity | Tenant memberships, workload bindings, federation boundaries |
| Authorization | Resource ownership, roles, attributes, purpose, policy |
| Data | Tenant keys, partitions, schemas, stores, row or object controls |
| Cryptography | Tenant-derived keys, separate keys, rotation, revocation |
| Compute | Fair scheduling, pools, namespaces, cells, dedicated runtime |
| Network | Service identity, segmentation, tenant-specific endpoints where required |
| Messaging | Tenant envelopes, topics, queues, routing, consumer validation |
| Knowledge and memory | Source ownership, index filters, retrieval policy, deletion |
| Operations | Scoped diagnostics, privileged access, evidence, tenant-safe telemetry |
| Recovery | Backup boundaries, restore selection, consistency, validation |

No single dimension is sufficient by itself. The isolation profile combines controls appropriate to the tenant and workload.

---

# Reference Isolation Posture

The default posture is shared platform capability with strong logical isolation and automated controls.

Partitioned or dedicated isolation is selected when justified by:

* Data classification
* Regulatory or sovereignty obligations
* Contractual commitment
* Tenant scale or workload shape
* Performance predictability
* Blast-radius reduction
* Recovery objectives
* Integration constraints
* Risk acceptance

Selection must be recorded in the tenant profile and supported by an operable lifecycle. A bespoke topology without automated provisioning, monitoring, patching, recovery, or exit is not an approved isolation pattern.

---

# Tenant Lifecycle Overview

## Request and Assessment

Capture business ownership, properties, regions, identity model, data classification, integrations, service expectations, and commercial references.

## Approval and Provisioning

Approve the tenant profile and create identifiers, control-plane records, access relationships, resources, policies, telemetry, and evidence.

## Validation and Activation

Verify isolation, identity, configuration, data paths, quotas, monitoring, backup, support readiness, and integration behavior before enabling production use.

## Active Operation

Manage membership, properties, configuration, capacity, service, incidents, changes, usage, and assurance.

## Restriction or Suspension

Apply an explicit, reasoned operating state with defined permitted actions. Preserve administrative recovery, data protection, and evidence.

## Migration

Move placement or isolation through planned copy, synchronization, cutover, validation, rollback, reconciliation, and source retirement.

## Offboarding and Retirement

Revoke access, stop workloads, disconnect integrations, provide authorized export, enforce retention or legal hold, erase eligible data and derivatives, reconcile usage, and issue closure evidence.

---

# Tenant-Aware Request Overview

A tenant-scoped request follows this logical path:

1. Authenticate the actor or workload.
2. Resolve the requested tenant through an authoritative relationship.
3. Validate tenant lifecycle and membership.
4. Resolve property scope when applicable.
5. Evaluate authorization, purpose, entitlement, and policy.
6. Bind integrity-protected context to the request.
7. Route to an approved placement.
8. Revalidate ownership at the provider boundary.
9. Execute only within tenant-bounded data and resources.
10. Emit tenant-safe response, telemetry, events, and evidence.

Async continuations repeat the validation appropriate to their trust boundary. A previously valid context is not assumed to remain valid indefinitely.

---

# Configuration Hierarchy Overview

Configuration can be composed from:

1. Mandatory platform controls
2. Platform defaults
3. Service-tier entitlements
4. Tenant configuration
5. Property configuration
6. Purpose- or workflow-specific configuration
7. Request-level choices explicitly allowed by policy

Lower levels may override only fields declared overridable. Mandatory security, privacy, compliance, safety, and isolation controls are not tenant-overridable.

Every effective configuration should be explainable through source, version, scope, and precedence.

---

# Resource and Service Overview

Shared capacity requires tenant-aware admission, scheduling, measurement, and degradation.

Important resource families include:

* API requests and concurrency
* Workflow executions and waiting tasks
* Agent runs, tool calls, and model consumption
* Messages, events, and integration deliveries
* Transactional, object, search, and memory storage
* Data movement and export
* Batch and analytical processing
* Support and operational activity

Service tiers may alter limits, priorities, availability targets, isolation options, support, and recovery objectives. They do not alter the platform's mandatory tenant-isolation obligations.

---

# Operating Model Overview

Multi-tenancy uses federated accountability.

Platform teams provide common tenant primitives, enforcement libraries, provisioning, placement, telemetry, quota, and evidence capabilities.

Domain teams retain responsibility for validating tenant ownership and preserving isolation inside their services.

Security, privacy, risk, and architecture teams define controls and assess patterns.

Tenant operations coordinates lifecycle and service relationships.

Tenant administrators manage delegated capabilities within platform guardrails.

No central component removes provider accountability. Defense in depth is required because gateways, context services, and policy engines can fail or be misused.

---

# Target-State Characteristics

In the target state:

* Tenant and property identities are authoritative and discoverable.
* Tenant context is explicit, integrity protected, and consistently propagated.
* Service interfaces declare whether they are platform-, tenant-, or property-scoped.
* Provider services validate ownership at every protected boundary.
* Tenant lifecycle changes are automated, idempotent, and reconciled.
* Isolation profiles are reusable, tested, and migratable.
* Configuration uses governed schemas and transparent precedence.
* Entitlements, quotas, metering, and billing remain distinct but reconcilable.
* Workflows, agents, knowledge, memory, and integrations preserve tenant context.
* Capacity controls prevent one tenant from dominating shared resources.
* Operators use scoped, time-bound, evidence-producing access.
* Tenant-specific recovery can be performed without harming another tenant.
* Exit handles export, retention, legal hold, erasure, and derivative cleanup.
* Isolation controls are continuously tested in delivery and production assurance.

---

# Transition from Current to Target State

Where existing capabilities do not yet meet the target state, transition should prioritize:

1. Establish authoritative tenant and property identifiers.
2. Inventory tenant-scoped resources and flows.
3. Eliminate implicit tenant defaults.
4. Standardize context establishment and propagation.
5. Add provider-side ownership validation.
6. Correct caches, events, files, indexes, knowledge, and memory boundaries.
7. Introduce lifecycle and provisioning orchestration.
8. Establish isolation profiles and placement inventory.
9. Add tenant-aware observability, quotas, and operational runbooks.
10. Automate negative isolation tests and assurance reporting.

High-risk cross-tenant exposure paths receive priority over convenience features or topology optimization.

---

# Architecture Risks

| Risk | Required response |
|---|---|
| Tenant spoofing | Trusted context establishment and provider validation |
| Cross-tenant query | Ownership predicates, policy controls, negative tests, data-layer safeguards |
| Cache collision | Tenant-bound keys, namespace policy, invalidation tests |
| Message misrouting | Scoped envelopes, routing controls, consumer validation, quarantine |
| AI context leakage | Tenant-filtered retrieval, bounded memory, tool policy, evaluation |
| Privileged support misuse | Just-in-time access, purpose, evidence, review, revocation |
| Noisy neighbor | Quotas, fair scheduling, admission control, capacity isolation |
| Residency drift | Placement policy, inventory reconciliation, controlled replication |
| Incomplete deletion | Derivative inventory, deletion propagation, verification, exceptions |
| Configuration fork | Governed schemas, extension framework, compatibility policy |
| Migration inconsistency | Versioned plan, synchronization, cutover validation, rollback |
| Billing dispute | Immutable usage provenance, reconciliation, governed adjustments |

---

# Success Measures

Architecture success is measured through outcomes rather than document completion.

## Isolation Measures

* Cross-tenant negative tests pass for all critical interfaces and stores.
* No production operation executes with unresolved tenant scope where scope is required.
* Tenant ownership validation coverage is measured across providers.
* Tenant-isolation incidents and near misses are tracked and remediated.

## Lifecycle Measures

* Provisioning and offboarding completion are measurable and reconciled.
* Failed lifecycle steps are resumable or compensatable.
* Tenant inventory matches deployed and retained resources.
* Migration and recovery exercises meet approved objectives.

## Operational Measures

* Tenant impact can be identified during incidents.
* Privileged tenant access is time bounded and reviewable.
* Quota enforcement and noisy-neighbor signals are visible.
* Service-level measurements can be produced by authorized tenant scope.

## Governance Measures

* Isolation profiles have owners, versions, tests, and evidence.
* Exceptions have expiry, compensating controls, and remediation plans.
* Residency and retention obligations reconcile with actual placement.
* Tenant exit produces verifiable completion evidence.

## Developer Measures

* New services use approved tenant-context components.
* Tenant-aware contract and data tests run in delivery pipelines.
* Developers can create representative multi-tenant test environments.
* Violations are detected before production wherever practical.

---

# Architecture Deliverables

ARCH-018 produces:

* Multi-tenancy principles and invariants
* Tenant and property domain model
* Isolation profile taxonomy
* Tenant lifecycle and provisioning model
* Identity and delegated administration model
* Data isolation, residency, and portability model
* Configuration, entitlement, and customization model
* Tenant-aware runtime and integration model
* Resource governance, metering, and billing boundaries
* Operations, governance, and assurance model
* Evolution roadmap
* Five supporting Mermaid diagrams

---

# Dependencies

The overview relies particularly on:

* ARCH-006 for tenant and property domain consistency
* ARCH-007 for deployment and recovery topology
* ARCH-008 for identity, authorization, zero trust, and cryptography
* ARCH-010 for tenant-safe telemetry
* ARCH-011 for operational command and control
* ARCH-012 for risk, policy, audit, and evidence
* ARCH-013 for paved-road implementation controls
* ARCH-014 through ARCH-016 for agent, workflow, knowledge, and memory isolation
* ARCH-017 for tenant-aware API and SDK contracts

ARCH-019 must consume ARCH-018 when enabling tenant-specific plugins or extensions.

---

# Key Decisions

This overview establishes the following decisions:

* Multi-tenancy is a cross-platform architecture, not a storage-only pattern.
* Tenant and property context is explicit and fail-closed.
* Authenticated identity and tenant authority are separate decisions.
* Shared infrastructure is permitted only with effective tenant isolation.
* Multiple approved isolation profiles are supported.
* Tenant-specific behavior is configuration or extension driven, not fork driven.
* Provider services remain accountable for tenant ownership validation.
* AI, workflow, and asynchronous execution preserve and cannot expand tenant authority.
* Usage, quota, entitlement, and billing are related but distinct responsibilities.
* Tenant lifecycle and exit are first-class platform capabilities.
* Isolation assurance is continuous and evidence based.

---

# Summary

Multi-tenancy enables XeniosAI to operate one coherent platform for many independent hospitality businesses without collapsing their trust boundaries.

The architecture combines authoritative tenant identity, property hierarchy, explicit context, risk-based isolation, lifecycle automation, governed customization, tenant-aware runtime behavior, resource fairness, and auditable operations.

The remaining ARCH-018 documents refine this overview into the domain, lifecycle, access, data, runtime, commercial, operational, and evolutionary architecture required for implementation.
