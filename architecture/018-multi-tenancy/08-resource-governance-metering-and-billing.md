# ARCH-018-08 — Resource Governance, Metering, and Billing

**Architecture Domain:** Tenant, Property, and Isolation Architecture

**Document ID:** ARCH-018-08

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-04

---

# Purpose

This document defines how XeniosAI governs shared and dedicated resources, protects tenants from noisy neighbors, measures consumption, attributes usage, enforces quotas, and supplies trustworthy inputs to commercial and internal allocation processes.

It separates authorization, entitlement, quota, metering, rating, invoicing, and service-level management so that commercial concerns do not silently become security decisions.

---

# Principles

* Shared capacity is governed explicitly by tenant scope.
* One tenant must not exhaust resources required by another.
* Entitlement, authorization, quota, metering, rating, and invoicing are distinct.
* Usage is attributable, reproducible, and reconcilable.
* Limits have stable, documented failure behavior.
* Safety and critical operations may have protected capacity.
* Resource controls apply to synchronous and asynchronous work.
* Dedicated capacity remains measurable and governed.
* Tenant usage data is protected tenant information.
* Commercial state changes runtime access only through an approved entitlement or lifecycle decision.
* Adjustments preserve history rather than rewriting source usage.

---

# Responsibility Boundaries

| Capability | Question answered |
|---|---|
| Authorization | May this actor perform this operation on this resource? |
| Entitlement | Has the tenant been granted this capability or service level? |
| Quota | How much may the tenant consume in a defined scope and period? |
| Admission control | Should this work enter the system now? |
| Scheduling | When and with what priority should accepted work execute? |
| Metering | What measurable consumption occurred? |
| Rating | How do commercial rules value approved usage? |
| Billing | What amount is invoiced or allocated? |
| Service management | Did delivery meet the committed objective? |

These capabilities exchange governed records but do not collapse into one decision engine.

---

# Governed Resource Families

Resource governance covers:

* API requests and bandwidth
* Concurrent sessions and operations
* Service compute and memory
* Database connections and operations
* Transactional, object, search, and memory storage
* Events, queues, retries, and dead letters
* Workflow instances, tasks, and timers
* AI model input, output, and execution units
* Agent runs, tool calls, and delegation
* Knowledge ingestion, indexing, and retrieval
* Integration calls, payload volume, and callbacks
* Batch, analytics, export, and migration work
* Observability volume
* Support and operational capacity

Resource units remain vendor neutral and are mapped to implementation measures through versioned definitions.

---

# Resource Scope

A limit or measurement declares:

* Tenant
* Property or property group where applicable
* Capability and resource
* Environment
* Time window
* Unit and aggregation method
* Service tier or entitlement
* Priority class
* Hard, soft, reserved, or informational behavior
* Effective version

Platform-wide safety limits may coexist with tenant limits. A tenant limit cannot override a stricter mandatory safety control.

---

# Quota Model

A quota records:

* Quota identifier
* Tenant and optional property scope
* Resource type and unit
* Limit and measurement window
* Burst allowance
* Reservation where applicable
* Warning thresholds
* Exceedance policy
* Source entitlement
* Effective and expiry time
* Delegation rules
* Version and evidence

Quotas are not stored only in edge gateways; downstream and asynchronous capabilities enforce the limits relevant to their resources.

---

# Limit Types

## Hard Limit

New work is rejected or paused when the limit is reached.

## Soft Limit

Work may continue while warnings, review, or commercial action is triggered.

## Burst Limit

Short peaks are permitted within a controlled envelope while sustained usage remains limited.

## Concurrency Limit

Bounds simultaneously executing or waiting work.

## Budget Limit

Bounds cumulative consumption, cost, or risk over a period or execution.

## Reserved Capacity

Protects a minimum capacity for a tenant or critical workload.

## Platform Safety Limit

Protects platform stability and cannot be raised by ordinary tenant configuration.

---

# Hierarchical Quotas

Limits may exist at:

1. Platform
2. Region or cell
3. Service tier
4. Tenant
5. Property
6. Capability
7. Workflow or agent execution
8. Actor or integration connection

