import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowFutureEvolutionProfile } from '../contracts/workflow-future-evolution-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_ADAPTATION_INPUTS,
  WORKFLOW_ADOPTION_GATES,
  WORKFLOW_CANONICAL_MODEL_ELEMENTS,
  WORKFLOW_EVOLUTION_GOALS,
  WORKFLOW_EVOLUTION_GUARDRAILS,
  WORKFLOW_EVOLUTION_HORIZONS,
  WORKFLOW_EVOLUTION_STOP_CRITERIA,
  WORKFLOW_EVOLUTION_VALIDATION_FINDINGS,
  WORKFLOW_FUTURE_BOUNDARIES,
  WORKFLOW_FUTURE_EVOLUTION_ERROR_CODE,
  WORKFLOW_FUTURE_QUALITY_ATTRIBUTES,
  WORKFLOW_FUTURE_RULES,
  WORKFLOW_MATURITY_STAGES,
  WORKFLOW_MIGRATION_PATTERNS,
  WORKFLOW_TECHNOLOGY_RADAR_STATES
} from '../future-evolution-constants.js';

const METADATA = Object.freeze({
  evolutionGoals: WORKFLOW_EVOLUTION_GOALS,
  evolutionGuardrails: WORKFLOW_EVOLUTION_GUARDRAILS,
  maturityStages: WORKFLOW_MATURITY_STAGES,
  evolutionHorizons: WORKFLOW_EVOLUTION_HORIZONS,
  canonicalModelElements: WORKFLOW_CANONICAL_MODEL_ELEMENTS,
  validationFindings: WORKFLOW_EVOLUTION_VALIDATION_FINDINGS,
  adaptationInputs: WORKFLOW_ADAPTATION_INPUTS,
  migrationPatterns: WORKFLOW_MIGRATION_PATTERNS,
  technologyRadarStates: WORKFLOW_TECHNOLOGY_RADAR_STATES,
  adoptionGates: WORKFLOW_ADOPTION_GATES,
  stopCriteria: WORKFLOW_EVOLUTION_STOP_CRITERIA,
  qualityAttributes: WORKFLOW_FUTURE_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_FUTURE_RULES,
  architectureBoundaries: WORKFLOW_FUTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  additiveGovernedReversible: 'ARCH-015-10 requires additiveGovernedReversible.',
  durableExecutionPreserved: 'ARCH-015-10 requires durableExecutionPreserved.',
  deterministicControl: 'ARCH-015-10 requires deterministicControl.',
  ownershipPreserved: 'ARCH-015-10 requires ownershipPreserved.',
  canonicalProviderIndependent: 'ARCH-015-10 requires canonicalProviderIndependent.',
  semanticEquivalence: 'ARCH-015-10 requires semanticEquivalence.',
  versionCoexistence: 'ARCH-015-10 requires versionCoexistence.',
  boundedAdaptiveBehavior: 'ARCH-015-10 requires boundedAdaptiveBehavior.',
  predictionNonAuthoritative: 'ARCH-015-10 requires predictionNonAuthoritative.',
  agentProposalReviewed: 'ARCH-015-10 requires agentProposalReviewed.',
  conversationNonAuthoritative: 'ARCH-015-10 requires conversationNonAuthoritative.',
  portablePackagesExcludeSecrets: 'ARCH-015-10 requires portablePackagesExcludeSecrets.',
  silentSemanticLossRejected: 'ARCH-015-10 requires silentSemanticLossRejected.',
  oneTransitionAuthority: 'ARCH-015-10 requires oneTransitionAuthority.',
  migrationIntegrity: 'ARCH-015-10 requires migrationIntegrity.',
  drainWhenTransferUnproven: 'ARCH-015-10 requires drainWhenTransferUnproven.',
  stagedAdoption: 'ARCH-015-10 requires stagedAdoption.',
  explicitExit: 'ARCH-015-10 requires explicitExit.',
  adrDecisions: 'ARCH-015-10 requires adrDecisions.',
  riskReassessed: 'ARCH-015-10 requires riskReassessed.',
  evidenceBased: 'ARCH-015-10 requires evidenceBased.',
  tenantPropertyIsolation: 'ARCH-015-10 requires tenantPropertyIsolation.',
  humanAccountability: 'ARCH-015-10 requires humanAccountability.',
  boundedAgentAutonomy: 'ARCH-015-10 requires boundedAgentAutonomy.',
  vendorNeutral: 'ARCH-015-10 requires vendorNeutral.',
  technologyIndependent: 'ARCH-015-10 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  productRoadmapCommitment: 'ARCH-015-10 prohibits productRoadmapCommitment.',
  providerDefinesSemantics: 'ARCH-015-10 prohibits providerDefinesSemantics.',
  untrustedCodeControlsWorkflow: 'ARCH-015-10 prohibits untrustedCodeControlsWorkflow.',
  predictionIsFact: 'ARCH-015-10 prohibits predictionIsFact.',
  agentSelfActivation: 'ARCH-015-10 prohibits agentSelfActivation.',
  activeSemanticMutation: 'ARCH-015-10 prohibits activeSemanticMutation.',
  implicitFederationAuthority: 'ARCH-015-10 prohibits implicitFederationAuthority.',
  sharedDatabasesRequired: 'ARCH-015-10 prohibits sharedDatabasesRequired.',
  offlineUnboundedAuthority: 'ARCH-015-10 prohibits offlineUnboundedAuthority.',
  dualTransitionAuthority: 'ARCH-015-10 prohibits dualTransitionAuthority.',
  replayExternalEffects: 'ARCH-015-10 prohibits replayExternalEffects.',
  eventSourcingRequired: 'ARCH-015-10 prohibits eventSourcingRequired.',
  experimentProductionApproved: 'ARCH-015-10 prohibits experimentProductionApproved.',
  universalExactlyOnce: 'ARCH-015-10 prohibits universalExactlyOnce.',
  unboundedAutonomy: 'ARCH-015-10 prohibits unboundedAutonomy.',
  selectsWorkflowProduct: 'ARCH-015-10 prohibits selectsWorkflowProduct.',
  definesDeliveryDates: 'ARCH-015-10 prohibits definesDeliveryDates.'
});

export class WorkflowFutureEvolutionDescriptor {
  evolutionGoals() { return values(METADATA.evolutionGoals); }
  evolutionGuardrails() { return values(METADATA.evolutionGuardrails); }
  maturityStages() { return values(METADATA.maturityStages); }
  evolutionHorizons() { return values(METADATA.evolutionHorizons); }
  canonicalModelElements() { return values(METADATA.canonicalModelElements); }
  validationFindings() { return values(METADATA.validationFindings); }
  adaptationInputs() { return values(METADATA.adaptationInputs); }
  migrationPatterns() { return values(METADATA.migrationPatterns); }
  technologyRadarStates() { return values(METADATA.technologyRadarStates); }
  adoptionGates() { return values(METADATA.adoptionGates); }
  stopCriteria() { return values(METADATA.stopCriteria); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof WorkflowFutureEvolutionProfile
      ? input
      : new WorkflowFutureEvolutionProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow future evolution profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Future Workflow Evolution must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        WORKFLOW_FUTURE_EVOLUTION_ERROR_CODE,
        'Future Workflow Evolution violates ARCH-015-10.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function result(errors) {
  return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors });
}
