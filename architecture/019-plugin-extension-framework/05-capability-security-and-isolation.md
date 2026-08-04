# ARCH-019-05 — Capability Security and Isolation

**Architecture Domain:** Extensibility, Plugin, and Ecosystem Architecture

**Document ID:** ARCH-019-05

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines the security architecture for extension capability grants, tenant isolation, runtime isolation, data and secret access, network control, supply-chain risk, resource containment, incident response, and security assurance.

---

# Security Principles

* Extensions are untrusted by default.
* Capability is explicitly granted and continuously enforceable.
* Tenant and property scope is mandatory.
* Host and provider controls form defense in depth.
* No ambient credentials or direct database access are permitted.
* Network egress is deny by default.
* Data use is purpose, classification, and retention bounded.
* Execution and storage are isolated by installation.
* Delegation cannot expand capability.
* Security state can revoke active authority rapidly.
* Evidence is complete without leaking secrets or tenant content.

---

# Threat Model

Threats include:

* Malicious publisher or package
* Compromised publisher credentials
* Vulnerable dependency
* Forged manifest or package substitution
* Excessive capability request
* Confused-deputy access through the host
* Cross-tenant data access
* Secret theft
* Undeclared data export
* Network command-and-control
* Host escape
* Resource exhaustion
* Persistent execution after revocation
* UI credential capture or deception
* Prompt injection into extension-provided AI tools
* Unsafe update or rollback
* Evidence tampering

Controls assume packages can be faulty or hostile.

---

# Capability Grant Model

A grant identifies:

* Extension and installation
* Package compatibility bounds
* Tenant and property scope
* Capability identifier
* Operations and resources
* Data classification and purpose
* Acting identities or execution classes
* External destinations
* Secret references
* Time and schedule
* Resource limits
* Delegation policy
* Approval, policy version, and evidence

Grants are immutable by version, short or bounded in validity according to risk, and revocable.

---

# Grant Derivation

Effective capability is the intersection of:

1. Extension-point eligibility
2. Manifest request
3. Publisher eligibility
4. Package review restrictions
5. Platform security policy
6. Tenant and property policy
7. Installer delegated authority
8. Entitlement
9. Current tenant, installation, and package state
10. Runtime actor, workflow, or agent authority
11. Resource and risk conditions

No layer can broaden a stricter upstream bound.

---

# Capability Granularity

Preferred grants use specific resources and operations such as:

* Read approved property amenities
* Create a notification through a selected channel
* Subscribe to one event schema
* Execute a named workflow activity
* Read one knowledge-source class
* Call an approved external endpoint
* Store data in an installation namespace

Broad wildcard access requires exceptional justification and stronger controls.

---

# Runtime Identity

Every execution carries:

* Host workload identity
* Extension identity
* Installation identity
* Package digest
* Execution identifier
* Tenant and property context
* Initiating actor or process reference
* Purpose and capability grant
* Expiry and correlation

Provider services validate both the trusted host and the extension execution context.

---

# Tenant Isolation

The platform isolates by tenant and installation across:

* Runtime processes or equivalent compartments
* Storage and files
* Caches
* Queues and event subscriptions
* Configuration and secrets
* Network policy
* Logs, traces, metrics, and evidence
* Usage and billing
* Backups and exports

Tenant identity is not accepted from extension-controlled payload fields without validation.

---

# Host Isolation Classes

Reference isolation classes may include:

## Declarative

No arbitrary code; the host interprets bounded configuration or workflow constructs.

## Sandboxed Code

Code runs in a constrained runtime with limited APIs, memory, time, filesystem, and network.

## Isolated Workload

Code runs in a separate process, container, micro-virtualized environment, or equivalent boundary with explicit service interfaces.

## Dedicated Host

High-risk or specialized execution uses tenant- or extension-dedicated host resources.

Selection is driven by behavior and risk, not language preference alone.

---

# Host Security Controls

Hosts enforce:

* Package digest and status verification
* Runtime image or environment integrity
* Least-privilege host identity
* Read-only package assets
* Ephemeral execution where appropriate
* Filesystem namespace
* System call or runtime restrictions
* Network policy
* Resource limits
* Secret mediation
* API and event mediation
* Logging and termination

Extensions cannot modify host policy or inspect neighboring executions.

---

# Provider-Side Enforcement

Domain and platform providers verify:

1. Host and execution identity
2. Tenant and property context
3. Current installation and grant
4. Resource tenant ownership
5. Initiating actor or delegated authority
6. Purpose and entitlement
7. Operation-specific policy
8. Rate and resource limits

Host validation does not replace provider authorization.

---

# Data Access

Extensions access data through approved APIs, events, files, knowledge interfaces, or export contracts.

They cannot:

* Connect to service databases
* Use internal storage credentials
* Enumerate other tenant resources
* Bypass provider filters
* Reassign resource ownership
* Store data beyond granted purpose
* Use tenant data for unrelated training or analytics

Responses are minimized to the capability purpose.

---

# Extension Storage

Extension storage is bound to tenant and installation identity.

Storage policy defines:

* Data classes allowed
* Capacity
* Encryption
* Placement and residency
* Access principals
* Backup and recovery
* Retention and legal hold
* Export and uninstall disposition

Publisher access requires a separate, declared processor relationship and authorization.

---

# Secret Mediation

Secrets are stored by the platform secrets capability and supplied only to an authorized execution or mediated connector.

Controls include:

* Tenant and installation binding
* Destination and capability binding
* Short-lived credentials where possible
* Non-exportability
* Rotation and revocation
* Redaction from logs and errors
* Access evidence

Extensions receive opaque handles instead of raw values where supported.

