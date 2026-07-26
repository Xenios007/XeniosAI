# ARCH-014 · Chapter 07 — Agent Memory, Knowledge, and Context

**Architecture Domain:** AI Agent Architecture

**Document ID:** ARCH-014-07

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-27

**Parent Document:** ARCH-014 — AI Agent Framework

---

# Purpose

This document defines how XeniosAI agents consume, assemble, use, update, and dispose of memory, knowledge, and context.

It establishes the agent-facing architecture for:

* Knowledge retrieval
* Memory retrieval
* Working context
* Context assembly
* Source authority
* Provenance
* Trust classification
* Freshness
* Relevance
* Context budgets
* Tenant and property isolation
* Personalization
* Execution state references
* Memory write-back
* Knowledge publication
* Retention and deletion
* Context contamination prevention
* Evidence and observability

ARCH-016 defines the detailed Knowledge & Memory platform.

ARCH-014-07 defines how agents use that platform safely.

---

# Core Distinctions

XeniosAI separates knowledge, memory, context, and state.

## Knowledge

Answers:

> What is considered authoritative or governed information?

## Memory

Answers:

> What relevant historical or learned context may help this authorized interaction or execution?

## Context

Answers:

> What curated working information does the current reasoning step need?

## Execution State

Answers:

> What has authoritatively happened in this execution?

These concepts must not be collapsed into one model prompt, conversation log, or storage system.

---

# Architectural Principle

The model context window is a temporary reasoning input.

It is not:

* The source of truth
* The agent registry
* The execution state store
* The knowledge repository
* The long-term memory store
* The audit record
* The authorization system

Information needed beyond the current reasoning step should be stored and governed by its owning capability.

---

# Architecture Goals

The architecture should:

* Prefer authoritative information
* Retrieve only what is needed
* Preserve source attribution
* Preserve tenant and property boundaries
* Distinguish fact, memory, user input, and inference
* Protect personal and sensitive information
* Keep context current
* Control token and resource use
* Prevent untrusted content from becoming instructions
* Prevent agent output from becoming authoritative automatically
* Support correction, deletion, and expiration
* Produce explainable and reviewable context use

---

# Knowledge Categories

Agents may consume:

## Enterprise Knowledge

Architecture, policies, standards, product information, procedures, and approved organizational content.

## Tenant Knowledge

Tenant-specific policies, configurations, services, agreements, and operating information.

## Property Knowledge

Property details, amenities, rules, procedures, local integrations, and operating conditions.

## Domain Knowledge

Governed information for hospitality, reservations, payments, operations, security, development, and other domains.

## Business-State Knowledge

Current authoritative results from business services.

Business-state knowledge should be retrieved from the owning service rather than treated as static documentation.

---

# Memory Categories

## Conversation Memory

Recent interaction needed for continuity.

## Session Memory

Temporary interaction information valid for the current session.

## Execution Memory

Intermediate execution references, prior results, and task-local history.

Authoritative progress remains in runtime state.

## Episodic Memory

Relevant prior interactions or events associated with an authorized subject.

## Preference Memory

User, tenant, or property preferences that are valid, permitted, and useful.

## Procedural Memory

Reusable operating patterns or learned procedures.

Governed procedures should be promoted to knowledge rather than remain unreviewed memory.

## Agent Performance Memory

Past evaluations, failure patterns, or operational signals used to improve routing or supervision.

---

# Memory Is Not Knowledge

Memory can be:

* Historical
* Personal
* Contextual
* Incomplete
* Outdated
* Incorrect
* Inferred

Knowledge can also become stale, but it has an accountable publication and governance process.

An agent must not treat remembered preference or prior conversation as overriding current policy, business state, or explicit current user instruction.

---

# Context Layers

A reasoning step may assemble:

* Agent-definition context
* Goal context
* Identity context
* Tenant context
* Property context
* Current user-request context
* Conversation context
* Execution-state context
* Plan and task context
* Knowledge context
* Memory context
* Tool-contract context
* Policy context
* Human-decision context
* Operational context

Not every step requires every layer.

---

# Context Assembly Pipeline

The Context Service should:

1. Identify the reasoning purpose.
2. Determine permitted context categories.
3. Establish identity, tenant, and property.
4. Retrieve candidate sources.
5. Apply authorization and purpose limitation.
6. Validate provenance and freshness.
7. Classify trust.
8. Resolve or surface conflicts.
9. Rank relevance and authority.
10. Remove duplicates.
11. Apply data minimization.
12. Apply token and resource budgets.
13. Assemble a structured context package.
14. Record context evidence.
15. Deliver it to the approved reasoning capability.

---

# Context Request

A context request should identify:

* Agent
* Execution
* Step
* Task
* Purpose
* Goal
* Tenant
* Property
* Required categories
* Time horizon
* Freshness
* Data classification
* Maximum size
* Provider restrictions
* Excluded categories

Broad requests such as “retrieve everything about this user” should be prohibited without explicit governed purpose.

---

# Context Package

A context package should contain:

* Package identifier
* Purpose
* Execution and step
* Tenant and property
* Source references
* Structured content
* Provenance
* Trust labels
* Freshness
* Classification
* Conflict indicators
* Assumptions
* Expiration
* Usage restrictions

The package should be immutable for the duration of the reasoning step.

---

# Source Provenance

Provenance should identify:

* Source owner
* Source system
* Record or document
* Version
* Tenant
* Property
* Author or publisher where relevant
* Publication time
* Retrieval time
* Transformation
* Trust classification
* Access decision

Generated summaries should preserve references to their underlying sources.

---

# Source Authority

Authority depends on the specific information domain.

An illustrative order is:

1. Authoritative business-service state
2. Approved policy and configuration
3. Governed enterprise, tenant, or property knowledge
4. Attributable current human input
5. Verified tool output
6. Approved memory
7. Conversation history
8. Agent inference

The Context Service should preserve the authority category rather than flatten all content into equivalent text.

---

# Trust Classification

Content may be classified as:

* Authoritative
* Approved
* Verified
* Attributable
* Unverified
* User provided
* Externally provided
* Derived
* Untrusted
* Prohibited

Trust classification affects:

* Whether content may be used
* Whether it may influence action
* Required validation
* Whether it may be shared
* Whether it may be retained

---

# Untrusted Content

Untrusted content may include instructions attempting to:

* Override the goal
* Change policy
* Request secrets
* Trigger tools
* Expand tenant scope
* Impersonate a human
* Create memory
* Publish knowledge

The context package should represent untrusted content as data.

It must not place it at a higher instruction priority.

---

# Freshness

Each source should define:

* Effective time
* Retrieval time
* Expiration
* Refresh policy
* Event-based invalidation
* Acceptable staleness

Freshness requirements depend on the fact.

Static architecture may remain valid longer than availability, pricing, access status, or operational incidents.

---

# Stale Information

Stale information should be:

* Refreshed
* Marked
* Excluded
* Used only with explicit limitation
* Escalated when authoritative refresh is unavailable

The agent must not conceal that a material source is stale.

---

# Relevance

Relevance ranking may consider:

* Current goal
* Task
* Entity match
* Tenant
* Property
* Time
* Source authority
* User relationship
* Prior use
* Freshness

Relevance does not override authorization or trust.

A highly relevant source may still be prohibited.

---

# Context Minimization

The Context Service should minimize:

* Unrelated personal information
* Unrelated tenant information
* Duplicate passages
* Full documents when excerpts suffice
* Historical content beyond the required horizon
* Hidden reasoning
* Secrets
* Raw credentials
* Unneeded tool output

Smaller context reduces exposure, cost, latency, and contamination risk.

---

# Context Budget

Context budgets may apply to:

* Tokens
* Documents
* Memory records
* Time range
* Retrieval calls
* Data size
* Cost
* Latency

Budget allocation should prioritize:

1. Safety, policy, and authority constraints
2. Goal and current task
3. Authoritative current state
4. Required knowledge
5. Relevant memory
6. Supporting conversation

---

# Context Compression

Compression may use:

* Extractive selection
* Structured facts
* Source-linked summaries
* Deduplication
* Hierarchical summaries
* Task-specific views

Compression must preserve:

* Material qualifiers
* Exceptions
* Tenant and property
* Dates
* Units
* Source attribution
* Uncertainty

---

# Context Conflict

When context sources conflict, the package should:

* Identify the conflict
* Preserve both relevant claims
* Identify source authority
* Identify freshness
* Select the authoritative result where determinable
* Require clarification or escalation otherwise

