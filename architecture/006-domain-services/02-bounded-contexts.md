# ARCH-006 · Chapter 02 — Bounded Contexts

**Document ID:** ARCH-006-02

**Title:** Bounded Contexts

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-18

**Parent Document:** ARCH-006 — Domain Model

---

# Purpose

This document defines the bounded contexts of the XeniosAI platform.

Bounded Contexts establish clear business boundaries by grouping concepts, terminology, rules, and responsibilities that belong together. They provide the foundation for service ownership, domain consistency, and independent evolution.

Each bounded context represents a coherent business model with its own language, lifecycle, and authoritative ownership.

---

# Scope

This chapter defines:

* Bounded Context philosophy
* Context responsibilities
* Context ownership
* Context collaboration
* Context boundaries
* Context communication
* Context evolution

This chapter does not define individual entities or aggregates. Those are introduced in later chapters.

---

# Philosophy

A bounded context defines where a particular business model is valid.

Within a bounded context:

* Terminology has one meaning.
* Business rules are authoritative.
* State is owned locally.
* Decisions are made independently.

Outside the context, collaboration occurs through explicit contracts rather than shared implementation.

---

# Why Bounded Contexts

As a platform grows, different business areas naturally develop specialized language and rules.

For example:

The meaning of **Status** differs across domains.

Reservation Domain:

* Pending
* Confirmed
* Cancelled

Payment Domain:

* Authorized
* Paid
* Refunded

Notification Domain:

* Queued
* Delivered
* Failed

Although each uses the term "Status," each represents a different business concept.

Bounded Contexts prevent these concepts from becoming conflated.

---

# Context Principles

Every bounded context should:

* Own one business capability.
* Have one authoritative owner.
* Protect its own business rules.
* Maintain its own lifecycle.
* Expose explicit contracts.
* Evolve independently.

Business ownership should never be shared across contexts.

---

# Primary Bounded Contexts

The XeniosAI platform is organized into the following primary bounded contexts.

| Context      | Primary Responsibility                |
| ------------ | ------------------------------------- |
| Reservation  | Reservation lifecycle                 |
| Property     | Property information and availability |
| Guest        | Guest identity and profile            |
| Pricing      | Pricing and discounts                 |
| Payment      | Financial transactions                |
| Notification | User communication                    |
| Identity     | Authentication and authorization      |
| Knowledge    | AI knowledge and retrieval            |
| Workflow     | Business process coordination         |
| Platform     | Shared platform capabilities          |

Each context owns its own business language and data.

---

# Reservation Context

Responsible for:

* Reservation creation
* Reservation modification
* Reservation cancellation
* Reservation lifecycle
* Reservation validation

The Reservation Context is the authoritative source for reservation information.

---

# Property Context

Responsible for:

* Property registration
* Property details
* Availability management
* Amenities
* Capacity
* Property configuration

The Property Context owns all information describing bookable assets.

---

# Guest Context

Responsible for:

* Guest identity
* Guest profiles
* Contact information
* Preferences
* Guest history

Guest information should not be duplicated by other contexts.

---

# Pricing Context

Responsible for:

* Price calculation
* Discounts
* Promotions
* Seasonal pricing
* Dynamic pricing
* Pricing policies

Other contexts request pricing decisions but do not calculate prices independently.

---

# Payment Context

Responsible for:

* Payment authorization
* Payment settlement
* Refund processing
* Transaction history
* Payment status

Financial correctness is maintained exclusively within this context.

---

# Notification Context

Responsible for:

* Email delivery
* SMS delivery
* Push notifications
* Messaging templates
* Delivery tracking

Notification decisions originate from business events rather than direct coupling.

---

# Identity Context

Responsible for:

* User identity
* Authentication
* Authorization
* Roles
* Permissions
* Access policies

Identity governs platform access rather than business ownership.

---

# Knowledge Context

Responsible for:

* Knowledge retrieval
* AI context
* Document indexing
* Semantic search
* Knowledge organization

The Knowledge Context enables AI capabilities without owning operational business data.

---

# Workflow Context

Responsible for:

* Business orchestration
* Long-running processes
* Process coordination
* Compensation
* Workflow state

Workflow coordinates business execution but does not own business data.

---

# Platform Context

Responsible for shared platform capabilities including:

* Configuration
* Audit
* Observability
* Scheduling
* Platform policies
* Shared infrastructure services

Platform capabilities support other contexts while remaining independent of business ownership.

---

# Context Collaboration

Contexts collaborate through explicit interactions.

Examples include:

Reservation requests pricing.

Pricing calculates cost.

Reservation confirms booking.

Reservation publishes an event.

Notification sends confirmation.

Each context contributes its own expertise without assuming another context's responsibilities.

---

# Communication Rules

Contexts communicate through:

* APIs
* Commands
* Queries
* Events
* Workflows

Direct database sharing between contexts is prohibited.

---

# Ownership Rules

Every business concept belongs to exactly one bounded context.

Examples:

| Concept      | Context      |
| ------------ | ------------ |
| Reservation  | Reservation  |
| Guest        | Guest        |
| Property     | Property     |
| Price        | Pricing      |
| Payment      | Payment      |
| Notification | Notification |

No business concept should have multiple authoritative owners.

---

# Context Dependencies

Dependencies should always point toward business collaboration rather than implementation.

Allowed:

Reservation → Pricing

Reservation → Payment

Reservation → Notification

Not allowed:

Pricing modifying Reservation state

Notification updating Guest records

Payment changing Property availability

Only the owning context may change its own business state.

---

# Context Isolation

Each bounded context should remain isolated with respect to:

* Business rules
* Data ownership
* Terminology
* Lifecycles
* Validation
* State transitions

Isolation enables independent development and deployment.

---

# Context Evolution

Bounded Contexts evolve independently.

Future changes may include:

* New business capabilities
* Additional entities
* Expanded workflows
* Improved business rules
* New APIs

Evolution within one context should minimize impact on others.

---

# Architectural Rules

Bounded Contexts must:

* Own one coherent business model.
* Maintain a ubiquitous language.
* Preserve explicit ownership.
* Protect business invariants.
* Expose explicit contracts.
* Communicate without sharing implementation.

Bounded Contexts define the limits of business authority within XeniosAI.

---

# Future Evolution

Future architectural growth may introduce contexts such as:

* Billing
* Loyalty
* Marketing
* Inventory
* Reporting
* Marketplace
* Vendor Management
* AI Agent Management

New contexts should be introduced only when they represent distinct business capabilities with independent ownership.

---

# Summary

Bounded Contexts divide the XeniosAI platform into coherent business domains with explicit ownership, consistent language, and independent evolution.

By preserving clear business boundaries and limiting authority to the owning context, the platform maintains conceptual integrity while enabling scalable collaboration across services and workflows.

---

# Related Documents

* ARCH-003 — Service Map
* ARCH-003-05 — Domain Boundaries
* ARCH-004-05 — Decision Engine
* ARCH-005-05 — Workflow Orchestration
* ARCH-005-06 — Service Integration
* ARCH-006-01 — Domain Overview
* ARCH-006-03 — Core Entities
