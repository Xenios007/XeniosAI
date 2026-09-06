# ARCH-035-05 Contract, Schema, Client & Server Generation

Executable registry-input, language-target, compatibility, generated-client, stub/validator, traceability, regeneration-compatibility, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Generation consumes only pinned, verified, policy-filtered ARCH-034 registry contracts and produces byte-identical output for identical inputs. Generated clients expose authentication injection points and never embed credentials; generated server stubs delegate authorization and business rules to provider services; every artifact records its source contract, schema, and generator versions with an element-level mapping. Breaking generated-surface changes are classified and gated before publishing, and AI assistance may propose targets or options but never silently regenerates or publishes.
