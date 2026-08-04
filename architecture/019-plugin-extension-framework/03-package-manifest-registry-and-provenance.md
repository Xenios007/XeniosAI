# ARCH-019-03 — Package, Manifest, Registry, and Provenance

**Architecture Domain:** Extensibility, Plugin, and Ecosystem Architecture

**Document ID:** ARCH-019-03

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines the extension supply-chain architecture: immutable packages, declarative manifests, publisher identity, dependency inventory, builds, signatures, provenance, registries, distribution, advisories, and revocation.

---

# Principles

* A published package version is immutable.
* Package identity is bound to an integrity digest.
* Manifests declare intent but confer no authority.
* Publisher identity and runtime identity are separate.
* Provenance is traceable from source through build and distribution.
* Dependencies are explicit, inspectable, and risk managed.
* Signatures prove association and integrity, not safe behavior.
* Registries are authoritative for package status.
* Distribution verifies exact digests.
* Vulnerable packages can be matched, suspended, rebuilt, and revoked quickly.
* Secrets never enter packages or provenance records.

---

# Package Model

An extension package contains:

* Executable or declarative extension assets
* Manifest
* Configuration schemas
* Contract or interface metadata
* Static resources
* License and notices
* Dependency inventory reference
* Provenance and signature references

Packages exclude tenant configuration, credentials, secrets, installation grants, runtime state, and tenant data.

---

# Immutability

Once published, a package version cannot be replaced, edited, or repointed to different content.

A correction requires a new version and digest. Registry metadata may add advisories, certification status, deprecation, or revocation without mutating the package artifact.

Immutability enables reproducible installation, compatibility testing, rollback, forensic analysis, and tenant evidence.

---

# Manifest Structure

The manifest declares:

* Extension identifier
* Package version
* Publisher identifier
* Display metadata
* Manifest schema version
* Platform and SDK compatibility
* Runtime and entry points
* Extension points implemented
* Capability requests
* Configuration schemas
* Secret-reference requirements
* Data classification and handling
* External destinations and processors
* Resource requirements
* Dependencies
* Health and lifecycle hooks
* Support, license, and rights information
* Provenance and package digest references

Unknown mandatory fields fail validation. Extensions cannot hide capability requests in executable behavior.

---

# Capability Declarations

Manifest capability requests are specific and machine interpretable.

They may declare:

* API operation and purpose
* Event type and direction
* Workflow or agent integration
* Knowledge or file access
* UI slot
* External destination
* Secret class
* Tenant storage
* Schedule
* Resource budget class

Wildcards are restricted. Runtime policy grants only the approved intersection.

---

# Data-Handling Declaration

The manifest identifies:

* Data categories requested
* Whether data is read, written, exported, or retained
* Processing purpose
* External processors
* Storage and residency needs
* Retention and deletion behavior
* Tenant portability behavior
* Model training or improvement use, if any

Undeclared data collection or transfer is a policy violation and potential incident.

---

# Configuration Schema

Configuration schemas define types, constraints, scope, defaults, sensitivity, dependencies, compatibility, and presentation hints.

Secret fields are opaque references. The schema does not request raw secret values through ordinary configuration channels.

Configuration migration between package versions is declared, testable, and reversible where practical.

---

# Entry Points

Each entry point declares:

* Extension point and contract version
* Runtime class
* Invocation mode
* Input and output schema
* Timeout and cancellation behavior
* Idempotency
* Side-effect classification
* Health behavior
* Required capabilities

Undeclared entry points are not loaded or invoked.

---

# Dependency Model

Dependencies include direct and transitive:

* Runtime libraries
* SDK components
* Platform contract versions
* Other extension packages
* Native or system components
* External services

The dependency inventory records name, version, source, digest where applicable, license, and known vulnerability status.

Floating production dependencies are prohibited. Resolution produces a lock or equivalent immutable graph.

---

# Extension Dependencies

An extension-to-extension dependency requires:

* Stable extension identity
* Compatible package range
* Visible installation plan
* Capability and data-flow review
* Independent tenant approval where required
* Lifecycle and failure behavior

Dependencies do not inherit capabilities. Each installed extension receives its own grant.

---

# Publisher Identity

Publisher verification may establish:

* Legal or organizational identity
* Authorized publishing representatives
* Signing authorities
* Domain or account ownership
* Support contacts
* Security disclosure contact
* Commercial and rights eligibility
* Current status and restrictions

Verification level aligns with publication scope and risk.

---

# Publishing Authority

Publisher accounts use strong authentication, least privilege, separation of duties, short-lived credentials where possible, and protected signing workflows.

Package publishing, marketplace listing, certification approval, and runtime installation are held by separate authorities.

Publisher compromise triggers credential revocation, package review, advisory matching, and tenant-impact assessment.

---

# Build Provenance

Provenance links:

* Source repository and revision
* Build definition
* Build environment identity
* Builder and workflow identity
* Dependencies and lock state
* Tests and scans
* Artifact digest
* Timestamp
* Publisher approval

Private source can remain protected while providing attestations sufficient for the applicable trust profile.

---

# Reproducible and Attestable Builds

Reproducible builds are preferred where practical. Where exact reproducibility is unavailable, trusted build-service attestation and isolated build controls provide accountable provenance.

Local, unaudited production publication may be prohibited for moderate-, high-, or restricted-risk packages.

---

# Supply-Chain Checks

Checks may include:

* Manifest validation
* Source and package secret scanning
* Dependency vulnerability analysis
* Malware and behavior analysis
* License and rights analysis
* Static and dynamic security testing
* Contract conformance
* Tenant-isolation testing
* Resource and failure testing
* Data-flow and network review
* Provenance verification