The agent must not silently resolve material conflicts by choosing the most fluent statement.

---

# Context Isolation

Each context package should be isolated by:

* Execution
* Step
* Tenant
* Property
* Purpose
* Data classification
* Provider eligibility

Context from one execution should not leak into another through shared model sessions, caches, logs, or memory.

---

# Tenant Knowledge

Tenant knowledge retrieval should enforce:

* Active tenant
* Authorized subject
* Tenant ownership
* Purpose
* Data classification
* Contract
* Retention

Shared-agent implementation does not permit shared tenant context.

---

# Property Knowledge

Property knowledge should preserve:

* Parent tenant
* Property identity
* Local validity
* Effective dates
* Local exceptions
* Responsible owner
* Publication state

An agent should not apply one property's procedure or amenity to another property.

---

# Cross-Tenant Knowledge

Cross-tenant use requires an explicit enterprise purpose and controls such as:

* Aggregation
* Anonymization
* Consent or contractual authority
* Privacy review
* Minimum cohort rules
* Access control
* Evidence

Individual tenant memory must not become another tenant's context.

---

# Personalization

Personalization may use:

* Communication preference
* Language
* Accessibility preference
* Authorized service preference
* Prior explicit choices

Personalization must not:

* Override current instruction
* Override policy
* Create discriminatory treatment
* Infer sensitive attributes without authority
* Expose memory unexpectedly
* Expand business authority

---

# Memory Retrieval

Memory retrieval should:

1. Establish the subject.
2. Establish the authorized purpose.
3. Select permitted memory categories.
4. Apply tenant and property scope.
5. Retrieve candidates.
6. Validate provenance.
7. Validate freshness.
8. Rank relevance.
9. Apply privacy and consent.
10. Return a bounded memory view.

---

# Memory Record

A memory record should include:

* Memory identifier
* Subject
* Tenant
* Property where applicable
* Memory type
* Content or structured value
* Source
* Creation time
* Last validation
* Confidence category
* Consent or authority
* Purpose
* Sensitivity
* Expiration
* Correction state
* Deletion state

---

# Memory Confidence

Memory confidence should distinguish:

* Explicitly stated
* Authoritatively observed
* Repeatedly observed
* Inferred
* Unverified
* Disputed

Inferred memory should not be represented as an explicit user statement.

High-impact decisions should not rely solely on inferred memory.

---

# Memory Freshness

Memories may become invalid because:

* Preferences change
* Tenant relationships end
* Property assignment changes
* Information was corrected
* Consent changes
* Source expires
* Business conditions change

Memory should be refreshed, expired, or excluded according to type.

---

# Memory Write-Back

Agents must not write unrestricted long-term memory automatically.

A proposed memory write should identify:

* Subject
* Content
* Memory type
* Source
* Tenant
* Property
* Purpose
* Sensitivity
* Confidence
* Retention
* Consent or authority
* Expected future value

---

# Memory Write Validation

Before persistence, the Memory Service should check:

* Identity
* Authority
* Consent
* Purpose
* Accuracy
* Source
* Duplication
* Sensitivity
* Tenant and property
* Retention
* Prohibited categories

The agent may propose a memory.

The Memory Service decides whether it is stored.

---

# Prohibited Memory

Memory policy should prohibit or tightly control:

* Credentials
* Secrets
* Payment authentication data
* Unnecessary sensitive personal data
* Unsupported allegations
* Hidden model reasoning
* Cross-tenant data
* Unverified high-impact conclusions
* Data retained without purpose

---

# Memory Correction

Authorized subjects and owners should be able to:

* View relevant memory where appropriate
* Correct inaccurate memory
* Dispute inferred memory
* Withdraw consent
* Request deletion subject to obligations

Corrections should propagate to retrieval and future context assembly.

---

# Memory Deletion

Deletion should address:

* Primary record
* Indexes
* Caches
* Derived embeddings
* Replicas
* Context caches
* Downstream copies

Required legal or security retention should be handled transparently through policy.

---

# Memory Expiration

Expiration may be based on:

* Fixed time
* Inactivity
* Session end
* Execution end
* Tenant relationship
* Property relationship
* Consent withdrawal
* Source invalidation
* Superseding information

Expired memory should not be retrieved as active context.

---

# Knowledge Retrieval

Knowledge retrieval should:

