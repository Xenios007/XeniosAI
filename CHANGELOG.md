# XeniosAI Changelog

All notable changes to XeniosAI are documented in this file.

The project follows the principle that architecture, documentation, and engineering decisions are versioned alongside source code.

---

## [0.44.0] - ARCH-017 API Security, Access, and Isolation

### Added
- API Security, Access, and Isolation metadata covering security objectives, identity domains, identity context, authentication classes, credential classes and requirements, authorization decision evidence, effective authority intersection factors, gateway and provider boundaries, delegation records, tenant and property isolation, data classification, validation controls, surface security for events/callbacks/streams/batches/files/caches/search/telemetry, automation access, privileged access, abuse controls, security tests, non-negotiable rules, and architecture boundaries.
- Immutable API Security, Access, and Isolation profile validating zero-trust API boundary handling, fail-safe missing context, narrowest-authority access, provider revalidation, separation of authentication from authorization, bounded delegation, tenant/property claim validation, pre-candidate isolation, scoped caching, per-item batch authorization, data minimization, output authorization, safe request ambiguity handling, protected credentials, SDK security preservation, governed workflow/AI/agent access, privileged and emergency controls, protected telemetry/evidence, and supply-chain integrity.
- API Security, Access, and Isolation descriptor, module exports, dependency-injection registration, implementation documentation, and focused unit tests.

### Established
- API security treats reachability, discovery, credential possession, SDK possession, identifier knowledge, partner status, plugin installation, workflow participation, agent capability, and model output as insufficient for authorization; provider validation and tenant/property isolation remain explicit at every material boundary.

Status: API & SDK Architecture
Version: 0.44.0

---

## [0.43.0] - ARCH-017 API Lifecycle, Versioning, and Compatibility

### Added
- API Lifecycle, Versioning, and Compatibility metadata covering lifecycle objectives, distinct product/contract/release/SDK/consumer lifecycles, product lifecycle states, transition controls, gates, version identities, semantic-versioning components, compatibility boundaries, compatibility dimensions, compatible/conditional/breaking/unknown classifications, release and activation controls, parallel versions, version routing, migration, deprecation, exceptions, retirement, emergency response, rollback, orphan detection, observability, evidence, metrics, lifecycle operations, architectural rules, and boundaries.
- Immutable API Lifecycle, Versioning, and Compatibility profile validating continuous ownership, distinct lifecycle identities, compatibility-boundary versioning, multidimensional compatibility assessment, immutable released behavior, backward compatibility where practical, major versions for breaking changes, evidence-based classification, controlled activation, bounded parallel support, explicit routing, owned migration, time-bounded exceptions, retirement readiness, reserved retired identities, governed emergency actions, protected evidence, artifact synchronization, and architecture review for major changes.
- API Lifecycle, Versioning, and Compatibility descriptor, module exports, dependency-injection registration, implementation documentation, and focused unit tests.

### Established
- API evolution is governed as a product lifecycle rather than a code-release shortcut: versions communicate supported compatibility boundaries, unknown compatibility is not compatible, provider and SDK releases can evolve only within approved contracts, and retirement requires consumer, dependency, traffic, access, data, support, and evidence readiness.

Status: API & SDK Architecture
Version: 0.43.0

---

## [0.42.0] - ARCH-017 API Design and Interaction Patterns

### Added
- API Design and Interaction Patterns metadata covering objectives, interaction classes, pattern selection, resources, representations, point and collection queries, pagination, filtering, sorting, search, consistency, commands, actions, completion distinctions, asynchronous and long-running operations, idempotency, concurrency, errors, partial outcomes, events, callbacks, streams, batches, correlation, rate limits, quotas, caching, composition, workflow and agent interaction, degraded operation, observability, evidence, conformance, pattern decisions, architectural rules, and boundaries.
- Immutable API Design and Interaction Patterns profile validating capability-first design, explicit interaction semantics, stable classifications, bounded and authorized collections, scoped pagination, authorized search, declared consistency/freshness, intent-based commands/actions, distinct acceptance/completion, traceable async operations, contractual idempotency/concurrency, safe retry/cancellation, structured safe errors, replay-aware events, bounded streams, per-item batch controls, scoped caching, provider-preserving composition, workflow-owned state, agent authority boundaries, protected telemetry, and transport neutrality.
- API Design and Interaction Patterns descriptor, module exports, dependency-injection registration, implementation documentation, and focused unit tests.

### Established
- API interactions are enterprise contracts that distinguish query, command, action, resource, event, callback, stream, batch, administrative, and operational semantics while preserving tenant/property isolation, provider ownership, completion clarity, evidence, recoverability, and vendor-neutral realization.

Status: API & SDK Architecture
Version: 0.42.0

---

## [0.41.0] - ARCH-017 API Product and Contract Model

### Added
- API Product and Contract Model metadata covering canonical product model elements, API domain records, product records, product scope, surfaces, provider relationships, contract records, contract-source controls, authority order, contract packages, operation classes and records, messages, fields, field presence and mutability, identifiers, tenant/property declarations, security/privacy declarations, temporal and consistency semantics, limits, service commitments, dependencies, consumer profiles, views, composition, anti-corruption boundaries, derived artifacts, SDK declarations, documentation, examples, registry authority, lifecycle states, contract quality, validation, review, approval, traceability, evidence, product model operations, non-negotiable rules, and boundaries.
- Immutable API Product and Contract Model profile validating product ownership, stable identities, authoritative approved contract source, explicit operation/message/field semantics, tenant/property and security/privacy declarations, traceable derived artifacts, safe examples, registry/catalog authority limits, immutable released behavior, semantic review, version-aligned evidence, and authorized metadata access.
- API Product and Contract Model descriptor, module exports, dependency-injection registration, implementation documentation, and focused unit tests.

