export class TransactionManager {
  async execute() {
    throw new Error('TransactionManager.execute must be implemented by a subclass.');
  }
}
