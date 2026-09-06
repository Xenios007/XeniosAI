# ARCH-035-09 Tool Updates, Plugins, Automation & Compatibility

Executable release-channel, signing/update, plugin, script-automation, compatibility, rollback, machine-output, recovery, observability, and assurance metadata for the CLI, IDE & Local Tooling phase.

Every release and plugin artifact is signed and verified before use; updates and plugin installs require explicit user consent; pre-release channels are opt-in and versions are pinnable for reproducible toolchains. Plugins run sandboxed with least-privilege capability grants; automation uses pinned versions, explicit non-production-safe context, and stable versioned machine output and exit codes; machine output never changes in a breaking way without a schema version bump and notice; a verified rollback path always remains available; and AI assistance may propose updates or plugins but never silently installs or applies them.
