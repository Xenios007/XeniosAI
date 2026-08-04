# ARCH-023-07 — Data Quality, Resolution & Portability

**Document ID:** ARCH-023-07

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines customer-data quality, record resolution, linkage, merge and split, correction, provenance, retention, portability, deletion, and migration controls.

---

# Data Quality Dimensions

Customer data is assessed by:

* Accuracy against an authoritative or declared source
* Completeness for a defined purpose
* Validity against contract and business rules
* Freshness relative to use
* Consistency across governed references
* Uniqueness within the permitted matching scope
* Provenance and evidence completeness
* Consent and retention fitness

A generic completeness score does not justify collecting more data than the purpose requires.

---

# Resolution Boundary

Customer resolution proposes whether records may refer to the same party. It does not authenticate a person or grant access.

Resolution uses tenant-scoped, policy-approved signals such as verified contact references, approved external identifiers, declared relationships, and deterministic source links. Names, free-text similarity, model embeddings, shared devices, or behavioral resemblance are insufficient alone for automatic merge.

Cross-tenant resolution is denied by default and requires an explicitly governed platform purpose, lawful basis, isolation controls, and non-disclosing results.

---

# Match Outcomes

| Outcome | Action |
| --- | --- |
| No match | Create or retain separate record |
| Possible match | Queue review or request verification |
| Confirmed link | Add reversible linkage with evidence |
| Confirmed duplicate | Execute governed merge plan |
| Confirmed distinct | Add non-match evidence to prevent recurrence |
| Disputed | Restrict automated use pending resolution |

Thresholds are versioned by use case and risk. Automated high-confidence suggestions remain reversible.

---

# Merge and Split

A merge plan identifies survivor, aliases, attribute-level winners, conflicts, relationship handling, consent handling, downstream references, retention rules, and rollback evidence.

Consent is never broadened during merge. The most restrictive applicable state is preserved until conflicts are resolved. Transaction, case, conversation, and identity records remain in their owning systems and update their customer reference through contracts.

A split restores original records, reassigns approved relationships, corrects downstream projections, invalidates affected context caches, and records cause and impact.

---

# Correction and Dispute

Customers and authorized stewards can challenge inaccurate data. A correction process records disputed attribute, asserted value, source, evidence, status, owner, decision, rationale, and propagation completion.

While disputed, the attribute is labeled or restricted according to risk. Derived signals and segments that depend on it are reevaluated. Corrections do not rewrite immutable audit evidence; they append the authoritative superseding state.

---

# Provenance Model

Every material attribute records source type, source reference, collection or derivation time, actor, purpose, transformation, quality status, version, and retention class.

Derived values additionally record method, model or rule version, input categories, confidence, explanation reference, and expiry. Imported values retain source-system lineage through transformations and migrations.

---

# Retention and Deletion

Retention is determined per data class, purpose, tenant policy, relationship status, legal obligation, and jurisdiction. Expired material is deleted, anonymized, aggregated, or placed under approved legal hold.

Deletion workflows cover primary records, replicas, caches, indexes, exports, attachments, derived features, audience snapshots, test data, and approved learning datasets. Completion evidence identifies exceptions and scheduled backup expiry without restoring deleted data to active use.

---

# Portability

Portable exports use documented, machine-readable, vendor-neutral packages containing permitted profile, relationship, preference, consent, and history data plus schema version and provenance.

Exports exclude secrets, internal security signals, other parties' protected data, privileged notes, and material restricted by law or contract. Export generation requires identity assurance, authorization, minimization, secure delivery, expiry, and audit evidence.

---

# Migration and Exit

Imports validate schema, encoding, identifiers, consent semantics, tenant scope, provenance, duplicate strategy, and reconciliation totals. Unmapped fields enter an exception report rather than disappearing silently.

Provider exit requires complete export, checksums, count reconciliation, relationship integrity checks, sampling, cutover plan, rollback window, and verified deletion from the retired provider.

---

# Invariants

* Record similarity is not identity proof.
* Merges are evidence based, conflict aware, and reversible.
* Consent is never broadened through matching, import, or merge.
* Corrections propagate to segments, context, search, analytics, and learning use.
* Export and deletion include downstream projections and derived artifacts.
* Portability never weakens tenant isolation or third-party privacy.

