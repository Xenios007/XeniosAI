# ARCH-025-03 Order Lifecycle and State Management

`OrderLifecycleStateDescriptor` exposes order and line aggregates, explicit states and transitions, amendment version history, commands, events, recovery, observability, and authority invariants.

Validation requires transition checks, versioned amendments, owning-service authority, tenant isolation, explicit confirmation, pinned references, idempotency, auditable commitments, and non-authoritative projections. It rejects projection rewrites, observation as allocation, unversioned amendments, shared databases, and local pricing/payment authority.
