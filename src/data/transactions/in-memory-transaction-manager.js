import { TransactionResult } from '../contracts/transaction-result.js';
import { TransactionManager } from './transaction-manager.js';

export class InMemoryTransactionManager extends TransactionManager {
  constructor({ idGenerator, logger, meter }) {
    super();
    this.idGenerator = idGenerator;
    this.logger = logger;
    this.meter = meter;
  }

  async execute({ owner, operation, work }) {
    const transactionId = this.idGenerator.generate();
    const operations = [];

    const context = {
      transactionId,
      owner,
      record(operationName, metadata = {}) {
        operations.push({ operationName, metadata });
      }
    };

    await work(context);

    this.logger.info('Data transaction committed.', {
      transactionId,
      owner,
      operation
    });
    this.meter.incrementCounter('data_transactions_total', 1, { owner, result: 'committed' });

    return new TransactionResult({
      transactionId,
      committed: true,
      operations,
      metadata: { owner, operation }
    });
  }
}
