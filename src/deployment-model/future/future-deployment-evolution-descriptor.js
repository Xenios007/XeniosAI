import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DEPLOYMENT_EVOLUTION_GOVERNANCE_CONTROLS,
  DEPLOYMENT_EVOLUTION_OBJECTIVES,
  DEPLOYMENT_EVOLUTION_PRINCIPLES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_AI_INFRASTRUCTURE_CAPABILITIES,
  FUTURE_COMPUTE_EVOLUTION_CAPABILITIES,
  FUTURE_DEPLOYMENT_AUTOMATION_CAPABILITIES,
  FUTURE_NETWORK_EVOLUTION_CAPABILITIES,
  FUTURE_OBSERVABILITY_EVOLUTION_CAPABILITIES,
  FUTURE_OPERATIONAL_INTELLIGENCE_CAPABILITIES,
  FUTURE_SECURITY_EVOLUTION_CAPABILITIES,
  FUTURE_STORAGE_EVOLUTION_CAPABILITIES,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES,
  INFRASTRUCTURE_EVOLUTION_STAGES,
  LONG_TERM_DEPLOYMENT_CHARACTERISTICS,
  SUSTAINABILITY_OBJECTIVES,
  TECHNOLOGY_INDEPENDENCE_TARGETS
} from '../constants.js';
import { DeploymentEvolutionAssessment } from '../contracts/deployment-evolution-assessment.js';
import { DeploymentEvolutionCandidate } from '../contracts/deployment-evolution-candidate.js';
import { DeploymentEvolutionValidationResult } from '../contracts/deployment-evolution-validation-result.js';

const INFRASTRUCTURE_EVOLUTION = Object.freeze([
  INFRASTRUCTURE_EVOLUTION_STAGES.PHYSICAL_SERVERS,
  INFRASTRUCTURE_EVOLUTION_STAGES.VIRTUAL_MACHINES,
  INFRASTRUCTURE_EVOLUTION_STAGES.CONTAINERS,
  INFRASTRUCTURE_EVOLUTION_STAGES.CONTAINER_ORCHESTRATION,
  INFRASTRUCTURE_EVOLUTION_STAGES.SERVERLESS_PLATFORMS,
  INFRASTRUCTURE_EVOLUTION_STAGES.AUTONOMOUS_INFRASTRUCTURE
]);

const GLOBAL_EVOLUTION = Object.freeze([
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.SINGLE_REGION,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.MULTI_ZONE,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.MULTI_REGION,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.GLOBAL_PLATFORM,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.EDGE_DEPLOYMENT
]);

const EVOLUTION_AREAS = Object.freeze([
  'infrastructure',
  'compute',
  'storage',
  'network',
  'ai-infrastructure',
  'deployment-automation',
  'operational-intelligence',
  'global-deployment',
  'security',
  'observability',
  'sustainability'
]);

