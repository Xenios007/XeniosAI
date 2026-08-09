export class CommandResult {
  constructor({
    commandId,
    commandName,
    owningService,
    outcome,
    events = [],
    failureReason = undefined,
    metadata = {}
  }) {
    this.commandId = commandId;
    this.commandName = commandName;
    this.owningService = owningService;
    this.outcome = outcome;
    this.events = Object.freeze([...events]);
    this.failureReason = failureReason;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
