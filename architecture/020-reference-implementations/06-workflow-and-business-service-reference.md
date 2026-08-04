# ARCH-020-06 — Workflow and Business Service Reference

**Document ID:** ARCH-020-06  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document demonstrates deterministic business services, commands, queries, events, workflows, transaction boundaries, idempotency, compensation, and recovery.

# Service Reference

Reference bounded services include Property, Availability, Pricing, Reservation, Guest, Notification, and Integration capabilities.

Each service owns its domain model, repository, API, events, health, telemetry, lifecycle, and recovery.

# Command Pattern

A command contains command ID, actor, tenant/property context, expected version, payload, purpose, time, and correlation.

The provider validates authorization, ownership, invariants, concurrency, and idempotency before committing local state.

# Query Pattern

Queries are side-effect free, tenant scoped, contract versioned, filtered, paginated where needed, and explicit about freshness and source.

Read models are projections, not alternative authorities.

# Event Pattern

Events record completed domain facts with stable identity, schema, tenant/property scope, occurred time, source authority, correlation, and minimal payload.

Transactional publication uses an outbox or equivalent reliable pattern.

# Reservation Workflow

The reference workflow coordinates:

1. Validate request.
2. Create availability hold.
3. Produce pricing snapshot.
4. Request deposit or payment confirmation.
5. Collect guest authorization details.
6. Confirm reservation.
7. Publish confirmation events.
8. Send notifications.
9. Expire or compensate incomplete work.

# Workflow State

Workflow state stores progress, references, timers, decisions, attempts, and compensation status. It does not duplicate authoritative service records.

# Transaction Boundaries

Each service commits only its owned state. Cross-service consistency uses workflows, events, idempotent commands, reconciliation, and compensating actions.

No distributed shared-database transaction is used.

# Idempotency

Reservation, payment callback, notification, event consumption, and workflow activity examples demonstrate stable idempotency keys and outcome replay.

# Concurrency

Availability and reservation commands use optimistic versioning or an equivalent concurrency boundary to prevent double confirmation.

Conflicts produce explicit retry or business-resolution behavior.

# Failure Handling

| Failure | Reference response |
|---|---|
| Availability service timeout | Retry bounded query or return unavailable |
| Hold conflict | Reject and offer refreshed availability |
| Payment ambiguity | Reconcile before retrying charge |
| Guest data missing | Wait with deadline and reminder |
| Notification failure | Retry independently; do not reverse booking automatically |
| Workflow worker loss | Resume from durable history |
| Cancellation after confirmation | Execute policy-driven compensation |

# Reconciliation

Scheduled reconciliation checks holds, confirmed reservations, payment references, notification status, event projections, and workflow state.

Differences create owned issues; data is not silently overwritten.

# Observability

Trace correlation connects command, service transaction, event, workflow, integration, and notification without exposing guest data.

# Acceptance Criteria

* Services own and protect their repositories.
* Duplicate commands do not duplicate material effects.
* Cross-service workflow recovers after worker restart.
* Partial failure produces visible state and compensation.
* Events correspond to committed facts.
* Tenant context remains present in every boundary.

# Architecture Decisions

* Business state changes are deterministic service commands.
* Workflows coordinate but do not own domain truth.
* Local transactions and reliable events replace shared transactions.
* Reconciliation is a first-class recovery control.

# Summary

The reference turns business rules into independently owned services and durable workflows with explicit commands, queries, events, consistency, failure, and recovery semantics.
