# Domain Services Implementation

## Architecture Source

Implements `ARCH-006-06 Domain Services`.

## Scope

The implementation provides executable domain-service governance:

- Documented Domain Services and owning bounded contexts.
- Stateless service definition validation.
- Business operation validation for domain reasoning.
- Collaboration validation that respects Aggregate Roots and bounded-context ownership.
- Separation from Application Services and infrastructure concerns.
- Future Domain Service candidates as placeholders only.

## Non-Goals

This module does not implement application-service orchestration, infrastructure adapters, persistence, workflows, external APIs, AI orchestration behavior, or concrete pricing/payment/notification execution.

## Usage

`DomainServiceRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
