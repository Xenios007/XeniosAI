# Storage Topology Implementation

## Architecture Source

Implements `ARCH-007-05 Storage Topology`.

## Scope

The implementation provides executable storage-topology governance:

- Storage objectives and architecture flow.
- Documented storage categories and consistency models.
- Service-owned authoritative data validation.
- Data lifecycle validation.
- Backup and recovery policy validation.
- Storage isolation, protection, governance, and cache validation.
- Future storage capabilities as placeholders only.

## Non-Goals

This module does not implement database schemas, storage products, storage engines, cloud storage services, replication engines, backup tooling, archival automation, or vendor-specific technology.

## Usage

`StorageTopologyDescriptor` is exported from `src/deployment-model/index.js` and registered through `addDeploymentModel`.
