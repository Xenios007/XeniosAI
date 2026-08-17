# API Product and Contract Model Implementation

## Architecture Source

- `architecture/017-api-sdk-architecture/02-api-product-and-contract-model.md`

## Implementation Summary

ARCH-017-02 is implemented as a protocol-neutral descriptor module in `src/api-sdk`.

The implementation exposes the documented canonical model for API domains, API products, product surfaces, provider relationships, contracts, contract sources, authority order, contract packages, operations, messages, fields, presence semantics, mutability, identifiers, tenant/property declarations, security/privacy declarations, temporal and consistency metadata, limits, service commitments, dependencies, consumer profiles, contract views, composition, anti-corruption translation, derived artifacts, SDK declarations, documentation, examples, registry authority, lifecycle states, quality dimensions, validation checks, review participants, approval assertions, traceability, evidence, product model operations, non-negotiable rules, and boundaries.

## Design Notes

- API products are modeled as owned capability products, not reachable endpoints.
- Approved contract source remains authoritative; generated artifacts, deployed configuration, runtime discovery, SDKs, documentation, examples, mocks, tests, gateway configuration, and catalog entries remain derived and traceable.
- Validation rejects shortcuts such as self-owned products, field-name-only semantics, silent value conflation, registry discovery as access, syntax validation as correctness proof, and silent mutation of released contract behavior.
- Detailed interaction patterns, lifecycle/versioning, API security/access enforcement, SDK architecture, developer experience, governance, operations/performance, and tenant internals remain outside this module because ARCH-017-02 explicitly assigns them to later architecture chapters.

## Verification

- Focused tests: `tests/api-sdk/api-product-contract-model.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
