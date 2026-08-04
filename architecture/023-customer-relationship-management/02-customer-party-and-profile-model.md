# ARCH-023-02 — Customer, Party & Profile Model

**Document ID:** ARCH-023-02

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines the core customer, party, profile, contact-point, role, relationship, and lifecycle concepts used across industries.

---

# Conceptual Model

| Concept | Meaning |
| --- | --- |
| Party | A person or organization that may participate in business relationships |
| Customer | A party in a current, prospective, former, or context-specific customer relationship |
| Customer profile | Governed projection of customer facts and relationship context |
| Customer account | Business grouping for service or commercial coordination, not an authentication account |
| Contact point | Addressable channel such as email, telephone, messaging handle, or postal address |
| Role | Contextual participation such as guest, renter, buyer, requester, or representative |
| Relationship | Typed connection among parties, tenants, accounts, or business objects |
| External reference | Stable link to a record owned by another domain or system |

Party is intentionally narrow. It does not absorb reservations, orders, properties, resources, cases, payments, conversations, or identity credentials.

---

# Customer Profile Composition

A profile may contain:

* Tenant-scoped customer identifier
* Party type and lifecycle status
* Display and preferred names
* Verified and unverified contact-point references
* Locale, language, timezone, and accessibility preferences
* Relationship and role references
* Consent and restriction references
* Interaction and service-history summaries
* Segment and program-membership references
* Source, provenance, quality, freshness, and retention metadata

Sensitive details are separated into controlled attribute sets. Consumers receive projections, not unrestricted aggregate serialization.

---

# Identity Linkage

A customer can exist without an authenticated identity, such as an anonymous inquiry or invited guest. A verified identity can link to multiple customer relationships across tenants, subject to isolation and policy. A customer profile can also link to multiple identities when approved account recovery, household, representative, or organizational scenarios require it.

Linkage records include:

* Customer reference
* Identity reference
* Link type and assurance
* Tenant and relationship scope
* Evidence and provenance
* Effective and expiry times
* Verification and review status
* Revocation reason

ARCH-022 authenticates identities. ARCH-023 never stores reusable credentials or infers a link from name similarity alone.

---

# Contact Points

Each contact point records type, normalized value or protected reference, verification state, source, purpose restrictions, deliverability status, validity interval, and preferred-use status.

Verification means control of a channel was demonstrated at a point in time. It does not establish legal identity, customer authority, consent for marketing, or permanent deliverability.

Contact-point changes generate versioned events so engagement, workflow, and suppression services can reconcile their projections.

---

# Attribute Classification

| Attribute class | Handling |
| --- | --- |
| Declared | Captured directly from customer or authorized representative |
| Verified | Confirmed by an approved evidence process |
| Operational | Produced by a deterministic business service |
| Imported | Received from an approved external source |
| Derived | Computed with method, confidence, validity, and expiry |
| Disputed | Retained under restriction while correction is resolved |
| Restricted | Unavailable except for approved legal or operational purpose |

No transformation may erase the attribute class or provenance.

---

# Profile Lifecycle

1. A prospective or anonymous record is created for an explicit purpose.
2. Minimum attributes and provenance are captured.
3. Contact points or identity links are verified where needed.
4. A customer relationship becomes active through a valid business event.
5. Preferences, roles, and relationships evolve through governed updates.
6. Dormant or former status reduces processing and access.
7. Retention, restriction, portability, or deletion obligations are evaluated.
8. Records are archived, anonymized, or deleted with evidence.

Lifecycle status does not override consent, authorization, legal hold, or tenant isolation.

---

# Aggregate Boundaries

Customer Profile protects core profile consistency. Relationship protects typed association and validity. Contact Point protects normalization, verification, and preference state. Consent remains owned by its consent authority and is referenced. Segment Membership and Program Membership remain separate aggregates because their rules and expiry differ.

Cross-aggregate changes use commands, events, and workflows rather than distributed database transactions.

---

# Invariants

* Every profile belongs to exactly one tenant scope unless it is an explicitly governed platform reference.
* A person and an organization cannot silently change party type.
* Contactability, identity verification, authorization, and consent are separate states.
* Derived attributes carry method, version, confidence, and expiry.
* Profile merges preserve source identifiers and are reversible.
* Industry roles have bounded validity and do not grant platform-wide authority.

