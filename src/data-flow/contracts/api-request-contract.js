export class ApiRequestContract {
  constructor({
    requestId,
    correlationId,
    contractName,
    operation,
    ownerService,
    authenticated = false,
    authorized = false,
    parameters = {},
    authenticationContext = {},
    metadata = {}
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.contractName = contractName;
    this.operation = operation;
    this.ownerService = ownerService;
    this.authenticated = Boolean(authenticated);
    this.authorized = Boolean(authorized);
    this.parameters = Object.freeze({ ...parameters });
    this.authenticationContext = Object.freeze({ ...authenticationContext });
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
