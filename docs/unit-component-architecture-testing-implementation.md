# ARCH-037-03 Unit, Component & Architecture Testing

Executable deterministic-unit, component-boundary, static-rule, dependency-constraint, fast-feedback, architecture-test, hermetic-isolation, recovery, observability, and assurance metadata for the Testing, Simulation & Conformance phase.

Unit tests are deterministic, order-independent, and millisecond-fast, with time, randomness, and I/O injected. Component tests use contract-bound doubles and never reach a real network or datastore. Lint, type, forbidden-pattern, and static security rules run in the fast tier with time-bounded suppressions; layering and dependency-direction rules are verified and circular dependencies prohibited; the fast tier stays within its time budget via incremental and parallel execution. Architecture descriptors are asserted complete and conformant in tests; suites are hermetic with reliable teardown; and AI assistance never silently disables a rule, suppresses a finding, or ignores a flaky test.
