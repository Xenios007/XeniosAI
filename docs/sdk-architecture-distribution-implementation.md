# SDK Architecture and Distribution Implementation

## Architecture Source

- `architecture/017-api-sdk-architecture/06-sdk-architecture-and-distribution.md`

## Implementation Summary

ARCH-017-06 is implemented as an SDK architecture and distribution descriptor module in `src/api-sdk`.

The implementation exposes SDK objectives, architectural principles, core definitions, SDK declaration fields, audience classifications, logical layers, contract-layer elements, generation manifest fields, production-flow stages, client-configuration fields, behavior controls, extension boundaries, test-support types, version and release fields, distribution controls, lifecycle controls, governance decisions, quality gates, required evidence, non-negotiable rules, and architecture boundaries.

## Design Notes

- The approved API contract remains authoritative over SDK behavior.
- SDKs are modeled as governed products, not informal wrappers or automatically supported generated packages.
- Generated and handwritten SDK code remain separated by explicit, reviewable boundaries.
- SDK possession, configuration, endpoint knowledge, cached state, and client-side validation do not grant authority.
- Distribution is treated as a security boundary covering package identity, provenance, integrity, registries, publication, release channels, update, rollback, deprecation, retirement, and revocation.
- The module remains technology neutral and does not select languages, package managers, generators, transports, registries, identity providers, build systems, or vendors.

## Verification

- Focused tests: `tests/api-sdk/sdk-architecture-distribution.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
