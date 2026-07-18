# Messaging Patterns Implementation

## Architecture Source

Implements `ARCH-005-08 Messaging Patterns`.

## Scope

The implementation provides descriptor-level governance for messaging:

- Canonical message lifecycle stage ordering.
- Supported messaging styles, message types, routing strategies, delivery models, retry policies, security controls, and processing statuses.
- Immutable message contracts, envelopes, processing records, telemetry records, and validation results.
- Validation for explicit payloads, producer independence, implementation-detail isolation, ordering scope, duplicate handling, acknowledgements, dead-letter handling, expiration, and telemetry.

## Non-Goals

This module does not select or implement a message broker, queue, stream processor, transport protocol, retry executor, dead-letter store, or cross-region messaging.

## Usage

`MessagingPatternsDescriptor` is exported from `src/data-flow/index.js` and registered through `addDataFlow`.
