# Properties

## Purpose

The `properties` directory contains property-specific configurations, knowledge, branding, operational rules, and assets used by XeniosAI deployments.

The XeniosAI platform is designed to support many hospitality businesses. Each property should plug into the platform through this directory without requiring changes to the core architecture.

## Planned Structure

- casa-lluvia/
  - profile.md
  - amenities.md
  - house-rules.md
  - pricing/
  - templates/
  - integrations/
- future-properties/

## Design Principles

- Keep the platform generic.
- Keep business-specific configuration inside each property's directory.
- Avoid hardcoding property rules into the platform.
- Shared hospitality knowledge belongs in `knowledge/`; property-specific knowledge belongs here.

## First Deployment

Casa Lluvia serves as the reference implementation for XeniosAI. Future properties should follow the same organizational model while maintaining isolated configurations.

## Related Documents

- knowledge/
- prompts/
- api/
- ROADMAP.md
- AI_CONTEXT.md