# ARCH-015 · Chapter 07 — Workflow Integration and Orchestration

**Architecture Domain:** Workflow and Process Architecture

**Document ID:** ARCH-015-07

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-27

**Parent Document:** ARCH-015 — Workflow Engine

---

# Purpose

This document defines how the XeniosAI Workflow Engine integrates with the wider platform and external ecosystem.

It establishes the architecture for:

* Workflow initiation
* Service commands and queries
* Domain and integration events
* Request-orchestration boundaries
* Parent and child workflows
* Human and agent participation
* External-provider integration
* Property-local integration
* Contract and version management
* Correlation and causation
* Identity and authority propagation
* Tenant and property isolation
* Anti-corruption layers
* Reliability and reconciliation
* Integration observability and evidence

The Workflow Engine coordinates capabilities without absorbing their internal logic or authoritative data.

---

# Integration Principle

Workflow integration is contract-driven coordination between independently owned capabilities.

Every integration must preserve:

* Service ownership
* Business authority
* Contract version
* Identity
* Tenant and property
* Correlation
* Idempotency
* Failure semantics
* Observability
* Evidence

The Workflow Engine must not access another service's database directly.

All cross-service interaction occurs through published APIs, commands, events, signals, tasks, or governed adapters.

---

# Orchestration Principle

Orchestration determines process order and durable coordination.

It does not determine every participating business rule.

The Workflow Engine may decide:

* Which defined task is eligible
* Which dependency must be invoked
* Which event must be awaited
* Which deadline applies
* Which failure path follows
* When reconciliation or compensation begins

The owning service decides:

* Whether the business request is valid
* Which domain invariants apply
* How authoritative state changes
* Whether the business action completed
* What compensation means

---

# Integration Goals

Workflow integration should:

* Preserve modularity
* Enable long-running coordination
* Support synchronous and asynchronous interaction
* Keep contracts explicit
* Keep providers replaceable
* Preserve tenant and property isolation
* Support independent deployment
* Normalize external behavior
* Make failure and uncertainty explicit
* Support safe version evolution
* Provide end-to-end traceability
* Avoid distributed database coupling
* Remain vendor neutral

---

# Integration Domains

The Workflow Engine may integrate with:

* Business services
* Platform services
* AI Orchestrator
* AI Agent Framework
* Knowledge and Memory
* Human-task interfaces
* Parent and child workflows
* Event infrastructure
* Queue infrastructure
* External providers
* Tenant systems
* Property-local systems
* Operational and governance services

Each domain retains its own identity, ownership, lifecycle, and service commitments.

---

# Communication Models

Workflow integration may use:

## Synchronous Request and Response

Used when a bounded result is required immediately and the dependency can respond within the task deadline.

## Asynchronous Command

Requests an action whose result will arrive later.

## Domain Event

Communicates a fact from the authoritative domain owner.

## Integration Event

Communicates a normalized fact across an integration boundary.

## Workflow Signal

Requests reevaluation of an existing workflow execution.

## Callback

Returns an external provider result associated with a prior operation.

## Human Task

Obtains authenticated human input or decision.

## Agent Task

Obtains a bounded ARCH-014 agent result.

The communication model should match business semantics rather than implementation convenience.

---

# Contract-First Integration

Every integration contract should define:

* Logical capability
* Contract identity
* Version
* Owner
* Input
* Output
* Errors
* Side effects
* Authority
* Tenant behavior
* Property behavior
* Idempotency
* Timeout
* Cancellation
* Reconciliation
* Compensation where supported
* Service commitment
* Evidence
* Deprecation

Contracts must be machine validatable and human understandable.

---

# Service Ownership

Each service owns:

* Business logic
* Authoritative entities
* Database schema
* Public APIs
* Published events
* Configuration
* Security policy
* Monitoring
* Idempotency
* Reconciliation behavior
* Compensation semantics

The Workflow Engine stores process references and validated results.

It must not duplicate a service's authoritative business entity as workflow-owned truth.

---

# No Cross-Service Database Access