The effective limit is derived through declared composition rules. It is not assumed to be simply the smallest value in every case because reservations, shared pools, and delegated allocations differ.

Tenant administrators may allocate purchased capacity to properties only within explicitly delegated bounds.

---

# Admission Control

Admission control evaluates:

* Tenant and lifecycle state
* Authorization and entitlement
* Current usage and quota
* Platform safety and capacity
* Work priority and deadline
* Expected resource cost
* Dependency health
* Fairness policy

Rejected work receives a stable reason, applicable reset or retry guidance, and correlation without revealing another tenant's demand.

---

# Fair Scheduling

Shared workers and queues use tenant-aware scheduling to prevent sustained high volume from monopolizing execution.

Mechanisms may include:

* Weighted fair queues
* Per-tenant concurrency
* Token or leaky buckets
* Priority classes
* Deadline-aware scheduling
* Reserved pools
* Work shaping
* Backpressure
* Batch windows

Priority is governed. A high commercial tier may receive differentiated service, but platform safety, legal, security, and emergency work may take precedence.

---

# Noisy-Neighbor Protection

Noisy-neighbor controls protect:

* Latency
* Throughput
* Queue delay
* Database and connection pools
* Cache and storage capacity
* Model and tool capacity
* Integration limits
* Observability pipelines
* Operator attention

Detection compares tenant demand, saturation, errors, and impact. Containment may throttle, queue, degrade, isolate, or temporarily restrict the offending workload.

Controls are designed to avoid cascading retries that worsen shared overload.

---

# Workload Classes

Reference classes include:

* Interactive critical
* Interactive standard
* Background operational
* Scheduled batch
* Bulk export or migration
* Best effort
* Security or incident response

Each class defines latency expectation, queue behavior, retry policy, cancellation, resource ceiling, and degradation strategy.

A tenant cannot relabel ordinary work as critical without an approved entitlement and provider policy.

---

# Graceful Degradation

When capacity is constrained, services may:

* Delay non-urgent batch work
* Reduce optional enrichment
* Limit result sizes
* Serve approved cached data
* Require human initiation for costly work
* Disable nonessential agent tools
* Apply lower-cost model or processing options where policy permits
* Preserve core transactional and safety operations

Degradation is explicit, tenant safe, observable, and contract compatible. It must not substitute another tenant's cached result or weaken authorization.

---

# Capacity Reservations

Reserved capacity may be assigned by tenant, tier, region, property, or critical capability.

Reservations define:

* Resource and quantity
* Effective period
* Sharing or borrowing rules
* Reclaim behavior
* Failure and overflow policy
* Cost attribution
* Monitoring and review

Unused capacity may be borrowed only when the reservation policy guarantees timely reclaim.

---

# Dedicated Resources

Dedicated stores or compute still require:

* Capacity thresholds
* Usage measurement
* Health and saturation monitoring
* Scale policy
* Cost allocation
* Quota and abuse controls
* Backup and recovery capacity
* Lifecycle and decommissioning

Dedicated does not mean unlimited or unobservable.

---

# Metering Model

A usage record contains:

* Usage-event identifier
* Tenant and optional property scope
* Capability and resource unit
* Quantity
* Measurement start and end
* Event or processing time
* Source service and version
* Correlation or execution reference
* Entitlement or tier reference where relevant
* Classification
* Idempotency and integrity information
* Adjustment relationship if applicable

Usage records are immutable. Corrections use reversal or adjustment records.

---

# Measurement Semantics

Every meter defines:

* What is measured
* Unit and precision
* When measurement occurs
* Success, failure, cancellation, and retry treatment
* Aggregation window
* Deduplication behavior
* Late-event handling
* Rounding
* Version and effective time

Changing meter semantics creates a new version and preserves comparability rules.

---

# Collection Architecture

Providers emit usage through reliable records or events tied to completed or otherwise billable work.

The collection path:

1. Validates source identity and schema.
2. Validates tenant scope.
3. Deduplicates by governed identity.
4. Preserves original event time and version.
5. Stores immutable raw usage.
6. Aggregates by defined windows.
7. Reconciles against source totals.
8. Publishes approved consumption views.

