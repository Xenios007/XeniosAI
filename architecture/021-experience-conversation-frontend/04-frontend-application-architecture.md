# ARCH-021 · Chapter 04 — Frontend Application Architecture

**Document ID:** ARCH-021-04

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter defines the logical architecture for XeniosAI frontend applications while remaining independent of one framework, rendering strategy, hosting platform, or device ecosystem.

---

# Logical Layers

Frontend applications use the following logical layers:

| Layer | Responsibility |
| --- | --- |
| Application shell | Startup, navigation, global error containment, configuration, and lifecycle |
| Experience composition | Journeys, routes, layouts, capability assembly, and feature boundaries |
| Presentation | Components, content, formatting, accessibility, and responsive behavior |
| Interaction state | Bounded local state, drafts, selection, focus, optimistic indicators, and recovery |
| Client domain adapters | Translate versioned service contracts into presentation models without owning rules |
| Platform access | Authentication client, API client, realtime client, telemetry, feature entitlement, and extension host |

Dependencies point inward toward stable presentation contracts. Framework and transport concerns remain replaceable adapters.

---

# Application Classes

ARCH-021 supports:

* Public web and embedded chat
* Authenticated customer applications
* Staff operations applications
* Tenant administration applications
* Platform administration applications
* Partner and developer applications
* Mobile and desktop applications
* Messaging and voice channel adapters
* Kiosk and constrained-device experiences

Applications may share design assets and SDKs but retain independently governed permissions, release risk, telemetry, and operational ownership.

---

# Composition Model

Composition occurs through versioned capabilities. A feature declares:

* Identity and owner
* Supported application surfaces
* Route or placement contract
* Required permissions and entitlements
* Required APIs, events, and realtime topics
* Tenant and locale support
* Data classification
* Loading, empty, failure, and recovery states
* Telemetry contract
* Compatibility and lifecycle

Shared code is not automatically a shared capability. Ownership and release contracts remain explicit.

---

# State Model

Frontend state is classified as:

* Ephemeral interaction state
* Navigational state
* Draft state
* Cached query state
* Realtime projection state
* Authenticated session reference
* Durable server-owned state

Only the owning backend service persists authoritative state. Cached and optimistic state carries freshness and reconciliation behavior.

Sensitive tokens and secrets are never stored in general client state or telemetry. Offline storage is minimized, encrypted where required, tenant scoped, expiring, and clearable.

---

# Data Access

Clients access services through approved gateways and versioned APIs. Direct database access and undocumented internal endpoints are prohibited.

Queries are distinct from commands. A displayed value includes enough metadata to handle freshness, scope, and partial failure. Commands use idempotency where retry is possible and return authoritative outcomes.

Realtime events update projections but do not bypass validation or become the only recovery source. Clients can reconcile after reconnect through a current-state query or resumable stream contract.

---

# Modular Delivery

Frontend capabilities may be delivered as a modular monolith, independently deployed applications, embedded components, or governed UI extensions. The selection considers team boundaries, coupling, performance, security, release independence, accessibility, and operational cost.

Micro-frontends are not a default goal. They are justified only when independent ownership and delivery outweigh composition complexity.

---

# Extension Boundary

UI extensions execute through ARCH-019 hosts. They receive explicit slots, data contracts, actions, resources, and tenant grants.

Extensions cannot:

* Access arbitrary application state
* Read tokens or secrets
* Call internal services directly
* Override security or confirmation UX
* Imitate trusted platform notices
* Capture unrestricted input
* Escape visual or runtime isolation

Host applications may suspend, revoke, update, or remove an extension without compromising core navigation or recovery.

---

# Release and Compatibility

Frontend releases use versioned contracts, feature controls, progressive exposure, automated checks, synthetic journeys, rollback, and client compatibility policies.

Breaking API or component changes require coexistence or coordinated migration. Long-lived clients and cached assets must receive understandable upgrade or refresh behavior.

---

# Reference Application Shape

The Casa Lluvia reference should first demonstrate:

* Public availability and pricing conversation
* Structured date, guest, pool, and parking input
* Authoritative quote presentation
* Reservation confirmation boundary
* Customer feedback and human handoff
* Tenant-branded administration
* Staff conversation and request queue
* Responsive and accessible operation

The same application shell and contracts must accept another industry pack without embedding Casa Lluvia rules in the frontend.

