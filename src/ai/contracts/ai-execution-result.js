export class AiExecutionResult {
  constructor({
    accepted,
    response,
    prompt,
    intent,
    decision,
    toolResults = [],
    metadata = {}
  }) {
    this.accepted = accepted;
    this.response = response;
    this.prompt = prompt;
    this.intent = intent;
    this.decision = decision;
    this.toolResults = Object.freeze([...toolResults]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
