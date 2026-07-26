# ARCH-015 · Chapter 04 — Tasks, Activities, and Workers

**Architecture Domain:** Workflow and Process Architecture

**Document ID:** ARCH-015-04

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-27

**Parent Document:** ARCH-015 — Workflow Engine

---

# Purpose

This document defines the task, activity, queue, and worker architecture for the XeniosAI Workflow Engine.

It establishes how the platform:

* Represents logical workflow work
* Creates activity attempts
* Records durable dispatch intent
* Routes work through queues
* Identifies and authorizes workers
* Matches worker capabilities
* Leases activities
* Uses visibility and heartbeats
* Handles worker completion and failure
* Validates activity results
* Prevents duplicate business effects
* Applies retry and dead-letter behavior
* Enforces tenant and property routing
* Applies priority, fairness, and backpressure
* Scales worker pools independently
* Drains and upgrades workers safely
* Observes and operates asynchronous work

Tasks and activities are the controlled boundary between durable workflow state and replaceable execution capacity.

---

# Core Boundary

The architecture distinguishes three concepts.

## Task

A task is a durable logical unit of work required by a workflow.

The Workflow Engine owns task identity, eligibility, state, completion criteria, and relationship to workflow progress.

## Activity Attempt

An activity attempt is one bounded execution attempt for a task.

Multiple attempts may exist for one task because of retry, timeout, worker failure, or controlled reprocessing.

## Worker

A worker is an authenticated runtime participant that may execute eligible activity types within explicit capability, tenant, property, environment, data, and authority limits.

Workers are replaceable.

They do not own authoritative workflow or task state.

---

# Architectural Principle

Durable intent precedes execution.

The Workflow Runtime must commit task eligibility and dispatch intent before work is offered to a worker.

A worker may:

* Accept a leased activity
* Validate the activity contract
* Perform bounded work
* Report progress where permitted
* Return a result or normalized failure
* Respond to cancellation

A worker must not:

* Create arbitrary workflow transitions
* Change task completion criteria
* Modify authoritative workflow state directly
* Infer tenant or property scope
* Broaden its authority
* Convert queue acknowledgement into business completion
* Invent retries
* Invent compensation
* Treat lost response as proof that an external action failed

---

# Architecture Goals

The task and worker architecture should:

* Preserve durable task identity
* Separate logical work from execution attempts
* Distribute work through queue-driven coordination
* Support thousands of concurrent workflows
* Allow independent worker scaling
* Authenticate every worker
* Enforce least privilege
* Preserve tenant and property isolation
* Make duplicate delivery harmless
* Bound execution time and resource use
* Recover after worker loss
* Protect participating services from overload
* Provide fair and priority-aware scheduling
* Support property-local and external execution
* Produce attributable evidence
* Remain vendor and technology neutral

---

# Non-Goals

This architecture does not:

* Make workers the workflow state authority
* Require one universal queue
* Require one worker implementation language
* Require one deployment topology
* Guarantee exactly-once physical execution
* Replace domain-service idempotency
* Define human-task user experience
* Define agent reasoning
* Define workflow state-transition storage
* Select a queue, broker, scheduler, or compute provider

---

# Responsibility Model

## Workflow Runtime

The Workflow Runtime owns:

* Task creation
* Task identity
* Task state
* Eligibility
* Attempt creation
* Dispatch intent
* Result acceptance
* Task completion
* Retry coordination
* Cancellation coordination
* Workflow transition after task outcome

## Queue and Dispatch Layer

The queue and dispatch layer owns:

* Durable delivery
* Routing
* Availability
* Visibility
* Redelivery
* Backpressure signals
* Queue telemetry

It does not own workflow meaning.

## Worker

The worker owns:

* Activity-attempt execution
* Local input validation
* Bounded processing
* Heartbeats where required
* Safe cancellation handling
* Result construction
* Attempt telemetry
* Cleanup of local resources

## Domain Service

The domain service owns:

* Business rules
* Business validation
* Authoritative business state
* Domain transaction
* Domain idempotency
* Reconciliation
* Compensation semantics

---

# Task Identity

Each task should have a stable identity within its workflow execution.

Task identity should distinguish:

* Task type
* Task instance
* Workflow execution
* Definition version
* Branch or loop instance
* Parent task where applicable
* Tenant
* Property

Repeated loop iterations must create distinct task instances.

Retry must not create a new logical task unless the definition explicitly creates new work.

Task identifiers must not be reused.

---

# Activity-Attempt Identity

Every activity attempt should have a unique identity.

Attempt identity should connect:

* Logical task
* Attempt number
* Dispatch identity
* Queue delivery
* Worker
* Lease
* Input-contract version
* Result-contract version
* Idempotency identity
* Start time
* End time

A redelivered message may correspond to the same attempt or a new attempt according to the dispatch protocol.

The logical task identity must remain stable.

---

# Worker Identity

Worker identity should distinguish:

* Logical worker type
* Worker implementation version
* Worker deployment
* Worker process or instance
* Workload identity
* Worker pool
* Environment
* Region
* Tenant eligibility
* Property eligibility

A display name, hostname, queue subscription, or network address is not sufficient worker identity.

Workers must authenticate through approved workload identity.

---

# Task Definition Reference

The task instance must reference the task-type definition from the effective workflow version.

The definition provides:

* Purpose
* Input contract
* Output contract
* Eligible performer type
* Required capability
* Required authority
* Tenant and property behavior
* Idempotency
* Attempt timeout
* Task deadline
* Retry policy
* Cancellation behavior
* Evidence
* Completion criteria

The worker must not receive an unversioned task contract.

---

# Task Record

The authoritative task record should contain:

* Task identity
* Task-type identity
* Workflow execution
* Definition version
* Branch or loop
* Tenant
* Property
* Input reference
* Output reference
* Current state
* State version
* Eligibility time
* Deadline
* Priority
* Required capability
* Required authority
* Attempt count
* Active attempt
* Retry state
* Cancellation state
* Completion evidence
* Failure classification
* Creation time
* Last update time

The Workflow Engine is authoritative for this record.

---

# Task State Model

A task may use the following states:

* Not Created
* Blocked
* Ready
* Dispatching
* Dispatched
* Running
* Waiting
* Completing
* Completed
* Retry Scheduled
* Failed
* Cancelling
* Cancelled
* Expired

The exact state set may vary by implementation, but the architecture must distinguish:

* Logical readiness
* Dispatch state
* Active attempt
* Validated completion
* Retry eligibility
* Terminal outcome

---

# Task State Invariants

Task handling must preserve:

