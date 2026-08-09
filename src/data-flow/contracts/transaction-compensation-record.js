export class TransactionCompensationRecord {
  constructor({
    originalTransactionId,
    compensationTransactionId,
    businessOperation,
    ownerService,
    compensationOperation,
    coordinatedByWorkflow = false,
    createsNewTransaction = true,
    attemptsHistoryRollback = false
  }) {
    this.originalTransactionId = originalTransactionId;
    this.compensationTransactionId = compensationTransactionId;
    this.businessOperation = businessOperation;
    this.ownerService = ownerService;
    this.compensationOperation = compensationOperation;
    this.coordinatedByWorkflow = Boolean(coordinatedByWorkflow);
    this.createsNewTransaction = Boolean(createsNewTransaction);
    this.attemptsHistoryRollback = Boolean(attemptsHistoryRollback);

    Object.freeze(this);
  }
}
