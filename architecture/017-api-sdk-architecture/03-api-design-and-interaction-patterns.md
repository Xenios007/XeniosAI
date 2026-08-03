# ARCH-017 · Chapter 03 — API Design and Interaction Patterns

**Architecture Domain:** API, Contract, and Developer Interface Architecture

**Document ID:** ARCH-017-03

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

**Parent Document:** ARCH-017 — API & SDK Architecture

---

# Purpose

This document defines the canonical API design and interaction patterns for XeniosAI.

It establishes how API products express and implement:

* Resource interactions
* Point queries
* Collection queries
* Search
* Commands
* Actions
* Synchronous completion
* Asynchronous completion
* Long-running operations
* Events and subscriptions
* Callbacks
* Streams
* Batch and bulk processing
* File-oriented exchange
* Validation
* Idempotency
* Concurrency
* Pagination
* Filtering and sorting
* Consistency and freshness
* Errors and partial outcomes
* Deadlines, timeouts, retry, and cancellation
* Correlation and causation
* Rate limits and quotas
* Caching
* Composition and aggregation
* Tenant and property isolation
* AI, workflow, and agent interactions
* Degraded operation
* Evidence and conformance

ARCH-017-02 remains authoritative for API product, contract, operation, message, field, ownership, registry, and contract-source models.

ARCH-017-04 defines lifecycle, versioning, compatibility, migration, deprecation, and retirement.

---

# Design Principle

API design begins with the owned business or platform capability and the outcome required by an authorized consumer.

It does not begin with:

* A database table
* A framework controller
* A transport verb
* A route convention
* A generated class
* A gateway feature
* An SDK method name
* A provider-specific protocol

Transport and representation choices realize the contract; they do not define its domain meaning.

---

# Interaction Principle

Every interaction must make the following explicit:

* Who is interacting
* On whose behalf
* For what purpose
* Within which tenant and property
* Which capability is requested
* Which data and authority apply
* Whether state may change
* What acceptance means
* What completion means
* What failure means
* Whether retry is safe
* What evidence is produced

If these semantics are unclear, the interface is not sufficiently defined for enterprise use.

---

# Objectives

The interaction architecture should provide:

* Clear business semantics
* Predictable consumer behavior
* Safe state changes
* Explicit completion states
* Reliable failure handling
* Tenant and property isolation
* Consistent collection traversal
* Controlled asynchronous work
* Replay-safe event consumption
* Secure callback delivery
* Bounded streaming
* Safe batch processing
* Observable correlation
* Portable transport realization
* Testable conformance
* Operational recoverability

---

# Interaction Classification

Every operation should have one primary interaction class.

| Interaction | Primary intent | State change | Typical completion |
| --- | --- | --- | --- |
| Query | Retrieve authorized information | No requested business mutation | Result returned |
| Command | Request an owned state transition | Yes | Transition completed or accepted |
| Action | Request a purpose-specific capability | May change state | Defined outcome completed or accepted |
| Resource Management | Manage a contract-addressable entity | Often | Resource state established |
| Event | Publish a fact or governed signal | Describes prior or current fact | Publication accepted |
| Callback | Deliver provider-initiated notification or result | Consumer-defined reaction | Delivery acknowledged |
| Stream | Deliver an ordered or partially ordered sequence | Usually no direct command | Subscription active or item delivered |
| Batch | Process a bounded collection | May | Batch and item outcomes recorded |
| Administrative Control | Change privileged configuration or lifecycle | Yes | Controlled state changed |
| Operational Control | Inspect or intervene in runtime operation | May | Operational outcome recorded |

Classification informs design but does not itself grant authority.

---

# Pattern Selection

The provider should select the simplest interaction pattern that preserves required semantics.

Use a query when:

* The consumer needs information
* No business state change is requested
* Freshness and consistency can be stated
* The result can be bounded

Use a command when:

* A defined business or platform transition is requested
* The owning service can validate invariants
* Idempotency and completion can be specified

Use an action when:

* The capability does not fit ordinary resource-state semantics
* The purpose and side effects remain explicit
* A named business operation improves clarity

Use asynchronous completion when:

* Work exceeds the synchronous deadline
* External callbacks or waits are required
* Capacity requires queued execution
* Completion must survive request disconnection

Use an event when:

* A provider publishes a fact or governed signal
* Consumers should remain decoupled
* Delivery and business reaction are separate

Use a workflow when:

* Durable multi-step coordination is required
* Timers, human tasks, retries, compensation, or long waits are material

Do not force a durable business process into one opaque API request.

---

# Resource Pattern

A Resource is a contract-addressable representation of a business or platform concept owned by a provider.

A resource pattern should define:

* Resource identity
* Owning domain and service
* Tenant and property scope
* Lifecycle state
* Read representation
* Create or initiation behavior where supported
* Update behavior where supported
* Deletion, closure, cancellation, or retirement behavior
* Mutability
* Concurrency
* Authorization
* Errors
* Events

Resource representation must not be confused with the provider's database row or aggregate internals.

---

# Resource Identity

Resource identifiers should be stable, opaque where practical, and validated within their tenant and property context.

Consumers must not infer:

* Authority
* Tenant ownership
* Property ownership
* Resource type
* Creation order
* Storage location
* Shard
* Security classification

from identifier syntax unless the contract explicitly defines that meaning.

