# ARCH-019-02 — Extension Domain and Classification

**Architecture Domain:** Extensibility, Plugin, and Ecosystem Architecture

**Document ID:** ARCH-019-02

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines the canonical domain model for XeniosAI extensions, the extension and publisher classifications, the ownership of extension points, and the boundaries among packages, listings, installations, grants, executions, and data.

---

# Domain Principles

* Extension identity is stable across package versions.
* Package versions are immutable.
* Marketplace listings are separate from registry identity.
* Installations are tenant- or platform-scoped aggregates.
* Capability grants are separate from manifest requests.
* Executions are attributable to an installation and package version.
* Extension-point owners retain domain authority.
* Risk classification changes controls, not business ownership.
* Relationships do not grant implicit access.
* Historical lifecycle and ownership are preserved.

---

# Core Aggregates

## Extension Aggregate

Represents stable extension identity, publisher ownership, category, current status, and references to package versions.

It does not contain tenant installation configuration or runtime credentials.

## Package Version Aggregate

Represents one immutable distributable artifact, manifest, digest, provenance, dependencies, compatibility, review state, and advisory status.

## Installation Aggregate

Represents a tenant-, property-, environment-, or platform-scoped decision to make a selected package version available with approved configuration, entitlements, grants, resources, and lifecycle.

## Publisher Aggregate

Represents the accountable organization or individual, verified identities, signing authorities, support obligations, eligibility, and lifecycle.

## Extension Point Aggregate

Represents an owned, versioned platform contract through which extensions contribute bounded behavior.

---

# Supporting Entities

## Listing

Marketplace presentation of an extension, including descriptions, media, pricing references, support, reviews, categories, and eligibility.

## Capability Request

A manifest declaration describing access the package may need.

## Capability Grant

The approved subset of capability bound to an installation and current policy.

## Configuration Version

An immutable tenant- or installation-scoped settings version without secret values.

## Execution

One invocation, session, job, subscription delivery, or hosted runtime instance.

## Advisory

A security, compatibility, operational, legal, or support notice affecting an extension, package version, dependency, or publisher.

## Certification

A time- and version-specific assurance outcome for a defined control profile.

---

# Identity Rules

Extension, package, publisher, installation, grant, execution, and listing identifiers are globally unique in their namespaces and never recycled.

Names, slugs, domains, marketplace URLs, product codes, and external package coordinates are mutable aliases.

An extension cannot change publisher ownership through a metadata edit. Transfer requires verified parties, rights review, signing transition, tenant notification, and preserved history.

---

# Package Coordinates

A package coordinate resolves:

* Extension identity
* Package version
* Registry
* Immutable digest
* Manifest schema version
* Publisher identity

Version ranges may support dependency resolution, but an installation locks to an exact resolved version and digest.

---

# Extension Classification by Contribution

| Class | Contribution | Principal concerns |
|---|---|---|
| Integration | External system connection | Credentials, network, data transfer, retries |
| Event | Event consumer or publisher | Scope, ordering, replay, idempotency |
| Workflow | Definition, activity, form, or connector | Determinism, retries, compensation, versioning |
| AI tool | Agent- or orchestrator-callable capability | Authority, schemas, side effects, cost, safety |
| Agent | Governed agent definition or specialist behavior | Identity, delegation, supervision, evaluation |
| Knowledge | Source connector or processor | Rights, provenance, scope, freshness, deletion |
| Experience | UI component or presentation contribution | Origin, interaction, accessibility, deception |
| Data | Import, export, transform, report, or analysis | Ownership, quality, retention, portability |
| Device | Property or edge device adapter | Safety, identity, connectivity, offline behavior |
| Protocol | MCP or other interoperability provider | Discovery, identity, mediation, trust |

One extension may use multiple classes. Review applies the union of relevant risks.

---

# Classification by Publisher

## First Party

Owned by a XeniosAI platform or product team. First-party status does not waive package, capability, isolation, compatibility, or operational controls.