* A task belongs to one workflow execution.
* A task is governed by one effective definition version.
* A task is tenant and property scoped.
* Task state versions advance monotonically.
* Only Ready tasks may become newly dispatchable.
* Only one active exclusive attempt exists unless the definition permits hedging or quorum execution.
* A completed task cannot complete again.
* A cancelled task cannot become Ready through ordinary retry.
* Attempt failure does not automatically equal task failure.
* Queue acknowledgement does not equal task completion.
* Worker result does not equal task completion until accepted and validated.

Invariant violation must stop unsafe processing and produce an operational signal.

---

# Task Creation

A task is created by a committed Workflow Runtime transition.

Creation should atomically establish:

* Task identity
* Task type
* Definition version
* Workflow relationship
* Branch or loop relationship
* Tenant and property
* Input reference
* Required capability
* Authority
* Priority
* Deadline
* Retry policy
* Cancellation policy
* Completion contract
* History

Task creation must occur before dispatch intent.

---

# Task Dependencies

A task may depend on:

* Prior task completion
* Branch state
* Required event
* Timer
* Human decision
* Agent result
* Child workflow
* Service condition
* Policy decision

Dependency state should be explicit and deterministic.

The worker must not decide that a blocked task is ready.

The Workflow Runtime revalidates dependencies before changing the task to Ready.

---

# Task Eligibility

A task is eligible when:

* Its workflow execution permits progress.
* The task exists in the effective definition.
* Required dependencies are satisfied.
* Required authority remains valid.
* Tenant and property scope remain valid.
* No applicable suspension blocks execution.
* No cancellation intent blocks new work.
* Deadline permits execution.
* Retry delay has passed.
* Required capability is available or dispatchable.
* Runtime limits permit work.

Eligibility is authoritative only after a task-state transition commits.

Scheduler observation alone is not eligibility.

---

# Task Priority

Priority may reflect:

* Business criticality
* Guest impact
* Operational urgency
* Deadline proximity
* Incident severity
* Workflow class
* Tenant service commitment
* Property need
* Age

Priority must not:

* Bypass authority
* Bypass tenant isolation
* Bypass policy
* Starve lower-priority work indefinitely
* Allow one tenant to consume unbounded shared capacity

Priority changes must be authorized, attributable, and observable.

---

# Task Deadline

A task deadline should distinguish:

* Earliest execution time
* Dispatch deadline
* Attempt timeout
* Overall task deadline
* Workflow deadline

Expiration behavior may:

* Skip
* Fail
* Escalate
* Branch
* Cancel
* Reconcile
* Compensate

The worker must not extend a task deadline independently.

---

# Task Input

Task input should be:

* Contract versioned
* Validated
* Minimal
* Purpose limited
* Tenant scoped
* Property scoped
* Classified
* Integrity protected
* Size bounded
* Reference based where practical

Task input must not include:

* Unnecessary workflow history
* Unrelated tenant data
* Broad credentials
* Secrets not required by the activity
* Direct access instructions for another service's database
* Mutable contract references

---

# Task Output

Task output should define:

* Result contract
* Completion status
* Domain-result references
* Provider references
* Evidence references
* Error classification
* Uncertainty where applicable
* Tenant and property
* Integrity
* Size limits

Large outputs should be stored in an owning service or approved object store and returned by reference where practical.

A worker should not duplicate authoritative business objects into workflow state.

---

# Activity Attempt

An activity attempt is created when the Workflow Engine decides to execute or reexecute an eligible task.

The attempt should bind:

* Attempt identity
* Logical task
* Attempt number
* Task-state version
* Definition version
* Input-contract version
* Result-contract version
* Tenant and property
* Required worker capability
* Required worker version range
* Environment
* Idempotency identity
* Attempt timeout
* Lease policy
* Cancellation token
* Evidence requirements

---

# Activity-Attempt State Model

An activity attempt may use:

* Created
* Published
* Available
* Leased
* Started
* Running
* Reporting
* Completed
* Failed
* Timed Out
* Lease Lost
* Cancelled
* Abandoned
* Quarantined

Attempt state is distinct from task state.

One failed attempt may lead to:

* Safe retry
* Reconciliation
* Human intervention
* Task failure
* Workflow branch

---

# Attempt Number

Attempt number should:

* Begin from a defined value
* Increase monotonically for a logical task
* Remain stable for the attempt
* Be included in evidence
* Be included in retry limits

Attempt number alone is not an idempotency key.

The same logical external action should retain a stable operation identity across transport retries where the domain contract requires effectively-once behavior.

---

# Durable Dispatch Intent

Before an activity becomes visible to a worker, the Workflow Engine should durably record:

* Task
* Attempt
* Dispatch identity
* Queue route
* Required capability
* Tenant and property
* Priority
* Earliest delivery
* Deadline
* Input reference
* Idempotency identity
* Cancellation token
* Publication state

Dispatch intent must be recoverable independently of queue state.

---

# Dispatch Lifecycle

The logical dispatch lifecycle is:

1. Task becomes Ready.
2. Runtime creates an activity attempt.
3. Runtime commits dispatch intent.
4. Dispatcher publishes the attempt.
5. Queue makes the attempt available.
6. An eligible worker acquires a lease.
7. Worker validates the envelope.
8. Worker begins execution.
9. Worker returns result or failure.
10. Runtime validates and commits the outcome.
11. Queue delivery is completed or allowed to redeliver.

Steps may repeat because of failure.

Stable identities and state-version checks keep repetition safe.

---

# Queue Role

The queue provides asynchronous delivery and load decoupling.

It may provide:

* Durable messages
* Routing
* Priority
* Delayed availability
* Visibility timeout
* Redelivery
* Consumer groups
* Partitioning
* Backpressure metrics
* Dead-letter routing

The queue is not authoritative for:

* Workflow state
* Task completion
* Business outcome
* Retry policy
* Tenant authority
* Compensation

---

# Queue Topology

Queue topology may be organized by:

* Activity type
* Capability
* Environment
* Region
* Tenant class
* Dedicated tenant
* Property locality
* Priority
* Data classification
* Risk
* External provider

Topology should balance:

* Isolation
* Scale
* Fairness
* Operational complexity
* Ordering
* Cost
* Recovery

This architecture does not mandate one queue per workflow, tenant, property, or task type.

---

# Queue Routing

Routing should use trusted metadata including:

* Activity type
* Required capability
* Worker-version compatibility
* Environment
* Region
* Tenant
* Property
* Data classification
* Priority
* Locality
* Provider
* Operational status

Routing must not rely solely on worker-supplied claims.

The dispatcher should resolve routing from the authoritative task and worker registries.

---

# Queue Message Envelope

An activity message should contain or reference:

* Message identity
* Dispatch identity
* Activity-attempt identity
* Task identity
* Workflow execution
* Definition version
* Task-type version
* Expected task-state version
* Tenant
* Property
* Required capability
* Input reference
* Result contract
* Idempotency identity
* Attempt timeout
* Lease policy
* Deadline
* Priority
* Correlation
* Trace context
* Integrity metadata

