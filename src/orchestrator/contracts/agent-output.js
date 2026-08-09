export class AgentOutput {
  constructor({
    agentId,
    role,
    output = {},
    confidence = 0,
    sources = [],
    failures = [],
    metadata = {}
  }) {
    this.agentId = agentId;
    this.role = role;
    this.output = Object.freeze({ ...output });
    this.confidence = confidence;
    this.sources = Object.freeze([...sources]);
    this.failures = Object.freeze([...failures]);
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
