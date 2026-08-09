import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ORCHESTRATOR_ERROR_CODES,
  TOOL_CATEGORIES,
  TOOL_INVOCATION_TELEMETRY_FIELDS,
  TOOL_ORCHESTRATION_STAGES,
  TOOL_SELECTION_PRINCIPLES
} from '../constants.js';
import { OrchestratedToolResult } from '../contracts/orchestrated-tool-result.js';
import { ToolAuthorizationResult } from '../contracts/tool-authorization-result.js';
import { ToolCapabilityRequirement } from '../contracts/tool-capability-requirement.js';
import { ToolExecutionPlan } from '../contracts/tool-execution-plan.js';
import { ToolInvocationTelemetry } from '../contracts/tool-invocation-telemetry.js';
import { ToolOrchestrationStage } from '../contracts/tool-orchestration-stage.js';
import { ToolResultValidationResult } from '../contracts/tool-result-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [TOOL_ORCHESTRATION_STAGES.CAPABILITY_NEEDED, 'Receive a capability requirement from reasoning.'],
  [TOOL_ORCHESTRATION_STAGES.TOOL_DISCOVERY, 'Identify tools that can fulfill the capability.'],
  [TOOL_ORCHESTRATION_STAGES.CAPABILITY_MATCHING, 'Select the most appropriate compatible tool.'],
  [TOOL_ORCHESTRATION_STAGES.AUTHORIZATION, 'Verify permissions, policy, workflow, and security requirements.'],
  [TOOL_ORCHESTRATION_STAGES.EXECUTION_PLAN, 'Prepare inputs, ordering, dependencies, retries, and timeouts.'],
  [TOOL_ORCHESTRATION_STAGES.TOOL_EXECUTION, 'Delegate capability execution to the selected tool.'],
  [TOOL_ORCHESTRATION_STAGES.RESULT_VALIDATION, 'Validate completion, outputs, consistency, compliance, and errors.'],
  [TOOL_ORCHESTRATION_STAGES.NORMALIZATION, 'Normalize provider-specific outputs into an internal representation.'],
  [TOOL_ORCHESTRATION_STAGES.RETURN_RESULT, 'Return validated and normalized results to the orchestrator.']
]);

export class ToolOrchestrationCoordinator {
  constructor({ toolRegistry = undefined, toolExecutor = undefined, clock = () => new Date() } = {}) {
    this.toolRegistry = toolRegistry;
    this.toolExecutor = toolExecutor;
    this.clock = clock;
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(
        ([stage, purpose], index) =>
          new ToolOrchestrationStage({
            sequence: index + 1,
            stage,
            purpose
          })
      )
    );
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  categories() {
    return Object.freeze(Object.values(TOOL_CATEGORIES));
  }

