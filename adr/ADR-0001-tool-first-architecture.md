# ADR-0001: Tool-First Architecture

- Status: Accepted
- Date: 2026-06-29
- Version: 1.0

## Context

XeniosAI is designed as an AI-native Hospitality Operating System. Large language models are excellent at reasoning and natural language interaction but should not directly implement or own business rules.

Business rules such as pricing, availability, booking validation, payments, refunds, discounts, guest authorization, and operational workflows require deterministic behavior, auditing, testing, and versioning.

## Decision

XeniosAI adopts a Tool-First Architecture.

The AI layer is responsible for:
- Understanding user intent.
- Gathering missing information.
- Explaining results.
- Selecting the correct backend capability.

The backend services are responsible for:
- Pricing calculations.
- Booking management.
- Calendar synchronization.
- Payment processing.
- Availability validation.
- Business policy enforcement.
- Data persistence.

The AI must interact with business capabilities exclusively through well-defined tools and APIs.

## Consequences

### Benefits
- Deterministic business logic.
- Easier testing and auditing.
- Replaceable AI models.
- Scalable service-oriented architecture.
- Consistent behavior across all communication channels.

### Trade-offs
- Requires clear API contracts.
- Slightly higher implementation complexity.
- More initial architectural work.

## Rationale

Separating reasoning from business logic improves maintainability, scalability, security, and long-term evolution of the platform. This enables XeniosAI to support thousands of hospitality properties while allowing AI models to be upgraded or replaced without rewriting core services.

## Related Documents
- PROJECT_CONSTITUTION.md
- XENIOS_MANIFESTO.md
- ROADMAP.md
- AI_CONTEXT.md