* Identify the information need
* Select governed sources
* Apply tenant and property scope
* Apply classification
* Retrieve source-linked candidates
* Rank authority and relevance
* Validate freshness
* Preserve version
* Return bounded evidence

---

# Knowledge Publication Boundary

Agent output does not become knowledge automatically.

Publication should require:

* Identified owner
* Source review
* Validation
* Classification
* Tenant and property scope
* Effective date
* Version
* Approval
* Retention
* Deprecation plan

Agents may draft or propose knowledge through governed workflows.

---

# Derived Knowledge

Analytics or agent synthesis may produce a candidate derived insight.

It should record:

* Source set
* Method
* Assumptions
* Confidence category
* Tenant scope
* Time range
* Reviewer
* Limitations

Derived insight should not be presented as source-system fact.

---

# Execution State Boundary

Execution state includes:

* Goal
* Plan version
* Task status
* Tool actions
* Human decisions
* Limits
* Checkpoints
* Completion evidence

This state belongs to the Agent Runtime.

It may be summarized into context, but context cannot overwrite it.

---

# Conversation Boundary

Conversation history supports continuity but may contain:

* Corrections
* Contradictions
* Informal language
* Unverified claims
* Stale instructions
* Multiple goals

The Context Service should select relevant portions rather than pass the entire conversation indiscriminately.

---

# Multi-Agent Context

Multi-agent context sharing should:

* Use explicit delegation purpose
* Share the minimum subset
* Preserve provenance
* Preserve trust
* Preserve tenant and property
* Prevent authority transfer through content
* Expire access

A delegate should not inherit the parent's full memory view by default.

---

# Tool-Result Context

Tool results should include:

* Tool and version
* Operation
* Time
* Tenant
* Property
* Status
* Provenance
* Business outcome
* Error or uncertainty

Tool output containing instructions should remain data unless the contract defines an authorized control signal.

---

# Context Caching

Caching may improve latency and cost, but should define:

* Cache key
* Tenant and property partition
* Purpose
* Source versions
* Expiration
* Invalidation
* Data classification
* Provider restrictions

Cross-tenant cache keys or shared personalized caches are prohibited.

---

# Model Provider Boundary

Before context is sent to a model provider, the framework should verify:

* Provider approval
* Model approval
* Region
* Data classification
* Tenant contract
* Retention behavior
* Training-use restrictions
* Minimum necessary content

Provider context retention must not become XeniosAI memory implicitly.

---

# Context Contamination

Contamination may occur when:

* One tenant's content enters another tenant's context
* Untrusted instructions override agent rules
* Stale memory overrides current truth
* Agent inference is stored as fact
* Tool output pollutes future prompts
* Cached context is reused incorrectly
* Test data enters production context

Controls should include isolation, trust labels, source references, freshness, validation, cache partitioning, and deletion.

---

# Prompt Injection

Context sources should be scanned and classified for attempts to:

* Override instructions
* Request credentials
* Trigger tools
* Exfiltrate data
* Modify memory
* Expand tenant scope
* Suppress evidence

Prompt-injection detection supplements but does not replace authorization and tool controls.

---

# Context Failure

Context failure may include:

* Missing required source
* Unauthorized source
* Stale source
* Conflicting source
* Retrieval outage
* Budget overflow
* Provenance failure
* Tenant ambiguity
* Property ambiguity
* Provider restriction

The agent should reduce scope, clarify, wait, escalate, or stop according to impact.

---

# Graceful Degradation

Degraded operation may:

* Use current authoritative business state only
* Exclude optional memory
* Use cached approved knowledge within freshness policy
* Request user clarification
* Provide a limited answer
* Escalate

The agent must disclose material limitations.

---

# Evidence

Context evidence should record:

* Context request
* Purpose
* Agent and execution
* Tenant and property
* Sources selected
* Sources excluded
* Authorization
* Provenance
* Freshness
* Trust
* Conflict decisions
* Memory use
* Provider
* Package version

Evidence should reference content where possible rather than duplicate sensitive data.

---

# Observability

Observability should include:

* Retrieval volume
* Retrieval latency
* Source categories
* Context size
* Token use
* Cache hit
* Freshness failures
* Authorization denials
* Conflict rate
* Memory write proposals
* Memory write rejection
* Deletion completion
* Cross-tenant control signals
* Provider exposure
* Context-related quality

