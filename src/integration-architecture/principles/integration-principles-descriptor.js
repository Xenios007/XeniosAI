import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  VERSION_COMPATIBILITY_REQUIREMENTS
} from '../constants.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';
import { IntegrationDecisionModel } from '../contracts/integration-decision-model.js';
import { IntegrationPrincipleProfile } from '../contracts/integration-principle-profile.js';

const PRINCIPLE_SEQUENCE = Object.freeze(Object.values(ENTERPRISE_INTEGRATION_PRINCIPLES));
const DECISION_MODEL = Object.freeze(Object.values(INTEGRATION_DECISION_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(INTEGRATION_PRINCIPLES_RELATIONSHIP_FLOW_STAGES));

export class IntegrationPrinciplesDescriptor {
  objectives() {
    return Object.freeze(Object.values(INTEGRATION_PRINCIPLE_OBJECTIVES));
  }

  principles() {
    return PRINCIPLE_SEQUENCE;
  }

  supportFactors() {
    return Object.freeze(Object.values(INTEGRATION_PRINCIPLE_SUPPORT_FACTORS));
  }

  contractElements() {
    return Object.freeze(Object.values(INTEGRATION_CONTRACT_DEFINITION_ELEMENTS));
  }

  avoidedAssumptions() {
    return Object.freeze(Object.values(PRINCIPLE_LOOSE_COUPLING_AVOIDED_ASSUMPTIONS));
  }

  highCohesionBenefits() {
    return Object.freeze(Object.values(HIGH_COHESION_BENEFITS));
  }

  technologyIndependenceTargets() {
    return Object.freeze(Object.values(TECHNOLOGY_INDEPENDENCE_TARGETS));
  }

  communicationStyles() {
    return Object.freeze(Object.values(PRINCIPLE_COMMUNICATION_STYLES));
  }

  asynchronousBenefits() {
    return Object.freeze(Object.values(ASYNCHRONOUS_COMMUNICATION_BENEFITS));
  }

  reliabilityCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_RELIABILITY_CAPABILITIES));
  }

  observabilityInformation() {
    return Object.freeze(Object.values(INTEGRATION_OBSERVABILITY_INFORMATION));
  }

  securityControls() {
    return Object.freeze(Object.values(PRINCIPLE_SECURITY_CONTROLS));
  }

  versionCompatibilityRequirements() {
    return Object.freeze(Object.values(VERSION_COMPATIBILITY_REQUIREMENTS));
  }

  ownershipResponsibilities() {
    return Object.freeze(Object.values(INTEGRATION_OWNERSHIP_RESPONSIBILITIES));
  }

  governanceActivities() {
    return Object.freeze(Object.values(INTEGRATION_PRINCIPLE_GOVERNANCE_ACTIVITIES));
  }

  standardizationBenefits() {
    return Object.freeze(Object.values(STANDARDIZATION_BENEFITS));
  }

  evolutionRequirements() {
    return Object.freeze(Object.values(EVOLUTION_WITHOUT_DISRUPTION_REQUIREMENTS));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(INTEGRATION_PRINCIPLE_QUALITY_ATTRIBUTES));
  }

  decisionModel() {
    return DECISION_MODEL;
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  futureDirections() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_PRINCIPLE_DIRECTIONS));
  }

  validatePrinciple(profileInput) {
    const profile = profileInput instanceof IntegrationPrincipleProfile
      ? profileInput
      : new IntegrationPrincipleProfile(profileInput);
    const errors = [];

    if (!this.principles().includes(profile.principleName)) errors.push(`Unsupported integration principle: ${profile.principleName}.`);
    appendMissing(errors, profile.supportFactors, this.supportFactors(), 'Integration decisions should support');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Integration principles should align to');
    if (profile.appliesAcrossEnterprise !== true) errors.push('Integration principles must apply across all enterprise integration decisions.');
    if (profile.stableAcrossTechnologyChange !== true) errors.push('Integration principles should remain stable as technologies evolve.');
    if (profile.businessAligned !== true) errors.push('Integration decisions must support business alignment.');
    if (profile.preservesServiceAutonomy !== true) errors.push('Integration principles must preserve service autonomy.');
    if (profile.improvesConsistency !== true) errors.push('Integration principles must improve architectural consistency.');
    if (profile.implementationConstraint === true) errors.push('Integration principles are guidance rather than implementation constraints.');
    if (profile.protocolSpecific === true) errors.push('Protocol specifications are outside ARCH-009-02 scope.');
    if (profile.vendorSpecific === true) errors.push('Integration Principles must remain technology-neutral.');

    return validation(errors);
  }

  validateDecisionModel(modelInput) {
    const model = modelInput instanceof IntegrationDecisionModel
      ? modelInput
      : new IntegrationDecisionModel(modelInput);
    const errors = [];

    if (!model.decisionName) errors.push('Integration decision model must have a name.');
    appendMissing(errors, model.stages, this.decisionModel(), 'Integration decision model must include');
    appendMissing(errors, model.contractElements, this.contractElements(), 'Contracts must define');
    appendMissing(errors, model.avoidedAssumptions, this.avoidedAssumptions(), 'Loose coupling should avoid');
    appendMissing(errors, model.communicationStyles, this.communicationStyles(), 'Multiple communication models should include');
    appendMissing(errors, model.reliabilityCapabilities, this.reliabilityCapabilities(), 'Reliability should include');
    appendMissing(errors, model.securityControls, this.securityControls(), 'Security by default must include');
    appendMissing(errors, model.governanceActivities, this.governanceActivities(), 'Integration governance should include');
    appendMissing(errors, model.ownershipResponsibilities, this.ownershipResponsibilities(), 'Explicit ownership should include');
    if (model.businessArchitectureDrivesDecisions !== true) errors.push('Business architecture must drive every subsequent technical decision.');
    if (model.supportsMultipleCommunicationModels !== true) errors.push('The architecture must support multiple communication models.');
    if (model.asynchronousWhenAppropriate !== true) errors.push('Asynchronous communication should be preferred where immediate responses are unnecessary.');
    if (model.reliabilityDesignedUpfront !== true) errors.push('Reliability should be considered during architectural design.');
    if (model.observableThroughoutLifecycle !== true) errors.push('Integration activities should be observable throughout their lifecycle.');
    if (model.securityConsistentlyApplied !== true) errors.push('Security controls should be consistently applied regardless of communication mechanism.');
    if (model.compatibilityPreferred !== true) errors.push('Architectural evolution should favor compatibility over replacement.');
    if (model.explicitlyOwned !== true) errors.push('Every integration should have a clearly identified owner.');
    if (model.technologyDefinesBoundary === true) errors.push('Technology should support business architecture rather than define it.');
    if (model.vendorSpecific === true) errors.push('Integration decision model must remain technology-neutral.');

    return validation(errors);
  }

  assertPrinciples() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Integration Principles must include all documented objectives.');
    if (this.principles().length !== 15) errors.push('Integration Principles must include all 15 documented principles.');
    if (this.decisionModel().length !== 7) errors.push('Integration Principles must include the documented decision model.');
    if (this.contractElements().length !== 7) errors.push('Integration Principles must include documented contract definition elements.');
    if (this.reliabilityCapabilities().length !== 6) errors.push('Integration Principles must include documented reliability principles.');
    if (this.securityControls().length !== 7) errors.push('Integration Principles must include documented security controls.');
    if (this.relationshipFlow().length !== 6) errors.push('Integration Principles must include the documented relationship flow.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.INTEGRATION_PRINCIPLES_INVALID,
        'Integration Principles violate ARCH-009-02.',
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
