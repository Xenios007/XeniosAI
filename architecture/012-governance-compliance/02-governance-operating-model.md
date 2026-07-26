# ARCH-012 · Chapter 02 — Governance Operating Model

**Document ID:** ARCH-012-02

**Title:** Governance Operating Model

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-07-25

**Parent Document:** ARCH-012 — Governance & Compliance

---

# Purpose

This document defines the Governance Operating Model for XeniosAI.

The operating model establishes how enterprise governance responsibilities are organized, delegated, exercised, challenged, assured, escalated, and improved across enterprise, architecture, business, platform, domain, tenant, property, service, data, AI, security, privacy, operations, and supplier scopes.

The model is federated. Decisions should be made as close as practical to the accountable business or technical scope while preserving enterprise principles, mandatory controls, independent assurance, tenant isolation, and appropriate escalation.

The model defines logical governance capabilities and roles. It does not prescribe a corporate organization chart, legal board structure, committee names, staffing model, or vendor product.

---

# Scope

This chapter defines:

* Governance operating principles
* Governance levels and scopes
* Governing authorities
* Governance roles
* Accountability and responsibility
* Decision rights
* Delegated authority
* Governance forums
* Three-lines assurance model
* Decision lifecycle
* Conflict and escalation
* Tenant and property governance
* Third-party participation
* Emergency governance
* Governance rhythms
* Information and reporting
* Maturity and improvement
* Architectural rules

Detailed policy, risk, compliance controls, privacy, AI governance, assurance, audit, exceptions, findings, and remediation are defined in later ARCH-012 chapters.

---

# Objectives

The Governance Operating Model aims to provide:

* Clear enterprise accountability
* Explicit decision authority
* Federated governance
* Consistent enterprise guardrails
* Appropriate local autonomy
* Separation of duties
* Independent challenge and assurance
* Timely escalation
* Governed emergency decisions
* Tenant and property isolation
* Supplier accountability
* Efficient governance forums
* Traceable decisions
* Scalable governance across thousands of properties
* Continuous governance improvement

---

# Operating Principles

## Authority Follows Accountability

Actors should receive sufficient authority to discharge their accountability.

Authority without accountability creates uncontrolled risk.

Accountability without authority creates ineffective governance.

## Federate within Guardrails

Domain, tenant, property, and service owners may govern their scopes within enterprise policy, risk appetite, architecture, security, privacy, and compliance boundaries.

## One Accountable Owner

Every governance capability, decision, risk, policy, obligation, control, exception, finding, and remediation action must have one accountable owner.

## Separate Decision, Execution, and Assurance

High-risk matters should separate approval, implementation, verification, and independent assurance.

## Escalate by Risk and Authority

Escalation should occur when risk, impact, conflict, uncertainty, or required authority exceeds delegated boundaries.

## Evidence before Conclusion

Governance decisions and assurance conclusions must identify their evidence, assumptions, limitations, and period of validity.

## Avoid Governance by Committee

Forums coordinate expertise and authority, but accountability must remain assigned to a role or governing authority.

## Emergency Authority Is Controlled

Urgency may shorten decision cycles but must not remove ownership, evidence, security, tenant isolation, retrospective review, or remediation.

---

# Federated Governance Model

```text
Enterprise Governance

├── Architecture Governance
├── Risk and Compliance Governance
├── Security, Privacy, and AI Governance
├── Platform and Operations Governance
├── Business and Domain Governance
├── Tenant Governance
├── Property Governance
└── Supplier Governance
```

Federation allows specialized decisions without creating separate or conflicting governance systems.

Common principles, policy hierarchy, risk language, control model, evidence expectations, and escalation paths bind the federation together.

---

# Governance Levels

## Enterprise Level

The enterprise level governs matters affecting XeniosAI as a whole.

Illustrative responsibilities include:

