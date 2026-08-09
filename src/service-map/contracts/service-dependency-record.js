import { SERVICE_DEPENDENCY_TYPES } from '../constants.js';

export class ServiceDependencyRecord {
  constructor({
    sourceServiceName,
    targetServiceName,
    dependencyType = SERVICE_DEPENDENCY_TYPES.FUNCTIONAL,
    description = '',
    contractVersion = 'v1'
  }) {
    this.sourceServiceName = sourceServiceName;
    this.targetServiceName = targetServiceName;
    this.dependencyType = dependencyType;
    this.description = description;
    this.contractVersion = contractVersion;

    Object.freeze(this);
  }
}
