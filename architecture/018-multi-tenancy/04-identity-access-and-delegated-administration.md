# ARCH-018-04 — Identity, Access, and Delegated Administration

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-04

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines how identities acquire, exercise, delegate, and lose authority within XeniosAI tenant and property boundaries.

It applies the security architecture to tenant membership, federation, workload identity, tenant selection, authorization, delegated administration, privileged support, cross-tenant capabilities, and access assurance.

---

# Access Principles

* Authentication establishes identity, not tenant authority.
* Tenant access requires a current membership or workload binding.
* Property scope narrows tenant authority.
* Authorization evaluates actor, action, resource, tenant, property, purpose, entitlement, and conditions.
* Delegation may preserve or narrow authority; it cannot expand it.
* Administrative access is separate from ordinary business access.
* Platform operators have no implicit right to tenant content.
* Cross-tenant access uses dedicated capabilities and enhanced evidence.
* Missing or ambiguous scope fails closed.
* Access is revoked when membership, policy, risk, or tenant lifecycle changes.
* AI agents and workflows receive bounded delegated authority, never ambient authority.

---

# Identity Categories

XeniosAI recognizes:

* Human end users
* Tenant administrators
* Property administrators
* Tenant staff and operators
* Guests or customer identities
* Partner and supplier identities
* Workload and service identities
* Integration identities
* Workflow execution identities
* AI agent execution identities
* Platform operator identities
* Emergency-access identities

Each category has explicit credential, lifecycle, authentication, delegation, and evidence requirements.

---

# Separation of Identity and Membership

An identity represents a person or workload. A tenant membership represents an authorized relationship between that identity and one tenant.

One identity may hold:

* No tenant membership
* One tenant membership
* Multiple independent tenant memberships
* A platform role without ordinary tenant membership

Compromise or revocation of one membership should not silently modify unrelated memberships unless the identity itself is disabled for a justified reason.

---

# Tenant Membership Model

A membership records:

* Membership identifier
* Identity reference
* Tenant identifier
* Permitted property scope
* Roles and attributes
* Delegating authority
* Purpose or business relationship
* Valid-from and expiry times
* Conditions and risk constraints
* Status and revocation reason
* Source and approval evidence

Membership is not embedded permanently in user profile data. It is a governed relationship with an independent lifecycle.

---

# Membership Lifecycle

The membership lifecycle includes:

1. Requested or invited
2. Identity verified
3. Approved
4. Active
5. Changed or recertified
6. Restricted
7. Suspended
8. Revoked or expired

High-risk roles may require dual approval, stronger authentication, shorter validity, and periodic recertification.

Invitations are tenant bound, time limited, single purpose, and safe against forwarding or use by an unintended identity.

---

# Federation

A tenant may federate an external identity provider through a tenant-specific trust configuration.

Federation requires:

* Tenant-owned trust relationship
* Approved issuer and audience
* Verified signing and encryption configuration
* Attribute and group mapping
* Provisioning and deprovisioning model
* Authentication assurance requirements
* Failure and recovery procedures
* Monitoring and certificate or key rotation

External claims are inputs to validation. They do not directly create platform roles or tenant ownership.

The same external identifier from different issuers is treated as different identity evidence.

---

# Just-in-Time and Pre-Provisioned Access

Pre-provisioned membership is preferred for privileged or sensitive roles.

Just-in-time membership may be permitted where:

* The federation trust is approved.
* Claim mappings are bounded.
* Default roles are low privilege.
* Property scope is determinable.
* Conflicting identities are handled safely.
* Creation and use produce evidence.
* Deprovisioning is reliable.

Just-in-time provisioning must not convert an unrecognized group or missing claim into broad access.

---

# Tenant Selection

When an identity has multiple memberships, the active tenant must be explicit or uniquely resolvable from a trusted binding.

Selection controls include:

* Clear tenant and property indicators in user experiences
* Reauthorization for sensitive tenant changes
* Tenant-bound sessions or tokens
* Separation of browser-tab or client state
* Cache clearing on context changes
* Protection against stale deep links
* Audit of selection and switch activity

The platform must not select the first membership, last-used tenant, or display-name match when ambiguity could change authority.

---

# Tenant Context Claims

An internal tenant context may assert:

* Actor identity and type
* Tenant identifier
* Property identifier or approved property set
* Membership or workload-binding reference
* Roles and attributes
* Purpose
* Authentication assurance
* Entitlement references
* Tenant lifecycle state reference
* Policy decision or version
* Issuance, expiry, audience, and correlation

Context claims are minimized for each recipient, integrity protected, audience restricted, and short lived according to risk.

A client-supplied tenant header is never sufficient evidence of authority.

---

# Authorization Model

Authorization combines:

* Subject identity
* Tenant relationship
* Property relationship
* Requested operation
* Resource ownership
* Resource classification
* Role and attributes
* Business purpose
* Tenant and platform policy
* Entitlement and quota state
* Environmental and risk signals
* Tenant, property, and membership lifecycle

Authorization decisions are made at every material trust boundary. A positive gateway decision does not remove service responsibility.

---

# Resource Ownership Validation

Provider services validate that:

1. The tenant context is trusted and intended for the provider.
2. The requested resource belongs to the same tenant.
3. Any property scope matches the tenant and resource.
4. The actor is authorized for the operation and purpose.
5. The tenant, membership, resource, and entitlement are in permitted states.

Identifiers should be looked up within tenant scope. Where an identifier belongs to another tenant, error responses avoid confirming its existence.

---

# Role Model

Roles express reusable responsibility bundles, not customer-specific code paths.

Reference role categories include:

* Tenant owner
* Tenant administrator
* Tenant auditor
* Portfolio operator
* Property administrator
* Property staff
* Integration administrator
* Knowledge curator
* Workflow administrator
* Agent administrator
* Billing administrator
* Read-only support participant

Roles are combined with attributes and policy. A role name alone is not a complete authorization decision.

---

# Property-Scoped Access

A membership may grant access to:

* One property
* An explicit set of properties
* A governed organizational unit
* All current properties under an approved portfolio role

Dynamic property sets require careful semantics. The policy must state whether newly added properties are included automatically.

Property administrators cannot assign tenant-wide authority unless separately delegated.

---

# Delegated Administration

Tenant administrators may be delegated responsibility for:

* Membership invitations and revocation
* Property-scoped role assignment
* Tenant and property configuration
* Federation mappings within approved constraints
* Integration connection administration
* Feature and quota allocation within purchased limits
* Knowledge-source and workflow administration
* Tenant-local evidence review

Delegated administrators cannot:

* Change tenant identity or platform ownership records
* Weaken mandatory platform policy
* Access another tenant
* Grant roles they do not possess authority to delegate
* Modify immutable evidence
* Create unapproved cross-tenant relationships
* Change dedicated infrastructure outside approved lifecycle processes

---

# Delegation Rules

Every delegation records delegator, delegate, tenant, property scope, allowed roles, conditions, validity, approval, and evidence.

Delegation follows these rules:

* The delegator must possess delegable authority.
* The grant cannot exceed the delegator's scope.
* Non-delegable duties remain non-delegable.
* Expiry cannot exceed the parent grant.
* Revoking a parent grant invalidates dependent grants.
* Sensitive combinations are prevented through segregation-of-duties policy.
* Delegation chains are bounded and inspectable.

---

# Segregation of Duties

Examples of duties that may require separation include:

* Requesting and approving privileged access
* Configuring and validating federation
* Creating and approving payment-related integrations
* Changing retention policy and approving deletion
* Initiating and approving tenant export
* Modifying quotas and approving commercial adjustments
* Developing and approving an extension
* Executing and reviewing emergency access

Conflicts may be prevented, approved as time-bound exceptions, or detected for review according to risk.

