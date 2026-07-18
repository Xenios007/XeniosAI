# Domain Lifecycle Implementation

## Architecture Source

Implements `ARCH-006-09 Domain Lifecycle`.

## Scope

The implementation provides executable Domain Lifecycle governance:

- Documented Aggregate-owned lifecycles for Reservation, Payment, Guest, Property, and Workflow.
- Initial states, valid states, legal transitions, terminal states, and lifecycle events.
- Transition validation through owning Aggregate Roots.
- History validation that rejects rewrites and illegal historical progression.
- Consistency sequence validation before state changes and Domain Event publication.
- Future lifecycle candidates as placeholders only.

## Non-Goals

This module does not implement state machine libraries, workflow engines, database persistence, user interface behavior, runtime orchestration, or external lifecycle mutation.

## Usage

`DomainLifecycleRegistry` is exported from `src/domain-model/index.js` and registered through `addDomainModel`.
