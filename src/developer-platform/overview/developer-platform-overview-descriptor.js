import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_AGENT_AUTHORITY_REQUIREMENTS,
  AI_CHANGE_ATTRIBUTION_FIELDS,
  AI_IMPLEMENTATION_AGENT_JOURNEY_STEPS,
  ARCHITECTURE_INTEGRATION_CAPABILITIES,
  BUILD_ARTIFACT_QUALITIES,
  DELIVERY_COMPONENTS,
  DEVELOPER_CONTROL_LOOP_STAGES,
  DEVELOPER_CONTROL_PLANE_SERVICES,
  DEVELOPER_DOCUMENTATION_QUALITIES,
  DEVELOPER_PLATFORM_ARCHITECTURAL_RULES,
  DEVELOPER_PLATFORM_BOUNDARIES,
  DEVELOPER_PLATFORM_CAPABILITY_DOMAINS,
  DEVELOPER_PLATFORM_ERROR_CODES,
  DEVELOPER_PLATFORM_GOVERNANCE_AREAS,
  DEVELOPER_PLATFORM_LANDSCAPE_STAGES,
  DEVELOPER_PLATFORM_MEASURES,
  DEVELOPER_PLATFORM_OVERVIEW_OBJECTIVES,
  DEVELOPER_PLATFORM_PRODUCT_FIELDS,
  DEVELOPER_PLATFORM_QUALITY_ATTRIBUTES,
  DEVELOPER_PLATFORM_RELATIONSHIP_STAGES,
  DEVELOPER_PLATFORM_SECURITY_AREAS,
  DEVELOPER_PLATFORM_SERVICES,
  DEVELOPER_PLATFORM_USERS,
  DEVELOPER_PORTAL_INTERFACES,
  DEVELOPER_QUALITY_VALIDATION_AREAS,
  ENVIRONMENT_QUALITIES,
  ESCAPE_PATH_REASONS,
  FUTURE_DEVELOPER_PLATFORM_CAPABILITIES,
  HUMAN_DEVELOPER_JOURNEY_STEPS,
  METADATA_AUTHORITY_FIELDS,
  OPERATIONAL_READINESS_ITEMS,
  PAVED_PATH_CONTRACT_FIELDS,
  PAVED_PATH_TYPES,
  PLATFORM_FEEDBACK_SOURCES,
  PROJECT_METADATA_FIELDS,
  PROPERTY_AWARE_DEVELOPMENT_REQUIREMENTS,
  SELF_SERVICE_ACTIONS,
  SELF_SERVICE_REQUEST_FIELDS,
  SERVICE_CATALOG_FIELDS,
  SERVICE_METADATA_FIELDS,
  TEMPLATE_CONTENTS,
  TEMPLATE_LIFECYCLE_FIELDS,
  TENANT_AWARE_DEVELOPMENT_REQUIREMENTS
} from '../constants.js';
import { DeveloperPlatformOverviewProfile } from '../contracts/developer-platform-overview-profile.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';

const MAP = Object.freeze({
  objectives: DEVELOPER_PLATFORM_OVERVIEW_OBJECTIVES,
  users: DEVELOPER_PLATFORM_USERS,
  landscapeStages: DEVELOPER_PLATFORM_LANDSCAPE_STAGES,
  capabilityDomains: DEVELOPER_PLATFORM_CAPABILITY_DOMAINS,
  controlPlaneServices: DEVELOPER_CONTROL_PLANE_SERVICES,
  controlLoopStages: DEVELOPER_CONTROL_LOOP_STAGES,
  productFields: DEVELOPER_PLATFORM_PRODUCT_FIELDS,
  pavedPathTypes: PAVED_PATH_TYPES,
  pavedPathContractFields: PAVED_PATH_CONTRACT_FIELDS,
  escapePathReasons: ESCAPE_PATH_REASONS,
  templateContents: TEMPLATE_CONTENTS,
  templateLifecycleFields: TEMPLATE_LIFECYCLE_FIELDS,
  selfServiceActions: SELF_SERVICE_ACTIONS,
  selfServiceRequestFields: SELF_SERVICE_REQUEST_FIELDS,
  platformServices: DEVELOPER_PLATFORM_SERVICES,
  projectMetadataFields: PROJECT_METADATA_FIELDS,
  serviceMetadataFields: SERVICE_METADATA_FIELDS,
  metadataAuthorityFields: METADATA_AUTHORITY_FIELDS,
  architectureIntegrationCapabilities: ARCHITECTURE_INTEGRATION_CAPABILITIES,
  humanDeveloperJourneySteps: HUMAN_DEVELOPER_JOURNEY_STEPS,
  aiImplementationAgentJourneySteps: AI_IMPLEMENTATION_AGENT_JOURNEY_STEPS,
  aiAgentAuthorityRequirements: AI_AGENT_AUTHORITY_REQUIREMENTS,
  aiChangeAttributionFields: AI_CHANGE_ATTRIBUTION_FIELDS,
  buildArtifactQualities: BUILD_ARTIFACT_QUALITIES,
  qualityValidationAreas: DEVELOPER_QUALITY_VALIDATION_AREAS,
  environmentQualities: ENVIRONMENT_QUALITIES,
  deliveryComponents: DELIVERY_COMPONENTS,
  operationalReadinessItems: OPERATIONAL_READINESS_ITEMS,
  portalInterfaces: DEVELOPER_PORTAL_INTERFACES,
  serviceCatalogFields: SERVICE_CATALOG_FIELDS,
  documentationQualities: DEVELOPER_DOCUMENTATION_QUALITIES,
  tenantAwareRequirements: TENANT_AWARE_DEVELOPMENT_REQUIREMENTS,
  propertyAwareRequirements: PROPERTY_AWARE_DEVELOPMENT_REQUIREMENTS,
  securityAreas: DEVELOPER_PLATFORM_SECURITY_AREAS,
  governanceAreas: DEVELOPER_PLATFORM_GOVERNANCE_AREAS,
  feedbackSources: PLATFORM_FEEDBACK_SOURCES,
  measures: DEVELOPER_PLATFORM_MEASURES,
  relationshipStages: DEVELOPER_PLATFORM_RELATIONSHIP_STAGES,
  boundaries: DEVELOPER_PLATFORM_BOUNDARIES,
  qualityAttributes: DEVELOPER_PLATFORM_QUALITY_ATTRIBUTES,
  architecturalRules: DEVELOPER_PLATFORM_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_DEVELOPER_PLATFORM_CAPABILITIES
});

