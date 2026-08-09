import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FAILURE_CATEGORIES,
  FAILURE_RECOVERY_STAGES,
  FAILURE_SEVERITIES,
  FAILURE_TELEMETRY_FIELDS,
  FailureRecoveryCoordinator,
  ORCHESTRATOR_ERROR_CODES,
  RECOVERY_OUTCOMES,
  RECOVERY_STRATEGIES,
  RecoveryPlan,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('failure recovery exposes the canonical ARCH-004-09 recovery lifecycle', () => {
  const coordinator = new FailureRecoveryCoordinator();

  assert.deepEqual(coordinator.canonicalStageNames(), [
    FAILURE_RECOVERY_STAGES.FAILURE_DETECTED,
    FAILURE_RECOVERY_STAGES.CLASSIFY_FAILURE,
    FAILURE_RECOVERY_STAGES.DETERMINE_SEVERITY,
    FAILURE_RECOVERY_STAGES.SELECT_RECOVERY_STRATEGY,
    FAILURE_RECOVERY_STAGES.EXECUTE_RECOVERY,
    FAILURE_RECOVERY_STAGES.VALIDATE_RECOVERY,
    FAILURE_RECOVERY_STAGES.RESUME_OR_ESCALATE
  ]);
});

test('failure recovery exposes documented categories, severities, strategies, outcomes, and telemetry', () => {
  const coordinator = new FailureRecoveryCoordinator();

  assert.ok(coordinator.categories().includes(FAILURE_CATEGORIES.TOOL));
  assert.ok(coordinator.severities().includes(FAILURE_SEVERITIES.CRITICAL));
  assert.ok(coordinator.strategies().includes(RECOVERY_STRATEGIES.SAFE_TERMINATION));
  assert.ok(coordinator.outcomes().includes(RECOVERY_OUTCOMES.CONTROLLED_RESPONSE));
  assert.ok(coordinator.telemetryFields().includes(FAILURE_TELEMETRY_FIELDS.RECOVERY_RESULT));
  assert.equal(coordinator.getStage(FAILURE_RECOVERY_STAGES.SELECT_RECOVERY_STRATEGY).sequence, 4);
});

test('failure recovery classifies explicit and component-derived failures', () => {
  const coordinator = new FailureRecoveryCoordinator();

  assert.equal(
    coordinator.classifyFailure(baseFailure({ category: FAILURE_CATEGORIES.KNOWLEDGE })),
    FAILURE_CATEGORIES.KNOWLEDGE
  );
  assert.equal(
    coordinator.classifyFailure(baseFailure({ component: 'Tool Orchestrator', category: undefined })),
    FAILURE_CATEGORIES.TOOL
  );
});

test('failure recovery determines severity from policy, recoverability, and alternatives', () => {
  const coordinator = new FailureRecoveryCoordinator();

  assert.equal(
    coordinator.determineSeverity(baseFailure({ category: FAILURE_CATEGORIES.POLICY })),
    FAILURE_SEVERITIES.CRITICAL
  );
  assert.equal(
    coordinator.determineSeverity(baseFailure({ recoverable: false })),
    FAILURE_SEVERITIES.HIGH
  );
  assert.equal(
    coordinator.determineSeverity(baseFailure({ fallbackAvailable: true })),
    FAILURE_SEVERITIES.MEDIUM
  );
});

test('failure recovery selects deterministic recovery strategies', () => {
  const coordinator = new FailureRecoveryCoordinator();

  assert.equal(
    coordinator.selectRecoveryStrategy(baseFailure({ retryable: true })),
    RECOVERY_STRATEGIES.RETRY
  );
  assert.equal(
    coordinator.selectRecoveryStrategy(baseFailure({ alternativeToolAvailable: true })),
    RECOVERY_STRATEGIES.ALTERNATIVE_TOOL
  );
  assert.equal(
    coordinator.selectRecoveryStrategy(baseFailure({ recoverable: false })),
    RECOVERY_STRATEGIES.SAFE_TERMINATION
  );
});

