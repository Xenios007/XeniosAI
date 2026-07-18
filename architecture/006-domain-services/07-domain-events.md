# ARCH-006 · Chapter 07 — Domain Events

**Document ID:** ARCH-006-07

**Title:** Domain Events

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-18

**Parent Document:** ARCH-006 — Domain Model

---

# Purpose

This document defines Domain Events within the XeniosAI Domain Model.

Domain Events represent significant business facts that have already occurred. They communicate meaningful state changes within the domain, enabling collaboration between Bounded Contexts while preserving ownership, autonomy, and consistency.

A Domain Event records **what happened**, not **what should happen**.

---

# Scope

This chapter defines:

* Domain Event philosophy
* Event ownership
* Event lifecycle
* Event publication
* Event consumption
* Event evolution
* Architectural principles

Implementation details such as event brokers, messaging middleware, serialization formats, and transport protocols are intentionally outside the scope of this document.

---

# Philosophy

Business operations produce business facts.

Examples include:

* Reservation Created
* Payment Authorized
* Reservation Cancelled
* Guest Registered
* Property Updated

These facts become Domain Events.

Once published, they describe completed business outcomes that other parts of the platform may observe.

---

# Why Domain Events

Without Domain Events:

* Services become tightly coupled.
* Business workflows become synchronous.
* Ownership boundaries become blurred.
* Cross-domain collaboration becomes difficult.

Domain Events allow business capabilities to evolve independently while remaining connected through shared business facts.

---

# Characteristics

Every Domain Event should:

* Represent something that has already happened.
* Be immutable.
* Be owned by one bounded context.
* Describe business meaning.
* Be independently consumable.
* Preserve historical accuracy.

A Domain Event is never modified after publication.

---

# Business Fact

A Domain Event is a historical record.

Example:

```text
Reservation Created
```

The reservation either was created or it was not.

The event captures this fact permanently.

Future state changes generate new Domain Events rather than altering existing ones.

---

# Event Ownership

Every Domain Event has exactly one publisher.

Examples:

| Domain Event           | Owning Context |
| ---------------------- | -------------- |
| Reservation Created    | Reservation    |
| Reservation Cancelled  | Reservation    |
| Payment Authorized     | Payment        |
| Payment Refunded       | Payment        |
| Guest Registered       | Guest          |
| Property Updated       | Property       |
| Notification Delivered | Notification   |

Only the owning bounded context may publish its Domain Events.

---

# Reservation Events

Typical Reservation Domain Events include:

* Reservation Created
* Reservation Confirmed
* Reservation Modified
* Reservation Cancelled
* Reservation Checked In
* Reservation Checked Out

These events communicate reservation lifecycle progression.

---

# Payment Events

Payment Domain Events include:

* Payment Initiated
* Payment Authorized
* Payment Captured
* Payment Failed
* Payment Refunded

Financial events communicate completed payment activities without exposing internal implementation.

---

# Guest Events

Examples include:

* Guest Registered
* Guest Updated
* Guest Profile Changed
* Guest Preference Updated

These events allow other contexts to react while preserving Guest ownership.

---

# Property Events

Property Domain Events include:

* Property Registered
* Property Updated
* Availability Changed
* Capacity Updated
* Maintenance Scheduled

Property remains the authoritative publisher of these events.

---

# Notification Events

Examples include:

* Notification Queued
* Notification Sent
* Notification Delivered
* Notification Failed

These events describe communication outcomes rather than business decisions.

---

# Knowledge Events

Knowledge Domain Events may include:

* Knowledge Indexed
* Knowledge Updated
* Knowledge Removed
* Knowledge Classified

These events support AI capabilities while remaining independent of operational business data.

---

# Workflow Events

Workflow Events describe orchestration progress.

Examples include:

* Workflow Started
* Workflow Continued
* Workflow Completed
* Workflow Failed
* Compensation Started
* Compensation Completed

Workflow Events coordinate long-running business processes without changing business ownership.

---

# Event Publication

Domain Events are published only after business consistency has been achieved.

Typical sequence:

```text
Aggregate

↓

Business Rule Validation

↓

Transaction Commit

↓

Publish Domain Event
```

Publishing before successful completion risks communicating incorrect business facts.

---

# Event Consumers

Multiple bounded contexts may observe the same Domain Event.

