# ARCH-020-02 — Reference Implementation Methodology

**Document ID:** ARCH-020-02  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document defines how reference scenarios are selected, designed, traced, implemented, tested, reviewed, released, maintained, and retired.

# Method Principles

* Start from business outcomes and risks.
* Select the smallest end-to-end slice that tests important architecture.
* Trace every material pattern to normative architecture.
* Use synthetic or approved data.
* Include failure and operations from the start.
* Automate conformance wherever practical.
* Record variation points and limitations.
* Feed findings back through architecture governance.

# Scenario Selection

A candidate is prioritized by:

* Business relevance
* Architecture coverage
* Reuse potential
* Risk reduction
* Developer demand
* Integration importance
* Testability
* Cost to maintain

Scenarios should not duplicate one another without demonstrating a meaningful variant.

# Scenario Definition

Each scenario records:

* Actors and goals
* Preconditions and trigger
* Happy path
* Alternative and failure paths
* Business rules
* Commands, queries, events, and workflows
* Data and ownership
* Tenant and property scope
* Security and privacy
* Quality attributes
* Acceptance criteria
* Exclusions

# Architecture Traceability

The trace maps:

| Reference artifact | Architecture evidence |
|---|---|
| Service or module | Bounded context, layer, and ownership |
| API or event | Contract, version, security, tenant scope |
| Workflow | Lifecycle, tasks, retries, compensation |
| AI evaluation | Orchestrator, grounding, tool, and safety rules |
| Data schema | Aggregate, ownership, classification, lifecycle |
| Deployment | Topology, availability, recovery, residency |
| Test | Requirement or control demonstrated |

Traceability is bidirectional: architecture identifies examples, and examples identify architecture.

# Conformance Profile

A profile selects applicable requirements from ARCH-001 through ARCH-019 and defines:

* Mandatory contracts
* Control objectives
* Quality thresholds
* Required tests
* Evidence format
* Allowed variations
* Exceptions and expiry
* Review authority

# Implementation Lifecycle

1. Propose scenario.
2. Approve scope and profile.
3. Design architecture trace.
4. Create synthetic fixtures.
5. Implement golden path.
6. Implement failure and recovery paths.
7. Run conformance and evaluations.
8. Review security, operations, and documentation.
9. Release a versioned reference.
10. Collect feedback and maintain or retire.

# Evidence Package

Evidence includes:

* Architecture trace
* Contract schemas
* Build provenance
* Test results
* AI evaluation results
* Security and tenant-isolation results
* Performance profile
* Deployment and recovery exercise
* Dependency inventory
* Known limitations
* Approval and exception records

# Variation Points

References declare where consumers may substitute:

* Language or framework
* Data technology behind repositories
* Queue or workflow technology
* Model or provider
* Identity provider
* Deployment platform
* Observability implementation

Substitution must retain contracts, invariants, tests, and quality outcomes.

# Divergence

A divergence is classified as:

* Permitted variation
* Scenario-specific exclusion
* Temporary exception
* Architecture gap
* Architecture change proposal

Unclassified divergence is not presented as conformant.

# Review Gates

Review gates cover business acceptance, architecture, security and privacy, operational readiness, test evidence, documentation, licensing, and maintenance ownership.

# Maintenance

Maintainers monitor architecture changes, SDK and contract versions, dependencies, vulnerabilities, test drift, platform changes, and user feedback.

A stale reference is marked unsupported rather than silently presented as current.

# Retirement

Retirement provides reason, replacement, migration, archive policy, evidence retention, and removal of obsolete credentials or hosted demonstrations.

# Architecture Decisions

* Conformance is profile based and evidence backed.
* Traceability is mandatory for material artifacts.
* Variation is explicit and test preserving.
* Maintenance and retirement are part of reference scope.
* Architecture changes follow governance, never example drift.

# Validation Criteria

The method is satisfied when a new scenario can move from proposal to release with repeatable gates, evidence, ownership, variation rules, and lifecycle.

# Summary

The methodology makes reference implementations reproducible architecture evidence rather than informal sample code.
