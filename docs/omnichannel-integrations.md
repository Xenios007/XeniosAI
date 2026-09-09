# XeniosAI Omnichannel Integrations

XeniosAI treats every messaging source as a channel adapter over the same business-aware AI pipeline.

```text
Customer / Staff Message
        ↓
Channel Adapter
        ↓
Normalize identity + message + conversation
        ↓
Selected Business / Tenant
        ↓
Knowledge + Memory + Agent + Policy + Tools
        ↓
Selected AI Provider / Model
        ↓
Normalized XeniosAI Response
        ↓
Originating Channel Adapter
        ↓
Customer / Staff Reply
```

A channel must never own business rules, pricing, reservation truth, or AI behavior. It only normalizes inbound events and renders outbound responses.

## Product categories

### Direct/self-service developer integrations

These can generally be developed using normal developer credentials, subject to each platform's normal policies and scopes:

- XeniosAI native web chat
- Email
- SMS/MMS through a provider such as Twilio
- Telegram Bot API
- LINE Messaging API
- X Direct Messages API
- Twitch Chat / EventSub
- Discord bots
- Matrix
- Slack apps/bots
- Mattermost bot accounts
- Rocket.Chat REST/Realtime API
- Zulip bots
- Custom webhooks/APIs

### Business APIs that require review, commercial enrollment, or channel approval

- Facebook Page Messenger
- Instagram Messaging
- WhatsApp Business / Cloud API
- WeChat Official Accounts
- WeCom / Enterprise WeChat
- Rakuten Viber
- KakaoTalk customer-service/business products
- Microsoft Teams bots
- Google Chat apps
- Zoom Team Chat chatbots

### Partner/program-restricted channels

These are real integration targets, but XeniosAI must obtain the platform relationship/scopes before offering live connectivity:

- RCS for Business
- Airbnb software/API programs
- Booking.com Connectivity Messaging
- Expedia Group / Vrbo lodging connectivity messaging
- Apple Messages for Business / approved Messaging Service Provider path

Do not present these as a normal API-key form when a customer does not have the required platform relationship.

### Existing customer-service platforms / aggregators

XeniosAI can integrate with these as an AI/bot participant or custom channel:

- Zendesk Messaging / Sunshine Conversations
- Intercom
- HubSpot Conversations
- Freshchat
- Salesforce Digital Engagement
- Twilio Conversations

## Current adapter implementation

The initial `@xeniosai/integrations` package contains live outbound adapter paths for:

- Facebook Page Messenger
- WhatsApp Business Cloud API
- Telegram
- LINE
- X Direct Messages
- Slack
- Discord
- Rakuten Viber
- Custom webhook

Inbound normalization is implemented for:

- Facebook Page Messenger
- Instagram webhook-shaped messaging events
- WhatsApp
- Telegram
- LINE
- Slack event payloads
- Native/custom webhook messages

The catalog exposes `inboundImplemented` and `outboundImplemented` so the UI can distinguish a live adapter from a future/approval-tracking integration. Do not call a channel fully live unless both directions required by the intended workflow are implemented and tested.

Other catalog entries are deliberately marked as configuration/approval targets until their authentication, webhook verification, and provider-specific behavior are implemented and tested.

## Business isolation

Every integration belongs to one XeniosAI business/tenant. A user who manages multiple businesses must connect channels separately for each business.

Example:

```text
User
├── Casa Lluvia
│   ├── Facebook Page
│   ├── Instagram
│   ├── WhatsApp
│   └── Booking.com
└── XeniosTrade
    ├── Telegram
    ├── Discord
    └── Slack
```

Messages and credentials must not cross business boundaries.

## Credential security

Integration credentials are encrypted server-side using AES-256-GCM before they are written to the MVP JSON repository. The React application receives only safe connection metadata and a `hasCredentials` flag.

Configure a dedicated secret:

```text
INTEGRATION_SECRET_KEY=<long random secret>
```