const EXPECTED_COUNTS = Object.freeze({
  objectives: 19,
  users: 14,
  landscapeStages: 7,
  capabilityDomains: 10,
  controlPlaneServices: 17,
  controlLoopStages: 8,
  productFields: 18,
  pavedPathTypes: 13,
  pavedPathContractFields: 21,
  escapePathReasons: 6,
  templateContents: 16,
  templateLifecycleFields: 12,
  selfServiceActions: 13,
  selfServiceRequestFields: 16,
  platformServices: 18,
  projectMetadataFields: 21,
  serviceMetadataFields: 23,
  metadataAuthorityFields: 10,
  architectureIntegrationCapabilities: 12,
  humanDeveloperJourneySteps: 12,
  aiImplementationAgentJourneySteps: 11,
  aiAgentAuthorityRequirements: 14,
  aiChangeAttributionFields: 11,
  buildArtifactQualities: 11,
  qualityValidationAreas: 13,
  environmentQualities: 11,
  deliveryComponents: 12,
  operationalReadinessItems: 16,
  portalInterfaces: 17,
  serviceCatalogFields: 16,
  documentationQualities: 9,
  tenantAwareRequirements: 9,
  propertyAwareRequirements: 10,
  securityAreas: 12,
  governanceAreas: 12,
  feedbackSources: 14,
  measures: 18,
  relationshipStages: 3,
  boundaries: 10,
  qualityAttributes: 15,
  architecturalRules: 17,
  futureCapabilities: 14
});

