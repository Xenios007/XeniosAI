import { PlatformError } from '../../foundation/errors/platform-error.js';
import { SdkArchitectureDistributionProfile } from '../contracts/sdk-architecture-distribution-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  SDK_ARCHITECTURAL_PRINCIPLES, SDK_ARCHITECTURAL_RULES, SDK_ARCHITECTURE_BOUNDARIES,
  SDK_ARCHITECTURE_DISTRIBUTION_ERROR_CODE, SDK_ARCHITECTURE_OBJECTIVES,
  SDK_AUDIENCE_CLASSIFICATIONS, SDK_BEHAVIOR_CONTROLS, SDK_CLIENT_CONFIGURATION_FIELDS,
  SDK_CONTRACT_LAYER_ELEMENTS, SDK_CORE_DEFINITIONS, SDK_DECLARATION_FIELDS,
  SDK_DISTRIBUTION_CONTROLS, SDK_EXTENSION_BOUNDARY_TYPES, SDK_GENERATION_MANIFEST_FIELDS,
  SDK_DISTRIBUTION_LOGICAL_LAYERS, SDK_GOVERNANCE_DECISIONS, SDK_LIFECYCLE_CONTROLS,
  SDK_PRODUCTION_FLOW_STAGES, SDK_QUALITY_ASSURANCE_GATES, SDK_REQUIRED_EVIDENCE_TYPES,
  SDK_TEST_SUPPORT_TYPES, SDK_VERSION_RELEASE_FIELDS
} from '../sdk-architecture-distribution-constants.js';