The Workflow Engine must not:

* Read another service's tables
* Write another service's tables
* Join internal schemas across services
* Depend on another service's storage technology
* Repair another service through direct database mutation

Required information must be obtained through:

* Public query API
* Domain event
* Integration event
* Authorized export
* Controlled reconciliation interface

---

# Workflow Initiation

Workflows may be initiated by:

* User-facing application
* AI Orchestrator
* Business service
* Platform service
* Domain event
* Schedule
* Parent workflow
* AI agent
* Human operator

Initiation must establish:

* Workflow and version-selection rule
* Initiator
* Represented principal
* Tenant
* Property
* Input contract
* Authority
* Idempotency
* Correlation
* Deadline
* Evidence

---

# Start Contract

A workflow-start contract should include:

* Requested workflow
* Requested or selected version
* Start-contract version
* Initiating actor
* Represented principal
* Tenant and property
* Input or references
* Business correlation
* Parent relationship
* Idempotency key
* Requested deadline
* Response behavior

Start acceptance must return the durable execution identity or a normalized denial, deferment, or decision requirement.

---

# Request-Orchestration Boundary

ARCH-004 coordinates reasoning and platform capabilities for an active request.

ARCH-015 coordinates durable process execution over time.

The AI Orchestrator may:

* Determine that a workflow is required
* Construct a validated start request
* Start a workflow
* Query workflow status
* Send an authorized signal
* Present workflow progress
* Receive workflow completion

The AI Orchestrator must not:

* Hold authoritative workflow state
* Simulate durable waits in conversation history
* Retry material workflow actions independently
* Alter the workflow definition
* Declare completion without Workflow Engine evidence

---

# Conversation Boundary

A conversation may start, observe, or clarify a workflow.

Conversation state must not be the only record of:

* Execution
* Approval
* Deadline
* Task completion
* Cancellation
* Business outcome

A lost conversation session must not lose or duplicate the workflow.

---

# Business-Service Command

When a workflow requests a business action, the command should include:

* Operation identity
* Contract version
* Workflow execution
* Task
* Initiating and represented identities
* Tenant and property
* Authority
* Input
* Idempotency key
* Deadline
* Correlation
* Expected result

The target service independently validates identity, authority, domain rules, and current state.

---

# Business-Service Query

A workflow query should:

* Use a public query contract
* Identify purpose
* Preserve tenant and property
* Request minimum required data
* Include authorization
* Define freshness
* Define consistency expectation
* Define timeout and error behavior

Query failure must not be interpreted as absence of the business entity.

---

# Command Outcome

Command outcome may be:

* Accepted
* Completed
* Rejected
* Conflict
* Deferred
* Cancelled
* Failed
* Uncertain

Transport success is not a business outcome.

The workflow must validate domain references and completion evidence.

---

# Event-Driven Integration

Workflows may consume domain or integration events to:

* Start execution
* Resolve waits
* Confirm business outcome
* Trigger reconciliation
* Detect cancellation or change

Event integration must preserve:

* Event identity
* Source
* Contract version
* Tenant and property
* Subject
* Correlation
* Ordering semantics
* Replay behavior

Detailed event behavior is defined in ARCH-015-05 and ARCH-009.

---

# Command and Event Pairing

An asynchronous business interaction may use:

1. Durable workflow task intent
2. Versioned command
3. Service acknowledgement
4. Domain transaction
5. Domain event
6. Workflow correlation
7. Deterministic transition

The event should reference the original operation or business subject.

Missing event requires status reconciliation rather than blind command retry.

---

# API and Event Consistency

An API result and later event may describe the same operation.

The contract should specify:

* Which result is authoritative
* Whether API completion is final
* Whether the event is confirmation
* Correlation identity
* Duplicate behavior
* Ordering
* Reconciliation

The workflow must not apply both as separate business completions.

---

# Parent and Child Workflows

A workflow may start a child workflow when a durable sub-process has:

* Independent definition
* Independent ownership
* Reusable lifecycle
* Distinct service commitment
* Explicit input and output

