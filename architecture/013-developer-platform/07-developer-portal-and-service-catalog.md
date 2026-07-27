# ARCH-013 · Chapter 07 — Developer Portal and Service Catalog

**Document ID:** ARCH-013-07

**Title:** Developer Portal and Service Catalog

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-26

**Parent Document:** ARCH-013 — Developer Platform

---

# Purpose

This document defines the Developer Portal, Service Catalog, project discovery, documentation, search, and self-service discovery architecture of the XeniosAI Developer Platform.

The Developer Portal provides a coherent entry point into developer journeys. The Service Catalog provides an authoritative discovery view of operational services and their relationships.

Neither capability should become an ungoverned copy of every source system. The portal composes experiences, while the catalog connects authoritative metadata from accountable domain sources.

The architecture remains independent of specific portal products, catalog vendors, search technologies, documentation generators, source-control providers, and user-interface frameworks.

---

# Scope

This chapter defines:

* Portal principles, actors, channels, and information architecture
* Role-aware and context-aware developer experiences
* Task, request, project, service, build, quality, artifact, environment, delivery, governance, and operations views
* Self-service discovery and invocation
* Service Catalog purpose, model, records, relationships, lifecycle, and authority
* Project, paved-path, template, interface, dependency, and documentation catalogs
* Catalog registration, ingestion, enrichment, reconciliation, and freshness
* Ownership discovery and orphan detection
* Documentation types, lifecycle, quality, versioning, and access
* Unified search and AI-assisted discovery
* Tenant-aware and property-aware visibility
* Human and AI-agent interaction
* Access control, privacy, audit, observability, resilience, and continuity
* Portal and catalog governance, adoption, measures, and evolution

Detailed security and governance integration is defined in ARCH-013-08. Platform operations and adoption are defined in ARCH-013-09.

---

# Objectives

The Developer Portal and Service Catalog should:

* Provide one coherent entry into platform journeys.
* Make architecture discoverable before implementation.
* Make service ownership and boundaries visible.
* Reduce duplicate capabilities.
* Expose approved paved paths and templates.
* Connect projects, source, builds, tests, artifacts, environments, releases, and operations.
* Present authoritative lifecycle and governance state.
* Enable governed self-service.
* Preserve source, version, freshness, and confidence.
* Support human contributors and authorized AI agents.
* Enforce access-aware discovery.
* Preserve tenant and property isolation.
* Make documentation relevant and maintainable.
* Provide contextual support and feedback.
* Operate reliably without becoming a central monolith.
* Support vendor-neutral contracts and replaceable implementations.

---

# Architectural Principles

## Portal Is an Experience, Not the Authority for Everything

The portal composes authoritative information and actions. It should not silently become the source of service, build, delivery, policy, or operational state.

## Catalog Is a Discovery Authority

The catalog is authoritative for discovery relationships and catalog governance while preserving the accountable source for each field.

## Source and Freshness Are Visible

Users should be able to understand where information originated, when it was last confirmed, and whether it is stale or conflicting.

## Access-Aware Discovery

Search, navigation, recommendations, relationships, and AI answers must respect the same access controls as source content.

## Architecture Is First-Class

Architecture modules, ADRs, dependency rules, and deviations should be visible in project and service journeys.

## Ownership Is Prominent

Every project, service, interface, paved path, template, and document should expose accountable ownership and support.

## Self-Service Uses Governed Contracts

The portal may invoke platform capabilities, but it must not create alternate policy, authority, or lifecycle behavior.

## Multiple Channels, Shared Concepts

Web interfaces, commands, APIs, conversational interfaces, IDE integrations, and AI agents should use consistent identities, metadata, permissions, and state.

## Documentation Is Part of the Product

Documentation has identity, ownership, version, freshness, access, lifecycle, and quality.

## AI Assistance Cites Sources

AI-assisted discovery must identify authoritative sources and distinguish retrieved facts from generated interpretation.

---

# Portal Architecture Model

```text
Human or Authorized AI Contributor

↓

Role-Aware Portal Experience

↓

Developer Control Plane and Domain Capabilities

↓

Authoritative Sources, Catalog, Search, and Documentation

↓

Operations, Governance, Evidence, Support, and Feedback
```

The portal may be implemented through multiple coordinated interfaces.

---

# Portal Actors

Portal actors include:

