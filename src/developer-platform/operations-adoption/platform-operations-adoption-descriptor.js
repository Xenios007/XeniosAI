import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { PlatformOperationsAdoptionProfile } from '../contracts/platform-operations-adoption-profile.js';
import {
  ADOPTION_LIFECYCLE_STATES, ADOPTION_MEASURES, ADOPTION_PERSONAS, ADOPTION_VALUE_PROPOSITIONS,
  AI_AGENT_OUTCOME_FIELDS, BACKLOG_ITEM_FIELDS, COMMAND_CONTROL_FIELDS, CONTEXTUAL_SUPPORT_FIELDS,
  CRITICAL_PLATFORM_CAPABILITIES, DEGRADED_OPERATION_FIELDS, ENABLEMENT_CHANNELS, FEEDBACK_SOURCES,
  FUTURE_OPERATIONS_ADOPTION_CAPABILITIES, HEALTH_ENDPOINT_TYPES, INCIDENT_MANAGEMENT_STEPS,
  INCIDENT_PRIORITY_FACTORS, LOG_REQUIREMENTS, MIGRATION_FIELDS, OBSERVABILITY_CORRELATION_FIELDS,
  ONBOARDING_FIELDS, OPERATIONAL_CONTROL_LOOP_STAGES, OPERATIONAL_MEASURES, OPERATIONAL_REQUEST_TYPES,
  OPERATIONS_ADOPTION_ANTI_PATTERNS, OPERATIONS_ADOPTION_ARCHITECTURAL_RULES,
  OPERATIONS_ADOPTION_GOVERNANCE_AREAS, OPERATIONS_ADOPTION_MATURITY_LEVELS, OPERATIONS_DOMAINS,
  PLATFORM_HEALTH_FIELDS, PLATFORM_OPERATIONS_ADOPTION_ERROR_CODE, PLATFORM_OPERATIONS_ADOPTION_OBJECTIVES,
  PLATFORM_OPERATIONS_ADOPTION_PRINCIPLES, PLATFORM_OWNERSHIP_ROLES, PLATFORM_SIGNAL_TYPES,
  PLATFORM_STATUS_FIELDS, PLATFORM_VALUE_FIELDS, PRODUCT_OWNERSHIP_FIELDS, PRODUCTIVITY_FIELDS,
  ROADMAP_DECISION_FACTORS, SERVICE_COMMITMENT_FIELDS, SUPPORT_KNOWLEDGE_REQUIREMENTS, SUPPORT_MODEL_TYPES
} from '../platform-operations-adoption-constants.js';

