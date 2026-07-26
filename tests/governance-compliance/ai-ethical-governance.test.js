import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_AGENT_GOVERNANCE_FIELDS,
  AI_AUTONOMY_LEVELS,
  AI_ETHICAL_GOVERNANCE_ARCHITECTURAL_RULES,
  AI_ETHICAL_GOVERNANCE_OBJECTIVES,
  AI_ETHICAL_GOVERNANCE_PRINCIPLES,
  AI_GOVERNANCE_ROLES,
  AI_INCIDENT_TYPES,
  AI_PROHIBITED_USE_CATEGORIES,
  AI_RISK_CLASSES,
  AI_TOOL_GOVERNANCE_FIELDS,
  AiEthicalGovernanceDescriptor,
  AiEthicalGovernanceProfile,
  FUTURE_AI_ETHICAL_GOVERNANCE_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('ai and ethical governance exposes documented objectives, principles, model, roles, inventory, use case, and risk metadata', () => {
  const descriptor = new AiEthicalGovernanceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(AI_ETHICAL_GOVERNANCE_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(AI_ETHICAL_GOVERNANCE_PRINCIPLES));
  assert.equal(descriptor.governanceModelStages().length, 8);
  assert.deepEqual(descriptor.roles(), Object.values(AI_GOVERNANCE_ROLES));
  assert.ok(descriptor.inventoryFields().includes('lifecycle-state'));
  assert.ok(descriptor.useCaseFields().includes('prohibited-behavior'));
  assert.ok(descriptor.riskClassificationFactors().includes('failure-detectability'));
  assert.deepEqual(descriptor.riskClasses(), Object.values(AI_RISK_CLASSES));
});

test('ai and ethical governance exposes model, provider, agent, prompt, context, memory, tool, autonomy, and oversight metadata', () => {
  const descriptor = new AiEthicalGovernanceDescriptor();

  assert.ok(descriptor.modelGovernanceFields().includes('training-data-information'));
  assert.ok(descriptor.modelSelectionFactors().includes('provider-reliability'));
  assert.ok(descriptor.modelVersioningFields().includes('rollback-or-substitution'));
  assert.ok(descriptor.providerGovernanceFields().includes('subprocessors'));
  assert.ok(descriptor.agentGovernanceFields().includes(AI_AGENT_GOVERNANCE_FIELDS.STOP_CONDITIONS));
  assert.ok(descriptor.multiAgentGovernanceFields().includes('human-takeover'));
  assert.ok(descriptor.promptGovernanceRequirements().includes('versioned'));
  assert.ok(descriptor.contextGovernanceRequirements().includes('tenant-isolated'));
  assert.ok(descriptor.memoryGovernanceFields().includes('confidence'));
  assert.ok(descriptor.toolGovernanceFields().includes(AI_TOOL_GOVERNANCE_FIELDS.IDEMPOTENCY));
  assert.ok(descriptor.toolInvocationFields().includes('policy-decision'));
  assert.ok(descriptor.autonomyLevels().includes(AI_AUTONOMY_LEVELS.LEVEL_5_ADAPTIVE_BOUNDED_AUTONOMY));
  assert.ok(descriptor.meaningfulOversightRequirements().includes('ability-to-stop-or-reverse'));
});

