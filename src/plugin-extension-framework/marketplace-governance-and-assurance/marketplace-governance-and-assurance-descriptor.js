import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { MarketplaceGovernanceAndAssuranceProfile } from '../contracts/marketplace-governance-and-assurance-profile.js';
import * as constants from '../marketplace-governance-and-assurance-constants.js';

const METADATA = Object.freeze({
  governancePrinciples: constants.GOVERNANCE_PRINCIPLES, governanceScopeAreas: constants.GOVERNANCE_SCOPE_AREAS,
  decisionRights: constants.DECISION_RIGHTS, marketplaceResponsibilities: constants.MARKETPLACE_RESPONSIBILITIES,
  marketplaceBoundaries: constants.MARKETPLACE_BOUNDARIES, listingModelFields: constants.LISTING_MODEL_FIELDS,
  publisherOnboardingEvaluations: constants.PUBLISHER_ONBOARDING_EVALUATIONS, publisherObligations: constants.PUBLISHER_OBLIGATIONS,
  reviewProfileTypes: constants.REVIEW_PROFILE_TYPES, certificationModelFields: constants.CERTIFICATION_MODEL_FIELDS,
  trustSignalTypes: constants.TRUST_SIGNAL_TYPES, reviewRatingControls: constants.REVIEW_RATING_CONTROLS,
  rankingRecommendationFactors: constants.RANKING_RECOMMENDATION_FACTORS, commercialModelManagedItems: constants.COMMERCIAL_MODEL_MANAGED_ITEMS,
  usageBillingAssuranceTraceFields: constants.USAGE_BILLING_ASSURANCE_TRACE_FIELDS,
  vulnerabilityDisclosureElements: constants.VULNERABILITY_DISCLOSURE_ELEMENTS, advisoryActionOptions: constants.ADVISORY_ACTION_OPTIONS,
  incidentGovernanceRoles: constants.INCIDENT_GOVERNANCE_ROLES, suspensionAppealRecordFields: constants.SUSPENSION_APPEAL_RECORD_FIELDS,
  publisherTerminationAddresses: constants.PUBLISHER_TERMINATION_ADDRESSES, auditEvidenceTypes: constants.AUDIT_EVIDENCE_TYPES,
  controlObjectives: constants.CONTROL_OBJECTIVES, assuranceActivities: constants.ASSURANCE_ACTIVITIES,
  exceptionRecordFields: constants.EXCEPTION_RECORD_FIELDS, findingFields: constants.FINDING_FIELDS,
  ecosystemMetrics: constants.ECOSYSTEM_METRICS, governanceForumTopics: constants.GOVERNANCE_FORUM_TOPICS,
  architecturalRules: constants.MARKETPLACE_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  marketplaceConsumesRegistryStatusWithoutExecutingOrGrantingCapabilities: 'ARCH-019-09 requires the marketplace to consume registry status without executing packages or granting capabilities.',
  listingClaimsAreTraceableAndReviewable: 'ARCH-019-09 requires listing claims to be traceable and reviewable.',
  adjustmentsPreserveOriginalRecordsAndApprovalEvidence: 'ARCH-019-09 requires usage and billing adjustments to preserve original records and approval evidence.',
  materialProcessorChangeTriggersReviewNotificationAndRenewedConsent: 'ARCH-019-09 requires material processor change to trigger review, tenant notification, and renewed consent where required.',
  reporterIdentityAndSensitiveExploitInformationAreProtected: 'ARCH-019-09 requires vulnerability reporter identity and sensitive exploit information to be protected.',
  appealDoesNotAutomaticallyRestoreExecution: 'ARCH-019-09 requires appeal to never automatically restore execution.',
  emergencyActionMayPrecedeOrdinaryNoticeWhenDelayCreatesMaterialHarm: 'ARCH-019-09 requires emergency action to be able to precede ordinary notice when delay would create material harm.',
  tenantSafetyAndRightsTakePrecedenceOverPreservingListing: 'ARCH-019-09 requires tenant safety and rights to take precedence over preserving a listing.',
  criticalOrRepeatedFindingsTriggerImmediateSuspensionOrBroaderReview: 'ARCH-019-09 requires critical or repeated findings to trigger immediate suspension or broader review.',
  runtimeEntitlementConsumesCommercialStateThroughGovernedInterfaces: 'ARCH-019-09 requires runtime entitlement to consume approved commercial state only through governed interfaces.',
  exceptionDoesNotSilentlyChangeMarketplaceTrustLabels: 'ARCH-019-09 requires an exception to never silently change marketplace trust labels.',
  metricsInterpretedWithRiskAndEcosystemMaturityContext: 'ARCH-019-09 requires ecosystem metrics to be interpreted with risk and ecosystem maturity context.'
});

