import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_AGENT_STOP_CONDITIONS,
  AI_DEVELOPER_EXPERIENCE_STEPS,
  DELEGATION_CONTRACT_FIELDS,
  DEVELOPER_EXPERIENCE_ACTORS,
  DEVELOPER_EXPERIENCE_ARCHITECTURAL_RULES,
  DEVELOPER_EXPERIENCE_ERROR_CODE,
  DEVELOPER_EXPERIENCE_MEASURES,
  DEVELOPER_EXPERIENCE_OBJECTIVES,
  DEVELOPER_EXPERIENCE_PRINCIPLES,
  DEVELOPER_FEEDBACK_CLASSES,
  DEVELOPER_INTERACTION_CHANNELS,
  DEVELOPER_JOURNEY_STAGES,
  DEVELOPER_JOURNEY_STATES,
  DeveloperExperienceDescriptor,
  DeveloperExperienceProfile,
  EXPERIENCE_CONTEXT_FIELDS,
  FUTURE_DEVELOPER_EXPERIENCE_CAPABILITIES,
  HUMAN_DEVELOPER_EXPERIENCE_STEPS,
  JOURNEY_STATE_FIELDS,
  PAIRED_JOURNEY_FIELDS,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('developer experience exposes the architecture-defined actors, context, stages, and states', () => {
  const descriptor = new DeveloperExperienceDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(DEVELOPER_EXPERIENCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(DEVELOPER_EXPERIENCE_PRINCIPLES));
  assert.ok(descriptor.actors().includes(DEVELOPER_EXPERIENCE_ACTORS.AUTHORIZED_AI_IMPLEMENTATION_AGENT));
  assert.ok(descriptor.contextFields().includes(EXPERIENCE_CONTEXT_FIELDS.TENANT_AND_PROPERTY_SCOPE));
  assert.deepEqual(descriptor.journeyStages(), Object.values(DEVELOPER_JOURNEY_STAGES));
  assert.ok(descriptor.journeyStates().includes(DEVELOPER_JOURNEY_STATES.WAITING_FOR_APPROVAL));
  assert.ok(descriptor.journeyStateFields().includes(JOURNEY_STATE_FIELDS.PERMITTED_NEXT_STATES));
});

test('developer experience exposes human, AI, paired, delegation, stop, and channel contracts', () => {
  const descriptor = new DeveloperExperienceDescriptor();
  assert.ok(descriptor.humanJourneySteps().includes(HUMAN_DEVELOPER_EXPERIENCE_STEPS.RUN_AUTHORITATIVE_VALIDATION));
  assert.ok(descriptor.aiJourneySteps().includes(AI_DEVELOPER_EXPERIENCE_STEPS.STOP_AT_BOUNDARIES));
  assert.ok(descriptor.pairedJourneyFields().includes(PAIRED_JOURNEY_FIELDS.HUMAN_ACCEPTANCE));
  assert.ok(descriptor.delegationFields().includes(DELEGATION_CONTRACT_FIELDS.DELIVERY_AUTHORITY));
  assert.ok(descriptor.aiStopConditions().includes(AI_AGENT_STOP_CONDITIONS.UNOWNED_CHANGES_AT_RISK));
  assert.ok(descriptor.interactionChannels().includes(DEVELOPER_INTERACTION_CHANNELS.CONVERSATIONAL));
  assert.ok(descriptor.feedbackClasses().includes(DEVELOPER_FEEDBACK_CLASSES.HUMAN_DECISION_REQUIRED));
});

test('developer experience exposes measurable outcomes, architectural rules, and future capabilities', () => {
  const descriptor = new DeveloperExperienceDescriptor();
  assert.ok(descriptor.measures().includes(DEVELOPER_EXPERIENCE_MEASURES.AI_STOP_CONDITION_QUALITY));
  assert.ok(descriptor.architecturalRules().includes(DEVELOPER_EXPERIENCE_ARCHITECTURAL_RULES.VISIBLE_RESUMABLE_STATE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_DEVELOPER_EXPERIENCE_CAPABILITIES.MULTI_AGENT_DEVELOPMENT));
});

test('developer experience validates complete profiles and rejects architecture violations', () => {
  const descriptor = new DeveloperExperienceDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    experienceName: '',
    ...partialProfile(descriptor),
    architectureDiscoverableBeforeImplementation: false,
    materialActionsBoundToIntent: false,
    mandatoryControlsVisible: false,
    authoritativeValidationPreserved: false,
    journeyStateResumable: false,
    humanAccountabilityExplicit: false,
    aiAuthorityExplicitlyDelegated: false,
    technicalCapabilityNotAuthority: false,
    tenantPropertyContextPreserved: false,
    sensitiveContextMinimized: false,
    failuresRecoverable: false,
    operationalOwnershipIntegrated: false,
    analyticsPrivacyPreserved: false,
    accessibilityValidated: false,
    outcomeMeasuresRequired: false,
    vendorNeutral: false,
    technologyIndependent: false,
    resolvesArchitectureConflictsAutomatically: true,
    infersAuthorityFromCredentials: true,
    bypassesPolicyForSelfService: true,
    usesProductionDataByDefault: true,
    treatsDeploymentAsCompletion: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /intent-before-action/);
  assert.match(invalid.errors.join('\n'), /authorized-ai-implementation-agent/);
  assert.match(invalid.errors.join('\n'), /Learn, Evolve, or Retire/);
  assert.match(invalid.errors.join('\n'), /commit-push-delivery-and-communication-authority/);
  assert.match(invalid.errors.join('\n'), /mandatory-reference-missing/);
  assert.match(invalid.errors.join('\n'), /must not infer authority/);
  assert.match(invalid.errors.join('\n'), /must not bypass approval or policy/);
});

test('developer experience assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends DeveloperExperienceDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === DEVELOPER_EXPERIENCE_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('developer experience descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('DeveloperExperienceDescriptor');
  assert.ok(descriptor instanceof DeveloperExperienceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'actors', 'contextFields', 'journeyStages', 'journeyStates',
    'journeyStateFields', 'humanJourneySteps', 'aiJourneySteps', 'pairedJourneyFields', 'delegationFields',
    'aiStopConditions', 'interactionChannels', 'contractFields', 'feedbackClasses', 'measures',
    'architecturalRules', 'futureCapabilities']) values[key] = descriptor[key]();
  return new DeveloperExperienceProfile({ experienceName: 'Developer Experience and Journeys', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}