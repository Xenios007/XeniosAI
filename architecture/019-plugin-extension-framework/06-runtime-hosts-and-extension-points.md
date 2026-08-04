# ARCH-019-06 — Runtime Hosts and Extension Points

**Architecture Domain:** Extensibility, Plugin, and Ecosystem Architecture

**Document ID:** ARCH-019-06

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines the runtime architecture for loading, invoking, isolating, monitoring, limiting, and terminating extensions through owned extension points.

It covers host responsibilities, invocation flow, synchronous and asynchronous execution, APIs, events, workflows, agents, knowledge, user interfaces, Model Context Protocol, external integrations, failure, recovery, and evidence.

---

# Runtime Principles

* Hosts execute only verified, active package digests.
* Every invocation binds to an installation, tenant, grant, and purpose.
* Extension points are owned contracts, not implementation hooks.
* Providers remain authoritative for domain access.
* Sensitive interfaces are host mediated.
* Execution is cancelable and resource bounded.
* Extension failure remains outside core authoritative transactions by default.
* Async execution preserves and revalidates tenant scope.
* Results are untrusted until validated by the host or provider.
* Hosts emit tenant-safe health, usage, and evidence.

---

# Host Responsibilities

The Extension Host:

* Resolves installation and exact package
* Verifies package and registry status
* Establishes isolated runtime
* Binds tenant and property context
* Loads effective configuration
* Resolves capability grants
* Mediates API, event, secret, storage, and network access
* Applies timeout, cancellation, concurrency, and budget
* Validates extension-point inputs and outputs
* Captures telemetry, usage, and evidence
* Detects health degradation
* Quarantines or terminates execution

---

# Host Boundaries

The host does not:

* Authorize domain resources on behalf of providers
* Share service databases with extensions
* Grant capabilities not approved by policy
* Store raw tenant secrets in package state
* Treat extension output as authoritative business truth
* Hide the acting extension identity
* Make marketplace or billing decisions

---

# Host Types

## Request Host

Executes short-lived synchronous or asynchronous request-response contributions.

## Event Host

Processes tenant-bound events with checkpoint, retry, idempotency, and dead-letter controls.

## Workflow Host

Executes extension activities, forms, or connectors under workflow identity and compensation semantics.

## Agent Tool Host

Exposes approved extension tools to AI orchestrators and agents with schemas, side-effect policy, budget, and evidence.

## Experience Host

Renders or communicates with UI extensions inside bounded presentation slots.

## Connector Host

Mediates external network, credential, callback, and data-transfer behavior.

Different types may share platform primitives while preserving their contracts and failure models.

---

# Runtime Admission

Before execution, the host verifies:

1. Extension and installation are active.
2. Package digest matches approved installation.
3. Package is not suspended, revoked, or incompatible.
4. Tenant and property context are trusted.
5. Initiating identity or workload is authorized.
6. Requested extension point and capability are granted.
7. Configuration and secret references are valid.
8. Host isolation class and placement are approved.
9. Resource budget and quota are available.
10. Current security and advisory policy permits execution.

Admission failure produces a stable, tenant-safe result and evidence.

---

# Invocation Context

The host supplies a bounded context containing:

* Extension, package, installation, and execution identity
* Tenant and property scope
* Initiating actor or process reference
* Purpose
* Granted capabilities
* Configuration version
* Correlation and trace references
* Deadline, cancellation, and budget
* Host and contract version

The extension cannot modify trusted fields.

---

# Extension-Point Contract

Every contract defines:

* Point identity and owner
* Input and output schema
* Invocation mode
* Side-effect classification
* Authority and data requirements
* Tenant and property semantics
* Ordering, transaction, and consistency
* Timeout, cancellation, retry, and idempotency
* Resource and payload limits
* Errors and fallback
* Telemetry and evidence
* Compatibility and lifecycle

---

# Synchronous Invocation

Synchronous extensions are used only when their latency and availability can fit the caller contract.

