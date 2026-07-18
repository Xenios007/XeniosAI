# Secrets & Key Management Implementation

## Architecture Source

Implements `ARCH-008-05 Secrets & Key Management`.

## Scope

The implementation provides executable secrets and key management governance:

- Secret and key management objectives, categories, lifecycle, ownership, storage, distribution, usage, rotation, revocation, environment, observability, governance, and future capability metadata.
- Immutable contracts for secret lifecycle records, key lifecycle records, secret distribution policies, and validation results.
- Validation for owned and auditable secret lifecycles.
- Validation for controlled cryptographic key lifecycles and key separation.
- Validation for least-exposure secret distribution, including AI secret access constraints.

## Non-Goals

This module does not implement cryptographic algorithms, encryption standards, vault products, secret stores, runtime key material handling, identity providers, or vendor-specific secret management products.

## Usage

`SecretsKeyManagementDescriptor` is exported from `src/security-architecture/index.js` and registered through `addSecurityArchitecture`.
