# ARCH-015 · Chapter 06 — Reliability, Retries, and Compensation

**Architecture Domain:** Workflow and Process Architecture

**Document ID:** ARCH-015-06

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-27

**Parent Document:** ARCH-015 — Workflow Engine

---

# Purpose

This document defines the reliability and recovery architecture for XeniosAI workflows.

It establishes how workflows:

* Classify failure
* Distinguish technical failure from business outcome
* Apply bounded retries
* Use backoff and jitter
* Enforce idempotency
* Achieve effectively-once business outcomes
* Handle timeout and expiration
* Apply cancellation
* Resolve uncertain external effects
* Reconcile workflow and domain state
* Coordinate domain-defined compensation
* Handle partial failure
* Escalate unresolved conditions
* Recover after infrastructure disruption
* Preserve evidence

Reliability is part of workflow design, not an operational feature added after failure.

---

# Reliability Principle

Failure is expected in every distributed workflow.

The architecture must assume:

* Requests may be duplicated.
* Responses may be lost.
* Messages may be delayed or reordered.
* Workers may fail at any point.
* Dependencies may become unavailable.
* External providers may return uncertain results.
* Humans may not respond.
* Agents may produce invalid results.
* Timers may fire late or more than once.
* Cancellation may race with completion.
* Compensation may fail.

Reliable behavior depends on explicit state, identity, idempotency, deadlines, reconciliation, compensation, and evidence.

---

# Reliability Goals

The Workflow Engine should:

* Preserve committed workflow state
* Avoid duplicate logical business outcomes
* Recover without process-local memory
* Prevent unbounded retry
* Protect dependencies from retry storms
* Distinguish known failure from uncertain outcome
* Reconcile before repeating material action
* Preserve domain ownership
* Support safe cancellation
* Coordinate compensation durably
* Expose partial and irreversible outcomes truthfully
* Preserve tenant and property isolation during recovery
* Escalate when automation cannot establish truth

---

# Failure Is Not One State

The architecture distinguishes:

* Rejection
* Denial
* Invalid input
* Transient failure
* Permanent failure
* Timeout
* Expiration
* Cancellation
* Uncertain result
* Partial completion
* Compensation failure
* Infrastructure loss
* Security incident

These conditions require different workflow behavior.

A generic catch-and-retry mechanism is prohibited for material workflow actions.

---

# Failure Domains

Failures may originate in:

* Admission
* Definition resolution
* Runtime control
* State persistence
* Queue or broker
* Worker
* Business service
* Platform service
* Integration
* External provider
* Event correlation
* Timer service
* Human task
* Agent task
* Policy
* Identity
* Evidence
* Region or infrastructure

Failure-domain isolation should prevent one dependency or tenant from stopping unrelated workflows.

---

# Failure Record

A normalized failure record should identify:

* Failure identity
* Workflow execution
* Definition version
* Task or transition
* Activity attempt
* Source
* Failure category
* Error code
* Retry classification
* Side-effect certainty
* Tenant and property
* Time
* Correlation
* Provider reference
* Business reference
* Evidence

Raw provider details may be retained where safe but should not replace normalized semantics.

---

# Failure Taxonomy

## Validation Failure

Input, output, state, or contract is invalid.

## Authorization Failure

Identity lacks authority for the requested action.

## Policy Denial

An applicable policy prohibits the action.

## Business Rejection

The owning business service validly rejects the requested business outcome.

## Conflict

The request conflicts with current authoritative state or version.

## Transient Technical Failure

A temporary condition may succeed later without semantic change.

## Permanent Technical Failure

The capability cannot complete under the current contract or configuration.

## Rate or Quota Failure

Capacity is temporarily or contractually unavailable.

## Timeout

A bounded operation did not complete within its allowed duration.

## Result Uncertain

The request may have caused an external effect, but the authoritative outcome is unknown.

## Cancellation

Authorized cancellation interrupted or prevented further work.

## Security Failure

Identity, integrity, isolation, or trust controls failed.

---

# Retry Classification

Every retry decision should classify the failure as:

* Retryable without reconciliation
* Retryable only after reconciliation
* Retryable after human decision
* Retryable after policy change
* Retryable after dependency recovery
* Non-retryable business outcome
* Non-retryable security outcome
* Non-retryable terminal outcome

Workers and providers may supply retry guidance.

The Workflow Engine applies the effective definition and policy.

---

# Retry Principle

A retry is a new attempt to achieve the same logical task outcome.

Retry must preserve:

* Logical task identity
* Operation identity where required
* Tenant and property
* Authority
* Definition version
* Idempotency scope
* Deadline
* Attempt history
* Evidence

A retry must not silently become a different business request.

---

# Retry Eligibility

Before retry, the Workflow Engine should verify:

* The workflow is not terminal.
* The task is not terminal.
* The error is retryable.
* Attempt limit remains.
* Deadline permits another attempt.
* Backoff has elapsed.
* No cancellation or suspension applies.
* Authority remains valid.
* Tenant and property remain valid.
* Required capability is available.
* Idempotency remains valid.
* Uncertain side effects are reconciled.
* Policy permits retry.

If any requirement fails, the workflow must branch, wait, escalate, compensate, cancel, or fail according to its definition.

---

# Retry Policy

A retry policy should define:

* Policy identity and version
* Applicable task or transition
* Retryable categories
* Non-retryable categories
* Maximum attempts
* Attempt timeout
* Overall deadline
* Initial delay
* Backoff
* Jitter
* Maximum delay
* Idempotency requirement
* Reconciliation requirement
* Capacity behavior
* Exhaustion outcome
* Evidence

Retry policy must be part of the effective workflow definition or an explicitly governed referenced policy.

---

# Backoff

Backoff reduces repeated pressure on a failing dependency.

Strategies may include:

* Fixed delay
* Linear delay
* Exponential delay
* Provider-directed delay
* Business-calendar delay

Backoff should be bounded by:

* Task deadline
* Workflow deadline
* Maximum delay
* Service commitment
* Tenant policy

---

# Jitter

Jitter distributes retry attempts to reduce synchronized load.

Jitter should:

* Remain within declared bounds
* Preserve deadlines
* Be observable
* Avoid unfair tenant behavior
* Avoid violating provider retry instructions

Jitter affects timing, not retry eligibility or authority.

---

# Retry Budget

Retry should consume explicit budgets such as:

* Attempts
* Wall-clock time
* Compute
* Provider calls
* Cost
* External actions
* Tenant quota

Budgets may apply by:

* Task
* Workflow
* Tenant
* Property
* Dependency
* Provider
* Time window

An agent or worker must not extend its own retry budget.

---

# Retry Storm Prevention

Controls should include:

* Backoff
* Jitter
* Attempt limits
* Circuit breaking
* Rate limits
* Concurrency limits
* Bulkheads
* Tenant quotas
* Dependency health
* Admission deferral
* Operational suspension

Recovery after a broad outage should use controlled ramp-up rather than release all delayed work simultaneously.

---

# Internal and Workflow Retry

An implementation may use bounded internal retries for:

* Safe connection establishment
* Idempotent read
* Short transient transport interruption

Internal retry must remain within:

* One activity attempt
* One operation identity
* Attempt timeout
* Declared limits
* Observability

Attempt-level retry remains owned by the Workflow Engine.

---

# Retry Exhaustion

When retries are exhausted, the definition should specify:

* Fail task
* Wait for dependency
* Route to approved alternative
* Request human intervention
* Start reconciliation
* Start compensation
* Follow degraded path
* Cancel workflow
* Fail workflow

Retry exhaustion must not result in an infinite waiting state without ownership and escalation.

---

# Idempotency Principle

Idempotency ensures repeated requests for one logical operation produce one logical outcome.

Idempotency is required for:

* Workflow start
* Task creation
* Dispatch
* Service action
* Event application
* Timer firing
* Human decision
* Agent result
* Compensation
* Completion

Deduplication at one layer does not replace idempotency at the domain boundary.

---

# Idempotency Contract

An idempotency contract should define:

* Logical operation
* Key
* Key owner
* Tenant
* Property
* Target service
* Validity period
* Request-equivalence rule
* Stored outcome
* Duplicate response
* Conflict response
* Retention
* Evidence

Reusing a key for different input must produce a conflict rather than silently apply the earlier result.

---

# Idempotency Key

An idempotency key should be:

* Stable across transport retry
* Scoped to one logical operation
* Tenant scoped
* Property scoped where applicable
* Non-secret
* Collision resistant
* Persisted before dispatch
* Propagated to the owning service

Attempt identity and idempotency identity serve different purposes.

---

# Deduplication

Deduplication may occur at:

* Admission
* Inbox
* Event consumer
* Queue consumer
* Worker
* Result submission
* Business service
* Outbox publication

Deduplication records require retention long enough for realistic retry and replay windows.

Expired deduplication state must not create unsafe repetition of long-lived material operations.

---

# Effectively-Once Outcomes

Distributed workflows cannot guarantee universal exactly-once physical execution.

XeniosAI should pursue effectively-once business outcomes through:

* Stable operation identity
* Idempotency
* Deduplication
* Conditional updates
* Unique domain constraints
* Expected business versions
* Transactional outbox
* Idempotent inbox
* Result validation
* Reconciliation
* Compensation
* Domain invariants

Guarantees must identify their actual boundary.

---

# Side-Effect Classification

External actions should be classified as:

* Read only
* No durable external change
* Reversible
* Compensatable
* Irreversible
* Result uncertain

Control strength should increase with:

* Financial impact
* Guest impact
* Operational impact
* Security impact
* Tenant reach
* Property reach
* Irreversibility
* Uncertainty

---

# Side-Effect Ledger

The workflow should record material operations with:

* Operation identity
* Workflow execution
* Task
* Attempt
* Target
* Tenant and property
* Requested action
* Idempotency key
* Request time
* Acknowledgement
* Provider reference
* Observed outcome
* Authoritative business reference
* Reconciliation state
* Compensation reference
* Evidence

The ledger supports recovery but does not replace the domain record.

---

# Timeout

A timeout applies to a bounded operation or wait.

Timeout may apply to:

* Activity attempt
* Logical task
* Service request
* Event wait
* Human task
* Agent task
* Workflow phase
* Child workflow

Timeout means the allowed time elapsed.

It does not prove the external action failed.

---

# Timeout Layers

The architecture should distinguish:

* Connection timeout
* Request timeout
* Activity-attempt timeout
* Task deadline
* Wait timeout
* Phase deadline
* Workflow deadline

Inner timeout should not exceed the remaining outer deadline.

Timeout propagation must preserve enough time for reconciliation and safe closure.

---

# Timeout Outcome

Timeout behavior may:

* Retry
* Reconcile
* Wait
* Escalate
* Use approved alternative
* Cancel
* Compensate
* Fail
* Expire

The behavior depends on side-effect certainty and workflow definition.

Blind retry after a timeout is prohibited for material uncertain actions.

---

# Expiration

Expiration ends validity rather than merely timing out one attempt.

Expiration may apply to:

* Authority
* Offer
* Approval
* Human task
* Agent task
* Workflow execution
* Idempotency window
* Correlation

Expired authority must not be extended implicitly by retry.

Renewal requires an explicit authorized path.

---

# Uncertain Outcome

An outcome is uncertain when:

* A response was lost.
* A worker failed after dispatch.
* A provider timed out after accepting a request.
* A callback is missing.
* Events conflict.
* Queue acknowledgement is ambiguous.
* Regional failover occurred during action.
* Result validation cannot establish business state.

Uncertainty is a first-class state.

It must not be converted automatically into failure or success.

---

# Reconciliation Principle

Reconciliation determines authoritative outcome before the workflow decides to retry, compensate, complete, or fail.

Reconciliation should prefer:

* Owning business-service query
* Domain event
* Provider operation-status query
* Stable business reference
* Authoritative ledger
* Human verification where automation is insufficient

Transport evidence alone is not business truth.

---

# Reconciliation Contract

A reconciliation contract should define:

* Operation type
* Authoritative source
* Query or event contract
* Operation identity
* Provider reference
* Tenant and property
* Possible outcomes
* Retry
* Deadline
* Escalation
* Evidence

Possible outcomes should include:

* Completed
* Rejected
* Not Found
* Still Processing
* Cancelled
* Compensated
* Unknown

---

# Reconciliation Process

Reconciliation should:

1. Load durable side-effect intent.
2. Verify identity and scope.
3. Verify the original operation and idempotency key.
4. Query the authoritative source.
5. Validate the response.
6. Record the observed outcome.
7. Resolve task and workflow state deterministically.
8. Escalate if uncertainty remains beyond the deadline.

Reconciliation itself must be idempotent and bounded.

---

# State Reconciliation

Workflow and domain state may disagree because of:

* Delayed event
* Lost event
* Defective integration
* Manual domain change
* Migration
* Partial failure
* Data corruption

State reconciliation should:

* Identify authoritative owners
* Compare versions and evidence
* Avoid direct cross-service database edits
* Resolve through public APIs, events, or controlled repair
* Preserve history
* Produce findings where required

---

# Reconciliation Escalation

Escalation is required when:

* Authoritative source is unavailable beyond deadline
* Provider reports unknown
* Conflicting authoritative evidence exists
* Financial outcome is unresolved
* Guest-impacting state is ambiguous
* Cross-tenant risk exists
* Compensation cannot be determined

Escalation should create an owned human task, incident, exception, or remediation workflow.

---

# Cancellation Principle

Cancellation is a durable controlled process, not a status update.

Cancellation should:

* Authenticate the requester
* Verify authority
* Record intent
* Stop unrelated new work
* Signal active tasks
* Resolve waits and timers
* Resolve parallel branches
* Propagate to child workflows
* Reconcile uncertain effects
* Compensate where defined
* Preserve irreversible outcomes
* Produce evidence

---

# Cancellation Authority

Cancellation authority may belong to:

* Initiating actor
* Represented principal
* Accountable owner
* Operational owner
* Tenant administrator
* Property operator
* Parent workflow
* Policy
* Emergency control

Authority may differ by workflow state and impact.

Possession of an execution identifier is not cancellation authority.

---

# Cancellation Modes

## Cooperative Cancellation

Active work reaches a safe boundary and returns a cancellation result.

## Immediate Dispatch Stop

No new activities are dispatched.

## Graceful Workflow Cancellation

Active work resolves, uncertain effects reconcile, and defined compensation runs.

## Forced Termination

Execution is fenced or stopped because continued operation is unsafe.

Forced termination does not prove external effects stopped or rolled back.

---

# Cancellation Races

Cancellation may race with:

* Task completion
* Event arrival
* Timer firing
* Human decision
* Agent result
* Child completion
* Compensation

Races must be resolved using:

* Expected state version
* Atomic transition
* Fencing
* Idempotency
* Definition-specific precedence

The losing input becomes stale or follows reconciliation policy.

---

# Cancellation Completion

Cancellation completes only when:

* New work is blocked.
* Active tasks are resolved or fenced.
* Waits and timers are closed.
* Children are resolved.
* Human and agent tasks are closed.
* Uncertain side effects are reconciled.
* Required compensation is resolved.
* Irreversible outcomes are recorded.
* Evidence is complete.

Cancellation may end with residual business effects.

The output must state them truthfully.

---

# Compensation Principle

Compensation reverses, offsets, or mitigates a completed effect through a contract defined by the owning domain service.

Compensation is not:

* Database rollback across services
* Deletion of workflow history
* Proof that the original action never occurred
* An action invented by the Workflow Engine
* Guaranteed restoration of the original state

---

# Compensation Eligibility

Before compensation, the workflow should verify:

* The original effect is authoritative and completed.
* A compensation contract exists.
* The effect is eligible.
* Authority is valid.
* Tenant and property match.
* Required human approval exists.
* Compensation has not already completed.
* Dependencies permit execution.
* Ordering requirements are satisfied.

Unknown original outcome requires reconciliation before compensation.

---

# Compensation Contract

A compensation contract should define:

* Original operation
* Compensating operation
* Domain owner
* Eligibility
* Preconditions
* Input mapping
* Authority
* Tenant and property
* Idempotency
* Ordering
* Timeout
* Retry
* Reconciliation
* Failure behavior
* Result contract
* Evidence

---

# Compensation State Model

Compensation may use:

* Not Required
* Eligible
* Pending
* Running
* Waiting
* Completed
* Partially Completed
* Failed
* Escalated
* Waived by Authorized Decision

Waiver must not conceal an unresolved material effect.

---

# Compensation Ordering

Ordering may be:

* Reverse completion order
* Explicit dependency order
* Parallel for independent effects
* Domain-defined priority
* Human-directed under policy

Reverse order is not universally correct.

The definition must identify:

* Dependencies
* Conflicts
* Parallelism
* Stop conditions
* Partial-failure behavior

---

# Compensation Idempotency

Compensation may be retried.

It therefore requires:

* Stable compensation identity
* Stable original-operation reference
* Tenant and property
* Domain idempotency
* Duplicate-result handling
* Reconciliation
* Evidence

Repeated compensation must not create repeated offsets, refunds, cancellations, or notifications.

---

# Compensation Failure

Compensation may fail because of:

* Domain rejection
* State conflict
* Expired eligibility
* Dependency outage
* Provider failure
* Missing authority
* Irreversible original effect
* Partial prior compensation

Failure behavior may:

* Retry
* Reconcile
* Escalate
* Start an incident
* Require human remediation
* Record residual liability
* Close as partially compensated

---

# Partial Compensation

When only some effects are compensated, the workflow should record:

* Original effects
* Completed compensations
* Failed compensations
* Irreversible effects
* Remaining obligations
* Business impact
* Tenant and property impact
* Owner
* Escalation
* Evidence

The workflow must not report full rollback.

---

# Saga-Style Coordination

Long-running distributed business processes may coordinate:

* Forward actions
* Completion evidence
* Compensating actions
* Failure handling

The Workflow Engine may implement saga-style semantics without requiring one product or notation.

Each participating service retains:

* Domain transaction
* Domain state
* Idempotency
* Compensation semantics

---

# Partial Failure

Partial failure occurs when some workflow work completes and other work does not.

The definition should identify:

* Required work
* Optional work
* Independent work
* Compensatable work
* Irreversible work
* Completion threshold
* Degraded outcome
* Escalation

Partial failure must not be collapsed into a generic success or failure if the business outcome is mixed.

---

# Parallel Failure

When parallel branches fail differently, policy may:

* Wait for all
* Cancel remaining branches
* Continue independent branches
* Compensate completed branches
* Accept quorum
* Escalate

The join must use authoritative branch state and commit once.

Late branch outcomes follow explicit reconciliation or compensation behavior.

---

# Child-Workflow Failure

Parent and child definitions should specify:

* Failure propagation
* Cancellation propagation
* Retry ownership
* Compensation ownership
* Output mapping
* Evidence relationship

The parent must not retry a child start blindly if the child execution may already exist.

Stable start idempotency and child correlation are required.

---

# Human-Task Reliability

Human-task failure may include:

* No assignee
* Notification failure
* No response
* Invalid decision
* Authority expiration
* Conflicting decisions
* User deactivation

Recovery may:

* Reassign
* Remind
* Escalate
* Expire
* Deny
* Pause
* Follow approved fallback

Silence remains non-approval unless an explicit governed rule says otherwise.

---

# Agent-Task Reliability

Agent-task failure may include:

* Provider unavailable
* Tool failure
* Invalid structured result
* Low confidence
* Unsupported request
* Policy denial
* Limit exhaustion
* Agent cancellation

Recovery may:

* Retry within limits
* Use an approved alternate provider
* Request clarification
* Route to a human
* Use deterministic fallback
* Fail safely

An alternate provider must not weaken data, tenant, policy, or evaluation requirements.

---

# Degraded Operation

A workflow may use a degraded path when:

* The definition permits it.
* The business outcome remains truthful.
* Security and policy remain satisfied.
* Tenant and property isolation remain intact.
* The reduced service level is explicit.
* Required communication occurs.
* Recovery or follow-up is defined.

