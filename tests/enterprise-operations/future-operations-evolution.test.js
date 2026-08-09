import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ADAPTIVE_BEHAVIOR_FIELDS,
  ADAPTIVE_OPERATION_TARGETS,
  AI_ASSISTED_COMMAND_CAPABILITIES,
  ARCHITECTURE_EVOLUTION_GOVERNANCE_REQUIREMENTS,
  AUTONOMOUS_OPERATIONS_FAILURE_HANDLING,
  AUTONOMY_SUITABILITY_CRITERIA,
  CONTINUOUS_CONTROL_VERIFICATION_CAPABILITIES,
  CROSS_PROPERTY_INTELLIGENCE_CAPABILITIES,
  DIGITAL_OPERATIONAL_TWIN_USES,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  EXECUTABLE_POLICY_AREAS,
  FEDERATED_OPERATIONS_PARTICIPANTS,
  FUTURE_ARCHITECTURE_RELATIONSHIPS,
  FUTURE_CAPABILITY_ROADMAP_SEQUENCE,
  FUTURE_OPERATIONS_ARCHITECTURAL_RULES,
  FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES,
  FUTURE_OPERATIONS_EVOLUTION_RISKS,
  FUTURE_OPERATIONS_EXPLAINABILITY_FIELDS,
  FUTURE_OPERATIONS_LONG_TERM_QUALITY_ATTRIBUTES,
  FUTURE_OPERATIONS_TRANSITION_CRITERIA,
  FUTURE_OPERATIONS_TRUST_FACTORS,
  FUTURE_OPERATIONS_VISION_CAPABILITIES,
  FutureOperationsEvolutionDescriptor,
  FutureOperationsEvolutionProfile,
  HUMAN_OPERATION_STRENGTHS,
  INTELLIGENT_CAPACITY_CAPABILITIES,
  INTELLIGENT_CHANGE_RELEASE_CAPABILITIES,
  INTELLIGENT_INCIDENT_CAPABILITIES,
  INTELLIGENT_PROBLEM_CAPABILITIES,
  INTELLIGENT_RESILIENCE_CAPABILITIES,
  MACHINE_OPERATION_STRENGTHS,
  MULTI_AGENT_OPERATIONS_REQUIREMENTS,
  OPERATIONAL_AGENT_REQUIREMENTS,
  OPERATIONAL_AGENT_SPECIALIZATIONS,
  OPERATIONAL_AUTONOMY_LEVELS,
  OPERATIONAL_MEMORY_ITEMS,
  OPERATIONS_EVOLUTION_DRIVERS,
  OPERATIONS_EVOLUTION_FOUNDATIONS,
  OPERATIONS_EVOLUTION_MATURITY_STAGES,
  PREDICTION_RECORD_FIELDS,
  PREDICTIVE_OPERATIONS_CAPABILITIES,
  PRESCRIPTIVE_OPERATION_RECOMMENDATIONS,
  PROPERTY_SPECIFIC_EVOLUTION_FACTORS,
  PROVIDER_PORTABILITY_TARGETS,
  SELF_IMPROVING_OPERATION_REQUIREMENTS,
  SELF_IMPROVING_OPERATION_TARGETS,
  SEMANTIC_OPERATIONAL_KNOWLEDGE_ENTITIES,
  TENANT_SPECIFIC_EVOLUTION_FACTORS,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

