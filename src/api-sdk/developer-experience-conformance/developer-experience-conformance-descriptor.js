import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperExperienceConformanceProfile } from '../contracts/developer-experience-conformance-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  ACCESS_ONBOARDING_FIELDS, API_DISCOVERY_FIELDS, CONFORMANCE_DECISION_FIELDS,
  CONFORMANCE_RESULT_CLASSES, CONTRACT_VALIDATION_AREAS, DEVELOPER_EXPERIENCE_BOUNDARIES,
  DEVELOPER_EXPERIENCE_CONFORMANCE_ERROR_CODE, DEVELOPER_EXPERIENCE_DEFINITIONS,
  DEVELOPER_EXPERIENCE_GOVERNANCE_DECISIONS, DEVELOPER_EXPERIENCE_OBJECTIVES,
  DEVELOPER_EXPERIENCE_PRINCIPLES, DEVELOPER_EXPERIENCE_RULES, DEVELOPER_JOURNEY_STEPS,
  DEVELOPER_PERSONAS, DOCUMENTATION_CONTENT_TYPES, DRIFT_DETECTION_TARGETS,
  EXAMPLE_REQUIREMENTS, LOCAL_TEST_CAPABILITIES, PIPELINE_STAGES, QUALITY_GATE_AREAS,
  RISK_TEST_FACTORS, TEST_ASSURANCE_TARGETS, TEST_DATA_CONTROLS, TEST_ENVIRONMENT_TYPES,
  TEST_EVIDENCE_TYPES, TEST_PLAN_FIELDS, TEST_TYPE_COVERAGE
} from '../developer-experience-conformance-constants.js';

