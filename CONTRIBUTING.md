# Contributing to XeniosAI

Thank you for contributing to XeniosAI.

## Project Philosophy

XeniosAI follows an architecture-first engineering process. Every significant feature begins with documentation before implementation.

## Engineering Workflow

1. Read PROJECT_BOOTSTRAP.md.
2. Read PROJECT_CONSTITUTION.md.
3. Read MASTER_INDEX.md.
4. Read ROADMAP.md.
5. Read AI_CONTEXT.md.
6. Review relevant ADRs.
7. Implement only approved tasks.
8. Update documentation when behavior changes.

## Contribution Rules

- Documentation before code.
- AI must never own business logic.
- Business rules belong to backend services.
- Every architectural change requires an ADR.
- Keep commits focused and descriptive.
- Write maintainable, testable, modular code.

## Commit Message Style

Examples:
- docs: add ROADMAP.md
- architecture: define booking service
- feat: implement pricing engine
- fix: correct availability overlap validation
- refactor: simplify calendar synchronization

## Pull Requests

Each pull request should:
- Explain the purpose.
- Reference related documentation.
- Update documentation if needed.
- Include testing notes.

## AI Contributors

AI agents such as ChatGPT and Codex must treat the Git repository as the single source of truth and should not rely on previous conversations when making engineering decisions.
