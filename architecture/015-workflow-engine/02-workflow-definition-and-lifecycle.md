# ARCH-015 · Chapter 02 — Workflow Definition and Lifecycle

**Architecture Domain:** Workflow and Process Architecture

**Document ID:** ARCH-015-02

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-27

**Parent Document:** ARCH-015 — Workflow Engine

---

# Purpose

This document defines the architecture for XeniosAI workflow definitions and their lifecycle.

It establishes how workflow definitions are:

* Identified
* Named
* Owned
* Classified
* Designed
* Represented
* Validated
* Tested
* Versioned
* Approved
* Registered
* Released
* Activated
* Changed
* Migrated
* Suspended
* Deprecated
* Retired
* Archived

A workflow definition is the governed contract that determines what a durable process means.

Its lifecycle prevents an unowned, unvalidated, incompatible, or unauthorized process from becoming active merely because executable code or configuration exists.

---

# Definition Principle

Every active workflow execution must be governed by an identifiable, approved, and immutable effective definition version.

The definition must make it possible to answer:

* What business or platform outcome does the workflow coordinate?
* Who owns the workflow?
* Which definition version applies?
* Who may initiate it?
* Which tenant and property scopes are permitted?
* What inputs are accepted?
* Which states and transitions are valid?
* Which tasks may become eligible?
* Which services, humans, and agents may participate?
* Which events and timers may advance execution?
* How are failures, retries, cancellation, and compensation handled?
* What proves completion?
* Which controls and evidence are required?

If these questions cannot be answered from the definition and its governed references, the workflow is not ready for enterprise activation.

---

# Definition Is Not Runtime State

A workflow definition describes allowed process behavior.

A workflow execution records one durable realization of that behavior.

The definition must not contain:

* Mutable execution progress
* Live task assignments
* Received event instances
* Active timer instances
* Runtime retry counters
* Individual human decisions
* Individual agent results
* Worker leases
* Execution-specific credentials
* Unresolved operational intervention

Those concerns belong to execution state defined in ARCH-015-03.

Separating definition from execution enables:

* Immutable version binding
* Concurrent version operation
* Deterministic replay
* Safe change analysis
* Independent runtime recovery
* Clear evidence
* Controlled migration

---

# Definition Is Not a Diagram

A process diagram may explain a workflow but is not sufficient as the authoritative definition.

A diagram may omit:

* Contracts
* Identity
* Authority
* Tenant scope
* Property scope
* Error semantics
* Retry behavior
* Idempotency
* Timeout
* Cancellation
* Compensation
* Evidence
* Version compatibility

The authoritative definition must be machine-validatable and semantically complete.

Human-readable diagrams and documentation should be generated from or traceably aligned with the authoritative definition.

---

# Definition Is Not Worker Code

Worker code implements bounded activities.

It must not become the hidden source of truth for:

* Workflow branching
* Process ownership
* Transition eligibility
* Completion criteria
* Retry policy
* Tenant routing
* Human approval requirements
* Compensation ordering

Process behavior must remain discoverable from the governed workflow definition and its referenced contracts.

---

# Definition Identity Domains

The architecture distinguishes several identities.

## Workflow Identity

Identifies the workflow concept across its lifecycle.

Illustrative form:

```text
workflow://hospitality/reservation-fulfillment
```

The workflow identity remains stable while definition versions, implementations, environments, and activation scopes evolve.

## Definition Version Identity

Identifies one immutable approved version of the workflow definition.

Illustrative form:

```text
workflow://hospitality/reservation-fulfillment/versions/2.3.0
```

## Release Identity

Identifies a promoted package containing the definition, referenced schemas, policies, documentation, tests, and integrity metadata.

## Activation Identity

Identifies the authorization to use a specific release in an environment and scope.

## Execution Identity

Identifies one runtime execution bound to one effective definition version.

## Task-Type Identity

Identifies a logical kind of work declared by the definition.

## Event-Contract Identity

Identifies an accepted or published event contract referenced by the definition.

These identities must not be collapsed into one deployment name or file path.

---

# Identifier Requirements

Workflow identifiers should be:

* Unique within XeniosAI
* Stable
* Non-secret
* Machine readable
* Human traceable
* Domain meaningful
* Independent of deployment location
* Independent of implementation product
* Independent of tenant-facing display name
* Suitable for correlation and evidence
* Resistant to accidental reuse

Identifiers should not contain:

* Credentials
* Mutable owner names
* Environment-specific endpoints
* Sensitive personal data
* Temporary deployment details

Retired workflow identities must not be reassigned to unrelated definitions.

---

# Naming

Workflow names should communicate the coordinated outcome.

Preferred names describe:

* Business capability
* Operational outcome
* Governance process
* Integration purpose
* Developer lifecycle outcome

Names should not:

* Imply ownership of business data the workflow does not own
* Conceal material human or agent participation
* Claim guaranteed success
* Use implementation-product terminology as the business identity
* Conflict with another active workflow in the same domain
* Encode temporary organizational structure

Display names may be localized or tenant adapted while the stable identifier remains unchanged.

---

# Ownership Model

Every workflow must have:

* One accountable owner
* One operational owner
* One definition or implementation owner
* Governance and assurance contacts where required
* Participating domain-service owners

Ownership must exist before registration and remain current throughout the lifecycle.

## Accountable Owner Responsibilities

The accountable owner is responsible for:

* Business or platform purpose
* Intended outcomes
* Accepted use cases
* Prohibited use cases
* Risk acceptance
* Human decision requirements
* Agent participation boundaries
* Completion criteria
* Material change approval
* Deprecation
* Retirement

## Operational Owner Responsibilities

The operational owner is responsible for:

* Service commitments
* Capacity
* Monitoring
* Support
* Incidents
* Problems
* Change coordination
* Continuity
* Suspension
* Recovery
* Operational evidence

## Definition Owner Responsibilities

The definition owner is responsible for:

* Definition quality
* Architecture alignment
* Contract completeness
* Determinism
* Validation
* Testing
* Documentation
* Versioning
* Release artifacts
* Defect remediation

## Domain Owner Responsibilities

Participating domain owners remain responsible for:

* Business rules
* Domain invariants
* Authoritative state
* API and event contracts
* Idempotency behavior
* Reconciliation
* Compensation semantics
* Service commitments

One team may perform multiple roles, but each responsibility must remain explicit.

