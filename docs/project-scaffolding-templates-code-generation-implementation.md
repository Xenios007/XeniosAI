# ARCH-035-04 Project Scaffolding, Templates & Code Generation

Executable template-catalog, template-input, provenance, deterministic-generation, ownership, regeneration, safe-customization, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Only approved, signed, version-pinned templates are used; inputs are schema-validated and secret-free. Generated output records its template, generator, and source-contract versions, is byte-identical for identical inputs, is clearly marked and owned by the consuming team, and is written only inside the target project directory. Regeneration preserves protected regions and local edits, surfaces conflicts for review, and never overwrites silently; AI assistance may propose templates or parameters but never silently generates or overwrites files.
