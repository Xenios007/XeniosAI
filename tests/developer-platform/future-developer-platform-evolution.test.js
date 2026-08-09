import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AUTONOMY_LEVELS,
  AUTONOMY_PROMOTION_CRITERIA,
  CAPABILITY_EVOLUTION_STATES,
  DIGITAL_TWIN_TYPES,
  EVOLUTION_ANTI_PATTERNS,
  EVOLUTION_HORIZONS,
  EVOLUTION_INVARIANTS,
  EVOLUTION_RISKS,
  EVOLUTION_SAFEGUARDS,
  FEDERATION_REQUIREMENTS,
  FUTURE_DEVELOPER_PLATFORM_EVOLUTION_ERROR_CODE,
  FUTURE_DEVELOPER_PLATFORM_EVOLUTION_OBJECTIVES,
  FUTURE_EVOLUTION_ARCHITECTURAL_RULES,
  FUTURE_PLATFORM_CAPABILITY_AREAS,
  FutureDeveloperPlatformEvolutionDescriptor,
  FutureDeveloperPlatformEvolutionProfile,
  RECOMMENDED_EVOLUTION_SEQUENCE,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('future developer platform evolution exposes objectives, drivers, invariants, horizons, states, and maturity metadata', () => {
  const descriptor = new FutureDeveloperPlatformEvolutionDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(FUTURE_DEVELOPER_PLATFORM_EVOLUTION_OBJECTIVES));
  assert.ok(descriptor.strategicDrivers().includes('growth-in-ai-agents-workflows-tools-and-integrations'));
  assert.ok(descriptor.invariants().includes(EVOLUTION_INVARIANTS.ARCHITECTURE_AUTHORITY));
  assert.ok(descriptor.horizons().includes(EVOLUTION_HORIZONS.GOVERNED_AUTONOMY));
  assert.ok(descriptor.capabilityStates().includes(CAPABILITY_EVOLUTION_STATES.INCUBATE));
  assert.ok(descriptor.maturityDimensions().includes('human-oversight'));
});

test('future developer platform evolution exposes experience, architecture knowledge, human-AI, and autonomy metadata', () => {
  const descriptor = new FutureDeveloperPlatformEvolutionDescriptor();
  assert.ok(descriptor.experienceAttributes().includes('architecture-aware'));
  assert.ok(descriptor.intentResolutionOutputs().includes('delivery-strategy'));
  assert.ok(descriptor.architectureAssistanceCapabilities().includes('prepare-adr-drafts'));
  assert.ok(descriptor.knowledgeGraphNodes().includes('policies'));
  assert.ok(descriptor.humanAiTeamRoles().includes('ai-operations-assistants'));
  assert.ok(descriptor.agentCoordinationFields().includes('decision-authority'));
  assert.ok(descriptor.autonomyLevels().includes(AUTONOMY_LEVELS.EXECUTE_BOUNDED));
  assert.ok(descriptor.autonomyPromotionCriteria().includes(AUTONOMY_PROMOTION_CRITERIA.HUMAN_APPROVAL));
  assert.ok(descriptor.autonomyDemotionTriggers().includes('model-or-tool-behavior-changes'));
});

test('future developer platform evolution exposes future capability, twin, federation, ecosystem, transition, governance, and risk metadata', () => {
  const descriptor = new FutureDeveloperPlatformEvolutionDescriptor();
  assert.ok(descriptor.futureCapabilityAreas().includes(FUTURE_PLATFORM_CAPABILITY_AREAS.FUTURE_AI_EVALUATION));
  assert.ok(descriptor.digitalTwinTypes().includes(DIGITAL_TWIN_TYPES.PROPERTY));
  assert.ok(descriptor.federationRequirements().includes(FEDERATION_REQUIREMENTS.CATALOG_INTEGRATION));
  assert.ok(descriptor.ecosystemEvolutionAreas().includes('plugin-and-extension-evolution'));
  assert.ok(descriptor.innovationControlFields().includes('exit-criteria'));
  assert.ok(descriptor.transitionArchitectureFields().includes('dual-operation'));
  assert.ok(descriptor.governanceAreas().includes('autonomy-promotion'));
  assert.ok(descriptor.successMeasures().includes('ai-agent-task-quality'));
  assert.ok(descriptor.risks().includes(EVOLUTION_RISKS.MODEL_LOCK_IN));
  assert.ok(descriptor.safeguards().includes(EVOLUTION_SAFEGUARDS.STOP_KILL_CONTROLS));
  assert.ok(descriptor.antiPatterns().includes(EVOLUTION_ANTI_PATTERNS.AI_CAPABILITY_AS_AUTHORITY));
  assert.ok(descriptor.architecturalRules().includes(FUTURE_EVOLUTION_ARCHITECTURAL_RULES.INFERENCE_NOT_FACT));
  assert.ok(descriptor.recommendedSequence().includes(RECOMMENDED_EVOLUTION_SEQUENCE.GOVERNED_ECOSYSTEMS));
});

