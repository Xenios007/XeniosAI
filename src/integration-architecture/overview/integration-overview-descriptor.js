import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  LOOSE_COUPLING_AVOIDED_ASSUMPTIONS
} from '../constants.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';
import { IntegrationContractBoundary } from '../contracts/integration-contract-boundary.js';
import { IntegrationDomainProfile } from '../contracts/integration-domain-profile.js';

const ENTERPRISE_MODEL = Object.freeze(Object.values(ENTERPRISE_INTEGRATION_MODEL_STAGES));
const DOMAIN_FLOW = Object.freeze(Object.values(INTEGRATION_DOMAIN_NAMES));
const LIFECYCLE = Object.freeze(Object.values(INTEGRATION_LIFECYCLE_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(INTEGRATION_RELATIONSHIP_FLOW_STAGES));

export class IntegrationOverviewDescriptor {
  treatmentPrinciples() {
    return Object.freeze(Object.values(INTEGRATION_TREATMENT_PRINCIPLES));
  }

  objectives() {
    return Object.freeze(Object.values(INTEGRATION_OBJECTIVES));
  }

  enterpriseModel() {
    return ENTERPRISE_MODEL;
  }

  principles() {
    return Object.freeze(Object.values(INTEGRATION_PRINCIPLE_NAMES));
  }

  contractElements() {
    return Object.freeze(Object.values(INTEGRATION_CONTRACT_ELEMENTS));
  }

  avoidedAssumptions() {
    return Object.freeze(Object.values(LOOSE_COUPLING_AVOIDED_ASSUMPTIONS));
  }

  securityRequirements() {
    return Object.freeze(Object.values(INTEGRATION_SECURITY_REQUIREMENTS));
  }

  integrationDomains() {
    return DOMAIN_FLOW;
  }

  communicationModels() {
    return Object.freeze(Object.values(INTEGRATION_COMMUNICATION_MODELS));
  }

  participantTypes() {
    return Object.freeze(Object.values(INTEGRATION_PARTICIPANT_TYPES));
  }

  boundarySeparations() {
    return Object.freeze(Object.values(INTEGRATION_BOUNDARY_SEPARATIONS));
  }

  connectivityTargets() {
    return Object.freeze(Object.values(ENTERPRISE_CONNECTIVITY_TARGETS));
  }

  lifecycle() {
    return LIFECYCLE;
  }

  qualityAttributes() {
    return Object.freeze(Object.values(INTEGRATION_QUALITY_ATTRIBUTES));
  }

  governanceFoundations() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_FOUNDATIONS));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_OVERVIEW_DIRECTIONS));
  }

  validateDomain(profileInput) {
    const profile = profileInput instanceof IntegrationDomainProfile
      ? profileInput
      : new IntegrationDomainProfile(profileInput);
    const errors = [];

    if (!this.integrationDomains().includes(profile.domainName)) errors.push(`Unsupported integration domain: ${profile.domainName}.`);
    appendMissing(errors, profile.communicationModels, this.communicationModels(), 'Integration communication models should include');
    appendMissing(errors, profile.participantTypes, this.participantTypes(), 'Integration participants should include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Integration quality attributes should include');
    if (profile.supportsDistinctCommunicationStyle !== true) errors.push('Each integration domain should support a distinct communication style.');
    if (profile.governedByCommonPrinciples !== true) errors.push('Integration domains must remain governed by common architectural principles.');
    if (profile.independentlyGoverned !== true) errors.push('Participating systems should remain independently governed.');
    if (profile.vendorSpecific === true) errors.push('Integration Architecture must remain vendor neutral.');

    return validation(errors);
  }

  validateContractBoundary(boundaryInput) {
    const boundary = boundaryInput instanceof IntegrationContractBoundary
      ? boundaryInput
      : new IntegrationContractBoundary(boundaryInput);
    const errors = [];

    if (!boundary.boundaryName) errors.push('Integration contract boundary must have a name.');
    appendMissing(errors, boundary.contractElements, this.contractElements(), 'Integration contracts should describe');
    appendMissing(errors, boundary.avoidedAssumptions, this.avoidedAssumptions(), 'Loose coupling should avoid assumptions about');
    appendMissing(errors, boundary.securityRequirements, this.securityRequirements(), 'Integration security must include');
    appendMissing(errors, boundary.boundarySeparations, this.boundarySeparations(), 'Integration boundaries must separate');
    appendMissing(errors, boundary.connectivityTargets, this.connectivityTargets(), 'Enterprise connectivity should support');
    appendMissing(errors, boundary.lifecycleStages, this.lifecycle(), 'Integration lifecycle must include');
    appendMissing(errors, boundary.governanceFoundations, this.governanceFoundations(), 'Integration governance must include');
    if (boundary.explicitContract !== true) errors.push('Every integration must define an explicit integration contract.');
    if (boundary.preservesServiceAutonomy !== true) errors.push('Integration boundaries must preserve service autonomy.');
    if (boundary.looselyCoupled !== true) errors.push('Integration must promote loose coupling.');
    if (boundary.businessCentric !== true) errors.push('Integration boundaries should be defined by business capabilities.');
    if (boundary.technologyNeutral !== true) errors.push('Integration Architecture must remain technology neutral.');
    if (boundary.supportsMultipleCommunicationStyles !== true) errors.push('Integration Architecture must support multiple communication styles.');
    if (boundary.enablesIndependentEvolution !== true) errors.push('Integration Architecture must enable independent evolution.');
    if (boundary.preservesInteroperability !== true) errors.push('Integration Architecture must preserve long-term interoperability.');
    if (boundary.prescribesSingleCommunicationStyle === true) errors.push('Integration Architecture must not prescribe a single communication style.');
    if (boundary.vendorSpecific === true) errors.push('Integration contracts must remain vendor neutral.');

    return validation(errors);
  }

  assertOverview() {
    const errors = [];

    if (this.treatmentPrinciples().length !== 6) errors.push('Integration Overview must include all documented integration treatment principles.');
    if (this.objectives().length !== 8) errors.push('Integration Overview must include all documented objectives.');
    if (this.enterpriseModel().length !== 5) errors.push('Integration Overview must include the documented enterprise integration model.');
    if (this.principles().length !== 5) errors.push('Integration Overview must include all documented foundational principles.');
    if (this.integrationDomains().length !== 7) errors.push('Integration Overview must include all documented integration domains.');
    if (this.communicationModels().length !== 7) errors.push('Integration Overview must include documented communication models.');
    if (this.lifecycle().length !== 8) errors.push('Integration Overview must include the documented lifecycle.');
    if (this.relationshipFlow().length !== 6) errors.push('Integration Overview must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.INTEGRATION_OVERVIEW_INVALID,
        'Integration Overview violates ARCH-009-01.',
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
