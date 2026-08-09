import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
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
  THIRD_PARTY_SERVICE_TYPES,
  DependencyArtifactGovernancePolicy,
  PlatformOperationalSecurityProfile,
  PlatformSupplyChainSecurityDescriptor,
  SoftwareDeliverySecurityProfile,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('platform supply chain security exposes objectives, domain flow, and relationship flow', () => {
  const descriptor = new PlatformSupplyChainSecurityDescriptor();

  assert.ok(descriptor.objectives().includes(PLATFORM_SUPPLY_CHAIN_SECURITY_OBJECTIVES.TRUSTED_SOFTWARE_DELIVERY));
  assert.ok(descriptor.objectives().includes(PLATFORM_SUPPLY_CHAIN_SECURITY_OBJECTIVES.END_TO_END_TRACEABILITY));
  assert.deepEqual(descriptor.domainStages(), Object.values(PLATFORM_SECURITY_DOMAIN_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(PLATFORM_SECURITY_RELATIONSHIP_FLOW_STAGES));
});

test('platform supply chain security exposes delivery, dependency, artifact, and operational metadata', () => {
  const descriptor = new PlatformSupplyChainSecurityDescriptor();

  assert.ok(descriptor.secureDevelopmentPractices().includes(SECURE_DEVELOPMENT_PRACTICES.CODE_REVIEW));
  assert.ok(descriptor.dependencyComponents().includes(DEPENDENCY_COMPONENT_TYPES.AI_PACKAGES));
  assert.ok(descriptor.dependencyRequirements().includes(DEPENDENCY_GOVERNANCE_REQUIREMENTS.REPLACEABLE));
  assert.ok(descriptor.sbomComponents().includes(SBOM_COMPONENT_TYPES.BUILD_DEPENDENCIES));
  assert.ok(descriptor.buildRequirements().includes(BUILD_SECURITY_REQUIREMENTS.ISOLATED_EXECUTION));
  assert.ok(descriptor.artifactTypes().includes(ARTIFACT_TYPES.AI_MODELS));
  assert.ok(descriptor.deploymentControls().includes(DEPLOYMENT_INTEGRITY_CONTROLS.ROLLBACK_CAPABILITY));
  assert.ok(descriptor.infrastructureAreas().includes(INFRASTRUCTURE_PROTECTION_AREAS.ADMINISTRATIVE_INTERFACES));
  assert.ok(descriptor.hardeningPractices().includes(RUNTIME_HARDENING_PRACTICES.CONTINUOUS_PATCHING));
  assert.ok(descriptor.configurationControls().includes(CONFIGURATION_INTEGRITY_CONTROLS.INTEGRITY_VALIDATION));
  assert.ok(descriptor.thirdPartyServices().includes(THIRD_PARTY_SERVICE_TYPES.AI_MODEL_PROVIDERS));
  assert.ok(descriptor.aiSupplyChainComponents().includes(PLATFORM_AI_SUPPLY_CHAIN_COMPONENTS.PROMPT_LIBRARIES));
  assert.ok(descriptor.administrativeControls().includes(PLATFORM_ADMINISTRATIVE_CONTROLS.SEPARATION_OF_DUTIES));
  assert.ok(descriptor.observabilityEvents().includes(PLATFORM_SECURITY_OBSERVABILITY_EVENTS.DEPENDENCY_UPDATES));
  assert.ok(descriptor.containmentActions().includes(INCIDENT_CONTAINMENT_ACTIONS.DEPENDENCY_REPLACEMENT));
  assert.ok(descriptor.governanceActivities().includes(PLATFORM_SECURITY_GOVERNANCE_ACTIVITIES.THIRD_PARTY_RISK_ASSESSMENTS));
});

test('platform supply chain security validates trusted software delivery profiles', () => {
  const descriptor = new PlatformSupplyChainSecurityDescriptor();
  const valid = descriptor.validateSoftwareDelivery(
    new SoftwareDeliverySecurityProfile({
      deliverySystem: 'XeniosAI Delivery Lifecycle',
      domainStages: Object.values(PLATFORM_SECURITY_DOMAIN_STAGES),
      developmentPractices: Object.values(SECURE_DEVELOPMENT_PRACTICES),
      buildRequirements: Object.values(BUILD_SECURITY_REQUIREMENTS),
      deploymentControls: Object.values(DEPLOYMENT_INTEGRITY_CONTROLS)
    })
  );
  const invalid = descriptor.validateSoftwareDelivery({
    deliverySystem: '',
    domainStages: [PLATFORM_SECURITY_DOMAIN_STAGES.SOURCE_CODE],
    developmentPractices: [SECURE_DEVELOPMENT_PRACTICES.CODE_REVIEW],
    buildRequirements: [BUILD_SECURITY_REQUIREMENTS.CONTROLLED_INPUTS],
    deploymentControls: [DEPLOYMENT_INTEGRITY_CONTROLS.APPROVAL_WORKFLOWS],
    traceableEndToEnd: false,
    secureDevelopmentIntegrated: false,
    buildTrustworthyRepeatable: false,
    onlyApprovedArtifactsDeployed: false,
    sourceToRuntimeTraceability: false,
    unauthorizedModificationDetectable: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /delivery system/);
  assert.match(invalid.errors.join('\n'), /Dependencies/);
  assert.match(invalid.errors.join('\n'), /secure-coding-standards/);
  assert.match(invalid.errors.join('\n'), /verified-source/);
  assert.match(invalid.errors.join('\n'), /end-to-end traceability/);
  assert.match(invalid.errors.join('\n'), /approved artifacts/);
});

test('platform supply chain security validates dependency and artifact governance', () => {
  const descriptor = new PlatformSupplyChainSecurityDescriptor();
  const valid = descriptor.validateDependencyArtifactGovernance(
    new DependencyArtifactGovernancePolicy({
      policyName: 'Dependency and Artifact Governance',
      dependencyComponents: Object.values(DEPENDENCY_COMPONENT_TYPES),
      dependencyRequirements: Object.values(DEPENDENCY_GOVERNANCE_REQUIREMENTS),
      sbomComponents: Object.values(SBOM_COMPONENT_TYPES),
      artifactTypes: Object.values(ARTIFACT_TYPES),
      thirdPartyServices: Object.values(THIRD_PARTY_SERVICE_TYPES),
      aiSupplyChainComponents: Object.values(PLATFORM_AI_SUPPLY_CHAIN_COMPONENTS)
    })
  );
  const invalid = descriptor.validateDependencyArtifactGovernance({
    policyName: '',
    dependencyComponents: [DEPENDENCY_COMPONENT_TYPES.LIBRARIES],
    dependencyRequirements: [DEPENDENCY_GOVERNANCE_REQUIREMENTS.APPROVED],
    sbomComponents: [SBOM_COMPONENT_TYPES.LIBRARIES],
    artifactTypes: [ARTIFACT_TYPES.PACKAGES],
    thirdPartyServices: [THIRD_PARTY_SERVICE_TYPES.PAYMENT_SERVICES],
    aiSupplyChainComponents: [PLATFORM_AI_SUPPLY_CHAIN_COMPONENTS.FOUNDATION_MODELS],
    dependenciesGoverned: false,
    componentInventoryMaintained: false,
    artifactsVerifiedBeforeDeployment: false,
    externalProvidersEvaluated: false,
    trustRelationshipsExplicit: false,
    unmanagedDependenciesAllowed: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /frameworks/);
  assert.match(invalid.errors.join('\n'), /versioned/);
  assert.match(invalid.errors.join('\n'), /runtime-components/);
  assert.match(invalid.errors.join('\n'), /container-images/);
  assert.match(invalid.errors.join('\n'), /Unmanaged dependencies/);
});

test('platform supply chain security validates operational security', () => {
  const descriptor = new PlatformSupplyChainSecurityDescriptor();
  const valid = descriptor.validateOperationalSecurity(
    new PlatformOperationalSecurityProfile({
      platformArea: 'Production Operations',
      infrastructureAreas: Object.values(INFRASTRUCTURE_PROTECTION_AREAS),
      hardeningPractices: Object.values(RUNTIME_HARDENING_PRACTICES),
      configurationControls: Object.values(CONFIGURATION_INTEGRITY_CONTROLS),
      administrativeControls: Object.values(PLATFORM_ADMINISTRATIVE_CONTROLS),
      observabilityEvents: Object.values(PLATFORM_SECURITY_OBSERVABILITY_EVENTS),
      containmentActions: Object.values(INCIDENT_CONTAINMENT_ACTIONS),
      governanceActivities: Object.values(PLATFORM_SECURITY_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateOperationalSecurity({
    platformArea: '',
    infrastructureAreas: [INFRASTRUCTURE_PROTECTION_AREAS.COMPUTE_RESOURCES],
    hardeningPractices: [RUNTIME_HARDENING_PRACTICES.MINIMAL_SERVICES],
    configurationControls: [CONFIGURATION_INTEGRITY_CONTROLS.VERSION_CONTROL],
    administrativeControls: [PLATFORM_ADMINISTRATIVE_CONTROLS.STRONG_AUTHENTICATION],
    observabilityEvents: [PLATFORM_SECURITY_OBSERVABILITY_EVENTS.BUILD_EVENTS],
    containmentActions: [INCIDENT_CONTAINMENT_ACTIONS.ARTIFACT_WITHDRAWAL],
    governanceActivities: [PLATFORM_SECURITY_GOVERNANCE_ACTIVITIES.DEPENDENCY_REVIEWS],
    zeroTrustInfrastructure: false,
    attackSurfaceMinimized: false,
    configurationProtected: false,
    administrativeAccessIndependent: false,
    containmentMinimizesDisruption: false,
    continuouslyMonitored: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /platform area/);
  assert.match(invalid.errors.join('\n'), /networking/);
  assert.match(invalid.errors.join('\n'), /restricted-administrative-access/);
  assert.match(invalid.errors.join('\n'), /authorization/);
  assert.match(invalid.errors.join('\n'), /Zero Trust principles/);
  assert.match(invalid.errors.join('\n'), /continuously monitored/);
});

test('platform supply chain security reports future capabilities without implementing them', () => {
  const descriptor = new PlatformSupplyChainSecurityDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_CAPABILITIES.END_TO_END_SOFTWARE_PROVENANCE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_CAPABILITIES.CONFIDENTIAL_BUILD_ENVIRONMENTS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_PLATFORM_SUPPLY_CHAIN_SECURITY_CAPABILITIES.CRYPTOGRAPHIC_VERIFICATION_OF_AI_MODEL_PROVENANCE));
});

test('platform supply chain security assertion rejects incomplete metadata', () => {
  class IncompletePlatformSecurityDescriptor extends PlatformSupplyChainSecurityDescriptor {
    domainStages() {
      return [];
    }
  }

  assert.throws(
    () => new IncompletePlatformSecurityDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.PLATFORM_SUPPLY_CHAIN_SECURITY_INVALID &&
      error.details.errors.some(message => message.includes('domain flow'))
  );
});

test('platform supply chain security descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('PlatformSupplyChainSecurityDescriptor');

  assert.ok(descriptor instanceof PlatformSupplyChainSecurityDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
