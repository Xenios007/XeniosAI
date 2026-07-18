import { AI_INTENTS } from '../constants.js';
import { IntentAnalysis } from '../contracts/intent-analysis.js';

function includesAny(text, patterns) {
  return patterns.some(pattern => text.includes(pattern));
}

export class KeywordIntentDetector {
  detect(context) {
    const text = (context.latestMessage?.content ?? '').toLowerCase().trim();

    if (!text) {
      return new IntentAnalysis({
        intent: AI_INTENTS.UNKNOWN,
        confidence: 0.2,
        requiresClarification: true
      });
    }

    if (includesAny(text, ['price', 'cost', 'rate', 'how much'])) {
      return new IntentAnalysis({
        intent: AI_INTENTS.PRICING,
        confidence: 0.82,
        requiresTools: true,
        requestedCapabilities: ['pricing.compute']
      });
    }

    if (includesAny(text, ['available', 'availability', 'vacant', 'room left'])) {
      return new IntentAnalysis({
        intent: AI_INTENTS.AVAILABILITY,
        confidence: 0.84,
        requiresTools: true,
        requestedCapabilities: ['calendar.check-availability']
      });
    }

    if (includesAny(text, ['book', 'reserve', 'reservation'])) {
      return new IntentAnalysis({
        intent: AI_INTENTS.BOOKING,
        confidence: 0.8,
        requiresTools: true,
        requestedCapabilities: ['booking.create']
      });
    }

    if (includesAny(text, ['policy', 'rules', 'check in', 'checkout', 'check-out'])) {
      return new IntentAnalysis({
        intent: AI_INTENTS.POLICY,
        confidence: 0.78,
        requestedCapabilities: ['knowledge.lookup']
      });
    }

    if (includesAny(text, ['help', 'staff', 'agent', 'human', 'support'])) {
      return new IntentAnalysis({
        intent: AI_INTENTS.SUPPORT,
        confidence: 0.86
      });
    }

    return new IntentAnalysis({
      intent: AI_INTENTS.GENERAL,
      confidence: 0.65,
      requiresClarification: text.length < 5
    });
  }
}
