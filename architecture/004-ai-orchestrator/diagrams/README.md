# ARCH-004 Diagrams

This directory contains the visual architecture for the AI Orchestrator.

The diagrams complement the Markdown documentation by illustrating the major orchestration workflows and decision paths within XeniosAI.

Each diagram answers a specific architectural question and focuses on high-level concepts rather than implementation details.

---

## Diagram List

| Diagram                   | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| 01-request-lifecycle.mmd  | Overall orchestration flow from request to response |
| 02-reasoning-pipeline.mmd | Reasoning stages and decision preparation           |
| 03-tool-selection.mmd     | Tool discovery and execution planning               |
| 04-memory-flow.mmd        | Memory retrieval and orchestration lifecycle        |
| 05-agent-coordination.mmd | Multi-agent coordination model                      |
| 06-context-window.mmd     | Context assembly and prioritization                 |
| 07-failure-recovery.mmd   | Failure classification and recovery workflow        |

---

## Diagram Principles

All diagrams should:

* Show architecture rather than implementation.
* Remain vendor independent.
* Focus on responsibilities.
* Avoid technology-specific details.
* Stay readable at a glance.
* Reflect the authoritative architecture documents.

The Markdown chapters remain the primary source of architectural truth.