Knowing a resource identifier does not grant access to the resource.

---

# Resource Representation

A resource representation should contain:

* Consumer-relevant state
* Stable identifiers and references
* Lifecycle state
* Version or revision where concurrency requires it
* Relevant effective time
* Tenant and property context where safe and useful
* Links or operation references where supported
* Freshness or source metadata where material

It should not expose:

* Internal persistence state
* Secrets
* Credentials
* Internal topology
* Unrelated domain data
* Provider-only control fields
* Hidden workflow or agent state

---

# Resource Creation

Creation should define:

* Consumer-supplied fields
* Provider-assigned fields
* Required identity and authority
* Tenant and property resolution
* Validation
* Idempotency
* Initial state
* Duplicate behavior
* Completion behavior
* Result representation
* Events and evidence

Creation acceptance and resource activation may be separate outcomes.

If activation is asynchronous, the contract should return a stable operation or resource reference that can be reconciled.

---

# Resource Update

Update should define:

* Replace, patch, command, or action semantics
* Mutable fields
* Prohibited fields
* Concurrency precondition
* Validation
* Domain invariants
* Idempotency
* Effective-time behavior
* Result representation
* Events
* Audit evidence

A partial update must distinguish:

* Field absent
* Field unchanged
* Field cleared
* Field reset to default
* Field set to empty
* Field set to null where allowed

---

# Resource Deletion and Closure

The contract should use the domain-appropriate outcome, which may be:

* Delete
* Cancel
* Close
* Disable
* Archive
* Retire
* Revoke
* Expire

These outcomes are not interchangeable.

The contract should define:

* Required authority
* Preconditions
* Reversibility
* Retention
* Downstream impact
* Reference behavior
* Repeated-request behavior
* Completion and evidence

---

# Point Query Pattern

A point query retrieves one authorized resource or result by a stable reference or unique selection.

It should define:

* Query key
* Tenant and property binding
* Authorization behavior
* Current or historical semantics
* Consistency
* Freshness
* Absence behavior
* Conditional retrieval where supported
* Classification and field visibility

The response must not reveal another tenant's or property's resource existence through distinguishable unauthorized behavior unless policy permits disclosure.

---

# Collection Query Pattern

A collection query returns a bounded set of authorized items.

It should define:

* Collection scope
* Item type
* Required filters
* Optional filters
* Default ordering
* Supported ordering
* Pagination
* Maximum page size
* Consistency
* Freshness
* Empty-result behavior
* Total-count behavior
* Authorization across results

Every returned item must independently satisfy the applicable access and scope policy.

---

# Pagination Pattern

Pagination must provide deterministic and bounded traversal appropriate to the collection's change rate and consistency model.

The contract should define:

* Pagination method
* Default page size
* Maximum page size
* Continuation token or position
* Ordering dependency
* Token lifetime
* Token scope
* Filter binding
* Tenant and property binding
* Change behavior between pages
* Invalid or expired token behavior
* End-of-collection behavior

Continuation tokens should be opaque and integrity protected where practical.

They must not expose internal storage, tenant, property, or security details.

---

# Cursor-Based Traversal

Cursor-based traversal is appropriate when:

* Collections change frequently
* Stable offset semantics cannot be guaranteed
* Large datasets require efficient continuation
* Ordering is based on stable keys

A cursor should bind to:

* Product and operation
* Consumer eligibility where required
* Tenant and property
* Filters
* Ordering
* Snapshot or consistency context where provided
* Expiration

A cursor is not a credential and must not bypass authorization when reused.

---

# Offset-Based Traversal

Offset-based traversal may be used when:

* The collection is small or sufficiently stable
* Consumer expectations tolerate insertion and deletion effects
* Performance remains bounded
* The contract clearly defines limitations

Consumers must not assume offset traversal provides a consistent snapshot unless explicitly committed.

---

# Filtering Pattern

Filters should be explicit, typed, bounded, and authorized.

Each supported filter should define:

* Field or semantic criterion
* Operator
* Value type
* Case and locale behavior
* Time behavior
* Tenant and property constraints
* Combination rules
* Maximum complexity
* Unsupported behavior

Filters must not enable discovery of unauthorized data through counts, timing, errors, or identifier probing.

---

# Sorting Pattern

Sorting should define:

* Supported fields
* Default direction
* Multiple-field behavior
* Null and absent ordering
* Case and locale behavior
* Stable tie breaker
* Relationship to pagination
* Unsupported behavior

Sorting on mutable fields may produce repeated or skipped items unless a snapshot or stable cursor model is provided.

---

# Search Pattern

Search differs from exact query and filtering.

A search contract should define:

* Search scope
* Searchable content or metadata
* Tenant and property restrictions
* Authorization before candidate inclusion
* Matching behavior
* Ranking behavior at an architectural level
* Freshness
* Result limits
* Highlight or evidence behavior where supported
* Empty and partial result behavior
* Query safety and resource limits

Search relevance must not grant authority.

Unauthorized content must not enter the candidate set.

---

# Field Selection Pattern

An operation may allow consumers to request a bounded subset of response fields.

Field selection should define:

* Selectable fields
* Required fields always returned
* Classification restrictions
* Computation cost
* Unknown-field behavior
* Version behavior
* Cache behavior

