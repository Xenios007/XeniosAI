import { ServiceCollection } from '../foundation/di/service-collection.js';
import { GovernanceOperatingModelDescriptor } from './operating-model/governance-operating-model-descriptor.js';
import { GovernanceComplianceOverviewDescriptor } from './overview/governance-compliance-overview-descriptor.js';

export function addGovernanceCompliance(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addGovernanceCompliance expects an instance of ServiceCollection.');
  }

  services.registerSingleton('GovernanceComplianceOverviewDescriptor', () => new GovernanceComplianceOverviewDescriptor());
  services.registerSingleton('GovernanceOperatingModelDescriptor', () => new GovernanceOperatingModelDescriptor());

  return services;
}
