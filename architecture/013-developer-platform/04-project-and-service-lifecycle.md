# ARCH-013 · Chapter 04 — Project and Service Lifecycle

**Document ID:** ARCH-013-04

**Title:** Project and Service Lifecycle

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-26

**Parent Document:** ARCH-013 — Developer Platform

---

# Purpose

This document defines how projects and services are created, identified, owned, governed, changed, operated, deprecated, and retired through the XeniosAI Developer Platform.

Projects and services are related but distinct lifecycle concepts.

A project organizes authorized work, contributors, architecture scope, repositories, plans, and outcomes. A service provides an owned operational capability through explicit interfaces and service commitments.

The Developer Platform must preserve this distinction while connecting project activity to the services, applications, workflows, AI agents, integrations, artifacts, environments, and operational outcomes it creates or changes.

---

# Scope

This chapter defines:

* Project and service terminology
* Lifecycle principles
* Project identity, metadata, ownership, and states
* Service identity, metadata, ownership, and states
* Project-to-service relationships
* Capability-type relationships
* Project initiation, execution, closure, and archival
* Service proposal, design, development, readiness, operation, evolution, deprecation, and retirement
* Architecture and ADR binding
* Repository and source relationships
* Paved-path and template relationships
* Interface, dependency, consumer, and data ownership
* Tenant-aware and property-aware lifecycle
* Human and AI-agent participation
* Lifecycle controls, evidence, and governance
* Ownership transfer and orphan prevention
* Versioning, compatibility, and migration
* Lifecycle events and integration
* Measures and future evolution

Build, test, quality, artifact, environment, delivery, portal, catalog, security, governance, and platform-operations details are expanded in later ARCH-013 chapters.

---

# Lifecycle Objectives

The project and service lifecycle should:

* Establish identity before material work begins.
* Establish accountable ownership before resources are created.
* Bind work to business purpose and architecture.
* Make lifecycle state authoritative and discoverable.
* Preserve the distinction between projects and operational services.
* Connect source changes to operational outcomes.
* Prevent duplicate, orphaned, or unowned capabilities.
* Preserve domain and data ownership boundaries.
* Support human and authorized AI contributors.
* Preserve tenant and property scope.
* Integrate security, privacy, risk, controls, and evidence.
* Require operational readiness before production use.
* Support controlled evolution and compatibility.
* Make deprecation and retirement first-class lifecycle stages.
* Preserve history after active work ends.

---

# Lifecycle Principles

## Identity Before Automation

Projects, services, repositories, artifacts, environments, releases, and other material resources require stable identities before automated lifecycle actions occur.

## Business Purpose Before Structure

A project or service must have a declared purpose and accountable owner before templates, repositories, environments, or delivery workflows are provisioned.

## Architecture Before Implementation

Applicable architecture and ADRs must be identified before implementation begins.

Architecture conflicts must be surfaced rather than resolved by templates, tooling, or framework conventions.

## Project Is Not Service

A project organizes change. A service owns an operational capability.

A project may create or change multiple services. A service may be changed by many projects during its lifetime.

## Ownership Is Continuous

Ownership begins at proposal and continues through operation, deprecation, retirement, and evidence retention.

## Lifecycle State Is Authoritative

Lifecycle state must have a declared authority, permitted transitions, entry and exit criteria, evidence, and decision ownership.

## Metadata Is Operational

Project and service metadata supports automation, security, governance, operations, support, discovery, and retirement. It is not optional descriptive text.

## Readiness Is Continuous

Operational readiness begins during design and is continuously evaluated. It is not only a final deployment checklist.

## Retirement Is Designed

Every project and service should define closure or retirement expectations, including consumers, data, access, artifacts, environments, integrations, documentation, and evidence.

## Tenant and Property Scope Is Explicit

Missing tenant or property scope must not be interpreted as broad authority.

---

# Core Lifecycle Concepts

## Project

A Project is a governed container for authorized work intended to create, change, migrate, investigate, or retire one or more capabilities.

A project may contain:

* Business objective
* Architecture scope
* Work scope
* Contributors
* Repositories
* Changes
* Environments
* Artifacts
* Releases
* Evidence
* Risks
* Decisions
* Services and other capability relationships

## Service

A Service is an owned operational capability with an explicit business or platform purpose, interfaces, dependencies, data responsibilities, service commitments, observability, support, and lifecycle.

A service may be implemented by one or more deployable components while retaining one accountable boundary.

## Application

An Application is a user-facing or operator-facing software capability that may consume, compose, or host services.

An application may have its own lifecycle and catalog record without being treated as a service when it does not expose an independently operated service contract.

## Component

A Component is an implementation unit within a project, service, application, workflow, agent, integration, or platform capability.

A component should not automatically receive a service identity unless it has independent ownership, operation, interfaces, and service commitments.

## Workflow

A Workflow coordinates decisions and actions across time. It may consume services and may itself have an owned operational lifecycle.

Detailed workflow-runtime design is defined in ARCH-015.

## AI Agent

An AI Agent is an identity-bearing, governed AI capability that may reason, use tools, collaborate, and act within explicit authority.