## Tenant Developed

Owned by a tenant and normally eligible only for that tenant unless it completes broader publishing requirements.

## Approved Partner

Owned by a contracted ecosystem partner with defined support and security obligations.

## Commercial Third Party

Distributed by a verified publisher through approved commercial and support terms.

## Community

Contributed under approved rights and governance, with risk-appropriate restrictions and no implied enterprise support.

## Experimental

Limited to non-production or explicitly isolated pilot use with expiry and evaluation.

---

# Risk Classification

Risk is assessed from capabilities and operation, not publisher label alone.

## Low

Read-only, low-classification, bounded presentation or transformation with no external transfer and small resource demand.

## Moderate

Tenant data access, event processing, background work, approved external integration, or reversible business actions.

## High

Sensitive data, material writes, financial or guest-impacting actions, secrets, persistent agents, large exports, devices, or significant external processing.

## Restricted

Platform-wide cross-tenant access, core identity or security control, unrestricted network, key custody, destructive bulk authority, or other capabilities reserved to governed platform components.

Risk class determines review, isolation, approval, monitoring, support, update, and recertification requirements.

---

# Extension-Point Categories

Extension points may be:

* Request-response operations
* Commands or actions
* Queries
* Events and subscriptions
* Workflow definitions or activities
* Agent tools or skills
* Knowledge ingestion or processing stages
* UI slots and actions
* Scheduled jobs
* Import and export handlers
* Notification channels
* Device commands or telemetry

Each extension point declares whether contributions are singular, ordered, fan-out, composable, replaceable, or advisory.

---

# Extension-Point Ownership

The owning domain or platform team defines:

* Business semantics
* Eligible extension types
* Contract and schema
* Authority and data requirements
* Ordering and transaction boundary
* Error, retry, and compensation behavior
* Resource and concurrency limits
* Observability and evidence
* Compatibility and deprecation
* Support and incident obligations

The framework provides common hosting and governance but does not take ownership of domain meaning.

---

# Composition Model

When multiple extensions contribute to one point, the owner declares composition rules.

Possible models include:

* Exactly one selected provider
* Ordered pipeline
* Parallel fan-out with independent results
* First successful provider
* Advisory aggregation
* Tenant-configured routing
* Policy-selected provider

Undefined ordering is prohibited where side effects or conflicting results are possible.

---

# Authority Boundary

An extension may propose, transform, recommend, or request actions. Authoritative state changes execute through the owning domain service or workflow.

The host and provider validate:

1. Extension and installation status
2. Package and execution identity
3. Tenant and property context
4. Granted capability
5. Acting user, service, workflow, or agent authority
6. Resource ownership
7. Purpose, entitlement, and policy
8. Current limits and lifecycle state

Possession of an extension point handle is not authorization.

---

# Installation Scope

An installation can be scoped to:

* One tenant
* Explicit properties inside a tenant
* A tenant organizational unit
* One environment
* A platform capability under restricted governance

Tenant-wide installation does not automatically expose all tenant data. Capability grants may still narrow by property, resource, purpose, and actor.

---

# Extension-Owned Data

Data created uniquely for an installation is owned within that tenant scope and classified by purpose.

It records:

* Tenant and installation ownership
* Schema and version
* Source and provenance
* Data classification
* Retention and disposition
* Portability
* Encryption and placement

Package publisher ownership does not grant access to tenant extension data unless a declared, authorized processor relationship exists.

---

# Shared Extension Assets

Packages, public documentation, common schemas, and approved static assets may be shared platform resources.

Tenant configuration, credentials, execution state, usage, logs, files, and business data remain isolated.

Promotion of tenant-developed content to shared catalog content requires rights, provenance, review, sanitization, and approval.

---

# Dependency Model

Dependencies may be:

* Platform capabilities
* Extension-point contract versions
* SDK runtime versions
* Package libraries
* Other extensions
* External services

Dependencies are declared and resolved before activation. Circular extension dependencies are prohibited unless an explicitly supported bounded model exists.