### Established
- API products are governed capability products, not endpoint collections; contracts are versioned provider commitments; approved contract source is authoritative; and SDKs, documentation, examples, mocks, tests, gateway configurations, and catalog entries remain derived traceable artifacts that do not grant runtime authority.

Status: API & SDK Architecture
Version: 0.41.0

---

## [0.40.0] - ARCH-017 API & SDK Overview

### Added
- A new API & SDK architecture module covering business drivers, objectives, architectural separations, core concepts and principles, API product contracts, consumers and audiences, interaction types, logical layers, platform capabilities, authority context, error classes, lifecycle, SDK capabilities and layers, operating roles, quality attributes, non-negotiable rules, boundaries, and expected outcomes.
- Immutable API & SDK overview profile validating capability-first exposure, owned products, contract authority, bounded gateway responsibility, end-to-end tenant and property context, safe side effects and errors, compatibility migration, layered SDK semantics, version alignment, agent authority, protected telemetry, and reliable operations.
- API & SDK validation result, overview descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- APIs and SDKs are governed interface products: providers retain domain authority, gateways control exposure without absorbing business logic, and SDKs and generated artifacts remain traceable convenience layers rather than sources of contract or access authority.

Status: API & SDK Architecture
Version: 0.40.0

---

## [0.39.0] - ARCH-016 Future Knowledge & Memory Evolution

### Added
- Evolution metadata covering enduring invariants, strategic drivers, goals, guardrails, maturity horizons and levels, future modalities and retrieval, memory and federation requirements, automation levels, experiment contracts, production promotion, incubation, future risks, anti-patterns, balanced value metrics, decision criteria, quality attributes, architectural rules, and boundaries.
- Immutable Future Knowledge & Memory Evolution profile validating architecture-before-product, maturity gates, reversible experimentation, governed multimodal and adaptive capabilities, memory transparency, bounded federation and edge operation, protocol and extension governance, constrained automation and self-healing, isolated research, controlled pilots, lifecycle-preserving migration, provider exit, and intentional retirement.
- Future Knowledge & Memory Evolution descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Future capability remains directional until it passes explicit experiment, maturity, promotion, migration, rollback, and retirement gates; advanced technology cannot bypass authority, isolation, memory admission, context boundaries, correction, deletion, evidence, or human accountability.

Status: Knowledge & Memory Architecture complete
Version: 0.39.0

---

## [0.38.0] - ARCH-016 Knowledge & Memory Operations, Observability, and Performance

### Added
- Operations metadata covering capabilities, service catalog and readiness contracts, multidimensional health, synchronization and processing, retrieval, memory and context operations, observability signals, correlation, alerts, outcome indicators, latency budgets, capacity and queue models, reliability mechanisms, degraded modes, recovery objectives, quality attributes, architectural rules, and boundaries.
- Immutable Knowledge & Memory Operations profile validating outcome-based health, lifecycle visibility, protected telemetry, actionable alerting, tenant fairness, overload control, cache scope, correction and deletion priority, explicit degradation, governed backup, non-resurrecting restore, reconciliation, recovery exercises, provider fallback, controlled releases, and restricted administration.
- Knowledge & Memory Operations descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Operational health is a governed end-to-end outcome rather than process uptime: freshness, authorization, citation, memory and context integrity, correction, deletion, isolation, capacity, providers, and recovery remain observable and correct during normal operation, overload, degradation, and restore.

Status: Knowledge & Memory Architecture
Version: 0.38.0

---

## [0.37.0] - ARCH-016 Knowledge & Memory Security, Governance, and Assurance

### Added
- Security and governance metadata covering objectives, subjects, protected resources, trust factors, separated capabilities, classifications, controls, risks, governance gates, assurance methods and scope, evidence contracts and types, degraded modes, quality attributes, architectural rules, and boundaries.
- Immutable Knowledge & Memory Security and Governance profile validating Zero Trust, contextual authorization, separation of duties, isolation, classification inheritance, source integrity, malicious-content quarantine, prompt-injection and side-channel defenses, governed memory admission, privacy rights, risk and exception governance, evidence chain of custody, continuous assurance, and verified remediation.
- Knowledge & Memory Security and Governance descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Knowledge, memory, context, representations, queries, results, and evidence are independently protected resources: utility, relevance, familiarity, identifiers, or provider capability never grant authority, and high-risk processing requires accountable governance and trustworthy evidence produced during normal operation.

Status: Knowledge & Memory Architecture
Version: 0.37.0

---

## [0.36.0] - ARCH-016 Knowledge & Memory Integration and Interoperability

### Added
- Integration metadata covering participants, profiles, styles, canonical envelopes, capability and API contracts, response and error semantics, event delivery, governed connectors and checkpoints, bulk manifests, portability, degraded modes, quality attributes, architectural rules, and boundaries.
- Immutable Knowledge & Memory Integration profile validating authoritative ownership, semantic compatibility, trusted identity and scope propagation, provenance, reference-first exchange, safe errors, idempotency, concurrency, versioning, backward compatibility, replay safety, connector governance, bulk control parity, portable lifecycle, correction and deletion propagation, reconciliation, and isolation.
- Knowledge & Memory Integration descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Integration exchanges governed meaning rather than implementation or authority: independently owned services use versioned contracts, provider and transport details stay non-canonical, duplicate and replayed delivery is expected, and lifecycle state remains synchronized without direct database access.

Status: Knowledge & Memory Architecture
Version: 0.36.0

---

## [0.35.0] - ARCH-016 Context Assembly and Memory Orchestration

