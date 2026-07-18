# ARCH-003-04 Service Dependencies Implementation

## Purpose

This implementation realizes `ARCH-003-04 Service Dependencies`.

It provides an executable dependency graph for XeniosAI services and validates allowed, forbidden, duplicate, and circular dependency relationships.

## Implemented Scope

- `ServiceDependencyRecord` immutable contract.
- `ServiceDependencyValidationResult` validation contract.
- `ServiceDependencyGraph` using the ARCH-003-04 dependency matrix.
- Explicit dependency types for functional, informational, operational, and infrastructure dependencies.
- Explicit external dependency identifiers for Integration Layer and Object Storage.
- Dependency lookup, validation, assertion, duplicate protection, and cycle detection.
- Dependency-injection registration for `ServiceDependencyGraph`.
- Tests for matrix coverage, allowed/forbidden validation, external dependencies, duplicates, cycles, and DI access.

## Architectural Constraints

- Dependencies represent capabilities, not implementation shortcuts.
- Circular service dependencies are rejected.
- External dependencies are represented explicitly rather than hidden behind service names.
- Ownership remains governed by `ServiceOwnershipRegistry`.
- Domain boundaries and communication behavior remain deferred to later ARCH-003 modules.
- Architecture documents were not modified.

## Current Limitations

- Dependency validation is runtime governance only.
- Static source dependency enforcement is deferred until tooling architecture defines it.
- Failure-handling mechanisms such as retries, timeouts, and circuit breakers remain implementation concerns for later communication and integration modules.
