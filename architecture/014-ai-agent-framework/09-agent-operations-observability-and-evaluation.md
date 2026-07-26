# ARCH-014 · Chapter 09 — Agent Operations, Observability, and Evaluation

**Architecture Domain:** AI Agent Architecture

**Document ID:** ARCH-014-09

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-27

**Parent Document:** ARCH-014 — AI Agent Framework

---

# Purpose

This document defines how XeniosAI agents are operated, observed, evaluated, supported, controlled, recovered, and continuously improved in production.

It establishes:

* Agent operational ownership
* Service commitments
* Health models
* Telemetry
* Execution tracing
* Business and quality signals
* Evaluation architecture
* Release and regression gates
* Drift detection
* Incident and problem management
* Capacity and performance
* Cost management
* Change and rollback
* Continuity and recovery
* Human intervention
* Operational evidence
* Feedback and improvement

ARCH-010 provides enterprise observability.

ARCH-011 provides Enterprise Operations.

ARCH-014-09 applies those capabilities to AI agents and the Agent Framework.

---

# Core Operations Principle

An agent is healthy only when it produces safe, authorized, reliable, and useful outcomes.

Infrastructure availability alone does not establish agent health.

Agent operations must consider:

* Business outcome
* Goal completion
* Accuracy
* Safety
* Authority compliance
* Tenant isolation
* Human intervention
* Latency
* Cost
* Runtime reliability
* Dependency health

---

# Core Observability Principle

Every material agent outcome should be explainable through correlated evidence from:

* Initiating actor
* Agent and version
* Execution
* Goal
* Plan and tasks
* Context sources
* Model use
* Tool actions
* Delegations
* Human decisions
* Business-service results
* Runtime state transitions

Observability must not depend on reconstructing unrestricted model deliberation.

---

# Core Evaluation Principle

Evaluation is a lifecycle control, not a one-time model benchmark.

Agents should be evaluated:

* During design
* During development
* Before release
* Before activation
* During controlled rollout
* Continuously in production
* After material change
* After incidents
* Before autonomy increases
* Before tenant or property expansion

---

# Operational Scope

Agent operations cover:

* Agent definitions
* Agent versions
* Runtime services
* Models
* Model providers
* Tools
* Knowledge and memory dependencies
* Workflows
* Integrations
* Tenant configurations
* Property configurations
* Evaluation suites
* Evidence systems
* Human support processes

---

# Ownership

Every production agent must have:

* Accountable owner
* Operational owner
* Product or business owner
* Implementation owner
* Support path
* Escalation path
* Security contact
* Governance contact where required

Unowned agents should not remain active.

---

# Operational Responsibilities

The operational owner should manage:

* Availability
* Runtime health
* Capacity
* Performance
* Quality
* Safety
* Cost
* Dependencies
* Incidents
* Problems
* Changes
* Continuity
* Suspension
* Recovery
* Support
* Operational evidence

---

# Operational Readiness

Before activation, an agent should have:

* Approved definition and version
* Ownership
* Risk classification
* Required evaluations
* Service commitments
* Health indicators
* Dashboards
* Alerts
* Runbooks
* Capacity
* Cost limits
* Incident procedures
* Suspension controls
* Rollback
* Continuity
* Support
* Known limitations
* Required evidence

---

# Service Model

An agent should be represented as an operational service or service component with:

* Service identifier
* Purpose
* Users
* Tenants
* Properties
* Dependencies
* Service commitments
* Support hours
* Criticality
* Recovery objectives
* Lifecycle state
* Current versions
* Runbooks

---

# Service Commitments

Service commitments may address:

* Availability
* Admission latency
* Response latency
* Completion time
* Goal success
* Accuracy
* Safety
* Human escalation
* Recovery
* Tenant isolation
* Support response

Commitments should reflect business value and risk rather than model performance alone.

---

# Agent Health Model

Agent health should combine:

## Business Health

Guest, tenant, property, revenue, operational, or developer outcomes.

## Quality Health

Accuracy, grounding, completion, safety, and intervention.

## Runtime Health

Admission, state, scheduling, checkpoints, waits, cancellation, and closure.

## Dependency Health

Models, providers, tools, knowledge, memory, workflows, integrations, and business services.

## Governance Health

Ownership, approvals, evaluation currency, exceptions, findings, and evidence.

---

# Health States

An agent may be:

* Healthy
* Degraded
* Restricted
* Suspended
* Recovering
* Unavailable
* Unknown

Health state should drive controlled behavior such as:

* Normal operation
* Reduced autonomy
* Read-only mode
* Human approval
* Provider fallback
* Admission throttling
* Suspension

---

# Signals

Agent signals may include:

* Metrics
* Logs
* Traces
* Domain events
* Audit events
* Evaluation results
* Human feedback
* User complaints
* Incidents
* Business outcomes
* Cost records
* Provider notifications

Signals should be attributable, tenant aware, property aware, and actionable.

---

# Metrics

Metrics may include:

* Admission count
* Admission denial
* Execution count
* Execution state distribution
* Completion rate
* Failure rate
* Cancellation rate
* Escalation rate
* Human intervention rate
* Tool success
* Delegation success
* Context retrieval quality
* Model latency
* Tool latency
* Total execution latency
* Retry count
* Cost
* Limit exhaustion
* Tenant and property outcomes

---

# Logs

Logs should record operationally useful events such as:

* State transition
* Error
* Policy decision reference
* Tool invocation reference
* Model invocation reference
* Wait and resume
* Delegation
* Cancellation
* Suspension
* Reconciliation
* Completion

Logs must not contain:

* Credentials
* Secrets
* Unnecessary personal data
* Cross-tenant content
* Unrestricted hidden reasoning

---

# Distributed Tracing

Tracing should correlate:

* User interaction
* Agent execution
* Reasoning step
* Context retrieval
* Model invocation
* Tool invocation
* Workflow
* Business service
* Delegated agent
* Human decision
* External provider

Trace propagation should preserve tenant and property boundaries.

---

# Domain Events

Agent domain events may include:

* Goal Admitted
* Plan Activated
* Task Assigned
* Approval Requested
* Tool Action Completed
* Delegation Created
* Goal Completed
* Agent Suspended
* Evaluation Failed

Events should represent meaningful state and outcome changes rather than raw model tokens.

---

# Audit Events

Audit events should capture:

* Identity
* Authority
* Policy
* Approval
* Sensitive data access
* Material tool action
* Delegation
* Human intervention
* Suspension
* Exception
* Lifecycle transition

Audit evidence requires stronger integrity, retention, and access control than general diagnostics.

---

# Business Observability

Business observability should connect agent behavior to outcomes such as:

* Successful guest assistance
* Reservation conversion
* Correct price presentation
* Property-response time
* Issue resolution
* Developer delivery quality
* Reduced manual effort
* Avoided incident impact

Technical success without business success should not be reported as complete agent success.

---

# Quality Observability

Quality signals may include:

* Grounded-answer rate
* Unsupported-claim rate
* Correct tool-selection rate
* Completion precision
* Completion recall
* Human correction
* Escalation appropriateness
* Safety violation
* Policy violation
* Tenant-isolation violation
* Replanning effectiveness
* Loop detection

---

# Agent Dashboard

An agent dashboard should provide:

* Identity and version
* Lifecycle and health
* Ownership
* Tenants and properties
* Execution volume
* Outcomes
* Quality
* Safety
* Latency
* Cost
* Dependencies
* Incidents
* Changes
* Evaluations
* Exceptions
* Current restrictions

Access must be scoped.

---

# Alerts

Alerts should identify:

* Condition
* Impact
* Agent
* Version
* Tenant
* Property
* Time
* Evidence
* Owner
* Required action
* Escalation

Alerting should avoid excessive noise and prioritize actionable business impact.

---

# Alert Conditions

Possible conditions include:

* Completion collapse
* Unsupported-claim increase
* Tool failure spike
* Provider latency
* Cost anomaly
* Tenant mismatch
* Property mismatch
* Policy violation
* Prompt-injection signal
* Delegation loop
* Excessive human intervention
* Checkpoint failure
* Reconciliation backlog
* Evaluation regression
* Evidence gap

---

# Evaluation Architecture

Evaluation should combine:

* Deterministic tests
* Scenario tests
* Simulation
* Model-based evaluation
* Human review
* Security testing
* Red teaming
* Production outcome analysis

No single evaluation method is sufficient for every agent.

---

# Evaluation Layers

## Component Evaluation

Tests prompts, reasoning functions, retrieval, tool contracts, and validators.

## Agent Evaluation

Tests end-to-end goal pursuit within one agent.

## Multi-Agent Evaluation

Tests delegation, conflict, aggregation, and resource use.

