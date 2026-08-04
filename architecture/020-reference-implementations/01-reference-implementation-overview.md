# ARCH-020-01 — Reference Implementation Overview

**Document ID:** ARCH-020-01  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document defines the reference implementation portfolio, stakeholders, target state, quality goals, adoption path, and measures of success.

# Reference Mission

Reference implementations make XeniosAI architecture observable. They provide realistic hospitality scenarios, implementation arrangements, contracts, tests, failure cases, and evidence that teams can inspect and reproduce.

They answer:

* How do architecture modules work together?
* Which service owns each decision and record?
* Where may AI reason and where must deterministic logic execute?
* How do tenant, property, identity, data, workflow, and integration scopes propagate?
* How is failure contained and recovered?
* What evidence demonstrates conformance?

# Portfolio

## Single-Property Baseline

Casa Lluvia Staycation demonstrates one tenant and one property with availability, pricing, reservation, add-ons, guest authorization, communication, knowledge, and operations.

## Enterprise Baseline

The multi-property reference adds tenant portfolios, delegated administration, federation, service tiers, regional policy, shared and local knowledge, integrations, extensions, capacity, and continuity.

## Cross-Cutting Pattern References

Smaller examples demonstrate AI tool use, workflows, APIs, events, knowledge retrieval, extension hosting, tenant isolation, observability, and delivery.

# Stakeholders

| Stakeholder | Reference need |
|---|---|
| Product owners | Demonstrated business outcomes and scope |
| Architects | Traceability and architectural feedback |
| Developers | Golden paths, contracts, examples, and tests |
| Security and privacy | Threat scenarios, controls, and evidence |
| Operations | Health, incident, capacity, continuity, and support |
| Test and assurance | Executable conformance and acceptance criteria |
| Tenants and partners | Understandable behavior, integration, and boundaries |

# Target State

The reference portfolio is:

* Versioned and maintained
* Traceable to architecture decisions
* Executable or demonstrable
* Technology-neutral at logical boundaries
* Secure by default
* Multi-tenant testable
* Observable and failure aware
* Reproducible through automated delivery
* Explicit about limitations
* Governed through feedback and retirement

# Quality Attributes

| Attribute | Demonstration |
|---|---|
| Correctness | Business acceptance and domain tests |
| Security | Authentication, authorization, isolation, secrets, negative tests |
| Reliability | Timeouts, retries, idempotency, compensation, recovery |
| Performance | Load profile, budgets, latency, capacity thresholds |
| Scalability | Property, tenant, workload, and data growth paths |
| Operability | Health, telemetry, incidents, runbooks, evidence |
| Evolvability | Contracts, versioning, configuration, extensions, migration |
| Portability | Replaceable adapters and technology variants |

# Adoption Path

1. Run the documented scenario with synthetic data.
2. Inspect architecture trace and tests.
3. Select reusable patterns rather than copying the entire solution.
4. Assess production business, data, security, scale, and operations.
5. Record necessary architecture decisions.
6. Adapt through supported variation points.
7. Run the complete conformance profile.
8. Pilot, observe, and productionize through governance.

# Success Measures

* Architecture requirements covered by executable evidence
* Time to create a conformant service or integration
* Golden-path adoption
* Contract and tenant-isolation test coverage
* Production defects caused by misunderstood boundaries
* Recovery exercise success
* Reference feedback resolved into architecture or platform improvements
* Dependency and security update timeliness

# Architecture Decisions

* The portfolio begins with Casa Lluvia and expands to enterprise operation.
* Reference value is measured through demonstrated outcomes and conformance.
* Cross-cutting requirements are included in every complete scenario.
* Consumers reuse patterns, not undocumented implementation accidents.
* Reference maintenance has named ownership and lifecycle.

# Validation Criteria

The overview is satisfied when each reference declares purpose, classification, architecture coverage, actors, acceptance criteria, limitations, data policy, tests, operations, and maintenance owner.

# Summary

The portfolio provides a controlled bridge between XeniosAI architecture and implementation. It starts with a real single-property operating model, demonstrates enterprise growth, and supplies reusable, testable patterns across the platform.
