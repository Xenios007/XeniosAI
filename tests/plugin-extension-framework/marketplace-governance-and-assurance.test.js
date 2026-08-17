import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { GOVERNANCE_PRINCIPLES, MARKETPLACE_ARCHITECTURAL_RULES, MARKETPLACE_GOVERNANCE_AND_ASSURANCE_ERROR_CODE, VULNERABILITY_DISCLOSURE_ELEMENTS, MarketplaceGovernanceAndAssuranceDescriptor, MarketplaceGovernanceAndAssuranceProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['governancePrinciples', 'governanceScopeAreas', 'decisionRights', 'marketplaceResponsibilities', 'marketplaceBoundaries', 'listingModelFields', 'publisherOnboardingEvaluations', 'publisherObligations', 'reviewProfileTypes', 'certificationModelFields', 'trustSignalTypes', 'reviewRatingControls', 'rankingRecommendationFactors', 'commercialModelManagedItems', 'usageBillingAssuranceTraceFields', 'vulnerabilityDisclosureElements', 'advisoryActionOptions', 'incidentGovernanceRoles', 'suspensionAppealRecordFields', 'publisherTerminationAddresses', 'auditEvidenceTypes', 'controlObjectives', 'assuranceActivities', 'exceptionRecordFields', 'findingFields', 'ecosystemMetrics', 'governanceForumTopics', 'architecturalRules'];

test('ARCH-019-09 exposes governance principle, scope, and decision-rights metadata', () => { const descriptor = new MarketplaceGovernanceAndAssuranceDescriptor(); assert.ok(descriptor.governancePrinciples().includes(GOVERNANCE_PRINCIPLES.DISCOVERY_SEPARATE_FROM_RUNTIME_AUTHORITY)); assert.ok(descriptor.governanceScopeAreas().includes('suspension-revocation-and-appeal')); assert.ok(descriptor.decisionRights().includes('accept-exception:designated-risk-owner')); assert.ok(descriptor.marketplaceBoundaries().includes('certify-behavior-through-popularity')); });

test('ARCH-019-09 exposes listing, publisher, review, and certification metadata', () => { const descriptor = new MarketplaceGovernanceAndAssuranceDescriptor(); assert.ok(descriptor.listingModelFields().includes('reviews-and-disclosures')); assert.ok(descriptor.publisherObligations().includes('disclose-material-conflicts-and-external-processors')); assert.ok(descriptor.reviewProfileTypes().includes('ai-safety-evaluation')); assert.ok(descriptor.certificationModelFields().includes('rerun-triggers')); });

test('ARCH-019-09 exposes trust, ranking, commercial, and vulnerability metadata', () => { const descriptor = new MarketplaceGovernanceAndAssuranceDescriptor(); assert.ok(descriptor.trustSignalTypes().includes('review-integrity-indicators')); assert.ok(descriptor.rankingRecommendationFactors().includes('tenant-preference')); assert.ok(descriptor.commercialModelManagedItems().includes('publisher-revenue-share')); assert.ok(descriptor.vulnerabilityDisclosureElements().includes(VULNERABILITY_DISCLOSURE_ELEMENTS.EMBARGO_HANDLING)); });

test('ARCH-019-09 exposes incident, assurance, exception, and metrics metadata', () => { const descriptor = new MarketplaceGovernanceAndAssuranceDescriptor(); assert.ok(descriptor.incidentGovernanceRoles().includes('incident-commander')); assert.ok(descriptor.assuranceActivities().includes('marketplace-integrity-analysis')); assert.ok(descriptor.exceptionRecordFields().includes('compensating-controls')); assert.ok(descriptor.findingFields().includes('closure-evidence')); assert.ok(descriptor.ecosystemMetrics().includes('exception-age-and-recurrence')); assert.ok(descriptor.architecturalRules().includes(MARKETPLACE_ARCHITECTURAL_RULES.PAID_PLACEMENT_CANNOT_BYPASS_POLICY_SUSPENSION)); });

test('ARCH-019-09 validates profiles and rejects governance shortcuts', () => {
  const descriptor = new MarketplaceGovernanceAndAssuranceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ appealDoesNotAutomaticallyRestoreExecution: false, tenantSafetyAndRightsTakePrecedenceOverPreservingListing: false, verificationLevelImpliesPackageCertification: true, paidPlacementOverridesEligibilitySecuritySuspensionOrTenantPolicy: true, paymentStatusInterpretedDirectlyAsSecurityAuthorityByExtensionHosts: true, commercialDecisionsInfluenceSecurityAuthorization: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /automatically restore execution/);
  assert.match(validation.errors.join('\n'), /precedence over preserving a listing/);
  assert.match(validation.errors.join('\n'), /implying package certification/);
  assert.match(validation.errors.join('\n'), /paid placement/);
  assert.match(validation.errors.join('\n'), /security authority/);
  assert.match(validation.errors.join('\n'), /influencing security authorization/);
});

test('ARCH-019-09 detects incomplete marketplace governance metadata', () => { class IncompleteDescriptor extends MarketplaceGovernanceAndAssuranceDescriptor { decisionRights() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === MARKETPLACE_GOVERNANCE_AND_ASSURANCE_ERROR_CODE); });

test('ARCH-019-09 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('MarketplaceGovernanceAndAssuranceDescriptor');
  assert.ok(descriptor instanceof MarketplaceGovernanceAndAssuranceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.decisionRights.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new MarketplaceGovernanceAndAssuranceProfile({ profileName: 'Marketplace Governance and Assurance', ...metadata }); }
