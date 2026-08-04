# ARCH-023-04 — Preferences, Consent & Customer Context

**Document ID:** ARCH-023-04

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines declared preferences, consent references, restrictions, purpose-bound customer context, personalization boundaries, and safe use by people, applications, workflows, and AI agents.

---

# Preference Model

Preferences describe how a customer wants an experience delivered. Examples include language, timezone, preferred channel, contact windows, accessibility needs, content format, notification choices, and approved industry-specific preferences.

Each preference includes:

* Subject and tenant scope
* Preference type and value
* Source and declaration method
* Purpose and applicable channels
* Effective and expiry times
* Confidence only when explicitly derived
* Supersession and correction history

Declared preferences outrank inferred preferences when both are valid for the same purpose.

---

# Consent Reference Model

ARCH-023 consumes authoritative consent decisions through references containing:

* Subject and controller or tenant
* Purpose and processing category
* Decision and applicable scope
* Collection channel and notice version
* Effective, expiry, withdrawal, or restriction time
* Evidence reference
* Policy and jurisdiction context

Consent is not represented as a single profile boolean. Withdrawal propagates to projections, audiences, workflows, caches, exports, and learning candidates.

---

# Distinct Control States

| State | Question answered |
| --- | --- |
| Identity assurance | Who or what is interacting? |
| Authorization | May this actor perform this action? |
| Consent | May this data be processed for this purpose? |
| Preference | How does the customer want the experience delivered? |
| Contactability | Can the destination currently receive communication? |
| Suppression | Must communication be blocked despite other state? |
| Business eligibility | Does the domain permit the proposed service or offer? |

All applicable controls must pass; one cannot substitute for another.

---

# Customer Context Request

A context request declares:

* Actor, identity assurance, and delegated authority
* Tenant, channel, customer, and relationship scope
* Business purpose and task
* Requested attribute groups
* Required freshness and confidence
* Interaction correlation identifier

The Customer Context Service evaluates authorization, consent, restriction, minimization, source freshness, and tenant isolation before assembling a projection.

---

# Context Response

A response may contain:

* Permitted authoritative attributes
* Declared preferences applicable to the purpose
* Active relationship and role references
* Relevant interaction or service summaries
* Labeled derived signals with confidence and expiry
* Missing, stale, restricted, or disputed indicators
* Source and version references
* Obligations such as masking, no-retention, or human confirmation

Absence is not replaced by model inference. Consumers must ask the customer, query the owning domain, or proceed without the attribute.

---

# Personalization Boundaries

Personalization may adapt language, format, ordering, reminders, and service suggestions when permitted. It must not:

* Invent personal facts
* Infer sensitive characteristics without approved purpose and controls
* Reveal a hidden relationship or prior interaction
* Exploit vulnerability or create discriminatory treatment
* Change price, eligibility, authorization, or policy outside the owning domain
* Continue after consent withdrawal or suppression
* turn a temporary conversational detail into durable memory automatically

---

# AI and Agent Use

Agents receive purpose-specific projections through tools, not raw profile-database access. Tool calls validate identity, tenant, customer reference, requested fields, task purpose, and output obligations.

Generated summaries remain derived artifacts. Corrections proposed from conversations enter a review or verification workflow. A successful response, positive feedback, or repeated phrase may become an ARCH-029 learning candidate, but it cannot directly update a profile, prompt, segment, knowledge source, or model.

---

# Casa Lluvia Validation

For a Casa Lluvia inquiry, the context may include declared language, current party size, approved communication preference, and references to prior stays. Availability, rates, pool fees, parking fees, booking acceptance, payment state, guest authorization, and self-check-in code remain authoritative in their owning domains.

Guest ID information is limited to authorization processing. The self-check-in code is released only after deterministic services confirm full payment and required authorization under current policy; conversational familiarity cannot bypass those checks.

---

# Invariants

* Consent is purpose specific, versioned, provable, and withdrawable.
* Preferences do not create consent, authority, or business eligibility.
* Context responses are tenant scoped, actor scoped, purpose scoped, and minimized.
* Derived and disputed attributes are visibly labeled.
* No agent receives unrestricted customer records.
* Customer messages never directly rewrite production behavior or durable customer truth.

