# Bounded Contexts Implementation

## Architecture Source

Implements `ARCH-006-02 Bounded Contexts`.

## Scope

The implementation provides executable bounded-context governance:

- Documented primary bounded contexts.
- Context principles, communication mechanisms, and isolation aspects.
- One authoritative owner per context and business concept.
- Context responsibility and ubiquitous-language metadata.
- Explicit contract-based collaboration validation.
- Direct database sharing, target-state modification, implementation dependency, and shared lifecycle rejection.

## Non-Goals

This module does not implement individual entities, aggregates, value objects, domain services, detailed rules, persistence, deployment isolation, or service runtime behavior. Those are covered by later architecture modules.

## Usage

`BoundedContextRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
