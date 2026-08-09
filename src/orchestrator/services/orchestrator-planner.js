import {
  ORCHESTRATION_DECISIONS,
  ORCHESTRATION_STAGES,
  ORCHESTRATOR_COMPONENTS,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { OrchestrationPlan } from '../contracts/orchestration-plan.js';
import { OrchestrationPlanStep } from '../contracts/orchestration-plan-step.js';
import { OrchestratorRequest } from '../contracts/orchestrator-request.js';

export class OrchestratorPlanner {
  constructor({ boundaryPolicy, componentRegistry }) {
    this.boundaryPolicy = boundaryPolicy;
    this.componentRegistry = componentRegistry;
  }

  createPlan(requestInput) {
    const request = requestInput instanceof OrchestratorRequest
      ? requestInput
      : new OrchestratorRequest(requestInput);

    if (!request.requestId || !request.correlationId || !request.userInput) {
      throw new Error(`${ORCHESTRATOR_ERROR_CODES.INVALID_COORDINATION_REQUEST}: requestId, correlationId, and userInput are required.`);
    }

    for (const responsibility of [
      'request coordination',
      'execution planning',
      'context assembly',
      'tool selection',
      'business service orchestration',
      'response synthesis'
    ]) {
      this.boundaryPolicy.assertResponsibilityAllowed(responsibility);
    }

    const steps = [
      step(1, ORCHESTRATION_STAGES.RECEIVE_REQUEST, ORCHESTRATOR_COMPONENTS.ORCHESTRATOR, 'Receive and normalize the coordination request.'),
      step(2, ORCHESTRATION_STAGES.UNDERSTAND_INTENT, ORCHESTRATOR_COMPONENTS.REASONING_ENGINE, 'Coordinate intent understanding.'),
      step(3, ORCHESTRATION_STAGES.BUILD_CONTEXT, ORCHESTRATOR_COMPONENTS.MEMORY_SYSTEM, 'Coordinate memory retrieval.', false),
      step(4, ORCHESTRATION_STAGES.BUILD_CONTEXT, ORCHESTRATOR_COMPONENTS.KNOWLEDGE_SERVICE, 'Coordinate authoritative knowledge retrieval.', false),
      step(5, ORCHESTRATION_STAGES.DETERMINE_PLAN, ORCHESTRATOR_COMPONENTS.ORCHESTRATOR, 'Determine the execution plan.'),
      step(6, ORCHESTRATION_STAGES.EXECUTE_CAPABILITIES, ORCHESTRATOR_COMPONENTS.TOOL_ORCHESTRATOR, 'Coordinate capability execution.'),
      step(7, ORCHESTRATION_STAGES.EXECUTE_CAPABILITIES, ORCHESTRATOR_COMPONENTS.BUSINESS_SERVICES, 'Invoke authoritative business services through tools.', false),
      step(8, ORCHESTRATION_STAGES.EXECUTE_CAPABILITIES, ORCHESTRATOR_COMPONENTS.WORKFLOW_ENGINE, 'Coordinate multi-step workflow continuation.', false),
      step(9, ORCHESTRATION_STAGES.VALIDATE_RESULTS, ORCHESTRATOR_COMPONENTS.ORCHESTRATOR, 'Validate that required orchestration results are present.'),
      step(10, ORCHESTRATION_STAGES.COMPOSE_RESPONSE, ORCHESTRATOR_COMPONENTS.RESPONSE_COMPOSER, 'Coordinate final response synthesis.'),
      step(11, ORCHESTRATION_STAGES.RETURN_RESPONSE, ORCHESTRATOR_COMPONENTS.ORCHESTRATOR, 'Return the coordinated response.')
    ];

    for (const planStep of steps) {
      if (planStep.component !== ORCHESTRATOR_COMPONENTS.ORCHESTRATOR) {
        this.componentRegistry.getComponent(planStep.component);
      }
    }

    return new OrchestrationPlan({
      requestId: request.requestId,
      correlationId: request.correlationId,
      steps,
      decisions: this.#deriveDecisions(request),
      metadata: {
        stateless: true,
        requestedCapabilityCount: request.requestedCapabilities.length
      }
    });
  }

  #deriveDecisions(request) {
    const decisions = [
      ORCHESTRATION_DECISIONS.CONSULT_MEMORY,
      ORCHESTRATION_DECISIONS.RETRIEVE_KNOWLEDGE
    ];

    if (request.requestedCapabilities.length > 0) {
      decisions.push(ORCHESTRATION_DECISIONS.SELECT_TOOLS);
      decisions.push(ORCHESTRATION_DECISIONS.INVOKE_BUSINESS_SERVICE);
    }

    if (request.metadata.workflowContinuation === true) {
      decisions.push(ORCHESTRATION_DECISIONS.CONTINUE_WORKFLOW);
    }

    decisions.push(ORCHESTRATION_DECISIONS.STOP_EXECUTION);
    return Object.freeze(decisions);
  }
}

function step(sequence, stage, component, description, required = true) {
  return new OrchestrationPlanStep({
    sequence,
    stage,
    component,
    description,
    required
  });
}