test('ai and ethical governance exposes safety, evaluation, fairness, transparency, lifecycle, incident, assurance, rules, and future metadata', () => {
  const descriptor = new AiEthicalGovernanceDescriptor();

  assert.ok(descriptor.prohibitedUseCategories().includes(AI_PROHIBITED_USE_CATEGORIES.FABRICATES_COMPLIANCE_EVIDENCE));
  assert.ok(descriptor.safetyRiskAreas().includes('prompt-injection'));
  assert.ok(descriptor.robustnessEvaluationScenarios().includes('distribution-shift'));
  assert.ok(descriptor.qualityDimensions().includes('appropriate-uncertainty'));
  assert.ok(descriptor.evaluationFields().includes('retest'));
  assert.ok(descriptor.fairnessFactors().includes('legitimate-business-objective'));
  assert.ok(descriptor.nondiscriminationFactors().includes('property-or-geographic-proxy'));
  assert.ok(descriptor.transparencyDisclosures().includes('provider-use'));
  assert.ok(descriptor.explainabilityAudiences().includes('incident-responder'));
  assert.ok(descriptor.traceabilityStages().includes('Outcome and Evidence'));
  assert.ok(descriptor.incidentTypes().includes(AI_INCIDENT_TYPES.UNCONTROLLED_AGENT_BEHAVIOR));
  assert.ok(descriptor.architecturalRules().includes(AI_ETHICAL_GOVERNANCE_ARCHITECTURAL_RULES.DISTINGUISH_CONFIDENCE_FROM_AUTHORITY_AND_CORRECTNESS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_AI_ETHICAL_GOVERNANCE_CAPABILITIES.GOVERNED_SELF_IMPROVING_AGENTS));
});

