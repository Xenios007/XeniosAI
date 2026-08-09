import { AI_DECISIONS, AI_INTENTS } from '../constants.js';
import { ReasoningProposal } from '../contracts/reasoning-proposal.js';

export class RuleBasedReasoner {
  reason({ intentAnalysis, contextPacket }) {
    if (intentAnalysis.requiresClarification || intentAnalysis.confidence < 0.55) {
      return new ReasoningProposal({
        decision: AI_DECISIONS.CLARIFY,
        confidence: intentAnalysis.confidence,
        rationale: 'Intent confidence is insufficient for execution.',
        clarificationQuestion: 'Could you share a bit more detail so I can help correctly?'
      });
    }

    if (intentAnalysis.intent === AI_INTENTS.SUPPORT) {
      return new ReasoningProposal({
        decision: AI_DECISIONS.ESCALATE,
        confidence: intentAnalysis.confidence,
        rationale: 'The request indicates a need for human support.'
      });
    }

    if (intentAnalysis.requiresTools) {
      return new ReasoningProposal({
        decision: AI_DECISIONS.EXECUTE,
        confidence: intentAnalysis.confidence,
        rationale: 'Authoritative platform capabilities are required.',
        requestedCapabilities: intentAnalysis.requestedCapabilities
      });
    }

    return new ReasoningProposal({
      decision: AI_DECISIONS.RESPOND,
      confidence: Math.max(intentAnalysis.confidence, 0.6),
      rationale: `A direct response is sufficient for conversation ${contextPacket.conversationId}.`
    });
  }
}
