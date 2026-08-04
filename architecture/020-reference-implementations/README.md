# ARCH-020 — Reference Implementations

**Architecture Domain:** Reference Architecture, Conformance, and Implementation Guidance

**Document ID:** ARCH-020

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

---

# Purpose

The Reference Implementations Architecture defines how XeniosAI turns approved architecture into demonstrable, testable, reusable implementation examples without converting examples into mandatory products, vendor dependencies, or unsupported production shortcuts.

ARCH-001 through ARCH-019 define the platform's normative business, domain, data, service, AI, security, integration, operational, developer, workflow, knowledge, API, multi-tenancy, and extension architectures. ARCH-020 demonstrates how those decisions work together in representative hospitality scenarios.

The initial reference scenario is a single-property implementation for Casa Lluvia Staycation. It validates the Phase 1 architecture through real booking, availability, rate, guest, pool, parking, communication, and property-operation workflows while retaining clean boundaries and an evolution path to multi-property enterprise operation.

Reference implementations are evidence. They show one conformant way to realize architectural intent. They do not override the architecture, guarantee production fitness, or prevent another technology from meeting the same contracts and quality attributes.

---

# Scope

The Reference Implementations Architecture defines:

* Reference implementation purpose and governance
* Selection and prioritization of scenarios
* Architecture-to-implementation traceability
* Conformance profiles and acceptance criteria
* Single-property hospitality reference implementation
* Casa Lluvia Staycation reference domain
* Multi-property enterprise reference implementation
* Conversational AI, orchestrator, and agent patterns
* Workflow and deterministic business-service patterns
* API, SDK, event, integration, and extension patterns
* Knowledge, memory, and grounding patterns
* Tenant, property, data, security, and privacy patterns
* Observability, operations, continuity, and evidence patterns
* Developer platform, delivery, testing, and release patterns
* Configuration, deployment, and environment guidance
* Reference data and synthetic fixtures
* Demonstration, evaluation, and feedback
* Promotion, reuse, divergence, and retirement
* Future reference implementation evolution

Specific cloud providers, programming languages, frameworks, databases, model vendors, observability products, identity products, deployment products, and commercial services remain implementation choices unless a separate approved decision standardizes them.

---

# Objectives

ARCH-020 aims to provide:

* Concrete validation of architecture decisions
* End-to-end examples across platform layers
* Faster and safer implementation starts
* Reusable patterns without code forks
* Traceable conformance evidence
* Representative hospitality workflows
* Multi-tenant and security test examples
* AI and deterministic-service separation
* Developer-platform golden paths
* Operational and failure demonstrations
* Technology-neutral pattern guidance
* Feedback that improves architecture
* A controlled path from prototype to production

---

# Architectural Principles

## Architecture Remains Authoritative

Reference implementations consume architecture decisions. If an example conflicts with a normative architecture document, the example must be corrected or an architecture change must be approved explicitly.

## Demonstrate Behavior, Not Products

Reference implementations emphasize contracts, responsibilities, data ownership, flows, controls, quality attributes, and evidence rather than vendor-specific features.

## Business-First Scenarios

Every implementation begins with a hospitality outcome and observable acceptance criteria.

Technology components exist to support the business flow, not to become the organizing domain.

## Deterministic Services Execute Business Rules

AI may understand intent, assemble context, explain, recommend, and orchestrate. Availability, pricing, bookings, payments, authorization, policy, and state changes remain authoritative in deterministic business services and workflows.

## Services Own Their Data

Reference services access only their owned repositories and communicate through published APIs and events.

No example may normalize cross-service database access.

## Tenant and Property Context Is Explicit

Every tenant- or property-scoped command, query, event, workflow, agent execution, cache key, data record, telemetry item, and test fixture preserves validated context.

## Security and Operations Are Included

Authentication, authorization, secrets, privacy, observability, failure, recovery, deployment, support, and evidence are part of every complete example, not later production additions.

## Failure Is Demonstrated

Reference implementations show timeout, retry, idempotency, cancellation, compensation, degradation, containment, recovery, and escalation behavior.

## Tests Are Executable Architecture Evidence

Conformance, contract, security, multi-tenant, workflow, AI evaluation, resilience, and operational tests demonstrate that implementation behavior matches architectural intent.

## Reference Does Not Mean Production Ready

Production adoption requires workload, risk, legal, privacy, capacity, resilience, support, cost, and environment assessment.

## Technology Independence

