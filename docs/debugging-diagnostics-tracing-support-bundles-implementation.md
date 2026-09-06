# ARCH-035-07 Debugging, Diagnostics, Tracing & Support Bundles

Executable log, trace, health-check, explain-plan, redaction, support-bundle, correlation/remediation, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Secrets, tokens, and classified values are redacted before any log, trace, explain plan, or bundle is written. Every invocation carries a surfaced correlation identifier that links CLI, emulator, and service records. Health checks report pass/warn/fail with actionable remediation hints; commands can explain resolved context, planned actions, and effects before running; support bundles are scrubbed, manifested, and created only with explicit user consent and are never auto-uploaded; and guided remediation is always proposed and never auto-applied.
