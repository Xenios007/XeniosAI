# Aggregates Implementation

## Architecture Source

Implements `ARCH-006-05 Aggregates`.

## Scope

The implementation provides executable aggregate governance:

- Documented primary aggregates and owning bounded contexts.
- Aggregate principles, reference rules, and collaboration mechanisms.
- One Aggregate Root validation.
- Business invariant ownership and root-enforcement validation.
- Internal entity and value object membership metadata.
- Identity-only external aggregate reference validation.
- Single-aggregate transaction consistency boundary validation.
- Future aggregate candidates as placeholders only.

## Non-Goals

This module does not implement ORM mappings, persistence models, database schemas, repositories, transaction managers, full aggregate mutation behavior, or later domain service/domain rule execution.

## Usage

`AggregateRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