test('failure recovery creates isolated policy-enforced recovery plans', () => {
  const coordinator = new FailureRecoveryCoordinator();
  const plan = coordinator.createRecoveryPlan(
    baseFailure({
      category: FAILURE_CATEGORIES.TOOL,
      retryable: true,
      component: 'Pricing Tool'
    })
  );

  assert.equal(plan.strategy, RECOVERY_STRATEGIES.RETRY);
  assert.equal(plan.isolated, true);
  assert.equal(plan.policyEnforced, true);
  assert.ok(plan.steps.includes('retry operation'));
});

test('failure recovery validation rejects policy bypass and unsafe resume', () => {
  const coordinator = new FailureRecoveryCoordinator();
  const validation = coordinator.validateRecovery(
    new RecoveryPlan({
      failureId: 'failure-1',
      correlationId: 'corr-1',
      category: FAILURE_CATEGORIES.INFRASTRUCTURE,
      severity: FAILURE_SEVERITIES.HIGH,
      strategy: RECOVERY_STRATEGIES.SAFE_TERMINATION,
      component: 'Database',
      isolated: false,
      policyEnforced: false
    }),
    {
      resumed: true,
      dataConsistent: false,
      policyCompliant: false
    }
  );

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /policy/);
  assert.match(validation.errors.join('\n'), /isolate/);
  assert.match(validation.errors.join('\n'), /resume/);
});

test('failure recovery completes successful recovery with resume telemetry', () => {
  const coordinator = new FailureRecoveryCoordinator({ clock: fixedClock() });
  const result = coordinator.recover(
    baseFailure({
      category: FAILURE_CATEGORIES.MEMORY,
      fallbackAvailable: true,
      component: 'Memory System'
    }),
    {
      succeeded: true,
      dataConsistent: true,
      policyCompliant: true,
      workflowIntegrity: true
    }
  );

  assert.equal(result.succeeded, true);
  assert.equal(result.outcome, RECOVERY_OUTCOMES.RESUME);
  assert.equal(result.telemetry.recoveryStrategy, RECOVERY_STRATEGIES.FALLBACK);
  assert.equal(result.telemetry.durationMs, 10);
});

test('failure recovery escalates failed recovery and preserves observability', () => {
  const coordinator = new FailureRecoveryCoordinator({ clock: fixedClock() });
  const result = coordinator.recover(
    baseFailure({
      category: FAILURE_CATEGORIES.EXTERNAL_PROVIDER,
      retryable: true,
      component: 'External Provider'
    }),
    {
      succeeded: false,
      dataConsistent: true,
      policyCompliant: true,
      workflowIntegrity: true
    }
  );

  assert.equal(result.succeeded, false);
  assert.equal(result.outcome, RECOVERY_OUTCOMES.ESCALATE);
  assert.equal(result.telemetry.failureCategory, FAILURE_CATEGORIES.EXTERNAL_PROVIDER);
  assert.equal(result.telemetry.correlationId, 'corr-1');
});

test('failure recovery rejects invalid failure events', () => {
  const coordinator = new FailureRecoveryCoordinator();

  assert.throws(
    () => coordinator.classifyFailure({ failureId: 'failure-1' }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.FAILURE_EVENT_INVALID
  );
});

test('failure recovery coordinator is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const coordinator = provider.getRequiredService('FailureRecoveryCoordinator');

  assert.ok(coordinator instanceof FailureRecoveryCoordinator);
  assert.equal(coordinator.describePipeline().length, 7);
});

function baseFailure(overrides = {}) {
  return {
    failureId: 'failure-1',
    correlationId: 'corr-1',
    component: 'Reasoning Engine',
    category: FAILURE_CATEGORIES.REASONING,
    message: 'Failure detected.',
    ...overrides
  };
}

function fixedClock() {
  const instants = [
    new Date('2026-07-18T00:00:00.000Z'),
    new Date('2026-07-18T00:00:00.010Z'),
    new Date('2026-07-18T00:00:00.010Z')
  ];

  return () => instants.shift() ?? new Date('2026-07-18T00:00:00.010Z');
}
