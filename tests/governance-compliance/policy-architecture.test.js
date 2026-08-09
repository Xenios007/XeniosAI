import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FUTURE_POLICY_ARCHITECTURE_CAPABILITIES,
  POLICY_APPLICABILITY_ATTRIBUTES,
  POLICY_ARCHITECTURE_ARCHITECTURAL_RULES,
  POLICY_ARCHITECTURE_OBJECTIVES,
  POLICY_ARCHITECTURE_PRINCIPLES,
  POLICY_ARCHITECTURE_QUALITY_ATTRIBUTES,
  POLICY_ARTIFACT_TYPES,
  POLICY_AS_CODE_REQUIREMENTS,
  POLICY_ASSURANCE_AREAS,
  POLICY_CONFLICT_RESOLUTION_STEPS,
  POLICY_DECISION_POINTS,
  POLICY_DOMAINS,
  POLICY_ENFORCEMENT_TYPES,
  POLICY_EVALUATION_RESULT_FIELDS,
  POLICY_EVIDENCE_TYPES,
  POLICY_EXCEPTION_FIELDS,
  POLICY_HIERARCHY_LEVELS,
  POLICY_IMPLEMENTATION_MECHANISMS,
  POLICY_LIFECYCLE_STAGES,
  POLICY_METRICS,
  POLICY_NEED_SOURCES,
  POLICY_OWNERSHIP_ROLES,
  POLICY_PRECEDENCE_LEVELS,
  POLICY_QUALITY_ATTRIBUTES,
  POLICY_RECORD_FIELDS,
  POLICY_SCOPE_TYPES,
  POLICY_STATUSES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  PolicyArchitectureDescriptor,
  PolicyArchitectureProfile,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('policy architecture exposes documented objectives, principles, hierarchy, artifacts, domains, and ownership', () => {
  const descriptor = new PolicyArchitectureDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(POLICY_ARCHITECTURE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(POLICY_ARCHITECTURE_PRINCIPLES));
  assert.deepEqual(descriptor.hierarchyLevels(), Object.values(POLICY_HIERARCHY_LEVELS));
  assert.deepEqual(descriptor.artifactTypes(), Object.values(POLICY_ARTIFACT_TYPES));
  assert.deepEqual(descriptor.policyDomains(), Object.values(POLICY_DOMAINS));
  assert.deepEqual(descriptor.ownershipRoles(), Object.values(POLICY_OWNERSHIP_ROLES));
});

test('policy architecture exposes lifecycle, applicability, precedence, conflict, implementation, and enforcement metadata', () => {
  const descriptor = new PolicyArchitectureDescriptor();

  assert.ok(descriptor.recordFields().includes(POLICY_RECORD_FIELDS.RETIREMENT_PROVISIONS));
  assert.ok(descriptor.lifecycleStages().includes(POLICY_LIFECYCLE_STAGES.RETIRE_OR_REPLACE));
  assert.ok(descriptor.needSources().includes(POLICY_NEED_SOURCES.ETHICAL_COMMITMENT));
  assert.ok(descriptor.statuses().includes(POLICY_STATUSES.TEMPORARILY_SUSPENDED));
  assert.ok(descriptor.applicabilityAttributes().includes(POLICY_APPLICABILITY_ATTRIBUTES.AI_RISK_CLASS));
  assert.ok(descriptor.scopeTypes().includes(POLICY_SCOPE_TYPES.AI_USE_SPECIFIC));
  assert.ok(descriptor.precedenceLevels().includes(POLICY_PRECEDENCE_LEVELS.AUTOMATED_RULES_AND_CONFIGURATION));
  assert.ok(descriptor.conflictResolutionSteps().includes(POLICY_CONFLICT_RESOLUTION_STEPS.MONITOR_CONTINUING_VALIDITY));
  assert.ok(descriptor.implementationMechanisms().includes(POLICY_IMPLEMENTATION_MECHANISMS.AI_GUARDRAILS));
  assert.ok(descriptor.enforcementTypes().includes(POLICY_ENFORCEMENT_TYPES.ARCHITECTURAL));
  assert.ok(descriptor.decisionPoints().includes(POLICY_DECISION_POINTS.AI_TOOL_INVOCATION));
});

test('policy architecture exposes policy-as-code, evidence, assurance, metrics, quality, rules, and future metadata', () => {
  const descriptor = new PolicyArchitectureDescriptor();

  assert.ok(descriptor.policyAsCodeRequirements().includes(POLICY_AS_CODE_REQUIREMENTS.INDEPENDENTLY_ASSURED));
  assert.ok(descriptor.evaluationResultFields().includes(POLICY_EVALUATION_RESULT_FIELDS.CONFIDENCE_IF_INFERENCE_USED));
  assert.ok(descriptor.exceptionFields().includes(POLICY_EXCEPTION_FIELDS.REMEDIATION_PLAN));
  assert.ok(descriptor.evidenceTypes().includes(POLICY_EVIDENCE_TYPES.AI_DECISIONS));
  assert.ok(descriptor.assuranceAreas().includes(POLICY_ASSURANCE_AREAS.CONFLICT_MANAGEMENT));
  assert.ok(descriptor.metrics().includes(POLICY_METRICS.SUPERSEDED_RULE_REMOVAL));
  assert.ok(descriptor.policyQualityAttributes().includes(POLICY_QUALITY_ATTRIBUTES.TECHNOLOGY_INDEPENDENT));
  assert.ok(descriptor.qualityAttributes().includes(POLICY_ARCHITECTURE_QUALITY_ATTRIBUTES.INTEROPERABILITY));
  assert.ok(descriptor.architecturalRules().includes(POLICY_ARCHITECTURE_ARCHITECTURAL_RULES.GOVERN_AI_INFERENCE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_POLICY_ARCHITECTURE_CAPABILITIES.AI_ASSISTED_POLICY_IMPACT_ANALYSIS));
});

