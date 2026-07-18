# Domain Rules Implementation

## Architecture Source

Implements `ARCH-006-08 Domain Rules`.

## Scope

The implementation provides executable Domain Rule governance:

- Documented rule categories, characteristics, enforcement owners, and consistency sequence.
- Domain Rule definitions with one bounded-context owner.
- Validation that rejects duplicated rules, technical constraints, and framework-specific concerns.
- Rule evaluation validation before business state changes and Domain Event publication.
- Rule collaboration validation that preserves bounded-context ownership.
- Future rule categories as placeholders only.

## Non-Goals

This module does not implement a technical validation framework, rules engine, policy DSL, persistence, infrastructure configuration, regulatory engines, AI governance execution, or dynamic optimization.

## Usage

`DomainRuleRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