Its development lifecycle uses the Developer Platform, while its runtime architecture is defined in ARCH-014.

## Integration

An Integration connects XeniosAI with another capability through APIs, events, files, messages, workflows, adapters, or other explicit contracts.

An integration may be a service, component, connector, or managed relationship depending on its ownership and operational model.

## Repository

A Repository is an authoritative source-history resource. It may support one or many projects and may contain one or many components.

A repository is not automatically a project or a service.

## Release

A Release is an identified and governed set of approved artifacts, configuration expectations, evidence, and change intent prepared for delivery.

## Deployment

A Deployment is an execution that introduces or changes a release in a target environment and scope.

---

# Project and Service Relationship Model

```text
Project

creates or changes

↓

Service, Application, Workflow, Agent, Integration, or Component

↓

Release and Deployment

↓

Operational Capability and Outcomes
```

The project may close while the operational service continues.

The service retains its identity across projects, repositories, releases, environments, implementations, and ownership transfers.

---

# Relationship Cardinality

The architecture supports:

* One project creating one service
* One project creating multiple services
* One project changing multiple existing services
* Multiple projects changing one service over time
* One repository supporting multiple projects
* One repository containing multiple components
* One service implemented across multiple repositories
* One service deployed to multiple environments
* One service serving multiple tenants or properties within explicit boundaries

Relationships must be explicit. Cardinality must not be inferred only from repository layout.

---

# Project Lifecycle

The standard project lifecycle is:

```text
Proposed

↓

Assessing

↓

Authorized

↓

Active

↓

Closing

↓

Closed

↓

Archived
```

Alternative states include Paused, Blocked, Cancelled, Rejected, and Reopened.

---

# Project State — Proposed

A proposed project represents a declared need that has not yet been authorized for execution.

Minimum information should include:

* Requestor
* Business need
* Expected outcome
* Initial scope
* Candidate owner
* Known domains
* Known tenants and properties
* Initial risk and data considerations

Proposal must not automatically create broad access, production resources, or durable cost.

---

# Project State — Assessing

During assessment, the platform and accountable contributors determine:

* Existing capability overlap
* Architecture applicability
* Domain ownership
* Project type
* Services or capabilities affected
* Paved-path eligibility
* Dependencies and consumers
* Tenant and property scope
* Data and AI participation
* Security, privacy, risk, and compliance impact
* Required ADRs or exceptions
* Resource and cost expectations
* Ownership
* Authorization requirements

Assessment should prevent duplicate services and inappropriate boundary expansion.

---

# Project State — Authorized

An authorized project has:

* Approved purpose
* Accountable owner
* Defined scope
* Architecture binding
* Initial lifecycle plan
* Authorized contributors
* Tenant and property scope
* Risk classification
* Resource boundaries
* Required controls
* Decision evidence

Authorization may be conditional and time bounded.

---

# Project State — Active

An active project may:

* Create or change registered resources.
* Use authorized repositories and environments.
* Produce changes, builds, tests, and artifacts.
* Request reviews and approvals.
* Prepare and deliver releases.
* Generate evidence.
* Update scope through governed change.

Active status does not grant unrestricted authority. Every action remains subject to identity, scope, policy, and resource controls.

---

# Project State — Paused

A paused project temporarily stops material work while preserving identity, state, resources, decisions, and evidence.

Pause should identify:

* Reason
* Owner
* Effective time
* Resource treatment
* Access treatment
* Cost treatment
* Review date
* Conditions for resumption or closure

Temporary environments and unnecessary access should not continue indefinitely.

---

# Project State — Blocked

A blocked project cannot safely or lawfully progress.

The block should identify:

* Blocking condition
* Affected scope
* Evidence
* Current owner
* Required decision or remediation
* Escalation
* Time expectation
* Permitted work while blocked

Architecture conflicts, missing mandatory dependencies, security concerns, and uncertain tenant boundaries are valid blockers.

---

# Project State — Closing

Closing confirms that the project’s authorized work has reached an accountable end.

Closure activities should include:

* Outcome review
* Scope reconciliation
* Service ownership confirmation
* Source and artifact status
* Environment cleanup
* Access review
* Open finding disposition
* Exception disposition
* Documentation completion
* Evidence completion
* Cost closure
* Remaining operational work
* Knowledge transfer
* Record retention

Project closure must not remove the ownership or support required by continuing services.

---

# Project State — Closed

A closed project no longer performs active work.

Its records remain available according to access and retention policy.

A closed project may retain relationships to:

* Services
* Releases
* Deployments
* Architecture and ADRs
* Evidence
* Decisions
* Findings
* Incidents
* Success measures

New material work should normally use a new project or formally reopen the existing project.

---

# Project State — Archived

An archived project is retained for history but removed from ordinary active views and execution.

Archival should preserve:

* Project identity
* Purpose
* Owners during its lifecycle
* Architecture and decisions
* Changes and releases
* Evidence
* Service relationships
* Closure outcome
* Retention and disposal rules

Archival must not erase audit or service provenance.

---

# Project State — Cancelled or Rejected

A rejected proposal was not authorized.

A cancelled project was authorized or active but intentionally stopped before planned completion.

