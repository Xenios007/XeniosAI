# ARCH-025-04 Reservation and Booking Lifecycle

`ReservationBookingLifecycleDescriptor` exposes reservation requests and bookings, status transitions, participants, time intervals, resource and service references, confirmation, recovery, observability, and industry-extension boundaries.

Validation requires validated time, participant, and resource semantics, solution-pack-scoped extensions, explicit confirmation, tenant isolation, idempotency, pinned references, auditable commitments, and separation from ARCH-026 financial authority. It rejects unvalidated reservation data, unbounded extensions, shared databases, and local pricing/payment authority.