The envelope should contain the minimum information required for safe execution.

Possession of the envelope is not sufficient authorization.

---

# Message Validation

Before execution, the worker should validate:

* Message integrity
* Contract version
* Activity type
* Worker capability
* Worker-version compatibility
* Environment
* Tenant eligibility
* Property eligibility
* Deadline
* Lease validity
* Cancellation state where available
* Input accessibility
* Required authority

Invalid messages should be rejected or quarantined without performing the activity.

---

# Pull and Push Delivery

The architecture may support:

## Pull Delivery

Workers request available activities from eligible queues.

## Push Delivery

The dispatch layer delivers an activity to a registered worker endpoint.

## Coordinated Assignment

A scheduler assigns an activity to a worker through a durable assignment record.

All models must preserve:

* Worker authentication
* Capability validation
* Lease semantics
* Idempotency
* Redelivery
* Backpressure
* Result validation
* Tenant and property isolation

---

# Delivery Acknowledgement

Delivery acknowledgement means the queue or dispatcher may stop offering that delivery.

It does not mean:

* The activity started
* The activity completed
* The task completed
* The business action completed
* The workflow advanced

Acknowledgement timing should be selected with visibility, redelivery, and result-durability behavior in mind.

---

# Worker Registry

The Worker Registry should record:

* Worker-type identity
* Implementation version
* Owner
* Operational owner
* Supported activity types
* Input and result contract versions
* Environment eligibility
* Region
* Tenant model
* Property model
* Data classifications
* Required credentials
* Resource profile
* Concurrency limits
* Timeout limits
* Health contract
* Cancellation support
* Heartbeat support
* Lifecycle state
* Security posture
* Service commitments
* Documentation

Registry availability does not grant task authority.

---

# Worker Lifecycle

Worker implementations should progress through:

* Proposed
* Developed
* Validated
* Approved
* Registered
* Released
* Active
* Suspended
* Deprecated
* Retired

Worker release should be independent of workflow-definition activation.

Compatibility must be verified before a workflow version routes tasks to a worker version.

---

# Worker Capability

A worker capability should identify:

* Activity type
* Contract versions
* Environment
* Region
* Data classification
* Tenant eligibility
* Property eligibility
* External-provider support
* Resource requirements
* Side-effect class
* Cancellation behavior
* Service commitment

Capabilities should be declared and registered.

They must not be inferred solely from a worker claiming that it can process a message.

---

# Capability Matching

Matching should evaluate:

* Required activity type
* Input-contract version
* Result-contract version
* Worker implementation version
* Lifecycle state
* Environment
* Tenant and property
* Region and locality
* Data classification
* Authority
* Resource requirements
* Operational health
* Capacity

No eligible worker should cause the task to remain safely queued or deferred.

The runtime must not silently route to an incompatible activity type.

---

# Worker Authentication

Every worker must authenticate using approved workload identity.

Authentication should establish:

* Worker deployment
* Worker instance
* Worker type
* Implementation version
* Environment
* Region
* Organization or service owner
* Credential validity

Shared static credentials across unrelated worker pools should be avoided.

Compromised identity must support rapid revocation.

---

# Worker Authorization

Authorization should determine whether a worker may:

* Consume an activity type
* Access a task input
* Act in an environment
* Act for a tenant
* Act for a property
* Invoke a target service
* Use a credential
* Return a result
* Report progress
* Request lease extension

Authorization must be checked at acquisition and, for sensitive actions, at execution boundaries.

Queue access alone is not authorization.

---

# Least Privilege

A worker should receive only:

* The task context it requires
* The data references it requires
* The service operations it requires
* The tenant and property scope it requires
* The credential duration it requires
* The network access it requires
* The resource budget it requires

Workers must not receive broad platform credentials or cross-tenant access for operational convenience.

---

# Credential Mediation

Workers should obtain task-scoped credentials through approved identity and secret mechanisms.

Credential mediation should bind:

* Worker identity
* Activity attempt
* Task
* Target service
* Allowed operation
* Tenant
* Property
* Environment
* Validity period
* Resource scope

Credentials should be short lived where practical.

Credentials must not be embedded in queue messages, workflow definitions, logs, or result payloads.

---

# Worker Environment

A worker executes in an environment appropriate to the activity's:

* Risk
* Data classification
* Resource needs
* Network needs
* Tenant scope
* Property locality
* External-provider dependency

Environment controls may include:

* Process isolation
* Container or workload isolation
* Sandboxed compute
* Filesystem restrictions
* Network restrictions
* Secret isolation
* Resource limits
* Tenant isolation
* Cleanup
* Telemetry

This architecture does not mandate a specific runtime technology.

---

# Stateless Worker Principle

Workers should remain stateless between activity attempts where practical.

Persistent state required for:

* Workflow progress
* Task status
* Attempt status
* Business outcome
* Retry coordination
* Cancellation
* Compensation

must reside in the owning durable system.

Temporary local state may support one attempt but must not be required for recovery after worker loss.

---

# Worker Startup

Worker startup should:

1. Establish workload identity.
2. Load approved configuration.
3. Verify implementation version.
4. Register or confirm capabilities.
5. Verify environment.
6. Verify tenant and property eligibility.
7. Verify dependency access.
8. Verify credential mediation.
9. Expose health and readiness.
10. Begin consumption only after readiness succeeds.

Startup failure must not cause the worker to consume tasks it cannot complete safely.

---

# Worker Readiness

Readiness should consider:

* Identity valid
* Configuration valid
* Contract versions supported
* Required dependencies available
* Credential path available
* Input and result storage available
* Cancellation channel available where required
* Resource capacity available
* No suspension applies

A worker may remain alive but not ready.

Unready workers should not acquire new activity leases.

---

# Health Model

Worker health may distinguish:

* Process liveness
* Consumption readiness
* Dependency health
* Capability health
* Queue connectivity
* Result-publication health
* Credential health
* Cancellation-channel health
* Resource pressure

Health endpoints and telemetry must not expose secrets, task payloads, or other tenants.

---

# Worker Acquisition

Before acquiring an activity, the worker or dispatcher should verify:

* Worker is active
* Worker is ready
* Capability matches
* Contract versions match
* Tenant and property are eligible
* Environment and region are valid
* Concurrency capacity exists
* No suspension applies
* Activity is not expired

Acquisition should create or confirm a lease before execution.

---

# Lease Model

A lease grants temporary authority to execute one activity attempt.

A lease should contain:

* Lease identity
* Activity-attempt identity
* Worker identity
* Worker instance
* Tenant and property
* Acquisition time
* Expiration
* Renewal policy
* Fencing token
* Cancellation token
* Maximum duration

The lease does not transfer ownership of the task or workflow.

---

# Lease Invariants

