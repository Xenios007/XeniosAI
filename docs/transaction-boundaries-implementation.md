# Transaction Boundaries Implementation

## Architecture Source

Implements `ARCH-005-09 Transaction Boundaries`.

## Scope

The implementation provides descriptor-level governance for transaction boundaries:

- Canonical transaction lifecycle stage ordering.
- One authoritative Business Service owner per transaction.
- Local service-boundary transaction validation.
- Rejection of distributed transactions, cross-service communication inside a transaction, event publication before commit, long-running locks, and global rollback.
- Operation validation for business rules, persistence before commit, idempotent retry metadata, failure classification, and post-commit event publication.
- Compensation validation as a new service-owned transaction coordinated by workflow.
- Transaction telemetry validation.

## Non-Goals

This module does not implement database transactions, isolation levels, outbox integration, saga orchestration, transaction dashboards, automated compensation, or cross-region consistency.

## Usage

`TransactionBoundariesDescriptor` is exported from `src/data-flow/index.js` and registered through `addDataFlow`.
