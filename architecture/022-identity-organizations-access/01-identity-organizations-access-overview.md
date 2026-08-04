# ARCH-022 · Chapter 01 — Identity, Organizations & Access Overview

**Document ID:** ARCH-022-01

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines the identity and access capability landscape, core concepts, ownership boundaries, context model, and target state.

---

# Target State

XeniosAI uses a federated, policy-driven identity architecture with centrally governed identity semantics and provider-owned authorization enforcement.

The target state supports:

* Multiple identity sources without multiple identities being silently merged
* One person holding different relationships across organizations and tenants
* Customer access that can begin anonymously and become verified when needed
* Workforce and partner federation with local authorization
* Explicit tenant, property, project, environment, and resource context
* Short-lived service and workload credentials
* AI agents with sponsors, purposes, tools, budgets, and stop conditions
* Delegated administration without privilege inheritance beyond the grant
* Continuous access review and rapid revocation
* Evidence for every high-impact decision

---

# Core Concepts

## Identity

A persistent representation of a person or non-human actor with authoritative identifiers, type, status, assurance, provenance, and lifecycle.

## Principal

The runtime security representation used to authenticate and evaluate an actor. A principal is scoped to a session or operation and does not replace the identity record.

## Organization

A governed business, legal, administrative, partner, or operational body that may contain units, teams, projects, and memberships.

## Membership

A time-bound relationship connecting an identity to an organization, tenant, team, project, or other governed scope.

## Role

A named collection of responsibilities or access expectations. A role contributes context but does not override policy or resource ownership.

## Entitlement

A versioned grant to use a capability or resource under defined conditions.

## Access Package

A governed bundle of roles, entitlements, conditions, approval, duration, review, and revocation behavior for a repeatable need.

## Delegation

A bounded transfer of permitted action from an authorized grantor or authority source to another principal.

## Assurance

Evidence-based confidence in identity proofing, authentication, session, device, workload, or transaction conditions.

---

# Ownership Model

| Capability | Owner |
| --- | --- |
| Identity records and lifecycle | Identity capability or approved authoritative source |
| Authentication and credential validation | Authentication services under ARCH-008 |
| Organization and membership semantics | ARCH-022 organization and membership capabilities |
| Tenant lifecycle and isolation | ARCH-018 |
| Authorization policy | Policy owners and security governance |
| Resource ownership and action validity | Domain or platform provider service |
| Agent identity and execution | ARCH-014 with ARCH-022 identity contracts |
| Workflow progression | ARCH-015 |
| Consent and privacy obligations | Privacy governance and owning business capability |

No service may create shadow identities or private role semantics that evade enterprise lifecycle and review.

---

# Access Context

An access decision may consider:

* Principal and identity class
* Authentication and proofing assurance
* Organization, tenant, property, project, and environment relationships
* Role, entitlement, delegation, and purpose
* Resource identity, ownership, classification, and lifecycle
* Requested action and business state
* Session, device, network, time, location, and risk where permitted
* Consent, contractual, regulatory, and separation-of-duty constraints
* Agent sponsor, tool grant, budget, and stop conditions

Context is evaluated at the time of access. A prior successful request does not guarantee current permission.

---

# Decision Model

An access decision returns permit, deny, challenge, or not-applicable together with policy version, reason category, obligations, expiry, and evidence reference.

Obligations may require stronger authentication, confirmation, redaction, approval, logging, rate limits, limited fields, purpose notice, or human review.

Clients do not interpret policy themselves. They present provider decisions and required next steps.

---

# Architectural Invariants

* One identity may have many relationships, but relationships never merge authority.
* Tenant membership does not grant access to every tenant resource.
* Federation proves an external identity assertion; local policy still authorizes.
* Shared accounts are prohibited for accountable protected work.
* Service, device, application, workflow, and agent identities are distinct.
* Delegation cannot exceed the delegator's eligible authority or bypass policy.
* Suspension and revocation propagate to active sessions and derived grants.
* Identity evidence is protected and minimized.
* Domain services validate their resources and actions.

---

# Cross-Industry Use

The same model supports a guest of a property, renter of an asset, buyer in commerce, requester in support, employee, supplier, developer, or AI agent. Industry-specific relationships and proofing requirements are supplied by bounded contexts and solution packs rather than by changing the identity kernel.