Telemetry estimates are not automatically billing-grade usage.

---

# Idempotency and Retries

Retries must not create duplicate chargeable usage unless each attempt is explicitly a separately metered unit.

Usage identity may combine provider event, tenant, operation, unit, and version.

The metering system retains deduplication state for a period appropriate to replay and settlement windows.

---

# Late and Corrected Usage

Late usage is applied according to the measurement period, settlement status, and commercial policy.

Corrections preserve:

* Original record
* Correction reason
* Corrected quantity or reversal
* Authorizing actor or process
* Effective accounting period
* Evidence

Closed invoices are adjusted through governed credit or debit processes rather than editing history.

---

# Rating Boundary

Rating consumes approved usage, product catalog, price version, commitment, tier, discount, and time rules.

ARCH-018 requires traceability from a rated result back to usage and entitlement but does not define commercial prices.

Runtime services do not calculate access by asking whether a charge was paid. Commercial consequences are translated into approved entitlement or lifecycle changes.

---

# Billing Boundary

Billing is responsible for accounts, invoices, taxes, credits, collections, and financial records.

The tenant registry may reference a billing account but does not store payment credentials or duplicate financial ledgers.

Billing receives aggregated or itemized usage appropriate to contract and privacy. It returns commercial status through governed interfaces.

---

# Internal Allocation

Usage may support internal cost allocation, capacity planning, sustainability analysis, or product management.

Internal allocation uses the same tenant-safe, versioned measures but may apply a different rating model from customer billing.

Internal cost data is access controlled and must not be exposed as another tenant's comparative activity.

---

# Tenant Usage Views

Authorized tenants may view:

* Entitlements and quotas
* Current and historical usage
* Forecast consumption
* Threshold notifications
* Throttling or degradation events
* Meter definitions and versions
* Approved billing detail
* Adjustment status

Views are reconciled with authoritative usage and do not expose platform or other-tenant data.

---

# Notifications

Notifications may occur at warning, critical, reached, reset, or anomaly thresholds.

They include tenant scope, resource, measurement window, observed usage, limit, expected behavior, and approved remediation path.

Notification delivery respects tenant contacts, channel policy, privacy, and rate controls.

---

# Quota Changes

Quota changes are versioned and effective-dated.

An increase may require entitlement, commercial approval, capacity confirmation, or risk review. A decrease defines treatment of current work and already-consumed units.

Emergency containment can impose a temporary safety limit independent of commercial quota, with reason, expiry, communication, and review.

---

# AI and Agent Resource Governance

AI workloads require budgets for:

* Input and output processing
* Model calls
* Tool calls
* Agent steps and delegations
* Retrieval and memory operations
* Execution duration
* Concurrent runs
* Human review queues

An agent cannot bypass a tenant budget by spawning children, retrying under new identifiers, or switching tools. Budgets propagate and subdivide through delegation.

---

# Workflow Resource Governance

Workflow controls include:

* Active and waiting instance limits
* Activity concurrency
* Timer and signal volume
* History size
* Retry budgets
* Human-task backlog
* Child workflow limits
* Retention

Critical workflow compensation may use protected capacity to recover safely after ordinary quota is exhausted.

---

# Integration Resource Governance

Integration quotas account for both XeniosAI capacity and external provider limits.

Controls include tenant connection limits, request rate, concurrent delivery, payload volume, retry budget, backoff, circuit breaking, and callback protection.

One tenant's failing provider connection must not consume the shared retry capacity of other tenants.

---

# Export and Migration Governance

Bulk export and migration use scheduled, checkpointed, tenant-aware work classes.

They declare expected volume, deadline, capacity reservation, network and storage budget, pause or cancellation, and impact protections.

Commercial or tenant exit rights are not denied solely because ordinary interactive quota is exhausted; a governed service process allocates appropriate capacity.

---

# Service-Level Measurement

Service-level indicators may be segmented by tenant, tier, region, property, and capability while protecting confidentiality.

