# ARCH-017-06 — SDK Architecture and Distribution

**Architecture Domain:** API, Contract, and Developer Interface Architecture

**Document ID:** ARCH-017-06

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This chapter defines how XeniosAI designs, builds, packages, distributes, operates, and retires supported software development kits.

An SDK is a governed API product derivative. It gives developers a safer and more productive way to consume approved API capabilities, but it does not replace the API contract, create authority, or move authoritative business decisions into client code.

The architecture establishes a portable SDK model that preserves API semantics across languages and runtimes while allowing each ecosystem to provide an idiomatic developer experience. It also defines the controls needed to make every distributed package identifiable, reproducible, verifiable, supportable, and traceable to an approved contract and release.

---

# Scope

This chapter defines:

* SDK product identity and ownership
* Supported audiences and usage boundaries
* Contract-derived and handwritten SDK components
* SDK layering and dependency direction
* Client construction and configuration
* Authentication and credential-provider integration
* Tenant and property context handling
* Request, response, event, and error models
* Serialization, validation, and protocol adaptation
* Pagination, idempotency, concurrency, and retries
* Timeouts, deadlines, cancellation, and long-running operations
* Callback, stream, batch, and file-transfer helpers
* Telemetry and diagnostic hooks
* Test utilities, mocks, and local development support
* Language and runtime portability
* Package identity, dependency, build, and provenance controls
* Registry publication and distribution channels
* SDK versioning, compatibility, release, and rollback
* Deprecation, support, retirement, and package revocation
* SDK documentation, examples, migration guidance, and adoption evidence

This chapter does not select programming languages, package managers, code generators, schema technologies, transports, registries, identity providers, build systems, or vendors.

---

# Objectives

SDK Architecture and Distribution aims to provide:

* Faithful and predictable API consumption
* Safe defaults without hidden behavior
* Consistent concepts across supported ecosystems
* Idiomatic use within each supported language and runtime
* Explicit security, tenant, and property boundaries
* Reproducible generation and builds
* Verifiable package integrity and provenance
* Controlled dependencies and supply-chain risk
* Compatible evolution linked to API lifecycle
* Discoverable releases and migration paths
* Effective diagnostics and support
* Replaceable generation, transport, and distribution technologies

---

# Architectural Principles

## The API Contract Is Authoritative

The approved API contract defines provider behavior. SDK types, operations, errors, documentation, and tests must remain traceable to that contract.

When SDK behavior and the published API contract disagree, the discrepancy is a defect or governed compatibility exception. It must not become an undocumented alternative contract.

## SDKs Are Products

Every supported SDK has an identified audience, accountable owner, release lifecycle, quality expectations, support route, compatibility policy, and retirement plan.

A generated package is not automatically a supported SDK.

## Convenience Must Not Create Authority

SDK possession, package installation, endpoint knowledge, cached state, or successful client-side validation does not grant access.

Providers remain responsible for authentication, authorization, tenant and property validation, policy enforcement, domain invariants, and evidence at their trust boundary.

## Generated and Handwritten Code Are Separated

Contract-derived code and intentionally authored convenience code must have explicit boundaries, ownership, tests, and regeneration rules.

Generated files must not be manually patched as a normal change path.

## Behavior Is Explicit

Retry, timeout, cancellation, pagination, serialization, idempotency, telemetry, caching, and error mapping behavior must be documented and configurable within governed limits.

## Safe Defaults, Visible Overrides

Defaults should reduce common errors and operational harm. Material overrides must be deliberate, validated, observable where appropriate, and must not disable provider controls.

## Portability Does Not Mean Lowest Common Denominator

SDKs should preserve a common conceptual model while presenting idiomatic constructs for each supported ecosystem.

## Distribution Is a Security Boundary

Build, signing, publication, registry access, dependency resolution, installation, and update paths are part of the SDK security architecture.

## Lifecycle Is End to End

API product, contract, API release, SDK, and consumer adoption lifecycles must remain correlated. An SDK release is not complete until its source, contract, build, package, documentation, evidence, and support state agree.

## Technology Independence

SDK semantics and governance must remain independent of any one language, runtime, protocol, generator, registry, or cloud platform.

---

# Core Definitions

## Supported SDK

A governed developer package for a defined language or runtime that provides supported access to one or more XeniosAI API products.

## SDK Product

The managed combination of package identity, contract coverage, source, generated artifacts, handwritten capabilities, documentation, examples, tests, release channels, support, telemetry, and lifecycle metadata.

## SDK Declaration

The authoritative metadata describing an SDK product, including its owner, audience, contract sources, supported runtimes, package coordinates, compatibility policy, release channels, support window, and evidence requirements.

## Contract-Derived Core

Types, operations, messages, errors, and metadata mechanically produced or directly maintained from the approved API contract.

## Handwritten Extension

Reviewed SDK code that adds idiomatic construction, orchestration, convenience, resilience, diagnostics, or integration behavior without redefining the API contract.

## Distribution Unit