* Application developers
* Service developers
* Platform engineers
* AI and agent developers
* Workflow developers
* Integration developers
* Data engineers
* Architects
* Service owners
* Operations and reliability contributors
* Security, privacy, risk, and compliance contributors
* Quality engineers
* Tenant-solution developers
* Property-integration developers
* Technical writers
* Support contributors
* Reviewers and approvers
* Authorized AI implementation agents

Each actor may require different views, actions, evidence, and access.

---

# Portal Interaction Channels

The portal capability may be exposed through:

* Web interface
* Mobile or responsive interface where appropriate
* Command-line interface
* API
* Integrated development environment
* Conversational interface
* AI implementation agent
* Notifications
* Workflow tasks
* Embedded service views

Channels may optimize presentation but must preserve common identities, lifecycle state, authority, and evidence.

---

# Portal Context

Portal context may include:

* Actor identity and role
* Team
* Active task
* Project
* Service
* Repository
* Tenant
* Property
* Environment
* Architecture scope
* Lifecycle state
* Risk and policy context
* Active approvals
* Recent activity

Context must be explicit when it changes the scope of an action.

The portal must not infer broad cross-tenant authority from a convenient default.

---

# Portal Information Architecture

The portal should organize information around user outcomes rather than underlying products.

Primary information areas may include:

* Home and tasks
* Architecture and standards
* Paved paths and templates
* Projects
* Services
* Interfaces and dependencies
* Builds, tests, and quality
* Artifacts and releases
* Environments and configuration
* Delivery and change
* Operations and health
* Governance and evidence
* Documentation
* Platform status
* Support
* Feedback and roadmap

---

# Home Experience

The home experience should be role and context aware.

It may present:

* Assigned tasks
* Pending reviews and approvals
* Active projects
* Owned services
* Recent builds and deliveries
* Findings and exceptions
* Incidents and service health
* Expiring environments and access
* Deprecation notices
* Platform status
* Relevant documentation
* Support updates
* Recommended next actions

Recommendations must be explainable and access controlled.

---

# Task and Request Center

The portal should provide a coherent view of:

* Self-service requests
* Workflow tasks
* Reviews
* Approvals
* Exceptions
* Findings
* Support requests
* Environment requests
* Delivery requests
* Ownership transfers
* Deprecation and retirement tasks

Each item should show state, owner, due time, evidence, next action, and escalation.

---

# Architecture Experience

The portal should make available:

* Architecture reading order
* Architecture modules
* Relationships and dependencies
* ADRs
* Domain boundaries
* Layer rules
* Service rules
* Quality attributes
* Required controls
* Known deviations
* Missing references
* Review workflows
* Impact analysis

The architecture repository remains authoritative. Portal indexing and rendering must preserve source revision and status.

---

# Paved-Path Experience

The paved-path catalog should allow contributors to discover:

* Intended use
* Supported capability types
* Architecture alignment
* Eligibility
* Owner
* Current version
* Templates
* Required metadata
* Build and test behavior
* Security and governance defaults
* Environment and delivery behavior
* Observability
* Support
* Adoption
* Upgrade path
* Deprecation

The experience should explain which decisions are automated and which remain accountable human decisions.

---

# Template Experience

The template catalog should expose:

* Template identity
* Purpose
* Capability type
* Owner
* Version
* Architecture scope
* Included structures
* Required inputs
* Security and quality defaults
* Compatibility
* Generated decisions
* Upgrade and migration
* Support
* Deprecation

Templates should be previewable before resource creation where practical.

---

# Project Experience

A project page should connect:

* Project purpose
* Type
* Lifecycle state
* Owner and contributors
* Architecture and ADRs
* Paved path and templates
* Repositories
* Services and capabilities
* Changes
* Builds and tests
* Artifacts and releases
* Environments
* Deliveries
* Tenant and property scope
* Risk, controls, findings, and exceptions
* Evidence
* Support
* Closure

The project lifecycle authority remains the source for project identity and state.

---

# Service Experience

A service page should provide a decision-ready view of:

* Service identity
* Name and purpose
* Domain
* Type and criticality
* Lifecycle state
* Owners and support
* Architecture and ADRs
* Interfaces
* Dependencies and consumers
* Data ownership
* AI participation
* Tenant and property scope
* Repositories and components
* Builds, artifacts, and releases
* Environments
* Service commitments
* Health and business outcomes
* Incidents and problems
* Risk, controls, findings, and exceptions
* Documentation and runbooks
* Deprecation and retirement

Sensitive operational and security detail should be filtered by authorization.

---

# Build and Quality Experience

The portal should show:

* Build identity and status
* Source revision
* Artifact outputs
* Provenance and integrity
* Dependency inventory
* Test plans and results
* AI evaluations
* Findings
* Quality profile
* Gate outcomes
* Exceptions
* Evidence freshness
* Required next actions

The portal should distinguish product failure, test failure, platform failure, and missing evidence.

---

# Artifact and Release Experience

The portal should expose:

* Artifact identity
* Type and version
* Source and build
* Provenance
* Integrity
* Dependencies
* Security and quality state
* Promotion state
* Releases
* Environments and deliveries
* Retention
* Deprecation and revocation

Mutable labels should not conceal immutable artifact identity.

---

# Environment Experience

The portal should expose:

* Environment identity
* Purpose and type
* Owner
* Lifecycle and health
* Services and versions
* Tenant and property scope
* Configuration profile
* Secret-reference status without values
* Resource and cost profile
* Access
* Drift
* Expiration
* Cleanup
* Support

Environment actions should use the same control-plane contracts available to other channels.

---

# Delivery Experience

The portal should provide:

* Release and business intent
* Target environment
* Tenant and property scope
* Change classification
* Authorization
* Delivery strategy
* Current state
* Verification
* Stop conditions
* Rollback, roll-forward, or compensation
* Communication
* Evidence

Partial delivery must be presented accurately by target and scope.

---

# Operations Experience

Authorized users should be able to discover:

* Service health
* Business signals
* Service commitments
* Dependencies
* Releases and changes
* Incidents and problems
* Capacity
* Cost
* Runbooks
* Recovery and continuity
* Support status
* Tenant and property impact

The portal should link to authoritative observability and operations sources rather than copy unrestricted telemetry.

---

# Governance Experience

The portal should present:

* Applicable policies
* Controls
* Risk
* Findings
* Exceptions
* Approvals
* Evidence
* Assurance status
* Remediation
* Ownership
* Expiration

Policy results should explain why a requirement applies and what action is available.

---

# Self-Service Architecture

The portal should discover and invoke governed self-service capabilities.

Illustrative actions include:

* Create a project
* Register a service
* Select a paved path
* Apply a template
* Request an environment
* Request access
* Run a build or test
* Promote an artifact
* Request delivery
* Transfer ownership
* Request an exception
* Request support
* Deprecate or retire a capability

The portal must not bypass the control plane, authority, policy, lifecycle, or evidence requirements.

---

# Self-Service Action Contract

Each action should expose:

* Purpose
* Eligibility
* Required inputs
* Required authority
* Expected time
* Cost where relevant
* Policy and approval
* Execution state
* Output
* Evidence
* Expiration or cleanup
* Failure and recovery
* Support

Long-running actions should be asynchronous, resumable, and observable.

---

# Service Catalog Purpose

The Service Catalog provides an authoritative discovery view of operational services and their relationships.

It enables contributors to answer:

* What capability exists?
* What business or platform purpose does it serve?
* Who owns and supports it?
* Which domain owns it?
* Which interfaces does it expose?
* Which services does it depend on?
* Which consumers depend on it?
* Which data does it own?
* How does AI participate?
* Which tenants and properties does it serve?
* Where is it deployed?
* What is its health and lifecycle?
* Which architecture, controls, and documentation apply?

---

# Catalog Model

The broader developer catalog may include records for:

* Services
* Applications
* Projects
* Repositories
* Components
* APIs
* Events
* Messages
* Workflows
* AI agents
* Tools
* Integrations
* Data products
* Artifacts
* Environments
* Paved paths
* Templates
* Documentation
* Owners and teams

Different record types should remain distinct even when they share metadata.

---

# Service Catalog Record

A service catalog record should include:

* Service identifier
* Name
* Purpose
* Domain
* Type
* Criticality
* Lifecycle state
* Accountable owner
* Technical owner
* Operational owner
* Support
* Architecture and ADRs
* Repositories and components
* Interfaces
* Dependencies and consumers
* Data ownership
* AI participation
* Tenant and property scope
* Security and privacy classification
* Risk, controls, findings, and exceptions
* Service commitments
* Environments
* Artifacts and releases
* Health
* Incidents and problems
* Capacity and cost
* Documentation and runbooks
* Deprecation and retirement
* Source and freshness

---

# Catalog Relationships

Catalog relationships may include:

* Project creates or changes service
* Repository contains component
* Component implements service
* Service exposes interface
* Service consumes interface
* Service depends on service
* Service owns data
* Service uses AI agent
* AI agent uses tool
* Workflow invokes service
* Integration connects external system
* Artifact realizes component
* Release includes artifact
* Environment hosts release
* Tenant uses service
* Property uses service
* Document describes capability
* Policy governs capability

Relationships should be typed, directional, owned, and version aware.

---

# Catalog Authority

The catalog should preserve authoritative sources.

Illustrative authority assignments include:

* Service identity and lifecycle — service lifecycle capability
* Project identity and lifecycle — project lifecycle capability
* Architecture — architecture repository
* ADRs — ADR repository
* Source revision — source system
* Artifact — artifact capability
* Environment — environment capability
* Delivery — delivery capability
* Health — observability authority
* Policy decision — policy capability
* Incident — operations capability
* Documentation content — documentation source

The catalog may be authoritative for curated relationships, catalog classifications, and discovery metadata assigned to it.

---

# Catalog Registration

Registration should:

* Validate identity.
* Validate ownership.
* Resolve record type.
* Resolve architecture and domain.
* Establish source mappings.
* Establish required metadata.
* Establish relationships.
* Apply access controls.
* Establish freshness expectations.
* Record evidence.

Production services must be registered before or as part of operational readiness.

---

# Automated Discovery

Automated discovery may identify:

* Repositories
* Components
* Interfaces
* Dependencies
* Artifacts
* Environments
* Deployments
* Observability resources
* Documentation

Discovered facts should identify source, confidence, time, and reconciliation state.

Automation should not silently assign business purpose, accountable ownership, data ownership, or domain boundaries.

---

# Catalog Enrichment

Enrichment may add:

* Derived relationships
* Health summaries
* Adoption
* Dependency risk
* Documentation suggestions
* Quality summaries
* Operational-readiness summaries
* Search terms
* Recommendations

Derived information must remain distinguishable from accountable declarations and authoritative facts.

---

# Catalog Reconciliation

Reconciliation should identify:

* Missing records
* Conflicting identifiers
* Stale ownership
* Unmapped repositories
* Unregistered production services
* Missing interfaces
* Undeclared dependencies
* Orphaned environments
* Unlinked artifacts
* Stale documents
* Lifecycle conflicts
* Tenant or property inconsistencies

Findings should be routed to accountable owners with evidence and remediation.

---

# Metadata Freshness

Every material catalog field should define:

* Source
* Owner
* Last observed time
* Last confirmed time
* Expected freshness
* Validation
* Staleness behavior
* History

Stale information should be visibly marked and should not be presented as current fact.

---

# Catalog Quality

Catalog quality should evaluate:

* Identity completeness
* Ownership completeness
* Purpose completeness
* Architecture linkage
* Relationship completeness
* Source validity
* Freshness
* Lifecycle consistency
* Tenant and property consistency
* Documentation availability
* Support availability

Quality scores may guide remediation but must not conceal which fields are missing or stale.

---

# Ownership Discovery

The portal and catalog should make it easy to find:

* Accountable owner
* Technical owner
* Operational owner
* Data owner
* Security and privacy responsibility
* Support team
* Escalation
* Ownership history

Generic placeholders should not satisfy accountable ownership.

---

# Orphan Detection

The platform should detect:

* Services without owners
* Projects without owners
* Repositories without relationships
* Production environments without owners
* Interfaces without providers
* Dependencies without ownership
* Documents without owners
* Paved paths without owners
* Templates without owners
* AI agents without sponsors
* Deprecated capabilities without migration owners

Orphans should trigger remediation, restriction, escalation, or retirement according to risk.

---

# Project Catalog

The project catalog should expose:

* Project identity
* Purpose
* Type
* Lifecycle
* Owner
* Architecture
* Paved path
* Repositories
* Services and capabilities
* Tenant and property scope
* Risk and controls
* Current outcomes
* Closure

Closed projects should remain discoverable according to retention and access policy.

---

# Interface Catalog

The interface catalog should support:

* APIs
* Commands
* Queries
* Events
* Messages
* Files
* Workflows
* Tools
* Administrative interfaces

Each record should identify provider, consumers, contract version, authentication, tenant/property behavior, data classification, service commitments, error behavior, compatibility, and deprecation.

---

# Dependency View

Dependency views should show:

* Provider and consumer
* Contract
* Direction
* Criticality
* Version
* Service commitments
* Failure behavior
* Data exchanged
* Tenant and property scope
* Owner
* Freshness