---

# Workload and Service Identity

Services and automated workloads use non-human identities with:

* Explicit owning team
* Defined tenant or platform scope
* Least-privilege operations
* Short-lived credentials where practical
* Audience and environment restrictions
* Rotation and revocation
* Deployment provenance
* Observable use

A platform service identity is not automatically permitted to read tenant content. It receives capability-specific access at execution time.

---

# Integration Identity

Each tenant integration has a tenant-bound connection and credential reference.

Controls include:

* Tenant-specific authorization and consent
* Provider account mapping
* Secret isolation
* Allowed operations and data classes
* Network restrictions where required
* Rate limits and expiry
* Callback validation
* Rotation, suspension, and revocation
* Delivery and access evidence

Shared partner credentials require a separately approved broker model that still enforces tenant ownership on every exchange.

---

# Workflow and Agent Authority

Workflow and agent executions receive delegated authority derived from the initiating actor, workflow definition, tenant policy, and approved service identity.

Execution authority includes:

* Tenant and property scope
* Permitted tools and operations
* Purpose
* Data classifications
* Resource and time limits
* Human approval requirements
* Expiry and revocation behavior

Child workflows and sub-agents may only preserve or narrow this authority. Stored workflow state or memory is not an authorization credential.

---

# Platform Administration

Platform administration is separated into control-plane duties such as service operation, tenant lifecycle, security response, and infrastructure maintenance.

Standing platform access to tenant content is minimized. Administrative tools should expose metadata and diagnostics without content wherever possible.

Platform roles are scoped by environment, capability, region, function, and time. Production access is distinct from development and test access.

---

# Assisted Support Access

Support access uses a controlled session rather than hidden impersonation.

A support session records:

* Support actor
* Tenant and property scope
* Ticket or incident reference
* Business purpose
* Approved capabilities
* Consent or approval where required
* Start, expiry, and termination
* Actions and data classes accessed
* Redaction and export controls
* Review outcome

The user interface must clearly distinguish support identity from the tenant identity being assisted.

---

# Emergency Access

Emergency access is permitted only for a defined urgent risk where ordinary access cannot address the harm in time.

It requires:

* Strong authentication
* Explicit tenant and capability scope
* Justification and incident reference
* Short duration
* Enhanced monitoring
* Prohibition on avoidable bulk access
* Immediate revocation after use
* Independent post-event review

Emergency access must not become a routine support path.

---

# Cross-Tenant Capabilities

Legitimate platform functions may require limited cross-tenant processing, such as security detection, regulatory reporting, platform reliability, or anonymized benchmarking.

Such functions require:

* Separate workload identity
* Explicit platform policy
* Approved purpose and legal basis
* Minimal data scope
* Strong segregation from tenant-facing APIs
* Aggregation or de-identification where appropriate
* Enhanced telemetry and evidence
* Periodic access review

Tenant administrators cannot grant cross-tenant platform authority.

---

# Session and Token Boundaries

Sessions and tokens are:

* Bound to an intended tenant and audience
* Bound to property scope where required
* Short lived according to risk
* Invalidated or re-evaluated after critical lifecycle change
* Protected from use across environments
* Revocable for incidents and offboarding

Refresh operations revalidate identity, membership, tenant state, and policy. Refresh cannot preserve revoked authority indefinitely.

---

# Caching Authorization State

Authorization caches must include tenant, property, subject, resource or policy scope, version, and expiry in their key and value semantics.

Caches cannot:

* Reuse one tenant's decision for another
* Turn an unavailable policy service into broad allow behavior
* Outlive critical revocation requirements
* Hide the policy version used

High-risk decisions may require fresh evaluation or revocation-aware cache invalidation.

---

# Access Lifecycle Triggers

Access is re-evaluated when:

* Tenant state changes
* Property ownership changes
* Membership changes or expires
* Federation trust changes
* Role or policy changes
* Entitlement changes
* Risk or device posture changes
* Integration consent is revoked
* Workflow or agent execution ends
* Incident containment is activated

