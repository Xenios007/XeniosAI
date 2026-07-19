import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ASYNCHRONOUS_COMMUNICATION_BENEFITS,
  ENTERPRISE_INTEGRATION_PRINCIPLES,
  EVOLUTION_WITHOUT_DISRUPTION_REQUIREMENTS,
  FUTURE_INTEGRATION_PRINCIPLE_DIRECTIONS,
  HIGH_COHESION_BENEFITS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  INTEGRATION_CONTRACT_DEFINITION_ELEMENTS,
  INTEGRATION_DECISION_MODEL_STAGES,
  INTEGRATION_OBSERVABILITY_INFORMATION,
  INTEGRATION_OWNERSHIP_RESPONSIBILITIES,
  INTEGRATION_PRINCIPLE_GOVERNANCE_ACTIVITIES,
  INTEGRATION_PRINCIPLE_OBJECTIVES,
  INTEGRATION_PRINCIPLE_QUALITY_ATTRIBUTES,
  INTEGRATION_PRINCIPLE_SUPPORT_FACTORS,
  INTEGRATION_PRINCIPLES_RELATIONSHIP_FLOW_STAGES,
  INTEGRATION_RELIABILITY_CAPABILITIES,
  PRINCIPLE_COMMUNICATION_STYLES,
  PRINCIPLE_LOOSE_COUPLING_AVOIDED_ASSUMPTIONS,
  PRINCIPLE_SECURITY_CONTROLS,
  STANDARDIZATION_BENEFITS,
  TECHNOLOGY_INDEPENDENCE_TARGETS,
  VERSION_COMPATIBILITY_REQUIREMENTS,
  IntegrationDecisionModel,
  IntegrationPrincipleProfile,
  IntegrationPrinciplesDescriptor,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('integration principles expose documented objectives, principles, and decision flow', () => {
  const descriptor = new IntegrationPrinciplesDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(INTEGRATION_PRINCIPLE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(ENTERPRISE_INTEGRATION_PRINCIPLES));
  assert.deepEqual(descriptor.decisionModel(), Object.values(INTEGRATION_DECISION_MODEL_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(INTEGRATION_PRINCIPLES_RELATIONSHIP_FLOW_STAGES));
});

test('integration principles expose support factors and governance metadata', () => {
  const descriptor = new IntegrationPrinciplesDescriptor();

  assert.ok(descriptor.supportFactors().includes(INTEGRATION_PRINCIPLE_SUPPORT_FACTORS.BUSINESS_ALIGNMENT));
  assert.ok(descriptor.contractElements().includes(INTEGRATION_CONTRACT_DEFINITION_ELEMENTS.ERROR_CONDITIONS));
  assert.ok(descriptor.avoidedAssumptions().includes(PRINCIPLE_LOOSE_COUPLING_AVOIDED_ASSUMPTIONS.DEPLOYMENT_SCHEDULES));
  assert.ok(descriptor.highCohesionBenefits().includes(HIGH_COHESION_BENEFITS.EVOLUTION));
  assert.ok(descriptor.technologyIndependenceTargets().includes(TECHNOLOGY_INDEPENDENCE_TARGETS.INFRASTRUCTURE_PROVIDERS));
  assert.ok(descriptor.communicationStyles().includes(PRINCIPLE_COMMUNICATION_STYLES.WORKFLOW_ORCHESTRATION));
  assert.ok(descriptor.asynchronousBenefits().includes(ASYNCHRONOUS_COMMUNICATION_BENEFITS.FAULT_ISOLATION));
  assert.ok(descriptor.reliabilityCapabilities().includes(INTEGRATION_RELIABILITY_CAPABILITIES.IDEMPOTENCY));
  assert.ok(descriptor.observabilityInformation().includes(INTEGRATION_OBSERVABILITY_INFORMATION.THROUGHPUT));
  assert.ok(descriptor.securityControls().includes(PRINCIPLE_SECURITY_CONTROLS.ZERO_TRUST));
  assert.ok(descriptor.versionCompatibilityRequirements().includes(VERSION_COMPATIBILITY_REQUIREMENTS.CONSUMER_STABILITY));
  assert.ok(descriptor.ownershipResponsibilities().includes(INTEGRATION_OWNERSHIP_RESPONSIBILITIES.SUPPORT));
  assert.ok(descriptor.governanceActivities().includes(INTEGRATION_PRINCIPLE_GOVERNANCE_ACTIVITIES.COMPLIANCE_OVERSIGHT));
  assert.ok(descriptor.standardizationBenefits().includes(STANDARDIZATION_BENEFITS.CONSUMER_EXPERIENCE));
  assert.ok(descriptor.evolutionRequirements().includes(EVOLUTION_WITHOUT_DISRUPTION_REQUIREMENTS.ARCHITECTURAL_CONTINUITY));
  assert.ok(descriptor.qualityAttributes().includes(INTEGRATION_PRINCIPLE_QUALITY_ATTRIBUTES.SUSTAINABILITY));
});

test('integration principles validate enterprise-wide architecture guidance', () => {
  const descriptor = new IntegrationPrinciplesDescriptor();
  const valid = descriptor.validatePrinciple(
    new IntegrationPrincipleProfile({
      principleName: ENTERPRISE_INTEGRATION_PRINCIPLES.CONTRACT_FIRST,
      supportFactors: Object.values(INTEGRATION_PRINCIPLE_SUPPORT_FACTORS),
      qualityAttributes: Object.values(INTEGRATION_PRINCIPLE_QUALITY_ATTRIBUTES)
    })
  );
  const invalid = descriptor.validatePrinciple({
    principleName: 'database-driven-integration',
    supportFactors: [INTEGRATION_PRINCIPLE_SUPPORT_FACTORS.BUSINESS_ALIGNMENT],
    qualityAttributes: [INTEGRATION_PRINCIPLE_QUALITY_ATTRIBUTES.ALIGNMENT],
    appliesAcrossEnterprise: false,
    stableAcrossTechnologyChange: false,
    businessAligned: false,
    preservesServiceAutonomy: false,
    improvesConsistency: false,
    implementationConstraint: true,
    protocolSpecific: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported integration principle/);
  assert.match(invalid.errors.join('\n'), /service-autonomy/);
  assert.match(invalid.errors.join('\n'), /maintainability/);
  assert.match(invalid.errors.join('\n'), /all enterprise integration decisions/);
  assert.match(invalid.errors.join('\n'), /Protocol specifications are outside ARCH-009-02 scope/);
  assert.match(invalid.errors.join('\n'), /technology-neutral/);
});

test('integration principles validate decision model, contracts, reliability, security, ownership, and governance', () => {
  const descriptor = new IntegrationPrinciplesDescriptor();
  const valid = descriptor.validateDecisionModel(
    new IntegrationDecisionModel({
      decisionName: 'Reservation integration decision model',
      stages: Object.values(INTEGRATION_DECISION_MODEL_STAGES),
      contractElements: Object.values(INTEGRATION_CONTRACT_DEFINITION_ELEMENTS),
      avoidedAssumptions: Object.values(PRINCIPLE_LOOSE_COUPLING_AVOIDED_ASSUMPTIONS),
      communicationStyles: Object.values(PRINCIPLE_COMMUNICATION_STYLES),
      reliabilityCapabilities: Object.values(INTEGRATION_RELIABILITY_CAPABILITIES),
      securityControls: Object.values(PRINCIPLE_SECURITY_CONTROLS),
      governanceActivities: Object.values(INTEGRATION_PRINCIPLE_GOVERNANCE_ACTIVITIES),
      ownershipResponsibilities: Object.values(INTEGRATION_OWNERSHIP_RESPONSIBILITIES)
    })
  );
  const invalid = descriptor.validateDecisionModel({
    decisionName: '',
    stages: [INTEGRATION_DECISION_MODEL_STAGES.BUSINESS_REQUIREMENT],
    contractElements: [INTEGRATION_CONTRACT_DEFINITION_ELEMENTS.BUSINESS_CAPABILITIES],
    avoidedAssumptions: [PRINCIPLE_LOOSE_COUPLING_AVOIDED_ASSUMPTIONS.INTERNAL_CODE],
    communicationStyles: [PRINCIPLE_COMMUNICATION_STYLES.REQUEST_RESPONSE],
    reliabilityCapabilities: [INTEGRATION_RELIABILITY_CAPABILITIES.RETRY_STRATEGIES],
    securityControls: [PRINCIPLE_SECURITY_CONTROLS.IDENTITY],
    governanceActivities: [INTEGRATION_PRINCIPLE_GOVERNANCE_ACTIVITIES.CONTRACT_REVIEW],
    ownershipResponsibilities: [INTEGRATION_OWNERSHIP_RESPONSIBILITIES.CONTRACT_QUALITY],
    businessArchitectureDrivesDecisions: false,
    supportsMultipleCommunicationModels: false,
    asynchronousWhenAppropriate: false,
    reliabilityDesignedUpfront: false,
    observableThroughoutLifecycle: false,
    securityConsistentlyApplied: false,
    compatibilityPreferred: false,
    explicitlyOwned: false,
    technologyDefinesBoundary: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Business Capability/);
  assert.match(invalid.errors.join('\n'), /supported-operations/);
  assert.match(invalid.errors.join('\n'), /database-structures/);
  assert.match(invalid.errors.join('\n'), /events/);
  assert.match(invalid.errors.join('\n'), /idempotency/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /Security controls should be consistently applied/);
  assert.match(invalid.errors.join('\n'), /Technology should support business architecture/);
});

test('integration principles report future directions without implementing them', () => {
  const descriptor = new IntegrationPrinciplesDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_PRINCIPLE_DIRECTIONS.API_ARCHITECTURE));
  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_PRINCIPLE_DIRECTIONS.AI_INTEGRATION));
  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_PRINCIPLE_DIRECTIONS.LONG_TERM_EVOLUTION));
});

test('integration principles assertion rejects incomplete metadata', () => {
  class IncompleteIntegrationPrinciplesDescriptor extends IntegrationPrinciplesDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteIntegrationPrinciplesDescriptor().assertPrinciples(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.INTEGRATION_PRINCIPLES_INVALID &&
      error.details.errors.some(message => message.includes('15 documented principles'))
  );
});

test('integration principles descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('IntegrationPrinciplesDescriptor');

  assert.ok(descriptor instanceof IntegrationPrinciplesDescriptor);
  assert.equal(descriptor.assertPrinciples().isValid, true);
});