### Added
- Context metadata covering consumers, governed profiles and requests, independent layers, canonical assembly stages, candidate and memory-retrieval contracts, conflicts, protected budgets, immutable packages, statuses, operations, degraded modes, evaluation dimensions, quality attributes, architectural rules, and boundaries.
- Immutable Context Assembly and Memory Orchestration profile validating authorization-before-acquisition, instruction and content separation, current domain authority, memory eligibility, attribution, conflict preservation, protected budget reduction, package binding and disposal, cache invalidation, candidate-only memory writeback, response validation, isolation, and safe degradation.
- Context Assembly and Memory Orchestration descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Context is a temporary, minimum authorized working set for one operation: independent layers retain their authority and provenance, packages cannot cross request or scope boundaries, memory use cannot become reinforcement or admission, and missing context is reported rather than fabricated.

Status: Knowledge & Memory Architecture
Version: 0.35.0

---

## [0.34.0] - ARCH-016 Memory Model and Lifecycle

### Added
- Memory metadata covering objectives, types, scopes, record and candidate contracts, candidate sources, admission decisions, authority and sensitivity classes, lifecycle states and transitions, read and write boundaries, degraded modes, evaluation dimensions, quality attributes, architectural rules, and scope exclusions.
- Immutable Memory Model and Lifecycle profile validating governed admission, authority boundaries, explicit scope and provenance, versioned transitions, confidence and conflict qualification, correction and deletion propagation, retention, legal hold, isolation, reconciliation, and safe degraded operation.
- Memory Model and Lifecycle descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Memory is deliberate, purpose-bound contextual evidence: candidates remain separate until admission; it cannot grant authority or replace conversations, domain truth, workflow state, or agent state; and every admitted record remains correctable, disputable, expirable, deletable, and synchronized with its derived representations.

Status: Knowledge & Memory Architecture
Version: 0.34.0

---

## [0.33.0] - ARCH-016 Retrieval, Search, and Grounding

### Added
- Retrieval metadata covering objectives, consumers, purposes, search methods, eligible-corpus constraints, search plans, candidates, result status, grounding packages, citations, degraded modes, timeouts, evaluation dimensions, quality attributes, architectural rules, and boundaries.
- Immutable Knowledge Retrieval and Grounding profile validating authorization-before-search, side-channel resistance, lifecycle eligibility, explicit historical access, method selection, score compatibility, authoritative domain lookup, hybrid provenance, bounded personalization, conflict preservation, explicit insufficiency, stable citations, claim support, prompt-instruction separation, independent action authorization, projection reconciliation, and safe degradation.
- Knowledge Retrieval and Grounding descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Retrieval discovers eligible evidence rather than truth or authority: unauthorized content never becomes a candidate, semantic similarity and rank remain method-specific signals, insufficiency and conflict stay explicit, and grounding cannot expand policy, tool, memory-write, tenant, property, or action authority.

Status: Knowledge & Memory Architecture
Version: 0.33.0

---

## [0.32.0] - ARCH-016 Knowledge Ingestion and Curation

### Added
- Ingestion and curation metadata covering objectives, source and content classes, acquisition models, intake outcomes, quarantine, the canonical processing pipeline, chunking strategies, quality gates, processing states, normalized failures, APIs, events, quality attributes, architectural rules, and boundaries.
- Immutable Knowledge Ingestion and Curation profile validating registered sources, authenticated and scope-bound intake, idempotent synchronization, quarantine, isolated processing, artifact preservation, actual type detection, structure and meaning preservation, metadata provenance, classification propagation, boundary-safe chunking, governed AI enrichment, accountable curation, quality gates, versioned reprocessing, bounded retry, temporary-data deletion, and provider governance.
- Knowledge Ingestion and Curation descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Ingestion produces a governed publication candidate only: uploads, extraction, indexing, embeddings, AI enrichment, and quality-gate success never approve or activate knowledge, and unsafe or ambiguous content remains quarantined from ordinary processing and retrieval.

Status: Knowledge & Memory Architecture
Version: 0.32.0

---

## [0.31.0] - ARCH-016 Knowledge Architecture and Lifecycle

### Added
- Knowledge lifecycle metadata covering objectives, the canonical model, source and knowledge states, contextual authority, scope, publication channels, representation states, lifecycle APIs and events, operational controls, quality attributes, architectural rules, and boundaries.
- Immutable Knowledge Lifecycle profile validating stable identities, distinct version types, explicit eligibility, immutable publication, material-change versioning, provenance, derived-content labeling, isolation, inheritance, decision separation, representation readiness, lifecycle propagation, registry authority, version-aware citations, correction, retention, legal hold, reconciliation, and evidence.
- Knowledge Lifecycle descriptor, module exports, dependency-injection registration, and focused unit tests.

### Established
- Acquisition, processing, indexing, embedding, or approval alone does not activate knowledge; publication and activation remain separate governed decisions, while suspension, supersession, expiry, withdrawal, and deletion propagate to every representation, citation, index, and cache.

Status: Knowledge & Memory Architecture
Version: 0.31.0

---

## [0.30.0] - ARCH-016 Knowledge & Memory Overview

### Added
- A new Knowledge & Memory module with independent validation contracts, public exports, and dependency registration.
- Overview metadata covering objectives, exclusions, core concepts, authority precedence, freshness, authority classes, knowledge domains, memory categories and subjects, platform capabilities, retrieval methods, tenant scopes, degraded modes, quality attributes, architectural rules, and boundaries.
- Immutable overview profile validating source attribution, purpose-bound memory, temporary context, provenance, authorization-before-retrieval, tenant and property isolation, memory admission, correction and forgetting, lifecycle propagation, prompt-injection boundaries, context minimization, citations, evaluation, and safe degradation.
- Focused unit tests for semantics, prohibited ownership shortcuts, completeness, immutability, and dependency registration.

