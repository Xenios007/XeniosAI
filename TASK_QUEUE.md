# XeniosAI Product Task Queue

## P0 — Make the vertical slice production-shaped

- [ ] Install dependencies and generate/commit the lockfile.
- [ ] Add automated API tests for registration, login, business isolation, knowledge CRUD, chat grounding, billing state, and integration isolation.
- [ ] Add frontend smoke tests for login, business creation, knowledge entry, chat, integrations, and billing navigation.
- [ ] Replace JSON persistence with a production database repository while keeping the current repository interface.
- [ ] Move integration credentials from the MVP encrypted JSON repository to a managed secret store.
- [ ] Add rate limiting, CSRF/session hardening, request validation, and production secret checks.
- [ ] Add password reset/recovery flow.
- [ ] Configure and verify Google login end-to-end with deployment credentials.

## P0 — Omnichannel Integrations

- [x] Create business-scoped channel integration registry and Integrations UI.
- [x] Encrypt integration credentials server-side and prevent credential return to React.
- [x] Add random connection-specific webhook URLs.
- [x] Add inbound normalization for Facebook Page Messenger, Instagram webhook events, WhatsApp, Telegram, LINE, Slack, webchat, and custom webhooks.
- [x] Add outbound paths for Facebook Page Messenger, WhatsApp, Telegram, LINE, X DMs, Slack, Discord, Viber, and custom webhooks.
- [x] Verify signed inbound webhooks for Meta, LINE, Slack, Telegram, and custom webhooks.
- [x] Deduplicate inbound provider retries using external message IDs.
- [x] Add direct/review/partner/platform access classification and inbound/outbound readiness metadata.
- [ ] Build unified omnichannel Inbox UI over persisted channel messages.
- [ ] Add human takeover, pause AI, resume AI, assign conversation, internal notes, and escalation.
- [ ] Add OAuth/install onboarding instead of manual token entry where providers support it.
- [ ] Complete Instagram outbound messaging adapter and end-to-end test.
- [ ] Add X DM inbound event ingestion and end-to-end test.
- [ ] Add native XeniosAI website widget with tenant/domain configuration.
- [ ] Add email adapter and threaded reply handling.
- [ ] Add SMS/MMS adapter, starting with a provider abstraction rather than hard-coding Twilio.
- [ ] Add provider-specific retry, rate-limit, backoff, credential refresh/rotation, idempotency, and delivery-state handling.
- [ ] Add attachment/image/file normalization across supported channels.
- [ ] Add message-window/template-policy enforcement for channels such as WhatsApp.
- [ ] Add per-channel quiet hours, confidence thresholds, human-handoff rules, and fallback responses.
- [ ] Add per-channel usage metering for billing/entitlements.

## P0 — Travel and hospitality connectivity

- [ ] Apply for / obtain Booking.com Connectivity Partner access with `MESSAGING` connection type.
- [ ] Implement Booking.com message queue/conversation/send-message adapter after credentials are available.
- [ ] Apply for Airbnb software/API-program access and approved messaging scopes.
- [ ] Implement Airbnb guest messaging only after approved program access is granted.
- [ ] Apply for Expedia Group / Vrbo connectivity access and implement lodging messaging after approval.
- [ ] Map OTA property/reservation/conversation identities to the correct XeniosAI business/property without leaking tenant data.
- [ ] Add unified guest conversation history across direct web/Facebook/Instagram/WhatsApp and OTA channels.

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

## P1 — More messaging channels

- [ ] Register XeniosAI as an RCS for Business partner and implement verified brand-agent messaging.
- [ ] Add Twitch EventSub/chat adapter.
- [ ] Add Matrix adapter.
- [ ] Add Microsoft Teams bot adapter.
- [ ] Add Google Chat app adapter.
- [ ] Add Zoom Team Chat chatbot adapter.
- [ ] Add Mattermost bot adapter.
- [ ] Add Rocket.Chat adapter.
- [ ] Add Zulip bot adapter.
- [ ] Complete Viber inbound handling and commercial onboarding.
- [ ] Implement WeChat Official Account / WeCom only through documented business APIs and approved accounts.
- [ ] Implement Kakao customer-service channel after business-product approval.
- [ ] Add Apple Messages for Business through an approved provider path.
- [ ] Add Zendesk, Intercom, HubSpot, Freshchat, Salesforce and Twilio Conversations adapters based on customer demand.
- [ ] Do not ship unofficial Signal, LinkedIn scraping, retired Google Business Messages, or unverified TikTok customer-chat automation.

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
- [ ] Add AI token/request/channel-message usage metering tied to billing plan.
- [ ] Add upgrade/downgrade/cancel UX driven by provider state.
- [ ] Add a Philippines-friendly payment adapter if required by the commercial rollout, without coupling the product to one provider.

## P1 — Agents and Workflows

- [ ] Turn ARCH-014 into persisted real agent definitions/executions.
- [ ] Allow model, business knowledge, instructions, tools, channels and autonomy configuration per agent.
- [ ] Turn ARCH-015 into real workflow definitions/runs.
- [ ] Connect agent/task/workflow status to Dashboard.

## P1 — Operations

- [ ] Implement logs, AI request telemetry and channel activity history.
- [ ] Implement analytics for requests, channels, models, tokens, latency, errors and cost.
- [ ] Implement account/settings/security pages.
- [ ] Add production health/readiness endpoints and structured logging.

## P2 — Solution packs

- [ ] Configure Casa Lluvia through normal Business Knowledge APIs; do not hard-code it.
- [ ] Validate rates, pool, parking, check-in/out and inquiry response journeys.
- [ ] Validate the same Casa Lluvia answer pipeline across AI Chat, Facebook Page, Instagram, WhatsApp and an OTA channel once partner credentials exist.

## Deferred

ARCH-031–040 developer marketplace/ecosystem expansion remains reference/future work until the customer product proves those capabilities are needed.