const METADATA = Object.freeze({
  objectives: SDK_ARCHITECTURE_OBJECTIVES,
  principles: SDK_ARCHITECTURAL_PRINCIPLES,
  coreDefinitions: SDK_CORE_DEFINITIONS,
  declarationFields: SDK_DECLARATION_FIELDS,
  audienceClassifications: SDK_AUDIENCE_CLASSIFICATIONS,
  logicalLayers: SDK_DISTRIBUTION_LOGICAL_LAYERS,
  contractLayerElements: SDK_CONTRACT_LAYER_ELEMENTS,
  generationManifestFields: SDK_GENERATION_MANIFEST_FIELDS,
  productionFlowStages: SDK_PRODUCTION_FLOW_STAGES,
  clientConfigurationFields: SDK_CLIENT_CONFIGURATION_FIELDS,
  behaviorControls: SDK_BEHAVIOR_CONTROLS,
  extensionBoundaryTypes: SDK_EXTENSION_BOUNDARY_TYPES,
  testSupportTypes: SDK_TEST_SUPPORT_TYPES,
  versionReleaseFields: SDK_VERSION_RELEASE_FIELDS,
  distributionControls: SDK_DISTRIBUTION_CONTROLS,
  lifecycleControls: SDK_LIFECYCLE_CONTROLS,
  governanceDecisions: SDK_GOVERNANCE_DECISIONS,
  qualityAssuranceGates: SDK_QUALITY_ASSURANCE_GATES,
  requiredEvidenceTypes: SDK_REQUIRED_EVIDENCE_TYPES,
  architecturalRules: SDK_ARCHITECTURAL_RULES,
  architectureBoundaries: SDK_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  apiContractAuthoritative: 'ARCH-017-06 requires the approved API contract to be authoritative over SDK behavior.',
  sdkGovernedProduct: 'ARCH-017-06 requires every supported SDK to be a governed product.',
  convenienceNotAuthority: 'ARCH-017-06 requires SDK convenience not to create API authority.',
  generatedHandwrittenSeparated: 'ARCH-017-06 requires generated and handwritten code to have explicit boundaries.',
  behaviorExplicit: 'ARCH-017-06 requires retry, timeout, cancellation, pagination, serialization, idempotency, telemetry, caching, and error mapping behavior to be explicit.',
  safeDefaultsVisibleOverrides: 'ARCH-017-06 requires safe defaults and deliberate visible overrides.',
  distributionSecurityBoundary: 'ARCH-017-06 requires SDK distribution to be treated as a security boundary.',
  lifecycleCorrelatedEndToEnd: 'ARCH-017-06 requires API product, contract, release, SDK, and consumer adoption lifecycles to remain correlated.',
  technologyIndependent: 'ARCH-017-06 requires SDK semantics and governance to remain technology independent.',
  declarationVersionControlled: 'ARCH-017-06 requires SDK declarations to be version controlled, discoverable, and machine-readable where practical.',
  generatedDeterministic: 'ARCH-017-06 requires generation to be deterministic from approved identified inputs.',
  handwrittenBounded: 'ARCH-017-06 requires handwritten extensions to be reviewed and bounded without redefining the API contract.',
  productionFlowFailsClosed: 'ARCH-017-06 requires SDK production flow stages to fail closed when source identity, evidence, authorization, or publication metadata is absent.',
  runtimeMatrixExplicit: 'ARCH-017-06 requires the supported runtime matrix to be explicit.',
  clientConstructionExplicit: 'ARCH-017-06 requires client construction to be explicit, side-effect controlled, injectable, and testable.',
  endpointSelectionConstrained: 'ARCH-017-06 requires endpoint selection to be explicit and constrained to supported exposure models.',
  credentialProvidersIntegrated: 'ARCH-017-06 requires SDKs to integrate with credential providers rather than spread raw credential handling.',
  tenantPropertyContextExplicit: 'ARCH-017-06 requires tenant and property scope to be explicit when required by the contract.',
  providerValidationAuthoritative: 'ARCH-017-06 requires provider validation to remain authoritative.',
  structuredErrorsPreserved: 'ARCH-017-06 requires SDK errors to preserve structured provider error semantics safely.',
  automaticPaginationVisible: 'ARCH-017-06 requires automatic pagination to be opt-in or clearly visible when it has cost, rate, or memory impact.',
  retriesBoundedSafe: 'ARCH-017-06 requires retries to be bounded and based on safety, idempotency, provider guidance, deadlines, and observability.',
  deadlinesPropagated: 'ARCH-017-06 requires nested SDK operations to propagate remaining deadlines rather than reset silently.',
  asyncOperationsDistinguished: 'ARCH-017-06 requires client cancellation, cancellation-request acceptance, and confirmed provider cancellation to remain distinct.',
  telemetrySafe: 'ARCH-017-06 requires SDK telemetry and diagnostics to avoid credentials, raw tokens, unrestricted bodies, sensitive data, and cross-tenant identifiers by default.',
  resourceUseBounded: 'ARCH-017-06 requires SDK defaults to avoid unbounded threads, tasks, connections, buffers, queues, and background work.',
  localStorageExplicit: 'ARCH-017-06 requires persistent local storage or caching to be explicit, justified, scoped, and documented.',
  extensionsNarrowVersioned: 'ARCH-017-06 requires SDK extension interfaces to be narrow, versioned, documented, and compatibility assessed.',
  mocksNotProviderProof: 'ARCH-017-06 requires mocks not to be represented as proof of provider integration, security, performance, or production readiness.',
  sdkVersionDistinctFromApiVersion: 'ARCH-017-06 requires SDK versioning to remain distinct from API contract versioning.',
  compatibilityEvidenceRequired: 'ARCH-017-06 requires target-specific compatibility analysis, compilation tests, representative consumer tests, and published evidence.',
  packageIdentityImmutable: 'ARCH-017-06 requires package identity to be immutable after publication.',
  dependenciesGoverned: 'ARCH-017-06 requires SDK dependencies to be minimized, declared, governed, monitored, and removable.',
  buildsRepeatableTraceable: 'ARCH-017-06 requires SDK builds to be automated, isolated, repeatable, and traceable.',
  integrityVerifiable: 'ARCH-017-06 requires package integrity, publisher identity, provenance, version, channel, and revocation status to be verifiable where supported.',
  approvedRegistryDistribution: 'ARCH-017-06 requires packages to be published through approved registries or distribution services.',
  releaseChannelsGoverned: 'ARCH-017-06 requires release channels to define audience, stability, support, promotion, restrictions, feedback, and exit conditions.',
  stablePublicationGated: 'ARCH-017-06 requires stable publication gates for contract, compatibility, security, package, installation, provenance, documentation, support, and authorization evidence.',
  rollbackViabilityAssessed: 'ARCH-017-06 requires rollback viability to be assessed against supported API versions and security requirements.',
  docsVersionedSafe: 'ARCH-017-06 requires SDK documentation to be versioned with the package and examples to use safe placeholders and least privilege.',
  deprecationGoverned: 'ARCH-017-06 requires deprecation to identify affected versions, reason, replacement, dates, distribution changes, migration, security, exceptions, and retirement action.',
  retirementObservable: 'ARCH-017-06 requires SDK retirement to be governed and observable.',
  supplyChainControlsTraceable: 'ARCH-017-06 requires traceable supply-chain controls and evidence instead of relying on one scan, signature, or approval.',
  incidentResponseCoordinated: 'ARCH-017-06 requires SDK package incidents to coordinate detection, containment, notification, rebuild, publication, revocation, migration, evidence, and improvement.',
  supportCorrelatesSafely: 'ARCH-017-06 requires support correlation without secrets or unrestricted payloads.',
  measuresMinimized: 'ARCH-017-06 requires SDK adoption and product measures to respect privacy, tenant isolation, purpose, and minimization.',
  agentWorkflowAuthorityBounded: 'ARCH-017-06 requires agents and workflows consuming SDKs to remain bounded by identity, purpose, authority, scope, limits, approval, and evidence.',
  decisionRightsAssigned: 'ARCH-017-06 requires SDK governance decision rights to be assigned.',
  evidenceRetained: 'ARCH-017-06 requires SDK lifecycle evidence to be retained according to classification, regulatory, contractual, operational, and lifecycle requirements.'
});

