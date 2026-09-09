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
- Slack apps/bots
- Discord bots
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

### Partner/program-restricted channels

These are real integration targets, but XeniosAI must obtain the platform relationship/scopes before offering live connectivity:

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

Provider verification still applies. For example Meta verification tokens must match the connection configuration.

Before production launch for any channel, implement and test that provider's documented request-signature verification, replay protection, event deduplication, rate limiting, retries, and idempotency rules.

## Travel channels

### Airbnb

Airbnb connectivity is not treated as a public self-service host messaging API. XeniosAI should pursue Airbnb software/API-program access, obtain approved scopes, then expose Airbnb connection onboarding to eligible users.

Until then the UI can track an Airbnb integration as `approval-required`, but must not claim live message automation.

### Booking.com

Booking.com Connectivity supports a `MESSAGING` connection type for approved Connectivity Partners. XeniosAI should implement machine-account/token onboarding, notifications/message queue ingestion, conversation lookup, send-message operations, and reservation/property mapping after partner access is granted.

### Expedia / Vrbo

Expedia Group's lodging Connectivity Hub includes messaging capability for connectivity partners. Implement only after XeniosAI is accepted into the appropriate partner program and receives test/production credentials.

## Deliberately excluded / retired

Do not add unofficial integrations that require scraping consumer accounts or bypassing platform controls.

Google Business Messages / Google Business Profile chat is not an integration target because Google retired Business Messages and Business Profile chat in 2024. Google Chat (Workspace) is a separate supported integration target.

Signal does not have a general official business/bot API suitable for this product, so do not ship an unofficial Signal connector as a supported XeniosAI channel.

## Recommended implementation order

1. Native XeniosAI web widget
2. Facebook Page Messenger
3. Instagram Messaging
4. WhatsApp Business
5. Telegram
6. LINE
7. Email + SMS
8. Booking.com partner onboarding and messaging
9. Airbnb API/software-partner application
10. Expedia/Vrbo partner integration
11. X DMs
12. Viber / WeChat / WeCom / Kakao based on customer demand
13. Zendesk / Intercom / HubSpot / Freshchat / Salesforce
14. Slack / Teams / Discord / Google Chat for internal-business assistants
15. Apple Messages for Business through the approved provider path

The product UI should keep the complete catalog discoverable, while clearly distinguishing `Direct API`, `App review`, `Partner program required`, and `Via platform` access models.
