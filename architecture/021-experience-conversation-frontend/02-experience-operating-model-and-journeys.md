# ARCH-021 · Chapter 02 — Experience Operating Model & Journeys

**Document ID:** ARCH-021-02

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter defines how experience decisions are owned, governed, measured, and improved across products, tenants, channels, journeys, and delivery teams.

---

# Operating Model

The experience platform is managed as a product. It has accountable ownership, a roadmap, service objectives, design standards, security and accessibility obligations, operational support, and evidence.

| Role | Accountability |
| --- | --- |
| Experience product owner | Outcomes, priorities, adoption, service commitments, and roadmap |
| Experience architect | Boundaries, contracts, composition, channel neutrality, and quality attributes |
| Domain owner | Business semantics, rules, actions, and authoritative outcomes |
| Conversation owner | Conversation lifecycle, history, continuity, and channel transition |
| Design-system owner | Tokens, components, patterns, accessibility, and release compatibility |
| Tenant experience administrator | Approved branding, locale, content, channel, and policy configuration |
| Security and privacy | Threat controls, consent, data minimization, and assurance |
| Operations | Readiness, monitoring, incident response, support, and continuity |
| Research and quality | Usability evidence, feedback analysis, evaluation, and improvement proposals |

No role may change domain truth or security policy through presentation configuration.

---

# Journey Architecture

A journey is a versioned experience specification connecting an actor goal to authoritative capabilities and measurable completion.

Each journey defines:

* Actor and relationship
* Starting context and entry channels
* Goal and completion criteria
* Required business capabilities
* Information and consent requirements
* Expected decisions and confirmations
* Channel transitions
* Human handoff conditions
* Failure, cancellation, and recovery
* Accessibility and localization needs
* Telemetry and evidence
* Ownership and service objectives

Page flows are implementations of journeys, not the journey itself.

---

# Canonical Journey States

Critical journeys use explicit states:

1. Entry
2. Context establishment
3. Need discovery
4. Information gathering
5. Proposal or answer
6. Confirmation where required
7. Authoritative execution
8. Result presentation
9. Follow-up or handoff
10. Completion, cancellation, or recovery

Interfaces may combine states, but they must not skip required authority, validation, consent, or confirmation.

---

# Channel Continuity

Continuity is established through authorized references, not through copying unrestricted context between channels.

When moving from one channel to another, the platform determines:

* Whether the actor must authenticate again
* Which tenant and purpose remain valid
* Which conversation material may transfer
* Whether attachments may transfer
* Whether prior consent covers the new channel
* Whether an action must be reconfirmed
* How the user verifies they are continuing the intended interaction

Sensitive content is not exposed merely because a continuation link or conversation identifier is known.

---

# Anonymous and Authenticated Journeys

Anonymous experiences support low-risk discovery and inquiry. Authentication is introduced only when needed for protected data, personalization, transactions, or account management.

The transition must preserve the user's task without merging identities or histories incorrectly. Anonymous session data has bounded retention and cannot silently become durable customer memory.

---

# Human and AI Collaboration

Journeys declare which steps may be:

* Fully deterministic
* AI assisted
* AI proposed with human approval
* Human owned with AI support
* Human only

Handoff includes reason, priority, consented context, conversation summary, unresolved need, actions already attempted, authoritative results, and applicable service commitments. Generated summaries remain traceable to the source conversation.

---

# Tenant Configuration

Tenants may configure approved:

* Brand assets and tone
* Supported languages
* Channel availability
* Business hours and contact paths
* Journey availability
* Handoff destinations
* Notification preferences
* Content and policy references
* Feature entitlements

Configuration is validated, versioned, previewed, auditable, reversible, and tenant scoped. It does not replace code review for executable behavior or policy approval for regulated decisions.

---

# Journey Governance

A journey is released only when:

* Domain owners approve semantics and actions.
* Security and privacy controls are verified.
* Accessibility criteria are met.
* Failure and recovery states are tested.
* Telemetry respects privacy and cardinality controls.
* Support and operational ownership exist.
* Tenant configuration boundaries are defined.
* Compatibility and rollback are proven.

Journey changes use progressive delivery when risk, scale, or uncertainty warrants it.

---

# Feedback and Improvement

Feedback is connected to a journey, state, channel, client version, tenant scope, and outcome. Explicit feedback is combined with operational evidence such as retries, abandonment, corrections, escalations, and task completion.

Feedback may produce a design, content, knowledge, prompt, tool, workflow, or model-improvement candidate. Promotion remains governed by ARCH-029. No journey changes itself from raw interaction data.

