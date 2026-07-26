# ARCH-015 Workflow Engine Diagrams

This directory contains the conceptual diagrams supporting the XeniosAI Workflow Engine Architecture.

The diagrams show how versioned workflow definitions, deterministic runtime control, durable execution state, tasks, workers, events, timers, human decisions, agent tasks, integrations, reliability controls, evidence, and operations form one governed process platform.

The diagrams remain:

- Technology neutral
- Vendor independent
- Deterministic first
- Durable and recoverable
- Business-service aligned
- Human accountable
- Agent bounded
- Evidence centered
- Tenant and property aware
- Enterprise scale

---

## Diagram List

### 01. Workflow Engine Landscape

Shows the logical relationship between workflow initiators, the Workflow Control Plane, the durable runtime, coordination services, participants, authoritative domain services, and governance and operations.

File: `01-workflow-engine-landscape.mmd`

Related documents:

- ARCH-015
- ARCH-015-01
- ARCH-015-03
- ARCH-015-07

---

### 02. Workflow Definition Lifecycle

Shows the governed definition lifecycle from proposal and design through classification, validation, testing, approval, registration, release, activation, operation, improvement, suspension, deprecation, and retirement.

File: `02-workflow-definition-lifecycle.mmd`

Related documents:

- ARCH-015-02
- ARCH-015-08
- ARCH-015-10

---

### 03. Workflow Execution State

Shows how an admitted execution progresses through initialization, running work, durable waiting, resumption, completion, cancellation, compensation, failure, expiration, and termination.

File: `03-workflow-execution-state.mmd`

Related documents:

- ARCH-015-03
- ARCH-015-04
- ARCH-015-05
- ARCH-015-09

---

### 04. Retry and Compensation Flow

Shows how task outcomes are classified, reconciled when uncertain, retried when safe, escalated when required, compensated using domain-defined actions, and closed with evidence.

File: `04-retry-and-compensation-flow.mmd`

Related documents:

- ARCH-015-04
- ARCH-015-06
- ARCH-015-07
- ARCH-015-09

---

### 05. Human-Agent Workflow Coordination

Shows how deterministic workflow control coordinates bounded service, human, and agent tasks while preserving identity, authority, tenant and property scope, result validation, domain ownership, and evidence.

File: `05-human-agent-workflow-coordination.mmd`

Related documents:

- ARCH-015-05
- ARCH-015-07
- ARCH-015-08
- ARCH-014

---

## Diagram Usage

These Mermaid sources are architecture views, not executable workflow definitions, implementation topologies, model prompts, queue configurations, or provider designs.

They should be used to:

- Explain Workflow Engine responsibilities
- Validate definition, runtime, task, event, timer, and state boundaries
- Review workflow, domain-service, worker, human, and agent ownership
- Design reliable retry, reconciliation, compensation, and recovery
- Support security, operational-readiness, and assurance reviews
- Explain tenant-aware and property-aware workflow execution
- Maintain a shared workflow vocabulary

Specific workflow products, programming languages, queue technologies, databases, event brokers, cloud services, provider names, credential formats, secret values, tenant-sensitive information, property-sensitive information, and deployment topology should not be embedded in these diagrams.

Material changes should first be reflected in the relevant ARCH-015 chapter.
