# Reliability & Resilience Implementation

## Architecture Source

Implements `ARCH-009-09 Reliability & Resilience`.

## Scope

The implementation provides executable reliability and resilience governance:

- Reliability objective, model, principle, failure scenario, degradation approach, controlled dependency, failure category, recovery, retry, timeout, dependency, workflow resilience, AI resilience, operational continuity, availability, observability, security, governance, relationship, and future-direction metadata.
- An immutable `ReliabilityResilienceProfile` contract for validating integration resilience architecture decisions.
- Validation for assuming failure, isolating failures, preserving business continuity, graceful degradation, independent recovery, idempotency, business-aligned timeouts, observable dependency failures, AI-aware recovery, business-capability-level availability, recovery security, and vendor neutrality.

## Non-Goals

This module does not implement resiliency frameworks, infrastructure products, cloud services, monitoring tools, implementation mechanisms, runtime retry execution, or recovery orchestration.

## Usage

`ReliabilityResilienceDescriptor` is exported from `src/integration-architecture/index.js` and registered through `addIntegrationArchitecture`.
