import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_ARCHITECTURAL_MODEL_STAGES,
  API_ARCHITECTURE_OBJECTIVES,
  API_CATEGORIES,
  API_CATEGORY_CHARACTERISTICS,
  API_CONTRACT_ELEMENTS,
  API_DESIGN_PRINCIPLES,
  API_DISCOVERABILITY_ELEMENTS,
  API_GOVERNANCE_ACTIVITIES,
  API_LIFECYCLE_STAGES,
  API_OWNERSHIP_RESPONSIBILITIES,
  API_QUALITY_ATTRIBUTES,
  API_RELATIONSHIP_FLOW_STAGES,
  API_RELIABILITY_CONSIDERATIONS,
  API_SECURITY_CONTROLS,
  API_VERSIONING_REQUIREMENTS,
  FUTURE_API_ARCHITECTURE_DIRECTIONS,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  ApiArchitectureDescriptor,
  ApiContractProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('api architecture exposes documented objectives, model, lifecycle, and relationship flow', () => {
  const descriptor = new ApiArchitectureDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(API_ARCHITECTURE_OBJECTIVES));
  assert.deepEqual(descriptor.architecturalModel(), Object.values(API_ARCHITECTURAL_MODEL_STAGES));
  assert.deepEqual(descriptor.lifecycle(), Object.values(API_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(API_RELATIONSHIP_FLOW_STAGES));
});

test('api architecture exposes categories, contracts, security, reliability, quality, and governance metadata', () => {
  const descriptor = new ApiArchitectureDescriptor();

  assert.ok(descriptor.designPrinciples().includes(API_DESIGN_PRINCIPLES.BUSINESS_ORIENTED));
  assert.ok(descriptor.categories().includes(API_CATEGORIES.AI_APIS));
  assert.ok(descriptor.categoryCharacteristics().includes(API_CATEGORY_CHARACTERISTICS.MODEL_INFERENCE));
  assert.ok(descriptor.ownershipResponsibilities().includes(API_OWNERSHIP_RESPONSIBILITIES.VERSION_MANAGEMENT));
  assert.ok(descriptor.contractElements().includes(API_CONTRACT_ELEMENTS.SERVICE_RESPONSIBILITIES));
  assert.ok(descriptor.versioningRequirements().includes(API_VERSIONING_REQUIREMENTS.PREDICTABLE_DEPRECATION));
  assert.ok(descriptor.discoverabilityElements().includes(API_DISCOVERABILITY_ELEMENTS.LIFECYCLE_STATUS));
  assert.ok(descriptor.securityControls().includes(API_SECURITY_CONTROLS.ZERO_TRUST));
  assert.ok(descriptor.reliabilityConsiderations().includes(API_RELIABILITY_CONSIDERATIONS.CAPACITY_PLANNING));
  assert.ok(descriptor.qualityAttributes().includes(API_QUALITY_ATTRIBUTES.OBSERVABILITY));
  assert.ok(descriptor.governanceActivities().includes(API_GOVERNANCE_ACTIVITIES.CONSUMER_COMMUNICATION));
});