The immutable package or package set published for installation in a supported ecosystem.

## Release Channel

A governed stream of SDK versions with defined stability, audience, support, and promotion expectations.

## Package Provenance

Verifiable evidence connecting a distribution unit to its source, contract inputs, dependency resolution, build process, tests, approvals, and publisher identity.

---

# SDK Product Declaration

Every supported SDK should declare:

* SDK product identifier
* Package name and coordinates
* Purpose and intended consumers
* Accountable product owner
* Technical owner
* Operational and support owner
* Covered API products and contract versions
* Contract-source locations and revisions
* Supported language and runtime versions
* Minimum and recommended runtime levels
* Supported platforms where materially different
* Stability and release channel
* SDK version
* API compatibility range
* Dependency policy
* Authentication integration model
* Tenant and property context model
* Default timeout and retry policy
* Telemetry behavior
* Package registry and publication scope
* Build and provenance identity
* Documentation and examples
* Support and vulnerability-reporting routes
* Lifecycle state
* Deprecation and end-of-support dates
* Evidence and exception references

The SDK declaration should be version controlled, machine-readable where practical, and discoverable through the Developer Platform.

---

# SDK Audience and Classification

SDK products may be classified for:

* Service-internal consumers
* Platform-internal consumers
* Tenant applications
* Property applications
* Approved partners
* Public developers
* Administrative tooling
* Operational tooling
* Workflow workers
* AI orchestrators and agents
* Approved plugins and extensions

Classification determines publication scope, documentation visibility, credential models, review depth, service expectations, and support. It does not grant authorization to API operations.

Internal SDKs should not be exposed externally by accident. Public distribution should not contain internal-only operations, topology, credentials, test data, or unpublished contract metadata.

---

# Logical SDK Architecture

A portable SDK should separate the following logical layers.

| Layer | Primary responsibility | Must not own |
|---|---|---|
| Contract layer | Contract-derived operations, types, messages, errors, and lifecycle metadata | Independent business semantics |
| Transport adapter | Request transmission, response receipt, connection behavior, and transport translation | Domain authorization or API meaning |
| Policy and configuration layer | Explicit endpoint, identity, context, timeout, retry, telemetry, and resource settings | Hidden global policy or server-side controls |
| Developer convenience layer | Idiomatic clients, builders, pagination, long-running operations, and safe helpers | Undocumented API operations or broader authority |
| Extension boundary | Approved interceptors, adapters, credential providers, and diagnostics integrations | Arbitrary mutation of protected context or contract meaning |
| Test support layer | Fakes, fixtures, contract examples, deterministic clocks, and transport doubles | Production security bypasses |

Dependency direction should lead toward the contract layer and stable SDK abstractions. Generated code must not depend on application-specific code.

Transport, credential, telemetry, and environment integrations should be replaceable through narrow interfaces rather than embedded throughout the SDK.

---

# Contract Layer

The contract layer should represent, as applicable:

* API product and contract identity
* Operations and operation identifiers
* Request and response models
* Event and callback models
* Required and optional fields
* Field constraints and documented defaults
* Enumerations and extensible values
* Error codes and structured details
* Pagination and continuation metadata
* Idempotency and concurrency inputs
* Long-running operation state
* Rate, quota, and limit metadata
* Deprecation annotations
* Documentation references

The layer should preserve distinctions that affect compatibility or behavior, including absence versus explicit null, unknown enumeration values, precision, time zone, ordering, and binary content.

Contract-derived models must not leak internal persistence entities or framework-specific server types.

---

# Generated and Handwritten Boundaries

Generation should be deterministic from approved, identified inputs.

Generated outputs should include a marker or manifest identifying:

* Contract source and revision
* Generator identity and version
* Generation configuration
* SDK target and version
* Generation timestamp where required
* Integrity digest
* Known exclusions or transformations

Handwritten extensions may provide:

* Idiomatic client construction
* Authentication-provider adapters
* Pagination iterators
* Long-running operation helpers
* File and stream utilities
* Framework integration points
* Diagnostic hooks
* Test utilities
* Carefully bounded convenience workflows

Handwritten code must not:

* Redefine field meaning
* Conceal material provider errors
* Infer unauthorized tenant or property scope
* Reproduce authoritative server decisions
* Introduce undocumented network operations
* Convert a breaking API change into silent client behavior
* Depend on unapproved generated internals

Regeneration should be safe, reviewable, and incapable of silently overwriting intentional handwritten behavior.

---

# Contract-to-SDK Production Flow

The standard production flow is:

1. Approve and version the API contract source.
2. Resolve the SDK declaration and target ecosystem.
3. Validate contract completeness and compatibility.
4. Generate or update the contract-derived core.
5. Compile or validate generated output.
6. Integrate reviewed handwritten layers.
7. Run unit, contract, conformance, security, compatibility, and package tests.
8. Produce immutable distribution units and documentation.
9. Generate provenance, dependency, integrity, and quality evidence.
10. Approve and publish to the intended release channel.
11. Verify installation and representative API interaction from the published package.
12. Observe adoption, defects, vulnerabilities, and API compatibility.