Field selection must not bypass authorization or cause provider-owned internal fields to become public contract fields.

---

# Expansion Pattern

Expansion may include related data when it improves a supported consumer journey.

Expansion should define:

* Expandable relationships
* Maximum depth
* Maximum breadth
* Authorization per expanded object
* Tenant and property validation
* Failure and partial-result behavior
* Consistency and freshness
* Cost and limits

Unbounded recursive expansion is prohibited.

Consumers should use separate owned APIs when expansion would obscure domain ownership or create uncontrolled coupling.

---

# Query Consistency

A query should declare one relevant consistency model, such as:

* Authoritative current read
* Transactionally consistent read
* Read-your-writes within a defined scope
* Snapshot read
* Eventual consistency
* Cached view
* Historical as-of view
* Best-effort informational view

The consumer should know whether the result can be used for a material decision or requires confirmation from the authoritative owner.

---

# Query Freshness

When freshness is material, a response should identify:

* Effective time
* Source time
* Retrieval time
* Cache time
* Maximum supported age
* Degraded or stale state
* Refresh behavior

A recently returned value is not necessarily current if its source or representation is stale.

---

# Conditional Query Pattern

Conditional retrieval may reduce transfer and processing when the consumer already holds a known representation.

The condition should bind to a provider-issued revision, digest, effective version, or freshness marker.

The contract should define:

* Condition source
* Condition scope
* Match behavior
* Non-match behavior
* Tenant and property binding
* Authorization revalidation

A prior authorization decision must not be reused merely because the representation has not changed.

---

# Command Pattern

A command requests that the owning service perform a defined state transition.

A command contract should define:

* Command identity
* Business intent
* Initiating and represented identities
* Required authority
* Tenant and property
* Input
* Preconditions
* Domain validation
* Idempotency
* Concurrency
* Acceptance
* Completion
* Result
* Errors
* Events
* Evidence

Commands should express intent rather than instructing the provider how to manipulate internal state.

---

# Command Acceptance

Acceptance means the provider has admitted the command for processing according to the contract.

Acceptance does not necessarily mean:

* The state transition completed
* Downstream systems completed
* Payment settled
* Notification delivered
* Workflow completed
* External provider confirmed

The contract must identify whether completion is synchronous or how the consumer observes asynchronous completion.

---

# Command Completion

Completion should be based on explicit domain or platform criteria.

A completion result should identify:

* Command or operation identity
* Final outcome
* Affected resource reference
* Resulting revision or state
* Effective time
* Relevant limitations
* Correlation
* Evidence reference where appropriate

The provider must not report success merely because work was queued or a downstream request was transmitted.

---

# Action Pattern

An action represents a named capability that does not fit ordinary resource mutation clearly.

Examples may include:

* Calculate proposal
* Validate eligibility
* Reconcile outcome
* Generate export
* Evaluate policy
* Start workflow
* Cancel operation

An action should define the same identity, authority, validation, idempotency, completion, error, and evidence semantics as a command.

Actions must not become a generic escape hatch for arbitrary provider behavior.

---

# Synchronous Completion Pattern

Synchronous completion is appropriate when:

* Work normally completes within the operation deadline
* No durable wait is required
* Dependencies have bounded response times
* The consumer requires the immediate result
* Failure and cancellation can be handled safely

The contract should define:

* Provider deadline
* Consumer deadline behavior
* Completion criteria
* Timeout outcome
* Retry safety
* Evidence

A disconnected consumer does not necessarily cancel provider work unless cancellation semantics say so.

---

# Asynchronous Operation Pattern

An asynchronous operation is appropriate when work:

* May exceed a synchronous deadline
* Requires queueing
* Requires external processing
* Requires durable progress
* Produces a delayed result
* Must survive consumer disconnection

The admission response should provide:

* Stable operation identity
* Accepted contract version
* Submitted time
* Tenant and property scope
* Current status
* Status-query or event mechanism
* Cancellation capability where supported
* Expiration
* Correlation

---

# Long-Running Operation State

Long-running operation states may include:

* Submitted
* Validating
* Accepted
* Queued
* Running
* Waiting
* Partially completed
* Succeeded
* Failed
* Cancel requested
* Cancelled
* Expired
* Reconciliation required

State names and transitions must be contract defined.

Terminal state must be distinguishable from transient failure or temporary waiting.

---

# Operation Status Pattern

A status query should define:

* Operation identity
* Authorization
* Tenant and property
* Current state
* Progress where meaningful
* Last update
* Deadline or expiration
* Result reference
* Error or limitation
* Cancellation state
* Retry or reconciliation guidance

Progress percentages should be used only when they are meaningful and monotonic enough for consumers.

---

# Idempotency Pattern

Idempotency prevents repeated equivalent requests from producing unintended duplicate business outcomes within a defined scope and period.

An idempotency contract should define:

* Eligible operations
* Required identifier
* Identifier owner
* Scope
* Retention period
* Request-equivalence rules
* Concurrent duplicate behavior
* Completed duplicate behavior
* Failed attempt behavior
* Conflict behavior
* Response replay behavior
* Evidence

Idempotency is a business and provider guarantee, not merely a gateway cache.

---

# Idempotency Scope

Scope may include:

* Consumer
* Acting principal
* Tenant
* Property
* Product
* Operation
* Resource
* Time window

