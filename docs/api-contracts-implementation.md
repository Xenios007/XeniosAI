# API Contracts Implementation

## Architecture Source

Implements `ARCH-005-07 API Contracts`.

## Scope

The implementation provides descriptor-level governance for API contracts:

- Canonical API interaction lifecycle stage ordering.
- Explicit, versioned, stable, capability-based contract definitions.
- One authoritative service owner per API contract.
- Request, response, error, compatibility, security, pagination, filtering, sorting, and telemetry validation.
- Implementation-independence checks for storage, framework, and internal behavior exposure.

## Non-Goals

This module does not implement REST, GraphQL, RPC, gateways, schema registries, automatic client generation, or contract testing infrastructure.

## Usage

`ApiContractDescriptor` is exported from `src/data-flow/index.js` and registered through `addDataFlow`.
