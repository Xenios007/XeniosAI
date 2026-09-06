# ARCH-038-02 Connector Kits, Adapter Patterns & Project Structure

Executable template, ports-and-adapters, manifest, configuration, dependency, packaging, and ownership metadata for the Connector, Tool & MCP Development phase.

Only approved, signed connector kit templates are used. Domain ports are defined by registered ARCH-034 contracts and no external system detail leaks in — business and domain logic never lives in an external adapter. The manifest completely declares identity, capabilities, permissions, and contract versions; configuration is schema-validated and separated from secret material, which is referenced by handle and injected at runtime. Dependencies are pinned, provenance-checked, scanned, and minimal; packages are reproducible, signed, and manifest-embedded; every connector has an accountable owner and support path; and AI assistance never silently modifies a manifest, permission set, or dependency pin.
