# ARCH-020-05 — Conversational AI, Agent, and Knowledge Reference

**Document ID:** ARCH-020-05  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document demonstrates normalized conversational requests, AI orchestration, bounded agents, tools, knowledge, memory, evaluation, and human supervision.

# Reference Flow

1. Channel adapter normalizes content and metadata.
2. Gateway authenticates and establishes tenant/property context.
3. Conversation service loads bounded conversation state.
4. Orchestrator identifies intent, missing inputs, and risk.
5. Context assembly retrieves authorized knowledge and memory.
6. Policy filters available tools and agents.
7. Model proposes a response or tool request.
8. Deterministic validation authorizes and executes tools.
9. Orchestrator grounds and explains the result.
10. Telemetry and evaluation capture evidence.

# Normalized Request

The internal request includes channel, actor, tenant, property, conversation, locale, message, attachments, correlation, consent, and classification without exposing channel-specific implementation to business services.

# Orchestrator Responsibilities

* Intent and entity interpretation
* Context selection
* Prompt and model policy
* Tool and agent selection
* Reasoning budget
* Safety and grounding
* Clarification and escalation
* Evidence

It does not own bookings, rates, payments, property data, identity, or authorization.

# Tool Reference

Tools have stable identity, schema, provider, required authority, tenant semantics, side effects, idempotency, timeout, cost, confirmation, and evidence.

Examples include availability query, rate computation, reservation request, property information, notification, and support escalation.

# Agent Reference

A bounded booking assistant agent has owner, purpose, supported goals, prohibited goals, tenant/property scope, tool set, autonomy level, budget, stop conditions, human approval, and evaluation profile.

Delegation can only narrow authority.

# Knowledge Reference

Registered sources include approved property information, policies, FAQs, local guides, and operating procedures.

Ingestion preserves source, version, ownership, classification, validity, transformation, and deletion lineage.

Retrieval applies tenant/property access before relevance ranking.

# Memory Reference

Memory may retain an authorized preference or incomplete task context when purpose and policy permit.

Memory is correctable, expiring, attributable, and deletable. Conversation text is not automatically durable memory.

# Grounding

Answers distinguish:

* Authoritative tool results
* Governed knowledge
* Bounded memory
* Model inference
* Unknown or conflicting information

Material claims cite source or tool evidence where practical.

# Human Supervision

Human approval is required for selected material actions such as reservation confirmation, financial commitments, sensitive guest communication, exception handling, or high-risk agent behavior.

# Safety Cases

* Prompt injection in retrieved content
* Tool-description manipulation
* Fabricated availability or rate
* Cross-tenant retrieval
* Sensitive memory admission
* Agent retry loop
* Unauthorized delegation
* Conflicting knowledge

# Evaluation

Evaluation covers intent accuracy, tool selection, argument validity, authorization, grounding, citation, hallucination, policy compliance, latency, cost, escalation, and tenant isolation.

Datasets use synthetic, adversarial, multilingual, ambiguous, and failure cases.

# Acceptance Criteria

* AI cannot alter business state without a governed tool or workflow.
* Tool providers validate actor, tenant, property, and resource.
* Retrieval cannot cross tenant or property policy.
* Memory admission is explicit.
* Agent budgets and stop conditions are enforced.
* Unsupported answers state uncertainty or escalate.

# Architecture Decisions

* AI interprets and orchestrates; deterministic providers execute.
* Tool discovery and invocation are separate authorization decisions.
* Knowledge retrieval is not authority.
* Memory is deliberate and purpose bound.
* Evaluations are release and operational evidence.

# Summary

The reference demonstrates helpful conversational and agent behavior without allowing probabilistic reasoning, retrieved text, or stored memory to bypass deterministic service, tenant, and policy controls.