### Established
- Authoritative facts remain with domain services, knowledge remains attributable, memory remains purpose-bound and admitted, and context remains temporary; lower-authority or similarity-ranked information cannot silently become business truth.

Status: Knowledge & Memory Architecture
Version: 0.30.0

---

## [0.29.0] - ARCH-015 Future Workflow Evolution

### Added
- Future-evolution metadata covering capability goals and guardrails, maturity stages, evolution horizons, canonical workflow semantics, semantic validation, bounded adaptation, migration patterns, technology assessment, adoption gates, stop criteria, quality attributes, architectural rules, and scope boundaries.
- Immutable Future Workflow Evolution profile validating additive and reversible change, durable deterministic execution, ownership, semantic equivalence, version coexistence, reviewed agent proposals, portable packages, migration integrity, single transition authority, staged adoption, ADR decisions, explicit exit, isolation, accountability, and evidence.
- Future Workflow Evolution descriptor, public exports, dependency-injection registration, and focused unit tests.

### Established
- Workflow evolution remains provider independent, evidence based, staged, reversible, and bounded by enduring domain, human, agent, tenant, property, security, recovery, and semantic-authority boundaries.

Status: Workflow Engine Architecture Complete
Version: 0.29.0

---

## [0.28.0] - ARCH-015 Workflow Operations, Observability, and Performance

### Added
- Operational metadata covering objectives, multidimensional health, health states, observability signals, correlation, service-level indicators, alert conditions, capacity dimensions, degradation modes, execution triage, operational actions, quality attributes, rules, and scope boundaries.
- Immutable Workflow Operations profile validating accountable ownership, readiness, bounded telemetry cardinality, business-outcome semantics, tenant-safe operations, capacity fairness, tail-performance testing, declared degradation, reconciled recovery, single transition authority, controlled backlog recovery, bounded automation, advisory AI, and operational data governance.
- Workflow Operations descriptor, public exports, dependency-injection registration, and focused unit tests.

### Established
- Workflow health is measured through business, execution, task, dependency, platform, security, and capacity dimensions; unknown health remains unknown, operations cannot mutate state directly, and recovery reconciles authoritative outcomes before retry or backlog release.

Status: Workflow Engine Architecture
Version: 0.28.0

---

## [0.27.0] - ARCH-015 Workflow Security, Governance, and Assurance

### Added
- Security and governance metadata covering distinct workflow identities, security objectives, untrusted inputs, risk tiers, policy enforcement points, workflow threats, evidence records, assurance methods, operational controls, quality attributes, architectural rules, and scope boundaries.
- Immutable Workflow Security Governance profile validating protected transitions, effective authority, delegation, tenant and property scope, definition governance, separation of duties, domain and agent ownership, credential mediation, human and agent controls, privacy, evidence, exceptions, assurance, incidents, and reconciled recovery.
- Workflow Security Governance descriptor, public exports, dependency-injection registration, and focused unit tests.

### Established
- Every material workflow transition is authenticated, authorized, policy-checked, scope-bound, durably recorded, and evidence-producing; identifiers never grant authority, activated definitions remain immutable, and recovery uses authorized reconciliation rather than blind replay.

Status: Workflow Engine Architecture
Version: 0.27.0

---

## [0.26.0] - ARCH-015 Workflow Integration and Orchestration

### Added
- Integration metadata covering communication models, participating domains, contract fields, workflow initiators, normalized command outcomes and errors, child-workflow version binding, operational controls, quality attributes, architectural rules, and boundaries.
- Immutable Workflow Integration profile validating contract-driven coordination, service and domain ownership, request and conversation boundaries, version binding, stable operation identity, independent authorization, tenant and property isolation, provider anti-corruption, child identity, governed human and agent participation, consistency, and evidence.
- Workflow Integration descriptor, public exports, dependency-injection registration, and focused unit tests.

### Established
- Durable workflows coordinate independently owned capabilities only through published, versioned contracts and governed adapters; transport success never substitutes for authoritative business completion, and direct cross-service database access remains prohibited.

Status: Workflow Engine Architecture
Version: 0.26.0

---

## [0.25.0] - ARCH-015 Reliability, Retries, and Compensation

### Added
- Reliability metadata covering failure domains and taxonomy, retry classifications and policies, retry budgets, idempotency scopes, side-effect classes, timeout layers, reconciliation outcomes, cancellation modes, compensation states, recovery types, operations, quality attributes, rules, and boundaries.
- Immutable reliability profile and descriptor validation for bounded retries, uncertainty, reconciliation, domain-defined compensation, recovery, isolation, and evidence.
- Workflow Engine exports, DI registration, and focused reliability tests.

### Established
- Uncertain material outcomes are reconciled against authoritative domain state before retry or compensation; retries remain bounded and engine-controlled, while partial and residual effects are recorded truthfully.

Status: Workflow Engine Architecture
Version: 0.25.0

---
## [0.24.0] - ARCH-015 Events, Timers, and Human Interaction

### Added
- Events, Timers, and Human Interaction metadata covering interaction types, event contracts and acceptance, durable waits, correlation cardinality, arrival policies, durable timers and misfires, human-task state and assignment, decision contracts and multi-person approval, bounded agent tasks and results, operations, quality attributes, architectural rules, and boundaries.
- Immutable Workflow Interaction profile validating source trust, scope, idempotency, durable time semantics, human accountability, agent boundaries, race resolution, recovery, privacy, and isolation guarantees.
- Workflow Interaction descriptor for metadata exposure, profile validation, and architecture completeness assertions.
- Dependency-injection registration and public exports through the Workflow Engine module.
- Unit tests for event, timer, human, and agent interaction metadata, prohibited shortcuts, incomplete metadata rejection, immutability, and DI access.

### Established
- Events, signals, callbacks, timers, human decisions, and agent results remain advisory until fully authenticated, authorized, contract-valid, scope-valid, replay-safe, correlated to an active wait, and atomically committed through an expected-state transition.

