# XeniosAI Product Task Queue

## P0 — Make the vertical slice production-shaped

- [ ] Install dependencies and generate/commit the lockfile.
- [ ] Add automated API tests for registration, login, business isolation, knowledge CRUD, chat grounding, and billing state.
- [ ] Add frontend smoke tests for login, business creation, knowledge entry, chat, and billing navigation.
- [ ] Replace JSON persistence with a production database repository while keeping the current repository interface.
- [ ] Add rate limiting, CSRF/session hardening, request validation, and production secret checks.
- [ ] Add password reset/recovery flow.
- [ ] Configure and verify Google login end-to-end with deployment credentials.

## P0 — AI Models and Chat

- [ ] Create persisted AI provider credentials with encryption/secret-store abstraction.
- [ ] Implement provider connection/test/remove endpoints.
- [ ] Implement dynamic model discovery for providers that support it.
- [ ] Implement provider/model selector in AI Chat rather than provider-only selection.
- [ ] Add Anthropic adapter.
- [ ] Add Google Gemini adapter.
- [ ] Add xAI adapter.
- [ ] Add DeepSeek, Groq, Together, Fireworks, Mistral and compatible-provider adapters.
- [ ] Add Ollama, LM Studio and custom OpenAI-compatible endpoints.
- [ ] Add streaming, stop generation, retry/regenerate, markdown rendering, and attachment shell.
- [ ] Persist conversations/messages and add history/search/rename/delete.
- [ ] Implement Customer Simulation, Internal Assistant and Raw Model modes fully.
- [ ] Add model comparison with latency/token/cost metadata.

## P0 — Business Knowledge

- [ ] Add edit/enable/disable/search/filter operations.
- [ ] Add structured business sections: profile, products, services, rates, policies, FAQs, locations.
- [ ] Add bulk paste analysis/organization.
- [ ] Add file upload for PDF/TXT/CSV/DOCX/JSON/Markdown.
- [ ] Add ingestion status, provenance and source controls.
- [ ] Implement retrieval suitable for production business grounding.
- [ ] Keep Business Knowledge distinct from Conversation Memory.

## P1 — Billing and monetization

- [x] User billing plan catalog.
- [x] Mock local checkout.
- [x] Stripe subscription Checkout foundation.
- [x] Stripe webhook verification and subscription-state updates.
- [x] Billing portal creation.
- [ ] Move plan/pricing configuration to server configuration/admin storage.
- [ ] Add trial handling.
- [ ] Add invoices/payment history view.
- [ ] Add failed-payment/past-due handling.
- [ ] Implement plan entitlements and usage limits.
- [ ] Add AI token/request usage metering tied to billing plan.
- [ ] Add upgrade/downgrade/cancel UX driven by provider state.
- [ ] Add a Philippines-friendly payment adapter if required by the commercial rollout, without coupling the product to one provider.

## P1 — Agents and Workflows

- [ ] Turn ARCH-014 into persisted real agent definitions/executions.
- [ ] Allow model, business knowledge, instructions, tools and autonomy configuration per agent.
- [ ] Turn ARCH-015 into real workflow definitions/runs.
- [ ] Connect agent/task/workflow status to Dashboard.

## P1 — Operations

- [ ] Implement logs, AI request telemetry and activity history.
- [ ] Implement analytics for requests, models, tokens, latency, errors and cost.
- [ ] Implement account/settings/security pages.
- [ ] Add production health/readiness endpoints and structured logging.

## P2 — Channels and solution packs

- [ ] Configure Casa Lluvia through normal Business Knowledge APIs; do not hard-code it.
- [ ] Validate rates, pool, parking, check-in/out and inquiry response journeys.
- [ ] Add external channels using ARCH-027: website chat, Facebook/Instagram, WhatsApp, email and future voice.

## Deferred

ARCH-031–040 developer marketplace/ecosystem expansion remains reference/future work until the customer product proves those capabilities are needed.