* Enterprise purpose and principles
* Strategy
* Risk appetite
* Mandatory policy
* Enterprise architecture
* Cross-tenant controls
* Critical service expectations
* High-impact risk acceptance
* Enterprise compliance posture
* Major supplier acceptance
* Crisis authority

## Platform Level

The platform level governs shared capabilities and cross-tenant operational risk.

Illustrative responsibilities include:

* Shared services
* Platform security
* Tenant isolation
* Common data capabilities
* Shared AI capabilities
* Platform changes
* Capacity
* Resilience
* Common evidence

## Business or Domain Level

The business or domain level governs a bounded business or technical capability.

Illustrative responsibilities include:

* Domain policy
* Service ownership
* Domain data
* Domain risks
* Business rules
* Domain controls
* Service commitments
* Domain improvement

## Tenant Level

The tenant level governs tenant users, policies, configuration, data, AI preferences, integrations, properties, and service commitments within enterprise guardrails.

## Property Level

The property level governs authorized local procedures, operations, configuration, guest-impact decisions, physical continuity, and local obligations.

## Service Level

The service level governs the lifecycle, commitments, risks, controls, readiness, operation, change, and retirement of an individual service.

Governance levels must interact through defined accountability, authority, evidence, and escalation.

---

# Governing Authorities

A governing authority is a role or formally authorized body empowered to make a defined class of decisions.

Illustrative governing authorities include:

* Enterprise governing authority
* Executive authority
* Enterprise Architecture authority
* Risk authority
* Compliance authority
* Security authority
* Privacy authority
* AI governance authority
* Data governance authority
* Operations authority
* Change authority
* Continuity authority
* Tenant authority
* Property authority
* Supplier acceptance authority
* Exception authority
* Finding closure authority

Names and organizational placement may vary without changing the architecture.

---

# Core Governance Roles

## Enterprise Governance Owner

Owns the integrated enterprise governance system, alignment, effectiveness, and maturity.

## Governing Authority

Approves or directs decisions within an explicitly defined scope.

## Enterprise Architect

Owns architecture principles, coherence, domain boundaries, roadmaps, ADR governance, and architectural assurance.

## Business Capability Owner

Owns business outcomes, business risks, service expectations, and governance decisions for a capability.

## Policy Owner

Owns policy intent, scope, authority, lifecycle, implementation expectations, and review.

## Obligation Owner

Owns the qualified interpretation, applicability, mapping, monitoring, and change of an obligation.

## Risk Owner

Owns risk understanding, treatment, monitoring, escalation, and acceptance proposals.

## Control Owner

Owns control design, applicability, effectiveness, evidence expectations, and improvement.

## Control Operator

Performs or maintains the control.

## Evidence Owner

Ensures evidence is generated, protected, retained, accessible, and fit for purpose.

## Service Owner

Owns a service's outcomes, risks, controls, commitments, readiness, operation, and lifecycle.

## Data Owner

Owns data purpose, authorization, classification, access, quality, sharing, retention, and lifecycle.

## Data Steward

Maintains data definitions, quality, lineage, and operational governance under the Data Owner.

## Privacy Authority

Provides accountable privacy governance, interpretation, review, and escalation.

## Security Authority

Provides accountable security governance, risk, policy, control, and exception decisions.

## AI Governance Owner

Owns AI purpose, risk classification, approval, safeguards, evidence, evaluation, monitoring, and lifecycle governance.

## Tenant Governance Owner

Owns tenant governance within enterprise guardrails.

## Property Governance Owner

Owns authorized property-level governance and escalation.

## Supplier Owner

Owns the business relationship, due diligence, controls, performance, risk, continuity, and exit for a supplier.

## Assurance Provider

Evaluates governance or controls against defined criteria.

## Auditor

Performs an independent examination and communicates findings and conclusions.

## Issue Owner

Owns the response and resolution of a finding or governance issue.

## Remediation Owner

Owns implementation and verification of corrective action.

These are logical roles and may be performed by individuals, teams, services, or external parties according to scope and independence requirements.