Lease handling must preserve:

* A lease has one current holder.
* A lease has a bounded lifetime.
* Lease renewal requires active worker identity.
* Expired leases cannot authorize result acceptance automatically.
* Fencing prevents stale holders from overriding newer attempts.
* Lease loss does not prove the external action failed.
* Lease ownership does not equal task completion.

---

# Visibility Timeout

Visibility timeout prevents ordinary redelivery while a worker holds an active delivery.

It should be:

* Long enough for expected progress
* Short enough for recovery after worker loss
* Renewable through validated heartbeat where required
* Bounded by task and workflow deadlines
* Observable

Visibility timeout expiration may trigger redelivery.

It must not alone create a new business operation identity.

---

# Heartbeats

Long-running activity attempts may send heartbeats.

A heartbeat should identify:

* Activity attempt
* Lease
* Worker
* Fencing token
* Time
* Progress marker where permitted
* Cancellation observation
* Health state

Heartbeats may:

* Extend visibility
* Confirm worker liveness
* Report bounded progress
* Observe cancellation

Heartbeats must not:

* Change task completion criteria
* Extend the overall task deadline without authority
* Commit workflow transitions
* Contain unnecessary sensitive payloads

---

# Heartbeat Failure

Missing heartbeat may indicate:

* Worker failure
* Network partition
* Queue failure
* Telemetry failure
* Slow processing
* Runtime overload

The system should not assume the external action failed.

After lease expiry, recovery should inspect:

* Attempt state
* Side-effect intent
* Provider reference
* Idempotency identity
* Authoritative domain state
* Cancellation state

before retry.

---

# Fencing

Each lease or assignment should use a monotonic fencing token or equivalent stale-holder control where concurrent attempts could conflict.

The result-acceptance path should reject a stale token unless an explicit late-result reconciliation path applies.

Target services may also use operation identity and expected business version to reject stale or duplicate actions.

---

# Worker Execution

After acquiring a valid lease, a worker should:

1. Validate the activity envelope.
2. Load task input through authorized access.
3. Revalidate cancellation and deadline.
4. Acquire task-scoped credentials.
5. Establish idempotency identity.
6. Execute the bounded activity.
7. Capture provider and business references.
8. Validate the result contract.
9. Report result or normalized failure.
10. Release local resources and credentials.

The worker should not perform unrelated work within the activity.

---

# External Service Invocation

When an activity invokes a business or platform service, it should provide:

* Worker identity
* Workflow execution
* Task identity
* Operation identity
* Tenant
* Property
* Required authority
* Contract version
* Idempotency key
* Correlation
* Trace context

The target service must independently authenticate and authorize the operation.

The service remains authoritative for the business outcome.

---

# Local Validation

The worker should validate:

* Input schema
* Required fields
* Reference accessibility
* Tenant and property consistency
* Deadline
* Supported contract version
* Environment
* Resource limits

Local validation supplements but does not replace runtime or target-service validation.

Invalid input should produce a normalized non-retryable result unless the definition provides a correction path.

---

# Progress Reporting

Progress reporting may include:

* Started
* Stage
* Percentage where meaningful
* Items processed
* Last safe checkpoint
* Estimated completion where reliable
* Warning

Progress must be:

* Contract defined
* Rate limited
* Non-authoritative for completion
* Tenant scoped
* Privacy safe
* Observable

False precision should be avoided.

---

# Activity Result

A successful activity result should include:

* Result identity
* Activity attempt
* Task
* Worker identity
* Worker version
* Lease or fencing token
* Result-contract version
* Tenant and property
* Completion time
* Output or reference
* Provider reference
* Business-result reference
* Idempotency identity
* Evidence

The result must be integrity protected in transit.

---

# Result Submission

Result submission should:

1. Authenticate the worker.
2. Verify worker authorization.
3. Validate activity and task identity.
4. Validate tenant and property.
5. Validate result contract.
6. Validate lease or late-result policy.
7. Validate expected task-state version.
8. Detect duplicate result.
9. Validate business references where required.
10. Commit attempt outcome.
11. Evaluate task completion.
12. Trigger the Workflow Runtime transition.

Submission acknowledgement does not replace the committed task outcome.

---

# Result Acceptance

The Workflow Engine may accept a result only when:

* The task exists.
* The attempt is recognized.
* The worker is authenticated.
* The worker was eligible.
* Tenant and property match.
* Contract version is supported.
* Result is valid.
* Result identity is not already applied.
* Task is in an eligible state.
* Fencing or late-result rules permit acceptance.
* Required business evidence exists.
* Cancellation and completion races are resolved.

---

# Task Completion

A task enters Completed only after:

* A valid result is accepted.
* Completion criteria are satisfied.
* Required business outcome is verified.
* Required evidence exists.
* The task-state transition commits.

The runtime may reject a worker's success assertion when:

* Business state is not authoritative
* Output contract is invalid
* Result is stale
* Result is duplicated
* Lease is fenced
* Task was cancelled
* Required reconciliation is incomplete

---

# Worker Failure Result

A worker failure result should include:

* Failure identity
* Activity attempt
* Worker identity
* Failure category
* Retry guidance
* Provider reference
* Side-effect certainty
* Partial-result reference
* Cancellation observation
* Evidence

The worker may classify observed failure.

The Workflow Engine applies the effective retry and workflow policy.

---

# Failure Taxonomy

Normalized activity failures may include:

* Invalid Activity
* Unsupported Contract
* Not Authorized
* Invalid Tenant
* Invalid Property
* Invalid Input
* Dependency Unavailable
* Rate Limited
* Quota Exhausted
* Resource Exhausted
* Timeout
* Cancelled
* Worker Failure
* Provider Failure
* Result Uncertain
* Validation Failed
* Conflict
* Policy Denied
* Security Violation

Provider-specific detail may be retained where safe and useful.

---

# Retry Boundary

The worker must not autonomously retry a complete activity attempt unless the task contract explicitly permits a bounded internal transport retry.

The Workflow Engine owns attempt-level retry coordination.

This distinction preserves:

* Attempt evidence
* Retry limits
* Backoff
* Idempotency
* Cancellation
* Deadline
* Reconciliation
* Operational visibility

Internal retries must still remain within the same operation identity and attempt deadline.

---

# Retry Eligibility

Before a new attempt, the Workflow Engine should verify:

* Task is not terminal.
* Workflow permits progress.
* No cancellation or suspension blocks work.
* Error is retryable.
* Attempt limit remains.
* Deadline permits another attempt.
* Backoff has elapsed.
* Idempotency contract is valid.
* Uncertain side effects are reconciled.
* Tenant and property remain valid.
* Worker capability remains available.

Detailed retry policy is defined in ARCH-015-06.

---

# Late Result

A result may arrive after:

* Lease expiration
* Redelivery
* New attempt start
* Task timeout
* Cancellation
* Task completion
* Workflow termination

Late-result behavior may:

* Accept if still authoritative and no conflict exists
* Treat as duplicate
* Reject
* Quarantine
* Trigger reconciliation
* Record as evidence without changing state

Late results must not reopen a terminal task or workflow.

---

# Duplicate Execution

Duplicate activity execution may occur because:

* Queue redelivery
* Lost acknowledgement
* Lease expiry
* Worker restart
* Dispatcher retry
* Regional recovery

Safety requires:

* Stable activity and operation identities
* Worker-side duplicate awareness
* Target-service idempotency
* Runtime result deduplication
* Expected state versions
* Reconciliation

Duplicate physical execution must not create duplicate logical business outcomes.

---

# Exactly-Once Boundary

The architecture does not guarantee universal exactly-once physical activity execution.

Effectively-once business outcomes should use:

* Stable operation identity
* Idempotency key
* Deduplication
* Conditional business updates
* Unique domain constraints
* Transactional publication where appropriate
* Result validation
* Reconciliation
* Compensation

The owning domain service is the final authority for whether a material business action occurred.

---

# Cancellation Delivery

Cancellation may be communicated through:

* Cancellation token state
* Control message
* Lease response
* Heartbeat response
* Worker polling
* Target-service cancellation contract

Workers should check cancellation:

* Before starting
* Before material side effects
* At safe checkpoints
* During long processing
* Before result submission

Cancellation support must be declared in the worker contract.

---

# Cooperative Cancellation

On cancellation, a worker should:

* Stop starting new subwork
* Reach a safe boundary
* Preserve partial references
* Avoid discarding evidence
* Reconcile material effects
* Release task-scoped credentials
* Return a normalized cancellation outcome

Some actions cannot be interrupted after commitment.

The worker must report that reality rather than claim rollback.

---

# Forced Termination

Forced termination may be required for:

* Security incident
* Worker compromise
* Resource runaway
* Policy violation
* Environment failure
* Emergency operation

Forced termination must:

* Revoke or fence the worker
* Preserve task and attempt records
* Mark outcome uncertain where necessary
* Trigger reconciliation
* Prevent stale result acceptance
* Produce evidence

Process termination alone does not prove the external action stopped.

---

# Dead-Letter Principle

Dead-letter handling isolates messages that cannot be processed safely through ordinary delivery.

A dead-letter record is not:

* Task failure
* Workflow failure
* Business rejection
* Compensation
* Evidence that the action did not occur

The Workflow Engine must reconcile the dead-letter message with authoritative task and attempt state.

---

# Dead-Letter Causes

An activity message may be dead-lettered because of:

* Delivery-attempt exhaustion
* Invalid envelope
* Unsupported contract
* Unknown activity type
* No eligible worker
* Repeated worker rejection
* Expired deadline
* Poison payload
* Tenant or property mismatch
* Security validation failure
* Routing failure

Dead-letter policy should distinguish operational defects from valid business failure.

---

# Dead-Letter Record

A dead-letter record should include:

* Message identity
* Dispatch identity
* Activity attempt
* Task
* Workflow execution
* Tenant and property
* Queue
* Reason
* Delivery count
* First delivery
* Last delivery
* Contract version
* Payload reference
* Security classification
* Evidence

Payload access must remain restricted.

---

# Dead-Letter Recovery

Recovery should:

1. Authenticate the operator or automation.
2. Load authoritative task state.
3. Verify tenant and property.
4. Determine whether the message is stale.
5. Determine whether the task already completed.
6. Reconcile uncertain side effects.
7. Correct routing or contract issues.
8. Create a controlled new attempt or republish the same dispatch as appropriate.
9. Record evidence.

Blind queue replay is prohibited for material actions.

---

# Quarantine

Quarantine isolates messages or results that may present:

* Security risk
* Cross-tenant risk
* Integrity failure
* Unknown contract
* Malformed content
* Suspicious worker identity
* Sensitive-data violation
* Replay anomaly

Quarantined content must not be delivered to ordinary workers.

Release from quarantine requires explicit authority and evidence.

---

# Poison Work Detection

The platform should detect work that repeatedly:

* Crashes workers
* Exhausts resources
* Violates contracts
* Produces invalid results
* Triggers security controls
* Causes deterministic dependency failure

Poison work should be isolated before it destabilizes the worker pool.

The owning workflow must receive a controlled failure or intervention state.

---

# Backpressure

Backpressure prevents queued demand from overwhelming:

* Worker pools
* State storage
* Target services
* External providers
* Property-local systems
* Tenant capacity
* Operational teams

Backpressure signals may include:

* Queue depth
* Oldest-message age
* Worker utilization
* Lease delay
* Failure rate
* Rate limiting
* Dependency latency
* Provider quota
* State-store pressure

---

# Backpressure Actions

The platform may:

* Reduce dispatch
* Defer low-priority work
* Scale eligible workers
* Apply tenant quotas
* Apply provider limits
* Use circuit breaking
* Route to an approved alternative
* Reject or defer new workflow starts
* Escalate operationally

Backpressure must not discard accepted durable work silently.

---

# Rate Limiting

Rate limits may apply by:

* Activity type
* Worker pool
* Target service
* External provider
* Tenant
* Property
* Region
* Workflow class
* Credential

Rate limits should distinguish:

* Admission rate
* Dispatch rate
* Concurrent attempts
* Result rate
* External-action rate

Rate limiting should produce an explicit retry, defer, or failure result.

---

# Circuit Breaking

Circuit breaking may protect a failing dependency.

A circuit state should consider:

* Failure class
* Failure rate
* Time window
* Tenant and property scope
* Target service
* Activity type
* Recovery probe
* Reset behavior

Circuit-open behavior may:

* Delay dispatch
* Fail fast with retryable status
* Route to an approved alternative
* Trigger fallback workflow path

It must not route to an unauthorized capability.

---

# Bulkheads

Worker pools and queues should isolate failure by:

* Activity type
* Risk
* Tenant class
* Dedicated tenant
* Property locality
* External provider
* Region
* Resource profile

Bulkheads should prevent one workload from exhausting all execution capacity.

Isolation design must balance operational complexity and fairness.

---

# Fairness

Shared worker capacity should provide fairness across:

* Tenants
* Properties
* Workflow classes
* Priority levels
* Task age

Fairness may use:

* Weighted queues
* Quotas
* Reserved capacity
* Age-based priority
* Concurrency limits
* Deficit scheduling

Fairness rules must be explicit and observable.

Critical priority should not create permanent starvation.

---

# Tenant and Property Routing

Every activity must preserve tenant and property scope through:

* Task creation
* Dispatch intent
* Queue route
* Worker matching
* Credential mediation
* Service invocation
* Result submission
* Telemetry
* Evidence

