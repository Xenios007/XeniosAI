import { ApiErrorContract } from './api-error-contract.js';

export class ApiResponseContract {
  constructor({
    requestId,
    correlationId,
    contractName,
    operation,
    status,
    businessResult = undefined,
    data = {},
    metadata = {},
    pagination = undefined,
    error = undefined
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.contractName = contractName;
    this.operation = operation;
    this.status = status;
    this.businessResult = businessResult;
    this.data = Object.freeze({ ...data });
    this.metadata = Object.freeze({ ...metadata });
    this.pagination = pagination ? Object.freeze({ ...pagination }) : undefined;
    this.error = error ? (error instanceof ApiErrorContract ? error : new ApiErrorContract(error)) : undefined;

    Object.freeze(this);
  }
}