Degraded mode must not invent availability, pricing, payment, reservation, or other business truth.

---

# Fallback

Fallback may use:

* Cached authoritative data within freshness policy
* Alternate approved service
* Manual process
* Human task
* Deferred completion
* Read-only mode
* Safe rejection

Fallback must preserve:

* Contract semantics
* Authority
* Data classification
* Tenant and property
* Evidence

---

# Recovery Principle

Recovery begins from durable authoritative state.

It must:

* Load the exact definition version
* Verify state integrity
* Identify committed transitions
* Identify pending publication
* Identify active attempts
* Identify uncertain effects
* Reconcile before repetition
* Recreate only eligible work
* Preserve identity and scope
* Produce evidence

---

# Recovery Types

## Automatic Recovery

Uses deterministic retry, replay, or rescheduling within approved policy.

## Assisted Recovery

Requires an operator or human decision but follows a defined workflow.

## Controlled Repair

Corrects confirmed state corruption through an approved repair plan.

## Disaster Recovery

Restores runtime capability and durable state after broad infrastructure loss.

## Business Remediation

Resolves residual domain outcomes that automation cannot safely correct.

---

# Recovery Point

A recovery point should identify:

* Execution state version
* Definition version
* History position
* Task state
* Waits
* Timers
* Active attempts
* Side-effect ledger
* Reconciliation
* Compensation
* Cancellation
* Integrity

Recovery must not rely on a worker's local state.

---

# Replay Safety

Replay should distinguish:

* Reconstructing workflow state
* Reapplying pure deterministic calculation
* Republishing committed outbox records
* Reinvoking external actions

External actions are not replayed by default.

Any reinvocation requires:

* Stable operation identity
* Idempotency
* Reconciliation
* Authority
* Evidence

---

# Regional Recovery

Regional recovery should:

* Fence former writers
* Restore one authoritative execution state
* Preserve state-version monotonicity
* Restore queues and timers
* Deduplicate replayed inputs
* Preserve tenant residency
* Preserve property routing
* Reconcile in-flight effects
* Ramp capacity gradually

Two regions must not commit conflicting transitions for one execution.

---

# Human Escalation

Automation should escalate when:

* Business truth cannot be established
* Compensation is incomplete
* Authority is missing
* Policy requires a decision
* Retry budget is exhausted
* Guest or financial impact is material
* Security or tenant isolation is at risk
* Manual domain action is required

Escalation should include:

* Owner
* Scope
* Current state
* Known facts
* Uncertainty
* Actions attempted
* Required decision
* Deadline
* Evidence

---

# Incident Integration

Reliability conditions may create an incident when:

* Multiple workflows are affected
* Critical workflows cannot progress
* Duplicate side effects occurred
* State integrity is at risk
* Cross-tenant impact is suspected
* Compensation is broadly failing
* Provider outage exceeds tolerance

Incident response follows ARCH-011.

Workflow recovery must remain coordinated with incident containment.

---

# Problem Management

Recurring reliability failures should produce problem records and remediation.

Problem analysis may examine:

* Failure category
* Retry amplification
* Dependency behavior
* Definition defects
* Worker defects
* Idempotency gaps
* Reconciliation gaps
* Compensation gaps
* Tenant or property concentration
* Operational intervention

The solution should address root cause rather than permanently increasing retry limits.

---

# Tenant and Property Isolation

Reliability handling must preserve tenant and property scope across:

* Retry queues
* Idempotency records
* Deduplication
* Side-effect ledger
* Reconciliation
* Compensation
* Human escalation
* Operational search
* Recovery
* Evidence

Recovery must not move work to a worker, region, provider, or operator without equivalent scope and authorization.

---

# Security

Reliability controls should prevent:

* Retry abuse
* Idempotency-key guessing
* Cross-tenant deduplication
* Cancellation forgery
* Compensation abuse
* Reconciliation data leakage
* State-repair abuse
* Replay attack
* Dead-letter replay abuse
* Evidence tampering

Sensitive recovery actions require strong identity, least privilege, separation of duties, and audit.