The caller sets a deadline. The host applies stricter internal limits and returns classified errors.

Optional enrichment may fail open only when the extension point explicitly defines safe omission. Authorization, security, pricing, payment, or material business controls do not fail open to an extension default.

---

# Asynchronous Invocation

Async execution creates a tenant-bound work record with package digest, grant, configuration, input reference, deadline, retry budget, output destination, and evidence.

Workers revalidate installation and revocation state at start and checkpoints.

Long-running work cannot use an old grant indefinitely.

---

# Idempotency

Idempotency keys include tenant, installation, extension point, and business operation scope.

Retries must not duplicate domain commands, external deliveries, charges, or usage unexpectedly.

The owning extension point defines which outcomes can be replayed and how partial work is reconciled.

---

# Transactions

Extension execution is outside a domain service's local transaction by default.

Domain changes use commands, events, workflows, outbox patterns, sagas, or other governed coordination.

An extension cannot participate in a shared database transaction across services.

---

# API Extension Points

API-based extensions call published APIs with an extension execution identity and bounded tenant context.

Providers validate resource ownership, initiating authority, installation grant, purpose, quota, and policy.

The host enforces endpoint allowlists, schema, payload limits, timeout, retry, and telemetry.

---

# Event Extension Points

Event subscriptions are installed resources, not arbitrary runtime listeners.

The event host validates producer, schema, tenant, grant, subscription, ordering, idempotency, and current installation state.

Retries are bounded by installation budgets. Dead-letter replay is privileged and explicit.

---

# Workflow Extension Points

Workflow contributions may include definitions, activities, connectors, forms, and templates.

The host preserves workflow tenant binding, definition and package version, activity idempotency, timeouts, retry, compensation, human approval, cancellation, and history.

Removing a package does not erase in-flight workflow evidence. Version policy defines completion or migration.

---

# Agent Tool Extension Points

An agent tool contract declares:

* Tool identity and description
* Input and output schema
* Read and write effects
* Required human approval
* Tenant data classes
* External destinations
* Cost and resource budget
* Timeout and cancellation
* Reversibility
* Evidence

Tool descriptions and model-generated arguments are untrusted. The host validates every invocation.

---

# Agent Extensions

Extension-provided agents are registered definitions, not anonymous package code.

They inherit ARCH-014 requirements for owner, purpose, authority, autonomy, tools, delegation, memory, supervision, evaluation, and evidence.

Package update and agent-definition update are coordinated and versioned.

---

# Knowledge Extension Points

Knowledge connectors and processors use source registration, tenant scope, rights, provenance, classification, freshness, transformation, indexing, correction, and deletion contracts.

An extension cannot silently promote tenant knowledge to platform knowledge or use it for unrelated model training.

Retrieval results remain subject to provider and context policy.

---

# Memory Extension Points

Memory contributions declare admission, scope, purpose, subject, retention, correction, retrieval, and deletion behavior.

Extensions cannot create global memory or store authorization credentials as memory.

Memory is an information capability, not runtime authority.

---

# UI Extension Points

The experience host controls:

* Approved slot and lifecycle
* Isolated origin or sandbox
* Tenant and property context display
* Typed message contract
* Data and action capabilities
* Navigation and external links
* Content security policy
* Accessibility and localization
* Error containment

UI extensions cannot overwrite platform security chrome, login, consent, or support identity.

---

# MCP Runtime

MCP servers may be remote connectors, tenant-hosted providers, or platform-hosted extensions.

The MCP host mediates:

* Server identity and connection
* Tenant binding and credentials
* Tool, prompt, and resource discovery
* Capability filtering
* Schema validation
* User or agent authorization
* Network and data policy
* Timeout, budget, and cancellation
* Output classification
* Evidence and revocation

MCP discovery never directly registers unrestricted tools into an agent.

---

# Connector Runtime

External connectors use platform-managed identity, secrets, network, callback, retry, circuit-breaker, and delivery capabilities.

