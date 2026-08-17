import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { ReferenceImplementationOverviewProfile } from '../contracts/reference-implementation-overview-profile.js';
import * as constants from '../overview-constants.js';

const METADATA = Object.freeze({
  referenceMissionQuestions: constants.REFERENCE_MISSION_QUESTIONS, portfolioReferenceTiers: constants.PORTFOLIO_REFERENCE_TIERS,
  referenceStakeholderNeeds: constants.REFERENCE_STAKEHOLDER_NEEDS, referenceTargetStateCharacteristics: constants.REFERENCE_TARGET_STATE_CHARACTERISTICS,
  referenceQualityAttributes: constants.REFERENCE_QUALITY_ATTRIBUTES, referenceAdoptionPathSteps: constants.REFERENCE_ADOPTION_PATH_STEPS,
  referenceSuccessMeasures: constants.REFERENCE_SUCCESS_MEASURES, referenceDeclarationFields: constants.REFERENCE_DECLARATION_FIELDS,
  architecturalRules: constants.REFERENCE_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  referencesMakeArchitectureObservableThroughReproducibleEvidence: 'ARCH-020-01 requires reference implementations to make XeniosAI architecture observable through realistic, inspectable, and reproducible evidence.',
  portfolioBeginsWithCasaLluviaAndExpandsToEnterpriseOperation: 'ARCH-020-01 requires the portfolio to begin with Casa Lluvia and expand to enterprise operation.',
  referenceValueMeasuredThroughDemonstratedOutcomesAndConformance: 'ARCH-020-01 requires reference value to be measured through demonstrated outcomes and conformance.',
  crossCuttingRequirementsIncludedInEveryCompleteScenario: 'ARCH-020-01 requires cross-cutting requirements to be included in every complete scenario.',
  consumersReusePatternsNotUndocumentedImplementationAccidents: 'ARCH-020-01 requires consumers to reuse patterns, not undocumented implementation accidents.',
  referenceMaintenanceHasNamedOwnershipAndLifecycle: 'ARCH-020-01 requires reference maintenance to have named ownership and lifecycle.',
  everyReferenceDeclaresAllValidationCriteriaFields: 'ARCH-020-01 requires every reference to declare purpose, classification, architecture coverage, actors, acceptance criteria, limitations, data policy, tests, operations, and a maintenance owner.'
});

const REQUIRED_FALSE = Object.freeze({
  consumersCopyEntireSolutionInsteadOfSelectingReusablePatterns: 'ARCH-020-01 prohibits consumers from copying the entire solution instead of selecting reusable patterns.',
  referencePortfolioLeftUnversionedOrUnmaintained: 'ARCH-020-01 prohibits the reference portfolio from being left unversioned or unmaintained.',
  referenceLimitationsLeftUndisclosed: 'ARCH-020-01 prohibits reference limitations from being left undisclosed.',
  referenceRetirementOccursWithoutGovernedFeedback: 'ARCH-020-01 prohibits reference retirement from occurring without governed feedback.'
});

export class ReferenceImplementationOverviewDescriptor {
  referenceMissionQuestions() { return values(METADATA.referenceMissionQuestions); } portfolioReferenceTiers() { return values(METADATA.portfolioReferenceTiers); }
  referenceStakeholderNeeds() { return values(METADATA.referenceStakeholderNeeds); } referenceTargetStateCharacteristics() { return values(METADATA.referenceTargetStateCharacteristics); }
  referenceQualityAttributes() { return values(METADATA.referenceQualityAttributes); } referenceAdoptionPathSteps() { return values(METADATA.referenceAdoptionPathSteps); }
  referenceSuccessMeasures() { return values(METADATA.referenceSuccessMeasures); } referenceDeclarationFields() { return values(METADATA.referenceDeclarationFields); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ReferenceImplementationOverviewProfile ? input : new ReferenceImplementationOverviewProfile(input);
    const errors = [];
    if (!profile.portfolioName) errors.push('Reference Implementation Overview profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Reference Implementation Overview must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.REFERENCE_IMPLEMENTATION_OVERVIEW_ERROR_CODE, 'Reference Implementation Overview violates ARCH-020-01.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
