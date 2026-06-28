# Architecture Decision Records (ADRs)

## Purpose

This directory contains the official Architecture Decision Records (ADRs) for XeniosAI.

ADRs capture significant architectural decisions, the reasoning behind them, alternatives considered, and their long-term consequences. They are the authoritative record of how and why the platform evolves.

## ADR Lifecycle

- Proposed
- Accepted
- Superseded
- Deprecated
- Archived

ADR numbers are permanent and are never reused.

## Naming Convention

```
ADR-XXXX-kebab-case-title.md
```

Example:

```
ADR-0001-tool-first-architecture.md
```

## Standard ADR Template

- Title
- Status
- Date
- Version
- Authors
- Reviewers
- Context
- Problem
- Decision
- Alternatives Considered
- Consequences
- Trade-offs
- Risks
- Future Considerations
- Related ADRs
- Related Documents

## ADR Index

| ADR | Title | Status |
|-----|-------|--------|
| ADR-0001 | Tool-First Architecture | Accepted |
| ADR-0002 | Repository as Permanent Memory | Planned |
| ADR-0003 | Documentation First | Planned |
| ADR-0004 | AI Model Independence | Planned |
| ADR-0005 | Platform vs Property Separation | Planned |
| ADR-0006 | Domain-Oriented Service Architecture | Planned |

## Guiding Principle

If implementation conflicts with an accepted ADR, the implementation must be reviewed. ADRs are the architectural source of truth until they are formally superseded.