Views may be graphical or textual but must remain accessible and filterable.

---

# Documentation Architecture

Developer documentation may include:

* Architecture
* ADRs
* Getting started
* Paved paths
* Templates
* Standards
* Service contracts
* Interface references
* Examples
* Procedures
* Troubleshooting
* Runbooks
* Recovery procedures
* Security guidance
* Migration guides
* Change history
* Deprecation
* Retirement

---

# Documentation Record

A documentation record should include:

* Document identifier
* Title
* Type
* Purpose
* Owner
* Source
* Version
* Status
* Applicable projects, services, interfaces, or versions
* Architecture relationship
* Access classification
* Last review
* Expected freshness
* Deprecation
* Archival

The content source remains authoritative.

---

# Documentation Lifecycle

The documentation lifecycle may include:

* Proposed
* Draft
* Review
* Approved
* Published
* Updating
* Deprecated
* Archived

Status describes documentation maturity and should remain separate from the implementability rules defined by XeniosAI architecture.

---

# Documentation Quality

Documentation quality should evaluate:

* Correctness
* Completeness
* Applicability
* Discoverability
* Ownership
* Freshness
* Accessibility
* Examples
* Version alignment
* Link integrity
* Security and privacy
* Actionability

Documentation defects should be managed as platform-product quality findings.

---

# Documentation as Part of Change

Change workflows should identify documentation affected by:

* Architecture changes
* Interface changes
* Configuration changes
* Paved-path changes
* Template changes
* Operational changes
* Security changes
* Deprecation
* Migration
* Retirement

Required documentation updates should be validated before completion where practical.

---

# Documentation Testing

Documentation may be tested for:

* Link validity
* Structure
* Required sections
* Code or command examples
* Contract references
* Version references
* Accessibility
* Sensitive information
* Ownership metadata
* Freshness

Automated testing supplements human review of meaning and usability.

---

# Unified Search

Unified search should discover authorized content across:

* Architecture
* ADRs
* Projects
* Services
* Repositories
* Components
* Interfaces
* Dependencies
* Paved paths
* Templates
* Documentation
* Builds and artifacts
* Environments and releases
* Incidents and runbooks
* Policies, controls, findings, and evidence
* Support knowledge

Search should preserve type, source, version, owner, access, freshness, and lifecycle.

---

# Search Indexing

Indexing should:

* Use stable identifiers.
* Preserve source references.
* Preserve access-control attributes.
* Preserve tenant and property scope.
* Preserve version and lifecycle.
* Track indexing time.
* Support deletion and revocation.
* Detect stale or failed ingestion.
* Avoid indexing secret values.

Search index availability must not redefine source authority.

---

# Search Ranking

Ranking may consider:

* Query relevance
* Authoritative status
* Architecture priority
* Lifecycle state
* Freshness
* Ownership completeness
* User context
* Project and service relationships
* Tenant and property scope
* Popularity

Popularity must not outrank authoritative and applicable content by default.

---

# Access-Aware Search

Search must enforce access:

* Before returning results
* Before returning snippets
* Before returning relationships
* Before returning counts that reveal sensitive existence
* Before AI-assisted synthesis

The index should not become a side channel for restricted service, tenant, property, source, security, or evidence information.

---

# Semantic Search

Semantic search may improve discovery across terminology and natural-language intent.

It should:

* Preserve source citations.
* Respect access.
* Preserve tenant and property boundaries.
* Distinguish exact and inferred matches.
* Support deterministic filters.
* Expose freshness.
* Allow correction and feedback.

Semantic similarity must not merge distinct service or domain ownership.

---

# AI-Assisted Discovery

AI assistance may:

* Interpret a discovery question.
* Suggest relevant architecture.
* Summarize service relationships.
* Explain a paved path.
* Identify likely owners.
* Suggest documentation.
* Prepare a self-service request.
* Highlight missing metadata.

AI assistance must:

* Cite authoritative sources.
* Distinguish facts from inference.
* Respect access controls.
* Preserve tenant and property scope.
* Avoid inventing ownership or architecture.
* Ask when context is ambiguous.
* Avoid executing material actions without authority.

---

# AI Answer Provenance

An AI-assisted answer should identify, as appropriate:

* Sources
* Source versions
* Retrieval time
* Access context
* Tenant and property context
* Inferences
* Uncertainty
* Missing or conflicting information
* Suggested next action

Generated guidance must not be written back as authoritative metadata without review.

---

# Tenant-Aware Portal