Every stage should fail closed when required source identity, test evidence, authorization, or publication metadata is absent.

---

# Multi-Language and Runtime Model

XeniosAI may support multiple SDKs when consumer demand, business value, risk, and operating capacity justify them.

Each SDK should preserve common concepts for:

* API product identity
* Authentication and credential providers
* Tenant and property context
* Requests, responses, and errors
* Idempotency and concurrency
* Pagination
* Timeouts, deadlines, cancellation, and retries
* Correlation and diagnostics
* Version and deprecation metadata

Each SDK may adapt these concepts to ecosystem conventions for naming, optional values, asynchronous execution, iterators, exceptions, resource disposal, dependency injection, and documentation.

Language parity is measured by supported capability and documented semantics, not identical source structure or simultaneous release at any cost.

The supported runtime matrix must be explicit. Adding or removing a runtime is a lifecycle decision with security, maintenance, adoption, and migration impact.

---

# Client Construction

Client construction should be explicit, side-effect controlled, and suitable for dependency injection and testing.

A client may accept:

* Endpoint or environment selector
* Credential provider
* Authorized tenant or property context provider
* Timeout and deadline policy
* Retry policy within SDK limits
* Transport adapter
* Proxy or network settings where supported
* Telemetry hooks
* Correlation source
* Logging integration
* User-agent or client-identity metadata
* Resource limits

Construction should validate incompatible or unsafe configuration early.

Clients should avoid hidden process-wide mutable state. The SDK should document whether clients, requests, iterators, streams, and credential providers are safe for concurrent use and how resources are released.

---

# Endpoint and Environment Selection

Endpoint selection should be explicit and constrained to the SDK's supported exposure model.

The SDK should:

* Provide governed environment selection
* Validate endpoint format and transport security expectations
* Avoid embedding tenant secrets in endpoint addresses
* Prevent accidental production use by tests where practical
* Preserve regional or residency policy when applicable
* Make custom endpoint use visible and support-scoped
* Avoid automatic fallback across trust or data-residency boundaries

Environment selection must not alter business semantics or bypass gateway and service controls.

---

# Authentication and Credential Providers

SDKs should integrate with credential providers rather than requiring applications to handle raw credentials throughout their code.

A credential-provider boundary may support:

* Human interactive identity
* Workload identity
* Tenant application identity
* Property application identity
* Delegated identity
* Short-lived credentials
* Approved local development identity

The SDK should:

* Request only the credentials required for the intended API audience
* Avoid persisting credentials by default
* Never write secrets to logs, errors, telemetry, examples, or generated documentation
* Support renewal without exposing secret material
* Surface authentication failures safely
* Allow credential cancellation and disposal where relevant
* Distinguish authentication from authorization

Credential-provider extensibility must not allow an extension to suppress required identity, purpose, tenant, property, or audit context.

---

# Tenant and Property Context

SDKs should make tenant and property scope explicit when required by the API contract.

Context may be established at client, operation, or request scope, but the precedence and override rules must be documented and safe.

The SDK must not:

* Discover or select tenants beyond the caller's authority
* Treat a tenant or property identifier as proof of authorization
* Reuse context across unrelated consumers
* Leak context through shared caches, telemetry, or error messages
* silently default to a privileged or cross-tenant scope

Client-side checks improve usability but do not replace gateway and provider validation.

Detailed tenant topology, lifecycle, and isolation architecture remain governed by ARCH-018.

---

# Serialization and Deserialization

Serialization behavior should preserve the approved contract, including:

* Required and optional values
* Absence and explicit null
* Numeric range and precision
* Date, time, duration, and time-zone semantics
* Binary content
* Enumerations and unknown future values
* Collection ordering where contractual
* Character encoding
* Canonical values used for integrity checks

Deserialization should tolerate compatible additions as defined by the contract while rejecting malformed or unsafe input.

SDKs must not silently truncate data, reinterpret time, coerce invalid values, or discard material errors merely to make an interaction appear successful.

---

# Client-Side Validation

The SDK may validate contract-visible constraints before transmission to provide fast feedback.

Client-side validation may cover:

* Required fields
* Types and formats
* Ranges and enumerations
* Size and count limits
* Mutually exclusive inputs
* Basic cross-field conditions
* Supported contract or SDK state

Validation should produce stable, actionable errors and must not expose secrets.

Provider validation remains authoritative because contracts, policies, state, identity, and domain conditions may change after an SDK release.

---

# Error Mapping

SDK errors should preserve the provider's structured error contract and distinguish failures originating from:

* SDK configuration
* Client validation
* Authentication
* Authorization
* Transport
* Provider validation
* State conflict
* Idempotency conflict
* Rate or quota limits
* Timeout or cancellation
* Dependency or service unavailability
* Unsupported or retired contract
* SDK defect

Mapped errors should retain safe details such as machine-readable code, correlation identifier, retryability, retry timing, and documentation reference.

