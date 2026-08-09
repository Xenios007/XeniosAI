import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { PlatformCapabilityModelProfile } from '../contracts/platform-capability-model-profile.js';
import {
  BUILD_BUY_INTEGRATE_FACTORS, CAPABILITY_ANTI_PATTERNS, CAPABILITY_COLLABORATION_MODES,
  CAPABILITY_CONTRACT_FIELDS, CAPABILITY_COST_CAPACITY_FIELDS, CAPABILITY_CRITICALITY_CLASSES,
  CAPABILITY_DEPENDENCY_RULES, CAPABILITY_DEPRECATION_FIELDS, CAPABILITY_FAILURE_FIELDS,
  CAPABILITY_GOVERNANCE_AREAS, CAPABILITY_INTRODUCTION_FIELDS, CAPABILITY_LIFECYCLE_STAGES,
  CAPABILITY_MATURITY_LEVELS, CAPABILITY_MEASURES, CAPABILITY_OBSERVABILITY_SIGNALS,
  CAPABILITY_OWNERSHIP_FIELDS, CAPABILITY_PORTFOLIO_FIELDS, CAPABILITY_SCOPE_TYPES,
  CAPABILITY_SECURITY_FIELDS, CAPABILITY_SERVICE_COMMITMENT_FIELDS, CONTROL_PLANE_CAPABILITIES,
  CONTROL_PLANE_REQUEST_LIFECYCLE, CORE_PLATFORM_CAPABILITIES, DEVELOPER_PLATFORM_PLANES,
  ENVIRONMENT_CONTEXT_TYPES, EVIDENCE_INTELLIGENCE_CAPABILITIES, EXECUTION_PLANE_CAPABILITIES,
  EXPERIENCE_PLANE_CAPABILITIES, FUTURE_CAPABILITY_MODEL_CAPABILITIES, HUMAN_AI_PARTICIPATION_FIELDS,
  PLATFORM_CAPABILITY_ARCHITECTURAL_RULES, PLATFORM_CAPABILITY_DOMAINS, PLATFORM_CAPABILITY_MODEL_ERROR_CODE,
  PLATFORM_CAPABILITY_MODEL_OBJECTIVES, PLATFORM_CAPABILITY_PRINCIPLES, PLATFORM_REQUEST_FIELDS,
  PLATFORM_REQUEST_STATES, RESOURCE_PLANE_RESOURCES, SHARED_METADATA_IDENTIFIERS,
  STATE_AUTHORITY_ASSIGNMENTS
} from '../capability-model-constants.js';

