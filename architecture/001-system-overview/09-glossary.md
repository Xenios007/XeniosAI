# ARCH-001 · Chapter 09 — Glossary

**Document ID:** ARCH-001-09

**Title:** Glossary

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-001 — System Overview

---

# Purpose

This glossary defines the official terminology used throughout XeniosAI.

Every architecture document, specification, API, implementation, and engineering discussion should use these terms consistently.

If multiple definitions exist in common usage, the definition in this glossary takes precedence within XeniosAI.

---

# General Terms

## AI Orchestrator

The central intelligence layer responsible for coordinating conversations, assembling context, selecting tools, and generating natural language responses.

The AI Orchestrator never owns business logic.

---

## Business Service

A deterministic service responsible for a specific business capability.

Examples:

* Booking Service
* Pricing Service
* Calendar Service
* Notification Service

Business Services own business rules.

---

## Tool

A callable capability exposed to the AI.

A tool represents a stable contract between the AI Orchestrator and backend services.

Examples include:

* Check Availability
* Compute Pricing
* Create Booking
* Cancel Reservation

---

## Conversation

A continuous interaction between one or more participants and XeniosAI.

A conversation may span multiple communication channels while maintaining a shared context.

---

## Session

The temporary execution context associated with an active conversation.

A session stores short-term conversational state but is not the system of record.

---

## Knowledge Base

The structured collection of operational knowledge used by XeniosAI.

Examples include:

* Policies
* Amenities
* FAQs
* Procedures
* Property information

The Knowledge Base is version-controlled and serves as the authoritative source for AI-assisted responses.

---

# Hospitality Terms

## Property

A hospitality business configured within XeniosAI.

Examples include:

* Vacation rentals
* Hotels
* Resorts
* Apartments
* Hostels

Properties provide configuration rather than modifying the platform.

---

## Deployment

A running instance of XeniosAI configured for one or more properties.

Casa Lluvia is the reference deployment.

Future deployments may support multiple hospitality businesses using the same platform.

---

## Guest

A person interacting with a property through XeniosAI.

Guests may inquire, reserve, modify bookings, receive notifications, or request support.

---

## Booking

A confirmed reservation accepted by the property.

A booking has completed validation and occupies calendar availability.

---

## Reservation

A guest request to occupy a property during a specified period.

A reservation may exist before confirmation.

Not every reservation becomes a booking.

---

## Availability

The ability of a property to accept a reservation for a requested period.

Availability is determined by the Calendar Service.

---

## Pricing

The calculated monetary cost of a reservation.

Pricing is owned exclusively by the Pricing Service.

---

## Rate

A pricing rule or predefined cost associated with a property.

Rates may vary according to:

* Date
* Occupancy
* Promotions
* Property rules

---

## Promotion

A temporary pricing or booking incentive applied according to business rules.

---

# Architectural Terms

## Architecture

The collection of decisions that define the structure, behavior, and evolution of XeniosAI.

Architecture is independent of implementation.

---

## Specification

A detailed engineering artifact describing how a system or component shall behave.

Specifications are implementation-independent.

---

## ADR

Architecture Decision Record.

A permanent record documenting an accepted architectural decision.

---

## Repository Memory

The principle that Git—not conversation history—is the permanent engineering memory of XeniosAI.

All approved knowledge should exist within the repository.

---

## Domain

A logical business capability.

Examples:

* Booking
* Pricing
* Calendar
* Notifications

Each domain should be owned by a single service.

---

## Service

An independently deployable software component responsible for one business domain.

Services communicate through explicit interfaces.

---

## Adapter

A component responsible for communicating with external providers while isolating provider-specific implementation details.

Examples:

* Meta Adapter
* Google Calendar Adapter
* Payment Gateway Adapter

---

## Integration

A connection between XeniosAI and an external system.

Examples include:

* Airbnb
* Google Calendar
* WhatsApp
* Email

---

# AI Terms

## Context

The collection of information assembled before AI reasoning.

Context may include:

* Conversation history
* Guest profile
* Property configuration
* Business knowledge
* Tool responses

---

## Prompt

The structured instruction provided to an AI model.

Prompts are version-controlled engineering assets.

---

## Model Provider

The external system responsible for AI inference.

Examples:

* OpenAI
* Anthropic
* Google
* Local LLM

The platform should remain independent of any specific provider.

---

## Retrieval-Augmented Generation (RAG)

A technique in which structured knowledge is retrieved before AI reasoning.

RAG improves factual accuracy by grounding responses in authoritative data.

---

## Hallucination

An AI-generated statement that is unsupported by authoritative knowledge or business services.

XeniosAI should minimize hallucinations through structured knowledge retrieval and deterministic tool execution.

---

# Operational Terms

## Observability

The ability to understand the internal state of the platform using:

* Metrics
* Logs
* Traces
* Dashboards

---

## Health Check

An automated mechanism that verifies whether a service is operating correctly.

---

## Telemetry

Operational data collected from the platform for monitoring and analysis.

---

## Horizontal Scaling

Increasing platform capacity by adding additional service instances.

---

## Stateless Service

A service that does not permanently store conversational or operational state internally.

Persistent data belongs in dedicated storage systems.

---

# Guiding Terminology Rules

Within XeniosAI:

* Every business capability belongs to exactly one domain.
* Every domain is owned by one service.
* Every service exposes capabilities through tools.
* Every tool is invoked by the AI Orchestrator.
* Every implementation should use terminology consistent with this glossary.

---

# Maintaining the Glossary

New terms should be added when:

* A new architectural concept is introduced.
* A new service is created.
* A new business capability is defined.
* Existing terminology becomes ambiguous.

Changes to existing definitions should be reviewed through the architecture review process.

---

# Related Documents

* ARCH-001 — System Overview
* ARCH-002 — Platform Layers
* ARCH-003 — Service Map
* ADR-0001 — Tool-First Architecture
* ADR-0002 — Repository as Permanent Memory
