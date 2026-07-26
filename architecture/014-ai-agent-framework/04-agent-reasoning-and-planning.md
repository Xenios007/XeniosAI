# ARCH-014 · Chapter 04 — Agent Reasoning and Planning

**Architecture Domain:** AI Agent Architecture

**Document ID:** ARCH-014-04

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-26

**Parent Document:** ARCH-014 — AI Agent Framework

---

# Purpose

This document defines the reasoning and planning architecture for XeniosAI agents.

It establishes how agents:

* Interpret authorized goals
* Identify ambiguity and missing information
* Use context, knowledge, and memory
* Develop bounded plans
* Decompose goals into tasks
* Compare alternatives
* Select the next eligible task
* Revise plans when conditions change
* Validate reasoning outputs
* Communicate uncertainty
* Request human decisions
* Determine when to continue, complete, escalate, or stop

Reasoning and planning help an agent decide what may be useful to do.

They do not grant authority, modify business truth, control runtime state, or bypass deterministic platform validation.

---

# Core Principle

Reasoning is advisory to the controlled execution system.

The reasoning capability may propose:

* An interpretation
* A hypothesis
* A plan
* A task
* A tool
* A delegation
* A conclusion
* A completion claim

The runtime, policy services, tools, workflows, and business services determine whether the proposal is:

* Authorized
* Valid
* Eligible
* Within limits
* Safe
* Supported by evidence
* Complete

The model must not be the sole authority for any of those determinations.

---

# Architecture Philosophy

XeniosAI uses reasoning to handle uncertainty, language, context, and adaptive choice.

It uses deterministic services to enforce:

* Identity
* Authorization
* Policy
* Business rules
* State transitions
* Data integrity
* Tenant isolation
* Tool contracts
* Workflow durability
* Evidence

This separation allows the platform to benefit from flexible intelligence without treating probabilistic output as authoritative system behavior.

---

# Reasoning Responsibilities

The reasoning layer may:

* Interpret natural-language goals
* Identify entities and constraints
* Recognize missing or conflicting information
* Form bounded hypotheses
* Retrieve relevant knowledge
* Use approved memory
* Generate candidate plans
* Decompose work
* Compare options
* Recommend the next task
* Interpret tool results
* Explain outcomes
* Express uncertainty
* Recommend escalation

---

# Responsibilities Outside Reasoning

The reasoning layer does not:

* Authenticate actors
* Grant authority
* Determine tenant membership
* Determine property ownership
* Calculate authoritative prices
* Validate authoritative reservations
* Execute database transactions
* Change runtime state directly
* Approve its own material actions
* Create unrestricted credentials
* Override policies
* Declare unsupported information true
* Persist authoritative business state
* Implement durable workflow semantics

---

# Reasoning Inputs

A reasoning step may receive:

* Authorized goal
* Goal constraints
* Completion criteria
* Agent definition
* Current plan
* Eligible tasks
* Execution state summary
* Tenant and property context
* User-provided information
* Authoritative knowledge
* Approved memory
* Tool contracts
* Prior tool results
* Policy decisions
* Human decisions
* Limits remaining
* Operational conditions
* Trust and provenance labels

Inputs should be limited to what is authorized and relevant to the current step.

---

# Reasoning Outputs

A reasoning step should produce a structured result appropriate to its purpose.

Possible outputs include:

* Interpreted goal
* Clarification request
* Candidate plan
* Plan revision
* Candidate task
* Tool recommendation
* Delegation recommendation
* Result interpretation
* Completion recommendation
* Escalation recommendation
* Stop recommendation
* User-facing explanation

Outputs should include:

* Output type
* Related goal
* Related plan and task
* Assumptions
* Sources
* Uncertainty
* Required validation
* Proposed next state

---

# Structured Reasoning Contracts

Reasoning outputs should use versioned structures rather than rely only on free-form prose.

A structured contract may define:

* Intent
* Entities
* Constraints
* Candidate actions
* Selected action
* Required tool
* Expected result
* Risks
* Assumptions
* Confidence category
* Human decision requirement
* Stop condition

Free-form explanation may accompany the structured output but must not contradict it.

---

# Goal Interpretation

Goal interpretation converts an initiating request into a candidate structured goal.

The interpretation should identify:

* Desired outcome
* Initiating actor
* Represented principal
* Tenant
* Property
* Domain
* Relevant entities
* Time horizon
* Constraints
* Completion criteria
* Prohibited outcomes
* Requested autonomy
* Required human participation

The interpreted goal must be validated by the runtime and policy layer before it becomes authoritative.

---

# Goal Fidelity

Reasoning must preserve the intent and boundaries of the authorized goal.

It must not silently:

* Broaden the business outcome
* Add a new tenant
* Add a new property
* Change the represented principal
* Add material actions
* Increase autonomy
* Remove human approval
* Extend deadlines
* Increase budgets
* Convert a recommendation into execution

Material ambiguity requires clarification or explicit policy resolution.

---

# Ambiguity

Ambiguity may concern:

* Person
* Tenant
* Property
* Date
* Quantity
* Business object
* Desired outcome
* Priority
* Approval
* Scope
* Action

The agent should:

1. Identify the ambiguous element.
2. Determine whether safe progress is possible without it.
3. Use authorized context to resolve it when reliable.
4. Present bounded options when useful.
5. Ask for clarification when the answer materially affects outcome or authority.
6. Avoid inventing a value.

---

# Missing Information

Missing information should be classified as:

* Optional
* Derivable from authoritative sources
* Required for planning
* Required for authorization
* Required for action
* Required for completion

The agent may proceed only when missing information is non-material or can be obtained through an approved source.

Missing authority or tenant scope cannot be inferred.

---

# Conflicting Information

When information conflicts, the agent should consider:

* Source authority
* Source freshness
* Source provenance
* Tenant scope
* Property scope
* Policy
* Human decisions
* Business-service state

The agent should not resolve a material conflict through fluency or majority wording.

It should use the authoritative source or escalate the conflict.

---

# Reasoning Modes

Agents may use different reasoning modes.

## Classification

Assigns an input to approved categories.

## Extraction

Identifies structured entities, attributes, constraints, and relationships.

## Retrieval-Grounded Reasoning

Uses authoritative retrieved information to answer or plan.

## Analytical Reasoning

Compares evidence, options, constraints, and tradeoffs.

## Planning

Decomposes an authorized goal into bounded tasks.

## Reflective Validation

Checks a candidate output against explicit criteria.

## Synthesis

Combines validated results into an explanation or outcome.

## Conversational Reasoning

Manages clarification, explanation, and user interaction.

Each mode should use controls and evaluations appropriate to its purpose.

---

# Reasoning Strategy

A reasoning strategy defines how an agent approaches a class of goals.

It may specify:

* Required reasoning modes
* Required sources
* Required tools
* Required validations
* Planning depth
* Human decision points
* Escalation rules
* Stop conditions
* Model capability requirements
* Cost and latency constraints

Strategies should be versioned and evaluated.

They must not embed hidden business rules that belong in business services.

---

# Planning Definition

A plan is:

> A versioned, bounded arrangement of tasks, dependencies, validations, decisions, and completion conditions intended to satisfy an authorized goal.

A plan is not:

* Authority
* A business transaction
* A credential
* A guarantee of success
* The execution state
* A workflow definition
* Proof of completion

---

# Plan Model

A plan should include:

* Plan identifier
* Version
* Execution
* Goal reference
* Objective
* Assumptions
* Constraints
* Tasks
* Dependencies
* Sequence
* Parallelization
* Decision points
* Human tasks
* Tools
* Delegations
* Validations
* Checkpoints
* Failure paths
* Stop conditions
* Completion criteria
* Estimated limits
* Creation time
* Supersession relationship

---

# Plan States

A plan may be:

* Proposed
* Validating
* Awaiting Approval
* Active
* Paused
* Superseded
* Completed
* Rejected
* Invalidated

Only one plan version should be authoritative for task selection at a given execution point unless an explicit branch model applies.

---

# Plan Creation

Plan creation should:

1. Load the authorized goal.
2. Load current constraints and limits.
3. Identify required outcomes.
4. Identify missing information.
5. Identify deterministic services and workflows.
6. Identify candidate tasks.
7. Establish dependencies.
8. Identify human decisions.
9. Identify validations.
10. Estimate resource use.
11. Identify failure and stop conditions.
12. Produce a candidate structured plan.
13. Submit the plan for deterministic validation.

---

