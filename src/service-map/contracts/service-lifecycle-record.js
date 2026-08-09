import { SERVICE_LIFECYCLE_STAGES } from '../constants.js';

export class ServiceLifecycleRecord {
  constructor({
    serviceName,
    stage = SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
    businessOwner,
    technicalOwner,
    architecturalOwner,
    documentationRefs = [],
    testRefs = [],
    observabilityRefs = [],
    securityRefs = [],
    retirementStrategy = '',
    metrics = {},
    updatedAt = null
  }) {
    this.serviceName = serviceName;
    this.stage = stage;
    this.businessOwner = businessOwner;
    this.technicalOwner = technicalOwner;
    this.architecturalOwner = architecturalOwner;
    this.documentationRefs = Object.freeze([...documentationRefs]);
    this.testRefs = Object.freeze([...testRefs]);
    this.observabilityRefs = Object.freeze([...observabilityRefs]);
    this.securityRefs = Object.freeze([...securityRefs]);
    this.retirementStrategy = retirementStrategy;
    this.metrics = Object.freeze({ ...metrics });
    this.updatedAt = updatedAt;

    Object.freeze(this);
  }
}
