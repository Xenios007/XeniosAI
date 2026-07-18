# Domain Overview Implementation

## Architecture Source

Implements `ARCH-006-01 Domain Overview`.

## Scope

The implementation provides executable domain overview governance:

- Platform domain and documented domain hierarchy.
- Ubiquitous language terms and meanings.
- Authoritative ownership for domain concepts.
- Domain modeling principles and boundary rules.
- Business capability validation.
- Domain relationship validation as collaboration rather than ownership transfer.
- Owner-controlled business state model validation.

## Non-Goals

This module does not implement bounded contexts, core entities, value objects, aggregates, domain services, domain events, detailed business rules, persistence, APIs, or workflow behavior. Those are covered by later ARCH-006 chapters.

## Usage

`DomainOverviewDescriptor` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
