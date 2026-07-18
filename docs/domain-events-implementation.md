# Domain Events Implementation

## Architecture Source

Implements `ARCH-006-07 Domain Events`.

## Scope

The implementation provides executable Domain Event governance:

- Documented business-fact Domain Events and owning bounded contexts.
- Immutable Domain Event definitions and records.
- One-publisher ownership validation.
- Past-tense ubiquitous-language validation.
- Publication validation after business consistency and transaction completion.
- Independent consumer validation without publisher-state mutation or global ordering assumptions.
- Aggregate-local ordering validation.
- Future Domain Event candidates as placeholders only.

## Non-Goals

This module does not implement event brokers, messaging middleware, serialization formats, transport protocols, outbox processing, replay, event sourcing, or workflow execution.

## Usage

`DomainEventRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