The lifecycle record should identify:

* Decision
* Authority
* Reason
* Work completed
* Resources created
* Data created
* Access granted
* Cleanup
* Evidence
* Reusable outcomes
* Continuing obligations

Cancellation does not permit abandoned resources or unowned services.

---

# Project Creation Contract

A project-creation request should identify:

* Project name
* Purpose
* Desired outcome
* Requestor
* Candidate accountable owner
* Project type
* Architecture scope
* Domain
* Paved path
* Services or capability types
* Repository strategy
* Tenant and property scope
* Data classification
* AI participation
* Integrations
* Risk and controls
* Expected environments
* Cost and duration expectations
* Required approvals
* Closure expectations

Incomplete requests may remain proposed or assessing. The platform should not invent missing business ownership or architecture.

---

# Project Types

Illustrative project types include:

* New service
* New application
* Existing service change
* Platform capability
* AI agent
* Workflow
* Integration connector
* Data capability
* Tenant onboarding
* Property onboarding
* Migration
* Security remediation
* Reliability improvement
* Compliance remediation
* Research or experiment
* Deprecation
* Retirement

Project type influences paved paths, metadata, controls, evidence, environments, and closure.

---

# Project Identity

Project identity should be:

* Globally unique within XeniosAI
* Stable
* Non-secret
* Human discoverable
* Machine usable
* Independent of a repository name
* Independent of a temporary team name
* Retained after closure

Display names may change. The stable identifier should not be reused.

---

# Project Metadata

Authoritative project metadata should include:

* Project identifier
* Name
* Purpose
* Type
* Lifecycle state
* Accountable owner
* Team
* Requestor
* Architecture scope
* ADRs
* Domain
* Paved path and version
* Templates and versions
* Repositories
* Services and other capabilities
* Dependencies
* Tenant and property scope
* Data classification
* AI participation
* Integrations
* Environments
* Risk and controls
* Exceptions
* Start and target dates
* Cost ownership
* Support path
* Evidence
* Closure status

Fields should identify source, owner, freshness, and update authority.

---

# Project Ownership

A project should identify:

* Accountable project owner
* Business sponsor
* Technical lead
* Architecture authority
* Delivery responsibility
* Security, privacy, risk, and data responsibilities
* Tenant or property authority where applicable
* Cost owner
* Support contact
* Escalation

The same person may hold multiple roles, but accountability and conflicts of interest should remain visible.

---

# Project Scope

Project scope should define:

* Included outcomes
* Excluded outcomes
* Services and capabilities affected
* Repositories and components
* Interfaces and consumers
* Data
* AI behavior
* Integrations
* Environments
* Tenants
* Properties
* Time
* Cost
* Authority

Scope changes must be evaluated for architecture, risk, resources, controls, consumers, and approval.

---

# Project Architecture Binding

Each project should bind to:

* Applicable architecture modules
* Architecture version or revision
* Relevant ADRs
* Domain boundaries
* Dependency rules
* Required quality attributes
* Required controls
* Known deviations
* Missing references
* Architecture owner

Architecture binding should be updated when scope or architecture changes.

The project must surface conflicts; it must not silently select implementation conventions over architecture.

---

# Paved-Path and Template Binding

A project may bind to:

* Paved-path identity and version
* Template identities and versions
* Supported capability type
* Default controls
* Required metadata
* Upgrade expectations
* Support level
* Exceptions

Projects remain responsible for understanding material decisions generated by the paved path.

Template adoption should not permanently conceal the origin or version of generated structures.

---

# Repository Relationships

A project may:

* Create a repository.
* Use an existing repository.
* Use multiple repositories.
* Share a repository with another project.
* Produce changes without creating a new repository.

Each relationship should define:

* Repository identity
* Purpose
* Owner
* Project scope
* Services or components
* Access
* Contribution model
* Architecture scope
* Required checks
* Retention

Repository lifecycle must not automatically close when one project closes.

---

# Project Environments

Project environments should have:

* Environment identity
* Purpose
* Owner
* Project relationship
* Service relationship
* Tenant and property scope
* Data classification
* Access
* Configuration
* Cost
* Expiration
* Cleanup

Temporary project environments should expire or be renewed intentionally.

---

# Project Evidence

Project evidence may include:

* Authorization
* Architecture binding
* ADRs
* Scope decisions
* Ownership
* Source changes
* Reviews
* Builds
* Tests and evaluations
* Security and privacy results
* Artifacts and provenance
* Approvals and exceptions
* Deliveries
* Verification
* Operational readiness
* Closure

Evidence should be generated through normal platform activity and correlated to the project identity.

---

# Service Lifecycle

The standard service lifecycle is:

```text
Proposed

↓

Designing

↓

Developing

↓

Validating

↓

Ready

↓

Active

↓

Deprecated

↓

Retiring

↓

Retired
```

Alternative states include Experimental, Suspended, Degraded, Rejected, and Replaced.

---

# Service State — Proposed

A proposed service represents a candidate operational boundary.

The proposal should identify:

* Business or platform purpose
* Domain
* Candidate owner
* Existing capability overlap
* Intended consumers
* Interface intent
* Data responsibility
* Tenant and property scope
* AI participation
* Service criticality

Proposal review should prevent duplicate services and overlapping ownership.

---

# Service State — Designing

During design, the service establishes:

* Bounded responsibility
* Architecture alignment
* Ownership
* Interfaces
* Commands, queries, and events
* Data ownership
* Dependencies
* Consumers
* Failure boundaries
* Security and privacy
* Tenant isolation
* Service commitments
* Observability
* Capacity
* Recovery and continuity
* Versioning
* Deprecation strategy

Material design decisions should be recorded in architecture or ADRs.

---

# Service State — Developing

During development, the service is implemented through authorized projects and repositories.

The service should progressively acquire:

* Implementation components
* Build definitions
* Tests
* Artifacts
* Configuration schema
* Secret references
* Environments
* Observability
* Documentation
* Runbooks
* Evidence

Development must preserve the service’s declared boundary.

---

# Service State — Validating

Validation evaluates:

* Business behavior
* Domain rules
* Interfaces and contracts
* Data behavior
* AI behavior where applicable
* Security and privacy
* Tenant isolation
* Property behavior
* Performance and capacity
* Resilience and recovery
* Observability
* Support
* Documentation
* Operational readiness

Validation failure should return the service to development or design without losing evidence.

---

# Service State — Ready

A ready service has satisfied the requirements for authorized production introduction but may not yet be serving production traffic.

Readiness should identify:

* Owner
* Approved architecture
* Trusted artifact
* Required tests and evaluations
* Security and privacy status
* Risk and control status
* Service commitments
* Capacity
* Observability
* Incident and support readiness
* Recovery and continuity
* Documentation and runbooks
* Tenant and property rollout plan
* Delivery and rollback plan
* Required authorization

Ready status should expire or be re-evaluated when material inputs change.

---

# Service State — Active

An active service is authorized for operational use in one or more environments and scopes.

Active service responsibilities include:

* Meeting service commitments
* Maintaining ownership
* Monitoring health and business outcomes
* Managing incidents and problems
* Managing capacity and cost
* Managing security and privacy
* Maintaining controls and evidence
* Managing dependencies
* Maintaining interfaces and compatibility
* Updating documentation and runbooks
* Supporting tenants and properties
* Planning change, deprecation, and retirement

Active status may be scoped by environment, tenant, property, region, consumer, or release.

---

# Service State — Suspended

A suspended service is temporarily unavailable or unauthorized for some or all use.

Suspension should identify:

* Reason
* Scope
* Authority
* Consumer impact
* Data and queue treatment
* Fallback
* Support
* Recovery conditions
* Evidence

Suspension is not retirement and does not remove ownership.

---

# Service State — Deprecated

A deprecated service remains available for a controlled period but should not gain new consumers except through explicit authorization.

Deprecation should define:

* Reason
* Owner
* Replacement
* Affected consumers
* Compatibility
* Migration path
* Support level
* Final change policy
* Communication
* Target retirement
* Exceptions
* Measures

Deprecation must be visible through the catalog, interfaces, documentation, and relevant platform journeys.

---

# Service State — Retiring

A retiring service is actively removing consumers, traffic, dependencies, data, access, and operating resources.

Retirement execution should include:

* Consumer migration
* Interface shutdown plan
* Event and message disposition
* Workflow and integration updates
* Tenant and property coordination
* Data retention, export, migration, or deletion
* Artifact and environment treatment
* Secret revocation
* Access removal
* Monitoring changes
* Incident and support changes
* Documentation updates
* Contract and dependency removal
* Final verification
* Evidence

Retirement must be reversible until the approved irreversible boundary is reached.

---

# Service State — Retired

A retired service no longer provides active operational capability.

Retirement records should preserve:

* Service identity
* Historical purpose
* Ownership history
* Architecture and ADRs
* Interfaces and dependencies
* Releases and deployments
* Tenant and property scope
* Data disposition
* Consumer migration
* Incidents and findings
* Retirement authority
* Final evidence
* Retention and disposal rules

The service identifier must not be reused for a different capability.

---

# Experimental Services

An experimental service may be used for research, prototyping, evaluation, or limited validation.

Experimental status should define:

* Hypothesis
* Owner
* Users
* Scope
* Environment
* Data limitations
* Tenant and property restrictions
* Security controls
* Service expectations
* Cost and duration
* Production prohibition or limited authorization
* Exit criteria
* Cleanup

Experimental must not become an indefinite ungoverned production state.

---

# Service Identity

Service identity should be:

* Stable
* Unique
* Independent of implementation technology
* Independent of one repository
* Independent of one environment
* Independent of a current owner name
* Retained through replacement and retirement
* Usable across catalog, observability, delivery, governance, and support

Display names and implementation components may change without changing the service identity when the service responsibility remains the same.

---

# Service Naming

Service names should be:

* Explicit
* Responsibility based
* Domain aligned
* Understandable
* Stable
* Distinguishable from teams, projects, and repositories

Names should avoid combining unrelated responsibilities into a single service identity.