---

# Human Accountability

A workflow, agent, or automated system cannot be its own accountable owner.

Automation may assist with:

* Definition creation
* Validation
* Testing
* Documentation
* Change analysis
* Monitoring
* Conformance checking

Final accountability remains assigned to an authorized human or organizational role.

Approval automation may enforce policy but must not conceal the accountable decision authority.

---

# Workflow Registry Record

The authoritative registry record should include:

* Stable workflow identifier
* Display name
* Description
* Domain
* Workflow class
* Accountable owner
* Operational owner
* Definition owner
* Participating service owners
* Intended outcomes
* Supported use cases
* Prohibited use cases
* Initiating actors
* Risk classification
* Data classification
* Tenant model
* Property model
* Human involvement
* Agent involvement
* Dependencies
* Service commitments
* Lifecycle state
* Approved versions
* Active releases
* Activation scopes
* Documentation
* Runbooks
* Governance references
* Security references
* Evidence references
* Creation date
* Review date
* Deprecation status
* Retirement status

Registry metadata should be discoverable to authorized users, services, agents, developers, operators, and assurance providers.

---

# Definition Classification

Classification determines required design, validation, approval, evidence, and operational controls.

It does not grant authority.

## Purpose Classification

* Business
* Operational
* Integration
* Data
* Governance
* Security
* Developer
* Agent coordination

## Duration Classification

* Short running
* Long running
* Scheduled
* Recurring
* Event driven
* Indefinite wait with governed expiration

## Interaction Classification

* Service only
* Human involved
* Agent involved
* Human and agent involved
* External provider involved
* Property-local system involved

## Impact Classification

* Read only
* Reversible
* Compensatable
* Irreversible
* Financially material
* Operationally critical
* Security sensitive
* Compliance relevant

## Scope Classification

* Platform
* Enterprise
* Tenant
* Property
* Cross-property within one tenant
* Approved cross-tenant aggregation

## Data Classification

The definition must reference the applicable enterprise data classification for:

* Inputs
* Outputs
* Runtime state
* Event payloads
* Human-task context
* Agent context
* Evidence

Control strength should increase with impact, authority, data sensitivity, irreversibility, tenant reach, property reach, and operational criticality.

---

# Definition Structure

A complete workflow definition is composed of several logical sections.

## Identity

* Workflow identifier
* Version
* Name
* Description
* Domain

## Ownership

* Accountable owner
* Operational owner
* Definition owner
* Participating domain owners

## Purpose

* Intended outcome
* Supported use cases
* Prohibited use cases
* Business value
* Completion meaning

## Scope

* Tenant model
* Property model
* Environment model
* Initiating actors
* Eligible participants

## Contracts

* Input
* Output
* Events
* Signals
* Tasks
* Human decisions
* Agent results
* Service interactions

## Process Model

* States or nodes
* Transitions
* Branches
* Joins
* Loops
* Child workflows
* Completion
* Termination

## Reliability

* Timeout
* Retry
* Idempotency
* Cancellation
* Reconciliation
* Compensation

## Controls

* Identity
* Authority
* Policy
* Risk
* Security
* Privacy
* Separation of duties
* Resource limits

## Operations

* Service commitments
* Observability
* Alerting
* Runbook
* Capacity
* Continuity
* Support

## Evidence

* Required records
* Retention
* Access
* Integrity
* Completion proof

---

# Input Contract

The workflow input contract should define:

* Schema
* Contract version
* Required fields
* Optional fields
* Data types
* Validation rules
* Classification
* Tenant
* Property
* Purpose
* Source
* Maximum size
* Reference behavior
* Defaults
* Compatibility
* Rejection semantics

The input contract must not rely on an AI model to infer required authoritative values.

Missing material information should result in validation failure, a defined clarification path, or a human or agent task.

---

# Output Contract

The output contract should define:

* Schema
* Contract version
* Completion status
* Business-result references
* Data classification
* Tenant and property
* Evidence references
* Error or termination outcomes
* Compatibility
* Retention

A successful workflow output should represent verified completion criteria.

It must not claim ownership of authoritative business data held by participating services.

---

# Workflow Variables

Definition variables should have explicit:

* Name
* Type
* Purpose
* Source
* Mutability
* Classification
* Tenant scope
* Property scope
* Validation
* Default
* Retention
* Visibility

Variables should contain the minimum process state required for coordination.

Large or authoritative domain objects should be referenced through stable identifiers rather than duplicated into workflow state where practical.

Secrets must be referenced through approved secret mechanisms and must not be embedded in definitions.

---

# State Model Definition

The definition should identify:

* Initial state
* Valid states
* Terminal states
* Allowed transitions
* Transition triggers
* Transition guards
* Transition actions
* Required evidence
* Invalid-transition behavior

The state model should be:

* Explicit
* Finite where practical
* Deterministic
* Validatable
* Versioned
* Observable
* Recoverable

Detailed execution-state mechanics are defined in ARCH-015-03.

---

# Transition Definition

Each transition should define:

* Source state
* Trigger
* Guard
* Required authority
* Expected version
* State mutation
* Tasks created
* Events published
* Timers created or cancelled
* Evidence
* Destination state
* Error behavior

Transition guards should use deterministic data and policy results.

Free-form model output must not directly determine a material transition without validation and an explicit decision contract.

---

# Task-Type Definition

Each logical task type should define:

* Stable task-type identifier
* Purpose
* Input contract
* Output contract
* Eligible performer type
* Required capability
* Required authority
* Tenant and property behavior
* Idempotency contract
* Attempt timeout
* Task deadline
* Retry policy
* Cancellation behavior
* Evidence
* Completion validation

Task definitions specify work semantics.

Worker implementation and activity-attempt mechanics are defined in ARCH-015-04.

---

# Trigger Definition

A workflow may be triggered by:

* API request
* Domain event
* Integration event
* Schedule
* Parent workflow
* Human action
* Agent request
* Operational action

Each trigger should define:

* Trigger identity
* Contract
* Allowed source
* Required authority
* Tenant and property resolution
* Correlation
* Idempotency
* Admission behavior
* Invalid-trigger behavior
* Evidence

The availability of a technical endpoint or event subscription does not authorize initiation.

---

# Event and Signal Definition

Each consumed event or signal should define:

* Event or signal type
* Contract version
* Expected source
* Trust classification
* Correlation rule
* Tenant rule
* Property rule
* Valid waiting state
* Replay behavior
* Duplicate behavior
* Expiration
* State effect
* Rejection behavior

Each published event should define:

* Type
* Contract version
* Source identity
* Business meaning
* Tenant and property
* Correlation
* Payload
* Classification
* Publication condition
* Replay characteristics

Detailed event behavior is defined in ARCH-015-05.

---

# Timer Definition

Each timer should define:

* Timer type
* Creation condition
* Duration, deadline, or schedule
* Time-zone behavior
* Business-calendar behavior
* Tenant and property
* Expected state
* Firing behavior
* Duplicate behavior
* Cancellation condition
* Expiration behavior
* Evidence

Ambiguous local time, daylight-saving changes, calendar exceptions, and clock drift must have defined behavior where applicable.

---

# Human-Task Definition

Each human task should define:

* Purpose
* Assignment rule
* Eligible role
* Required authority
* Separation of duties
* Context
* Allowed decisions
* Validation
* Due time
* Reminder
* Escalation
* Delegation
* Timeout outcome
* Completion evidence

Silence must not equal approval unless an explicit policy defines and authorizes that outcome.

Human-task design must minimize unnecessary disclosure of sensitive workflow context.

---

# Agent-Task Definition

Each agent task should define:

* Purpose
* Agent capability
* Eligible agent identities or classes
* Goal
* Input contract
* Output contract
* Authority
* Approved context
* Allowed tools
* Limits
* Validation
* Human decision points
* Stop conditions
* Timeout
* Retry
* Evidence

Agent output should be treated according to its defined confidence, validation, and trust contract.

An agent may recommend or perform a bounded task but may not silently modify the workflow definition.

---

# Service-Interaction Definition

Each service interaction should define:

* Service identity
* Operation or event
* Contract version
* Required authority
* Tenant and property
* Input and output
* Idempotency
* Timeout
* Error taxonomy
* Retry eligibility
* Reconciliation
* Compensation reference
* Evidence

The workflow definition references public service contracts.

It must not reference another service's internal database schema or implementation details.

---

# Branch Definition

Each branch should define:

* Decision input
* Deterministic condition
* Eligible paths
* Default behavior
* Invalid or unknown behavior
* Authority where applicable
* Evidence

Branch conditions should be mutually understandable and testable.

Overlapping or unreachable conditions must be detected during validation.

---

# Parallel and Join Definition

Parallel paths should define:

* Branches started
* Concurrency limit
* Shared-state rules
* Conflict behavior
* Completion threshold
* Join semantics
* Partial failure
* Timeout
* Cancellation
* Compensation
* Evidence

Join semantics may require:

* All
* Any
* First valid result
* Quorum
* Explicit subset

The definition must state how unfinished branches are handled after a join condition is satisfied.

---

# Loop Definition

Loops should define:

* Entry condition
* Continuation condition
* Exit condition
* Maximum iterations
* Deadline
* Progress expectation
* Resource budget
* Failure behavior
* Evidence

Unbounded loops are prohibited.

Iteration limits must not be delegated solely to a worker or agent.

---

# Child-Workflow Definition

A child-workflow reference should define:

* Child workflow identity
* Version-selection rule
* Input mapping
* Output mapping
* Authority
* Tenant and property
* Correlation
* Wait behavior
* Failure propagation
* Cancellation propagation
* Timeout
* Compensation relationship
* Evidence relationship

Child-workflow depth and fan-out must be bounded.

Circular workflow dependencies must be rejected unless an explicitly governed pattern proves termination and safety.

---

# Completion Definition

The definition must specify completion criteria for each successful outcome.

Completion criteria may include:

* Required states reached
* Required tasks completed
* Required business results verified
* Required human decisions recorded
* Required agent results validated
* Required events received
* Required compensation resolved
* Output contract satisfied
* Required evidence present

Completion must not be inferred solely from:

* Queue acknowledgement
* Worker return
* Agent assertion
* Transport success
* Absence of an error

---

# Failure and Termination Definition

The definition should distinguish:

* Business rejection
* Validation failure
* Policy denial
* Transient technical failure
* Permanent technical failure
* Timeout
* Cancellation
* Expiration
* Compensation failure
* Operational termination

Each terminal outcome should define:

* Final state
* Output
* Required cleanup
* Required reconciliation
* Required compensation
* Notification
* Evidence
* Retention

---

# Retry Definition

Retry policy should define:

* Retryable conditions
* Non-retryable conditions
* Maximum attempts
* Backoff
* Jitter
* Attempt timeout
* Overall deadline
* Idempotency requirement
* Reconciliation requirement
* Escalation
* Exhaustion behavior
* Evidence

Material actions must not be retried blindly after an uncertain result.

Detailed retry execution is defined in ARCH-015-06.

---

# Cancellation Definition

Cancellation behavior should define:

* Who may request cancellation
* Allowed lifecycle states
* New-work behavior
* Active-task behavior
* Human-task behavior
* Agent-task behavior
* Child-workflow behavior
* Parallel-branch behavior
* Reconciliation
* Compensation
* Final outcome
* Evidence

Cancellation must account for irreversible completed effects.

It must not promise rollback where only mitigation or reconciliation is possible.

---

# Compensation Definition

Compensation references domain-defined behavior.

The workflow should define:

* Eligible original action
* Compensation capability
* Trigger
* Ordering
* Authority
* Input mapping
* Idempotency
* Timeout
* Retry
* Failure behavior
* Human escalation
* Evidence

The definition must not invent compensation for a domain service that has not declared a supported compensating contract.

---

# Reconciliation Definition

Reconciliation should define:

* Uncertain condition
* Authoritative source
* Query or event contract
* Correlation
* Timing
* Maximum attempts
* Resolved outcomes
* Escalation
* Evidence

Reconciliation uses authoritative service or provider state.

It must not infer a business outcome from network or transport behavior alone.

---

# Resource and Complexity Limits

Each definition should declare or inherit limits for:

* Maximum duration
* Maximum active tasks
* Maximum parallel branches
* Maximum child workflows
* Maximum nesting depth
* Maximum loop iterations
* Maximum retries
* Maximum events
* Maximum timers
* Maximum state size
* Maximum task payload
* Maximum history growth
* Maximum cost where applicable

Limits protect reliability, capacity, tenant fairness, and operational recovery.

