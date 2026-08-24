# ARCH-025-01 Commerce, Orders, and Reservations Overview

`CommerceOrdersReservationsOverviewDescriptor` exposes the ARCH-025 commercial commitment boundary, aggregate authority, command and event metadata, controls, recovery states, observability, measures, and invariants.

Validation requires provider authorization, tenant isolation, explicit confirmation, idempotency, pinned effective references, sensitive-data minimization, owning-service authority, auditable commitments, and separation from ARCH-026 pricing/payment authority. It rejects shared databases, treating observation as allocation, generated confirmation, and local pricing/payment ownership.