Propagation objectives are defined according to risk. Critical revocation must not depend solely on long-lived caches.

---

# Privacy and Data Minimization

Identity and access decisions disclose only the information required by the provider.

Tenant membership directories, role assignments, support activity, authentication telemetry, and federation attributes are protected tenant data.

Tenant administrators see only identities and evidence they are authorized to manage. Platform operators see tenant content only through approved, purpose-bound access.

---

# Observability and Evidence

Access evidence includes:

* Authentication result and assurance
* Tenant-selection and context issuance
* Authorization decision and policy version
* Membership and delegation changes
* Privileged and support sessions
* Emergency access
* Cross-tenant processing
* Federation configuration changes
* Credential issuance, rotation, and revocation
* Denied and suspicious cross-tenant attempts

Logs avoid secrets and unnecessary personal or tenant content while preserving accountability.

---

# Access Review and Certification

Reviews assess:

* Tenant owners and administrators
* High-risk property roles
* Dormant memberships
* Non-expiring grants
* Delegation chains
* Conflicting duties
* Workload and integration identities
* Platform support access
* Cross-tenant capabilities
* Federation mappings

Findings have owners, severity, due dates, and remediation evidence. Revocation is automated where policy safely permits.

---

# Failure Handling

Access fails closed when:

* Tenant selection is ambiguous
* Membership cannot be validated
* Tenant or property relationship conflicts
* Resource ownership is unknown
* Federation trust is invalid
* Policy or critical revocation state is unavailable
* A token audience or tenant does not match the provider
* Delegation exceeds its parent authority

Error responses do not reveal another tenant's existence, identifiers, membership, or resources.

---

# Testing Requirements

Testing includes:

* Multi-tenant positive and negative authorization
* Multi-membership tenant switching
* Property-set and portfolio access
* Role and attribute combinations
* Delegation depth and revocation
* Federation claim manipulation
* Token audience and tenant mismatch
* Cache isolation and revocation
* Workload, workflow, and agent scope
* Support and emergency access
* Cross-tenant API segregation
* Tenant suspension and retirement enforcement

Tests must attempt direct-object reference, forged context, confused-deputy, replay, stale membership, and privilege-escalation scenarios.

---

# Architecture Decisions

* Identity and tenant membership are separate records and lifecycles.
* Tenant selection is explicit when more than one valid scope exists.
* Provider services validate resource ownership and authorization.
* Tenant context is integrity protected, audience restricted, and minimized.
* Delegation cannot expand authority and is transitively revocable.
* Property-wide and portfolio-wide access are explicit grants.
* Platform support uses scoped sessions, not invisible impersonation.
* Emergency access is temporary, monitored, and independently reviewed.
* Cross-tenant capabilities are separate from ordinary tenant interfaces.
* Workflow and agent delegation cannot create ambient authority.

---

# Validation Criteria

This architecture is satisfied when:

* Every tenant access can be traced to a current membership or workload binding.
* Multi-tenant identities cannot accidentally reuse session or cache state across tenants.
* Provider services verify tenant and property ownership.
* Delegated grants are bounded, expiring, and revocable.
* Tenant administrators cannot weaken platform controls or access another tenant.
* Support and emergency activity retains the true operator identity.
* Cross-tenant processing is segregated, minimized, and evidenced.
* Tenant lifecycle and membership changes revoke access within defined objectives.
* Negative isolation and escalation tests pass.

---

# Summary

Tenant access in XeniosAI is built from authenticated identity, explicit membership or workload binding, verified tenant and property context, resource ownership, purpose, policy, entitlement, and current lifecycle state.

Delegated administration gives tenants meaningful control without transferring platform authority. Support, emergency, workflow, agent, integration, and cross-tenant access use distinct, bounded, observable mechanisms that preserve the tenant boundary and make every exercise of authority attributable.
