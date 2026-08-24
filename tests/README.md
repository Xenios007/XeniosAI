# Tests

## Purpose

The `tests` directory contains the verification assets for XeniosAI.

Testing ensures that business logic, APIs, AI integrations, prompts, schemas, and deployment configurations remain reliable as the platform evolves.

Testing is treated as a first-class engineering discipline rather than an afterthought.

## Planned Contents

- Unit Tests
- Integration Tests
- End-to-End Tests
- API Contract Tests
- AI Evaluation Tests
- Prompt Regression Tests
- Performance Tests
- Security Tests
- Load Tests
- Deployment Verification

## Design Principles

- Every feature should have automated tests.
- Business logic must be deterministic and testable.
- AI behavior should be evaluated using repeatable evaluation suites.
- Tests should run automatically in CI/CD pipelines.
- Production defects should result in new regression tests.

## Test Pyramid

```
                End-to-End
             Integration Tests
              Service Tests
               Unit Tests
```

## Future Goals

- Continuous Integration
- Continuous Testing
- AI Prompt Evaluation
- AI Regression Benchmarking
- Property-specific Validation Suites

## Related Documents

- api/
- schemas/
- deployment/
- architecture/
- tasks/

## Current Implementation

The repository currently includes automated unit tests for:

- `ARCH-032-04 Conversation & Customer Experience Components` in `tests/application-framework-ui-extension-kit/`
- `ARCH-032-03 Frontend SDK, Capability & API Clients` in `tests/application-framework-ui-extension-kit/`
- `ARCH-032-02 Application Shell Composition, Routing & Navigation` in `tests/application-framework-ui-extension-kit/`
- `ARCH-032-01 Application Framework & UI Extension Overview` in `tests/application-framework-ui-extension-kit/`
- `ARCH-031-10 Future Developer Experience Evolution` in `tests/developer-experience-portal/`
- `ARCH-031-09 Portal Operations, Governance & Assurance` in `tests/developer-experience-portal/`
- `ARCH-031-08 Portal Integration, Extensibility & Automation` in `tests/developer-experience-portal/`
- `ARCH-031-07 Documentation, Support, Feedback & Community` in `tests/developer-experience-portal/`
- `ARCH-031-06 Usage, Quotas, Cost & Operational Visibility` in `tests/developer-experience-portal/`
- `ARCH-031-05 Credentials, Access Requests & Environment Entry` in `tests/developer-experience-portal/`
- `ARCH-031-04 Portal Information Architecture & Discovery` in `tests/developer-experience-portal/`
- `ARCH-031-03 Developer Organizations, Projects & Applications` in `tests/developer-experience-portal/`
- `ARCH-031-02 Developer Personas, Journeys & Onboarding` in `tests/developer-experience-portal/`
- `ARCH-031-01 Developer Experience & Portal Overview` in `tests/developer-experience-portal/`
- `ARCH-030-10 Future Industry Solution Evolution` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-09 Solution Operations, Governance & Assurance` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-08 Conformance, Versioning, Migration & Exit` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-07 Experience, Branding & Composable Application Shells` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-06 Workflow, Agent, Knowledge & Integration Packaging` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-05 Rental, Commerce & Service Solution Patterns` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-04 Hospitality Solution Pack & Casa Lluvia Reference` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-03 Capability Composition, Configuration & Policy` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-02 Solution Pack Model, Boundaries & Manifests` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-030-01 Industry Solution Packs & Composable Applications Overview` in `tests/industry-solution-packs-composable-applications/`
- `ARCH-029-10 Future AI Learning Evolution` in `tests/ai-model-operations-evaluation-learning/`
- `ARCH-013-01 Developer Platform Overview` in `tests/developer-platform/`
- `ARCH-013-02 Developer Experience and Journeys` in `tests/developer-platform/`
- `ARCH-013-03 Platform Capability Model` in `tests/developer-platform/`
- `ARCH-013-04 Project and Service Lifecycle` in `tests/developer-platform/`
- `ARCH-013-05 Build, Test, and Quality` in `tests/developer-platform/`
- `ARCH-013-06 Delivery and Environment Platform` in `tests/developer-platform/`
- `ARCH-013-07 Developer Portal and Service Catalog` in `tests/developer-platform/`
- `ARCH-013-08 Developer Security and Governance` in `tests/developer-platform/`
- `ARCH-013-09 Platform Operations and Adoption` in `tests/developer-platform/`
- `ARCH-013-10 Future Developer Platform Evolution` in `tests/developer-platform/`
- `ARCH-014-01 AI Agent Framework Overview` in `tests/ai-agent-framework/`
- `ARCH-014-02 Agent Identity and Lifecycle` in `tests/ai-agent-framework/`
- `ARCH-014-03 Agent Runtime and Execution Model` in `tests/ai-agent-framework/`
- `ARCH-014-04 Agent Reasoning and Planning` in `tests/ai-agent-framework/`
- `ARCH-014-05 Tools, Actions, and Environment` in `tests/ai-agent-framework/`
- `ARCH-014-06 Multi-Agent Coordination` in `tests/ai-agent-framework/`
- `ARCH-014-07 Agent Memory, Knowledge, and Context` in `tests/ai-agent-framework/`
- `ARCH-014-08 Agent Security, Governance, and Assurance` in `tests/ai-agent-framework/`
- `ARCH-014-09 Agent Operations, Observability, and Evaluation` in `tests/ai-agent-framework/`
- `ARCH-017-01 API & SDK Overview` in `tests/api-sdk/`
- `ARCH-017-02 API Product and Contract Model` in `tests/api-sdk/`
- `ARCH-017-03 API Design and Interaction Patterns` in `tests/api-sdk/`
- `ARCH-017-04 API Lifecycle, Versioning, and Compatibility` in `tests/api-sdk/`
- `ARCH-017-05 API Security, Access, and Isolation` in `tests/api-sdk/`
- `ARCH-017-06 SDK Architecture and Distribution` in `tests/api-sdk/`
- `ARCH-017-07 Developer Experience, Testing, and Conformance` in `tests/api-sdk/`
- `ARCH-017-08 API & SDK Governance and Assurance` in `tests/api-sdk/`
- `ARCH-017-09 API & SDK Operations, Observability, and Performance` in `tests/api-sdk/`
- `ARCH-017-10 Future API & SDK Evolution` in `tests/api-sdk/`
- `ARCH-018-01 Multi-Tenancy Overview` in `tests/multi-tenancy/`
- `ARCH-018-02 Tenant Domain and Isolation Model` in `tests/multi-tenancy/`
- `ARCH-018-03 Tenant Lifecycle and Provisioning` in `tests/multi-tenancy/`
- `ARCH-018-04 Identity, Access, and Delegated Administration` in `tests/multi-tenancy/`
- `ARCH-018-05 Data Isolation, Residency, and Portability` in `tests/multi-tenancy/`
- `ARCH-018-06 Configuration, Entitlements, and Customization` in `tests/multi-tenancy/`
- `ARCH-018-07 Tenant-Aware Runtime and Integration` in `tests/multi-tenancy/`
- `ARCH-018-08 Resource Governance, Metering, and Billing` in `tests/multi-tenancy/`
- `ARCH-018-09 Tenant Operations, Governance, and Assurance` in `tests/multi-tenancy/`
- `ARCH-018-10 Future Multi-Tenancy Evolution` in `tests/multi-tenancy/`
- `ARCH-024-04 Resource Types and Lifecycle` in `tests/product-catalog-resource-management/`
- `ARCH-024-05 Attributes, Configuration, and Inheritance` in `tests/product-catalog-resource-management/`
- `ARCH-024-06 Availability, Inventory, and Capacity References` in `tests/product-catalog-resource-management/`
- `ARCH-024-07 Bundles, Packages, and Eligibility` in `tests/product-catalog-resource-management/`
- `ARCH-024-08 Integration, APIs, Events, and Extensions` in `tests/product-catalog-resource-management/`
- `ARCH-024-09 Operations, Governance, and Assurance` in `tests/product-catalog-resource-management/`
- `ARCH-024-10 Future Product Catalog Resource Evolution` in `tests/product-catalog-resource-management/`
- `ARCH-025-01 Commerce, Orders, and Reservations Overview` in `tests/commerce-orders-reservations/`
- `ARCH-025-02 Commercial Intent, Quotes, and Carts` in `tests/commerce-orders-reservations/`
- `ARCH-025-03 Order Lifecycle and State Management` in `tests/commerce-orders-reservations/`
- `ARCH-025-04 Reservation and Booking Lifecycle` in `tests/commerce-orders-reservations/`
- `ARCH-025-05 Availability, Allocation, and Holds` in `tests/commerce-orders-reservations/`
- `ARCH-025-06 Modification, Cancellation, and Compensation` in `tests/commerce-orders-reservations/`
- `ARCH-025-07 Fulfillment, Add-ons, and Packages` in `tests/commerce-orders-reservations/`
- `ARCH-025-08 Channel Distribution, Integration, and Consistency` in `tests/commerce-orders-reservations/`
- `ARCH-025-09 Commerce Operations, Governance, and Assurance` in `tests/commerce-orders-reservations/`
- `ARCH-025-10 Future Commerce Order and Reservation Evolution` in `tests/commerce-orders-reservations/`
- `ARCH-026-01 Pricing, Billing, and Payments Overview` in `tests/pricing-billing-payments/`
- `ARCH-026-02 Price Lists, Rate Plans, and Context` in `tests/pricing-billing-payments/`
- `ARCH-026-03 Pricing Rules, Restrictions, Promotions, and Approvals` in `tests/pricing-billing-payments/`
- `ARCH-019-01 Plugin and Extension Overview` in `tests/plugin-extension-framework/`
- `ARCH-019-02 Extension Domain and Classification` in `tests/plugin-extension-framework/`
- `ARCH-019-03 Package, Manifest, Registry, and Provenance` in `tests/plugin-extension-framework/`
- `ARCH-019-04 Extension Lifecycle, Distribution, and Compatibility` in `tests/plugin-extension-framework/`
- `ARCH-019-05 Capability Security and Isolation` in `tests/plugin-extension-framework/`
- `ARCH-019-06 Runtime Hosts and Extension Points` in `tests/plugin-extension-framework/`
