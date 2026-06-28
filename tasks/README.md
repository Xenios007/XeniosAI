# Tasks

## Purpose

The `tasks` directory contains implementation plans and executable work items derived from approved architecture and documentation.

Tasks bridge the gap between design and implementation. They are the primary handoff mechanism from architecture to engineering, whether the work is performed by humans or AI agents such as Codex.

## Planned Contents

- Milestone Backlogs
- Feature Specifications
- Implementation Plans
- Coding Tasks
- Refactoring Tasks
- Testing Tasks
- Technical Debt Tracking
- Release Checklists

## Design Principles

- No implementation task should exist without supporting documentation.
- Tasks must reference the relevant ADRs and architecture documents.
- Tasks should be atomic, testable, and independently executable.
- AI agents should complete tasks by updating both code and documentation.
- Completed tasks should leave the repository in a deployable state.

## Related Documents

- ROADMAP.md
- AI_CONTEXT.md
- architecture/
- adr/
- schemas/
- api/