# ARCH-002 — Platform Layers

**Document ID:** ARCH-002

**Title:** Platform Layers

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

---

# Purpose

This architecture module defines the logical layers that compose the XeniosAI platform.

Each layer has a clearly defined responsibility, communicates only through established interfaces, and operates independently from unrelated concerns.

The purpose of this module is to establish a stable architectural structure that allows XeniosAI to evolve without becoming tightly coupled.

This document answers one fundamental question:

> **How is XeniosAI internally organized?**

---

# Scope

This module defines:

* Platform layers
* Layer responsibilities
* Layer boundaries
* Layer dependencies
* Communication rules
* Layer interactions
* Cross-cutting concerns

Implementation details, APIs, and business rules are intentionally excluded.

---

# Architecture Philosophy

XeniosAI follows a layered architecture designed around separation of concerns.

Each request enters the platform through the outermost layer and moves inward until the appropriate business capability is reached.

No layer should bypass another layer without explicit architectural approval.

Every layer should remain independently understandable, testable, and replaceable.

---

# Canonical Layer Stack

```text
Experience Layer
        │
Gateway Layer
        │
Conversation Layer
        │
AI Intelligence Layer
        │
Business Services Layer
        │
Data Layer
        │
Integration Layer
```

Each layer owns a distinct responsibility.

No responsibility should exist in multiple layers.

---

# Layer Overview

| Layer             | Responsibility                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Foundation        | Platform standards, shared libraries, configuration, infrastructure contracts            |
| Experience        | User-facing channels such as Messenger, WhatsApp, Instagram, Website and future clients  |
| Gateway           | Authentication, request normalization, routing, rate limiting                            |
| Conversation      | Conversation lifecycle, sessions, identity, context continuity                           |
| AI Intelligence   | Intent detection, context assembly, reasoning, tool orchestration                        |
| Business Services | Deterministic business capabilities such as Booking, Pricing, Calendar and Notifications |
| Data              | Persistent storage, caching, search, object storage and future vector databases          |
| Integration       | Communication with external providers and third-party systems                            |

---

# Reading Order

This architecture module should be read in the following order:

1. Layer Overview
2. Foundation Layer
3. Experience Layer
4. Gateway Layer
5. Conversation Layer
6. AI Intelligence Layer
7. Business Services Layer
8. Data Layer
9. Integration Layer
10. Cross-Cutting Concerns
11. Layer Interactions

---

# Directory Structure

```text
002-platform-layers/

README.md

01-layer-overview.md

02-foundation-layer.md

03-experience-layer.md

04-gateway-layer.md

05-conversation-layer.md

06-ai-intelligence-layer.md

07-business-services-layer.md

08-data-layer.md

09-integration-layer.md

10-cross-cutting-concerns.md

11-layer-interactions.md

diagrams/
```

---

# Architectural Rules

Every layer must:

* Have a single, clearly defined responsibility.
* Communicate through documented interfaces.
* Avoid direct dependency on unrelated layers.
* Be independently testable.
* Follow the principles established in ARCH-001.

No layer may:

* Bypass service ownership.
* Duplicate business logic.
* Access another layer's internal implementation.
* Introduce hidden dependencies.
* Circumvent security controls.

---

# Dependencies

This module depends on:

* ARCH-001 — System Overview
* ADR-0001 — Tool-First Architecture
* ADR-0002 — Repository as Permanent Memory

Future architecture modules—including Service Map, AI Orchestrator, Data Flow, Security Architecture, and Integration Architecture—build upon the layer definitions established here.

---

# Review Checklist

Before ARCH-002 can be marked as complete, verify:

* Every layer has a single responsibility.
* Every layer has explicit inputs and outputs.
* Every layer defines responsibilities and prohibitions.
* Dependencies are one-directional.
* Layer ownership is unambiguous.
* No business logic exists outside the Business Services Layer.
* AI coordinates services but does not own business logic.
* Documentation is consistent with ARCH-001.

---

# Revision History

| Version | Date       | Description                          |
| ------- | ---------- | ------------------------------------ |
| 1.0     | 2026-07-13 | Initial architecture module created. |

---

# Related Documents

* ARCH-001 — System Overview
* ARCH-003 — Service Map
* ARCH-004 — AI Orchestrator
* ARCH-005 — Data Flow
* ARCH-008 — Security Architecture
* ARCH-009 — Integration Architecture