Do not reuse provider access tokens in frontend local storage or return them through API responses.

The current encrypted JSON persistence is an MVP implementation. Production should move encrypted integration credentials to a managed secrets system and integration metadata to the production database.

## Webhooks

Each saved connection receives a long random webhook token and a connection-specific webhook URL:

```text
https://api.example.com/api/channels/<connection-id>/<webhook-token>
```

Provider verification still applies. Meta verification tokens are encrypted credentials rather than ordinary connection metadata.

The initial implementation verifies inbound requests for:

- Meta Messenger / Instagram / WhatsApp using `X-Hub-Signature-256`
- LINE using `X-Line-Signature`
- Slack using its signing-secret timestamp/HMAC scheme
- Telegram using the Bot API webhook secret-token header
- Custom XeniosAI webhooks using a configured shared secret

Inbound provider retries are deduplicated using the provider's external message ID when one is supplied.

Before production launch for each channel, complete that provider's documented replay protection, event deduplication, rate limiting, retries, idempotency, credential rotation, OAuth refresh, and failure-recovery rules.

## Travel channels

### Airbnb

Airbnb connectivity is not treated as a public self-service host messaging API. XeniosAI should pursue Airbnb software/API-program access, obtain approved scopes, then expose Airbnb connection onboarding to eligible users.

Until then the UI can track an Airbnb integration as `approval-required`, but must not claim live message automation.

### Booking.com

Booking.com Connectivity supports a `MESSAGING` connection type for approved Connectivity Partners. XeniosAI should implement machine-account/token onboarding, notifications/message queue ingestion, conversation lookup, send-message operations, and reservation/property mapping after partner access is granted.

### Expedia / Vrbo

Expedia Group's lodging Connectivity Hub includes messaging capability for connectivity partners. Implement only after XeniosAI is accepted into the appropriate partner program and receives test/production credentials.

## RCS for Business

RCS for Business is a current brand-messaging platform, separate from the retired Google Business Messages product. XeniosAI must register as an RCS for Business partner, then create/manage verified brand agents and use the regional RCS Business Messaging API to send and receive messages.

## Evaluated but not advertised as a live XeniosAI chat channel

Do not add unofficial integrations that require scraping consumer accounts or bypassing platform controls.

- Google Business Messages / Google Business Profile chat was retired in 2024. Google Chat (Workspace) and RCS for Business are separate products.
- Signal does not expose a general official business/bot API suitable for XeniosAI, so do not ship an unofficial Signal connector as a supported channel.
- TikTok's current public developer documentation exposes direct-message data through Data Portability, but this is an export/data-access flow rather than a verified general two-way business chatbot send/receive API. Do not advertise TikTok customer-chat automation until TikTok exposes or approves an appropriate messaging product.
- LinkedIn should not be advertised as general automated member messaging unless XeniosAI receives access to an applicable approved partner product; avoid browser automation/scraping.

## Recommended implementation order

1. Native XeniosAI web widget
2. Facebook Page Messenger
3. Instagram Messaging outbound completion
4. WhatsApp Business
5. Telegram
6. LINE
7. Email + SMS
8. Unified channel inbox and human takeover
9. Booking.com partner onboarding and messaging
10. Airbnb API/software-partner application
11. Expedia/Vrbo partner integration
12. RCS for Business partner application
13. X DM inbound/Event ingestion
14. Twitch / Viber / WeChat / WeCom / Kakao based on customer demand
15. Zendesk / Intercom / HubSpot / Freshchat / Salesforce
16. Slack / Teams / Discord / Google Chat / Zoom / Mattermost / Rocket.Chat / Zulip / Matrix for internal-business assistants
17. Apple Messages for Business through the approved provider path

The product UI should keep the complete catalog discoverable, while clearly distinguishing `Direct API`, `App review`, `Partner program required`, and `Via platform` access models, plus actual inbound/outbound implementation readiness.
