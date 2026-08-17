# API and SDK Governance and Assurance Implementation

## Architecture Source

- `architecture/017-api-sdk-architecture/08-api-sdk-governance-and-assurance.md`

## Implementation Summary

ARCH-017-08 is implemented as an API and SDK Governance and Assurance descriptor module in `src/api-sdk`.

The implementation exposes governance objectives, principles, definitions, lifecycle domains, governance levels, roles, decision records, decision classes, registration fields, policy instruments, classification dimensions, risk factors, control types, preventive and detective controls, review areas, lifecycle gates, change governance fields, assurance levels and methods, evidence records and quality factors, exception fields, issue fields, automation capabilities, reporting fields, maturity levels, non-negotiable rules, and architecture boundaries.

## Design Notes

- Every supported API and SDK product requires one accountable owner and an authoritative registry record.
- Governance is federated within enterprise guardrails and uses risk-proportionate review, assurance, evidence, and escalation.
- Assurance is scoped and evidence-based; it does not replace product ownership, engineering judgment, service operations, or independent audit.
- Exceptions remain time bounded with lawful authority, compensating controls, evidence, expiry, and remediation ownership.
- Automated and AI-assisted governance remain inspectable, explainable, safely bounded, and subject to accountable human authority.

## Verification

- Focused tests: `tests/api-sdk/governance-assurance.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
