export class TransactionResult {
  constructor({
    transactionId,
    committed,
    operations = [],
    metadata = {}
  }) {
    this.transactionId = transactionId;
    this.committed = committed;
    this.operations = Object.freeze([...operations]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
