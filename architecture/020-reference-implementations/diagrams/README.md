# ARCH-020 — Reference Implementation Diagrams

**Document ID:** ARCH-020-DIAGRAMS  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This directory contains the canonical Mermaid diagrams for ARCH-020 Reference Implementations.

The diagrams explain the reference portfolio, Casa Lluvia request flow, enterprise multi-property progression, delivery and conformance pipeline, and reference-to-production lifecycle.

The numbered documents remain normative for scope, responsibilities, controls, acceptance, and limitations.

# Diagram Catalog

| File | View |
|---|---|
| `01-reference-implementation-landscape.mmd` | Architecture-to-scenario implementation landscape |
| `02-single-property-request-flow.mmd` | Casa Lluvia guest inquiry and reservation flow |
| `03-multi-property-enterprise-flow.mmd` | Tenant and portfolio request coordination |
| `04-delivery-and-conformance-pipeline.mmd` | Golden-path build, test, evidence, and release pipeline |
| `05-reference-to-production-evolution.mmd` | Reference selection, adaptation, productionization, and feedback |

# Reading Order

1. Landscape
2. Single-property flow
3. Enterprise flow
4. Delivery pipeline
5. Production evolution

# Diagram Invariants

* ARCH-001 through ARCH-019 remain authoritative.
* AI orchestrates; deterministic services execute business rules.
* Services own their data.
* Tenant and property scope is explicit.
* APIs and events are versioned contracts.
* Workflows coordinate without owning domain truth.
* Security, failure, operations, and evidence are included.
* Reference implementation does not imply production readiness.
* Production adoption requires assessment and conformance.

# Diagram 01

Shows architecture modules feeding conformance profiles and shared reference patterns, which are realized by the Casa Lluvia and enterprise references and validated through tests and evidence.

# Diagram 02

Shows channel normalization, tenant context, AI intent orchestration, authoritative availability and pricing queries, reservation workflow, integrations, and evidence.

# Diagram 03

Shows portfolio authority narrowing into property-scoped execution, parallel provider work, aggregation, tenant-safe results, and operations.

# Diagram 04

Shows immutable build, contracts, multi-tenant tests, AI evaluations, security and resilience checks, conformance evidence, progressive release, and rollback.

# Diagram 05

Shows how a scenario becomes a maintained reference, is adapted through approved variation points, undergoes productionization, and returns operational feedback to architecture.

# Maintenance Rules

* Update prose decisions before diagrams.
* Keep labels technology neutral.
* Preserve authority and ownership boundaries.
* Validate Mermaid syntax.
* Keep each diagram focused on one relationship.
* Retire diagrams with their reference version.

# Validation Checklist

* Mermaid parser succeeds.
* Tenant and property context is visible where relevant.
* AI is not shown as business authority.
* Provider and repository ownership is preserved.
* Failure and evidence paths are included.
* Reference and production states are distinct.

# Summary

The five diagrams provide a compact visual guide from architecture through single-property and enterprise examples, delivery evidence, and governed production adoption.
