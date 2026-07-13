# ARCH-003 · Chapter 05 — Domain Boundaries

**Document ID:** ARCH-003-05

**Title:** Domain Boundaries

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-003 — Service Map

---

# Purpose

This document defines the business boundaries of every XeniosAI service.

Domain boundaries establish what each service is responsible for, what it is explicitly **not** responsible for, and how services collaborate without overlapping responsibilities.

Clearly defined boundaries preserve modularity, reduce coupling, and allow services to evolve independently.

---

# Philosophy

Business domains should be isolated.

A service should possess deep knowledge of its own domain while remaining largely unaware of the internal implementation of other services.

Boundaries exist to protect business ownership.

Crossing those boundaries should occur only through published contracts.

---

# Boundary Principles

Every service boundary should satisfy the following principles:

* Single business domain.
* Explicit ownership.
* Minimal overlap.
* Stable interfaces.
* Independent evolution.
* Private implementation.

Business capabilities should never be split across unrelated services.

---

# Booking Service Boundary

## Owns

* Reservations
* Reservation lifecycle
* Booking status
* Booking history

## Does Not Own

* Pricing rules
* Availability
* Property configuration
* Notifications

## Collaborates With

* Pricing Service
* Calendar Service
* Notification Service
* Property Service

---

# Pricing Service Boundary

## Owns

* Pricing rules
* Discounts
* Promotions
* Taxes
* Fees

## Does Not Own

* Reservations
* Availability
* Property media
* Notifications

## Collaborates With

* Property Service
* Booking Service

---

# Calendar Service Boundary

## Owns

* Availability
* Reservation blocks
* Maintenance schedules
* Calendar synchronization

## Does Not Own

* Reservations
* Pricing
* Guest communication

## Collaborates With

* Booking Service

---

# Knowledge Service Boundary

## Owns

* Policies
* FAQs
* Amenities
* Operational procedures
* House rules

## Does Not Own

* Reservations
* Pricing
* User accounts

## Collaborates With

* Property Service
* AI Intelligence Layer

---

# Property Service Boundary

## Owns

* Property configuration
* Amenities configuration
* Branding
* Operational settings

## Does Not Own

* Pricing calculations
* Reservations
* Notifications

## Collaborates With

* Pricing Service
* Knowledge Service
* Booking Service

---

# Notification Service Boundary

## Owns

* Notification templates
* Delivery tracking
* Message dispatch
* Delivery channels

## Does Not Own

* Business decisions
* Reservation state
* Pricing logic

## Collaborates With

* Booking Service
* Workflow Service
* Integration Layer

---

# Authentication Service Boundary

## Owns

* Users
* Roles
* Permissions
* Authentication tokens
* Identity lifecycle

## Does Not Own

* Reservations
* Pricing
* Property data

## Collaborates With

* Gateway Layer
* Workflow Service

---

# Analytics Service Boundary

## Owns

* Metrics
* KPIs
* Reports
* Dashboards
* Business intelligence

## Does Not Own

* Operational data
* Reservations
* Pricing policies

## Collaborates With

* All operational services

---

# Media Service Boundary

## Owns

* Images
* Documents
* Attachments
* Media metadata

## Does Not Own

* Property configuration
* Reservations
* Business rules

## Collaborates With

* Property Service
* Knowledge Service

---

# Workflow Service Boundary

## Owns

* Workflow definitions
* Business process orchestration
* Scheduled execution
* Long-running processes

## Does Not Own

* Reservation rules
* Pricing rules
* Calendar ownership
* Authentication logic

## Collaborates With

* Booking Service
* Pricing Service
* Calendar Service
* Notification Service
* Authentication Service

---

# Shared Concepts

Certain concepts appear in multiple services but are owned by only one.

Examples:

| Concept       | Owner                  | Consumers           |
| ------------- | ---------------------- | ------------------- |
| Reservation   | Booking Service        | Workflow, Analytics |
| Price         | Pricing Service        | Booking, AI         |
| Availability  | Calendar Service       | Booking, AI         |
| Property      | Property Service       | Pricing, Knowledge  |
| Policy        | Knowledge Service      | AI                  |
| User Identity | Authentication Service | Gateway, Workflow   |

Consumers reference these concepts but never redefine them.

---

# Boundary Violations

The following examples are architectural defects:

❌ Booking Service stores pricing formulas.

❌ Pricing Service blocks calendar dates.

❌ Calendar Service sends notifications.

❌ Notification Service changes reservation status.

❌ AI modifies business data directly.

When these situations occur, service responsibilities should be reviewed before implementation proceeds.

---

# Boundary Evolution

Business domains evolve over time.

When a service becomes too broad, it may be divided into multiple services.

Example:

```text id="8mkjxy"
Booking Service

↓

Reservation Service

Stay Management Service
```

Such changes should preserve business ownership while improving cohesion.

Boundary changes require an Architecture Decision Record (ADR).

---

# Design Guidelines

When designing a new service, ask:

* What business domain does it own?
* What business domains does it consume?
* What responsibilities are explicitly out of scope?
* Which existing service already owns similar capabilities?
* Could this capability belong to an existing service instead?

If ownership cannot be stated clearly, the service boundary should be reconsidered.

---

# Summary

Domain boundaries define the limits of every XeniosAI service.

They ensure that responsibilities remain focused, ownership remains explicit, and collaboration occurs through stable contracts rather than shared implementation.

Strong boundaries allow the platform to scale without accumulating hidden coupling or duplicated business logic.

---

# Related Documents

* ARCH-003-02 — Service Catalog
* ARCH-003-03 — Service Ownership
* ARCH-003-04 — Service Dependencies
* ARCH-006 — Domain Model
* ADR-0001 — Tool-First Architecture