---

# Responsibility Types

Governed activities should distinguish:

| Responsibility | Meaning |
| --- | --- |
| Accountable | Owns the outcome and final responsibility |
| Decision Authority | May authorize a defined decision |
| Responsible | Performs or coordinates the activity |
| Approver | Grants required approval |
| Consulted | Provides required expertise |
| Informed | Receives relevant information |
| Verifier | Confirms implementation or outcome |
| Assurance Provider | Evaluates against criteria |
| Risk Owner | Owns residual risk |
| Evidence Owner | Owns evidence quality and lifecycle |
| Escalation Owner | Receives conditions beyond delegated authority |

One actor may hold multiple responsibilities in low-risk contexts.

High-risk contexts require stronger separation.

---

# Decision-Rights Model

Every material decision right should define:

* Decision name
* Purpose
* Authority source
* Authorized role or body
* Scope
* Applicability
* Risk boundary
* Financial boundary where relevant
* Tenant and property boundary
* Preconditions
* Required consultation
* Required approval
* Evidence
* Conflict rules
* Escalation
* Expiration or review
* Delegation rules

Decision rights should be available when decisions are needed, including during incidents and crises.

---

# Decision Classes

## Strategic Decisions

Affect enterprise direction, architecture, risk appetite, major investment, critical services, or long-term obligations.

## Policy Decisions

Create, approve, interpret, change, or retire policy and standards.

## Risk Decisions

Select treatment, accept residual risk, escalate risk, or determine tolerance.

## Compliance Decisions

Determine applicability, approve control interpretation, accept assessment conclusions, respond to findings, or attest posture.

## Architecture Decisions

Approve material architecture, deviations, ADRs, or technology-independent design direction.

## Operational Decisions

Direct services, incidents, changes, capacity, continuity, and routine operations under ARCH-011.

## Tenant Decisions

Apply to a tenant's authorized users, data, configurations, policies, properties, and service choices.

## Property Decisions

Apply to authorized local property procedures and operational conditions.

## Emergency Decisions

Use temporary emergency authority to prevent or reduce immediate harm.

---

# Delegated Authority

Authority may be delegated only when:

* The delegating actor holds the authority.
* The decision class permits delegation.
* The delegate has appropriate competence.
* Scope and limits are explicit.
* Conflicts of interest are managed.
* Evidence is retained.
* Escalation is defined.
* Delegation can be revoked.
* Review is scheduled.
* Subdelegation is controlled.

Delegation should identify whether authority applies to a role, named actor, service identity, automation, or AI agent.

---

# Automated and AI Authority

Automated capabilities may exercise delegated authority only when:

* The action class is explicitly authorized.
* Identity is verifiable.
* Permission is least privilege.
* Scope is bounded.
* Risk is within limits.
* Preconditions are machine-verifiable.
* Evidence is produced.
* Outcomes are verified.
* Stop conditions exist.
* Human escalation is available.
* Authority can be revoked.

AI recommendation, confidence, or consensus does not constitute approval.

---

# Governance Forums

Logical governance forums may include:

* Enterprise governance review
* Architecture review
* Risk review
* Compliance review
* Policy review
* Security governance review
* Privacy governance review
* AI governance review
* Data governance review
* Operational governance review
* Tenant governance review
* Property governance review
* Supplier governance review
* Exception review
* Finding and remediation review

Forums may be synchronous or asynchronous.

They provide structured coordination but must not obscure decision ownership.

---

# Forum Charter

Each governance forum should define:

* Purpose
* Scope
* Authority
* Chair or accountable owner
* Participants
* Quorum if required
* Decision classes
* Evidence required
* Conflict handling
* Escalation
* Records
* Action tracking
* Cadence
* Review date

A forum without clear authority should provide advice rather than imply approval.

---

# Three-Lines Assurance Model

The governance operating model may organize assurance into three logical lines.

## First Line — Ownership and Operation

