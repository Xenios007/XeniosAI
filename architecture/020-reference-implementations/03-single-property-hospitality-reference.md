# ARCH-020-03 — Single-Property Hospitality Reference

**Document ID:** ARCH-020-03  
**Version:** 1.0  
**Status:** Draft  
**Owner:** Enterprise Architecture Team  
**Last Updated:** 2026-08-05

---

# Purpose

This document defines the Casa Lluvia Staycation single-property reference implementation.

# Scenario

Casa Lluvia is represented as one tenant operating one one-bedroom staycation property. Guests inquire through a supported channel, obtain availability and pricing, request a reservation, submit authorized guest details, receive confirmation and self-check-in guidance, and may add pool access or parking.

# Actors

* Guest
* Tenant owner or administrator
* Property operator
* Support operator
* Channel adapter
* AI orchestrator
* Deterministic business services
* External calendar, messaging, payment, and property systems

# Business Capabilities

* Property information
* Availability calendar
* Rate and add-on computation
* Occupancy policy
* Reservation request and confirmation
* Deposit or payment reference
* Guest authorization
* Pool-ticket handling
* Motorcycle or car parking
* Notification and self-check-in guidance
* Booking modification and cancellation

# Domain Ownership

| Capability | Owner |
|---|---|
| Property profile and operating rules | Property Service |
| Date availability and holds | Availability Service |
| Rates and add-on prices | Pricing Service |
| Reservation state | Reservation Service |
| Guest authorization data | Guest Service |
| Payment or deposit status | Payment Integration or Payment Service |
| Messages and delivery | Notification Service |
| Property FAQs and nearby information | Knowledge capability |

# Request Flow

1. Channel adapter normalizes the guest request.
2. Gateway establishes identity or session and tenant/property context.
3. Orchestrator classifies intent and assembles minimum context.
4. Availability query retrieves authoritative date state.
5. Pricing query computes rate using date, stay, guest count, and selected add-ons.
6. Orchestrator explains the deterministic result.
7. Reservation command uses idempotency and current availability/version.
8. Workflow coordinates hold, deposit, guest authorization, confirmation, and notifications.
9. Events update projections, telemetry, and evidence.

# Configuration

Configurable values include property name, occupancy limit, stay duration, check-in/out times, weekday/weekend rates, guest-count tiers, pool prices, parking prices, deposit policy, communication templates, and nearby information.

Configuration cannot bypass occupancy, security, privacy, authorization, or platform controls.

# Availability Model

Availability is authoritative by property, stay interval, booking state, hold, maintenance block, and version.

External calendar data is normalized through an adapter and reconciled. The integration feed is not allowed to update the repository directly.

# Pricing Model

Pricing receives a typed request and returns itemized lines, currency, policy version, validity, and total.

AI never calculates or invents the total. It may collect missing inputs and explain the result.

# Reservation Workflow

Reference states include Requested, Held, AwaitingDeposit, AwaitingGuestDetails, Confirmed, CheckedIn, CheckedOut, Cancelled, Expired, and Exception.

The workflow defines timeouts, duplicate commands, expired holds, failed notifications, payment ambiguity, compensation, and operator escalation.

# Data and Privacy

Guest identity documents and authorization details are classified, minimized, encrypted, access controlled, retained for defined purpose, and excluded from logs, prompts, fixtures, and source control.

# Knowledge and AI

Knowledge answers property rules, amenities, nearby locations, booking instructions, and check-in guidance with source provenance.

Business facts such as current availability, total price, payment status, and reservation state are queried from owning services.

# Observability

Signals cover request correlation, intent, tool use, availability latency, pricing version, reservation workflow state, integration delivery, security denials, and tenant-safe service health.

# Failure Scenarios

* External calendar unavailable
* Conflicting booking update
* Duplicate reservation request
* Payment callback replay
* Guest exceeds occupancy
* Notification delivery failure
* AI tool request lacks authority
* Knowledge answer is stale
* Operator support access expires

# Acceptance Criteria

* The same inputs produce the same authoritative rate.
* A booked interval cannot be confirmed twice.
* Occupancy policy is enforced by a business service.
* All commands are tenant/property scoped and idempotent where required.
* AI output cannot change reservation state directly.
* Guest data is absent from logs and synthetic fixtures.
* Failure and recovery are observable.

# Architecture Decisions

* Casa Lluvia is the first production-shaped vertical slice.
* Configuration holds variable business values; services enforce rules.
* External calendars are integrations, not authoritative internal repositories.
* Reservation is coordinated through a durable workflow.
* Knowledge and authoritative business data remain distinct.

# Summary

The Casa Lluvia reference demonstrates a complete single-property guest journey while preserving the service, AI, workflow, data, security, and operational boundaries required for later scale.
