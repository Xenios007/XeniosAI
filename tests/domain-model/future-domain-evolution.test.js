import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_DOMAIN_EVALUATION_DECISIONS,
  FUTURE_DOMAIN_EVOLUTION_OBJECTIVES,
  FUTURE_DOMAIN_EVOLUTION_PRINCIPLES,
  FUTURE_DOMAIN_NAMES,
  FUTURE_DOMAIN_STABILITY_RULES,
  FutureDomainCandidate,
  FutureDomainEvaluation,
  FutureDomainEvolutionRegistry,
  addDomainModel
} from '../../src/domain-model/index.js';

test('future domain evolution registry exposes principles, objectives, stability rules, and decisions', () => {
  const registry = new FutureDomainEvolutionRegistry();

  assert.ok(registry.principles().includes(FUTURE_DOMAIN_EVOLUTION_PRINCIPLES.EXPLICIT_OWNERSHIP));
  assert.ok(registry.principles().includes(FUTURE_DOMAIN_EVOLUTION_PRINCIPLES.TECHNOLOGY_INDEPENDENCE));
  assert.ok(registry.objectives().includes(FUTURE_DOMAIN_EVOLUTION_OBJECTIVES.GREATER_AI_ASSISTANCE));
  assert.ok(registry.stabilityRules().includes(FUTURE_DOMAIN_STABILITY_RULES.ONE_OWNER_PER_CAPABILITY));
  assert.ok(registry.decisions().includes(FUTURE_DOMAIN_EVALUATION_DECISIONS.DEFER));
});

test('future domain evolution registry registers documented future domains as placeholders', () => {
  const registry = new FutureDomainEvolutionRegistry();

  assert.deepEqual(registry.listCandidates().map((candidate) => candidate.domainName), [
    FUTURE_DOMAIN_NAMES.LOYALTY,
    FUTURE_DOMAIN_NAMES.MARKETPLACE,
    FUTURE_DOMAIN_NAMES.VENDOR,
    FUTURE_DOMAIN_NAMES.BILLING,
    FUTURE_DOMAIN_NAMES.REPORTING,
    FUTURE_DOMAIN_NAMES.INVENTORY,
    FUTURE_DOMAIN_NAMES.MAINTENANCE,
    FUTURE_DOMAIN_NAMES.MARKETING,
    FUTURE_DOMAIN_NAMES.AI_MANAGEMENT,
    FUTURE_DOMAIN_NAMES.COMPLIANCE,
    FUTURE_DOMAIN_NAMES.ANALYTICS
  ]);
  assert.equal(registry.getCandidate(FUTURE_DOMAIN_NAMES.LOYALTY).implemented, false);
});

test('future domain evolution registry preserves documented responsibilities and entities', () => {
  const registry = new FutureDomainEvolutionRegistry();
  const loyalty = registry.getCandidate(FUTURE_DOMAIN_NAMES.LOYALTY);
  const aiManagement = registry.getCandidate(FUTURE_DOMAIN_NAMES.AI_MANAGEMENT);
  const reporting = registry.getCandidate(FUTURE_DOMAIN_NAMES.REPORTING);

  assert.ok(loyalty.responsibilities.includes('Reward Points'));
  assert.ok(loyalty.potentialEntities.includes('Membership Tier'));
  assert.ok(aiManagement.responsibilities.includes('Prompt Governance'));
  assert.ok(aiManagement.potentialEntities.includes('AI Agent'));
  assert.equal(reporting.consumesDomainEvents, true);
  assert.equal(reporting.ownsOperationalBusinessData, false);
});

test('future domain evolution registry rejects technical or already implemented candidates', () => {
  assert.throws(
    () =>
      new FutureDomainEvolutionRegistry({
        candidates: [
          new FutureDomainCandidate({
            domainName: 'Database Runtime',
            responsibilities: ['Kubernetes Queue Scaling'],
            potentialEntities: [],
            businessCapability: '',
            expansionReason: '',
            modifiesForeignBusinessState: true,
            aiOwnsBusinessPolicy: true,
            technologyDriven: true,
            implemented: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.FUTURE_DOMAIN_CANDIDATE_INVALID &&
      error.details.errors.some((message) => message.includes('business capability')) &&
      error.details.errors.some((message) => message.includes('foreign business state')) &&
      error.details.errors.some((message) => message.includes('AI may augment')) &&
      error.details.errors.some((message) => message.includes('placeholders')) &&
      error.details.errors.some((message) => message.includes('ubiquitous business language'))
  );
});

test('future domain evolution registry accepts only architecture-preserving evaluations', () => {
  const registry = new FutureDomainEvolutionRegistry();
  const accepted = registry.acceptedEvolution(
    new FutureDomainEvaluation({
      domainName: FUTURE_DOMAIN_NAMES.BILLING,
      decision: FUTURE_DOMAIN_EVALUATION_DECISIONS.ACCEPT
    })
  );
  const rejected = registry.evaluate({
    domainName: FUTURE_DOMAIN_NAMES.ANALYTICS,
    decision: FUTURE_DOMAIN_EVALUATION_DECISIONS.ACCEPT,
    preservesBoundedContexts: false,
    protectsUbiquitousLanguage: false,
    maintainsExplicitOwnership: false,
    favorsNewDomainOverOversizedDomain: false,
    preservesAggregateConsistency: false,
    keepsDomainEventsMeaningful: false,
    technologyIndependent: false,
    strengthensBusinessArchitecture: false,
    aiAugmentsButDoesNotOwnPolicy: false,
    measuredByBusinessCapability: false
  });

  assert.equal(accepted.isValid, true);
  assert.equal(accepted.decision, FUTURE_DOMAIN_EVALUATION_DECISIONS.ACCEPT);
  assert.equal(rejected.isValid, false);
  assert.match(rejected.errors.join('\n'), /preserve bounded contexts/);
  assert.match(rejected.errors.join('\n'), /technology/);
  assert.match(rejected.errors.join('\n'), /business capability/);
});

test('future domain evolution registry rejects invalid accepted evolution', () => {
  const registry = new FutureDomainEvolutionRegistry();

  assert.throws(
    () =>
      registry.acceptedEvolution({
        domainName: 'Unknown Domain',
        decision: FUTURE_DOMAIN_EVALUATION_DECISIONS.ACCEPT
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.FUTURE_DOMAIN_EVALUATION_INVALID &&
      error.details.errors.some((message) => message.includes('unknown candidate'))
  );
});

test('future domain evolution registry reports unknown candidates without inventing them', () => {
  const registry = new FutureDomainEvolutionRegistry();

  assert.throws(
    () => registry.getCandidate('Revenue Management'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.FUTURE_DOMAIN_CANDIDATE_NOT_FOUND
  );
});

test('future domain evolution registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('FutureDomainEvolutionRegistry');

  assert.ok(registry instanceof FutureDomainEvolutionRegistry);
  assert.equal(registry.listCandidates().length, 11);
});
