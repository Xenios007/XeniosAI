# XeniosAI

XeniosAI is now being implemented **product-first**: a usable AI business platform on top of the existing ARCH-001 through ARCH-040 reference architecture.

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
│   ├── knowledge/           # business knowledge retrieval/context
│   └── shared/              # shared utilities
├── src/                     # existing ARCH implementation
├── architecture/            # ARCH-001 through ARCH-040
└── tests/                   # existing architecture and platform tests
```

## MVP surfaces

The new React application exposes Dashboard, AI Chat, Business Knowledge, AI Models, Agents, Tasks, Workflows, Memory, Analytics, Billing, Logs, System, and Settings. Authentication supports email/password and is wired for Google Identity when credentials are configured.

The initial payment foundation is for **XeniosAI user subscriptions**, not customer payments for a tenant business. It supports Free, Starter, Pro, and Business plans, mock checkout for local development, Stripe subscription checkout when configured, billing portal creation, and webhook-based subscription state updates.

## Run locally

```bash
cp .env.example .env
cp apps/web/.env.example apps/web/.env
npm install
npm run dev
```

Frontend: `http://localhost:5173`

API: `http://localhost:3001`

The API persists MVP state to `DATA_FILE` using a small JSON repository so the vertical slice works without requiring an external database. Replace this repository with a production database before production deployment.

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
