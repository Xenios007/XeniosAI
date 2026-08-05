# ARCH-030 — Industry Solution Packs & Composable Applications

**Architecture Domain:** Enterprise Industry Solution and Composable Application Architecture

**Document ID:** ARCH-030

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-06

---

# Purpose

ARCH-030 defines how platform and enterprise capabilities are assembled into governed industry applications, domain packs, configurations, workflows, agents, knowledge, integrations, experiences, tests, operational profiles, and lifecycle packages.

A solution pack composes approved capabilities; it cannot fork the platform core, bypass tenant isolation, redefine shared authority, or introduce an unrestricted universal domain model.

The first production-shaped pack is hospitality, validated by Casa Lluvia property, room, guest, availability, rate, stay, booking, pool, parking, authorization, notification, and operations journeys.

---

# Scope and Boundaries

* ARCH-001–020 provide platform capabilities
* ARCH-021–029 provide reusable enterprise capabilities
* Industry packs own bounded terminology and policy
* ARCH-031–040 will expose solution development and distribution

The module remains API-first, event-driven, tenant-aware, vendor-neutral, independently scalable, observable, resilient, portable, and governed. It prescribes capabilities and contracts rather than products or providers.

---

# Core Principles

* Authoritative business state has exactly one accountable owner.
* Clients, agents, models, caches, indexes, and integrations use versioned contracts and never access service databases directly.
* Consequential actions require authorization, deterministic validation, evidence, and recoverable execution.
* Tenant, property, customer, purpose, and industry boundaries remain explicit.
* Derived or generated output is labeled and cannot silently become authoritative truth.
* Human review, appeal, correction, rollback, and exit remain available according to risk.

---

# Module Structure

1. `01-industry-solution-packs-composable-applications-overview.md`
2. `02-solution-pack-model-boundaries-and-manifests.md`
3. `03-capability-composition-configuration-and-policy.md`
4. `04-hospitality-solution-pack-and-casa-lluvia-reference.md`
5. `05-rental-commerce-and-service-solution-patterns.md`
6. `06-workflow-agent-knowledge-and-integration-packaging.md`
7. `07-experience-branding-and-composable-application-shells.md`
8. `08-conformance-versioning-migration-and-exit.md`
9. `09-solution-operations-governance-and-assurance.md`
10. `10-future-industry-solution-evolution.md`

The diagram package contains five strict Mermaid sources.

---

# Expected Outcomes

* A solution pack composes approved capabilities; it cannot fork the platform core, bypass tenant isolation, redefine shared authority, or introduce an unrestricted universal domain model.
* Cross-industry capabilities remain stable while solution packs add bounded semantics.
* Operations can explain state, policy, provenance, versions, failures, and recovery.
* Casa Lluvia provides production-shaped evidence without becoming the platform's universal model.
* Future automation improves through controlled evaluation and promotion rather than direct self-modification.

---

# Repository Structure

```text
architecture/030-industry-solution-packs-composable-applications/
├── README.md
├── 01-industry-solution-packs-composable-applications-overview.md
├── 02-solution-pack-model-boundaries-and-manifests.md
├── 03-capability-composition-configuration-and-policy.md
├── 04-hospitality-solution-pack-and-casa-lluvia-reference.md
├── 05-rental-commerce-and-service-solution-patterns.md
├── 06-workflow-agent-knowledge-and-integration-packaging.md
├── 07-experience-branding-and-composable-application-shells.md
├── 08-conformance-versioning-migration-and-exit.md
├── 09-solution-operations-governance-and-assurance.md
├── 10-future-industry-solution-evolution.md
└── diagrams/
    ├── README.md
    ├── 01-solution-pack-landscape.mmd
    ├── 02-capability-composition-flow.mmd
    ├── 03-hospitality-reference-architecture.mmd
    ├── 04-solution-lifecycle-and-conformance.mmd
    └── 05-industry-solution-evolution.mmd
```

