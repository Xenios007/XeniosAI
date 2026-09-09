# XeniosAI Product-First Implementation Policy

## Product goal

A XeniosAI user should be able to create an account, create a business, add business knowledge, select an AI provider/model, test the business through XeniosAI Chat, configure agents/workflows, inspect operations, and subscribe to a XeniosAI plan.

## Source-of-truth priority

1. Current product requirements and usable end-to-end journeys.
2. Security, privacy, tenant isolation, and deterministic business correctness.
3. Existing ARCH-001–040 rules where compatible.
4. Existing implementation code.

Architecture documentation remains reference material. A descriptor, profile, constant set, validator, or conformance test alone does not mark a product feature complete.

## Mapping to existing architecture

- ARCH-004: runtime request orchestration.
- ARCH-014: real agent definitions/executions behind the Agents surface.
- ARCH-015: durable workflows behind the Workflows surface.
- ARCH-016: Business Knowledge, retrieval, context, and memory boundaries.
- ARCH-018: business/workspace isolation.
- ARCH-021: React experience and conversation surfaces.
- ARCH-022: accounts, Google identity, sessions, membership, and access.
- ARCH-024/025/026: deterministic catalog, bookings/orders, rates, billing, and business transactions.
- ARCH-027: future Messenger, Instagram, WhatsApp, email, voice, and human handoff.
- ARCH-028: analytics.
- ARCH-029: provider/model registry, routing, comparison, evaluation, cost, and fallback.
- ARCH-030: solution packs; Casa Lluvia is the first production-shaped hospitality validation business but must not be hard-coded.
- ARCH-031–040: future developer/ecosystem capabilities; not blockers for the customer MVP.

## Current vertical slice

The `apps/web` and `apps/api` workspaces establish the first real product path. `packages/*` provides product services that can selectively adapt or reuse existing `src/*` architecture implementations.

## Billing scope

Billing in this slice means XeniosAI SaaS account billing. Billing records are user scoped and must not be confused with a tenant business's own customer payments. Live payment secrets remain server-side. Webhooks are authoritative for live subscription lifecycle changes.

## Definition of product completion

A feature is complete when a user can perform the journey through the UI and the backend path is tested and working. Architecture metadata may support the feature but cannot substitute for it.
