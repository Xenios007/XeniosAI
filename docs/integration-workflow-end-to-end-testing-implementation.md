# ARCH-037-05 Integration, Workflow & End-to-End Testing

Executable service-integration, workflow/saga, channel, transaction, compensation, journey, environment, recovery, observability, and assurance metadata for the Testing, Simulation & Conformance phase.

Integration, workflow, and journey tests run in isolated ARCH-036 sandboxes with no production reach and only synthetic or approved minimized data. Every integration point is checked against its registered contract; workflow and saga state transitions are verified and never left inconsistent; every compensation and rollback path is exercised by a test; transaction boundaries, consistency, and atomicity are verified rather than assumed. Reference journeys use Casa Lluvia scenarios (inquiry, rates, availability, booking, payment confirmation, guest authorization, add-ons, handoff, failure and recovery), and AI assistance never silently stubs an integration point or ignores a flaky journey.
