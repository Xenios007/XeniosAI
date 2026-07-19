# Workflow & Process Integration Implementation

## Architecture Source

Implements `ARCH-009-05 Workflow & Process Integration`.

## Scope

The implementation provides executable workflow and process integration governance:

- Workflow objective, model, principle, participant, orchestration model, activity, decision point, human participation, AI responsibility, lifecycle, process state, failure handling, observability, security, governance, relationship, and future-direction metadata.
- An immutable `WorkflowProcessProfile` contract for validating workflow architecture decisions.
- Validation for business-centric workflows that coordinate without owning capabilities, preserve service autonomy, support long-running processes, integrate human and AI participants through governed contracts, expose deterministic process states, preserve security, and remain technology neutral.

## Non-Goals

This module does not implement workflow engines, orchestration frameworks, BPM platforms, state machines, vendor technologies, runtime workflow execution, or process automation.

## Usage

`WorkflowProcessIntegrationDescriptor` is exported from `src/integration-architecture/index.js` and registered through `addIntegrationArchitecture`.