test('future developer platform evolution validates complete profiles and rejects speculative boundary violations', () => {
  const descriptor = new FutureDeveloperPlatformEvolutionDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    evolutionName: '',
    ...partialProfile(descriptor),
    preservesAdd: false,
    evidenceBackedEvolution: false,
    futureCapabilitiesOptionalUntilProven: false,
    architectureRepositoryAuthoritative: false,
    intentDoesNotInventAuthority: false,
    semanticInferenceDistinguished: false,
    explicitAgentCoordination: false,
    autonomyExplicitlyLeveled: false,
    autonomyPromotionEvidenceBased: false,
    autonomyDemotionImmediateWhenUnsafe: false,
    digitalTwinsDecisionAidOnly: false,
    federationUsesCommonContracts: false,
    controlledInnovation: false,
    transitionArchitectureRequired: false,
    backwardCompatibilityGoverned: false,
    vendorNeutralAiProviderIndependent: false,
    humanAccountabilityPreserved: false,
    tenantPropertyIsolationPreserved: false,
    preselectsVendors: true,
    mandatesSpeculativeTechnology: true,
    authorizesAutonomyWithoutControls: true,
    treatsAiCapabilityAsAuthority: true,
    writesInferenceAsFact: true,
    treatsDigitalTwinAsOperatingState: true,
    permitsUnboundedMultiAgentAuthority: true,
    permitsProductionDataInExperiments: true,
    allowsPermanentExperimentalServices: true,
    letsVendorContractsBecomeArchitecture: true,
    measuresNoveltyAsValue: true,
    erodesHumanExpertise: true,
    fragmentsFederatedAuthority: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /reduce-developer-cognitive-load/);
  assert.match(invalid.errors.join('\n'), /growth-in-tenants-and-properties/);
  assert.match(invalid.errors.join('\n'), /Future evolution must preserve Architecture-Driven Development/);
  assert.match(invalid.errors.join('\n'), /does not preselect vendors/);
  assert.match(invalid.errors.join('\n'), /does not authorize autonomy before required controls exist/);
  assert.match(invalid.errors.join('\n'), /Semantic inference must not be written back as authoritative fact/);
  assert.match(invalid.errors.join('\n'), /Digital twins must not be treated as actual operating state/);
  assert.match(invalid.errors.join('\n'), /Federation and marketplaces must not fragment authority/);
});

test('future developer platform evolution assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends FutureDeveloperPlatformEvolutionDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === FUTURE_DEVELOPER_PLATFORM_EVOLUTION_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('future developer platform evolution descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('FutureDeveloperPlatformEvolutionDescriptor');
  assert.ok(descriptor instanceof FutureDeveloperPlatformEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'strategicDrivers', 'invariants', 'horizons', 'capabilityStates',
    'maturityDimensions', 'experienceAttributes', 'intentResolutionOutputs', 'architectureAssistanceCapabilities',
    'knowledgeGraphNodes', 'humanAiTeamRoles', 'agentCoordinationFields', 'autonomyLevels',
    'autonomyPromotionCriteria', 'autonomyDemotionTriggers', 'futureCapabilityAreas', 'digitalTwinTypes',
    'federationRequirements', 'ecosystemEvolutionAreas', 'innovationControlFields', 'transitionArchitectureFields',
    'governanceAreas', 'successMeasures', 'risks', 'safeguards', 'antiPatterns', 'architecturalRules',
    'recommendedSequence']) values[key] = descriptor[key]();
  return new FutureDeveloperPlatformEvolutionProfile({ evolutionName: 'Future Developer Platform Evolution', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