An identifier reused outside its defined scope may represent a different request.

The contract must prevent cross-tenant or cross-property collision from exposing or reusing another outcome.

---

# Duplicate Request Behavior

For an equivalent duplicate, the provider may:

* Return the completed prior outcome
* Return the current in-progress operation
* Return an explicit duplicate status

For a non-equivalent request using the same identifier, the provider should return an idempotency conflict without performing the new operation.

The contract should define how consumers reconcile uncertain timeouts before retrying.

---

# Concurrency Pattern

Concurrency control protects material state from lost updates and invalid transitions.

The contract may use:

* Resource revision
* Expected state
* Conditional mutation
* Domain precondition
* Lease
* Lock token
* Workflow ownership

Concurrency behavior should define:

* Required precondition
* Mismatch outcome
* Current state disclosure
* Retry behavior
* Merge behavior where supported
* Evidence

---

# Optimistic Concurrency

Optimistic concurrency is appropriate when conflicts are uncommon and consumers can safely reload and reconsider.

The consumer supplies an expected revision or condition.

The provider applies the change only if the current state matches.

On conflict, the consumer must not blindly replay without evaluating the new authoritative state.

---

# Pessimistic Coordination

Leases or locks may be appropriate for bounded operational or editing scenarios.

The contract should define:

* Owner
* Scope
* Acquisition
* Duration
* Renewal
* Expiration
* Fencing or stale-owner behavior
* Release
* Failure recovery

Long-lived distributed locks should not replace durable workflow coordination or domain invariants.

---

# Timeout and Deadline Pattern

Timeouts and deadlines should be explicit at:

* Consumer
* Gateway
* Provider
* Dependency
* Workflow or asynchronous operation

The contract should define:

* Maximum supported processing time
* Consumer deadline propagation
* Provider behavior when the deadline expires
* Whether work may continue
* Whether cancellation is attempted
* Result reconciliation
* Retry safety

A timeout means the consumer did not obtain a timely outcome. It does not prove the business operation failed.

---

# Retry Pattern

Retry is appropriate only when:

* The failure is classified as transient
* The operation is naturally idempotent or protected by idempotency
* The deadline and resource budget remain valid
* The provider has not instructed the consumer to stop
* Backoff and rate limits are respected
* Tenant and property authority remains valid

Retry policy should define:

* Retryable errors
* Maximum attempts or time budget
* Backoff
* Jitter where appropriate
* Provider retry guidance
* Cancellation
* Reconciliation

---

# Retry Prohibitions

Consumers and SDKs must not automatically retry when:

* Validation failed
* Authentication failed
* Authorization was denied
* A business precondition failed
* An idempotency conflict occurred
* A non-idempotent outcome is uncertain and no reconciliation exists
* The request exceeded policy or quota in a non-transient manner
* The operation version is unsupported
* The provider marks the failure permanent

Human or workflow remediation may still be appropriate.

---

# Cancellation Pattern

Cancellation is a request to stop eligible remaining work.

It is not a guarantee that all prior side effects are reversed.

The contract should define:

* Who may cancel
* Which states are cancellable
* Idempotency
* Cancellation acceptance
* Cancellation completion
* Work already committed
* Compensation or reconciliation
* Final state
* Evidence

Cancellation and compensation are separate capabilities.

---

# Validation Pattern

Validation occurs at multiple boundaries.

## Structural Validation

Validates message shape, required fields, types, formats, size, ranges, and references.

## Context Validation

Validates identity, delegation, tenant, property, purpose, contract version, and correlation.

## Authorization Validation

Validates permission to perform the operation on the resource within the active scope.

## Domain Validation

Validates business rules, invariants, current state, and preconditions through the owning service.

## Policy Validation

Validates security, privacy, compliance, risk, approval, and operational policy.

Passing one layer does not imply that later validation will pass.

---

# Validation Error Pattern

Validation errors should identify safe, actionable details such as:

* Error code
* Field or criterion
* Rejected value category where safe
* Constraint
* Consumer correction guidance
* Correlation

The provider should report multiple independent field errors when doing so is safe and useful.

It must not expose hidden policy, another tenant's data, secrets, or exploitable internal rules.

---

# Error Architecture

Every operation should use a stable, structured error model.

An error response should support:

* Machine classification
* Human-readable summary
* Correlation
* Safe details
* Retryability
* Retry timing where applicable
* Documentation reference
* Support reference

Transport-specific status and framing may map to the error model without becoming its sole semantic definition.

---

# Error Categories

Canonical categories include:

* Invalid Request
* Authentication Failure
* Authorization Denial
* Scope Mismatch
* Resource Not Found or Not Disclosable
* State Conflict
* Idempotency Conflict
* Concurrency Conflict
* Limit or Quota Exceeded
* Unsupported Operation or Version
* Dependency Failure
* Timeout
* Temporary Unavailability
* Partial Outcome
* Reconciliation Required
* Internal Failure

Products may define domain errors within this enterprise classification.

---

# Error Disclosure

Errors must not disclose:

* Secrets
* Credentials
* Internal stack details
* Internal topology
* Database structure
* Security-control configuration
* Another tenant's existence or data
* Another property's existence or data
* Unnecessary personal information
* Raw untrusted provider errors

Operators may access richer diagnostic information through separately authorized operational interfaces and telemetry.

---

# Partial Outcome Pattern

Partial outcomes may occur in:

* Batch processing
* Aggregated queries
* Multi-provider operations
* External integrations
* Streaming
* Long-running work

The contract should define:

* Whether partial success is permitted
* Which parts completed
* Which parts failed
* Whether completed effects remain
* Retry scope
* Compensation options
* Reconciliation
* Evidence

A generic success response must not hide failed material components.

---

# Batch Pattern

Batch operations process a bounded set of items under one submission context.

The contract should define:

* Maximum item count and payload size
* Per-item identity
* Per-item tenant and property behavior
* Shared and per-item authority
* Validation model
* Atomicity
* Ordering
* Concurrency
* Idempotency
* Partial outcomes
* Status and completion
* Retry and reconciliation

Batching is a performance and convenience pattern, not a way to bypass per-item controls.

---

# Atomic Batch

An atomic batch is permitted only when:

* One owning domain can enforce the transaction
* All items share compatible scope and authority
* The size is bounded
* Failure can safely roll back the whole batch
* The contract explicitly commits to atomicity

Cross-service distributed atomicity must not be implied by a single batch request.

---

# Non-Atomic Batch

A non-atomic batch should return:

* Batch identity
* Overall state
* Per-item identity
* Per-item outcome
* Per-item error
* Retry eligibility
* Completion time
* Evidence or reconciliation reference

Consumers should be able to retry only failed eligible items without duplicating completed outcomes.

---

# File-Oriented Exchange Pattern

File-oriented exchange may be appropriate for:

* Large bounded exports
* Large imports
* Partner reconciliation
* Historical data transfer
* Controlled administrative processing

The contract should define:

* File purpose
* Format and version
* Schema
* Size and item limits
* Integrity
* Encryption
* Classification
* Tenant and property
* Access lifetime
* Upload or download authorization
* Malware controls
* Processing status
* Retention and deletion
* Evidence

File exchange must not become an ungoverned alternative to owned APIs.

---

# Event Publication Pattern

An event represents a fact or governed signal published by its owning producer.

Publication should define:

* Event identity and type
* Producer identity
* Contract version
* Tenant and property
* Event time
* Publication time
* Correlation and causation
* Payload
* Classification
* Ordering scope
* Delivery semantics
* Replay and retention
* Evidence

An event must not claim a business outcome that the producer cannot authoritatively establish.

---

# Event Consumption Pattern

An event consumer should:

1. Authenticate or validate the event source.
2. Validate contract version and integrity.
3. Validate tenant and property scope.
4. Apply deduplication.
5. Check replay and expiration rules.
6. Process through an owned, idempotent handler.
7. Record outcome and correlation.
8. Retry or quarantine according to classification.
9. Reconcile uncertain outcomes.

Receiving an event does not grant authority beyond the consumer's approved purpose.

---

# Event Delivery Semantics

Contracts should state realistic delivery behavior, such as:

* Delivery may be duplicated
* Delivery may be delayed
* Delivery may be reordered outside a defined scope
* Delivery may require replay
* Publication and consumption are separate outcomes

The platform should use deduplication, idempotency, ordering keys, checkpoints, and reconciliation rather than claim universal exactly-once physical delivery.

---

# Event Ordering

Ordering should be defined only within a bounded scope, such as:

* One aggregate
* One resource
* One workflow
* One tenant partition
* One property partition
* One producer sequence

Global ordering is not assumed.

Consumers should detect gaps or stale versions when ordering is material.

---

# Event Replay

Replay should define:

* Authorized requester
* Purpose
* Event range
* Tenant and property scope
* Contract versions
* Ordering limitations
* Deduplication expectations
* Side-effect protection
* Rate and capacity controls
* Evidence

Replay must not cause a consumer to repeat irreversible business effects without idempotent safeguards.

---

# Callback Pattern

Callbacks deliver provider-initiated results or events to a registered consumer destination.

Callback registration should validate:

* Consumer identity
* Destination ownership
* Allowed destination
* Purpose
* Event types
* Tenant and property scope
* Authentication and integrity method
* Data classification
* Expiration
* Support contact

Registration must not permit arbitrary network access or cross-tenant delivery.

---

# Callback Delivery

Each callback delivery should include:

* Callback and delivery identity
* Event or result type
* Contract version
* Producer identity
* Tenant and property scope
* Event time
* Delivery attempt
* Correlation
* Integrity protection

The provider should validate destination status before material delivery where required and should restrict redirects or destination changes according to policy.

---

# Callback Retry

Callback retry should define:

* Acknowledgement behavior
* Retryable outcomes
* Backoff
* Maximum attempts or duration
* Deduplication expectation
* Suspension threshold
* Dead-letter or retained-delivery behavior
* Consumer notification
* Recovery and replay

Repeated callback delivery must preserve the same logical delivery identity or deduplication relationship.

---

# Stream Pattern

Streaming is appropriate when consumers require continuing or high-frequency delivery and polling would be inefficient or insufficient.

A stream contract should define:

* Subscription identity
* Consumer eligibility
* Tenant and property scope
* Filter
* Item contract
* Ordering
* Backpressure
* Heartbeat
* Checkpoint
* Resumption
* Expiration
* Cancellation
* Failure behavior
* Limits
* Evidence

---

# Stream Backpressure

