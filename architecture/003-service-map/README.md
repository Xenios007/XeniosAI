# ARCH-003 — Service Map

**Document ID:** ARCH-003

**Title:** Service Map

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

---

# Purpose

This architecture module defines the service-oriented structure of XeniosAI.

It identifies the platform's core services, their responsibilities, ownership boundaries, dependencies, and interactions.

The Service Map provides the canonical catalog of business services that collectively implement the XeniosAI platform.

This document answers one fundamental question:

> **What services make up XeniosAI?**

---

# Scope

This module defines:

* Platform services
* Domain ownership
* Service responsibilities
* Service boundaries
* Service dependencies
* Service communication patterns
* Service governance
* Future service evolution

This module does **not** define:

* API contracts
* Database schemas
* Internal implementation
* Deployment topology
* Infrastructure configuration

Those topics are covered in later architecture modules.

---

# Architecture Philosophy

XeniosAI follows a domain-oriented service architecture.

Each service owns exactly one primary business capability.

Services communicate through stable contracts and should remain independently understandable, testable, deployable, and evolvable.

No service should assume responsibility for another service's domain.

---

# Canonical Service Catalog

The initial XeniosAI platform consists of the following core services:

* Booking Service
* Pricing Service
* Calendar Service
* Knowledge Service
* Notification Service
* Property Service
* Authentication Service
* Analytics Service
* Media Service
* Workflow Service

Additional services may be introduced as the platform evolves.

---

# Relationship to ARCH-002

ARCH-002 defines the **Business Services Layer**.

ARCH-003 defines the services that reside within that layer.

The Service Map builds upon the architectural boundaries established in ARCH-002 while providing a detailed view of the platform's business capabilities.

---

# Reading Order

This architecture module should be read in the following order:

1. Service Landscape
2. Service Catalog
3. Service Ownership
4. Service Dependencies
5. Domain Boundaries
6. Service Communication
7. Service Lifecycle
8. Service Versioning
9. Service Governance
10. Future Services

---

# Directory Structure

```text
003-service-map/

README.md

01-service-landscape.md

02-service-catalog.md

03-service-ownership.md

04-service-dependencies.md

05-domain-boundaries.md

06-service-communication.md

07-service-lifecycle.md

08-service-versioning.md

09-service-governance.md

10-future-services.md

diagrams/
```

---

# Guiding Principles

Every service should:

* Own a single primary business domain.
* Expose stable public contracts.
* Hide internal implementation details.
* Avoid direct database access owned by other services.
* Communicate only through approved interfaces.
* Be independently testable.
* Follow the architectural principles established in ARCH-001 and ARCH-002.

---

# Dependencies

This module depends on:

* ARCH-001 — System Overview
* ARCH-002 — Platform Layers
* ADR-0001 — Tool-First Architecture
* ADR-0002 — Repository as Permanent Memory

Future architecture modules—including AI Orchestrator, Data Flow, Domain Model, Security Architecture, and Integration Architecture—build upon the service definitions established here.

---

# Review Checklist

Before ARCH-003 can be marked as complete, verify:

* Every service has a clearly defined owner.
* Every service owns a single primary domain.
* Service responsibilities do not overlap.
* Dependencies are explicit and one-directional.
* Communication patterns are documented.
* Service boundaries are well defined.
* Naming is consistent across the repository.
* Service definitions align with ARCH-002.

---

# Revision History

| Version | Date       | Description                          |
| ------- | ---------- | ------------------------------------ |
| 1.0     | 2026-07-13 | Initial architecture module created. |

---

# Related Documents

* ARCH-001 — System Overview
* ARCH-002 — Platform Layers
* ARCH-004 — AI Orchestrator
* ARCH-005 — Data Flow
* ARCH-006 — Domain Model
