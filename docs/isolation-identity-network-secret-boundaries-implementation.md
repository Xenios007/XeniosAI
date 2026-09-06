# ARCH-036-03 Isolation, Identity, Network & Secret Boundaries

Executable tenant/project-isolation, compute-isolation, network-isolation, identity-isolation, credential/secret, administrative-isolation, boundary-verification, recovery, observability, and assurance metadata for the Developer Environments & Sandboxes phase.

Every environment is bound to exactly one tenant and project, and mismatched context is rejected. Compute is isolated per environment with enforced limits and no host privilege; networking is default-deny with allowlisted egress and no route to production; each environment has a distinct short-lived least-privilege workload identity; secrets are environment-scoped, short-lived, and store-held, and production credentials never exist in a sandbox; the administrative plane is separate from production with audited break-glass; and isolation boundaries are continuously verified with failing environments quarantined. AI assistance never silently widens isolation scope.