Logical patterns and acceptance criteria remain portable. Technology-specific variants must preserve the same contracts and invariants.

---

# Core Definitions

## Reference Implementation

A maintained, demonstrable implementation or implementation specification that realizes an approved set of architecture decisions for a representative scenario.

## Reference Scenario

A bounded business situation with actors, goals, data, flows, constraints, risks, quality attributes, and measurable outcomes.

## Conformance Profile

The selected architecture requirements, contracts, controls, quality attributes, and tests that an implementation must satisfy for a defined scenario.

## Golden Path

The recommended developer and delivery path that makes the conformant implementation approach easy to adopt.

## Reference Pattern

A reusable implementation arrangement for a recurring architectural problem, including context, forces, solution, consequences, tests, and variation points.

## Demonstration Environment

An isolated environment with synthetic or approved data used to execute, observe, evaluate, and explain a reference scenario.

## Productionization

The governed process that assesses and adapts a reference implementation for a real production workload and operating context.

## Architecture Trace

A mapping from implementation component, contract, test, or evidence item to the architecture decisions it realizes.

---

# Reference Implementation Classes

Reference artifacts may be classified as:

* Concept demonstration
* Executable example
* Golden-path starter
* Integration sample
* Conformance test fixture
* Operational simulation
* Security and resilience test harness
* End-to-end business reference
* Production candidate requiring formal assessment

Classification is explicit so consumers understand intended use and limitations.

---

# Reference Portfolio

ARCH-020 defines two primary scenario tiers.

## Tier 1 — Single Property

Casa Lluvia Staycation demonstrates the smallest valuable production-shaped slice:

* One tenant
* One property
* Guest and administrator experiences
* Availability inquiry
* Rate computation
* Reservation request and confirmation
* Guest authorization
* Pool-ticket and parking add-ons
* Notifications and self-check-in support
* Property knowledge
* Operational monitoring and evidence

## Tier 2 — Multi-Property Enterprise

The enterprise scenario demonstrates:

* Multiple tenants and properties
* Portfolio and property administration
* Identity federation and delegated access
* Tenant-specific configuration, branding, and policy
* Shared and property-specific knowledge
* Cross-property workflows
* External property-management, payment, and communication integrations
* Resource quotas, service tiers, observability, and continuity
* Extension installation and marketplace patterns

---

# Casa Lluvia Reference Domain

The Casa Lluvia reference uses representative operating rules such as:

* Single one-bedroom property
* Maximum permitted occupancy enforced by the business service
* Standard stay duration and check-in/check-out policy
* Date-based availability
* Weekday and weekend rates
* Guest-count pricing
* Pool-ticket and parking add-ons
* Reservation or security deposit workflow
* Guest identity submission for property authorization
* Digital-lock self-check-in communication
* Nearby-location and property-information knowledge

Configuration supplies changeable values. Domain services own pricing, occupancy, availability, reservation, and authorization decisions.

The reference avoids embedding private guest information, production credentials, or operational secrets in source or documentation.

---

# Architecture Coverage Model

Each reference implementation identifies coverage across:

1. System context and actors
2. Platform layers
3. Service and domain boundaries
4. AI orchestration
5. Commands, queries, events, and workflows
6. Domain model and business rules
7. Deployment and resilience
8. Security and privacy
9. Integration contracts
10. Observability and evidence
11. Enterprise operations
12. Governance and compliance
13. Developer platform and delivery
14. Agents
15. Workflow engine
16. Knowledge and memory
17. APIs and SDKs
18. Multi-tenancy
19. Plugins and extensions

Coverage is scenario appropriate. A reference may mark a capability not applicable rather than implement unnecessary complexity.

---

# Reference Architecture Layers

## Experience

Web, messaging, administrative, partner, or other channel adapters normalize input and render results without owning business truth.

## Gateway and Conversation

Identity, tenant context, rate limits, request normalization, conversation state, and routing are established through governed interfaces.

## AI Intelligence

Intent understanding, context assembly, reasoning, tool selection, grounding, and explanation remain bounded and observable.

## Business Services

Availability, pricing, reservation, guest, property, add-on, notification, and other services enforce deterministic domain rules and own data.

## Workflow

Long-running reservation, payment, authorization, notification, exception, and recovery processes coordinate through versioned workflow definitions.

## Data and Knowledge

Repositories, events, files, knowledge, memory, and caches preserve authority, provenance, lifecycle, and tenant scope.

## Integration

External calendars, property systems, payments, messaging, identity, locks, and extensions connect through explicit contracts and tenant-bound credentials.