Measures define whether planned maintenance, client errors, throttling, external dependency failures, and tenant-caused overload are included.

Service-level reporting and billing credits consume governed evidence but remain separate from low-level telemetry.

---

# Capacity Planning

Capacity planning uses:

* Tenant and property growth
* Service-tier mix
* Usage trends and seasonality
* Peak concurrency
* AI and integration workload shape
* Isolation and placement profiles
* Reserved capacity
* Recovery and failover headroom
* Planned onboarding and migration

Plans assess both aggregate demand and concentration risk in a tenant, cell, region, provider, or dependency.

---

# Abuse and Anomaly Detection

Resource anomalies may indicate defects, credential compromise, integration loops, runaway agents, denial of service, or billing error.

Response may include warning, throttling, job cancellation, credential restriction, tenant restriction, incident declaration, or manual review.

Detection does not automatically expose a tenant's detailed behavior to other tenants.

---

# Observability and Evidence

Evidence includes:

* Quota and entitlement versions
* Admission and throttling decisions
* Queue and scheduling behavior
* Capacity reservations
* Raw and aggregated usage
* Deduplication and corrections
* Rating and invoice references
* Notifications
* Manual overrides and containment
* Reconciliation results

Sensitive usage and commercial data is access controlled and retained according to its purpose.

---

# Reconciliation

Reconciliation compares:

* Provider usage with collected records
* Raw usage with aggregates
* Usage with quota decisions
* Entitlements with configured limits
* Rated items with usage and price versions
* Invoices with approved rated results
* Dedicated resource inventory with allocation

Differences become owned issues. Financially material corrections require controlled approval and evidence.

---

# Failure Handling

During quota or metering failure:

* Safety limits remain enforceable.
* High-cost or high-risk work may fail closed.
* Critical recovery work uses an approved protected path.
* Metering records are buffered or reconstructed only with integrity controls.
* Uncertain usage is quarantined for reconciliation.
* The platform does not charge estimated data as confirmed usage without governed policy.

Failure behavior is documented per capability and tier.

---

# Testing and Assurance

Tests cover:

* Tenant and property quota isolation
* Burst, reset, and window boundaries
* Fair scheduling under contention
* Retry storms and noisy neighbors
* Reserved capacity reclaim
* Async, workflow, agent, and integration budgets
* Usage deduplication and late arrival
* Corrections and reconciliation
* Entitlement and authorization separation
* Billing traceability
* Tenant usage-view isolation
* Degradation and recovery

Load tests use multiple tenant profiles and verify both platform stability and per-tenant fairness.

---

# Architecture Decisions

* Shared resources use tenant-aware admission, scheduling, and capacity controls.
* Authorization, entitlement, quota, metering, rating, billing, and service management remain separate.
* Usage records are immutable, versioned, and attributable.
* Corrections use linked adjustments rather than history edits.
* Dedicated resources remain governed and metered.
* AI and workflow budgets propagate through child execution.
* Critical compensation and safety work may use protected capacity.
* Commercial status affects runtime only through approved lifecycle or entitlement state.
* Tenant usage and commercial data remain isolated.
* Reconciliation is required across provider, meter, quota, rating, and billing boundaries.

---

# Validation Criteria

This architecture is satisfied when:

* Each material shared resource has a tenant-aware fairness and limit strategy.
* One tenant cannot monopolize shared worker, store, queue, model, or integration capacity.
* Quota decisions have stable reasons and reset behavior.
* Usage can be traced to tenant, capability, source, time, and version.
* Retries and replay do not create unintended duplicate usage.
* Adjustments preserve the original record.
* Tenant usage views expose no other tenant data.
* Commercial restrictions use governed entitlement or lifecycle transitions.
* Billing and service reporting reconcile to approved source evidence.

---

# Summary

XeniosAI governs resources so that shared scale does not create unpredictable service or cross-tenant interference.

Tenant-aware admission, fair scheduling, quotas, reservations, budgets, and degradation protect runtime capacity. Immutable usage, explicit measurement semantics, reconciliation, and clear commercial boundaries provide trustworthy metering and billing inputs without confusing payment state with security authority.