const METADATA = Object.freeze({
  objectives: DEVELOPER_EXPERIENCE_OBJECTIVES,
  principles: DEVELOPER_EXPERIENCE_PRINCIPLES,
  definitions: DEVELOPER_EXPERIENCE_DEFINITIONS,
  journeySteps: DEVELOPER_JOURNEY_STEPS,
  personas: DEVELOPER_PERSONAS,
  discoveryFields: API_DISCOVERY_FIELDS,
  onboardingFields: ACCESS_ONBOARDING_FIELDS,
  documentationContentTypes: DOCUMENTATION_CONTENT_TYPES,
  exampleRequirements: EXAMPLE_REQUIREMENTS,
  localTestCapabilities: LOCAL_TEST_CAPABILITIES,
  testAssuranceTargets: TEST_ASSURANCE_TARGETS,
  riskTestFactors: RISK_TEST_FACTORS,
  testPlanFields: TEST_PLAN_FIELDS,
  contractValidationAreas: CONTRACT_VALIDATION_AREAS,
  testTypeCoverage: TEST_TYPE_COVERAGE,
  testEnvironmentTypes: TEST_ENVIRONMENT_TYPES,
  testDataControls: TEST_DATA_CONTROLS,
  conformanceDecisionFields: CONFORMANCE_DECISION_FIELDS,
  conformanceResultClasses: CONFORMANCE_RESULT_CLASSES,
  pipelineStages: PIPELINE_STAGES,
  qualityGateAreas: QUALITY_GATE_AREAS,
  driftDetectionTargets: DRIFT_DETECTION_TARGETS,
  testEvidenceTypes: TEST_EVIDENCE_TYPES,
  governanceDecisions: DEVELOPER_EXPERIENCE_GOVERNANCE_DECISIONS,
  architecturalRules: DEVELOPER_EXPERIENCE_RULES,
  architectureBoundaries: DEVELOPER_EXPERIENCE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  developerJourneyEndToEnd: 'ARCH-017-07 requires developer experience to span discovery through retirement.',
  contractExecutableAssuranceInput: 'ARCH-017-07 requires approved contracts to drive validation, documentation, examples, mocks, SDK generation, tests, compatibility, and conformance evidence where practical.',
  behaviorBeyondSyntax: 'ARCH-017-07 requires testing behavior beyond schema syntax.',
  providerOwnsConformanceEvidence: 'ARCH-017-07 requires every supported provider version to have provider-owned contract conformance evidence.',
  consumersUseSupportedBehavior: 'ARCH-017-07 requires consumers to validate against published contracts and supported behavior.',
  negativePathsFirstClass: 'ARCH-017-07 requires negative paths to be first-class tests.',
  isolationDemonstrated: 'ARCH-017-07 requires tenant and property isolation to be demonstrated by evidence.',
  fastFeedbackRiskAssurance: 'ARCH-017-07 requires fast feedback and strong assurance to coexist.',
  testEnvironmentsGoverned: 'ARCH-017-07 requires test environments to preserve risk-appropriate identity, authorization, secrets, classification, tenant, property, privacy, retention, and evidence controls.',
  conformanceVersioned: 'ARCH-017-07 requires conformance to be versioned by subject, contract, profile, suite, environment, and point in time.',
  evidenceRecorded: 'ARCH-017-07 requires test inputs, results, versions, approvals, exceptions, and release correlations to be recorded where practical.',
  technologyIndependent: 'ARCH-017-07 requires developer journeys, test obligations, and conformance outcomes to remain technology independent.',
  discoveryNotPermission: 'ARCH-017-07 requires discoverability not to grant invocation permission or restricted contract visibility.',
  leastPrivilegeOnboarding: 'ARCH-017-07 requires onboarding approval to result in least-privilege access.',
  firstUseSafeBounded: 'ARCH-017-07 requires first successful use to be non-production, explicit, bounded, reversible, or read-only.',
  documentationVersionedOwned: 'ARCH-017-07 requires documentation to be versioned, owned, reviewed, discoverable, and linked to contract and release.',
  examplesSafeValidated: 'ARCH-017-07 requires examples to be safe and validated in release pipelines where practical.',
  interactiveExplorationControlled: 'ARCH-017-07 requires interactive exploration to preserve identity, environment, scope, limits, masking, audit, warnings, and policy controls.',
  localDevelopmentNoProductionDependency: 'ARCH-017-07 requires local development not to require production network access, production credentials, or uncontrolled production data.',
  mocksDeclareLimitations: 'ARCH-017-07 requires mocks, simulators, and sandboxes to declare coverage, behavior, limitations, data model, reset, service expectations, owner, and support.',
  supportFeedbackClosedLoop: 'ARCH-017-07 requires developer feedback to be classified, prioritized, responded to, and closed.',
  testTargetsIndependent: 'ARCH-017-07 requires assurance targets to be tested independently where practical.',
  riskBasedTestingNonNegotiablesPreserved: 'ARCH-017-07 requires risk-based testing not to omit non-negotiable identity, authorization, contract, and isolation controls.',
  testPlanReviewable: 'ARCH-017-07 requires material API or SDK release test plans to be reviewable and updated when scope or risk changes.',
  structuralValidationNotSemanticApproval: 'ARCH-017-07 requires structural contract validation not to constitute semantic approval.',
  semanticReviewRequired: 'ARCH-017-07 requires semantic review proportionate to risk.',
  providerContractTestingRequired: 'ARCH-017-07 requires provider contract testing before release and after material gateway, policy, dependency, or environment changes.',
  consumerContractsReviewed: 'ARCH-017-07 requires consumer contracts not to institutionalize undocumented behavior or transfer provider lifecycle authority.',
  integrationTestsPreserveBoundaries: 'ARCH-017-07 requires integration tests to preserve approved boundaries.',
  negativeTestsVerifyNoSideEffects: 'ARCH-017-07 requires negative tests to verify safe failure and absence of unintended side effects.',
  securityTestingRiskProportionate: 'ARCH-017-07 requires security testing proportionate to exposure and risk.',
  isolationConcurrentScopes: 'ARCH-017-07 requires tenant and property isolation tests with independent scopes and concurrency or reuse scenarios.',
  privacyDataProtected: 'ARCH-017-07 requires privacy and test-data controls to protect sensitive production data.',
  compatibilitySemanticConsumerBased: 'ARCH-017-07 requires compatibility analysis to consider semantics and consumer behavior, not syntax alone.',
  migrationRehearsed: 'ARCH-017-07 requires breaking migrations to be tested or rehearsed where practical.',
  sdkTestsAgainstRepresentativeProvider: 'ARCH-017-07 requires SDK tests to verify behavior against a representative provider, not only generated mocks.',
  paritySemanticsDocumented: 'ARCH-017-07 requires SDK parity differences to be documented in declarations and compatibility guidance.',
  asyncTimeoutNotNoSideEffect: 'ARCH-017-07 requires async tests to verify client timeout does not imply no remote side effect.',
  eventTestsNoExactlyOnceAssumption: 'ARCH-017-07 requires event and callback tests not to assume exactly-once delivery unless guaranteed and proven.',
  streamResourceBounded: 'ARCH-017-07 requires stream tests to verify bounded client and provider resource consumption.',
  batchFileFailuresVisible: 'ARCH-017-07 requires batch and file tests not to conceal item or integrity failure.',
  resilienceStopConditions: 'ARCH-017-07 requires resilience tests to use approved fault boundaries and stop conditions.',
  performanceAssumptionsRecorded: 'ARCH-017-07 requires performance results to correlate to release, environment, configuration, dataset, and capacity assumptions.',
  environmentDriftDetected: 'ARCH-017-07 requires test environment drift detection.',
  testIdentitiesGoverned: 'ARCH-017-07 requires test identities and credentials to be governed, least privilege, scoped, and secret-safe.',
  testDataGoverned: 'ARCH-017-07 requires test data to be purpose-defined, classified, minimal, scoped, traceable, retained, and disposed.',
  flakyTestsOwned: 'ARCH-017-07 requires flaky tests to be owned, measured, investigated, time-bounded if quarantined, and repaired or replaced.',
  pipelineEvidenceExplicit: 'ARCH-017-07 requires validation pipeline dependencies and final evidence to remain explicit.',
  qualityGateOverridesGoverned: 'ARCH-017-07 requires quality gate overrides to have authority, rationale, scope, controls, evidence, expiry, and remediation owner.',
  conformanceClaimsScoped: 'ARCH-017-07 requires conformance claims to identify subject, profile, suite, environment, evidence, and validity conditions.',
  skippedNotPassed: 'ARCH-017-07 requires skipped, blocked, inconclusive, and excepted tests never to be reported as passed.',
  certificationTimeBounded: 'ARCH-017-07 requires certification and attestation to be time bounded and scoped.',
  productionVerificationBounded: 'ARCH-017-07 requires production verification to be bounded, authorized, observable, recoverable, and cleaned up.',
  driftCreatesOwnedIssue: 'ARCH-017-07 requires drift to create an owned issue with severity, consumers, containment, and remediation.',
  failuresCorrectAuthoritativeSource: 'ARCH-017-07 requires teams to correct the authoritative source of defects rather than normalize workarounds in tests.',
  evidenceProtectedRetained: 'ARCH-017-07 requires test evidence to be tamper-evident where needed, access controlled, searchable, and retained.',
  aiGeneratedTestsReviewed: 'ARCH-017-07 requires AI-generated tests and conformance conclusions to be validated against authoritative contracts and policies.',
  measuresImproveProduct: 'ARCH-017-07 requires measures to drive product and platform improvement.'
});

