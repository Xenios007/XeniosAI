# ARCH-018-05 — Data Isolation, Residency, and Portability

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-05

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines how XeniosAI preserves tenant and property ownership across data creation, storage, access, processing, replication, indexing, analytics, backup, export, migration, retention, erasure, and recovery.

It also defines how residency and sovereignty obligations influence placement and how tenant portability is achieved without weakening security, privacy, integrity, or historical accountability.

---

# Data Isolation Principles

* Tenant ownership is explicit for every tenant-scoped data asset.
* Every provider enforces ownership at its trust boundary.
* Isolation includes primary and derived data.
* Shared storage requires tenant-aware keys, queries, constraints, and tests.
* Placement and ownership are separate concepts.
* Residency applies to replicas, backups, indexes, telemetry, and processors, not only primary stores.
* Encryption supports isolation but does not replace authorization.
* Data minimization applies to copies, exports, logs, and AI context.
* Retention and legal hold are policy driven and traceable.
* Erasure propagates to eligible derivatives.
* Portability uses governed manifests and documented formats.
* Restore and migration preserve tenant boundaries and business time.

---

# Data Scope

This architecture applies to:

* Transactional records
* Reference and master data
* Documents, media, and files
* Configuration and metadata
* Caches and session state
* Search and secondary indexes
* Graph relationships and embeddings
* Knowledge artifacts and representations
* Durable and transient memory
* Conversation and workflow state
* AI inputs, outputs, evaluations, and tool results
* Events, messages, retries, and dead letters
* Integration payloads and delivery records
* Analytics and reporting data
* Logs, traces, metrics, alerts, and audit evidence
* Backups, snapshots, replicas, archives, and exports

---

# Data Ownership Model

Data is classified by scope:

| Scope | Ownership meaning |
|---|---|
| Platform | Governed common data not owned by an individual tenant |
| Tenant | Owned by or processed exclusively for one tenant |
| Property | Owned within one tenant and restricted to a property or approved property set |
| Shared by contract | Explicitly exchanged between defined parties for a governed purpose |
| De-identified aggregate | Derived under approved controls so tenant or person re-identification risk is acceptably bounded |

Scope classification is explicit. Data does not become platform data merely because it is technically stored in a shared service.

---

# Tenant Ownership Attributes

Tenant-scoped records carry a stable tenant identifier or inherit ownership through a relationship that is enforced and efficient to validate.

Ownership attributes must be:

* Set at creation from trusted context
* Immutable or changed only through a governed transfer
* Included in authorization and primary access paths
* Preserved in events and derivatives
* Available to retention, export, and erasure processes
* Protected from client-controlled reassignment

Property-scoped records additionally carry or resolve an authoritative property relationship within the tenant.

---

# Shared Relational Storage

Approved patterns may include tenant-aware tables in shared schemas.

Required controls include:

* Tenant key on scoped records
* Tenant-inclusive uniqueness where business semantics require it
* Tenant-inclusive foreign-key or equivalent integrity strategy
* Query construction that binds tenant predicates
* Prevention of mass assignment of ownership fields
* Data-layer policy or guardrails where supported
* Safe administrative and migration tooling
* Multi-tenant negative tests
* Tenant-aware backup, restore, and export strategy

Application code must not depend on developers remembering to add an optional filter.

---

# Partitioned and Dedicated Storage

Partitioned models may use separate schemas, databases, shards, collections, indexes, buckets, or namespaces.

Dedicated models may allocate tenant-specific data services or accounts.

Both require:

* Trusted routing from tenant placement state
* No fallback to a default tenant partition
* Tenant-aware credentials and policy
* Inventory and lifecycle automation
* Capacity and recovery controls
* Application-level ownership validation
* Migration and exit procedures

Physical separation reduces some risks but does not establish actor authorization.

---

# Object and File Storage

Tenant files use tenant-bound object keys or dedicated containers according to the isolation profile.

Controls include:

* Server-generated ownership metadata
* Non-guessable references
* Authorization before upload, download, listing, or deletion
* Tenant-scoped signed access with short expiry
* Malware and content inspection within tenant boundaries
* Encryption and key policy
* Retention and legal hold
* Derived thumbnail, transcript, and preview ownership
* Lifecycle cleanup for abandoned uploads