Status: Workflow Engine Architecture
Version: 0.24.0

---

## [0.23.0] - ARCH-015 Tasks, Activities, and Workers

### Added
- Tasks, Activities, and Workers metadata covering core work concepts and responsibilities, task identities and states, activity-attempt bindings and states, durable dispatch intent, queue capabilities and delivery models, worker identity and lifecycle, capability matching, leases, results, failures, dead-letter causes, backpressure actions, operations, quality attributes, architectural rules, and boundaries.
- Immutable Tasks, Activities, and Workers profile validating ownership, identity, durability, worker trust, capability, isolation, lease, result, retry, dead-letter, load-control, drain, and evidence guarantees.
- Tasks, Activities, and Workers descriptor for metadata exposure, profile validation, and architecture completeness assertions.
- Dependency-injection registration and public exports through the Workflow Engine module.
- Unit tests for task and attempt semantics, queue and worker controls, prohibited shortcuts, incomplete metadata rejection, immutability, and DI access.

### Established
- The Workflow Engine owns durable logical task truth while replaceable authenticated workers execute bounded attempts through durable dispatch, capability matching, task-scoped authority, leases, fencing, validated results, controlled retry, and reconciliation without treating queue delivery or worker assertions as completion.

Status: Workflow Engine Architecture
Version: 0.23.0

---

## [0.22.0] - ARCH-015 Workflow Runtime and State Model

### Added
- Workflow Runtime and State Model metadata covering runtime responsibilities and inputs, admission checks and outcomes, immutable execution bindings, logical components, lifecycle states, authoritative state fields and invariants, representation options, transition contracts, concurrency controls, task states, durable waits, failure classifications, operations, quality attributes, architectural rules, and boundaries.
- Immutable Workflow Runtime and State profile validating deterministic transition, durability, idempotency, recovery, isolation, completion-evidence, side-effect-intent, and controlled-repair guarantees.
- Workflow Runtime and State descriptor for metadata exposure, profile validation, and architecture completeness assertions.
- Dependency-injection registration and public exports through the Workflow Engine module.
- Unit tests for runtime metadata, immutable profiles, prohibited shortcuts, incomplete metadata rejection, and DI access.

### Established
- Each admitted workflow execution has an immutable identity and exact definition binding, advances through durable version-controlled authoritative state, records external intent before dispatch, reconciles uncertainty before repetition, and recovers from persisted state without allowing workers, agents, queues, or process memory to become state authority.

Status: Workflow Engine Architecture
Version: 0.22.0

---

## [0.21.0] - ARCH-015 Workflow Definition and Lifecycle

### Added
- Workflow Definition and Lifecycle metadata covering definition identities, ownership roles, classifications, canonical sections, participant contracts, process and reliability elements, triggers, validation areas, migration types, lifecycle states and gates, scoped activation, definition operations, quality attributes, architectural rules, and boundaries.
- Immutable Workflow Definition and Lifecycle profile for validating required architecture behavior and rejecting prohibited definition, versioning, activation, migration, privacy, and runtime-boundary states.
- Workflow Definition and Lifecycle descriptor for metadata exposure, profile validation, and architecture completeness assertions.
- Dependency-injection registration and public exports through the Workflow Engine module.
- Unit tests for lifecycle metadata, immutable profiles, boundary validation, incomplete metadata rejection, and DI access.

### Established
- Every admitted workflow execution binds to an approved immutable effective definition version, with release separated from scoped activation and existing executions remaining on their original version unless an exceptional governed migration preserves history, authority, tenant/property boundaries, and evidence.

Status: Workflow Engine Architecture
Version: 0.21.0

---

## [0.20.0] - ARCH-015 Workflow Engine Overview

### Added
- Workflow Engine Overview metadata covering workflow properties, use and non-use criteria, architecture goals and principles, explicit concepts, logical planes, engine capabilities, actors, classifications, definition fields and lifecycle, execution identity and states, authoritative workflow state, operational controls, quality attributes, architectural rules, boundaries, and future directions.
- Immutable Workflow Engine Overview profile and validation result contracts.
- Workflow Engine Overview descriptor for metadata exposure, profile validation, and architecture assertion.
- `addWorkflowEngine` dependency-injection registration and public module exports.
- Unit tests for overview metadata, architecture-boundary validation, incomplete metadata rejection, and DI access.

### Established
- The Workflow Engine as the durable deterministic process system of record, coordinating services, humans, integrations, and bounded agents while domain services retain business rules and authoritative business state.

Status: Workflow Engine Architecture
Version: 0.20.0

---

## [0.19.0] - ARCH-014 Future Agent Framework Evolution

### Added
- Future Agent Framework Evolution metadata covering stable responsibilities, evolution objectives and principles, maturity horizons and gates, adaptive model routing, model portfolios and substitution, verified planning, simulation, proactive and long-running agents, dynamic autonomy, marketplaces, composition, temporary agents, continuous evaluation, red teaming, self-improvement proposals, autonomous maintenance, cross-tenant controls, multimodal and physical interaction, interoperability, ADR triggers, innovation sandboxes, staged adoption, risks, non-goals, architectural rules, and boundaries.
- Immutable contract for Future Agent Framework Evolution profiles.
- Future Agent Framework Evolution descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for evolution metadata, architecture-boundary validation, incomplete metadata rejection, and DI access.

### Established
- Future Agent Framework Evolution as an evidence-led, reversible, provider-neutral architecture module where stronger agent capabilities never absorb identity, authority, deterministic business ownership, workflow responsibility, tenant/property isolation, mediated tools, human control, or independent assurance.

Status: AI Agent Framework Architecture
Version: 0.19.0

---

