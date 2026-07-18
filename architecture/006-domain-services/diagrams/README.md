# ARCH-006 Diagrams

This directory contains the Mermaid diagrams supporting the XeniosAI Domain Model.

Unlike the execution diagrams in ARCH-005, these diagrams describe the structure and behavior of the business domain.

## Diagram Index

| Diagram                    | Purpose                                       |
| -------------------------- | --------------------------------------------- |
| 01-bounded-contexts.mmd    | Overall domain partitioning                   |
| 02-domain-map.mmd          | Relationships between major business concepts |
| 03-aggregate-relations.mmd | Aggregate ownership and references            |
| 04-entity-lifecycle.mmd    | Example lifecycle progression                 |
| 05-domain-events.mmd       | Business event flow across bounded contexts   |

## Design Principles

The diagrams intentionally:

* emphasize business ownership
* hide implementation details
* avoid database concepts
* avoid framework terminology
* use ubiquitous language
* align with Domain-Driven Design

Together these diagrams complement the execution architecture documented in **ARCH-005** by illustrating **what the business is**, rather than **how the platform executes work**.