## Platform Operations

Deployment, configuration, secrets, telemetry, incident response, continuity, governance, and evidence support the full lifecycle.

---

# Reference Pattern Catalog

ARCH-020 demonstrates patterns for:

* Normalized channel request
* Tenant and property context establishment
* Conversational query-to-tool orchestration
* Deterministic rate computation
* Availability query
* Idempotent reservation command
* Long-running booking workflow
* Event publication and notification
* Knowledge retrieval with citation
* Bounded memory
* Agent tool authorization
* External integration adapter
* Plugin capability mediation
* Service-owned repository
* Tenant-aware cache and observability
* Failure, compensation, and recovery
* Contract and conformance testing
* Deployment promotion and rollback

---

# Reference Repository Strategy

Architecture documentation remains under `/architecture`.

Executable reference implementations should be placed in a dedicated repository area or repository with explicit ownership, version, build, test, security, and lifecycle controls. They must link back to ARCH-020 and their conformance profile.

A recommended logical structure is:

```text
reference-implementations/
├── shared/
│   ├── contracts/
│   ├── test-fixtures/
│   └── conformance/
├── single-property/
│   ├── application/
│   ├── services/
│   ├── workflows/
│   ├── integrations/
│   ├── deployment/
│   └── tests/
└── multi-property/
    ├── application/
    ├── services/
    ├── workflows/
    ├── integrations/
    ├── deployment/
    └── tests/
```

This structure is guidance, not a mandate for one source layout or language.

---

# Conformance Model

Conformance is demonstrated through:

* Architecture traceability
* Domain and service boundary review
* API and event contract tests
* Repository ownership checks
* Tenant-isolation tests
* Authentication and authorization tests
* Workflow determinism and recovery tests
* AI evaluation and tool-authority tests
* Knowledge provenance and deletion tests
* Integration failure tests
* Observability and evidence checks
* Deployment, rollback, backup, and recovery exercises

Conformance is versioned and cannot be inferred from code similarity alone.

---

# Reference Data

Reference environments use synthetic or explicitly approved data.

Fixtures include:

* Distinct tenants and properties
* Guests and staff roles
* Available and unavailable date ranges
* Weekday, weekend, and special-day rates
* Valid and invalid occupancy
* Pool and parking options
* Integration success and failure
* Knowledge with current, stale, and conflicting sources
* Security and tenant-boundary attack cases

Production personal data and credentials are excluded.

---

# Environment Model

Reference environments may include:

* Local developer sandbox
* Automated test environment
* Shared demonstration environment
* Security and resilience test environment
* Production-candidate pilot environment

Each environment has separate identities, secrets, tenant data, configuration, endpoints, telemetry, and retention.

---

# Productionization Boundary

Before production adoption, teams assess:

* Business fit and ownership
* Workload and capacity
* Data classification and privacy
* Tenant and residency needs
* Security threat model
* Availability, RTO, and RPO
* Integration and external dependencies
* Support and incident response
* Compliance and evidence
* Cost and licensing
* Technology lifecycle

Copying a reference deployment without this assessment is non-conformant.

---

# Feedback Loop

Reference implementations generate feedback through:

* Architecture gaps and ambiguities
* Developer friction
* Contract limitations
* Test and failure results
* AI evaluation findings
* Tenant and user feedback
* Operational incidents and exercises
* Performance and capacity evidence
* Security and compliance review

Feedback produces implementation correction, platform improvement, or an explicit architecture proposal. Examples never change architecture silently.

---

# Governance

## Enterprise Architecture

Owns reference scope, architectural trace, conformance profiles, and decisions about promoted patterns.

## Product and Domain Owners

Own scenario outcomes, domain semantics, service contracts, and business acceptance.

## Developer Platform

Owns golden paths, templates, environments, delivery controls, and conformance automation.

## Security, Privacy, and Compliance

Own control profiles, data policy, threat assessment, assurance, and exceptions.

## Operations

Own service readiness, observability, incident, capacity, continuity, and support demonstrations.

## Reference Maintainers

Own implementation quality, dependencies, tests, documentation, releases, and retirement.

---

# Architecture Decisions

* ARCH-001 through ARCH-019 remain normative.
* Reference implementations demonstrate one conformant realization.
* Casa Lluvia Staycation is the initial single-property scenario.
* Business services remain deterministic and authoritative.
* AI orchestrates but does not own business state.
* Services own data and expose versioned contracts.
* Security, operations, failure, and evidence are included from the start.
* Synthetic data is the default for demonstrations and tests.
* Production adoption requires explicit productionization assessment.
* Reference feedback changes architecture only through governance.

