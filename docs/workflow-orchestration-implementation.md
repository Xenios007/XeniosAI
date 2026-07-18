# Workflow Orchestration Implementation

## Architecture Source

Implements `ARCH-005-05 Workflow Orchestration`.

## Scope

The implementation provides descriptor-level workflow governance for:

- Canonical workflow lifecycle stage ordering.
- Workflow coordination ownership by the AI Orchestrator.
- Explicit step ownership by the component responsible for each capability.
- Observable workflow states and state transitions.
- Long-running continuation context.
- Step outcome, compensation ownership, recovery strategy, timeout action, and telemetry validation.

## Non-Goals

This module does not implement a workflow runtime, scheduler, message broker, persistence store, distributed transaction, human approval engine, visual modeler, or business rules. Business Services remain responsible for business decisions and state.

## Usage

`WorkflowOrchestrationDescriptor` is exported from `src/data-flow/index.js` and registered through `addDataFlow`.