test('policy architecture validates complete profiles and rejects architecture violations', () => {
  const descriptor = new PolicyArchitectureDescriptor();
  const valid = descriptor.validateProfile(new PolicyArchitectureProfile({
    policyArchitectureName: 'Policy Architecture',
    objectives: Object.values(POLICY_ARCHITECTURE_OBJECTIVES),
    principles: Object.values(POLICY_ARCHITECTURE_PRINCIPLES),
    hierarchyLevels: Object.values(POLICY_HIERARCHY_LEVELS),
    artifactTypes: Object.values(POLICY_ARTIFACT_TYPES),
    policyDomains: Object.values(POLICY_DOMAINS),
    ownershipRoles: Object.values(POLICY_OWNERSHIP_ROLES),
    recordFields: Object.values(POLICY_RECORD_FIELDS),
    lifecycleStages: Object.values(POLICY_LIFECYCLE_STAGES),
    needSources: Object.values(POLICY_NEED_SOURCES),
    statuses: Object.values(POLICY_STATUSES),
    applicabilityAttributes: Object.values(POLICY_APPLICABILITY_ATTRIBUTES),
    scopeTypes: Object.values(POLICY_SCOPE_TYPES),
    precedenceLevels: Object.values(POLICY_PRECEDENCE_LEVELS),
    conflictResolutionSteps: Object.values(POLICY_CONFLICT_RESOLUTION_STEPS),
    implementationMechanisms: Object.values(POLICY_IMPLEMENTATION_MECHANISMS),
    enforcementTypes: Object.values(POLICY_ENFORCEMENT_TYPES),
    decisionPoints: Object.values(POLICY_DECISION_POINTS),
    policyAsCodeRequirements: Object.values(POLICY_AS_CODE_REQUIREMENTS),
    evaluationResultFields: Object.values(POLICY_EVALUATION_RESULT_FIELDS),
    exceptionFields: Object.values(POLICY_EXCEPTION_FIELDS),
    evidenceTypes: Object.values(POLICY_EVIDENCE_TYPES),
    assuranceAreas: Object.values(POLICY_ASSURANCE_AREAS),
    metrics: Object.values(POLICY_METRICS),
    policyQualityAttributes: Object.values(POLICY_QUALITY_ATTRIBUTES),
    qualityAttributes: Object.values(POLICY_ARCHITECTURE_QUALITY_ATTRIBUTES),
    architecturalRules: Object.values(POLICY_ARCHITECTURE_ARCHITECTURAL_RULES),
    futureCapabilities: Object.values(FUTURE_POLICY_ARCHITECTURE_CAPABILITIES)
  }));
  const invalid = descriptor.validateProfile({
    policyArchitectureName: '',
    objectives: [POLICY_ARCHITECTURE_OBJECTIVES.CLEAR_AUTHORIZED_ENTERPRISE_INTENT],
    principles: [POLICY_ARCHITECTURE_PRINCIPLES.PURPOSE_BEFORE_RULE],
    hierarchyLevels: [POLICY_HIERARCHY_LEVELS.ENTERPRISE_PURPOSE_AND_VALUES],
    artifactTypes: [POLICY_ARTIFACT_TYPES.POLICY],
    policyDomains: [POLICY_DOMAINS.ENTERPRISE_GOVERNANCE],
    ownershipRoles: [POLICY_OWNERSHIP_ROLES.POLICY_OWNER],
    recordFields: [POLICY_RECORD_FIELDS.POLICY_IDENTIFIER],
    lifecycleStages: [POLICY_LIFECYCLE_STAGES.IDENTIFY_NEED],
    needSources: [POLICY_NEED_SOURCES.ENTERPRISE_STRATEGY],
    statuses: [POLICY_STATUSES.PROPOSED],
    applicabilityAttributes: [POLICY_APPLICABILITY_ATTRIBUTES.LEGAL_ENTITY],
    scopeTypes: [POLICY_SCOPE_TYPES.ENTERPRISE_WIDE],
    precedenceLevels: [POLICY_PRECEDENCE_LEVELS.LAW_AND_REGULATION],
    conflictResolutionSteps: [POLICY_CONFLICT_RESOLUTION_STEPS.IDENTIFY_AUTHORITATIVE_SOURCES],
    implementationMechanisms: [POLICY_IMPLEMENTATION_MECHANISMS.ARCHITECTURE],
    enforcementTypes: [POLICY_ENFORCEMENT_TYPES.PREVENTIVE],
    decisionPoints: [POLICY_DECISION_POINTS.DESIGN_TIME],
    policyAsCodeRequirements: [POLICY_AS_CODE_REQUIREMENTS.TRACEABLE_TO_APPROVED_POLICY],
    evaluationResultFields: [POLICY_EVALUATION_RESULT_FIELDS.POLICY_IDENTIFIER],
    exceptionFields: [POLICY_EXCEPTION_FIELDS.POLICY_AND_REQUIREMENT],
    evidenceTypes: [POLICY_EVIDENCE_TYPES.APPROVAL],
    assuranceAreas: [POLICY_ASSURANCE_AREAS.AUTHORITY],
    metrics: [POLICY_METRICS.VALID_OWNERS],
    policyQualityAttributes: [POLICY_QUALITY_ATTRIBUTES.AUTHORIZED],
    qualityAttributes: [POLICY_ARCHITECTURE_QUALITY_ATTRIBUTES.CONSISTENCY],
    architecturalRules: [POLICY_ARCHITECTURE_ARCHITECTURAL_RULES.DEFINE_PURPOSE_AND_AUTHORITY],
    futureCapabilities: [FUTURE_POLICY_ARCHITECTURE_CAPABILITIES.SEMANTIC_POLICY_MODELS],
    purposeRequired: false,
    authorityExplicit: false,
    technologyIndependent: false,
    applicabilityDeterminable: false,
    lowerLevelRulesAlignUpward: false,
    controlsImplementPolicy: false,
    exceptionsGoverned: false,
    changeControlled: false,
    humanReadablePolicyAuthoritative: false,
    policyAsCodeImplementationOnly: false,
    codeRepositoryAccessNotPolicyAuthority: false,
    aiInferenceGoverned: false,
    probabilisticOutputNotCertainCompliance: false,
    tenantPolicyCannotWeakenMandatoryControls: false,
    policyExceptionCannotAuthorizeUnlawfulBehavior: false,
    evidencePreservesVersionAndApplicability: false,
    metricsEvaluateEffectiveness: false,
    policyGovernsArchitectureWithoutReplacingDesign: false,
    vendorNeutral: false,
    prescribesLegalInterpretation: true,
    prescribesImplementationTechnology: true,
    implementsRuntimePolicyEngine: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /consistent-decision-boundaries/);
  assert.match(invalid.errors.join('\n'), /Configurations, Rules, and Automated Enforcement/);
  assert.match(invalid.errors.join('\n'), /decision-table/);
  assert.match(invalid.errors.join('\n'), /human-resources-where-applicable/);
  assert.match(invalid.errors.join('\n'), /applicability-owner/);
  assert.match(invalid.errors.join('\n'), /retirement-provisions/);
  assert.match(invalid.errors.join('\n'), /Retire or Replace/);
  assert.match(invalid.errors.join('\n'), /ethical-commitment/);
  assert.match(invalid.errors.join('\n'), /temporarily-suspended/);
  assert.match(invalid.errors.join('\n'), /ai-risk-class/);
  assert.match(invalid.errors.join('\n'), /ai-use-specific/);
  assert.match(invalid.errors.join('\n'), /automated-rules-and-configuration/);
  assert.match(invalid.errors.join('\n'), /monitor-continuing-validity/);
  assert.match(invalid.errors.join('\n'), /ai-guardrails/);
  assert.match(invalid.errors.join('\n'), /architectural/);
  assert.match(invalid.errors.join('\n'), /ai-tool-invocation/);
  assert.match(invalid.errors.join('\n'), /independently-assured/);
  assert.match(invalid.errors.join('\n'), /confidence-if-inference-used/);
  assert.match(invalid.errors.join('\n'), /remediation-plan/);
  assert.match(invalid.errors.join('\n'), /ai-decisions/);
  assert.match(invalid.errors.join('\n'), /conflict-management/);
  assert.match(invalid.errors.join('\n'), /superseded-rule-removal/);
  assert.match(invalid.errors.join('\n'), /technology-independent/);
  assert.match(invalid.errors.join('\n'), /interoperability/);
  assert.match(invalid.errors.join('\n'), /govern-ai-assisted-policy-inference/);
  assert.match(invalid.errors.join('\n'), /ai-assisted-policy-impact-analysis/);
  assert.match(invalid.errors.join('\n'), /must state its purpose/);
  assert.match(invalid.errors.join('\n'), /Human-readable approved policy/);
  assert.match(invalid.errors.join('\n'), /Code repository access/);
  assert.match(invalid.errors.join('\n'), /certain compliance/);
  assert.match(invalid.errors.join('\n'), /unlawful behavior/);
  assert.match(invalid.errors.join('\n'), /runtime policy engine/);
});

test('policy architecture assertion rejects incomplete metadata', () => {
  class IncompletePolicyArchitectureDescriptor extends PolicyArchitectureDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompletePolicyArchitectureDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.POLICY_ARCHITECTURE_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('policy architecture descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('PolicyArchitectureDescriptor');

  assert.ok(descriptor instanceof PolicyArchitectureDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