SDKs must not expose secrets, internal topology, raw credential material, or another tenant's resource existence. They must not convert a denial or conflict into an empty successful result.

---

# Pagination and Collection Helpers

SDKs may provide page objects, iterators, generators, or equivalent idiomatic collection helpers.

Helpers must preserve:

* Page boundaries where relevant
* Stable continuation tokens
* Ordering and consistency semantics
* Maximum item and memory limits
* Cancellation and deadlines
* Per-page failures
* Rate and quota behavior
* Tenant and property context

Automatic pagination must be opt-in or clearly visible when it may cause multiple requests, material cost, rate consumption, or large memory use.

Continuation tokens are opaque and must not be interpreted, logged indiscriminately, or moved across consumer or tenant contexts.

---

# Idempotency and Concurrency

For eligible operations, an SDK may generate, accept, retain, and propagate idempotency identifiers according to the API contract.

The SDK should make clear:

* Which operations support idempotency
* The identifier's scope and lifetime
* Whether identifiers are generated automatically
* How retries reuse the same identifier
* How conflicts and in-progress states are represented
* Whether request equality is required

Automatic generation must not encourage reuse across distinct business intents.

Concurrency tokens, versions, state preconditions, and leases should be exposed without being hidden or silently discarded. The provider remains authoritative for concurrency decisions.

---

# Retry and Backoff

Retries are a bounded resilience behavior, not a universal recovery mechanism.

Default retry policy should consider:

* Operation safety and idempotency
* Provider retryability guidance
* Explicit retry timing
* Attempt limit
* Total elapsed-time limit
* Backoff and jitter
* Rate and quota consumption
* Cancellation and deadline
* Long-running operation state
* Tenant and property impact

SDKs must not automatically retry permanent validation, authorization, compatibility, or business-state failures.

Side-effecting operations should not be retried automatically unless the contract and idempotency behavior make the outcome safe and observable.

Applications must be able to observe retry attempts without receiving secret or sensitive payload data.

---

# Timeout, Deadline, and Cancellation

SDKs should distinguish:

* Per-attempt timeout
* Overall operation deadline
* Connection or idle timeout where applicable
* Caller-initiated cancellation
* Provider-side asynchronous completion

Defaults should prevent unbounded waits and should be appropriate to the API product's service expectations.

Cancellation stops client waiting or work where supported; it does not prove that a remote side effect did not occur. SDK documentation must explain how callers determine final state after ambiguous completion.

Nested SDK operations should propagate the caller's remaining deadline rather than reset it silently.

---

# Long-Running and Asynchronous Operations

An SDK may provide a typed operation handle for provider-managed asynchronous work.

The handle should support, as applicable:

* Operation identity
* Current state
* Result or error retrieval
* Polling with bounded backoff
* Cancellation request
* Deadline
* Progress metadata
* Resumption after process restart
* Correlation and support context

The SDK must distinguish client cancellation, cancellation request acceptance, and confirmed provider cancellation.

Polling helpers should respect quotas, retry guidance, tenant scope, and application cancellation.

---

# Callbacks, Streams, Batches, and Files

Specialized helpers must preserve the underlying contract rather than hide its operational properties.

## Callbacks

Callback helpers may assist with registration, signature verification, replay protection, correlation, and acknowledgment. They must not disable verification or assume delivery order and uniqueness unless contracted.

## Streams

Stream helpers should expose authorization, backpressure, resumption, ordering, partial failure, idle timeout, cancellation, and termination behavior.

## Batches

Batch helpers should expose per-item outcomes, partial completion, limits, idempotency, correlation, and retry boundaries. A batch-level success must not conceal item-level failure.

## Files and Binary Content

File helpers should support bounded memory use, integrity validation, size limits, streaming where practical, cancellation, safe temporary storage, and classification-aware diagnostics.

---

# Telemetry and Diagnostics

SDKs should provide integration hooks for authorized logs, metrics, traces, and diagnostics without requiring a specific observability product.

Telemetry may include:

* SDK name and version
* API product and operation identifier
* Contract version
* Request outcome category
* Attempt count
* Duration
* Rate-limit or retry signals
* Correlation and trace context
* Safe environment classification

Telemetry must not include credentials, raw tokens, unrestricted request or response bodies, sensitive personal data, memory content, prompts, another tenant's identifiers, or secret configuration by default.

Applications should be able to integrate existing telemetry context and control optional collection consistent with policy. Required security and audit evidence must not be disabled through an SDK convenience setting.

---

# Concurrency and Resource Safety

Each SDK should document:

* Which objects are safe for concurrent use
* Connection and resource ownership
* Pooling behavior where applicable
* Cleanup and disposal requirements
* Maximum in-flight work
* Buffer and memory limits
* Stream and iterator lifecycle
* Callback execution behavior
* Behavior after cancellation or disposal

SDK defaults should avoid unbounded threads, tasks, connections, buffers, queues, or background work.

Background activity must be observable, cancellable, and terminated when the owning client is released.

---

