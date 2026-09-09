# XeniosAI Implementation Guide — Product-First Phase

## Status

ARCH-001 through ARCH-040 are retained as **reference architecture**. Their historical implementation remains under `src/`, `architecture/`, `docs/`, and `tests/`.

The active implementation phase is now the **XeniosAI user product**.

## Primary rule

Do not create a new architecture module, descriptor, profile, constant catalog, or conformance-only implementation as a substitute for a user-facing feature.

A feature is complete only when the user journey works through the application and its backend path.

## Required reading order for implementation sessions

1. `PRODUCT_IMPLEMENTATION.md`
2. `TASK_QUEUE.md`
3. `PROJECT_STATE.md`
4. Relevant files under `apps/` and `packages/`
5. Only the ARCH documents needed for the capability being implemented
6. Existing `src/` implementation only when it provides a useful contract/service to reuse or adapt

## Repository roles

```text
apps/web        React/Vite product UI
apps/api        Node/Express product API
packages/*      reusable product services and adapters
src/*           existing architecture implementation/reference code
architecture/*  ARCH-001–040 reference architecture
tests/*         existing architecture tests plus future product tests
```

## Product implementation loop

For each task:

1. Identify the user journey and acceptance criteria.
2. Implement the smallest complete vertical slice through UI, API, persistence, and service layer.
3. Reuse existing ARCH code where it genuinely helps.
4. Add an adapter when existing ARCH code is too abstract for direct product use.
5. Keep secrets server-side and preserve tenant/business isolation.
6. Add or update tests for the actual behavior.
7. Run existing architecture verification when touching shared platform code.
8. Run the product build.
9. Update `TASK_QUEUE.md` and `PROJECT_STATE.md` based on verified product behavior.

## Architecture use

The most important existing architecture mappings are:

- ARCH-004 → request orchestration
- ARCH-014 → agents
- ARCH-015 → workflows
- ARCH-016 → Business Knowledge and memory
- ARCH-018 → business/workspace isolation
- ARCH-021 → frontend experience
- ARCH-022 → identity and organizations
- ARCH-024/025/026 → deterministic catalog, reservations/orders, pricing/payment domain behavior
- ARCH-027 → future channels
- ARCH-028 → analytics
- ARCH-029 → AI provider/model operations
- ARCH-030 → industry solution packs

ARCH-031–040 are later developer/ecosystem work and are not blockers for the XeniosAI customer MVP.

## Definition of done

`descriptor + validator + tests` is architectural evidence, not product completion.

For example, AI model selection is complete only when a user can connect/configure a provider, fetch/select a model, use it in chat, and receive a response through the XeniosAI pipeline.

## Root commands

```bash
npm install
npm run dev
npm run build
npm test
```

`npm run build` preserves the existing architecture verification and also builds the React product.

## Billing

The billing package concerns **XeniosAI SaaS subscriptions for XeniosAI users**. It is separate from payments made by customers of a tenant business. Live payment providers must be implemented behind the server-side billing abstraction with verified webhooks as the authoritative subscription lifecycle input.
