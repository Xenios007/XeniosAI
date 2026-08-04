# ARCH-021 · Chapter 03 — Conversation & Chat Experience

**Document ID:** ARCH-021-03

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter defines how XeniosAI presents trustworthy conversational interaction while preserving the authority, privacy, and lifecycle boundaries established by earlier modules.

Conversation is an interaction model, not the business system. It helps people express intent, understand information, complete structured tasks, and collaborate with humans and agents.

---

# Conversation Experience Model

A conversation experience includes:

* Participant identity and role presentation
* Tenant and brand context
* Message composition and attachments
* Streaming response presentation
* Structured cards, forms, tables, citations, and actions
* Tool and workflow progress
* Clarification and confirmation
* Error and recovery states
* Human handoff
* Feedback and correction
* History, search, export, retention, and deletion controls

The Conversation Service owns the conversation record. The client owns only bounded local presentation state.

---

# Message Semantics

Messages distinguish:

| Message class | Meaning |
| --- | --- |
| User expression | User-authored text, voice transcript, attachment, or structured action |
| Assistant response | Generated or composed presentation with provenance metadata |
| Deterministic result | Authoritative service or workflow outcome |
| System notice | Security, privacy, operational, or channel information |
| Human response | Identified workforce or support participant content |
| Progress update | Non-final status of tool, agent, or workflow activity |

Visual styling must not make a generated suggestion look like a confirmed transaction.

---

# Response Composition

The response composer may combine:

* Natural language
* Current business facts returned by services
* Governed knowledge and citations
* Structured results
* Suggested next actions
* Confirmation requests
* Warnings, limitations, and uncertainty
* Handoff options

Clients render the structured response contract. They do not parse untrusted prose to infer commands or transaction state.

---

# Clarification

The system asks for clarification when missing or ambiguous information can materially change a result, authorization, transaction, safety outcome, cost, or user expectation.

Clarification should:

* Ask only for information needed now.
* Reuse already valid context.
* Offer understandable choices where appropriate.
* Avoid exposing internal implementation terms.
* Explain why sensitive information is needed.
* Preserve the user's original goal.

The system must not invent dates, quantities, identities, tenant scope, permissions, preferences, or business facts to keep a conversation moving.

---

# Consequential Confirmation

Before a consequential action, the experience presents a structured summary of material details, including the action, subject, amount or obligation, selected resource, effective time, relevant policy, and cancellation implications where applicable.

Confirmation is bound to the current proposal and expires when material facts change. A generic “yes” cannot approve a different or stale proposal.

---

# Streaming

Streaming improves responsiveness but does not change truth or completion semantics.

The experience distinguishes:

* Thinking or preparation indicator
* Partial generated content
* Tool execution in progress
* Workflow waiting state
* Final authoritative result
* Failed or cancelled operation

Partial content must not expose hidden reasoning, secrets, unsafe intermediate tool data, or unvalidated business outcomes.

---

# Conversation Memory Boundary

Conversation history supports continuity inside its authorized lifecycle. It is not automatically durable memory.

The user may be offered explicit controls to save, correct, restrict, or delete approved preferences. Memory proposals carry purpose, source, scope, retention, and confirmation information.

Deleting conversation content must propagate to derived summaries, indexes, evaluation candidates, and memory where policy and legal obligations require it.

---

# Feedback

Feedback mechanisms include:

* Helpful or unhelpful response
* Correction
* Missing answer
* Incorrect fact
* Wrong action
* Tone or language problem
* Accessibility problem
* Handoff request
* Privacy concern

Feedback is attached to the relevant response, source, model or composer version, tools, citations, journey state, and outcome. It enters a governed learning pipeline and never directly modifies production behavior.

---

# Human Handoff

Handoff may be user requested or triggered by policy, risk, repeated failure, complaint, payment exception, legal concern, security concern, or service commitment.

The customer is told what will happen, what context will be shared, expected wait or follow-up, and how to continue. Staff receive a concise, attributable summary and access only to information allowed for the case.

The AI must not impersonate a human. When a human joins, participant identity and responsibility are clear.

---

# Conversation Quality

Quality measures include factual support, task success, tool correctness, clarification efficiency, confirmation integrity, tone, accessibility, latency, interruption recovery, handoff success, correction rate, and customer effort.

Conversation length, message count, or engagement are diagnostic signals, not standalone quality targets.

