import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_ASSISTED_OBSERVABILITY_CAPABILITIES,
  AUTONOMOUS_OPERATIONAL_INTELLIGENCE_CAPABILITIES,
  CROSS_ENTERPRISE_OBSERVABILITY_SCOPES,
  ENTERPRISE_DIGITAL_TWIN_APPLICATIONS,
  FUTURE_OBSERVABILITY_ARCHITECTURAL_RULES,
  FUTURE_OBSERVABILITY_ARCHITECTURAL_INDEPENDENCE_FACTORS,
  FUTURE_OBSERVABILITY_BUSINESS_VALUE_IMPROVEMENTS,
  FUTURE_OBSERVABILITY_ENTERPRISE_LEARNING_AREAS,
  FUTURE_OBSERVABILITY_EVOLUTION_MODEL_STAGES,
  FUTURE_OBSERVABILITY_EVOLUTION_OBJECTIVES,
  FUTURE_OBSERVABILITY_EVOLUTION_PRINCIPLES,
  FUTURE_OBSERVABILITY_GOVERNANCE_EVOLUTION_CAPABILITIES,
  FUTURE_OBSERVABILITY_INCREMENTAL_EVOLUTION_ENABLERS,
  FUTURE_OBSERVABILITY_INNOVATION_AREAS,
  FUTURE_OBSERVABILITY_RELATIONSHIP_STAGES,
  FUTURE_OBSERVABILITY_VISION_CHARACTERISTICS,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  PREDICTIVE_ENTERPRISE_INTELLIGENCE_CAPABILITIES
} from '../constants.js';
import { FutureObservabilityEvolutionProfile } from '../contracts/future-observability-evolution-profile.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';

