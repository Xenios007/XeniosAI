# ARCH-025-05 Availability, Allocation, and Holds

`AvailabilityAllocationHoldsDescriptor` exposes authoritative availability decisions, temporary holds, allocation, concurrency, expiry, release, reconciliation, recovery, observability, and oversell-prevention metadata.

Validation requires authoritative checks, hold expiry, capacity protection, optimistic concurrency, explicit confirmation, tenant isolation, idempotency, pinned references, and auditable commitments. It rejects observation as allocation, expired-hold allocation, stale authority, capacity violations, shared databases, and local pricing/payment authority.
