# ARCH-001 · Chapter 06 — Design Principles

**Document ID:** ARCH-001-06

**Title:** Design Principles

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-001 — System Overview

---

# Purpose

This document defines the architectural principles that govern the design, implementation, and evolution of XeniosAI.

Unlike implementation guidelines, these principles are intended to remain stable throughout the lifetime of the platform.

Every major architectural decision should reinforce these principles.

If a proposed implementation violates one or more principles, the architecture should be reviewed before the implementation proceeds.

---

# Principle 1 — AI Coordinates, Services Decide

Artificial Intelligence exists to understand requests, coordinate workflows, and generate natural language responses.

AI must **never** become the owner of business rules.

Examples:

Correct:

```
Guest

↓

AI

↓

Booking Service

↓

Database
```

Incorrect:

```
Guest

↓

AI calculates pricing

↓

AI updates database
```

Business decisions always belong to deterministic services.

---

# Principle 2 — Tool-First Architecture

The AI interacts with the platform exclusively through tools.

Every meaningful capability exposed to the AI should be represented as a tool.

Examples:

* Check Availability
* Compute Price
* Create Reservation
* Cancel Booking
* Send Notification
* Retrieve Knowledge

Tools become the stable contract between AI reasoning and business services.

---

# Principle 3 — Separation of Concerns

Each layer of the platform has a single responsibility.

Examples:

Experience Layer

→ User interaction

AI Layer

→ Reasoning

Business Layer

→ Decisions

Data Layer

→ Persistence

Integration Layer

→ External communication

Responsibilities should not overlap.

---

# Principle 4 — One Service, One Domain

Every service owns a clearly defined business capability.

Examples:

Booking Service

owns reservations.

Pricing Service

owns pricing.

Calendar Service

owns availability.

Knowledge Service

owns operational knowledge.

Avoid services that perform unrelated responsibilities.

---

# Principle 5 — Configuration over Customization

The platform should support multiple hospitality businesses through configuration rather than source code modification.

Property-specific information such as:

* branding
* pricing rules
* amenities
* policies
* templates
* integrations

should live under the `properties/` structure.

The core platform should remain property-agnostic.

---

# Principle 6 — Repository as Permanent Memory

The Git repository is the authoritative engineering memory of XeniosAI.

Conversations with AI assistants are temporary.

Engineering artifacts—including ADRs, specifications, architecture, schemas, and tasks—must be committed to the repository to become part of the project's long-term knowledge.

---

# Principle 7 — Documentation Before Implementation

Every significant feature should exist as documentation before it exists as code.

The recommended progression is:

```
Vision

↓

ADR

↓

Architecture

↓

Specification

↓

Task

↓

Implementation

↓

Tests

↓

Deployment
```

Code should implement approved specifications rather than define them.

---

# Principle 8 — Provider Independence

Where practical, XeniosAI should avoid hard dependencies on specific vendors.

Examples include:

* AI providers
* Messaging platforms
* Payment gateways
* Calendar providers
* Cloud infrastructure

Provider-specific logic should be isolated behind adapters.

---

# Principle 9 — Stateless Core Services

Business services should remain stateless whenever practical.

Persistent state belongs in dedicated storage systems.

Stateless services simplify:

* scaling
* deployment
* recovery
* testing

Conversation state is managed explicitly rather than implicitly.

---

# Principle 10 — Explicit Interfaces

Services communicate through documented interfaces.

No service should rely on another service's internal implementation or database schema.

Every interaction should occur through stable APIs, events, or tool contracts.

---

# Principle 11 — Single Source of Truth

Each category of information must have one authoritative owner.

Examples:

Pricing

→ Pricing Service

Availability

→ Calendar Service

Policies

→ Knowledge Service

Property Configuration

→ Property Configuration

Duplicate business logic creates inconsistency.

---

# Principle 12 — Observability by Design

Every important operation should be observable.

Examples:

* AI requests
* Tool execution
* API calls
* Booking workflows
* Notification delivery
* Errors

Systems that cannot be observed cannot be operated effectively.

---

# Principle 13 — Security by Default

Security is a default property rather than an optional enhancement.

Examples include:

* least-privilege access
* encrypted communication
* secret management
* audit logging
* rate limiting
* input validation

Every component should assume that external input is untrusted.

---

# Principle 14 — Human Override

Hospitality remains a human-centered business.

The platform must always support human intervention.

Examples:

* Manual reservation approval
* Human takeover of conversations
* Administrative overrides
* Operational exceptions

Automation should reduce workload—not remove human control.

---

# Principle 15 — Evolution Without Rewrite

The architecture should accommodate future capabilities without requiring fundamental redesign.

Examples:

* Additional properties
* New communication channels
* New AI providers
* Additional services
* New deployment models

Expansion should occur through extension rather than replacement.

---

# Architectural Decision Checklist

Before accepting a major architectural change, evaluate:

* Does it increase coupling?
* Does it violate service ownership?
* Does it embed business logic inside AI?
* Does it introduce vendor lock-in?
* Can it be tested independently?
* Can it be observed?
* Can it scale horizontally?
* Does it preserve property independence?

A "No" answer should trigger architectural review.

---

# Summary

These principles define the engineering philosophy of XeniosAI.

Every ADR, architecture specification, implementation task, code review, and deployment should reinforce them.

As the platform evolves, these principles should remain stable even as technologies, frameworks, and providers change.

---

# Related Documents

* ARCH-001-05 — High-Level Architecture
* ARCH-002 — Platform Layers
* ARCH-003 — Service Map
* ADR-0001 — Tool-First Architecture
* ADR-0002 — Repository as Permanent Memory
* ADR-0003 — Documentation First
