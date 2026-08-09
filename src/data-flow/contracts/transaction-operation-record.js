export class TransactionOperationRecord {
  constructor({
    transactionId,
    correlationId,
    businessOperation,
    ownerService,
    businessRulesValidated = false,
    stateChanges = [],
    persisted = false,
    committed = false,
    rolledBack = false,
    eventsPublishedAfterCommit = false,
    idempotencyKey = undefined,
    retryAttempt = false,
    failureType = undefined,
    failureInformation = undefined
  }) {
    this.transactionId = transactionId;
    this.correlationId = correlationId;
    this.businessOperation = businessOperation;
    this.ownerService = ownerService;
    this.businessRulesValidated = Boolean(businessRulesValidated);
    this.stateChanges = Object.freeze([...stateChanges]);
    this.persisted = Boolean(persisted);
    this.committed = Boolean(committed);
    this.rolledBack = Boolean(rolledBack);
    this.eventsPublishedAfterCommit = Boolean(eventsPublishedAfterCommit);
    this.idempotencyKey = idempotencyKey;
    this.retryAttempt = Boolean(retryAttempt);
    this.failureType = failureType;
    this.failureInformation = failureInformation;

    Object.freeze(this);
  }
}