const REQUIRED_FALSE = Object.freeze({
  convenientFirstRequestSufficient: 'ARCH-017-07 prohibits treating a convenient first request as sufficient developer experience.',
  examplesOnlyBehavior: 'ARCH-017-07 prohibits material behavior from existing only in examples, support conversations, or implementation source.',
  schemaOnlyAssurance: 'ARCH-017-07 prohibits schema validity alone from proving semantic, authorization, tenant, timing, retry, failure, or operational correctness.',
  consumerTestsReplaceProviderEvidence: 'ARCH-017-07 prohibits consumer tests from replacing provider conformance responsibility.',
  happyPathReplacesNegativeTesting: 'ARCH-017-07 prohibits happy-path tests from replacing negative, authorization, isolation, and failure testing.',
  testEnvironmentsControlFree: 'ARCH-017-07 prohibits test environments from being control-free zones.',
  conformancePermanentUniversalLabel: 'ARCH-017-07 prohibits conformance from being a permanent universal label.',
  personaWeakensSemantics: 'ARCH-017-07 prohibits persona tailoring from weakening controls or producing inconsistent API semantics.',
  discoverabilityGrantsInvokePermission: 'ARCH-017-07 prohibits discoverability from granting permission to invoke or view restricted contract details.',
  genericAllPurposeCredential: 'ARCH-017-07 prohibits access approval from producing a generic all-purpose credential.',
  productionCredentialsRequiredForLearning: 'ARCH-017-07 prohibits requiring production credentials for basic learning or local testing.',
  overprivilegedExampleSuccess: 'ARCH-017-07 rejects fast but overprivileged or misleading examples as failed developer experience.',
  materialBehaviorOnlyInSupport: 'ARCH-017-07 prohibits material behavior from existing only in support conversations or source.',
  examplesContainSecrets: 'ARCH-017-07 prohibits examples from containing real credentials, sensitive records, disabled verification, privileged default scope, hidden errors, unbounded retrieval, undocumented behavior, or preview-as-stable behavior.',
  interactiveToolAlternateGateway: 'ARCH-017-07 prohibits interactive tools from becoming alternate gateways, privileged credential stores, or policy bypasses.',
  localRequiresProductionData: 'ARCH-017-07 prohibits local development from requiring uncontrolled production data.',
  mockSuccessProductionConformance: 'ARCH-017-07 prohibits mock or simulator success from being represented as production conformance.',
  supportWorkaroundUndocumented: 'ARCH-017-07 prohibits support workarounds that alter promised behavior from remaining undocumented.',
  riskTestingOmitsIdentityAuthorizationIsolation: 'ARCH-017-07 prohibits risk-based testing from omitting identity, authorization, contract, or isolation controls.',
  structuralValidationSemanticApproval: 'ARCH-017-07 prohibits structural validation from constituting semantic approval.',
  consumerContractInstitutionalizesUndocumentedBehavior: 'ARCH-017-07 prohibits consumer contracts from institutionalizing undocumented behavior or implementation details.',
  integrationTestsCoupleInternalDatabase: 'ARCH-017-07 prohibits direct database or implementation coupling merely to simplify integration tests.',
  e2eReplacesLowerLevelTesting: 'ARCH-017-07 prohibits end-to-end tests from replacing lower-level contract, security, or failure testing.',
  isolationSequentialOnly: 'ARCH-017-07 prohibits treating sequential happy-path isolation tests as sufficient.',
  sensitiveProductionDataDefault: 'ARCH-017-07 prohibits copying sensitive production data into test environments by default.',
  unexplainedRetrySuccessReleaseEvidence: 'ARCH-017-07 prohibits unexplained retry success from becoming release evidence.',
  skippedBlockedInconclusivePassed: 'ARCH-017-07 prohibits skipped, blocked, inconclusive, or excepted checks from being reported as passed.',
  certificationEliminatesMonitoring: 'ARCH-017-07 prohibits certification from eliminating monitoring, change control, vulnerability response, or provider accountability.',
  productionVerificationUncontrolledExperiment: 'ARCH-017-07 prohibits production verification from becoming uncontrolled experimentation.',
  productionObservationApprovesBehavior: 'ARCH-017-07 prohibits undocumented production behavior from becoming approved through continued use.',
  aiGeneratedMockProvesCoverage: 'ARCH-017-07 prohibits generated volume, plausibility, or mock passing from proving meaningful coverage or conformance.',
  rawCoverageProvesRiskCoverage: 'ARCH-017-07 prohibits raw coverage percentages, test counts, or lines of test code from proving risk coverage by themselves.',
  mandatesSpecificTooling: 'ARCH-017-07 does not mandate a portal product, documentation generator, test framework, schema language, programming language, CI product, cloud platform, or certification vendor.',
  replacesArch013: 'ARCH-017-07 does not replace ARCH-013 Developer Platform capabilities.',
  replacesArch018: 'ARCH-017-07 does not replace ARCH-018 tenancy and property topology.',
  definesGovernanceAssurance: 'ARCH-017-07 does not define ARCH-017-08 governance and assurance decision structures.',
  definesOperationsObservability: 'ARCH-017-07 does not define ARCH-017-09 operational observability, service performance, or production feedback.'
});

