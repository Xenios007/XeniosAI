# ARCH-021 · Chapter 01 — Experience, Conversation & Frontend Overview

**Document ID:** ARCH-021-01

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter establishes the experience architecture, its actors, surfaces, capability boundaries, information flows, and target state.

XeniosAI must feel like a coherent service rather than a collection of pages, bots, channels, and back-office tools. A customer may begin in website chat, continue through messaging, receive an email, and complete a task with a staff member. The experience remains continuous only when identity, tenant, conversation, workflow, domain state, and evidence are preserved through explicit contracts.

---

# Target State

The target state is a headless, channel-neutral experience platform with multiple replaceable clients. Each client uses a shared set of governed experience capabilities while adapting interaction form to its device and channel.

The architecture separates:

| Concern | Authority |
| --- | --- |
| Layout, input, navigation, rendering, focus, and local interaction state | Frontend application |
| Conversation identity, message history, turn state, channel continuity | Conversation capability |
| Intent, reasoning, context selection, and tool coordination | AI Orchestrator |
| Long-running progression, waits, compensation, and approvals | Workflow Engine |
| Current business facts and decisions | Domain services |
| Governed content and citations | Knowledge capability |
| Durable personalization | Memory capability under policy |
| Authentication and authorization | Identity and policy services |
| Tenant and property boundary | Multi-tenancy controls and provider validation |

No visible interface control grants authority. Every provider validates the request independently.

---

# Actors

## Customers

Anonymous or authenticated people who ask questions, compare options, transact, manage requests, provide feedback, or seek support.

## Workforce Users

Staff who manage conversations, cases, queues, tasks, approvals, exceptions, and operational conditions.

## Tenant Administrators

Authorized people who configure tenant branding, channels, experience policies, roles, content, integrations, extensions, and service settings.

## Platform Operators

Authorized internal users who operate the platform, support tenants, manage incidents, review evidence, and perform controlled intervention.

## Partners and Developers

Builders who consume APIs, SDKs, extension points, and test environments without receiving internal implementation access.

## AI Agents

Bounded actors that may participate in conversations and work through explicit identity, capability, purpose, tenant, tool, and time constraints.

---

# Experience Capability Model

ARCH-021 defines the following capability groups:

* Channel adaptation
* Interaction composition
* Conversation presentation
* Structured task interaction
* Realtime delivery
* Identity and tenant-context establishment
* Confirmation and consent
* Human handoff and collaboration
* Feedback capture
* Accessibility and localization
* Design-system governance
* Client-side security and privacy
* Frontend telemetry and operational control
* Extension mediation

Capabilities are exposed through versioned interfaces rather than framework-specific imports across ownership boundaries.

---

# Channel-Neutral Interaction Envelope

Every inbound interaction is normalized into an envelope containing, where applicable:

* Interaction identifier
* Channel and client identity
* Actor or anonymous-session reference
* Tenant and optional property context
* Conversation reference
* Locale, timezone, accessibility, and presentation hints
* Message or structured action
* Attachment references
* Consent and privacy context
* Correlation and causation identifiers
* Client capability declaration
* Idempotency information for retryable actions

The envelope conveys context but does not prove authority. Gateways and providers validate every protected field.

---

# Response Envelope

Responses may contain:

* Human-readable content
* Structured data for deterministic rendering
* Citations and provenance
* Suggested actions
* Form or confirmation requests
* Tool and workflow progress
* Warnings and uncertainty
* Error and recovery guidance
* Handoff state
* Accessibility metadata
* Continuation and pagination references

Clients render supported elements and degrade unsupported elements safely. Plain text remains an understandable fallback for essential information.

---

# Cross-Industry Reuse

The frontend platform uses capability semantics, not hospitality assumptions. A date selector, resource result, quote, order, case, payment, approval, or notification can be specialized by an industry solution pack.

Hospitality-specific components may render rooms, stays, guests, and reservations. Rental packs may render assets and bookings. Commerce packs may render products and orders. Support packs may render cases and service levels.

Specialization must not force one industry's terms or rules into the platform kernel.

---

# Architectural Invariants

* All protected traffic enters through approved gateway contracts.
* Frontends never connect directly to service databases.
* Business decisions are returned by authoritative services.
* Generated language is distinguishable from deterministic status.
* Consequential actions require explicit, current confirmation appropriate to risk.
* Tenant and property context is visible enough to prevent operator mistakes and validated end to end.
* Conversation history is not automatically durable memory.
* Feedback is evidence, not an immediate production change.
* Extensions are isolated and capability mediated.
* Every critical journey defines loading, empty, partial, failure, recovery, and escalation states.

---

# Success Measures

Experience success is measured through task completion, correctness, accessibility, latency, recovery, handoff quality, user effort, conversion where appropriate, error containment, customer satisfaction, staff productivity, and trust.

Engagement alone is not success. A longer conversation may indicate confusion; a shorter one may indicate either efficiency or abandonment. Measures require journey and outcome context.