const MAP = Object.freeze({
  objectives: PLATFORM_CAPABILITY_MODEL_OBJECTIVES,
  principles: PLATFORM_CAPABILITY_PRINCIPLES,
  planes: DEVELOPER_PLATFORM_PLANES,
  domains: PLATFORM_CAPABILITY_DOMAINS,
  experienceCapabilities: EXPERIENCE_PLANE_CAPABILITIES,
  controlCapabilities: CONTROL_PLANE_CAPABILITIES,
  executionCapabilities: EXECUTION_PLANE_CAPABILITIES,
  resourceTypes: RESOURCE_PLANE_RESOURCES,
  evidenceCapabilities: EVIDENCE_INTELLIGENCE_CAPABILITIES,
  coreCapabilities: CORE_PLATFORM_CAPABILITIES,
  requestLifecycle: CONTROL_PLANE_REQUEST_LIFECYCLE,
  requestFields: PLATFORM_REQUEST_FIELDS,
  requestStates: PLATFORM_REQUEST_STATES,
  collaborationModes: CAPABILITY_COLLABORATION_MODES,
  contractFields: CAPABILITY_CONTRACT_FIELDS,
  authorityAssignments: STATE_AUTHORITY_ASSIGNMENTS,
  metadataIdentifiers: SHARED_METADATA_IDENTIFIERS,
  scopeTypes: CAPABILITY_SCOPE_TYPES,
  environmentTypes: ENVIRONMENT_CONTEXT_TYPES,
  humanAiFields: HUMAN_AI_PARTICIPATION_FIELDS,
  ownershipFields: CAPABILITY_OWNERSHIP_FIELDS,
  serviceCommitments: CAPABILITY_SERVICE_COMMITMENT_FIELDS,
  criticalityClasses: CAPABILITY_CRITICALITY_CLASSES,
  dependencyRules: CAPABILITY_DEPENDENCY_RULES,
  failureFields: CAPABILITY_FAILURE_FIELDS,
  observabilitySignals: CAPABILITY_OBSERVABILITY_SIGNALS,
  securityFields: CAPABILITY_SECURITY_FIELDS,
  costCapacityFields: CAPABILITY_COST_CAPACITY_FIELDS,
  portfolioFields: CAPABILITY_PORTFOLIO_FIELDS,
  lifecycleStages: CAPABILITY_LIFECYCLE_STAGES,
  maturityLevels: CAPABILITY_MATURITY_LEVELS,
  introductionFields: CAPABILITY_INTRODUCTION_FIELDS,
  buildBuyIntegrateFactors: BUILD_BUY_INTEGRATE_FACTORS,
  deprecationFields: CAPABILITY_DEPRECATION_FIELDS,
  measures: CAPABILITY_MEASURES,
  governanceAreas: CAPABILITY_GOVERNANCE_AREAS,
  antiPatterns: CAPABILITY_ANTI_PATTERNS,
  architecturalRules: PLATFORM_CAPABILITY_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_CAPABILITY_MODEL_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  capabilityBeforeTool: 'Capability contracts must remain distinct from tools.',
  productOwnershipRequired: 'Material capabilities require product ownership and service expectations.',
  explicitBoundariesRequired: 'Capabilities require explicit boundaries, contracts, state ownership, dependencies, and failure boundaries.',
  replaceableContractsRequired: 'Capabilities must expose open, versioned, replaceable contracts.',
  controlPlaneNotMonolith: 'The Developer Control Plane must orchestrate without becoming a platform monolith.',
  evidenceByDesign: 'Evidence must be emitted during normal capability execution.',
  contextPreserved: 'Identity, intent, tenant, property, environment, risk, policy, and evidence context must be preserved.',
  oneStateAuthorityRequired: 'Each material state must have one declared authoritative source.',
  deterministicControlRequired: 'Critical control decisions should be deterministic and explainable wherever practical.',
  aiRecommendationsNotAuthority: 'AI recommendations must remain distinguishable from authoritative decisions.',
  tenantPropertyScopeExplicit: 'Tenant and property behavior must be explicit in capability contracts.',
  failureIsolationRequired: 'Capabilities must define failure isolation, retry, cancellation, compensation, and recovery.',
  lifecycleGoverned: 'Capability maturity, introduction, investment, deprecation, and retirement must be governed.',
  vendorNeutral: 'Platform Capability Model must remain vendor neutral.',
  technologyIndependent: 'Platform Capability Model must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  prescribesPortal: 'ARCH-013-03 does not prescribe a portal product.',
  prescribesSourceControl: 'ARCH-013-03 does not prescribe a source-control product.',
  prescribesBuildSystem: 'ARCH-013-03 does not prescribe a build system.',
  prescribesCloud: 'ARCH-013-03 does not prescribe a cloud platform.',
  prescribesArtifactRegistry: 'ARCH-013-03 does not prescribe an artifact registry.',
  treatsToolAsCapability: 'A tool, repository, pipeline, script, vendor license, team, or technology is not the capability model.',
  duplicatesStateWithoutAuthority: 'Portals, catalogs, search, analytics, and AI assistance must preserve source and freshness.',
  grantsAiAuthorityFromCredentials: 'AI agents must not gain authority through available credentials.'
});

export class PlatformCapabilityModelDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  planes() { return values(MAP.planes); }
  domains() { return values(MAP.domains); }
  experienceCapabilities() { return values(MAP.experienceCapabilities); }
  controlCapabilities() { return values(MAP.controlCapabilities); }
  executionCapabilities() { return values(MAP.executionCapabilities); }
  resourceTypes() { return values(MAP.resourceTypes); }
  evidenceCapabilities() { return values(MAP.evidenceCapabilities); }
  coreCapabilities() { return values(MAP.coreCapabilities); }
  requestLifecycle() { return values(MAP.requestLifecycle); }
  requestFields() { return values(MAP.requestFields); }
  requestStates() { return values(MAP.requestStates); }
  collaborationModes() { return values(MAP.collaborationModes); }
  contractFields() { return values(MAP.contractFields); }
  authorityAssignments() { return values(MAP.authorityAssignments); }
  metadataIdentifiers() { return values(MAP.metadataIdentifiers); }
  scopeTypes() { return values(MAP.scopeTypes); }
  environmentTypes() { return values(MAP.environmentTypes); }
  humanAiFields() { return values(MAP.humanAiFields); }
  ownershipFields() { return values(MAP.ownershipFields); }
  serviceCommitments() { return values(MAP.serviceCommitments); }
  criticalityClasses() { return values(MAP.criticalityClasses); }
  dependencyRules() { return values(MAP.dependencyRules); }
  failureFields() { return values(MAP.failureFields); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  securityFields() { return values(MAP.securityFields); }
  costCapacityFields() { return values(MAP.costCapacityFields); }
  portfolioFields() { return values(MAP.portfolioFields); }
  lifecycleStages() { return values(MAP.lifecycleStages); }
  maturityLevels() { return values(MAP.maturityLevels); }
  introductionFields() { return values(MAP.introductionFields); }
  buildBuyIntegrateFactors() { return values(MAP.buildBuyIntegrateFactors); }
  deprecationFields() { return values(MAP.deprecationFields); }
  measures() { return values(MAP.measures); }
  governanceAreas() { return values(MAP.governanceAreas); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof PlatformCapabilityModelProfile ? profileInput : new PlatformCapabilityModelProfile(profileInput);
    const errors = [];
    if (!profile.modelName) errors.push('Platform Capability Model profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Platform Capability Model must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(PLATFORM_CAPABILITY_MODEL_ERROR_CODE, 'Platform Capability Model violates ARCH-013-03.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
