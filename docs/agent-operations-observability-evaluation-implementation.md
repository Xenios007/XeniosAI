# Agent Operations, Observability, and Evaluation Implementation

## Architecture Source

- `architecture/014-ai-agent-framework/09-agent-operations-observability-and-evaluation.md`

## Implementation Summary

ARCH-014-09 is implemented as a technology-neutral descriptor module in `src/ai-agent-framework`.

The implementation exposes the documented operational scope, ownership roles, responsibilities, readiness items, service model fields, service commitments, health dimensions and states, signal types, metrics, log events, prohibited log content, trace correlation points, domain events, audit events, business outcomes, quality signals, dashboards, alerts, evaluation methods, evaluation layers, datasets, scenarios, deterministic checks, model-based evaluation controls, evaluation metrics, release gates, controlled rollout, drift, incidents, containment, change operations, rollback scopes, capacity, performance, cost attribution, continuity, graceful degradation, recovery, human intervention, runbooks, operational evidence, feedback, operational review, quality attributes, architectural rules, and boundaries.

## Design Notes

- Agent health is modeled as business-first health, not infrastructure availability alone.
- Observability is based on correlated evidence across identities, executions, models, tools, workflows, delegations, human decisions, and business results without requiring unrestricted model deliberation.
- Evaluation is treated as a lifecycle control with deterministic tests preferred for deterministic requirements and model judges prohibited as the sole high-risk assurance control.
- Observability product selection, evaluation product selection, model training, service-management product selection, and replacement of ARCH-010, ARCH-011, or ARCH-012 remain outside this module because ARCH-014-09 explicitly excludes them.

## Verification

- Focused tests: `tests/ai-agent-framework/agent-operations-observability-evaluation.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
