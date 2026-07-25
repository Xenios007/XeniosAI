import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_DRIVEN_INTEGRATION_EVOLUTION_CAPABILITIES,
  ENTERPRISE_ECOSYSTEM_EVOLUTION_CAPABILITIES,
  FUTURE_INTEGRATION_ARCHITECTURAL_RULES,
  FUTURE_INTEGRATION_EVOLUTION_CAPABILITIES,
  FUTURE_INTEGRATION_EVOLUTION_MODEL_STAGES,
  FUTURE_INTEGRATION_EVOLUTION_OBJECTIVES,
  FUTURE_INTEGRATION_EVOLUTION_RELATIONSHIP_FLOW_STAGES,
  FUTURE_INTEGRATION_SUCCESS_CHARACTERISTICS,
  FUTURE_INTEGRATION_VISION_CHARACTERISTICS,
  FutureIntegrationEvolutionDescriptor,
  FutureIntegrationEvolutionProfile,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  INTEGRATION_GOVERNANCE_EVOLUTION_CAPABILITIES,
  INTEGRATION_KNOWLEDGE_EVOLUTION_CAPABILITIES,
  INTEGRATION_OPERATIONAL_EVOLUTION_CAPABILITIES,
  INTEGRATION_SECURITY_EVOLUTION_CAPABILITIES,
  INTEGRATION_SUSTAINABILITY_FACTORS,
  STRATEGIC_INTEGRATION_EVOLUTION_PRINCIPLES,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('future integration evolution exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new FutureIntegrationEvolutionDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(FUTURE_INTEGRATION_EVOLUTION_OBJECTIVES));
  assert.deepEqual(descriptor.evolutionModel(), Object.values(FUTURE_INTEGRATION_EVOLUTION_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(STRATEGIC_INTEGRATION_EVOLUTION_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(FUTURE_INTEGRATION_EVOLUTION_RELATIONSHIP_FLOW_STAGES));
});

test('future integration evolution exposes capability, sustainability, success, rules, and vision metadata', () => {
  const descriptor = new FutureIntegrationEvolutionDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_INTEGRATION_EVOLUTION_CAPABILITIES.SEMANTIC_INTEROPERABILITY));
  assert.ok(descriptor.aiDrivenCapabilities().includes(AI_DRIVEN_INTEGRATION_EVOLUTION_CAPABILITIES.SEMANTIC_SERVICE_DISCOVERY));
  assert.ok(descriptor.ecosystemCapabilities().includes(ENTERPRISE_ECOSYSTEM_EVOLUTION_CAPABILITIES.PARTNER_FEDERATION));
  assert.ok(descriptor.governanceCapabilities().includes(INTEGRATION_GOVERNANCE_EVOLUTION_CAPABILITIES.POLICY_AS_CODE));
  assert.ok(descriptor.operationalCapabilities().includes(INTEGRATION_OPERATIONAL_EVOLUTION_CAPABILITIES.SELF_HEALING_INTEGRATIONS));
  assert.ok(descriptor.securityCapabilities().includes(INTEGRATION_SECURITY_EVOLUTION_CAPABILITIES.ADAPTIVE_ZERO_TRUST));
  assert.ok(descriptor.knowledgeCapabilities().includes(INTEGRATION_KNOWLEDGE_EVOLUTION_CAPABILITIES.FEDERATED_KNOWLEDGE_NETWORKS));
  assert.ok(descriptor.sustainabilityFactors().includes(INTEGRATION_SUSTAINABILITY_FACTORS.GOVERNED_CONTRACTS));
  assert.ok(descriptor.successCharacteristics().includes(FUTURE_INTEGRATION_SUCCESS_CHARACTERISTICS.AI_READINESS));
  assert.ok(descriptor.architecturalRules().includes(FUTURE_INTEGRATION_ARCHITECTURAL_RULES.REMAIN_VENDOR_AND_TECHNOLOGY_NEUTRAL));
  assert.ok(descriptor.visionCharacteristics().includes(FUTURE_INTEGRATION_VISION_CHARACTERISTICS.SELF_DESCRIBING_INTEGRATION_CONTRACTS));
});

