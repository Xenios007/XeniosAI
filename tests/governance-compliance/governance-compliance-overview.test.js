import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_GOVERNANCE_LIFECYCLE_STAGES,
  APPLICABILITY_DIMENSIONS,
  COMPLIANCE_POSTURE_STATES,
  FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES,
  GOVERNANCE_ARCHITECTURE_BOUNDARIES,
  GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES,
  GOVERNANCE_ARTIFACT_TYPES,
  GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES,
  GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES,
  GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES,
  GOVERNANCE_CONTROL_TYPES,
  GOVERNANCE_DECISION_TYPES,
  GOVERNANCE_DOMAINS,
  GOVERNANCE_EVIDENCE_QUALITIES,
  GOVERNANCE_LIFECYCLE_STAGES,
  GOVERNANCE_OWNED_OBJECTS,
  GOVERNANCE_REPORTING_AUDIENCES,
  GOVERNANCE_TRACEABILITY_STAGES,
  GOVERNING_ACTORS,
  GovernanceComplianceOverviewDescriptor,
  GovernanceComplianceOverviewProfile,
  HUMAN_OVERSIGHT_REQUIREMENTS,
  OBLIGATION_INTERPRETATION_FIELDS,
  OBLIGATION_SOURCES,
  THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('governance compliance overview exposes documented objectives, landscape, domains, and traceability', () => {
  const descriptor = new GovernanceComplianceOverviewDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES));
  assert.deepEqual(descriptor.landscapeStages(), Object.values(GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES));
  assert.deepEqual(descriptor.domains(), Object.values(GOVERNANCE_DOMAINS));
  assert.deepEqual(descriptor.traceabilityStages(), Object.values(GOVERNANCE_TRACEABILITY_STAGES));
});

test('governance compliance overview exposes actors, artifacts, obligations, controls, evidence, and posture', () => {
  const descriptor = new GovernanceComplianceOverviewDescriptor();

  assert.ok(descriptor.governingActors().includes(GOVERNING_ACTORS.AI_GOVERNANCE_AUTHORITY));
  assert.ok(descriptor.ownedObjects().includes(GOVERNANCE_OWNED_OBJECTS.ARCHITECTURE_DECISIONS));
  assert.ok(descriptor.artifactTypes().includes(GOVERNANCE_ARTIFACT_TYPES.REMEDIATION));
  assert.ok(descriptor.obligationSources().includes(OBLIGATION_SOURCES.ETHICAL_COMMITMENTS));
  assert.ok(descriptor.obligationInterpretationFields().includes(OBLIGATION_INTERPRETATION_FIELDS.REVIEW_TRIGGER));
  assert.ok(descriptor.applicabilityDimensions().includes(APPLICABILITY_DIMENSIONS.AI_USE_CASE));
  assert.ok(descriptor.controlTypes().includes(GOVERNANCE_CONTROL_TYPES.COMPENSATING));
  assert.ok(descriptor.evidenceQualities().includes(GOVERNANCE_EVIDENCE_QUALITIES.REPRODUCIBILITY));
  assert.ok(descriptor.lifecycleStages().includes(GOVERNANCE_LIFECYCLE_STAGES.RESOLVE_FINDINGS_AND_EXCEPTIONS));
  assert.ok(descriptor.decisionTypes().includes(GOVERNANCE_DECISION_TYPES.AI_USE_AUTHORIZATION));
  assert.ok(descriptor.aiGovernanceLifecycleStages().includes(AI_GOVERNANCE_LIFECYCLE_STAGES.RESTRICTION_REPLACEMENT_OR_RETIREMENT));
  assert.ok(descriptor.humanOversightRequirements().includes(HUMAN_OVERSIGHT_REQUIREMENTS.FREEDOM_FROM_AUTOMATION_BIAS));
  assert.ok(descriptor.compliancePostureStates().includes(COMPLIANCE_POSTURE_STATES.INTERPRETATION_PENDING));
  assert.ok(descriptor.thirdPartyLifecycleStages().includes(THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES.RENEWAL_RESTRICTION_OR_EXIT));
  assert.ok(descriptor.reportingAudiences().includes(GOVERNANCE_REPORTING_AUDIENCES.REGULATORS_WHERE_APPLICABLE));
  assert.ok(descriptor.architectureRelationshipStages().includes(GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES.GOVERNANCE_RISK_POLICY_CONTROLS_AND_COMPLIANCE));
  assert.ok(descriptor.architectureBoundaries().includes(GOVERNANCE_ARCHITECTURE_BOUNDARIES.GOVERNANCE_PRODUCTS));
  assert.ok(descriptor.qualityAttributes().includes(GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES.ENTERPRISE_TRUST));
  assert.ok(descriptor.architecturalRules().includes(GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES.GOVERN_AI_LIFECYCLE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES.DIGITAL_GOVERNANCE_TWINS));
});