Examples such as Authentication Service, Conversation Service, Memory Service, Reservation Service, and Pricing Service communicate clearer ownership than broad combined names.

---

# Service Metadata

Authoritative service metadata should include:

* Service identifier
* Name
* Business or platform purpose
* Domain
* Type
* Lifecycle state
* Criticality
* Accountable owner
* Technical owner
* Operational owner
* Support team
* Projects
* Repositories
* Components
* Architecture and ADRs
* Interfaces
* Dependencies
* Consumers
* Data ownership
* AI participation
* Tenant and property scope
* Security classification
* Privacy classification
* Risk and controls
* Service commitments
* Environments
* Artifacts and releases
* Configuration
* Observability
* Runbooks
* Incidents and problems
* Capacity and cost
* Deprecation and retirement
* Evidence

Each field should have an authoritative source, validation, freshness expectation, history, and update authority.

---

# Service Ownership

A service should identify:

* Accountable service owner
* Business or platform owner
* Technical owner
* Operational owner
* Data owner
* Security and privacy responsibilities
* Reliability responsibility
* Cost owner
* Support team
* Primary and secondary escalation
* Tenant or property responsibility where applicable

Ownership should be effective-dated and historically preserved.

No active service may remain ownerless.

---

# Service Boundary

A service boundary should define:

* Owned business capability
* Owned business rules
* Owned data and schema
* Commands
* Queries
* Events
* APIs
* Configuration
* Security policy
* Service commitments
* Observability
* Failure behavior
* Dependencies
* Excluded responsibilities

No two services should own the same business entity or authoritative rule without explicit architecture.

Shared views may be composed, but authoritative ownership must remain singular.

---

# Service Data Ownership

The service should define:

* Data it owns
* Data it reads
* Data it derives
* Data it publishes
* Data classification
* Tenant and property scope
* Retention
* Residency
* Privacy requirements
* Quality responsibility
* Backup and recovery
* Migration
* Retirement disposition

Direct access to another service’s internal data store should not replace an explicit contract.

---

# Interfaces

Service interfaces may include:

* Commands
* Queries
* APIs
* Events
* Messages
* Files
* Workflows
* Tools
* User interfaces
* Administrative interfaces

Each interface should define:

* Identity
* Purpose
* Owner
* Consumers
* Contract version
* Authentication and authorization
* Tenant and property behavior
* Data classification
* Service commitments
* Error behavior
* Compatibility
* Deprecation
* Observability

---

# Dependencies and Consumers

Service relationships should identify:

* Provider
* Consumer
* Contract
* Purpose
* Direction
* Criticality
* Failure behavior
* Service commitments
* Data exchanged
* Tenant and property scope
* Version
* Compatibility
* Owner
* Review

Automated discovery may enrich relationships but should not silently replace accountable declarations.

---

# Service Criticality

Service criticality should consider:

* Guest impact
* Property operational impact
* Tenant impact
* Revenue impact
* Safety
* Security
* Privacy
* Compliance
* Data impact
* Dependency centrality
* Recovery needs
* Manual fallback

Criticality influences service commitments, testing, continuity, change, support, evidence, and approval.

---

# Service Commitments

Service commitments may define:

* Availability
* Response time
* Throughput
* Completion time
* Data freshness
* Consistency
* Durability
* Recovery time
* Recovery point
* Support response
* Maintenance
* Notification
* Tenant and property commitments

Commitments should be measurable and supported by architecture, capacity, observability, and operations.

---

# Operational Readiness

Operational readiness should cover:

* Purpose and ownership
* Architecture
* Security and privacy
* Risk and controls
* AI governance
* Build and artifact trust
* Tests and evaluations
* Capacity and performance
* Observability
* Incident response
* Problem management
* Support
* Recovery
* Continuity
* Data protection
* Tenant isolation
* Property procedures
* Documentation
* Runbooks
* Cost
* Known limitations
* Evidence

Readiness is evaluated continuously and at material lifecycle transitions.

---

# Service Versioning

Service versioning should distinguish:

* Service identity
* Interface contract version
* Artifact version
* Release version
* Configuration version
* Data-schema version
* AI model version
* Prompt version
* Evaluation version
* Documentation version

These versions may change independently but must remain traceable.

Semantic versioning or an equivalent explicit compatibility scheme should be used where appropriate.

---

# Compatibility

Compatibility management should define:

* Supported versions
* Compatibility period
* Consumer responsibilities
* Provider responsibilities
* Migration path
* Contract testing
* Data migration
* Tenant and property rollout
* Rollback constraints
* Deprecation notice
* Exception handling

Breaking changes require explicit architecture, impact analysis, authorization, and consumer migration.

---

# Service Change Lifecycle

An active service change should:

1. Establish project and change identity.
2. Resolve architecture and ownership.
3. Identify affected interfaces, data, consumers, tenants, and properties.
4. Classify risk and required controls.
5. Implement in an isolated change.
6. Build and validate.
7. Evaluate compatibility and readiness.
8. Review and authorize.
9. Assemble a trusted release.
10. Deliver progressively.
11. Verify outcomes.
12. Update service metadata and evidence.
13. Observe and learn.