function completeProfile(overrides = {}) {
  return new FutureOperationsEvolutionProfile({
    operationsName: 'Future Operations Evolution',
    visionCapabilities: Object.values(FUTURE_OPERATIONS_VISION_CAPABILITIES),
    evolutionDrivers: Object.values(OPERATIONS_EVOLUTION_DRIVERS),
    foundations: Object.values(OPERATIONS_EVOLUTION_FOUNDATIONS),
    principles: Object.values(FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES),
    maturityStages: Object.values(OPERATIONS_EVOLUTION_MATURITY_STAGES),
    predictiveCapabilities: Object.values(PREDICTIVE_OPERATIONS_CAPABILITIES),
    predictionRecordFields: Object.values(PREDICTION_RECORD_FIELDS),
    prescriptiveRecommendations: Object.values(PRESCRIPTIVE_OPERATION_RECOMMENDATIONS),
    adaptiveTargets: Object.values(ADAPTIVE_OPERATION_TARGETS),
    adaptiveBehaviorFields: Object.values(ADAPTIVE_BEHAVIOR_FIELDS),
    autonomySuitabilityCriteria: Object.values(AUTONOMY_SUITABILITY_CRITERIA),
    autonomyLevels: Object.values(OPERATIONAL_AUTONOMY_LEVELS),
    aiAssistedCommandCapabilities: Object.values(AI_ASSISTED_COMMAND_CAPABILITIES),
    intelligentIncidentCapabilities: Object.values(INTELLIGENT_INCIDENT_CAPABILITIES),
    intelligentProblemCapabilities: Object.values(INTELLIGENT_PROBLEM_CAPABILITIES),
    intelligentChangeReleaseCapabilities: Object.values(INTELLIGENT_CHANGE_RELEASE_CAPABILITIES),
    intelligentCapacityCapabilities: Object.values(INTELLIGENT_CAPACITY_CAPABILITIES),
    intelligentResilienceCapabilities: Object.values(INTELLIGENT_RESILIENCE_CAPABILITIES),
    semanticKnowledgeEntities: Object.values(SEMANTIC_OPERATIONAL_KNOWLEDGE_ENTITIES),
    operationalMemoryItems: Object.values(OPERATIONAL_MEMORY_ITEMS),
    digitalTwinUses: Object.values(DIGITAL_OPERATIONAL_TWIN_USES),
    crossPropertyIntelligenceCapabilities: Object.values(CROSS_PROPERTY_INTELLIGENCE_CAPABILITIES),
    federatedParticipants: Object.values(FEDERATED_OPERATIONS_PARTICIPANTS),
    operationalAgentSpecializations: Object.values(OPERATIONAL_AGENT_SPECIALIZATIONS),
    operationalAgentRequirements: Object.values(OPERATIONAL_AGENT_REQUIREMENTS),
    multiAgentRequirements: Object.values(MULTI_AGENT_OPERATIONS_REQUIREMENTS),
    humanStrengths: Object.values(HUMAN_OPERATION_STRENGTHS),
    machineStrengths: Object.values(MACHINE_OPERATION_STRENGTHS),
    trustFactors: Object.values(FUTURE_OPERATIONS_TRUST_FACTORS),
    explainabilityFields: Object.values(FUTURE_OPERATIONS_EXPLAINABILITY_FIELDS),
    executablePolicyAreas: Object.values(EXECUTABLE_POLICY_AREAS),
    continuousVerificationCapabilities: Object.values(CONTINUOUS_CONTROL_VERIFICATION_CAPABILITIES),
    selfImprovingTargets: Object.values(SELF_IMPROVING_OPERATION_TARGETS),
    selfImprovingRequirements: Object.values(SELF_IMPROVING_OPERATION_REQUIREMENTS),
    tenantEvolutionFactors: Object.values(TENANT_SPECIFIC_EVOLUTION_FACTORS),
    propertyEvolutionFactors: Object.values(PROPERTY_SPECIFIC_EVOLUTION_FACTORS),
    providerPortabilityTargets: Object.values(PROVIDER_PORTABILITY_TARGETS),
    architectureRelationships: Object.values(FUTURE_ARCHITECTURE_RELATIONSHIPS),
    transitionCriteria: Object.values(FUTURE_OPERATIONS_TRANSITION_CRITERIA),
    evolutionRisks: Object.values(FUTURE_OPERATIONS_EVOLUTION_RISKS),
    failureHandling: Object.values(AUTONOMOUS_OPERATIONS_FAILURE_HANDLING),
    architectureGovernanceRequirements: Object.values(ARCHITECTURE_EVOLUTION_GOVERNANCE_REQUIREMENTS),
    qualityAttributes: Object.values(FUTURE_OPERATIONS_LONG_TERM_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(FUTURE_OPERATIONS_ARCHITECTURAL_RULES),
    roadmapSequence: Object.values(FUTURE_CAPABILITY_ROADMAP_SEQUENCE),
    ...overrides
  });
}

test('future operations evolution exposes vision, drivers, foundations, maturity, prediction, adaptation, and autonomy metadata', () => {
  const descriptor = new FutureOperationsEvolutionDescriptor();

  assert.deepEqual(descriptor.visionCapabilities(), Object.values(FUTURE_OPERATIONS_VISION_CAPABILITIES));
  assert.ok(descriptor.evolutionDrivers().includes(OPERATIONS_EVOLUTION_DRIVERS.EXPLAINABILITY_DEMAND));
  assert.ok(descriptor.foundations().includes(OPERATIONS_EVOLUTION_FOUNDATIONS.VENDOR_NEUTRALITY));
  assert.ok(descriptor.principles().includes(FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES.LEARN_UNDER_GOVERNANCE));
  assert.ok(descriptor.maturityStages().includes(OPERATIONS_EVOLUTION_MATURITY_STAGES.SELF_IMPROVING_ENTERPRISE_OPERATIONS));
  assert.ok(descriptor.predictiveCapabilities().includes(PREDICTIVE_OPERATIONS_CAPABILITIES.CONTINUITY_RISK_FORECASTING));
  assert.ok(descriptor.predictionRecordFields().includes(PREDICTION_RECORD_FIELDS.VERIFICATION));
  assert.ok(descriptor.prescriptiveRecommendations().includes(PRESCRIPTIVE_OPERATION_RECOMMENDATIONS.ADJUST_PROPERTY_SUPPORT));
  assert.ok(descriptor.adaptiveTargets().includes(ADAPTIVE_OPERATION_TARGETS.CONTINUITY_MODE));
  assert.ok(descriptor.autonomySuitabilityCriteria().includes(AUTONOMY_SUITABILITY_CRITERIA.ASSIGNED_TO_ACCOUNTABLE_OWNERSHIP));
  assert.ok(descriptor.autonomyLevels().includes(OPERATIONAL_AUTONOMY_LEVELS.ADAPTIVE_BOUNDED_AUTONOMY));
});

test('future operations evolution exposes intelligent operations, knowledge, agents, collaboration, governance, and roadmap metadata', () => {
  const descriptor = new FutureOperationsEvolutionDescriptor();

  assert.ok(descriptor.aiAssistedCommandCapabilities().includes(AI_ASSISTED_COMMAND_CAPABILITIES.IMPROVEMENT_RECOMMENDATION));
  assert.ok(descriptor.intelligentIncidentCapabilities().includes(INTELLIGENT_INCIDENT_CAPABILITIES.RECURRENCE_PREDICTION));
  assert.ok(descriptor.intelligentProblemCapabilities().includes(INTELLIGENT_PROBLEM_CAPABILITIES.PREVENTIVE_CHANGE_RECOMMENDATION));
  assert.ok(descriptor.intelligentChangeReleaseCapabilities().includes(INTELLIGENT_CHANGE_RELEASE_CAPABILITIES.CONTINUOUS_OPERATIONAL_READINESS_ASSESSMENT));
  assert.ok(descriptor.intelligentCapacityCapabilities().includes(INTELLIGENT_CAPACITY_CAPABILITIES.AUTONOMOUS_BOUNDED_SCALING));
  assert.ok(descriptor.intelligentResilienceCapabilities().includes(INTELLIGENT_RESILIENCE_CAPABILITIES.CONTINUOUS_RESTORATION_TESTING));
  assert.ok(descriptor.semanticKnowledgeEntities().includes(SEMANTIC_OPERATIONAL_KNOWLEDGE_ENTITIES.OUTCOMES));
  assert.ok(descriptor.operationalAgentRequirements().includes(OPERATIONAL_AGENT_REQUIREMENTS.LIFECYCLE_STATE));
  assert.ok(descriptor.multiAgentRequirements().includes(MULTI_AGENT_OPERATIONS_REQUIREMENTS.HUMAN_TAKEOVER));
  assert.ok(descriptor.explainabilityFields().includes(FUTURE_OPERATIONS_EXPLAINABILITY_FIELDS.HUMAN_OVERSIGHT));
  assert.ok(descriptor.architectureRelationships().includes(FUTURE_ARCHITECTURE_RELATIONSHIPS.ARCH_020_REFERENCE_IMPLEMENTATIONS));
  assert.ok(descriptor.transitionCriteria().includes(FUTURE_OPERATIONS_TRANSITION_CRITERIA.OUTCOMES_VERIFIABLE));
  assert.ok(descriptor.evolutionRisks().includes(FUTURE_OPERATIONS_EVOLUTION_RISKS.OPTIMIZATION_AGAINST_INCOMPLETE_MEASURES));
  assert.ok(descriptor.architecturalRules().includes(FUTURE_OPERATIONS_ARCHITECTURAL_RULES.REMAIN_VENDOR_NEUTRAL_AND_TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.roadmapSequence().includes(FUTURE_CAPABILITY_ROADMAP_SEQUENCE.GOVERNED_SELF_IMPROVING_OPERATIONS));
});

test('future operations evolution validates complete and premature implementation profiles', () => {
  const descriptor = new FutureOperationsEvolutionDescriptor();
  const valid = descriptor.validateProfile(completeProfile());
  const invalid = descriptor.validateProfile(completeProfile({
    operationsName: '',
    visionCapabilities: [FUTURE_OPERATIONS_VISION_CAPABILITIES.UNDERSTAND_BUSINESS_INTENT],
    evolutionDrivers: [OPERATIONS_EVOLUTION_DRIVERS.TENANT_AND_PROPERTY_GROWTH],
    foundations: [OPERATIONS_EVOLUTION_FOUNDATIONS.BUSINESS_FIRST_OPERATIONS],
    principles: [FUTURE_OPERATIONS_EVOLUTION_PRINCIPLES.PRESERVE_FOUNDATIONAL_ARCHITECTURE],
    maturityStages: [OPERATIONS_EVOLUTION_MATURITY_STAGES.REACTIVE_OPERATIONS],
    futureCapabilitiesArePlaceholders: false,
    humanAccountabilityPreserved: false,
    gradualAutonomyRequired: false,
    provenBoundedAutomationRequired: false,
    explicitIdentityPermissionPolicyRequired: false,
    securityPrivacyDataTenantProtected: false,
    explainabilityRequired: false,
    hypothesesDistinguishedFromFacts: false,
    stopReversalCompensationTakeoverRequired: false,
    governedLearningRequired: false,
    uncontrolledSelfModificationPrevented: false,
    vendorNeutral: false,
    technologyNeutral: false,
    productsVendorsModelsTimelinesSpecific: true,
    runtimeCapabilityImplemented: true,
    autonomyWithoutAuthority: true,
    technologyNoveltyDriven: true,
    universalMaturityAssumed: true,
    aiAgreementAsAuthority: true,
    predictionAsFact: true,
    selfRewritingProductionPolicy: true
  }));

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /escalate-to-accountable-humans/);
  assert.match(invalid.errors.join('\n'), /explainability-demand/);
  assert.match(invalid.errors.join('\n'), /vendor-neutrality/);
  assert.match(invalid.errors.join('\n'), /Future capabilities must remain placeholders/);
  assert.match(invalid.errors.join('\n'), /accountable human authority/);
  assert.match(invalid.errors.join('\n'), /ARCH-011-10 must not implement future runtime capabilities/);
  assert.match(invalid.errors.join('\n'), /technology novelty/);
  assert.match(invalid.errors.join('\n'), /Prediction must not be confused with fact/);
  assert.match(invalid.errors.join('\n'), /Production policy or architecture must not rewrite itself/);
});

test('future operations evolution assertion rejects incomplete metadata', () => {
  class IncompleteFutureOperationsEvolutionDescriptor extends FutureOperationsEvolutionDescriptor {
    visionCapabilities() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteFutureOperationsEvolutionDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.FUTURE_OPERATIONS_EVOLUTION_INVALID &&
      error.details.errors.some(message => message.includes('documented visionCapabilities'))
  );
});

test('future operations evolution descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('FutureOperationsEvolutionDescriptor');

  assert.ok(descriptor instanceof FutureOperationsEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
