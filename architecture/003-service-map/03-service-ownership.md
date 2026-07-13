# ARCH-003 · Chapter 03 — Service Ownership

**Document ID:** ARCH-003-03

**Title:** Service Ownership

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-003 — Service Map

---

# Purpose

This document defines ownership boundaries for every major business capability within XeniosAI.

Ownership establishes which service is the authoritative source for a business concept, ensuring that responsibilities remain clear and architectural duplication is avoided.

Ownership is fundamental to maintaining a scalable and maintainable service-oriented architecture.

---

# Philosophy

Every business capability must have exactly one authoritative owner.

Ownership determines:

* Where business rules are implemented.
* Which service validates changes.
* Which service owns the underlying data.
* Which service publishes domain events.
* Which service evolves the capability.

Ownership is never shared.

Collaboration is encouraged.

Authority is singular.

---

# The Single Ownership Principle

Within XeniosAI:

* One capability.
* One owner.
* One source of truth.

Multiple services may consume a capability.

Only one service may own it.

---

# Ownership Matrix

| Business Capability    | Authoritative Owner    |
| ---------------------- | ---------------------- |
| Reservations           | Booking Service        |
| Booking Lifecycle      | Booking Service        |
| Pricing Rules          | Pricing Service        |
| Promotions             | Pricing Service        |
| Discounts              | Pricing Service        |
| Availability           | Calendar Service       |
| Reservation Blocks     | Calendar Service       |
| Property Configuration | Property Service       |
| Amenities              | Property Service       |
| Policies               | Knowledge Service      |
| FAQs                   | Knowledge Service      |
| Notifications          | Notification Service   |
| User Identity          | Authentication Service |
| Roles & Permissions    | Authentication Service |
| Digital Assets         | Media Service          |
| Business Metrics       | Analytics Service      |
| Workflow Definitions   | Workflow Service       |

This matrix is the authoritative ownership reference for the platform.

---

# Ownership Responsibilities

The owning service is responsible for:

* Business rules.
* Validation.
* State transitions.
* Data integrity.
* Public contracts.
* Domain events.
* Version compatibility.

Consumers may request operations.

Only owners may authorize changes.

---

# Data Ownership

Ownership includes responsibility for persistent data.

Examples:

### Booking Service

Owns:

* Reservations
* Booking status
* Booking history

---

### Pricing Service

Owns:

* Rate tables
* Promotions
* Discount rules
* Pricing policies

---

### Calendar Service

Owns:

* Availability
* Reservation blocks
* Maintenance schedules

---

### Knowledge Service

Owns:

* FAQs
* Policies
* House rules
* Operational procedures

Business data must never be modified by non-owning services.

---

# Domain Authority

Owning a domain means making authoritative decisions.

Examples:

Pricing Service determines:

* Final reservation price.
* Applicable promotions.
* Taxes and fees.

Booking Service must never calculate pricing independently.

Similarly:

Calendar Service determines availability.

Booking Service must never decide whether dates are available without consulting the Calendar Service.

---

# Collaboration Model

Services collaborate without transferring ownership.

Example:

```text
Booking Service

↓

Pricing Service

↓

Calendar Service

↓

Notification Service
```

Each service performs work within its own domain.

No service assumes ownership of another service's responsibilities.

---

# Ownership vs Consumption

Ownership and consumption are different concepts.

Example:

Booking Service **consumes** pricing.

Pricing Service **owns** pricing.

Booking Service **consumes** availability.

Calendar Service **owns** availability.

Consumers should never replicate owner logic.

---

# Architectural Rules

The following rules apply throughout XeniosAI:

* Every capability has exactly one owner.
* Every owner publishes stable interfaces.
* Consumers access capabilities through those interfaces.
* No service bypasses the owning service.
* No duplicate business rules are permitted.

Violations require an approved Architecture Decision Record (ADR).

---

# Common Ownership Violations

The following are architectural defects:

❌ Booking Service recalculates pricing.

❌ AI determines availability.

❌ Notification Service updates reservations.

❌ Calendar Service stores pricing rules.

❌ Property Service edits authentication data.

These examples violate ownership boundaries.

---

# Benefits

Clear ownership provides:

* Predictable behavior.
* Reduced duplication.
* Independent evolution.
* Easier testing.
* Simpler maintenance.
* Clear accountability.
* Better scalability.

Ownership is the foundation of long-lived service architectures.

---

# Governance

Ownership changes are significant architectural events.

Any change to domain ownership should:

* Be documented through an ADR.
* Update the Service Catalog.
* Update affected architecture documents.
* Review dependent services.

Ownership should change infrequently.

---

# Future Evolution

As XeniosAI expands, new services should introduce new ownership domains rather than overlap existing ones.

Examples:

* Loyalty Service → Loyalty Program
* Housekeeping Service → Housekeeping Operations
* Maintenance Service → Maintenance Requests
* Billing Service → Financial Transactions

Every new domain must have one authoritative owner.

---

# Summary

Service ownership defines the authoritative boundaries of XeniosAI.

Each business capability belongs to one service, and only that service may implement the corresponding business rules and own the associated data.

By enforcing singular ownership, XeniosAI avoids duplication, preserves consistency, and enables independent evolution of its services.

---

# Related Documents

* ARCH-002-07 — Business Services Layer
* ARCH-003-02 — Service Catalog
* ARCH-003-04 — Service Dependencies
* ARCH-006 — Domain Model
* ADR-0001 — Tool-First Architecture
