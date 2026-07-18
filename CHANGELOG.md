# XeniosAI Changelog

All notable changes to XeniosAI are documented in this file.

The project follows the principle that architecture, documentation, and engineering decisions are versioned alongside source code.

---

## [0.0.1] - Foundation

### Added
- PROJECT_BOOTSTRAP.md
- PROJECT_CONSTITUTION.md
- XENIOS_MANIFESTO.md
- MASTER_INDEX.md
- ROADMAP.md
- AI_CONTEXT.md
- CHANGELOG.md

### Established
- Git repository as the project's permanent memory.
- Documentation-first engineering workflow.
- ChatGPT as Chief Software Architect.
- Codex as Implementation Engineer.
- Casa Lluvia as the reference deployment.
- AI-native hospitality platform vision.

### Engineering Rules
- Documentation before code.
- AI never owns business logic.
- Every architectural decision should scale to 10,000 properties.
- Every significant architectural decision must be recorded through an ADR.

Status: Foundation
Version: 0.0.1

---

## [0.1.0] - ARCH-002 Foundation Layer

### Added
- Node-based repository foundation with native `build` and `test` scripts in `package.json`.
- Foundation module under `src/foundation/` covering configuration, logging, metrics, feature flags, secrets, dependency injection, time, identifier generation, shared contracts, error definitions, and security primitives.
- Unit tests for the Foundation Layer under `tests/foundation/`.

### Established
- Environment-backed configuration and secret access abstractions.
- Structured JSON logging with correlation-friendly context fields.
- Vendor-neutral metrics abstraction with an in-memory implementation for verification.
- Simple dependency injection container and default foundation service registration.
- Common immutable contracts for operation results, paged results, and error envelopes.

Status: Platform Architecture
Version: 0.1.0

---

## [0.2.0] - ARCH-002 Experience Layer

### Added
- Experience Layer module under `src/experience/`.
- Channel adapter contracts and default adapters for Messenger, WhatsApp, and Website channels.
- Channel-independent experience request and response contracts.
- Gateway handoff port for forwarding normalized experience requests downstream.
- Unit tests for channel normalization, rendering, capability enforcement, and gateway submission.

### Established
- Thin, stateless channel-facing experience processing.
- Separation between channel presentation concerns and downstream gateway admission.
- Channel capability enforcement for attachments, buttons, quick replies, and rich cards.

Status: Platform Architecture
Version: 0.2.0

---

## [0.3.0] - ARCH-002 Gateway Layer

### Added
- Gateway Layer module under `src/gateway/`.
- Gateway admission pipeline for validation, authentication, authorization, rate limiting, routing, and audit metadata.
- Normalized gateway request and response contracts.
- Conversation handoff port for forwarding admitted requests to the Conversation Layer.
- Unit tests for gateway admission, rejection, rate limiting, and audit behavior.

### Established
- Request ID and correlation ID assignment at the gateway boundary.
- Coarse-grained security and admission hooks without business interpretation.
- Observable, deterministic forwarding from Experience Layer to Conversation Layer.

Status: Platform Architecture
Version: 0.3.0

---

## [0.4.0] - ARCH-002 Conversation Layer

### Added
- Conversation Layer module under `src/conversation/`.
- Conversation lifecycle contracts for conversations, sessions, participants, messages, context, and state transitions.
- In-memory conversation repository and state machine for continuity and session recovery.
- AI handoff port for forwarding prepared conversation context downstream.
- Unit tests for conversation creation, continuity, and end-to-end experience to conversation flow.

### Established
- Explicit ownership of conversation IDs, session IDs, message history, participant tracking, and state transitions.
- Conversation continuity independent from AI reasoning and business execution.
- Stateless processing pattern with persistent-repository abstraction.

Status: Platform Architecture
Version: 0.4.0

---

## [0.5.0] - ARCH-002 AI Intelligence Layer

### Added
- AI Intelligence Layer module under `src/ai/`.
- Deterministic AI pipeline for intent detection, context building, memory and knowledge retrieval, prompt assembly, reasoning, decisioning, tool orchestration, and response generation.
- AI provider and tool extension points through ports and registries.
- Unit tests for pricing execution, clarification, escalation, and full architectural flow from Experience through AI.

### Established
- Tool-first orchestration inside the AI layer without embedding business logic.
- Separation between reasoning proposals and execution authorization.
- Provider-independent AI abstractions with deterministic default implementations.

Status: Platform Architecture
Version: 0.5.0

---

## [0.6.0] - ARCH-002 Business Services Layer

