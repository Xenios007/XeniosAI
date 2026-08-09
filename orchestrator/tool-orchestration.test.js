import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { InMemoryToolRegistry } from '../../src/ai/tools/in-memory-tool-registry.js';
import {
  ORCHESTRATOR_ERROR_CODES,
  TOOL_CATEGORIES,
  TOOL_INVOCATION_TELEMETRY_FIELDS,
  TOOL_ORCHESTRATION_STAGES,
  ToolCapabilityRequirement,
  ToolOrchestrationCoordinator,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('tool orchestration exposes the canonical ARCH-004-04 lifecycle order', () => {
  const coordinator = new ToolOrchestrationCoordinator();

  assert.deepEqual(coordinator.canonicalStageNames(), [
    TOOL_ORCHESTRATION_STAGES.CAPABILITY_NEEDED,
    TOOL_ORCHESTRATION_STAGES.TOOL_DISCOVERY,
    TOOL_ORCHESTRATION_STAGES.CAPABILITY_MATCHING,
    TOOL_ORCHESTRATION_STAGES.AUTHORIZATION,
    TOOL_ORCHESTRATION_STAGES.EXECUTION_PLAN,
    TOOL_ORCHESTRATION_STAGES.TOOL_EXECUTION,
    TOOL_ORCHESTRATION_STAGES.RESULT_VALIDATION,
    TOOL_ORCHESTRATION_STAGES.NORMALIZATION,
    TOOL_ORCHESTRATION_STAGES.RETURN_RESULT
  ]);
});

test('tool orchestration exposes documented categories and telemetry fields', () => {
  const coordinator = new ToolOrchestrationCoordinator();

  assert.ok(coordinator.categories().includes(TOOL_CATEGORIES.BUSINESS));
  assert.ok(coordinator.categories().includes(TOOL_CATEGORIES.KNOWLEDGE));
  assert.ok(coordinator.telemetryFields().includes(TOOL_INVOCATION_TELEMETRY_FIELDS.RETRY_COUNT));
  assert.equal(coordinator.getStage(TOOL_ORCHESTRATION_STAGES.AUTHORIZATION).sequence, 4);
});

test('tool orchestration discovers and selects an authoritative compatible tool', () => {
  const registry = new InMemoryToolRegistry([
    {
      toolId: 'pricing.experimental',
      capability: 'pricing.calculate',
      category: TOOL_CATEGORIES.BUSINESS,
      authoritative: false
    },
    {
      toolId: 'pricing.authoritative',
      capability: 'pricing.calculate',
      category: TOOL_CATEGORIES.BUSINESS,
      authoritative: true,
      stable: true,
      observable: true,
      deterministic: true,
      policyCompliant: true
    }
  ]);
  const coordinator = new ToolOrchestrationCoordinator({ toolRegistry: registry });
  const requirement = new ToolCapabilityRequirement({
    capability: 'pricing.calculate',
    category: TOOL_CATEGORIES.BUSINESS
  });

  assert.equal(coordinator.discoverTools(requirement).length, 2);
  assert.equal(coordinator.selectTool(requirement).toolId, 'pricing.authoritative');
});

test('tool orchestration rejects unauthorized execution before invocation', () => {
  const coordinator = new ToolOrchestrationCoordinator();
  const authorization = coordinator.authorizeExecution({
    requirement: {
      capability: 'booking.create',
      requiredPermissions: ['booking.write']
    },
    tool: {
      toolId: 'booking.default',
      requiredPermissions: ['booking.approve']
    },
    principalPermissions: ['booking.read']
  });

  assert.equal(authorization.isAuthorized, false);
  assert.match(authorization.errors.join('\n'), /booking.write/);
  assert.match(authorization.errors.join('\n'), /booking.approve/);
});

test('tool orchestration creates execution plans without executing business logic', () => {
  const coordinator = new ToolOrchestrationCoordinator();
  const plan = coordinator.createExecutionPlan({
    requirement: {
      capability: 'calendar.lookup',
      category: TOOL_CATEGORIES.BUSINESS,
      input: { propertyId: 'p-1' }
    },
    tool: {
      toolId: 'calendar.default',
      version: '1.0.0',
      authoritative: true
    },
    correlationId: 'corr-1'
  });

  assert.equal(plan.toolId, 'calendar.default');
  assert.equal(plan.capability, 'calendar.lookup');
  assert.equal(plan.input.propertyId, 'p-1');
  assert.equal(plan.retryStrategy.maxRetries, 0);
});

test('tool orchestration validates required outputs and normalizes tool results', () => {
  const coordinator = new ToolOrchestrationCoordinator();
  const requirement = {
    capability: 'knowledge.lookup',
    requiredOutputs: ['answer']
  };
  const invalid = coordinator.validateResult(
    {
      toolId: 'knowledge.default',
      capability: 'knowledge.lookup',
      success: true,
      output: {}
    },
    requirement
  );

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /answer/);
});

test('tool orchestration delegates execution and returns telemetry', async () => {
  const registry = new InMemoryToolRegistry([
    {
      toolId: 'knowledge.default',
      capability: 'knowledge.lookup',
      category: TOOL_CATEGORIES.KNOWLEDGE,
      authoritative: true
    }
  ]);
  const toolExecutor = {
    async executeTool(toolCall) {
      return {
        toolId: toolCall.toolId,
        capability: toolCall.capability,
        success: true,
        output: { answer: 'Policy answer' }
      };
    }
  };
  const coordinator = new ToolOrchestrationCoordinator({
    toolRegistry: registry,
    toolExecutor,
    clock: fixedClock()
  });

  const result = await coordinator.orchestrate({
    requirement: {
      capability: 'knowledge.lookup',
      category: TOOL_CATEGORIES.KNOWLEDGE,
      requiredOutputs: ['answer']
    },
    securityContext: { authenticationRequired: false },
    correlationId: 'corr-1'
  });

  assert.equal(result.normalized, true);
  assert.equal(result.output.answer, 'Policy answer');
  assert.equal(result.telemetry.toolId, 'knowledge.default');
  assert.equal(result.telemetry.correlationId, 'corr-1');
  assert.equal(result.telemetry.durationMs, 10);
});

test('tool orchestration reports missing executor explicitly', async () => {
  const coordinator = new ToolOrchestrationCoordinator();

  await assert.rejects(
    () =>
      coordinator.executePlan({
        toolId: 'knowledge.default',
        capability: 'knowledge.lookup',
        input: {},
        retryStrategy: { maxRetries: 0 },
        correlationId: 'corr-1'
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.TOOL_EXECUTOR_MISSING
  );
});

test('tool orchestration coordinator is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const coordinator = provider.getRequiredService('ToolOrchestrationCoordinator');

  assert.ok(coordinator instanceof ToolOrchestrationCoordinator);
  assert.equal(coordinator.describeLifecycle().length, 9);
});

function fixedClock() {
  const instants = [
    new Date('2026-07-18T00:00:00.000Z'),
    new Date('2026-07-18T00:00:00.010Z')
  ];

  return () => instants.shift() ?? new Date('2026-07-18T00:00:00.010Z');
}
