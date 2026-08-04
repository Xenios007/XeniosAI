# ARCH-018-07 — Tenant-Aware Runtime and Integration

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-07

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines how tenant and property context is established, propagated, validated, and observed across XeniosAI runtime interactions.

It covers experiences, APIs, SDKs, gateways, services, data access, caches, events, queues, jobs, workflows, AI orchestrators, agents, knowledge, memory, integrations, extensions, and operational tooling.

---

# Runtime Principles

* Every tenant-scoped execution has explicit, trusted context.
* Context is established at a trust boundary and revalidated by providers.
* Client input is a claim, not authority.
* Context survives synchronous and asynchronous boundaries.
* Delegation preserves or narrows authority.
* Runtime routing uses authoritative placement state.
* Context is minimized, integrity protected, audience restricted, and time bounded.
* Tenant state and revocation can invalidate previously issued context.
* Caches and retries never replace context validation.
* Telemetry is tenant aware without exposing protected tenant information.
* No runtime component uses an unsafe default tenant.

---

# Runtime Context Model

Tenant context may include:

* Tenant identifier
* Property identifier or approved property set
* Actor and actor type
* Membership or workload-binding reference
* Roles and delegated capabilities
* Purpose
* Authentication assurance
* Tenant and property lifecycle state
* Entitlement and policy references
* Placement or routing reference
* Correlation identifier
* Issuance, expiry, audience, and provenance

Context is not a copy of the entire user profile or tenant registry. Each receiver receives only what it needs and may retrieve authoritative details when required.

---

# Trust Boundaries

Important trust boundaries include:

* External client to experience or gateway
* Gateway to platform service
* Service to service
* Request handler to data provider
* Publisher to message infrastructure
* Message infrastructure to consumer
* Workflow engine to activity or human task
* Orchestrator to model, tool, or agent
* Platform to external integration
* Operator to tenant diagnostic capability

Each boundary defines accepted identity, context representation, validation, failure behavior, and evidence.

---

# Context Establishment

The standard process is:

1. Authenticate the actor or workload.
2. Receive a requested tenant or derive it from a trusted binding.
3. Resolve the tenant through the authoritative registry.
4. Verify membership or workload binding.
5. Validate tenant lifecycle and current restrictions.
6. Resolve and validate property scope.
7. Evaluate purpose, role, entitlement, and policy.
8. Create integrity-protected internal context.
9. Bind context to the intended audience and operation.
10. Record correlation and decision evidence.

If multiple tenants are valid and no explicit selection exists, establishment fails as ambiguous.

---

# Context Representations

Context may be represented through:

* Signed or integrity-protected claims
* Trusted transport metadata
* Short-lived context handles
* Workflow or job execution records
* Event envelope fields
* Service-to-service identity attributes

The architecture does not require one representation for every boundary. It requires equivalent semantics, integrity, audience restriction, expiry, and validation.

Raw external headers are never forwarded as trusted internal context without validation and normalization.

---

# Experience Layer

Tenant-aware experiences must:

* Display the active tenant and property clearly
* Require explicit switching for multi-tenant users
* Separate session and cached state by tenant
* Prevent stale pages from acting in a prior context
* Reconfirm scope for sensitive actions
* Avoid displaying identifiers or results from another tenant
* Handle suspension and revocation consistently

Branding must not obscure security, consent, support identity, or tenant selection.

---

# API Gateway

The gateway may:

* Authenticate external callers
* Normalize accepted tenant claims
* Resolve trusted domain or endpoint mappings
* Apply coarse policy, quota, and threat controls
* Issue internal context
* Route using approved placement references
* Add correlation and telemetry

The gateway does not become the sole owner of tenant authorization. Provider services validate resource ownership and operation policy.

---

# API Contracts

Every API operation declares one scope classification:

* Platform scoped
* Tenant scoped
* Property scoped
* Explicit privileged cross-tenant scope

Contracts define how tenant context is supplied or derived, required property scope, error behavior, idempotency, authorization expectations, quotas, and evidence.

Tenant identifiers in paths or headers improve routing or clarity but do not grant access.

---

# SDK Behavior

SDKs help consumers:

* Configure tenant and property scope explicitly
* Prevent accidental reuse across tenants
* Propagate correlation and idempotency
* Handle scope-related failures consistently
* Avoid logging credentials or protected context
* Recreate clients when tenant context changes

An SDK must not infer a tenant from arbitrary local state, silently broaden property scope, or retry a request under a different tenant.

---

# Provider Service Responsibilities

Every provider:

1. Authenticates or validates the calling workload.
2. Validates context integrity, audience, and freshness.
3. Confirms tenant and property lifecycle permits the operation.
4. Validates target resource ownership.
5. Evaluates actor or delegated authority.
6. Applies tenant configuration, entitlement, and quota where relevant.
7. Executes against approved tenant placement.
8. Emits tenant-bound results, events, telemetry, and evidence.

