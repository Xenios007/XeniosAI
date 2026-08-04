# ARCH-021 · Chapter 08 — Security, Privacy & Tenant Experience

**Document ID:** ARCH-021-08

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter applies security, privacy, tenant isolation, consent, and extension controls to user-facing experiences.

Security controls should be understandable without exposing implementation secrets. Secure failure is part of the product experience.

---

# Threat Model

Frontend threats include:

* Cross-site scripting and content injection
* Request forgery and replay
* Token theft and session fixation
* Clickjacking and interface deception
* Malicious attachments and links
* Prompt injection presented through content
* Data exposure through cache, logs, analytics, clipboard, or notifications
* Tenant-context confusion
* Overprivileged support access
* Extension impersonation or escape
* Supply-chain compromise
* Insecure deep links and continuation links
* Voice, transcription, and identity confusion
* Accessibility barriers that cause unsafe mistakes

Threat controls are verified throughout design, delivery, and operation.

---

# Client Security Principles

* Treat all rendered external, user, extension, knowledge, and model content as untrusted.
* Prefer structured rendering over executable content.
* Keep credentials and secrets outside application bundles, messages, URLs, and telemetry.
* Apply least privilege to APIs, storage, browser capabilities, devices, and extensions.
* Reauthenticate or step up authentication for high-risk actions.
* Bind confirmation to current material details.
* Fail closed on missing or conflicting tenant context.
* Minimize retained client data.
* Make security state and participant identity clear.

---

# Content Safety Boundary

Retrieved documents, customer messages, attachments, extension output, and generated content cannot alter system instructions, tool authority, security policy, tenant scope, or rendering policy.

Links, markup, citations, files, images, and rich content are sanitized and mediated. The platform distinguishes authoritative notices from tenant content, extension content, and AI output.

---

# Privacy Experience

People receive understandable notice and controls for:

* Conversation retention
* Recording and transcription
* Personalization and memory
* Feedback use
* Learning-candidate use
* Human handoff and shared context
* Channel notifications
* Export, correction, restriction, and deletion

Consent is specific, attributable, revocable where applicable, and separate from unrelated service access. Continued conversation does not imply permission for indefinite memory or training.

---

# Tenant Isolation

Tenant scope applies to routes, data, cache keys, subscriptions, conversation history, search, files, analytics, telemetry, themes, extensions, and support tooling.

Administrative surfaces display active tenant context prominently. Cross-tenant operations require explicit authority and selection; they never use an implicit default.

Tenant branding cannot imitate security prompts, hide platform controls, or create confusion about which organization is acting.

---

# Notifications and Sensitive Data

Lock-screen, email, messaging, and push notifications reveal the minimum necessary information. Sensitive content requires an authenticated experience rather than exposure in a notification preview.

Notification links are scoped, expiring, replay resistant, and validated before showing protected state.

---

# Human Support Access

Support access is purpose-bound, time-bound, least privilege, visible where policy requires, and fully audited. Staff do not receive an unrestricted transcript merely because a handoff occurred.

Emergency access is exceptional and produces evidence, notification, and review according to ARCH-008, ARCH-011, and ARCH-012.

---

# UI Extensions

Extensions are visibly attributable where their identity matters. Trusted platform security indicators and confirmations cannot be replaced by extension UI.

Extension frames or hosts enforce capability grants, network policy, input boundaries, storage isolation, resource limits, telemetry, and revocation. Installation does not grant runtime authority.

---

# Privacy-Preserving Telemetry

Telemetry favors event categories, timing, outcome, and correlation references over raw message content. Sensitive values are redacted or excluded. Session replay, if ever approved, requires explicit purpose, masking, retention, access, tenant isolation, and consent controls.

Customer conversation content used for evaluation follows ARCH-029 and cannot enter a global dataset by default.

---

# Security Experience Tests

Tests cover unauthorized access, tenant swapping, stale permissions, token expiry, forged confirmation, replay, unsafe rendering, malicious attachments, extension escape, notification leakage, cache leakage, logout clearing, support access, accessibility of security controls, and recovery after denial.

