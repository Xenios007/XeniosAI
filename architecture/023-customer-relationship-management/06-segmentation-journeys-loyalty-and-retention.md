# ARCH-023-06 — Segmentation, Journeys, Loyalty & Retention

**Document ID:** ARCH-023-06

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines governed customer segments, journey state, loyalty and program relationships, retention indicators, eligibility boundaries, and handoff to engagement and decision-intelligence services.

---

# Segmentation Model

A segment is a named, governed classification of customers for an explicit business purpose. It may be rule-based, event-driven, curated, or analytically derived.

Each segment defines:

* Owner, tenant, and purpose
* Inclusion and exclusion criteria
* Permitted data classes
* Consent and suppression requirements
* Evaluation method and version
* Refresh or event trigger
* Membership evidence and expiry
* Intended consumers
* Fairness, sensitivity, and review classification
* Retirement and deletion behavior

Segment membership is a derived relationship. It is never an identity claim, permission, entitlement, or substitute for current eligibility.

---

# Segment Types

| Type | Example | Control |
| --- | --- | --- |
| Operational | Customers awaiting an approved follow-up | Current workflow and suppression checks |
| Lifecycle | Prospect, active, dormant, former | Versioned business-event criteria |
| Preference | Customers choosing a channel or language | Declared preference and consent |
| Value | Approved value band | ARCH-028 measure definition and expiry |
| Risk | Churn or service-recovery indicator | Explainability, review, and non-discrimination |
| Curated | Steward-approved relationship group | Named owner and periodic review |

Sensitive segmentation requires heightened governance and may be prohibited regardless of predictive feasibility.

---

# Journey Model

A customer journey is a purpose-oriented view of progression across interactions and business outcomes. It is not the workflow engine.

ARCH-023 records journey definition, current relationship stage, milestones, source events, and outcome references. ARCH-015 executes workflows; ARCH-027 coordinates engagement; transactional domains decide business state.

Representative cross-industry stages include discover, consider, onboard, use, receive service, renew or return, pause, recover, and end relationship. Industry packs specialize these stages without redefining the shared lifecycle contract.

---

# Loyalty and Program Relationships

Loyalty is modeled as a governed program relationship among a customer, tenant or provider, and program definition. Membership includes enrollment source, tier reference, status, effective period, preferences, benefit references, and consent state.

Points, financial liabilities, rewards inventory, pricing, redemption, and settlement remain in their authoritative commerce or financial domains. ARCH-023 presents relationship context and stable references.

---

# Retention and Churn

Retention management may use service outcomes, declared preferences, relationship tenure, approved engagement history, and ARCH-028 signals. Each churn or retention indicator includes method, version, confidence, contributing categories, generated time, expiry, and permitted action class.

Low confidence, sensitive characteristics, or disputed data cannot drive consequential treatment. High-impact actions require deterministic eligibility and, where policy requires, human review.

---

# Audience Activation

ARCH-023 provides candidate audience membership to ARCH-027. Before activation, the engagement service rechecks:

* Current consent and suppression
* Channel preference and contactability
* Tenant and purpose scope
* Frequency and quiet-period policy
* Business eligibility
* Customer vulnerability or service-recovery restrictions
* Current segment version and expiry

Exported audience snapshots are time bounded, minimized, encrypted, traceable, and revocable.

---

# Feedback and Improvement

Journey and engagement outcomes feed ARCH-028 measurement and may create ARCH-029 evaluation candidates. Optimization cannot directly rewrite segment rules, preference values, outreach policy, or production response behavior.

Experiments define hypothesis, population, consent basis, risk limits, success metrics, stop conditions, and rollback before exposure. Control groups and exclusions remain tenant safe.

---

# Casa Lluvia Validation

Hospitality examples include prospect, inquiry-active, reserved, pre-arrival, in-stay, post-stay, returning guest, and service-recovery stages. These stages reference authoritative booking and stay events.

A returning-guest segment may support a relevant message, but it cannot grant a discount, declare availability, waive guest authorization, change pool or parking policy, release a lock code, or infer marketing consent.

---

# Invariants

* Segment membership is explainable, versioned, purpose bound, and expiring.
* Segments never create consent, access, price, entitlement, or transactional eligibility.
* Journey state is a projection, not workflow or transaction authority.
* Loyalty relationship is separate from financial liability and redemption.
* Predictions remain labeled and cannot silently become customer facts.
* Activation revalidates policy at the time of use.

