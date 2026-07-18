import {
  COMMUNICATION_SURFACES,
  SERVICE_COMMUNICATION_PATTERNS
} from '../constants.js';

export class ServiceCommunicationContract {
  constructor({
    contractId,
    sourceServiceName,
    targetServiceName,
    pattern,
    capability,
    version = 'v1',
    surface = COMMUNICATION_SURFACES.PUBLIC_CONTRACT,
    idempotent = false,
    observable = true,
    secure = true,
    description = ''
  }) {
    this.contractId = contractId;
    this.sourceServiceName = sourceServiceName;
    this.targetServiceName = targetServiceName;
    this.pattern = pattern;
    this.capability = capability;
    this.version = version;
    this.surface = surface;
    this.idempotent = Boolean(idempotent);
    this.observable = Boolean(observable);
    this.secure = Boolean(secure);
    this.description = description;

    Object.freeze(this);
  }

  get isQuery() {
    return this.pattern === SERVICE_COMMUNICATION_PATTERNS.QUERY;
  }
}
