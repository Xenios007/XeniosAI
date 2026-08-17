import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiLifecycleVersioningCompatibilityProfile } from '../contracts/api-lifecycle-versioning-compatibility-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  API_ACTIVATION_SCOPES, API_BREAKING_CHANGE_TYPES, API_CHANGE_ASSESSMENT_FIELDS,
  API_COMPATIBILITY_BOUNDARY_FIELDS, API_COMPATIBILITY_CLASSIFICATIONS,
  API_COMPATIBILITY_DIMENSIONS, API_CONDITIONALLY_COMPATIBLE_CHANGES,
  API_DEPRECATION_ENFORCEMENT_MECHANISMS, API_DEPRECATION_NOTICE_FIELDS,
  API_EMERGENCY_TRIGGERS, API_EXCEPTION_FIELDS, API_LIFECYCLE_ARCHITECTURAL_RULES,
  API_LIFECYCLE_BOUNDARIES, API_LIFECYCLE_DOMAINS, API_LIFECYCLE_EVIDENCE_TYPES,
  API_LIFECYCLE_GATES, API_LIFECYCLE_METRICS, API_LIFECYCLE_OBJECTIVES,
  API_LIFECYCLE_OBSERVABILITY_FIELDS, API_LIFECYCLE_OPERATIONS,
  API_LIFECYCLE_TRANSITION_FIELDS, API_LIFECYCLE_VERSIONING_COMPATIBILITY_ERROR_CODE,
  API_MIGRATION_PLAN_FIELDS, API_ORPHAN_DETECTION_SIGNALS, API_PARALLEL_VERSION_REQUIREMENTS,
  API_POTENTIALLY_COMPATIBLE_CHANGES, API_PRODUCT_LIFECYCLE_STATES,
  API_RELEASE_ACTIVATION_FIELDS, API_RETIREMENT_READINESS_FIELDS, API_ROLLBACK_SAFETY_FIELDS,
  API_SEMVER_COMPONENTS, API_VERSION_IDENTITY_TYPES, API_VERSION_ROUTING_PROHIBITIONS
} from '../lifecycle-versioning-compatibility-constants.js';