The child owns its execution state.

The parent owns the relationship and acceptance of the child outcome.

---

# Child-Workflow Contract

The contract should define:

* Child workflow identity
* Version-selection rule
* Start idempotency
* Input mapping
* Output mapping
* Tenant and property
* Authority delegation
* Parent correlation
* Wait behavior
* Timeout
* Failure propagation
* Cancellation propagation
* Compensation relationship
* Evidence relationship

---

# Child Version Binding

The parent definition should specify whether the child version is:

* Fixed
* Selected from an approved compatible range
* Selected by active tenant scope
* Selected through a governed routing policy

The resolved child version must be recorded at start.

Worker or provider availability must not choose incompatible workflow semantics.

---

# Child Start Idempotency

Parent retry must not create duplicate child executions.

The child start should use a stable key scoped to:

* Parent execution
* Parent task
* Child workflow
* Tenant and property

The returned child execution identity becomes the durable relationship.

---

# Child Completion

Child completion should provide:

* Child execution
* Definition version
* Outcome
* Output contract
* Business references
* Completion evidence
* Tenant and property

The parent validates the child result before advancing.

Child transport notification alone is not proof of completion.

---

# Cancellation Propagation

Parent cancellation may:

* Cancel child
* Allow child to complete
* Detach child under explicit ownership
* Request child compensation

Child failure may:

* Fail parent task
* Trigger retry
* Trigger alternate path
* Trigger compensation
* Escalate

Propagation must be explicit and idempotent.

---

# Human Integration

Human-task integration may connect:

* Workflow Runtime
* Identity service
* Role and authorization service
* Human-task interface
* Notification service
* Audit and evidence service

The human-task interface must not write workflow state directly.

It submits an authenticated decision contract for runtime validation.

---

# Agent Integration

Agent-task integration connects ARCH-015 to ARCH-014.

The workflow provides:

* Agent task identity
* Goal
* Context references
* Tenant and property
* Authority
* Tools and limits
* Result contract
* Deadline
* Stop conditions

The Agent Framework provides:

* Agent identity and version
* Agent execution
* Governed reasoning
* Tool evidence
* Structured result
* Uncertainty

The workflow validates and applies the result deterministically.

---

# Agent-Initiated Workflow

An agent may propose or request workflow start.

Admission must independently verify:

* Agent identity
* Agent version
* Agent execution
* Goal relationship
* Delegated authority
* Initiator and represented principal
* Tenant and property
* Input
* Idempotency
* Policy

Tool availability does not grant workflow-start authority.

---

# Knowledge and Memory Integration

Workflows may reference governed knowledge or memory for:

* Human context
* Agent context
* Decision support
* Document retrieval
* Policy evidence

Workflow state should store:

* Stable reference
* Version or freshness
* Provenance
* Tenant and property
* Classification

Retrieved content must not become authoritative business state merely because the workflow used it.

---

# External Provider Integration

External providers may support:

* Payment
* Messaging
* Booking channels
* Identity
* Property systems
* Devices
* AI models
* Document services

Provider integration should be isolated behind a governed adapter or service.

Workflow definitions should depend on logical capabilities, not provider-specific payloads.

---

# Anti-Corruption Layer

An anti-corruption layer should:

* Translate provider contracts
* Normalize identifiers
* Normalize errors
* Normalize status
* Apply authentication
* Apply tenant and property
* Provide idempotency
* Provide correlation
* Support reconciliation
* Preserve provider references
* Produce evidence

Provider terminology must not redefine XeniosAI domain semantics.

---

# Provider Callback

Callback handling should verify:

* Provider identity or signature
* Contract version
* Original operation
* Provider reference
* Tenant and property
* Replay protection
* Timestamp
* Integrity
* Correlation

Material callback outcome may require provider-status reconciliation.

---

# Provider Replacement

Provider replacement should preserve the logical integration contract.

Replacement planning should address:

* Feature compatibility
* Data migration
* Active operations
* Callback routing
* Idempotency
* Provider references
* Reconciliation
* Tenant configuration
* Property configuration
* Exit and continuity

