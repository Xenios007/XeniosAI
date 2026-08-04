# ARCH-022 · Chapter 05 — Authorization, Access Packages & Policy Context

**Document ID:** ARCH-022-05

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines enterprise access semantics, policy context, roles, attributes, relationships, entitlements, access packages, requests, approvals, reviews, and revocation.

ARCH-008 remains authoritative for the security authorization model. ARCH-022 defines how business and organization relationships feed that model.

---

# Authorization Model

XeniosAI combines:

* Role-based context for responsibilities
* Attribute-based context for identity, resource, environment, and risk
* Relationship-based context for ownership, membership, sponsorship, and delegation
* Policy-based decisions for explicit rules and obligations
* Capability grants for tools, agents, extensions, and applications

No one method is sufficient alone for all enterprise access.

---

# Access Request

An access request identifies:

* Requester and intended beneficiary
* Organization, tenant, property, project, or environment
* Required capabilities or resources
* Business purpose
* Requested duration
* Sponsor
* Risk and classification
* Conflicting duties
* Approval path
* Review and expiry

Requests for broad roles when narrower capabilities suffice are rejected or reduced.

---

# Access Packages

Access packages make common needs repeatable without making access permanent.

Each package defines:

* Owner and intended audience
* Included roles and entitlements
* Eligible organizations and relationships
* Required assurance
* Approval and separation of duties
* Tenant, resource, and environment scope
* Maximum duration
* Review frequency
* Activation conditions
* Revocation and offboarding behavior

Package changes are versioned and do not silently expand existing grants without review.

---

# Policy Context

Policy evaluates current facts, including principal, membership, resource, action, tenant, property, purpose, time, device or workload, authentication assurance, risk, consent, ownership, and lifecycle.

The policy decision includes obligations that providers enforce. Examples include masking fields, requiring step-up, limiting result count, obtaining approval, adding evidence, or denying delegation.

---

# Provider Enforcement

Gateway checks reduce invalid traffic, but each service authorizes access to its own resources and actions. A service does not trust a role label or tenant identifier supplied by a client.

Tools, workflows, knowledge retrieval, memory, agent delegation, analytics, files, and extensions all enforce current authorization at their boundaries.

---

# Separation of Duties

Policy prevents incompatible capabilities from being exercised by one principal where business or regulatory risk requires separation.

Examples include requesting and approving the same access, creating and releasing a payment, publishing and certifying an extension, or granting and reviewing one's own privilege.

Agents and automation cannot be used to collapse required human separation.

---

# Access Review

Reviews verify continuing identity, relationship, purpose, scope, entitlement, owner, activity, expiry, and conflict status.

Reviewers receive understandable evidence and cannot simply approve all access without inspecting material risk. Non-response leads to expiry or escalation according to policy, not indefinite retention.

---

# Revocation

Revocation targets the smallest necessary grant while containing risk. It propagates to sessions, caches, tokens, credentials, active workflows, agents, tools, developer environments, and extensions.

High-risk revocation has defined effectiveness objectives and verification.

---

# Decision Evidence

Evidence records subject, action, resource, tenant, decision, policy version, material attributes, obligations, time, evaluator, enforcement point, and correlation reference without logging unnecessary sensitive values.

Denied decisions remain observable and explainable to authorized support without revealing protected policy internals to attackers.