test('future integration evolution validates complete strategic evolution profiles', () => {
  const descriptor = new FutureIntegrationEvolutionDescriptor();
  const valid = descriptor.validateEvolution(
    new FutureIntegrationEvolutionProfile({
      evolutionName: 'Enterprise Integration Future Evolution',
      objectives: Object.values(FUTURE_INTEGRATION_EVOLUTION_OBJECTIVES),
      modelStages: Object.values(FUTURE_INTEGRATION_EVOLUTION_MODEL_STAGES),
      principles: Object.values(STRATEGIC_INTEGRATION_EVOLUTION_PRINCIPLES),
      futureCapabilities: Object.values(FUTURE_INTEGRATION_EVOLUTION_CAPABILITIES),
      aiDrivenCapabilities: Object.values(AI_DRIVEN_INTEGRATION_EVOLUTION_CAPABILITIES),
      ecosystemCapabilities: Object.values(ENTERPRISE_ECOSYSTEM_EVOLUTION_CAPABILITIES),
      governanceCapabilities: Object.values(INTEGRATION_GOVERNANCE_EVOLUTION_CAPABILITIES),
      operationalCapabilities: Object.values(INTEGRATION_OPERATIONAL_EVOLUTION_CAPABILITIES),
      securityCapabilities: Object.values(INTEGRATION_SECURITY_EVOLUTION_CAPABILITIES),
      knowledgeCapabilities: Object.values(INTEGRATION_KNOWLEDGE_EVOLUTION_CAPABILITIES),
      sustainabilityFactors: Object.values(INTEGRATION_SUSTAINABILITY_FACTORS),
      successCharacteristics: Object.values(FUTURE_INTEGRATION_SUCCESS_CHARACTERISTICS),
      relationshipFlow: Object.values(FUTURE_INTEGRATION_EVOLUTION_RELATIONSHIP_FLOW_STAGES),
      architecturalRules: Object.values(FUTURE_INTEGRATION_ARCHITECTURAL_RULES),
      visionCharacteristics: Object.values(FUTURE_INTEGRATION_VISION_CHARACTERISTICS)
    })
  );
  const invalid = descriptor.validateEvolution({
    evolutionName: '',
    objectives: [FUTURE_INTEGRATION_EVOLUTION_OBJECTIVES.SUSTAINABLE_ENTERPRISE_GROWTH],
    modelStages: [FUTURE_INTEGRATION_EVOLUTION_MODEL_STAGES.BUSINESS_STRATEGY],
    principles: [STRATEGIC_INTEGRATION_EVOLUTION_PRINCIPLES.PRESERVE_ARCHITECTURAL_STABILITY],
    futureCapabilities: [FUTURE_INTEGRATION_EVOLUTION_CAPABILITIES.AUTONOMOUS_ENTERPRISE_COLLABORATION],
    aiDrivenCapabilities: [AI_DRIVEN_INTEGRATION_EVOLUTION_CAPABILITIES.INTELLIGENT_ROUTING],
    ecosystemCapabilities: [ENTERPRISE_ECOSYSTEM_EVOLUTION_CAPABILITIES.MULTI_ORGANIZATION_ECOSYSTEMS],
    governanceCapabilities: [INTEGRATION_GOVERNANCE_EVOLUTION_CAPABILITIES.POLICY_AS_CODE],
    operationalCapabilities: [INTEGRATION_OPERATIONAL_EVOLUTION_CAPABILITIES.PREDICTIVE_MONITORING],
    securityCapabilities: [INTEGRATION_SECURITY_EVOLUTION_CAPABILITIES.ADAPTIVE_ZERO_TRUST],
    knowledgeCapabilities: [INTEGRATION_KNOWLEDGE_EVOLUTION_CAPABILITIES.SEMANTIC_ENTERPRISE_KNOWLEDGE],
    sustainabilityFactors: [INTEGRATION_SUSTAINABILITY_FACTORS.STABLE_ARCHITECTURAL_PRINCIPLES],
    successCharacteristics: [FUTURE_INTEGRATION_SUCCESS_CHARACTERISTICS.HIGH_INTEROPERABILITY],
    relationshipFlow: [FUTURE_INTEGRATION_EVOLUTION_RELATIONSHIP_FLOW_STAGES.INTEGRATION_PRINCIPLES],
    architecturalRules: [FUTURE_INTEGRATION_ARCHITECTURAL_RULES.PRESERVE_ENTERPRISE_ARCHITECTURAL_PRINCIPLES],
    visionCharacteristics: [FUTURE_INTEGRATION_VISION_CHARACTERISTICS.UNIVERSALLY_DISCOVERABLE_BUSINESS_CAPABILITIES],
    preservesArchitecturalPrinciples: false,
    maintainsInteroperability: false,
    protectsEnterpriseInvestments: false,
    encouragesInnovation: false,
    minimizesDisruption: false,
    supportsEmergingTechnologies: false,
    stableAndAdaptable: false,
    businessDriven: false,
    incrementalModernization: false,
    futureProofContracts: false,
    aiStrengthensGovernance: false,
    supportsEcosystemGrowthWithoutSacrificingAutonomy: false,
    governanceProactive: false,
    sustainabilitySupported: false,
    vendorNeutral: false,
    technologyNeutral: false,
    roadmapSpecific: true,
    vendorSpecific: true,
    productSelectionSpecific: true,
    technologyCommitmentSpecific: true,
    disruptiveRedesignRequired: true,
    fragmentsIntegrationEcosystem: true,
    governanceReplacedByAi: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /intelligent-interoperability/);
  assert.match(invalid.errors.join('\n'), /Architecture/);
  assert.match(invalid.errors.join('\n'), /business-driven-innovation/);
  assert.match(invalid.errors.join('\n'), /semantic-interoperability/);
  assert.match(invalid.errors.join('\n'), /semantic-service-discovery/);
  assert.match(invalid.errors.join('\n'), /partner-federation/);
  assert.match(invalid.errors.join('\n'), /automated-architectural-review/);
  assert.match(invalid.errors.join('\n'), /autonomous-recovery/);
  assert.match(invalid.errors.join('\n'), /dynamic-trust-evaluation/);
  assert.match(invalid.errors.join('\n'), /federated-knowledge-networks/);
  assert.match(invalid.errors.join('\n'), /modular-design/);
  assert.match(invalid.errors.join('\n'), /stable-contracts/);
  assert.match(invalid.errors.join('\n'), /API Architecture/);
  assert.match(invalid.errors.join('\n'), /keep-business-capabilities-technology-independent/);
  assert.match(invalid.errors.join('\n'), /self-describing-integration-contracts/);
  assert.match(invalid.errors.join('\n'), /preserve architectural principles/);
  assert.match(invalid.errors.join('\n'), /business needs/);
  assert.match(invalid.errors.join('\n'), /AI should strengthen governance/);
  assert.match(invalid.errors.join('\n'), /Vendor recommendations are outside ARCH-009-10 scope/);
  assert.match(invalid.errors.join('\n'), /Technology commitments are outside ARCH-009-10 scope/);
  assert.match(invalid.errors.join('\n'), /fragmenting it/);
});

test('future integration evolution assertion rejects incomplete metadata', () => {
  class IncompleteFutureIntegrationEvolutionDescriptor extends FutureIntegrationEvolutionDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteFutureIntegrationEvolutionDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.FUTURE_INTEGRATION_EVOLUTION_INVALID &&
      error.details.errors.some(message => message.includes('strategic principles'))
  );
});

test('future integration evolution descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('FutureIntegrationEvolutionDescriptor');

  assert.ok(descriptor instanceof FutureIntegrationEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
