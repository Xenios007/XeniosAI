# XeniosAI Implementation Guide

**Version:** 1.2

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

1. Inspect the repository and working tree.

2. Synchronize remote state before selecting work:
   * run `git fetch origin` when a configured `origin` exists
   * inspect local/remote divergence
   * if the working tree is clean and `origin/main` is ahead with no unique local commits, fast-forward safely
   * if verified local commits exist and `origin/main` advanced, follow the Remote Synchronization and Push Recovery rules below
   * never force-push or discard unrelated user work

3. Read `IMPLEMENTATION_GUIDE.md`, `TASK_QUEUE.md`, `PROJECT_STATE.md`, applicable ADRs, and the architecture documents needed for the current dependency chain.

4. Build or refresh the architecture dependency graph.

5. Compare architecture against implementation.

6. Detect completed and incomplete modules from the synchronized repository state.

7. Select the earliest documented but unfinished architecture module.

8. Implement exactly one logical architecture module for the current iteration.

9. Add or update tests and relevant non-architecture documentation.

10. Run the applicable verification suite.

11. Fix recoverable build, test, lint, security, and conformance failures.

12. Update `TASK_QUEUE.md` and `PROJECT_STATE.md` with the verified module state.

13. Stage and commit the completed module as one focused logical commit.

14. Push the committed branch to the configured Git remote, using the recovery procedure below if the remote advanced.

15. Record a concise module checkpoint report.

16. If another documented module is incomplete, immediately repeat from step 1 for the next module without waiting for user confirmation.

17. End the run only when the defined queue is complete, the user asks to stop, continuing could damage existing work, or a genuine unrecoverable blocker is reached.

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

A normal non-fast-forward push rejection because `origin/main` advanced is **recoverable** and must **not** by itself end the continuous run.

If a push is rejected because the remote advanced:

1. Preserve the verified local commit.
2. Run `git fetch origin`.
3. Inspect `git status` and local/remote divergence.
4. Never force-push and never rewrite remote history.
5. Never discard unrelated uncommitted user work.
6. If the working tree is clean and the verified local commit(s) can be safely replayed, run `git rebase origin/main`.
7. If the rebase succeeds, rerun the relevant verification for the completed ARCH.
8. If verification passes, retry `git push origin main`.
9. After the push succeeds, refresh `TASK_QUEUE.md` and `PROJECT_STATE.md` from the resulting synchronized repository state.
10. If remote commits already completed architecture work that the local session had not seen, respect the remote state and select the first genuinely incomplete ARCH rather than duplicating work.
11. Immediately continue to the next incomplete ARCH without asking for confirmation.

If the branch can be safely fast-forwarded instead of rebased, prefer the safe fast-forward path.

Authentication or transient network failures should receive reasonable retry/diagnosis. They become blockers only when they persist and prevent safe synchronization.

Do not rewrite remote history unless explicitly instructed.

---

# Remote Synchronization and Push Recovery

Remote synchronization is part of normal autonomous operation, not an exceptional reason to stop.

Before each new ARCH iteration:

* run `git fetch origin` when `origin` exists
* inspect the working tree
* inspect divergence between the current branch and `origin/main`
* fast-forward when the remote is ahead and there are no unique local commits
* safely rebase verified local commits onto `origin/main` when both sides advanced and the working tree is clean
* rerun relevant verification after any rebase
* push the synchronized verified result before beginning the next ARCH

A non-fast-forward rejection, remote advancement, or ordinary clean rebase is not an unrecoverable blocker.

If a rebase produces conflicts:

* resolve them only when the correct result is unambiguous from architecture, repository state, and the current ARCH scope
* rerun all relevant verification after resolution
* if the conflict cannot be resolved safely and unambiguously, abort the rebase, preserve the verified checkpoint, and stop as a genuine blocker

Never use `git push --force`, `git push --force-with-lease`, destructive resets, or history rewriting merely to keep the automation moving.

---

# Pull Requests

Each PR should implement one architecture module only.

Avoid combining unrelated work.

---

# Conflict Handling

End the continuous run only for a genuine blocker, including:

* irreconcilable architecture conflicts
* missing mandatory dependencies that prevent safe implementation
* repository corruption
* unresolved concurrent changes or rebase conflicts that cannot be safely and unambiguously reconciled
* unrecoverable build or verification failure after reasonable diagnosis
* security, privacy, compliance, or data-loss risk that requires human direction
* missing authority for a consequential or destructive operation
* persistent remote authentication, connectivity, or synchronization failure after reasonable retry and diagnosis
* unrelated uncommitted user changes that would have to be discarded or overwritten to proceed
* an explicit user instruction to stop

A normal non-fast-forward push rejection, remote advancement, or safely recoverable Git divergence is **not** a genuine blocker.

Explain genuine blockers and preserve the last verified checkpoint.

Do not guess, bypass safeguards, weaken tests, force-push, rewrite history, or continue into another module while a genuine blocker remains.

---

# Module Completion Rules

When an architecture module is completed:

* Mark it as implemented in `TASK_QUEUE.md`.
* Update `PROJECT_STATE.md` with the latest successful implementation state.
* Do not change architecture documents unless the user explicitly requests an architecture revision.
* Run and record the required verification.
* Stage and commit the module.
* Synchronize with `origin/main` safely if the remote advanced.
* Push the verified module before beginning another module.
* Record the completed module and identify the next incomplete architecture module from the synchronized state.
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

* inspect the repository and working tree
* fetch and synchronize with the configured remote using the safe recovery rules in this guide
* read the implementation guide, queue, project state, applicable ADRs, and architecture
* determine the earliest unfinished architecture module from synchronized state
* implement exactly one module per iteration
* add or update tests and documentation
* run verification and fix recoverable failures
* update `TASK_QUEUE.md` and `PROJECT_STATE.md`
* stage and commit that module
* push that module, recovering automatically from ordinary remote advancement when safe
* record a concise checkpoint
* immediately continue to the next unfinished module

Do not ask which module to implement.

Do not ask for confirmation between successfully completed modules.

Do not treat a normal non-fast-forward push rejection as a reason to stop.

Do not skip ahead or combine modules in one commit.

Always continue in architecture and dependency order until the requested range or currently defined queue is complete.

Stop only for queue completion, an explicit user stop request, risk of damaging existing work, or a genuine unrecoverable blocker defined by this guide.