---

# Module Structure

This module contains:

1. `01-reference-implementation-overview.md`
   * Purpose, portfolio, principles, stakeholders, target state, and success measures
2. `02-reference-implementation-methodology.md`
   * Scenario selection, architecture traceability, conformance, evidence, lifecycle, and governance
3. `03-single-property-hospitality-reference.md`
   * Casa Lluvia Staycation domain, actors, workflows, services, data, configuration, and acceptance
4. `04-multi-property-enterprise-reference.md`
   * Tenant portfolios, delegated access, shared capabilities, integrations, scale, isolation, and operations
5. `05-conversational-ai-agent-and-knowledge-reference.md`
   * Normalized requests, orchestration, agents, tools, grounding, memory, evaluation, and safeguards
6. `06-workflow-and-business-service-reference.md`
   * Deterministic services, commands, queries, events, workflows, transactions, failures, and compensation
7. `07-api-integration-and-extension-reference.md`
   * APIs, SDKs, events, adapters, external systems, plugin packages, MCP, and compatibility
8. `08-multi-tenant-security-data-and-operations-reference.md`
   * Tenant context, identity, data isolation, privacy, telemetry, incidents, resilience, and evidence
9. `09-delivery-testing-and-conformance-reference.md`
   * Developer platform, environments, CI/CD, tests, evaluations, release, rollback, and productionization
10. `10-future-reference-implementation-evolution.md`
    * Additional verticals, executable specifications, generated variants, certification, and ecosystem evolution

The diagram package contains:

* `diagrams/README.md`
* `diagrams/01-reference-implementation-landscape.mmd`
* `diagrams/02-single-property-request-flow.mmd`
* `diagrams/03-multi-property-enterprise-flow.mmd`
* `diagrams/04-delivery-and-conformance-pipeline.mmd`
* `diagrams/05-reference-to-production-evolution.mmd`

---

# Relationship to Other Architectures

ARCH-020 demonstrates the integrated application of ARCH-001 through ARCH-019.

It does not duplicate or replace their decisions. Each reference artifact links to the specific architecture requirements it implements and identifies any intentionally excluded capability.

Major divergence requires an Architecture Decision Record and approval before the reference can be presented as conformant.

---

# Expected Outcomes

When ARCH-020 is implemented:

* Teams can see how platform architecture works end to end.
* Casa Lluvia validates the single-property hospitality baseline.
* Enterprise scenarios demonstrate multi-property and multi-tenant evolution.
* AI, workflows, services, knowledge, APIs, integrations, and extensions retain correct boundaries.
* Golden paths reduce implementation inconsistency.
* Tests provide executable architecture evidence.
* Failure, recovery, security, and operations are demonstrated.
* Technology variants can be compared against common criteria.
* Production teams understand what must be reassessed.
* Reference feedback improves architecture through governed change.

---

# Repository Structure

```text
architecture/020-reference-implementations/
├── README.md
├── 01-reference-implementation-overview.md
├── 02-reference-implementation-methodology.md
├── 03-single-property-hospitality-reference.md
├── 04-multi-property-enterprise-reference.md
├── 05-conversational-ai-agent-and-knowledge-reference.md
├── 06-workflow-and-business-service-reference.md
├── 07-api-integration-and-extension-reference.md
├── 08-multi-tenant-security-data-and-operations-reference.md
├── 09-delivery-testing-and-conformance-reference.md
├── 10-future-reference-implementation-evolution.md
└── diagrams/
    ├── README.md
    ├── 01-reference-implementation-landscape.mmd
    ├── 02-single-property-request-flow.mmd
    ├── 03-multi-property-enterprise-flow.mmd
    ├── 04-delivery-and-conformance-pipeline.mmd
    └── 05-reference-to-production-evolution.mmd
```

---

# Summary

ARCH-020 closes the Application Platform architecture set by showing how the preceding nineteen modules work together in representative, testable hospitality solutions.

The Casa Lluvia single-property reference provides the first concrete vertical slice. The enterprise reference demonstrates how the same boundaries scale to portfolios, tenants, agents, workflows, integrations, extensions, security, and operations.

Reference implementations turn architecture into evidence while preserving the distinction between an illustrative golden path and a production system that must be assessed for its real business, risk, workload, and operating context.
