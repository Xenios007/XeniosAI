import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  INTEGRATION_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { ExternalSystemIntegrationProfile } from '../contracts/external-system-integration-profile.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';

const MODEL = Object.freeze(Object.values(EXTERNAL_INTEGRATION_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(EXTERNAL_INTEGRATION_RELATIONSHIP_FLOW_STAGES));

export class ExternalSystemIntegrationDescriptor {
  objectives() {
    return Object.freeze(Object.values(EXTERNAL_SYSTEM_INTEGRATION_OBJECTIVES));
  }

  integrationModel() {
    return MODEL;
  }

  principles() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_PRINCIPLES));
  }

  categories() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_CATEGORIES));
  }

  categoryExamples() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_CATEGORY_EXAMPLES));
  }

  boundaryResponsibilities() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_BOUNDARY_RESPONSIBILITIES));
  }

  dataExchangePrinciples() {
    return Object.freeze(Object.values(EXTERNAL_DATA_EXCHANGE_PRINCIPLES));
  }

  securityControls() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_SECURITY_CONTROLS));
  }

  reliabilityConsiderations() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_RELIABILITY_CONSIDERATIONS));
  }

  observabilityTelemetry() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_OBSERVABILITY_TELEMETRY));
  }

  governanceActivities() {
    return Object.freeze(Object.values(EXTERNAL_INTEGRATION_GOVERNANCE_ACTIVITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_EXTERNAL_SYSTEM_INTEGRATION_DIRECTIONS));
  }

  validateExternalIntegration(profileInput) {
    const profile = profileInput instanceof ExternalSystemIntegrationProfile
      ? profileInput
      : new ExternalSystemIntegrationProfile(profileInput);
    const errors = [];

    if (!profile.integrationName) errors.push('External integration must have a name.');
    if (!this.categories().includes(profile.category)) errors.push(`Unsupported external integration category: ${profile.category}.`);
    appendMissing(errors, profile.modelStages, this.integrationModel(), 'External integration model must include');
    appendMissing(errors, profile.principles, this.principles(), 'External integration principles should include');
    appendMissing(errors, profile.categoryExamples, this.categoryExamples(), 'External integration examples should include');
    appendMissing(errors, profile.boundaryResponsibilities, this.boundaryResponsibilities(), 'Integration boundary responsibilities should include');
    appendMissing(errors, profile.dataExchangePrinciples, this.dataExchangePrinciples(), 'External data exchange should include');
    appendMissing(errors, profile.securityControls, this.securityControls(), 'External integration security must include');
    appendMissing(errors, profile.reliabilityConsiderations, this.reliabilityConsiderations(), 'External integration reliability should include');
    appendMissing(errors, profile.observabilityTelemetry, this.observabilityTelemetry(), 'External integration observability should include');
    appendMissing(errors, profile.governanceActivities, this.governanceActivities(), 'External integration governance should include');
    if (profile.preservesServiceAutonomy !== true) errors.push('External integrations must preserve service autonomy.');
    if (profile.governedContracts !== true) errors.push('External integrations must use governed contracts.');
    if (profile.protectsOrganizationalBoundaries !== true) errors.push('External integrations must protect organizational boundaries.');
    if (profile.enterpriseSecurityApplied !== true) errors.push('External integrations must apply enterprise security.');
    if (profile.supportsLongTermEvolution !== true) errors.push('External integrations must support long-term evolution.');
    if (profile.approvedBusinessCapabilityOnly !== true) errors.push('Only approved business capabilities should be exposed externally.');
    if (profile.stableIntegrationContract !== true) errors.push('External integrations should preserve stable integration contracts.');
    if (profile.externalFailureResilient !== true) errors.push('External integrations must enable operational resilience against external failures.');
    if (profile.minimizesInformationDisclosure !== true) errors.push('External data exchange should minimize unnecessary information disclosure.');
    if (profile.internalArchitectureHidden !== true) errors.push('Internal architecture must remain hidden behind governed boundaries.');
    if (profile.vendorNeutral !== true) errors.push('External System Integration must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('External System Integration must remain technology neutral.');
    if (profile.vendorSpecific === true) errors.push('Specific vendors are outside ARCH-009-06 scope.');
    if (profile.cloudProviderSpecific === true) errors.push('Specific cloud providers are outside ARCH-009-06 scope.');
    if (profile.middlewareSpecific === true) errors.push('Middleware products are outside ARCH-009-06 scope.');
    if (profile.apiSpecific === true) errors.push('Specific APIs are outside ARCH-009-06 scope.');
    if (profile.protocolSpecific === true) errors.push('Communication protocols are outside ARCH-009-06 scope.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-009-06 scope.');
    if (profile.exposesInternalImplementation === true) errors.push('External systems must not depend on internal implementation details.');
    if (profile.couplesToExternalAvailability === true) errors.push('Internal platform stability should not depend entirely upon external availability.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('External System Integration must include all documented objectives.');
    if (this.integrationModel().length !== 5) errors.push('External System Integration must include the documented integration model.');
    if (this.principles().length !== 4) errors.push('External System Integration must include documented principles.');
    if (this.categories().length !== 6) errors.push('External System Integration must include documented integration categories.');
    if (this.categoryExamples().length !== 31) errors.push('External System Integration must include documented category examples.');
    if (this.boundaryResponsibilities().length !== 6) errors.push('External System Integration must include documented boundary responsibilities.');
    if (this.dataExchangePrinciples().length !== 6) errors.push('External System Integration must include documented data exchange principles.');
    if (this.securityControls().length !== 7) errors.push('External System Integration must include documented security controls.');
    if (this.reliabilityConsiderations().length !== 6) errors.push('External System Integration must include documented reliability considerations.');
    if (this.observabilityTelemetry().length !== 7) errors.push('External System Integration must include documented observability telemetry.');
    if (this.governanceActivities().length !== 7) errors.push('External System Integration must include documented governance activities.');
    if (this.relationshipFlow().length !== 5) errors.push('External System Integration must include the documented relationship flow.');
    if (this.futureDirections().length !== 8) errors.push('External System Integration must include documented future directions.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.EXTERNAL_SYSTEM_INTEGRATION_INVALID,
        'External System Integration violates ARCH-009-06.',
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
