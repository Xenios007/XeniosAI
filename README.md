# XeniosAI

XeniosAI is being implemented **product-first**: a usable AI business platform on top of the existing ARCH-001 through ARCH-040 reference architecture.

The architecture remains valuable for service boundaries, orchestration, agents, workflows, knowledge, tenancy, security, model operations, and future ecosystem capabilities. Architecture descriptors and conformance tests are no longer considered equivalent to finished user-facing product features.

## Product layout

```text
XeniosAI/
├── apps/
│   ├── web/                 # React + Vite user product
│   └── api/                 # Node.js + Express product API
├── packages/
│   ├── ai/                  # provider/model abstraction
│   ├── auth/                # account credential primitives
│   ├── billing/             # user subscriptions and checkout
│   ├── contracts/           # shared product contracts
│   ├── integrations/        # business messaging/channel adapters
│   ├── knowledge/           # business knowledge retrieval/context
│   └── shared/              # shared utilities
├── src/                     # existing ARCH implementation
├── architecture/            # ARCH-001 through ARCH-040
└── tests/                   # existing architecture and platform tests
```

## MVP surfaces

The React application exposes Dashboard, AI Chat, Business Knowledge, Integrations, AI Models, Agents, Tasks, Workflows, Memory, Analytics, Billing, Logs, System, and Settings. Authentication supports email/password and is wired for Google Identity when credentials are configured.

The initial payment foundation is for **XeniosAI user subscriptions**, not customer payments for a tenant business. It supports Free, Starter, Pro, and Business plans, mock checkout for local development, Stripe subscription checkout when configured, billing portal creation, and webhook-based subscription state updates.

## Omnichannel business integrations

Each external channel belongs to one XeniosAI business. Inbound customer/staff messages are normalized into the same XeniosAI pipeline used by AI Chat:

```text
External message
→ Channel adapter
→ Business / tenant
→ Business Knowledge + selected AI provider
→ XeniosAI response
→ Originating channel
```

The Integrations product surface includes Facebook Page Messenger, Instagram, WhatsApp, Telegram, LINE, WeChat/WeCom, X DMs, Viber, Kakao, RCS for Business, Twitch, Discord, Matrix, Slack, Teams, Google Chat, Zoom Team Chat, Mattermost, Rocket.Chat, Zulip, Airbnb, Booking.com, Expedia/Vrbo, Apple Messages for Business, Zendesk, Intercom, HubSpot, Freshchat, Salesforce, Twilio Conversations, email/SMS targets, and custom webhooks.

A catalog entry does **not** automatically mean the adapter is live. The UI exposes actual inbound/outbound implementation readiness and whether a platform uses direct developer access, app/business review, an official partner program, or another messaging platform.

Airbnb, Booking.com, Expedia/Vrbo, RCS for Business, and Apple Messages for Business require approved platform/partner paths and must not be represented as normal self-serve API-key connections before XeniosAI receives the required access.

Integration credentials are encrypted server-side for the MVP and never returned to React. See `docs/omnichannel-integrations.md` for the channel matrix, security model, live adapter paths, and implementation roadmap.

## Run locally

```bash
cp .env.example .env
cp apps/web/.env.example apps/web/.env
npm install
npm run dev
```

Frontend: `http://localhost:5173`

API: `http://localhost:3001`

The API persists MVP state to `DATA_FILE` using a small JSON repository so the vertical slice works without requiring an external database. Replace this repository with a production database and managed secret store before production deployment.

For integration webhooks, set `PUBLIC_API_URL` to the externally reachable HTTPS API URL and configure a separate long random `INTEGRATION_SECRET_KEY`.

## Live billing

Set:

```text
BILLING_PROVIDER=stripe
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
```

Configure the Stripe webhook endpoint to send events to:

```text
POST /api/billing/webhook
```

No payment secret is sent to the React application.

## Architecture policy

Read `PRODUCT_IMPLEMENTATION.md` before extending the product. New work should start from a usable customer journey and reuse ARCH contracts where they add value. Do not add another architecture phase merely to avoid implementing the actual product.