const REQUIRED_FALSE = Object.freeze({
  verificationLevelImpliesPackageCertification: 'ARCH-019-09 prohibits publisher verification level from implying package certification.',
  certificationExtendsToLaterPackageVersionsOrUndeclaredBehavior: 'ARCH-019-09 prohibits certification from extending to later package versions or undeclared behavior.',
  trustLabelsUseAmbiguousUnscopedClaimsLikeSafeOrTrusted: 'ARCH-019-09 prohibits trust labels from using ambiguous claims such as “safe” or “trusted” without defined scope.',
  installationBasePresentedWithoutPrivacyPreservingAggregation: 'ARCH-019-09 prohibits installation base from being presented without privacy-preserving aggregation.',
  reviewsAcceptedWithoutEligibleRelationship: 'ARCH-019-09 prohibits reviews from being accepted without an eligible relationship such as installation or verified evaluation.',
  rankingLogicRevealsOtherTenantActivityOrSensitiveAttributes: 'ARCH-019-09 prohibits ranking logic from revealing another tenant’s activity or using inappropriate sensitive attributes.',
  paidPlacementOverridesEligibilitySecuritySuspensionOrTenantPolicy: 'ARCH-019-09 prohibits paid placement from overriding eligibility, security suspension, compatibility, or tenant policy.',
  paymentStatusInterpretedDirectlyAsSecurityAuthorityByExtensionHosts: 'ARCH-019-09 prohibits payment status from being directly interpreted by extension hosts as security authority.',
  publishersBroadenDataUseThroughMarketplaceTermsWithoutManifestPolicyChanges: 'ARCH-019-09 prohibits publishers from broadening data use through marketplace terms without corresponding manifest, policy, and installation changes.',
  advisoryActionIgnoresRiskExploitabilityTenantImpactAlternativesContinuity: 'ARCH-019-09 prohibits advisory action from ignoring risk, exploitability, tenant impact, alternatives, and continuity.',
  governanceForumsObscureDecisionRights: 'ARCH-019-09 prohibits governance forums from obscuring decision rights.',
  commercialDecisionsInfluenceSecurityAuthorization: 'ARCH-019-09 prohibits commercial decisions from influencing security authorization.'
});

export class MarketplaceGovernanceAndAssuranceDescriptor {
  governancePrinciples() { return values(METADATA.governancePrinciples); } governanceScopeAreas() { return values(METADATA.governanceScopeAreas); }
  decisionRights() { return values(METADATA.decisionRights); } marketplaceResponsibilities() { return values(METADATA.marketplaceResponsibilities); }
  marketplaceBoundaries() { return values(METADATA.marketplaceBoundaries); } listingModelFields() { return values(METADATA.listingModelFields); }
  publisherOnboardingEvaluations() { return values(METADATA.publisherOnboardingEvaluations); } publisherObligations() { return values(METADATA.publisherObligations); }
  reviewProfileTypes() { return values(METADATA.reviewProfileTypes); } certificationModelFields() { return values(METADATA.certificationModelFields); }
  trustSignalTypes() { return values(METADATA.trustSignalTypes); } reviewRatingControls() { return values(METADATA.reviewRatingControls); }
  rankingRecommendationFactors() { return values(METADATA.rankingRecommendationFactors); } commercialModelManagedItems() { return values(METADATA.commercialModelManagedItems); }
  usageBillingAssuranceTraceFields() { return values(METADATA.usageBillingAssuranceTraceFields); } vulnerabilityDisclosureElements() { return values(METADATA.vulnerabilityDisclosureElements); }
  advisoryActionOptions() { return values(METADATA.advisoryActionOptions); } incidentGovernanceRoles() { return values(METADATA.incidentGovernanceRoles); }
  suspensionAppealRecordFields() { return values(METADATA.suspensionAppealRecordFields); } publisherTerminationAddresses() { return values(METADATA.publisherTerminationAddresses); }
  auditEvidenceTypes() { return values(METADATA.auditEvidenceTypes); } controlObjectives() { return values(METADATA.controlObjectives); }
  assuranceActivities() { return values(METADATA.assuranceActivities); } exceptionRecordFields() { return values(METADATA.exceptionRecordFields); }
  findingFields() { return values(METADATA.findingFields); } ecosystemMetrics() { return values(METADATA.ecosystemMetrics); }
  governanceForumTopics() { return values(METADATA.governanceForumTopics); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof MarketplaceGovernanceAndAssuranceProfile ? input : new MarketplaceGovernanceAndAssuranceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Marketplace Governance and Assurance profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Marketplace Governance and Assurance must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.MARKETPLACE_GOVERNANCE_AND_ASSURANCE_ERROR_CODE, 'Marketplace Governance and Assurance violates ARCH-019-09.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