The stream must define behavior when the consumer cannot keep pace.

Options may include:

* Bounded buffering
* Consumer-controlled demand
* Reduced delivery
* Checkpoint and resume
* Disconnect with explicit reason
* Transition to batch recovery

Unbounded buffering is prohibited.

Backpressure must preserve tenant fairness and protect provider capacity.

---

# Stream Resumption

Resumption should use a provider-issued checkpoint or cursor bound to:

* Product and stream
* Consumer
* Tenant and property
* Filter
* Contract version
* Position or time
* Expiration

Resumption may still produce duplicates and consumers must follow the contract's deduplication rules.

---

# Polling Pattern

Polling may be appropriate for bounded status or low-frequency change when callbacks or streams are unnecessary.

Polling should define:

* Minimum and recommended interval
* Conditional query support
* Backoff
* Completion and terminal states
* Expiration
* Rate limits
* Tenant and property scope

Consumers should not poll indefinitely after a terminal or expired state.

---

# Correlation Pattern

Correlation connects one logical interaction across consumers, gateways, providers, dependencies, workflows, agents, events, callbacks, and evidence.

The architecture should distinguish:

* Request correlation
* Business transaction correlation
* Workflow execution
* Agent execution
* Event correlation
* Causation
* Idempotency identity
* Trace identity

These identifiers may relate but must not be collapsed when they serve different semantics.

---

# Correlation Trust

Consumer-supplied correlation values should be validated for format, size, classification, and safe logging.

Providers may preserve, replace, or supplement them with platform-issued identities.

Correlation identifiers must not contain secrets, credentials, personal data, tenant-confidential data, or property-restricted data.

Correlation does not grant access to related records.

---

# Causation Pattern

Causation identifies the prior command, event, workflow step, agent action, or human action that directly led to an outcome.

It supports:

* Traceability
* Duplicate detection
* Incident analysis
* Workflow reconstruction
* Agent evidence
* Governance assurance

Causation should preserve the initiating actor and must not be rewritten to hide automated or delegated action.

---

# Rate Limit Pattern

Rate limits protect providers, dependencies, consumers, tenants, properties, and shared platform capacity.

Limits may apply by:

* Consumer
* Acting principal
* Tenant
* Property
* Product
* Operation
* Risk class
* Cost class
* Time window

The contract should define:

* Scope
* Measurement window
* Limit
* Remaining allowance where safely exposed
* Reset or retry guidance
* Burst behavior
* Exception process
* Error behavior

---

# Quota Pattern

Quotas govern longer-term allocation such as:

* Requests
* Stored objects
* Export volume
* Batch items
* Stream duration
* Agent tool calls
* Cost
* Compute
* External-provider use

Quota behavior should define measurement, scope, reset, notification, hard or soft enforcement, escalation, and evidence.

Higher quota does not expand business authorization.

---

# Caching Pattern

Caching may improve latency, resilience, and cost when the contract permits it.

Cache behavior should define:

* Eligible operations and fields
* Cache key scope
* Tenant and property isolation
* Authorization relationship
* Maximum age
* Revalidation
* Invalidation
* Degraded use
* Personal-data handling
* Deletion propagation
* Observability

Authorization results and sensitive responses must not be reused outside their exact permitted scope.

---

# Cache Key Safety

Cache keys for scoped data should account for:

* Product and contract version
* Operation
* Consumer or access class where required
* Tenant
* Property
* Resource or query
* Field selection
* Locale
* Effective-time criteria

Missing tenant or property dimensions can create data leakage and are prohibited for scoped responses.

---

# Gateway Composition Pattern

A gateway or experience facade may compose multiple provider operations for a defined consumer journey.

Composition should define:

* Owning experience product
* Participating providers
* Per-provider authorization
* Tenant and property propagation
* Deadlines
* Concurrency
* Partial outcomes
* Error mapping
* Freshness
* Caching
* Correlation
* Evidence

The composition layer must not duplicate provider business rules or conceal authoritative sources.

---

# Aggregated Query Pattern

An aggregated query may combine read results when:

* The consumer journey requires one coherent view
* Ownership remains identifiable
* Consistency and freshness differences are disclosed
* Authorization is applied per source
* Partial-result behavior is explicit
* Latency and capacity remain bounded

The aggregator should not store a hidden authoritative copy merely for interface convenience.

---

# Cross-Service Command Prohibition

One API command must not imply an atomic state transition across independently owned services unless a specific architecture provides that guarantee.

Multi-service outcomes should use:

* Durable workflow orchestration
* Events and process managers
* Compensation
* Reconciliation
* Explicit partial and pending states

ARCH-015 owns durable workflow coordination.

---

# Workflow Interaction Pattern

An API may:

* Start a workflow
* Query workflow status
* Submit an authorized signal
* Complete a human task
* Cancel an eligible workflow
* Retrieve a workflow result

The contract should preserve:

* Workflow definition and version
* Execution identity
* Initiator
* Tenant and property
* Input contract
* Authority
* Idempotency
* Current state
* Completion and failure
* Evidence

The API does not own workflow state or transition rules.

---

# Agent and Tool Interaction Pattern

Agent-facing operations should define:

* Agent identity and version
* Agent execution
* Initiating actor
* Represented principal
* Goal and purpose
* Allowed operation
* Tenant and property
* Data scope
* Approval
* Idempotency
* Deadline
* Cost and rate budget
* Result-validation rules
* Evidence
* Stop conditions

An API description or SDK method must not be interpreted by an agent as permission to call the operation.

---

# AI Output Submission Pattern

When an AI system submits generated or inferred content, the contract should identify:

* Producing agent or model context
* Execution identity
* Source evidence
* Confidence where meaningful
* Human review status
* Tenant and property
* Classification
* Intended use
* Validation and approval requirements

AI-generated content must not silently become authoritative business data, approved knowledge, policy, or durable memory.

---

# Administrative API Pattern

Administrative operations require stronger controls because they may affect:

* Product configuration
* Consumer access
* Tenant settings
* Property settings
* Quotas
* Lifecycle
* Routing
* Security
* Data retention
* Support intervention

Administrative contracts should require:

* Privileged identity
* Purpose
* Least privilege
* Approval where required
* Tenant and property scope
* Change reference
* Idempotency
* Concurrency
* Audit evidence
* Rollback or remediation path

---

# Operational API Pattern

Operational interfaces may support:

* Health inspection
* Version inspection
* Traffic inspection
* Consumer-impact search
* Pause or restriction
* Retry
* Replay
* Reconciliation
* Recovery
* Cache invalidation
* Callback redelivery
* Stream termination

Operator actions must be authenticated, authorized, scoped, attributable, time bounded where appropriate, and evidenced.

Operational access must not expose unrestricted business payloads by default.

---

# Health Interaction Pattern

Health interfaces should distinguish:

* Process reachability
* Readiness to serve
* Dependency health
* Product or operation health
* Degraded state
* Tenant- or property-specific impact where safe

Public or broadly accessible health information must not expose sensitive topology, versions, tenant information, or attack-relevant detail.

---

# Degraded Operation Pattern

Degraded modes may include:

* Read-only operations
* Cached reads within explicit freshness limits
* Deferred asynchronous completion
* Restricted high-cost queries
* Smaller page or batch limits
* Disabled nonessential expansions
* Suspended callbacks or streams
* Tenant- or property-scoped isolation
* Human-assisted processing

Degraded operation must be visible to consumers when it affects contract meaning.

It must not weaken identity, authorization, tenant isolation, property isolation, validation, privacy, or evidence.

---

# Anti-Corruption Interaction Pattern

External and legacy integrations should use governed adapters that translate:

* Identity
* Tenant and property
* Resource identifiers
* Commands and queries
* Events
* Errors
* Time
* Money and quantities
* Idempotency
* Retry
* Completion

Raw provider errors, identifiers, and states should not leak into the XeniosAI contract unless deliberately standardized.

External transport success must not be treated as XeniosAI business completion without validation.

---

# Security Design Rules

Every interaction pattern should preserve:

* Strong identity
* Purpose
* Least privilege
* Tenant and property scope
* Data classification
* Input and output validation
* Replay protection
* Abuse protection
* Secret protection
* Evidence protection

Security is enforced at each trust boundary rather than delegated entirely to the API Gateway.

Detailed security architecture is defined in ARCH-017-05.

---

# Privacy Design Rules

Interaction design should minimize:

* Returned personal data
* Accepted unnecessary personal data
* Sensitive query parameters
* Persistent client-side copies
* Payload logging
* Cross-purpose reuse
* Long-lived callback payloads
* Broad exports

Search, filtering, expansion, batch, and export interfaces require particular review because they can increase data exposure rapidly.

---

# Tenant Isolation Rules

Tenant context must be:

* Established from trusted identity or policy
* Validated against the operation
* Propagated to providers and dependencies
* Applied before search and query candidate selection
* Applied to cache keys
* Applied to rate limits and quotas
* Applied to events, callbacks, streams, and batches
* Preserved in telemetry and evidence

A client-supplied tenant identifier is a claim to validate, not authority.

---

# Property Isolation Rules

Property context must be validated against:

* Tenant
* Consumer
* Acting principal
* Operation
* Resource
* Event or callback
* Workflow or agent execution

Cross-property queries and commands are prohibited by default.

When explicitly supported, per-property authorization, partial outcomes, limits, and evidence must remain visible.

---

# Observability Pattern

Every material interaction should emit privacy-safe telemetry for:

* API product
* Operation
* Contract version
* Provider
* Consumer class
* Tenant and property impact
* Correlation
* Outcome
* Error category
* Latency
* Retry
* Idempotency
* Concurrency conflict
* Quota and throttling
* Dependency behavior
* Degraded state

Payloads, credentials, secrets, and unnecessary personal information must not be recorded as ordinary telemetry.

---

# Evidence Pattern

Material interactions may require evidence of:

* Initiating actor
* Represented principal
* Consumer
* Product and operation
* Contract version
* Purpose
* Tenant and property
* Authorization decision reference
* Request digest or safe reference
* Idempotency identity
* Outcome
* Effective time
* Human approval
* Workflow or agent execution
* Error or reconciliation

Evidence must remain attributable, integrity protected, access controlled, and retention managed.

---

# Conformance Requirements

Provider and consumer tests should verify:

* Interaction classification
* Required context
* Validation
* Tenant and property isolation
* Authorization behavior
* Query consistency and pagination
* Command completion
* Idempotency
* Concurrency
* Timeout and retry
* Cancellation
* Error model
* Partial outcomes
* Event replay and deduplication
* Callback retry and integrity
* Stream backpressure and resumption
* Batch limits and item outcomes
* Degraded behavior
* Correlation and evidence

Detailed testing and conformance architecture is defined in ARCH-017-07.

---

# Pattern Decision Record

Material or unusual interaction choices should record:

* Business need
* Consumer need
* Owning capability
* Selected pattern
* Alternatives considered
* State-change behavior
* Consistency
* Idempotency
* Failure and recovery
* Tenant and property impact
* Security and privacy impact
* Operational impact
* Compatibility impact

Major architecture changes require the appropriate ADR review.

---

# Non-Negotiable Architecture Rules

1. Interaction design must begin with an owned capability and consumer outcome, not a transport or database shape.
2. Every operation must have one clear primary interaction class.
3. Queries must not request hidden business mutations.
4. Commands and actions must define authority, preconditions, idempotency, completion, errors, and evidence.
5. Acceptance, processing, completion, settlement, publication, and delivery must remain distinguishable.
6. Resource representations must not expose unnecessary persistence or provider internals.
7. Collection queries must be bounded, authorized, consistently ordered, and safely paginated.
8. Search relevance and identifier knowledge must not grant authority.
9. Tenant and property filtering must occur before unauthorized candidates enter query or search results.
10. Partial updates must distinguish absent, unchanged, cleared, empty, null, and default behavior.
11. Material state changes must define idempotency and concurrency semantics.
12. A timeout does not prove that a business operation failed.
13. Automatic retry is permitted only for eligible errors and idempotent or idempotency-protected operations.
14. Cancellation does not imply compensation or reversal.
15. Errors must be structured, stable, safe, correlated, and actionable.
16. Batch processing must preserve per-item authority, isolation, validation, and outcomes.
17. Event, callback, and stream consumers must tolerate the documented duplicate, delay, ordering, replay, and resumption behavior.
18. Universal exactly-once physical delivery must not be claimed.
19. Gateway composition must preserve provider ownership, authority, freshness, errors, completion, and evidence.
20. Cross-service durable processes must use workflow, event, compensation, and reconciliation patterns rather than implied distributed atomicity.
21. SDKs must not invent retry, idempotency, or completion semantics absent from the contract.
22. Degraded operation must not weaken security, privacy, tenant isolation, property isolation, or evidence.
23. AI agents receive no authority merely from discovering an API or tool description.
24. All patterns must remain transport, framework, language, cloud, and vendor neutral.

---

# Relationship to Other ARCH-017 Chapters

## ARCH-017-01 — API & SDK Overview

Establishes the architecture position, capability landscape, trust model, and quality attributes used here.

## ARCH-017-02 — API Product and Contract Model

Defines the product, contract, operation, message, field, ownership, registry, and authority models realized by these patterns.

## ARCH-017-04 — API Lifecycle, Versioning, and Compatibility

Defines how interaction patterns and their semantics change, coexist, migrate, deprecate, and retire.

## ARCH-017-05 — API Security, Access, and Isolation

Defines detailed enforcement for identities, delegation, authorization, tenant, property, data, abuse, and privileged operations.

## ARCH-017-06 — SDK Architecture and Distribution

Defines how SDKs represent these patterns without hiding errors, uncertainty, completion, or control semantics.

## ARCH-017-07 — Developer Experience, Testing, and Conformance

Defines how providers and consumers learn, test, simulate, and verify these patterns.

## ARCH-017-08 — API & SDK Governance and Assurance

Defines decision rights, policies, reviews, exceptions, assurance, and evidence for interaction design.

## ARCH-017-09 — API & SDK Operations, Observability, and Performance

Defines runtime measurement, reliability, capacity, intervention, recovery, and support for these interactions.

## ARCH-017-10 — Future API & SDK Evolution

Defines controlled evolution of interaction capabilities without making future technologies architectural mandates.

---

# Expected Outcomes

These design and interaction patterns enable XeniosAI to provide:

* Clear and consistent business-capability interfaces
* Predictable query and collection behavior
* Safe commands and actions
* Explicit asynchronous completion
* Reliable idempotency and concurrency control
* Structured errors and recovery guidance
* Replay-aware events
* Secure callbacks
* Bounded streams
* Safe batch processing
* End-to-end tenant and property isolation
* Controlled gateway composition
* Governed workflow and agent interaction
* Observable and recoverable failures
* Transport-neutral interoperability

---

# Summary

The API Design and Interaction Patterns define how XeniosAI consumers request information, initiate state changes, observe asynchronous work, receive events and callbacks, consume streams, and process batches through explicit enterprise contracts.

Queries remain read-oriented and bounded. Commands and actions express owned intent with explicit authority, idempotency, concurrency, completion, and failure. Events describe facts, callbacks deliver provider-initiated notifications, streams provide controlled continuing delivery, and batches preserve per-item controls and outcomes.

By distinguishing acceptance from completion, timeout from failure, cancellation from compensation, delivery from business outcome, and reachability from authority, XeniosAI avoids ambiguous integration behavior.

These patterns allow interfaces to scale across services, tenants, properties, workflows, AI agents, partners, and extensions while preserving domain ownership, isolation, reliability, evidence, and technology independence.