Each connection belongs to a tenant and installation. A failing destination cannot consume another tenant's retry or connection budget.

Inbound payload tenant claims are cross-checked against the trusted connection binding.

---

# Extension Storage Runtime

The host exposes storage through installation-bound interfaces.

Storage keys, queries, files, caches, indexes, backups, and exports preserve tenant and installation identity.

Direct storage credentials and unrestricted filesystem paths are prohibited.

---

# Secret Runtime

The host resolves an approved secret reference only for the specific capability and destination.

Secrets are withheld from extension code where mediated requests can achieve the purpose. If raw access is unavoidable and approved, it is short lived, non-logged, scope bound, and monitored.

---

# Network Runtime

Network requests use approved destinations and are revalidated after name resolution and redirects.

The host applies transport security, identity, rate, payload, data-classification, and residency rules.

Requests to instance metadata, internal control planes, neighboring extensions, or undeclared endpoints are denied.

---

# Result Validation

The host validates:

* Output schema and size
* Content classification
* Tenant ownership
* Unsafe or executable content
* Required provenance
* Side-effect result references
* Error contract

Providers independently validate any requested state change.

---

# Failure Model

Failures are classified as:

* Extension validation
* Capability denial
* Package or host incompatibility
* Timeout or cancellation
* Resource exhaustion
* External dependency failure
* Extension defect
* Security containment
* Provider business rejection
* Platform dependency failure

Classification determines retry, fallback, compensation, support ownership, and tenant communication.

---

# Health and Quarantine

Health evaluates error rate, latency, resource use, policy denials, crashes, dependency failures, and output violations.

The host may quarantine an installation or package cohort, prevent new work, drain safe executions, and notify owners.

Health quarantine is separate from registry revocation but may trigger it.

---

# Recovery

Recovery restores verified package, configuration, grant, storage, subscriptions, schedules, and host placement.

It does not blindly restart non-idempotent work. Pending operations are reconciled with domain providers and external systems.

Recovery exercises include host loss, package corruption, event replay, external outage, secret rotation, and package suspension.

---

# Observability

Telemetry identifies tenant, property where allowed, installation, extension, package digest, extension point, execution, host, grant decision, duration, resource use, and outcome.

Extension-provided logs are length limited, structured where possible, classified, sanitized, and never trusted as the only evidence source.

---

# Usage Metering

Hosts meter compute, duration, storage, API calls, messages, model/tool use, and network where applicable.

Usage traces to tenant, installation, package, capability, and execution while preserving retry and idempotency semantics.

Metering failure does not silently remove platform safety limits.

---

# Architecture Decisions

* Hosts execute exact approved package digests.
* Every invocation has installation, tenant, grant, purpose, deadline, and budget.
* Extension points define explicit failure and transaction semantics.
* Extensions execute outside domain transactions by default.
* API, event, workflow, agent, knowledge, UI, and MCP points share common identity and capability controls.
* Async work revalidates lifecycle and revocation.
* Extension outputs are validated and never become authority by themselves.
* Hosts can quarantine and terminate execution independently of package lifecycle.
* Recovery reconciles side effects before retry.

---

# Validation Criteria

This architecture is satisfied when:

* Every loaded package digest matches active installation state.
* Every extension point has owner, contract, limits, errors, and compatibility.
* Hosts mediate all sensitive capabilities.
* Provider services validate domain authorization.
* Async, workflow, and agent execution preserve tenant context and revocation.
* Faulty extensions cannot block core transactions or neighboring tenants.
* UI and MCP contributions remain bounded and identifiable.
* Quarantine, cancellation, recovery, and evidence are operationally tested.

---

# Summary

Runtime hosts turn declarative extension intent and approved installation grants into bounded execution.

They verify exact packages, establish tenant context, mediate capabilities, isolate resources, validate results, meter use, contain failure, and preserve evidence. Owned extension points ensure extensibility remains outside service internals and authoritative domain boundaries.
