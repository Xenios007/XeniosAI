# ARCH-021 · Chapter 05 — Design System, Accessibility & Localization

**Document ID:** ARCH-021-05

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter defines the shared visual, interaction, accessibility, content, localization, and tenant-branding system used across XeniosAI experiences.

The design system is an architectural product with ownership, contracts, releases, compatibility, evidence, and support. It is not merely a component library.

---

# Design-System Layers

| Layer | Contents |
| --- | --- |
| Foundations | Color roles, typography, spacing, elevation, motion, icon semantics, breakpoints, and density |
| Tokens | Technology-neutral semantic values and tenant-approved overrides |
| Primitives | Accessible controls and layout building blocks |
| Components | Reusable interaction units with defined states and behavior |
| Patterns | Conversation, forms, tables, search, confirmation, errors, handoff, and navigation |
| Templates | Surface-level arrangements for customer, staff, and administration experiences |
| Guidance | Usage, content, accessibility, localization, testing, and migration rules |

Semantic roles are stable even when visual values change.

---

# Accessibility

Accessibility applies from discovery through operation. Each component and journey defines:

* Keyboard operation
* Visible and logical focus
* Screen-reader name, role, state, and changes
* Contrast and non-color meaning
* Text resizing and reflow
* Reduced motion
* Captions and transcripts
* Touch-target and pointer alternatives
* Error identification and recovery
* Time-limit handling
* Cognitive clarity
* Language declaration
* Accessible authentication and confirmation

Automated tests support but do not replace manual and assistive-technology evaluation.

Streaming experiences announce updates without overwhelming assistive technology. Users can pause, review, copy, or switch to a non-streaming presentation.

---

# Content Design

Content is concise, specific, respectful, and actionable. It distinguishes:

* Confirmed fact
* Generated explanation
* Recommendation
* Required action
* Warning
* Error
* Pending state
* Human response

Internal identifiers, stack traces, provider terminology, and policy codes are translated into user-appropriate language while retaining correlation references for support.

Brand warmth must not obscure price, obligation, risk, consent, uncertainty, or failure.

---

# Localization

Localization covers more than translation. Experience contracts support:

* Language and regional variants
* Date, time, timezone, number, currency, name, address, and phone formats
* Pluralization and grammatical rules
* Right-to-left presentation
* Text expansion
* Locale-aware sorting and search
* Local legal and consent content
* Local channel availability
* Accessible voice and captions

Business services return semantic values and currency or time context. Clients format them without changing meaning.

Machine translation may assist, but approved content, critical instructions, consent, safety, payment, and legal material require appropriate quality controls.

---

# Tenant Branding

Tenants may configure approved:

* Logos and brand marks
* Semantic color roles within accessibility limits
* Typography from allowed profiles
* Tone and terminology
* Contact and support information
* Imagery and approved content
* Channel-specific presentation

Brand configuration cannot alter security indicators, hide platform-required notices, weaken accessibility, imitate another tenant, or change authoritative behavior.

Configuration is versioned, previewed across representative states, validated, auditable, and reversible.

---

# Component Contract

Each component defines:

* Purpose and owner
* Inputs, outputs, events, and slots
* Interaction states
* Accessibility behavior
* Localization requirements
* Security and privacy considerations
* Responsive behavior
* Supported themes
* Performance budget
* Telemetry boundaries
* Test evidence
* Version and deprecation

Components do not embed tenant secrets, domain rules, or provider-specific network calls.

---

# Governance

New patterns are introduced only when an existing one cannot meet a verified need. Changes are reviewed for cross-surface consistency, accessibility, localization, security, performance, and migration impact.

Teams may propose extensions. Forking foundational components or copying them into applications without lifecycle ownership is discouraged because it fragments behavior and assurance.

---

# Quality Evidence

Design-system evidence includes visual regression, interaction tests, keyboard tests, screen-reader evaluation, contrast checks, localization pseudo-testing, responsive tests, performance checks, compatibility tests, and user research with representative participants.

Accessibility defects in critical journeys are service-quality issues with ownership, prioritization, remediation, and verification.

