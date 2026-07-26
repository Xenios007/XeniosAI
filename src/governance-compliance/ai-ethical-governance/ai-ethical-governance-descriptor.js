import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_AGENT_GOVERNANCE_FIELDS,
  AI_ASSURANCE_AREAS,
  AI_AUTONOMY_LEVELS,
  AI_CHANGE_TYPES,
  AI_CONTEXT_GOVERNANCE_REQUIREMENTS,
  AI_DRIFT_AREAS,
  AI_ETHICAL_GOVERNANCE_ARCHITECTURAL_RULES,
  AI_ETHICAL_GOVERNANCE_MODEL_STAGES,
  AI_ETHICAL_GOVERNANCE_OBJECTIVES,
  AI_ETHICAL_GOVERNANCE_PRINCIPLES,
  AI_ETHICAL_GOVERNANCE_QUALITY_ATTRIBUTES,
  AI_EVALUATION_DATA_REQUIREMENTS,
  AI_EVALUATION_FIELDS,
  AI_EXPLAINABILITY_AUDIENCES,
  AI_FAIRNESS_FACTORS,
  AI_GOVERNANCE_EVIDENCE_TYPES,
  AI_GOVERNANCE_MEASURES,
  AI_GOVERNANCE_ROLES,
  AI_HUMAN_OVERSIGHT_MODES,
  AI_IMPACT_ASSESSMENT_FIELDS,
  AI_INCIDENT_RESPONSE_ACTIONS,
  AI_INCIDENT_TYPES,
  AI_INTENDED_USE_FIELDS,
  AI_LIFECYCLE_STATES,
  AI_MEMORY_GOVERNANCE_FIELDS,
  AI_MODEL_GOVERNANCE_FIELDS,
  AI_MODEL_SELECTION_FACTORS,
  AI_MODEL_VERSIONING_FIELDS,
  AI_MONITORING_AREAS,
  AI_NONDISCRIMINATION_FACTORS,
  AI_OPERATIONAL_READINESS_FIELDS,
  AI_PRIVACY_GOVERNANCE_AREAS,
  AI_PROHIBITED_USE_CATEGORIES,
  AI_PROVIDER_GOVERNANCE_FIELDS,
  AI_QUALITY_DIMENSIONS,
  AI_RECOURSE_OPTIONS,
  AI_RISK_CLASSES,
  AI_RISK_CLASSIFICATION_FACTORS,
  AI_ROBUSTNESS_EVALUATION_SCENARIOS,
  AI_SAFETY_RISK_AREAS,
  AI_SECURITY_RISK_AREAS,
  AI_SUPPLIER_GOVERNANCE_FIELDS,
  AI_SYSTEM_INVENTORY_FIELDS,
  AI_TOOL_GOVERNANCE_FIELDS,
  AI_TOOL_INVOCATION_FIELDS,
  AI_TRACEABILITY_STAGES,
  AI_TRANSPARENCY_DISCLOSURES,
  AI_USE_CASE_FIELDS,
  AUTOMATION_BIAS_CONTROLS,
  CONSEQUENTIAL_DECISION_AREAS,
  ETHICAL_DECISION_RECORD_FIELDS,
  ETHICAL_REVIEW_FACTORS,
  FUTURE_AI_ETHICAL_GOVERNANCE_CAPABILITIES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  MEANINGFUL_OVERSIGHT_REQUIREMENTS,
  MULTI_AGENT_GOVERNANCE_FIELDS,
  PROMPT_GOVERNANCE_REQUIREMENTS,
  PROPERTY_AI_GOVERNANCE_FACTORS,
  TENANT_AI_GOVERNANCE_FIELDS
} from '../constants.js';
import { AiEthicalGovernanceProfile } from '../contracts/ai-ethical-governance-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class AiEthicalGovernanceDescriptor {
  objectives() { return values(AI_ETHICAL_GOVERNANCE_OBJECTIVES); }
  principles() { return values(AI_ETHICAL_GOVERNANCE_PRINCIPLES); }
  governanceModelStages() { return values(AI_ETHICAL_GOVERNANCE_MODEL_STAGES); }
  roles() { return values(AI_GOVERNANCE_ROLES); }
  inventoryFields() { return values(AI_SYSTEM_INVENTORY_FIELDS); }
  useCaseFields() { return values(AI_USE_CASE_FIELDS); }
  riskClassificationFactors() { return values(AI_RISK_CLASSIFICATION_FACTORS); }
  riskClasses() { return values(AI_RISK_CLASSES); }
  impactAssessmentFields() { return values(AI_IMPACT_ASSESSMENT_FIELDS); }
  intendedUseFields() { return values(AI_INTENDED_USE_FIELDS); }
  prohibitedUseCategories() { return values(AI_PROHIBITED_USE_CATEGORIES); }
  modelGovernanceFields() { return values(AI_MODEL_GOVERNANCE_FIELDS); }
  modelSelectionFactors() { return values(AI_MODEL_SELECTION_FACTORS); }
  modelVersioningFields() { return values(AI_MODEL_VERSIONING_FIELDS); }
  providerGovernanceFields() { return values(AI_PROVIDER_GOVERNANCE_FIELDS); }
  agentGovernanceFields() { return values(AI_AGENT_GOVERNANCE_FIELDS); }
  multiAgentGovernanceFields() { return values(MULTI_AGENT_GOVERNANCE_FIELDS); }
  promptGovernanceRequirements() { return values(PROMPT_GOVERNANCE_REQUIREMENTS); }
  contextGovernanceRequirements() { return values(AI_CONTEXT_GOVERNANCE_REQUIREMENTS); }
  memoryGovernanceFields() { return values(AI_MEMORY_GOVERNANCE_FIELDS); }
  toolGovernanceFields() { return values(AI_TOOL_GOVERNANCE_FIELDS); }
  toolInvocationFields() { return values(AI_TOOL_INVOCATION_FIELDS); }
  autonomyLevels() { return values(AI_AUTONOMY_LEVELS); }
  humanOversightModes() { return values(AI_HUMAN_OVERSIGHT_MODES); }
  meaningfulOversightRequirements() { return values(MEANINGFUL_OVERSIGHT_REQUIREMENTS); }
  automationBiasControls() { return values(AUTOMATION_BIAS_CONTROLS); }
  safetyRiskAreas() { return values(AI_SAFETY_RISK_AREAS); }
  robustnessEvaluationScenarios() { return values(AI_ROBUSTNESS_EVALUATION_SCENARIOS); }
  qualityDimensions() { return values(AI_QUALITY_DIMENSIONS); }
  evaluationFields() { return values(AI_EVALUATION_FIELDS); }
  evaluationDataRequirements() { return values(AI_EVALUATION_DATA_REQUIREMENTS); }
  fairnessFactors() { return values(AI_FAIRNESS_FACTORS); }
  nondiscriminationFactors() { return values(AI_NONDISCRIMINATION_FACTORS); }
  transparencyDisclosures() { return values(AI_TRANSPARENCY_DISCLOSURES); }
  explainabilityAudiences() { return values(AI_EXPLAINABILITY_AUDIENCES); }
  traceabilityStages() { return values(AI_TRACEABILITY_STAGES); }
  privacyGovernanceAreas() { return values(AI_PRIVACY_GOVERNANCE_AREAS); }
  securityRiskAreas() { return values(AI_SECURITY_RISK_AREAS); }
  consequentialDecisionAreas() { return values(CONSEQUENTIAL_DECISION_AREAS); }
  recourseOptions() { return values(AI_RECOURSE_OPTIONS); }
  ethicalReviewFactors() { return values(ETHICAL_REVIEW_FACTORS); }
  ethicalDecisionRecordFields() { return values(ETHICAL_DECISION_RECORD_FIELDS); }
  lifecycleStates() { return values(AI_LIFECYCLE_STATES); }
  operationalReadinessFields() { return values(AI_OPERATIONAL_READINESS_FIELDS); }
  monitoringAreas() { return values(AI_MONITORING_AREAS); }
  driftAreas() { return values(AI_DRIFT_AREAS); }
  changeTypes() { return values(AI_CHANGE_TYPES); }
  incidentTypes() { return values(AI_INCIDENT_TYPES); }
  incidentResponseActions() { return values(AI_INCIDENT_RESPONSE_ACTIONS); }
  tenantAiGovernanceFields() { return values(TENANT_AI_GOVERNANCE_FIELDS); }
  propertyAiGovernanceFactors() { return values(PROPERTY_AI_GOVERNANCE_FACTORS); }
  supplierGovernanceFields() { return values(AI_SUPPLIER_GOVERNANCE_FIELDS); }
  evidenceTypes() { return values(AI_GOVERNANCE_EVIDENCE_TYPES); }
  assuranceAreas() { return values(AI_ASSURANCE_AREAS); }
  measures() { return values(AI_GOVERNANCE_MEASURES); }
  qualityAttributes() { return values(AI_ETHICAL_GOVERNANCE_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(AI_ETHICAL_GOVERNANCE_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_AI_ETHICAL_GOVERNANCE_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AiEthicalGovernanceProfile
      ? profileInput
      : new AiEthicalGovernanceProfile(profileInput);
    const errors = [];

    if (!profile.governanceName) errors.push('AI and Ethical Governance profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'AI and Ethical Governance objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'AI and Ethical Governance principles must include');
    appendMissing(errors, profile.governanceModelStages, this.governanceModelStages(), 'AI governance model must include');
    appendMissing(errors, profile.roles, this.roles(), 'AI governance roles must include');
    appendMissing(errors, profile.inventoryFields, this.inventoryFields(), 'AI system inventory must include');
    appendMissing(errors, profile.useCaseFields, this.useCaseFields(), 'AI use cases must define');
    appendMissing(errors, profile.riskClassificationFactors, this.riskClassificationFactors(), 'AI risk classification must consider');
    appendMissing(errors, profile.riskClasses, this.riskClasses(), 'AI risk classes must include');
    appendMissing(errors, profile.impactAssessmentFields, this.impactAssessmentFields(), 'AI impact assessments must consider');
    appendMissing(errors, profile.intendedUseFields, this.intendedUseFields(), 'Intended use must specify');
    appendMissing(errors, profile.prohibitedUseCategories, this.prohibitedUseCategories(), 'Prohibited use must include');
    appendMissing(errors, profile.modelGovernanceFields, this.modelGovernanceFields(), 'Model governance must address');
    appendMissing(errors, profile.modelSelectionFactors, this.modelSelectionFactors(), 'Model selection must consider');
    appendMissing(errors, profile.modelVersioningFields, this.modelVersioningFields(), 'Model versioning must include');
    appendMissing(errors, profile.providerGovernanceFields, this.providerGovernanceFields(), 'AI provider governance must include');
    appendMissing(errors, profile.agentGovernanceFields, this.agentGovernanceFields(), 'Agent governance must define');
    appendMissing(errors, profile.multiAgentGovernanceFields, this.multiAgentGovernanceFields(), 'Multi-agent governance must define');
    appendMissing(errors, profile.promptGovernanceRequirements, this.promptGovernanceRequirements(), 'Prompt governance requires prompts to be');
    appendMissing(errors, profile.contextGovernanceRequirements, this.contextGovernanceRequirements(), 'Context governance requires context to be');
    appendMissing(errors, profile.memoryGovernanceFields, this.memoryGovernanceFields(), 'AI memory governance must define');
    appendMissing(errors, profile.toolGovernanceFields, this.toolGovernanceFields(), 'AI tool governance must define');
    appendMissing(errors, profile.toolInvocationFields, this.toolInvocationFields(), 'Tool invocation must record');
    appendMissing(errors, profile.autonomyLevels, this.autonomyLevels(), 'AI autonomy levels must include');
    appendMissing(errors, profile.humanOversightModes, this.humanOversightModes(), 'Human oversight modes must include');
    appendMissing(errors, profile.meaningfulOversightRequirements, this.meaningfulOversightRequirements(), 'Meaningful oversight requires');
    appendMissing(errors, profile.automationBiasControls, this.automationBiasControls(), 'Automation bias controls must include');
    appendMissing(errors, profile.safetyRiskAreas, this.safetyRiskAreas(), 'AI safety must address');
    appendMissing(errors, profile.robustnessEvaluationScenarios, this.robustnessEvaluationScenarios(), 'Robustness evaluation must include');
    appendMissing(errors, profile.qualityDimensions, this.qualityDimensions(), 'AI quality must include');
    appendMissing(errors, profile.evaluationFields, this.evaluationFields(), 'AI evaluation must define');
    appendMissing(errors, profile.evaluationDataRequirements, this.evaluationDataRequirements(), 'Evaluation data must be');
    appendMissing(errors, profile.fairnessFactors, this.fairnessFactors(), 'Fairness governance must consider');
    appendMissing(errors, profile.nondiscriminationFactors, this.nondiscriminationFactors(), 'Nondiscrimination governance must evaluate');
    appendMissing(errors, profile.transparencyDisclosures, this.transparencyDisclosures(), 'Transparency disclosures must include');
    appendMissing(errors, profile.explainabilityAudiences, this.explainabilityAudiences(), 'Explainability audiences must include');
    appendMissing(errors, profile.traceabilityStages, this.traceabilityStages(), 'AI traceability must connect');
    appendMissing(errors, profile.privacyGovernanceAreas, this.privacyGovernanceAreas(), 'AI privacy governance must address');
    appendMissing(errors, profile.securityRiskAreas, this.securityRiskAreas(), 'AI security must address');
    appendMissing(errors, profile.consequentialDecisionAreas, this.consequentialDecisionAreas(), 'Consequential decision areas must include');
    appendMissing(errors, profile.recourseOptions, this.recourseOptions(), 'Recourse options must include');
    appendMissing(errors, profile.ethicalReviewFactors, this.ethicalReviewFactors(), 'Ethical review must consider');
    appendMissing(errors, profile.ethicalDecisionRecordFields, this.ethicalDecisionRecordFields(), 'Ethical decision records must include');
    appendMissing(errors, profile.lifecycleStates, this.lifecycleStates(), 'AI lifecycle states must include');
    appendMissing(errors, profile.operationalReadinessFields, this.operationalReadinessFields(), 'AI operational readiness must confirm');
    appendMissing(errors, profile.monitoringAreas, this.monitoringAreas(), 'AI monitoring must evaluate');
    appendMissing(errors, profile.driftAreas, this.driftAreas(), 'AI drift areas must include');
    appendMissing(errors, profile.changeTypes, this.changeTypes(), 'AI change types must include');
    appendMissing(errors, profile.incidentTypes, this.incidentTypes(), 'AI incidents may include');
    appendMissing(errors, profile.incidentResponseActions, this.incidentResponseActions(), 'AI incident response must');
    appendMissing(errors, profile.tenantAiGovernanceFields, this.tenantAiGovernanceFields(), 'Tenant AI governance must define');
    appendMissing(errors, profile.propertyAiGovernanceFactors, this.propertyAiGovernanceFactors(), 'Property AI governance must account for');
    appendMissing(errors, profile.supplierGovernanceFields, this.supplierGovernanceFields(), 'AI supplier governance must include');
    appendMissing(errors, profile.evidenceTypes, this.evidenceTypes(), 'AI-governance evidence must include');
    appendMissing(errors, profile.assuranceAreas, this.assuranceAreas(), 'AI Assurance must evaluate');
    appendMissing(errors, profile.measures, this.measures(), 'AI governance measures must include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'AI and Ethical Governance quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'AI and Ethical Governance architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future AI and Ethical Governance capabilities must include');
    if (profile.aiHasNoInherentAuthority !== true) errors.push('AI output, confidence, fluency, recommendation, or agent agreement does not create decision authority.');
    if (profile.purposeBeforeCapability !== true) errors.push('AI capability must have approved purpose before model, provider, agent, or tool selection.');
    if (profile.humanAccountabilityRequired !== true) errors.push('Consequential AI-enabled outcomes must remain attributable to accountable human or organizational authority.');
    if (profile.riskProportionateGovernance !== true) errors.push('AI governance depth must be proportionate to risk, impact, autonomy, uncertainty, and harm.');
    if (profile.minimumNecessaryAutonomy !== true) errors.push('AI must receive only minimum necessary autonomy and tool authority.');
    if (profile.evidenceBeforeTrust !== true) errors.push('AI trust must be based on evaluation, operating evidence, context, limitations, and performance.');
    if (profile.explainabilityProportionateToImpact !== true) errors.push('Explainability must be proportionate to AI impact.');
    if (profile.safeFailureRequired !== true) errors.push('AI must fail safely by containing harm, reducing autonomy, preserving evidence, and escalating.');
    if (profile.privacySecurityByDesign !== true) errors.push('AI must not bypass privacy, data, security, or tenant boundaries.');
    if (profile.continuousGovernanceRequired !== true) errors.push('AI behavior, providers, models, data, prompts, and risks require continuous review.');
    if (profile.agentAuthorityBounded !== true) errors.push('Agents must not inherit unrestricted authority from orchestrators or users.');
    if (profile.multiAgentAgreementNotAuthority !== true) errors.push('Agreement among agents does not prove correctness or authorize action.');
    if (profile.readWriteToolAccessSeparated !== true) errors.push('Read access and write access must be governed separately.');
    if (profile.autonomyRequiresEvidenceApprovalFallback !== true) errors.push('Autonomy must not advance without evidence, approval, and safe fallback.');
    if (profile.meaningfulOversightRequired !== true) errors.push('Human approval without meaningful evaluation is not effective oversight.');
    if (profile.providerClaimsRequireEvaluation !== true) errors.push('Provider claims require evaluation for scope, relevance, and continuing validity.');
    if (profile.vendorNeutral !== true) errors.push('AI and Ethical Governance must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('AI and Ethical Governance must remain technology independent.');
    if (profile.prescribesModel === true) errors.push('AI and Ethical Governance does not prescribe a model.');
    if (profile.prescribesAiProvider === true) errors.push('AI and Ethical Governance does not prescribe an AI provider.');
    if (profile.prescribesEthicsFramework === true) errors.push('AI and Ethical Governance does not prescribe an ethics framework.');
    if (profile.prescribesEvaluationTool === true) errors.push('AI and Ethical Governance does not prescribe an evaluation tool.');
    if (profile.prescribesJurisdiction === true) errors.push('AI and Ethical Governance does not prescribe a jurisdiction.');
    if (profile.implementsAgentFramework === true) errors.push('AI and Ethical Governance does not implement the future ARCH-014 AI Agent Framework.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    assertLength(errors, this.objectives(), 18, 'objectives');
    assertLength(errors, this.principles(), 10, 'principles');
    assertLength(errors, this.governanceModelStages(), 8, 'governance model stages');
    assertLength(errors, this.roles(), 12, 'roles');
    assertLength(errors, this.inventoryFields(), 29, 'inventory fields');
    assertLength(errors, this.useCaseFields(), 18, 'use case fields');
    assertLength(errors, this.riskClassificationFactors(), 20, 'risk classification factors');
    assertLength(errors, this.riskClasses(), 5, 'risk classes');
    assertLength(errors, this.impactAssessmentFields(), 22, 'impact assessment fields');
    assertLength(errors, this.intendedUseFields(), 12, 'intended use fields');
    assertLength(errors, this.prohibitedUseCategories(), 13, 'prohibited use categories');
    assertLength(errors, this.modelGovernanceFields(), 21, 'model governance fields');
    assertLength(errors, this.modelSelectionFactors(), 17, 'model selection factors');
    assertLength(errors, this.modelVersioningFields(), 12, 'model versioning fields');
    assertLength(errors, this.providerGovernanceFields(), 17, 'provider governance fields');
    assertLength(errors, this.agentGovernanceFields(), 21, 'agent governance fields');
    assertLength(errors, this.multiAgentGovernanceFields(), 11, 'multi-agent governance fields');
    assertLength(errors, this.promptGovernanceRequirements(), 11, 'prompt governance requirements');
    assertLength(errors, this.contextGovernanceRequirements(), 10, 'context governance requirements');
    assertLength(errors, this.memoryGovernanceFields(), 15, 'memory governance fields');
    assertLength(errors, this.toolGovernanceFields(), 20, 'tool governance fields');
    assertLength(errors, this.toolInvocationFields(), 16, 'tool invocation fields');
    assertLength(errors, this.autonomyLevels(), 6, 'autonomy levels');
    assertLength(errors, this.humanOversightModes(), 9, 'human oversight modes');
    assertLength(errors, this.meaningfulOversightRequirements(), 10, 'meaningful oversight requirements');
    assertLength(errors, this.automationBiasControls(), 10, 'automation bias controls');
    assertLength(errors, this.safetyRiskAreas(), 13, 'safety risk areas');
    assertLength(errors, this.robustnessEvaluationScenarios(), 13, 'robustness evaluation scenarios');
    assertLength(errors, this.qualityDimensions(), 13, 'quality dimensions');
    assertLength(errors, this.evaluationFields(), 16, 'evaluation fields');
    assertLength(errors, this.evaluationDataRequirements(), 10, 'evaluation data requirements');
    assertLength(errors, this.fairnessFactors(), 12, 'fairness factors');
    assertLength(errors, this.nondiscriminationFactors(), 9, 'nondiscrimination factors');
    assertLength(errors, this.transparencyDisclosures(), 9, 'transparency disclosures');
    assertLength(errors, this.explainabilityAudiences(), 9, 'explainability audiences');
    assertLength(errors, this.traceabilityStages(), 7, 'traceability stages');
    assertLength(errors, this.privacyGovernanceAreas(), 13, 'privacy governance areas');
    assertLength(errors, this.securityRiskAreas(), 12, 'security risk areas');
    assertLength(errors, this.consequentialDecisionAreas(), 12, 'consequential decision areas');
    assertLength(errors, this.recourseOptions(), 10, 'recourse options');
    assertLength(errors, this.ethicalReviewFactors(), 12, 'ethical review factors');
    assertLength(errors, this.ethicalDecisionRecordFields(), 15, 'ethical decision record fields');
    assertLength(errors, this.lifecycleStates(), 14, 'lifecycle states');
    assertLength(errors, this.operationalReadinessFields(), 21, 'operational readiness fields');
    assertLength(errors, this.monitoringAreas(), 18, 'monitoring areas');
    assertLength(errors, this.driftAreas(), 12, 'drift areas');
    assertLength(errors, this.changeTypes(), 14, 'change types');
    assertLength(errors, this.incidentTypes(), 13, 'incident types');
    assertLength(errors, this.incidentResponseActions(), 11, 'incident response actions');
    assertLength(errors, this.tenantAiGovernanceFields(), 13, 'tenant AI governance fields');
    assertLength(errors, this.propertyAiGovernanceFactors(), 11, 'property AI governance factors');
    assertLength(errors, this.supplierGovernanceFields(), 16, 'supplier governance fields');
    assertLength(errors, this.evidenceTypes(), 19, 'evidence types');
    assertLength(errors, this.assuranceAreas(), 18, 'assurance areas');
    assertLength(errors, this.measures(), 17, 'measures');
    assertLength(errors, this.qualityAttributes(), 12, 'quality attributes');
    assertLength(errors, this.architecturalRules(), 18, 'architectural rules');
    assertLength(errors, this.futureCapabilities(), 14, 'future capabilities');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.AI_ETHICAL_GOVERNANCE_INVALID,
        'AI and Ethical Governance violates ARCH-012-07.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function assertLength(errors, actual, expected, label) {
  if (actual.length !== expected) errors.push(`AI and Ethical Governance must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
