# ARCH-020-07 — API, Integration, and Extension Reference

**Document ID:** ARCH-020-07  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document demonstrates API products, SDK use, events, adapters, external integrations, plugin packages, extension hosts, and MCP interoperability.

# API Product Reference

The reservation API product publishes tenant-aware availability query, rate quote, reservation command, status query, cancellation, and event contracts.

Each operation defines identity, tenant/property context, request and response schema, errors, idempotency, concurrency, limits, versioning, and service expectations.

# Gateway and Provider

The gateway authenticates, normalizes, applies edge controls, establishes tenant context, and routes.

Providers revalidate context, actor authority, resource ownership, policy, entitlement, and current lifecycle.

# SDK Reference

The SDK demonstrates explicit client configuration, credential acquisition, tenant/property scope, typed contracts, idempotency, deadlines, retries, error mapping, telemetry hooks, and secure logging.

SDK convenience cannot broaden authority or hide provider errors.

# Integration Adapter

An external calendar adapter maps provider events to an internal integration contract.

It owns external credentials, mappings, cursor, rate limits, retry, replay protection, and delivery evidence but not internal availability truth.

# Inbound Flow

1. Platform endpoint authenticates the connection.
2. Tenant and property resolve from trusted binding.
3. Payload schema and replay are validated.
4. Adapter translates external semantics.
5. Domain provider validates and applies an authorized command.
6. Delivery result and evidence are recorded.

# Outbound Flow

Provider events trigger tenant-bound deliveries through approved connections. Retries retain tenant, destination, payload digest, idempotency, and budget.

# Plugin Reference

A notification-channel plugin demonstrates:

* Immutable package and manifest
* Publisher provenance
* Tenant installation
* Capability grant
* Secret reference
* Deny-by-default network
* Isolated host
* Provider authorization
* Usage and health
* Suspension and uninstall

# MCP Reference

An MCP adapter exposes selected read-only property tools. Server identity, connection, discovery, schemas, user or agent authority, tenant scope, budgets, output validation, and evidence are mediated by the host.

Protocol discovery does not authorize tool execution.

# Compatibility

The reference includes API, event, SDK, plugin manifest, extension point, and external provider version matrices.

Breaking changes use new compatibility boundaries, migration, usage visibility, deprecation, and retirement.

# Failure Cases

* Invalid tenant header
* Duplicate callback
* Expired credential
* Provider rate limit
* Schema incompatibility
* Plugin package suspension
* MCP server identity mismatch
* External delivery timeout

# Acceptance Criteria

* All integrations use published contracts.
* Credentials are tenant and connection bound.
* Providers validate resource ownership.
* Retries are idempotent and budgeted.
* Plugin and MCP access is capability mediated.
* Compatibility and retirement are demonstrable.

# Architecture Decisions

* APIs expose business capability rather than databases.
* Adapters own translation, not business truth.
* SDKs preserve contracts.
* Extensions and MCP use the same tenant, capability, host, and evidence rules.

# Summary

The reference demonstrates interoperable APIs and external ecosystems while retaining explicit contracts, provider authority, tenant-bound connections, compatibility, and failure containment.
