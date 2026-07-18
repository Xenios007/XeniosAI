# Network Topology Implementation

## Architecture Source

Implements `ARCH-007-06 Network Topology`.

## Scope

The implementation provides executable network-topology governance:

- Network objectives and layered communication flow.
- Documented network zones and operational responsibilities.
- North-south and east-west route validation.
- Public/private boundary validation.
- Dynamic service discovery validation.
- Network segmentation, resilience, observability, and governance validation.
- Future network capabilities as placeholders only.

## Non-Goals

This module does not implement firewall products, load balancers, DNS providers, software-defined networking, service mesh runtime behavior, cloud network services, routing infrastructure, or vendor-specific networking technology.

## Usage

`NetworkTopologyDescriptor` is exported from `src/deployment-model/index.js` and registered through `addDeploymentModel`.
