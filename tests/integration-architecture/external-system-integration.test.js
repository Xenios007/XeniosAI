import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  EXTERNAL_DATA_EXCHANGE_PRINCIPLES,
  EXTERNAL_INTEGRATION_BOUNDARY_RESPONSIBILITIES,
  EXTERNAL_INTEGRATION_CATEGORIES,
  EXTERNAL_INTEGRATION_CATEGORY_EXAMPLES,
  EXTERNAL_INTEGRATION_GOVERNANCE_ACTIVITIES,
  EXTERNAL_INTEGRATION_MODEL_STAGES,
  EXTERNAL_INTEGRATION_OBSERVABILITY_TELEMETRY,
  EXTERNAL_INTEGRATION_PRINCIPLES,
  EXTERNAL_INTEGRATION_RELATIONSHIP_FLOW_STAGES,
  EXTERNAL_INTEGRATION_RELIABILITY_CONSIDERATIONS,
  EXTERNAL_INTEGRATION_SECURITY_CONTROLS,
  EXTERNAL_SYSTEM_INTEGRATION_OBJECTIVES,
  FUTURE_EXTERNAL_SYSTEM_INTEGRATION_DIRECTIONS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  ExternalSystemIntegrationDescriptor,
  ExternalSystemIntegrationProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('external system integration exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new ExternalSystemIntegrationDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(EXTERNAL_SYSTEM_INTEGRATION_OBJECTIVES));
  assert.deepEqual(descriptor.integrationModel(), Object.values(EXTERNAL_INTEGRATION_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(EXTERNAL_INTEGRATION_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(EXTERNAL_INTEGRATION_RELATIONSHIP_FLOW_STAGES));
});

test('external system integration exposes categories, boundaries, data exchange, security, reliability, observability, and governance metadata', () => {
  const descriptor = new ExternalSystemIntegrationDescriptor();

  assert.ok(descriptor.categories().includes(EXTERNAL_INTEGRATION_CATEGORIES.AI_PROVIDERS));
  assert.ok(descriptor.categoryExamples().includes(EXTERNAL_INTEGRATION_CATEGORY_EXAMPLES.FOUNDATION_MODELS));
  assert.ok(descriptor.categoryExamples().includes(EXTERNAL_INTEGRATION_CATEGORY_EXAMPLES.REGULATORY_REPORTING));
  assert.ok(descriptor.boundaryResponsibilities().includes(EXTERNAL_INTEGRATION_BOUNDARY_RESPONSIBILITIES.CONTRACT_ENFORCEMENT));
  assert.ok(descriptor.dataExchangePrinciples().includes(EXTERNAL_DATA_EXCHANGE_PRINCIPLES.MINIMIZED_DISCLOSURE));
  assert.ok(descriptor.securityControls().includes(EXTERNAL_INTEGRATION_SECURITY_CONTROLS.ZERO_TRUST));
  assert.ok(descriptor.reliabilityConsiderations().includes(EXTERNAL_INTEGRATION_RELIABILITY_CONSIDERATIONS.SERVICE_AVAILABILITY_MONITORING));
  assert.ok(descriptor.observabilityTelemetry().includes(EXTERNAL_INTEGRATION_OBSERVABILITY_TELEMETRY.INTEGRATION_FAILURES));
  assert.ok(descriptor.governanceActivities().includes(EXTERNAL_INTEGRATION_GOVERNANCE_ACTIVITIES.OPERATIONAL_STANDARDS));
});

test('external system integration validates governed external integration boundaries', () => {
  const descriptor = new ExternalSystemIntegrationDescriptor();
  const valid = descriptor.validateExternalIntegration(
    new ExternalSystemIntegrationProfile({
      integrationName: 'Partner Reservation Integration',
      category: EXTERNAL_INTEGRATION_CATEGORIES.PARTNER_SYSTEMS,
      modelStages: Object.values(EXTERNAL_INTEGRATION_MODEL_STAGES),
      principles: Object.values(EXTERNAL_INTEGRATION_PRINCIPLES),
      categoryExamples: Object.values(EXTERNAL_INTEGRATION_CATEGORY_EXAMPLES),
      boundaryResponsibilities: Object.values(EXTERNAL_INTEGRATION_BOUNDARY_RESPONSIBILITIES),
      dataExchangePrinciples: Object.values(EXTERNAL_DATA_EXCHANGE_PRINCIPLES),
      securityControls: Object.values(EXTERNAL_INTEGRATION_SECURITY_CONTROLS),
      reliabilityConsiderations: Object.values(EXTERNAL_INTEGRATION_RELIABILITY_CONSIDERATIONS),
      observabilityTelemetry: Object.values(EXTERNAL_INTEGRATION_OBSERVABILITY_TELEMETRY),
      governanceActivities: Object.values(EXTERNAL_INTEGRATION_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateExternalIntegration({
    integrationName: '',
    category: 'database-link',
    modelStages: [EXTERNAL_INTEGRATION_MODEL_STAGES.EXTERNAL_SYSTEM],
    principles: [EXTERNAL_INTEGRATION_PRINCIPLES.BOUNDARY_PROTECTION],
    categoryExamples: [EXTERNAL_INTEGRATION_CATEGORY_EXAMPLES.ERP_SYSTEMS],
    boundaryResponsibilities: [EXTERNAL_INTEGRATION_BOUNDARY_RESPONSIBILITIES.CONTRACT_ENFORCEMENT],
    dataExchangePrinciples: [EXTERNAL_DATA_EXCHANGE_PRINCIPLES.PUBLISHED_CONTRACTS],
    securityControls: [EXTERNAL_INTEGRATION_SECURITY_CONTROLS.IDENTITY],
    reliabilityConsiderations: [EXTERNAL_INTEGRATION_RELIABILITY_CONSIDERATIONS.TIMEOUT_MANAGEMENT],
    observabilityTelemetry: [EXTERNAL_INTEGRATION_OBSERVABILITY_TELEMETRY.REQUESTS],
    governanceActivities: [EXTERNAL_INTEGRATION_GOVERNANCE_ACTIVITIES.PARTNER_APPROVAL],
    preservesServiceAutonomy: false,
    governedContracts: false,
    protectsOrganizationalBoundaries: false,
    enterpriseSecurityApplied: false,
    supportsLongTermEvolution: false,
    approvedBusinessCapabilityOnly: false,
    stableIntegrationContract: false,
    externalFailureResilient: false,
    minimizesInformationDisclosure: false,
    internalArchitectureHidden: false,
    vendorNeutral: false,
    technologyNeutral: false,
    vendorSpecific: true,
    cloudProviderSpecific: true,
    middlewareSpecific: true,
    apiSpecific: true,
    protocolSpecific: true,
    implementationTechnologySpecific: true,
    exposesInternalImplementation: true,
    couplesToExternalAvailability: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Unsupported external integration category/);
  assert.match(invalid.errors.join('\n'), /Integration Contract/);
  assert.match(invalid.errors.join('\n'), /controlled-exposure/);
  assert.match(invalid.errors.join('\n'), /crm-platforms/);
  assert.match(invalid.errors.join('\n'), /security-controls/);
  assert.match(invalid.errors.join('\n'), /data-integrity/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /retry-strategies/);
  assert.match(invalid.errors.join('\n'), /responses/);
  assert.match(invalid.errors.join('\n'), /contract-management/);
  assert.match(invalid.errors.join('\n'), /approved business capabilities/);
  assert.match(invalid.errors.join('\n'), /Specific vendors are outside ARCH-009-06 scope/);
  assert.match(invalid.errors.join('\n'), /Specific cloud providers are outside ARCH-009-06 scope/);
  assert.match(invalid.errors.join('\n'), /Communication protocols are outside ARCH-009-06 scope/);
  assert.match(invalid.errors.join('\n'), /external availability/);
});

test('external system integration reports future directions without implementing them', () => {
  const descriptor = new ExternalSystemIntegrationDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_EXTERNAL_SYSTEM_INTEGRATION_DIRECTIONS.AI_ASSISTED_PARTNER_ONBOARDING));
  assert.ok(descriptor.futureDirections().includes(FUTURE_EXTERNAL_SYSTEM_INTEGRATION_DIRECTIONS.DYNAMIC_TRUST_EVALUATION));
  assert.ok(descriptor.futureDirections().includes(FUTURE_EXTERNAL_SYSTEM_INTEGRATION_DIRECTIONS.FEDERATED_ENTERPRISE_ECOSYSTEMS));
});

test('external system integration assertion rejects incomplete metadata', () => {
  class IncompleteExternalSystemIntegrationDescriptor extends ExternalSystemIntegrationDescriptor {
    categories() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteExternalSystemIntegrationDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.EXTERNAL_SYSTEM_INTEGRATION_INVALID &&
      error.details.errors.some(message => message.includes('integration categories'))
  );
});

test('external system integration descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ExternalSystemIntegrationDescriptor');

  assert.ok(descriptor instanceof ExternalSystemIntegrationDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
