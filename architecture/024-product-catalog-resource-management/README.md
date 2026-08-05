# ARCH-024 — Product, Catalog & Resource Management

**Architecture Domain:** Enterprise Product, Catalog, and Resource Architecture

**Document ID:** ARCH-024

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-06

---

# Purpose

ARCH-024 defines how XeniosAI represents, classifies, configures, discovers, governs, and references products, services, catalogs, bundles, and business resources across industries.

The architecture is industry neutral at its core and hospitality first in validation. Casa Lluvia demonstrates a property catalog, room and amenity resources, stay packages, pool and parking options, maintenance state, and channel discovery while retaining deterministic ownership of availability, pricing, reservations, payments, and guest authorization.

---

# Scope

* Product, Catalog & Resource Management Overview
* Product & Service Model
* Catalog, Classification & Discovery
* Resource Types & Lifecycle
* Attributes, Configuration & Inheritance
* Availability, Inventory & Capacity References
* Bundles, Packages & Eligibility
* Integration, APIs, Events & Extensions
* Operations, Governance & Assurance
* Future Product, Catalog & Resource Evolution

Specific vendors, databases, search products, catalog packages, inventory products, programming frameworks, and cloud platforms are outside scope.

---

# Architectural Boundaries

| Neighboring authority | Boundary |
| --- | --- |
| Customer and relationship context | ARCH-023 |
| Orders, reservations, allocation, and fulfillment | ARCH-025 |
| Prices, rates, billing, and payments | ARCH-026 |
| Search ranking and decision intelligence | ARCH-028 |
| Industry-specific room, property, vehicle, item, or appointment semantics | ARCH-030 solution packs |

ARCH-024 publishes definitions and references. It does not accept commercial commitments, calculate authoritative prices, allocate capacity, collect payment, or execute customer engagement.

---

# Core Principles

* Catalogs describe what may be offered; they do not accept orders or promise fulfillment.
* Resources represent governed business capacity without collapsing industry semantics into one universal entity.
* Availability is obtained from authoritative allocation domains, not inferred from catalog visibility.
* Configuration is versioned, inheritable, explainable, and tenant scoped.
* AI may assist discovery and classification but cannot publish or mutate authoritative offerings.

* API-first, event-driven, tenant-aware, vendor-neutral contracts
* Stateless services with independently scalable projections
* No cross-service database access
* Provenance, observability, resilience, portability, and controlled evolution

---

# Module Structure

1. `01-product-catalog-resource-management-overview.md`
2. `02-product-and-service-model.md`
3. `03-catalog-classification-and-discovery.md`
4. `04-resource-types-and-lifecycle.md`
5. `05-attributes-configuration-and-inheritance.md`
6. `06-availability-inventory-and-capacity-references.md`
7. `07-bundles-packages-and-eligibility.md`
8. `08-integration-apis-events-and-extensions.md`
9. `09-operations-governance-and-assurance.md`
10. `10-future-product-catalog-resource-evolution.md`

The diagram package contains five normative Mermaid sources under `diagrams/`.

---

# Expected Outcomes

* Offerings and resources remain reusable across industries.
* Catalog discovery cannot be mistaken for current availability or eligibility.
* Configuration inheritance is predictable and explainable.
* Resource state and commercial state retain separate owners.
* External catalogs and solution packs integrate through versioned contracts.
* AI assists discovery and stewardship without becoming an authoritative publisher.
* Casa Lluvia can scale from one property to multi-property operation without forking the platform core.

---

# Repository Structure

```text
architecture/024-product-catalog-resource-management/
├── README.md
├── 01-product-catalog-resource-management-overview.md
├── 02-product-and-service-model.md
├── 03-catalog-classification-and-discovery.md
├── 04-resource-types-and-lifecycle.md
├── 05-attributes-configuration-and-inheritance.md
├── 06-availability-inventory-and-capacity-references.md
├── 07-bundles-packages-and-eligibility.md
├── 08-integration-apis-events-and-extensions.md
├── 09-operations-governance-and-assurance.md
├── 10-future-product-catalog-resource-evolution.md
└── diagrams/
    ├── README.md
    ├── 01-product-catalog-resource-landscape.mmd
    ├── 02-offering-and-resource-lifecycle.mmd
    ├── 03-catalog-discovery-flow.mmd
    ├── 04-configuration-and-availability-resolution.mmd
    └── 05-product-catalog-resource-evolution.mmd
```

