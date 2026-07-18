# Experience Layer Implementation

## Purpose

This document describes the current implementation scope of `ARCH-002-03 Experience Layer`.

It exists to keep implementation and repository documentation synchronized without modifying the architecture source of truth.

## Implemented Capabilities

- Channel adapter contract for adding new user-facing entry points
- Default adapters for Messenger, WhatsApp, and Website channels
- Channel capability modeling for text, images, buttons, quick replies, file uploads, and rich cards
- Inbound payload normalization into a shared experience request contract
- Outbound response rendering into channel-specific payload envelopes
- Gateway port abstraction for forwarding normalized requests to the Gateway Layer
- Experience service orchestration using Foundation Layer logging, metrics, and clock services

## Current Boundaries

The implementation intentionally excludes:

- gateway authentication or validation
- conversation state management
- AI reasoning
- business logic
- persistence
- external transport integration

These concerns belong to lower or adjacent architectural layers.

## Notes

- The Experience Layer currently provides reusable channel adapters and contracts rather than provider SDK integrations.
- Experience normalization is limited to channel-facing shape normalization so the Gateway Layer can still perform admission and internal request normalization.
