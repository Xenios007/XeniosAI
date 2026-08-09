import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGENT_CONTEXT_TYPES,
  AGENT_COORDINATION_STAGES,
  AGENT_COORDINATION_STRATEGIES,
  AGENT_ROLES,
  AGENT_TELEMETRY_FIELDS,
  CONTEXT_LAYERS,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { AgentAssignment } from '../contracts/agent-assignment.js';
import { AgentCoordinationRequest } from '../contracts/agent-coordination-request.js';
import { AgentCoordinationResult } from '../contracts/agent-coordination-result.js';
import { AgentCoordinationStage } from '../contracts/agent-coordination-stage.js';
import { AgentCoordinationTelemetry } from '../contracts/agent-coordination-telemetry.js';
import { AgentCoordinationValidationResult } from '../contracts/agent-coordination-validation-result.js';
import { AgentDescriptor } from '../contracts/agent-descriptor.js';
import { AgentOutput } from '../contracts/agent-output.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [AGENT_COORDINATION_STAGES.USER_REQUEST, 'Receive the request under central orchestration.'],
  [AGENT_COORDINATION_STAGES.AI_ORCHESTRATOR, 'Maintain orchestration authority and execution state.'],
  [AGENT_COORDINATION_STAGES.AGENT_SELECTION, 'Select agents, execution order, dependencies, and termination conditions.'],
  [AGENT_COORDINATION_STAGES.AGENT_EXECUTION, 'Coordinate sequential or parallel agent execution.'],
  [AGENT_COORDINATION_STAGES.RESULT_AGGREGATION, 'Aggregate structured agent outputs.'],
  [AGENT_COORDINATION_STAGES.VALIDATION, 'Validate outputs and policy compliance.'],
  [AGENT_COORDINATION_STAGES.RESPONSE_COMPOSITION, 'Pass validated outputs toward response composition.']
]);

const DEFAULT_AGENTS = Object.freeze([
  descriptor('planner.default', AGENT_ROLES.PLANNER, 'Goal decomposition, task sequencing, and execution planning.', ['planning'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.SESSION, AGENT_CONTEXT_TYPES.EXECUTION]),
  descriptor('research.default', AGENT_ROLES.RESEARCH, 'External information gathering, source evaluation, and research summarization.', ['research'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.KNOWLEDGE]),
  descriptor('knowledge.default', AGENT_ROLES.KNOWLEDGE, 'Knowledge retrieval, policy lookup, and documentation search.', ['knowledge.lookup'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.KNOWLEDGE]),
  descriptor('memory.default', AGENT_ROLES.MEMORY, 'Memory retrieval, ranking, and summarization coordination.', ['memory.retrieve'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.MEMORY]),
  descriptor('booking.default', AGENT_ROLES.BOOKING, 'Booking-related reasoning and booking execution plan preparation.', ['booking.plan'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.SESSION, AGENT_CONTEXT_TYPES.MEMORY]),
  descriptor('pricing.default', AGENT_ROLES.PRICING, 'Pricing-related execution plan preparation and pricing request coordination.', ['pricing.plan'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.BUSINESS]),
  descriptor('workflow.default', AGENT_ROLES.WORKFLOW, 'Long-running workflow coordination and progress monitoring.', ['workflow.coordinate'], [AGENT_CONTEXT_TYPES.SESSION, AGENT_CONTEXT_TYPES.EXECUTION]),
  descriptor('validation.default', AGENT_ROLES.VALIDATION, 'Consistency checks, output verification, and policy compliance review.', ['validation.review'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.KNOWLEDGE, AGENT_CONTEXT_TYPES.EXECUTION]),
  descriptor('response.default', AGENT_ROLES.RESPONSE, 'Final response structuring and communication quality.', ['response.compose'], [AGENT_CONTEXT_TYPES.REQUEST, AGENT_CONTEXT_TYPES.KNOWLEDGE, AGENT_CONTEXT_TYPES.EXECUTION])
]);

