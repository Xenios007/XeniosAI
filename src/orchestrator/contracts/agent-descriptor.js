export class AgentDescriptor {
  constructor({
    agentId,
    role,
    responsibility,
    capabilities = [],
    allowedContext = [],
    dependencies = [],
    critical = true
  }) {
    this.agentId = agentId;
    this.role = role;
    this.responsibility = responsibility;
    this.capabilities = Object.freeze([...capabilities]);
    this.allowedContext = Object.freeze([...allowedContext]);
    this.dependencies = Object.freeze([...dependencies]);
    this.critical = Boolean(critical);

    Object.freeze(this);
  }
}