### Added
- Business Services Layer module under `src/business-services/`.
- Service ownership registry, business request/response contracts, validation results, service capabilities, and domain event contracts.
- Deterministic service shells for Booking, Pricing, Calendar, Knowledge, and Property ownership boundaries.
- Business service router and AI-facing business tool executor adapter.
- Unit tests for capability ownership, deterministic pricing, validation failures, and architectural registration.

### Established
- Explicit business capability ownership by service.
- Deterministic business outcomes with validation and unavailable-state reporting when lower layers are not implemented.
- Business service contracts that avoid AI reasoning, UI rendering, direct persistence, and provider-specific integrations.

Status: Platform Architecture
Version: 0.6.0

---

## [0.7.0] - ARCH-002 Data Layer

### Added
- Data Layer module under `src/data/`.
- Storage contracts for transactional records, query results, cache entries, search documents, object descriptors, and transaction results.
- In-memory implementations for repository storage, transactions, cache, search indexing, and object storage.
- Unit tests for versioned persistence, optimistic concurrency, cache behavior, search indexing, object storage, and transaction telemetry.

### Established
- Storage abstractions that remain independent of business rules and AI reasoning.
- Service-owner metadata on persisted records and derived storage artifacts.
- Local transaction boundary support without distributed transactions.

Status: Platform Architecture
Version: 0.7.0

---

## [0.8.0] - ARCH-002 Integration Layer

### Added
- Integration Layer module under `src/integration/`.
- Provider-neutral integration contracts, requests, responses, messages, and events.
- Adapter registry, simulated provider adapters, retry policy, circuit breaker, message bus, and integration service.
- Unit tests for contract discovery, response normalization, unknown capability failures, message/event separation, and adapter replacement.

### Established
- Stable integration boundaries that isolate provider-specific communication from core platform layers.
- Technology-neutral support for request/response and asynchronous message/event communication.
- Reliability extension points for retries and circuit breaking.

Status: Platform Architecture
Version: 0.8.0

---

## [0.9.0] - ARCH-002 Cross-Cutting Concerns

### Added
- Cross-cutting concerns module under `src/cross-cutting/`.
- Shared contracts for trace context, audit records, health checks, validation results, and version descriptors.
- Audit, health, localization, operation observability, validation, and version registry services.
- Unit tests for auditability, health checks, operation telemetry, validation, localization, and versioning.

### Established
- Consistent reusable support for security-adjacent auditability, observability, validation, localization, and versioning.
- Trace-friendly operation observation using Foundation logging and metrics.

Status: Platform Architecture
Version: 0.9.0

---

## [0.10.0] - ARCH-002 Layer Interactions

### Added
- Layer Interactions module under `src/layer-interactions/`.
- Executable policy for allowed and forbidden platform layer dependencies.
- Canonical request-flow descriptor for ARCH-002 traversal rules.
- Platform layer composer that wires completed ARCH-002 layers through documented ports.
- Unit tests for dependency governance, canonical flow validation, and full platform composition.

### Established
- Runtime-testable enforcement of ARCH-002 layer interaction rules.
- A single composition entry point for the completed platform layer stack.
- Business-service tool execution as the AI-to-business boundary in full-stack composition.

Status: Platform Architecture
Version: 0.10.0

---

## [0.11.0] - ARCH-003 Service Landscape

### Added
- Service Map module under `src/service-map/`.
- Canonical service landscape descriptors for the initial ten XeniosAI services.
- Business-domain grouping for Hospitality Operations, Knowledge Management, Property Management, Platform Services, and Business Intelligence.
- Dependency-injection registration for the service landscape.
- Unit tests for service inventory, category grouping, duplicate protection, and DI access.

### Established
- Executable representation of the ARCH-003 service ecosystem without introducing later catalog, ownership, dependency, or governance behavior.

Status: Service Map Architecture
Version: 0.11.0

---

## [0.12.0] - ARCH-003 Service Catalog

### Added
- Service catalog entries for all ten ARCH-003 services.
- Immutable catalog contract covering purpose, primary domain, responsibility, ownership concepts, provided capabilities, dependencies, and consumers.
- Service catalog lookup and listing service.
- Dependency-injection registration for `ServiceCatalog`.
- Unit tests for catalog completeness, documented service facts, duplicate protection, missing lookups, and DI access.

### Established
- Executable service catalog aligned with ARCH-003-02 without implementing later ownership, dependency, communication, lifecycle, or governance behavior.

Status: Service Map Architecture
Version: 0.12.0
