# ARCH-035-06 Local Emulation, Service Virtualization & Data

Executable emulator, mock, recorded-fixture, synthetic-data, offline-behavior, parity-limit, isolation, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Emulation and fixtures use only synthetic or approved minimized data; recorded fixtures redact secrets and classified values at capture time; emulated, mocked, and replayed results are clearly labelled as not production. Emulators bind locally, make no external calls, and clean up fully; offline mode never silently falls back to a live call; divergence from production behaviour is documented and surfaced rather than assumed away; and AI assistance may propose scenarios or datasets but never silently records or seeds from live data.
