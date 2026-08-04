# ARCH-023-03 — Organizations, Contacts & Relationships

**Document ID:** ARCH-023-03

**Parent Document:** ARCH-023 — Customer & Relationship Management

**Status:** Draft

---

# Purpose

This chapter defines business-customer organizations, contacts, accounts, households, representatives, relationship types, ownership, validity, and cross-domain references.

---

# Organization Boundary

ARCH-022 defines identity organizations, workforce teams, tenant membership, and access. ARCH-023 defines organizations as customers or parties in business relationships.

A company may therefore be both:

* An identity organization whose members authenticate and receive access under ARCH-022
* A customer organization receiving products or services under ARCH-023

These are linked concepts with different lifecycle and authority. One never automatically creates the other.

---

# Organizational Customer Model

An organizational customer may contain:

* Legal and trading-name references
* Business identifiers with jurisdiction and verification metadata
* Parent, subsidiary, branch, franchise, or affiliate relationships
* Service and billing account references
* Authorized and operational contacts
* Contract, entitlement, or partner references
* Communication preferences and restrictions
* Relationship owner and service tier
* Effective, suspended, former, and retained states

Financial accounts, contracts, and entitlements remain authoritative in their respective domains.

---

# Contact Roles

| Role | Purpose | Typical limits |
| --- | --- | --- |
| Primary contact | General relationship coordination | No automatic transaction authority |
| Authorized representative | Acts for a defined person or organization | Scope, evidence, and expiry required |
| Billing contact | Receives approved financial communications | Cannot alter payment or settlement state |
| Service contact | Coordinates delivery or support | Restricted to assigned service context |
| Emergency contact | Used for a defined safety purpose | Not a general customer proxy |
| Technical contact | Coordinates integration or operation | No customer-data access without grant |
| Companion or participant | Associated with an industry transaction | Does not inherit the primary customer's authority |

Contact roles are relationship records, not permission shortcuts.

---

# Relationship Record

Every material relationship includes:

* Relationship identifier and type
* Source and target party references
* Tenant and business scope
* Source system and evidence
* Business purpose
* Owner or steward
* Effective and expiry times
* Status and reason
* Delegation or authorization reference where applicable
* Disclosure and retention classification

Relationship types are registered and versioned. Extensions may add industry relationships without changing shared meanings.

---

# Household and Group Context

Households, travel parties, buying groups, or service cohorts may coordinate shared experiences. Group membership is explicit, scoped, and time bounded.

Shared context does not imply shared visibility. Each participant's personal attributes, consent, transactions, and messages remain protected. A primary booker or group coordinator receives only authority granted by policy or explicit delegation.

---

# Representative Authority

Representative authority is evaluated using ARCH-022 delegation and authorization. ARCH-023 records the business relationship and evidence reference.

For the hospitality reference, an adult booker, primary guest, companion, property representative, and authorization-letter subject remain distinct. Guest identifiers needed for property authorization are processed for that purpose only. They are not added to general prompts, unrestricted customer notes, marketing segments, or global learning material.

---

# Relationship Ownership

Relationship ownership assigns accountability for service coordination, not unrestricted data possession. Owners may be a tenant team, role, queue, or approved partner.

Ownership changes preserve history and trigger review of assignments, open work, access, preferences, and customer notifications where required.

---

# Relationship Events

Representative events include:

* CustomerRelationshipStarted
* CustomerRelationshipChanged
* ContactRoleAssigned
* ContactRoleExpired
* RepresentativeAuthorityLinked
* RelationshipOwnershipTransferred
* CustomerRelationshipSuspended
* CustomerRelationshipEnded

Events contain stable references and minimum necessary attributes. Sensitive evidence is retrieved from its authority only by permitted consumers.

---

# Invariants

* Business relationship does not create login or access rights.
* Organization hierarchy does not imply unrestricted child or parent data visibility.
* A contact role has explicit scope, source, validity, and owner.
* Group membership never waives individual consent or privacy.
* Industry-specific relationships remain extension contracts.
* Relationship termination triggers access, engagement, retention, and workflow review.

