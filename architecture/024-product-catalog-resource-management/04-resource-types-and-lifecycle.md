# ARCH-024-04 — Resource Types & Lifecycle

**Document ID:** ARCH-024-04

**Parent Document:** ARCH-024 — Product, Catalog & Resource Management

**Status:** Draft

---

# Purpose

This chapter defines resource types, instances, groups, pools, capabilities, constraints, status, ownership, and industry specialization.

---

# Architectural Position

Product, Catalog & Resource Management is a bounded enterprise capability. It consumes platform identity, tenancy, workflow, integration, observability, governance, knowledge, and customer context through versioned contracts. It does not absorb authority assigned to neighboring domains.

Casa Lluvia validates the design with property, room, stay package, pool access, parking, maintenance, and amenity concepts. Those hospitality terms are implemented by an industry solution pack; the shared kernel remains usable for vehicles, equipment, inventory, appointments, subscriptions, professional services, and commerce.

---

# Capability Responsibilities

* Resource type registry
* Resource instance identity
* Resource groups and pools
* Capability and constraint references
* Resource lifecycle and retirement

---

# Operating Model

Commands are handled by the owning service and produce versioned domain events. Queries use tenant-scoped projections optimized for discovery and operational use. Cross-service changes use workflows and compensating actions rather than shared tables or distributed database transactions.

Draft, review, publish, suspend, retire, import, and reconcile responsibilities are explicit. Published state is immutable except through a new governed version.

---

# Contracts and Information

Every material record carries a stable identifier, tenant, owner, type, lifecycle state, schema version, effective interval, source, provenance, and correlation metadata. Industry extensions identify their solution pack and compatibility range.

Consumers receive purpose-appropriate projections. Cached or indexed representations expose source version and freshness and never become authority for consequential decisions.

---

# Controls

* **type-safe extensions:** enforced through policy, validation, evidence, and review.
* **tenant isolation:** enforced through policy, validation, evidence, and review.
* **state ownership:** enforced through policy, validation, evidence, and review.
* **stable references:** enforced through policy, validation, evidence, and review.
* **retirement reconciliation:** enforced through policy, validation, evidence, and review.

---

# Failure and Recovery

Unavailable dependencies produce explicit partial or stale results. The platform does not fabricate offerings, attributes, resource state, eligibility, or availability. Idempotent retries, replayable events, reconciliation checkpoints, quarantine, rollback, and operator runbooks support recovery.

---

# Observability

Telemetry records tenant reference, capability, operation, version, source, policy outcome, latency, freshness, result class, and correlation identifier without copying protected business or customer payloads.

Key measures include publication lead time, projection freshness, validation failures, orphan references, reconciliation drift, query latency, availability of authoritative sources, and rollback frequency.

---

# Invariants

* Authoritative state has one accountable owner.
* Client, agent, index, cache, and integration projections cannot grant business authority.
* Tenant and industry boundaries remain explicit.
* Published versions, provenance, and effective dates are preserved.
* AI proposals require deterministic validation and governed promotion.