Tenant-aware views should:

* Require authorized tenant context.
* Filter services, data, configuration, integrations, releases, health, and evidence.
* Prevent cross-tenant search leakage.
* Make cross-tenant authority explicit.
* Support tenant-specific support and documentation.
* Preserve shared platform context where authorized.

One tenant should not discover another tenant’s restricted metadata through names, counts, search, relationships, or AI answers.

---

# Property-Aware Portal

Property-aware views should expose authorized:

* Property configuration
* Services and versions
* Local integrations
* Connectivity
* Devices
* Operational procedures
* Releases and changes
* Health
* Incidents
* Runbooks
* Support
* Manual fallback
* Evidence

The portal should distinguish property-specific behavior from shared service behavior.

---

# Human Contributor Experience

Human contributors should be able to:

* Discover relevant architecture.
* Find projects and services.
* Find owners and support.
* Understand interfaces and dependencies.
* Select paved paths and templates.
* Perform authorized self-service.
* Review evidence.
* Track tasks and requests.
* Observe operational outcomes.
* Provide feedback.

The experience should be accessible and should support different levels of platform knowledge.

---

# AI Implementation-Agent Experience

An authorized AI implementation agent should access portal and catalog capabilities through explicit machine-readable contracts.

It may:

* Resolve architecture and ADRs.
* Resolve project and service identity.
* Resolve ownership and scope.
* Discover interfaces and dependencies.
* Discover paved paths and templates.
* Retrieve documentation with sources.
* Submit authorized self-service requests.
* Report missing or conflicting metadata.

The agent must not infer authority from discoverability or credentials.

---

# Portal API

Portal APIs should expose composed views and journey actions through explicit, versioned contracts.

They should define:

* Identity and authorization
* Input and output schemas
* Source and freshness
* Pagination and filtering
* Tenant and property scope
* Error behavior
* Rate and capacity behavior
* Audit
* Versioning
* Deprecation

APIs must not expose fields the interactive portal would hide from the same actor.

---

# Catalog Events

Illustrative events include:

* CatalogRecordRegistered
* CatalogRecordUpdated
* CatalogRelationshipChanged
* CatalogRecordBecameStale
* OwnershipMissing
* OwnershipTransferred
* ServiceDeprecated
* ServiceRetired
* DocumentationPublished
* DocumentationBecameStale
* IndexingFailed

Events should identify source, subject, version, actor, time, tenant/property context, correlation, and classification.

---

# Notifications

Notifications may cover:

* Assigned tasks
* Review and approval
* Finding and exception
* Ownership issue
* Stale metadata
* Deprecation
* Environment expiration
* Delivery state
* Incident impact
* Platform status
* Support update

Users should be able to control nonmandatory notifications without suppressing critical obligations.

---

# Platform Status

The portal should communicate:

* Capability availability
* Degraded behavior
* Active incidents
* Planned maintenance
* Affected journeys
* Workarounds
* Recovery progress
* Support

Status information should be authoritative, timely, and safe for its audience.

---

# Support Experience

Contextual support should carry, subject to authorization:

* Actor
* Journey
* Project or service
* Request or execution identity
* Environment
* Tenant and property context
* Error classification
* Diagnostics
* Actions attempted
* Impact and urgency

The portal should not require users to manually reconstruct context already known to the platform.

---

# Feedback Experience

Feedback should support:

* Portal usability
* Search relevance
* Documentation usefulness
* Paved-path quality
* Catalog accuracy
* Self-service outcomes
* Support quality
* Missing capabilities

Feedback should be attributable where necessary, privacy conscious, and connected to platform improvement.

---

# Accessibility

Portal experiences should support:

* Keyboard navigation
* Screen readers
* Clear focus
* Sufficient contrast
* Non-color status indicators
* Resizable content
* Understandable language
* Alternative representations for graphs
* Time-zone-aware collaboration
* Low-bandwidth use where practical

Graphical catalog views must have accessible textual or tabular alternatives.

---

# Security

Portal and catalog security should provide:

* Enterprise identity
* Strong authentication where required
* Least privilege
* Zero-trust evaluation
* Access-aware composition
* Tenant and property isolation
* Sensitive-field filtering
* Secret exclusion
* Input validation
* Session security
* Audit
* Abuse prevention
* Incident response

Discovery convenience must not weaken source-system controls.

---

# Privacy

The portal and catalog should minimize:

* Personal contributor data
* Guest data
* Tenant-sensitive data
* Prompt and conversation content
* Security findings
* Operational secrets

