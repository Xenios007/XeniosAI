# ARCH-022 · Chapter 06 — Delegated Administration & Privileged Access

**Document ID:** ARCH-022-06

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines how administrative and privileged authority is delegated, activated, supervised, reviewed, and revoked across platform, tenant, organization, property, project, and environment boundaries.

---

# Delegation Model

A delegation contains:

* Delegation identifier
* Authority source and grantor
* Delegate principal
* Permitted actions and resources
* Tenant, property, project, and environment scope
* Purpose
* Start, expiry, and activation conditions
* Required assurance
* Approval and separation of duties
* Further-delegation rule
* Monitoring and evidence requirements
* Revocation behavior

Delegation never transfers resource ownership and cannot exceed eligible authority or policy.

---

# Tenant Administration

Tenant administrators may manage approved tenant memberships, roles, configurations, applications, channels, knowledge sources, integrations, and extensions according to delegated scope.

They cannot:

* Grant platform-operator authority
* Access another tenant
* Bypass service authorization
* Change protected platform policy
* Grant capabilities they are not authorized to administer
* Hide or delete required evidence
* Convert tenant data into global data

Property and project administrators receive narrower scopes.

---

# Privileged Access

Privileged access can change security, identity, tenant, production, financial, policy, data, deployment, or evidence state with material impact.

Privileged access is:

* Separately identified from routine work
* Strongly authenticated
* Justified and approved
* Time bound
* Activated only when needed
* Limited to relevant resources
* Monitored
* Attributable
* Automatically expired
* Reviewed after use

Standing privilege is minimized.

---

# Just-in-Time Activation

Eligible users request activation with purpose, scope, duration, ticket or incident reference where applicable, and current assurance.

Approval may be automatic for low-risk preapproved duties or human for high-risk operations. Activation creates a separate privileged session and expires without relying on manual cleanup.

---

# Support Access

Support access requires a tenant or platform support purpose, minimum data, explicit scope, time limit, and audit evidence. Customer or tenant approval is obtained where policy requires.

Support tools mask information by default and reveal additional fields only through current authorization. Conversation handoff does not grant unrestricted account access.

---

# Emergency Access

Emergency access exists for defined conditions where normal access cannot restore critical service or protect people and data in time.

It requires strong authentication, explicit declaration, narrow scope, immediate monitoring, notification, automatic expiry, evidence preservation, and mandatory post-event review.

Emergency access does not disable tenant isolation, logging, or resource validation.

---

# Delegation to Automation

Workflows, services, and agents may act on behalf of a person or organization only through explicit, operation-bound delegation.

Delegation records original actor, automation identity, purpose, permitted tools or actions, data scope, expiry, and evidence. Automation cannot further delegate unless explicitly permitted.

---

# Administrative UX

Interfaces display active scope, privilege mode, expiry, affected resources, and material consequences. Dangerous actions require structured confirmation bound to the current proposal.

Administrators can inspect, revoke, and review delegated grants. Bulk operations show the complete scope before execution and return partial-failure results accurately.

---

# Governance

Delegation and privilege are reviewed for necessity, accumulation, dormant grants, excessive duration, conflicting duties, unusual use, failed revocation, and orphaned ownership.

Metrics do not reward rapid privilege approval at the expense of least privilege or evidence quality.

