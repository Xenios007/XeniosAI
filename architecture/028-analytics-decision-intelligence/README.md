# ARCH-028 — Analytics & Decision Intelligence

**Architecture Domain:** Enterprise Analytics and Decision Intelligence Architecture

**Document ID:** ARCH-028

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-06

---

# Purpose

ARCH-028 defines semantic metrics, analytical data products, operational and executive reporting, forecasting, experimentation, recommendations, decision support, insight provenance, and governed AI-assisted analysis.

Analytics interprets governed facts but never converts telemetry, inference, correlation, or model output into unqualified business truth.

Casa Lluvia validates occupancy, inquiry conversion, response quality, revenue, add-on uptake, service recovery, repeat-guest, and operational dashboards with tenant-safe definitions.

---

# Scope and Boundaries

* Domain services own operational facts
* ARCH-010 owns platform observability telemetry
* ARCH-023 owns customer records and consent context
* ARCH-029 owns AI evaluation, experiments on model behavior, and promotion

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

1. `01-analytics-decision-intelligence-overview.md`
2. `02-metrics-measures-and-semantic-layer.md`
3. `03-analytical-data-products-and-lineage.md`
4. `04-operational-executive-reporting-and-alerting.md`
5. `05-forecasting-planning-and-scenarios.md`
6. `06-experimentation-and-causal-analysis.md`
7. `07-recommendations-and-decision-support.md`
8. `08-ai-assisted-analysis-and-insight-provenance.md`
9. `09-analytics-operations-governance-and-assurance.md`
10. `10-future-analytics-decision-intelligence-evolution.md`

The diagram package contains five strict Mermaid sources.

---

# Expected Outcomes

* Analytics interprets governed facts but never converts telemetry, inference, correlation, or model output into unqualified business truth.
* Cross-industry capabilities remain stable while solution packs add bounded semantics.
* Operations can explain state, policy, provenance, versions, failures, and recovery.
* Casa Lluvia provides production-shaped evidence without becoming the platform's universal model.
* Future automation improves through controlled evaluation and promotion rather than direct self-modification.

---

# Repository Structure

```text
architecture/028-analytics-decision-intelligence/
├── README.md
├── 01-analytics-decision-intelligence-overview.md
├── 02-metrics-measures-and-semantic-layer.md
├── 03-analytical-data-products-and-lineage.md
├── 04-operational-executive-reporting-and-alerting.md
├── 05-forecasting-planning-and-scenarios.md
├── 06-experimentation-and-causal-analysis.md
├── 07-recommendations-and-decision-support.md
├── 08-ai-assisted-analysis-and-insight-provenance.md
├── 09-analytics-operations-governance-and-assurance.md
├── 10-future-analytics-decision-intelligence-evolution.md
└── diagrams/
    ├── README.md
    ├── 01-analytics-decision-landscape.mmd
    ├── 02-data-product-lineage-flow.mmd
    ├── 03-metric-to-decision-flow.mmd
    ├── 04-experiment-recommendation-loop.mmd
    └── 05-analytics-evolution.mmd
```