Example:

```text
Reservation Created

↓

Pricing

↓

Payment

↓

Notification

↓

Analytics

↓

Workflow
```

Each consumer independently decides whether the event is relevant.

---

# Event Collaboration

Domain Events enable loose collaboration.

Example:

Reservation Context

publishes

Reservation Confirmed

↓

Notification Context

sends confirmation

↓

Analytics Context

updates reporting

↓

Workflow Context

continues process

The publisher remains unaware of downstream consumers.

---

# Immutability

Once published:

A Domain Event must never change.

If business circumstances evolve, a new Domain Event is published.

Example:

```text
Reservation Confirmed

↓

Reservation Cancelled
```

The cancellation does not alter the confirmation event.

Both remain part of business history.

---

# Event Granularity

Events should represent meaningful business outcomes.

Good examples:

* Reservation Confirmed
* Payment Refunded
* Guest Registered

Poor examples:

* Reservation Field Updated
* Database Row Modified
* Internal Cache Refreshed

Events should communicate business language rather than technical implementation.

---

# Event Naming

Domain Events should be expressed using past tense.

Examples:

* Reservation Created
* Payment Authorized
* Guest Registered
* Notification Delivered

Past tense reinforces that the event represents a completed fact.

---

# Event Relationships

One business operation may generate multiple Domain Events.

Example:

```text
Reservation Created

↓

Payment Requested

↓

Payment Authorized

↓

Reservation Confirmed

↓

Notification Sent
```

Each event represents a distinct business milestone.

---

# Event Ordering

Within one Aggregate:

Business ordering should be preserved.

Example:

```text
Reservation Created

↓

Reservation Confirmed

↓

Reservation Checked In

↓

Reservation Checked Out
```

Across different Aggregates, global ordering should not be assumed.

Consumers should rely on business meaning rather than transport sequence.

---

# Event Versioning

Business meaning should remain stable.

When Domain Events evolve:

* Preserve existing semantics.
* Prefer additive evolution.
* Avoid changing historical meaning.
* Publish new event types when necessary.

Event contracts should remain reliable for consumers.

---

# Relationship to Commands

Commands express intent.

Events express completed facts.

Example:

```text
Command

Confirm Reservation

↓

Aggregate

↓

Reservation Confirmed
```

Commands request work.

Events announce completed work.

---

# Relationship to Workflows

Workflows observe Domain Events to coordinate business processes.

Example:

```text
Reservation Confirmed

↓

Workflow continues

↓

Payment Requested

↓

Payment Authorized

↓

Notification Sent
```

Workflows orchestrate reactions without assuming ownership of business data.

---

# Business Consistency

A Domain Event should never violate business consistency.

An event exists only after:

* Business validation
* Aggregate consistency
* Successful transaction

This guarantees that consumers receive reliable business facts.

---

# Evolution

Domain Events may evolve through:

* New event types
* Additional metadata
* Expanded business coverage
* Additional bounded contexts

Evolution should preserve historical correctness and business meaning.

---

# Architectural Rules

Domain Events must:

* Represent completed business facts.
* Be immutable.
* Use ubiquitous language.
* Be published by one bounded context.
* Preserve historical truth.
* Enable loose collaboration.
* Avoid implementation details.

A Domain Event records what happened—not what should happen next.

---

# Future Evolution

Future Domain Events may include:

* Promotion Applied
* Loyalty Points Earned
* Invoice Generated
* Vendor Assigned
* AI Recommendation Generated
* Conversation Started
* Maintenance Completed
* Dynamic Price Calculated

Each new event should communicate a meaningful business outcome.

---

# Summary

Domain Events provide the XeniosAI platform with a reliable mechanism for communicating completed business facts across bounded contexts.

By publishing immutable, business-oriented events after successful transactions, the platform enables scalable workflows, loose coupling, and independent evolution while preserving the integrity of business ownership.

---

# Related Documents

* ARCH-004-07 — Event Routing
* ARCH-005-04 — Event-Driven Architecture
* ARCH-005-05 — Workflow Orchestration
* ARCH-005-08 — Messaging Patterns
* ARCH-005-09 — Transaction Boundaries
* ARCH-006-05 — Aggregates
* ARCH-006-06 — Domain Services
* ARCH-006-08 — Domain Rules