An object URL or storage path is not proof of authorization.

---

# Cache Isolation

Cache keys include tenant and property scope where relevant, plus resource version and authorization-sensitive dimensions.

Cache design prevents:

* Cross-tenant key collisions
* Reuse of authorization decisions across tenants
* Shared responses containing tenant-specific content
* Tenant-blind invalidation
* Stale access after suspension, transfer, or revocation

If scope cannot be established, the cache is bypassed or access fails closed. It does not use a global default entry.

---

# Search and Index Isolation

Search indexes, vector representations, and graphs preserve tenant ownership in documents, metadata, partitions, filters, and result validation.

Required safeguards include:

* Tenant-aware ingestion
* Trusted ownership metadata
* Filter enforcement independent of user query text
* Result-set ownership validation
* Tenant-aware ranking and facets
* Deletion and reindex propagation
* Index build and snapshot isolation
* Cross-tenant retrieval tests

Similarity, relevance, or graph connectivity never overrides tenant policy.

---

# Knowledge and Memory Isolation

Knowledge sources, artifacts, chunks, representations, memories, and assembled context retain tenant and property scope.

The platform prevents:

* Cross-tenant retrieval
* Global training or promotion without approved rights and governance
* Memory capture outside the permitted tenant and purpose
* Reuse of tenant prompts or tool results as another tenant's context
* Retention of representations after eligible source deletion

Tenant-owned knowledge may be promoted to a platform artifact only through explicit rights, provenance, review, sanitization, and approval.

---

# Events and Messaging Data

Tenant events contain integrity-protected scope metadata and only the business data needed by authorized consumers.

Controls include:

* Tenant-aware topics, partitions, subscriptions, or consumer policy
* Consumer-side context validation
* Tenant-scoped idempotency
* Tenant-safe retries and dead-letter handling
* Encryption and retention
* Replay authorization
* Redaction of secrets and unnecessary personal data

Dead-letter queues and replay tools are privileged data stores and preserve tenant ownership.

---

# Analytics and Reporting

Analytics pipelines preserve tenant identity through ingestion, transformation, storage, access, and deletion.

Tenant-facing reporting applies tenant and property policy at the semantic and query layers.

Cross-tenant analytics requires a separately approved purpose and may require aggregation, suppression, pseudonymization, or anonymization.

De-identification claims are assessed against re-identification risk, auxiliary data, group size, and output detail. Removing a display name alone is insufficient.

---

# Observability Data

Logs, metrics, traces, alerts, and profiles may contain tenant identity, resource identifiers, user data, or business activity.

Observability controls include:

* Data classification and minimization
* Tenant-safe labels and cardinality controls
* Redaction and secret filtering
* Tenant-aware access views
* Retention by data class and purpose
* Controlled cross-tenant operational analysis
* Export and deletion handling where applicable

Tenant identifiers must not be placed in public or uncontrolled telemetry dimensions.

---

# Encryption Model

Encryption protects data in transit and at rest according to classification and isolation profile.

Key patterns may include:

* Platform keys with tenant-bound encryption context
* Tenant-derived keys
* Dedicated tenant keys
* Tenant-controlled keys where supported and governed

Key design defines ownership, permitted principals, rotation, revocation, backup, recovery, audit, and tenant exit.

Key separation does not compensate for a missing authorization check, unsafe query, or mixed AI context.

---

# Secrets and Credentials

Secrets are referenced rather than copied into tenant registry, configuration, logs, workflows, or exports.

Tenant-specific integration and service credentials are isolated by tenant and environment. Access requires workload identity, purpose, and policy.

Rotation, suspension, and offboarding revoke credentials and invalidate dependent sessions or connections within defined objectives.

---

# Residency Policy

Residency policy defines where specified data may be stored, processed, replicated, backed up, observed, and supported.

A policy records:

* Applicable tenant and properties
* Data categories and classifications
* Permitted and prohibited locations
* Transfer conditions
* Approved processors and sub-processors
* Replication and backup constraints
* Support-access constraints
* Effective date and legal basis
* Exception and review requirements

