# XeniosAI Project State

## Active direction

**Phase:** Product-First MVP

**Branch introduced for pivot:** `product-first-mvp`

The previous ARCH-001–040 portfolio remains complete as reference architecture and historical implementation evidence. It is no longer the active unit of product progress.

## Current product implementation

Implemented in the first vertical slice:

- npm workspace layout with `apps/` and `packages/`
- React + Vite product shell
- Node.js + Express API
- email/password account registration and login
- HttpOnly session cookie
- Google Identity token verification path when configured
- persistent MVP JSON repository
- multi-business creation and selection
- manual Business Knowledge creation/deletion
- grounded knowledge-context builder
- XeniosAI Chat product surface
- AI provider registry covering major provider families
- live first adapters for OpenAI and OpenRouter when server credentials/model IDs are configured
- local grounded test provider
- Dashboard, AI Chat, Business Knowledge, AI Models, Agents, Tasks, Workflows, Memory, Analytics, Billing, Logs, System, and Settings navigation
- XeniosAI SaaS billing plans
- local/mock subscription checkout
- Stripe subscription Checkout integration
- Stripe customer billing portal integration
- verified raw-body webhook path and subscription-state persistence
- root `npm run dev` workspace orchestration
- root build keeps existing architecture verification

## Deliberately not claimed complete

These product surfaces exist but still need real runtime implementations:

- Agents
- Tasks
- Workflows
- Memory UI/runtime
- Analytics
- Logs UI/runtime
- Settings
- full model discovery and model selectors
- additional provider adapters beyond OpenAI/OpenRouter
- conversation persistence/history
- file knowledge ingestion/RAG/vector retrieval
- production database
- subscription entitlements/usage metering
- transactional email/password recovery

## Product completion rule

Future updates must report user-visible behavior, backend behavior, and validation results. Architecture metadata alone cannot change a product feature from incomplete to complete.