  selectionPrinciples() {
    return Object.freeze(Object.values(TOOL_SELECTION_PRINCIPLES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(TOOL_INVOCATION_TELEMETRY_FIELDS));
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.TOOL_ORCHESTRATION_STAGE_NOT_FOUND,
        `Tool orchestration stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  discoverTools(requirementInput) {
    const requirement = this.#toRequirement(requirementInput);

    if (!this.toolRegistry || typeof this.toolRegistry.findByCapability !== 'function') {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.TOOL_DISCOVERY_FAILED,
        'Tool discovery requires a registry with findByCapability.',
        { capability: requirement.capability }
      );
    }

    return Object.freeze([...this.toolRegistry.findByCapability(requirement.capability)]);
  }

  selectTool(requirementInput, tools = undefined) {
    const requirement = this.#toRequirement(requirementInput);
    const candidates = tools ?? this.discoverTools(requirement);
    const matching = candidates.filter((tool) => this.#isCompatibleTool(requirement, tool));

    if (matching.length === 0) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.TOOL_DISCOVERY_FAILED,
        `No compatible tool is registered for capability "${requirement.capability}".`,
        { capability: requirement.capability }
      );
    }

    return matching.sort(compareToolPreference)[0];
  }

  authorizeExecution({
    requirement,
    tool,
    principalPermissions = [],
    workflowContext = {},
    securityContext = {}
  }) {
    const capabilityRequirement = this.#toRequirement(requirement);
    const grantedPermissions = new Set(principalPermissions);
    const errors = [];
    const requiredPermissions = Object.freeze([
      ...capabilityRequirement.requiredPermissions,
      ...(tool.requiredPermissions ?? [])
    ]);

    for (const permission of requiredPermissions) {
      if (!grantedPermissions.has(permission)) {
        errors.push(`Missing required permission: ${permission}.`);
      }
    }

    if (tool.policyRestricted === true) {
      errors.push(`Tool ${tool.toolId} is restricted by platform policy.`);
    }

    if (workflowContext.blockToolExecution === true) {
      errors.push('Workflow context blocks tool execution.');
    }

    if (securityContext.authenticationRequired === true && securityContext.authenticated !== true) {
      errors.push('Authenticated security context is required for tool execution.');
    }

    return new ToolAuthorizationResult({
      isAuthorized: errors.length === 0,
      errors
    });
  }

  createExecutionPlan({
    requirement,
    tool,
    correlationId,
    input = undefined,
    executionOrder = 1,
    dependencies = [],
    retryStrategy = { maxRetries: 0 },
    timeoutPolicy = { timeoutMs: 30000 },
    metadata = {}
  }) {
    const capabilityRequirement = this.#toRequirement(requirement);

    return new ToolExecutionPlan({
      toolId: tool.toolId,
      capability: capabilityRequirement.capability,
      category: capabilityRequirement.category ?? tool.category,
      input: input ?? capabilityRequirement.input,
      executionOrder,
      dependencies,
      retryStrategy,
      timeoutPolicy,
      correlationId,
      metadata: {
        version: tool.version,
        authoritative: tool.authoritative === true,
        ...metadata
      }
    });
  }

  async executePlan(plan) {
    if (!this.toolExecutor || typeof this.toolExecutor.executeTool !== 'function') {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.TOOL_EXECUTOR_MISSING,
        'Tool execution requires an executor with executeTool.',
        { toolId: plan.toolId, capability: plan.capability }
      );
    }

    const started = this.clock();
    let rawResult;

    try {
      rawResult = await this.toolExecutor.executeTool({
        toolId: plan.toolId,
        capability: plan.capability,
        input: plan.input,
        correlationId: plan.correlationId
      });
    } catch (error) {
      rawResult = {
        toolId: plan.toolId,
        capability: plan.capability,
        success: false,
        output: {},
        error
      };
    }

    const ended = this.clock();
    const telemetry = new ToolInvocationTelemetry({
      toolId: plan.toolId,
      capabilityRequested: plan.capability,
      startedAt: started.toISOString(),
      endedAt: ended.toISOString(),
      durationMs: Math.max(0, ended.getTime() - started.getTime()),
      success: rawResult.success === true,
      retryCount: plan.retryStrategy.maxRetries === 0 ? 0 : plan.retryStrategy.retryCount ?? 0,
      correlationId: plan.correlationId
    });

    return this.normalizeResult(rawResult, telemetry);
  }

  validateResult(result, requirementInput) {
    const requirement = this.#toRequirement(requirementInput);
    const errors = [];

    if (result.success !== true) {
      errors.push('Tool execution did not complete successfully.');
    }

    for (const outputName of requirement.requiredOutputs) {
      if (result.output?.[outputName] === undefined || result.output?.[outputName] === null) {
        errors.push(`Tool result is missing required output: ${outputName}.`);
      }
    }

    return new ToolResultValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }

  normalizeResult(result, telemetry) {
    return new OrchestratedToolResult({
      toolId: result.toolId,
      capability: result.capability,
      success: result.success,
      output: result.output ?? {},
      error: result.error,
      telemetry,
      normalized: true
    });
  }

  async orchestrate({
    requirement,
    principalPermissions = [],
    workflowContext = {},
    securityContext = {},
    correlationId
  }) {
    const capabilityRequirement = this.#toRequirement(requirement);
    const tools = this.discoverTools(capabilityRequirement);
    const tool = this.selectTool(capabilityRequirement, tools);
    const authorization = this.authorizeExecution({
      requirement: capabilityRequirement,
      tool,
      principalPermissions,
      workflowContext,
      securityContext
    });

    if (!authorization.isAuthorized) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.TOOL_AUTHORIZATION_DENIED,
        'Tool execution was rejected before invocation.',
        { errors: authorization.errors }
      );
    }

    const plan = this.createExecutionPlan({
      requirement: capabilityRequirement,
      tool,
      correlationId
    });
    const result = await this.executePlan(plan);
    const validation = this.validateResult(result, capabilityRequirement);

    if (!validation.isValid) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.TOOL_RESULT_INVALID,
        'Tool result failed orchestration validation.',
        { errors: validation.errors }
      );
    }

    return result;
  }

  #toRequirement(requirementInput) {
    return requirementInput instanceof ToolCapabilityRequirement
      ? requirementInput
      : new ToolCapabilityRequirement(requirementInput);
  }

  #isCompatibleTool(requirement, tool) {
    if (tool.capability !== requirement.capability) {
      return false;
    }

    if (tool.available === false || tool.healthy === false) {
      return false;
    }

    if (requirement.category && tool.category && tool.category !== requirement.category) {
      return false;
    }

    if (requirement.requiredVersion && tool.version && tool.version !== requirement.requiredVersion) {
      return false;
    }

    return true;
  }
}

function compareToolPreference(left, right) {
  return scoreTool(right) - scoreTool(left);
}

function scoreTool(tool) {
  return [
    tool.authoritative === true,
    tool.stable !== false,
    tool.observable !== false,
    tool.deterministic !== false,
    tool.policyCompliant !== false
  ].filter(Boolean).length;
}
