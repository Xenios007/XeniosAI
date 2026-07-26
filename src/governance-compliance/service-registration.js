import { ServiceCollection } from '../foundation/di/service-collection.js';
import { EnterpriseRiskManagementDescriptor } from './enterprise-risk-management/enterprise-risk-management-descriptor.js';
import { GovernanceOperatingModelDescriptor } from './operating-model/governance-operating-model-descriptor.js';
import { GovernanceComplianceOverviewDescriptor } from './overview/governance-compliance-overview-descriptor.js';
import { PolicyArchitectureDescriptor } from './policy-architecture/policy-architecture-descriptor.js';

export function addGovernanceCompliance(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addGovernanceCompliance expects an instance of ServiceCollection.');
  }

  services.registerSingleton('GovernanceComplianceOverviewDescriptor', () => new GovernanceComplianceOverviewDescriptor());
  services.registerSingleton('GovernanceOperatingModelDescriptor', () => new GovernanceOperatingModelDescriptor());
  services.registerSingleton('PolicyArchitectureDescriptor', () => new PolicyArchitectureDescriptor());
  services.registerSingleton('EnterpriseRiskManagementDescriptor', () => new EnterpriseRiskManagementDescriptor());

  return services;
}
