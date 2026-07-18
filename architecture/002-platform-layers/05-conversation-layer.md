# ARCH-002 · Chapter 05 — Conversation Layer

**Document ID:** ARCH-002-05

**Title:** Conversation Layer

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-002 — Platform Layers

---

# Purpose

The Conversation Layer manages the lifecycle and continuity of every interaction between users and XeniosAI.

Its responsibility is to ensure that conversations remain coherent across multiple messages, channels, and sessions while remaining independent of AI reasoning and business logic.

The Conversation Layer answers one question:

> **What is the current state of this conversation?**

It does **not** answer:

> **What does the guest want?**

---

# Philosophy

Conversation is not intelligence.

Conversation is state.

The platform should be able to continue a conversation even if the underlying AI model changes.

Likewise, the AI should be able to reason about a request without becoming responsible for storing conversation history.

Separating these responsibilities keeps both systems simpler and more maintainable.

---

# Position Within the Platform

```text
Experience Layer

↓

Gateway Layer

↓

Conversation Layer

↓

AI Intelligence Layer
```

The Conversation Layer acts as the bridge between communication channels and AI reasoning.

---

# Responsibilities

The Conversation Layer is responsible for:

* Conversation lifecycle management.
* Session creation and recovery.
* Conversation persistence.
* Channel abstraction.
* User identity association.
* Multi-turn conversation support.
* Conversation state transitions.
* Context continuity.
* Conversation expiration.
* Handoff preparation.

It should never interpret business intent.

---

# Core Concepts

## Conversation

A conversation represents the complete interaction between one or more users and XeniosAI.

A conversation may span multiple messages, channels, and sessions while maintaining a consistent identity.

---

## Session

A session represents a temporary execution context within a conversation.

Sessions may expire without deleting the conversation itself.

---

## Participant

Participants may include:

* Guest
* Property owner
* Staff
* AI
* Future automation agents

Every participant has a unique identity within the conversation.

---

## Conversation State

Examples include:

* New
* Active
* Waiting for Guest
* Waiting for Staff
* Escalated
* Closed
* Archived

State transitions should be explicit and auditable.

---

# Conversation Lifecycle

```text
Message Received

↓

Locate Conversation

↓

Create if Necessary

↓

Restore Session

↓

Update Conversation State

↓

Forward to AI Intelligence Layer
```

The Conversation Layer prepares the conversation before AI processing begins.

---

# Responsibilities

The Conversation Layer owns:

* Conversation IDs.
* Session IDs.
* Participant tracking.
* Message ordering.
* Conversation history.
* Channel mapping.
* Conversation metadata.
* Conversation expiration.
* Handoff metadata.

---

# Context Continuity

The Conversation Layer maintains continuity across interactions.

Examples:

Guest:

> "How much?"

The layer remembers that the previous discussion concerned a booking inquiry, allowing the AI to receive the necessary conversational context.

The Conversation Layer remembers the conversation.

The AI determines the meaning.

---

# Multi-Channel Conversations

Future versions of XeniosAI may allow a conversation to continue across channels.

Example:

Messenger

↓

Website

↓

WhatsApp

↓

Mobile App

The Conversation Layer maintains a single conversation identity regardless of channel.

---

# Human Handoff

When escalation occurs, the Conversation Layer prepares the conversation for human operators.

Information preserved includes:

* Conversation history.
* Current state.
* AI actions performed.
* Pending tasks.
* Collected guest information.

Staff should receive complete context without asking guests to repeat themselves.

---

# Responsibilities vs AI

## Conversation Layer

Owns:

* History
* Sessions
* State
* Participants
* Conversation continuity

## AI Intelligence Layer

Owns:

* Intent detection
* Reasoning
* Context assembly
* Prompt construction
* Tool orchestration
* Response generation

This separation is fundamental to XeniosAI's architecture.

---

# Prohibitions

The Conversation Layer must never:

* Detect intent.
* Calculate pricing.
* Execute bookings.
* Retrieve business knowledge.
* Select tools.
* Call external providers.
* Modify business data.
* Generate AI prompts.

Those responsibilities belong to lower layers.

---

# Persistence

Conversation persistence should include:

* Messages
* Metadata
* Participants
* Attachments
* State transitions
* Session history

Persistent storage enables future analytics and conversation recovery.

---

# Failure Handling

If downstream processing fails:

* Preserve the conversation.
* Record the failure.
* Allow retry when appropriate.
* Support manual continuation.

Conversation history should never be lost because of AI or service failures.

---

# Scalability

The Conversation Layer should support:

* Millions of conversations.
* Concurrent sessions.
* Stateless processing with persistent storage.
* Horizontal scaling.
* Future conversation sharding.

Conversation storage should scale independently from AI inference.

---

# Security Considerations

Conversation data may contain personally identifiable information.

The layer should therefore support:

* Access control.
* Encryption where appropriate.
* Audit logging.
* Data retention policies.
* Privacy regulations.

Conversation history should only be accessible to authorized components.

---

# Summary

The Conversation Layer owns the continuity of communication.

It manages who is participating, what has already been discussed, and the current state of the interaction.

It intentionally does **not** understand business intent or execute business operations.

By separating conversation management from AI reasoning, XeniosAI gains greater modularity, scalability, and flexibility.

---

# Related Documents

* ARCH-002-04 — Gateway Layer
* ARCH-002-06 — AI Intelligence Layer
* ARCH-003 — Service Map
* ARCH-004 — AI Orchestrator
* ARCH-005 — Data Flow
