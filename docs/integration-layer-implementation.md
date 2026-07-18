# Integration Layer Implementation

## Purpose

This document describes the current implementation scope of `ARCH-002-09 Integration Layer`.

It exists to keep implementation and repository documentation synchronized without modifying the architecture source of truth.

## Implemented Capabilities

- Provider-neutral integration contracts
- Integration request and response normalization
- Provider adapter abstraction
- Simulated adapters for messaging, calendar, and AI provider capabilities
- Integration registry for capability discovery
- Retry policy and circuit breaker extension points
- In-memory message bus for messages and events
- Integration service for adapter invocation and telemetry

## Current Boundaries

The implementation intentionally excludes:

- real external provider SDKs
- network calls
- provider credentials
- concrete payment, messaging, calendar, or AI vendors
- durable messaging infrastructure
- production circuit breaker storage

These concerns require provider-specific implementation modules and security configuration.

## Notes

- Simulated adapters exist only to verify the integration boundary.
- Business Services decide when capabilities are needed; the Integration Layer only communicates through governed contracts.
