import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DECISION_ENGINE_GATES,
  DECISION_FAILURE_CLASSIFICATIONS,
  DECISION_RECORD_FIELDS,
  DecisionEngineAuthority,
  EXECUTION_DECISION_OUTCOMES,
  ORCHESTRATOR_ERROR_CODES,
  OrchestrationProposal,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('decision engine exposes the canonical ARCH-004-07 gate order', () => {
  const engine = new DecisionEngineAuthority();

  assert.deepEqual(engine.canonicalGateNames(), [
    DECISION_ENGINE_GATES.INTENT,
    DECISION_ENGINE_GATES.CONTEXT,
    DECISION_ENGINE_GATES.POLICY,
    DECISION_ENGINE_GATES.CAPABILITY,
    DECISION_ENGINE_GATES.AUTHORIZATION,
    DECISION_ENGINE_GATES.CONFIDENCE,
    DECISION_ENGINE_GATES.EXECUTION_DECISION
  ]);
});

test('decision engine exposes outcomes, failure classes, and record fields', () => {
  const engine = new DecisionEngineAuthority();

  assert.ok(engine.outcomes().includes(EXECUTION_DECISION_OUTCOMES.EXECUTE));
  assert.ok(engine.failureClassifications().includes(DECISION_FAILURE_CLASSIFICATIONS.POLICY_VIOLATION));
  assert.ok(engine.decisionRecordFields().includes(DECISION_RECORD_FIELDS.CORRELATION_ID));
  assert.equal(engine.getGate(DECISION_ENGINE_GATES.AUTHORIZATION).sequence, 5);
});

test('decision engine authorizes execution only after all gates pass', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const decision = engine.evaluate({
    proposalId: 'proposal-1',
    correlationId: 'corr-1',
    intent: 'pricing',
    intentConfidence: 0.9,
    goals: ['calculate stay price'],
    context: { complete: true, workingContextId: 'ctx-1' },
    policies: [{ policyId: 'privacy', passed: true }],
    requiredCapabilities: ['pricing.calculate'],
    availableCapabilities: ['pricing.calculate'],
    authorization: { authorized: true },
    confidence: 0.87
  });

  assert.equal(decision.outcome, EXECUTION_DECISION_OUTCOMES.EXECUTE);
  assert.equal(decision.authorized, true);
  assert.equal(decision.gateResults.length, 7);
  assert.deepEqual(decision.gateResults.filter((gate) => !gate.passed), []);
});

test('decision engine can authorize direct response without tool execution', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const decision = engine.evaluate({
    proposalId: 'proposal-2',
    correlationId: 'corr-2',
    intent: 'policy',
    intentConfidence: 0.85,
    goals: ['answer checkout policy'],
    context: { complete: true },
    policies: [{ policyId: 'privacy', passed: true }],
    requiredCapabilities: [],
    availableCapabilities: [],
    authorization: { authorized: true },
    confidence: 0.8
  });

  assert.equal(decision.outcome, EXECUTION_DECISION_OUTCOMES.RESPOND);
  assert.equal(decision.authorized, true);
});

test('decision engine sends ambiguous intent to clarification', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const decision = engine.evaluate({
    proposalId: 'proposal-3',
    correlationId: 'corr-3',
    intent: 'booking',
    intentConfidence: 0.3,
    goals: ['reserve a property'],
    requiresClarification: true,
    context: { complete: true },
    policies: [{ policyId: 'privacy', passed: true }],
    requiredCapabilities: ['booking.create'],
    availableCapabilities: ['booking.create'],
    authorization: { authorized: true },
    confidence: 0.3
  });

  assert.equal(decision.outcome, EXECUTION_DECISION_OUTCOMES.CLARIFY);
  assert.equal(decision.authorized, false);
  assert.equal(decision.failureClassification, DECISION_FAILURE_CLASSIFICATIONS.LOW_CONFIDENCE);
});

