# ARCH-003-05 Domain Boundaries Implementation

## Purpose

This implementation realizes `ARCH-003-05 Domain Boundaries`.

It provides executable service boundary definitions for what each service owns, explicitly does not own, and may collaborate with.

## Implemented Scope

- `ServiceBoundary` immutable contract.
- `SharedConcept` immutable contract.
- `BoundaryValidationResult` validation contract.
- `ServiceBoundaryRegistry` for boundary lookup, ownership-claim validation, collaboration checks, and shared concept lookup.
- Duplicate boundary protection and explicit boundary violation errors.
- Dependency-injection registration for `ServiceBoundaryRegistry`.
- Tests for boundary facts, ownership validation, collaboration checks, shared concepts, duplicate protection, missing boundaries, violations, and DI access.

## Architectural Constraints

- Services reference shared concepts but do not redefine ownership.
- Boundary validation rejects claims for explicitly excluded concepts.
- Collaboration facts are metadata only; communication patterns are deferred to `ARCH-003-06 Service Communication`.
- Architecture documents were not modified.

## Current Limitations

- Boundary validation is runtime governance only.
- Static detection of business logic leakage across service implementations is deferred until architecture tooling exists.