const METADATA = Object.freeze({
  objectives: API_LIFECYCLE_OBJECTIVES,
  lifecycleDomains: API_LIFECYCLE_DOMAINS,
  lifecycleStates: API_PRODUCT_LIFECYCLE_STATES,
  transitionFields: API_LIFECYCLE_TRANSITION_FIELDS,
  gates: API_LIFECYCLE_GATES,
  versionIdentityTypes: API_VERSION_IDENTITY_TYPES,
  semverComponents: API_SEMVER_COMPONENTS,
  compatibilityBoundaryFields: API_COMPATIBILITY_BOUNDARY_FIELDS,
  compatibilityDimensions: API_COMPATIBILITY_DIMENSIONS,
  compatibilityClassifications: API_COMPATIBILITY_CLASSIFICATIONS,
  potentiallyCompatibleChanges: API_POTENTIALLY_COMPATIBLE_CHANGES,
  conditionallyCompatibleChanges: API_CONDITIONALLY_COMPATIBLE_CHANGES,
  breakingChangeTypes: API_BREAKING_CHANGE_TYPES,
  changeAssessmentFields: API_CHANGE_ASSESSMENT_FIELDS,
  releaseActivationFields: API_RELEASE_ACTIVATION_FIELDS,
  activationScopes: API_ACTIVATION_SCOPES,
  parallelVersionRequirements: API_PARALLEL_VERSION_REQUIREMENTS,
  versionRoutingProhibitions: API_VERSION_ROUTING_PROHIBITIONS,
  migrationPlanFields: API_MIGRATION_PLAN_FIELDS,
  deprecationNoticeFields: API_DEPRECATION_NOTICE_FIELDS,
  deprecationEnforcementMechanisms: API_DEPRECATION_ENFORCEMENT_MECHANISMS,
  exceptionFields: API_EXCEPTION_FIELDS,
  retirementReadinessFields: API_RETIREMENT_READINESS_FIELDS,
  emergencyTriggers: API_EMERGENCY_TRIGGERS,
  rollbackSafetyFields: API_ROLLBACK_SAFETY_FIELDS,
  orphanDetectionSignals: API_ORPHAN_DETECTION_SIGNALS,
  observabilityFields: API_LIFECYCLE_OBSERVABILITY_FIELDS,
  evidenceTypes: API_LIFECYCLE_EVIDENCE_TYPES,
  metrics: API_LIFECYCLE_METRICS,
  lifecycleOperations: API_LIFECYCLE_OPERATIONS,
  architecturalRules: API_LIFECYCLE_ARCHITECTURAL_RULES,
  architectureBoundaries: API_LIFECYCLE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  continuousOwnership: 'ARCH-017-04 requires continuous ownership after first publication.',
  distinctLifecycleIdentities: 'ARCH-017-04 requires distinct lifecycle identities for products, contracts, releases, SDKs, and consumer adoption.',
  versionIdentifiesCompatibilityBoundary: 'ARCH-017-04 requires a version to identify a supported compatibility boundary.',
  compatibilityBeyondSyntax: 'ARCH-017-04 requires compatibility assessment beyond schema syntax.',
  releasedBehaviorImmutable: 'ARCH-017-04 requires released contract behavior to remain immutable within its supported boundary.',
  backwardCompatibleWhenPractical: 'ARCH-017-04 requires backward compatibility whenever practical.',
  breakingRequiresMajor: 'ARCH-017-04 requires breaking API changes to use a new major version.',
  evidenceBasedClassification: 'ARCH-017-04 requires evidence-based change classification.',
  unknownNotCompatible: 'ARCH-017-04 requires unknown compatibility not to be released as compatible.',
  securityNotWeakenedForCompatibility: 'ARCH-017-04 requires security, privacy, and tenant isolation not to be weakened for compatibility.',
  providerReleaseIndependentWhenConformant: 'ARCH-017-04 allows provider releases to evolve independently only while conforming to supported contracts.',
  sdkDeclaresSupportedContracts: 'ARCH-017-04 requires SDK versions to declare supported API contract versions.',
  previewStillControlled: 'ARCH-017-04 requires preview status not to waive security, privacy, isolation, or evidence requirements.',
  scopedActivationControl: 'ARCH-017-04 requires activation to be independently controllable by approved scopes.',
  parallelVersionsBounded: 'ARCH-017-04 requires parallel-version operation to be bounded with owner, capacity, support, and exit plan.',
  routingExplicit: 'ARCH-017-04 requires explicit contract-version routing or registered consumer policy.',
  adaptersDeclareLimitations: 'ARCH-017-04 requires compatibility adapters to declare limitations and not hide semantic loss.',
  migrationOwned: 'ARCH-017-04 requires consumer migration to be owned, tested, supported, observable, and evidenced.',
  deprecationComplete: 'ARCH-017-04 requires complete deprecation reason, replacement, dates, support, exceptions, and retirement target.',
  exceptionsTimeBounded: 'ARCH-017-04 requires deprecation and retirement exceptions to be explicit, monitored, approved, and time bounded.',
  retirementReadinessRequired: 'ARCH-017-04 requires retirement readiness across consumers, dependencies, traffic, access, data, support, and evidence.',
  retiredIdentitiesReserved: 'ARCH-017-04 requires retired identities to remain reserved.',
  emergencyGoverned: 'ARCH-017-04 requires emergency restriction or retirement to preserve command control, evidence, communication where possible, and retrospective review.',
  rollbackSafetyAssessed: 'ARCH-017-04 requires rollback safety assessment.',
  orphanRestricted: 'ARCH-017-04 requires orphaned interfaces not to continue unrestricted operation.',
  lifecycleTelemetryProtected: 'ARCH-017-04 requires lifecycle telemetry to be protected by sensitivity.',
  evidenceProtected: 'ARCH-017-04 requires lifecycle evidence to be attributable, time bound, version aligned, access controlled, integrity protected, and retained.',
  artifactsSynchronized: 'ARCH-017-04 requires generated artifacts to remain synchronized with active contract versions.',
  architectureReviewForMajorChange: 'ARCH-017-04 requires architecture and ADR review for major lifecycle or compatibility changes.'
});