test('decision engine blocks policy violations before execution', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const decision = engine.evaluate({
    proposalId: 'proposal-4',
    correlationId: 'corr-4',
    intent: 'booking',
    intentConfidence: 0.9,
    goals: ['reserve a property'],
    context: { complete: true },
    policies: [{ policyId: 'privacy', passed: false }],
    requiredCapabilities: ['booking.create'],
    availableCapabilities: ['booking.create'],
    authorization: { authorized: true },
    confidence: 0.9
  });

  assert.equal(decision.outcome, EXECUTION_DECISION_OUTCOMES.DENY);
  assert.equal(decision.failureClassification, DECISION_FAILURE_CLASSIFICATIONS.POLICY_VIOLATION);
});

test('decision engine stops when required capability is unavailable', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const decision = engine.evaluate({
    proposalId: 'proposal-5',
    correlationId: 'corr-5',
    intent: 'availability',
    intentConfidence: 0.9,
    goals: ['check availability'],
    context: { complete: true },
    policies: [{ policyId: 'privacy', passed: true }],
    requiredCapabilities: ['calendar.lookup'],
    availableCapabilities: [],
    authorization: { authorized: true },
    confidence: 0.9
  });

  assert.equal(decision.outcome, EXECUTION_DECISION_OUTCOMES.STOP);
  assert.equal(decision.failureClassification, DECISION_FAILURE_CLASSIFICATIONS.CAPABILITY_UNAVAILABLE);
});

test('decision engine denies unauthorized proposals', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const decision = engine.evaluate(
    new OrchestrationProposal({
      proposalId: 'proposal-6',
      correlationId: 'corr-6',
      intent: 'admin',
      intentConfidence: 0.9,
      goals: ['execute admin action'],
      context: { complete: true },
      policies: [{ policyId: 'privacy', passed: true }],
      requiredCapabilities: ['admin.execute'],
      availableCapabilities: ['admin.execute'],
      authorization: { authorized: false },
      confidence: 0.9
    })
  );

  assert.equal(decision.outcome, EXECUTION_DECISION_OUTCOMES.DENY);
  assert.equal(decision.failureClassification, DECISION_FAILURE_CLASSIFICATIONS.AUTHORIZATION_FAILURE);
});

test('decision engine creates explainable decision records', () => {
  const engine = new DecisionEngineAuthority({ clock: fixedClock() });
  const proposal = {
    proposalId: 'proposal-7',
    correlationId: 'corr-7',
    intent: 'pricing',
    intentConfidence: 0.9,
    goals: ['calculate price'],
    context: { complete: true, workingContextId: 'ctx-1' },
    policies: [{ policyId: 'privacy', passed: true }],
    requiredCapabilities: ['pricing.calculate'],
    availableCapabilities: ['pricing.calculate'],
    authorization: { authorized: true },
    confidence: 0.9
  };
  const decision = engine.evaluate(proposal);
  const record = engine.createDecisionRecord(proposal, decision);

  assert.equal(record.intentDetected, 'pricing');
  assert.deepEqual(record.contextEvaluated, ['complete', 'workingContextId']);
  assert.deepEqual(record.policiesApplied, ['privacy']);
  assert.equal(record.finalDecision, EXECUTION_DECISION_OUTCOMES.EXECUTE);
  assert.equal(record.correlationId, 'corr-7');
});

test('decision engine rejects proposals without correlation IDs', () => {
  const engine = new DecisionEngineAuthority();

  assert.throws(
    () =>
      engine.evaluate({
        proposalId: 'proposal-8',
        intent: 'pricing',
        intentConfidence: 0.9,
        goals: ['calculate price']
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.DECISION_PROPOSAL_INVALID
  );
});

test('decision engine authority is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const engine = provider.getRequiredService('DecisionEngineAuthority');

  assert.ok(engine instanceof DecisionEngineAuthority);
  assert.equal(engine.describePipeline().length, 7);
});

function fixedClock() {
  return () => new Date('2026-07-18T00:00:00.000Z');
}