export class FutureDeploymentEvolutionDescriptor {
  objectives() {
    return Object.freeze(Object.values(DEPLOYMENT_EVOLUTION_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(DEPLOYMENT_EVOLUTION_PRINCIPLES));
  }

  evolutionAreas() {
    return EVOLUTION_AREAS;
  }

  infrastructureEvolution() {
    return INFRASTRUCTURE_EVOLUTION;
  }

  computeCapabilities() {
    return Object.freeze(Object.values(FUTURE_COMPUTE_EVOLUTION_CAPABILITIES));
  }

  storageCapabilities() {
    return Object.freeze(Object.values(FUTURE_STORAGE_EVOLUTION_CAPABILITIES));
  }

  networkCapabilities() {
    return Object.freeze(Object.values(FUTURE_NETWORK_EVOLUTION_CAPABILITIES));
  }

  aiInfrastructureCapabilities() {
    return Object.freeze(Object.values(FUTURE_AI_INFRASTRUCTURE_CAPABILITIES));
  }

  deploymentAutomationCapabilities() {
    return Object.freeze(Object.values(FUTURE_DEPLOYMENT_AUTOMATION_CAPABILITIES));
  }

  operationalIntelligenceCapabilities() {
    return Object.freeze(Object.values(FUTURE_OPERATIONAL_INTELLIGENCE_CAPABILITIES));
  }

  globalDeploymentEvolution() {
    return GLOBAL_EVOLUTION;
  }

  securityEvolutionCapabilities() {
    return Object.freeze(Object.values(FUTURE_SECURITY_EVOLUTION_CAPABILITIES));
  }

  observabilityEvolutionCapabilities() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_EVOLUTION_CAPABILITIES));
  }

  sustainabilityObjectives() {
    return Object.freeze(Object.values(SUSTAINABILITY_OBJECTIVES));
  }

  technologyIndependenceTargets() {
    return Object.freeze(Object.values(TECHNOLOGY_INDEPENDENCE_TARGETS));
  }

  governanceControls() {
    return Object.freeze(Object.values(DEPLOYMENT_EVOLUTION_GOVERNANCE_CONTROLS));
  }

  longTermCharacteristics() {
    return Object.freeze(Object.values(LONG_TERM_DEPLOYMENT_CHARACTERISTICS));
  }

  validateCandidate(candidateInput) {
    const candidate = candidateInput instanceof DeploymentEvolutionCandidate
      ? candidateInput
      : new DeploymentEvolutionCandidate(candidateInput);
    const errors = [];

    if (!candidate.capabilityName) errors.push('Deployment evolution candidate must identify a future capability.');
    if (!this.evolutionAreas().includes(candidate.evolutionArea)) errors.push(`Unsupported deployment evolution area: ${candidate.evolutionArea}.`);
    if (!candidate.businessBenefit) errors.push('Deployment evolution candidate must define business or operational benefit.');
    if (candidate.preservesBusinessOwnership !== true) errors.push('Future deployment evolution must preserve business ownership.');
    if (candidate.preservesDomainBoundaries !== true) errors.push('Future deployment evolution must preserve domain boundaries.');
    if (candidate.preservesServiceResponsibilities !== true) errors.push('Future deployment evolution must preserve service responsibilities.');
    if (candidate.preservesDataOwnership !== true) errors.push('Data ownership remains unchanged regardless of storage technology.');
    if (candidate.preservesPlatformPrinciples !== true) errors.push('Future deployment evolution must preserve platform principles.');
    if (candidate.incrementalModernization !== true) errors.push('Future deployment decisions should favor incremental modernization.');
    if (candidate.backwardCompatible !== true) errors.push('Future deployment decisions should maintain backward compatibility whenever practical.');
    if (candidate.reducesOperationalComplexity !== true) errors.push('Future deployment decisions should reduce operational complexity.');
    if (candidate.improvesAutomation !== true) errors.push('Future deployment decisions should improve automation.');
    if (candidate.strengthensResilience !== true) errors.push('Future deployment decisions should strengthen resilience.');
    if (candidate.avoidsVendorLockIn !== true) errors.push('Future deployment decisions should minimize vendor lock-in.');
    if (candidate.implementationTimelinePrescribed === true) errors.push('Future Deployment Evolution does not prescribe implementation timelines or technology adoption schedules.');

    return validation(errors);
  }

  validateAssessment(assessmentInput) {
    const assessment = assessmentInput instanceof DeploymentEvolutionAssessment
      ? assessmentInput
      : new DeploymentEvolutionAssessment(assessmentInput);
    const errors = [];

    if (!assessment.candidateName) errors.push('Deployment evolution assessment must identify the candidate.');
    appendMissing(errors, assessment.governanceControls, this.governanceControls(), 'Deployment evolution governance must include');
    appendMissing(errors, assessment.technologyIndependenceTargets, this.technologyIndependenceTargets(), 'Technology independence must avoid dependence on');
    appendMissing(errors, assessment.sustainabilityObjectives, this.sustainabilityObjectives(), 'Sustainability should consider');
    if (assessment.architectureReviewed !== true) errors.push('Deployment evolution should be governed through architecture reviews.');
    if (assessment.riskAnalyzed !== true) errors.push('Deployment evolution should include risk analysis.');
    if (assessment.compatibilityValidated !== true) errors.push('Deployment evolution should include compatibility validation.');
    if (assessment.operationalReadinessReviewed !== true) errors.push('Deployment evolution should include operational readiness reviews.');
    if (assessment.businessAligned !== true) errors.push('Deployment evolution governance must include business alignment.');
    if (assessment.humanGovernancePreserved !== true) errors.push('Operational intelligence should enhance, not replace, human governance.');
    if (assessment.architectureRedesignRequired === true) errors.push('Future deployment evolution must not require architectural redesign.');
    if (assessment.vendorDecisionEmbedded === true) errors.push('Technology replacement should remain an operational decision rather than an architectural redesign.');

    return validation(errors);
  }

  assertEvolution() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Future Deployment Evolution must include all documented objectives.');
    if (this.principles().length !== 8) errors.push('Future Deployment Evolution must include all documented principles.');
    if (this.infrastructureEvolution().length !== 6) errors.push('Future Deployment Evolution must include the documented infrastructure progression.');
    if (this.globalDeploymentEvolution().length !== 5) errors.push('Future Deployment Evolution must include the documented global deployment progression.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.FUTURE_DEPLOYMENT_EVOLUTION_INVALID,
        'Future Deployment Evolution violates ARCH-007-10.',
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
  return new DeploymentEvolutionValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
