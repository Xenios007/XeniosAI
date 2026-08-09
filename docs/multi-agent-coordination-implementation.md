# Multi-Agent Coordination Implementation

## Architecture Source

- `architecture/014-ai-agent-framework/06-multi-agent-coordination.md`

## Implementation Summary

ARCH-014-06 is implemented as a technology-neutral descriptor module in `src/ai-agent-framework`.

The implementation exposes the documented multi-agent selection criteria, inappropriate-use criteria, coordination goals, roles, patterns, topologies, shared goal fields, task ownership, delegation contracts, authority attenuation, delegation admission, parent-child chain records, lifecycle states, delegate selection, versioned messages, message authorization, shared-state boundaries, concurrency, barriers, conflict resolution, independent review, result aggregation, failure propagation, cancellation flow, human supervision and takeover, security threats, evidence, observability, evaluation, operations, quality attributes, architectural rules, and explicit boundaries.

## Design Notes

- Multi-agent coordination remains optional and justified by measurable value over simpler designs.
- The profile contract is immutable after construction.
- Validation rejects missing metadata and forbidden coordination anti-patterns.
- Model internals, workflow internals, authority grants, tool implementation, knowledge/memory storage, communication protocol selection, and multi-agent framework product selection remain outside this module because ARCH-014-06 explicitly excludes them.

## Verification

- Focused tests: `tests/ai-agent-framework/multi-agent-coordination.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
