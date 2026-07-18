# XeniosAI Implementation Guide

**Version:** 1.0

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

Every session:

1. Inspect the repository.

2. Read all architecture documents.

3. Build an architecture dependency graph.

4. Compare architecture against implementation.

5. Detect implemented modules.

6. Detect incomplete modules.

7. Select the earliest documented but unfinished architecture module.

8. Implement only that module.

9. Run tests.

10. Fix build failures.

11. Commit.

12. Stop.

---

# Scope Rules

During one session:

Implement only one logical architecture module.

Do not continue into another module.

Do not perform unrelated refactoring.

Keep commits focused.

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

Each session should produce one logical commit.

Commit messages should describe the implemented architecture.

Example:

```
Implement ARCH-002 Foundation Layer
```

---

# Pull Requests

Each PR should implement one architecture module only.

Avoid combining unrelated work.

---

# Conflict Handling

Stop immediately if:

* architecture conflicts
* missing mandatory dependencies
* repository corruption
* build system failure
* security concerns

Explain the issue.

Do not guess.

---

# Module Completion Rules

When an architecture module is completed:

* Mark it as implemented in `TASK_QUEUE.md`.
* Do not change architecture documents.
* Recommend exactly one next architecture module.
* Stop immediately after the report.

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

Then stop.

Do not continue automatically.

Wait for the next instruction.

---

# Resume Behavior

When the user says:

> Continue

Automatically:

* inspect the repository
* determine progress
* locate the next unfinished architecture module
* implement it
* commit
* report
* stop

Do not ask which module to implement.

Do not skip ahead.

Always continue from the architecture.
