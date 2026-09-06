# ARCH-038-07 Testing, Simulation, Certification & Security Review

Executable connector-contract-test, sandbox, external-simulation, security-assessment, abuse-test, certification, and evidence metadata for the Connector, Tool & MCP Development phase.

Connector contracts are tested against pinned, registered ARCH-034 versions in isolated ARCH-036 sandboxes on synthetic data with no production reach. External systems are simulated with contract-bound fixtures and no live calls in deterministic tests. A security assessment covering threat model, dependencies, secrets, authorization, and isolation is completed; injection, fuzzing, rate-limit, and auth-abuse scenarios are exercised. Certification is evidence-backed and required before a marketplace listing — never self-asserted — and its evidence bundle is immutable, signed, traceable, and complete. AI assistance never silently passes a security review or certifies a connector.
