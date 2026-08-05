# ARCH-026 — Pricing, Billing & Payments

**Architecture Domain:** Enterprise Pricing, Billing, and Payments Architecture

**Document ID:** ARCH-026

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-06

---

# Purpose

ARCH-026 defines price lists, rate plans, deterministic price calculation, restrictions, promotions, subscriptions, usage charging, invoicing, payment intents, settlement, refunds, reconciliation, taxation interfaces, and disputes.

Pricing and financial services are the sole authorities for calculated charges and financial state; AI may explain or recommend but cannot silently change money.

Casa Lluvia validates weekday and weekend rates, guest-count pricing, pool and parking fees, deposits, full-payment requirements, refunds, and payment-linked self-check-in without embedding those hospitality rules in the core.

---

# Scope and Boundaries

* ARCH-024 owns products and resources
* ARCH-025 owns orders and reservations
* ARCH-027 owns customer communication and disputes as cases
* External processors and accounting systems integrate through governed adapters

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

1. `01-pricing-billing-payments-overview.md`
2. `02-price-lists-rate-plans-and-context.md`
3. `03-pricing-rules-restrictions-promotions-and-approvals.md`
4. `04-quotation-and-price-determination.md`
5. `05-billing-subscriptions-and-usage-charging.md`
6. `06-invoicing-taxation-and-credit-notes.md`
7. `07-payment-settlement-refunds-and-disputes.md`
8. `08-financial-integration-reconciliation-and-controls.md`
9. `09-financial-operations-governance-and-assurance.md`
10. `10-future-pricing-billing-payment-evolution.md`

The diagram package contains five strict Mermaid sources.

---

# Expected Outcomes

* Pricing and financial services are the sole authorities for calculated charges and financial state; AI may explain or recommend but cannot silently change money.
* Cross-industry capabilities remain stable while solution packs add bounded semantics.
* Operations can explain state, policy, provenance, versions, failures, and recovery.
* Casa Lluvia provides production-shaped evidence without becoming the platform's universal model.
* Future automation improves through controlled evaluation and promotion rather than direct self-modification.

---

# Repository Structure

```text
architecture/026-pricing-billing-payments/
├── README.md
├── 01-pricing-billing-payments-overview.md
├── 02-price-lists-rate-plans-and-context.md
├── 03-pricing-rules-restrictions-promotions-and-approvals.md
├── 04-quotation-and-price-determination.md
├── 05-billing-subscriptions-and-usage-charging.md
├── 06-invoicing-taxation-and-credit-notes.md
├── 07-payment-settlement-refunds-and-disputes.md
├── 08-financial-integration-reconciliation-and-controls.md
├── 09-financial-operations-governance-and-assurance.md
├── 10-future-pricing-billing-payment-evolution.md
└── diagrams/
    ├── README.md
    ├── 01-pricing-billing-payment-landscape.mmd
    ├── 02-price-determination-flow.mmd
    ├── 03-billing-payment-lifecycle.mmd
    ├── 04-settlement-reconciliation-flow.mmd
    └── 05-financial-capability-evolution.mmd
```

