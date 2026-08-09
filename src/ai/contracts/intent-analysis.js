export class IntentAnalysis {
  constructor({
    intent,
    confidence,
    requiresTools = false,
    requiresClarification = false,
    requestedCapabilities = []
  }) {
    this.intent = intent;
    this.confidence = confidence;
    this.requiresTools = requiresTools;
    this.requiresClarification = requiresClarification;
    this.requestedCapabilities = Object.freeze([...requestedCapabilities]);
    Object.freeze(this);
  }
}
