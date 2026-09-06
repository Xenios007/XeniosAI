# ARCH-035-03 Authentication, Configuration, Profiles & Context

Executable authentication, token, profile, scope-context, precedence, credential-storage, redaction, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Sign-in uses per-actor or per-workload identities, never shared accounts; tokens are short-lived, audience-restricted, rotated, and revocable, and live only in OS-protected or encrypted storage — never in plain files or command arguments. Every operation resolves actor, organization, project, environment, tenant, purpose, and capability through an explicit, inspectable precedence order (flag > environment > profile > project config > default); a production environment is never selected implicitly; secrets are redacted in output, logs, config dumps, support bundles, and telemetry; and AI assistance never silently signs in, switches profiles, or elevates credentials.
