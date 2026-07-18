# Foundation Layer Implementation

## Purpose

This document describes the current implementation scope of `ARCH-002-02 Foundation Layer`.

It exists to keep implementation and repository documentation synchronized without modifying the architecture source of truth.

## Implemented Capabilities

- Externalized configuration through `EnvironmentConfigurationProvider`
- Environment-backed secret access through `EnvironmentSecretProvider`
- Structured logging through `StructuredConsoleLogger`
- Metrics abstraction through `Meter` and `InMemoryMeter`
- Feature flags through `FeatureFlagService` and `StaticFeatureFlagService`
- Dependency injection through `ServiceCollection`
- Time abstraction through `Clock` and `SystemClock`
- Identifier generation through `IdGenerator` and `UuidGenerator`
- Shared contracts through `Result`, `PagedResult`, and `ErrorEnvelope`
- Foundation error model through `PlatformError`
- Security primitives through `NodeCryptoService`

## Current Boundaries

The implementation intentionally excludes:

- business rules
- AI orchestration
- conversation state
- service APIs
- persistence adapters
- external provider integrations

These concerns belong to higher architectural layers.

## Notes

- The current foundation uses only the runtime available in the repository environment and does not require third-party package installation.
- Metrics and secrets are implemented with generic abstractions and simple default adapters so future provider-specific implementations can remain isolated.
