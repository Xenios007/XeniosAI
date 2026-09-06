# ARCH-036-02 Environment Types, Lifecycle & Ownership

Executable environment-type, ownership-model, provisioning, expiry, shared-access, state-management, catalog, recovery, observability, and assurance metadata for the Developer Environments & Sandboxes phase.

Every environment has a single accountable owner recorded in a queryable registry, and every non-local environment carries an enforced time-to-live and idle timeout with grace-period notice and automatic teardown. Environments are provisioned declaratively from approved versioned templates; shared, partner, and tenant classes require policy-based approval and role-scoped, time-bounded, audited access; all classes use only synthetic or approved minimized data; orphaned environments are detected and reclaimed; and AI assistance never silently transfers ownership, extends expiry, or provisions a shared environment.
