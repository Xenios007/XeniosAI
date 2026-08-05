# ARCH-025-07 — Fulfillment, Add-ons & Packages

**Document ID:** ARCH-025-07

**Parent Document:** ARCH-025 — Commerce, Orders & Reservations

**Status:** Draft

---

# Purpose

This chapter defines fulfillment plans, component dependencies, add-ons, substitutions, partial completion, failure, and completion evidence.

---

# Architectural Position

ARCH-025 owns accepted commercial commitments and their lifecycle. It consumes customer, identity, catalog, resource, policy, pricing, payment, workflow, and engagement capabilities through versioned contracts without sharing their databases.

Casa Lluvia validates inquiry-to-booking, date and guest selection, optional pool and parking items, temporary allocation, confirmation, change, cancellation, and stay handoff. Property rules remain in the hospitality solution pack, while the shared transaction model supports rental, commerce, appointments, subscriptions, and services.

---

# Capability Responsibilities

* Fulfillment plan
* Add-on attachment
* Package component coordination
* Substitution and exception
* Completion and failure state

---

# State and Authority

Each aggregate exposes an explicit state machine, expected version, allowed commands, invariants, and events. A client-visible confirmation is produced only after the authoritative command commits. Quotes, cached availability, optimistic UI, conversation text, partner acknowledgements, and model output are not commitments.

---

# Command and Event Model

Commands carry tenant, actor, customer reference, purpose, idempotency key, expected version, channel, correlation identifier, and confirmation evidence. Events carry stable references and minimum necessary facts. Consumers build projections but cannot rewrite source state.

Cross-domain processes use ARCH-015 workflows, sagas, reservations, and compensating actions. Financial operations remain with ARCH-026.

---

# Controls

* Provider-side authorization and tenant isolation apply to every command and query.
* Consequential actions require explicit customer or authorized-operator confirmation.
* Duplicate delivery is safe through idempotency and deterministic conflict handling.
* Effective policy, catalog, price, and resource versions are pinned or referenced.
* Sensitive data is minimized and never embedded in unrestricted events or logs.

---

# Failure and Recovery

Timeouts leave state explicit as pending, unknown, rejected, expired, or compensating; they never imply success. Recovery uses status queries, durable command records, idempotent retry, outbox delivery, reconciliation, manual exception queues, and bounded compensation.

---

# Observability

Telemetry correlates intent, quote, cart, order, reservation, hold, allocation, payment reference, fulfillment, channel, and workflow without exposing payment secrets or unnecessary customer content. Measures include acceptance latency, conflict rate, hold expiry, oversell incidents, modification success, compensation age, partner drift, and recovery completion.

---

# Invariants

* Only the owning domain service commits its aggregate.
* Availability observation is not allocation.
* A generated or cached statement is not confirmation.
* Pricing and payment state remain authoritative in ARCH-026.
* Every accepted, changed, cancelled, or compensated commitment is attributable and auditable.