Usage analytics should improve the product without becoming inappropriate individual surveillance.

---

# Audit

Audit should cover:

* Authentication
* Sensitive searches
* Record changes
* Ownership changes
* Self-service actions
* Approvals and exceptions
* Restricted document access
* AI-assisted actions
* Administrative changes

Audit records should be integrity protected, access controlled, and retained according to policy.

---

# Portal and Catalog Availability

Service commitments should define:

* Portal availability
* Search availability
* Catalog availability
* Self-service availability
* Data freshness
* Indexing latency
* Documentation availability
* Support response
* Recovery

Critical recovery and delivery controls should not depend solely on the interactive portal.

---

# Degraded Mode

During degradation, the platform should:

* Preserve read access to critical cached information where safe.
* Mark freshness clearly.
* Preserve access control.
* Provide platform status.
* Preserve alternate machine-readable or operational paths for critical actions.
* Queue safe requests where appropriate.
* Prevent actions requiring unavailable authority or evidence.
* Reconcile state after recovery.

Stale cached information must not be presented as current fact.

---

# Data Consistency

Composed portal views may use different consistency models.

Each view should define:

* Authoritative source
* Expected freshness
* Last update
* Conflict behavior
* Cache behavior
* Refresh

Critical state such as authorization, ownership transfer, delivery, and incident status may require stronger consistency than general discovery.

---

# Caching

Caching may improve performance but should preserve:

* Access controls
* Tenant and property scope
* Source and version
* Freshness
* Revocation
* Sensitive-data restrictions
* Invalidation
* Failure behavior

Shared caches must not create cross-user or cross-tenant leakage.

---

# Portal and Catalog Observability

The platform should observe:

* Availability
* Latency
* Search success
* Zero-result searches
* Result selection
* Index freshness
* Catalog completeness
* Self-service success
* Error and support demand
* Access denials
* AI answer citation
* Tenant and property impact
* Accessibility defects

Observability should protect sensitive queries and user privacy.

---

# Capacity and Performance

Capacity planning should account for:

* Number of projects and services
* Relationship density
* Documentation volume
* Search volume
* Indexing volume
* Portal concurrency
* AI-assisted queries
* Event volume
* Tenant and property growth
* Retention

Search and relationship growth should not force all domain data into one monolithic store.

---

# Portal and Catalog Governance

Governance should establish:

* Information architecture
* Record taxonomy
* Identifier standards
* Required metadata
* Ownership
* Source authority
* Freshness expectations
* Relationship types
* Access classification
* Search indexing
* Documentation standards
* AI-assisted discovery rules
* Accessibility
* Service commitments
* Deprecation
* Quality review

Governance should enable federated ownership behind a coherent experience.

---

# Maturity Model

## Level 0 — Fragmented

Discovery depends on individuals, bookmarks, separate tools, and undocumented knowledge.

## Level 1 — Documented

Core projects, services, owners, and documentation are recorded and searchable.

## Level 2 — Integrated

The portal composes lifecycle views, the catalog connects relationships, and self-service uses governed contracts.

## Level 3 — Governed

Authority, freshness, access, tenant isolation, documentation lifecycle, evidence, and quality controls are integrated.

## Level 4 — Measured

Discovery success, metadata quality, self-service outcomes, documentation use, support demand, accessibility, and adoption are measured.

## Level 5 — Adaptive

The portal and catalog improve continuously through feedback and evidence while preserving source authority, privacy, and human accountability.

---

# Measures

Illustrative measures include:

* Time to find applicable architecture
* Time to find a service owner
* Search success and zero-result rate
* Catalog coverage
* Ownership completeness
* Metadata freshness
* Relationship completeness
* Unregistered production services
* Orphan findings
* Documentation freshness
* Documentation success
* Self-service completion
* Self-service abandonment
* Portal availability and latency
* Indexing latency
* Access-control defects
* Tenant or property leakage defects
* AI answer citation completeness
* Support demand
* Accessibility defects
* User satisfaction
* Paved-path adoption

Metrics should not reward page views or record count without successful outcomes.

---

# Anti-Patterns

The Developer Platform should avoid:

