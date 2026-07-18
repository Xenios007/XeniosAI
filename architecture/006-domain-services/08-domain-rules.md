# ARCH-006 · Chapter 08 — Domain Rules

**Document ID:** ARCH-006-08

**Title:** Domain Rules

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-18

**Parent Document:** ARCH-006 — Domain Model

---

# Purpose

This document defines the Domain Rules governing the XeniosAI platform.

Domain Rules represent the policies, constraints, invariants, and decision logic that define how the business operates. They preserve business correctness regardless of technology, infrastructure, or implementation.

A Domain Rule expresses what must always be true within the business.

---

# Scope

This chapter defines:

* Domain Rule philosophy
* Business invariants
* Validation rules
* Policy rules
* Rule ownership
* Rule evolution
* Architectural principles

Technical validation, infrastructure configuration, and framework-specific constraints are intentionally outside the scope of this document.

---

# Philosophy

Software exists to implement business rules.

Entities, Aggregates, Value Objects, and Domain Services exist primarily to enforce those rules.

When business policies change, the domain model adapts.

When technology changes, business rules should remain unchanged.

The business—not the technology—is the source of truth.

---

# Why Domain Rules

Without explicit Domain Rules:

* Business behavior becomes inconsistent.
* Validation is duplicated.
* Policies become scattered.
* Business correctness degrades.
* Ownership becomes unclear.

Centralized Domain Rules preserve consistency across the platform.

---

# Characteristics

Every Domain Rule should:

* Represent business intent.
* Be technology independent.
* Be explicitly owned.
* Be consistently enforced.
* Be understandable by business stakeholders.
* Preserve domain integrity.

Rules should express business language rather than implementation logic.

---

# Rule Categories

The XeniosAI platform organizes Domain Rules into several categories.

| Category          | Purpose                                 |
| ----------------- | --------------------------------------- |
| Invariants        | Conditions that must always hold        |
| Validation Rules  | Determine whether data is acceptable    |
| Lifecycle Rules   | Govern state transitions                |
| Policy Rules      | Express organizational decisions        |
| Calculation Rules | Define business computations            |
| Eligibility Rules | Determine whether actions are permitted |

Each category addresses a different aspect of business correctness.

---

# Business Invariants

Business invariants must always remain true.

Examples include:

Reservation:

* Check-in date precedes check-out date.
* Occupancy does not exceed capacity.
* Cancelled reservations cannot be checked in.

Payment:

* Refund amount cannot exceed payment amount.
* Paid amount cannot become negative.

Property:

* Capacity must be greater than zero.

Violation of an invariant prevents the business operation from succeeding.

---

# Validation Rules

Validation Rules determine whether business information is acceptable.

Examples:

Guest

* Email Address is valid.
* Phone Number follows supported format.

Reservation

* Property exists.
* Reservation dates are complete.

Payment

* Currency is supported.
* Amount is valid.

Validation occurs before business state changes.

---

# Lifecycle Rules

Lifecycle Rules define valid state transitions.

Example:

```text id="cjljp8"
Pending

↓

Confirmed

↓

Checked In

↓

Checked Out
```

Allowed transition:

Confirmed

↓

Cancelled

Not allowed:

Checked Out

↓

Pending

Only valid transitions may occur.

---

# Policy Rules

Policy Rules reflect business decisions rather than technical constraints.

Examples include:

* Cancellation policy
* Refund policy
* Pricing policy
* Occupancy policy
* Booking policy

Policies may evolve without changing the overall business model.

---

# Pricing Rules

Examples include:

* Weekend pricing
* Holiday pricing
* Seasonal pricing
* Promotional discounts
* Minimum stay requirements

Pricing policies belong exclusively to the Pricing Context.

---

# Availability Rules

Examples include:

* Property must not be double-booked.
* Maintenance periods block reservations.
* Capacity limits must be respected.
* Operational restrictions apply.

Availability remains the responsibility of the Property Context.

---

# Payment Rules

Examples include:

* Authorization precedes settlement.
* Settlement precedes refund.
* Duplicate payments are prevented.
* Currency validation is required.

Financial correctness remains within the Payment Context.

---

# Notification Rules

Examples include:

* Confirmation follows successful booking.
* Delivery channel follows guest preference.
* Failed delivery may trigger retry policies.

Notification rules determine communication behavior without altering business ownership.

---

# Workflow Rules

Workflow Rules coordinate long-running business processes.

Examples include:

* Compensation follows failed workflow execution.
* Workflow steps execute in defined order.
* Completed workflows cannot restart.
* Failed workflows follow recovery policies.

Workflow coordination never overrides business ownership.

---

# Knowledge Rules

Examples include:

* Knowledge must be classified.
* Sources must be traceable.
* Metadata must remain consistent.
* Retrieval policies must be respected.

Knowledge Rules ensure AI operates on reliable information.

---

# Rule Ownership

Every Domain Rule belongs to exactly one bounded context.

Examples:

| Rule                    | Context      |
| ----------------------- | ------------ |
| Reservation eligibility | Reservation  |
| Capacity validation     | Property     |
| Price calculation       | Pricing      |
| Refund eligibility      | Payment      |
| Notification policy     | Notification |

Ownership ensures one authoritative source for every business decision.

---

# Rule Enforcement

Rules are enforced by different domain components depending on their nature.

Examples:

Entity

* Protects its own lifecycle.

Aggregate

* Protects consistency boundaries.

Value Object

* Validates business values.

Domain Service

* Applies complex business policies.

No rule should be duplicated across multiple components.

---

# Rule Collaboration

Multiple rules may participate in one business operation.

Example:

Create Reservation

↓

Validate Guest

↓

Validate Property

↓

Validate Dates

↓

Validate Capacity

↓

Calculate Price

↓

Create Reservation

Each rule contributes independently while preserving bounded context ownership.

---

# Business Consistency

Business consistency depends on every Domain Rule being respected before state changes occur.

General sequence:

```text id="kys5u4"
Business Request

↓

Rule Evaluation

↓

Validation

↓

Aggregate Update

↓

Transaction Commit

↓

Domain Event
```

Rules are evaluated before business facts are published.

---

# Rule Evolution

Business Rules evolve more frequently than software architecture.

Examples include:

* New pricing strategies.
* Updated cancellation policies.
* New occupancy limits.
* Regulatory compliance.
* AI-assisted recommendations.

Architecture should allow rule evolution without compromising domain integrity.

---

# Architectural Rules

Domain Rules must:

* Express business meaning.
* Remain technology independent.
* Preserve business consistency.
* Be explicitly owned.
* Use ubiquitous language.
* Avoid duplication.
* Protect business integrity.

Business Rules define the behavior of the domain rather than the behavior of software components.

---

# Future Evolution

Future rule categories may include:

* Loyalty policies
* Marketplace policies
* Vendor qualification
* AI governance
* Risk management
* Compliance validation
* Sustainability policies
* Dynamic optimization rules

Each new rule should remain owned by the appropriate bounded context.

---

# Summary

Domain Rules define the policies, constraints, and invariants that govern the XeniosAI business model.

By centralizing business decisions within their owning bounded contexts and enforcing them through Entities, Aggregates, Value Objects, and Domain Services, the platform maintains consistent behavior while remaining adaptable to changing business requirements.

---

# Related Documents

* ARCH-005-09 — Transaction Boundaries
* ARCH-006-03 — Core Entities
* ARCH-006-04 — Value Objects
* ARCH-006-05 — Aggregates
* ARCH-006-06 — Domain Services
* ARCH-006-07 — Domain Events
* ARCH-006-09 — Domain Lifecycle
