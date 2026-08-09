export class AiResponse {
  constructor({
    decision,
    confidence,
    intent,
    text,
    toolResults = [],
    metadata = {}
  }) {
    this.decision = decision;
    this.confidence = confidence;
    this.intent = intent;
    this.text = text;
    this.toolResults = Object.freeze([...toolResults]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
