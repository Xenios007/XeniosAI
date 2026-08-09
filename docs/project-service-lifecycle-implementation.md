# Project and Service Lifecycle Implementation

Implements `ARCH-013-04 Project and Service Lifecycle`.

## Scope

- Exposes documented lifecycle objectives, principles, concepts, project-service relationships, project states, service states, project creation fields, project types, identity fields, metadata fields, service ownership fields, service boundary fields, operational readiness fields, lifecycle controls, lifecycle gates, lifecycle events, lifecycle commands, authority sources, metadata validation areas, failure and recovery fields, measures, governance areas, anti-patterns, architectural rules, and future lifecycle capabilities.
- Defines an immutable profile for validating Project and Service Lifecycle conformance.
- Provides descriptor validation and architecture assertions for identity before automation, distinct project and service identity, accountable ownership, authoritative lifecycle state, operational metadata, readiness before production, tenant/property scope, architecture and ADR binding, AI ownership boundaries, governed deprecation and retirement, evidence retention, vendor neutrality, and technology independence.
- Registers the descriptor through `addDeveloperPlatform`.

## Boundaries

- Does not modify architecture documents.
- Does not implement lifecycle orchestration, project intake workflows, service catalog persistence, state transition storage, or approval engines.
- Does not prescribe a project-management tool, source-control product, service-catalog product, cloud platform, vendor, programming language, or deployment technology.
- Does not treat repositories as projects, deployment units as services, or AI agents as accountable owners.