const REQUIRED_FALSE = Object.freeze({
  sdkReplacesApiContract: 'ARCH-017-06 prohibits an SDK from replacing the authoritative API contract.',
  sdkPossessionGrantsAuthority: 'ARCH-017-06 prohibits SDK possession or configuration from granting API authority.',
  clientCodeOwnsProviderAuthority: 'ARCH-017-06 prohibits moving provider authentication, authorization, policy, tenant, property, or domain decisions into client code.',
  generatedCodeManuallyPatched: 'ARCH-017-06 prohibits generated files from being manually patched as a normal change path.',
  generatedPackageAutomaticallySupported: 'ARCH-017-06 prohibits treating a generated package as automatically supported SDK.',
  hiddenGlobalPolicy: 'ARCH-017-06 prohibits hidden process-wide mutable state and hidden global policy.',
  unsafeOverridesDisableProviderControls: 'ARCH-017-06 prohibits SDK overrides from disabling provider controls.',
  behaviorDisagreementBecomesAlternativeContract: 'ARCH-017-06 prohibits SDK/API discrepancies from becoming undocumented alternative contracts.',
  handwrittenRedefinesFieldMeaning: 'ARCH-017-06 prohibits handwritten code from redefining field meaning.',
  handwrittenConcealsProviderErrors: 'ARCH-017-06 prohibits handwritten code from concealing material provider errors.',
  handwrittenInfersUnauthorizedScope: 'ARCH-017-06 prohibits handwritten code from inferring unauthorized tenant or property scope.',
  hiddenNetworkOperations: 'ARCH-017-06 prohibits handwritten extensions from introducing undocumented network operations.',
  runtimeFallbackCrossesTrustBoundary: 'ARCH-017-06 prohibits automatic fallback across trust or data-residency boundaries.',
  tenantIdentifierAuthorizes: 'ARCH-017-06 prohibits treating tenant or property identifiers as proof of authorization.',
  contextSharedAcrossConsumers: 'ARCH-017-06 prohibits reusing tenant or property context across unrelated consumers.',
  serializationSilentlyTruncates: 'ARCH-017-06 prohibits silent truncation, time reinterpretation, invalid coercion, or material error discard.',
  denialMappedToEmptySuccess: 'ARCH-017-06 prohibits converting denial or conflict into an empty successful result.',
  automaticPaginationHiddenCost: 'ARCH-017-06 prohibits hidden automatic pagination with material cost, rate, or memory impact.',
  idempotencyReusedAcrossBusinessIntents: 'ARCH-017-06 prohibits idempotency reuse across distinct business intents.',
  retriesPermanentFailures: 'ARCH-017-06 prohibits automatic retry of permanent validation, authorization, compatibility, or business-state failures.',
  sideEffectRetryWithoutIdempotency: 'ARCH-017-06 prohibits automatic side-effect retry without explicit contract and idempotency support.',
  cancellationProvesNoRemoteEffect: 'ARCH-017-06 prohibits treating client cancellation as proof that no remote side effect occurred.',
  telemetryIncludesSecrets: 'ARCH-017-06 prohibits telemetry from including secrets, unrestricted bodies, sensitive data, prompts, or cross-tenant identifiers by default.',
  cachesCrossTenantResponses: 'ARCH-017-06 prohibits shared cache keys for cross-tenant responses or sensitive payloads without controls.',
  extensionBypassesProtections: 'ARCH-017-06 prohibits extensions from bypassing mandatory transport, identity, tenant, property, evidence, denial, operation, or secret boundaries.',
  mocksProveProductionReadiness: 'ARCH-017-06 prohibits representing mocks as proof of provider integration, security, performance, or production readiness.',
  sdkVersionEqualsApiVersion: 'ARCH-017-06 prohibits assuming SDK version numbers equal API contract versions.',
  packagesContainSecretsOrInternalData: 'ARCH-017-06 prohibits packages from containing credentials, internal test data, unpublished APIs, environment config, build secrets, hooks, or unapproved telemetry destinations.',
  mutablePackageIdentity: 'ARCH-017-06 prohibits mutable package identity after publication.',
  undeclaredRuntimeDownloads: 'ARCH-017-06 prohibits SDKs from downloading undeclared executable components at runtime.',
  workstationStateRequiredForBuild: 'ARCH-017-06 prohibits SDK builds from depending on undocumented workstation state.',
  promotionRebuildsUntestedArtifact: 'ARCH-017-06 prohibits promotion by rebuilding an unverified equivalent artifact.',
  directUntrackedPackageTransferNormal: 'ARCH-017-06 prohibits direct transfer of untracked packages as the normal supported path.',
  previewRenamedAsStable: 'ARCH-017-06 prohibits promoting preview or experimental packages merely by renaming an unverified artifact.',
  examplesEmbedSecrets: 'ARCH-017-06 prohibits examples from embedding secrets, disabling verification, assuming cross-tenant access, or concealing failure handling.',
  unresolvedUsageIndefiniteSupport: 'ARCH-017-06 prohibits unresolved deprecated usage from creating indefinite support.',
  singleScanProvesPackageSafety: 'ARCH-017-06 prohibits any single scan, signature, or approval from proving package safety.',
  downloadCountsProveSecureAdoption: 'ARCH-017-06 prohibits raw downloads, stars, or generated line counts from proving successful, secure, or supported consumption.',
  agentInventsCredentials: 'ARCH-017-06 prohibits SDKs from letting agents invent credentials, infer broader authority, bypass confirmation, conceal tool errors, or trust generated parameters.',
  agentGeneratedParametersTrusted: 'ARCH-017-06 prohibits treating agent-generated parameters as trusted.',
  selectsLanguagesOrVendors: 'ARCH-017-06 does not select languages, package managers, generators, transports, registries, identity providers, build systems, or vendors.',
  replacesArch018: 'ARCH-017-06 does not redefine ARCH-018 tenant and property topology, lifecycle, isolation, routing, or administration.',
  definesDeveloperExperienceConformance: 'ARCH-017-06 does not define ARCH-017-07 developer experience, testing, and conformance details.',
  definesOperationsObservabilityPerformance: 'ARCH-017-06 does not define ARCH-017-09 operations, observability, and performance details.'
});

