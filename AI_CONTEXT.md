# XeniosAI AI Context

Version: 0.1 Foundation
Status: Active
Owner: AI Architecture

## Purpose

This document is the persistent working memory for AI collaborators (ChatGPT, Codex, and future AI agents). It summarizes the current state of the project so development can continue without relying on previous conversations.

## Current Project Status

Project: XeniosAI
Platform: AI-native Hospitality Operating System
First Deployment: Casa Lluvia
Repository: Xenios007/XeniosAI
Current Milestone: Sprint 0 (Foundation)

## Engineering Roles

- ChatGPT: Chief Software Architect
- Codex: Implementation Engineer
- Product Owner: Repository Owner
- GitHub Repository: Permanent Source of Truth

## Core Engineering Rules

1. Documentation before code.
2. AI never owns business logic.
3. Backend services own pricing, bookings, availability, payments, and operational rules.
4. AI interacts through tools and APIs.
5. Every major architectural decision requires an ADR.
6. Every design decision must satisfy:
   - Scale to 10,000 properties.
   - Replaceable components.
   - Understandable using only the repository.

## Current Priorities

1. Complete Foundation documentation.
2. Build Architecture documentation.
3. Design Hospitality Domain Model.
4. Design AI Orchestrator.
5. Begin implementation only after architecture approval.

## Rule for AI Agents

Always read the following before making changes:

1. PROJECT_BOOTSTRAP.md
2. PROJECT_CONSTITUTION.md
3. XENIOS_MANIFESTO.md
4. MASTER_INDEX.md
5. ROADMAP.md
6. AI_CONTEXT.md
7. ADRs

Never introduce architectural changes without updating the documentation first.