Residency is evaluated during provisioning, routing, provider selection, migration, recovery, and integration.

---

# Sovereignty and Administrative Control

Sovereignty may require more than physical data location. It can constrain:

* Operator location and nationality
* Legal control of infrastructure
* Key custody
* Remote support
* Software supply chain
* Cross-border telemetry
* Disaster-recovery location
* Government access procedures

The isolation profile records which sovereignty controls apply and how they are evidenced.

---

# Placement Enforcement

Tenant placement is resolved through authoritative policy and registry state.

Providers validate:

1. Tenant and data classification
2. Requested operation
3. Approved primary and secondary locations
4. Integration or processor destination
5. Recovery and backup location
6. Current migration state

When placement is uncertain or conflicting for protected data, processing fails closed or routes to an approved containment path.

---

# Data Transfer

Transfers across services, regions, tenants, or processors require:

* Authorized source and destination
* Purpose and legal basis
* Data minimization
* Schema and classification
* Integrity and confidentiality
* Residency and processor validation
* Delivery evidence
* Retention and deletion obligations

Cross-tenant transfer is never inferred from an organizational relationship. It requires an explicit exchange contract.

---

# Retention

Retention is evaluated by record class, tenant policy, jurisdiction, contract, operational purpose, and legal hold.

Retention metadata identifies:

* Policy and version
* Trigger event
* Retention period
* Disposition action
* Hold status
* Responsible owner
* Evidence requirements

Indefinite retention is prohibited unless explicitly justified and approved.

---

# Legal Hold

Legal hold suspends ordinary disposition for identified records without restoring ordinary business access.

Hold controls include:

* Authorized request and scope
* Custodian and case reference
* Effective time
* Affected primary and derivative data
* Access restrictions
* Periodic review
* Release authorization
* Final disposition

Tenant offboarding may complete operational closure while held records remain in a restricted retained state.

---

# Erasure and Deletion Propagation

Erasure begins from an authoritative request and propagates through a data inventory or lineage-aware deletion plan.

It covers eligible:

* Primary records
* Files and temporary uploads
* Caches
* Search and vector indexes
* Knowledge representations
* Memories and conversation state
* Workflow and agent artifacts
* Analytics copies
* Integration queues
* Support artifacts
* Backups according to approved lifecycle

Providers report completion, retention, hold, failure, or exception. Silence is not evidence of deletion.

---

# Backup Isolation

Backups retain tenant ownership, classification, encryption, residency, retention, and access restrictions.

Backup design defines:

* Recovery unit
* Tenant-specific extraction capability where required
* Key dependencies
* Copy locations
* Immutability and protection
* Restore authorization
* Expiry and deletion behavior
* Test frequency

Backup access is privileged and fully evidenced.

---

# Tenant-Specific Restore

Tenant restore must not overwrite or expose another tenant.

The process includes:

1. Authorize tenant and recovery point.
2. Validate retention, transfer, and ownership history.
3. Restore to an isolated staging location where appropriate.
4. Filter and validate tenant-owned records.
5. Reconcile cross-service references and events.
6. Verify isolation, completeness, and business consistency.
7. Cut over or selectively recover.
8. Record evidence and remove temporary data.

Shared-store point-in-time restore may require replay or merge rather than wholesale replacement.

---

# Portability Model

Portability enables an authorized tenant to receive or move its data and configuration through documented formats and manifests.

A portability package may include:

* Tenant and property metadata
* Domain data by published schema
* Documents and media
* Configuration and branding
* Knowledge sources and provenance
* Exportable workflow definitions
* Integration mapping metadata without secrets
* Audit and usage evidence permitted by policy
* Manifest, checksums, versions, and exclusions

Internal implementation details, platform secrets, protected models, another tenant's data, and restricted third-party content are excluded.

---

# Export Architecture

Exports use asynchronous, resumable jobs for material datasets.

Controls include:

* Strong requester authorization
* Step-up authentication for sensitive exports
* Property and date scope
* Approval for bulk or regulated data
* Snapshot or business-time consistency
* Format and schema version
* Encryption and integrity manifest
* Short-lived retrieval authorization
* Download and expiry evidence
* Secure cleanup

