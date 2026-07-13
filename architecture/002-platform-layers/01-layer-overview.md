# ARCH-002 · Chapter 01 — Layer Overview

**Document ID:** ARCH-002-01

**Title:** Layer Overview

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-002 — Platform Layers

---

# Purpose

This document introduces the layered architecture of XeniosAI.

It defines the purpose of each architectural layer, the relationship between layers, and the fundamental rules governing communication between them.

Every service, component, API, integration, and future feature must belong to exactly one architectural layer.

---

# Why Layers?

Large software platforms inevitably grow.

Without architectural boundaries, responsibilities become mixed together.

Typical symptoms include:

* AI directly accessing databases.
* Business logic inside messaging adapters.
* Pricing calculations inside controllers.
* Calendar logic inside notification services.

These violations increase complexity and make the platform difficult to evolve.

The layered architecture prevents these problems by assigning every responsibility to an appropriate location.

---

# Architectural Philosophy

Each layer answers a different question.

| Layer             | Question                                             |
| ----------------- | ---------------------------------------------------- |
| Foundation        | What capabilities support the platform itself?       |
| Experience        | How do users communicate with XeniosAI?              |
| Gateway           | How does the platform receive requests?              |
| Conversation      | How are conversations managed?                       |
| AI Intelligence   | How does XeniosAI understand requests?               |
| Business Services | How are business decisions made?                     |
| Data              | Where is information stored?                         |
| Integration       | How does XeniosAI communicate with external systems? |

This separation minimizes coupling and improves maintainability.

---

# Canonical Layer Stack

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

Integration Layer
```

Supporting every layer:

```text
Foundation Layer
```

The Foundation Layer provides shared capabilities used throughout the platform but does not participate directly in request processing.

---

# Layer Responsibilities

## Foundation Layer

Provides shared infrastructure and platform capabilities.

Examples include:

* Configuration
* Logging
* Dependency Injection
* Shared Contracts
* Feature Flags
* Secret Management
* Common Libraries

---

## Experience Layer

Owns all user-facing communication channels.

Examples:

* Facebook Messenger
* WhatsApp
* Instagram
* Website Chat
* Mobile Applications
* Public APIs

The Experience Layer should focus solely on user interaction.

---

## Gateway Layer

Receives requests entering XeniosAI.

Responsibilities include:

* Authentication
* Authorization
* Request normalization
* Rate limiting
* Routing
* Request validation

The Gateway Layer prepares requests for internal processing.

---

## Conversation Layer

Maintains conversational continuity.

Responsibilities include:

* Session lifecycle
* Conversation state
* Identity association
* Multi-turn conversations
* Channel abstraction
* Conversation persistence

The Conversation Layer understands *who* is talking and *what has already been discussed*.

---

## AI Intelligence Layer

Provides reasoning capabilities.

Responsibilities include:

* Intent detection
* Context assembly
* Knowledge retrieval
* Prompt construction
* Tool selection
* Response generation

The AI layer understands **what the guest wants** but never performs business operations directly.

---

## Business Services Layer

Executes deterministic business logic.

Examples include:

* Booking Service
* Pricing Service
* Calendar Service
* Notification Service
* Knowledge Service
* Property Service
* Authentication Service

Every business rule belongs here.

---

## Data Layer

Provides persistent storage.

Examples include:

* Relational Database
* Cache
* Search Index
* Object Storage
* Future Vector Database

Business services own data access.

---

## Integration Layer

Communicates with third-party systems.

Examples:

* Meta APIs
* WhatsApp
* Google Calendar
* Airbnb
* Payment Providers
* Email
* SMS

Provider-specific implementation should remain isolated inside this layer.

---

# Layer Dependency Rules

Dependencies flow inward.

```text
Experience

↓

Gateway

↓

Conversation

↓

AI

↓

Business Services

↓

Data
```

Integrations are accessed through Business Services rather than directly from higher layers.

No layer may bypass another layer without explicit architectural approval.

---

# Layer Ownership

Each architectural concern has one owner.

Examples:

Conversation

→ Conversation Layer

Reasoning

→ AI Intelligence Layer

Pricing

→ Business Services Layer

Persistence

→ Data Layer

External Communication

→ Integration Layer

Clear ownership prevents duplication and ambiguity.

---

# Common Violations

Examples of architectural violations include:

❌ AI updates the database directly.

❌ Messaging adapters calculate pricing.

❌ Controllers implement booking rules.

❌ Integrations bypass business services.

❌ Business services call external providers directly without adapters.

These patterns increase coupling and reduce maintainability.

---

# Layer Interaction Principles

Every layer should:

* Depend only on lower layers.
* Expose stable interfaces.
* Hide implementation details.
* Maintain a single responsibility.
* Avoid circular dependencies.

Communication should occur through explicit contracts rather than shared implementation.

---

# Design Goals

The layered architecture is designed to maximize:

* Maintainability
* Testability
* Extensibility
* Scalability
* Security
* Observability
* Replaceability

Changes within one layer should have minimal impact on other layers.

---

# Summary

The Platform Layer Architecture provides the structural foundation of XeniosAI.

By clearly separating concerns and defining ownership, the platform can evolve through extension rather than redesign.

Every future component should first answer:

> **Which layer owns this responsibility?**

Only then should implementation begin.

---

# Related Documents

* ARCH-001 — System Overview
* ARCH-002-02 — Foundation Layer
* ARCH-003 — Service Map
* ARCH-004 — AI Orchestrator
* ADR-0001 — Tool-First Architecture