Tenant and property must come from trusted authoritative task state.

Workers must not select or replace tenant scope from payload content.

---

# Dedicated Worker Pools

Dedicated pools may be required for:

* High-isolation tenants
* Sensitive data
* Regulated workloads
* Property-local capabilities
* Custom integrations
* Specialized hardware
* Regional residency
* Critical operations

Dedicated pools still follow the same identity, contract, lease, result, evidence, and lifecycle rules.

---

# Property-Local Workers

Property-local workers may interact with:

* Local devices
* Access systems
* Property networks
* On-site software
* Manual procedures

They should account for:

* Intermittent connectivity
* Local identity
* Property authorization
* Physical safety
* Local queueing
* Clock differences
* Offline operation
* Reconciliation
* Manual fallback
* Local support

Local execution must not create cross-property access.

---

# Intermittent Connectivity

When connectivity is intermittent:

* Dispatch may be delayed.
* Local work may use bounded durable buffering.
* Leases may require locality-aware duration.
* Results may arrive late.
* Cancellation may be delayed.
* Provider outcomes may require reconciliation.

The definition must state which activities may continue offline.

Offline authority, data scope, and maximum duration must be bounded.

---

# Human and Agent Performers

Human tasks and agent tasks are logical task types but use specialized assignment and execution architecture.

Human performers require:

* Human identity
* Role
* Assignment
* Decision contract
* Due time
* Evidence

Agent performers require:

* Agent identity and version
* Agent execution
* Goal
* Authority
* Context
* Limits
* Validation

They must not be treated as generic infrastructure workers when their identity, accountability, or interaction semantics differ.

Detailed behavior is defined in ARCH-015-05.

---

# Worker Concurrency

Worker concurrency should consider:

* CPU
* Memory
* Storage
* Network
* Target-service limits
* Provider quotas
* Activity duration
* Tenant fairness
* Property locality
* Credential limits
* Cancellation responsiveness

Concurrency should be bounded per:

* Worker instance
* Worker pool
* Activity type
* Tenant
* Property
* Target dependency

---

# Autoscaling

Worker autoscaling may consider:

* Queue depth
* Oldest-message age
* Arrival rate
* Completion rate
* Worker utilization
* Activity duration
* Priority backlog
* Tenant backlog
* Deadline risk
* Provider capacity
* Error rate

Autoscaling should not:

* Exceed dependency capacity
* Violate provider quotas
* Break tenant fairness
* Activate unapproved worker versions
* Remove required locality
* Ignore scale-down drain

---

# Scale-to-Zero

Scale-to-zero may be suitable for:

* Infrequent task types
* Non-critical work
* High-cost specialized workers
* Property-local optional capabilities

It requires:

* Acceptable startup latency
* Durable queueing
* Reliable activation
* Version compatibility
* Deadline awareness
* Health verification

Critical or low-latency activities may require warm capacity.

---

# Capacity Model

Capacity planning should measure:

* Arrival rate
* Service time
* Concurrency
* Queue depth
* Queue age
* Retry amplification
* Failure rate
* Result-publication capacity
* Target-service capacity
* Tenant distribution
* Property distribution
* Peak demand
* Recovery demand

Capacity should include headroom for:

* Incident recovery
* Redelivery
* Regional failover
* Worker rollout
* Provider degradation
* Priority bursts

---

# Worker Versioning

Worker versions should record:

* Supported activity types
* Input contracts
* Result contracts
* Error semantics
* Cancellation behavior
* Heartbeat behavior
* Side-effect behavior
* Security posture
* Resource profile

A breaking change requires a new compatible version path.

Activated workflow versions should not be silently routed to incompatible worker behavior.

---

# Version Coexistence

Multiple worker versions may coexist to support:

* Existing workflow-definition versions
* Progressive rollout
* Tenant-specific activation
* Property-specific compatibility
* Rollback
* Long-running execution completion

Routing must identify the required worker compatibility explicitly.

Older worker versions should have defined support and retirement dates.

---

# Progressive Worker Rollout

Worker rollout may use:

* Development validation
* Test queues
* Synthetic tasks
* Shadow processing without side effects
* Limited activity types
* Limited tenants
* Limited properties
* Limited traffic
* Gradual expansion

Shadow execution must not duplicate material business effects.

Result comparison should use controlled evidence and privacy-safe data.

---

# Worker Drain

Drain stops a worker from acquiring new activities while allowing active attempts to reach safe completion or handoff.

Drain should define:

* Start time
* Maximum duration
* Active-attempt behavior
* Heartbeat behavior
* Cancellation behavior
* Lease transfer or expiry
* Result submission
* Forced-stop condition

Scale-down, deployment, maintenance, and retirement should use drain where practical.

---

# Graceful Shutdown

On shutdown, a worker should:

1. Stop acquiring new activities.
2. Report not-ready.
3. Continue or cancel active attempts according to policy.
4. Send final heartbeat where applicable.
5. Submit completed results.
6. Preserve provider references for uncertain actions.
7. Release local credentials.
8. Clean temporary resources.
9. Exit within the shutdown deadline.

Failure to shut down gracefully must still be recoverable through lease expiry and reconciliation.

---

# Worker Suspension

Worker suspension may apply to:

* Worker type
* Implementation version
* Deployment
* Pool
* Environment
* Region
* Tenant
* Property
* Capability

Suspension should:

* Stop new acquisition
* Revoke credentials where required
* Fence active workers where required
* Preserve active-attempt evidence
* Trigger reconciliation for uncertain effects
* Notify operations

---

# Worker Retirement

Retirement requires:

* No new routing
* Active attempts resolved
* Workflow compatibility updated
* Queue subscriptions removed
* Credentials revoked
* Deployment removed
* Registry updated
* Telemetry retained
* Documentation updated
* Evidence retained

A worker version must not retire while required by supported active workflow executions without an approved migration or completion plan.

---

# Worker Security Threats

Threats include:

* Worker impersonation
* Queue credential theft
* Cross-tenant consumption
* Property-scope substitution
* Malicious result submission
* Result replay
* Lease theft
* Fencing bypass
* Capability spoofing
* Contract substitution
* Credential leakage
* Payload tampering
* Unauthorized network access
* Worker compromise
* Poison activity
* Resource exhaustion
* Evidence suppression

---

# Worker Security Controls

Controls should include:

* Workload identity
* Mutual authentication where appropriate
* Least privilege
* Task-scoped credentials
* Queue authorization
* Contract validation
* Message integrity
* Encryption
* Tenant and property validation
* Lease fencing
* Result authentication
* Network policy
* Runtime isolation
* Resource limits
* Secret protection
* Monitoring
* Rapid revocation
* Independent evidence

---

# Payload Security

Activity payloads should be:

* Minimized
* Classified
* Encrypted
* Integrity protected
* Size bounded
* Access controlled
* Retained according to policy
* Redacted in telemetry

Sensitive payloads should be passed by authorized reference where practical.

Queue operators and unrelated workers must not gain unnecessary access to payload content.

---

# Untrusted Input

Workers should treat task input, external content, provider responses, files, and generated content according to their trust classification.

Controls may include:

* Schema validation
* Content validation
* File scanning
* Injection defense
* Command separation
* Output encoding
* Sandbox execution
* Destination allowlists
* Size and complexity limits

Untrusted content must not become worker configuration or authority.

---

# Destructive Activities

Destructive activities include:

* Delete
* Revoke
* Terminate
* Purge
* Overwrite
* Irreversible communication
* Physical-device action
* Financial commitment

They should require:

* Exact target
* Strong authorization
* Tenant and property verification
* Human approval where required
* Idempotency
* Precondition verification
* Impact evidence
* Reconciliation
* Compensation or mitigation where defined

Ambiguous targets must not be executed.

---

# Worker Privacy

Worker processing should:

* Use minimum data
* Preserve tenant and property scope
* Limit retention
* Avoid local persistence where unnecessary
* Remove temporary data
* Protect logs
* Protect provider requests
* Respect data residency
* Use approved subprocessors

Worker debugging must not expose production payloads or credentials.

---

# Audit and Evidence

Task and activity evidence should establish:

* Workflow execution
* Task identity
* Activity attempt
* Definition version
* Worker identity
* Worker version
* Tenant and property
* Dispatch
* Lease
* Start and end time
* Input and result references
* Service or provider references
* Idempotency identity
* Heartbeats where material
* Failure
* Retry
* Cancellation
* Reconciliation
* Result acceptance
* Task completion

Evidence should be attributable, integrity protected, privacy aware, and retained according to policy.

---

# Observability

Task and worker observability should include:

* Tasks created
* Ready tasks
* Dispatch rate
* Queue depth
* Queue age
* Lease acquisition latency
* Attempt duration
* Heartbeat health
* Completion rate
* Failure rate
* Retry rate
* Duplicate delivery
* Late results
* Lease expiry
* Dead-letter volume
* Quarantine volume
* Worker utilization
* Worker health
* Backpressure
* Tenant and property distribution
* Cost

---

# Correlation

Telemetry should correlate:

* Workflow execution
* Definition version
* Task
* Activity attempt
* Dispatch
* Queue delivery
* Lease
* Worker
* Target service
* Provider operation
* Result
* Workflow transition

Correlation must not expose secrets or cross-tenant data.

---

# Service Commitments

Task execution service commitments may include:

* Dispatch latency
* Queue-age objective
* Start latency
* Attempt duration
* Result-acceptance latency
* Completion rate
* Error budget
* Recovery time
* Tenant fairness
* Property-local availability

Commitments should distinguish engine delay from worker, provider, and business-service delay.

---

# Alerting

Alerts may be required for:

* Queue age above objective
* No eligible workers
* Worker authentication failure
* Lease-expiry surge
* Invalid-result surge
* Retry storm
* Dead-letter growth
* Quarantine event
* Cross-tenant validation failure
* Provider saturation
* Result-publication failure
* Stuck drain
* Capacity exhaustion

Alerts should identify ownership and safe response.

---

# Operational Search

Authorized operators should be able to search by:

* Workflow execution
* Task
* Attempt
* Worker
* Queue
* Tenant
* Property
* Activity type
* Failure
* Provider reference
* Idempotency identity
* Time window

Search access must preserve tenant, property, privacy, and role boundaries.

---

# Operational Actions

Authorized operations may include:

* Pause dispatch
* Resume dispatch
* Drain worker pool
* Suspend worker version
* Adjust bounded capacity
* Trigger health probe
* Quarantine message
* Release approved quarantine
* Reconcile uncertain attempt
* Reissue publication
* Create controlled retry
* Move dead-letter work through an approved recovery

Operators must not mark a task complete without validated completion evidence.

---

# Incident Response

Worker incidents may involve:

* Compromised identity
* Duplicate side effects
* Cross-tenant routing
* Invalid results
* Worker crash loop
* Queue outage
* Provider outage
* Retry storm
* Credential leakage
* Poison message
* Capacity exhaustion

Response may require:

* Suspension
* Credential revocation
* Queue isolation
* Worker drain
* Dispatch pause
* Reconciliation
* Task containment
* Tenant notification
* Evidence preservation
* Controlled recovery

---

# Continuity

Task and worker continuity should define recovery for:

* Queue loss
* Dispatcher loss
* Worker-pool loss
* Worker-registry loss
* Identity-service loss
* Result-channel loss
* Region loss
* Property connectivity loss
* Provider loss

Recovery must preserve:

* Durable dispatch intent
* Task and attempt identity
* Tenant and property
* Lease fencing
* Idempotency
* Side-effect references
* Result deduplication
* Evidence

---

# Recovery Testing

Testing should include:

* Worker crash before activity start
* Worker crash during processing
* Worker crash after external action
* Worker crash before result submission
* Lost queue acknowledgement
* Lost result acknowledgement
* Duplicate delivery
* Lease expiry
* Late result
* Queue recovery
* Dispatcher recovery
* Worker-version rollback
* Provider timeout
* Property disconnection
* Regional failover

Material side effects must be reconciled during failure testing.

---

# Performance

Performance should measure:

* Dispatch throughput
* Queue latency
* Worker-start latency
* Attempt throughput
* Result throughput
* Payload-access latency
* Lease overhead
* Heartbeat overhead
* Retry amplification
* Dead-letter handling
* Tenant fairness
* Property locality

Optimization must not weaken identity, durability, isolation, idempotency, result validation, or evidence.

---

# Cost Management

Cost should consider:

* Worker compute
* Warm capacity
* Queue operations
* Payload storage
* Network transfer
* External-provider charges
* Retry amplification
* Dead-letter storage
* Property-local infrastructure
* Observability

Cost controls may use:

* Right sizing
* Autoscaling
* Scale-to-zero
* Quotas
* Batching where semantically safe
* Locality
* Provider routing
* Retention controls

Cost optimization must not combine unrelated tenant data or weaken service commitments silently.

---

# Testing

Task and worker validation should include:

* Task-state tests
* Attempt-state tests
* Contract tests
* Capability-matching tests
* Worker-authentication tests
* Tenant-isolation tests
* Property-isolation tests
* Lease tests
* Fencing tests
* Heartbeat tests
* Cancellation tests
* Duplicate-delivery tests
* Idempotency tests
* Late-result tests
* Retry tests
* Dead-letter tests
* Backpressure tests
* Autoscaling tests
* Drain tests
* Recovery tests
* Security tests
* Performance tests

