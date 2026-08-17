# API Security, Access, and Isolation Implementation

## Architecture Source

- `architecture/017-api-sdk-architecture/05-api-security-access-and-isolation.md`

## Implementation Summary

ARCH-017-05 is implemented as an API security, access, and isolation descriptor module in `src/api-sdk`.

The implementation exposes security objectives, identity domains, identity context fields, authentication classes, credential classes and requirements, authorization decision fields, effective-access intersection factors, gateway and provider authorization boundaries, delegation record fields, tenant isolation paths, property isolation prohibitions, data classifications, validation control types, surface security controls, automation access controls, privileged access controls, abuse and budget controls, security test types, non-negotiable architectural rules, and architecture boundaries.

## Design Notes

- Authentication, credential possession, reachability, discovery, SDK possession, identifier knowledge, and model output are explicitly rejected as sources of authorization.
- Provider-side validation remains required even when gateway controls have already authenticated or filtered traffic.
- Tenant and property isolation controls apply before data enters query, search, cache, event, callback, stream, batch, file, telemetry, support, and recovery paths.
- Workflow, AI orchestrator, agent, partner, plugin, administrative, operational, and emergency access remains constrained by explicit identity, purpose, authority, scope, time, and evidence.
- ARCH-008 remains authoritative for enterprise security standards and ARCH-018 remains authoritative for detailed multi-tenancy internals.

## Verification

- Focused tests: `tests/api-sdk/api-security-access-isolation.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