# Local Storage and Caching

SDKs should avoid persistent local storage unless the feature is explicit and justified.

Permitted caching may include bounded, short-lived, non-authoritative data such as connection metadata, public discovery information, or renewable credential metadata when allowed by policy.

The SDK must not cache:

* Raw credentials without an approved secure mechanism
* Authoritative authorization decisions beyond permitted lifetime
* Cross-tenant responses in a shared key space
* Sensitive payloads without explicit classification controls
* Provider state in a way that conceals freshness requirements

Cache scope, key composition, expiration, invalidation, encryption expectations, and disposal should be documented.

---

# Extension Boundaries

SDK extension points may support:

* Credential providers
* Transport adapters
* Endpoint resolution
* Telemetry exporters
* Logging adapters
* Serialization of explicitly extensible values
* Retry observation
* Test transports

Extensions must not:

* Bypass mandatory transport or identity protections
* Alter signed or integrity-protected data after validation
* Remove tenant or property context
* Suppress required audit evidence
* Rewrite provider denials as success
* inject undeclared operations
* Access secrets beyond their declared purpose

Extension interfaces should be narrow, versioned, documented, and included in compatibility analysis.

---

# Test Utilities and Mocks

SDK test support may provide:

* Contract examples
* Request and response builders
* Deterministic identifiers and clocks
* In-memory or local transport doubles
* Error and retry simulation
* Pagination and stream fixtures
* Callback verification fixtures
* Tenant and property isolation scenarios
* Conformance test harnesses

Mocks should model documented contract behavior and important failure modes. They must not be represented as proof of provider integration, security, performance, or production readiness.

Test utilities must not require production credentials or unrestricted production data.

---

# SDK Versioning

SDK versioning is related to, but distinct from, API contract versioning.

An SDK version may change because of:

* Contract coverage
* Compatible API additions
* SDK behavior or usability
* Runtime support
* Dependency updates
* Security remediation
* Defect correction
* Documentation and examples

Every SDK release should publish:

* SDK version
* Supported API products and contract versions
* Supported runtime matrix
* Stability channel
* Change classification
* Compatibility statement
* Dependency changes
* Security impact
* Deprecations
* Migration requirements
* Support period

SDK version numbers must not be assumed to equal API contract versions.

---

# Compatibility Model

Compatibility analysis should consider both source and runtime behavior.

Potentially breaking SDK changes include:

* Removing or renaming public types, operations, or members
* Changing type meaning or nullability
* Changing exception or error mapping
* Changing default timeout, retry, pagination, or telemetry behavior materially
* Narrowing supported runtime versions
* Introducing conflicting dependencies
* Changing concurrency or resource-ownership behavior
* Changing authentication or tenant-context configuration
* Removing an API contract version

Compatible API evolution can still break generated source in some language ecosystems. SDK compatibility therefore requires target-specific analysis, compilation tests, representative consumer tests, and published evidence.

Emergency security remediation may require exceptional compatibility action under governed risk authority.

---

# Package Identity and Contents

Each distribution unit should have a unique, stable identity including:

* Package name and namespace
* SDK version
* Target runtime or platform variant
* Release channel
* Integrity digest
* Publisher identity
* Build and provenance reference

Package contents should be limited to approved runtime code, types, metadata, licenses, notices, integrity information, and essential documentation.

Packages must not contain:

* Credentials or tokens
* Internal test data
* Unpublished internal APIs
* Development environment configuration
* Unnecessary source or build secrets
* Undeclared executable hooks
* Unapproved telemetry destinations

Package identity must not be mutable after publication.

---

# Dependency Architecture

SDK dependencies should be minimized, declared, pinned or constrained according to ecosystem policy, and evaluated for:

* Purpose and necessity
* Compatibility
* Security
* Maintenance health
* Licensing
* Provenance
* Transitive risk
* Runtime footprint
* Version conflict potential
* Replacement and removal

Core contract models should avoid unnecessary framework dependencies.

Dependency updates require testing and evidence even when SDK public source does not change. An SDK must not download undeclared executable components at runtime.

---

# Build and Provenance

SDK builds should be automated, isolated, repeatable, and traceable.

Build evidence should identify:

* Source revision
* API contract revisions
* Generator and configuration versions
* Dependency resolution
* Build environment identity
* Tests and quality results
* Package contents and digest
* Software bill of materials
* Signing or attestation result
* Approval and publisher identity
* Publication target and time

Builds should not depend on undocumented workstation state. Release publication should consume the exact tested artifact rather than rebuild an unverified equivalent.

---

# Package Integrity and Signing

Distribution should provide a means for consumers and automated systems to verify:

* Package integrity
* Publisher identity
* Authorized package namespace
* Provenance or attestation
* Expected version and channel
* Revocation or security status where supported

Signing keys and publication identities require least privilege, separation of duties, rotation, monitoring, and incident procedures.

Integrity verification failure must stop installation or promotion in governed environments.

---

# Registry and Distribution Architecture

