# ARCH-035-02 CLI Command Architecture & User Experience

Executable command-taxonomy, help, input, output, exit-code, prompt, non-interactive/accessibility, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Commands use a stable noun-verb taxonomy with discoverable help and copyable examples. Inputs are schema-validated with flag-over-environment-over-config-over-default precedence; results go to stdout and diagnostics to stderr; sensitive values are redacted everywhere. Exit codes follow a documented stable taxonomy and never report success on failure; every interactive prompt has a non-interactive bypass; colour, glyphs, and motion are never the sole carrier of meaning; and AI assistance may propose commands but never silently executes or promotes them.
