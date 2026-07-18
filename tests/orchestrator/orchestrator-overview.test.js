import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  ORCHESTRATION_DECISIONS,
  ORCHESTRATION_STAGES,
  ORCHESTRATOR_COMPONENTS,
  ORCHESTRATOR_ERROR_CODES,
  OrchestratorBoundaryPolicy,
  OrchestratorComponentRegistry,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('orchestrator component registry exposes coordinated subsystems', () => {
  const registry = new OrchestratorComponentRegistry();
  const components = registry.listComponents().map(component => component.componentName);

  assert.deepEqual(components, [
    ORCHESTRATOR_COMPONENTS.REASONING_ENGINE,
    ORCHESTRATOR_COMPONENTS.MEMORY_SYSTEM,
    ORCHESTRATOR_COMPONENTS.KNOWLEDGE_SERVICE,
    ORCHESTRATOR_COMPONENTS.TOOL_ORCHESTRATOR,
    ORCHESTRATOR_COMPONENTS.BUSINESS_SERVICES,
    ORCHESTRATOR_COMPONENTS.WORKFLOW_ENGINE,
    ORCHESTRATOR_COMPONENTS.RESPONSE_COMPOSER
  ]);
  assert.equal(
    registry.getComponent(ORCHESTRATOR_COMPONENTS.BUSINESS_SERVICES).responsibility,
    'Business decisions'
  );
});

test('orchestrator boundary policy permits coordination and rejects owned business behavior', () => {
  const policy = new OrchestratorBoundaryPolicy();
  const allowed = policy.validateResponsibility('execution planning');
  const forbidden = policy.validateResponsibility('calculate pricing');

  assert.equal(allowed.isAllowed, true);
  assert.equal(forbidden.isAllowed, false);
  assert.equal(forbidden.errors[0].code, ORCHESTRATOR_ERROR_CODES.FORBIDDEN_RESPONSIBILITY);
  assert.throws(
    () => policy.assertResponsibilityAllowed('access databases directly'),
    error => error instanceof PlatformError && error.code === ORCHESTRATOR_ERROR_CODES.FORBIDDEN_RESPONSIBILITY
  );
});

test('orchestrator planner creates the high-level execution model without executing business logic', () => {
  const services = createFoundationServiceCollection();
  addAiOrchestrator(services);

  const provider = services.buildServiceProvider();
  const planner = provider.getRequiredService('OrchestratorPlanner');
  const plan = planner.createPlan({
    requestId: 'req-1',
    correlationId: 'corr-1',
    userInput: 'What is the price?',
    requestedCapabilities: ['pricing.compute'],
    metadata: {
      workflowContinuation: true
    }
  });

  assert.deepEqual(
    plan.steps.map(step => step.stage),
    [
      ORCHESTRATION_STAGES.RECEIVE_REQUEST,
      ORCHESTRATION_STAGES.UNDERSTAND_INTENT,
      ORCHESTRATION_STAGES.BUILD_CONTEXT,
      ORCHESTRATION_STAGES.BUILD_CONTEXT,
      ORCHESTRATION_STAGES.DETERMINE_PLAN,
      ORCHESTRATION_STAGES.EXECUTE_CAPABILITIES,
      ORCHESTRATION_STAGES.EXECUTE_CAPABILITIES,
      ORCHESTRATION_STAGES.EXECUTE_CAPABILITIES,
      ORCHESTRATION_STAGES.VALIDATE_RESULTS,
      ORCHESTRATION_STAGES.COMPOSE_RESPONSE,
      ORCHESTRATION_STAGES.RETURN_RESPONSE
    ]
  );
  assert.equal(plan.metadata.stateless, true);
  assert.ok(plan.decisions.includes(ORCHESTRATION_DECISIONS.SELECT_TOOLS));
  assert.ok(plan.decisions.includes(ORCHESTRATION_DECISIONS.CONTINUE_WORKFLOW));
});

test('orchestrator planner keeps requests without tools in coordination-only mode', () => {
  const services = createFoundationServiceCollection();
  addAiOrchestrator(services);

  const provider = services.buildServiceProvider();
  const planner = provider.getRequiredService('OrchestratorPlanner');
  const plan = planner.createPlan({
    requestId: 'req-2',
    correlationId: 'corr-2',
    userInput: 'Hello',
    requestedCapabilities: []
  });

  assert.equal(plan.decisions.includes(ORCHESTRATION_DECISIONS.SELECT_TOOLS), false);
  assert.equal(plan.decisions.at(-1), ORCHESTRATION_DECISIONS.STOP_EXECUTION);
});

test('orchestrator registration exposes overview services through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addAiOrchestrator(services);

  const provider = services.buildServiceProvider();

  assert.ok(provider.getRequiredService('OrchestratorBoundaryPolicy'));
  assert.ok(provider.getRequiredService('OrchestratorComponentRegistry'));
  assert.ok(provider.getRequiredService('OrchestratorPlanner'));
});
