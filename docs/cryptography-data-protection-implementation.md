# Cryptography & Data Protection Implementation

## Architecture Source

Implements `ARCH-008-06 Cryptography & Data Protection`.

## Scope

The implementation provides executable cryptography and data protection governance:

- Cryptography objective, philosophy, classification, data category, lifecycle, encryption, integrity, authenticity, signature, privacy, AI data, sharing, retention, disposal, observability, governance, relationship flow, and future capability metadata.
- Immutable contracts for data protection profiles, cryptographic protection policies, data sharing and retention policies, and validation results.
- Validation for consistent information classification and lifecycle protection.
- Validation for risk-aligned cryptographic protection across storage, transit, integrity, authenticity, and signatures.
- Validation for authorized sharing, limited retention, and secure disposal.

## Non-Goals

This module does not implement cryptographic algorithms, encryption libraries, certificate authorities, regulatory implementation details, runtime encryption, or vendor-specific cryptography products.

## Usage

`CryptographyDataProtectionDescriptor` is exported from `src/security-architecture/index.js` and registered through `addSecurityArchitecture`.
