import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  INTEGRATION_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';
import { ApiContractProfile } from '../contracts/api-contract-profile.js';

const ARCHITECTURAL_MODEL = Object.freeze(Object.values(API_ARCHITECTURAL_MODEL_STAGES));
const API_LIFECYCLE = Object.freeze(Object.values(API_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(API_RELATIONSHIP_FLOW_STAGES));

export class ApiArchitectureDescriptor {
  objectives() {
    return Object.freeze(Object.values(API_ARCHITECTURE_OBJECTIVES));
  }

  architecturalModel() {
    return ARCHITECTURAL_MODEL;
  }

  designPrinciples() {
    return Object.freeze(Object.values(API_DESIGN_PRINCIPLES));
  }

  categories() {
    return Object.freeze(Object.values(API_CATEGORIES));
  }

  categoryCharacteristics() {
    return Object.freeze(Object.values(API_CATEGORY_CHARACTERISTICS));
  }

  ownershipResponsibilities() {
    return Object.freeze(Object.values(API_OWNERSHIP_RESPONSIBILITIES));
  }

  contractElements() {
    return Object.freeze(Object.values(API_CONTRACT_ELEMENTS));
  }

  lifecycle() {
    return API_LIFECYCLE;
  }

  versioningRequirements() {
    return Object.freeze(Object.values(API_VERSIONING_REQUIREMENTS));
  }

  discoverabilityElements() {
    return Object.freeze(Object.values(API_DISCOVERABILITY_ELEMENTS));
  }

  securityControls() {
    return Object.freeze(Object.values(API_SECURITY_CONTROLS));
  }

  reliabilityConsiderations() {
    return Object.freeze(Object.values(API_RELIABILITY_CONSIDERATIONS));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(API_QUALITY_ATTRIBUTES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(API_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_API_ARCHITECTURE_DIRECTIONS));
  }

  validateApiContract(profileInput) {
    const profile = profileInput instanceof ApiContractProfile
      ? profileInput
      : new ApiContractProfile(profileInput);
    const errors = [];

    if (!profile.apiName) errors.push('API contract must have a name.');
    if (!this.categories().includes(profile.category)) errors.push(`Unsupported API category: ${profile.category}.`);
    appendMissing(errors, profile.modelStages, this.architecturalModel(), 'API architectural model must include');
    appendMissing(errors, profile.designPrinciples, this.designPrinciples(), 'API design principles should include');
    appendMissing(errors, profile.categoryCharacteristics, this.categoryCharacteristics(), 'API category characteristics should include');
    appendMissing(errors, profile.ownershipResponsibilities, this.ownershipResponsibilities(), 'API ownership should include');
    appendMissing(errors, profile.contractElements, this.contractElements(), 'API contracts should specify');
    appendMissing(errors, profile.lifecycleStages, this.lifecycle(), 'API lifecycle must include');
    appendMissing(errors, profile.versioningRequirements, this.versioningRequirements(), 'API versioning should support');
    appendMissing(errors, profile.discoverabilityElements, this.discoverabilityElements(), 'API discoverability should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'API security must include');
    appendMissing(errors, profile.reliabilityConsiderations, this.reliabilityConsiderations(), 'API reliability should consider');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'API quality attributes should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'API governance should include');
    if (profile.exposesBusinessCapability !== true) errors.push('APIs must expose business capabilities through explicit contracts.');
    if (profile.preservesServiceOwnership !== true) errors.push('APIs must preserve service ownership and autonomy.');
    if (profile.stableVersionedInterface !== true) errors.push('APIs must maintain stable, versioned interfaces.');
    if (profile.implementationIndependent !== true) errors.push('API contracts must remain implementation independent.');
    if (profile.discoverable !== true) errors.push('APIs must support discoverability.');
    if (profile.governed !== true) errors.push('APIs must support governance.');
    if (profile.technologyNeutral !== true) errors.push('API Architecture must remain technology and protocol neutral.');
    if (profile.protocolSpecific === true) errors.push('Specific API protocols are outside ARCH-009-03 scope.');
    if (profile.vendorSpecific === true) errors.push('API Architecture must remain vendor neutral.');
    if (profile.exposesInternalImplementation === true) errors.push('Consumers must not depend on internal implementation details.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('API Architecture must include all documented objectives.');
    if (this.architecturalModel().length !== 5) errors.push('API Architecture must include the documented architectural model.');
    if (this.designPrinciples().length !== 5) errors.push('API Architecture must include all documented API design principles.');
    if (this.categories().length !== 5) errors.push('API Architecture must include all documented API categories.');
    if (this.ownershipResponsibilities().length !== 7) errors.push('API Architecture must include documented ownership responsibilities.');
    if (this.contractElements().length !== 8) errors.push('API Architecture must include documented API contract elements.');
    if (this.lifecycle().length !== 7) errors.push('API Architecture must include the documented API lifecycle.');
    if (this.securityControls().length !== 7) errors.push('API Architecture must include documented API security controls.');
    if (this.reliabilityConsiderations().length !== 6) errors.push('API Architecture must include documented API reliability considerations.');
    if (this.qualityAttributes().length !== 8) errors.push('API Architecture must include documented API quality attributes.');
    if (this.governanceActivities().length !== 6) errors.push('API Architecture must include documented API governance activities.');
    if (this.relationshipFlow().length !== 5) errors.push('API Architecture must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('API Architecture must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.API_ARCHITECTURE_INVALID,
        'API Architecture violates ARCH-009-03.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new IntegrationArchitectureValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
