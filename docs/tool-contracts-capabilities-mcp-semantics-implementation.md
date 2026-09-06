# ARCH-038-03 Tool Contracts, Capabilities & MCP Semantics

Executable tool-definition, MCP-resource, MCP-prompt, discovery/schema, error-model, progress/cancellation, and protocol-version metadata for the Connector, Tool & MCP Development phase.

Every tool, resource, and prompt has a published JSON schema and server-side validation. Each tool declares its side-effect classification, idempotency, and confirmation needs — a tool never performs an undeclared side effect or exercises authority beyond its registered contract. Discovery lists every capability the server exposes and omits none; errors are structured, machine-readable, correlated, and classified for retryability; long-running invocations emit progress and honour cancellation with cleanup; the protocol version is explicitly negotiated and never assumed; and AI assistance never silently changes a tool schema or adds an undeclared side effect.
