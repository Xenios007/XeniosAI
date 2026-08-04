# ARCH-023-05 — Interaction & Service History

**Document ID:** ARCH-023-05

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines normalized interaction records, service-history references, timelines, outcomes, summaries, provenance, and boundaries among conversations, transactions, cases, memory, and customer context.

---

# Interaction Model

An interaction is an attributable exchange or touchpoint involving a customer relationship. Examples include a web inquiry, chat session, message, call, email, visit, notification response, form submission, feedback event, or human-service contact.

The normalized interaction record contains:

* Interaction and correlation identifiers
* Tenant, channel, and customer references
* Participants and actor classes
* Start, end, and key transition times
* Declared purpose and intent category
* Source-system reference
* Outcome and disposition
* Consent, restriction, and retention classification
* References to transcript, attachments, workflow, case, or transaction
* Summary provenance and generation method

---

# Transcript Boundary

Raw conversation content remains owned by conversation or communication services. ARCH-023 stores references, approved summaries, topics, outcomes, and relationship-relevant facts only when purpose and retention permit.

A model-generated summary is labeled as generated and records source range, model or method version, creation time, confidence where applicable, and review state. It cannot overwrite the source or become an authoritative customer declaration without verification.

---

# Service History

Service history is a chronological projection of customer-relevant business outcomes. It may reference:

* Quotations, orders, reservations, bookings, or stays
* Product or resource usage
* Payments, deposits, refunds, or disputes
* Cases, complaints, requests, and service recovery
* Deliveries, appointments, subscriptions, or renewals
* Loyalty events and approved benefits

The owning domain remains authoritative. Customer history uses stable references, display-safe summaries, occurred-at time, status-at-source, and freshness metadata.

---

# Timeline Projection

The customer timeline is a read model, not a universal transaction log. It supports service continuity through chronological and relationship views while applying purpose, role, tenant, retention, and sensitivity filters.

Timeline entries distinguish:

| Entry type | Meaning |
| --- | --- |
| Interaction | Communication or touchpoint occurred |
| Business event | Authoritative domain state changed |
| Relationship event | Role or relationship changed |
| Preference event | Customer choice changed |
| Consent event | Permission or restriction changed |
| Derived insight | Time-bounded analytical result was produced |
| Stewardship event | Record was corrected, linked, merged, split, or restricted |

---

# Outcome Taxonomy

Outcome classifications are governed and versioned. Representative outcomes include answered, clarified, completed, abandoned, escalated, transferred, declined, failed, corrected, disputed, recovered, and follow-up-required.

An interaction can have multiple stage outcomes but one final disposition per source version. Outcome changes preserve history and reason.

---

# Conversation-to-Record Flow

1. The conversation service records the interaction and current context.
2. Deterministic tools return authoritative business results.
3. The orchestration layer proposes topics, outcomes, or profile candidates.
4. Policy filters sensitive, unnecessary, or disallowed material.
5. Required facts are verified or routed to stewardship.
6. Customer services persist approved relationship information and source references.
7. ARCH-029 may receive a separately approved learning candidate.

Steps 5–7 are independent. Profile approval does not automatically approve learning use, and learning approval does not change the customer record.

---

# Search and Retrieval

Search is tenant bounded and permission filtered. Index entries preserve source identifiers, restriction state, retention class, and deletion propagation. Semantic retrieval cannot return material that field-level policy would deny through direct access.

Summaries may accelerate navigation but must link to current authoritative records for consequential decisions.

---

# Failure and Reconciliation

If an owning domain is unavailable, the customer view shows the last known status with source timestamp and stale indicator. It never claims a reservation, payment, cancellation, or refund is current based solely on cached history.

Events are idempotent, ordered per aggregate where required, and reconciled against source checkpoints. Corrections and deletions propagate to timelines, indexes, caches, exports, and downstream consumers.

---

# Invariants

* A timeline entry is not authority for a transaction.
* Raw transcripts are not copied into customer profiles by default.
* Generated summaries retain source and method provenance.
* Search applies the same policy as direct retrieval.
* Stale history is labeled and never represented as current state.
* Customer and learning records have separate approval and retention lifecycles.

