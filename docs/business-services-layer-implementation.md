# Business Services Layer Implementation

## Purpose

This document describes the current implementation scope of `ARCH-002-07 Business Services Layer`.

It exists to keep implementation and repository documentation synchronized without modifying the architecture source of truth.

## Implemented Capabilities

- Service capability ownership through `BusinessServiceRegistry`
- Deterministic request routing through `BusinessServiceRouter`
- Common business request, response, validation, capability, and domain event contracts
- Booking, Pricing, Calendar, Knowledge, and Property service ownership boundaries
- Business tool executor adapter for AI tool orchestration

## Current Boundaries

The implementation intentionally excludes:

- durable business persistence
- cross-service transaction management
- concrete booking lifecycle rules beyond required-field validation
- property-specific pricing policies
- calendar availability storage
- notification delivery
- external provider integrations

These concerns require Data, Integration, and more detailed domain modules.

## Notes

- The Pricing Service only computes totals from explicit inputs supplied to it. It does not invent rates, discounts, taxes, promotions, or property-specific policies.
- Services return explicit `resource_unavailable` or `validation_failure` outcomes where architecture exists but implementation details are not yet available.
