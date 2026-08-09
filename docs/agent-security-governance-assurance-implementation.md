# Agent Security, Governance, and Assurance Implementation

## Architecture Source

- `architecture/014-ai-agent-framework/08-agent-security-governance-and-assurance.md`

## Implementation Summary

ARCH-014-08 is implemented as a technology-neutral descriptor module in `src/ai-agent-framework`.

The implementation exposes the documented security objectives, governance objectives, trust model, security boundaries, threat actors, threat categories, least-privilege dimensions, credential requirements, runtime controls, prompt-injection controls, data protection controls, model/provider controls, supply-chain controls, secure failure actions, emergency suspension scopes, governance model stages, inventory fields, risk and impact classification, decision rights, policy domains, enforcement points, control objectives, responsible AI dimensions, evidence requirements, assurance activities, red-team scenarios, exception handling, findings and remediation, reassessment triggers, monitoring signals, incident response, secure restoration requirements, metrics, quality attributes, architectural rules, and explicit boundaries.

## Design Notes

- Agent output is treated as untrusted until validated by deterministic platform controls.
- Agent governance requires accountable human ownership, authoritative inventory, risk classification, proportionate oversight, and independent assurance where required.
- Validation rejects forbidden anti-patterns such as model-controlled security state, credentials in prompts, self-approved risk, fabricated approval, policy-as-text-only enforcement, unrestricted data access, and automatic output authority.
- Security-product implementation, identity-provider implementation, compliance-framework selection, model/provider selection, enterprise Security Architecture replacement, ARCH-012 replacement, and accountable human decision replacement remain outside this module because ARCH-014-08 explicitly excludes them.

## Verification

- Focused tests: `tests/ai-agent-framework/agent-security-governance-assurance.test.js`
- Full suite: `npm.cmd test`
- Build: `npm.cmd run build`
