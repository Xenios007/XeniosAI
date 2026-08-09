import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DECISION_ENGINE_GATES,
  DECISION_FAILURE_CLASSIFICATIONS,
  DECISION_RECORD_FIELDS,
  EXECUTION_DECISION_OUTCOMES,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { DecisionGateResult } from '../contracts/decision-gate-result.js';
import { DecisionRecord } from '../contracts/decision-record.js';
import { OrchestrationProposal } from '../contracts/orchestration-proposal.js';
import { OrchestratorExecutionDecision } from '../contracts/orchestrator-execution-decision.js';

const DEFAULT_CONFIDENCE_THRESHOLD = 0.55;

const CANONICAL_GATE_DEFINITIONS = Object.freeze([
  [DECISION_ENGINE_GATES.INTENT, 'Verify the objective is identified with sufficient confidence.'],
  [DECISION_ENGINE_GATES.CONTEXT, 'Verify adequate context exists for the proposal.'],
  [DECISION_ENGINE_GATES.POLICY, 'Evaluate platform, privacy, safety, business, and compliance policies.'],
  [DECISION_ENGINE_GATES.CAPABILITY, 'Verify required platform capabilities exist and are compatible.'],
  [DECISION_ENGINE_GATES.AUTHORIZATION, 'Confirm user, role, permission, business, and workflow authorization.'],
  [DECISION_ENGINE_GATES.CONFIDENCE, 'Ensure confidence is sufficient before execution proceeds.'],
  [DECISION_ENGINE_GATES.EXECUTION_DECISION, 'Produce a structured execution outcome.']
]);

export class DecisionEngineAuthority {
  constructor({ confidenceThreshold = DEFAULT_CONFIDENCE_THRESHOLD, clock = () => new Date() } = {}) {
    this.confidenceThreshold = confidenceThreshold;
    this.clock = clock;
    this.gates = Object.freeze(
      CANONICAL_GATE_DEFINITIONS.map(([gate, purpose], index) =>
        Object.freeze({
          sequence: index + 1,
          gate,
          purpose
        })
      )
    );
  }

  describePipeline() {
    return this.gates;
  }

  canonicalGateNames() {
    return Object.freeze(this.gates.map((gate) => gate.gate));
  }

  outcomes() {
    return Object.freeze(Object.values(EXECUTION_DECISION_OUTCOMES));
  }

  failureClassifications() {
    return Object.freeze(Object.values(DECISION_FAILURE_CLASSIFICATIONS));
  }

  decisionRecordFields() {
    return Object.freeze(Object.values(DECISION_RECORD_FIELDS));
  }

