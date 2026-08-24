# ARCH-025-07 Fulfillment, Add-ons, and Packages

`FulfillmentAddOnsPackagesDescriptor` exposes fulfillment plans, package components, dependencies, add-ons, substitutions, exceptions, completion evidence, recovery, and observability.

Validation requires dependency resolution, add-on eligibility, substitution approval, explicit partial completion, completion evidence, tenant isolation, idempotency, pinned references, auditable commitments, and separation from ARCH-026 financial authority. It rejects unvalidated dependencies, unapproved substitutions, hidden partial completion, shared databases, and local pricing/payment authority.
