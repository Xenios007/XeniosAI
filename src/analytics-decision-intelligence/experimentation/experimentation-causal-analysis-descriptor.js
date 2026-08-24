import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ExperimentationCausalAnalysisProfile as Profile } from '../contracts/experimentation-causal-analysis-profile.js';
import * as constants from '../experimentation-causal-analysis-constants.js';

const metadata = Object.freeze({ responsibilities: constants.EXPERIMENTATION_RESPONSIBILITIES, experimentFields: constants.EXPERIMENT_FIELDS, hypothesisFields: constants.HYPOTHESIS_FIELDS, populationFields: constants.POPULATION_FIELDS, allocationFields: constants.ALLOCATION_FIELDS, guardrailFields: constants.GUARDRAIL_FIELDS, observationFields: constants.EXPERIMENT_OBSERVATION_FIELDS, evidenceFields: constants.STATISTICAL_EVIDENCE_FIELDS, ethicsReviewFields: constants.ETHICS_REVIEW_FIELDS, terminationFields: constants.TERMINATION_FIELDS, lifecycleStates: constants.EXPERIMENT_LIFECYCLE_STATES, controls: constants.EXPERIMENTATION_CONTROLS, failureRecovery: constants.EXPERIMENTATION_FAILURE_RECOVERY, observabilityFields: constants.EXPERIMENTATION_OBSERVABILITY, assuranceEvidence: constants.EXPERIMENTATION_ASSURANCE, invariants: constants.EXPERIMENTATION_INVARIANTS });
const required = Object.freeze({ hypothesesVersioned: 'requires versioned hypotheses', populationsGoverned: 'requires governed populations', allocationReproducible: 'requires reproducible allocation', guardrailsEnforced: 'requires enforced guardrails', evidenceQualified: 'requires qualified statistical evidence', ethicsReviewed: 'requires ethics review', terminationExplicit: 'requires explicit termination', causalityQualified: 'requires qualified causal claims' });
const prohibited = Object.freeze({ sharedDatabases: 'prohibits shared databases', hiddenHypothesisChange: 'prohibits hidden hypothesis changes', unconsentedAssignment: 'prohibits unconsented assignment', allocationManipulated: 'prohibits manipulated allocation', guardrailIgnored: 'prohibits ignored guardrails', correlationAsCausation: 'prohibits correlation as causation', peekingWithoutPolicy: 'prohibits peeking without policy', experimentOutputAsSourceTruth: 'prohibits experiment output as source truth', transportAcknowledgementAsCompletion: 'prohibits transport acknowledgement as completion' });

export class ExperimentationCausalAnalysisDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  experimentFields() { return values(metadata.experimentFields); }
  hypothesisFields() { return values(metadata.hypothesisFields); }
  populationFields() { return values(metadata.populationFields); }
  allocationFields() { return values(metadata.allocationFields); }
  guardrailFields() { return values(metadata.guardrailFields); }
  observationFields() { return values(metadata.observationFields); }
  evidenceFields() { return values(metadata.evidenceFields); }
  ethicsReviewFields() { return values(metadata.ethicsReviewFields); }
  terminationFields() { return values(metadata.terminationFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Experimentation and Causal Analysis profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-06 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-06 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.EXPERIMENTATION_CAUSAL_ANALYSIS_ERROR_CODE, 'Experimentation and Causal Analysis violates ARCH-028-06.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