Installing one extension does not implicitly install or authorize another without visible dependency resolution and approval.

---

# Relationship Model

Relationships include:

* Publisher owns extension
* Extension has package versions
* Package implements extension points
* Listing presents extension
* Tenant installation selects package
* Installation receives grants
* Execution uses installation
* Advisory affects packages or extensions
* Certification evaluates a package against a profile

Each relationship is effective-dated and auditable where it can change.

---

# Domain Events

Reference events include:

* ExtensionRegistered
* PublisherVerified
* PackagePublished
* PackageCertificationChanged
* AdvisoryIssued
* PackageSuspended
* InstallationRequested
* InstallationApproved
* CapabilityGranted
* InstallationActivated
* InstallationUpdated
* InstallationRestricted
* InstallationUninstalled
* ExtensionRetired

Events contain minimal metadata and do not expose tenant configuration, secrets, or commercial data unnecessarily.

---

# Domain Invariants

* A package belongs to one extension identity.
* A package version and digest cannot be changed after publication.
* An installation resolves to an exact package digest.
* A tenant installation cannot reference another tenant's grants or configuration.
* A grant cannot exceed the package's declared compatible capabilities or platform policy.
* An execution cannot outlive permitted installation or grant state without approved completion semantics.
* A revoked package cannot start new executions.
* A listing does not determine runtime state.
* An extension cannot own authoritative domain data outside its declared bounded data.

---

# Service Boundaries

Logical services may include:

* Extension Registry Service
* Publisher Trust Service
* Marketplace Catalog Service
* Review and Certification Service
* Installation Service
* Capability Grant Service
* Extension Host Service
* Advisory and Revocation Service
* Extension Usage Service

Each service owns its data and communicates through APIs and events. No service reads another service's database.

---

# Failure Boundaries

Failure is contained by:

* Package version
* Installation
* Tenant
* Host pool or isolation class
* Extension point
* External destination

An extension failure must not corrupt registry, installation, grant, or authoritative domain state. Hosts use timeouts, cancellation, quotas, circuit breakers, quarantine, and compensation contracts.

---

# Governance Ownership

| Domain object | Accountable owner |
|---|---|
| Extension point | Owning domain or platform team |
| Extension identity | Publisher plus registry governance |
| Package version | Publisher |
| Listing | Marketplace operator and publisher |
| Installation | Tenant or platform installer authority |
| Capability grant | Platform policy owner and tenant approver |
| Runtime host | Platform engineering |
| Extension data | Tenant under declared processor responsibilities |
| Certification | Assurance authority |
| Advisory and revocation | Security, platform, and registry authority |

---

# Architecture Decisions

* Extension identity, package, listing, installation, grant, and execution are separate domain objects.
* Risk derives from capability and operation, not publisher category alone.
* Extension-point owners retain business semantics and compatibility responsibility.
* Installations lock to exact package versions and digests.
* Relationships never create implicit capability.
* Extension-owned data remains tenant scoped and lifecycle governed.
* Dependencies are declared and do not install silently.
* Platform-wide capabilities are restricted and separately governed.
* Domain events carry minimal sensitive metadata.

---

# Validation Criteria

This architecture is satisfied when:

* Every extension object has a stable identifier and accountable owner.
* Package and installation lifecycle can evolve independently.
* Every extension point has a domain owner and composition model.
* Risk classification is reproducible from declared and observed behavior.
* Tenant installations cannot share configuration, grants, storage, or execution state.
* Runtime execution traces to package digest, installation, tenant, and grant.
* Extension data participates in tenant export and disposition.
* Service boundaries preserve independent data ownership.

---

# Summary

The ARCH-019 domain model separates what an extension is, how it is packaged, how it is presented, where it is installed, what it may do, and how it executes.

This separation prevents marketplace, publisher, package, and installation states from becoming accidental authority. Owned extension points preserve domain integrity, while classifications and risk profiles apply the controls required for safe ecosystem participation.
