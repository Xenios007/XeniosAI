# ARCH-038-01 Connector, Tool & MCP Development Overview

Executable connector-type, consumer, protocol, boundary, trust-model, quality-attribute, context-field, recovery, observability, and assurance metadata for the Connector, Tool & MCP Development phase.

Connectors and tools are defined by registered, versioned ARCH-034 contracts and operate strictly within their declared capabilities. Every invocation resolves actor, organization, project, environment, tenant, purpose, capability, and version; external credentials are explicitly granted, scoped, short-lived, and never embedded. Connector execution is sandboxed with no ambient authority or lateral movement to other tenants, connectors, or platform internals; external and provider systems retain their own authorization and business rules; and AI assistance may propose connectors or mappings but never silently publishes one or grants access.