Business, service, data, AI, platform, tenant, property, and supplier owners operate capabilities and controls and own day-to-day risks.

## Second Line — Governance, Risk, and Specialist Oversight

Risk, compliance, security, privacy, AI governance, data governance, and architecture capabilities define policy, advise, monitor, challenge, and oversee.

## Third Line — Independent Assurance

Internal audit or equivalent independent assurance evaluates governance, risk management, and controls.

The model defines independence and responsibility, not organizational departments.

---

# External Assurance

External assurance may be provided by:

* Independent auditors
* Certification bodies
* Regulatory examiners
* Customer or tenant assessors
* Contractual reviewers
* Specialist assessors
* Penetration testers
* Privacy or AI assessors

External assurance must have defined scope, criteria, access, confidentiality, evidence, findings, and follow-up.

It does not replace internal ownership.

---

# Governance Decision Lifecycle

```text
Identify Decision Need

↓

Confirm Authority and Scope

↓

Collect Evidence and Expertise

↓

Assess Risk, Obligations, and Alternatives

↓

Manage Conflicts of Interest

↓

Decide and Record Rationale

↓

Communicate and Implement

↓

Verify Outcome

↓

Monitor Continuing Validity

↓

Review, Renew, Replace, or Retire
```

Material decisions must remain traceable throughout their lifecycle.

---

# Decision Record

A material governance decision should include:

* Decision identifier
* Decision statement
* Decision class
* Authority
* Scope
* Date
* Effective period
* Participants
* Conflicts disclosed
* Evidence
* Obligations
* Risks
* Alternatives
* Rationale
* Conditions
* Actions
* Owner
* Verification
* Review trigger
* Related policies, ADRs, controls, exceptions, and findings

---

# Conflict of Interest

Governance must identify and manage conflicts where an actor's interests could improperly influence a decision.

Conflict controls may include:

* Disclosure
* Recusal
* Independent review
* Additional approval
* Separation of duties
* External assessment
* Decision reassignment
* Enhanced evidence

Conflicts should be managed, not merely recorded.

---

# Challenge

Effective governance requires constructive challenge.

Challenge may examine:

* Assumptions
* Evidence
* Interpretation
* Scope
* Risk
* Control sufficiency
* Independence
* Fairness
* Tenant impact
* Long-term consequences
* Alternatives

Challenge must be documented when material and resolved by the authorized decision owner.

---

# Escalation

Governance escalation may be triggered by:

* Authority exceeded
* Policy conflict
* Obligation conflict
* High or increasing risk
* Cross-tenant impact
* Security or privacy concern
* AI safety concern
* Material noncompliance
* Overdue finding
* Repeated exception
* Supplier failure
* Insufficient evidence
* Conflict of interest
* Unresolved disagreement
* Crisis condition

Escalation must transfer context, evidence, ownership, deadlines, and requested decision.

---

# Conflict between Requirements

Conflicts may arise between:

* Laws or jurisdictions
* Contracts
* Tenant requirements
* Enterprise policies
* Security and usability
* Privacy and analytics
* AI performance and explainability
* Resilience and data residency
* Local property procedures and enterprise standards

Conflicts require qualified interpretation, documented options, risk analysis, authorized decisions, and potentially architectural separation.

Silent compromise is not acceptable.

---

# Emergency Governance

Emergency governance supports time-critical decisions during incidents, security events, continuity activation, or crisis.

Emergency governance must define:

* Activation criteria
* Emergency authority
* Scope
* Duration
* Permitted decisions
* Prohibited decisions
* Required evidence
* Security and privacy controls
* Tenant and property boundaries
* Communication
* Retrospective review
* Expiration
* Remediation

Emergency authority is temporary and must not become permanent through inactivity.

---

# Enterprise Governance Rhythm

Governance operates across several rhythms.

## Continuous