const MAP = Object.freeze({
  objectives: PLATFORM_OPERATIONS_ADOPTION_OBJECTIVES,
  principles: PLATFORM_OPERATIONS_ADOPTION_PRINCIPLES,
  productOwnershipFields: PRODUCT_OWNERSHIP_FIELDS,
  ownershipRoles: PLATFORM_OWNERSHIP_ROLES,
  serviceCommitmentFields: SERVICE_COMMITMENT_FIELDS,
  criticalCapabilities: CRITICAL_PLATFORM_CAPABILITIES,
  commandControlFields: COMMAND_CONTROL_FIELDS,
  controlLoopStages: OPERATIONAL_CONTROL_LOOP_STAGES,
  healthFields: PLATFORM_HEALTH_FIELDS,
  healthEndpointTypes: HEALTH_ENDPOINT_TYPES,
  observabilityCorrelationFields: OBSERVABILITY_CORRELATION_FIELDS,
  signalTypes: PLATFORM_SIGNAL_TYPES,
  logRequirements: LOG_REQUIREMENTS,
  statusFields: PLATFORM_STATUS_FIELDS,
  incidentSteps: INCIDENT_MANAGEMENT_STEPS,
  incidentPriorityFactors: INCIDENT_PRIORITY_FACTORS,
  degradedOperationFields: DEGRADED_OPERATION_FIELDS,
  operationsDomains: OPERATIONS_DOMAINS,
  supportModelTypes: SUPPORT_MODEL_TYPES,
  contextualSupportFields: CONTEXTUAL_SUPPORT_FIELDS,
  operationalRequestTypes: OPERATIONAL_REQUEST_TYPES,
  supportKnowledgeRequirements: SUPPORT_KNOWLEDGE_REQUIREMENTS,
  adoptionLifecycleStates: ADOPTION_LIFECYCLE_STATES,
  adoptionPersonas: ADOPTION_PERSONAS,
  adoptionValuePropositions: ADOPTION_VALUE_PROPOSITIONS,
  onboardingFields: ONBOARDING_FIELDS,
  migrationFields: MIGRATION_FIELDS,
  enablementChannels: ENABLEMENT_CHANNELS,
  feedbackSources: FEEDBACK_SOURCES,
  aiAgentOutcomeFields: AI_AGENT_OUTCOME_FIELDS,
  productivityFields: PRODUCTIVITY_FIELDS,
  platformValueFields: PLATFORM_VALUE_FIELDS,
  adoptionMeasures: ADOPTION_MEASURES,
  operationalMeasures: OPERATIONAL_MEASURES,
  roadmapDecisionFactors: ROADMAP_DECISION_FACTORS,
  backlogItemFields: BACKLOG_ITEM_FIELDS,
  governanceAreas: OPERATIONS_ADOPTION_GOVERNANCE_AREAS,
  maturityLevels: OPERATIONS_ADOPTION_MATURITY_LEVELS,
  antiPatterns: OPERATIONS_ADOPTION_ANTI_PATTERNS,
  architecturalRules: OPERATIONS_ADOPTION_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_OPERATIONS_ADOPTION_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  productionInternalProduct: 'Developer Platform must be operated as a production internal product.',
  explicitOwnership: 'Product, architecture, capability, service, support, security, and cost ownership must be explicit.',
  serviceCommitmentsByCriticality: 'Service commitments must be defined by capability criticality.',
  outcomeConnectedHealth: 'Platform health must connect to developer, delivery, recovery, tenant, property, and production outcomes.',
  integratedOperations: 'Command and control, incidents, problems, changes, capacity, security, and continuity must be integrated.',
  alternateCriticalPaths: 'Critical alternate paths must be preserved during portal or convenience-feature failure.',
  contextualSupportKnowledge: 'Contextual support and durable knowledge must be provided.',
  ownedPavedPathLifecycles: 'Paved paths, templates, and platform contracts must have owned lifecycles.',
  protectedRecoveryCapacity: 'Capacity for remediation, rollback, and recovery must be protected.',
  governsSuppliersCostEvidenceDebt: 'Suppliers, cost, evidence, and technical debt must be governed.',
  adoptionAsJourney: 'Adoption must be treated as a user journey and product outcome.',
  onboardingMigrationTraining: 'Onboarding, migration, training, communication, and deprecation must be provided.',
  measuresSafeValue: 'Safe value must be measured rather than activity volume.',
  measuresAiOutcomes: 'AI-agent quality, intervention, and stop behavior must be measured.',
  protectsDeveloperPrivacy: 'Developer privacy must be protected.',
  tenantPropertyImpactVisible: 'Tenant and property impact visibility must be preserved.',
  feedbackImprovesRoadmap: 'Research, feedback, incidents, and evidence must prioritize improvement.',
  balancesGrowthReliabilityRetirement: 'Capability growth must be balanced with reliability and retirement.',
  vendorNeutralTechnologyIndependent: 'Platform operations and adoption must preserve vendor neutrality and technology independence.'
});

