# ARCH-022 · Chapter 04 — Authentication, Federation & Session Assurance

**Document ID:** ARCH-022-04

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines enterprise authentication journeys, federation, session assurance, credential lifecycle, step-up authentication, and channel transitions while relying on ARCH-008 security controls.

---

# Authentication Principles

* Authentication strength is proportional to risk.
* Authentication establishes identity, not authorization.
* Stronger authentication may be required when context or action changes.
* Shared credentials and shared human accounts are prohibited.
* Recovery is part of the authentication threat model.
* Credentials are replaceable and independently revocable.
* User journeys remain accessible and privacy preserving.

---

# Assurance Profiles

An Assurance Profile defines required proofing, authenticators, session conditions, device or workload evidence, reauthentication interval, recovery controls, and acceptable federation sources.

Profiles may apply to anonymous inquiry, customer account access, routine workforce work, tenant administration, platform operations, financial action, privileged access, developer deployment, or agent execution.

The profile name is stable even if underlying authenticator technology changes.

---

# Federation

Federation accepts signed or otherwise protected identity assertions from an approved external authority.

Federation configuration defines:

* Issuer and trust ownership
* Supported organizations and domains
* Claim mapping and transformation
* Proofing and authentication assurance
* Key and metadata lifecycle
* Session constraints
* Provisioning and deprovisioning
* Failure and incident handling
* Testing and exit

External claims are mapped into local identity and membership semantics. They never directly become unrestricted roles or tenant authority.

---

# Just-in-Time Access

Just-in-time identity or membership creation is permitted only for approved relationships and baseline access. It validates tenant, organization, issuer, claim rules, sponsor, lifecycle, and default-deny policy.

High-risk roles, privileged access, payment authority, production administration, or cross-tenant access require explicit local approval.

---

# Sessions

A session binds a principal to authentication event, assurance, tenant or organization context, client, device or workload, issue time, expiry, refresh rules, and risk state.

Sessions are:

* Short enough for risk
* Renewable only under current policy
* Revocable
* Tenant and audience scoped
* Protected from fixation and replay
* Revalidated after material context change

Switching tenant, entering privileged mode, changing payment details, or approving high-impact work may require a new or stepped-up session.

---

# Channel Transitions

Moving between web, mobile, messaging, voice, email, kiosk, or human support requires secure continuation. A conversation reference does not prove identity.

The receiving channel establishes required assurance and only receives context allowed for the actor, tenant, purpose, and consent.

---

# Credential Lifecycle

Credentials are issued, activated, used, rotated, suspended, revoked, expired, and retired with accountable ownership and evidence.

Credential types are not hard-coded into business services. Services validate standard principal and assurance context through approved infrastructure.

Secrets, recovery codes, and credential material never enter conversation history, general logs, analytics, prompts, or knowledge stores.

---

# Step-Up and Transaction Binding

Step-up is required when current assurance is insufficient. The challenge is bound to the intended action or session and cannot be replayed for a different action.

After step-up, authorization is evaluated again using current resource and policy state.

---

# Failure and Recovery

Authentication failure responses avoid account enumeration and provide accessible recovery. Excessive failure triggers risk controls without permanently denying legitimate users through opaque automation.

Provider outage defines fallback, cached trust limitations, emergency operations, and recovery. Authentication is not bypassed merely to preserve availability.

