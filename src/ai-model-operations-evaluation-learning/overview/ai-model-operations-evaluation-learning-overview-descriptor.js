import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AiModelOperationsEvaluationLearningOverviewProfile as Profile } from '../contracts/ai-model-operations-evaluation-learning-overview-profile.js';
import * as constants from '../ai-model-operations-evaluation-learning-overview-constants.js';

const metadata = Object.freeze({ responsibilities: constants.AI_OPERATIONS_RESPONSIBILITIES, authorities: constants.AI_OPERATIONS_AUTHORITIES, capabilities: constants.AI_OPERATIONS_CAPABILITIES, contractFields: constants.AI_OPERATIONS_CONTRACT_FIELDS, assetFields: constants.AI_ASSET_FIELDS, lifecycleStates: constants.AI_OPERATIONS_LIFECYCLE_STATES, learningLoop: constants.GOVERNED_LEARNING_LOOP, casaLluviaObjectives: constants.CASA_LLUVIA_AI_OBJECTIVES, governanceControls: constants.AI_OPERATIONS_GOVERNANCE_CONTROLS, failureRecovery: constants.AI_OPERATIONS_FAILURE_RECOVERY, observabilityFields: constants.AI_OPERATIONS_OBSERVABILITY_FIELDS, assuranceEvidence: constants.AI_OPERATIONS_ASSURANCE_EVIDENCE, invariants: constants.AI_OPERATIONS_INVARIANTS });
const required = Object.freeze({ providerNeutral: 'requires provider neutrality', lifecycleGoverned: 'requires governed lifecycle', feedbackMinimized: 'requires minimized feedback', evaluationRequired: 'requires evaluation before change', promotionSeparated: 'requires separated promotion authority', rollbackRequired: 'requires rollback', tenantIsolation: 'requires tenant isolation', sensitiveDataProtected: 'requires sensitive-data protection', humanApprovalRiskBased: 'requires risk-based human approval' });
const prohibited = Object.freeze({ directLearningFromInteraction: 'prohibits direct learning from interactions', customerMessageUpdatesProduction: 'prohibits customer messages updating production', ratingUpdatesProduction: 'prohibits ratings updating production', successfulInteractionUpdatesProduction: 'prohibits successful interactions updating production', providerLockIn: 'prohibits provider lock-in', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', modelOutputAsCompletion: 'prohibits model output as completion', unapprovedPromotion: 'prohibits unapproved promotion', modelOwnsOperationalTruth: 'prohibits model ownership of operational truth' });

export class AiModelOperationsEvaluationLearningOverviewDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  authorities() { return values(metadata.authorities); }
  capabilities() { return values(metadata.capabilities); }
  contractFields() { return values(metadata.contractFields); }
  assetFields() { return values(metadata.assetFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  learningLoop() { return values(metadata.learningLoop); }
  casaLluviaObjectives() { return values(metadata.casaLluviaObjectives); }
  governanceControls() { return values(metadata.governanceControls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('AI Model Operations Evaluation and Learning Overview profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-01 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-01 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.AI_MODEL_OPERATIONS_EVALUATION_LEARNING_OVERVIEW_ERROR_CODE, 'AI Model Operations Evaluation and Learning Overview violates ARCH-029-01.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
