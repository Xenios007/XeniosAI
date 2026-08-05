# ARCH-031 — Developer Experience & Portal

**Architecture Domain:** Developer Experience and Portal Architecture

**Document ID:** ARCH-031

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-06

---

# Purpose

ARCH-031 defines the unified developer-facing product for onboarding, organizations, projects, applications, credentials, documentation, capability discovery, usage visibility, support, and feedback.

The portal presents and coordinates developer capabilities established by ARCH-013; it does not become a second control plane or bypass provider authorization.

Casa Lluvia and future solution teams validate onboarding, sandbox access, application registration, API discovery, usage inspection, support, and promotion paths.

---

# Boundaries

* ARCH-013 owns internal developer-platform capabilities
* ARCH-017 owns API and SDK contracts
* ARCH-022 owns developer identity and access
* ARCH-033 and ARCH-034 own API products and registries

The architecture is vendor neutral, API first, accessible, tenant aware, least privilege, observable, resilient, portable, and compatible with cloud, on-premises, and hybrid operation where practical.

---

# Core Principles

* Developer experience is a product with measurable outcomes.
* Self-service remains bounded by identity, authorization, policy, approval, quota, and evidence.
* Human and machine consumers share canonical contract semantics.
* Generated code and documentation remain traceable to registered versions.
* Clients and extensions never become authorities for business state.
* Compatibility, deprecation, migration, rollback, and provider exit are designed in.

---

# Module Structure

1. `01-developer-experience-portal-overview.md`
2. `02-developer-personas-journeys-and-onboarding.md`
3. `03-developer-organizations-projects-and-applications.md`
4. `04-portal-information-architecture-and-discovery.md`
5. `05-credentials-access-requests-and-environment-entry.md`
6. `06-usage-quotas-cost-and-operational-visibility.md`
7. `07-documentation-support-feedback-and-community.md`
8. `08-portal-integration-extensibility-and-automation.md`
9. `09-portal-operations-governance-and-assurance.md`
10. `10-future-developer-experience-evolution.md`

---

# Expected Outcomes

* The portal presents and coordinates developer capabilities established by ARCH-013; it does not become a second control plane or bypass provider authorization.
* Internal, tenant, partner, and solution developers receive coherent discovery and onboarding.
* Cross-industry applications consume portable, versioned capabilities.
* Security, accessibility, reliability, and conformance are visible before adoption.
* Casa Lluvia validates production-shaped developer journeys without constraining future industries.

---

# Repository Structure

```text
architecture/031-developer-experience-portal/
├── README.md
├── 01-developer-experience-portal-overview.md
├── 02-developer-personas-journeys-and-onboarding.md
├── 03-developer-organizations-projects-and-applications.md
├── 04-portal-information-architecture-and-discovery.md
├── 05-credentials-access-requests-and-environment-entry.md
├── 06-usage-quotas-cost-and-operational-visibility.md
├── 07-documentation-support-feedback-and-community.md
├── 08-portal-integration-extensibility-and-automation.md
├── 09-portal-operations-governance-and-assurance.md
├── 10-future-developer-experience-evolution.md
└── diagrams/
    ├── README.md
    ├── 01-developer-portal-landscape.mmd
    ├── 02-developer-onboarding-journey.mmd
    ├── 03-project-application-credential-flow.mmd
    ├── 04-capability-discovery-and-support-flow.mmd
    └── 05-developer-experience-evolution.mmd
```