test('api architecture validates governed business-oriented API contracts', () => {
  const descriptor = new ApiArchitectureDescriptor();
  const valid = descriptor.validateApiContract(
    new ApiContractProfile({
      apiName: 'Reservation Capability API',
      category: API_CATEGORIES.INTERNAL_APIS,
      modelStages: Object.values(API_ARCHITECTURAL_MODEL_STAGES),
      designPrinciples: Object.values(API_DESIGN_PRINCIPLES),
      categoryCharacteristics: Object.values(API_CATEGORY_CHARACTERISTICS),
      ownershipResponsibilities: Object.values(API_OWNERSHIP_RESPONSIBILITIES),
      contractElements: Object.values(API_CONTRACT_ELEMENTS),
      lifecycleStages: Object.values(API_LIFECYCLE_STAGES),
      versioningRequirements: Object.values(API_VERSIONING_REQUIREMENTS),
      discoverabilityElements: Object.values(API_DISCOVERABILITY_ELEMENTS),
      securityControls: Object.values(API_SECURITY_CONTROLS),
      reliabilityConsiderations: Object.values(API_RELIABILITY_CONSIDERATIONS),
      qualityAttributes: Object.values(API_QUALITY_ATTRIBUTES),
      governanceActivities: Object.values(API_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateApiContract({
    apiName: '',
    category: 'database-api',
    modelStages: [API_ARCHITECTURAL_MODEL_STAGES.BUSINESS_CAPABILITY],
    designPrinciples: [API_DESIGN_PRINCIPLES.BUSINESS_ORIENTED],
    categoryCharacteristics: [API_CATEGORY_CHARACTERISTICS.HIGH_TRUST],
    ownershipResponsibilities: [API_OWNERSHIP_RESPONSIBILITIES.CONTRACT_QUALITY],
    contractElements: [API_CONTRACT_ELEMENTS.BUSINESS_CAPABILITY],
    lifecycleStages: [API_LIFECYCLE_STAGES.DESIGN],
    versioningRequirements: [API_VERSIONING_REQUIREMENTS.BACKWARD_COMPATIBILITY],
    discoverabilityElements: [API_DISCOVERABILITY_ELEMENTS.SERVICE_CATALOG],
    securityControls: [API_SECURITY_CONTROLS.IDENTITY],
    reliabilityConsiderations: [API_RELIABILITY_CONSIDERATIONS.TIMEOUT_MANAGEMENT],
    qualityAttributes: [API_QUALITY_ATTRIBUTES.AVAILABILITY],
    governanceActivities: [API_GOVERNANCE_ACTIVITIES.CONTRACT_REVIEW],
    exposesBusinessCapability: false,
    preservesServiceOwnership: false,
    stableVersionedInterface: false,
    implementationIndependent: false,
    discoverable: false,
    governed: false,
    technologyNeutral: false,
    protocolSpecific: true,
    vendorSpecific: true,
    exposesInternalImplementation: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Unsupported API category/);
  assert.match(invalid.errors.join('\n'), /Service Interface/);
  assert.match(invalid.errors.join('\n'), /contract-stability/);
  assert.match(invalid.errors.join('\n'), /consumer-documentation/);
  assert.match(invalid.errors.join('\n'), /documentation/);
  assert.match(invalid.errors.join('\n'), /operations/);
  assert.match(invalid.errors.join('\n'), /Review/);
  assert.match(invalid.errors.join('\n'), /controlled-evolution/);
  assert.match(invalid.errors.join('\n'), /capability-descriptions/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /retry-behavior/);
  assert.match(invalid.errors.join('\n'), /scalability/);
  assert.match(invalid.errors.join('\n'), /security-review/);
  assert.match(invalid.errors.join('\n'), /business capabilities through explicit contracts/);
  assert.match(invalid.errors.join('\n'), /Specific API protocols are outside ARCH-009-03 scope/);
  assert.match(invalid.errors.join('\n'), /internal implementation details/);
});

test('api architecture reports future directions without implementing them', () => {
  const descriptor = new ApiArchitectureDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_API_ARCHITECTURE_DIRECTIONS.CONTRACT_FIRST_DEVELOPMENT));
  assert.ok(descriptor.futureDirections().includes(FUTURE_API_ARCHITECTURE_DIRECTIONS.AUTOMATED_COMPATIBILITY_VALIDATION));
  assert.ok(descriptor.futureDirections().includes(FUTURE_API_ARCHITECTURE_DIRECTIONS.AUTONOMOUS_CONTRACT_VERIFICATION));
});

test('api architecture assertion rejects incomplete metadata', () => {
  class IncompleteApiArchitectureDescriptor extends ApiArchitectureDescriptor {
    categories() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteApiArchitectureDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.API_ARCHITECTURE_INVALID &&
      error.details.errors.some(message => message.includes('API categories'))
  );
});

test('api architecture descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ApiArchitectureDescriptor');

  assert.ok(descriptor instanceof ApiArchitectureDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
