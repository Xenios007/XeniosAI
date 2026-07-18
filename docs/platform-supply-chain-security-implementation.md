# Platform & Supply Chain Security Implementation

## Architecture Source

Implements `ARCH-008-08 Platform & Supply Chain Security`.

## Scope

The implementation provides executable platform and supply chain security governance:

- Software delivery objective, domain, secure development, dependency, SBOM, build, artifact, deployment, infrastructure, hardening, configuration, third-party, AI supply chain, administrative, observability, containment, governance, relationship flow, and future capability metadata.
- Immutable contracts for software delivery security profiles, dependency and artifact governance policies, platform operational security profiles, and validation results.
- Validation for trusted and traceable software delivery.
- Validation for dependency governance, SBOM inventory, artifact verification, third-party review, and AI supply chain governance.
- Validation for Zero Trust infrastructure, runtime hardening, configuration integrity, administrative security, observability, containment, and governance.

## Non-Goals

This module does not implement CI/CD products, operating systems, cloud providers, runtime hardening tools, vulnerability scanners, SBOM generators, or vendor-specific security tooling.

## Usage

`PlatformSupplyChainSecurityDescriptor` is exported from `src/security-architecture/index.js` and registered through `addSecurityArchitecture`.
