# ARCH-036-04 Synthetic Test Data, Privacy & Reset

Executable data-generation, classification, masking-restriction, seed-version, reset, retention, deletion, recovery, observability, and assurance metadata for the Developer Environments & Sandboxes phase.

All sandbox data is generated synthetic and schema-aligned, never derived, copied, or sampled from production; masking, tokenization, and anonymization are never accepted as substitutes. Every dataset is labelled synthetic and non-sensitive and checked at environment and storage boundaries. Seed datasets are immutable, versioned, signed, and pinned per environment; environments can be reset to the pinned baseline on demand and on schedule; generated data and snapshots have bounded, enforced retention; teardown triggers verifiable cascade deletion across every store; and AI assistance never silently seeds an environment from production or masked production data.
