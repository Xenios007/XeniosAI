import { AI_DECISIONS, AI_INTENTS } from '../constants.js';
import { AiResponse } from '../contracts/ai-response.js';

function intentLabel(intent) {
  return intent.replace('-', ' ');
}

export class ResponseGenerator {
  generate({ intentAnalysis, reasoningProposal, decision, toolResults }) {
    let text;

    if (decision.outcome === AI_DECISIONS.CLARIFY) {
      text = reasoningProposal.clarificationQuestion ?? 'Could you clarify what you need?';
    } else if (decision.outcome === AI_DECISIONS.ESCALATE) {
      text = 'I will prepare this conversation for human assistance.';
    } else if (decision.outcome === AI_DECISIONS.EXECUTE) {
      const toolSummary = toolResults.map(result => result.capability).join(', ');
      text = `I used the appropriate platform capabilities for ${intentLabel(intentAnalysis.intent)}: ${toolSummary}.`;
    } else if (intentAnalysis.intent === AI_INTENTS.POLICY) {
      text = 'I can help with policy guidance using the authoritative knowledge available.';
    } else {
      text = 'I can help with that. Please share any additional details if needed.';
    }

    return new AiResponse({
      decision: decision.outcome,
      confidence: reasoningProposal.confidence,
      intent: intentAnalysis.intent,
      text,
      toolResults,
      metadata: {
        reasons: decision.reasons
      }
    });
  }
}
