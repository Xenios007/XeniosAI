# ADR-0002 — Repository as Permanent Memory

**Status:** Accepted

**Date:** 2026-07-18

## Context

XeniosAI is a long-lived enterprise platform whose architecture, implementation, and operational knowledge will evolve over many years.

Traditional development often loses architectural knowledge because important decisions remain in conversations, emails, issue trackers, or individual contributors' memories.

XeniosAI adopts AI-assisted software development. AI implementation agents (such as Codex) require a persistent, version-controlled knowledge source that can be inspected independently of previous chat sessions.

## Decision

The Git repository is the permanent memory of the XeniosAI project.

All long-term project knowledge shall reside within the repository, including:

* Architecture documentation
* Architecture Decision Records (ADRs)
* Diagrams
* Design documents
* Coding standards
* Implementation guides
* Roadmaps
* Source code
* Tests

Knowledge must not exist solely in chat conversations.

Significant architectural decisions shall be recorded as ADRs.

## Consequences

### Positive

* Architectural knowledge becomes version controlled.
* New contributors can understand previous decisions.
* AI implementation agents can resume work from the repository alone.
* Repository history becomes the authoritative project history.
* Design and implementation remain synchronized.

### Trade-offs

* Documentation requires ongoing maintenance.
* Architectural decisions should be updated as the system evolves.
* Contributors must treat documentation as part of the product.

## Alternatives Considered

### Conversation History

Rejected because conversation history is fragmented, difficult to search, and unavailable to new contributors.

### External Wiki

Rejected because architecture can diverge from implementation.

### Local Documentation

Rejected because it is not collaboratively version controlled.

## Decision Outcome

Accepted.

The Git repository is the canonical, long-term memory of XeniosAI.
