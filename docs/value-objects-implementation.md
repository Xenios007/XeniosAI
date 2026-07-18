# Value Objects Implementation

## Architecture Source

Implements `ARCH-006-04 Value Objects`.

## Scope

The implementation provides executable value-object governance:

- Documented common value objects.
- Value object characteristics and ownership rules.
- Immutable definitions and instances.
- Validation for no identity, value equality, immutability, owner containment, and no independent lifecycle.
- Business validation for documented examples such as Money, Date Range, Email Address, Guest Count, Coordinates, Duration, and Percentage.
- Future value-object candidates as placeholders only.

## Non-Goals

This module does not implement serialization, persistence formats, database mappings, framework objects, repositories, or later aggregate/domain-rule behavior.

## Usage

`ValueObjectRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