* Policy enforcement
* Control operation
* Evidence generation
* Risk monitoring
* Exception expiration
* Security and AI monitoring
* Obligation-change detection

## Event Driven

* Material architecture change
* New obligation
* New tenant or jurisdiction
* New AI use
* Major supplier change
* Incident
* Finding
* Risk escalation
* Crisis

## Periodic

* Policy review
* Risk review
* Compliance assessment
* Control testing
* Service review
* Supplier review
* Tenant review
* Audit
* Governance maturity review

Cadence must reflect risk and change, not arbitrary calendar cycles alone.

---

# Governance Information Model

The operating model depends on connected information including:

* Actors and roles
* Decision rights
* Principles
* Policies
* Obligations
* Risks
* Controls
* Services
* Data
* AI capabilities
* Suppliers
* Tenants
* Properties
* Evidence
* Assessments
* Findings
* Exceptions
* Remediation
* Decisions
* Attestations
* Reports

Information should have stable identifiers, ownership, applicability, lifecycle state, and traceability.

---

# Governance Reporting

Reporting should provide the information needed by each governance audience.

Illustrative views include:

* Enterprise risk posture
* Compliance posture
* Policy status
* Control effectiveness
* Open findings
* Exceptions
* Remediation
* Security posture
* Privacy posture
* AI governance posture
* Supplier risk
* Tenant governance
* Property governance
* Audit status
* Architecture deviations

Reports must preserve context, limitations, access control, confidentiality, and tenant isolation.

---

# Attestation

An attestation is an accountable statement about a defined governance or compliance condition.

An attestation should identify:

* Attesting authority
* Scope
* Criteria
* Period
* Evidence basis
* Exceptions
* Findings
* Limitations
* Date
* Validity
* Required follow-up

Attestation must not exceed the authority, evidence, or competence of the person or body making it.

---

# Tenant Governance Model

Tenant governance should define:

* Tenant governing authority
* Tenant administrators
* Delegated roles
* Tenant policies
* Applicable obligations
* Tenant risks
* Tenant controls
* Tenant data
* AI permissions
* Property delegation
* Supplier and integration choices
* Evidence access
* Reporting
* Escalation
* Exit

Enterprise mandatory controls remain authoritative across tenants.

---

# Property Governance Model

Property governance should define:

* Property accountable owner
* Local decision rights
* Tenant delegation
* Local obligations
* Physical operations
* Guest-impact authority
* Manual procedures
* Local continuity
* Property configuration
* Local evidence
* Escalation
* Reconciliation

Property autonomy should support responsiveness without creating ungoverned local systems.

---

# Supplier Governance Model

Supplier governance should assign:

* Business owner
* Relationship owner
* Risk owner
* Security and privacy reviewers
* Data owner
* Service owner
* Continuity owner
* Contract authority
* Assurance owner
* Exit owner

Supplier governance must continue after onboarding through operation, change, incident, renewal, restriction, and exit.

---

# Cross-Tenant Governance

Cross-tenant matters require enterprise authority when they affect:

* Shared services
* Common policy
* Platform security
* Capacity allocation
* Tenant isolation
* Shared AI capabilities
* Common suppliers
* Enterprise continuity
* Cross-tenant incidents
* Evidence boundaries

Tenant-sensitive details must remain segregated even when enterprise governance coordinates a shared issue.

---

# Governance Service Model

Governance capabilities may be delivered as reusable enterprise services.

Illustrative governance services include:

* Policy service
* Obligation service
* Risk service
* Control service
* Evidence service
* Assurance service
* Exception service
* Finding service
* Decision service
* Attestation service
* Governance reporting service

A service-based model supports consistent governance without requiring centralized performance of every responsibility.

---

# Governance Effectiveness

Governance effectiveness should be evaluated by outcomes including:

* Decision clarity
* Accountability
* Risk reduction
* Obligation traceability
* Control effectiveness
* Evidence quality
* Finding remediation
* Exception discipline
* Incident reduction
* Tenant trust
* Audit readiness
* Architecture alignment
* Adaptability

