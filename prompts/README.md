# Prompts

## Purpose

The `prompts` directory contains the prompt engineering assets that define how XeniosAI communicates, reasons, and interacts with backend tools.

Prompts are treated as version-controlled engineering artifacts and are intentionally separated from business logic and structured knowledge.

## Planned Contents

- System Prompts
- Assistant Personas
- Channel-Specific Prompts (Messenger, WhatsApp, Instagram, Website)
- Tool Invocation Templates
- Prompt Evaluation Cases
- Multilingual Prompt Packs
- Safety and Guardrail Instructions

## Design Principles

- Prompts never contain business logic.
- Prompts reference structured knowledge instead of duplicating facts.
- Prompt changes are reviewed like source code.
- Prompt behavior should remain deterministic where possible.
- Prompt revisions should be traceable through Git history.

## Related Documents

- AI_CONTEXT.md
- knowledge/
- api/
- architecture/
- adr/ADR-0001-tool-first-architecture.md