const EVOLUTION_MODEL = Object.freeze(Object.values(FUTURE_OBSERVABILITY_EVOLUTION_MODEL_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(FUTURE_OBSERVABILITY_RELATIONSHIP_STAGES));

export class FutureObservabilityEvolutionDescriptor {
  objectives() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_EVOLUTION_OBJECTIVES));
  }

  evolutionModel() {
    return EVOLUTION_MODEL;
  }

  principles() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_EVOLUTION_PRINCIPLES));
  }

  businessValueImprovements() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_BUSINESS_VALUE_IMPROVEMENTS));
  }

  architecturalIndependenceFactors() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_ARCHITECTURAL_INDEPENDENCE_FACTORS));
  }

  enterpriseLearningAreas() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_ENTERPRISE_LEARNING_AREAS));
  }

  incrementalEvolutionEnablers() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_INCREMENTAL_EVOLUTION_ENABLERS));
  }

  aiAssistedCapabilities() {
    return Object.freeze(Object.values(AI_ASSISTED_OBSERVABILITY_CAPABILITIES));
  }

  predictiveCapabilities() {
    return Object.freeze(Object.values(PREDICTIVE_ENTERPRISE_INTELLIGENCE_CAPABILITIES));
  }

  autonomousCapabilities() {
    return Object.freeze(Object.values(AUTONOMOUS_OPERATIONAL_INTELLIGENCE_CAPABILITIES));
  }

  crossEnterpriseScopes() {
    return Object.freeze(Object.values(CROSS_ENTERPRISE_OBSERVABILITY_SCOPES));
  }

  governanceEvolutionCapabilities() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_GOVERNANCE_EVOLUTION_CAPABILITIES));
  }

  digitalTwinApplications() {
    return Object.freeze(Object.values(ENTERPRISE_DIGITAL_TWIN_APPLICATIONS));
  }

  innovationAreas() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_INNOVATION_AREAS));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  architecturalRules() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_ARCHITECTURAL_RULES));
  }

  visionCharacteristics() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_VISION_CHARACTERISTICS));
  }

  validateEvolution(profileInput) {
    const profile = profileInput instanceof FutureObservabilityEvolutionProfile
      ? profileInput
      : new FutureObservabilityEvolutionProfile(profileInput);
    const errors = [];

    if (!profile.evolutionName) errors.push('Future observability evolution profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Future observability evolution objectives must include');
    appendMissing(errors, profile.modelStages, this.evolutionModel(), 'Future observability evolution model must include');
    appendMissing(errors, profile.principles, this.principles(), 'Future observability evolution principles must include');
    appendMissing(errors, profile.businessValueImprovements, this.businessValueImprovements(), 'Business-driven evolution should improve');
    appendMissing(errors, profile.architecturalIndependenceFactors, this.architecturalIndependenceFactors(), 'Architectural independence should preserve');
    appendMissing(errors, profile.enterpriseLearningAreas, this.enterpriseLearningAreas(), 'Continuous enterprise learning may include');
    appendMissing(errors, profile.incrementalEvolutionEnablers, this.incrementalEvolutionEnablers(), 'Incremental evolution enables');
    appendMissing(errors, profile.aiAssistedCapabilities, this.aiAssistedCapabilities(), 'AI-assisted observability may include');
    appendMissing(errors, profile.predictiveCapabilities, this.predictiveCapabilities(), 'Predictive enterprise intelligence may include');
    appendMissing(errors, profile.autonomousCapabilities, this.autonomousCapabilities(), 'Autonomous operational intelligence may include');
    appendMissing(errors, profile.crossEnterpriseScopes, this.crossEnterpriseScopes(), 'Cross-enterprise observability may include');
    appendMissing(errors, profile.governanceEvolutionCapabilities, this.governanceEvolutionCapabilities(), 'Governance evolution may include');
    appendMissing(errors, profile.digitalTwinApplications, this.digitalTwinApplications(), 'Enterprise digital twins may support');
    appendMissing(errors, profile.innovationAreas, this.innovationAreas(), 'Continuous innovation may include');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Future observability relationship flow must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Future observability architectural rules must include');
    appendMissing(errors, profile.visionCharacteristics, this.visionCharacteristics(), 'Future observability vision must include');
    if (profile.businessDriven !== true) errors.push('Business needs should guide observability evolution.');
    if (profile.architecturalIndependencePreserved !== true) errors.push('Future observability must preserve architectural independence.');
    if (profile.enterpriseLearningContinuous !== true) errors.push('Operational evidence should continuously improve enterprise knowledge.');
    if (profile.intelligenceExplainable !== true) errors.push('Future observability intelligence should remain explainable.');
    if (profile.evolutionIncremental !== true) errors.push('Observability should evolve incrementally rather than through disruptive redesign.');
    if (profile.aiAugmentsAccountability !== true) errors.push('AI should augment enterprise operations rather than replace governance or human accountability.');
    if (profile.predictiveIntelligenceProactive !== true) errors.push('Predictive intelligence should support proactive enterprise management.');
    if (profile.autonomousCapabilitiesGoverned !== true) errors.push('Autonomous capabilities should operate within governed architectural boundaries.');
    if (profile.crossEnterpriseAutonomyPreserved !== true) errors.push('Cross-enterprise visibility should preserve organizational autonomy and contractual boundaries.');
    if (profile.governanceTransparentAndExplainable !== true) errors.push('Future governance should remain transparent and explainable.');
    if (profile.digitalTwinsSupportGovernance !== true) errors.push('Digital twins should enhance decision support rather than replace operational governance.');
    if (profile.architecturalStabilityPreserved !== true) errors.push('Architectural stability should be preserved while observability capabilities mature.');
    if (profile.vendorNeutral !== true) errors.push('Future Observability Evolution must remain vendor neutral.');
    if (profile.technologyNeutral !== true) errors.push('Future Observability Evolution must remain technology neutral.');
    if (profile.futureTechnologySpecific === true) errors.push('Specific future technologies are outside ARCH-010-10 scope.');
    if (profile.vendorSpecific === true) errors.push('Vendors are outside ARCH-010-10 scope.');
    if (profile.implementationFrameworkSpecific === true) errors.push('Implementation frameworks are outside ARCH-010-10 scope.');
    if (profile.productRoadmapSpecific === true) errors.push('Product roadmaps are outside ARCH-010-10 scope.');
    if (profile.disruptiveRedesignRequired === true) errors.push('Future observability evolution should avoid disruptive redesign.');
    if (profile.replacesGovernanceWithAi === true) errors.push('AI must not replace enterprise governance.');
    if (profile.replacesHumanAccountability === true) errors.push('AI must not replace human accountability.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Future Observability Evolution must include all documented objectives.');
    if (this.evolutionModel().length !== 5) errors.push('Future Observability Evolution must include the documented evolution model.');
    if (this.principles().length !== 5) errors.push('Future Observability Evolution must include documented evolution principles.');
    if (this.businessValueImprovements().length !== 5) errors.push('Future Observability Evolution must include documented business value improvements.');
    if (this.architecturalIndependenceFactors().length !== 5) errors.push('Future Observability Evolution must include documented architectural independence factors.');
    if (this.enterpriseLearningAreas().length !== 5) errors.push('Future Observability Evolution must include documented enterprise learning areas.');
    if (this.incrementalEvolutionEnablers().length !== 4) errors.push('Future Observability Evolution must include documented incremental evolution enablers.');
    if (this.aiAssistedCapabilities().length !== 6) errors.push('Future Observability Evolution must include documented AI-assisted capabilities.');
    if (this.predictiveCapabilities().length !== 6) errors.push('Future Observability Evolution must include documented predictive capabilities.');
    if (this.autonomousCapabilities().length !== 6) errors.push('Future Observability Evolution must include documented autonomous capabilities.');
    if (this.crossEnterpriseScopes().length !== 6) errors.push('Future Observability Evolution must include documented cross-enterprise scopes.');
    if (this.governanceEvolutionCapabilities().length !== 6) errors.push('Future Observability Evolution must include documented governance evolution capabilities.');
    if (this.digitalTwinApplications().length !== 6) errors.push('Future Observability Evolution must include documented digital twin applications.');
    if (this.innovationAreas().length !== 6) errors.push('Future Observability Evolution must include documented innovation areas.');
    if (this.relationshipFlow().length !== 8) errors.push('Future Observability Evolution must include documented relationship flow.');
    if (this.architecturalRules().length !== 8) errors.push('Future Observability Evolution must include documented architectural rules.');
    if (this.visionCharacteristics().length !== 8) errors.push('Future Observability Evolution must include documented vision characteristics.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.FUTURE_OBSERVABILITY_EVOLUTION_INVALID,
        'Future Observability Evolution violates ARCH-010-10.',
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
  return new ObservabilityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