export class SdkArchitectureDistributionDescriptor {
  objectives() { return values(METADATA.objectives); }
  principles() { return values(METADATA.principles); }
  coreDefinitions() { return values(METADATA.coreDefinitions); }
  declarationFields() { return values(METADATA.declarationFields); }
  audienceClassifications() { return values(METADATA.audienceClassifications); }
  logicalLayers() { return values(METADATA.logicalLayers); }
  contractLayerElements() { return values(METADATA.contractLayerElements); }
  generationManifestFields() { return values(METADATA.generationManifestFields); }
  productionFlowStages() { return values(METADATA.productionFlowStages); }
  clientConfigurationFields() { return values(METADATA.clientConfigurationFields); }
  behaviorControls() { return values(METADATA.behaviorControls); }
  extensionBoundaryTypes() { return values(METADATA.extensionBoundaryTypes); }
  testSupportTypes() { return values(METADATA.testSupportTypes); }
  versionReleaseFields() { return values(METADATA.versionReleaseFields); }
  distributionControls() { return values(METADATA.distributionControls); }
  lifecycleControls() { return values(METADATA.lifecycleControls); }
  governanceDecisions() { return values(METADATA.governanceDecisions); }
  qualityAssuranceGates() { return values(METADATA.qualityAssuranceGates); }
  requiredEvidenceTypes() { return values(METADATA.requiredEvidenceTypes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof SdkArchitectureDistributionProfile
      ? input
      : new SdkArchitectureDistributionProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('SDK Architecture and Distribution profile must have a name.');
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
        errors.push(`SDK Architecture and Distribution must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      SDK_ARCHITECTURE_DISTRIBUTION_ERROR_CODE,
      'SDK Architecture and Distribution violates ARCH-017-06.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
