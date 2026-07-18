# ARCH-006 · Chapter 04 — Value Objects

**Document ID:** ARCH-006-04

**Title:** Value Objects

**Version:** 1.0

**Status:** Draft

**Owner:** Architecture

**Last Updated:** 2026-07-18

**Parent Document:** ARCH-006 — Domain Model

---

# Purpose

This document defines the Value Objects used throughout the XeniosAI Domain Model.

Value Objects represent descriptive business concepts that do not possess independent identity. They provide meaning, consistency, and precision to Entities by modeling immutable business values rather than independently managed business objects.

Unlike Entities, Value Objects are defined entirely by their attributes and business meaning.

---

# Scope

This chapter defines:

* Value Object philosophy
* Characteristics
* Ownership
* Common Value Objects
* Validation
* Equality
* Immutability
* Evolution principles

Implementation details such as serialization, persistence, and programming language constructs are intentionally outside the scope of this document.

---

# Philosophy

A Value Object represents a business concept whose identity is its value.

If two Value Objects contain the same business values, they represent the same business concept.

Examples include:

* Money
* Date Range
* Address
* Email Address
* Phone Number
* Coordinates
* Time Zone
* Guest Count

A Value Object is never tracked independently of the Entity that owns it.

---

# Why Value Objects

Many business concepts do not require identity.

For example:

Changing a guest's email address does not modify the Email Address itself.

Instead, the Guest Entity replaces one Email Address with another.

Likewise, changing the reservation dates replaces one Date Range with another.

These concepts are values, not business identities.

---

# Characteristics

Every Value Object should:

* Be immutable.
* Have no independent identity.
* Be compared by value.
* Contain business meaning.
* Enforce its own validation.
* Be reusable across the domain.

---

# Identity

Value Objects do not possess business identity.

For example:

```text
Email Address

john@example.com

==

john@example.com
```

These represent the same business value.

Unlike Entities, there is no concept of an Email Address ID.

---

# Equality

Equality is determined entirely by business value.

Examples:

Money

₱1,500 PHP

equals

₱1,500 PHP

Date Range

July 20–22

equals

July 20–22

Address

Same street

Same city

Same postal code

equals

Same address

Reference identity is irrelevant.

---

# Immutability

Value Objects never change after creation.

If a business value changes, a new Value Object replaces the old one.

Example:

Old Email Address

↓

New Email Address

The original object remains conceptually unchanged.

Immutability simplifies reasoning, validation, and consistency.

---

# Common Value Objects

The XeniosAI platform defines several reusable Value Objects.

| Value Object  | Purpose                      |
| ------------- | ---------------------------- |
| Money         | Monetary value               |
| Currency      | Currency representation      |
| Date Range    | Reservation period           |
| Email Address | Electronic contact           |
| Phone Number  | Contact information          |
| Address       | Physical location            |
| Time Zone     | Regional time representation |
| Guest Count   | Occupancy information        |
| Coordinates   | Geographic location          |
| Duration      | Time interval                |
| Percentage    | Discount or rate             |
| Language      | Localization                 |

These objects provide a consistent vocabulary across the platform.

---

# Money

Represents a monetary amount.

Characteristics include:

* Amount
* Currency
* Precision
* Validation rules

Business rules such as addition, subtraction, and comparison belong to the Money Value Object.

Money should never be represented as primitive numeric values throughout the platform.

---

# Date Range

Represents a continuous period of time.

Responsibilities include:

* Start date
* End date
* Duration
* Overlap detection
* Containment checks

Reservation logic depends heavily on the Date Range Value Object.

---

# Email Address

Represents a validated electronic address.

Responsibilities include:

* Format validation
* Normalization
* Equality comparison

Business logic should depend on the Email Address object rather than raw strings.

---

# Address

Represents a physical location.

May include:

* Street
* City
* Province
* Postal code
* Country

Address is treated as a descriptive value rather than an independently managed Entity.

---

# Guest Count

Represents occupancy information.

May include:

* Adults
* Children
* Infants
* Total occupancy

Capacity validation relies upon this Value Object.

---

# Coordinates

Represents a geographic location.

Responsibilities include:

* Latitude
* Longitude
* Distance calculations
* Geographic validation

Properties reference Coordinates as descriptive values.

---

# Duration

Represents a measurable period of time.

Examples include:

* Stay duration
* Workflow timeout
* Reservation length
* Grace period

Duration encapsulates business calculations involving elapsed time.

---

# Validation

Each Value Object is responsible for validating itself.

Examples:

Email Address

* Valid syntax
* Supported format

Money

* Non-negative amount
* Valid currency

Date Range

* Start precedes end

Validation rules belong to the Value Object rather than external services.

---

# Ownership

Value Objects are owned by the Entity that contains them.

Examples:

Guest

owns

Email Address

Reservation

owns

Date Range

Property

owns

Coordinates

The Value Object has no lifecycle independent of its owner.

---

# Reuse

The same Value Object may appear in multiple Entities.

Example:

Money

used by:

* Reservation
* Payment
* Pricing
* Promotion

Reuse promotes consistency across the Domain Model.

---

# Business Behavior

Value Objects may contain business behavior directly related to their own values.

Examples:

Money

* Add
* Subtract
* Compare

Date Range

* Overlaps
* Contains
* Intersects

Coordinates

* Calculate Distance

Behavior should remain focused on the represented value.

---

# Persistence

Persistence mechanisms should preserve Value Object semantics.

Storage format should not influence the business model.

The Domain Model remains independent of persistence technologies.

---

# Evolution

Value Objects may evolve through:

* Additional validation
* Expanded behavior
* Additional descriptive attributes
* Improved localization

Evolution should preserve business meaning.

---

# Architectural Rules

Value Objects must:

* Have no identity.
* Be immutable.
* Be compared by value.
* Validate themselves.
* Represent meaningful business concepts.
* Remain independent of implementation technologies.

Whenever identity is unnecessary, a Value Object should be preferred over an Entity.

---

# Future Evolution

Future Value Objects may include:

* Tax Rate
* Loyalty Points
* Discount Rule
* Business Hours
* Exchange Rate
* AI Confidence Score
* Sentiment Score
* Availability Window

Each should represent immutable business meaning rather than business ownership.

---

# Summary

Value Objects provide the XeniosAI platform with a rich vocabulary of immutable business concepts.

By encapsulating validation, equality, and business behavior within descriptive values, the Domain Model becomes more expressive, reusable, and resilient while keeping Entities focused on identity and lifecycle management.

---

# Related Documents

* ARCH-006-02 — Bounded Contexts
* ARCH-006-03 — Core Entities
* ARCH-006-05 — Aggregates
* ARCH-006-08 — Domain Rules
