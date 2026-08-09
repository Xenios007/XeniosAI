# Developer Portal and Service Catalog Implementation

This implementation realizes `ARCH-013-07 Developer Portal and Service Catalog`.

## Scope

- Exposes portal and catalog objectives, principles, actors, channels, context fields, information areas, and self-service action contracts as immutable metadata.
- Exposes catalog record types, service record fields, relationships, authority sources, registration steps, reconciliation findings, and ownership discovery fields.
- Exposes documentation lifecycle, unified search, AI-assisted discovery provenance, security, governance, maturity, measures, anti-patterns, architectural rules, and future capabilities.
- Provides a `PortalCatalogProfile` contract and `PortalCatalogDescriptor` validator.
- Registers `PortalCatalogDescriptor` through developer-platform dependency injection.

## Architecture Alignment

The implementation preserves the portal as an experience capability and the Service Catalog as an authoritative discovery view. It keeps source authority, version, freshness, access, tenant/property isolation, governed self-service, documentation lifecycle, and AI source citation as explicit validation boundaries.

No portal product, catalog vendor, search engine, documentation generator, source-control provider, or UI framework is prescribed.
