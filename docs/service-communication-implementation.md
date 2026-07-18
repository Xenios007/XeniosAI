# ARCH-003-06 Service Communication Implementation

## Purpose

This implementation realizes `ARCH-003-06 Service Communication`.

It provides executable governance for approved service communication patterns and versioned public communication contracts.

## Implemented Scope

- Approved communication patterns: query, command, domain event, and workflow orchestration.
- Communication surface classification to reject internal APIs, shared databases, and shared internal models.
- `ServiceCommunicationContract` immutable contract.
- `CommunicationValidationResult` validation contract.
- `ServiceCommunicationRegistry` for contract registration, lookup, listing, pattern characteristics, and validation.
- Dependency-backed communication validation using `ServiceDependencyGraph`.
- Query idempotency validation and observable/secure/versioned contract validation.
- Dependency-injection registration for `ServiceCommunicationRegistry`.
- Tests for approved patterns, contract metadata, anti-pattern rejection, forbidden direct dependencies, duplicate contracts, and DI access.

## Architectural Constraints

- Services communicate through public contracts only.
- Direct communication must be backed by an approved service dependency.
- Queries must be read-only and idempotent.
- Hidden implementation communication patterns are rejected.
- This module does not implement concrete transports, retries, circuit breakers, dead-letter handling, or service mesh behavior.
- Architecture documents were not modified.

## Current Limitations

- Communication validation is runtime governance only.
- Concrete transport and failure-handling implementations remain deferred to later data-flow, integration, infrastructure, and observability architecture modules.