const REQUIRED_FALSE = Object.freeze({
  replacesArch011: 'ARCH-013-09 applies ARCH-011 to the Developer Platform and must not replace it.',
  treatsPlatformAsToolCollection: 'Developer Platform must not be treated as an unowned tool collection.',
  measuresOnlyToolUptime: 'Operations must not measure only tool uptime.',
  assumesAdoptionFromAccess: 'Adoption must not be assumed because access exists.',
  mandatesUnsupportedPaths: 'Unreliable or unsupported paths must not be mandated.',
  makesPlatformOwnEveryAppIncident: 'Platform teams must not own every application incident.',
  hidesDegradation: 'Degradation or stale status must not be hidden.',
  singlePortalForCriticalRecovery: 'Critical recovery must not depend on one portal.',
  removesControlsForCost: 'Cost reduction must not remove required controls.',
  measuresProductivityByCodeVolume: 'Developer productivity must not be measured by code or commit volume.',
  measuresAiSuccessByAutonomyVolume: 'AI-agent success must not be measured by autonomous action volume.',
  usesTelemetryForSurveillance: 'Telemetry must not be used for individual surveillance.',
  deprecatesWithoutMigration: 'Deprecation must not occur without migration.',
  hidesTenantPropertyImpact: 'Tenant and property impact must not be hidden in global metrics.'
});

export class PlatformOperationsAdoptionDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  productOwnershipFields() { return values(MAP.productOwnershipFields); }
  ownershipRoles() { return values(MAP.ownershipRoles); }
  serviceCommitmentFields() { return values(MAP.serviceCommitmentFields); }
  criticalCapabilities() { return values(MAP.criticalCapabilities); }
  commandControlFields() { return values(MAP.commandControlFields); }
  controlLoopStages() { return values(MAP.controlLoopStages); }
  healthFields() { return values(MAP.healthFields); }
  healthEndpointTypes() { return values(MAP.healthEndpointTypes); }
  observabilityCorrelationFields() { return values(MAP.observabilityCorrelationFields); }
  signalTypes() { return values(MAP.signalTypes); }
  logRequirements() { return values(MAP.logRequirements); }
  statusFields() { return values(MAP.statusFields); }
  incidentSteps() { return values(MAP.incidentSteps); }
  incidentPriorityFactors() { return values(MAP.incidentPriorityFactors); }
  degradedOperationFields() { return values(MAP.degradedOperationFields); }
  operationsDomains() { return values(MAP.operationsDomains); }
  supportModelTypes() { return values(MAP.supportModelTypes); }
  contextualSupportFields() { return values(MAP.contextualSupportFields); }
  operationalRequestTypes() { return values(MAP.operationalRequestTypes); }
  supportKnowledgeRequirements() { return values(MAP.supportKnowledgeRequirements); }
  adoptionLifecycleStates() { return values(MAP.adoptionLifecycleStates); }
  adoptionPersonas() { return values(MAP.adoptionPersonas); }
  adoptionValuePropositions() { return values(MAP.adoptionValuePropositions); }
  onboardingFields() { return values(MAP.onboardingFields); }
  migrationFields() { return values(MAP.migrationFields); }
  enablementChannels() { return values(MAP.enablementChannels); }
  feedbackSources() { return values(MAP.feedbackSources); }
  aiAgentOutcomeFields() { return values(MAP.aiAgentOutcomeFields); }
  productivityFields() { return values(MAP.productivityFields); }
  platformValueFields() { return values(MAP.platformValueFields); }
  adoptionMeasures() { return values(MAP.adoptionMeasures); }
  operationalMeasures() { return values(MAP.operationalMeasures); }
  roadmapDecisionFactors() { return values(MAP.roadmapDecisionFactors); }
  backlogItemFields() { return values(MAP.backlogItemFields); }
  governanceAreas() { return values(MAP.governanceAreas); }
  maturityLevels() { return values(MAP.maturityLevels); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof PlatformOperationsAdoptionProfile ?
      profileInput : new PlatformOperationsAdoptionProfile(profileInput);
    const errors = [];
    if (!profile.platformName) errors.push('Platform Operations and Adoption profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Platform Operations and Adoption must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(PLATFORM_OPERATIONS_ADOPTION_ERROR_CODE, 'Platform Operations and Adoption violates ARCH-013-09.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
