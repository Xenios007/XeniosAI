import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AGENT_CONTEXT_TYPES,
  AGENT_COORDINATION_STAGES,
  AGENT_COORDINATION_STRATEGIES,
  AGENT_ROLES,
  AGENT_TELEMETRY_FIELDS,
  CONTEXT_LAYERS,
  AgentCoordinationCoordinator,
  AgentOutput,
  ORCHESTRATOR_ERROR_CODES,
  addAiOrchestrator
} from '../../src/orchestrator/index.js';

test('agent coordination exposes the canonical ARCH-004-08 coordination model', () => {
  const coordinator = new AgentCoordinationCoordinator();

  assert.deepEqual(coordinator.canonicalStageNames(), [
    AGENT_COORDINATION_STAGES.USER_REQUEST,
    AGENT_COORDINATION_STAGES.AI_ORCHESTRATOR,
    AGENT_COORDINATION_STAGES.AGENT_SELECTION,
    AGENT_COORDINATION_STAGES.AGENT_EXECUTION,
    AGENT_COORDINATION_STAGES.RESULT_AGGREGATION,
    AGENT_COORDINATION_STAGES.VALIDATION,
    AGENT_COORDINATION_STAGES.RESPONSE_COMPOSITION
  ]);
});

test('agent coordination exposes documented roles, strategies, and telemetry fields', () => {
  const coordinator = new AgentCoordinationCoordinator();

  assert.ok(coordinator.roles().includes(AGENT_ROLES.PLANNER));
  assert.ok(coordinator.roles().includes(AGENT_ROLES.RESPONSE));
  assert.ok(coordinator.strategies().includes(AGENT_COORDINATION_STRATEGIES.COLLABORATIVE));
  assert.ok(coordinator.telemetryFields().includes(AGENT_TELEMETRY_FIELDS.DECISION_HISTORY));
  assert.equal(coordinator.getStage(AGENT_COORDINATION_STAGES.AGENT_SELECTION).sequence, 3);
});

test('agent coordination selects agents by orchestrator-owned capability requirements', () => {
  const coordinator = new AgentCoordinationCoordinator();
  const assignments = coordinator.selectAgents({
    requestId: 'req-1',
    correlationId: 'corr-1',
    requiredCapabilities: ['planning', 'knowledge.lookup'],
    context: {
      [CONTEXT_LAYERS.USER_REQUEST]: 'Need a booking plan.',
      [CONTEXT_LAYERS.KNOWLEDGE]: 'Policy facts.',
      [CONTEXT_LAYERS.MEMORY]: 'Private memory.'
    }
  });

  assert.deepEqual(
    assignments.map((assignment) => assignment.role),
    [AGENT_ROLES.PLANNER, AGENT_ROLES.KNOWLEDGE]
  );
  assert.equal(assignments[1].context[CONTEXT_LAYERS.KNOWLEDGE], 'Policy facts.');
  assert.equal(assignments[1].context[CONTEXT_LAYERS.MEMORY], undefined);
});

