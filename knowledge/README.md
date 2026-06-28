# Knowledge

## Purpose

The `knowledge` directory contains the structured knowledge base that powers XeniosAI's responses.

Knowledge represents authoritative business information, policies, FAQs, amenities, operational procedures, and property-specific content that AI agents retrieve when answering guest questions.

## Planned Contents

- Hospitality Domain Knowledge
- Property Profiles
- FAQs
- Check-in & Check-out Procedures
- House Rules
- Amenities
- Pricing Policies
- Promotions
- Local Recommendations
- Operational Playbooks

## Design Principles

- Knowledge is version controlled.
- Knowledge is separated from business logic.
- Property-specific knowledge should reside under `properties/` when appropriate.
- AI responses should reference structured knowledge rather than embedding facts directly in prompts.

## Related Documents

- AI_CONTEXT.md
- ROADMAP.md
- properties/
- prompts/
- api/
