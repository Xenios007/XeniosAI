# ARCH-038-05 Data Mapping, Transformation & Domain Boundaries

Executable canonical-mapping, external-identifier, validation/normalization, provenance, conflict-resolution, domain-boundary, and ownership metadata for the Connector, Tool & MCP Development phase.

Mappings are declarative, versioned, and change-controlled. Inbound and outbound data is schema- and rule-validated with invalid records quarantined; every mapped record carries its source, capture time, transform lineage, and mapping version. Conflicts are detected, classified, resolved by precedence, and never silently auto-merged. A mapping never redefines provider domain, resource-state, or authorization semantics — canonical business records stay owned by provider services and the connector holds only mapping and adapter state. External identifiers are namespaced, stable, and never reused for a different entity, and AI assistance never silently changes a mapping specification or alters domain semantics.