test('agent coordination rejects unregistered capability selection', () => {
  const coordinator = new AgentCoordinationCoordinator();

  assert.throws(
    () =>
      coordinator.selectAgents({
        requestId: 'req-1',
        correlationId: 'corr-1',
        requiredCapabilities: ['unknown.capability']
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.AGENT_SELECTION_INVALID
  );
});

test('agent coordination determines parallel or sequential strategy deterministically', () => {
  const coordinator = new AgentCoordinationCoordinator({
    agents: [
      {
        agentId: 'first',
        role: AGENT_ROLES.PLANNER,
        responsibility: 'Plan.',
        capabilities: ['planning'],
        allowedContext: [AGENT_CONTEXT_TYPES.REQUEST]
      },
      {
        agentId: 'second',
        role: AGENT_ROLES.VALIDATION,
        responsibility: 'Validate.',
        capabilities: ['validation.review'],
        allowedContext: [AGENT_CONTEXT_TYPES.EXECUTION],
        dependencies: ['first']
      }
    ]
  });
  const request = {
    requestId: 'req-1',
    correlationId: 'corr-1',
    requiredCapabilities: ['planning', 'validation.review']
  };
  const assignments = coordinator.selectAgents(request);

  assert.equal(coordinator.determineStrategy(request, assignments), AGENT_COORDINATION_STRATEGIES.SEQUENTIAL);
});

test('agent coordination aggregates conflicting outputs without granting final authority to agents', () => {
  const coordinator = new AgentCoordinationCoordinator();
  const aggregation = coordinator.aggregateResults([
    new AgentOutput({
      agentId: 'memory.default',
      role: AGENT_ROLES.MEMORY,
      output: { fact: 'Old policy.' },
      confidence: 0.9,
      metadata: { conflictKey: 'policy' }
    }),
    new AgentOutput({
      agentId: 'knowledge.default',
      role: AGENT_ROLES.KNOWLEDGE,
      output: { fact: 'Verified policy.' },
      confidence: 0.8,
      metadata: { conflictKey: 'policy' }
    })
  ]);

  assert.equal(aggregation.aggregatedOutputs.length, 1);
  assert.equal(aggregation.aggregatedOutputs[0].agentId, 'knowledge.default');
  assert.equal(aggregation.conflicts[0].selectedAgentId, 'knowledge.default');
});

test('agent coordination validates outputs for assignment and Decision Engine boundaries', () => {
  const coordinator = new AgentCoordinationCoordinator();
  const assignments = coordinator.selectAgents({
    requestId: 'req-1',
    correlationId: 'corr-1',
    requiredCapabilities: ['planning']
  });
  const validation = coordinator.validateOutputs(assignments, [
    {
      agentId: 'rogue.agent',
      role: AGENT_ROLES.PLANNER,
      output: {},
      metadata: { bypassedDecisionEngine: true, ownsBusinessDomain: true }
    }
  ]);

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /not assigned/);
  assert.match(validation.errors.join('\n'), /Decision Engine/);
  assert.match(validation.errors.join('\n'), /business domain/);
});

test('agent coordination coordinates selected agents and records observability telemetry', () => {
  const coordinator = new AgentCoordinationCoordinator({ clock: fixedClock() });
  const result = coordinator.coordinate({
    request: {
      requestId: 'req-1',
      correlationId: 'corr-1',
      requiredCapabilities: ['planning', 'validation.review'],
      decisionHistory: ['decision-1'],
      context: {
        [CONTEXT_LAYERS.USER_REQUEST]: 'Plan booking.',
        [CONTEXT_LAYERS.EXECUTION]: 'Prior result.'
      }
    },
    outputs: [
      {
        agentId: 'planner.default',
        role: AGENT_ROLES.PLANNER,
        output: { plan: 'Use booking service.' },
        confidence: 0.8
      },
      {
        agentId: 'validation.default',
        role: AGENT_ROLES.VALIDATION,
        output: { valid: true },
        confidence: 0.9
      }
    ]
  });

  assert.deepEqual(result.telemetry.participatingAgents, ['planner.default', 'validation.default']);
  assert.equal(result.telemetry.executionDurationMs, 10);
  assert.deepEqual(result.telemetry.decisionHistory, ['decision-1']);
  assert.equal(result.aggregatedOutputs.length, 2);
});

test('agent coordination rejects invalid outputs during coordination', () => {
  const coordinator = new AgentCoordinationCoordinator();

  assert.throws(
    () =>
      coordinator.coordinate({
        request: {
          requestId: 'req-1',
          correlationId: 'corr-1',
          requiredCapabilities: ['planning']
        },
        outputs: [
          {
            agentId: 'planner.default',
            role: AGENT_ROLES.PLANNER,
            output: {},
            metadata: { bypassedDecisionEngine: true }
          }
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === ORCHESTRATOR_ERROR_CODES.AGENT_OUTPUT_INVALID
  );
});

test('agent coordination coordinator is available through DI registration', () => {
  const services = new ServiceCollection();

  addAiOrchestrator(services);
  const provider = services.buildServiceProvider();
  const coordinator = provider.getRequiredService('AgentCoordinationCoordinator');

  assert.ok(coordinator instanceof AgentCoordinationCoordinator);
  assert.equal(coordinator.describeModel().length, 7);
});

function fixedClock() {
  const instants = [
    new Date('2026-07-18T00:00:00.000Z'),
    new Date('2026-07-18T00:00:00.010Z')
  ];

  return () => instants.shift() ?? new Date('2026-07-18T00:00:00.010Z');
}
