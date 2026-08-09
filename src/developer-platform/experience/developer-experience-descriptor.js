import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { DeveloperExperienceProfile } from '../contracts/developer-experience-profile.js';
import {
  AI_AGENT_STOP_CONDITIONS, AI_DEVELOPER_EXPERIENCE_STEPS, DELEGATION_CONTRACT_FIELDS,
  DEVELOPER_EXPERIENCE_ACTORS, DEVELOPER_EXPERIENCE_ARCHITECTURAL_RULES, DEVELOPER_EXPERIENCE_CONTRACT_FIELDS,
  DEVELOPER_EXPERIENCE_ERROR_CODE, DEVELOPER_EXPERIENCE_MEASURES, DEVELOPER_EXPERIENCE_OBJECTIVES,
  DEVELOPER_EXPERIENCE_PRINCIPLES, DEVELOPER_FEEDBACK_CLASSES, DEVELOPER_INTERACTION_CHANNELS,
  DEVELOPER_JOURNEY_STAGES, DEVELOPER_JOURNEY_STATES, EXPERIENCE_CONTEXT_FIELDS,
  FUTURE_DEVELOPER_EXPERIENCE_CAPABILITIES, HUMAN_DEVELOPER_EXPERIENCE_STEPS, JOURNEY_STATE_FIELDS,
  PAIRED_JOURNEY_FIELDS
} from '../experience-constants.js';

const MAP = Object.freeze({
  objectives: DEVELOPER_EXPERIENCE_OBJECTIVES,
  principles: DEVELOPER_EXPERIENCE_PRINCIPLES,
  actors: DEVELOPER_EXPERIENCE_ACTORS,
  contextFields: EXPERIENCE_CONTEXT_FIELDS,
  journeyStages: DEVELOPER_JOURNEY_STAGES,
  journeyStates: DEVELOPER_JOURNEY_STATES,
  journeyStateFields: JOURNEY_STATE_FIELDS,
  humanJourneySteps: HUMAN_DEVELOPER_EXPERIENCE_STEPS,
  aiJourneySteps: AI_DEVELOPER_EXPERIENCE_STEPS,
  pairedJourneyFields: PAIRED_JOURNEY_FIELDS,
  delegationFields: DELEGATION_CONTRACT_FIELDS,
  aiStopConditions: AI_AGENT_STOP_CONDITIONS,
  interactionChannels: DEVELOPER_INTERACTION_CHANNELS,
  contractFields: DEVELOPER_EXPERIENCE_CONTRACT_FIELDS,
  feedbackClasses: DEVELOPER_FEEDBACK_CLASSES,
  measures: DEVELOPER_EXPERIENCE_MEASURES,
  architecturalRules: DEVELOPER_EXPERIENCE_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_DEVELOPER_EXPERIENCE_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  architectureDiscoverableBeforeImplementation: 'Applicable architecture must be discoverable before implementation.',
  materialActionsBoundToIntent: 'Material actions must be bound to declared intent and authority.',
  mandatoryControlsVisible: 'Progressive disclosure must not hide mandatory controls.',
  authoritativeValidationPreserved: 'Fast local feedback must preserve authoritative validation.',
  journeyStateResumable: 'Journey state must be visible and resumable.',
  humanAccountabilityExplicit: 'Human accountability must remain explicit.',
  aiAuthorityExplicitlyDelegated: 'AI authority must be explicitly delegated.',
  technicalCapabilityNotAuthority: 'Technical capability and credentials must not be treated as authority.',
  tenantPropertyContextPreserved: 'Tenant and property context must be preserved.',
  sensitiveContextMinimized: 'Sensitive context must be minimized and controlled.',
  failuresRecoverable: 'Failures must be diagnosable and recoverable.',
  operationalOwnershipIntegrated: 'Operational ownership must be integrated into development.',
  analyticsPrivacyPreserved: 'Journey analytics must preserve contributor privacy.',
  accessibilityValidated: 'Accessibility must be validated.',
  outcomeMeasuresRequired: 'Contributor and production outcomes must be measured.',
  vendorNeutral: 'Developer Experience must remain vendor neutral.',
  technologyIndependent: 'Developer Experience must remain technology independent.'
});

const REQUIRED_FALSE = Object.freeze({
  resolvesArchitectureConflictsAutomatically: 'Developer Experience must not silently resolve architecture conflicts.',
  infersAuthorityFromCredentials: 'Developer Experience must not infer authority from credentials or tool access.',
  bypassesPolicyForSelfService: 'Self-service must not bypass approval or policy.',
  usesProductionDataByDefault: 'Routine development must not use uncontrolled production data.',
  treatsDeploymentAsCompletion: 'Deployment alone must not be treated as completion without verification and ownership.'
});

export class DeveloperExperienceDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  actors() { return values(MAP.actors); }
  contextFields() { return values(MAP.contextFields); }
  journeyStages() { return values(MAP.journeyStages); }
  journeyStates() { return values(MAP.journeyStates); }
  journeyStateFields() { return values(MAP.journeyStateFields); }
  humanJourneySteps() { return values(MAP.humanJourneySteps); }
  aiJourneySteps() { return values(MAP.aiJourneySteps); }
  pairedJourneyFields() { return values(MAP.pairedJourneyFields); }
  delegationFields() { return values(MAP.delegationFields); }
  aiStopConditions() { return values(MAP.aiStopConditions); }
  interactionChannels() { return values(MAP.interactionChannels); }
  contractFields() { return values(MAP.contractFields); }
  feedbackClasses() { return values(MAP.feedbackClasses); }
  measures() { return values(MAP.measures); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof DeveloperExperienceProfile ? profileInput : new DeveloperExperienceProfile(profileInput);
    const errors = [];
    if (!profile.experienceName) errors.push('Developer Experience profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Developer Experience must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(DEVELOPER_EXPERIENCE_ERROR_CODE, 'Developer Experience violates ARCH-013-02.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }