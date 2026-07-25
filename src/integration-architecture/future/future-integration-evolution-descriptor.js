import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  INTEGRATION_GOVERNANCE_EVOLUTION_CAPABILITIES,
  INTEGRATION_KNOWLEDGE_EVOLUTION_CAPABILITIES,
  INTEGRATION_OPERATIONAL_EVOLUTION_CAPABILITIES,
  INTEGRATION_SECURITY_EVOLUTION_CAPABILITIES,
  INTEGRATION_SUSTAINABILITY_FACTORS,
  STRATEGIC_INTEGRATION_EVOLUTION_PRINCIPLES
} from '../constants.js';
import { FutureIntegrationEvolutionProfile } from '../contracts/future-integration-evolution-profile.js';
import { IntegrationArchitectureValidationResult } from '../contracts/integration-architecture-validation-result.js';

const EVOLUTION_MODEL = Object.freeze(Object.values(FUTURE_INTEGRATION_EVOLUTION_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(FUTURE_INTEGRATION_EVOLUTION_RELATIONSHIP_FLOW_STAGES));

export class FutureIntegrationEvolutionDescriptor {
  objectives() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_EVOLUTION_OBJECTIVES));
  }

  evolutionModel() {
    return EVOLUTION_MODEL;
  }

  principles() {
    return Object.freeze(Object.values(STRATEGIC_INTEGRATION_EVOLUTION_PRINCIPLES));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_EVOLUTION_CAPABILITIES));
  }

  aiDrivenCapabilities() {
    return Object.freeze(Object.values(AI_DRIVEN_INTEGRATION_EVOLUTION_CAPABILITIES));
  }

  ecosystemCapabilities() {
    return Object.freeze(Object.values(ENTERPRISE_ECOSYSTEM_EVOLUTION_CAPABILITIES));
  }

  governanceCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_GOVERNANCE_EVOLUTION_CAPABILITIES));
  }

  operationalCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_OPERATIONAL_EVOLUTION_CAPABILITIES));
  }

  securityCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_SECURITY_EVOLUTION_CAPABILITIES));
  }

  knowledgeCapabilities() {
    return Object.freeze(Object.values(INTEGRATION_KNOWLEDGE_EVOLUTION_CAPABILITIES));
  }

  sustainabilityFactors() {
    return Object.freeze(Object.values(INTEGRATION_SUSTAINABILITY_FACTORS));
  }

  successCharacteristics() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_SUCCESS_CHARACTERISTICS));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_ARCHITECTURAL_RULES));
  }

  visionCharacteristics() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_VISION_CHARACTERISTICS));
  }

  validateEvolution(profileInput) {
    const profile = profileInput instanceof FutureIntegrationEvolutionProfile
      ? profileInput
      : new FutureIntegrationEvolutionProfile(profileInput);
    const errors = [];

    if (!profile.evolutionName) errors.push('Future integration evolution profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Future integration evolution objectives must include');
    appendMissing(errors, profile.modelStages, this.evolutionModel(), 'Evolution model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Strategic evolution principles must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future integration capabilities should include');
    appendMissing(errors, profile.aiDrivenCapabilities, this.aiDrivenCapabilities(), 'AI-driven integration evolution should include');
    appendMissing(errors, profile.ecosystemCapabilities, this.ecosystemCapabilities(), 'Enterprise ecosystem evolution should include');
    appendMissing(errors, profile.governanceCapabilities, this.governanceCapabilities(), 'Governance evolution should include');
    appendMissing(errors, profile.operationalCapabilities, this.operationalCapabilities(), 'Operational evolution should include');
    appendMissing(errors, profile.securityCapabilities, this.securityCapabilities(), 'Security evolution should include');
    appendMissing(errors, profile.knowledgeCapabilities, this.knowledgeCapabilities(), 'Knowledge evolution should include');
    appendMissing(errors, profile.sustainabilityFactors, this.sustainabilityFactors(), 'Sustainability should include');
    appendMissing(errors, profile.successCharacteristics, this.successCharacteristics(), 'Success characteristics should include');
    appendMissing(errors, profile.relationshipFlow, this.relationshipFlow(), 'Future evolution relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Architectural rules must include');
    appendMissing(errors, profile.visionCharacteristics, this.visionCharacteristics(), 'Future vision should include');
    if (profile.preservesArchitecturalPrinciples !== true) errors.push('Future evolution must preserve architectural principles.');
    if (profile.maintainsInteroperability !== true) errors.push('Future evolution must maintain interoperability.');
    if (profile.protectsEnterpriseInvestments !== true) errors.push('Future evolution must protect enterprise investments.');
    if (profile.encouragesInnovation !== true) errors.push('Future evolution must encourage innovation.');
    if (profile.minimizesDisruption !== true) errors.push('Future evolution must minimize disruption.');
    if (profile.supportsEmergingTechnologies !== true) errors.push('Future evolution must support emerging technologies.');
    if (profile.stableAndAdaptable !== true) errors.push('Architectural stability must coexist with technological adaptability.');
    if (profile.businessDriven !== true) errors.push('Future integrations must originate from business needs.');
    if (profile.incrementalModernization !== true) errors.push('Evolution should occur through incremental modernization.');
    if (profile.futureProofContracts !== true) errors.push('Business contracts should outlive individual technologies.');
    if (profile.aiStrengthensGovernance !== true) errors.push('AI should strengthen governance rather than replace it.');
    if (profile.supportsEcosystemGrowthWithoutSacrificingAutonomy !== true) {
      errors.push('Ecosystem growth must not sacrifice organizational autonomy.');
    }
    if (profile.governanceProactive !== true) errors.push('Governance should become increasingly proactive.');
    if (profile.sustainabilitySupported !== true) errors.push('Future evolution must support long-term architectural sustainability.');
    if (profile.vendorNeutral !== true) errors.push('Future integration evolution must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('Future integration evolution must remain technology neutral.');
    if (profile.roadmapSpecific === true) errors.push('Implementation roadmaps are outside ARCH-009-10 scope.');
    if (profile.vendorSpecific === true) errors.push('Vendor recommendations are outside ARCH-009-10 scope.');
    if (profile.productSelectionSpecific === true) errors.push('Product selection is outside ARCH-009-10 scope.');
    if (profile.technologyCommitmentSpecific === true) errors.push('Technology commitments are outside ARCH-009-10 scope.');
    if (profile.disruptiveRedesignRequired === true) errors.push('Future integration evolution should avoid disruptive redesigns.');
    if (profile.fragmentsIntegrationEcosystem === true) errors.push('Future evolution should extend the integration ecosystem instead of fragmenting it.');
    if (profile.governanceReplacedByAi === true) errors.push('AI must not replace enterprise governance.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Future Integration Evolution must include all documented objectives.');
    if (this.evolutionModel().length !== 6) errors.push('Future Integration Evolution must include the documented evolution model.');
    if (this.principles().length !== 5) errors.push('Future Integration Evolution must include documented strategic principles.');
    if (this.futureCapabilities().length !== 8) errors.push('Future Integration Evolution must include documented future capabilities.');
    if (this.aiDrivenCapabilities().length !== 8) errors.push('Future Integration Evolution must include documented AI-driven capabilities.');
    if (this.ecosystemCapabilities().length !== 6) errors.push('Future Integration Evolution must include documented ecosystem capabilities.');
    if (this.governanceCapabilities().length !== 6) errors.push('Future Integration Evolution must include documented governance capabilities.');
    if (this.operationalCapabilities().length !== 6) errors.push('Future Integration Evolution must include documented operational capabilities.');
    if (this.securityCapabilities().length !== 6) errors.push('Future Integration Evolution must include documented security capabilities.');
    if (this.knowledgeCapabilities().length !== 6) errors.push('Future Integration Evolution must include documented knowledge capabilities.');
    if (this.sustainabilityFactors().length !== 6) errors.push('Future Integration Evolution must include documented sustainability factors.');
    if (this.successCharacteristics().length !== 8) errors.push('Future Integration Evolution must include documented success characteristics.');
    if (this.relationshipFlow().length !== 9) errors.push('Future Integration Evolution must include the documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Future Integration Evolution must include documented architectural rules.');
    if (this.visionCharacteristics().length !== 8) errors.push('Future Integration Evolution must include documented vision characteristics.');

    if (errors.length > 0) {
      throw new PlatformError(
        INTEGRATION_ARCHITECTURE_ERROR_CODES.FUTURE_INTEGRATION_EVOLUTION_INVALID,
        'Future Integration Evolution violates ARCH-009-10.',
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
