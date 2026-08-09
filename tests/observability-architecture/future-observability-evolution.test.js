import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_ASSISTED_OBSERVABILITY_CAPABILITIES,
  AUTONOMOUS_OPERATIONAL_INTELLIGENCE_CAPABILITIES,
  CROSS_ENTERPRISE_OBSERVABILITY_SCOPES,
  ENTERPRISE_DIGITAL_TWIN_APPLICATIONS,
  FUTURE_OBSERVABILITY_ARCHITECTURAL_RULES,
  FUTURE_OBSERVABILITY_ARCHITECTURAL_INDEPENDENCE_FACTORS,
  FUTURE_OBSERVABILITY_BUSINESS_VALUE_IMPROVEMENTS,
  FUTURE_OBSERVABILITY_ENTERPRISE_LEARNING_AREAS,
  FUTURE_OBSERVABILITY_EVOLUTION_MODEL_STAGES,
  FUTURE_OBSERVABILITY_EVOLUTION_OBJECTIVES,
  FUTURE_OBSERVABILITY_EVOLUTION_PRINCIPLES,
  FUTURE_OBSERVABILITY_GOVERNANCE_EVOLUTION_CAPABILITIES,
  FUTURE_OBSERVABILITY_INCREMENTAL_EVOLUTION_ENABLERS,
  FUTURE_OBSERVABILITY_INNOVATION_AREAS,
  FUTURE_OBSERVABILITY_RELATIONSHIP_STAGES,
  FUTURE_OBSERVABILITY_VISION_CHARACTERISTICS,
  FutureObservabilityEvolutionDescriptor,
  FutureObservabilityEvolutionProfile,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  PREDICTIVE_ENTERPRISE_INTELLIGENCE_CAPABILITIES,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('future observability evolution exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new FutureObservabilityEvolutionDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(FUTURE_OBSERVABILITY_EVOLUTION_OBJECTIVES));
  assert.deepEqual(descriptor.evolutionModel(), Object.values(FUTURE_OBSERVABILITY_EVOLUTION_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(FUTURE_OBSERVABILITY_EVOLUTION_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(FUTURE_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('future observability evolution exposes strategic capability, innovation, rules, and vision metadata', () => {
  const descriptor = new FutureObservabilityEvolutionDescriptor();

  assert.ok(descriptor.businessValueImprovements().includes(FUTURE_OBSERVABILITY_BUSINESS_VALUE_IMPROVEMENTS.STRATEGIC_DECISION_MAKING));
  assert.ok(descriptor.architecturalIndependenceFactors().includes(FUTURE_OBSERVABILITY_ARCHITECTURAL_INDEPENDENCE_FACTORS.AI_PROVIDER_INDEPENDENCE));
  assert.ok(descriptor.enterpriseLearningAreas().includes(FUTURE_OBSERVABILITY_ENTERPRISE_LEARNING_AREAS.GOVERNANCE_REFINEMENT));
  assert.ok(descriptor.incrementalEvolutionEnablers().includes(FUTURE_OBSERVABILITY_INCREMENTAL_EVOLUTION_ENABLERS.CONTINUOUS_MODERNIZATION));
  assert.ok(descriptor.aiAssistedCapabilities().includes(AI_ASSISTED_OBSERVABILITY_CAPABILITIES.ROOT_CAUSE_ASSISTANCE));
  assert.ok(descriptor.predictiveCapabilities().includes(PREDICTIVE_ENTERPRISE_INTELLIGENCE_CAPABILITIES.BUSINESS_PERFORMANCE_FORECASTING));
  assert.ok(descriptor.autonomousCapabilities().includes(AUTONOMOUS_OPERATIONAL_INTELLIGENCE_CAPABILITIES.SELF_HEALING_WORKFLOWS));
  assert.ok(descriptor.crossEnterpriseScopes().includes(CROSS_ENTERPRISE_OBSERVABILITY_SCOPES.GOVERNMENT_INTEGRATIONS));
  assert.ok(descriptor.governanceEvolutionCapabilities().includes(FUTURE_OBSERVABILITY_GOVERNANCE_EVOLUTION_CAPABILITIES.INTELLIGENT_AUDIT_PREPARATION));
  assert.ok(descriptor.digitalTwinApplications().includes(ENTERPRISE_DIGITAL_TWIN_APPLICATIONS.ORGANIZATIONAL_OPTIMIZATION));
  assert.ok(descriptor.innovationAreas().includes(FUTURE_OBSERVABILITY_INNOVATION_AREAS.KNOWLEDGE_DRIVEN_OPERATIONS));
  assert.ok(descriptor.architecturalRules().includes(FUTURE_OBSERVABILITY_ARCHITECTURAL_RULES.PRESERVE_ENTERPRISE_GOVERNANCE));
  assert.ok(descriptor.visionCharacteristics().includes(FUTURE_OBSERVABILITY_VISION_CHARACTERISTICS.ORGANIZATIONAL_TRUST));
});

test('future observability evolution validates complete strategic evolution profiles', () => {
  const descriptor = new FutureObservabilityEvolutionDescriptor();
  const valid = descriptor.validateEvolution(
    new FutureObservabilityEvolutionProfile({
      evolutionName: 'Enterprise Observability Future Evolution',
      objectives: Object.values(FUTURE_OBSERVABILITY_EVOLUTION_OBJECTIVES),
      modelStages: Object.values(FUTURE_OBSERVABILITY_EVOLUTION_MODEL_STAGES),
      principles: Object.values(FUTURE_OBSERVABILITY_EVOLUTION_PRINCIPLES),
      businessValueImprovements: Object.values(FUTURE_OBSERVABILITY_BUSINESS_VALUE_IMPROVEMENTS),
      architecturalIndependenceFactors: Object.values(FUTURE_OBSERVABILITY_ARCHITECTURAL_INDEPENDENCE_FACTORS),
      enterpriseLearningAreas: Object.values(FUTURE_OBSERVABILITY_ENTERPRISE_LEARNING_AREAS),
      incrementalEvolutionEnablers: Object.values(FUTURE_OBSERVABILITY_INCREMENTAL_EVOLUTION_ENABLERS),
      aiAssistedCapabilities: Object.values(AI_ASSISTED_OBSERVABILITY_CAPABILITIES),
      predictiveCapabilities: Object.values(PREDICTIVE_ENTERPRISE_INTELLIGENCE_CAPABILITIES),
      autonomousCapabilities: Object.values(AUTONOMOUS_OPERATIONAL_INTELLIGENCE_CAPABILITIES),
      crossEnterpriseScopes: Object.values(CROSS_ENTERPRISE_OBSERVABILITY_SCOPES),
      governanceEvolutionCapabilities: Object.values(FUTURE_OBSERVABILITY_GOVERNANCE_EVOLUTION_CAPABILITIES),
      digitalTwinApplications: Object.values(ENTERPRISE_DIGITAL_TWIN_APPLICATIONS),
      innovationAreas: Object.values(FUTURE_OBSERVABILITY_INNOVATION_AREAS),
      relationshipStages: Object.values(FUTURE_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(FUTURE_OBSERVABILITY_ARCHITECTURAL_RULES),
      visionCharacteristics: Object.values(FUTURE_OBSERVABILITY_VISION_CHARACTERISTICS)
    })
  );
  const invalid = descriptor.validateEvolution({
    evolutionName: '',
    objectives: [FUTURE_OBSERVABILITY_EVOLUTION_OBJECTIVES.ENTERPRISE_ADAPTABILITY],
    modelStages: [FUTURE_OBSERVABILITY_EVOLUTION_MODEL_STAGES.OPERATIONAL_EVIDENCE],
    principles: [FUTURE_OBSERVABILITY_EVOLUTION_PRINCIPLES.BUSINESS_DRIVEN_EVOLUTION],
    businessValueImprovements: [FUTURE_OBSERVABILITY_BUSINESS_VALUE_IMPROVEMENTS.CUSTOMER_EXPERIENCE],
    architecturalIndependenceFactors: [FUTURE_OBSERVABILITY_ARCHITECTURAL_INDEPENDENCE_FACTORS.VENDOR_NEUTRALITY],
    enterpriseLearningAreas: [FUTURE_OBSERVABILITY_ENTERPRISE_LEARNING_AREAS.TREND_IDENTIFICATION],
    incrementalEvolutionEnablers: [FUTURE_OBSERVABILITY_INCREMENTAL_EVOLUTION_ENABLERS.STABLE_ARCHITECTURE],
    aiAssistedCapabilities: [AI_ASSISTED_OBSERVABILITY_CAPABILITIES.INTELLIGENT_DIAGNOSTICS],
    predictiveCapabilities: [PREDICTIVE_ENTERPRISE_INTELLIGENCE_CAPABILITIES.CAPACITY_FORECASTING],
    autonomousCapabilities: [AUTONOMOUS_OPERATIONAL_INTELLIGENCE_CAPABILITIES.INTELLIGENT_INCIDENT_CLASSIFICATION],
    crossEnterpriseScopes: [CROSS_ENTERPRISE_OBSERVABILITY_SCOPES.BUSINESS_DOMAINS],
    governanceEvolutionCapabilities: [FUTURE_OBSERVABILITY_GOVERNANCE_EVOLUTION_CAPABILITIES.AI_ASSISTED_GOVERNANCE],
    digitalTwinApplications: [ENTERPRISE_DIGITAL_TWIN_APPLICATIONS.BUSINESS_PROCESS_SIMULATION],
    innovationAreas: [FUTURE_OBSERVABILITY_INNOVATION_AREAS.SEMANTIC_OBSERVABILITY],
    relationshipStages: [FUTURE_OBSERVABILITY_RELATIONSHIP_STAGES.BUSINESS],
    architecturalRules: [FUTURE_OBSERVABILITY_ARCHITECTURAL_RULES.PRESERVE_BUSINESS_ALIGNMENT],
    visionCharacteristics: [FUTURE_OBSERVABILITY_VISION_CHARACTERISTICS.CONTINUOUSLY_UNDERSTANDS_OPERATIONS],
    businessDriven: false,
    architecturalIndependencePreserved: false,
    enterpriseLearningContinuous: false,
    intelligenceExplainable: false,
    evolutionIncremental: false,
    aiAugmentsAccountability: false,
    predictiveIntelligenceProactive: false,
    autonomousCapabilitiesGoverned: false,
    crossEnterpriseAutonomyPreserved: false,
    governanceTransparentAndExplainable: false,
    digitalTwinsSupportGovernance: false,
    architecturalStabilityPreserved: false,
    vendorNeutral: false,
    technologyNeutral: false,
    futureTechnologySpecific: true,
    vendorSpecific: true,
    implementationFrameworkSpecific: true,
    productRoadmapSpecific: true,
    disruptiveRedesignRequired: true,
    replacesGovernanceWithAi: true,
    replacesHumanAccountability: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /predictive-operational-intelligence/);
  assert.match(invalid.errors.join('\n'), /Enterprise Insight/);
  assert.match(invalid.errors.join('\n'), /preserve-architectural-independence/);
  assert.match(invalid.errors.join('\n'), /business-agility/);
  assert.match(invalid.errors.join('\n'), /technology-neutrality/);
  assert.match(invalid.errors.join('\n'), /pattern-recognition/);
  assert.match(invalid.errors.join('\n'), /controlled-adoption/);
  assert.match(invalid.errors.join('\n'), /operational-summarization/);
  assert.match(invalid.errors.join('\n'), /reliability-prediction/);
  assert.match(invalid.errors.join('\n'), /automated-diagnostics/);
  assert.match(invalid.errors.join('\n'), /partner-ecosystems/);
  assert.match(invalid.errors.join('\n'), /semantic-evidence-validation/);
  assert.match(invalid.errors.join('\n'), /service-dependency-visualization/);
  assert.match(invalid.errors.join('\n'), /explainable-enterprise-ai/);
  assert.match(invalid.errors.join('\n'), /Services/);
  assert.match(invalid.errors.join('\n'), /protect-architectural-independence/);
  assert.match(invalid.errors.join('\n'), /explains-operations/);
  assert.match(invalid.errors.join('\n'), /Business needs should guide/);
  assert.match(invalid.errors.join('\n'), /AI should augment enterprise operations/);
  assert.match(invalid.errors.join('\n'), /Specific future technologies are outside ARCH-010-10 scope/);
  assert.match(invalid.errors.join('\n'), /Product roadmaps are outside ARCH-010-10 scope/);
  assert.match(invalid.errors.join('\n'), /AI must not replace human accountability/);
});

test('future observability evolution assertion rejects incomplete metadata', () => {
  class IncompleteFutureObservabilityEvolutionDescriptor extends FutureObservabilityEvolutionDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteFutureObservabilityEvolutionDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.FUTURE_OBSERVABILITY_EVOLUTION_INVALID &&
      error.details.errors.some(message => message.includes('evolution principles'))
  );
});

test('future observability evolution descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('FutureObservabilityEvolutionDescriptor');

  assert.ok(descriptor instanceof FutureObservabilityEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
