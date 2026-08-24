# ARCH-024-04 Resource Types and Lifecycle

The existing implementation exposes the resource type and lifecycle contract through `ResourceTypesLifecycleDescriptor` and `ResourceTypesLifecycleProfile`.

It covers resource registry and instance identity, groups and pools, capability and constraint references, lifecycle and retirement controls, tenant-scoped records, recovery behavior, and ownership invariants. Validation requires owning-service versioned events, tenant projections, governed new versions, extension compatibility, freshness without projection authority, non-fabricated unavailable results, and protected-payload-safe telemetry.

Authoritative state remains with its owner; cross-service changes use contracts, events, and reconciliation, and shared tables or distributed database transactions are not required.
