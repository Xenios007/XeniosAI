# ARCH-019-07 — Plugin SDK, Developer Experience, and Testing

**Architecture Domain:** Extensibility, Plugin, and Ecosystem Architecture

**Document ID:** ARCH-019-07

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines the Plugin SDK, developer portal, templates, local sandbox, test fixtures, packaging, validation, publishing workflow, documentation, support, and conformance capabilities that make safe extension development the standard path.

---

# Developer Experience Principles

* The paved road encodes architecture and security requirements.
* SDKs preserve extension-point semantics.
* Local development resembles hosted behavior without production authority.
* Multi-tenant testing is mandatory.
* Generated artifacts are traceable and reproducible.
* Validation occurs early and repeatedly.
* Examples demonstrate safe patterns, including failure and uninstall.
* Credentials are never bundled in tools or templates.
* Language convenience cannot weaken capability or tenant context.
* Publisher feedback is actionable and evidence linked.

---

# Plugin SDK Scope

The SDK may provide:

* Manifest and configuration models
* Extension-point contracts
* Capability-request types
* Runtime context types
* Host communication adapters
* API, event, workflow, agent, knowledge, UI, and MCP helpers
* Cancellation, timeout, and idempotency primitives
* Structured telemetry and health hooks
* Test fixtures and mock providers
* Local sandbox
* Package construction and verification
* Provenance and signing integration
* Publishing clients

---

# SDK Layers

## Contract Layer

Types and schemas traceable to manifest, extension-point, context, error, health, and lifecycle contracts.

## Host Adapter Layer

Mediated communication with runtime capabilities without exposing host internals.

## Capability Layer

Explicit handles for granted APIs, events, storage, secrets, network, workflow, tool, and UI capabilities.

## Developer Convenience Layer

Safe helpers for common patterns such as pagination, retry, streaming, checkpoints, and structured results.

## Test and Packaging Layer

Local hosts, fixtures, validators, conformance suites, package builders, and publication tools.

---

# SDK Semantics

The SDK must not:

* Infer a tenant from untrusted local state
* Hide the active installation or execution identity
* Create ungranted capability handles
* Embed or persist production secrets
* Retry non-idempotent operations blindly
* Bypass host mediation
* Expose service databases or internal classes
* Convert denied capability into a fallback allow
* Mask material provider errors

---

# Language Support

Language-specific SDKs share one canonical contract and conformance profile.

Each language release declares:

* Supported runtime versions
* Contract and manifest compatibility
* Package version
* Generation source
* Handwritten components
* Security and dependency status
* Support window

Language parity is measured by behavior rather than identical API shape.

---

# SDK Generation

Generated code is:

* Traceable to approved schemas
* Reproducible
* Clearly separated from handwritten code
* Reviewed and tested
* Compatible with regeneration
* Published with provenance

Manual edits to generated files are prohibited or isolated in supported extension layers.

---

# Developer Portal

The portal provides:

* Extension concepts and architecture
* Extension-point catalog
* Capability catalog
* Manifest reference
* SDK documentation
* Quickstarts and examples
* Security and privacy requirements
* Testing and certification profiles
* Package and publishing status
* Compatibility and deprecation notices
* Advisories and support
* Tenant sandbox management

Documentation visibility follows publisher and extension-point eligibility.

---

# Extension-Point Catalog

Each catalog entry includes:

* Owner and support
* Purpose and eligible extension classes
* Contract versions
* Authority and data classification
* Side effects
* Limits and service behavior
* Examples
* Test suite
* Compatibility and deprecation
* Known restrictions

Undocumented internal endpoints are not shown as supported extension points.

---

# Project Templates

Templates include:

* Manifest skeleton
* Secure configuration schema
* Capability request examples
* Health and telemetry implementation
* Cancellation and timeout handling
* Tenant-aware storage access
* Tests with multiple tenants
* Packaging and provenance workflow
* License and support metadata

Templates default to minimal capability and deny-by-default network access.

---

# Local Sandbox

The local sandbox emulates:

* Host admission
* Installation and tenant context
* Capability grants and denials
* Mock extension points
* Storage and secret handles
* Network policy
* Resource budgets
* Lifecycle changes and revocation
* Telemetry and evidence

It uses synthetic or approved test data and has no production credentials or network path by default.

---

# Test Tenants

Conformance uses at least two deliberately distinct tenant fixtures with different properties, data, configuration, grants, and entitlements.

Tests attempt forbidden cross-tenant access, cache collision, event crossover, storage mix, and tenant-switch mistakes.

Single-tenant success cannot demonstrate isolation.

---

# Unit Testing

Unit tests cover:

* Manifest parsing
* Configuration validation
* Input and output schema
* Capability-denial handling
* Idempotency
* Timeouts and cancellation
* Resource budget behavior
* Error classification
* Data minimization
* Health and telemetry

---

# Contract Testing

Publisher and extension-point owner share contract tests for:

* Schema compatibility
* Required context
* Error and retry behavior
* Side-effect semantics
* Version negotiation
* Limits
* Cancellation
* Provider authorization

Contract tests run against mocks and approved hosted test providers.

---

# Integration Testing

Integration tests verify:

* Package admission
* Host isolation
* API and event mediation
* Tenant storage
* Secret and network policy
* Workflow and agent invocation
* Knowledge and UI behavior
* Observability and usage
* Suspension and uninstall

External test systems use non-production accounts and controlled data.

---

# Security Testing

Security profiles may require:

* Static and dependency analysis
* Secret and malware scanning
* Fuzzing
* Tenant escape tests
* Host escape tests
* Network exfiltration tests
* Injection and unsafe content tests
* UI deception and origin tests
* MCP tool and prompt injection tests
* Resource-exhaustion tests
* Revocation tests

---

# Failure Testing

Developers test:

* Host restart
* Timeout and cancellation
* Provider denial
* External dependency outage
* Queue replay
* Partial side effect
* Configuration invalidation
* Secret rotation
* Package suspension
* Resource exhaustion

Expected retry, compensation, fallback, and evidence are asserted.

---

# Compatibility Testing

Compatibility matrices test package versions against:

* Platform and host versions
* Extension-point versions
* SDK versions
* Manifest schemas
* Configuration versions
* Dependency versions
* Data migration states

Behavioral golden tests supplement schema checks.

---

# Uninstall Testing

Every persistent or scheduled extension demonstrates:

* Execution stop
* Subscription and schedule removal
* Credential revocation
* Connection closure
* Data export where supported
* Retention and deletion
* Cache and derivative cleanup
* Evidence preservation

---

# Conformance Profile

A profile defines mandatory tests by extension and risk class.

Results include:

* Profile and version
* Package digest
* Environment
* Test and evidence references
* Pass, fail, warning, or exception
* Expiry or rerun triggers

Publishers cannot self-declare a higher certification than the verified result.

---

# Developer Workflow

The paved workflow is:

1. Discover an extension point.
2. Register extension identity.
3. Scaffold with an approved template.
4. Declare minimal capabilities.
5. Develop against local sandbox.
6. Run unit, contract, isolation, and failure tests.
7. Build immutable package and provenance.
8. Submit validation and review.
9. Publish to approved registry.
10. Pilot in a test tenant.
11. Promote through approved distribution.

---

# Packaging Tooling

Packaging tools:

* Validate manifest
* Resolve and lock dependencies
* Reject secrets and unsafe files
* Produce deterministic layout
* Compute digest
* Generate dependency inventory
* Attach provenance
* Request signing
* Verify package locally

Tool output remains inspectable; developers can see exactly what will be published.

---

# Publishing Tooling

Publishing tools authenticate publisher identity, verify namespace ownership, upload exact package, submit evidence, select visibility, and track review.

They never accept production tenant credentials or create runtime capability grants.

Failed review returns machine-readable and human-readable remediation guidance.

---

# Documentation Requirements

Every publishable extension documents:

* Purpose and supported use cases
* Capabilities and data use
* External processors
* Installation and configuration
* Runtime and service limits
* Errors and recovery
* Compatibility
* Update and migration
* Uninstall and data disposition
* Support and vulnerability disclosure
* License and commercial terms

---

# Examples and Reference Extensions

Reference extensions demonstrate:

* Read-only API use
* Idempotent business action
* Event consumer
* Workflow activity
* Agent tool
* Knowledge connector
* UI component
* MCP adapter
* External connector
* Full uninstall

Examples use synthetic hospitality scenarios and no embedded credentials.

---

# Test Data

Test data is synthetic, minimized, classification labeled, and isolated by environment and tenant.

Production data is not copied to developer sandboxes without explicit approved controls.

Fixtures include adversarial values, localization, time zones, property scopes, and data lifecycle states.

---

# Credentials and Developer Identity

Developer tools use developer identities and short-lived sandbox credentials.

Publisher signing, registry publishing, tenant installation, and production execution use separate identities and duties.

CLI history, build logs, examples, and generated diagnostics redact secrets.

---

# Observability for Developers

Sandbox and pilot environments provide structured logs, traces, metrics, capability decisions, resource use, host events, and correlation.

Developers see only authorized tenant test data and cannot query other publishers' private evidence.

Production diagnostics follow support and tenant-access policy.

---

# Feedback and Support

Developer support integrates:

* Documentation feedback
* SDK and contract issues
* Review findings
* Compatibility reports
* Runtime incidents
* Tenant feedback
* Advisory notifications

Extension-point owners use feedback to improve contracts without creating private exceptions for individual publishers.

---

# SDK Lifecycle

SDK releases have version, provenance, dependencies, supported runtimes, compatible contract ranges, migration guidance, deprecation, and support window.

Security fixes follow expedited release and advisory processes.

Old SDK use may remain compatible but certification can require a supported version.

---

# Architecture Decisions

* The Plugin SDK is a semantic adapter, not a security boundary.
* Safe templates use minimal capabilities and deny-by-default network.
* Local sandboxes never contain ambient production authority.
* Multi-tenant negative tests are mandatory.
* Contract and behavioral compatibility are tested.
* Packaging is deterministic, inspectable, and provenance producing.
* Publisher, installer, and runtime identities remain separate.
* Persistent extensions must test uninstall and data disposition.
* Examples include failure, revocation, and recovery paths.

---

# Validation Criteria

This architecture is satisfied when:

* Developers can discover all supported extension points and requirements.
* SDKs trace to canonical contracts and do not create hidden authority.
* Local development behaves like the host for capability and tenant rules.
* Every package passes applicable multi-tenant, security, failure, and compatibility tests.
* Build artifacts have exact digests, inventories, and provenance.
* Publishing separates package submission from tenant installation.
* Documentation covers operation, support, update, and uninstall.
* Developer feedback has accountable owners and visible lifecycle.

---

# Summary

The Plugin SDK and developer platform make safe extension development faster than private integration shortcuts.

Canonical contracts, secure templates, local sandboxes, multi-tenant fixtures, conformance suites, deterministic packaging, provenance, publishing workflows, and actionable feedback give publishers a productive path while preserving host enforcement and domain authority.
