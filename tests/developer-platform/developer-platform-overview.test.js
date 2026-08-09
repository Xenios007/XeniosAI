import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_AGENT_AUTHORITY_REQUIREMENTS,
  DEVELOPER_CONTROL_LOOP_STAGES,
  DEVELOPER_CONTROL_PLANE_SERVICES,
  DEVELOPER_PLATFORM_ARCHITECTURAL_RULES,
  DEVELOPER_PLATFORM_CAPABILITY_DOMAINS,
  DEVELOPER_PLATFORM_ERROR_CODES,
  DEVELOPER_PLATFORM_LANDSCAPE_STAGES,
  DEVELOPER_PLATFORM_OVERVIEW_OBJECTIVES,
  DEVELOPER_PLATFORM_QUALITY_ATTRIBUTES,
  DEVELOPER_PLATFORM_USERS,
  DEVELOPER_PORTAL_INTERFACES,
  DeveloperPlatformOverviewDescriptor,
  DeveloperPlatformOverviewProfile,
  FUTURE_DEVELOPER_PLATFORM_CAPABILITIES,
  OPERATIONAL_READINESS_ITEMS,
  PAVED_PATH_CONTRACT_FIELDS,
  PAVED_PATH_TYPES,
  SERVICE_METADATA_FIELDS,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('developer platform overview exposes documented objectives, users, landscape, domains, control plane, and control loop', () => {
  const descriptor = new DeveloperPlatformOverviewDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(DEVELOPER_PLATFORM_OVERVIEW_OBJECTIVES));
  assert.deepEqual(descriptor.users(), Object.values(DEVELOPER_PLATFORM_USERS));
  assert.deepEqual(descriptor.landscapeStages(), Object.values(DEVELOPER_PLATFORM_LANDSCAPE_STAGES));
  assert.deepEqual(descriptor.capabilityDomains(), Object.values(DEVELOPER_PLATFORM_CAPABILITY_DOMAINS));
  assert.ok(descriptor.controlPlaneServices().includes(DEVELOPER_CONTROL_PLANE_SERVICES.CATALOG_REGISTRATION));
  assert.ok(descriptor.controlLoopStages().includes(DEVELOPER_CONTROL_LOOP_STAGES.LEARN_AND_IMPROVE));
});

test('developer platform overview exposes paved paths, metadata, architecture, AI, delivery, portal, catalog, and readiness metadata', () => {
  const descriptor = new DeveloperPlatformOverviewDescriptor();

  assert.ok(descriptor.pavedPathTypes().includes(PAVED_PATH_TYPES.GOVERNANCE_AUTOMATION));
  assert.ok(descriptor.pavedPathContractFields().includes(PAVED_PATH_CONTRACT_FIELDS.AI_CONTROLS));
  assert.ok(descriptor.escapePathReasons().includes('research-is-required'));
  assert.ok(descriptor.templateContents().includes('ownership-metadata'));
  assert.ok(descriptor.selfServiceRequestFields().includes('expiration-or-cleanup'));
  assert.ok(descriptor.platformServices().includes('platform-status-service'));
  assert.ok(descriptor.projectMetadataFields().includes('tenant-and-property-scope'));
  assert.ok(descriptor.serviceMetadataFields().includes(SERVICE_METADATA_FIELDS.DATA_OWNERSHIP));
  assert.ok(descriptor.metadataAuthorityFields().includes('update-workflow'));
  assert.ok(descriptor.architectureIntegrationCapabilities().includes('architecture-evidence'));
  assert.ok(descriptor.aiAgentAuthorityRequirements().includes(AI_AGENT_AUTHORITY_REQUIREMENTS.REVOCATION));
  assert.ok(descriptor.operationalReadinessItems().includes(OPERATIONAL_READINESS_ITEMS.KNOWN_RISKS));
  assert.ok(descriptor.portalInterfaces().includes(DEVELOPER_PORTAL_INTERFACES.GOVERNANCE_STATUS));
});

test('developer platform overview exposes tenant, property, security, governance, feedback, measures, quality, rules, boundaries, and future metadata', () => {
  const descriptor = new DeveloperPlatformOverviewDescriptor();

  assert.ok(descriptor.tenantAwareRequirements().includes('tenant-assurance'));
  assert.ok(descriptor.propertyAwareRequirements().includes('manual-fallback'));
  assert.ok(descriptor.securityAreas().includes('ai-agent-identity'));
  assert.ok(descriptor.governanceAreas().includes('ai-governance'));
  assert.ok(descriptor.feedbackSources().includes('architecture-deviations'));
  assert.ok(descriptor.measures().includes('ai-agent-success-and-intervention'));
  assert.ok(descriptor.relationshipStages().includes('Developer Platform'));
  assert.ok(descriptor.boundaries().includes('replace-accountable-code-review'));
  assert.ok(descriptor.qualityAttributes().includes(DEVELOPER_PLATFORM_QUALITY_ATTRIBUTES.ENTERPRISE_TRUST));
  assert.ok(descriptor.architecturalRules().includes(DEVELOPER_PLATFORM_ARCHITECTURAL_RULES.ESCAPE_PATHS_WITH_ADRS_EXCEPTIONS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DEVELOPER_PLATFORM_CAPABILITIES.GOVERNED_AUTONOMOUS_MAINTENANCE));
});