No business logic should depend on one provider where an abstraction is practical.

---

# Property-Local Integration

Property-local integration may involve:

* Access systems
* Local devices
* Property-management systems
* On-site networks
* Staff interfaces
* Manual procedures

Contracts should define:

* Property identity
* Local authority
* Connectivity behavior
* Offline limits
* Local buffering
* Time semantics
* Reconciliation
* Manual fallback
* Support ownership

No property integration may access another property's work or data.

---

# Integration Gateway and Adapter

A gateway or adapter may provide:

* Authentication
* Authorization
* Routing
* Contract validation
* Protocol translation
* Rate limiting
* Tenant and property enforcement
* Correlation
* Error normalization
* Observability

The gateway must not become the authoritative owner of workflow or domain state.

---

# Identity Propagation

Integrations should preserve:

* Calling service identity
* Workflow identity
* Execution identity
* Task identity
* Initiating actor
* Represented principal
* Tenant
* Property
* Delegated authority

Target services must independently evaluate effective authority.

---

# Correlation and Causation

Correlation connects related interactions.

Causation identifies which prior action produced an interaction.

Integration records should distinguish:

* Workflow execution
* Business correlation
* Operation identity
* Parent execution
* Event causation
* Provider reference
* Trace context

Correlation identifiers are not credentials.

---

# Idempotency Across Boundaries

Stable idempotency should propagate across:

* Workflow task
* Activity attempt
* Adapter
* Target service
* External provider
* Callback
* Result

Transport retry must not create a new logical operation identity.

Each boundary should define its deduplication retention and conflict behavior.

---

# Transaction Boundaries

One workflow transition may atomically update Workflow Engine state.

One domain service transaction may atomically update its own state.

The architecture does not assume one transaction spans:

* Workflow state
* Business-service state
* Queue
* Event broker
* External provider

Coordination uses durable intent, outbox, inbox, idempotency, events, reconciliation, and compensation.

---

# Data Consistency

Workflow integration typically uses eventual consistency across service boundaries.

The workflow should define:

* Authoritative owner
* Expected freshness
* Accepted intermediate states
* Correlation
* Conflict behavior
* Reconciliation
* Completion evidence

Eventual consistency must not be used to justify ambiguous ownership.

---

# Error Contract

Integrations should normalize errors such as:

* Invalid Input
* Not Authorized
* Invalid Tenant
* Invalid Property
* Not Found
* Conflict
* Business Rejection
* Rate Limited
* Dependency Unavailable
* Timeout
* Cancelled
* Result Uncertain
* Provider Failure
* Policy Denied

The workflow definition maps normalized errors to deterministic behavior.

---

# Reliability Contract

Every material integration should define:

* Timeout
* Retry guidance
* Idempotency
* Status query
* Cancellation
* Reconciliation
* Compensation where supported
* Provider reference
* Evidence

Missing response must not be treated automatically as failure.

Detailed reliability behavior is defined in ARCH-015-06.

---

# Contract Versioning

Breaking changes require a new contract version.

Material changes include:

* Input
* Output
* Meaning
* Errors
* Side effects
* Authority
* Tenant or property behavior
* Idempotency
* Cancellation
* Reconciliation
* Compensation

Backward compatibility should be preserved where practical.

---

# Version Coexistence

Multiple contract versions may coexist for:

* Long-running workflows
* Progressive rollout
* Tenant migration
* Property migration
* Provider transition
* Rollback

The effective version must be recorded per interaction.

Adapters should not reinterpret unsupported versions silently.

---

# Integration Discovery

Authorized designers and runtimes should discover:

* Logical capabilities
* Owners
* Contract versions
* Lifecycle state
* Tenant eligibility
* Property eligibility
* Authority
* Service commitments
* Errors
* Idempotency
* Reconciliation
* Deprecation

Discovery does not grant invocation authority.

---

# Security

Workflow integrations should enforce:

* Strong workload identity
* Mutual authentication where appropriate
* Least privilege
* Tenant isolation
* Property isolation
* Contract validation
* Encryption
* Secret mediation
* Replay protection
* Input validation
* Rate limits
* Network policy
* Audit

Credentials must not be embedded in workflow definitions, state, messages, or logs.

---

# Integration Threats

Threats include:

* Service impersonation
* Confused deputy
* Contract substitution
* Tenant substitution
* Property substitution
* Callback forgery
* Event spoofing
* Replay
* Idempotency-key abuse
* Provider compromise
* Data exfiltration
* Direct database bypass
* Evidence suppression

---

# Tenant and Property Isolation

Isolation must apply across:

* Start requests
* Commands
* Queries
* Events
* Signals
* Callbacks
* Parent-child relationships
* Human tasks
* Agent tasks
* Adapters
* Credentials
* Provider configuration
* Telemetry
* Evidence

Scope must derive from trusted execution and identity state, not untrusted payload fields.

---

# Observability

Integration observability should include:

* Request rate
* Command rate
* Event rate
* Contract versions
* Latency
* Errors by category
* Timeout
* Retry
* Uncertain outcomes
* Reconciliation
* Provider health
* Callback delay
* Child-workflow latency
* Tenant and property distribution
* Cost

---

# End-to-End Traceability

Traceability should connect:

* Initiating request
* Workflow execution
* Definition version
* Task
* Activity attempt
* Command or query
* Target service
* Domain transaction
* Event or callback
* Human or agent result
* Workflow transition
* Business outcome

Tracing must not expose secrets or cross-tenant data.

---

# Integration Evidence

Evidence should establish:

* Contract and version
* Caller and target
* Workflow execution
* Tenant and property
* Authority
* Request or event identity
* Idempotency
* Correlation
* Timing
* Outcome
* Provider reference
* Reconciliation
* Compensation

Payload retention should be minimized and policy controlled.

---

# Operational Control

Authorized operations may:

* Suspend an integration
* Drain an adapter
* Disable a provider route
* Pause dispatch
* Reissue committed publication
* Reconcile uncertain operations
* Rotate credentials
* Activate compatible contract version

Operators must not bypass service ownership or fabricate business outcomes.

---

# Continuity

Integration continuity should address:

* Dependency outage
* Gateway outage
* Broker outage
* Provider outage
* Callback loss
* Region loss
* Property disconnection
* Credential-service outage

Recovery must preserve identity, idempotency, correlation, tenant, property, provider references, and evidence.

---

# Testing

Integration testing should include:

* Contract tests
* Version compatibility
* Authentication and authorization
* Tenant isolation
* Property isolation
* Idempotency
* Duplicate events
* Lost callbacks
* Timeout
* Uncertain outcome
* Reconciliation
* Cancellation
* Compensation
* Child-workflow propagation
* Provider replacement
* Property disconnection
* Recovery

---

# Quality Attributes

The integration architecture should provide:

## Modularity

Capabilities evolve independently behind stable contracts.

## Interoperability

Workflows coordinate services, humans, agents, and providers through explicit semantics.

## Reliability

Failures and uncertain outcomes follow defined recovery contracts.

## Security

Every boundary preserves identity, authority, scope, and integrity.

## Traceability

End-to-end business outcomes remain correlated and attributable.

## Replaceability

Providers and implementations can change without rewriting business process meaning.

## Portability

Integration semantics remain vendor and technology neutral.

---

# Architectural Rules

Workflow integration must:

* Use published APIs, commands, events, signals, tasks, or governed adapters.
* Prohibit direct cross-service database access.
* Preserve one authoritative owner per business entity.
* Keep workflow coordination separate from domain rules.
* Keep ARCH-004 request orchestration separate from durable workflow state.
* Version every material contract.
* Preserve backward compatibility where practical.
* Bind effective versions per interaction.
* Propagate identity, authority, tenant, property, correlation, and idempotency.
* Require target services to authorize independently.
* Use stable operation identity across retries.
* Define timeout, error, cancellation, reconciliation, and compensation semantics.
* Treat transport success as distinct from business completion.
* Use anti-corruption layers for external providers.
* Preserve child-workflow identity and version.
* Keep human and agent participation contract bound.
* Prevent credentials from entering definitions or payloads.
* Produce end-to-end evidence.
* Remain vendor neutral.

