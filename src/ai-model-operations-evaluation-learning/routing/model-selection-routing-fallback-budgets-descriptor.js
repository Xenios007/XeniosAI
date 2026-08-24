import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ModelSelectionRoutingFallbackBudgetsProfile as Profile } from '../contracts/model-selection-routing-fallback-budgets-profile.js';
import * as constants from '../model-selection-routing-fallback-budgets-constants.js';

const metadata = Object.freeze({ responsibilities: constants.MODEL_ROUTING_RESPONSIBILITIES, taskProfileFields: constants.TASK_PROFILE_FIELDS, selectionPolicyFields: constants.SELECTION_POLICY_FIELDS, qualityGateFields: constants.QUALITY_GATE_FIELDS, safetyGateFields: constants.SAFETY_GATE_FIELDS, routingDecisionFields: constants.ROUTING_DECISION_FIELDS, latencyFields: constants.ROUTING_LATENCY_FIELDS, privacyFields: constants.ROUTING_PRIVACY_FIELDS, availabilityFields: constants.ROUTING_AVAILABILITY_FIELDS, fallbackFields: constants.FALLBACK_POLICY_FIELDS, budgetFields: constants.BUDGET_POLICY_FIELDS, lifecycleStates: constants.ROUTING_LIFECYCLE_STATES, controls: constants.MODEL_ROUTING_CONTROLS, failureRecovery: constants.MODEL_ROUTING_FAILURE_RECOVERY, observabilityFields: constants.MODEL_ROUTING_OBSERVABILITY, assuranceEvidence: constants.MODEL_ROUTING_ASSURANCE, invariants: constants.MODEL_ROUTING_INVARIANTS });
const required = Object.freeze({ taskProfilesVersioned: 'requires versioned task profiles', gatesBeforeRouting: 'requires gates before routing', selectionDeterministic: 'requires deterministic selection', budgetsEnforced: 'requires enforced budgets', privacyValidated: 'requires privacy validation', fallbackCompatible: 'requires compatible fallback', routingEvidenceRecorded: 'requires routing evidence', approvedVersionsOnly: 'requires approved model versions' });
const prohibited = Object.freeze({ cheapestModelOnly: 'prohibits cheapest-model-only selection', gateBypassed: 'prohibits gate bypass', privacyIgnored: 'prohibits ignored privacy constraints', budgetExceeded: 'prohibits budget overrun', incompatibleFallback: 'prohibits incompatible fallback', unlimitedFallback: 'prohibits unlimited fallback', providerSpecificRouting: 'prohibits provider-specific routing contracts', routingOutcomeDirectlyLearns: 'prohibits routing outcomes directly changing production', modelOutputAsCompletion: 'prohibits model output as completion' });

export class ModelSelectionRoutingFallbackBudgetsDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  taskProfileFields() { return values(metadata.taskProfileFields); }
  selectionPolicyFields() { return values(metadata.selectionPolicyFields); }
  qualityGateFields() { return values(metadata.qualityGateFields); }
  safetyGateFields() { return values(metadata.safetyGateFields); }
  routingDecisionFields() { return values(metadata.routingDecisionFields); }
  latencyFields() { return values(metadata.latencyFields); }
  privacyFields() { return values(metadata.privacyFields); }
  availabilityFields() { return values(metadata.availabilityFields); }
  fallbackFields() { return values(metadata.fallbackFields); }
  budgetFields() { return values(metadata.budgetFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Model Selection Routing Fallback and Budgets profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-03 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-03 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.MODEL_SELECTION_ROUTING_FALLBACK_BUDGETS_ERROR_CODE, 'Model Selection Routing Fallback and Budgets violates ARCH-029-03.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
