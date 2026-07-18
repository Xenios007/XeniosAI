# ARCH-002-11 Layer Interactions Implementation

## Purpose

This implementation realizes `ARCH-002-11 Layer Interactions`.

It provides executable governance for the documented layer communication rules without adding new business behavior.

## Implemented Scope

- Canonical layer constants and request-flow descriptor.
- Allowed and forbidden interaction validation.
- Dependency-boundary assertion through `LayerInteractionPolicy`.
- Canonical platform composition through `composePlatformLayers`.
- DI registration for layer-interaction governance services.

## Architectural Constraints

- Requests still enter through the Experience Layer.
- Gateway forwards only to Conversation.
- Conversation forwards only to AI Intelligence.
- AI Intelligence executes business capabilities only through tools.
- Business Services own deterministic business decisions.
- Data and Integration remain accessed by lower platform services, not by user-facing layers.
- Foundation and cross-cutting capabilities support the platform without owning business behavior.

## Current Limitations

- Dependency validation is explicit and runtime-testable; static import graph enforcement is deferred until build tooling architecture defines it.
- Business Services are registered before AI in the composer so the AI tool executor can point to `BusinessToolExecutor`; this is DI construction order only, not request-flow direction.
- Integration and Data are available as layer capabilities, but Business Services do not yet persist or invoke external providers until later architecture modules define those flows.

## Tests

Automated tests for this module are in `tests/layer-interactions/`.
