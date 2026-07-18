# .ai Directory

## Purpose

The `.ai` directory contains persistent working context for AI collaborators such as ChatGPT, Codex, and future AI engineering agents.

Unlike conversation history, the contents of this directory are version-controlled and become part of the project's permanent memory.

## Vision

The goal is for any AI to onboard by reading this directory together with the core governance documents, allowing development to continue without relying on previous chat sessions.

## Planned Contents

- BOOTSTRAP.md — AI onboarding instructions.
- CURRENT_CONTEXT.md — Current architectural context.
- CURRENT_SPRINT.md (later renamed CURRENT_MILESTONE.md) — Active work.
- NEXT_TASK.md — Highest-priority approved task.
- DECISIONS.md — Pending architectural decisions.
- SESSION_LOG.md — AI work summaries.

## Engineering Principles

- Git is the permanent memory.
- Conversations are temporary.
- AI must document architectural changes before implementation.
- AI should always read the Foundation Layer before contributing.

## Related Documents

- PROJECT_BOOTSTRAP.md
- AI_CONTEXT.md
- MASTER_INDEX.md
- ROADMAP.md
- adr/ADR-0001-tool-first-architecture.md