Exceptions require explicit review and evidence.

---

# Determinism Requirements

The definition must make control behavior deterministic for a given:

* Effective definition version
* Persisted state
* Accepted event or signal
* Timer occurrence
* Policy result
* Validated task result
* Human decision
* Validated agent result

Non-deterministic behavior may occur inside a bounded agent or external task.

Its result must cross an explicit contract and be validated before it affects workflow control.

---

# Definition Representation

The authoritative definition may be represented through:

* Declarative structured text
* Structured data
* State-machine representation
* Process-model representation
* Code-based definition with constrained deterministic semantics
* A combination governed by one canonical compiled form

The architecture does not mandate one notation.

Every representation must support:

* Stable identity
* Versioning
* Machine validation
* Human review
* Deterministic interpretation
* Contract references
* Change comparison
* Integrity verification
* Portability
* Documentation

---

# Canonical Definition

Each version must have one canonical representation used for:

* Validation
* Integrity hashing
* Release
* Activation
* Execution binding
* Change comparison
* Evidence

Generated views may include:

* Diagrams
* Human-readable documentation
* Task catalogs
* Event catalogs
* Dependency views
* Security views
* Operational views

Generated views must identify their source version and must not become independent uncontrolled definitions.

---

# Definition Package

A releaseable definition package should contain or reference:

* Canonical definition
* Identity metadata
* Version
* Input and output schemas
* Task contracts
* Event and signal contracts
* Timer definitions
* Human-task contracts
* Agent-task contracts
* Service dependencies
* Policy references
* Security classification
* Test artifacts
* Validation results
* Documentation
* Runbooks
* Migration plan where required
* Integrity and provenance metadata
* Approval evidence

Package references should be immutable or integrity protected.

---

# Definition Validation

Validation should cover:

* Schema correctness
* Identifier uniqueness
* Ownership completeness
* Classification
* Contract resolution
* Initial state
* Terminal states
* Transition validity
* Reachability
* Unreachable states
* Dead ends
* Branch overlap
* Join completeness
* Loop bounds
* Child-workflow cycles
* Resource limits
* Retry bounds
* Timer validity
* Event correlation
* Cancellation
* Compensation
* Completion
* Security
* Tenant isolation
* Property isolation
* Evidence
* Operational readiness

Validation errors block release or activation according to policy.

Warnings require explicit disposition and must not be silently ignored.

---

# Semantic Validation

Structural validity does not prove that the workflow is correct.

Semantic validation should confirm:

* The process supports the intended outcome
* Business rules remain in domain services
* Completion reflects authoritative business results
* Human decisions occur at required boundaries
* Agent participation is bounded
* Retry does not duplicate material effects
* Compensation is supported by domain owners
* Cancellation behavior is truthful
* Tenant and property rules are coherent
* Failure outcomes are actionable
* Evidence supports accountability

Semantic validation requires participation from accountable architecture, domain, operational, security, and governance roles proportionate to risk.

---

# Definition Testing

Testing should include:

* Schema tests
* Transition tests
* Branch tests
* Join tests
* Loop-bound tests
* Contract tests
* Event-correlation tests
* Timer tests
* Human-task tests
* Agent-task validation tests
* Retry tests
* Duplicate-delivery tests
* Cancellation tests
* Reconciliation tests
* Compensation tests
* Recovery tests
* Tenant-isolation tests
* Property-isolation tests
* Security tests
* Capacity tests
* Evidence tests

High-impact workflows should use simulation and failure injection before production activation.

Test evidence must identify the exact definition version and referenced contract versions.

---

# Compatibility Model

Compatibility should be evaluated across:

* Workflow input
* Workflow output
* Runtime state
* Tasks
* Events
* Signals
* Timers
* Human decisions
* Agent results
* Service APIs
* Child workflows
* Evidence
* Operational tooling

A change compatible for new execution may still be incompatible with active execution.

Compatibility claims must identify their scope.

---

# Versioning Model

Workflow definitions should use a consistent versioning policy.

Semantic versioning may be used where:

* Major changes indicate incompatible semantics
* Minor changes add backward-compatible behavior
* Patch changes correct compatible defects or metadata

Version numbers alone do not determine risk or approval.

A patch may still be material if it changes business outcome, authority, security, tenant behavior, failure handling, or completion.

---

# Version Immutability

An activated definition version must be immutable.

Changes require a new version.

Immutability includes:

* Canonical definition
* Referenced schemas
* Task semantics
* Event semantics
* Timer behavior
* Policy bindings where frozen
* Completion criteria
* Integrity metadata

Mutable operational configuration may be permitted only when:

* The configurable field is explicitly declared
* Allowed values are constrained
* Authority is defined
* Changes are versioned or historically recorded
* Active execution behavior is predictable
* Tenant and property scope is explicit
* Evidence is retained

---

# Material Change

A definition change is material when it may affect:

* Purpose
* Outcome
* Input or output
* State model
* Transition behavior
* Task semantics
* Participating service
* Event or signal contract
* Timer behavior
* Branch or join
* Loop
* Retry
* Cancellation
* Reconciliation
* Compensation
* Completion
* Authority
* Human decision
* Agent participation
* Tenant scope
* Property scope
* Data access
* Security
* Privacy
* Compliance
* Service commitments
* Cost

Material changes require:

* New version
* Impact analysis
* Required testing
* Change control
* Approval
* Release
* Scoped activation
* Observation
* Rollback or migration plan

---

# Non-Material Change

Potentially non-material changes include:

* Documentation correction
* Metadata enrichment
* Contact update
* Presentation-only change
* Non-behavioral description clarification

The classification must be justified and recorded.

A change must not be labeled non-material merely to avoid testing, approval, or versioning.

---

# Version Selection

Workflow initiation must select a definition version through an explicit rule.

Selection may be based on:

* Requested version
* Active version for environment
* Active version for tenant
* Active version for property
* Progressive rollout cohort
* Parent-workflow binding
* Compatibility requirement

Selection must not:

* Use an unapproved version
* Cross tenant or property scope
* Change after execution starts without governed migration
* Depend on mutable display names
* Be silently determined by worker availability

The selected version must be recorded before execution admission.

---

# Release and Activation Separation

Release means a definition package is approved and available for authorized activation.

Activation means a released version is permitted to receive new executions within a specific environment and scope.

The separation enables:

* Independent approval and rollout
* Environment-specific readiness
* Tenant-specific activation
* Property-specific activation
* Progressive introduction
* Rapid suspension
* Controlled rollback
* Concurrent version operation

Publication of source or build artifacts is not activation.

---

# Execution Binding

Every admitted execution must record:

* Workflow identity
* Definition version
* Release identity
* Activation identity or scope
* Effective policy references
* Initiator
* Tenant
* Property
* Start time

An active execution remains bound to its effective version until:

* It completes
* It terminates
* It is migrated through an approved procedure

A newly activated version must not silently alter existing executions.

---

# Concurrent Version Operation

The platform should support multiple active versions when:

* Existing executions require the prior version
* Tenants migrate at different times
* Properties require phased rollout
* A controlled pilot is active
* Compatibility requires coexistence
* Rollback readiness is required

Concurrent versions require:

* Clear selection rules
* Capacity planning
* Compatible workers
* Contract support
* Operational visibility
* Evidence separation
* Defined end-of-support

---

# Definition Migration Principle

Migration changes the governing version or state representation of an existing execution.

Migration is exceptional because it may change:

* Valid states
* Eligible work
* Deadlines
* Retry behavior
* Authority
* Completion
* Evidence interpretation

The default strategy is to allow existing executions to complete on their original version.

Migration should occur only when continuing the original version is unsafe, impossible, unsupported, or materially less appropriate than a controlled migration.

---

# Migration Types

## No Migration

Existing executions complete under the original version.

New executions use the new version.

## Compatible Runtime Upgrade

Runtime infrastructure changes while workflow semantics and version binding remain unchanged.

## State Transformation

Persisted state is transformed to a representation accepted by the target version.

## Forward-Only Process Migration

Completed history remains governed by the original version while future states follow the target version.

## Restart Migration

The original execution is safely terminated or cancelled and a new execution starts with reconciled input and explicit correlation.

## Emergency Containment

Executions are suspended or terminated without migration because continued operation creates unacceptable risk.

---

# Migration Plan

A migration plan should define:

* Source version
* Target version
* Eligible execution states
* Ineligible execution states
* State mapping
* Task mapping
* Timer mapping
* Event-correlation mapping
* Retry mapping
* Human-task mapping
* Agent-task mapping
* Child-workflow behavior
* Side-effect reconciliation
* Compensation impact
* Authority changes
* Tenant and property scope
* Evidence
* Validation
* Rollback
* Stop conditions
* Operational ownership

Migration must be idempotent, observable, and attributable.

---

# Migration Safety

Migration must not:

* Lose completed history
* Repeat material actions without reconciliation
* Reassign human decisions silently
* Broaden authority
* Cross tenant or property boundaries
* Remove required evidence
* Change a business outcome without approval
* Treat transport success as proof of business state
* Rewrite historical events as though the target version produced them

If safety cannot be demonstrated, the execution should remain on the original version or follow an explicit termination and restart process.

---

# Definition Lifecycle

The workflow-definition lifecycle is:

```text
Proposed

↓

Designed

↓

Validated

↓

Approved

↓

Registered

↓

Released

↓

Active

↓

Deprecated

↓

Retired

↓

Archived
```

Supporting states include:

* Rejected
* Suspended
* Withdrawn

Lifecycle state applies to an identifiable scope.

A version may be released but inactive, active in one environment, suspended for one tenant, and deprecated for new adoption while existing executions continue.

---

# Lifecycle State: Proposed

A proposed workflow is an identified opportunity not yet approved for implementation.

Proposal information should include:

* Problem
* Intended outcome
* Sponsor
* Accountable-owner candidate
* Affected domains
* Expected participants
* Expected duration
* Expected tenant and property scope
* Human involvement
* Agent involvement
* Initial risk
* Alternatives considered
* Reason a workflow is appropriate

A proposal should be rejected or simplified when a service transaction, API call, or event consumer can reliably satisfy the outcome.

---

# Lifecycle State: Designed

A designed workflow has a complete architectural definition suitable for review.

Design should include:

* Identity
* Ownership
* Classification
* Contracts
* State model
* Tasks
* Events
* Timers
* Human and agent participation
* Dependencies
* Reliability
* Security
* Tenant and property behavior
* Evidence
* Operations
* Testing
* Migration considerations

Designed does not mean approved or executable in production.

---

# Lifecycle State: Validated

A validated workflow has passed required structural, semantic, contract, security, isolation, reliability, and operational validation.

Validation should produce:

* Exact version
* Validation profile
* Test results
* Findings
* Exceptions
* Evidence
* Expiration where applicable

Validation evidence must be invalidated or reevaluated when relevant dependencies or contracts change.

---

# Lifecycle State: Approved

Approval authorizes the exact definition version and intended scope to proceed toward release.

Approval should identify:

* Version
* Risk
* Environment
* Tenant and property scope
* Authority
* Human decision model
* Agent participation
* Exceptions
* Conditions
* Effective period
* Approvers
* Evidence

Approval of one version does not automatically approve later versions.

---

# Lifecycle State: Registered

Registration creates or updates the authoritative workflow registry record.

Registration requires:

* Stable identity
* Version identity
* Ownership
* Classification
* Canonical definition
* Integrity metadata
* Contract references
* Documentation
* Validation evidence
* Approval evidence
* Lifecycle state

Registration does not authorize production activation.

---

# Lifecycle State: Released

A released version is packaged, integrity protected, approved for distribution, and available to authorized environments.

Release requires:

* Trusted definition package
* Provenance
* Integrity verification
* Compatible runtime
* Compatible workers
* Resolved dependencies
* Configuration contract
* Migration plan where required
* Rollback strategy
* Release notes
* Operational documentation
* Evidence

Release is an artifact state, not an execution permission.

---

# Lifecycle State: Active

An active version may receive new executions within an approved scope.

Activation requires:

* Released version
* Approved environment
* Tenant and property eligibility
* Runtime readiness
* Worker readiness
* Dependency readiness
* Policy readiness
* Credentials and identities
* Capacity
* Observability
* Support
* Continuity
* Suspension control
* Activation evidence

Activation should be independently controllable by:

* Environment
* Tenant
* Property
* Region
* Cohort
* Trigger
* Workflow version

---

# Lifecycle State: Suspended

Suspension temporarily prevents initiation or progression within a defined scope.