## Workflow Evaluation

Tests agent participation in durable processes.

## System Evaluation

Tests business services, tools, models, tenants, properties, and operations together.

## Production Evaluation

Measures actual outcomes and control behavior.

---

# Evaluation Dataset

Evaluation datasets should provide:

* Use-case coverage
* Risk coverage
* Tenant scenarios
* Property scenarios
* Language coverage
* Edge cases
* Adversarial cases
* Failure cases
* Human-decision cases
* Known expected outcomes
* Versioning
* Provenance
* Data rights

Production data should not be copied into evaluation environments without governance.

---

# Scenario Model

Each scenario should identify:

* Goal
* Agent version
* Initial state
* Tenant and property
* Inputs
* Available context
* Available tools
* Policy
* Expected outcome
* Prohibited outcomes
* Required evidence
* Evaluation criteria

---

# Deterministic Evaluation

Deterministic checks may validate:

* Schema
* Correct business-service call
* Tool authorization
* Tenant isolation
* Property isolation
* Required approval
* State transition
* Completion criteria
* Stop conditions
* Evidence

Deterministic checks should be preferred for deterministic requirements.

---

# Model-Based Evaluation

Model-based evaluation may assess:

* Helpfulness
* Explanation quality
* Relevance
* Tone
* Semantic similarity
* Complex output quality

It should use:

* Versioned criteria
* Calibrated evaluators
* Bias analysis
* Human validation
* Disagreement handling

A model judge must not be the only assurance for high-risk controls.

---

# Human Evaluation

Human reviewers may assess:

* Domain correctness
* User experience
* Safety
* Fairness
* Explanation
* Cultural and language quality
* Business suitability
* Unexpected behavior

Reviewers should receive defined criteria and appropriate context.

---

# Evaluation Metrics

Metrics may include:

* Goal completion
* Factual accuracy
* Grounding
* Tool selection
* Action correctness
* Authority compliance
* Policy compliance
* Safety
* Robustness
* Human-interaction quality
* Recovery
* Latency
* Cost
* Business value

---

# Thresholds

Evaluation thresholds should:

* Be defined before release decisions
* Reflect risk
* Include hard safety gates
* Include quality expectations
* Identify uncertainty
* Support comparison with prior versions
* Be reviewed after incidents

Average score should not conceal critical failure categories.

---

# Regression Evaluation

Every material agent change should run relevant regression suites.

Changes include:

* Model
* Prompt or instruction
* Tool
* Knowledge source
* Memory policy
* Plan strategy
* Autonomy
* Provider
* Runtime
* Tenant configuration
* Property configuration

---

# Release Gates

Release gates may require:

* Required tests passed
* No critical safety failures
* No tenant-isolation failures
* No unauthorized actions
* Quality above threshold
* Performance within objective
* Cost within limit
* Security review
* Operational readiness
* Evidence complete
* Required approval

---

# Shadow Evaluation

Shadow mode allows a new version to:

* Observe representative input
* Produce non-operative output
* Avoid material actions
* Compare against active behavior
* Generate evaluation evidence

Shadow execution must preserve data governance and provider restrictions.

---

# Controlled Rollout

Rollout may progress through:

* Internal users
* Test tenants
* Selected tenants
* Selected properties
* Limited traffic
* Read-only mode
* Recommendation mode
* Human approval mode
* Bounded execution

Each stage should define success and stop conditions.

---

# Drift

Drift may affect:

* Input distribution
* User behavior
* Tenant configuration
* Property conditions
* Knowledge
* Memory
* Model behavior
* Tool behavior
* Provider behavior
* Outcomes
* Cost

Drift does not always mean failure, but it requires evaluation.

---

# Drift Detection

Signals may include:

* Outcome change
* Error change
* Escalation change
* Human-correction change
* Tool-selection change
* Context-source change
* Cost change
* Latency change
* Evaluation regression
* New unsupported patterns

---

# Drift Response

Response may include:

* Investigation
* New evaluation scenarios
* Scope reduction
* Autonomy reduction
* Routing change
* Context update
* Tool restriction
* Model rollback
* Suspension
* Retraining or replacement where governed

---

# Incident Management

Agent incidents may involve:

* Unsafe response
* Unauthorized action
* Tenant leakage
* Property leakage
* Incorrect business outcome
* Tool misuse
* Provider outage
* Cost runaway
* Delegation loop
* Evidence failure
* Inability to cancel

