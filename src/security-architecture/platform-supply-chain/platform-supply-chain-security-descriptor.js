import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ARTIFACT_TYPES,
  BUILD_SECURITY_REQUIREMENTS,
  CONFIGURATION_INTEGRITY_CONTROLS,
  DEPENDENCY_COMPONENT_TYPES,
  DEPENDENCY_GOVERNANCE_REQUIREMENTS,
  DEPLOYMENT_INTEGRITY_CONTROLS,
  FUTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_CAPABILITIES,
  INCIDENT_CONTAINMENT_ACTIONS,
  INFRASTRUCTURE_PROTECTION_AREAS,
  PLATFORM_ADMINISTRATIVE_CONTROLS,
  PLATFORM_AI_SUPPLY_CHAIN_COMPONENTS,
  PLATFORM_SECURITY_DOMAIN_STAGES,
  PLATFORM_SECURITY_GOVERNANCE_ACTIVITIES,
  PLATFORM_SECURITY_OBSERVABILITY_EVENTS,
  PLATFORM_SECURITY_RELATIONSHIP_FLOW_STAGES,
  PLATFORM_SUPPLY_CHAIN_SECURITY_OBJECTIVES,
  RUNTIME_HARDENING_PRACTICES,
  SBOM_COMPONENT_TYPES,
  SECURE_DEVELOPMENT_PRACTICES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  THIRD_PARTY_SERVICE_TYPES
} from '../constants.js';
import { DependencyArtifactGovernancePolicy } from '../contracts/dependency-artifact-governance-policy.js';
import { PlatformOperationalSecurityProfile } from '../contracts/platform-operational-security-profile.js';
import { PlatformSupplyChainSecurityValidationResult } from '../contracts/platform-supply-chain-security-validation-result.js';
import { SoftwareDeliverySecurityProfile } from '../contracts/software-delivery-security-profile.js';

