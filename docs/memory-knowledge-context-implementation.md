# Agent Memory, Knowledge, and Context Implementation

## Architecture Source

- `architecture/014-ai-agent-framework/07-agent-memory-knowledge-and-context.md`

## Implementation Summary

ARCH-014-07 is implemented as a technology-neutral descriptor module in `src/ai-agent-framework`.

The implementation exposes the documented distinctions between knowledge, memory, context, and execution state; knowledge and memory categories; context layers; assembly pipeline; request and package fields; provenance, authority, trust, freshness, relevance, minimization, budgets, compression, memory retrieval and write-back, correction/deletion/expiration, knowledge retrieval and publication boundaries, derived knowledge, runtime state references, caching, provider checks, contamination controls, prompt-injection signals, context failures, evidence, observability, evaluation, governance, quality attributes, architectural rules, and explicit boundaries.

## Design Notes

- The descriptor keeps model context temporary and non-authoritative.
- The profile contract is immutable after construction.
- Validation rejects missing metadata and forbidden memory/context anti-patterns.
- Knowledge store implementation, memory store implementation, retrieval/embedding technology, data-model internals, business-service state, runtime state storage, and product selection remain outside this module because ARCH-014-07 explicitly excludes them.

## Verification

- Focused tests: `tests/ai-agent-framework/memory-knowledge-context.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
