# ARCH-036-06 Ephemeral Preview Environments & Collaboration

Executable change-trigger, sharing, access-control, collaboration, expiry, cost-control, cleanup, recovery, observability, and assurance metadata for the Developer Environments & Sandboxes phase.

Every preview is bound to exactly one change set and rebuilds with it. Share links are unguessable, scoped to view or comment, and carry an expiry; non-public preview access is authenticated, role-scoped, and tenant-bound. Preview time-to-live is tied to the change lifecycle with an absolute maximum; previews serve only synthetic data and are visibly marked non-production; they are cost-attributed, budget-capped, and idle-suspended; and change merge, close, or expiry triggers full automatic teardown and link invalidation. AI assistance never silently shares a preview, widens its audience, or extends its life.
