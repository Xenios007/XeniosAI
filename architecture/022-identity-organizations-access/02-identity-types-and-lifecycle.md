# ARCH-022 · Chapter 02 — Identity Types & Lifecycle

**Document ID:** ARCH-022-02

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines identity classes, authoritative sources, proofing, linking, lifecycle states, and termination behavior.

---

# Identity Classes

Each identity declares a class because proofing, credential, recovery, ownership, and lifecycle differ.

* Customer
* Workforce
* Partner
* Developer
* Service
* Workload
* Application
* Device
* Integration
* AI agent

An actor must not use one class as another to avoid stronger controls. An employee acting as a customer uses the appropriate relationship and context.

---

# Authoritative Sources

Each identity attribute has an authoritative source, verification status, effective time, classification, and lifecycle.

Examples include customer registration, workforce systems, partner onboarding, developer organizations, workload deployment identity, device registration, and agent registry.

Imported assertions are not automatically authoritative. Conflicting attributes are quarantined or resolved through policy rather than overwritten silently.

---

# Lifecycle States

Canonical lifecycle states are:

1. Proposed
2. Proofing
3. Active
4. Restricted
5. Suspended
6. Recovery
7. Revoked
8. Retired

Non-human identities may add provisioned, deployed, draining, and decommissioned states while preserving the same security meaning.

---

# Identity Proofing

Proofing is proportional to risk and purpose. It may verify control of a contact channel, relationship to an organization, legal identity, workforce status, ownership, device possession, workload provenance, or another approved claim.

Proofing level is recorded with method category, issuer, time, expiry, and evidence reference. Sensitive evidence is protected separately and is not copied into every consuming service.

Low-risk anonymous inquiry should not require unnecessary identity. High-impact financial, administrative, security, or legal actions require stronger assurance.

---

# Linking and Deduplication

Identity linking requires evidence and policy. Similar names, email addresses, phone numbers, conversation history, device identifiers, or model inference are insufficient by themselves.

Links preserve original identifiers and provenance. Unlinking, correction, dispute, and audit are supported.

Tenant-local identities are not merged globally merely because they appear to represent the same person.

---

# Joiner, Mover, and Leaver

## Joiner

Create identity or relationship, verify required claims, assign approved baseline access, establish expiry and review, and notify accountable owners.

## Mover

Reevaluate roles, teams, tenant relationships, separation of duties, resource ownership, delegated grants, active sessions, and retained access. New access is not simply added to old access.

## Leaver

Suspend or revoke access promptly, terminate sessions, rotate affected shared dependencies, transfer owned work through governed process, preserve required records, and remove access packages and delegations.

---

# Suspension and Revocation

Suspension is temporary denial pending review or changed conditions. Revocation terminates a credential, session, membership, entitlement, delegation, or identity authority.

Propagation targets include gateways, service caches, active sessions, tokens, API keys, workload credentials, workflows, agent executions, developer environments, extensions, and support tools.

Revocation effectiveness is measured and tested.

---

# Recovery

Recovery verifies current control and required assurance without relying solely on the factor being recovered. Recovery attempts are rate limited, monitored, privacy preserving, and resistant to account enumeration and social engineering.

High-risk recovery may restrict actions temporarily or require human review. Recovery personnel cannot bypass evidence requirements through discretion alone.

---

# Retirement and Data Disposition

Retirement ends active identity use while preserving legally or operationally required evidence. Personal data is minimized, deleted, anonymized, or retained according to purpose, consent, contract, policy, and legal obligations.

Retired identifiers must not be reassigned in a way that confuses historical accountability.