SDK packages should be published through approved registries or distribution services appropriate to their audience.

Distribution controls should address:

* Namespace ownership
* Publisher authentication and authorization
* Internal, partner, and public visibility
* Immutability
* Integrity metadata
* Provenance availability
* Retention
* Replication and availability
* Rate and abuse protection
* Vulnerability notification
* Deprecation and revocation status
* Audit evidence

Direct transfer of untracked packages should not be the normal supported path.

Mirrors and caches must preserve package identity, integrity, access policy, and lifecycle metadata.

---

# Release Channels

SDKs may use governed channels such as:

* Experimental
* Preview
* Stable
* Long-term support where justified
* Deprecated

Each channel must define:

* Intended audience
* Stability expectations
* Compatibility commitment
* Support level
* Promotion criteria
* Data and security restrictions
* Feedback expectations
* Exit conditions

Preview or experimental packages must be clearly distinguishable from stable packages and must not be promoted merely by renaming an unverified artifact.

---

# Release and Promotion

An SDK release should satisfy gates for:

* Approved contract inputs
* Declared package identity
* Generation reproducibility
* Compilation or structural validation
* Unit and integration testing
* API contract and conformance testing
* Compatibility testing
* Runtime matrix testing
* Security and dependency assessment
* Package installation testing
* Provenance and integrity evidence
* Documentation and changelog completeness
* Support readiness
* Publication authorization

Promotion should move the same verified artifact or cryptographically identical distribution unit across channels when the ecosystem permits.

Release status should be correlated with the API release and the consumer adoption lifecycle defined in Chapter 04.

---

# Installation, Update, and Rollback

Installation guidance should identify:

* Approved registry or source
* Package identity
* Supported runtimes
* Integrity verification
* Dependency implications
* Minimum configuration
* Authentication setup
* Tenant and property setup
* First safe operation

Update guidance should explain compatible upgrade ranges, breaking migrations, dependency impacts, deprecated behavior, and validation steps.

Rollback usually means restoring a previously approved SDK dependency and rebuilding the consumer. Because provider contracts may evolve, rollback viability must be evaluated against currently supported API versions and security requirements.

Compromised or critically vulnerable versions may be prohibited from rollback even if functionally compatible.

---

# Documentation and Examples

Every supported SDK should provide:

* Getting-started guidance
* Client construction
* Authentication and credential-provider guidance
* Tenant and property context guidance
* Operation reference
* Error and recovery behavior
* Pagination and long-running operation examples
* Retry, timeout, deadline, and cancellation guidance
* Telemetry and troubleshooting guidance
* Runtime and dependency requirements
* Version compatibility matrix
* Changelog
* Deprecation notices
* Migration guides
* Support and vulnerability-reporting routes

Examples should use safe placeholders, least-privilege access, bounded operations, explicit error handling, and non-production data.

Examples must not embed secrets, encourage disabled verification, assume cross-tenant access, or conceal important failure handling.

Documentation should be versioned with the package it describes and tested where practical.

---

# Deprecation and End of Support

SDK deprecation should identify:

* Affected package and versions
* Reason
* Replacement or supported alternative
* Affected runtimes and API contracts
* Announcement date
* End-of-support date
* Distribution or installation changes
* Migration guidance
* Security implications
* Exception route
* Final retirement or archival action

Deprecating an SDK does not automatically retire its API contract, and retiring an API contract may require coordinated SDK releases across multiple ecosystems.

Consumer adoption evidence should inform timing, but unresolved usage does not create indefinite support.

---

# Retirement and Revocation

Retirement should be governed and observable.

Possible actions include:

* Marking the package deprecated
* Ending normal support
* Removing it from recommended documentation
* Blocking new publication on the retired line
* Archiving source and evidence
* Restricting installation in governed environments
* Revoking a compromised package or publisher identity

Published package deletion should be exceptional because it can damage reproducibility and dependency resolution. Where packages remain available, their unsupported or unsafe state must be unambiguous.

Emergency revocation may occur for material security, legal, safety, privacy, or integrity risk through established command-and-control authority.

---

# Supply-Chain Security

SDK supply-chain controls should cover:

* Contract and source integrity
* Generator and build-tool trust
* Dependency admission and monitoring
* Isolated builds
* Build identity and authorization
* Provenance and software bill of materials
* Package signing or attestation
* Registry namespace protection
* Publisher credential protection
* Vulnerability scanning and disclosure
* Package integrity verification
* Malicious or accidental publication detection
* Incident containment and revocation
* Recovery and republishing

No single scan, signature, or approval proves package safety. Assurance depends on a traceable chain of controls and evidence.

---

# Vulnerability and Package Incident Response

SDK incidents may involve:

* Vulnerable SDK code
* Vulnerable direct or transitive dependency
* Compromised generator or build environment
* Stolen publisher identity
* Namespace takeover or confusing package identity
* Malicious or incorrect package publication
* Credential or tenant-context leakage
* Undocumented telemetry or network behavior
* Broken compatibility causing consumer harm

Response should coordinate:

1. Detection and validation.
2. Package, version, runtime, API, and consumer impact analysis.
3. Containment of publication and credentials.
4. Consumer notification appropriate to severity.
5. Fix, rebuild, verification, and secure publication.
6. Revocation or restriction where required.
7. Migration and recovery guidance.
8. Evidence preservation and root-cause analysis.
9. Control and architecture improvement.

SDK incidents integrate with ARCH-011 incident and problem management and ARCH-012 assurance, issue, and remediation governance.

---

# SDK Operations and Support

Each supported SDK should have operational ownership for:

* Release health
* Registry and publication health
* Installation failures
* API compatibility
* Runtime and dependency changes
* Security vulnerabilities
* Documentation defects
* Consumer support
* Adoption and deprecation
* Incident response
* Evidence retention

Support should be able to correlate an issue with SDK version, runtime, API product, contract version, operation, environment classification, and safe correlation identifiers without requiring secrets or unrestricted payloads.

---

# Adoption and Product Measures

SDK product health may be measured through:

* Supported-version adoption
* Time to first successful authorized operation
* Installation and upgrade success
* Contract coverage
* Runtime matrix health
* Defect and support demand
* Retry and error patterns
* Deprecated-version usage
* Migration completion
* Documentation effectiveness
* Vulnerability remediation time
* Release lead time and failure rate

Collection must respect privacy, tenant isolation, purpose, and data-minimization requirements.

Raw download counts, package stars, or generated line counts do not prove successful, secure, or supported consumption.

---

# AI Agent and Workflow Consumption

AI agents, orchestrators, and workflows may use SDKs as governed API clients.

They remain subject to:

* Explicit workload and acting identity
* Tool and operation allowlists
* Delegated authority and purpose
* Tenant and property scope
* Input and output validation
* Time, rate, cost, and resource limits
* Human approval where policy requires
* Audit and trace evidence
* Stop, cancellation, and escalation conditions

An SDK must not let an agent invent credentials, infer broader authority, bypass confirmation, conceal tool errors, or treat generated parameters as trusted.

Agent reasoning and workflow state remain governed by ARCH-014 and ARCH-015. SDKs provide access mechanisms, not autonomous decision authority.

---

# Governance and Decision Rights

SDK governance should assign accountability for:

| Decision | Accountable authority |
|---|---|
| SDK product creation | API product and architecture governance |
| Contract coverage | API product owner |
| Public package namespace | Developer Platform and security governance |
| Supported runtime matrix | SDK product owner |
| Compatibility classification | API and SDK owners with architecture review |
| Stable-channel promotion | Release authority |
| Security exception | Designated risk authority |
| Deprecation and end of support | SDK product owner with affected stakeholders |
| Emergency revocation | Security and operational command authority |

Decision records should reference the affected SDK, package versions, API contracts, evidence, risk, exceptions, and consumer impact.

---

# Quality and Assurance Gates

Before stable publication, an SDK should demonstrate:

* Authoritative product declaration
* Traceability to approved API contracts
* Generated and handwritten boundary integrity
* Reproducible generation and build
* Contract and conformance coverage
* Compatible public surface
* Supported runtime evidence
* Authentication and authorization integration
* Tenant and property isolation behavior
* Safe retry, timeout, cancellation, and error behavior
* Dependency and license control
* Security assessment
* Package integrity and provenance
* Installation verification
* Documentation and examples
* Support and incident readiness
* Lifecycle and deprecation metadata
* Approved exceptions

Assurance depth should be proportionate to audience, privilege, data classification, operational criticality, and distribution reach.

---

# Required Evidence

SDK lifecycle evidence should include, as applicable:

* SDK declaration revision
* API contract revisions
* Source revision
* Generation manifest
* Generator and configuration identity
* Compatibility analysis
* Test and conformance results
* Runtime matrix results
* Dependency inventory and software bill of materials
* Security and vulnerability results
* Build provenance
* Package digest and signing evidence
* Publication approval and registry record
* Installation verification
* Changelog and migration guide
* Exceptions and risk acceptance
* Adoption and retirement evidence

Evidence must be retained according to classification, regulatory, contractual, operational, and lifecycle requirements.

---

# Failure Modes and Controls

| Failure mode | Required control outcome |
|---|---|
| SDK drifts from API contract | Contract traceability, generation checks, and conformance tests fail release |
| Generated code is manually patched | Regeneration boundaries and source review identify unauthorized edits |
| SDK silently broadens authority | Provider enforcement and SDK security tests reject the behavior |
| Tenant context leaks between clients | Context isolation and concurrency tests prevent release |
| Automatic retry duplicates a side effect | Operation classification and idempotency policy disable unsafe retry |
| Package is rebuilt during promotion | Immutable artifact promotion and digest verification stop publication |
| Publisher identity is compromised | Credential containment, publication freeze, impact analysis, and revocation begin |
| Dependency introduces critical risk | Dependency policy, monitoring, remediation, and governed exception apply |
| Runtime support is removed unexpectedly | Runtime lifecycle policy, notice, migration, and adoption evidence govern removal |
| Deprecated SDK remains widely used | Consumer inventory, notification, migration support, and exception governance apply |
| Diagnostics expose sensitive data | Privacy-safe defaults, redaction tests, and telemetry review fail release |