Suspension may be triggered by:

* Security incident
* Policy violation
* Data issue
* Tenant-isolation concern
* Definition defect
* Dependency failure
* Worker failure
* Capacity risk
* Unexpected business outcome
* Excessive cost
* Governance decision
* Owner decision
* Tenant request
* Property request
* Emergency control

Suspension must define:

* Scope
* Effective time
* New-execution behavior
* Active-execution behavior
* Task behavior
* Event behavior
* Timer behavior
* Human-task behavior
* Agent-task behavior
* Recovery conditions
* Communication
* Evidence

Suspension must not silently discard accepted work.

---

# Lifecycle State: Deprecated

Deprecation means a workflow or version remains available for a controlled transition but should not be selected for new adoption.

Deprecation should define:

* Reason
* Successor
* Affected integrations
* Affected tenants and properties
* Existing-execution behavior
* New-execution behavior
* Migration path
* Support level
* End-of-support date
* End-of-initiation date
* End-of-execution date
* Communication
* Exceptions

New dependencies on a deprecated definition should be prevented unless explicitly approved.

---

# Lifecycle State: Retired

Retirement ends permitted operation.

Retirement requires:

* Prevention of new executions
* Resolution of active executions
* Resolution of human tasks
* Resolution of agent tasks
* Resolution of child workflows
* Revocation of unused credentials
* Worker and route updates
* Event-subscription updates
* Schedule removal
* Dependency updates
* Tenant and property communication
* State disposition
* Evidence retention
* Documentation update
* Registry update
* Operational closure

The stable workflow identifier remains reserved.

---

# Lifecycle State: Archived

Archived records preserve required historical information after retirement.

Archived information may include:

* Identity
* Ownership history
* Definition versions
* Releases
* Activations
* Approvals
* Validations
* Tests
* Changes
* Migrations
* Incidents
* Exceptions
* Retirement evidence

Access and retention must follow security, privacy, legal, compliance, audit, and records-management requirements.

---

# Lifecycle State: Rejected

A rejected proposal or version does not satisfy required value, architecture, risk, control, quality, or readiness criteria.

Rejection should record:

* Scope
* Reason
* Findings
* Decision authority
* Required remediation
* Resubmission conditions
* Evidence

Rejected artifacts must not be activated through an alternate path.

---

# Lifecycle State: Withdrawn

A proposal or version may be withdrawn by its authorized owner before activation.

Withdrawal should record:

* Requester
* Reason
* Effective scope
* Artifact disposition
* Dependency impact
* Evidence

Withdrawal does not erase prior review or evidence.

---

# Lifecycle Transition Controls

Every lifecycle transition should define:

* Current state
* Requested next state
* Requesting identity
* Required authority
* Preconditions
* Validation
* Evidence
* Approvals
* Effective environment
* Tenant and property scope
* Effective time
* Notifications
* Reversal or rollback
* Resulting operational behavior

Transitions must be:

* Explicit
* Idempotent
* Attributable
* Auditable
* Tenant aware
* Policy controlled

---

# Lifecycle Gates

| Gate | Required outcome |
| --- | --- |
| Proposal Gate | Clear problem, sponsor, value, ownership candidate, and justification for workflow use |
| Design Gate | Complete purpose, contracts, states, tasks, reliability, boundaries, ownership, and control design |
| Validation Gate | Structural, semantic, contract, security, isolation, recovery, and evidence requirements achieved |
| Approval Gate | Accountable authorities approve the exact version, risk, authority, and intended scope |
| Registration Gate | Stable identity, metadata, canonical definition, integrity, and evidence recorded |
| Release Gate | Trusted package, dependencies, compatibility, migration, rollback, and operations ready |
| Activation Gate | Runtime, workers, policy, credentials, capacity, support, and target scope ready |
| Change Gate | Material changes classified, tested, approved, released, and observable |
| Deprecation Gate | Successor, migration, support, communication, exceptions, and dates defined |
| Retirement Gate | Executions, tasks, schedules, dependencies, credentials, state, and evidence resolved |

Gate requirements should be proportionate to classification and risk.

---

# Environment Lifecycle

A workflow version may have different lifecycle states across:

* Development
* Test
* Simulation
* Staging
* Production
* Recovery

For example:

* A version may be validated in test but not released.
* A released version may be inactive in production.
* A version may be active in staging and suspended in production.
* A version may be active for one tenant and unavailable to another.

Environment state must not be inferred from source availability, artifact publication, or worker deployment.

---

# Tenant and Property Activation

Activation may be scoped to:

* All eligible tenants
* Selected tenants
* One tenant
* Selected properties
* One property
* Internal platform operations
* Controlled pilot groups

Progressive activation should support:

* Eligibility
* Contractual conditions
* Configuration
* Dependency readiness
* Capacity
* Monitoring
* Stop conditions
* Rollback
* Tenant communication
* Property communication

Global activation must not be the only available control.

---

# Progressive Introduction

New workflows and material versions should support:

* Development validation
* Simulation
* Historical-event replay where safe
* Shadow evaluation
* Read-only execution
* Dry-run execution
* Human-confirmed execution
* Limited tenant pilot
* Limited property pilot
* Limited trigger scope
* Gradual traffic
* Outcome review
* Wider activation

The introduction path must not create material side effects during simulation, shadow, or dry-run modes.

Scope should expand only when evidence supports the change.

---

# Rollback

Rollback may mean:

* Stop selecting the new version for new executions
* Restore the prior activation rule
* Suspend a defective version
* Revert runtime infrastructure without changing definition binding
* Migrate eligible executions through an approved plan
* Cancel and restart selected executions after reconciliation

Rollback does not mean silently changing the definition version of active executions.

Rollback plans must distinguish new-execution routing from active-execution treatment.

---

# Emergency Change

Emergency change may be required when continued execution creates unacceptable security, safety, compliance, tenant, financial, or operational risk.

Emergency action may:

* Suspend initiation
* Suspend affected executions
* Disable a trigger
* Disable a task type
* Revoke worker authorization
* Block an event source
* Remove an activation scope
* Terminate execution where necessary

Emergency change must preserve:

* Authority
* Scope
* Attribution
* Evidence
* Communication
* Reconciliation
* Post-change review

Emergency urgency does not permit silent in-place mutation of an activated definition.

---

# Dependency Change

Definition lifecycle must account for changes to:

* Service APIs
* Event schemas
* Task contracts
* Agent definitions
* Human-task roles
* Child workflows
* Policies
* Data classifications
* Tenant configurations
* Property capabilities
* Operational service commitments

Dependency changes should trigger:

* Compatibility analysis
* Impact analysis
* Revalidation
* Retesting
* Version change where required
* Activation review
* Migration review

Dependencies must not change semantics invisibly through mutable references.

---

# Ownership Change

Ownership changes require:

* New accountable-owner acceptance
* New operational-owner acceptance
* New definition-owner acceptance
* Domain-owner confirmation
* Risk review
* Support transition
* Registry update
* Documentation update
* Evidence

A workflow without a current accountable or operational owner should not continue unrestricted initiation.

It should be suspended, constrained, or assigned through an approved governance process.

---

# Orphan Detection

The platform should detect:

* Missing accountable owner
* Missing operational owner
* Inactive owner
* Missing support team
* Expired approval
* Unrecognized version
* Active version with no valid release
* Active version with invalid dependencies
* Deprecated version receiving unexpected new executions
* Retired version with active schedules
* Workflow with no current validation
* Workflow with no valid tenant scope
* Workflow depending on retired contracts

Orphaned or invalid definitions must not continue unrestricted operation.

---

# Definition Security Threats

Threats include:

* Definition tampering
* Version substitution
* Unauthorized activation
* Tenant-scope expansion
* Property-scope substitution
* Trigger spoofing
* Event-contract substitution
* Worker-capability substitution
* Policy-binding removal
* Human-approval bypass
* Agent-authority expansion
* Retry amplification
* Malicious loop or fan-out
* Compensation removal
* Evidence suppression
* Registry tampering
* Dependency confusion

Controls should include:

* Strong identity
* Least privilege
* Integrity protection
* Provenance
* Review
* Separation of duties
* Policy enforcement
* Version verification
* Contract verification
* Resource limits
* Activation controls
* Monitoring
* Suspension
* Independent evidence

---

# Separation of Duties

High-impact workflows may require separation between:

* Definition author
* Code author
* Reviewer
* Accountable owner
* Security approver
* Compliance approver
* Release authority
* Activation authority
* Operator
* Auditor

One identity should not be able to author, approve, release, activate, and suppress evidence for a critical workflow without independent control.

Required separation should be proportionate to risk.

---

# Privacy

Workflow definitions should minimize personal and sensitive data.

Definitions should use:

* Data classifications
* Schema references
* Purpose statements
* Retention rules
* Redaction rules
* Stable pseudonymous identifiers where appropriate

Definitions must not embed:

* Real guest data
* Real employee data
* Authentication secrets
* Access tokens
* Unnecessary sample personal information
* Sensitive prompts

Test examples should use synthetic or approved representative data.

---

# Definition Evidence

Evidence should establish:

* Workflow identity
* Definition version
* Ownership
* Classification
* Canonical representation
* Integrity
* Provenance
* Validation
* Tests
* Review
* Approval
* Release
* Activation
* Tenant and property scope
* Changes
* Migrations
* Exceptions
* Suspension
* Deprecation
* Retirement

Evidence should be attributable, time stamped, access controlled, integrity protected, retained, and discoverable to authorized reviewers.

---

# Documentation

Each workflow should provide:

* Purpose
* Scope
* Owners
* Classification
* Process explanation
* State model
* Contract references
* Dependency map
* Human and agent participation
* Reliability behavior
* Security and tenant behavior
* Service commitments
* Operational runbook
* Change history
* Migration guidance
* Deprecation guidance

Documentation must identify the definition version it describes.

Documentation quality is part of definition quality.

---

# Discovery and Catalog

Authorized users and systems should be able to discover:

* Available workflows
* Purpose
* Owners
* Active versions
* Activation scopes
* Initiation contracts
* Task types
* Events
* Dependencies
* Service commitments
* Lifecycle state
* Documentation
* Support
* Deprecation

Catalog discovery does not grant initiation, task, event, or operational authority.

---

# Definition Observability

Lifecycle observability should include:

* Workflow count
* Definition versions
* Lifecycle-state distribution
* Validation failures
* Approval age
* Release status
* Activation scope
* Version adoption
* Deprecated-version use
* Migration progress
* Missing owners
* Expired approvals
* Invalid dependencies
* Exception age
* Retirement progress

Metrics should support action and ownership rather than reward definition volume.

---

# Definition Operations

Definition operations should support:

* Register
* Validate
* Compare
* Review
* Approve
* Package
* Release
* Activate
* Deactivate
* Suspend
* Resume
* Deprecate
* Retire
* Archive
* Search
* Inspect dependencies
* Inspect evidence
* Assess compatibility
* Plan migration

All material operations must be authorized, attributable, scope aware, and auditable.

---

# Governance Integration

Definition governance operationalizes ARCH-012 through:

* Policy evaluation
* Risk classification
* Control mapping
* Approval
* Evidence
* Exception handling
* Finding management
* Remediation
* Assurance
* Records management

Governance decisions should bind to:

* Workflow identity
* Exact definition version
* Environment
* Tenant and property scope
* Effective period
* Conditions

Approval of a generic workflow concept is not sufficient authority for an exact production release.

---

# Developer Platform Integration

ARCH-013 should provide paved paths for:

* Definition creation
* Schema creation
* Validation
* Simulation
* Testing
* Documentation
* Package production
* Integrity verification
* Release
* Catalog registration
* Activation request
* Evidence capture
* Migration planning
* Deprecation
* Retirement

Developer tooling should reduce repetitive work without hiding workflow semantics or bypassing lifecycle gates.

---

# Change Control Integration

Workflow-definition change is an operational change under ARCH-011.

Change records should identify:

* Current version
* Proposed version
* Change classification
* Impact
* Dependencies
* Tenant and property scope
* Active executions
* Validation
* Tests
* Migration
* Rollback
* Observation
* Evidence

Change scheduling should consider long-running active executions and version coexistence.

---

# Quality Attributes

Workflow definition and lifecycle architecture should provide:

## Clarity

Purpose, behavior, ownership, authority, outcomes, and failure semantics are understandable.

## Determinism

Control behavior is explicitly defined and consistently interpretable.

## Validity

Structural and semantic errors are detected before activation.

## Compatibility

Version and dependency changes have explicit compatibility scope and migration behavior.