export class DeveloperExperienceConformanceDescriptor {
  objectives() { return values(METADATA.objectives); }
  principles() { return values(METADATA.principles); }
  definitions() { return values(METADATA.definitions); }
  journeySteps() { return values(METADATA.journeySteps); }
  personas() { return values(METADATA.personas); }
  discoveryFields() { return values(METADATA.discoveryFields); }
  onboardingFields() { return values(METADATA.onboardingFields); }
  documentationContentTypes() { return values(METADATA.documentationContentTypes); }
  exampleRequirements() { return values(METADATA.exampleRequirements); }
  localTestCapabilities() { return values(METADATA.localTestCapabilities); }
  testAssuranceTargets() { return values(METADATA.testAssuranceTargets); }
  riskTestFactors() { return values(METADATA.riskTestFactors); }
  testPlanFields() { return values(METADATA.testPlanFields); }
  contractValidationAreas() { return values(METADATA.contractValidationAreas); }
  testTypeCoverage() { return values(METADATA.testTypeCoverage); }
  testEnvironmentTypes() { return values(METADATA.testEnvironmentTypes); }
  testDataControls() { return values(METADATA.testDataControls); }
  conformanceDecisionFields() { return values(METADATA.conformanceDecisionFields); }
  conformanceResultClasses() { return values(METADATA.conformanceResultClasses); }
  pipelineStages() { return values(METADATA.pipelineStages); }
  qualityGateAreas() { return values(METADATA.qualityGateAreas); }
  driftDetectionTargets() { return values(METADATA.driftDetectionTargets); }
  testEvidenceTypes() { return values(METADATA.testEvidenceTypes); }
  governanceDecisions() { return values(METADATA.governanceDecisions); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof DeveloperExperienceConformanceProfile
      ? input
      : new DeveloperExperienceConformanceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Developer Experience, Testing, and Conformance profile must have a name.');
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
        errors.push(`Developer Experience, Testing, and Conformance must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      DEVELOPER_EXPERIENCE_CONFORMANCE_ERROR_CODE,
      'Developer Experience, Testing, and Conformance violates ARCH-017-07.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
