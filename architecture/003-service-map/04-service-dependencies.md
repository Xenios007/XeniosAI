# ARCH-003 · Chapter 04 — Service Dependencies

**Document ID:** ARCH-003-04

**Title:** Service Dependencies

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-003 — Service Map

---

# Purpose

This document defines the dependency relationships between XeniosAI services.

Dependencies describe which services may rely on capabilities provided by other services and establish the rules that prevent tight coupling and circular references.

The objective is to ensure that services collaborate without sacrificing independence.

---

# Philosophy

Dependencies are necessary.

Coupling is optional.

Every dependency should exist because one service requires a capability owned by another service—not because of implementation convenience.

Services should depend on stable contracts rather than internal implementation details.

---

# Dependency Principles

Every dependency should be:

* Intentional
* Minimal
* Explicit
* Stable
* Versioned
* Observable

Services should avoid unnecessary dependencies whenever possible.

---

# Dependency Matrix

| Service                | Depends On                                               |
| ---------------------- | -------------------------------------------------------- |
| Booking Service        | Pricing, Calendar, Notification, Property                |
| Pricing Service        | Property                                                 |
| Calendar Service       | None                                                     |
| Knowledge Service      | Property                                                 |
| Notification Service   | Integration Layer                                        |
| Property Service       | None                                                     |
| Authentication Service | None                                                     |
| Analytics Service      | Booking, Calendar, Pricing, Notification                 |
| Media Service          | Object Storage                                           |
| Workflow Service       | Booking, Calendar, Pricing, Notification, Authentication |

Dependencies represent business capabilities rather than implementation details.

---

# High-Level Dependency Graph

```text id="gjk9wi"
Booking
   │
   ├── Pricing
   ├── Calendar
   ├── Notification
   └── Property

Pricing
   │
   └── Property

Knowledge
   │
   └── Property

Workflow
   │
   ├── Booking
   ├── Calendar
   ├── Pricing
   ├── Notification
   └── Authentication

Analytics
   │
   ├── Booking
   ├── Calendar
   ├── Pricing
   └── Notification
```

The graph should remain acyclic.

---

# Dependency Types

## Functional Dependency

A service requires another service to perform part of a business workflow.

Example:

Booking Service requires Pricing Service to calculate reservation costs.

---

## Informational Dependency

A service requires read-only business information.

Example:

Knowledge Service retrieves property configuration from the Property Service.

---

## Operational Dependency

A service coordinates platform operations.

Example:

Workflow Service coordinates multiple services without owning their business domains.

---

# Allowed Dependency Rules

Services may depend on another service when:

* The dependency provides a required business capability.
* The dependency is accessed through a documented contract.
* The dependency does not duplicate ownership.
* The dependency preserves service autonomy.

---

# Forbidden Dependency Rules

The following patterns are prohibited:

* Circular dependencies.
* Direct database access across services.
* Shared internal models.
* Calling private service APIs.
* Copying business rules from another service.

Violations require architectural review.

---

# Circular Dependencies

Circular dependencies reduce maintainability and increase deployment complexity.

Example:

```text id="4v4jv7"
Booking

↓

Pricing

↓

Booking
```

This pattern is prohibited.

If such a relationship appears necessary, the underlying service boundaries should be re-evaluated.

---

# Dependency Direction

Dependencies should flow toward authoritative business capabilities.

Example:

```text id="xij7rt"
Booking

↓

Pricing
```

Correct.

Example:

```text id="fl2r4r"
Pricing

↓

Booking
```

Incorrect.

Pricing should never depend on reservation management.

---

# Dependency Ownership

The consuming service is responsible for:

* Requesting capabilities.
* Handling failures.
* Respecting published contracts.

The providing service is responsible for:

* Maintaining backward compatibility.
* Validating requests.
* Preserving business integrity.

Ownership remains unchanged by dependencies.

---

# Service Isolation

Dependencies should not compromise independence.

Each service should remain:

* Independently testable.
* Independently deployable.
* Independently versioned.
* Independently replaceable where practical.

Strong dependencies should be minimized.

---

# Failure Handling

Consumers should expect dependencies to fail.

Strategies include:

* Retries.
* Timeouts.
* Circuit breakers.
* Graceful degradation.
* Fallback behavior.

Failures should remain localized whenever possible.

---

# Dependency Evolution

Dependencies will change over time.

New services may:

* Introduce new dependencies.
* Remove obsolete dependencies.
* Replace existing capabilities.

Changes should preserve architectural consistency and be reviewed when they affect ownership or service boundaries.

---

# Architectural Rules

The following rules apply to every service dependency:

* Depend on capabilities, not implementations.
* Never bypass the owning service.
* Avoid unnecessary dependencies.
* Eliminate circular references.
* Communicate through stable contracts.
* Preserve independent evolution.

These rules ensure that the service architecture remains scalable and maintainable.

---

# Summary

Service dependencies define how XeniosAI services collaborate while preserving clear ownership boundaries.

By enforcing explicit, minimal, and one-directional dependencies, the platform remains modular, resilient, and capable of evolving without introducing unnecessary coupling.

---

# Related Documents

* ARCH-003-02 — Service Catalog
* ARCH-003-03 — Service Ownership
* ARCH-003-05 — Domain Boundaries
* ARCH-002-11 — Layer Interactions
* ADR-0001 — Tool-First Architecture