## Integrity

Canonical definitions, packages, releases, and lifecycle evidence are protected from unauthorized change.

## Traceability

Requirements, definitions, contracts, tests, approvals, releases, activations, executions, and outcomes can be connected.

## Security

Only authorized identities can create, approve, release, activate, change, suspend, or retire definitions.

## Auditability

Lifecycle actions and decisions produce attributable evidence.

## Portability

Definition semantics remain independent of one implementation product.

## Maintainability

Definitions, contracts, workers, services, policies, and documentation can evolve through controlled versions.

## Operability

Teams can discover, compare, activate, suspend, migrate, deprecate, and retire versions safely.

## Tenant Isolation

Lifecycle and activation controls preserve tenant and property boundaries.

---

# Architectural Rules

Workflow definitions must:

* Have stable identities.
* Have accountable, operational, and definition owners.
* Be classified before approval.
* Declare purpose, supported use, and prohibited use.
* Declare tenant and property behavior.
* Use explicit input, output, task, event, signal, human, agent, and service contracts.
* Define states, transitions, branches, joins, loops, and completion explicitly.
* Keep business rules in owning domain services.
* Keep runtime execution state outside the definition.
* Use deterministic control semantics.
* Bound loops, fan-out, retries, duration, state, and resource use.
* Define failure, timeout, cancellation, reconciliation, and compensation behavior.
* Use only domain-defined compensation contracts.
* Define evidence requirements.
* Be machine validatable and human reviewable.
* Have one canonical representation per version.
* Be immutable after activation.
* Use new versions for behavioral change.
* Preserve backward compatibility where practical.
* Bind every execution to an exact effective version.
* Keep existing executions on their original version unless governed migration occurs.
* Separate release from activation.
* Support environment-, tenant-, and property-scoped activation.
* Treat migration as an attributable, idempotent, evidence-producing operation.
* Prevent retired identifiers from reuse.
* Remain technology and vendor neutral.

---

# Architecture Boundaries

ARCH-015-02 defines workflow identity, ownership, classification, definition structure, representation, validation, versioning, release, activation, migration, lifecycle, evidence, and retirement.

It does not:

* Define detailed runtime persistence
* Define transition transaction mechanics
* Define queue and worker protocols
* Define event-delivery infrastructure
* Define timer-storage implementation
* Define human-task user interfaces
* Define agent reasoning
* Define business-service internals
* Define detailed API and SDK contracts
* Select definition notation
* Select a workflow product
* Select build, registry, storage, or deployment technology

Those concerns are addressed by later ARCH-015 chapters and related architecture modules.

---

# Relationship to ARCH-015-01

ARCH-015-01 establishes the Workflow Engine's overall role and conceptual architecture.

ARCH-015-02 defines the governed artifact and lifecycle that determine what each workflow means.

---

# Relationship to ARCH-015-03

ARCH-015-03 defines how an admitted execution applies the effective definition version through durable runtime state and deterministic transitions.

The runtime must not reinterpret or mutate the definition silently.

---

# Relationship to ARCH-015-04 through ARCH-015-07

ARCH-015-04 defines task, activity, queue, and worker execution.

ARCH-015-05 defines event, timer, human, and agent interaction.

ARCH-015-06 defines retry, idempotency, cancellation, reconciliation, and compensation execution.

ARCH-015-07 defines integration and orchestration contracts.

This chapter defines how those behaviors are declared, versioned, validated, and governed.

---

# Relationship to ARCH-011 and ARCH-012

ARCH-011 governs operational change, release, continuity, and lifecycle operations.

ARCH-012 governs policy, risk, controls, compliance, evidence, exceptions, findings, and assurance.

Workflow lifecycle gates operationalize those requirements for each definition version and activation scope.

---

# Relationship to ARCH-013

ARCH-013 provides the developer platform used to author, validate, test, package, release, document, catalog, and retire workflow definitions.

Developer automation supports the lifecycle but does not replace definition ownership or approval authority.

---

# Relationship to ARCH-014

ARCH-014 defines agent identities, goals, authority, execution, tools, and evaluation.

Workflow definitions may declare bounded agent tasks through explicit contracts.

An agent plan is not a workflow definition, and an agent may not change an active definition without the same governed lifecycle required of any other contributor.

---

# Relationship to ARCH-016 through ARCH-020

ARCH-016 provides governed knowledge and memory references used by workflow tasks.

ARCH-017 defines detailed APIs and SDKs for definition management and workflow initiation.

ARCH-018 defines the tenancy model applied to registry, release, activation, and migration.

ARCH-019 defines governed extension points for definition authoring, validation, task types, and integrations.

ARCH-020 provides compliant reference implementations without making one representation or product mandatory.

---

# Summary

The XeniosAI workflow-definition architecture makes every durable process an identifiable, owned, classified, explicit, validated, versioned, approved, and operable enterprise artifact.

It separates canonical process semantics from runtime execution, worker code, diagrams, deployment, and business-service internals.

The lifecycle controls movement from proposal through design, validation, approval, registration, release, scoped activation, change, migration, suspension, deprecation, retirement, and archival.

By binding every execution to an immutable effective version and treating migration as an exceptional governed operation, XeniosAI can evolve workflows without silently changing active process meaning, weakening tenant isolation, duplicating material effects, or losing evidence.

---

# Related Documents

* ARCH-015 — Workflow Engine
* ARCH-015-01 — Workflow Engine Overview
* ARCH-015-03 — Workflow Runtime and State Model
* ARCH-015-04 — Tasks, Activities, and Workers
* ARCH-015-05 — Events, Timers, and Human Interaction
* ARCH-015-06 — Reliability, Retries, and Compensation
* ARCH-015-07 — Workflow Integration and Orchestration
* ARCH-015-08 — Workflow Security, Governance, and Assurance
* ARCH-015-09 — Workflow Operations, Observability, and Performance
* ARCH-015-10 — Future Workflow Engine Evolution
* ARCH-011 — Enterprise Operations
* ARCH-012 — Governance & Compliance
* ARCH-013 — Developer Platform
* ARCH-014 — AI Agent Framework
* ARCH-016 — Knowledge & Memory
* ARCH-017 — API & SDK Architecture
* ARCH-018 — Multi-Tenancy
* ARCH-019 — Plugin & Extension Framework
* ARCH-020 — Reference Implementations