---

# Evaluation

Evaluation should measure:

* Source authority
* Retrieval relevance
* Grounding
* Freshness
* Tenant isolation
* Property isolation
* Memory appropriateness
* Personalization quality
* Context completeness
* Context efficiency
* Conflict handling
* Injection resistance
* Write-back correctness
* Correction and deletion

---

# Privacy and Governance

Knowledge, memory, and context should comply with:

* Purpose limitation
* Data minimization
* Consent
* Classification
* Access control
* Retention
* Deletion
* Legal hold
* Data residency
* Tenant commitments
* Evidence
* Assurance

Detailed governance is defined in ARCH-012 and ARCH-016.

---

# Quality Attributes

## Relevance

The context supports the current task without unnecessary information.

## Authority

Sources retain their ownership and truth status.

## Freshness

Time-sensitive information is current enough for its use.

## Isolation

Tenant, property, subject, execution, and provider boundaries are preserved.

## Privacy

Personal and sensitive information is minimized and governed.

## Traceability

Agent outputs can reference the sources that informed them.

## Correctability

Memory can be disputed, corrected, expired, and deleted.

## Efficiency

Context budgets control cost and latency.

## Portability

Context semantics do not depend on one model or storage product.

---

# Architectural Rules

Agent knowledge, memory, and context must:

* Keep knowledge, memory, context, and execution state distinct.
* Treat the model context window as temporary.
* Prefer authoritative business state.
* Preserve source provenance and trust classification.
* Validate freshness.
* Retrieve only for an explicit purpose.
* Apply tenant and property scope before retrieval.
* Minimize personal and sensitive information.
* Use bounded context budgets.
* Preserve conflicts rather than fabricate resolution.
* Treat untrusted content as data.
* Prevent context from granting authority.
* Prevent conversation history from becoming authoritative state.
* Prevent one tenant's memory from entering another tenant's context.
* Prevent shared agents from sharing tenant context.
* Keep credentials and secrets out of context and memory.
* Require validation before memory write-back.
* Distinguish explicit, observed, inferred, and disputed memory.
* Support correction, expiration, and deletion.
* Prevent agent output from becoming knowledge without publication governance.
* Partition and invalidate caches correctly.
* Enforce provider and regional data restrictions.
* Produce context evidence without unnecessary content duplication.
* Remain model and storage neutral.

---

# Architecture Boundaries

ARCH-014-07 defines:

* Agent-facing knowledge retrieval
* Agent-facing memory retrieval
* Context assembly
* Provenance
* Trust
* Freshness
* Relevance
* Context budgets
* Tenant and property context
* Personalization
* Memory write-back
* Knowledge publication boundary
* Context caching
* Provider boundary
* Contamination controls
* Context evidence

It does not:

* Define detailed knowledge-store implementation
* Define detailed memory-store implementation
* Define embedding or retrieval technology
* Define data-model internals
* Define business-service state
* Define runtime state storage
* Select a model, database, or vector product

---

# Summary

XeniosAI agents use knowledge, memory, context, and execution state as distinct architectural capabilities.

Knowledge provides governed information, memory provides relevant historical context, context is the temporary curated working set for one reasoning step, and runtime state records what has authoritatively occurred.

The Context Service assembles source-attributed, trust-labeled, fresh, purpose-limited, tenant-aware, property-aware context. Memory write-back is validated by the Memory Service, and agent-generated content becomes knowledge only through governed publication.

By minimizing context, preserving authority and provenance, isolating tenants and properties, and supporting correction, expiration, and deletion, XeniosAI can deliver useful continuity and personalization without turning model context into an uncontrolled database or source of truth.

---

# Related Documents

* ARCH-014 — AI Agent Framework
* ARCH-014-01 — AI Agent Framework Overview
* ARCH-014-03 — Agent Runtime and Execution Model
* ARCH-014-04 — Agent Reasoning and Planning
* ARCH-014-06 — Multi-Agent Coordination
* ARCH-014-08 — Agent Security, Governance, and Assurance
* ARCH-014-09 — Agent Operations, Observability, and Evaluation
* ARCH-004 — AI Orchestrator
* ARCH-008 — Security
* ARCH-012 — Governance & Compliance
* ARCH-016 — Knowledge & Memory
* ARCH-018 — Multi-Tenancy

