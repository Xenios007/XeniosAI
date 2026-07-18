# ARCH-006 · Chapter 03 — Core Entities

**Document ID:** ARCH-006-03

**Title:** Core Entities

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-18

**Parent Document:** ARCH-006 — Domain Model

---

# Purpose

This document defines the core business entities of the XeniosAI platform.

Core Entities represent the primary business objects managed by the platform. They possess identity, evolve throughout their lifecycle, enforce business rules, and form the foundation of every business capability.

Entities are the central building blocks of the Domain Model.

---

# Scope

This chapter defines:

* Entity philosophy
* Entity identity
* Core business entities
* Entity ownership
* Entity relationships
* Entity responsibilities
* Entity lifecycle principles

Detailed aggregate rules and lifecycle transitions are covered in later chapters.

---

# Philosophy

An Entity represents a business object that maintains a continuous identity throughout its lifetime.

Even if an entity's attributes change, its identity remains constant.

Examples include:

* A reservation that changes dates.
* A guest who updates an email address.
* A property with new amenities.
* A payment whose status changes.

The business recognizes these as the same objects despite changes in their state.

---

# Entity Characteristics

Every Entity possesses:

* A unique identity.
* Mutable business state.
* Business behavior.
* Lifecycle transitions.
* Business invariants.
* Domain ownership.

Entities should model business concepts rather than persistence structures.

---

# Identity

Identity distinguishes one Entity from every other Entity.

Examples include:

* Reservation ID
* Guest ID
* Property ID
* Payment ID
* Notification ID

Identity remains stable for the lifetime of the Entity.

Business identity should not depend on mutable attributes.

---

# Entity Ownership

Every Entity belongs to exactly one bounded context.

Only the owning context may:

* Create the Entity.
* Modify the Entity.
* Validate the Entity.
* Delete or archive the Entity.
* Enforce its business rules.

Other contexts may reference the Entity but never assume ownership.

---

# Core Business Entities

The XeniosAI platform currently recognizes the following primary entities.

| Entity            | Owning Context |
| ----------------- | -------------- |
| Reservation       | Reservation    |
| Guest             | Guest          |
| Property          | Property       |
| Payment           | Payment        |
| Notification      | Notification   |
| User              | Identity       |
| Knowledge Item    | Knowledge      |
| Workflow Instance | Workflow       |

These entities represent the authoritative business objects of their respective domains.

---

# Reservation Entity

Represents a confirmed or pending booking within the platform.

Responsibilities include:

* Reservation identity
* Reservation status
* Stay details
* Guest association
* Property association
* Reservation lifecycle

The Reservation Entity is the central business object for booking operations.

---

# Guest Entity

Represents an individual interacting with the platform.

Responsibilities include:

* Personal identity
* Contact information
* Communication preferences
* Reservation history
* Profile information

The Guest Entity is the authoritative representation of a customer.

---

# Property Entity

Represents a bookable accommodation or managed asset.

Responsibilities include:

* Property identity
* Capacity
* Amenities
* Availability reference
* Operational configuration

Property details evolve independently of reservations.

---

# Payment Entity

Represents a financial transaction related to a business operation.

Responsibilities include:

* Payment identity
* Payment status
* Amount
* Currency
* Payment method
* Settlement history

Payment correctness remains within the Payment Context.

---

# Notification Entity

Represents a communication delivered by the platform.

Responsibilities include:

* Delivery channel
* Recipient
* Delivery status
* Template reference
* Delivery history

Notification entities record business communications rather than business decisions.

---

# User Entity

Represents an authenticated platform identity.

Responsibilities include:

* Authentication identity
* Roles
* Permissions
* Security status
* Authentication history

The User Entity governs platform access rather than customer information.

---

# Knowledge Item Entity

Represents structured knowledge available to AI components.

Responsibilities include:

* Knowledge identity
* Classification
* Source
* Metadata
* Semantic relationships
* Retrieval information

Knowledge Items enable AI reasoning while remaining independent of operational business data.

---

# Workflow Instance Entity

Represents a running or completed business workflow.

Responsibilities include:

* Workflow identity
* Current state
* Progress
* Execution history
* Correlation information

Workflow Instances coordinate business execution but do not own business data.

---

# Entity Relationships

Entities collaborate through explicit business relationships.

Examples include:

Reservation

* references Guest
* references Property
* references Payment

Payment

* references Reservation

Notification

* references Reservation
* references Guest

Workflow Instance

* references Reservation
* references Payment

Relationships express business association rather than ownership.

---

# Entity Responsibilities

Entities should be responsible for:

* Maintaining valid business state.
* Enforcing business invariants.
* Managing lifecycle transitions.
* Protecting their identity.
* Performing business behavior directly related to themselves.

Entities should not coordinate unrelated business processes.

---

# Entity Behavior

Business behavior belongs within the Entity whenever it directly relates to the Entity's own state.

Examples include:

Reservation

* Confirm
* Cancel
* Check In
* Check Out

Payment

* Authorize
* Capture
* Refund

Guest

* Update Contact Information
* Change Communication Preference

Behavior should remain cohesive with the Entity's responsibilities.

---

# Entity State

Entities transition through valid business states.

Example:

Reservation

Pending

↓

Confirmed

↓

Checked In

↓

Checked Out

or

Pending

↓

Cancelled

Business rules determine which transitions are permitted.

---

# Entity References

Entities should reference one another through stable business identity.

Examples:

Reservation

→ Guest ID

→ Property ID

→ Payment ID

Contexts should avoid embedding foreign business objects.

This preserves ownership and minimizes coupling.

---

# Entity Integrity

Every Entity must preserve:

* Identity
* Valid business state
* Business invariants
* Ownership
* Consistency

Entity integrity is protected by the owning bounded context.

---

# Entity Evolution

Entities may evolve through:

* Additional attributes
* New business behaviors
* Expanded lifecycle states
* Improved validation
* Additional relationships

Evolution should preserve existing business identity.

---

# Architectural Rules

Core Entities must:

* Represent real business concepts.
* Possess stable identity.
* Belong to exactly one bounded context.
* Protect their own business state.
* Enforce their own invariants.
* Expose behavior appropriate to their responsibilities.

Entities represent business reality rather than technical implementation.

---

# Future Evolution

Future platform capabilities may introduce entities such as:

* Invoice
* Loyalty Account
* Promotion
* Campaign
* Vendor
* Maintenance Request
* AI Agent
* Conversation
* Task
* Asset

New entities should be introduced only when they represent independent business concepts with persistent identity.

---

# Summary

Core Entities form the foundation of the XeniosAI business model.

Each Entity represents a distinct business concept with stable identity, explicit ownership, defined behavior, and protected business state. Together, these entities provide the structural basis upon which workflows, services, events, and AI capabilities operate.

---

# Related Documents

* ARCH-003 — Service Map
* ARCH-005-02 — Command Flow
* ARCH-005-04 — Event-Driven Architecture
* ARCH-005-09 — Transaction Boundaries
* ARCH-006-02 — Bounded Contexts
* ARCH-006-04 — Value Objects
* ARCH-006-05 — Aggregates
