export class CommandDefinition {
  constructor({
    commandName,
    owningService,
    requiredFields = [],
    idempotencyRecommended = false,
    mayRequireTransaction = false,
    mayPublishEvents = true
  }) {
    this.commandName = commandName;
    this.owningService = owningService;
    this.requiredFields = Object.freeze([...requiredFields]);
    this.idempotencyRecommended = Boolean(idempotencyRecommended);
    this.mayRequireTransaction = Boolean(mayRequireTransaction);
    this.mayPublishEvents = Boolean(mayPublishEvents);

    Object.freeze(this);
  }
}