  getGate(gate) {
    const decisionGate = this.gates.find((candidate) => candidate.gate === gate);

    if (!decisionGate) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.DECISION_GATE_NOT_FOUND,
        `Decision engine gate is not defined: ${gate}`,
        { gate }
      );
    }

    return decisionGate;
  }

  evaluate(proposalInput) {
    const proposal = this.#toProposal(proposalInput);
    this.#assertValidProposal(proposal);

    const gateResults = [
      this.#evaluateIntentGate(proposal),
      this.#evaluateContextGate(proposal),
      this.#evaluatePolicyGate(proposal),
      this.#evaluateCapabilityGate(proposal),
      this.#evaluateAuthorizationGate(proposal),
      this.#evaluateConfidenceGate(proposal)
    ];
    const firstFailure = gateResults.find((gate) => gate.passed === false);
    const decisionGate = this.#buildExecutionDecisionGate(proposal, firstFailure);
    const allGateResults = Object.freeze([...gateResults, decisionGate]);
    const timestamp = this.clock().toISOString();
    const outcome = firstFailure
      ? decisionGate.reasons[0]
      : this.#authorizedOutcome(proposal);

    return new OrchestratorExecutionDecision({
      decisionId: `${proposal.proposalId ?? proposal.correlationId}:${timestamp}`,
      proposalId: proposal.proposalId,
      correlationId: proposal.correlationId,
      outcome,
      authorized: firstFailure === undefined,
      failureClassification: firstFailure?.failureClassification,
      reasons: allGateResults.flatMap((gate) => gate.reasons),
      gateResults: allGateResults,
      timestamp
    });
  }

  createDecisionRecord(proposalInput, decision) {
    const proposal = this.#toProposal(proposalInput);

    return new DecisionRecord({
      intentDetected: proposal.intent,
      contextEvaluated: Object.keys(proposal.context),
      policiesApplied: proposal.policies.map((policy) => policy.policyId ?? policy.name ?? String(policy)),
      gatesPassed: decision.gateResults.filter((gate) => gate.passed).map((gate) => gate.gate),
      gatesFailed: decision.gateResults.filter((gate) => !gate.passed).map((gate) => gate.gate),
      finalDecision: decision.outcome,
      timestamp: decision.timestamp,
      correlationId: proposal.correlationId
    });
  }

  #evaluateIntentGate(proposal) {
    if (proposal.requiresClarification === true) {
      return failedGate(
        DECISION_ENGINE_GATES.INTENT,
        'Intent requires clarification.',
        DECISION_FAILURE_CLASSIFICATIONS.LOW_CONFIDENCE
      );
    }

    if (!proposal.intent || proposal.goals.length === 0 || proposal.intentConfidence < this.confidenceThreshold) {
      return failedGate(
        DECISION_ENGINE_GATES.INTENT,
        'Intent or goal confidence is insufficient.',
        DECISION_FAILURE_CLASSIFICATIONS.LOW_CONFIDENCE
      );
    }

    return passedGate(DECISION_ENGINE_GATES.INTENT, 'Intent gate passed.');
  }

  #evaluateContextGate(proposal) {
    if (proposal.context.complete === false || proposal.context.missing?.length > 0) {
      return failedGate(
        DECISION_ENGINE_GATES.CONTEXT,
        'Required context is missing.',
        DECISION_FAILURE_CLASSIFICATIONS.MISSING_CONTEXT
      );
    }

    return passedGate(DECISION_ENGINE_GATES.CONTEXT, 'Context gate passed.');
  }

  #evaluatePolicyGate(proposal) {
    const failedPolicy = proposal.policies.find((policy) => policy.passed === false || policy.allowed === false);

    if (failedPolicy) {
      return failedGate(
        DECISION_ENGINE_GATES.POLICY,
        `Policy gate failed: ${failedPolicy.policyId ?? failedPolicy.name ?? 'policy'}.`,
        DECISION_FAILURE_CLASSIFICATIONS.POLICY_VIOLATION
      );
    }

    return passedGate(DECISION_ENGINE_GATES.POLICY, 'Policy gate passed.');
  }

  #evaluateCapabilityGate(proposal) {
    const available = new Set(proposal.availableCapabilities);
    const missing = proposal.requiredCapabilities.filter((capability) => !available.has(capability));

    if (missing.length > 0) {
      return failedGate(
        DECISION_ENGINE_GATES.CAPABILITY,
        `Required capabilities are unavailable: ${missing.join(', ')}.`,
        DECISION_FAILURE_CLASSIFICATIONS.CAPABILITY_UNAVAILABLE
      );
    }

    return passedGate(DECISION_ENGINE_GATES.CAPABILITY, 'Capability gate passed.');
  }

  #evaluateAuthorizationGate(proposal) {
    if (proposal.authorization.authorized === false || proposal.authorization.allowed === false) {
      return failedGate(
        DECISION_ENGINE_GATES.AUTHORIZATION,
        'Authorization gate failed.',
        DECISION_FAILURE_CLASSIFICATIONS.AUTHORIZATION_FAILURE
      );
    }

    return passedGate(DECISION_ENGINE_GATES.AUTHORIZATION, 'Authorization gate passed.');
  }

  #evaluateConfidenceGate(proposal) {
    if (proposal.confidence < this.confidenceThreshold) {
      return failedGate(
        DECISION_ENGINE_GATES.CONFIDENCE,
        'Execution confidence is below threshold.',
        DECISION_FAILURE_CLASSIFICATIONS.LOW_CONFIDENCE
      );
    }

    return passedGate(DECISION_ENGINE_GATES.CONFIDENCE, 'Confidence gate passed.');
  }

  #buildExecutionDecisionGate(proposal, firstFailure) {
    if (!firstFailure) {
      return passedGate(DECISION_ENGINE_GATES.EXECUTION_DECISION, this.#authorizedOutcome(proposal));
    }

    return new DecisionGateResult({
      gate: DECISION_ENGINE_GATES.EXECUTION_DECISION,
      passed: false,
      reasons: [this.#failureOutcome(firstFailure.failureClassification)],
      failureClassification: firstFailure.failureClassification
    });
  }

  #authorizedOutcome(proposal) {
    if (this.outcomes().includes(proposal.requestedOutcome)) {
      return proposal.requestedOutcome;
    }

    return proposal.requiredCapabilities.length > 0
      ? EXECUTION_DECISION_OUTCOMES.EXECUTE
      : EXECUTION_DECISION_OUTCOMES.RESPOND;
  }

  #failureOutcome(classification) {
    if (
      classification === DECISION_FAILURE_CLASSIFICATIONS.MISSING_CONTEXT ||
      classification === DECISION_FAILURE_CLASSIFICATIONS.LOW_CONFIDENCE
    ) {
      return EXECUTION_DECISION_OUTCOMES.CLARIFY;
    }

    if (
      classification === DECISION_FAILURE_CLASSIFICATIONS.POLICY_VIOLATION ||
      classification === DECISION_FAILURE_CLASSIFICATIONS.AUTHORIZATION_FAILURE
    ) {
      return EXECUTION_DECISION_OUTCOMES.DENY;
    }

    if (classification === DECISION_FAILURE_CLASSIFICATIONS.CAPABILITY_UNAVAILABLE) {
      return EXECUTION_DECISION_OUTCOMES.STOP;
    }

    return EXECUTION_DECISION_OUTCOMES.RETRY;
  }

  #assertValidProposal(proposal) {
    if (!proposal.correlationId) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.DECISION_PROPOSAL_INVALID,
        'Decision proposals must preserve correlationId.',
        { proposalId: proposal.proposalId }
      );
    }
  }

  #toProposal(proposalInput) {
    return proposalInput instanceof OrchestrationProposal
      ? proposalInput
      : new OrchestrationProposal(proposalInput);
  }
}

function passedGate(gate, reason) {
  return new DecisionGateResult({
    gate,
    passed: true,
    reasons: [reason]
  });
}

function failedGate(gate, reason, failureClassification) {
  return new DecisionGateResult({
    gate,
    passed: false,
    reasons: [reason],
    failureClassification
  });
}