## [0.18.0] - ARCH-014 Agent Operations, Observability, and Evaluation

### Added
- Agent Operations, Observability, and Evaluation metadata covering operational scope, ownership, readiness, service commitments, health states, signals, metrics, logs, traces, domain events, audit events, business observability, quality observability, dashboards, alerts, evaluation methods, evaluation layers, datasets, scenarios, deterministic checks, model-based evaluation controls, release gates, controlled rollout, drift, incidents, containment, change, rollback, capacity, performance, cost, continuity, recovery, human intervention, runbooks, operational evidence, feedback, operational review, quality attributes, architectural rules, and boundaries.
- Immutable contract for Agent Operations, Observability, and Evaluation profiles.
- Agent Operations, Observability, and Evaluation descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for operations/observability/evaluation metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Agent Operations, Observability, and Evaluation as a business-first, model-neutral architecture module where agent health requires safe, authorized, reliable, useful outcomes; observability uses correlated evidence without unrestricted hidden reasoning; and evaluation remains a lifecycle control across design, release, rollout, production, drift, incident response, and governed change.

Status: AI Agent Framework Architecture
Version: 0.18.0

---

## [0.17.0] - ARCH-014 Agent Security, Governance, and Assurance

### Added
- Agent Security, Governance, and Assurance metadata covering security objectives, governance objectives, trust model, security boundaries, threat actors, threat categories, least privilege, credentials, runtime controls, prompt-injection controls, data protection, model/provider controls, supply chain, secure failure, emergency suspension, governance lifecycle, inventory, risk and impact, decision rights, policies, enforcement, responsible AI, evidence, assurance, red-team scenarios, exceptions, findings, remediation, reassessment, monitoring, incident response, restoration, metrics, quality attributes, architectural rules, and boundaries.
- Immutable contract for Agent Security, Governance, and Assurance profiles.
- Agent Security, Governance, and Assurance descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for security/governance metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Agent Security, Governance, and Assurance as a model-neutral architecture module where agent output remains untrusted until deterministic platform controls validate authority, credentials stay out of prompts/context, tenant/property boundaries remain enforced, autonomy is governed, evidence is trustworthy, exceptions are controlled, and agents cannot accept their own risk.

Status: AI Agent Framework Architecture
Version: 0.17.0

---

## [0.16.0] - ARCH-014 Agent Memory, Knowledge, and Context

### Added
- Agent Memory, Knowledge, and Context metadata covering information-domain separation, knowledge categories, memory categories, context layers, context assembly, context requests/packages, provenance, source authority, trust, freshness, relevance, minimization, context budgets, compression, memory retrieval, memory records, confidence, write-back validation, prohibited memory, correction, deletion, expiration, knowledge retrieval, publication boundaries, derived knowledge, execution-state references, caching, provider checks, contamination controls, prompt-injection signals, context failures, evidence, observability, evaluation, governance, quality attributes, architectural rules, and boundaries.
- Immutable contract for Agent Memory, Knowledge, and Context profiles.
- Agent Memory, Knowledge, and Context descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for memory/knowledge/context metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Agent Memory, Knowledge, and Context as a model-neutral architecture module that keeps context temporary and non-authoritative while preserving provenance, trust, freshness, tenant/property isolation, privacy, correction/deletion, governed memory write-back, and governed knowledge publication.

Status: AI Agent Framework Architecture
Version: 0.16.0

---

## [0.15.0] - ARCH-014 Multi-Agent Coordination

### Added
- Multi-Agent Coordination metadata covering selection criteria, inappropriate-use criteria, coordination goals, roles, patterns, topology, shared goals, task ownership, delegation contracts, authority attenuation, delegation admission, chain tracking, lifecycle, delegate selection, message contracts, message authorization, shared-state boundaries, concurrency, barriers, conflicts, independent review, result aggregation, failure propagation, cancellation, human supervision, takeover, security threats, evidence, observability, evaluation, operations, quality attributes, architectural rules, and boundaries.
- Immutable contract for Multi-Agent Coordination profiles.
- Multi-Agent Coordination descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for coordination metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Multi-Agent Coordination as an optional, bounded, model-neutral composition pattern where independently identifiable agents contribute specialized work through explicit contracts while preserving authority attenuation, task ownership, tenant/property isolation, attribution, human supervision, and deterministic shared state.

Status: AI Agent Framework Architecture
Version: 0.15.0

---

## [0.14.0] - ARCH-014 Tools, Actions, and Environment

### Added
- Tools, Actions, and Environment metadata covering Tool Gateway mediation, registry records, tool identities, discovery constraints, versioned contracts, action classes, pre-invocation checks, authorization, approval, credential mediation, validation, result semantics, side effects, idempotency, reconciliation, compensation, invocation state, error normalization, environments, sandboxing, filesystem/network/data boundaries, lifecycle, evaluation, observability, evidence, operations, threats, quality attributes, architectural rules, and boundaries.
- Immutable contract for Tools, Actions, and Environment profiles.
- Tools, Actions, and Environment descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for tool/action/environment metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Tools, Actions, and Environment as a provider-neutral governed boundary where agents may propose actions but the Tool Gateway independently enforces identity, scope, authority, policy, approval, credentials, validation, environment controls, side-effect handling, evidence, and lifecycle.

Status: AI Agent Framework Architecture
Version: 0.14.0

---

## [0.13.0] - ARCH-014 Agent Reasoning and Planning

