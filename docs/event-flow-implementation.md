# Event Flow Implementation

## Architecture Source

Implements `ARCH-005-04 Event-Driven Architecture`.

## Scope

The implementation provides executable contracts and descriptor-level validation for event-driven data flow:

- Canonical event lifecycle stage ordering.
- Immutable event definitions and event envelopes.
- One authoritative publisher per event.
- Completed-business-fact publication checks.
- Publisher independence from consumers.
- Independent local consumer processing validation.
- Event delivery status and telemetry validation.

## Non-Goals

This module does not implement messaging infrastructure, event replay, event sourcing, schema registries, routing, persistence, retries, or dead-letter queues. Those remain future architecture and infrastructure concerns.

## Usage

`EventFlowDescriptor` is exported from `src/data-flow/index.js` and registered through `addDataFlow`.