* Treating the portal product as the Developer Platform.
* Treating the catalog as the source of every field.
* Copying domain state without authority or freshness.
* Hiding source and version.
* Creating one monolithic metadata database.
* Presenting stale data as current.
* Allowing automated discovery to assign business ownership.
* Treating repositories, projects, components, and services as the same record type.
* Ranking popularity above authoritative applicability.
* Indexing restricted content without access-aware retrieval.
* Leaking tenant or property existence through search or counts.
* AI answers without citations.
* Writing AI inference back as authoritative fact.
* Self-service actions that bypass control-plane contracts.
* Documentation without owners or lifecycle.
* Graphical-only dependency views.
* Critical recovery actions available only through one portal.
* Analytics used for individual surveillance.
* Generic ownership placeholders.
* Permanent stale or orphan records.

---

# Architecture Relationships

The portal and catalog connect developer journeys to authoritative platform capabilities.

```text
Architecture, Projects, Services, and Domain Authorities

↓

Catalog, Documentation, Search, and Composed Views

↓

Developer Portal and Self-Service Journeys

↓

Delivery, Operations, Governance, Support, and Feedback
```

The portal and catalog expose and connect prior architecture without replacing its authorities.

---

# Architectural Rules

The Developer Platform must:

* Treat the portal as a coherent experience capability, not the authority for every domain.
* Treat the Service Catalog as an authoritative discovery view.
* Preserve source, version, freshness, ownership, and access for composed information.
* Use stable identities and typed relationships.
* Keep projects, repositories, components, services, releases, and environments distinct.
* Make architecture, ADRs, ownership, interfaces, dependencies, and lifecycle first-class.
* Invoke self-service through governed control-plane contracts.
* Support multiple interaction channels with consistent concepts.
* Enforce access-aware search, navigation, relationships, and AI assistance.
* Preserve tenant and property isolation.
* Prevent automated discovery from inventing accountable ownership or architecture.
* Govern catalog registration, enrichment, reconciliation, freshness, and quality.
* Treat documentation as an owned, versioned, accessible lifecycle resource.
* Require AI-assisted discovery to cite authoritative sources and identify inference.
* Provide contextual support and platform status.
* Preserve alternate paths for critical actions during portal degradation.
* Protect privacy and prevent secret indexing.
* Measure discovery and task outcomes rather than record or page volume.
* Preserve vendor neutrality and replaceable implementations.

---

# Future Evolution

Future portal and catalog capabilities may include:

* Intent-driven developer navigation
* Semantic architecture and service discovery
* Personalized role-aware journeys
* Automated relationship discovery with accountable confirmation
* Predictive documentation freshness
* Architecture-aware recommendations
* Cross-tenant and cross-property impact views
* Service and dependency digital twins
* Natural-language self-service preparation
* Multi-agent catalog analysis
* Proactive orphan and ownership-risk detection
* Continuous catalog reconciliation
* Privacy-preserving usage analytics
* Federated enterprise catalogs
* Governed capability marketplaces

Future evolution must preserve source authority, explicit ownership, tenant isolation, access control, citations, privacy, explainability, evidence, accessibility, and human accountability.

---

# Summary

The XeniosAI Developer Portal and Service Catalog Architecture establishes a coherent, governed discovery and self-service experience across architecture, projects, services, interfaces, dependencies, builds, artifacts, environments, deliveries, operations, governance, documentation, support, and feedback.

It keeps the portal as an experience layer and the catalog as an authoritative discovery view while preserving the accountable source, version, freshness, access, and ownership of every material field.

By integrating access-aware search, typed relationships, documentation lifecycle, tenant and property filtering, contextual self-service, and cited AI assistance, XeniosAI can reduce developer cognitive load and duplicate work without creating a metadata monolith, weakening domain authority, or exposing restricted enterprise information.

---

# Related Documents

* ARCH-013 — Developer Platform
* ARCH-013-01 — Developer Platform Overview
* ARCH-013-02 — Developer Experience and Journeys
* ARCH-013-03 — Platform Capability Model
* ARCH-013-04 — Project and Service Lifecycle
* ARCH-013-05 — Build, Test, and Quality
* ARCH-013-06 — Delivery and Environment Platform
* ARCH-013-08 — Developer Security and Governance
* ARCH-013-09 — Platform Operations and Adoption
* ARCH-003 — Service Architecture
* ARCH-008 — Security
* ARCH-009 — Integration
* ARCH-010 — Observability
* ARCH-011 — Enterprise Operations
* ARCH-012 — Governance & Compliance
* ARCH-014 — AI Agent Framework
* ARCH-016 — Knowledge & Memory
* ARCH-017 — API & SDK Architecture
* ARCH-018 — Multi-Tenancy
