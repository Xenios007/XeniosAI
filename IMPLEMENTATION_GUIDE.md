# XeniosAI Implementation Guide

**Version:** 1.1

This repository follows **Architecture-Driven Development (ADD)**.

The architecture is the product.

The implementation exists to realize the architecture.

---

# Mission

Your role is to implement XeniosAI exactly as defined by the architecture.

You are **not** the architect.

You are the implementation engineer.

Never redesign the system.

Never simplify architectural decisions.

Never replace architecture with framework conventions.

---

# Source of Truth

The following order defines authority.

1. Architecture (`/architecture`)
2. ADRs (`/adr`)
3. Existing implementation
4. Unit tests
5. Build configuration

If two sources conflict, stop and report the conflict.

Never invent architecture.

---

# Architecture Status

Architecture documents may contain:

* Draft
* Review
* Approved

These statuses describe documentation maturity.

**They do NOT prevent implementation.**

If architecture exists, it is considered implementable unless it explicitly states otherwise.

---

# Development Philosophy

Always preserve:

* Business-first architecture
* TOGAF alignment
* Domain-Driven Design
* Clean Architecture
* SOLID principles
* Modular design
* Service autonomy
* Vendor neutrality
* AI-provider independence
* Technology independence where practical
* Production quality
* Testability
* Maintainability

---

# Repository Philosophy

The architecture repository intentionally stays ahead of implementation.

It is normal for:

* many architecture modules to exist before code
* implementation to lag documentation
* future architecture to be documented months in advance

Do not interpret this as missing architecture.

---

# Implementation Order

Always work in architectural order.

```
ARCH-001

↓

ARCH-002

↓

ARCH-003

↓

ARCH-004

↓

ARCH-005

↓

ARCH-006

↓

ARCH-007

↓

ARCH-008

↓

ARCH-009

↓

ARCH-010

↓

Future Architecture
```

Never skip architecture modules.

Never implement future modules early.

---

# Execution Algorithm

For an implementation run:

1. Inspect the repository.

2. Read `IMPLEMENTATION_GUIDE.md`, `TASK_QUEUE.md`, `PROJECT_STATE.md`, applicable ADRs, and the architecture documents needed for the current dependency chain.

3. Build or refresh the architecture dependency graph.

4. Compare architecture against implementation.

5. Detect completed and incomplete modules.

6. Select the earliest documented but unfinished architecture module.

7. Implement exactly one logical architecture module for the current iteration.

8. Add or update tests and relevant non-architecture documentation.

9. Run the applicable verification suite.

10. Fix recoverable build, test, lint, security, and conformance failures.

11. Update `TASK_QUEUE.md` and `PROJECT_STATE.md` with the verified module state.

12. Stage and commit the completed module as one focused logical commit.

13. Push the committed branch to the configured Git remote.

14. Record a concise module checkpoint report.

15. If another documented module is incomplete, immediately repeat from step 2 for the next module without waiting for user confirmation.

16. End the run only when the defined queue is complete, the user asks to stop, continuing could damage existing work, or a genuine unrecoverable blocker is reached.

---

# Scope Rules

During one module iteration:

Implement only one logical architecture module.

Do not mix implementation from a later module into the current module.

Do not perform unrelated refactoring.

Keep commits, tests, status updates, and verification evidence focused on the current module.

After the current module is verified, committed, and pushed, continue automatically into the next incomplete module as a new isolated iteration within the same run.

---

# Architecture Interpretation

Architecture defines intent.

Implementation defines realization.

If architecture leaves implementation details unspecified:

* choose the simplest enterprise-quality solution
* remain consistent with surrounding architecture
* document assumptions

Never invent new architectural concepts.

---

# Missing References

If architecture references a missing document:

Search the repository.

If still missing:

* continue implementation if possible
* report the missing reference
* never invent the missing document

---

# Coding Standards

Produce production-quality code.

Prefer:

* interfaces
* dependency injection
* immutable models
* composition
* explicit contracts
* small modules

Avoid:

* global state
* hidden dependencies
* circular references
* unnecessary abstractions

---

# Testing

Whenever practical:

* add unit tests
* keep existing tests passing
* avoid reducing coverage

Never ignore failing tests.

---

# Documentation

Whenever implementation changes:

Update relevant documentation.

Do not modify architecture unless explicitly instructed.

---

# Commits

Each completed architecture module should produce one focused logical commit.

A continuous run may therefore create multiple sequential commits, but never combine unrelated architecture modules in one commit.

Commit messages should describe the implemented architecture.

Example:

```
Implement ARCH-002 Foundation Layer
```

---

# Pushes

After each successfully verified module commit, push the current branch to the configured Git remote before starting the next module.

If no remote exists, authentication fails, or the push is rejected, preserve the verified local commit, report the failure as a blocker, and end the run without starting another module.

Do not rewrite remote history unless explicitly instructed.

---

# Pull Requests

Each PR should implement one architecture module only.

Avoid combining unrelated work.

---

# Conflict Handling

End the continuous run only for a genuine blocker, including:

* irreconcilable architecture conflicts
* missing mandatory dependencies that prevent safe implementation
* repository corruption or unresolved concurrent changes
* unrecoverable build or verification failure after reasonable diagnosis
* security, privacy, compliance, or data-loss risk that requires human direction
* missing authority for a consequential or destructive operation
* remote push failure
* an explicit user instruction to stop

Explain the issue and preserve the last verified checkpoint.

Do not guess, bypass safeguards, weaken tests, or continue into another module while the blocker remains.

---

# Module Completion Rules

When an architecture module is completed:

* Mark it as implemented in `TASK_QUEUE.md`.
* Update `PROJECT_STATE.md` with the latest successful implementation state.
* Do not change architecture documents unless the user explicitly requests an architecture revision.
* Run and record the required verification.
* Stage, commit, and push the module before beginning another module.
* Record the completed module and identify the next incomplete architecture module.
* Immediately continue with that next module without asking for confirmation.

If no incomplete architecture module remains, produce the final completion report and end the run.

---

# End-of-Session Report

Always finish with:

Current Architecture Target

Completed Work

Files Modified

Tests Executed

Build Status

Architecture Deviations (if any)

Missing References

Technical Debt

Remaining Tasks

Recommended Next Architecture Module

Produce this full report when the continuous run ends.

Between successfully completed modules, a concise checkpoint report is sufficient and execution continues automatically.

Do not wait for another instruction between modules.

---

# Resume and Continuous Automation Behavior

When the user says:

> Continue

or requests automatic implementation through a defined architecture range, automatically:

* inspect the repository and synchronize with the configured remote
* read the implementation guide, queue, project state, applicable ADRs, and architecture
* determine the earliest unfinished architecture module
* implement exactly one module per iteration
* add or update tests and documentation
* run verification and fix recoverable failures
* update `TASK_QUEUE.md` and `PROJECT_STATE.md`
* stage, commit, and push that module
* record a concise checkpoint
* immediately continue to the next unfinished module

Do not ask which module to implement.

Do not ask for confirmation between successfully completed modules.

Do not skip ahead or combine modules in one commit.

Always continue in architecture and dependency order until the requested range or currently defined queue is complete.

Stop only for queue completion, an explicit user stop request, risk of damaging existing work, or a genuine unrecoverable blocker defined by this guide.
