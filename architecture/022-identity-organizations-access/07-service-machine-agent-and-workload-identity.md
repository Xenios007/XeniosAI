# ARCH-022 · Chapter 07 — Service, Machine, Agent & Workload Identity

**Document ID:** ARCH-022-07

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines non-human identities for services, workloads, applications, devices, integrations, automation, workflows, tools, and AI agents.

Non-human actors are first-class principals. They must never depend on shared human credentials or ambiguous platform identity.

---

# Identity Types

| Type | Purpose |
| --- | --- |
| Service identity | Identifies a logical service capability |
| Workload identity | Identifies a deployed runtime instance or job |
| Application identity | Identifies a registered client or integration application |
| Device identity | Identifies an approved device, kiosk, gateway, or edge node |
| Workflow identity | Identifies a workflow definition or execution actor |
| Tool identity | Identifies an executable capability exposed to agents or automation |
| Agent identity | Identifies an AI agent with sponsor, purpose, capabilities, and lifecycle |

Service identity and workload identity are distinct so logical ownership and runtime provenance can both be evaluated.

---

# Registration

Registration defines owner, purpose, software or package identity, environment, tenant eligibility, deployment provenance, allowed audiences, capabilities, network expectations, lifecycle, and incident contact.

Unregistered workloads and agents are denied protected access.

---

# Authentication

Non-human authentication prefers short-lived, automatically issued credentials bound to current workload, application, device, or execution identity.

Long-lived secrets are minimized, rotated, scoped, monitored, and stored through approved secrets capabilities. Credentials never appear in prompts, model context, source packages, logs, conversation history, or extension manifests.

---

# Authorization

Non-human access is evaluated using:

* Identity type and owner
* Deployment or execution environment
* Tenant and property scope
* Requested capability and resource
* Workload or package provenance
* Tool and network grants
* Workflow or agent purpose
* User delegation where applicable
* Time, budget, risk, and lifecycle

A service's ability to reach another service does not imply permission.

---

# Agent Identity

Each agent defines:

* Agent identifier and version
* Accountable sponsor and owner
* Purpose and supported tasks
* Tenant and industry eligibility
* Tools and knowledge domains
* Memory permissions
* Delegation rights
* Financial, time, token, and action budgets
* Human oversight and stop conditions
* Evaluation and promotion evidence
* Lifecycle and revocation

Agent identity remains visible in evidence even when acting for a human.

---

# On-Behalf-Of Execution

When a workload, workflow, or agent acts for a person, the request preserves both identities:

* Original requesting principal
* Executing non-human principal
* Delegation or workflow authority
* Purpose and scope

The executing actor receives the intersection of its own capability and the valid delegated authority, never the union of all available access.

---

# Device Identity

Device identity records ownership, enrollment, type, posture category, software state, tenant eligibility, keys, location policy where applicable, last evidence, and retirement.

Device trust can contribute to access context but never replaces user or workload identity.

---

# Rotation and Revocation

Automated rotation avoids coordinated outages through overlapping validity and staged rollout. Revocation targets compromised workloads, packages, devices, deployments, or agent versions without disabling unrelated actors.

Runtime systems revalidate important access and do not rely indefinitely on cached machine grants.

---

# Observability

Every non-human action records logical identity, runtime identity, version, owner, tenant, purpose, original actor where applicable, resource, decision, and correlation reference.

Shared service accounts and generic “system” actors are non-conformant because they destroy accountability.

