# ARCH-021 · Chapter 07 — Identity, State & API Integration

**Document ID:** ARCH-021-07

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-021 — Experience, Conversation & Frontend Architecture

---

# Purpose

This chapter defines how frontend applications establish identity and context, manage bounded client state, and consume APIs, events, SDKs, and conversation services.

---

# Trust Boundary

The client is not a trusted enforcement point. It may improve usability by hiding unavailable actions or validating obvious input, but gateways and provider services independently authenticate, authorize, validate, and enforce tenant scope.

Client-supplied identity, role, tenant, property, price, permission, entitlement, and workflow state are claims to validate, not facts to trust.

---

# Session Context

The frontend may hold a bounded session reference containing:

* Authenticated or anonymous-session state
* Current tenant and optional property selection
* Locale and timezone
* Accessibility preferences
* Current conversation and journey references
* Granted client capabilities
* Expiration and refresh state

The session does not contain ambient authority or reusable platform secrets.

---

# Tenant and Organization Selection

Users with multiple relationships choose a tenant or organization through an explicit, auditable context switch. The interface clearly displays active scope for administrative and operational work.

Switching context invalidates or revalidates cached data, subscriptions, routes, extensions, drafts, and pending actions. A client must never merge data from two tenant contexts in one unapproved view.

---

# Authentication Transitions

Protected journeys introduce authentication at an appropriate boundary. The system preserves a safe continuation reference, not unrestricted pre-authentication context.

After authentication, the platform verifies:

* Identity
* Tenant relationship
* Requested purpose
* Current session and device conditions
* Required authentication strength
* Consent or terms where applicable
* Resource ownership and policy

Failed or expired authentication returns an actionable state without leaking protected information.

---

# API Consumption

Clients use published APIs and SDKs governed by ARCH-017. Requests carry correlation, idempotency, locale, client version, and validated scope where required.

Stable problem responses identify category, user-safe explanation, retryability, field issues, support reference, and remediation. Clients do not depend on raw provider error text.

Pagination, filtering, sorting, search, conditional requests, and concurrency follow contract definitions. The UI does not load unbounded datasets merely because a service can return them.

---

# Query and Command Separation

Queries retrieve projections and carry freshness information. Commands request state change and return acceptance or authoritative completion status.

Optimistic UI is allowed only when:

* The action is reversible or low risk.
* Conflict behavior is defined.
* The interface clearly represents pending status.
* Authoritative rejection is handled.
* Retry is idempotent.

Payments, bookings, approvals, permissions, and destructive actions should not appear complete before provider confirmation.

---

# Client Cache

Cache entries include tenant scope, resource identity, version or freshness, classification, and expiry. Sensitive data is minimized and cleared on logout, scope change, revocation, or lifecycle events.

Cache invalidation may use events, expiry, conditional queries, or explicit mutation results. Realtime delivery accelerates freshness but does not eliminate reconciliation.

---

# Conversation Integration

The client creates or resumes conversations through a versioned contract. It submits normalized messages or structured actions and receives response envelopes, progress, citations, confirmations, and handoff state.

Conversation history uses authorized pagination and retention controls. Search results preserve participant, tenant, lifecycle, deletion, and access boundaries.

---

# Attachments

Attachments use mediated upload, scanning, classification, size and type policy, encryption, tenant scoping, access expiry, and deletion. Clients never embed long-lived privileged storage URLs in durable messages.

Preview and processing state is explicit. Unprocessed content is not treated as safe knowledge or valid transaction input.

---

# Contract Evolution

Frontend compatibility is tested against supported API, event, SDK, design-system, and extension versions. Breaking changes require migration and coexistence appropriate to deployed client lifetimes.

Clients report their version and supported capabilities so providers can return compatible representations or require a controlled update.

