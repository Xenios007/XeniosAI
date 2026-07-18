export class AgentAssignment {
  constructor({
    agentId,
    role,
    capabilities = [],
    executionOrder,
    dependencies = [],
    context = {},
    critical = true
  }) {
    this.agentId = agentId;
    this.role = role;
    this.capabilities = Object.freeze([...capabilities]);
    this.executionOrder = executionOrder;
    this.dependencies = Object.freeze([...dependencies]);
    this.context = Object.freeze({ ...context });
    this.critical = Boolean(critical);

    Object.freeze(this);
  }
}