---

# Non-Negotiable Rules

1. The approved API contract is authoritative over SDK behavior.
2. SDK possession or configuration never grants API authority.
3. Providers must enforce identity, authorization, tenant, property, policy, and domain invariants.
4. Generated and handwritten code must have explicit, reviewable boundaries.
5. A supported SDK must have ownership, lifecycle, documentation, tests, and support.
6. SDK behavior must not hide material errors, retries, side effects, or compatibility changes.
7. Credentials and sensitive payloads must not appear in packages, examples, logs, or telemetry.
8. Automatic retry of side-effecting work requires explicit contract and idempotency support.
9. Distribution units must be immutable, identifiable, and traceable to verified source and build inputs.
10. Dependencies must be declared, governed, monitored, and removable.
11. Stable publication requires contract, compatibility, security, package, and installation evidence.
12. Tenant and property context must remain isolated across clients, requests, caches, diagnostics, and tests.
13. Preview status must be explicit and must not imply stable support.
14. Deprecation and retirement require consumer impact, migration, support, and evidence.
15. AI agents and workflows using an SDK remain bounded by their own identity, purpose, policy, and approval requirements.

---

# Architecture Relationships

## ARCH-009 — Integration Architecture

Defines platform-wide integration boundaries and communication patterns. SDK transport adapters implement approved patterns without changing their semantics.

## ARCH-011 — Enterprise Operations

Defines incident, problem, change, release, continuity, capacity, and operational governance applied to SDK services and package distribution.

## ARCH-012 — Governance & Compliance

Defines policy, risk, controls, evidence, assurance, exceptions, findings, and remediation for SDK products and supply chains.

## ARCH-013 — Developer Platform

Provides contract discovery, source, generation, build, test, artifact, publication, documentation, service catalog, and developer feedback capabilities.

## ARCH-014 — AI Agent Framework

Defines agent identity, tool authority, execution, supervision, and evidence when agents consume APIs through SDKs.

## ARCH-015 — Workflow Engine

Defines durable workflow execution, compensation, timers, and state. SDKs provide governed API access for workflow activities.

## ARCH-016 — Knowledge & Memory

Defines governed knowledge and memory access. SDKs must preserve classification, purpose, authorization, provenance, and tenant boundaries.

## ARCH-018 — Multi-Tenancy

Defines detailed tenant and property topology, lifecycle, isolation, routing, and administration. SDKs expose and preserve the required context without redefining it.

## ARCH-019 — Plugin & Extension Framework

Defines extension packaging and runtime governance. Plugins may consume SDKs, but SDK extension points do not constitute unrestricted plugin authority.

---

# Relationship to Other ARCH-017 Chapters

* Chapter 01 establishes the API and SDK architecture context and principles.
* Chapter 02 defines the API product, contract, and SDK declaration model.
* Chapter 03 defines interaction semantics that SDKs must preserve.
* Chapter 04 defines the linked API product, contract, release, SDK, and consumer adoption lifecycles.
* Chapter 05 defines identity, access, isolation, credential, and zero-trust requirements.
* Chapter 07 defines developer experience, testing, and conformance in greater detail.
* Chapter 08 defines API and SDK governance and assurance.
* Chapter 09 defines API and SDK operations, observability, and performance.
* Chapter 10 defines future evolution without weakening current contracts.

---

# Expected Outcomes

This architecture enables XeniosAI to achieve:

* Faster and safer API adoption
* Consistent contract semantics across ecosystems
* Clear generated and handwritten ownership
* Secure credential and context integration
* Predictable resilience and error behavior
* Reduced tenant and property isolation risk
* Reproducible, verifiable SDK releases
* Controlled package and dependency supply chains
* Explicit runtime and compatibility support
* Effective upgrades, deprecations, and incident response
* Better developer support and feedback
* Portable SDK evolution without vendor lock-in

---

# Summary

XeniosAI SDKs are governed products derived from authoritative API contracts, not informal wrappers around endpoints.

Their architecture separates contract-derived models, replaceable transport, explicit policy and configuration, idiomatic convenience, controlled extensions, and test support. It keeps authentication, authorization, tenant isolation, policy, and business decisions at the correct trust boundaries while giving consumers safe and observable mechanisms for validation, errors, pagination, idempotency, retries, deadlines, asynchronous work, streams, batches, files, and diagnostics.

SDK distribution is part of the enterprise security and operating model. Every supported package must be identifiable, immutable, dependency-governed, reproducibly built, integrity-protected, traceable to its contract and source, published through an approved channel, documented, supported, measured, and retired deliberately.

This foundation prepares ARCH-017-07 to define the developer experience, testing, and conformance capabilities that prove APIs and SDKs behave as promised.
