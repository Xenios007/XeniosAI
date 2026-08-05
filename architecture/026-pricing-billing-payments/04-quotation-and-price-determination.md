# ARCH-026-04 — Quotation & Price Determination

**Document ID:** ARCH-026-04

**Parent Document:** ARCH-026 — Pricing, Billing & Payments

**Status:** Draft

---

# Purpose

This chapter defines reproducible calculations, line pricing, taxes and fee references, validity, recalculation, and evidence.

---

# Architectural Position

Pricing and financial services are the sole authorities for calculated charges and financial state; AI may explain or recommend but cannot silently change money.

The capability consumes identity, tenancy, policy, workflow, integration, observability, knowledge, customer context, and neighboring domain state through versioned APIs and events. It owns only the state explicitly assigned here.

Casa Lluvia validates weekday and weekend rates, guest-count pricing, pool and parking fees, deposits, full-payment requirements, refunds, and payment-linked self-check-in without embedding those hospitality rules in the core.

---

# Responsibilities

* Define authoritative aggregates, value objects, lifecycle states, commands, queries, and events for this capability.
* Publish purpose-scoped contracts with tenant, actor, version, provenance, effective time, and correlation context.
* Provide independently scalable command handling and read projections.
* Govern extension points for industry packs, tenants, partners, and approved integrations.
* Preserve correction, audit, retention, portability, recovery, and retirement behavior.

---

# Execution and Contracts

Commands are authorized and validated by the provider that owns the affected resource. Queries expose minimum necessary projections with source, freshness, and restriction metadata. Events carry stable references and minimum facts; they do not transfer ownership.

Cross-domain work uses ARCH-015 workflows, idempotent steps, outbox delivery, compensating actions, and reconciliation. Consumers never infer completion from an optimistic interface, generated response, model confidence, or transport acknowledgement.

---

# Governance and Controls

* Default deny, least privilege, tenant isolation, and purpose limitation
* Versioned schemas, compatibility policy, effective dating, and deprecation
* Separation of duties for high-impact publication, promotion, financial, privacy, or administrative actions
* Data minimization, provenance, classification, retention, correction, and deletion
* Deterministic policy checks around AI-assisted recommendations and proposed actions
* Human review and appeal wherever risk, uncertainty, or regulation requires it

---

# Failure and Recovery

Partial failure is represented explicitly as pending, stale, restricted, degraded, failed, or compensating. The service never fabricates business state. Recovery uses idempotent retry, status queries, replay, reconciliation, quarantine, rollback, and operator runbooks.

---

# Observability and Assurance

Telemetry records tenant reference, capability, operation, policy result, version, source freshness, latency, outcome, and correlation without copying protected payloads. Assurance includes contract, security, privacy, tenant-isolation, resilience, performance, accessibility where applicable, and architecture-conformance tests.

---

# Invariants

* One authoritative owner exists for every material state transition.
* Generated, inferred, cached, indexed, and replicated data remains distinguishable from source truth.
* Tenant and industry extensions cannot weaken platform controls.
* Every consequential change is attributable, versioned, observable, and recoverable.
* AI behavior changes only through ARCH-029 evaluation and promotion.