const DOMAIN_FLOW = Object.freeze(Object.values(PLATFORM_SECURITY_DOMAIN_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(PLATFORM_SECURITY_RELATIONSHIP_FLOW_STAGES));

export class PlatformSupplyChainSecurityDescriptor {
  objectives() {
    return Object.freeze(Object.values(PLATFORM_SUPPLY_CHAIN_SECURITY_OBJECTIVES));
  }

  domainStages() {
    return DOMAIN_FLOW;
  }

  secureDevelopmentPractices() {
    return Object.freeze(Object.values(SECURE_DEVELOPMENT_PRACTICES));
  }

  dependencyComponents() {
    return Object.freeze(Object.values(DEPENDENCY_COMPONENT_TYPES));
  }

  dependencyRequirements() {
    return Object.freeze(Object.values(DEPENDENCY_GOVERNANCE_REQUIREMENTS));
  }

  sbomComponents() {
    return Object.freeze(Object.values(SBOM_COMPONENT_TYPES));
  }

  buildRequirements() {
    return Object.freeze(Object.values(BUILD_SECURITY_REQUIREMENTS));
  }

  artifactTypes() {
    return Object.freeze(Object.values(ARTIFACT_TYPES));
  }

  deploymentControls() {
    return Object.freeze(Object.values(DEPLOYMENT_INTEGRITY_CONTROLS));
  }

  infrastructureAreas() {
    return Object.freeze(Object.values(INFRASTRUCTURE_PROTECTION_AREAS));
  }

  hardeningPractices() {
    return Object.freeze(Object.values(RUNTIME_HARDENING_PRACTICES));
  }

  configurationControls() {
    return Object.freeze(Object.values(CONFIGURATION_INTEGRITY_CONTROLS));
  }

  thirdPartyServices() {
    return Object.freeze(Object.values(THIRD_PARTY_SERVICE_TYPES));
  }

  aiSupplyChainComponents() {
    return Object.freeze(Object.values(PLATFORM_AI_SUPPLY_CHAIN_COMPONENTS));
  }

  administrativeControls() {
    return Object.freeze(Object.values(PLATFORM_ADMINISTRATIVE_CONTROLS));
  }

  observabilityEvents() {
    return Object.freeze(Object.values(PLATFORM_SECURITY_OBSERVABILITY_EVENTS));
  }

  containmentActions() {
    return Object.freeze(Object.values(INCIDENT_CONTAINMENT_ACTIONS));
  }

  governanceActivities() {
    return Object.freeze(Object.values(PLATFORM_SECURITY_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_CAPABILITIES));
  }

  validateSoftwareDelivery(profileInput) {
    const profile = profileInput instanceof SoftwareDeliverySecurityProfile
      ? profileInput
      : new SoftwareDeliverySecurityProfile(profileInput);
    const errors = [];

    if (!profile.deliverySystem) errors.push('Software delivery security profile must identify the delivery system.');
    appendMissing(errors, profile.domainStages, this.domainStages(), 'Platform security domain flow must include');
    appendMissing(errors, profile.developmentPractices, this.secureDevelopmentPractices(), 'Secure development should support');
    appendMissing(errors, profile.buildRequirements, this.buildRequirements(), 'Build environments should support');
    appendMissing(errors, profile.deploymentControls, this.deploymentControls(), 'Deployment controls may include');
    if (profile.traceableEndToEnd !== true) errors.push('Platform security must preserve end-to-end traceability.');
    if (profile.secureDevelopmentIntegrated !== true) errors.push('Security should be integrated into normal development activities.');
    if (profile.buildTrustworthyRepeatable !== true) errors.push('The build process should be trustworthy and repeatable.');
    if (profile.onlyApprovedArtifactsDeployed !== true) errors.push('Only approved artifacts should reach protected environments.');
    if (profile.sourceToRuntimeTraceability !== true) errors.push('Deployment processes should preserve traceability from source code to runtime.');
    if (profile.unauthorizedModificationDetectable !== true) errors.push('Unauthorized modifications should be detectable.');
    if (profile.vendorSpecific === true) errors.push('Platform & Supply Chain Security must remain vendor neutral.');

    return validation(errors);
  }

  validateDependencyArtifactGovernance(policyInput) {
    const policy = policyInput instanceof DependencyArtifactGovernancePolicy
      ? policyInput
      : new DependencyArtifactGovernancePolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Dependency and artifact governance policy must have a name.');
    appendMissing(errors, policy.dependencyComponents, this.dependencyComponents(), 'Dependency management should cover');
    appendMissing(errors, policy.dependencyRequirements, this.dependencyRequirements(), 'Dependencies should be');
    appendMissing(errors, policy.sbomComponents, this.sbomComponents(), 'SBOM inventory may include');
    appendMissing(errors, policy.artifactTypes, this.artifactTypes(), 'Artifact integrity should cover');
    appendMissing(errors, policy.thirdPartyServices, this.thirdPartyServices(), 'Third-party service review should cover');
    appendMissing(errors, policy.aiSupplyChainComponents, this.aiSupplyChainComponents(), 'AI supply chain governance should cover');
    if (policy.dependenciesGoverned !== true) errors.push('All external dependencies must be governed.');
    if (policy.componentInventoryMaintained !== true) errors.push('The platform should support a software component inventory.');
    if (policy.artifactsVerifiedBeforeDeployment !== true) errors.push('Artifacts should be verifiable before deployment.');
    if (policy.externalProvidersEvaluated !== true) errors.push('External providers should undergo security evaluation before production use.');
    if (policy.trustRelationshipsExplicit !== true) errors.push('Trust relationships should be explicitly defined rather than implicitly assumed.');
    if (policy.unmanagedDependenciesAllowed === true) errors.push('Unmanaged dependencies increase operational risk.');
    if (policy.vendorSpecific === true) errors.push('Dependency and artifact governance must remain vendor neutral.');

    return validation(errors);
  }

  validateOperationalSecurity(profileInput) {
    const profile = profileInput instanceof PlatformOperationalSecurityProfile
      ? profileInput
      : new PlatformOperationalSecurityProfile(profileInput);
    const errors = [];

    if (!profile.platformArea) errors.push('Platform operational security profile must identify the platform area.');
    appendMissing(errors, profile.infrastructureAreas, this.infrastructureAreas(), 'Infrastructure protection should include');
    appendMissing(errors, profile.hardeningPractices, this.hardeningPractices(), 'Runtime hardening should include');
    appendMissing(errors, profile.configurationControls, this.configurationControls(), 'Configuration management should support');
    appendMissing(errors, profile.administrativeControls, this.administrativeControls(), 'Administrative controls should include');
    appendMissing(errors, profile.observabilityEvents, this.observabilityEvents(), 'Platform observability should expose');
    appendMissing(errors, profile.containmentActions, this.containmentActions(), 'Incident containment should support');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'Platform governance must include');
    if (profile.zeroTrustInfrastructure !== true) errors.push('Infrastructure should follow Zero Trust principles.');
    if (profile.attackSurfaceMinimized !== true) errors.push('Production environments should minimize unnecessary attack surface.');
    if (profile.configurationProtected !== true) errors.push('Configuration should be treated as protected information.');
    if (profile.administrativeAccessIndependent !== true) errors.push('Administrative access should remain independent of ordinary user workflows.');
    if (profile.containmentMinimizesDisruption !== true) errors.push('Containment procedures should minimize disruption while reducing risk.');
    if (profile.continuouslyMonitored !== true) errors.push('Platform security must be continuously monitored.');
    if (profile.vendorSpecific === true) errors.push('Platform operational security must remain vendor neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Platform & Supply Chain Security must include all documented objectives.');
    if (this.domainStages().length !== 8) errors.push('Platform & Supply Chain Security must include the documented platform security domain flow.');
    if (this.secureDevelopmentPractices().length !== 6) errors.push('Platform & Supply Chain Security must include documented secure development practices.');
    if (this.dependencyComponents().length !== 6) errors.push('Platform & Supply Chain Security must include documented dependency component types.');
    if (this.artifactTypes().length !== 6) errors.push('Platform & Supply Chain Security must include documented artifact types.');
    if (this.relationshipFlow().length !== 9) errors.push('Platform & Supply Chain Security must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.PLATFORM_SUPPLY_CHAIN_SECURITY_INVALID,
        'Platform & Supply Chain Security violates ARCH-008-08.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new PlatformSupplyChainSecurityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
