import { AI_DECISIONS } from '../constants.js';
import { ExecutionDecision } from '../contracts/execution-decision.js';

export class DecisionEngine {
  decide({ intentAnalysis, contextPacket, reasoningProposal, availableCapabilities }) {
    const reasons = [];

    if (!contextPacket.latestMessage) {
      reasons.push('Missing latest message.');
      return new ExecutionDecision({
        outcome: AI_DECISIONS.STOP,
        allowed: false,
        reasons
      });
    }

    if (intentAnalysis.requiresClarification || intentAnalysis.confidence < 0.55) {
      reasons.push('Intent gate did not pass.');
      return new ExecutionDecision({
        outcome: AI_DECISIONS.CLARIFY,
        allowed: true,
        reasons
      });
    }

    if (reasoningProposal.decision === AI_DECISIONS.EXECUTE) {
      const unavailable = reasoningProposal.requestedCapabilities.filter(
        capability => !availableCapabilities.has(capability)
      );

      if (unavailable.length > 0) {
        reasons.push(`Capabilities unavailable: ${unavailable.join(', ')}`);
        return new ExecutionDecision({
          outcome: AI_DECISIONS.CLARIFY,
          allowed: true,
          reasons
        });
      }
    }

    reasons.push('Execution gates passed.');
    return new ExecutionDecision({
      outcome: reasoningProposal.decision,
      allowed: true,
      reasons
    });
  }
}
