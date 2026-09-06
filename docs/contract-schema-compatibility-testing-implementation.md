# ARCH-037-04 Contract, Schema & Compatibility Testing

Executable provider-verification, consumer-verification, message-verification, schema-validation, version-compatibility, deprecation-verification, registry-binding, recovery, observability, and assurance metadata for the Testing, Simulation & Conformance phase.

Providers are verified against every operation and schema in their published contract; consumer-driven contracts assert only used fields and declare a version range. Event, command, and query messages are verified for schema and semantics; schema structural validity and evolution rules are enforced with negative tests. A compatibility gate classifies and blocks breaking changes before publication; deprecated contracts keep behaving per contract until their published sunset. Contract tests are bound to pinned, registered ARCH-034 contract versions and invent nothing, and AI assistance never silently relaxes a contract test or merges an incompatibility.
