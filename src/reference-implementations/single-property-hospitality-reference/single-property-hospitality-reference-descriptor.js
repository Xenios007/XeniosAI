import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { SinglePropertyHospitalityReferenceProfile } from '../contracts/single-property-hospitality-reference-profile.js';
import * as constants from '../single-property-hospitality-reference-constants.js';

const METADATA = Object.freeze({
  scenarioActors: constants.SCENARIO_ACTORS, businessCapabilities: constants.BUSINESS_CAPABILITIES,
  domainOwnershipMappings: constants.DOMAIN_OWNERSHIP_MAPPINGS, requestFlowSteps: constants.REQUEST_FLOW_STEPS,
  configurableValues: constants.CONFIGURABLE_VALUES, availabilityModelDimensions: constants.AVAILABILITY_MODEL_DIMENSIONS,
  pricingModelOutputFields: constants.PRICING_MODEL_OUTPUT_FIELDS, reservationWorkflowStates: constants.RESERVATION_WORKFLOW_STATES,
  reservationWorkflowConcerns: constants.RESERVATION_WORKFLOW_CONCERNS, dataPrivacyControls: constants.DATA_PRIVACY_CONTROLS,
  knowledgeTopicAreas: constants.KNOWLEDGE_TOPIC_AREAS, businessFactQuerySources: constants.BUSINESS_FACT_QUERY_SOURCES,
  observabilitySignals: constants.OBSERVABILITY_SIGNALS, failureScenarios: constants.FAILURE_SCENARIOS,
  referenceAcceptanceCriteria: constants.REFERENCE_ACCEPTANCE_CRITERIA, architecturalRules: constants.SINGLE_PROPERTY_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  aiMayCollectMissingInputsAndExplainThePricingResult: 'ARCH-020-03 requires AI to be limited to collecting missing inputs and explaining the pricing result.',
  sameInputsProduceTheSameAuthoritativeRate: 'ARCH-020-03 requires the same inputs to produce the same authoritative rate.',
  bookedIntervalCannotBeConfirmedTwice: 'ARCH-020-03 requires a booked interval to be unable to be confirmed twice.',
  occupancyPolicyEnforcedByABusinessService: 'ARCH-020-03 requires occupancy policy to be enforced by a business service.',
  aiOutputCannotChangeReservationStateDirectly: 'ARCH-020-03 requires AI output to be unable to change reservation state directly.',
  guestDataAbsentFromLogsAndSyntheticFixtures: 'ARCH-020-03 requires guest data to be absent from logs and synthetic fixtures.',
  failureAndRecoveryAreObservable: 'ARCH-020-03 requires failure and recovery to be observable.'
});

const REQUIRED_FALSE = Object.freeze({
  configurationBypassesOccupancySecurityPrivacyAuthorizationOrPlatformControls: 'ARCH-020-03 prohibits configuration from bypassing occupancy, security, privacy, authorization, or platform controls.',
  integrationFeedUpdatesAvailabilityRepositoryDirectly: 'ARCH-020-03 prohibits the integration feed from updating the availability repository directly.',
  aiCalculatesOrInventsTheTotal: 'ARCH-020-03 prohibits AI from calculating or inventing the total.',
  commandsLackTenantPropertyScopeOrRequiredIdempotency: 'ARCH-020-03 prohibits commands from lacking tenant/property scope or required idempotency.'
});

export class SinglePropertyHospitalityReferenceDescriptor {
  scenarioActors() { return values(METADATA.scenarioActors); } businessCapabilities() { return values(METADATA.businessCapabilities); }
  domainOwnershipMappings() { return values(METADATA.domainOwnershipMappings); } requestFlowSteps() { return values(METADATA.requestFlowSteps); }
  configurableValues() { return values(METADATA.configurableValues); } availabilityModelDimensions() { return values(METADATA.availabilityModelDimensions); }
  pricingModelOutputFields() { return values(METADATA.pricingModelOutputFields); } reservationWorkflowStates() { return values(METADATA.reservationWorkflowStates); }
  reservationWorkflowConcerns() { return values(METADATA.reservationWorkflowConcerns); } dataPrivacyControls() { return values(METADATA.dataPrivacyControls); }
  knowledgeTopicAreas() { return values(METADATA.knowledgeTopicAreas); } businessFactQuerySources() { return values(METADATA.businessFactQuerySources); }
  observabilitySignals() { return values(METADATA.observabilitySignals); } failureScenarios() { return values(METADATA.failureScenarios); }
  referenceAcceptanceCriteria() { return values(METADATA.referenceAcceptanceCriteria); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof SinglePropertyHospitalityReferenceProfile ? input : new SinglePropertyHospitalityReferenceProfile(input);
    const errors = [];
    if (!profile.referenceName) errors.push('Single-Property Hospitality Reference profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Single-Property Hospitality Reference must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.SINGLE_PROPERTY_HOSPITALITY_REFERENCE_ERROR_CODE, 'Single-Property Hospitality Reference violates ARCH-020-03.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
