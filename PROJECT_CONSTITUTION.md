# XeniosAI Project Constitution

Version: 1.0 Foundation

## Purpose
XeniosAI is an AI-native hospitality operating system. Casa Lluvia is the reference implementation and first deployment.

## Mission
Build a scalable hospitality platform capable of serving from one property to thousands without architectural redesign.

## Engineering Principles
1. Documentation before code.
2. AI never owns business logic.
3. Business logic is implemented in backend services.
4. AI communicates through tools/APIs only.
5. Every major decision requires an ADR.
6. Every design must satisfy:
   - Scale to 10,000 properties.
   - Replaceable components.
   - Understandable by a new engineer or AI using only the repository.
7. Security by default.
8. Git repository is the source of truth.
9. Conversation history is never the source of truth.
10. Continuous improvement through versioned documentation.

## Roles
- ChatGPT: Chief Software Architect
- Codex: Implementation Engineer
- Repository: Permanent Memory
- Product Owner: Final decision maker

## Definition of Done
A feature is complete only when:
- Specification exists
- Architecture documented
- ADR recorded (if required)
- Tests defined
- Documentation updated
- Implementation reviewed
