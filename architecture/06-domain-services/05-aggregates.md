# ARCH-006 · Chapter 05 — Aggregates

**Document ID:** ARCH-006-05

**Title:** Aggregates

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-18

**Parent Document:** ARCH-006 — Domain Model

---

# Purpose

This document defines the Aggregate model of the XeniosAI platform.

Aggregates establish the consistency boundaries of the Domain Model. They determine how Entities and Value Objects are grouped, where business invariants are enforced, and how transactional consistency is maintained.

An Aggregate is not merely a collection of objects—it is a business consistency boundary.

---

# Scope

This chapter defines:

* Aggregate philosophy
* Aggregate Roots
* Consistency boundaries
* Aggregate ownership
* Aggregate relationships
* Aggregate lifecycle
* Aggregate evolution

Implementation concerns such as ORM mappings, persistence models, and database schemas are intentionally outside the scope of this document.

---

# Philosophy

Business consistency does not exist across the entire platform.

It exists within carefully defined boundaries.

An Aggregate represents the largest boundary within which business consistency must always be preserved.

Everything outside that boundary communicates through explicit contracts.

---

# Why Aggregates

Without Aggregate boundaries:

* Business rules become scattered.
* Multiple services modify the same data.
* Transactions grow unnecessarily.
* Ownership becomes ambiguous.
* Coupling increases.

Aggregates provide a single point of authority for maintaining business correctness.

---

# Aggregate Principles

Every Aggregate should:

* Have one Aggregate Root.
* Protect business invariants.
* Own its internal objects.
* Be modified through its Root.
* Remain transactionally consistent.
* Minimize external dependencies.

Aggregates define consistency—not database design.

---

# Aggregate Root

Every Aggregate has one authoritative root.

The Aggregate Root:

* Owns the Aggregate.
* Controls state changes.
* Enforces invariants.
* Validates business rules.
* Protects internal consistency.

External components interact only with the Aggregate Root.

Internal members remain implementation details of the Aggregate.

---

# Aggregate Structure

An Aggregate typically consists of:

```text
Aggregate Root

├── Entities
├── Value Objects
├── Business Rules
└── Invariants
```

The Aggregate Root represents the public business interface.

---

# Aggregate Ownership

Each Aggregate belongs entirely to one bounded context.

Examples:

| Aggregate   | Context     |
| ----------- | ----------- |
| Reservation | Reservation |
| Guest       | Guest       |
| Property    | Property    |
| Payment     | Payment     |
| Workflow    | Workflow    |

Ownership is never shared.

---

# Reservation Aggregate

Aggregate Root:

Reservation

May contain:

* Reservation Details
* Stay Information
* Guest Count
* Reservation Status
* Pricing Snapshot
* Date Range

Business invariants include:

* Reservation dates are valid.
* Capacity is respected.
* Status transitions are legal.
* Required information is complete.

All modifications occur through the Reservation Aggregate Root.

---

# Guest Aggregate

Aggregate Root:

Guest

May contain:

* Contact Information
* Communication Preferences
* Addresses
* Profile Information

Business invariants include:

* Identity remains unique.
* Contact information is valid.
* Preferences remain internally consistent.

---

# Property Aggregate

Aggregate Root:

Property

May contain:

* Capacity
* Amenities
* Location
* Operating Configuration
* Availability Rules

Business invariants include:

* Capacity is positive.
* Property remains operationally valid.
* Configuration satisfies platform policies.

---

# Payment Aggregate

Aggregate Root:

Payment

May contain:

* Amount
* Currency
* Payment Status
* Settlement Information
* Transaction References

Business invariants include:

* Amount cannot become invalid.
* Payment lifecycle is respected.
* Refunds cannot exceed settled value.

---

# Workflow Aggregate

Aggregate Root:

Workflow Instance

May contain:

* Current Step
* Execution State
* Progress
* Compensation Information
* Correlation Data

Workflow Aggregates coordinate execution while remaining independent of business ownership.

---

# Internal Entities

Internal Entities belong exclusively to their Aggregate.

Examples:

Reservation

contains

Reservation Line

Reservation Timeline

Pricing Snapshot

These internal Entities should not be referenced directly by external Aggregates.

---

# Value Objects

Aggregates frequently contain Value Objects.

Examples:

Reservation

contains

* Date Range
* Money
* Guest Count

Property

contains

* Address
* Coordinates

Payment

contains

* Money
* Currency

Value Objects simplify Aggregate consistency by remaining immutable.

---

# Aggregate References

Aggregates reference one another by identity.

Example:

Reservation

→ Guest ID

→ Property ID

→ Payment ID

Aggregates should never directly contain other Aggregate Roots.

This preserves autonomy and minimizes coupling.

---

# Business Invariants

Every Aggregate protects its own invariants.

Examples:

Reservation

* Check-out follows check-in.
* Occupancy never exceeds capacity.
* Cancelled reservations cannot be checked in.

Payment

* Paid amount remains non-negative.
* Settlement follows authorization.
* Refund cannot exceed payment.

Property

* Availability reflects business rules.
* Capacity remains valid.

Invariants are enforced by the Aggregate Root.

---

# Consistency Boundary

A transaction should normally modify only one Aggregate.

Examples:

Create Reservation

↓

Reservation Aggregate

Refund Payment

↓

Payment Aggregate

Cross-Aggregate business processes are coordinated through:

* Commands
* Events
* Workflows

rather than shared transactions.

---

# Aggregate Collaboration

Aggregates collaborate without sharing ownership.

Example:

Reservation Created

↓

Reservation publishes event

↓

Payment processes payment

↓

Notification sends confirmation

↓

Workflow continues

Each Aggregate protects its own consistency while participating in larger business processes.

---

# Aggregate Size

Aggregates should remain cohesive.

Large Aggregates often indicate:

* Multiple business responsibilities
* Excessive coupling
* Difficult transactions
* Poor ownership boundaries

Small, focused Aggregates improve scalability and maintainability.

---

# Lifecycle

Each Aggregate manages its own lifecycle.

Example:

Reservation

Created

↓

Confirmed

↓

Checked In

↓

Checked Out

or

↓

Cancelled

Lifecycle transitions occur only through Aggregate behavior.

---

# Evolution

Aggregates may evolve through:

* New Value Objects
* Additional internal Entities
* Expanded business behavior
* Improved validation
* New invariants

Evolution should preserve ownership and consistency boundaries.

---

# Architectural Rules

Aggregates must:

* Have one Aggregate Root.
* Protect business invariants.
* Own internal Entities.
* Reference external Aggregates by identity only.
* Maintain transactional consistency.
* Avoid unnecessary size and complexity.

Aggregates define the business consistency boundaries of XeniosAI.

---

# Future Evolution

Future Aggregates may include:

* Invoice
* Promotion
* Loyalty Account
* Vendor
* Maintenance Request
* AI Agent
* Conversation
* Task
* Campaign

Each new Aggregate should represent an independently consistent business concept.

---

# Summary

Aggregates organize the XeniosAI Domain Model into clear business consistency boundaries.

By assigning one Aggregate Root to each cohesive business concept and restricting transactions to those boundaries, the platform preserves business correctness while enabling scalable collaboration through events, workflows, and explicit contracts.

---

# Related Documents

* ARCH-005-05 — Workflow Orchestration
* ARCH-005-09 — Transaction Boundaries
* ARCH-006-02 — Bounded Contexts
* ARCH-006-03 — Core Entities
* ARCH-006-04 — Value Objects
* ARCH-006-06 — Domain Services
* ARCH-006-08 — Domain Rules
