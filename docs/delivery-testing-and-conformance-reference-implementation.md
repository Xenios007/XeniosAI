# ARCH-020-09 Delivery, Testing, and Conformance Reference

`DeliveryTestingAndConformanceReferenceDescriptor` provides immutable, executable metadata for the developer-platform golden path, environment separation, delivery pipeline, test pyramid, contract testing, AI and workflow evaluation, security/performance testing, release strategy, conformance report, and productionization checklist.

Profiles require reproducible or attestable builds, immutable consistently promoted artifacts, release-blocking conformance checks, automatic multi-tenant/failure tests, exercised rollback/recovery, explicit productionization decisions, AI evaluation as a release control, and operational readiness as acceptance. They reject promotion of untracked source, bypassed checks, unevaluated model changes, mutable production artifacts, and deferred operational readiness.

This module turns architecture rules into an automated delivery path that retains conformance evidence from source validation through progressive release and productionization.