---

# Evidence

Reliability evidence should establish:

* Failure identity and category
* Original operation
* Attempts
* Backoff
* Idempotency
* Timeout
* Cancellation
* Side-effect certainty
* Reconciliation queries and results
* Compensation actions and results
* Human decisions
* Operator interventions
* Residual effects
* Final outcome
* Tenant and property

Evidence must not conceal uncertainty or partial compensation.

---

# Observability

Reliability observability should include:

* Failure rate by category
* Retry rate
* Retry success
* Retry exhaustion
* Retry amplification
* Backoff queue
* Timeout rate
* Uncertain outcomes
* Reconciliation backlog
* Reconciliation age
* Cancellation duration
* Compensation backlog
* Compensation success
* Partial compensation
* Escalation
* Residual business effects
* Tenant and property impact
* Dependency contribution

---

# Reliability Measures

Illustrative measures include:

* Workflow completion rate
* Workflow recovery rate
* Mean time to reconcile
* Mean time to compensate
* Duplicate business-outcome rate
* Uncertain-outcome age
* Retry amplification factor
* Cancellation completion time
* Compensation completeness
* Manual-intervention rate
* Failure recurrence

Metrics should not reward retries as successful work.

---

# Alerting

Alerts may be required for:

* Retry storm
* Reconciliation deadline risk
* Compensation failure
* Stuck cancellation
* Growing uncertain outcomes
* Duplicate side-effect detection
* Idempotency conflict
* State-integrity failure
* Cross-tenant anomaly
* Provider outage
* Dead-letter recovery risk

Alerts should identify owner, scope, evidence, and safe response.

---

# Operational Actions

Authorized operations may include:

* Suspend retry
* Resume retry
* Adjust bounded backoff under approved policy
* Trigger reconciliation
* Confirm authoritative outcome
* Start approved compensation
* Escalate
* Cancel
* Fence unsafe worker
* Apply controlled repair

Operators must not:

* Mark uncertainty as success without evidence
* Invent compensation
* Bypass tenant scope
* Replay material actions blindly
* Delete failure history

---

# Testing

Reliability testing should include:

* Transient failure
* Permanent failure
* Business rejection
* Policy denial
* Timeout before action
* Timeout after action
* Lost response
* Duplicate dispatch
* Duplicate result
* Retry exhaustion
* Retry storm
* Idempotency conflict
* Cancellation race
* Partial failure
* Reconciliation success and failure
* Compensation success and failure
* Partial compensation
* Human escalation
* Queue recovery
* Worker crash
* Regional recovery
* Tenant-isolation recovery
* Property-local outage

Fault injection must not cause uncontrolled production side effects.

---

# Quality Attributes

The reliability architecture should provide:

## Correctness

Recovery preserves workflow semantics and domain invariants.

## Resilience

Failure leads to controlled retry, wait, reconciliation, compensation, escalation, or closure.

## Idempotency

Repeated delivery and execution do not create duplicate logical outcomes.

## Recoverability

Execution resumes from durable state without blindly repeating external actions.

## Boundedness

Retries, reconciliation, compensation, and escalation have limits and deadlines.

## Transparency

Uncertainty, partial completion, and residual effects are reported truthfully.

## Isolation

Failure and recovery preserve tenant, property, dependency, and workload boundaries.

## Auditability

Attempts, decisions, reconciliation, compensation, and outcomes are attributable.

## Portability

Reliability semantics remain independent of one workflow, queue, database, or provider product.

---

# Architectural Rules

The reliability architecture must:

* Treat failure as an expected workflow condition.
* Use normalized failure categories.
* Distinguish business rejection, policy denial, technical failure, timeout, cancellation, and uncertain outcome.
* Keep retry under Workflow Engine control.
* Bound attempts, delay, duration, cost, and concurrency.
* Use backoff and jitter where appropriate.
* Prevent retry storms.
* Preserve logical task and operation identity across retry.
* Require explicit idempotency contracts for material operations.
* Avoid universal exactly-once claims.
* Use deduplication, conditional updates, outbox, inbox, reconciliation, and domain invariants for effectively-once outcomes.
* Treat timeout as absence of timely completion, not proof of failure.
* Reconcile uncertain effects before retry or compensation.
* Query the authoritative domain owner for business truth.
* Treat cancellation as a durable process.
* Preserve irreversible and residual effects truthfully.
* Use only domain-defined compensation.
* Make compensation idempotent, ordered, bounded, and evidence producing.
* Record partial compensation explicitly.
* Recover from authoritative persisted state.
* Prevent replay from repeating external effects by default.
* Escalate unresolved uncertainty and compensation.
* Preserve tenant and property isolation during all recovery operations.
* Remain vendor and technology neutral.

---

# Architecture Boundaries

ARCH-015-06 defines failure classification, retry, backoff, idempotency, timeout, expiration, uncertain outcome, reconciliation, cancellation, compensation, recovery, escalation, evidence, and reliability operations.

It does not:

* Define business-service compensation internals
* Define workflow-state storage
* Define queue and worker protocols
* Define event and timer infrastructure
* Define human-task interfaces
* Define agent reasoning
* Define incident-management procedures in detail
* Define detailed APIs and SDKs
* Select a workflow product
* Select resilience infrastructure

Those concerns are addressed by related architecture modules and implementations.

---

# Relationship to ARCH-015-02 through ARCH-015-05

ARCH-015-02 declares retry, timeout, cancellation, reconciliation, and compensation policies in the workflow definition.

ARCH-015-03 persists and transitions reliability state.

ARCH-015-04 provides attempts, worker outcomes, leases, and operation identities.

ARCH-015-05 provides events, timers, human decisions, and agent results that trigger reliability behavior.

---

# Relationship to ARCH-015-07

ARCH-015-07 defines service and provider integration contracts.

Those contracts must expose normalized errors, idempotency, status queries, cancellation, reconciliation, and compensation where applicable.

---

# Relationship to ARCH-011 and ARCH-012

ARCH-011 defines incident, problem, change, continuity, resilience, and operational command.

ARCH-012 defines risk, policy, controls, evidence, exceptions, findings, and assurance.

Reliability operations and residual business effects must integrate with both modules.

---

# Relationship to ARCH-014

ARCH-014 defines agent retry, tool execution, recovery, and evaluation.

Workflow retry remains deterministic and definition controlled.

An agent may assist with analysis or remediation but must not invent business compensation or declare uncertain business state resolved.

---

# Relationship to ARCH-017 through ARCH-020

ARCH-017 defines retry, idempotency, cancellation, reconciliation, and compensation API and SDK contracts.

ARCH-018 defines detailed tenant isolation during recovery.

ARCH-019 defines governed reliability extension points.

ARCH-020 provides compliant reference implementations without making one reliability technology mandatory.

---

# Summary

The XeniosAI reliability architecture treats failure, duplication, timeout, cancellation, uncertainty, and partial completion as normal distributed-workflow conditions.

It uses normalized failure classification, bounded retry, backoff, jitter, stable operation identities, idempotency, deduplication, conditional updates, reconciliation, and domain invariants to protect business outcomes.

When an external effect is uncertain, the workflow queries the authoritative owner before repetition. When a completed effect must be offset, the Workflow Engine coordinates only the compensating behavior defined by the owning domain service.

By preserving uncertainty, residual effects, and partial compensation truthfully—and escalating when automation cannot establish business truth—XeniosAI can recover workflows without creating duplicate actions, false completion, or cross-tenant impact.

---

# Related Documents

* ARCH-015 — Workflow Engine
* ARCH-015-01 — Workflow Engine Overview
* ARCH-015-02 — Workflow Definition and Lifecycle
* ARCH-015-03 — Workflow Runtime and State Model
* ARCH-015-04 — Tasks, Activities, and Workers
* ARCH-015-05 — Events, Timers, and Human Interaction
* ARCH-015-07 — Workflow Integration and Orchestration
* ARCH-015-08 — Workflow Security, Governance, and Assurance
* ARCH-015-09 — Workflow Operations, Observability, and Performance
* ARCH-015-10 — Future Workflow Engine Evolution
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