# Goal Decomposition

Goal decomposition should produce tasks that are:

* Goal relevant
* Bounded
* Assignable
* Testable
* Observable
* Authorized or authorizable
* Within limits
* Independently completable where practical
* Connected to explicit completion criteria

Tasks should not be so broad that they conceal uncontrolled reasoning or actions.

Tasks should not be so narrow that coordination overhead exceeds value.

---

# Task Dependency Model

Dependencies may include:

* Data dependency
* Knowledge dependency
* Authority dependency
* Approval dependency
* Tool-result dependency
* Business-state dependency
* Temporal dependency
* Workflow dependency
* Human-input dependency
* Delegation dependency

Dependencies should be explicit enough for the runtime to determine readiness.

The model must not mark a dependency satisfied without evidence.

---

# Plan Constraints

Plans must preserve:

* Goal scope
* Identity
* Tenant
* Property
* Authority
* Autonomy level
* Data restrictions
* Tool restrictions
* Time limits
* Cost limits
* Step limits
* Delegation limits
* Human decision requirements
* Policy
* Stop conditions

Constraint violations should invalidate the candidate plan or require a controlled decision.

---

# Authority-Aware Planning

Planning should know the categories of authority available but must not treat possible authority as granted authority.

Each proposed task should identify:

* Required data access
* Required tool
* Required action
* Required tenant scope
* Required property scope
* Required approval
* Required delegation right

The policy and runtime layers determine whether those requirements can be satisfied.

---

# Capability-Aware Planning

The planner should use an approved capability catalog.

Capability descriptions should provide:

* Purpose
* Inputs
* Outputs
* Preconditions
* Side effects
* Authority requirements
* Tenant behavior
* Property behavior
* Cost
* Latency
* Reliability
* Error model
* Version

The planner must not invent capabilities that are not registered or available.

---

# Business-Service-Aware Planning

When a business service owns a decision, the plan should call that service rather than reproduce its logic.

Examples include:

* Availability
* Pricing
* Reservation validation
* Payment state
* Guest authorization
* Property access
* Notification eligibility

The agent may determine when the service is needed.

The service determines the authoritative business result.

---

# Workflow-Aware Planning

The planner should use the Workflow Engine when work requires:

* Durable sequencing
* Long waits
* Timers
* External callbacks
* Human tasks
* Reliable retries
* Compensation
* Cross-service process state

The agent may plan to start, observe, or participate in a workflow.

It must not attempt to maintain durable workflow semantics inside model context.

---

# Knowledge-Aware Planning

The plan should identify:

* Required knowledge
* Authoritative sources
* Retrieval timing
* Freshness requirements
* Tenant scope
* Property scope
* Validation

Knowledge retrieval should be performed when needed rather than embedding uncontrolled copies into permanent agent definitions.

---

# Human-Aware Planning

A plan should explicitly include human participation when:

* Goal ambiguity is material
* Approval is required
* Risk acceptance is required
* Policy requires review
* Expertise is unavailable
* Results conflict
* An irreversible action is proposed
* The agent cannot verify completion
* A user must choose among valid options

Human decisions should be planned as explicit tasks or wait conditions.

---

# Alternative Plans

The planner may generate alternatives when meaningful tradeoffs exist.

Alternatives may differ in:

* Cost
* Speed
* Risk
* Human effort
* Reversibility
* Tool availability
* Model capability
* Tenant preference
* Property conditions

The agent should avoid generating alternatives that violate authority or policy.

---

# Plan Selection

Plan selection should consider:

* Goal fit
* Authority feasibility
* Policy compliance
* Business-service ownership
* Risk
* Reversibility
* Evidence quality
* Completion verifiability
* Resource use
* Latency
* Operational conditions
* Human preference

Selection criteria should be explicit and evaluable.

The most creative plan is not necessarily the best plan.

---

# Plan Validation

Before activation, a candidate plan should be checked for:

* Goal alignment
* Supported tasks
* Prohibited tasks
* Tenant scope
* Property scope
* Authority requirements
* Policy
* Tool availability
* Data access
* Dependencies
* Human decisions
* Limits
* Failure paths
* Stop conditions
* Completion criteria
* Circular dependencies
* Unbounded loops

Deterministic validation should reject structurally invalid plans.

---

# Plan Approval

