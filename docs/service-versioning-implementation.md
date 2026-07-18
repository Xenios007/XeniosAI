# ARCH-003-08 Service Versioning Implementation

## Purpose

This implementation realizes `ARCH-003-08 Service Versioning`.

It provides executable SemVer governance for services and public artifacts so contract evolution remains explicit, compatible, and traceable.

## Implemented Scope

- Versioned artifact types for services, public APIs, commands, queries, domain events, shared schemas, tool contracts, and configuration formats.
- Version change types for breaking changes, backward-compatible features, and backward-compatible fixes.
- `VersionedArtifactRecord` immutable contract.
- `VersionChangeProposal` immutable contract.
- `VersionValidationResult` validation contract.
- `ServiceVersionRegistry` for version record registration, lookup, artifact-type listing, SemVer validation, deprecation metadata validation, and change validation.
- Breaking-change governance requiring major version increment, migration metadata, consumer impact metadata, compatibility disclosure, and ADR flag.
- Dependency-injection registration for `ServiceVersionRegistry`.
- Tests for artifact coverage, SemVer validation, deprecation validation, change classification, duplicate records, missing records, communication pattern mapping, and DI access.

## Architectural Constraints

- Public artifacts must be versioned.
- Breaking changes require major version increments and governance metadata.
- Backward-compatible features and fixes must preserve compatibility.
- Deprecation requires migration guidance.
- Architecture documents were not modified.

## Current Limitations

- Compatibility validation is rule-based metadata governance only.
- Automated contract diffing, consumer impact analysis, and deprecation tracking dashboards are deferred to later governance/tooling modules.
