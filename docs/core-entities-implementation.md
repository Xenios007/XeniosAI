# Core Entities Implementation

## Architecture Source

Implements `ARCH-006-03 Core Entities`.

## Scope

The implementation provides executable core-entity governance:

- Documented primary business entities and owning bounded contexts.
- Entity characteristics, reference rules, and integrity rules.
- Stable business identity validation.
- Entity instance ownership, state, invariant, and persistence-structure validation.
- Entity reference validation through stable business identity without embedded foreign objects.
- Owner-controlled state transition validation for documented lifecycle examples.
- Future entity candidates as placeholders only.

## Non-Goals

This module does not implement detailed aggregate rules, value objects, repositories, persistence schemas, APIs, lifecycle workflow engines, or full business behavior execution. Those are covered by later architecture modules.

## Usage

`CoreEntityRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