Export jobs have quotas and do not degrade other tenants' service.

---

# Migration Architecture

Migration between placements follows:

1. Inventory and classify source data.
2. Provision approved target controls.
3. Copy immutable or historical data.
4. Synchronize active changes.
5. Validate counts, hashes, references, policy, and performance.
6. Coordinate a write boundary or dual-processing period.
7. Update trusted routing atomically or through versioned convergence.
8. Reconcile source and target.
9. Retain rollback for an approved period.
10. Delete or retain source according to policy.

Migration evidence includes exceptions and reconciliation results, not only a successful copy command.

---

# Data Lineage and Inventory

The platform maintains sufficient lineage to answer:

* Which services hold tenant data?
* Which derivatives came from which sources?
* Where is the data placed and replicated?
* Which processors received it?
* Which retention and residency policies apply?
* Which exports, restores, migrations, or deletions affected it?

Lineage granularity is proportional to risk and must support tenant exit, incident response, audit, and data-subject obligations.

---

# Operational Controls

Operations monitors:

* Placement and residency drift
* Missing tenant ownership attributes
* Cross-tenant authorization denials
* Partition routing mismatches
* Encryption and key status
* Backup coverage and restore tests
* Retention and deletion backlog
* Export and migration progress
* Orphaned or retired-tenant resources

Automated repair is used only where the safe desired state is unambiguous.

---

# Testing and Assurance

Required tests include:

* Cross-tenant CRUD attempts
* Identifier enumeration and direct-object reference
* Join, bulk, and administrative query isolation
* Cache collision and invalidation
* Search, vector, and graph filtering
* Event routing, retry, and replay
* Knowledge, memory, workflow, and AI context isolation
* Analytics output and de-identification
* Residency and processor routing
* Export completeness and exclusion
* Erasure propagation
* Tenant-specific restore
* Placement migration and rollback

Production assurance reconciles inventory, placement, retention, keys, backups, and access evidence.

---

# Failure Handling

Data access or movement fails closed when ownership, tenant context, placement, residency, encryption, or transfer authority cannot be established.

Suspected cross-tenant contamination triggers:

* Immediate containment
* Preservation of evidence
* Impact analysis by tenant and data class
* Security and privacy incident processes
* Correction of affected indexes, caches, messages, or derivatives
* Required tenant and regulatory communication
* Control remediation and retesting

Data is not silently reassigned to make an inconsistency disappear.

---

# Architecture Decisions

* Tenant ownership is explicit and preserved in primary and derived data.
* Shared storage requires structural safeguards and provider validation.
* Physical isolation never removes application authorization.
* Search, knowledge, memory, analytics, telemetry, and backups are within the isolation boundary.
* Residency applies to processing, replication, backup, support, and processors.
* Encryption and authorization are complementary controls.
* Retention and legal hold are explicit policies with evidence.
* Erasure requires provider acknowledgment and derivative cleanup.
* Portability uses versioned manifests and documented formats.
* Tenant-specific restore and migration must preserve other tenants.

---

# Validation Criteria

This architecture is satisfied when:

* Every tenant data asset has an ownership and placement strategy.
* Provider access validates tenant and property ownership.
* Shared-store safeguards prevent omitted-scope access.
* Secondary indexes, caches, messages, knowledge, and memory preserve scope.
* Actual placement reconciles with residency policy.
* Backup and restore controls maintain isolation.
* Export packages are authorized, complete, versioned, and integrity protected.
* Erasure produces accountable status across authoritative and derived providers.
* Migration is reversible during an approved window and fully reconciled.
* Cross-tenant negative tests cover every critical data path.

---

# Summary

XeniosAI treats tenant data isolation as an end-to-end information lifecycle responsibility.

Ownership is preserved across shared or dedicated stores, caches, messages, indexes, analytics, AI context, observability, backups, exports, and derivatives. Residency governs every location and processor, while retention, legal hold, erasure, portability, restore, and migration provide controlled lifecycle outcomes without compromising another tenant.
