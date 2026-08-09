import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ENTERPRISE_CONNECTIVITY_TARGETS,
  ENTERPRISE_INTEGRATION_MODEL_STAGES,
  FUTURE_INTEGRATION_OVERVIEW_DIRECTIONS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  INTEGRATION_BOUNDARY_SEPARATIONS,
  INTEGRATION_COMMUNICATION_MODELS,
  INTEGRATION_CONTRACT_ELEMENTS,
  INTEGRATION_DOMAIN_NAMES,
  INTEGRATION_GOVERNANCE_FOUNDATIONS,
  INTEGRATION_LIFECYCLE_STAGES,
  INTEGRATION_OBJECTIVES,
  INTEGRATION_PARTICIPANT_TYPES,
  INTEGRATION_PRINCIPLE_NAMES,
  INTEGRATION_QUALITY_ATTRIBUTES,
  INTEGRATION_RELATIONSHIP_FLOW_STAGES,
  INTEGRATION_SECURITY_REQUIREMENTS,
  INTEGRATION_TREATMENT_PRINCIPLES,
  LOOSE_COUPLING_AVOIDED_ASSUMPTIONS,
  IntegrationContractBoundary,
  IntegrationDomainProfile,
  IntegrationOverviewDescriptor,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('integration overview exposes treatment, objectives, model, principles, and relationship flow', () => {
  const descriptor = new IntegrationOverviewDescriptor();

  assert.ok(descriptor.treatmentPrinciples().includes(INTEGRATION_TREATMENT_PRINCIPLES.CONTRACT_DRIVEN));
  assert.ok(descriptor.objectives().includes(INTEGRATION_OBJECTIVES.INTEROPERABILITY));
  assert.deepEqual(descriptor.enterpriseModel(), Object.values(ENTERPRISE_INTEGRATION_MODEL_STAGES));
  assert.ok(descriptor.principles().includes(INTEGRATION_PRINCIPLE_NAMES.CONTRACT_FIRST));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(INTEGRATION_RELATIONSHIP_FLOW_STAGES));
});

test('integration overview exposes domains, communication models, participants, lifecycle, and governance metadata', () => {
  const descriptor = new IntegrationOverviewDescriptor();

  assert.ok(descriptor.integrationDomains().includes(INTEGRATION_DOMAIN_NAMES.AI_SERVICES));
  assert.ok(descriptor.communicationModels().includes(INTEGRATION_COMMUNICATION_MODELS.EVENT_DRIVEN_COMMUNICATION));
  assert.ok(descriptor.participantTypes().includes(INTEGRATION_PARTICIPANT_TYPES.THIRD_PARTY_PROVIDERS));
  assert.ok(descriptor.contractElements().includes(INTEGRATION_CONTRACT_ELEMENTS.ERROR_CONDITIONS));
  assert.ok(descriptor.avoidedAssumptions().includes(LOOSE_COUPLING_AVOIDED_ASSUMPTIONS.TECHNOLOGY_STACK));
  assert.ok(descriptor.securityRequirements().includes(INTEGRATION_SECURITY_REQUIREMENTS.AUTHORIZATION));
  assert.ok(descriptor.boundarySeparations().includes(INTEGRATION_BOUNDARY_SEPARATIONS.DATA_MODELS));
  assert.ok(descriptor.connectivityTargets().includes(ENTERPRISE_CONNECTIVITY_TARGETS.AI_PROVIDERS));
  assert.deepEqual(descriptor.lifecycle(), Object.values(INTEGRATION_LIFECYCLE_STAGES));
  assert.ok(descriptor.qualityAttributes().includes(INTEGRATION_QUALITY_ATTRIBUTES.EVOLVABILITY));
  assert.ok(descriptor.governanceFoundations().includes(INTEGRATION_GOVERNANCE_FOUNDATIONS.COMPATIBILITY_POLICIES));
});