---

# Architecture Boundaries

ARCH-015-07 defines workflow integration and orchestration boundaries, contracts, service interaction, parent-child workflows, human and agent coordination, provider adapters, consistency, identity propagation, versioning, security, observability, and continuity.

It does not:

* Define service internals
* Define provider products
* Define event-broker technology
* Define API and SDK fields in detail
* Define workflow runtime storage
* Define agent reasoning
* Define human-interface design
* Replace ARCH-009 Integration Architecture
* Replace ARCH-004 AI Orchestrator

---

# Relationship to ARCH-004, ARCH-005, and ARCH-009

ARCH-004 defines request-level AI orchestration.

ARCH-005 defines platform data flow, transaction boundaries, commands, queries, and events.

ARCH-009 defines enterprise integration principles and patterns.

ARCH-015-07 applies those architectures to durable workflow coordination.

---

# Relationship to ARCH-015-02 through ARCH-015-06

ARCH-015-02 declares integration contracts in workflow definitions.

ARCH-015-03 persists integration state and correlation.

ARCH-015-04 executes service activities through workers.

ARCH-015-05 handles events, callbacks, humans, agents, and timers.

ARCH-015-06 governs retry, reconciliation, cancellation, and compensation.

---

# Relationship to ARCH-014 and ARCH-016

ARCH-014 governs agent identity, reasoning, tools, and execution.

ARCH-016 governs knowledge and memory.

Workflow integrations consume those capabilities without absorbing their state or semantics.

---

# Relationship to ARCH-017 through ARCH-020

ARCH-017 defines detailed workflow integration APIs and SDKs.

ARCH-018 defines detailed tenant and property isolation.

ARCH-019 defines governed integration extension points.

ARCH-020 provides compliant reference integrations without making one provider or technology mandatory.

---

# Summary

The XeniosAI Workflow Engine coordinates independently owned services, workflows, humans, agents, and external providers through explicit versioned contracts.

It preserves a strict boundary between durable process state and authoritative domain state, prohibits cross-service database access, and uses identity, authority, tenant and property scope, correlation, idempotency, reconciliation, and evidence across every interaction.

ARCH-004 may start and observe workflows during request handling, but ARCH-015 remains the durable process authority. Agents may initiate or participate, but ARCH-014 remains their identity and reasoning authority. Business services remain authoritative for business rules and outcomes.

By isolating provider-specific behavior behind anti-corruption layers and preserving contract semantics across version change, XeniosAI can evolve integrations without coupling workflow meaning to one service implementation, provider, protocol, or vendor.

---

# Related Documents

* ARCH-015 — Workflow Engine
* ARCH-015-01 — Workflow Engine Overview
* ARCH-015-02 — Workflow Definition and Lifecycle
* ARCH-015-03 — Workflow Runtime and State Model
* ARCH-015-04 — Tasks, Activities, and Workers
* ARCH-015-05 — Events, Timers, and Human Interaction
* ARCH-015-06 — Reliability, Retries, and Compensation
* ARCH-015-08 — Workflow Security, Governance, and Assurance
* ARCH-015-09 — Workflow Operations, Observability, and Performance
* ARCH-015-10 — Future Workflow Engine Evolution
* ARCH-004 — AI Orchestrator
* ARCH-005 — Data Flow
* ARCH-009 — Integration
* ARCH-010 — Observability
* ARCH-011 — Enterprise Operations
* ARCH-012 — Governance & Compliance
* ARCH-013 — Developer Platform
* ARCH-014 — AI Agent Framework
* ARCH-016 — Knowledge & Memory
* ARCH-017 — API & SDK Architecture
* ARCH-018 — Multi-Tenancy
* ARCH-019 — Plugin & Extension Framework
* ARCH-020 — Reference Implementations
