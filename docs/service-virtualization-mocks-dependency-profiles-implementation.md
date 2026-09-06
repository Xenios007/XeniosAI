# ARCH-036-05 Service Virtualization, Mocks & Dependency Profiles

Executable simulated-dependency, contract-binding, latency-profile, failure-injection, fixture-management, fidelity, drift-detection, recovery, observability, and assurance metadata for the Developer Environments & Sandboxes phase.

Every mock is bound to a registered ARCH-034 contract and schema version and invents nothing; all simulated responses, latency, and failures are labelled as not production; virtual dependencies make no calls to production systems. Fixtures are redacted, versioned, provenance-recorded, and captured only from approved sources; the fidelity gap to the real dependency is documented and surfaced; divergence between virtual behaviour and the contract is detected and alerted, with drifted profiles quarantined; latency and failure injection are seeded and reproducible; and AI assistance never silently alters a mock, fixture, latency profile, or failure scenario.
