# ARCH-002 · Chapter 11 — Layer Interactions

**Document ID:** ARCH-002-11

**Title:** Layer Interactions

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-002 — Platform Layers

---

# Purpose

This document defines how the architectural layers of XeniosAI communicate with one another.

While previous chapters define the responsibilities of each layer, this document defines the permitted interaction patterns between them.

It establishes the communication rules that preserve separation of concerns, reduce coupling, and ensure long-term maintainability.

---

# Philosophy

Layers exist to isolate responsibilities.

Interaction rules exist to protect those boundaries.

Every communication between layers should be intentional, explicit, and traceable.

If a layer bypasses another layer without architectural justification, the platform becomes harder to understand, test, and evolve.

---

# Canonical Request Flow

The standard processing path for an incoming request is:

```text
Guest

↓

Experience Layer

↓

Gateway Layer

↓

Conversation Layer

↓

AI Intelligence Layer

↓

Business Services Layer

↓

Data Layer

↓

Integration Layer (when required)

↓

Business Services Layer

↓

AI Intelligence Layer

↓

Conversation Layer

↓

Experience Layer

↓

Guest
```

Not every request reaches every layer, but the direction of communication remains consistent.

---

# Dependency Direction

Dependencies flow inward.

```text
Experience
      │
      ▼
Gateway
      │
      ▼
Conversation
      │
      ▼
AI Intelligence
      │
      ▼
Business Services
      │
      ▼
Data
```

The Foundation Layer supports all layers.

The Integration Layer is accessed by Business Services when communication with external providers is required.

---

# Allowed Interactions

| Source Layer      | Allowed Destination |
| ----------------- | ------------------- |
| Experience        | Gateway             |
| Gateway           | Conversation        |
| Conversation      | AI Intelligence     |
| AI Intelligence   | Business Services   |
| Business Services | Data                |
| Business Services | Integration         |
| Integration       | External Providers  |
| All Layers        | Foundation          |

No additional direct dependencies are permitted without an approved Architecture Decision Record (ADR).

---

# Forbidden Interactions

The following interactions are prohibited:

| Source       | Destination        | Reason                                           |
| ------------ | ------------------ | ------------------------------------------------ |
| Experience   | Database           | Bypasses business rules                          |
| Gateway      | Business Services  | Skips conversation management                    |
| Gateway      | AI                 | Breaks conversation lifecycle                    |
| Conversation | Database           | Conversation does not own business persistence   |
| AI           | Database           | AI must not own data access                      |
| AI           | External Providers | Must use Business Services and Integration Layer |
| Integration  | Database           | Providers must not modify business data directly |
| Experience   | Integration        | Channel logic must not call providers directly   |

These restrictions preserve architectural integrity.

---

# Communication Patterns

The platform supports several interaction styles.

## Request / Response

Used for synchronous operations.

Examples:

* Availability lookup
* Price calculation
* Policy retrieval

---

## Command

Used when requesting a business action.

Examples:

* Create booking
* Cancel reservation
* Send notification

Commands express intent.

---

## Query

Used when retrieving information.

Queries must not modify business state.

Examples:

* Get property details
* Retrieve booking
* List amenities

---

## Domain Events

Used to announce completed business actions.

Examples:

* BookingCreated
* BookingCancelled
* CalendarUpdated
* NotificationSent

Events communicate facts, not requests.

---

# Interaction Principles

Every interaction should be:

* Explicit
* Traceable
* Versioned
* Observable
* Secure
* Independently testable

Hidden dependencies are architectural defects.

---

# Layer Isolation

Each layer should expose only stable contracts.

Internal implementation details must remain private.

For example:

The Pricing Service may change its calculation algorithm without affecting any other layer, provided its public contract remains unchanged.

---

# Transaction Boundaries

Business transactions begin and end within the Business Services Layer.

Higher layers should coordinate requests but must not manage business transactions.

The Data Layer provides persistence for those transactions.

---

# Error Propagation

Errors should move upward through the same path as successful responses.

Each layer may:

* Enrich the error.
* Translate the error.
* Log the error.
* Handle the error.

Layers must not conceal critical failures from upstream components.

---

# Observability Across Layers

Every interaction should generate sufficient telemetry to support:

* Request tracing.
* Performance analysis.
* Operational monitoring.
* Security auditing.
* Failure diagnosis.

Correlation identifiers should remain consistent across all participating layers.

---

# Evolution Rules

Future architectural changes should preserve:

* One-directional dependencies.
* Explicit communication contracts.
* Layer ownership.
* Separation of concerns.

If a new capability requires bypassing an existing layer, the architecture should first be reviewed through an ADR.

---

# Architectural Laws

The following laws apply to every interaction:

1. Requests enter through the Experience Layer.
2. Every request passes through the Gateway Layer.
3. Conversation state is managed only by the Conversation Layer.
4. AI reasoning occurs only in the AI Intelligence Layer.
5. Business decisions occur only in the Business Services Layer.
6. Persistent storage is accessed through the Data Layer.
7. External communication occurs through the Integration Layer.
8. Shared platform capabilities originate from the Foundation Layer.

These laws define the operational behavior of XeniosAI.

---

# Summary

Layer interactions provide the communication framework for the XeniosAI platform.

By enforcing explicit interaction rules and preventing unauthorized dependencies, the architecture remains modular, understandable, and resilient as the platform evolves.

Every future component, service, and integration should conform to these interaction rules.

---

# Related Documents

* ARCH-002-01 — Layer Overview
* ARCH-002-06 — AI Intelligence Layer
* ARCH-002-07 — Business Services Layer
* ARCH-002-09 — Integration Layer
* ADR-0001 — Tool-First Architecture
