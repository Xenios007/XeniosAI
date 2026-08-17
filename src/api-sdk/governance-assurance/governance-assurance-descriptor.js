import { PlatformError } from '../../foundation/errors/platform-error.js';
import { GovernanceAssuranceProfile } from '../contracts/governance-assurance-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  API_SDK_ASSURANCE_LEVELS, API_SDK_ASSURANCE_METHODS, API_SDK_AUTOMATION_CAPABILITIES,
  API_SDK_CHANGE_GOVERNANCE_FIELDS, API_SDK_CLASSIFICATION_DIMENSIONS,
  API_SDK_CONTROL_TYPES, API_SDK_DECISION_CLASSES, API_SDK_DECISION_RECORD_FIELDS,
  API_SDK_DETECTIVE_CONTROLS, API_SDK_EVIDENCE_QUALITY_FACTORS,
  API_SDK_EVIDENCE_RECORD_FIELDS, API_SDK_EXCEPTION_FIELDS,
  API_SDK_GOVERNANCE_ASSURANCE_ERROR_CODE, API_SDK_GOVERNANCE_BOUNDARIES,
  API_SDK_GOVERNANCE_DEFINITIONS, API_SDK_GOVERNANCE_LEVELS,
  API_SDK_GOVERNANCE_LIFECYCLE_DOMAINS, API_SDK_GOVERNANCE_MATURITY_LEVELS,
  API_SDK_GOVERNANCE_OBJECTIVES, API_SDK_GOVERNANCE_PRINCIPLES,
  API_SDK_GOVERNANCE_REVIEW_AREAS, API_SDK_GOVERNANCE_ROLES,
  API_SDK_GOVERNANCE_RULES, API_SDK_ISSUE_FIELDS, API_SDK_LIFECYCLE_GATES,
  API_SDK_POLICY_INSTRUMENTS, API_SDK_PREVENTIVE_CONTROLS,
  API_SDK_REGISTRATION_FIELDS, API_SDK_REPORTING_FIELDS, API_SDK_RISK_FACTORS
} from '../governance-assurance-constants.js';

