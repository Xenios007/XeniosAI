import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ShadowCanaryExperimentPromotionProfile as Profile } from '../contracts/shadow-canary-experiment-promotion-profile.js';
import * as constants from '../shadow-canary-experiment-promotion-constants.js';

const metadata = Object.freeze({ responsibilities: constants.CONTROLLED_PROMOTION_RESPONSIBILITIES, planFields: constants.PROMOTION_PLAN_FIELDS, stageFields: constants.PROMOTION_STAGE_FIELDS, shadowFields: constants.SHADOW_RUN_FIELDS, canaryFields: constants.CANARY_RELEASE_FIELDS, experimentFields: constants.PROMOTION_EXPERIMENT_FIELDS, allocationFields: constants.EXPOSURE_ALLOCATION_FIELDS, guardrailFields: constants.PROMOTION_GUARDRAIL_FIELDS, stopConditionFields: constants.PROMOTION_STOP_CONDITION_FIELDS, decisionFields: constants.PROMOTION_DECISION_FIELDS, rollbackFields: constants.PROMOTION_ROLLBACK_FIELDS, lifecycleStates: constants.CONTROLLED_PROMOTION_LIFECYCLE_STATES, controls: constants.CONTROLLED_PROMOTION_CONTROLS, failureRecovery: constants.CONTROLLED_PROMOTION_FAILURE_RECOVERY, observabilityFields: constants.CONTROLLED_PROMOTION_OBSERVABILITY, assuranceEvidence: constants.CONTROLLED_PROMOTION_ASSURANCE, invariants: constants.CONTROLLED_PROMOTION_INVARIANTS });
const required = Object.freeze({ offlineEvaluationPassed: 'requires passed offline evaluation', approvalSeparated: 'requires separated approval', allocationDeterministic: 'requires deterministic allocation', exposureBounded: 'requires bounded exposure', guardrailsMonitored: 'requires monitored guardrails', stopConditionsEnforced: 'requires enforced stop conditions', rollbackTested: 'requires tested rollback', promotionEvidenceComplete: 'requires complete promotion evidence' });
const prohibited = Object.freeze({ shadowSideEffects: 'prohibits shadow side effects', unapprovedExposure: 'prohibits unapproved exposure', tenantMixing: 'prohibits tenant mixing', allocationMutable: 'prohibits mutable allocation', guardrailBypassed: 'prohibits guardrail bypass', stopConditionIgnored: 'prohibits ignored stop conditions', candidateSelfPromotes: 'prohibits candidate self-promotion', partialPackagePromotion: 'prohibits partial package promotion', rollbackUnavailable: 'prohibits promotion without rollback', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class ShadowCanaryExperimentPromotionDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  planFields() { return values(metadata.planFields); }
  stageFields() { return values(metadata.stageFields); }
  shadowFields() { return values(metadata.shadowFields); }
  canaryFields() { return values(metadata.canaryFields); }
  experimentFields() { return values(metadata.experimentFields); }
  allocationFields() { return values(metadata.allocationFields); }
  guardrailFields() { return values(metadata.guardrailFields); }
  stopConditionFields() { return values(metadata.stopConditionFields); }
  decisionFields() { return values(metadata.decisionFields); }
  rollbackFields() { return values(metadata.rollbackFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Shadow Canary Experiment and Promotion profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-07 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-07 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.SHADOW_CANARY_EXPERIMENT_PROMOTION_ERROR_CODE, 'Shadow Canary Experiment and Promotion violates ARCH-029-07.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
