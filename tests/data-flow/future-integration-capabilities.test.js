import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DATA_FLOW_ERROR_CODES,
  FUTURE_INTEGRATION_CAPABILITY_AREAS,
  FUTURE_INTEGRATION_EVALUATION_CRITERIA,
  FUTURE_INTEGRATION_EVALUATION_DECISIONS,
  FUTURE_INTEGRATION_MATURITY_STAGES,
  FUTURE_INTEGRATION_STABILITY_PRINCIPLES,
  FutureIntegrationCapabilityCandidate,
  FutureIntegrationCapabilityEvaluation,
  FutureIntegrationCapabilityRegistry,
  addDataFlow
} from '../../src/data-flow/index.js';

test('future integration capability registry exposes all documented capability areas', () => {
  const registry = new FutureIntegrationCapabilityRegistry();

  assert.deepEqual(
    registry.listCandidates().map((candidate) => candidate.area),
    [
      FUTURE_INTEGRATION_CAPABILITY_AREAS.INTELLIGENT_WORKFLOW_COORDINATION,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.ADAPTIVE_SERVICE_ROUTING,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.ADVANCED_EVENT_PROCESSING,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.INTELLIGENT_MESSAGING,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.CONTRACT_EVOLUTION,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.WORKFLOW_INTELLIGENCE,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.CROSS_PLATFORM_INTEGRATION,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.MULTI_REGION_ARCHITECTURE,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.FEDERATED_DATA_ACCESS,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.OPERATIONAL_INTELLIGENCE,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.AI_ASSISTED_INTEGRATION,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.GOVERNANCE_EVOLUTION,
      FUTURE_INTEGRATION_CAPABILITY_AREAS.EMERGING_TECHNOLOGIES
    ]
  );
});

test('future integration capability registry preserves maturity model and stability principles', () => {
  const registry = new FutureIntegrationCapabilityRegistry();

  assert.deepEqual(registry.maturityModel(), [
    FUTURE_INTEGRATION_MATURITY_STAGES.CONNECTED_SERVICES,
    FUTURE_INTEGRATION_MATURITY_STAGES.INTEGRATED_PLATFORM,
    FUTURE_INTEGRATION_MATURITY_STAGES.EVENT_DRIVEN_PLATFORM,
    FUTURE_INTEGRATION_MATURITY_STAGES.WORKFLOW_AWARE_PLATFORM,
    FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM,
    FUTURE_INTEGRATION_MATURITY_STAGES.ADAPTIVE_PLATFORM
  ]);
  assert.ok(
    registry.stabilityPrinciples().includes(FUTURE_INTEGRATION_STABILITY_PRINCIPLES.TRANSACTIONS_REMAIN_LOCAL)
  );
});

test('future integration capability candidates remain placeholders only', () => {
  const registry = new FutureIntegrationCapabilityRegistry();
  const candidate = registry.getCandidate('advanced-event-processing');

  assert.equal(candidate.implementationCommitted, false);
  assert.equal(candidate.area, FUTURE_INTEGRATION_CAPABILITY_AREAS.ADVANCED_EVENT_PROCESSING);
  assert.ok(candidate.potentialEnhancements.includes('Event replay'));
});

test('future integration capability registry rejects duplicate candidates', () => {
  const candidate = new FutureIntegrationCapabilityCandidate({
    capabilityId: 'adaptive-service-routing',
    displayName: 'Adaptive Service Routing',
    area: FUTURE_INTEGRATION_CAPABILITY_AREAS.ADAPTIVE_SERVICE_ROUTING,
    maturityStage: FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM
  });

  assert.throws(
    () => new FutureIntegrationCapabilityRegistry({ candidates: [candidate, candidate] }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DATA_FLOW_ERROR_CODES.FUTURE_INTEGRATION_CAPABILITY_DUPLICATE
  );
});

test('future integration capability evaluation accepts architecture-safe introductions', () => {
  const registry = new FutureIntegrationCapabilityRegistry();
  const result = registry.evaluateIntroduction(
    new FutureIntegrationCapabilityEvaluation({
      capabilityId: 'contract-evolution',
      preservesExplicitOwnership: true,
      maintainsServiceAutonomy: true,
      extendsExistingPrinciples: true,
      avoidsHiddenDependencies: true,
      remainsObservable: true,
      supportsIncrementalAdoption: true,
      providesMeasurableBusinessValue: true,
      keepsExternalIntegrationsIsolated: true
    })
  );

  assert.equal(result.decision, FUTURE_INTEGRATION_EVALUATION_DECISIONS.ACCEPT);
  assert.equal(result.accepted, true);
  assert.equal(result.errors.length, 0);
});

test('future integration capability evaluation rejects missing governance criteria', () => {
  const registry = new FutureIntegrationCapabilityRegistry();
  const result = registry.evaluateIntroduction({
    capabilityId: 'intelligent-messaging',
    preservesExplicitOwnership: true
  });

  assert.equal(result.decision, FUTURE_INTEGRATION_EVALUATION_DECISIONS.REJECT);
  assert.ok(result.errors.length >= Object.values(FUTURE_INTEGRATION_EVALUATION_CRITERIA).length - 1);
  assert.match(result.errors[0].message, /criterion/);
});

test('future integration capability evaluation rejects architecture replacement and hidden coupling', () => {
  const registry = new FutureIntegrationCapabilityRegistry();
  const acceptedFields = Object.fromEntries(
    Object.values(FUTURE_INTEGRATION_EVALUATION_CRITERIA).map((criterion) => [criterion, true])
  );
  const result = registry.evaluateIntroduction({
    capabilityId: 'emerging-technology-adoption',
    ...acceptedFields,
    technologyOnlyJustification: true,
    requiresArchitecturalReplacement: true,
    transfersBusinessOwnership: true,
    bypassesContracts: true,
    makesMessagingVisibleToBusinessLogic: true,
    requiresDistributedTransactions: true
  });

  assert.equal(result.accepted, false);
  assert.match(result.errors.map((error) => error.message).join('\n'), /Technology novelty/);
  assert.match(result.errors.map((error) => error.message).join('\n'), /extend rather than replace/);
  assert.match(result.errors.map((error) => error.message).join('\n'), /business ownership/);
  assert.match(result.errors.map((error) => error.message).join('\n'), /distributed transactions/);
});

test('future integration capability evaluation rejects unknown candidates without inventing them', () => {
  const registry = new FutureIntegrationCapabilityRegistry();
  const result = registry.evaluateIntroduction({ capabilityId: 'unknown-future-integration' });

  assert.equal(result.accepted, false);
  assert.equal(result.errors[0].code, DATA_FLOW_ERROR_CODES.FUTURE_INTEGRATION_CAPABILITY_NOT_FOUND);
});

test('future integration capability registry filters candidates by area', () => {
  const registry = new FutureIntegrationCapabilityRegistry();

  assert.deepEqual(
    registry.listByArea(FUTURE_INTEGRATION_CAPABILITY_AREAS.FEDERATED_DATA_ACCESS).map((candidate) => candidate.capabilityId),
    ['federated-data-access']
  );
});

test('future integration capability registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDataFlow(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('FutureIntegrationCapabilityRegistry');

  assert.ok(registry instanceof FutureIntegrationCapabilityRegistry);
  assert.equal(registry.listCandidates().length, 13);
});
