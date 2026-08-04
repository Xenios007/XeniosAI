# ARCH-022 · Chapter 03 — Organizations, Teams & Membership

**Document ID:** ARCH-022-03

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines organizations, organizational units, teams, memberships, partnerships, tenant relationships, hierarchy, and lifecycle.

---

# Organization Model

An Organization represents a governed body with identity, type, owner, lifecycle, jurisdiction, policies, relationships, and evidence.

Organization types may include:

* Customer organization
* Operating company
* Tenant organization
* Property or branch operating unit
* Partner or supplier
* Developer organization
* Platform organization
* Temporary collaboration organization

An organization may relate to a tenant but is not interchangeable with one. ARCH-018 remains authoritative for tenant lifecycle and isolation.

---

# Organizational Units and Teams

Units represent structural subdivisions. Teams represent groups assembled for work, capability, support, project, or operational responsibility.

Each unit or team defines:

* Owner and accountable administrator
* Parent and organization context
* Purpose
* Membership rules
* Supported roles
* Lifecycle and review
* Data and resource scope
* External collaboration policy

Hierarchy does not automatically confer access to all descendant or ancestor resources.

---

# Membership Model

A Membership contains:

* Membership identifier
* Identity and organization references
* Relationship type
* Tenant and optional property or project scope
* Roles and access packages
* Start, expiry, review, and termination
* Sponsor or approving authority
* Provenance
* Conditions and separation-of-duty constraints
* Current status

Membership is evaluated independently from identity authentication.

---

# Membership Lifecycle

Membership states include requested, invited, pending verification, active, restricted, suspended, expired, revoked, and ended.

Invitations are scoped, expiring, replay resistant, and bound to the intended organization and relationship. Accepting an invitation does not bypass required proofing or approval.

---

# Multiple Relationships

One person may be a customer of one tenant, employee of another, partner of a third, and platform developer under a separate organization.

The interface and access engine establish the active relationship explicitly. Data, roles, sessions, and actions are not combined across contexts without approved cross-organization authority.

---

# Partner Relationships

Partner access is based on an active agreement, sponsor, approved services, data scope, environments, tenant relationships, assurance, expiry, support path, and exit obligations.

Federated partner identity does not grant access until a local membership and policy permit it.

---

# Customer Organizations

Enterprise customers may manage multiple users, branches, departments, projects, resources, and billing relationships. Customer administrators receive only delegated authority over approved scopes.

Consumer customers may have no organization membership. The architecture supports both without manufacturing unnecessary organizations.

---

# Tenant and Property Relationships

Tenant membership identifies a governed relationship to a tenant. Property scope narrows that relationship and cannot expand tenant authority.

Cross-property and cross-tenant roles require explicit policy, purpose, and evidence. A portfolio view must preserve each resource's tenant and property ownership.

---

# Group Use

Groups may simplify policy assignment, communication, or work routing. Dynamic groups use governed, explainable rules and current authoritative attributes.

Group membership is not a permanent copy of access. Changes propagate predictably, and high-risk entitlements may require direct assignment or approval rather than broad group inheritance.

---

# Organization Lifecycle

Organization creation, merger, split, migration, suspension, offboarding, and retirement trigger review of identities, memberships, credentials, domains, federation, resources, delegations, sessions, integrations, extensions, evidence, and data disposition.

Organizational change cannot leave orphaned privileged access or ambiguous ownership.