### Added
- Agent Reasoning and Planning metadata covering advisory reasoning responsibilities, authorized inputs, structured outputs, ambiguity handling, missing and conflicting information, reasoning modes, planning strategy, plan model, task dependencies, constraints, authority-aware planning, capability catalogs, plan selection, validation, approval, versioning, replanning, drift detection, uncertainty, grounding, truth hierarchy, validation, human decisions, instructions, model selection factors, multi-agent planning, stop conditions, loop detection, observability, evidence, evaluation, quality attributes, architectural rules, and boundaries.
- Immutable contract for Agent Reasoning and Planning profiles.
- Agent Reasoning and Planning descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for reasoning/planning metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Agent Reasoning and Planning as an advisory, model-neutral architecture module that can propose interpretations, plans, tasks, tools, delegations, completion, or escalation while deterministic platform controls retain authority, validation, runtime state, business truth, and durable workflow semantics.

Status: AI Agent Framework Architecture
Version: 0.13.0

---

## [0.12.0] - ARCH-014 Agent Runtime and Execution Model

### Added
- Agent Runtime and Execution metadata covering admission, identity binding, logical runtime components, execution states, transition contracts, initialization, bounded steps, tasks, scheduling, isolation, concurrency, limits, context assembly, side effects, checkpoints, waits, cancellation, failures, recovery, completion validation, closure, runtime events, observability, evidence, quality attributes, architectural rules, and boundaries.
- Immutable contract for Agent Runtime and Execution profiles.
- Agent Runtime and Execution descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for runtime metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Agent Runtime and Execution as a deterministic, provider-neutral control-plane architecture that admits authorized goals, binds identity and authority, controls state outside model context, executes bounded steps, preserves tenant/property isolation, records evidence, and delegates durable process semantics to the Workflow Engine.

Status: AI Agent Framework Architecture
Version: 0.12.0

---

## [0.11.0] - ARCH-014 Agent Identity and Lifecycle

### Added
- Agent identity and lifecycle metadata covering identity domains, participating actors, identity records, identifier requirements, ownership, registry authority, versioned elements, runtime credentials, execution identity, authority binding, delegation, propagation, lifecycle gates, activation scopes, evidence, observability, security threats, architectural rules, and boundaries.
- Immutable contract for Agent Identity and Lifecycle profiles.
- Agent Identity and Lifecycle descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for identity lifecycle metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Agent Identity and Lifecycle as a provider-independent architecture module that separates definition, version, execution, actor, authority, delegation, tenant/property, credential, lifecycle, evidence, and registry concerns without selecting identity-provider or registry product technologies.

Status: AI Agent Framework Architecture
Version: 0.11.0

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

## [0.1.0] - ARCH-013 Developer Experience and Journeys

### Added
- Developer experience objective, principle, actor, context, journey stage, journey state, human journey, AI journey, paired journey, delegation, stop condition, interaction channel, experience contract, feedback class, measure, architectural rule, and future-capability metadata.
- Immutable contract for Developer Experience and Journeys profiles.
- Developer Experience descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for developer journey metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Developer Experience and Journeys as an end-to-end, technology-independent, vendor-neutral product concern for human developers and authorized AI implementation agents, preserving explicit authority, accountability, tenant/property boundaries, evidence, recoverability, accessibility, and safe outcome-based measurement.

Status: Developer Platform Architecture
Version: 0.1.0

---

## [0.2.0] - ARCH-013 Platform Capability Model

### Added
- Platform capability model objective, principle, plane, domain, capability, request, contract, authority, metadata, scope, environment, human/AI participation, ownership, commitment, criticality, dependency, failure, observability, security, cost, portfolio, lifecycle, maturity, introduction, build-buy-integrate, deprecation, measure, governance, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Platform Capability Model profiles.
- Platform Capability Model descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for capability model metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Platform Capability Model as a technology-independent, vendor-neutral capability architecture that keeps capabilities distinct from tools, preserves explicit contracts and state authority, avoids a control-plane monolith, emits evidence during execution, preserves context, isolates failures, and prevents AI recommendations or credentials from becoming authority.

Status: Developer Platform Architecture
Version: 0.2.0

---

## [0.3.0] - ARCH-013 Project and Service Lifecycle

### Added
- Project and service lifecycle objective, principle, concept, relationship, project-state, service-state, project-creation, project-type, identity, metadata, ownership, boundary, readiness, control, gate, event, command, authority-source, validation, failure-recovery, measure, governance, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Project and Service Lifecycle profiles.
- Project and Service Lifecycle descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for lifecycle metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Project and Service Lifecycle as a technology-independent, vendor-neutral developer-platform concern that preserves distinct project and service identities, accountable ownership, authoritative lifecycle state, operational metadata, architecture and ADR binding, readiness before production, tenant/property scope, governed deprecation and retirement, AI ownership boundaries, and retained evidence.

Status: Developer Platform Architecture
Version: 0.3.0

---

## [0.4.0] - ARCH-013 Build, Test, and Quality

### Added
- Build, test, and quality objective, principle, failure-class, build-state, build-request, build-definition, build-plan, isolation, reproducibility, dependency, artifact, test-level, test-selection, quality-attribute, AI-evaluation, quality-gate, evidence, governance, maturity, measure, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Build, Test, and Quality profiles.
- Build, Test, and Quality descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for build/test/quality metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Build, Test, and Quality as a technology-independent, vendor-neutral developer-platform concern that preserves declared inputs, build-once-promote, isolated execution, traceable artifacts, governed dependencies, deterministic business tests, AI evaluation context, tenant/property validation, flaky-test governance, explainable evidence-based gates, and AI self-approval boundaries.

Status: Developer Platform Architecture
Version: 0.4.0

---

## [0.5.0] - ARCH-013 Delivery and Environment Platform