Results are version specific and expire or are superseded when risk information changes.

---

# Signing

Signatures may cover package digest, manifest, provenance, and selected registry metadata.

Verification confirms:

* Trusted signing identity
* Signature validity
* Package digest match
* Certificate or key validity at signing
* Revocation status
* Approved signing purpose

A valid signature is required where policy specifies but never replaces capability enforcement or behavioral testing.

---

# Key Lifecycle

Publisher signing keys require protected generation, custody, authorization, rotation, backup where appropriate, compromise response, expiry, and revocation.

Key rotation preserves historical verification. Compromise assessment determines which packages require advisory, rebuild, suspension, or revocation.

---

# Registry Responsibilities

The Extension Registry owns:

* Extension and publisher identity
* Package version and digest
* Manifest and compatibility metadata
* Provenance and signature status
* Dependency references
* Review and certification status
* Distribution location
* Advisory and vulnerability associations
* Deprecation, suspension, revocation, and retirement

Registry APIs are versioned, authenticated, authorized, observable, and resilient.

---

# Registry Boundaries

The registry does not:

* Grant tenant capabilities
* Store tenant secrets
* Execute packages
* Own marketplace pricing or invoices
* Decide domain authorization
* Store arbitrary publisher telemetry
* Replace source or build systems

It provides authoritative package identity and status to those capabilities.

---

# Registry Namespaces

Namespaces prevent identity collision and support ownership policy.

A namespace has:

* Stable identity
* Accountable owner
* Naming rules
* Eligible publisher identities
* Transfer process
* Dispute and abuse process
* Retirement rules

Similar display names do not imply common ownership.

---

# Publication States

Reference package states include:

* Submitted
* Validating
* Review required
* Approved
* Published
* Restricted
* Deprecated
* Suspended
* Revoked
* Retired

State changes are authorized, effective-dated, reasoned, and evidenced.

---

# Distribution

Installation clients obtain package metadata from the registry and artifact bytes from an approved distribution service.

They verify exact digest, signature, status, compatibility, and tenant policy before staging.

Mirrors and caches preserve content integrity and revocation freshness. An unavailable registry does not cause acceptance of an unknown package.

---

# Private and Tenant Registries

Tenants may use private distribution only through an approved registry federation or import process that preserves identity, manifests, provenance, scanning, policy, and revocation.

A private location does not reduce host or capability controls.

Tenant-developed packages are scoped to the tenant until broader review and publishing requirements are completed.

---

# Advisories

An advisory identifies:

* Affected extension, packages, or dependency range
* Severity and exploitability
* Impacted capability or data
* Fixed or mitigated version
* Required tenant and operator action
* Publication and embargo policy
* Detection and evidence

The platform matches advisories against installed exact digests and produces tenant-safe impact views.

---

# Suspension and Revocation

Suspension temporarily prevents new distribution or execution according to scope.

Revocation declares a package, extension, publisher, or signing authority no longer acceptable.

Emergency revocation may:

* Block new installs
* Prevent new executions
* Terminate or quarantine active executions
* Disable affected capabilities
* Rotate credentials
* Require update or uninstall
* Preserve evidence

Action is proportional to risk and protects tenant continuity where safe alternatives exist.

---

# Package Retention

Historical packages may be retained for rollback, audit, forensics, contractual support, and evidence even after listing removal.

Access is restricted by status. Revoked packages are not made executable merely because their bytes remain retained.

Retention follows legal, security, operational, and commercial policy.

---

# Registry Availability and Recovery

The registry is a critical control-plane dependency.

Recovery design covers:

* Identity and metadata consistency
* Immutable artifact references
* Signature and revocation data
* Advisory history
* Replication and backup
* Read-only degraded behavior
* Reconciliation with distribution stores

Runtime hosts cache only verified, bounded status and apply conservative policy when critical freshness cannot be established.

---

# Evidence

Evidence includes:

* Publisher verification and changes
* Package submission and digest
* Build provenance
* Dependency inventory
* Scan and test results
* Review and certification
* Signature verification
* Publication and download
* Advisory matching
* Suspension and revocation

Evidence protects private source, sensitive vulnerability details, and publisher security data through access control.

---

# Architecture Decisions

* Published package versions are immutable and digest bound.
* Manifests are declarative capability requests, not authority.
* Dependency graphs are locked and inspectable.
* Publisher, listing, certification, installation, and runtime identities remain separate.
* Production packages use provenance appropriate to risk.
* Signatures prove integrity and association, not behavioral safety.
* Registry status is authoritative for distribution eligibility.
* Private packages retain the same manifest, supply-chain, host, and capability controls.
* Advisories match exact installed package identity and versions.
* Revocation can block distribution and execution independently.

---

# Validation Criteria

This architecture is satisfied when:

* Every installed package resolves to an immutable digest and manifest.
* Package contents exclude secrets and tenant state.
* Direct and transitive dependencies are inventoried.
* Publisher and build provenance are verifiable for the required risk class.
* Registry, marketplace, installation, and runtime authorities remain separate.
* Distribution verifies digest, signature, status, and compatibility.
* Advisories identify affected installations accurately.
* Suspended or revoked packages cannot start unauthorized execution.
* Historical evidence remains available without enabling retired packages.

---

# Summary

The extension supply chain establishes trustworthy identity and integrity without confusing them with runtime authority.

Immutable packages, declarative manifests, explicit dependencies, verified publishers, attestable builds, signatures, authoritative registries, advisories, and revocation make extension distribution reproducible and governable. Capability and host controls remain mandatory because provenance describes origin, not permission or safe behavior.
