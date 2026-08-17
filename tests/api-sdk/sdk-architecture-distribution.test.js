import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  SDK_ARCHITECTURAL_PRINCIPLES, SDK_ARCHITECTURAL_RULES, SDK_ARCHITECTURE_BOUNDARIES,
  SDK_ARCHITECTURE_DISTRIBUTION_ERROR_CODE, SDK_ARCHITECTURE_OBJECTIVES,
  SDK_AUDIENCE_CLASSIFICATIONS, SDK_BEHAVIOR_CONTROLS, SDK_CLIENT_CONFIGURATION_FIELDS,
  SDK_CONTRACT_LAYER_ELEMENTS, SDK_CORE_DEFINITIONS, SDK_DECLARATION_FIELDS,
  SDK_DISTRIBUTION_CONTROLS, SDK_EXTENSION_BOUNDARY_TYPES, SDK_GENERATION_MANIFEST_FIELDS,
  SDK_DISTRIBUTION_LOGICAL_LAYERS, SDK_GOVERNANCE_DECISIONS, SDK_LIFECYCLE_CONTROLS,
  SDK_PRODUCTION_FLOW_STAGES, SDK_QUALITY_ASSURANCE_GATES, SDK_REQUIRED_EVIDENCE_TYPES,
  SDK_TEST_SUPPORT_TYPES, SDK_VERSION_RELEASE_FIELDS, SdkArchitectureDistributionDescriptor,
  SdkArchitectureDistributionProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-06 exposes SDK objectives, principles, definitions, declarations, audiences, and layers', () => {
  const descriptor = new SdkArchitectureDistributionDescriptor();
  assert.ok(descriptor.objectives().includes(SDK_ARCHITECTURE_OBJECTIVES.PACKAGE_INTEGRITY));
  assert.ok(descriptor.principles().includes(SDK_ARCHITECTURAL_PRINCIPLES.DISTRIBUTION_SECURITY_BOUNDARY));
  assert.ok(descriptor.coreDefinitions().includes(SDK_CORE_DEFINITIONS.PACKAGE_PROVENANCE));
  assert.ok(descriptor.declarationFields().includes(SDK_DECLARATION_FIELDS.CONTRACT_COVERAGE));
  assert.ok(descriptor.audienceClassifications().includes(SDK_AUDIENCE_CLASSIFICATIONS.AI_ORCHESTRATORS_AGENTS));
  assert.ok(descriptor.logicalLayers().includes(SDK_DISTRIBUTION_LOGICAL_LAYERS.EXTENSION_BOUNDARY));
  assert.ok(descriptor.contractLayerElements().includes(SDK_CONTRACT_LAYER_ELEMENTS.IDEMPOTENCY_CONCURRENCY));
});

test('ARCH-017-06 exposes generation, production, client, behavior, extension, test, and version metadata', () => {
  const descriptor = new SdkArchitectureDistributionDescriptor();
  assert.ok(descriptor.generationManifestFields().includes(SDK_GENERATION_MANIFEST_FIELDS.DIGEST));
  assert.ok(descriptor.productionFlowStages().includes(SDK_PRODUCTION_FLOW_STAGES.VERIFY_INSTALLATION));
  assert.ok(descriptor.clientConfigurationFields().includes(SDK_CLIENT_CONFIGURATION_FIELDS.CREDENTIAL_PROVIDER));
  assert.ok(descriptor.behaviorControls().includes(SDK_BEHAVIOR_CONTROLS.LONG_RUNNING));
  assert.ok(descriptor.extensionBoundaryTypes().includes(SDK_EXTENSION_BOUNDARY_TYPES.TEST_TRANSPORTS));
  assert.ok(descriptor.testSupportTypes().includes(SDK_TEST_SUPPORT_TYPES.ISOLATION_SCENARIOS));
  assert.ok(descriptor.versionReleaseFields().includes(SDK_VERSION_RELEASE_FIELDS.MIGRATION_REQUIREMENTS));
});

test('ARCH-017-06 exposes distribution, lifecycle, governance, assurance, evidence, rules, and boundaries', () => {
  const descriptor = new SdkArchitectureDistributionDescriptor();
  assert.ok(descriptor.distributionControls().includes(SDK_DISTRIBUTION_CONTROLS.PROMOTION));
  assert.ok(descriptor.lifecycleControls().includes(SDK_LIFECYCLE_CONTROLS.INCIDENT_RESPONSE));
  assert.ok(descriptor.governanceDecisions().includes(SDK_GOVERNANCE_DECISIONS.EMERGENCY_REVOCATION));
  assert.ok(descriptor.qualityAssuranceGates().includes(SDK_QUALITY_ASSURANCE_GATES.PACKAGE_PROVENANCE));
  assert.ok(descriptor.requiredEvidenceTypes().includes(SDK_REQUIRED_EVIDENCE_TYPES.SBOM));
  assert.ok(descriptor.architecturalRules().includes(SDK_ARCHITECTURAL_RULES.IMMUTABLE_DISTRIBUTION));
  assert.ok(descriptor.architectureBoundaries().includes(SDK_ARCHITECTURE_BOUNDARIES.NO_LANGUAGE_SELECTION));
});

test('ARCH-017-06 validates complete profiles and rejects SDK distribution shortcuts', () => {
  const descriptor = new SdkArchitectureDistributionDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const validation = descriptor.validateProfile({
    apiContractAuthoritative: false,
    sdkGovernedProduct: false,
    distributionSecurityBoundary: false,
    providerValidationAuthoritative: false,
    stablePublicationGated: false,
    sdkReplacesApiContract: true,
    sdkPossessionGrantsAuthority: true,
    generatedCodeManuallyPatched: true,
    sideEffectRetryWithoutIdempotency: true,
    promotionRebuildsUntestedArtifact: true,
    agentInventsCredentials: true,
    selectsLanguagesOrVendors: true
  });

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /faithful-and-predictable-api-consumption/);
  assert.match(validation.errors.join('\n'), /approved API contract to be authoritative/);
  assert.match(validation.errors.join('\n'), /SDK possession or configuration from granting API authority/);
  assert.match(validation.errors.join('\n'), /automatic side-effect retry without explicit contract/);
  assert.match(validation.errors.join('\n'), /does not select languages/);
});

test('ARCH-017-06 detects incomplete SDK architecture metadata', () => {
  class IncompleteDescriptor extends SdkArchitectureDistributionDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === SDK_ARCHITECTURE_DISTRIBUTION_ERROR_CODE
  );
});

test('ARCH-017-06 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('SdkArchitectureDistributionDescriptor');
  assert.ok(descriptor instanceof SdkArchitectureDistributionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'principles', 'coreDefinitions', 'declarationFields',
    'audienceClassifications', 'logicalLayers', 'contractLayerElements',
    'generationManifestFields', 'productionFlowStages', 'clientConfigurationFields',
    'behaviorControls', 'extensionBoundaryTypes', 'testSupportTypes', 'versionReleaseFields',
    'distributionControls', 'lifecycleControls', 'governanceDecisions',
    'qualityAssuranceGates', 'requiredEvidenceTypes', 'architecturalRules',
    'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new SdkArchitectureDistributionProfile({
    profileName: 'SDK Architecture and Distribution',
    ...metadata
  });
}