const METADATA = Object.freeze({
  objectives: API_SDK_GOVERNANCE_OBJECTIVES,
  principles: API_SDK_GOVERNANCE_PRINCIPLES,
  definitions: API_SDK_GOVERNANCE_DEFINITIONS,
  lifecycleDomains: API_SDK_GOVERNANCE_LIFECYCLE_DOMAINS,
  governanceLevels: API_SDK_GOVERNANCE_LEVELS,
  roles: API_SDK_GOVERNANCE_ROLES,
  decisionRecordFields: API_SDK_DECISION_RECORD_FIELDS,
  decisionClasses: API_SDK_DECISION_CLASSES,
  registrationFields: API_SDK_REGISTRATION_FIELDS,
  policyInstruments: API_SDK_POLICY_INSTRUMENTS,
  classificationDimensions: API_SDK_CLASSIFICATION_DIMENSIONS,
  riskFactors: API_SDK_RISK_FACTORS,
  controlTypes: API_SDK_CONTROL_TYPES,
  preventiveControls: API_SDK_PREVENTIVE_CONTROLS,
  detectiveControls: API_SDK_DETECTIVE_CONTROLS,
  reviewAreas: API_SDK_GOVERNANCE_REVIEW_AREAS,
  lifecycleGates: API_SDK_LIFECYCLE_GATES,
  changeGovernanceFields: API_SDK_CHANGE_GOVERNANCE_FIELDS,
  assuranceLevels: API_SDK_ASSURANCE_LEVELS,
  assuranceMethods: API_SDK_ASSURANCE_METHODS,
  evidenceRecordFields: API_SDK_EVIDENCE_RECORD_FIELDS,
  evidenceQualityFactors: API_SDK_EVIDENCE_QUALITY_FACTORS,
  exceptionFields: API_SDK_EXCEPTION_FIELDS,
  issueFields: API_SDK_ISSUE_FIELDS,
  automationCapabilities: API_SDK_AUTOMATION_CAPABILITIES,
  reportingFields: API_SDK_REPORTING_FIELDS,
  maturityLevels: API_SDK_GOVERNANCE_MATURITY_LEVELS,
  architecturalRules: API_SDK_GOVERNANCE_RULES,
  architectureBoundaries: API_SDK_GOVERNANCE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  accountableOwnerRequired: 'ARCH-017-08 requires every supported API and SDK product to have one accountable owner.',
  authorityFollowsAccountability: 'ARCH-017-08 requires authority to follow accountability.',
  federatedGuardrails: 'ARCH-017-08 requires federated execution within enterprise guardrails.',
  contractsGovernedProducts: 'ARCH-017-08 requires contracts to be governed products.',
  assuranceRiskProportionate: 'ARCH-017-08 requires assurance to be proportionate to risk.',
  evidenceBeforeConclusion: 'ARCH-017-08 requires evidence before approval, conformance, risk acceptance, certification, or closure conclusions.',
  decisionExecutionAssuranceDistinct: 'ARCH-017-08 requires decision, execution, and assurance responsibilities to remain distinct.',
  exceptionsTemporary: 'ARCH-017-08 requires exceptions to be temporary.',
  automationInspectable: 'ARCH-017-08 requires automated governance to be inspectable, versioned, explainable, observable, and change controlled.',
  emergencyAuthorityControlled: 'ARCH-017-08 requires emergency authority to be bounded, evidenced, communicated, reviewed, and remediated.',
  technologyIndependent: 'ARCH-017-08 requires governance outcomes to remain technology independent.',
  lifecycleCorrelationPreserved: 'ARCH-017-08 requires product, contract, release, SDK, and consumer-adoption lifecycle decisions to remain correlated.',
  delegatedAuthorityScoped: 'ARCH-017-08 requires delegated authority to define decision classes, scope, thresholds, duration, evidence, conditions, escalation, and revocation.',
  forumsChartered: 'ARCH-017-08 requires governance forums to have charters.',
  registryRequired: 'ARCH-017-08 requires supported API products to have authoritative registry records.',
  sdkRegistryRequired: 'ARCH-017-08 requires every supported SDK to have a registry record.',
  ownershipIntegrityChecked: 'ARCH-017-08 requires ownership integrity controls and governed ownership transfer.',
  policiesVersionedOwned: 'ARCH-017-08 requires policy instruments to have owner, authority, scope, version, dates, lifecycle state, exceptions model, and traceability.',
  classificationsInformNotAuthorize: 'ARCH-017-08 requires classification to inform controls without granting access.',
  riskOwnedReassessed: 'ARCH-017-08 requires API and SDK risk to have accountable ownership and material reassessment.',
  controlsTraceableTested: 'ARCH-017-08 requires controls to be traceable, evidenced, testable, and reviewable.',
  preventiveControlsExplainRemediation: 'ARCH-017-08 requires preventive automation to explain responsible requirements and remediation paths.',
  detectiveFindingsOwned: 'ARCH-017-08 requires detective findings to create owned responses.',
  proposalsBusinessJustified: 'ARCH-017-08 requires product proposals to establish business need, boundaries, ownership, controls, and risks.',
  contractApprovalVersionScoped: 'ARCH-017-08 requires contract approval to apply to an identified contract version.',
  exposureNewDecision: 'ARCH-017-08 requires internal-to-partner or public exposure to be a new governance decision.',
  securityApprovalNoOwnershipTransfer: 'ARCH-017-08 requires security approval not to transfer implementation or operational accountability.',
  dataReviewRequired: 'ARCH-017-08 requires privacy and data governance review for purpose, minimization, classifications, residency, retention, and tenant obligations.',
  tenantPropertyGovernanceBounded: 'ARCH-017-08 requires tenant and property governance within enterprise guardrails.',
  aiWorkflowGovernanceBounded: 'ARCH-017-08 requires workflow, orchestrator, and agent API access to be governed by identity, purpose, scope, validation, limits, review, and evidence.',
  partnerPublicGoverned: 'ARCH-017-08 requires partner and public APIs to have eligibility, registration, terms, credentials, sponsorship, quotas, reporting, support, suspension, and migration governance.',
  internalApisGoverned: 'ARCH-017-08 requires internal APIs to remain governed products when others depend on them.',
  administrativeApisEnhanced: 'ARCH-017-08 requires administrative APIs to receive enhanced governance.',
  sdkConvenienceNoAuthority: 'ARCH-017-08 requires SDK governance not to allow client convenience to weaken provider enforcement or create an alternate domain model.',
  packagePublicationGoverned: 'ARCH-017-08 requires package and supply-chain governance for namespaces, publishers, provenance, dependencies, SBOM, integrity, registries, promotion, vulnerability, revocation, and retention.',
  docsExamplesGoverned: 'ARCH-017-08 requires documentation and examples to be owned, correlated, reviewed, safe, lifecycle labeled, validated, and defect handled.',
  testConformanceVisible: 'ARCH-017-08 requires skipped, blocked, inconclusive, and excepted tests to remain visible.',
  lifecycleGatesEvidenceScoped: 'ARCH-017-08 requires lifecycle gates to define inputs, authority, evidence, outcomes, exceptions, and registry state.',
  materialChangesClassified: 'ARCH-017-08 requires every material change to identify affected scope, owner, classification, impact, evidence, readiness, migration, recovery, risks, and exceptions.',
  unknownEscalates: 'ARCH-017-08 requires unknown ownership or compatibility to escalate rather than default to approval.',
  compatibilityMultidimensional: 'ARCH-017-08 requires compatibility governance across structural, semantic, behavioral, security, tenant, property, error, performance, interaction, SDK, and documentation dimensions.',
  releaseArtifactIdentityPreserved: 'ARCH-017-08 requires build-once-and-promote principles to preserve verified artifact identity.',
  deprecationDiscouragesNewAdoption: 'ARCH-017-08 requires deprecation to discourage new adoption while preserving contracted support for the defined period.',
  retirementFailsSafely: 'ARCH-017-08 requires retired interfaces to fail safely and consistently.',
  consumerInventoryMaintained: 'ARCH-017-08 requires consumer governance to maintain identity, purpose, versions, scope, credentials, dependencies, expectations, migration, exceptions, and observed use.',
  assuranceScoped: 'ARCH-017-08 requires assurance conclusions to identify scope, criteria, evidence, limitations, independence, and validity.',
  evidenceProtectedMinimized: 'ARCH-017-08 requires evidence to be protected, minimized, correlated, retained, and safe from credential or unrelated payload exposure.',
  attestationsScopedTimeBounded: 'ARCH-017-08 requires attestations to identify authority, scope, criteria, evidence, level, exceptions, dates, and revocation conditions.',
  auditNotApprovalProcess: 'ARCH-017-08 requires audit not to become the product approval process.',
  exceptionsLawfulScoped: 'ARCH-017-08 requires exceptions to be lawful, scoped, risk assessed, controlled, monitored, evidenced, remediated, and revocable.',
  expiredExceptionsEscalate: 'ARCH-017-08 requires expired exceptions to fail gates or create immediate issues and escalation according to risk.',
  issuesOwnedClassified: 'ARCH-017-08 requires issues and findings to have owner, classification, impact, containment, due date, treatment, evidence, and escalation state.',
  remediationValidated: 'ARCH-017-08 requires remediation closure to include corrective and preventive actions, retest or reperformance, control evidence, residual-risk decision, authority, and retained evidence.',
  conflictsEscalated: 'ARCH-017-08 requires conflicts to be escalated with requirements, authorities, options, non-waivable boundaries, deadlines, and interim controls.',
  emergencyRetrospectiveRequired: 'ARCH-017-08 requires every emergency decision to receive retrospective validation, root-cause analysis, permanent remediation, and closure authority.',
  automationFailsSafely: 'ARCH-017-08 requires automation to fail safely when authoritative inputs, ownership, or policy state cannot be established.',
  policyCodeNotSoleAuthority: 'ARCH-017-08 requires policy code not to become the sole policy authority.',
  aiConclusionsReviewed: 'ARCH-017-08 requires AI-assisted governance conclusions to have traceable inputs, context, limitations, deterministic checks, accountable review, and appeal or override paths.',
  reportingPreservesVisibility: 'ARCH-017-08 requires governance reporting to preserve classification, tenant isolation, least privilege, and material failed or excepted requirements.',
  measuresImproveOutcomes: 'ARCH-017-08 requires governance measures to improve outcomes rather than superficial compliance.'
});

