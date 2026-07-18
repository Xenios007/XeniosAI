# Service Integration Implementation

## Architecture Source

Implements `ARCH-005-06 Service Integration`.

## Scope

The implementation provides descriptor-level governance for service integration:

- Canonical integration lifecycle stage ordering.
- Internal, external, and platform integration categories.
- Explicit service contracts with request, response, error model, version, compatibility, reliability, security, and observability metadata.
- Authorized request construction through published interfaces.
- Predictable response validation.
- Boundary checks that prevent implementation-detail coupling and direct internal-state access.
- Integration telemetry validation.

## Non-Goals

This module does not implement service discovery, network transports, API gateways, message brokers, provider SDKs, retry execution, circuit breakers, queues, or contract registry infrastructure.

## Usage

`ServiceIntegrationDescriptor` is exported from `src/data-flow/index.js` and registered through `addDataFlow`.
