# ARCH-002 · Chapter 07 — Business Services Layer

**Document ID:** ARCH-002-07

**Title:** Business Services Layer

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-002 — Platform Layers

---

# Purpose

The Business Services Layer contains the deterministic business capabilities of XeniosAI.

It is responsible for executing business rules, enforcing operational policies, coordinating domain workflows, and protecting the integrity of hospitality operations.

This layer answers the question:

> **What is the correct business outcome?**

Unlike the AI Intelligence Layer, which reasons about user requests, the Business Services Layer produces authoritative business decisions.

---

# Philosophy

Business rules belong to software—not to AI.

Artificial Intelligence may recommend, explain, or orchestrate actions.

Only Business Services may decide whether those actions are valid.

Examples:

* Whether a room is available.
* How much a reservation costs.
* Whether a booking may be cancelled.
* Whether a promotion applies.
* Whether a payment is required.

Every business decision must be deterministic and reproducible.

---

# Position Within the Platform

```text id="9m9o3u"
AI Intelligence Layer
        │
        ▼
Business Services Layer
        │
        ▼
Data Layer
```

Business Services translate AI requests into authoritative business operations.

---

# Responsibilities

The Business Services Layer is responsible for:

* Business rule enforcement.
* Domain workflows.
* Validation.
* Authorization of business actions.
* Domain coordination.
* Transaction management.
* Data ownership.
* Integration orchestration.
* Event generation.
* Audit recording.

It is the operational core of XeniosAI.

---

# Domain-Oriented Design

Each Business Service owns a single business domain.

Examples include:

### Booking Service

Responsible for:

* Reservations
* Booking confirmation
* Booking modification
* Booking cancellation

---

### Pricing Service

Responsible for:

* Rate calculation
* Discounts
* Promotions
* Taxes
* Fees

---

### Calendar Service

Responsible for:

* Availability
* Reservation blocks
* Maintenance periods
* Calendar synchronization

---

### Knowledge Service

Responsible for:

* Policies
* Amenities
* FAQs
* Property information

---

### Notification Service

Responsible for:

* Email
* SMS
* Messenger notifications
* Operational alerts

---

### Property Service

Responsible for:

* Property configuration
* Amenities
* Operational settings
* Branding

---

### Authentication Service

Responsible for:

* User accounts
* Roles
* Permissions
* Identity management

---

### Analytics Service

Responsible for:

* Operational metrics
* Business reporting
* Platform analytics
* Performance indicators

---

# Service Ownership

Every business capability belongs to exactly one service.

Examples:

| Capability     | Owner                  |
| -------------- | ---------------------- |
| Availability   | Calendar Service       |
| Pricing        | Pricing Service        |
| Reservations   | Booking Service        |
| Property Rules | Knowledge Service      |
| Notifications  | Notification Service   |
| Authentication | Authentication Service |

Ownership must never be ambiguous.

---

# Inter-Service Communication

Business Services communicate through explicit contracts.

Communication mechanisms may include:

* Service interfaces
* Domain events
* Commands
* Queries

Services must never depend on another service's internal implementation or database.

---

# Transactions

Business operations frequently involve multiple services.

Example:

```text id="vzst5u"
Booking Request

↓

Booking Service

↓

Pricing Service

↓

Calendar Service

↓

Notification Service
```

The Booking Service coordinates the workflow while each participating service remains responsible for its own domain.

---

# Responsibilities

The Business Services Layer owns:

* Business rules
* Validation
* Transactions
* Domain models
* Business events
* Domain coordination
* Data ownership

---

# Prohibitions

The Business Services Layer must never:

* Store conversation state.
* Assemble AI prompts.
* Perform AI reasoning.
* Render user interfaces.
* Bypass the Data Layer.
* Call databases owned by another service.
* Embed provider-specific implementation details.

Its focus remains on business behavior.

---

# Data Ownership

Every service owns its own business data.

Examples:

Booking Service

owns bookings.

Pricing Service

owns pricing rules.

Calendar Service

owns availability.

Knowledge Service

owns operational knowledge.

No service should modify another service's data directly.

---

# Event Generation

Business Services may publish events when important domain actions occur.

Examples:

* BookingCreated
* BookingCancelled
* PaymentReceived
* CalendarUpdated
* NotificationSent

Events should describe completed business facts rather than implementation details.

---

# Error Handling

Business Services should return deterministic outcomes.

Examples:

* Success
* Validation failure
* Business rule violation
* Authorization failure
* Resource unavailable

Errors should be explicit and actionable.

---

# Scalability

Business Services should support:

* Independent deployment
* Horizontal scaling
* Independent versioning
* Independent testing
* Incremental replacement

Services should evolve independently whenever practical.

---

# Security Considerations

Business Services enforce business-level authorization.

Examples:

* Reservation ownership
* Administrative permissions
* Property access
* Operational restrictions

Infrastructure authentication belongs to the Gateway Layer.

Business authorization belongs here.

---

# Future Evolution

The Business Services Layer is expected to expand significantly.

Potential future services include:

* Loyalty Service
* Revenue Management Service
* Housekeeping Service
* Maintenance Service
* Smart Device Service
* CRM Service
* Workforce Management Service
* Marketplace Service

New capabilities should be introduced as new services rather than expanding unrelated ones.

---

# Summary

The Business Services Layer is the operational heart of XeniosAI.

It contains every deterministic business capability that defines how the platform behaves.

By separating business rules from AI reasoning, user interaction, and infrastructure concerns, XeniosAI remains predictable, testable, and maintainable as it grows.

---

# Related Documents

* ARCH-002-06 — AI Intelligence Layer
* ARCH-002-08 — Data Layer
* ARCH-003 — Service Map
* ARCH-005 — Data Flow
* ADR-0001 — Tool-First Architecture
