export class PromptDocument {
  constructor({
    version,
    systemInstructions,
    contextSummary,
    knowledge = [],
    memory = [],
    tools = []
  }) {
    this.version = version;
    this.systemInstructions = systemInstructions;
    this.contextSummary = contextSummary;
    this.knowledge = Object.freeze([...knowledge]);
    this.memory = Object.freeze([...memory]);
    this.tools = Object.freeze([...tools]);
    Object.freeze(this);
  }
}