export class AgentCoordinationCoordinator {
  constructor({ agents = DEFAULT_AGENTS, clock = () => new Date() } = {}) {
    this.agents = Object.freeze(agents.map((agent) => this.#toDescriptor(agent)));
    this.clock = clock;
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, purpose], index) =>
        new AgentCoordinationStage({ sequence: index + 1, stage, purpose })
      )
    );
  }

  describeModel() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  roles() {
    return Object.freeze(Object.values(AGENT_ROLES));
  }

  strategies() {
    return Object.freeze(Object.values(AGENT_COORDINATION_STRATEGIES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(AGENT_TELEMETRY_FIELDS));
  }

  listAgents() {
    return this.agents;
  }

  getStage(stage) {
    const coordinationStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!coordinationStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.AGENT_COORDINATION_STAGE_NOT_FOUND,
        `Agent coordination stage is not defined: ${stage}`,
        { stage }
      );
    }

    return coordinationStage;
  }

  selectAgents(requestInput) {
    const request = this.#toRequest(requestInput);
    const assignments = [];

    for (const capability of request.requiredCapabilities) {
      const agent = this.agents.find((candidate) => candidate.capabilities.includes(capability));

      if (!agent) {
        throw new PlatformError(
          ORCHESTRATOR_ERROR_CODES.AGENT_SELECTION_INVALID,
          `No agent is available for capability "${capability}".`,
          { capability }
        );
      }

      if (!assignments.some((assignment) => assignment.agentId === agent.agentId)) {
        assignments.push(this.#toAssignment(agent, request, assignments.length + 1));
      }
    }

    return Object.freeze(assignments);
  }

  determineStrategy(requestInput, assignments) {
    const request = this.#toRequest(requestInput);

    if (request.strategy) {
      return request.strategy;
    }

    return assignments.some((assignment) => assignment.dependencies.length > 0)
      ? AGENT_COORDINATION_STRATEGIES.SEQUENTIAL
      : AGENT_COORDINATION_STRATEGIES.PARALLEL;
  }

  aggregateResults(outputs) {
    const aggregated = [];
    const conflicts = [];
    const byKey = new Map();

    for (const outputInput of outputs) {
      const output = this.#toOutput(outputInput);
      const conflictKey = output.metadata.conflictKey ?? `${output.role}:${JSON.stringify(output.output)}`;
      const existing = byKey.get(conflictKey);

      if (!existing) {
        byKey.set(conflictKey, output);
        continue;
      }

      const winner = compareAgentOutputs(output, existing) >= 0 ? output : existing;
      const loser = winner === output ? existing : output;
      byKey.set(conflictKey, winner);
      conflicts.push({ conflictKey, selectedAgentId: winner.agentId, rejectedAgentId: loser.agentId });
    }

    aggregated.push(...byKey.values());
    return Object.freeze({ aggregatedOutputs: Object.freeze(aggregated), conflicts: Object.freeze(conflicts) });
  }

  validateOutputs(assignments, outputs) {
    const errors = [];
    const assignmentIds = new Set(assignments.map((assignment) => assignment.agentId));

    for (const outputInput of outputs) {
      const output = this.#toOutput(outputInput);

      if (!assignmentIds.has(output.agentId)) {
        errors.push(`Agent output was not assigned by orchestrator: ${output.agentId}.`);
      }

      if (output.metadata.bypassedDecisionEngine === true) {
        errors.push(`Agent ${output.agentId} attempted to bypass the Decision Engine.`);
      }

      if (output.metadata.ownsBusinessDomain === true) {
        errors.push(`Agent ${output.agentId} attempted to own a business domain.`);
      }
    }

    return new AgentCoordinationValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  coordinate({ request, outputs = [] }) {
    const coordinationRequest = this.#toRequest(request);
    const started = this.clock();
    const assignments = this.selectAgents(coordinationRequest);
    const strategy = this.determineStrategy(coordinationRequest, assignments);
    const aggregation = this.aggregateResults(outputs);
    const validation = this.validateOutputs(assignments, aggregation.aggregatedOutputs);
    const ended = this.clock();

    const telemetry = new AgentCoordinationTelemetry({
      participatingAgents: assignments.map((assignment) => assignment.agentId),
      executionOrder: assignments.map((assignment) => assignment.executionOrder),
      executionDurationMs: Math.max(0, ended.getTime() - started.getTime()),
      inputs: { requiredCapabilities: coordinationRequest.requiredCapabilities, strategy },
      outputs: { outputCount: aggregation.aggregatedOutputs.length },
      failures: validation.errors,
      correlationId: coordinationRequest.correlationId,
      decisionHistory: coordinationRequest.decisionHistory
    });

    if (!validation.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.AGENT_OUTPUT_INVALID,
        'Agent outputs failed orchestration validation.',
        { errors: validation.errors }
      );
    }

    return new AgentCoordinationResult({
      assignments,
      aggregatedOutputs: aggregation.aggregatedOutputs,
      conflicts: aggregation.conflicts,
      validationErrors: validation.errors,
      telemetry,
      correlationId: coordinationRequest.correlationId
    });
  }

  #toAssignment(agent, request, executionOrder) {
    return new AgentAssignment({
      agentId: agent.agentId,
      role: agent.role,
      capabilities: agent.capabilities.filter((capability) => request.requiredCapabilities.includes(capability)),
      executionOrder,
      dependencies: agent.dependencies,
      context: filterContextForAgent(request.context, agent.allowedContext),
      critical: agent.critical
    });
  }

  #toDescriptor(agentInput) {
    return agentInput instanceof AgentDescriptor ? agentInput : new AgentDescriptor(agentInput);
  }

  #toRequest(requestInput) {
    return requestInput instanceof AgentCoordinationRequest
      ? requestInput
      : new AgentCoordinationRequest(requestInput);
  }

  #toOutput(outputInput) {
    return outputInput instanceof AgentOutput ? outputInput : new AgentOutput(outputInput);
  }
}