export class DeveloperPlatformOverviewDescriptor {
  objectives() { return values(MAP.objectives); }
  users() { return values(MAP.users); }
  landscapeStages() { return values(MAP.landscapeStages); }
  capabilityDomains() { return values(MAP.capabilityDomains); }
  controlPlaneServices() { return values(MAP.controlPlaneServices); }
  controlLoopStages() { return values(MAP.controlLoopStages); }
  productFields() { return values(MAP.productFields); }
  pavedPathTypes() { return values(MAP.pavedPathTypes); }
  pavedPathContractFields() { return values(MAP.pavedPathContractFields); }
  escapePathReasons() { return values(MAP.escapePathReasons); }
  templateContents() { return values(MAP.templateContents); }
  templateLifecycleFields() { return values(MAP.templateLifecycleFields); }
  selfServiceActions() { return values(MAP.selfServiceActions); }
  selfServiceRequestFields() { return values(MAP.selfServiceRequestFields); }
  platformServices() { return values(MAP.platformServices); }
  projectMetadataFields() { return values(MAP.projectMetadataFields); }
  serviceMetadataFields() { return values(MAP.serviceMetadataFields); }
  metadataAuthorityFields() { return values(MAP.metadataAuthorityFields); }
  architectureIntegrationCapabilities() { return values(MAP.architectureIntegrationCapabilities); }
  humanDeveloperJourneySteps() { return values(MAP.humanDeveloperJourneySteps); }
  aiImplementationAgentJourneySteps() { return values(MAP.aiImplementationAgentJourneySteps); }
  aiAgentAuthorityRequirements() { return values(MAP.aiAgentAuthorityRequirements); }
  aiChangeAttributionFields() { return values(MAP.aiChangeAttributionFields); }
  buildArtifactQualities() { return values(MAP.buildArtifactQualities); }
  qualityValidationAreas() { return values(MAP.qualityValidationAreas); }
  environmentQualities() { return values(MAP.environmentQualities); }
  deliveryComponents() { return values(MAP.deliveryComponents); }
  operationalReadinessItems() { return values(MAP.operationalReadinessItems); }
  portalInterfaces() { return values(MAP.portalInterfaces); }
  serviceCatalogFields() { return values(MAP.serviceCatalogFields); }
  documentationQualities() { return values(MAP.documentationQualities); }
  tenantAwareRequirements() { return values(MAP.tenantAwareRequirements); }
  propertyAwareRequirements() { return values(MAP.propertyAwareRequirements); }
  securityAreas() { return values(MAP.securityAreas); }
  governanceAreas() { return values(MAP.governanceAreas); }
  feedbackSources() { return values(MAP.feedbackSources); }
  measures() { return values(MAP.measures); }
  relationshipStages() { return values(MAP.relationshipStages); }
  boundaries() { return values(MAP.boundaries); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof DeveloperPlatformOverviewProfile
      ? profileInput
      : new DeveloperPlatformOverviewProfile(profileInput);
    const errors = [];

    if (!profile.overviewName) errors.push('Developer Platform overview profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.internalProductManaged !== true) errors.push('Developer Platform must be managed as an internal product.');
    if (profile.architectureDrivenDevelopmentReinforced !== true) errors.push('Developer Platform must reinforce Architecture-Driven Development.');
    if (profile.selfServiceGuardrailsPreserved !== true) errors.push('Self-service must preserve guardrails.');
    if (profile.pavedPathsEvolvable !== true) errors.push('Paved paths must be supported and evolvable.');
    if (profile.cognitiveLoadReducedWithoutConcealment !== true) errors.push('Developer Platform must reduce cognitive load without concealing critical behavior.');
    if (profile.secureCompliantDefaultsRequired !== true) errors.push('Secure and compliant defaults are required.');
    if (profile.trustedTraceableArtifactsRequired !== true) errors.push('Trusted and traceable artifacts are required.');
    if (profile.comprehensiveQualityIntegrated !== true) errors.push('Comprehensive testing and quality must be integrated.');
    if (profile.operationalReadinessRequired !== true) errors.push('Operational readiness is required.');
    if (profile.authoritativeMetadataRequired !== true) errors.push('Authoritative project and service metadata is required.');
    if (profile.tenantPropertyBoundariesPreserved !== true) errors.push('Tenant and property boundaries must be preserved.');
    if (profile.aiAgentsExplicitlyAuthorized !== true) errors.push('AI implementation agents must be explicitly authorized.');
    if (profile.aiAuthorityNotInferredFromCredentials !== true) errors.push('AI agents must not infer authority from available credentials alone.');
    if (profile.aiOutputNotAssumedCorrect !== true) errors.push('AI output must not be assumed correct because it compiles or passes limited tests.');
    if (profile.governanceEvidenceGenerated !== true) errors.push('Developer Platform must generate governance evidence.');
    if (profile.outcomeMeasuresOverOutputVolume !== true) errors.push('Measures must not reward output volume over safe value delivery.');
    if (profile.vendorNeutral !== true) errors.push('Developer Platform must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Developer Platform must remain technology independent.');
    if (profile.prescribesSourceControlProvider === true) errors.push('ARCH-013-01 does not prescribe source-control providers.');
    if (profile.prescribesBuildProduct === true) errors.push('ARCH-013-01 does not prescribe build products.');
    if (profile.prescribesCloudProvider === true) errors.push('ARCH-013-01 does not prescribe cloud providers.');
    if (profile.prescribesProgrammingLanguage === true) errors.push('ARCH-013-01 does not prescribe programming languages.');
    if (profile.prescribesIde === true) errors.push('ARCH-013-01 does not prescribe IDEs.');
    if (profile.prescribesDeveloperPortalProduct === true) errors.push('ARCH-013-01 does not prescribe developer portal products.');
    if (profile.prescribesCiCdTool === true) errors.push('ARCH-013-01 does not prescribe CI/CD tools.');
    if (profile.prescribesArtifactRegistry === true) errors.push('ARCH-013-01 does not prescribe artifact registries.');
    if (profile.definesAgentRuntime === true) errors.push('ARCH-013-01 does not define detailed agent runtime behavior.');
    if (profile.definesWorkflowInternals === true) errors.push('ARCH-013-01 does not define workflow execution internals.');
    if (profile.replacesArchitectureAuthority === true) errors.push('Developer Platform must not replace architecture or ADR authority.');
    if (profile.replacesCodeReview === true) errors.push('Developer Platform must not replace accountable code review.');
    if (profile.replacesEnterpriseOperations === true) errors.push('Developer Platform must not replace Enterprise Operations.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    for (const [key, expected] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== expected) errors.push(`Developer Platform Overview must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        DEVELOPER_PLATFORM_ERROR_CODES.DEVELOPER_PLATFORM_OVERVIEW_INVALID,
        'Developer Platform Overview violates ARCH-013-01.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new DeveloperPlatformValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
