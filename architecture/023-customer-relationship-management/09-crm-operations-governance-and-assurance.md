# ARCH-023-09 — CRM Operations, Governance & Assurance

**Document ID:** ARCH-023-09

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines the operating model, ownership, service levels, observability, governance, incidents, assurance evidence, and controlled change for customer and relationship capabilities.

---

# Operating Roles

| Role | Accountability |
| --- | --- |
| Customer-domain owner | Capability outcomes, boundaries, roadmap, and policy alignment |
| Data owner | Permitted use, classification, retention, portability, and risk acceptance |
| Data steward | Quality, duplicates, corrections, relationship integrity, and exceptions |
| Service owner | Availability, performance, capacity, releases, and recovery |
| Privacy and compliance | Purpose, consent, rights, evidence, and regulatory interpretation |
| Security | Access controls, threat monitoring, incident response, and assurance |
| Tenant administrator | Tenant configuration and delegated stewardship within bounds |
| Engagement owner | Approved audience and service-use outcomes |
| AI governance | Derived-signal and learning-use controls with ARCH-028 and ARCH-029 |

Separation of duties applies to bulk export, irreversible deletion, high-impact merges, policy exceptions, and privileged support access.

---

# Service Objectives

Objectives cover:

* Customer-context availability and latency
* Profile and relationship command success
* Event propagation and projection freshness
* Consent withdrawal and suppression propagation
* Correction, export, and deletion completion
* Duplicate-review and merge turnaround
* Search and timeline policy consistency
* Recovery-point and recovery-time objectives

Business measures are segmented by tenant, channel, purpose, and customer class without exposing personal data in operational telemetry.

---

# Observability

Telemetry records service, operation, tenant reference, purpose, actor class, policy decision, data classification, source freshness, result category, latency, and correlation identifier.

Logs and traces exclude raw customer messages, identity documents, contact values, payment data, access tokens, and unrestricted profile payloads. Authorized evidence links replace copied sensitive content.

---

# Quality Indicators

| Indicator | Meaning |
| --- | --- |
| Verified-contact freshness | Age and validity of approved contact points |
| Duplicate rate | Suspected or confirmed duplicate population |
| Merge reversal rate | Incorrect resolution or process weakness |
| Consent propagation lag | Time until dependent uses honor changed consent |
| Correction completion | Time and coverage of corrected projections |
| Orphan reference rate | Customer references no longer resolving to authorities |
| Context denial rate | Denied or minimized requests by policy reason |
| Stale projection rate | Customer views outside freshness objective |

Metrics drive investigation and improvement, not automatic weakening of controls.

---

# Incident Classes

Customer incidents include cross-tenant disclosure, unauthorized profile access, incorrect merge, consent or suppression failure, stale consequential context, deletion failure, export to wrong recipient, corrupted relationship data, and integration replay defects.

Response prioritizes containment, access revocation, processing restriction, evidence preservation, source-of-truth validation, customer and authority notification where required, correction propagation, safe recovery, and post-incident action.

Incorrect merges receive a dedicated split and downstream-reconciliation procedure.

---

# Governance Catalog

Governed artifacts include:

* Customer and relationship schemas
* Attribute authority and classification registry
* Relationship-type catalog
* Consent purpose and processing-use catalog
* Segment and derived-signal registry
* Retention and deletion schedule
* Resolution rules and thresholds
* External-system mappings
* Context projection policies
* Quality objectives and exception records

Every artifact has owner, version, status, consumers, change history, review schedule, and retirement plan.

---

# Change Control

Changes affecting matching, consent, retention, sensitive attributes, segmentation, or context disclosure require impact assessment, representative test data, privacy and security review, tenant-isolation tests, backward compatibility, migration, rollout, monitoring, and rollback.

Schema evolution follows additive compatibility before controlled deprecation. New optional data collection is not enabled merely because a field was added.

---

# Assurance

Assurance evidence includes contract tests, policy tests, tenant-isolation tests, consent withdrawal tests, resolution precision and reversal tests, deletion and export reconciliation, disaster-recovery exercises, access review, threat modeling, and architecture conformance.

Synthetic data is preferred in testing. Production-derived test material requires explicit approval, minimization, protection, retention, and deletion.

---

# Operational Readiness

A release is ready when ownership, dashboards, alerts, runbooks, capacity, failure modes, privacy controls, migrations, rollback, support paths, evidence capture, and recovery tests are complete.

No learning or analytical component may be promoted through a CRM deployment shortcut; ARCH-029 promotion remains independently governed.

---

# Invariants

* Sensitive data is referenced rather than copied into telemetry.
* Every governance artifact has accountable ownership and lifecycle.
* Customer rights workflows reconcile all downstream projections.
* High-impact data changes are reviewable and reversible where possible.
* Operational pressure never converts inferred data into authoritative truth.

