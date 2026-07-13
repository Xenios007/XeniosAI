# ARCH-003 · Chapter 02 — Service Catalog

**Document ID:** ARCH-003-02

**Title:** Service Catalog

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-13

**Parent Document:** ARCH-003 — Service Map

---

# Purpose

This document provides the official catalog of services that comprise the XeniosAI platform.

Each service represents a distinct business capability and serves as the authoritative owner of a specific business domain.

The Service Catalog provides a concise overview of each service before its detailed specification is introduced elsewhere in the repository.

---

# Philosophy

Services are business capabilities.

They are not collections of related classes, APIs, or databases.

Each service exists because it owns a business responsibility that cannot be delegated to another service.

A service should remain understandable through its purpose rather than its implementation.

---

# Catalog Overview

| Service                | Primary Domain              |
| ---------------------- | --------------------------- |
| Booking Service        | Reservations                |
| Pricing Service        | Pricing                     |
| Calendar Service       | Availability                |
| Knowledge Service      | Operational Knowledge       |
| Notification Service   | Communications              |
| Property Service       | Property Management         |
| Authentication Service | Identity & Access           |
| Analytics Service      | Reporting & Metrics         |
| Media Service          | Digital Assets              |
| Workflow Service       | Business Process Automation |

---

# Booking Service

### Purpose

Manages the reservation lifecycle.

### Primary Responsibility

Booking operations.

### Owns

* Reservations
* Booking status
* Reservation lifecycle

### Depends On

* Pricing Service
* Calendar Service
* Notification Service

### Provides

* Create booking
* Modify booking
* Cancel booking
* Retrieve booking

### Consumers

* AI Intelligence Layer
* Workflow Service

---

# Pricing Service

### Purpose

Calculates reservation costs.

### Primary Responsibility

Pricing logic.

### Owns

* Rate rules
* Discounts
* Promotions
* Taxes
* Fees

### Depends On

* Property Service

### Provides

* Price calculation
* Discount validation
* Promotion evaluation

### Consumers

* Booking Service
* AI Intelligence Layer

---

# Calendar Service

### Purpose

Maintains property availability.

### Primary Responsibility

Calendar management.

### Owns

* Availability
* Reservation blocks
* Maintenance periods

### Depends On

None.

### Provides

* Availability lookup
* Reservation blocking
* Calendar synchronization

### Consumers

* Booking Service
* AI Intelligence Layer

---

# Knowledge Service

### Purpose

Provides authoritative operational knowledge.

### Primary Responsibility

Knowledge management.

### Owns

* Policies
* FAQs
* Amenities
* Procedures

### Depends On

Property Service

### Provides

* Knowledge retrieval
* Policy lookup
* FAQ search

### Consumers

* AI Intelligence Layer

---

# Notification Service

### Purpose

Delivers communications.

### Primary Responsibility

Message delivery.

### Owns

* Notification templates
* Delivery tracking

### Depends On

Integration Layer

### Provides

* Email
* SMS
* Messenger
* Push notifications

### Consumers

* Booking Service
* Workflow Service

---

# Property Service

### Purpose

Maintains property configuration.

### Primary Responsibility

Property management.

### Owns

* Property configuration
* Amenities
* Branding
* Operational settings

### Depends On

None.

### Provides

* Property information
* Configuration lookup

### Consumers

* Pricing Service
* Knowledge Service
* Booking Service

---

# Authentication Service

### Purpose

Manages platform identity.

### Primary Responsibility

Authentication and authorization.

### Owns

* Users
* Roles
* Permissions
* Credentials

### Depends On

None.

### Provides

* Login
* Token validation
* Permission checks

### Consumers

* Gateway Layer
* Administrative Services

---

# Analytics Service

### Purpose

Produces operational insight.

### Primary Responsibility

Reporting and analytics.

### Owns

* Metrics
* Dashboards
* Business reports

### Depends On

All operational services.

### Provides

* Reporting
* KPIs
* Operational dashboards

### Consumers

* Administrators
* Owners

---

# Media Service

### Purpose

Manages digital assets.

### Primary Responsibility

Media management.

### Owns

* Images
* Documents
* Attachments
* Generated media

### Depends On

Object Storage

### Provides

* Media upload
* Retrieval
* Transformation

### Consumers

* Property Service
* Knowledge Service

---

# Workflow Service

### Purpose

Coordinates multi-step business workflows.

### Primary Responsibility

Business process orchestration.

### Owns

* Workflow definitions
* Workflow execution
* Task coordination

### Depends On

Multiple business services.

### Provides

* Process automation
* Workflow execution
* Scheduled jobs

### Consumers

* AI Intelligence Layer
* Administrative interfaces

---

# Service Classification

The XeniosAI platform currently consists of:

### Core Hospitality

* Booking
* Pricing
* Calendar

### Knowledge

* Knowledge

### Property

* Property
* Media

### Platform

* Authentication
* Notification
* Workflow

### Intelligence

* Analytics

This classification provides a logical grouping rather than a deployment strategy.

---

# Evolution

The Service Catalog is expected to grow.

Future additions may include:

* Loyalty Service
* Revenue Management Service
* Housekeeping Service
* Maintenance Service
* CRM Service
* Marketplace Service
* Billing Service
* Audit Service

Each new service should introduce a new business capability rather than overlap an existing one.

---

# Summary

The Service Catalog provides the official inventory of XeniosAI business services.

Each service owns a distinct business capability and collaborates with other services through explicit contracts.

This catalog serves as the authoritative reference for platform decomposition and future service specifications.

---

# Related Documents

* ARCH-003-01 — Service Landscape
* ARCH-003-03 — Service Ownership
* ARCH-003-04 — Service Dependencies
* ARCH-006 — Domain Model
* ADR-0001 — Tool-First Architecture
