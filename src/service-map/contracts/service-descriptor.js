import { SERVICE_LIFECYCLE_STAGES } from '../constants.js';

export class ServiceDescriptor {
  constructor({
    serviceName,
    displayName,
    category,
    primaryResponsibility,
    lifecycleStage = SERVICE_LIFECYCLE_STAGES.ARCHITECTURE,
    summary = ''
  }) {
    this.serviceName = serviceName;
    this.displayName = displayName;
    this.category = category;
    this.primaryResponsibility = primaryResponsibility;
    this.lifecycleStage = lifecycleStage;
    this.summary = summary;

    Object.freeze(this);
  }
}
