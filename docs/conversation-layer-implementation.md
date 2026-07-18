# Conversation Layer Implementation

## Purpose

This document describes the current implementation scope of `ARCH-002-05 Conversation Layer`.

It exists to keep implementation and repository documentation synchronized without modifying the architecture source of truth.

## Implemented Capabilities

- Conversation and session lifecycle management through `ConversationService`
- Participant tracking and message history accumulation
- Explicit conversation state transitions through `ConversationStateMachine`
- In-memory persistence abstraction through `ConversationRepository`
- Context continuity for repeated requests from the same participant and channel
- AI handoff through a dedicated `AiPort`

## Current Boundaries

The implementation intentionally excludes:

- intent detection
- prompt construction
- tool orchestration
- business operations
- external provider calls
- durable production persistence

These concerns belong to adjacent architectural layers.

## Notes

- The current repository implementation is in-memory to preserve architectural separation while keeping the module testable.
- The Conversation Layer prepares continuity and state only; it does not interpret user meaning.