Plan approval may be required based on:

* Autonomy level
* Action impact
* Reversibility
* Financial effect
* Data sensitivity
* Tenant policy
* Property policy
* Regulatory effect
* External communication
* Delegation

Approval should bind to:

* Plan identifier
* Plan version
* Goal
* Scope
* Actions
* Limits
* Validity period

A material plan revision may invalidate prior approval.

---

# Plan Versioning

Every material revision should create a new plan version.

The version record should include:

* Previous version
* Revision trigger
* Changed tasks
* Changed dependencies
* Changed assumptions
* Changed estimates
* Changed risks
* Changed human decisions
* Changed completion path
* Validation result
* Approval status
* Effective time

Completed task evidence should remain associated with the plan version under which it occurred.

---

# Replanning

Replanning may occur when:

* New information arrives
* An assumption is disproved
* A tool fails
* A dependency changes
* A task fails
* A human changes a decision
* A policy changes
* Authority changes
* Limits approach exhaustion
* Tenant or property conditions change
* A better authorized path becomes available
* Completion criteria change through explicit authority

Replanning must not conceal failure or erase prior evidence.

---

# Replanning Rules

Replanning should:

1. Preserve the authorized goal.
2. Load current authoritative state.
3. Preserve completed task evidence.
4. Reconcile material side effects.
5. Revalidate authority.
6. Revalidate policy.
7. Recalculate remaining limits.
8. Identify invalid assumptions.
9. Produce a new candidate version.
10. Obtain required validation and approval.
11. Supersede the prior plan explicitly.

---

# Plan Drift

Plan drift occurs when execution diverges from the active plan without a controlled revision.

Indicators include:

* Unplanned tool use
* New task categories
* Expanded data access
* New tenant or property scope
* Repeated ad hoc steps
* Unrecorded delegation
* Changed completion criteria
* Unexpected cost

The runtime should detect and stop material drift.

---

# Next-Task Selection

The reasoning layer may recommend the next task from tasks that appear relevant.

The runtime determines eligibility using:

* Active plan version
* Dependency completion
* Required inputs
* Authority
* Approval
* Limits
* Suspension
* Capacity
* Stop conditions

The agent cannot make an ineligible task executable through reasoning alone.

---

# Local Planning and Global Planning

Global planning describes the overall path toward a goal.

Local planning selects the next bounded step using current conditions.

Agents may use both:

* A global plan provides direction and visibility.
* Local planning adapts within the approved structure.

Local adaptation must not bypass global constraints or create material scope changes.

---

# Planning Horizon

Planning horizon should reflect uncertainty and risk.

Short horizons may be appropriate when:

* Conditions change rapidly
* Tool results determine later tasks
* Context is incomplete
* Cost must be controlled

Longer horizons may be appropriate when:

* Dependencies are known
* Human review needs visibility
* Coordination is required
* Workflow design is stable

The framework should avoid detailed speculative plans that will immediately become obsolete.

---

# Assumptions

Plans and conclusions should identify material assumptions.

An assumption should include:

* Statement
* Source
* Reason
* Impact
* Validation method
* Expiration or freshness

Assumptions must not be presented as verified facts.

High-impact assumptions should be validated before material action.

---

# Hypotheses

A hypothesis is a provisional explanation or prediction used to guide information gathering.

Hypotheses should:

* Be bounded
* Be testable
* Identify supporting evidence
* Identify contradicting evidence
* Avoid unnecessary action
* Be discarded when disproved

Hypotheses must not become business state.

---

# Uncertainty Model

Uncertainty may arise from:

* Ambiguous intent
* Missing data
* Conflicting sources
* Stale information
* Model limitations
* Tool failure
* External-system uncertainty
* Future events
* Incomplete execution evidence

The agent should communicate uncertainty using meaningful categories rather than unsupported precision.

Possible categories include:

* Verified
* Supported
* Inferred
* Uncertain
* Unknown
* Conflicted

---

# Confidence

Model-provided confidence is not a probability guarantee.

Confidence signals may help prioritize validation but must not:

* Replace authoritative sources
* Grant authority
* Bypass review
* Override business services
* Prove completion
* Justify cross-tenant access

Confidence should be calibrated through evaluation before operational use.

---

# Grounding

Reasoning should be grounded in:

* Authoritative business-service results
* Approved enterprise knowledge
* Tenant knowledge
* Property knowledge
* Current execution state
* Verified tool output
* Attributable human decisions

Grounding records should preserve:

* Source
* Version
* Retrieval time
* Tenant and property scope
* Trust level
* Relevant excerpt or reference

---

# Truth Hierarchy

When sources conflict, the agent should prefer the source with authority for the specific fact.

An illustrative hierarchy is:

1. Authoritative business-service state
2. Approved policy and configuration
3. Governed enterprise, tenant, or property knowledge
4. Attributable current human input
5. Verified tool result
6. Approved memory
7. Agent inference

The hierarchy may vary by domain, but agent inference should not override authoritative state.

---

# Result Interpretation

Tool and service results should be interpreted using:

* Contract semantics
* Status
* Provenance
* Freshness
* Tenant and property
* Completeness
* Error classification
* Business meaning

A successful transport response does not necessarily mean the business action succeeded.

The agent should use the contract's authoritative outcome.

---

# Validation Architecture

Reasoning outputs may be validated through:

* Schema validation
* Type validation
* Constraint validation
* Policy evaluation
* Business-service validation
* Source verification
* Consistency checks
* Independent reasoning
* Human review
* Scenario evaluation

Validation strength should be proportionate to impact.

---

# Critique and Review

An agent may critique a candidate plan or output by checking:

* Goal fit
* Unsupported claims
* Missing sources
* Constraint violations
* Unhandled failure
* Unnecessary actions
* Missing approval
* Tenant risk
* Property risk
* Completion gaps

Self-critique is useful but is not independent assurance.

High-risk behavior may require a separate validator, policy engine, or human reviewer.

---

# Independent Validation

Independent validation should avoid relying on the same uncontrolled assumptions as the original reasoning step.

It may use:

* Deterministic rules
* Different evidence
* A specialized validator
* A separate model
* A separate agent role
* Human expertise

Using a second model call is not automatically independent validation.

---

# Human Decision Requests

A decision request should include:

* Decision required
* Why it is required
* Available options
* Recommended option where appropriate
* Supporting evidence
* Risks
* Consequences
* Scope
* Deadline
* Default behavior if unanswered

The agent should not manipulate the decision maker through false certainty or hidden alternatives.

---

# Explanation

Explanations should communicate:

* What was understood
* What information was used
* What was done
* What authoritative result was returned
* What assumptions remain
* What uncertainty remains
* What human action is needed

Explanations should be proportionate to the audience and risk.

---

# Reasoning Privacy

The framework should not treat unrestricted hidden model deliberation as required enterprise evidence.

Evidence should capture:

* Material decision
* Inputs and sources
* Selected plan
* Policy result
* Tool action
* Validation
* Outcome

Sensitive prompts, personal data, secrets, and unnecessary intermediate content should not be retained indiscriminately.

---

# Instruction Architecture

Agent instructions should define:

* Purpose
* Role
* Boundaries
* Supported goals
* Prohibited behavior
* Authority assumptions
* Source rules
* Tool rules
* Human decision rules
* Output contracts
* Stop conditions

Instructions must be versioned, evaluated, and protected from unauthorized modification.

They must not contain credentials or hidden business-state copies.

---

# Instruction Priority

Instruction resolution should preserve an explicit priority model.

Illustrative priority:

1. Platform safety and security controls
2. Lawful governance and policy
3. Agent definition and authority
4. Authorized execution goal
5. Current plan
6. User preferences within scope
7. Retrieved content

Retrieved content and tool output should be treated as data unless explicitly authorized as instructions.

---

# Untrusted Content

Untrusted content may attempt to:

* Change the goal
* Override policy
* Request secrets
* Trigger unauthorized tools
* Expand tenant scope
* Impersonate an approver
* Manipulate plan selection

Reasoning should preserve trust labels and refuse to treat untrusted content as higher-priority authority.

Detailed security controls are defined in ARCH-014-08.

---

# Model Selection

Reasoning capability selection may consider:

* Task type
* Required quality
* Data sensitivity
* Modality
* Language
* Context size
* Latency
* Cost
* Tenant contract
* Regional restrictions
* Evaluation performance

The model must be approved for the data and task.

---

# Model Fallback

Fallback may occur when:

* A model is unavailable
* Capacity is exhausted
* Latency exceeds limits
* Evaluation policy changes
* Provider restrictions apply

Fallback must preserve:

* Minimum quality
* Security
* Privacy
* Tenant commitments
* Regional controls
* Output contracts
* Evidence

Fallback should not silently change material behavior.

---

# Cost-Aware Reasoning

Reasoning should use resources proportionately.

Controls may include:

* Simple classification before complex planning
* Retrieval before large-context reasoning
* Reuse of validated structured state
* Bounded candidate generation
* Bounded critique
* Appropriate model routing
* Stop when completion is verified

Cost optimization must not weaken required correctness, security, or tenant isolation.

---

# Latency-Aware Reasoning

Interactive agents may:

* Provide immediate acknowledgment
* Stream clearly labeled progress
* Parallelize independent retrieval
* Defer non-critical enrichment
* Use approved faster capabilities

Partial output must not be represented as final or authoritative.

---

# Multi-Agent Planning

Planning may assign specialized tasks to other agents when justified.

The plan should define:

* Delegate role
* Task
* Expected result
* Authority subset
* Context subset
* Limits
* Deadline
* Validation
* Return contract

Multi-agent planning must not create unbounded delegation graphs.

Detailed coordination is defined in ARCH-014-06.

---

# Plan Aggregation

When multiple agents contribute, the coordinating agent should:

* Preserve source attribution
* Identify conflicts
* Compare evidence
* Avoid majority-as-truth
* Validate task completion
* Maintain tenant boundaries
* Record accepted and rejected contributions

The coordinator remains bounded by its own authority and the parent goal.

---

# Stop Conditions

Reasoning should recommend stop, pause, or escalation when:

* Goal is complete
* Completion cannot be verified
* Required information is unavailable
* Sources conflict materially
* Authority is absent
* Approval is denied
* Policy blocks progress
* Tenant or property is ambiguous
* No valid plan exists
* Required capability is unavailable
* Limits are exhausted
* Risk exceeds threshold
* Replanning repeats without progress
* A human cancels

The runtime enforces the resulting state transition.

---

# Loop Prevention

Reasoning loops may be detected through:

* Repeated plan versions
* Repeated task selection
* Repeated tool calls
* No new evidence
* No state progress
* Repeated clarification
* Limit consumption without outcome improvement

The framework should apply bounded attempts and terminate or escalate when progress stalls.

---

# Completion Reasoning

The agent may recommend completion when:

* Required tasks appear complete
* Completion criteria appear satisfied
* Authoritative results are available
* Required approvals exist
* No material uncertainty remains

The runtime independently validates completion.

A fluent summary is not completion evidence.

---

# Failure Reasoning

When a task fails, reasoning may recommend:

* Safe retry
* Alternative approved tool
* Replanning
* Reduced scope
* Human input
* Escalation
* Termination

The recommendation must consider:

* Error class
* Side effects
* Idempotency
* Authority
* Remaining limits
* Business impact

---

# Domain Examples

## Reservation Inquiry

The agent may interpret dates, guest count, and requested amenities.

It must use authoritative availability and pricing services rather than calculate or invent the final result.

## Property Operations

The agent may analyze an incident and recommend steps.

It must not bypass emergency procedures, property authority, or operational workflows.

## Developer Agent

The agent may plan code changes, tests, and documentation.

It must preserve repository scope, architecture authority, review, and change controls.

---

# Reasoning Observability

Observability should make it possible to understand:

* Reasoning purpose
* Model and configuration
* Input source categories
* Plan versions
* Assumptions
* Selected tasks
* Replan triggers
* Validation outcomes
* Human decision requests
* Stop recommendations
* Cost
* Latency

Observability must not expose secrets, unrelated personal data, hidden reasoning, or cross-tenant context.

---

# Reasoning Evidence

Evidence should record:

* Goal interpretation
* Material assumptions
* Source references
* Candidate and selected plan
* Plan validation
* Plan approval
* Plan revisions
* Task recommendations
* Tool recommendations
* Human decision requests
* Validation results
* Completion or stop recommendation

Evidence should capture decision-relevant artifacts rather than unrestricted internal deliberation.

---

# Evaluation

Reasoning and planning should be evaluated for:

* Goal fidelity
* Intent accuracy
* Entity accuracy
* Source grounding
* Assumption quality
* Plan completeness
* Plan efficiency
* Constraint compliance
* Tool selection
* Human decision quality
* Replanning quality
* Loop avoidance
* Uncertainty communication
* Completion accuracy
* Stop behavior
* Cost
* Latency

Detailed evaluation architecture is defined in ARCH-014-09.

---

# Quality Attributes

## Goal Fidelity

Reasoning preserves the authorized outcome and constraints.

## Grounding

Claims and decisions use attributable sources.

## Boundedness

Planning, candidates, steps, delegation, and revisions remain limited.

## Adaptability

Plans may change when authoritative conditions change.

## Explainability

Material decisions, assumptions, sources, and outcomes are understandable.

## Testability

Reasoning contracts and planning behavior can be evaluated.

## Portability

Reasoning semantics do not depend on one model provider.

## Efficiency

Reasoning depth and model use are proportionate to the task.

## Safety

Reasoning cannot grant itself authority or bypass deterministic controls.

---

# Architectural Rules

Agent reasoning and planning must:

* Preserve the authorized goal.
* Identify ambiguity and missing material information.
* Ask for clarification rather than invent required values.
* Use authoritative sources before inference.
* Label material assumptions and uncertainty.
* Produce structured, versioned outputs.
* Keep plans bounded and task oriented.
* Identify dependencies and completion criteria.
* Identify required authority without granting it.
* Use registered capabilities only.
* Preserve business logic in business services.
* Use the Workflow Engine for durable deterministic processes.
* Include human decisions explicitly.
* Validate plans before activation.
* Version material plan revisions.
* Preserve completed task evidence across replanning.
* Detect plan drift.
* Detect reasoning loops.
* Keep local adaptation within approved global constraints.
* Treat retrieved content as data according to trust level.
* Prevent model confidence from replacing evidence.
* Require independent validation proportionate to risk.
* Keep unrestricted hidden reasoning out of required evidence.
* Recommend stopping when truth, authority, safety, or progress cannot be established.
* Submit completion claims to deterministic runtime validation.
* Remain model and provider neutral.

---

# Architecture Boundaries

ARCH-014-04 defines:

* Goal interpretation
* Ambiguity
* Missing and conflicting information
* Reasoning modes
* Structured reasoning outputs
* Planning
* Goal decomposition
* Task dependencies
* Plan constraints
* Plan validation
* Plan approval
* Plan versioning
* Replanning
* Plan drift
* Next-task recommendation
* Assumptions
* Uncertainty
* Grounding
* Critique
* Human decisions
* Stop and completion reasoning

It does not:

* Grant authority
* Control runtime state
* Define model implementations
* Define tool implementations
* Define business rules
* Define durable workflow internals
* Define knowledge and memory storage
* Define detailed multi-agent protocols
* Select a model or agent library

---

# Summary

The XeniosAI reasoning and planning architecture enables agents to interpret goals, manage ambiguity, use grounded context, develop bounded plans, select candidate tasks, revise plans, and explain outcomes.

Reasoning remains advisory to deterministic control. It may recommend a plan, tool, delegation, completion, or escalation, but it cannot grant authority, activate an ineligible task, change business truth, or advance runtime state by itself.

Plans are versioned structures tied to an authorized goal, explicit constraints, tasks, dependencies, validations, human decisions, limits, failure paths, and completion criteria.

By combining adaptive reasoning with deterministic validation, XeniosAI can respond intelligently to changing conditions without allowing probabilistic output to become ungoverned enterprise action.

---

# Related Documents

* ARCH-014 — AI Agent Framework
* ARCH-014-01 — AI Agent Framework Overview
* ARCH-014-02 — Agent Identity and Lifecycle
* ARCH-014-03 — Agent Runtime and Execution Model
* ARCH-014-05 — Tools, Actions, and Environment
* ARCH-014-06 — Multi-Agent Coordination
* ARCH-014-07 — Agent Memory, Knowledge, and Context
* ARCH-014-08 — Agent Security, Governance, and Assurance
* ARCH-014-09 — Agent Operations, Observability, and Evaluation
* ARCH-004 — AI Orchestrator
* ARCH-012 — Governance & Compliance
* ARCH-015 — Workflow Engine
* ARCH-016 — Knowledge & Memory

