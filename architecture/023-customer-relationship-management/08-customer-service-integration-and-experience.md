# ARCH-023-08 — Customer Service Integration & Experience

**Document ID:** ARCH-023-08

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines how customer context integrates with conversations, staff workspaces, workflows, agents, engagement, external CRM systems, and authoritative business services while preserving responsibility boundaries.

---

# Integration Principles

* Consumers use versioned APIs, events, queries, and SDK contracts.
* Frontends and agents never access customer databases directly.
* Context is requested for a declared purpose and minimized at response time.
* Commands modify one authoritative aggregate through its owning service.
* Events distribute facts; consumers do not reinterpret ownership.
* External CRM products are adapters, not implicit system-wide authorities.
* Partial failure produces honest degradation and recoverable work.

---

# Service Interfaces

| Interface | Responsibility |
| --- | --- |
| Customer Profile API | Governed profile create, read, update, correction, and lifecycle commands |
| Relationship API | Typed relationship and role management |
| Preference API | Declared preference management |
| Customer Context Query | Purpose-filtered projection assembly |
| Interaction API | Normalized interaction metadata and outcome ingestion |
| Timeline Query | Policy-filtered chronological history |
| Resolution API | Match suggestion, review, link, merge, split, and non-match evidence |
| Segment API | Definition, membership explanation, and audience reference |
| Portability API | Export, correction, restriction, and deletion workflows |

Contracts include tenant, actor, purpose, correlation, idempotency, version, and policy obligations.

---

# Conversational Experience

ARCH-021 captures customer intent and renders permitted context. Before using a remembered detail, the experience considers freshness, sensitivity, relevance, disclosure risk, and whether confirmation is required.

The assistant asks rather than assumes when a missing or stale detail can change an outcome. It explains when authoritative data is unavailable and offers human handoff for complaints, payment disputes, legal concerns, exceptional requests, account recovery, or conflicting customer records.

---

# Agent Tooling

Customer tools are narrow and task oriented, such as retrieve permitted customer context, record declared preference, propose profile correction, record interaction outcome, or request human stewardship.

Each tool validates:

* Agent and sponsoring actor identity
* Delegated authority and tenant
* Customer and relationship scope
* Business purpose
* Input schema and expected version
* Consent and policy obligations
* Result classification and retention

Agents cannot use a general write-profile tool, bulk-export customer data, or resolve duplicates without an approved workflow.

---

# Staff Workspace

Authorized staff receive a role-specific workspace showing customer identity assurance, relationship roles, current preferences, restrictions, timeline, open work references, and freshness indicators.

The workspace exposes provenance, correction, escalation, merge review, access history, and disclosure warnings. Sensitive values are masked by default. Visibility in the interface never substitutes for provider-side authorization.

---

# Workflow and Handoff

ARCH-015 executes customer lifecycle, correction, consent propagation, merge, deletion, and export workflows. ARCH-027 owns cases, tasks, queues, campaigns, and collaborative service recovery.

Handoff packages include customer reference, interaction purpose, verified context, current outcome, requested action, urgency, consent or restriction obligations, and source links. They exclude unnecessary raw prompt traces and hidden model reasoning.

---

# External CRM Integration

An external CRM adapter declares:

* Objects and fields for which it is authoritative, replicated, or read only
* Identifier and tenant mapping
* Direction and conflict policy
* Consent, suppression, and deletion behavior
* Event ordering, replay, retry, and reconciliation
* Rate, outage, and degradation handling
* Export, migration, and provider-exit procedure

Bidirectional synchronization is field specific. Last-write-wins is prohibited for consent, identity linkage, critical contact details, and regulated attributes.

---

# Failure Modes

| Failure | Required behavior |
| --- | --- |
| Customer context unavailable | Continue without personalization or hand off; never invent |
| Source record stale | Display timestamp and re-query authority before consequence |
| Consent service unavailable | Deny optional processing and preserve required service path |
| Duplicate suspected | Keep records separate and route review |
| External CRM delayed | Queue idempotent updates and reconcile |
| Timeline incomplete | Mark partial result and preserve source links |

---

# Invariants

* All customer access passes provider-side authorization and purpose checks.
* Frontends, integrations, workflows, and agents use contracts rather than shared tables.
* Failure removes personalization before it weakens privacy or truthfulness.
* Handoffs preserve evidence without exposing unnecessary content.
* External CRM synchronization never becomes an ungoverned authority loop.
* Consequential actions revalidate current state in the owning domain.

