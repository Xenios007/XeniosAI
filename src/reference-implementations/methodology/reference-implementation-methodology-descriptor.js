import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { ReferenceImplementationMethodologyProfile } from '../contracts/reference-implementation-methodology-profile.js';
import * as constants from '../methodology-constants.js';

const METADATA = Object.freeze({
  methodPrinciples: constants.METHOD_PRINCIPLES, scenarioSelectionCriteria: constants.SCENARIO_SELECTION_CRITERIA,
  scenarioDefinitionFields: constants.SCENARIO_DEFINITION_FIELDS, architectureTraceabilityMappings: constants.ARCHITECTURE_TRACEABILITY_MAPPINGS,
  conformanceProfileElements: constants.CONFORMANCE_PROFILE_ELEMENTS, implementationLifecycleSteps: constants.IMPLEMENTATION_LIFECYCLE_STEPS,
  evidencePackageItems: constants.EVIDENCE_PACKAGE_ITEMS, variationPointCategories: constants.VARIATION_POINT_CATEGORIES,
  divergenceClassifications: constants.DIVERGENCE_CLASSIFICATIONS, reviewGateAreas: constants.REVIEW_GATE_AREAS,
  maintenanceMonitoringAreas: constants.MAINTENANCE_MONITORING_AREAS, retirementElements: constants.RETIREMENT_ELEMENTS,
  architecturalRules: constants.METHODOLOGY_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  traceabilityIsBidirectionalBetweenArchitectureAndExamples: 'ARCH-020-02 requires traceability to be bidirectional: architecture identifies examples, and examples identify architecture.',
  substitutionRetainsContractsInvariantsTestsQualityOutcomes: 'ARCH-020-02 requires variation-point substitution to retain contracts, invariants, tests, and quality outcomes.',
  newScenarioMovesFromProposalToReleaseWithRepeatableGatesEvidenceOwnership: 'ARCH-020-02 requires a new scenario to move from proposal to release with repeatable gates, evidence, ownership, variation rules, and lifecycle.',
  conformanceIsProfileBasedAndEvidenceBacked: 'ARCH-020-02 requires conformance to be profile based and evidence backed.',
  traceabilityIsMandatoryForMaterialArtifacts: 'ARCH-020-02 requires traceability to be mandatory for material artifacts.',
  variationIsExplicitAndTestPreserving: 'ARCH-020-02 requires variation to be explicit and test preserving.',
  maintenanceAndRetirementArePartOfReferenceScope: 'ARCH-020-02 requires maintenance and retirement to be part of reference scope.',
  architectureChangesFollowGovernanceNeverExampleDrift: 'ARCH-020-02 requires architecture changes to follow governance, never example drift.'
});

const REQUIRED_FALSE = Object.freeze({
  scenariosDuplicateWithoutDemonstratingMeaningfulVariant: 'ARCH-020-02 prohibits scenarios from duplicating one another without demonstrating a meaningful variant.',
  unclassifiedDivergencePresentedAsConformant: 'ARCH-020-02 prohibits unclassified divergence from being presented as conformant.',
  staleReferenceSilentlyPresentedAsCurrent: 'ARCH-020-02 prohibits a stale reference from being silently presented as current rather than marked unsupported.'
});

export class ReferenceImplementationMethodologyDescriptor {
  methodPrinciples() { return values(METADATA.methodPrinciples); } scenarioSelectionCriteria() { return values(METADATA.scenarioSelectionCriteria); }
  scenarioDefinitionFields() { return values(METADATA.scenarioDefinitionFields); } architectureTraceabilityMappings() { return values(METADATA.architectureTraceabilityMappings); }
  conformanceProfileElements() { return values(METADATA.conformanceProfileElements); } implementationLifecycleSteps() { return values(METADATA.implementationLifecycleSteps); }
  evidencePackageItems() { return values(METADATA.evidencePackageItems); } variationPointCategories() { return values(METADATA.variationPointCategories); }
  divergenceClassifications() { return values(METADATA.divergenceClassifications); } reviewGateAreas() { return values(METADATA.reviewGateAreas); }
  maintenanceMonitoringAreas() { return values(METADATA.maintenanceMonitoringAreas); } retirementElements() { return values(METADATA.retirementElements); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ReferenceImplementationMethodologyProfile ? input : new ReferenceImplementationMethodologyProfile(input);
    const errors = [];
    if (!profile.methodologyName) errors.push('Reference Implementation Methodology profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Reference Implementation Methodology must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.REFERENCE_IMPLEMENTATION_METHODOLOGY_ERROR_CODE, 'Reference Implementation Methodology violates ARCH-020-02.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