The number of meetings, policies, approvals, or reports is not sufficient evidence of effective governance.

---

# Governance Maturity

Illustrative maturity stages include:

## Reactive

Governance responds after incidents, audits, or customer demands.

## Repeatable

Common roles, decisions, and records are defined.

## Integrated

Policies, risks, controls, evidence, and assurance are connected across domains.

## Measured

Effectiveness and outcomes are evaluated using reliable evidence.

## Proactive

Obligation, risk, and control changes are anticipated.

## Adaptive

Governance adjusts through approved policy and evidence-based learning.

## Continuous and Machine-Assisted

Governance uses automation and AI to support continuous traceability and assurance within human-accountable boundaries.

Maturity should be assessed per governance capability.

---

# Operating Model Review

The governance operating model should be reviewed when:

* Enterprise strategy changes
* New architecture domains emerge
* New jurisdictions or tenants are added
* AI autonomy increases
* Material incidents occur
* Findings recur
* Decision delays create risk
* Conflicts remain unresolved
* Supplier concentration changes
* Assurance reveals weakness
* Organizational responsibilities change

Review should preserve stable principles while adapting roles and coordination.

---

# Quality Attributes

The Governance Operating Model supports:

* Accountability
* Transparency
* Independence
* Traceability
* Consistency
* Scalability
* Adaptability
* Security
* Privacy
* Explainability
* Tenant isolation
* Enterprise trust

---

# Architectural Rules

The Governance Operating Model must:

* Assign one accountable owner to every material governance object.
* Align authority with accountability.
* Federate governance within mandatory enterprise guardrails.
* Define governance levels and scopes.
* Make decision rights explicit.
* Control delegated and automated authority.
* Separate ownership, execution, verification, and assurance when risk requires it.
* Preserve constructive challenge.
* Manage conflicts of interest.
* Define forums by purpose and authority.
* Escalate according to risk and authority.
* Govern emergency authority as temporary and reviewable.
* Preserve tenant and property isolation.
* Maintain internal ownership of supplier risk.
* Produce traceable decision records.
* Evaluate governance by outcomes.
* Adapt the operating model through governed review.
* Remain vendor neutral and technology independent.

---

# Future Direction

Future operating-model capabilities may include:

* Machine-readable decision rights
* Dynamic authority delegation
* AI-assisted governance coordination
* Continuous conflict detection
* Semantic role and responsibility models
* Federated tenant governance
* Real-time governance posture
* Automated forum preparation
* Continuous assurance
* Policy-aware operational agents
* Governance digital twins
* Adaptive governance rhythms

Future evolution must preserve human accountability, qualified judgment, assurance independence, security, privacy, evidence integrity, and enterprise authority.

---

# Summary

The XeniosAI Governance Operating Model defines how governance authority, accountability, expertise, execution, challenge, assurance, escalation, and improvement are organized across the enterprise.

It uses a federated model that supports domain, tenant, property, service, and supplier decisions within enterprise principles and mandatory controls.

By making decision rights explicit, aligning authority with accountability, separating assurance, preserving tenant isolation, governing emergencies, and measuring outcomes, XeniosAI can scale governance across thousands of hospitality properties without becoming either uncontrolled or unnecessarily centralized.

---

# Related Documents

* ARCH-012 — Governance & Compliance
* ARCH-012-01 — Governance & Compliance Overview
* ARCH-012-03 — Policy Architecture
* ARCH-012-04 — Enterprise Risk Management
* ARCH-012-05 — Compliance and Control Framework
* ARCH-012-06 — Privacy and Data Governance
* ARCH-012-07 — AI and Ethical Governance
* ARCH-012-08 — Assurance, Audit, and Evidence
* ARCH-012-09 — Exceptions, Issues, and Remediation
* ARCH-008 — Security Architecture
* ARCH-011 — Enterprise Operations
