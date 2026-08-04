# ARCH-020-04 — Multi-Property Enterprise Reference

**Document ID:** ARCH-020-04  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document extends the single-property pattern to multiple tenants and property portfolios.

# Enterprise Scenario

A hospitality organization manages multiple properties under one tenant while the XeniosAI platform serves many independent tenants. Corporate teams govern shared policy, brand, identity, knowledge, integrations, and reporting; property teams retain delegated local operation.

# Hierarchy

* Platform
  * Tenant
    * Region or brand where used
      * Property

Hierarchy supports administration and configuration but does not automatically grant data access.

# Enterprise Capabilities

* Tenant onboarding and lifecycle
* Property provisioning and transfer
* Identity federation
* Portfolio and property roles
* Shared and local configuration
* Portfolio availability and reporting
* Cross-property workflows
* Shared and property-specific integrations
* Service tiers, entitlements, quotas, and usage
* Region and residency placement
* Tenant-aware incidents and continuity

# Access Model

Authentication, tenant membership, property scope, role, purpose, entitlement, resource ownership, lifecycle, and policy are evaluated independently.

Users with multiple tenants explicitly select context. Cross-property access is an explicit portfolio grant.

# Configuration Model

Effective configuration resolves mandatory platform controls, platform defaults, service tier, tenant, organizational unit, property, workflow, and permitted user preferences.

Precedence and provenance are inspectable. Lower scopes cannot weaken mandatory controls.

# Data Isolation

Every tenant resource carries or resolves authoritative tenant ownership. Property-scoped records additionally validate property ownership.

Shared, partitioned, and dedicated placement variants implement the same context and provider controls.

# Knowledge and Memory

Tenant-wide knowledge can coexist with property-local knowledge. Retrieval filters scope before ranking and validates results.

Memory declares subject, tenant, property, purpose, retention, and deletion. It is never globally shared by default.

# Cross-Property Workflow

The reference demonstrates a portfolio request that queries eligible properties, applies tenant policy, delegates property-specific tasks, collects results, handles timeouts, and preserves per-property authorization.

# Integration Topology

Connections may be tenant wide or property specific. Credentials, external account mappings, callbacks, quotas, delivery history, and residency are bound to the connection.

One failing property integration cannot consume another property's retry budget.

# Resource Governance

Limits apply by platform, cell, tier, tenant, property, capability, workflow, agent, and integration as appropriate.

Fair scheduling and reserved capacity protect tenants from noisy neighbors.

# Deployment

Reference variants demonstrate:

* Shared logical isolation
* Partitioned tenant placement
* Dedicated tenant placement
* Regional cells

Trusted registry state drives routing. There is no default tenant partition.

# Operations

Health and service impact are visible by tenant, property, tier, region, cell, capability, and integration to authorized operators.

Support uses time-bound scoped sessions. Tenant-specific restore cannot overwrite another tenant.

# Failure Scenarios

* Tenant routing mismatch
* Property ownership conflict
* Federation outage
* Noisy tenant workload
* Regional integration failure
* Cross-property workflow partial completion
* Tenant-specific data corruption
* Placement migration rollback

# Acceptance Criteria

* Tenant and property contexts survive all sync and async boundaries.
* Provider services reject cross-tenant resources.
* Tenant configuration cannot change platform policy floors.
* Workload contention remains bounded.
* Incidents identify affected tenant scope.
* Tenant restore and migration preserve other tenants.

# Architecture Decisions

* The enterprise reference evolves the same domain semantics rather than forking the single-property product.
* Portfolio hierarchy does not imply visibility.
* Isolation topology is replaceable behind stable tenant contracts.
* Shared services retain provider-side tenant validation.

# Summary

The enterprise reference demonstrates how the single-property vertical slice scales to portfolios and many tenants without collapsing ownership, authorization, configuration, resource, data, or operational boundaries.
