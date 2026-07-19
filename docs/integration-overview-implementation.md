# Integration Overview Implementation

## Architecture Source

Implements `ARCH-009-01 Integration Overview`.

## Scope

The implementation provides executable integration architecture governance:

- Integration treatment, objective, enterprise model, principle, contract, loose-coupling, security, domain, communication model, participant, boundary, connectivity, lifecycle, quality, governance, relationship, and future-direction metadata.
- Immutable contracts for integration domain profiles, integration contract boundaries, and validation results.
- Validation for governed integration domains.
- Validation for explicit, secure, business-centric, loosely coupled integration contract boundaries.

## Non-Goals

This module does not implement protocols, middleware products, runtime adapters, interface definitions, message brokers, API gateways, or vendor-specific integration platforms.

## Usage

`IntegrationOverviewDescriptor` is exported from `src/integration-architecture/index.js` and registered through `addIntegrationArchitecture`.