const REQUIRED_FALSE = Object.freeze({
  committeesObscureOwner: 'ARCH-017-08 prohibits committees from obscuring the single accountable owner.',
  operationImpliesCompliance: 'ARCH-017-08 prohibits continued operation or absence of incidents from proving compliance or control effectiveness.',
  exceptionPermanent: 'ARCH-017-08 prohibits exceptions from becoming undocumented alternate standards.',
  automationOpaque: 'ARCH-017-08 prohibits opaque automated policy checks and governance gates.',
  lowerLevelOverridesHigherAuthority: 'ARCH-017-08 prohibits lower levels from overriding higher legal, regulatory, security, privacy, architecture, or cross-tenant requirements.',
  reviewerSilenceApproval: 'ARCH-017-08 prohibits treating reviewer silence as approval unless explicitly time-bound by process.',
  delegationAllowsImplicitRedelegation: 'ARCH-017-08 prohibits delegated authority from permitting re-delegation unless explicitly allowed.',
  unregisteredSupportedProduct: 'ARCH-017-08 prohibits treating APIs as supported products without authoritative registry records.',
  unregisteredSupportedSdk: 'ARCH-017-08 prohibits representing unregistered packages as supported XeniosAI SDKs.',
  orphanProductNewAdoption: 'ARCH-017-08 prohibits orphaned APIs or SDKs from material change or new adoption until accountability is restored.',
  lowerPolicyContradictsHigher: 'ARCH-017-08 prohibits lower-level documents from contradicting higher-authority obligations.',
  classificationGrantsAccess: 'ARCH-017-08 prohibits classification from granting access.',
  riskOwnerMissing: 'ARCH-017-08 prohibits material risk without an accountable owner.',
  detectionWithoutActionEffective: 'ARCH-017-08 prohibits detection without action from being treated as effective control.',
  duplicateCapabilityApproved: 'ARCH-017-08 requires proposals that duplicate capability, bypass owners, lack ownership, or expose implementation without business purpose to be rejected or revised.',
  contractApprovalAuthorizesProduction: 'ARCH-017-08 prohibits contract approval from automatically authorizing production exposure.',
  exposureRoutingOnly: 'ARCH-017-08 prohibits treating partner or public exposure as only a routing configuration change.',
  reachabilityGrantsAuthority: 'ARCH-017-08 prohibits reachability, catalog visibility, or package availability from granting authority.',
  storedDataJustifiesExposure: 'ARCH-017-08 prohibits exposing data merely because the underlying service stores it.',
  schemaApprovalCoversInferenceRisk: 'ARCH-017-08 prohibits schema approval from replacing semantic inference and high-volume extraction risk evaluation.',
  tenantAdminCrossTenantAuthority: 'ARCH-017-08 prohibits tenant administrators from receiving enterprise or other-tenant authority through broad SDK configuration or administrative API exposure.',
  sdkDescriptionAuthorizesAgent: 'ARCH-017-08 prohibits SDK or contract descriptions from authorizing agents to invoke operations.',
  partnerUndocumentedBranches: 'ARCH-017-08 prohibits partner-specific behavior through undocumented provider branches.',
  internalApiUngoverned: 'ARCH-017-08 prohibits internal APIs with dependencies from being ungoverned.',
  adminSdkBroadensPrivilege: 'ARCH-017-08 prohibits administrative convenience in an SDK from broadening privilege or concealing high-impact action.',
  sdkAlternateDomainModel: 'ARCH-017-08 prohibits SDK governance from creating an alternate domain model.',
  successfulPublicationProvesSafety: 'ARCH-017-08 prohibits successful package publication from proving authorization or safety.',
  materialBehaviorOnlyInExamples: 'ARCH-017-08 prohibits material behavior and obligations from existing only in examples or support messages.',
  skippedTestsCountedPassed: 'ARCH-017-08 prohibits skipped, blocked, inconclusive, and excepted tests from being counted as passed.',
  newVersionExcusesBreakingImpact: 'ARCH-017-08 prohibits a new version identifier from excusing unmanaged breaking impact.',
  releaseApprovalPermitsDrift: 'ARCH-017-08 prohibits release approval from being permanent authorization for material configuration or policy drift.',
  unresolvedConsumersIndefiniteSupport: 'ARCH-017-08 prohibits unresolved usage from creating indefinite support.',
  unknownConsumersLegitimizeUse: 'ARCH-017-08 prohibits unknown consumers from legitimizing unmanaged use.',
  assuranceAbsolute: 'ARCH-017-08 prohibits assurance from being treated as absolute or eliminating owner accountability.',
  machineEvidenceUnaudited: 'ARCH-017-08 prohibits unaudited machine-generated evidence from supporting broad conclusions.',
  screenshotBroadEvidence: 'ARCH-017-08 prohibits screenshots or isolated log lines from being sufficient for broad control conclusions.',
  assuranceAccessUnrestrictedPayloads: 'ARCH-017-08 prohibits assurance access from implying unrestricted access to production payloads, credentials, or other tenants evidence.',
  selfAttestationIndependent: 'ARCH-017-08 prohibits self-attestation from being represented as independent assurance.',
  legalObligationExceptedInternally: 'ARCH-017-08 prohibits legal prohibitions and obligations outside waiver authority from being excepted internally.',
  exceptionExtensionAutomatic: 'ARCH-017-08 prohibits automatic exception extensions.',
  severityLoweredForGate: 'ARCH-017-08 prohibits lowering issue severity to avoid release gates or overdue status.',
  remediationSymptomOnly: 'ARCH-017-08 requires remediation to address root causes and contributing conditions, not only symptoms.',
  remediatorSoleClosureAuthorityHighRisk: 'ARCH-017-08 prohibits the remediation performer from being sole closure authority for high-risk findings.',
  automatedUnsupportedConclusions: 'ARCH-017-08 prohibits automated signals from issuing unsupported conclusions beyond evaluated scope.',
  aiUnboundedDecisions: 'ARCH-017-08 prohibits AI from making unbounded legal, risk-acceptance, public-exposure, cross-tenant, exception, audit, or retirement decisions.',
  aggregateGreenHidesFailures: 'ARCH-017-08 prohibits aggregated green status from concealing failed or excepted requirements.',
  superficialMeasuresRewarded: 'ARCH-017-08 prohibits measures that encourage superficial compliance or underreporting.',
  mandatesDetailedRiskMethodology: 'ARCH-017-08 does not define detailed enterprise risk methodology, audit procedures, laws, contracts, or regulatory interpretations.',
  replacesArch012: 'ARCH-017-08 specializes ARCH-012 and does not replace enterprise governance and compliance authority.',
  replacesArch018: 'ARCH-017-08 does not replace detailed ARCH-018 multi-tenancy authority.',
  definesOperationsHealth: 'ARCH-017-08 does not define ARCH-017-09 operations, observability, performance, reliability, or service health.'
});