const REQUIRED_FALSE = Object.freeze({
  lifecycleCollapsed: 'ARCH-017-04 prohibits collapsing product, contract, release, SDK, and consumer adoption lifecycles.',
  versionAvoidsImpactAnalysis: 'ARCH-017-04 prohibits using a new version as a substitute for consumer-impact analysis.',
  versionPreservesEveryMistake: 'ARCH-017-04 prohibits preserving every historical mistake indefinitely.',
  silentProviderDrift: 'ARCH-017-04 prohibits silent provider drift.',
  oneVersionImpliesAlignment: 'ARCH-017-04 prohibits one version number implying unvalidated alignment.',
  syntaxOnlyCompatibility: 'ARCH-017-04 prohibits syntax-only compatibility assessment.',
  unknownReleasedAsCompatible: 'ARCH-017-04 prohibits releasing unknown compatibility as compatible.',
  weakenSecurityForCompatibility: 'ARCH-017-04 prohibits weakening security, privacy, or tenant isolation to preserve compatibility.',
  previewWaivesControls: 'ARCH-017-04 prohibits preview status from waiving controls.',
  activationAuthorizesEveryConsumer: 'ARCH-017-04 prohibits activation or approval from authorizing every consumer.',
  unboundedParallelVersions: 'ARCH-017-04 prohibits unbounded parallel-version support.',
  routingUsesHiddenHeuristics: 'ARCH-017-04 prohibits hidden heuristic version routing.',
  adapterHidesSemanticLoss: 'ARCH-017-04 prohibits compatibility adapters from hiding semantic loss.',
  migrationNoticeOnly: 'ARCH-017-04 prohibits treating migration as notice-only work.',
  silentBestEffortDualWrite: 'ARCH-017-04 prohibits silent best-effort dual writing for material business state.',
  exceptionPermanent: 'ARCH-017-04 prohibits exceptions from silently becoming permanent support commitments.',
  retirementReusesIdentity: 'ARCH-017-04 prohibits reusing retired identities for different capabilities.',
  rollbackAssumedAfterIrreversibleChange: 'ARCH-017-04 prohibits assuming rollback is safe after irreversible data or business transitions.',
  orphanUnrestricted: 'ARCH-017-04 prohibits orphaned interfaces from continuing unrestricted operation.',
  metricsRewardUnsafeSpeed: 'ARCH-017-04 prohibits metrics that reward unsafe speed or indefinite compatibility.',
  replacesProductModel: 'ARCH-017-04 does not replace ARCH-017-02 product and contract model.',
  replacesInteractionSemantics: 'ARCH-017-04 does not replace ARCH-017-03 interaction semantics.',
  definesSecurityAccess: 'ARCH-017-04 does not define detailed API security, access, and isolation.',
  definesSdkDistribution: 'ARCH-017-04 does not define SDK architecture and distribution implementation.',
  definesOperationsPerformance: 'ARCH-017-04 does not define API & SDK operations, observability, and performance.'
});

export class ApiLifecycleVersioningCompatibilityDescriptor {
  objectives() { return values(METADATA.objectives); }
  lifecycleDomains() { return values(METADATA.lifecycleDomains); }
  lifecycleStates() { return values(METADATA.lifecycleStates); }
  transitionFields() { return values(METADATA.transitionFields); }
  gates() { return values(METADATA.gates); }
  versionIdentityTypes() { return values(METADATA.versionIdentityTypes); }
  semverComponents() { return values(METADATA.semverComponents); }
  compatibilityBoundaryFields() { return values(METADATA.compatibilityBoundaryFields); }
  compatibilityDimensions() { return values(METADATA.compatibilityDimensions); }
  compatibilityClassifications() { return values(METADATA.compatibilityClassifications); }
  potentiallyCompatibleChanges() { return values(METADATA.potentiallyCompatibleChanges); }
  conditionallyCompatibleChanges() { return values(METADATA.conditionallyCompatibleChanges); }
  breakingChangeTypes() { return values(METADATA.breakingChangeTypes); }
  changeAssessmentFields() { return values(METADATA.changeAssessmentFields); }
  releaseActivationFields() { return values(METADATA.releaseActivationFields); }
  activationScopes() { return values(METADATA.activationScopes); }
  parallelVersionRequirements() { return values(METADATA.parallelVersionRequirements); }
  versionRoutingProhibitions() { return values(METADATA.versionRoutingProhibitions); }
  migrationPlanFields() { return values(METADATA.migrationPlanFields); }
  deprecationNoticeFields() { return values(METADATA.deprecationNoticeFields); }
  deprecationEnforcementMechanisms() { return values(METADATA.deprecationEnforcementMechanisms); }
  exceptionFields() { return values(METADATA.exceptionFields); }
  retirementReadinessFields() { return values(METADATA.retirementReadinessFields); }
  emergencyTriggers() { return values(METADATA.emergencyTriggers); }
  rollbackSafetyFields() { return values(METADATA.rollbackSafetyFields); }
  orphanDetectionSignals() { return values(METADATA.orphanDetectionSignals); }
  observabilityFields() { return values(METADATA.observabilityFields); }
  evidenceTypes() { return values(METADATA.evidenceTypes); }
  metrics() { return values(METADATA.metrics); }
  lifecycleOperations() { return values(METADATA.lifecycleOperations); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof ApiLifecycleVersioningCompatibilityProfile
      ? input
      : new ApiLifecycleVersioningCompatibilityProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API Lifecycle, Versioning, and Compatibility profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`API Lifecycle, Versioning, and Compatibility must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      API_LIFECYCLE_VERSIONING_COMPATIBILITY_ERROR_CODE,
      'API Lifecycle, Versioning, and Compatibility violates ARCH-017-04.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