ARCH-011 governs incident coordination.

---

# Incident Triage

Triage should establish:

* Business impact
* Guest impact
* Tenants
* Properties
* Agent and versions
* Active executions
* Data involved
* Tools involved
* Provider involved
* Containment
* Evidence
* Communication

---

# Containment

Containment may include:

* Suspend agent
* Suspend version
* Restrict autonomy
* Disable tool
* Disable provider
* Block tenant scope
* Block property scope
* Revoke credentials
* Cancel executions
* Require human approval

Containment should be scoped to minimize unnecessary business disruption.

---

# Problem Management

Problem management should identify:

* Root causes
* Contributing conditions
* Recurring patterns
* Control failures
* Evaluation gaps
* Documentation gaps
* Provider dependencies
* Required architecture changes

Corrective actions should feed regression suites.

---

# Change and Release Operations

Agent changes should identify:

* Changed artifact
* Risk
* Evaluation impact
* Tenant impact
* Property impact
* Operational impact
* Rollout
* Stop conditions
* Rollback
* Evidence
* Communication

Model-provider changes are production changes even when no source code changes.

---

# Rollback

Rollback should support:

* Agent version
* Prompt package
* Model routing
* Tool version
* Policy
* Configuration
* Tenant activation
* Property activation

Rollback must consider executions already in progress and material actions already completed.

---

# Capacity Management

Capacity planning should consider:

* Execution volume
* Concurrent steps
* Context retrieval
* Model limits
* Provider quotas
* Tool limits
* Workflow load
* State storage
* Evaluation load
* Tenant growth
* Property growth
* Peak events

---

# Performance

Performance should measure:

* Admission latency
* Scheduling latency
* Context latency
* Model latency
* Tool latency
* Human wait
* Workflow wait
* End-to-end completion

Optimization should focus on business-perceived latency and correctness.

---

# Cost Management

Cost should be attributable by:

* Agent
* Version
* Execution
* Tenant
* Property
* Model
* Provider
* Tool
* Evaluation

Cost controls may include budgets, quotas, routing, caching, context minimization, and bounded retries.

---

# Cost Efficiency

Cost efficiency should compare:

* Cost per successful goal
* Cost per business outcome
* Cost per tenant
* Cost per property
* Cost of human intervention
* Cost of failure
* Cost of multi-agent coordination

Low cost with poor outcomes is not efficient.

---

# Continuity

Continuity planning should address:

* Runtime outage
* Model outage
* Provider outage
* Tool outage
* Knowledge outage
* Memory outage
* Workflow outage
* Regional outage
* Evidence outage

---

# Graceful Degradation

Degraded modes may include:

* Read-only
* Recommendation only
* Human approval required
* Limited tools
* Alternate approved model
* Cached knowledge within freshness
* Manual property procedure
* Safe unavailability

Degradation must be visible to users and operators where material.

---

# Recovery

Recovery should:

* Restore authoritative state
* Reconcile active actions
* Restore checkpoints
* Revalidate authority
* Revalidate dependencies
* Resume safely
* Preserve tenant isolation
* Validate service health
* Increase monitoring

---

# Human Intervention

Operations should support:

* Pause
* Resume
* Cancel
* Takeover
* Correct
* Approve
* Restrict
* Suspend
* Restore
* Retire

Operator interfaces must present exact scope and consequences.

---

# Runbooks

Runbooks should cover:

* Quality degradation
* Provider outage
* Tool failure
* Context failure
* Tenant-isolation alert
* Cost anomaly
* Stuck execution
* Failed cancellation
* Reconciliation backlog
* Agent suspension
* Secure restoration
* Rollback

---

# Operational Evidence

Evidence should support:

* Service review
* Incident investigation
* Change review
* Governance review
* Assurance
* Tenant reporting
* Property reporting
* Continuous improvement

Evidence access must preserve privacy and tenant scope.

---

# Feedback Sources

Feedback may come from:

* Users
* Tenants
* Properties
* Operators
* Developers
* Business owners
* Security
* Governance
* Evaluators
* Incidents
* Support
* Outcome analytics

---

# Feedback Processing

Feedback should be:

* Attributable where appropriate
* Classified
* De-duplicated
* Prioritized by impact
* Linked to agent and version
* Privacy protected
* Converted into evaluation or remediation
* Closed with outcome

Agent-generated feedback should not automatically modify agent behavior.