### Added
- Delivery and environment objective, principle, environment-type, identity, metadata, request, provisioning, isolation, access, health, configuration, secret-reference, release, change, delivery, verification, stop-condition, evidence, governance, maturity, measure, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Delivery and Environment Platform profiles.
- Delivery and Environment Platform descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for delivery/environment metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Delivery and Environment Platform as a technology-independent, vendor-neutral developer-platform concern that preserves governed environments, externalized configuration, secret references, trusted artifact promotion, readiness before delivery, explicit tenant/property scope, progressive delivery, recovery design, stop conditions, delivery evidence, AI authority boundaries, and deployment portability.

Status: Developer Platform Architecture
Version: 0.5.0

---

## [0.6.0] - ARCH-013 Developer Portal and Service Catalog

### Added
- Developer Portal and Service Catalog objective, principle, actor, channel, context, information-area, self-service, catalog-record, service-record, relationship, authority-source, registration, reconciliation, ownership, documentation, search, AI-discovery, security, governance, maturity, measure, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Developer Portal and Service Catalog profiles.
- Developer Portal and Service Catalog descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for portal/catalog metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Developer Portal and Service Catalog as a technology-independent, vendor-neutral developer-platform concern that preserves the portal as an experience layer, the catalog as a discovery authority, source/version/freshness/access visibility, typed relationships, distinct record types, governed self-service, tenant/property isolation, documentation lifecycle, cited AI assistance, privacy, and replaceable implementations.

Status: Developer Platform Architecture
Version: 0.6.0

---

## [0.7.0] - ARCH-013 Developer Security and Governance

### Added
- Developer security and governance objective, principle, actor, identity, authorization, access-lifecycle, AI-delegation, separation-of-duties, source-security, secret-security, engineering-domain, AI-tool, stop-condition, threat-model, policy, risk/control/evidence, review, finding, exception, remediation, assurance, incident, supplier, observability, governance, maturity, measure, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Developer Security and Governance profiles.
- Developer Security and Governance descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for security/governance metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Developer Security and Governance as a technology-independent, vendor-neutral developer-platform concern that operationalizes `ARCH-008` and `ARCH-012` without replacing them, preserving explicit identity and authority, least privilege, Zero Trust, separation of duties, bounded AI delegation, secure paved paths, tenant/property isolation, evidence by design, temporary exceptions, verified findings, developer privacy, and governed third-party AI.

Status: Developer Platform Architecture
Version: 0.7.0

---

## [0.8.0] - ARCH-013 Platform Operations and Adoption

### Added
- Platform operations and adoption objective, principle, product-ownership, ownership-role, service-commitment, critical-capability, command-control, control-loop, health, endpoint, observability, signal, log, status, incident, degraded-operation, operations-domain, support, knowledge, adoption, persona, value, onboarding, migration, enablement, feedback, AI-outcome, productivity, platform-value, measure, roadmap, backlog, governance, maturity, anti-pattern, architectural-rule, and future-capability metadata.
- Immutable contract for Platform Operations and Adoption profiles.
- Platform Operations and Adoption descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for operations/adoption metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Platform Operations and Adoption as a technology-independent, vendor-neutral developer-platform concern that applies `ARCH-011` to the Developer Platform product, preserving production-product operations, explicit ownership, service commitments, outcome-connected health, integrated operations, alternate recovery paths, contextual support, governed adoption, safe-value measures, AI outcome quality metrics, developer privacy, tenant/property impact visibility, and continuous improvement.

Status: Developer Platform Architecture
Version: 0.8.0

---

## [0.9.0] - ARCH-013 Future Developer Platform Evolution

### Added
- Future Developer Platform Evolution objective, strategic-driver, invariant, horizon, capability-state, maturity-dimension, future-experience, intent-resolution, architecture-aware assistance, architecture-knowledge graph, human-AI role, agent-coordination, autonomy-level, autonomy-promotion, autonomy-demotion, future-capability area, digital-twin, federation, ecosystem, innovation-control, transition-architecture, governance, success-measure, risk, safeguard, anti-pattern, architectural-rule, and recommended-sequence metadata.
- Immutable contract for Future Developer Platform Evolution profiles.
- Future Developer Platform Evolution descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addDeveloperPlatform`.
- Unit tests for future-evolution metadata, validation, incomplete metadata rejection, and DI access.

### Established
- Future Developer Platform Evolution as a directional, technology-independent, vendor-neutral developer-platform concern that preserves Architecture-Driven Development, evidence-backed maturity, optional future capabilities until proven, authoritative architecture sources, explicit autonomy levels, bounded multi-agent coordination, semantic-inference boundaries, digital twins as decision aids, common contracts for federation, controlled innovation, transition architecture, human accountability, tenant/property isolation, and AI-provider independence.

Status: Developer Platform Architecture
Version: 0.9.0

---

## [0.10.0] - ARCH-014 AI Agent Framework Overview

### Added
- AI Agent Framework overview objective, principle, non-agent boundary, agent-use criterion, logical-layer, framework-capability, definition-field, concept-identity, classification, autonomy-level, lifecycle, execution-state, execution-loop, goal, tool-boundary, human-participation, delegation, context, quality-attribute, architectural-rule, architecture-boundary, and future-capability metadata.
- Immutable contract for AI Agent Framework Overview profiles.
- AI Agent Framework Overview descriptor for metadata exposure, profile validation, and architecture assertion.
- Dependency-injection registration through `addAiAgentFramework`.
- Unit tests for overview metadata, validation, incomplete metadata rejection, and DI access.

### Established
- AI Agent Framework Overview as a technology-independent, vendor-neutral architecture module that treats agents as first-class platform identities with accountable ownership, versioned definitions, scoped authority, explicit autonomy, governed tool usage, deterministic business-service boundaries, Workflow Engine boundaries, authoritative state outside model context, bounded retries/delegation/budgets, human controls, attributable evidence, evaluation, suspension/stop controls, tenant isolation, trust classification, and model/provider neutrality.

Status: AI Agent Framework Architecture
Version: 0.10.0