export class GovernanceAssuranceDescriptor {
  objectives() { return values(METADATA.objectives); }
  principles() { return values(METADATA.principles); }
  definitions() { return values(METADATA.definitions); }
  lifecycleDomains() { return values(METADATA.lifecycleDomains); }
  governanceLevels() { return values(METADATA.governanceLevels); }
  roles() { return values(METADATA.roles); }
  decisionRecordFields() { return values(METADATA.decisionRecordFields); }
  decisionClasses() { return values(METADATA.decisionClasses); }
  registrationFields() { return values(METADATA.registrationFields); }
  policyInstruments() { return values(METADATA.policyInstruments); }
  classificationDimensions() { return values(METADATA.classificationDimensions); }
  riskFactors() { return values(METADATA.riskFactors); }
  controlTypes() { return values(METADATA.controlTypes); }
  preventiveControls() { return values(METADATA.preventiveControls); }
  detectiveControls() { return values(METADATA.detectiveControls); }
  reviewAreas() { return values(METADATA.reviewAreas); }
  lifecycleGates() { return values(METADATA.lifecycleGates); }
  changeGovernanceFields() { return values(METADATA.changeGovernanceFields); }
  assuranceLevels() { return values(METADATA.assuranceLevels); }
  assuranceMethods() { return values(METADATA.assuranceMethods); }
  evidenceRecordFields() { return values(METADATA.evidenceRecordFields); }
  evidenceQualityFactors() { return values(METADATA.evidenceQualityFactors); }
  exceptionFields() { return values(METADATA.exceptionFields); }
  issueFields() { return values(METADATA.issueFields); }
  automationCapabilities() { return values(METADATA.automationCapabilities); }
  reportingFields() { return values(METADATA.reportingFields); }
  maturityLevels() { return values(METADATA.maturityLevels); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof GovernanceAssuranceProfile
      ? input
      : new GovernanceAssuranceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API and SDK Governance and Assurance profile must have a name.');
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
        errors.push(`API and SDK Governance and Assurance must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      API_SDK_GOVERNANCE_ASSURANCE_ERROR_CODE,
      'API and SDK Governance and Assurance violates ARCH-017-08.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