---

# Continuous Improvement

Improvement may include:

* Better context
* Better plan strategy
* Better tool contracts
* Better model routing
* Better human interaction
* Reduced autonomy
* Increased autonomy after evidence
* Improved runbooks
* New evaluation scenarios
* Architecture change

Every improvement remains subject to controlled change.

---

# Operational Review

Periodic review should examine:

* Business value
* Quality
* Safety
* Reliability
* Cost
* Human intervention
* Incidents
* Drift
* Exceptions
* Findings
* Tenant adoption
* Property adoption
* Provider risk
* Retirement need

---

# Quality Attributes

## Operability

Teams can observe, support, control, recover, and retire agents.

## Measurability

Business, quality, safety, runtime, and cost outcomes are quantifiable.

## Traceability

Execution behavior is correlated across platform capabilities.

## Reliability

Failures are detected, contained, recovered, or safely stopped.

## Scalability

Capacity grows across tenants, properties, models, tools, and evaluations.

## Adaptability

Evaluation and operations respond to drift and change.

## Accountability

Operational decisions and interventions are attributable.

---

# Architectural Rules

Agent operations, observability, and evaluation must:

* Assign accountable and operational owners.
* Define operational readiness before activation.
* Measure business outcomes, not infrastructure alone.
* Correlate identities, executions, models, tools, workflows, and business results.
* Preserve tenant and property scope in telemetry.
* Keep secrets and unnecessary hidden reasoning out of logs.
* Use actionable health states.
* Define service and quality commitments.
* Evaluate throughout the lifecycle.
* Use deterministic tests for deterministic requirements.
* Avoid relying solely on model-based evaluation.
* Maintain versioned evaluation datasets and scenarios.
* Apply risk-based release thresholds.
* Prevent averages from hiding critical failures.
* Run regression evaluations after material changes.
* Use controlled rollout with explicit stop conditions.
* Detect and respond to drift.
* Support rapid scoped containment.
* Feed incident findings into regression suites.
* Treat provider and model changes as production changes.
* Support rollback and reconciliation.
* Attribute capacity and cost.
* Optimize cost per successful outcome.
* Define graceful degradation and continuity.
* Support authorized human intervention.
* Convert feedback through governed change.
* Review continued business value and retirement need.

---

# Architecture Boundaries

ARCH-014-09 defines:

* Agent operations
* Service commitments
* Health
* Metrics, logs, traces, and events
* Business and quality observability
* Evaluation layers
* Evaluation datasets
* Regression
* Release gates
* Drift
* Incidents and problems
* Change and rollback
* Capacity
* Performance
* Cost
* Continuity
* Recovery
* Human intervention
* Feedback

It does not:

* Select observability products
* Select evaluation products
* Define model training
* Define service-management products
* Replace ARCH-010 Observability
* Replace ARCH-011 Enterprise Operations
* Replace ARCH-012 Governance & Compliance

---

# Summary

The XeniosAI agent operations architecture treats an agent as healthy only when it produces safe, authorized, reliable, and useful business outcomes.

Observability correlates the initiating actor, agent version, execution, goal, context, model, tools, workflows, delegations, human decisions, and authoritative business results without relying on unrestricted hidden reasoning.

Evaluation spans deterministic tests, scenarios, simulation, model-based assessment, human review, security testing, controlled rollout, and production outcomes. It continues throughout the lifecycle and responds to drift, incidents, model changes, provider changes, and autonomy changes.

By combining business-first health, strong operational ownership, scoped containment, controlled rollback, capacity and cost accountability, continuity, and governed feedback, XeniosAI can operate agents as dependable enterprise services rather than experimental model calls.

---

# Related Documents

* ARCH-014 — AI Agent Framework
* ARCH-014-01 — AI Agent Framework Overview
* ARCH-014-02 — Agent Identity and Lifecycle
* ARCH-014-03 — Agent Runtime and Execution Model
* ARCH-014-04 — Agent Reasoning and Planning
* ARCH-014-05 — Tools, Actions, and Environment
* ARCH-014-06 — Multi-Agent Coordination
* ARCH-014-07 — Agent Memory, Knowledge, and Context
* ARCH-014-08 — Agent Security, Governance, and Assurance
* ARCH-010 — Observability
* ARCH-011 — Enterprise Operations
* ARCH-012 — Governance & Compliance
* ARCH-015 — Workflow Engine

