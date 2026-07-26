import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AiEthicalGovernanceDescriptor } from './ai-ethical-governance/ai-ethical-governance-descriptor.js';
import { AssuranceAuditEvidenceDescriptor } from './assurance-audit-evidence/assurance-audit-evidence-descriptor.js';
import { ComplianceControlFrameworkDescriptor } from './compliance-control-framework/compliance-control-framework-descriptor.js';
import { EnterpriseRiskManagementDescriptor } from './enterprise-risk-management/enterprise-risk-management-descriptor.js';
import { GovernanceOperatingModelDescriptor } from './operating-model/governance-operating-model-descriptor.js';
import { GovernanceComplianceOverviewDescriptor } from './overview/governance-compliance-overview-descriptor.js';
import { PolicyArchitectureDescriptor } from './policy-architecture/policy-architecture-descriptor.js';
import { PrivacyDataGovernanceDescriptor } from './privacy-data-governance/privacy-data-governance-descriptor.js';

export function addGovernanceCompliance(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addGovernanceCompliance expects an instance of ServiceCollection.');
  }

  services.registerSingleton('GovernanceComplianceOverviewDescriptor', () => new GovernanceComplianceOverviewDescriptor());
  services.registerSingleton('GovernanceOperatingModelDescriptor', () => new GovernanceOperatingModelDescriptor());
  services.registerSingleton('PolicyArchitectureDescriptor', () => new PolicyArchitectureDescriptor());
  services.registerSingleton('EnterpriseRiskManagementDescriptor', () => new EnterpriseRiskManagementDescriptor());
  services.registerSingleton('ComplianceControlFrameworkDescriptor', () => new ComplianceControlFrameworkDescriptor());
  services.registerSingleton('PrivacyDataGovernanceDescriptor', () => new PrivacyDataGovernanceDescriptor());
  services.registerSingleton('AiEthicalGovernanceDescriptor', () => new AiEthicalGovernanceDescriptor());
  services.registerSingleton('AssuranceAuditEvidenceDescriptor', () => new AssuranceAuditEvidenceDescriptor());

  return services;
}
