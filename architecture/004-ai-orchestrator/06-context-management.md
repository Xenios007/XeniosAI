# ARCH-004 · Chapter 06 — Context Management

**Document ID:** ARCH-004-06

**Title:** Context Management

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-004 — AI Orchestrator

---

# Purpose

This document defines how XeniosAI constructs, manages, and delivers context to the Reasoning Pipeline.

Context Management ensures that every reasoning task receives the most relevant, trustworthy, and efficient working context while respecting architectural boundaries, privacy requirements, and model limitations.

The orchestrator builds context.

The reasoning engine consumes it.

---

# Philosophy

Context is not conversation history.

Context is not memory.

Context is not knowledge.

Context is a curated working set assembled specifically for the current request.

The objective is to maximize decision quality rather than maximize the amount of information provided.

---

# Core Principles

Context management follows these principles:

* Include only relevant information.
* Prefer authoritative sources.
* Eliminate redundancy.
* Respect token budgets.
* Preserve traceability.
* Separate context from storage.

The quality of context is more important than its size.

---

# Context Layers

XeniosAI constructs context from multiple independent layers.

## User Request Context

The current user request.

Includes:

* Message content
* Attachments
* Channel metadata
* Request metadata

---

## Conversation Context

Maintains continuity.

Examples:

* Recent exchanges
* Pending clarifications
* Active discussion topic

---

## Session Context

Maintains temporary execution state.

Examples:

* Current booking flow
* Workflow progress
* Session variables

---

## Memory Context

Provides personalized information.

Examples:

* Guest preferences
* Historical interactions
* Long-term user facts

Memory is retrieved through Memory Orchestration.

---

## Knowledge Context

Provides authoritative information.

Examples:

* Policies
* FAQs
* Property information
* Operational documentation

Knowledge remains independent of memory.

---

## Business Context

Provides operational state.

Examples:

* Booking status
* Availability
* Pricing results
* Reservation details

Business Services remain the authoritative owners of this information.

---

## Execution Context

Provides information generated during the current orchestration.

Examples:

* Completed tool results
* Intermediate outputs
* Planned actions
* Validation results

---

## Policy Context

Provides platform constraints.

Examples:

* Privacy requirements
* Safety rules
* Business restrictions
* Output policies

Policy context governs the final response.

---

# Canonical Context Assembly Pipeline

Every request follows the same context construction process.

```text id="u3pxoj"
Identify Need

↓

Collect Candidates

↓

Remove Duplicates

↓

Resolve Conflicts

↓

Rank Importance

↓

Apply Token Budget

↓

Assemble Context

↓

Deliver to Reasoning
```

Each stage contributes to a consistent working context.

---

# Stage 1 — Identify Need

Determine which context layers are relevant.

Not every request requires every layer.

Example:

A public FAQ request may require only:

* User Request Context
* Knowledge Context
* Policy Context

---

# Stage 2 — Collect Candidates

Gather potential context from the selected layers.

Collection should remain independent of downstream reasoning.

---

# Stage 3 — Remove Duplicates

Eliminate repeated information.

Duplicate context increases token usage without improving decision quality.

---

# Stage 4 — Resolve Conflicts

When multiple sources disagree:

1. Business Services
2. Knowledge
3. Memory
4. Conversation

Authoritative sources take precedence over inferred or historical information.

---

# Stage 5 — Rank Importance

Context is prioritized according to:

* Relevance
* Authority
* Recency
* Confidence
* Execution requirements

Lower-priority information may be omitted if necessary.

---

# Stage 6 — Apply Token Budget

The orchestrator ensures the assembled context fits within the available reasoning budget.

Possible strategies include:

* Summarization
* Compression
* Omission of low-value information
* Deferred retrieval

Context quality should be preserved while respecting model constraints.

---

# Stage 7 — Assemble Context

Selected information is combined into a structured working context.

The resulting context should be:

* Coherent
* Non-redundant
* Traceable
* Consistent

---

# Stage 8 — Deliver to Reasoning

The finalized working context is passed to the Reasoning Pipeline.

No additional context should be introduced during reasoning without explicit orchestration.

---

# Context Prioritization

When competing information exists, XeniosAI applies the following priority:

1. Business Services
2. Knowledge
3. Execution Context
4. Session Context
5. Memory
6. Conversation

This hierarchy minimizes ambiguity and preserves authoritative information.

---

# Privacy and Security

Context construction must enforce:

* Data minimization
* Access control
* Sensitive data protection
* Policy compliance
* User privacy requirements

Only information required for the current request should be included.

---

# Observability

Context assembly should produce telemetry including:

* Selected context layers
* Candidate count
* Final token usage
* Omitted items
* Assembly duration
* Correlation ID

Observability enables optimization and troubleshooting.

---

# Architectural Rules

Context Management must:

* Build context intentionally.
* Never expose unnecessary information.
* Prefer authoritative sources.
* Respect ownership boundaries.
* Separate context from storage.
* Remain explainable and observable.

The orchestrator owns context construction.

Reasoning consumes the resulting working set.

---

# Future Evolution

Future capabilities may include:

* Adaptive context compression
* Semantic context ranking
* Predictive prefetching
* Dynamic token allocation
* Context quality scoring
* Multi-agent context partitioning

These enhancements should improve context quality without changing the orchestration model.

---

# Summary

Context Management transforms diverse platform information into a focused working context for AI reasoning.

By treating context as a curated execution asset rather than a collection of raw data, XeniosAI improves reasoning quality, reduces unnecessary token usage, and preserves clear architectural boundaries between memory, knowledge, business services, and platform policies.

---

# Related Documents

* ARCH-004-02 — Request Lifecycle
* ARCH-004-03 — Reasoning Pipeline
* ARCH-004-05 — Memory Orchestration
* ARCH-005 — Data Flow
* ADR-0001 — Tool-First Architecture
