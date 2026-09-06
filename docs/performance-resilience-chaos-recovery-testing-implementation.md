# ARCH-037-08 Performance, Resilience, Chaos & Recovery Testing

Executable load-capacity, latency-budget, degradation, fault-injection, disaster-recovery, reconciliation, environment, recovery, observability, and assurance metadata for the Testing, Simulation & Conformance phase.

Performance and chaos tests use synthetic load in isolated ARCH-036 sandboxes with no production impact. Latency SLOs and percentile budgets are verified against a versioned baseline and regressions are gated; graceful degradation, load-shedding, and backpressure paths are exercised. Chaos experiments declare a steady-state hypothesis and run only with a bounded blast radius and an abort switch. Recovery point and recovery time objectives are verified by drills — never assumed — and post-failure reconciliation and consistency repair are verified. AI assistance never silently relaxes a latency budget or runs a chaos experiment without guardrails.
