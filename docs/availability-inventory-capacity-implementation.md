# ARCH-024-06 Availability, Inventory, and Capacity References

`AvailabilityInventoryCapacityDescriptor` exposes authoritative availability, inventory, capacity, schedule, blackout, maintenance, and operability reference semantics.

Validation requires source authority and timestamps, bounded cache freshness, explicit degradation, allocation-domain confirmation, no-oversell controls, tenant-scoped projections, freshness/confidence presentation, and deterministic AI validation. It rejects cache authority, projection-based allocation authorization, unknown-as-available behavior, fabricated results, shared tables, and distributed database transactions.