---

# Quality Attributes

The task, activity, and worker architecture should provide:

## Durability

Task and dispatch intent survive worker, dispatcher, queue, and infrastructure interruption.

## Reliability

Eligible work is delivered, executed, retried, reconciled, or failed through controlled behavior.

## Scalability

Worker pools scale independently across activity types, tenants, properties, regions, and resource profiles.

## Isolation

Tenant, property, risk, provider, and resource failures remain contained.

## Security

Only authenticated, authorized workers receive scoped work and credentials.

## Idempotency

Duplicate delivery, execution, and result submission do not create duplicate logical completion.

## Recoverability

Worker and queue failure recover from durable task and attempt state.

## Fairness

Shared capacity serves tenants, properties, priorities, and aged work according to explicit policy.

## Operability

Teams can observe, drain, suspend, retry, reconcile, and recover worker processing safely.

## Portability

Task and worker semantics remain independent of one queue, runtime, language, or provider.

## Auditability

Dispatch, lease, execution, result, and completion remain attributable.

---

# Architectural Rules

The task and worker architecture must:

* Treat tasks as durable logical work owned by the Workflow Engine.
* Treat activities as bounded attempts, not independent workflow state.
* Give every task, attempt, dispatch, lease, worker, result, and operation a stable identity.
* Commit task and dispatch intent before publication.
* Keep queue state from becoming the only record of work.
* Use queue-driven worker coordination.
* Authenticate and authorize every worker.
* Match workers by registered capability and contract version.
* Enforce tenant and property scope throughout routing and execution.
* Provide only minimum task context and task-scoped credentials.
* Keep workers stateless between attempts where practical.
* Prevent workers from writing authoritative workflow state directly.
* Use bounded leases, visibility, and fencing.
* Treat heartbeat as liveness, not completion.
* Treat delivery acknowledgement as transport state, not task completion.
* Validate results before task completion.
* Separate attempt failure from task failure.
* Keep attempt-level retry under Workflow Engine control.
* Reconcile uncertain material effects before retry.
* Avoid universal exactly-once claims.
* Require target-service idempotency and domain invariants for material actions.
* Make duplicate and late results harmless.
* Treat dead-letter records as operational isolation, not business outcome.
* Apply explicit priority, fairness, rate limits, backpressure, and bulkheads.
* Drain workers before planned removal where practical.
* Preserve evidence through failure, cancellation, and recovery.
* Remain vendor and technology neutral.

---

# Architecture Boundaries

ARCH-015-04 defines task identity, task state, activity attempts, durable dispatch, queue semantics, worker identity, capability matching, leasing, heartbeats, results, retry boundaries, dead-letter handling, backpressure, scaling, security, and operations.

It does not:

* Define workflow-definition lifecycle
* Define authoritative workflow transition storage
* Define event and timer correlation in detail
* Define human-task interaction
* Define agent reasoning or runtime internals
* Define complete retry and compensation policy
* Define business-service transactions
* Define detailed external APIs and SDKs
* Select a queue or broker
* Select a compute runtime
* Select a worker language
* Select a workflow product

Those concerns are addressed by adjacent ARCH-015 chapters and related architecture modules.

---

# Relationship to ARCH-015-02 and ARCH-015-03

ARCH-015-02 defines task types and contracts as part of the immutable workflow definition.

ARCH-015-03 creates authoritative task state, durable dispatch intent, accepts validated results, and advances workflow state.

ARCH-015-04 defines how replaceable workers execute the resulting activity attempts.

---

# Relationship to ARCH-015-05

ARCH-015-05 defines specialized event, timer, human-task, and agent-task interaction.

Human and agent performers may participate in logical tasks, but their identity, authority, decision, and interaction models are not reduced to generic infrastructure workers.

---

# Relationship to ARCH-015-06

ARCH-015-06 defines detailed retry, timeout, idempotency, cancellation, reconciliation, compensation, and recovery policies.

ARCH-015-04 provides the attempts, operation identities, leases, failure results, and dispatch controls used to execute those policies.

---

# Relationship to ARCH-015-07

ARCH-015-07 defines integration contracts with business services, platform services, providers, parent and child workflows, humans, and agents.

Workers invoke those contracts without bypassing service ownership.

---

# Relationship to ARCH-011 through ARCH-014

ARCH-011 governs worker operations, incidents, changes, capacity, continuity, and resilience.

ARCH-012 governs worker policy, risk, controls, evidence, exceptions, and assurance.

ARCH-013 provides paved paths to build, test, release, catalog, and operate worker implementations.

ARCH-014 governs agent performers and agent-tool execution.

---

# Relationship to ARCH-017 through ARCH-020

ARCH-017 defines worker, task, result, and operational API and SDK contracts.

ARCH-018 defines detailed tenant partitioning, routing, quotas, and isolation.

ARCH-019 defines governed worker, activity-type, queue, and connector extension points.

ARCH-020 provides compliant worker and queue reference implementations without making one technology mandatory.

---

# Summary

The XeniosAI task and worker architecture separates durable logical work from replaceable execution attempts.

The Workflow Engine owns task identity, state, eligibility, retry coordination, result acceptance, and completion. Queue infrastructure distributes durable activity messages, while authenticated workers execute bounded attempts under leases, fencing, least privilege, tenant and property scope, explicit contracts, and task-scoped credentials.

Queue acknowledgement, worker heartbeat, lease ownership, and worker success assertions are never sufficient proof of task or business completion.

By committing dispatch intent before publication, retaining stable operation identities, validating results, reconciling uncertain effects, and using domain-service idempotency, XeniosAI can scale queue-driven processing across thousands of concurrent workflows without transferring workflow truth to workers or infrastructure.

---

# Related Documents

* ARCH-015 — Workflow Engine
* ARCH-015-01 — Workflow Engine Overview
* ARCH-015-02 — Workflow Definition and Lifecycle
* ARCH-015-03 — Workflow Runtime and State Model
* ARCH-015-05 — Events, Timers, and Human Interaction
* ARCH-015-06 — Reliability, Retries, and Compensation
* ARCH-015-07 — Workflow Integration and Orchestration
* ARCH-015-08 — Workflow Security, Governance, and Assurance
* ARCH-015-09 — Workflow Operations, Observability, and Performance
* ARCH-015-10 — Future Workflow Engine Evolution
* ARCH-007 — Deployment
* ARCH-009 — Integration
* ARCH-010 — Observability
* ARCH-011 — Enterprise Operations
* ARCH-012 — Governance & Compliance
* ARCH-013 — Developer Platform
* ARCH-014 — AI Agent Framework
* ARCH-017 — API & SDK Architecture
* ARCH-018 — Multi-Tenancy
* ARCH-019 — Plugin & Extension Framework
* ARCH-020 — Reference Implementations