test('governance compliance overview validates complete governed overview profiles', () => {
  const descriptor = new GovernanceComplianceOverviewDescriptor();
  const valid = descriptor.validateProfile(
    new GovernanceComplianceOverviewProfile({
      overviewName: 'Governance and Compliance Overview',
      objectives: Object.values(GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES),
      landscapeStages: Object.values(GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES),
      domains: Object.values(GOVERNANCE_DOMAINS),
      governingActors: Object.values(GOVERNING_ACTORS),
      ownedObjects: Object.values(GOVERNANCE_OWNED_OBJECTS),
      artifactTypes: Object.values(GOVERNANCE_ARTIFACT_TYPES),
      obligationSources: Object.values(OBLIGATION_SOURCES),
      obligationInterpretationFields: Object.values(OBLIGATION_INTERPRETATION_FIELDS),
      applicabilityDimensions: Object.values(APPLICABILITY_DIMENSIONS),
      traceabilityStages: Object.values(GOVERNANCE_TRACEABILITY_STAGES),
      controlTypes: Object.values(GOVERNANCE_CONTROL_TYPES),
      evidenceQualities: Object.values(GOVERNANCE_EVIDENCE_QUALITIES),
      lifecycleStages: Object.values(GOVERNANCE_LIFECYCLE_STAGES),
      decisionTypes: Object.values(GOVERNANCE_DECISION_TYPES),
      aiGovernanceLifecycleStages: Object.values(AI_GOVERNANCE_LIFECYCLE_STAGES),
      humanOversightRequirements: Object.values(HUMAN_OVERSIGHT_REQUIREMENTS),
      compliancePostureStates: Object.values(COMPLIANCE_POSTURE_STATES),
      thirdPartyLifecycleStages: Object.values(THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES),
      reportingAudiences: Object.values(GOVERNANCE_REPORTING_AUDIENCES),
      architectureRelationshipStages: Object.values(GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES),
      architectureBoundaries: Object.values(GOVERNANCE_ARCHITECTURE_BOUNDARIES),
      qualityAttributes: Object.values(GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES),
      architecturalRules: Object.values(GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    overviewName: '',
    objectives: [GOVERNANCE_COMPLIANCE_OVERVIEW_OBJECTIVES.ACCOUNTABLE_ENTERPRISE_DIRECTION],
    landscapeStages: [GOVERNANCE_COMPLIANCE_LANDSCAPE_STAGES.ENTERPRISE_PURPOSE_VALUES_AND_STRATEGY],
    domains: [GOVERNANCE_DOMAINS.ENTERPRISE_GOVERNANCE],
    governingActors: [GOVERNING_ACTORS.ENTERPRISE_GOVERNING_AUTHORITY],
    ownedObjects: [GOVERNANCE_OWNED_OBJECTS.POLICIES],
    artifactTypes: [GOVERNANCE_ARTIFACT_TYPES.POLICY],
    obligationSources: [OBLIGATION_SOURCES.LAWS],
    obligationInterpretationFields: [OBLIGATION_INTERPRETATION_FIELDS.AUTHORITATIVE_SOURCE],
    applicabilityDimensions: [APPLICABILITY_DIMENSIONS.JURISDICTION],
    traceabilityStages: [GOVERNANCE_TRACEABILITY_STAGES.ENTERPRISE_OBJECTIVE],
    controlTypes: [GOVERNANCE_CONTROL_TYPES.PREVENTIVE],
    evidenceQualities: [GOVERNANCE_EVIDENCE_QUALITIES.INTEGRITY],
    lifecycleStages: [GOVERNANCE_LIFECYCLE_STAGES.ESTABLISH_PURPOSE_AND_ACCOUNTABILITY],
    decisionTypes: [GOVERNANCE_DECISION_TYPES.POLICY_APPROVAL],
    aiGovernanceLifecycleStages: [AI_GOVERNANCE_LIFECYCLE_STAGES.PURPOSE],
    humanOversightRequirements: [HUMAN_OVERSIGHT_REQUIREMENTS.SUFFICIENT_INFORMATION],
    compliancePostureStates: [COMPLIANCE_POSTURE_STATES.IN_SCOPE],
    thirdPartyLifecycleStages: [THIRD_PARTY_GOVERNANCE_LIFECYCLE_STAGES.NEED_AND_CLASSIFICATION],
    reportingAudiences: [GOVERNANCE_REPORTING_AUDIENCES.ENTERPRISE_LEADERS],
    architectureRelationshipStages: [GOVERNANCE_ARCHITECTURE_RELATIONSHIP_STAGES.ENTERPRISE_ARCHITECTURE],
    architectureBoundaries: [GOVERNANCE_ARCHITECTURE_BOUNDARIES.LEGAL_ADVICE],
    qualityAttributes: [GOVERNANCE_COMPLIANCE_QUALITY_ATTRIBUTES.ACCOUNTABILITY],
    architecturalRules: [GOVERNANCE_COMPLIANCE_ARCHITECTURAL_RULES.BEGIN_WITH_ENTERPRISE_OBJECTIVES_AND_OBLIGATIONS],
    futureCapabilities: [FUTURE_GOVERNANCE_COMPLIANCE_CAPABILITIES.MACHINE_READABLE_OBLIGATIONS],
    governanceContinuousEnterpriseCapability: false,
    complianceContinuousCapability: false,
    accountableOwnershipRequired: false,
    applicabilityExplicitMachineReadableWherePractical: false,
    traceabilityEndToEnd: false,
    evidenceByDesignRequired: false,
    assuranceIndependenceRiskProportionate: false,
    aiGovernanceLifecycleCovered: false,
    humanOversightMeaningful: false,
    exceptionsTemporaryExpiring: false,
    remediationVerifiedBeforeClosure: false,
    tenantPropertyControlsCannotSilentlyWeaken: false,
    vendorNeutral: false,
    technologyIndependent: false,
    replacesLegalAdvice: true,
    guaranteesComplianceOrCertification: true,
    replacesSecurityArchitecture: true,
    replacesOperationalProcedures: true,
    replacesAiAgentFramework: true,
    replacesDataOrKnowledgeArchitecture: true,
    prescribesGovernanceProducts: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /explicit-authority/);
  assert.match(invalid.errors.join('\n'), /Findings, Exceptions, Remediation, and Improvement/);
  assert.match(invalid.errors.join('\n'), /ai-and-ethical-governance/);
  assert.match(invalid.errors.join('\n'), /remediation-owners/);
  assert.match(invalid.errors.join('\n'), /architecture-decisions/);
  assert.match(invalid.errors.join('\n'), /remediation/);
  assert.match(invalid.errors.join('\n'), /ethical-commitments/);
  assert.match(invalid.errors.join('\n'), /review-trigger/);
  assert.match(invalid.errors.join('\n'), /ai-use-case/);
  assert.match(invalid.errors.join('\n'), /Compliance Posture or Finding/);
  assert.match(invalid.errors.join('\n'), /compensating/);
  assert.match(invalid.errors.join('\n'), /reproducibility/);
  assert.match(invalid.errors.join('\n'), /Improve Governance and Architecture/);
  assert.match(invalid.errors.join('\n'), /ai-use-authorization/);
  assert.match(invalid.errors.join('\n'), /Restriction, Replacement, or Retirement/);
  assert.match(invalid.errors.join('\n'), /freedom-from-automation-bias/);
  assert.match(invalid.errors.join('\n'), /interpretation-pending/);
  assert.match(invalid.errors.join('\n'), /Renewal, Restriction, or Exit/);
  assert.match(invalid.errors.join('\n'), /regulators-where-applicable/);
  assert.match(invalid.errors.join('\n'), /Governance, Risk, Policy, Controls, and Compliance/);
  assert.match(invalid.errors.join('\n'), /governance-products/);
  assert.match(invalid.errors.join('\n'), /enterprise-trust/);
  assert.match(invalid.errors.join('\n'), /govern-ai-throughout-its-lifecycle/);
  assert.match(invalid.errors.join('\n'), /digital-governance-twins/);
  assert.match(invalid.errors.join('\n'), /continuous enterprise capability/);
  assert.match(invalid.errors.join('\n'), /end-to-end traceability/);
  assert.match(invalid.errors.join('\n'), /normal operation/);
  assert.match(invalid.errors.join('\n'), /legal advice/);
  assert.match(invalid.errors.join('\n'), /certification/);
});

test('governance compliance overview assertion rejects incomplete metadata', () => {
  class IncompleteGovernanceComplianceOverviewDescriptor extends GovernanceComplianceOverviewDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteGovernanceComplianceOverviewDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.GOVERNANCE_COMPLIANCE_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('governance compliance overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('GovernanceComplianceOverviewDescriptor');

  assert.ok(descriptor instanceof GovernanceComplianceOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