Provider ownership is not delegated to a gateway, ORM, queue, or caller.

---

# Service-to-Service Calls

Downstream calls propagate:

* Calling workload identity
* Original actor reference where required
* Tenant and property scope
* Delegated purpose and capability
* Correlation and trace context
* Expiry and audience

The caller may narrow authority for the downstream operation. It cannot mint broader authority than it received.

Services avoid confused-deputy behavior by validating both caller capability and tenant resource ownership.

---

# Data Access

Repository and data-access components require tenant scope for tenant-owned data.

Approved patterns include:

* Tenant-bound repository instances
* Mandatory tenant parameter types
* Policy-enforced session context
* Trusted partition routing
* Tenant-inclusive keys and constraints

General-purpose unscoped query interfaces are restricted to separately authorized platform operations and enhanced evidence.

---

# Cache Access

Cache operations use tenant, property, resource, policy-sensitive attributes, and version in key design.

Rules include:

* Never reuse tenant data through a global cache key.
* Validate cached resource ownership when risk warrants.
* Invalidate on tenant state, ownership, or critical policy change.
* Keep negative authorization decisions tenant scoped.
* Do not fall back to another tenant's value after a miss.

---

# Event Envelope

A tenant-scoped event envelope contains:

* Event identifier and type
* Schema version
* Occurred and published time
* Tenant identifier
* Property scope where relevant
* Producer identity and authority
* Correlation and causation
* Classification
* Idempotency or sequence information
* Payload reference or minimized payload

Scope metadata is protected from untrusted mutation.

---

# Event Publication

Publishers derive tenant context from the accepted command and authoritative resource, not from arbitrary payload fields.

Transactional event publication preserves ownership with the business change. If an event cannot be safely scoped, it is not published as a tenant event.

Platform events are explicitly classified and must not contain tenant content merely to simplify consumers.

---

# Event Consumption

Consumers:

1. Validate producer and schema.
2. Validate tenant scope and current binding.
3. Establish a bounded execution context.
4. Route to approved placement.
5. Apply idempotency within tenant scope.
6. Process only authorized data.
7. Emit tenant-aware outcome and telemetry.

A consumer does not trust topic or queue placement alone as proof of tenant authority.

---

# Queues, Retries, and Dead Letters

Queue names, partitions, scheduling, deduplication, retry state, and dead-letter records preserve tenant scope.

Retries reuse the original tenant and purpose but revalidate expiring authority and current tenant state as required.

Dead-letter inspection and replay are privileged actions. Replay requires target tenant, event version, reason, expected effects, authorization, and evidence.

---

# Background and Batch Jobs

Tenant jobs bind to one tenant or an explicitly authorized tenant set.

Jobs define:

* Tenant and property scope
* Owning capability
* Input snapshot or query boundary
* Resource budget
* Checkpoint and retry behavior
* Lifecycle and revocation handling
* Output ownership
* Evidence

Cross-tenant batches use separate platform capabilities and process each tenant through an isolated work unit where practical.

---

# Workflow Runtime

A workflow instance binds immutably to tenant scope at creation.

The binding is preserved through:

* Activities
* Human tasks
* Timers
* Signals and callbacks
* Child workflows
* Retries and compensation
* Persistence and recovery

Workflow definitions may be shared, but instances, variables, task queues, history, and evidence remain tenant bounded.

---

# Human Tasks

Assignment is evaluated against current membership and property scope when a task is offered and again when it is completed.

Task links do not grant access. Tenant switching, reassignment, delegation, suspension, and expired membership are handled explicitly.

Task views minimize sensitive context and prevent users with multiple tenants from submitting action in the wrong scope.

---

# AI Orchestrator Runtime

The orchestrator binds tenant context to:

* Instructions and policies
* Conversation state
* Retrieved knowledge and memory
* Model requests and responses
* Tool discovery and execution
* Safety evaluation
* Budgets and limits
* Evidence

Model output is untrusted input to subsequent actions. It cannot change tenant context or create authorization.

---

# Agent Runtime

An agent execution has a bounded identity and capability grant.

The grant defines tenant, property, purpose, tools, data classes, network access, time, resources, human approvals, and delegation rules.

Sub-agents receive equal or narrower scope. Agent state, plans, messages, and memory are not executable credentials and are validated before tool use.

---

# Knowledge Retrieval

Retrieval applies tenant and property filters before semantic ranking and validates returned ownership.

The runtime preserves source provenance, classification, freshness, rights, and citation.

Knowledge similarity or model confidence never permits cross-tenant retrieval. A missing tenant filter fails closed rather than returning global results.

---

# Memory Runtime

Memory admission and retrieval require tenant, subject, purpose, classification, validity, and policy.

Memory scope may be:

* Request
* Conversation
* Workflow
* User within tenant
* Property
* Tenant

Memory is never implicitly global. Correction, expiry, revocation, and deletion propagate to derived context.

---

# Integration Connections

Every connection declares:

* Owning tenant and optional property
* External party and account mapping
* Credential reference
* Permitted operations and data classes
* Endpoint and network policy
* Residency and processor obligations
* Rate limits and schedules
* Callback validation
* Lifecycle and support owner

Connections cannot be selected using an untrusted tenant identifier from the integration payload.

---

# Outbound Integration

Before sending data, the provider validates tenant ownership, connection binding, purpose, data classification, recipient, consent or legal basis, residency, quota, and current connection state.

Delivery records preserve tenant scope, payload reference or digest, destination, attempt history, response classification, and retention.

Retries do not switch to another tenant credential or endpoint.

---

# Inbound Integration

Inbound requests resolve tenant context from a trusted connection binding, credential, endpoint, or signed callback mapping.

Payload tenant identifiers are cross-checked rather than trusted. Unknown, conflicting, replayed, or expired messages are rejected or quarantined.

Inbound data is classified, validated, scanned where appropriate, and attributed before domain processing.

---

# Plugins and Extensions

Extension execution receives an explicit tenant-bound capability grant.

Runtime controls constrain:

* APIs and data
* Files and storage
* Network destinations
* Secrets
* Compute and duration
* Events and callbacks
* User interaction
* Logging and evidence

An extension installed for one tenant is not discoverable or executable by another without independent installation and approval.

---

# Operator and Support Tools

Operational tools require explicit tenant scope and preserve the operator's identity.

Tools should provide:

* Tenant-safe health and metadata views
* Redacted diagnostics by default
* Just-in-time access to protected content
* Ticket or incident binding
* Time limits and approvals
* Export restrictions
* Complete action evidence

Hidden impersonation and unrestricted global search are prohibited.

---

# Context Expiry and Revocation

Context becomes invalid when:

* Its expiry is reached
* Tenant, property, or membership is suspended or retired
* Delegated authority is revoked
* Critical policy changes
* Credential or session is revoked
* Workflow or agent execution ends
* Integration connection is disabled

Long-running work checks revocation at defined checkpoints. A durable job record does not grant indefinite authority.

---

# Observability

Runtime telemetry includes tenant-safe:

* Context establishment success and failure
* Tenant and property routing
* Provider ownership denials
* Cross-tenant mismatch attempts
* Queue and workflow backlog
* Agent and tool execution
* Integration delivery
* Quota and throttling
* Configuration and placement versions

Tenant identifiers in telemetry are access controlled, pseudonymized where appropriate, and excluded from uncontrolled high-cardinality labels.

---

# Failure Handling

Missing, ambiguous, conflicting, stale, or unauthorized context fails closed.

Runtime failure behavior includes:

* Stable non-revealing error response
* Correlation identifier
* No partial cross-tenant output
* Rollback or compensation where applicable
* Quarantine of suspicious messages
* Security signal for ownership mismatch
* Tenant-safe retry guidance

A failure never triggers fallback to a platform or default tenant context.

---

# Testing and Conformance

Conformance testing covers:

* External claim spoofing
* Missing and conflicting context
* Multi-tenant user switching
* Provider ownership validation
* Service-to-service delegation
* Cache collision
* Event routing, retry, replay, and dead letters
* Batch and background job scoping
* Workflow, agent, knowledge, and memory isolation
* Inbound and outbound integration binding
* Extension capability containment
* Context expiry and suspension
* Tenant-safe telemetry and errors

Contract tests verify scope semantics across every provider-consumer boundary.

---

# Architecture Decisions

* Tenant context is explicit across all runtime boundaries.
* External tenant claims are validated before internal use.
* Gateways establish context but providers own resource validation.
* Service delegation cannot broaden authority.
* Data, cache, event, workflow, agent, and integration execution preserves tenant scope.
* Async retries revalidate current lifecycle and authority as required.
* Knowledge relevance and AI reasoning never override isolation.
* Integration credentials and endpoints are tenant bound.
* Extensions execute with explicit tenant capability grants.
* There is no runtime default tenant.

---

# Validation Criteria

This architecture is satisfied when:

* Every tenant-scoped runtime entry point establishes trusted context.
* Every provider validates tenant and property ownership.
* Tenant context survives synchronous, asynchronous, workflow, and agent execution.
* Cache, idempotency, retry, and routing state is tenant aware.
* Integrations resolve tenants from trusted connection bindings.
* Context expiry and revocation affect long-running work within defined objectives.
* Operational tools preserve operator identity and tenant scope.
* Failures reveal no cross-tenant resource information.
* End-to-end multi-tenant conformance tests pass.

---

# Summary

The XeniosAI runtime preserves tenant scope from the first authenticated interaction through every service, data, message, workflow, AI, integration, extension, and operational boundary.

Context is explicit, integrity protected, minimized, and revalidated. Providers retain ownership of authorization, delegation cannot expand authority, and asynchronous work never loses or guesses its tenant. These rules make tenant isolation an execution invariant rather than an edge-only convention.
