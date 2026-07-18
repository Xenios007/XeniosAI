# Context Management Implementation

Implemented from `architecture/004-ai-orchestrator/06-context-management.md`.

## Scope

This implementation defines orchestrator-owned context assembly for preparing a focused working context for the Reasoning Pipeline.

## Implemented Capabilities

- Canonical context assembly pipeline constants for all eight documented stages.
- Context layer, telemetry, and conflict-priority constants.
- Immutable contracts for context assembly requests, candidates, stages, telemetry, validation results, and working contexts.
- Context assembly coordinator for need identification, candidate collection, duplicate removal, conflict resolution, importance ranking, token-budget application, context assembly, delivery validation, and telemetry.
- Dependency Injection registration for `ContextAssemblyCoordinator`.

## Boundaries

- Context management does not retrieve, store, or own memory, knowledge, business data, or policies.
- Summarization, compression, deferred retrieval, and adaptive context behavior remain future enhancements.
- The Reasoning Pipeline consumes the delivered working context but does not introduce additional context without orchestration.
