# XeniosAI Project State

## Active direction

**Phase:** Product-First MVP

The previous ARCH-001–040 portfolio remains complete as reference architecture and historical implementation evidence. It is no longer the active unit of product progress.

## Current product implementation

Implemented in the product-first vertical slices:

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
- Dashboard, AI Chat, Business Knowledge, Integrations, AI Models, Agents, Tasks, Workflows, Memory, Analytics, Billing, Logs, System, and Settings navigation
- XeniosAI SaaS billing plans
- local/mock subscription checkout
- Stripe subscription Checkout integration
- Stripe customer billing portal integration
- verified raw-body Stripe webhook path and subscription-state persistence
- business-scoped omnichannel integration registry
- encrypted integration credential storage using AES-256-GCM for the MVP repository
- per-integration AI provider and auto-reply configuration
- channel-specific webhook URLs with random URL tokens
- signed inbound webhook verification for Meta, LINE, Slack, Telegram, and custom webhooks
- inbound external-message deduplication for provider retries
- channel message persistence and authenticated business-scoped channel-message query endpoint
- live outbound adapter paths for Facebook Page Messenger, WhatsApp, Telegram, LINE, X Direct Messages, Slack, Discord, Viber, and custom webhooks
- inbound normalization for Facebook Page Messenger, Instagram webhook events, WhatsApp, Telegram, LINE, Slack, webchat, and custom webhooks
- broad integration catalog including WeChat/WeCom, Kakao, RCS for Business, Twitch, Matrix, Teams, Google Chat, Zoom Chat, Mattermost, Rocket.Chat, Zulip, Apple Messages for Business, Airbnb, Booking.com, Expedia/Vrbo, Zendesk, Intercom, HubSpot, Freshchat, Salesforce, and Twilio Conversations
- partner/review/direct-access classification and truthful inbound/outbound implementation-readiness metadata
- root `npm run dev` workspace orchestration
- root build keeps existing architecture verification

## Partner/review boundaries

The following are cataloged but must not be represented as self-serve live integrations until XeniosAI receives the required platform access:

- Airbnb API/software program
- Booking.com Connectivity `MESSAGING`
- Expedia/Vrbo lodging connectivity messaging
- RCS for Business partner program
- Apple Messages for Business provider path
- other channels whose app review/commercial enrollment has not been completed

## Deliberately not claimed complete

These product surfaces/capabilities still need real runtime implementations or production hardening:

- unified omnichannel inbox UI and human takeover
- OAuth/install flows for social/workplace channels
- Instagram outbound adapter
- X DM inbound/event ingestion
- email/SMS adapters
- full RCS, Airbnb, Booking.com and Expedia/Vrbo adapters after partner access
- complete provider-specific retry/rate-limit/credential-rotation handling for every live channel
- Agents
- Tasks
- Workflows
- Memory UI/runtime
- Analytics
- Logs UI/runtime
- Settings
- full model discovery and model selectors
- additional AI provider adapters beyond OpenAI/OpenRouter
- conversation persistence/history in the main AI Chat product
- file knowledge ingestion/RAG/vector retrieval
- production database and managed secret store
- subscription entitlements/usage metering
- transactional email/password recovery

## Product completion rule

Future updates must report user-visible behavior, backend behavior, integration access requirements, and validation results. Architecture metadata or a catalog entry alone cannot change a product feature from incomplete to complete.
