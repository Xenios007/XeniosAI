# Tools, Actions, and Environment Implementation

## Architecture Source

- `architecture/014-ai-agent-framework/05-tools-actions-and-environment.md`

## Implementation Summary

ARCH-014-05 is implemented as a technology-neutral descriptor module in `src/ai-agent-framework`.

The implementation exposes the documented Tool Gateway capabilities, registry fields, tool identities, capability discovery controls, contracts, categories, action classes, action metadata, pre-invocation checks, authorization factors, fine-grained authority levels, approval bindings, credential scope requirements, input/output validation, result semantics, side-effect ledger, idempotency, reconciliation, compensation, invocation states, normalized errors, environments, sandbox and filesystem/network boundaries, data-tool controls, lifecycle states, evaluation areas, observability, evidence, operations, security threats, quality attributes, architectural rules, and explicit boundaries.

## Design Notes

- The descriptor preserves the Tool Gateway as the governed boundary between agent reasoning and platform or real-world effects.
- The profile contract is immutable after construction.
- Validation rejects missing metadata and forbidden tool/action anti-patterns.
- Business-service implementation, business rules, workflow internals, credential technology, sandbox technology, tool protocols/vendors, plugin packaging, and authority grants remain outside this module because ARCH-014-05 explicitly excludes them.

## Verification

- Focused tests: `tests/ai-agent-framework/tools-actions-environment.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