test('integration overview validates governed integration domains', () => {
  const descriptor = new IntegrationOverviewDescriptor();
  const valid = descriptor.validateDomain(
    new IntegrationDomainProfile({
      domainName: INTEGRATION_DOMAIN_NAMES.BUSINESS_APIS,
      communicationModels: Object.values(INTEGRATION_COMMUNICATION_MODELS),
      participantTypes: Object.values(INTEGRATION_PARTICIPANT_TYPES),
      qualityAttributes: Object.values(INTEGRATION_QUALITY_ATTRIBUTES)
    })
  );
  const invalid = descriptor.validateDomain({
    domainName: 'database-sharing',
    communicationModels: [INTEGRATION_COMMUNICATION_MODELS.REQUEST_RESPONSE],
    participantTypes: [INTEGRATION_PARTICIPANT_TYPES.BUSINESS_SERVICES],
    qualityAttributes: [INTEGRATION_QUALITY_ATTRIBUTES.RELIABILITY],
    supportsDistinctCommunicationStyle: false,
    governedByCommonPrinciples: false,
    independentlyGoverned: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported integration domain/);
  assert.match(invalid.errors.join('\n'), /event-driven-communication/);
  assert.match(invalid.errors.join('\n'), /ai-agents/);
  assert.match(invalid.errors.join('\n'), /scalability/);
  assert.match(invalid.errors.join('\n'), /vendor neutral/);
});

test('integration overview validates explicit secure contract boundaries', () => {
  const descriptor = new IntegrationOverviewDescriptor();
  const valid = descriptor.validateContractBoundary(
    new IntegrationContractBoundary({
      boundaryName: 'Reservation API Boundary',
      contractElements: Object.values(INTEGRATION_CONTRACT_ELEMENTS),
      avoidedAssumptions: Object.values(LOOSE_COUPLING_AVOIDED_ASSUMPTIONS),
      securityRequirements: Object.values(INTEGRATION_SECURITY_REQUIREMENTS),
      boundarySeparations: Object.values(INTEGRATION_BOUNDARY_SEPARATIONS),
      connectivityTargets: Object.values(ENTERPRISE_CONNECTIVITY_TARGETS),
      lifecycleStages: Object.values(INTEGRATION_LIFECYCLE_STAGES),
      governanceFoundations: Object.values(INTEGRATION_GOVERNANCE_FOUNDATIONS)
    })
  );
  const invalid = descriptor.validateContractBoundary({
    boundaryName: '',
    contractElements: [INTEGRATION_CONTRACT_ELEMENTS.SUPPORTED_CAPABILITIES],
    avoidedAssumptions: [LOOSE_COUPLING_AVOIDED_ASSUMPTIONS.INTERNAL_IMPLEMENTATION],
    securityRequirements: [INTEGRATION_SECURITY_REQUIREMENTS.IDENTITY],
    boundarySeparations: [INTEGRATION_BOUNDARY_SEPARATIONS.OWNERSHIP],
    connectivityTargets: [ENTERPRISE_CONNECTIVITY_TARGETS.INTERNAL_ENTERPRISE_SYSTEMS],
    lifecycleStages: [INTEGRATION_LIFECYCLE_STAGES.DESIGN],
    governanceFoundations: [INTEGRATION_GOVERNANCE_FOUNDATIONS.CONTRACT_MANAGEMENT],
    explicitContract: false,
    preservesServiceAutonomy: false,
    looselyCoupled: false,
    businessCentric: false,
    technologyNeutral: false,
    supportsMultipleCommunicationStyles: false,
    enablesIndependentEvolution: false,
    preservesInteroperability: false,
    prescribesSingleCommunicationStyle: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /expected-inputs/);
  assert.match(invalid.errors.join('\n'), /technology-stack/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /explicit integration contract/);
  assert.match(invalid.errors.join('\n'), /single communication style/);
});

test('integration overview reports future directions without implementing them', () => {
  const descriptor = new IntegrationOverviewDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_OVERVIEW_DIRECTIONS.API_ARCHITECTURE));
  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_OVERVIEW_DIRECTIONS.AI_INTEGRATIONS));
  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_OVERVIEW_DIRECTIONS.FUTURE_EVOLUTION));
});

test('integration overview assertion rejects incomplete metadata', () => {
  class IncompleteIntegrationOverviewDescriptor extends IntegrationOverviewDescriptor {
    integrationDomains() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteIntegrationOverviewDescriptor().assertOverview(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.INTEGRATION_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('integration domains'))
  );
});

test('integration overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('IntegrationOverviewDescriptor');

  assert.ok(descriptor instanceof IntegrationOverviewDescriptor);
  assert.equal(descriptor.assertOverview().isValid, true);
});