test('developer platform overview validates complete profiles and rejects architecture boundary violations', () => {
  const descriptor = new DeveloperPlatformOverviewDescriptor();
  const valid = descriptor.validateProfile(completeProfile(descriptor));
  const invalid = descriptor.validateProfile({
    overviewName: '',
    ...partialProfile(descriptor),
    internalProductManaged: false,
    architectureDrivenDevelopmentReinforced: false,
    selfServiceGuardrailsPreserved: false,
    pavedPathsEvolvable: false,
    cognitiveLoadReducedWithoutConcealment: false,
    secureCompliantDefaultsRequired: false,
    trustedTraceableArtifactsRequired: false,
    comprehensiveQualityIntegrated: false,
    operationalReadinessRequired: false,
    authoritativeMetadataRequired: false,
    tenantPropertyBoundariesPreserved: false,
    aiAgentsExplicitlyAuthorized: false,
    aiAuthorityNotInferredFromCredentials: false,
    aiOutputNotAssumedCorrect: false,
    governanceEvidenceGenerated: false,
    outcomeMeasuresOverOutputVolume: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesSourceControlProvider: true,
    prescribesBuildProduct: true,
    prescribesCloudProvider: true,
    prescribesProgrammingLanguage: true,
    prescribesIde: true,
    prescribesDeveloperPortalProduct: true,
    prescribesCiCdTool: true,
    prescribesArtifactRegistry: true,
    definesAgentRuntime: true,
    definesWorkflowInternals: true,
    replacesArchitectureAuthority: true,
    replacesCodeReview: true,
    replacesEnterpriseOperations: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /architecture-aligned-implementation/);
  assert.match(invalid.errors.join('\n'), /ai-implementation-agent/);
  assert.match(invalid.errors.join('\n'), /Project, Source, Build, Test, Security, and Quality Services/);
  assert.match(invalid.errors.join('\n'), /catalog-registration/);
  assert.match(invalid.errors.join('\n'), /governance-automation/);
  assert.match(invalid.errors.join('\n'), /Developer Platform must be managed as an internal product/);
  assert.match(invalid.errors.join('\n'), /Architecture-Driven Development/);
  assert.match(invalid.errors.join('\n'), /available credentials alone/);
  assert.match(invalid.errors.join('\n'), /does not prescribe source-control providers/);
  assert.match(invalid.errors.join('\n'), /does not define detailed agent runtime behavior/);
  assert.match(invalid.errors.join('\n'), /must not replace accountable code review/);
});

test('developer platform overview assertion rejects incomplete metadata', () => {
  class IncompleteDeveloperPlatformOverviewDescriptor extends DeveloperPlatformOverviewDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteDeveloperPlatformOverviewDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === DEVELOPER_PLATFORM_ERROR_CODES.DEVELOPER_PLATFORM_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('developer platform overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeveloperPlatform(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('DeveloperPlatformOverviewDescriptor');

  assert.ok(descriptor instanceof DeveloperPlatformOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  return new DeveloperPlatformOverviewProfile({
    overviewName: 'Developer Platform Overview',
    objectives: descriptor.objectives(),
    users: descriptor.users(),
    landscapeStages: descriptor.landscapeStages(),
    capabilityDomains: descriptor.capabilityDomains(),
    controlPlaneServices: descriptor.controlPlaneServices(),
    controlLoopStages: descriptor.controlLoopStages(),
    productFields: descriptor.productFields(),
    pavedPathTypes: descriptor.pavedPathTypes(),
    pavedPathContractFields: descriptor.pavedPathContractFields(),
    escapePathReasons: descriptor.escapePathReasons(),
    templateContents: descriptor.templateContents(),
    templateLifecycleFields: descriptor.templateLifecycleFields(),
    selfServiceActions: descriptor.selfServiceActions(),
    selfServiceRequestFields: descriptor.selfServiceRequestFields(),
    platformServices: descriptor.platformServices(),
    projectMetadataFields: descriptor.projectMetadataFields(),
    serviceMetadataFields: descriptor.serviceMetadataFields(),
    metadataAuthorityFields: descriptor.metadataAuthorityFields(),
    architectureIntegrationCapabilities: descriptor.architectureIntegrationCapabilities(),
    humanDeveloperJourneySteps: descriptor.humanDeveloperJourneySteps(),
    aiImplementationAgentJourneySteps: descriptor.aiImplementationAgentJourneySteps(),
    aiAgentAuthorityRequirements: descriptor.aiAgentAuthorityRequirements(),
    aiChangeAttributionFields: descriptor.aiChangeAttributionFields(),
    buildArtifactQualities: descriptor.buildArtifactQualities(),
    qualityValidationAreas: descriptor.qualityValidationAreas(),
    environmentQualities: descriptor.environmentQualities(),
    deliveryComponents: descriptor.deliveryComponents(),
    operationalReadinessItems: descriptor.operationalReadinessItems(),
    portalInterfaces: descriptor.portalInterfaces(),
    serviceCatalogFields: descriptor.serviceCatalogFields(),
    documentationQualities: descriptor.documentationQualities(),
    tenantAwareRequirements: descriptor.tenantAwareRequirements(),
    propertyAwareRequirements: descriptor.propertyAwareRequirements(),
    securityAreas: descriptor.securityAreas(),
    governanceAreas: descriptor.governanceAreas(),
    feedbackSources: descriptor.feedbackSources(),
    measures: descriptor.measures(),
    relationshipStages: descriptor.relationshipStages(),
    boundaries: descriptor.boundaries(),
    qualityAttributes: descriptor.qualityAttributes(),
    architecturalRules: descriptor.architecturalRules(),
    futureCapabilities: descriptor.futureCapabilities()
  });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) {
    if (Array.isArray(value)) result[key] = value.slice(0, 1);
  }
  return result;
}