---

# Network Security

Outbound access is limited by:

* Approved destination identity
* DNS and address policy
* Protocol and port
* Tenant connection
* Data classification
* Purpose
* Rate and payload limits
* Residency and processor policy
* Transport security

Redirects, alternate addresses, and dynamic resolution are revalidated to prevent allowlist bypass.

---

# Inbound Connectivity

Inbound traffic terminates at platform-managed endpoints with authentication, tenant connection binding, schema validation, threat protection, replay control, quota, and correlation.

Extensions do not expose arbitrary listeners or control public routing directly.

Callback tokens and endpoints are tenant, installation, and purpose bound.

---

# Event Security

Event grants specify schemas, direction, tenant scope, filters, volume, replay, and retention.

Publishers cannot forge tenant scope. Consumers validate producer, envelope, tenant, schema, grant, and idempotency.

Dead-letter and replay operations are privileged and evidence producing.

---

# Workflow and Agent Security

Workflow or agent execution provides the extension a bounded delegated capability.

The extension cannot:

* Expand tenant or property scope
* Discover ungranted tools
* Spawn unbounded child executions
* Persist credentials in state or memory
* Treat model output as authorization
* Bypass human approval

Budgets and revocation propagate through delegation.

---

# UI Extension Security

UI controls include:

* Isolated origin or equivalent sandbox
* Content security policy
* Typed host messaging
* Explicit data and action grants
* Tenant-context display integrity
* Navigation controls
* Clipboard, camera, microphone, file, and notification policy
* Accessibility and anti-deception review

UI extensions cannot render platform authentication prompts or capture platform credentials.

---

# MCP Security

MCP connections are bound to a tenant installation or restricted platform capability.

Controls verify server identity, transport, tool schemas, resource discovery, prompts, requested operations, data classifications, external destinations, user or agent authority, and response content.

Tool discovery is filtered by current grant. Server-provided descriptions are untrusted content and cannot modify policy.

---

# Supply-Chain Security

Runtime admission checks package digest, publisher, provenance, signature, dependency and advisory status, review profile, compatibility, and installation policy.

Critical advisory data can deny execution even when a package was previously approved.

Build trust and runtime least privilege are complementary.

---

# Resource Containment

Hosts enforce limits on:

* CPU or execution units
* Memory
* Duration
* Concurrency
* Storage
* API and event calls
* Model and tool use
* Network volume
* Retries and schedules
* Log and telemetry volume

One extension cannot exhaust tenant or platform recovery capacity.

---

# Failure Containment

Controls include:

* Timeouts
* Cancellation
* Circuit breakers
* Bulkheads
* Bounded retries
* Backpressure
* Health quarantine
* Host recycling
* Compensating workflow

Extension failure is not allowed inside an authoritative transaction unless the extension point explicitly defines safe, bounded semantics.

---

# Revocation

Revocation can target:

* Capability grant
* Secret or credential
* Network destination
* Installation
* Package version
* Extension
* Publisher
* Host class

Hosts and providers receive revocation within objectives based on risk. Long-running executions check current authority at defined boundaries.

---

# Incident Response

Suspected extension compromise triggers:

1. Identify package, installations, tenants, grants, and executions.
2. Contain package loading, capability, network, or credentials.
3. Preserve host, provider, registry, and publisher evidence.
4. Assess tenant data, actions, and external transfers.
5. Notify required stakeholders.
6. Patch, rebuild, rotate, update, or uninstall.
7. Reconcile data and side effects.
8. Retest and close remediation.

Cross-tenant exposure is treated as a material security and privacy event.

---

# Security Evidence

Evidence includes package admission, grant decisions, secret access, provider authorization, network connections, data export, event use, execution, resource limits, denials, suspension, and incident actions.

Evidence avoids raw secrets, unnecessary personal data, and unbounded extension-controlled log content.

---

# Security Testing

Tests include:

* Manifest capability mismatch
* Package substitution and signature failure
* Forged tenant context
* Direct-object cross-tenant access
* Host escape and neighboring execution access
* Secret leakage
* Network allowlist bypass
* Event spoofing and replay
* UI credential capture
* MCP prompt or tool-description injection
* Resource exhaustion
* Revocation during execution
* Uninstall persistence

High-risk packages require independent testing appropriate to capability.

---

# Architecture Decisions

* Effective capability is an intersection of manifest, policy, tenant consent, and runtime authority.
* Host and provider enforcement are both required.
* No extension receives ambient credentials or database access.
* Network is deny by default and destination bound.
* Storage and evidence are tenant and installation scoped.
* Isolation class is risk based.
* UI and MCP extensions are untrusted input and code boundaries.
* Resource budgets propagate through workflow and agent delegation.
* Revocation affects active capability within defined objectives.
* Extension compromise has a package-to-tenant impact model.

---

# Validation Criteria

This architecture is satisfied when:

* Every execution traces to a current installation and grant.
* Host and providers independently validate protected access.
* Extension storage, secrets, network, telemetry, and resources remain isolated.
* Cross-tenant and privilege-escalation tests fail closed.
* Packages cannot access service databases or ambient credentials.
* Revocation blocks new and contains active execution.
* Resource exhaustion remains bounded by installation and tenant.
* Security operations can identify all installations affected by a package or dependency.

---

# Summary

The capability security model assumes extensions can be compromised or malicious and limits what any package can reach, retain, transfer, or consume.

Explicit grants, trusted tenant context, isolated hosts, provider-side authorization, mediated secrets, deny-by-default networks, bounded storage and resources, rapid revocation, and adversarial testing preserve XeniosAI trust even as the extension ecosystem grows.