The service identity persists across changes.

---

# Ownership Transfer

Project or service ownership transfer should:

* Identify current and new owners.
* Confirm acceptance.
* Define effective time.
* Transfer access and responsibility.
* Review architecture and service boundaries.
* Review incidents, findings, risks, controls, and exceptions.
* Review service commitments and capacity.
* Transfer documentation and runbooks.
* Update support and escalation.
* Preserve ownership history.
* Emit evidence.

Ownership must not be changed to an unverified team or generic placeholder.

---

# Orphan Prevention

The platform should detect:

* Projects without accountable owners
* Services without accountable or operational owners
* Repositories without owners
* Production environments without owners
* Artifacts without source or service relationships
* Interfaces without owners
* Dependencies without providers
* Deprecated services without migration owners
* Temporary environments past expiration
* AI agents without human sponsors

Orphan findings should trigger remediation, restriction, escalation, or retirement according to risk.

---

# Duplicate Capability Prevention

Before a new project or service is authorized, the platform should search:

* Service catalog
* Project catalog
* Architecture
* Paved paths
* APIs and events
* Workflows
* AI agents and tools
* Integrations
* Data capabilities
* Deprecated and planned services

Potential overlap should be evaluated by domain owners and architects.

Reuse must not force unrelated responsibilities into one service.

---

# Human Contributor Lifecycle

Human contributors should:

* Act through verified identities.
* Receive project and resource access based on role and scope.
* Understand architecture and ownership.
* Make attributable changes.
* Participate in required review.
* Accept operational responsibility where assigned.
* Lose unnecessary access when work ends.

Contributor departure or role change must not leave unowned resources.

---

# AI Implementation-Agent Lifecycle

An AI implementation agent participating in a project should have:

* Agent identity
* Human sponsor
* Project and task scope
* Architecture instructions
* Repository and component boundaries
* Tool permissions
* Data and secret restrictions
* Network restrictions
* Test requirements
* Write, commit, push, delivery, and communication authority
* Stop conditions
* Review requirements
* Time and cost bounds
* Revocation
* Evidence

Agent participation should be recorded against project, change, and service records as appropriate.

An agent cannot become the accountable service owner.

---

# Tenant-Aware Project Lifecycle

A tenant-scoped project should define:

* Tenant identity
* Tenant authority
* Business purpose
* Data scope
* Configuration
* Integrations
* Environments
* Services affected
* Rollout
* Evidence
* Support
* Closure

Cross-tenant projects require explicit architecture, authorization, isolation, validation, and evidence.

Tenant-specific work should prefer governed configuration or extension over hidden forks.

---

# Property-Aware Project Lifecycle

A property-scoped project should define:

* Property identity
* Parent tenant
* Local owner
* Guest and operational impact
* Connectivity
* Devices and physical procedures
* Local integrations
* Data
* Configuration
* Manual fallback
* Training
* Rollout
* Reconciliation
* Support
* Closure

Representative property validation should occur before broader rollout where practical.

---

# Multi-Tenant Service Lifecycle

A multi-tenant service should define:

* Tenant isolation model
* Property isolation model
* Tenant configuration
* Tenant data ownership
* Tenant-specific integrations
* Resource quotas
* Tenant observability
* Tenant rollout
* Tenant rollback
* Tenant support
* Tenant evidence
* Tenant offboarding

One tenant’s lifecycle action must not silently alter another tenant’s state.

---

# Tenant and Property Onboarding

Onboarding to a service should establish:

* Authority
* Eligibility
* Configuration
* Data and knowledge
* Integrations
* Branding and AI personality where applicable
* Pricing or business rules where applicable
* Validation
* Training
* Operational readiness
* Rollout
* Verification
* Evidence

Onboarding must preserve deterministic business rules and tenant isolation.

---

# Tenant and Property Offboarding

Offboarding should address:

* Service access
* Configuration
* Integrations
* Credentials
* Data export
* Data retention and deletion
* Knowledge and memory
* Pending work
* Messages and events
* Billing and cost
* Support
* Legal and compliance obligations
* Final verification
* Evidence

Offboarding one tenant or property does not retire the shared service.

---

# Lifecycle Controls

Lifecycle controls may include:

* Required identity
* Ownership validation
* Architecture binding
* Domain review
* Duplicate detection
* Paved-path eligibility
* Data classification
* AI classification
* Tenant and property validation
* Security and privacy review
* Risk assessment
* Required tests
* Operational readiness
* Change authorization
* Evidence completeness
* Deprecation notice
* Retirement verification

Controls should be proportional to risk and explainable.

---

# Lifecycle Gates

Illustrative gates include:

* Proposal acceptance
* Project authorization
* Service design acceptance
* Development readiness
* Validation completion
* Operational readiness
* Production authorization
* Broad tenant rollout
* Deprecation authorization
* Retirement authorization
* Project closure

Each gate should define authority, evidence, conditions, expiration, and permitted next states.

---

# Lifecycle Events

Illustrative lifecycle events include:

* ProjectProposed
* ProjectAuthorized
* ProjectActivated
* ProjectPaused
* ProjectBlocked
* ProjectClosed
* ProjectArchived
* ServiceProposed
* ServiceRegistered
* ServiceReady
* ServiceActivated
* ServiceOwnershipTransferred
* ServiceDeprecated
* ServiceRetirementStarted
* ServiceRetired
* TenantOnboarded
* TenantOffboarded
* PropertyOnboarded
* PropertyOffboarded

Events communicate facts and must identify subject, version, time, actor, correlation, causation, tenant/property context, and classification.

---

# Lifecycle APIs and Commands

Illustrative commands include:

* ProposeProject
* AssessProject
* AuthorizeProject
* ActivateProject
* PauseProject
* CloseProject
* ProposeService
* RegisterService
* UpdateServiceMetadata
* TransferServiceOwnership
* MarkServiceReady
* ActivateService
* DeprecateService
* StartServiceRetirement
* RetireService

Commands require authorization, expected state, validation, idempotency behavior, evidence, and an explainable result.

---

# Lifecycle State Authority

The project and service lifecycle capability should be authoritative for lifecycle identity and state.

Other systems may be authoritative for:

* Architecture content
* ADR content
* Source revisions
* Build results
* Artifacts
* Environments
* Deliveries
* Operational health
* Policy decisions
* Approvals
* Incidents

Lifecycle state may be derived from these sources only through declared rules.

A source repository merge or deployment completion must not silently mark a service ready or active without the required lifecycle decision.

---

# Metadata Validation

Metadata validation should evaluate:

* Required fields
* Identifier validity
* Ownership validity
* Architecture references
* Domain consistency
* Repository relationships
* Service boundaries
* Interface relationships
* Dependency relationships
* Tenant and property scope
* Data classification
* Lifecycle-state consistency
* Freshness
* Conflicts

Automated enrichment should not overwrite accountable declarations without an authorized workflow.

---

# Metadata Freshness

Lifecycle metadata should define:

* Update trigger
* Expected freshness
* Source
* Owner
* Validation
* Last confirmed time
* Review schedule
* Staleness behavior

Stale ownership, support, dependency, readiness, or tenant metadata should produce visible findings.

---

# Catalog Synchronization

The developer portal and service catalog should consume authoritative lifecycle information.

Synchronization should preserve:

* Source
* Version
* Freshness
* Access control
* History
* Conflict status

Catalog availability should not be required to preserve the underlying lifecycle authority.

---

# Lifecycle Security

Lifecycle security should protect:

* Creation authority
* State-transition authority
* Ownership transfer
* Tenant and property scope
* Sensitive metadata
* Architecture and evidence access
* Deprecation and retirement decisions
* Data disposition
* Audit history

Critical transitions should use strong authentication and separation of duties where required.

---

# Lifecycle Privacy

Project and service metadata should minimize personal information.

The lifecycle should define:

* Purpose of contributor information
* Access
* Retention
* Historical ownership needs
* Redaction or pseudonymization where appropriate
* Export
* Disposal

Operational accountability must be preserved without unnecessary personal surveillance.

---

# Lifecycle Evidence

Lifecycle evidence should include:

* Request and intent
* Identity and authority
* Ownership
* Architecture and ADRs
* State transitions
* Reviews and approvals
* Scope changes
* Metadata changes
* Tests and readiness
* Tenant and property decisions
* Deprecation
* Consumer migration
* Data disposition
* Closure and retirement

Evidence should identify the applicable version and authority at the time of decision.

---

# Lifecycle Failure and Recovery

Lifecycle operations should define:

* Validation failure
* Authorization failure
* State conflict
* Partial resource creation
* Duplicate request
* Timeout
* Dependency failure
* Retry safety
* Compensation
* Manual recovery
* Escalation
* Evidence

Failed project creation must not leave durable resources without ownership and cleanup.

Failed service retirement must preserve operational safety and an accurate partial state.

---

# Concurrency and State Conflicts

Lifecycle changes may be requested concurrently.

The platform should:

* Validate expected current state.
* Prevent lost updates.
* Preserve ordering where required.
* Detect conflicting ownership or scope changes.
* Use idempotency.
* Record attempts.
* Provide a clear resolution path.

Critical lifecycle state must not use last-write-wins without explicit architectural justification.

---

# Record Retention

Retention should cover:

* Project records
* Service records
* Ownership history
* Architecture and decisions
* Changes and releases
* Evidence
* Incidents and findings
* Tenant and property history
* Deprecation
* Retirement
* Data disposition

Retention periods should follow legal, contractual, security, privacy, operational, and knowledge requirements.

---

# Lifecycle Measures

Illustrative measures include:

* Time from proposal to authorization
* Time to establish ownership
* Project creation success
* Time to first successful build
* Time from service proposal to readiness
* Readiness failure reasons
* Active services without complete metadata
* Orphaned resources
* Duplicate capability proposals
* Ownership-transfer duration
* Dependency freshness
* Consumer completeness
* Service change success
* Deprecation age
* Consumer migration progress
* Retirement duration
* Environment cleanup completion
* Tenant onboarding and offboarding success
* Project closure completeness
* Metadata freshness
* Evidence completeness

