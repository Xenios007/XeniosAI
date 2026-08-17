# API Design and Interaction Patterns Implementation

## Architecture Source

- `architecture/017-api-sdk-architecture/03-api-design-and-interaction-patterns.md`

## Implementation Summary

ARCH-017-03 is implemented as a transport-neutral descriptor module in `src/api-sdk`.

The implementation exposes the documented interaction objectives, primary interaction classes, pattern-selection criteria, resource patterns, resource representations, point and collection query patterns, pagination, filtering, sorting, search, query consistency, command and action semantics, completion distinctions, asynchronous operation references, long-running operation states, idempotency, concurrency, errors, partial outcomes, events, callbacks, streams, batches, correlation, rate limits, quotas, caching, gateway composition, workflow and agent interaction, degraded operation, observability, evidence, conformance requirements, pattern decision records, non-negotiable rules, and boundaries.

## Design Notes

- Interaction design starts from owned capability and consumer outcome, not database tables, routes, generated methods, or transport verbs.
- Acceptance, processing, completion, settlement, publication, delivery, timeout, cancellation, and compensation remain distinct where material.
- Validation rejects shortcuts such as hidden query mutations, identifier-based authority, pagination cursors as credentials, search relevance as authority, retry-all behavior, exactly-once delivery claims, unbounded streams, cache keys missing tenant/property dimensions, gateway-owned domain rules, and API discovery as agent permission.
- Product and contract modeling remains owned by ARCH-017-02; lifecycle/versioning, detailed security enforcement, SDK distribution, developer conformance experience, governance, and operations/performance remain outside this module.

## Verification

- Focused tests: `tests/api-sdk/api-design-interaction-patterns.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