test('ai and ethical governance validates complete profiles and rejects architecture violations', () => {
  const descriptor = new AiEthicalGovernanceDescriptor();
  const valid = descriptor.validateProfile(completeProfile(descriptor));
  const invalid = descriptor.validateProfile({
    governanceName: '',
    objectives: [descriptor.objectives()[0]],
    principles: [descriptor.principles()[0]],
    governanceModelStages: [descriptor.governanceModelStages()[0]],
    roles: [descriptor.roles()[0]],
    inventoryFields: [descriptor.inventoryFields()[0]],
    useCaseFields: [descriptor.useCaseFields()[0]],
    riskClassificationFactors: [descriptor.riskClassificationFactors()[0]],
    riskClasses: [descriptor.riskClasses()[0]],
    impactAssessmentFields: [descriptor.impactAssessmentFields()[0]],
    intendedUseFields: [descriptor.intendedUseFields()[0]],
    prohibitedUseCategories: [descriptor.prohibitedUseCategories()[0]],
    modelGovernanceFields: [descriptor.modelGovernanceFields()[0]],
    modelSelectionFactors: [descriptor.modelSelectionFactors()[0]],
    modelVersioningFields: [descriptor.modelVersioningFields()[0]],
    providerGovernanceFields: [descriptor.providerGovernanceFields()[0]],
    agentGovernanceFields: [descriptor.agentGovernanceFields()[0]],
    multiAgentGovernanceFields: [descriptor.multiAgentGovernanceFields()[0]],
    promptGovernanceRequirements: [descriptor.promptGovernanceRequirements()[0]],
    contextGovernanceRequirements: [descriptor.contextGovernanceRequirements()[0]],
    memoryGovernanceFields: [descriptor.memoryGovernanceFields()[0]],
    toolGovernanceFields: [descriptor.toolGovernanceFields()[0]],
    toolInvocationFields: [descriptor.toolInvocationFields()[0]],
    autonomyLevels: [descriptor.autonomyLevels()[0]],
    humanOversightModes: [descriptor.humanOversightModes()[0]],
    meaningfulOversightRequirements: [descriptor.meaningfulOversightRequirements()[0]],
    automationBiasControls: [descriptor.automationBiasControls()[0]],
    safetyRiskAreas: [descriptor.safetyRiskAreas()[0]],
    robustnessEvaluationScenarios: [descriptor.robustnessEvaluationScenarios()[0]],
    qualityDimensions: [descriptor.qualityDimensions()[0]],
    evaluationFields: [descriptor.evaluationFields()[0]],
    evaluationDataRequirements: [descriptor.evaluationDataRequirements()[0]],
    fairnessFactors: [descriptor.fairnessFactors()[0]],
    nondiscriminationFactors: [descriptor.nondiscriminationFactors()[0]],
    transparencyDisclosures: [descriptor.transparencyDisclosures()[0]],
    explainabilityAudiences: [descriptor.explainabilityAudiences()[0]],
    traceabilityStages: [descriptor.traceabilityStages()[0]],
    privacyGovernanceAreas: [descriptor.privacyGovernanceAreas()[0]],
    securityRiskAreas: [descriptor.securityRiskAreas()[0]],
    consequentialDecisionAreas: [descriptor.consequentialDecisionAreas()[0]],
    recourseOptions: [descriptor.recourseOptions()[0]],
    ethicalReviewFactors: [descriptor.ethicalReviewFactors()[0]],
    ethicalDecisionRecordFields: [descriptor.ethicalDecisionRecordFields()[0]],
    lifecycleStates: [descriptor.lifecycleStates()[0]],
    operationalReadinessFields: [descriptor.operationalReadinessFields()[0]],
    monitoringAreas: [descriptor.monitoringAreas()[0]],
    driftAreas: [descriptor.driftAreas()[0]],
    changeTypes: [descriptor.changeTypes()[0]],
    incidentTypes: [descriptor.incidentTypes()[0]],
    incidentResponseActions: [descriptor.incidentResponseActions()[0]],
    tenantAiGovernanceFields: [descriptor.tenantAiGovernanceFields()[0]],
    propertyAiGovernanceFactors: [descriptor.propertyAiGovernanceFactors()[0]],
    supplierGovernanceFields: [descriptor.supplierGovernanceFields()[0]],
    evidenceTypes: [descriptor.evidenceTypes()[0]],
    assuranceAreas: [descriptor.assuranceAreas()[0]],
    measures: [descriptor.measures()[0]],
    qualityAttributes: [descriptor.qualityAttributes()[0]],
    architecturalRules: [descriptor.architecturalRules()[0]],
    futureCapabilities: [descriptor.futureCapabilities()[0]],
    aiHasNoInherentAuthority: false,
    purposeBeforeCapability: false,
    humanAccountabilityRequired: false,
    riskProportionateGovernance: false,
    minimumNecessaryAutonomy: false,
    evidenceBeforeTrust: false,
    explainabilityProportionateToImpact: false,
    safeFailureRequired: false,
    privacySecurityByDesign: false,
    continuousGovernanceRequired: false,
    agentAuthorityBounded: false,
    multiAgentAgreementNotAuthority: false,
    readWriteToolAccessSeparated: false,
    autonomyRequiresEvidenceApprovalFallback: false,
    meaningfulOversightRequired: false,
    providerClaimsRequireEvaluation: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesModel: true,
    prescribesAiProvider: true,
    prescribesEthicsFramework: true,
    prescribesEvaluationTool: true,
    prescribesJurisdiction: true,
    implementsAgentFramework: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /purpose-limited-ai-use/);
  assert.match(invalid.errors.join('\n'), /continuous-governance/);
  assert.match(invalid.errors.join('\n'), /tenant-ai-authority/);
  assert.match(invalid.errors.join('\n'), /failure-detectability/);
  assert.match(invalid.errors.join('\n'), /prohibited/);
  assert.match(invalid.errors.join('\n'), /fabricates-compliance-evidence/);
  assert.match(invalid.errors.join('\n'), /rollback-or-substitution/);
  assert.match(invalid.errors.join('\n'), /human-takeover/);
  assert.match(invalid.errors.join('\n'), /level-5-adaptive-bounded-autonomy/);
  assert.match(invalid.errors.join('\n'), /agreement does not create decision authority/);
  assert.match(invalid.errors.join('\n'), /Agents must not inherit unrestricted authority/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a model/);
  assert.match(invalid.errors.join('\n'), /does not implement the future ARCH-014/);
});

test('ai and ethical governance assertion rejects incomplete metadata', () => {
  class IncompleteAiEthicalGovernanceDescriptor extends AiEthicalGovernanceDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteAiEthicalGovernanceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.AI_ETHICAL_GOVERNANCE_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('ai and ethical governance descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('AiEthicalGovernanceDescriptor');

  assert.ok(descriptor instanceof AiEthicalGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  return new AiEthicalGovernanceProfile({
    governanceName: 'AI and Ethical Governance',
    objectives: descriptor.objectives(),
    principles: descriptor.principles(),
    governanceModelStages: descriptor.governanceModelStages(),
    roles: descriptor.roles(),
    inventoryFields: descriptor.inventoryFields(),
    useCaseFields: descriptor.useCaseFields(),
    riskClassificationFactors: descriptor.riskClassificationFactors(),
    riskClasses: descriptor.riskClasses(),
    impactAssessmentFields: descriptor.impactAssessmentFields(),
    intendedUseFields: descriptor.intendedUseFields(),
    prohibitedUseCategories: descriptor.prohibitedUseCategories(),
    modelGovernanceFields: descriptor.modelGovernanceFields(),
    modelSelectionFactors: descriptor.modelSelectionFactors(),
    modelVersioningFields: descriptor.modelVersioningFields(),
    providerGovernanceFields: descriptor.providerGovernanceFields(),
    agentGovernanceFields: descriptor.agentGovernanceFields(),
    multiAgentGovernanceFields: descriptor.multiAgentGovernanceFields(),
    promptGovernanceRequirements: descriptor.promptGovernanceRequirements(),
    contextGovernanceRequirements: descriptor.contextGovernanceRequirements(),
    memoryGovernanceFields: descriptor.memoryGovernanceFields(),
    toolGovernanceFields: descriptor.toolGovernanceFields(),
    toolInvocationFields: descriptor.toolInvocationFields(),
    autonomyLevels: descriptor.autonomyLevels(),
    humanOversightModes: descriptor.humanOversightModes(),
    meaningfulOversightRequirements: descriptor.meaningfulOversightRequirements(),
    automationBiasControls: descriptor.automationBiasControls(),
    safetyRiskAreas: descriptor.safetyRiskAreas(),
    robustnessEvaluationScenarios: descriptor.robustnessEvaluationScenarios(),
    qualityDimensions: descriptor.qualityDimensions(),
    evaluationFields: descriptor.evaluationFields(),
    evaluationDataRequirements: descriptor.evaluationDataRequirements(),
    fairnessFactors: descriptor.fairnessFactors(),
    nondiscriminationFactors: descriptor.nondiscriminationFactors(),
    transparencyDisclosures: descriptor.transparencyDisclosures(),
    explainabilityAudiences: descriptor.explainabilityAudiences(),
    traceabilityStages: descriptor.traceabilityStages(),
    privacyGovernanceAreas: descriptor.privacyGovernanceAreas(),
    securityRiskAreas: descriptor.securityRiskAreas(),
    consequentialDecisionAreas: descriptor.consequentialDecisionAreas(),
    recourseOptions: descriptor.recourseOptions(),
    ethicalReviewFactors: descriptor.ethicalReviewFactors(),
    ethicalDecisionRecordFields: descriptor.ethicalDecisionRecordFields(),
    lifecycleStates: descriptor.lifecycleStates(),
    operationalReadinessFields: descriptor.operationalReadinessFields(),
    monitoringAreas: descriptor.monitoringAreas(),
    driftAreas: descriptor.driftAreas(),
    changeTypes: descriptor.changeTypes(),
    incidentTypes: descriptor.incidentTypes(),
    incidentResponseActions: descriptor.incidentResponseActions(),
    tenantAiGovernanceFields: descriptor.tenantAiGovernanceFields(),
    propertyAiGovernanceFactors: descriptor.propertyAiGovernanceFactors(),
    supplierGovernanceFields: descriptor.supplierGovernanceFields(),
    evidenceTypes: descriptor.evidenceTypes(),
    assuranceAreas: descriptor.assuranceAreas(),
    measures: descriptor.measures(),
    qualityAttributes: descriptor.qualityAttributes(),
    architecturalRules: descriptor.architecturalRules(),
    futureCapabilities: descriptor.futureCapabilities()
  });
}