Measures should reveal lifecycle health without rewarding unnecessary project or service creation.

---

# Lifecycle Governance

Lifecycle governance should establish:

* Project and service taxonomy
* Naming and identity standards
* Required metadata
* State models
* Transition authority
* Ownership standards
* Architecture binding
* Service-boundary review
* Criticality classification
* Readiness criteria
* Versioning and compatibility
* Tenant and property requirements
* Evidence
* Portfolio review
* Deprecation
* Retirement

Governance should preserve domain autonomy while preventing conflicting ownership and uncontrolled platform growth.

---

# Lifecycle Anti-Patterns

The Developer Platform should avoid:

* Treating repositories as projects.
* Treating deployment units as services automatically.
* Treating teams as permanent service identities.
* Closing a project and abandoning its services.
* Creating services without domain and data ownership.
* Allowing two services to own the same business entity.
* Creating a new service for every small component.
* Combining unrelated responsibilities in one service.
* Using production deployment as the readiness decision.
* Allowing source merges to change lifecycle state silently.
* Using stale catalog data as authority.
* Keeping experimental services indefinitely.
* Granting AI agents accountable ownership.
* Inferring cross-tenant scope from missing context.
* Creating tenant-specific code forks without architecture.
* Deprecating without a consumer migration plan.
* Retiring without data and integration disposition.
* Reusing retired identifiers.
* Measuring success by project or service count.

---

# Architecture Relationships

The project and service lifecycle connects architecture to implementation and operations.

```text
Business Need and Architecture

↓

Project Identity, Scope, and Authority

↓

Service and Capability Lifecycle

↓

Source, Build, Test, Artifact, Environment, and Delivery

↓

Operations, Governance, Evidence, Evolution, and Retirement
```

The lifecycle integrates prior architecture without replacing domain ownership, service architecture, security, governance, operations, or observability.

---

# Architectural Rules

The Developer Platform must:

* Maintain distinct project and service identities.
* Establish identity, purpose, ownership, and architecture before material automation.
* Preserve authoritative lifecycle state and permitted transitions.
* Treat project metadata and service metadata as operational records.
* Allow projects and services to have many-to-many relationships over time.
* Keep repository, project, component, service, release, and deployment concepts distinct.
* Preserve service identity across projects, implementations, releases, and owners.
* Require explicit service boundaries and singular business and data ownership.
* Bind projects and services to architecture and ADRs.
* Preserve human and AI-agent attribution.
* Prevent AI agents from becoming accountable owners.
* Preserve tenant and property scope throughout lifecycle actions.
* Require operational readiness before production authorization.
* Govern interface versioning and compatibility.
* Detect duplicate and orphaned capabilities.
* Govern ownership transfer.
* Treat deprecation, consumer migration, and retirement as first-class states.
* Preserve evidence and history after closure or retirement.
* Design failure, concurrency, retry, compensation, and recovery.
* Preserve vendor neutrality and technology independence.

---

# Future Evolution

Future lifecycle capabilities may include:

* Intent-driven project proposals
* Semantic duplicate-capability detection
* Architecture-aware service-boundary recommendations
* Automated relationship discovery with accountable confirmation
* Predictive orphan and ownership-risk detection
* Continuous operational-readiness scoring
* Dynamic risk-based lifecycle gates
* Governed AI-assisted metadata maintenance
* Multi-agent project execution
* Cross-tenant and cross-property impact simulation
* Automated consumer migration planning
* Service and project digital twins
* Continuous deprecation management
* Governed autonomous retirement preparation

Future evolution must preserve explicit authority, architecture ownership, human accountability, deterministic lifecycle controls, tenant isolation, evidence, and safe change.

---

# Summary

The XeniosAI Project and Service Lifecycle Architecture establishes a governed path from business need and project proposal through service design, implementation, readiness, operation, evolution, deprecation, and retirement.

It distinguishes projects, repositories, components, services, releases, and deployments while connecting them through stable identities, accountable ownership, authoritative metadata, architecture binding, explicit state transitions, evidence, and operational outcomes.

By making ownership, tenant and property scope, service boundaries, readiness, compatibility, migration, and retirement first-class platform concerns, XeniosAI can grow from one property to an enterprise platform without accumulating unowned services, hidden forks, duplicated capabilities, stale metadata, or irreversible operational debt.

---

# Related Documents

* ARCH-013 — Developer Platform
* ARCH-013-01 — Developer Platform Overview
* ARCH-013-02 — Developer Experience and Journeys
* ARCH-013-03 — Platform Capability Model
* ARCH-013-05 — Build, Test, and Quality
* ARCH-013-06 — Delivery and Environment Platform
* ARCH-013-07 — Developer Portal and Service Catalog
* ARCH-013-08 — Developer Security and Governance
* ARCH-013-09 — Platform Operations and Adoption
* ARCH-003 — Service Architecture
* ARCH-006 — Domain Model
* ARCH-008 — Security
* ARCH-011 — Enterprise Operations
* ARCH-012 — Governance & Compliance
* ARCH-014 — AI Agent Framework
* ARCH-015 — Workflow Engine
* ARCH-018 — Multi-Tenancy