function descriptor(agentId, role, responsibility, capabilities, allowedContext) {
  return new AgentDescriptor({ agentId, role, responsibility, capabilities, allowedContext });
}

function filterContextForAgent(context, allowedContext) {
  const layerMap = new Map([
    [AGENT_CONTEXT_TYPES.REQUEST, CONTEXT_LAYERS.USER_REQUEST],
    [AGENT_CONTEXT_TYPES.SESSION, CONTEXT_LAYERS.SESSION],
    [AGENT_CONTEXT_TYPES.MEMORY, CONTEXT_LAYERS.MEMORY],
    [AGENT_CONTEXT_TYPES.KNOWLEDGE, CONTEXT_LAYERS.KNOWLEDGE],
    [AGENT_CONTEXT_TYPES.EXECUTION, CONTEXT_LAYERS.EXECUTION],
    [AGENT_CONTEXT_TYPES.BUSINESS, CONTEXT_LAYERS.BUSINESS]
  ]);
  const allowedLayers = new Set(allowedContext.map((type) => layerMap.get(type) ?? type));

  return Object.freeze(
    Object.fromEntries(
      Object.entries(context).filter(([layer]) => allowedLayers.has(layer))
    )
  );
}

function compareAgentOutputs(left, right) {
  const leftScore = outputScore(left);
  const rightScore = outputScore(right);

  if (leftScore === rightScore) {
    return rolePriority(right.role) - rolePriority(left.role);
  }

  return leftScore - rightScore;
}

function outputScore(output) {
  return output.confidence + (authoritativeRole(output.role) ? 0.2 : 0);
}

function authoritativeRole(role) {
  return role === AGENT_ROLES.KNOWLEDGE || role === AGENT_ROLES.VALIDATION;
}

function rolePriority(role) {
  const priority = [
    AGENT_ROLES.VALIDATION,
    AGENT_ROLES.KNOWLEDGE,
    AGENT_ROLES.PLANNER,
    AGENT_ROLES.WORKFLOW,
    AGENT_ROLES.PRICING,
    AGENT_ROLES.BOOKING,
    AGENT_ROLES.MEMORY,
    AGENT_ROLES.RESEARCH,
    AGENT_ROLES.RESPONSE
  ];
  const index = priority.indexOf(role);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}
