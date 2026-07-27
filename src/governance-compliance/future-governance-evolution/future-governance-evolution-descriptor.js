import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AI_ASSISTED_GOVERNANCE_USES,
  AUTOMATED_GOVERNANCE_FAILURE_HANDLING,
  AUTONOMOUS_GOVERNANCE_EXAMPLES,
  AUTONOMOUS_GOVERNANCE_SUITABILITY_CRITERIA,
  AUTONOMOUS_REMEDIATION_ACTIONS,
  AUTONOMOUS_REMEDIATION_FIELDS,
  CONTINUOUS_ASSURANCE_ADAPTATION_FACTORS,
  CONTINUOUS_CONTROL_VERIFICATION_TARGETS,
  CONTROL_DRIFT_SOURCES,
  DYNAMIC_APPLICABILITY_CONTEXTS,
  DYNAMIC_AUDIT_PLANNING_FACTORS,
  FEDERATED_TENANT_GOVERNANCE_REQUIREMENTS,
  FUTURE_CONTINUOUS_COMPLIANCE_COMPONENTS,
  FUTURE_EXECUTABLE_POLICY_USES,
  FUTURE_GOVERNANCE_ARCHITECTURAL_RULES,
  FUTURE_GOVERNANCE_ARCHITECTURE_RELATIONSHIPS,
  FUTURE_GOVERNANCE_CAPABILITY_ROADMAP_SEQUENCE,
  FUTURE_GOVERNANCE_EVOLUTION_PRINCIPLES,
  FUTURE_GOVERNANCE_EVOLUTION_RISKS,
  FUTURE_GOVERNANCE_EXPLAINABILITY_FIELDS,
  FUTURE_GOVERNANCE_LONG_TERM_QUALITY_ATTRIBUTES,
  FUTURE_GOVERNANCE_TRANSITION_CRITERIA,
  FUTURE_GOVERNANCE_TRUST_FACTORS,
  FUTURE_GOVERNANCE_VISION_CAPABILITIES,
  FUTURE_POLICY_CONFLICT_TYPES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  GOVERNANCE_AGENT_REQUIREMENTS,
  GOVERNANCE_AGENT_SPECIALIZATIONS,
  GOVERNANCE_DIGITAL_TWIN_USES,
  GOVERNANCE_EVOLUTION_DRIVERS,
  GOVERNANCE_EVOLUTION_LIFECYCLE_STAGES,
  GOVERNANCE_EVOLUTION_MATURITY_STAGES,
  GOVERNANCE_HUMAN_STRENGTHS,
  GOVERNANCE_KNOWLEDGE_GRAPH_STAGES,
  GOVERNANCE_MACHINE_STRENGTHS,
  GOVERNANCE_MEMORY_ITEMS,
  GOVERNANCE_SELF_IMPROVEMENT_TARGETS,
  MACHINE_READABLE_ATTESTATION_FIELDS,
  MACHINE_READABLE_OBLIGATION_FIELDS,
  OBLIGATION_CHANGE_INTELLIGENCE_CAPABILITIES,
  POLICY_SIMULATION_FACTORS,
  PREDICTIVE_RISK_GOVERNANCE_SIGNALS,
  PRESCRIPTIVE_RISK_RECOMMENDATIONS,
  PRIVACY_PRESERVING_ASSURANCE_METHODS,
  PROPERTY_GOVERNANCE_INTELLIGENCE_CAPABILITIES,
  REAL_TIME_GOVERNANCE_POSTURE_FIELDS,
  SEMANTIC_GOVERNANCE_CONCEPTS,
  SUPPLIER_PLUGIN_GOVERNANCE_CAPABILITIES
} from '../constants.js';
import { FutureGovernanceEvolutionProfile } from '../contracts/future-governance-evolution-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

const MAP = Object.freeze({
  visionCapabilities: FUTURE_GOVERNANCE_VISION_CAPABILITIES,
  evolutionDrivers: GOVERNANCE_EVOLUTION_DRIVERS,
  principles: FUTURE_GOVERNANCE_EVOLUTION_PRINCIPLES,
  maturityStages: GOVERNANCE_EVOLUTION_MATURITY_STAGES,
  semanticConcepts: SEMANTIC_GOVERNANCE_CONCEPTS,
  knowledgeGraphStages: GOVERNANCE_KNOWLEDGE_GRAPH_STAGES,
  machineReadableObligationFields: MACHINE_READABLE_OBLIGATION_FIELDS,
  obligationChangeCapabilities: OBLIGATION_CHANGE_INTELLIGENCE_CAPABILITIES,
  dynamicApplicabilityContexts: DYNAMIC_APPLICABILITY_CONTEXTS,
  executablePolicyUses: FUTURE_EXECUTABLE_POLICY_USES,
  policySimulationFactors: POLICY_SIMULATION_FACTORS,
  policyConflictTypes: FUTURE_POLICY_CONFLICT_TYPES,
  continuousVerificationTargets: CONTINUOUS_CONTROL_VERIFICATION_TARGETS,
  controlDriftSources: CONTROL_DRIFT_SOURCES,
  continuousComplianceComponents: FUTURE_CONTINUOUS_COMPLIANCE_COMPONENTS,
  postureFields: REAL_TIME_GOVERNANCE_POSTURE_FIELDS,
  predictiveRiskSignals: PREDICTIVE_RISK_GOVERNANCE_SIGNALS,
  prescriptiveRecommendations: PRESCRIPTIVE_RISK_RECOMMENDATIONS,
  aiAssistedUses: AI_ASSISTED_GOVERNANCE_USES,
  governanceAgentSpecializations: GOVERNANCE_AGENT_SPECIALIZATIONS,
  governanceAgentRequirements: GOVERNANCE_AGENT_REQUIREMENTS,
  autonomySuitabilityCriteria: AUTONOMOUS_GOVERNANCE_SUITABILITY_CRITERIA,
  autonomousGovernanceExamples: AUTONOMOUS_GOVERNANCE_EXAMPLES,
  autonomousRemediationActions: AUTONOMOUS_REMEDIATION_ACTIONS,
  autonomousRemediationFields: AUTONOMOUS_REMEDIATION_FIELDS,
  continuousAssuranceFactors: CONTINUOUS_ASSURANCE_ADAPTATION_FACTORS,
  dynamicAuditPlanningFactors: DYNAMIC_AUDIT_PLANNING_FACTORS,
  privacyPreservingAssuranceMethods: PRIVACY_PRESERVING_ASSURANCE_METHODS,
  machineReadableAttestationFields: MACHINE_READABLE_ATTESTATION_FIELDS,
  federatedTenantRequirements: FEDERATED_TENANT_GOVERNANCE_REQUIREMENTS,
  propertyIntelligenceCapabilities: PROPERTY_GOVERNANCE_INTELLIGENCE_CAPABILITIES,
  supplierPluginCapabilities: SUPPLIER_PLUGIN_GOVERNANCE_CAPABILITIES,
  digitalTwinUses: GOVERNANCE_DIGITAL_TWIN_USES,
  governanceMemoryItems: GOVERNANCE_MEMORY_ITEMS,
  humanStrengths: GOVERNANCE_HUMAN_STRENGTHS,
  machineStrengths: GOVERNANCE_MACHINE_STRENGTHS,
  trustFactors: FUTURE_GOVERNANCE_TRUST_FACTORS,
  explainabilityFields: FUTURE_GOVERNANCE_EXPLAINABILITY_FIELDS,
  selfImprovementTargets: GOVERNANCE_SELF_IMPROVEMENT_TARGETS,
  architectureRelationships: FUTURE_GOVERNANCE_ARCHITECTURE_RELATIONSHIPS,
  transitionCriteria: FUTURE_GOVERNANCE_TRANSITION_CRITERIA,
  evolutionRisks: FUTURE_GOVERNANCE_EVOLUTION_RISKS,
  failureHandling: AUTOMATED_GOVERNANCE_FAILURE_HANDLING,
  lifecycleStages: GOVERNANCE_EVOLUTION_LIFECYCLE_STAGES,
  qualityAttributes: FUTURE_GOVERNANCE_LONG_TERM_QUALITY_ATTRIBUTES,
  architecturalRules: FUTURE_GOVERNANCE_ARCHITECTURAL_RULES,
  roadmapSequence: FUTURE_GOVERNANCE_CAPABILITY_ROADMAP_SEQUENCE
});

const EXPECTED_COUNTS = Object.freeze({
  visionCapabilities: 15,
  evolutionDrivers: 16,
  principles: 8,
  maturityStages: 8,
  semanticConcepts: 24,
  knowledgeGraphStages: 9,
  machineReadableObligationFields: 14,
  obligationChangeCapabilities: 9,
  dynamicApplicabilityContexts: 15,
  executablePolicyUses: 12,
  policySimulationFactors: 12,
  policyConflictTypes: 9,
  continuousVerificationTargets: 13,
  controlDriftSources: 10,
  continuousComplianceComponents: 10,
  postureFields: 14,
  predictiveRiskSignals: 13,
  prescriptiveRecommendations: 11,
  aiAssistedUses: 12,
  governanceAgentSpecializations: 14,
  governanceAgentRequirements: 11,
  autonomySuitabilityCriteria: 10,
  autonomousGovernanceExamples: 7,
  autonomousRemediationActions: 8,
  autonomousRemediationFields: 9,
  continuousAssuranceFactors: 11,
  dynamicAuditPlanningFactors: 11,
  privacyPreservingAssuranceMethods: 8,
  machineReadableAttestationFields: 11,
  federatedTenantRequirements: 9,
  propertyIntelligenceCapabilities: 9,
  supplierPluginCapabilities: 11,
  digitalTwinUses: 10,
  governanceMemoryItems: 14,
  humanStrengths: 12,
  machineStrengths: 10,
  trustFactors: 12,
  explainabilityFields: 9,
  selfImprovementTargets: 11,
  architectureRelationships: 8,
  transitionCriteria: 15,
  evolutionRisks: 17,
  failureHandling: 13,
  lifecycleStages: 8,
  qualityAttributes: 13,
  architecturalRules: 17,
  roadmapSequence: 7
});

export class FutureGovernanceEvolutionDescriptor {
  visionCapabilities() { return values(MAP.visionCapabilities); }
  evolutionDrivers() { return values(MAP.evolutionDrivers); }
  principles() { return values(MAP.principles); }
  maturityStages() { return values(MAP.maturityStages); }
  semanticConcepts() { return values(MAP.semanticConcepts); }
  knowledgeGraphStages() { return values(MAP.knowledgeGraphStages); }
  machineReadableObligationFields() { return values(MAP.machineReadableObligationFields); }
  obligationChangeCapabilities() { return values(MAP.obligationChangeCapabilities); }
  dynamicApplicabilityContexts() { return values(MAP.dynamicApplicabilityContexts); }
  executablePolicyUses() { return values(MAP.executablePolicyUses); }
  policySimulationFactors() { return values(MAP.policySimulationFactors); }
  policyConflictTypes() { return values(MAP.policyConflictTypes); }
  continuousVerificationTargets() { return values(MAP.continuousVerificationTargets); }
  controlDriftSources() { return values(MAP.controlDriftSources); }
  continuousComplianceComponents() { return values(MAP.continuousComplianceComponents); }
  postureFields() { return values(MAP.postureFields); }
  predictiveRiskSignals() { return values(MAP.predictiveRiskSignals); }
  prescriptiveRecommendations() { return values(MAP.prescriptiveRecommendations); }
  aiAssistedUses() { return values(MAP.aiAssistedUses); }
  governanceAgentSpecializations() { return values(MAP.governanceAgentSpecializations); }
  governanceAgentRequirements() { return values(MAP.governanceAgentRequirements); }
  autonomySuitabilityCriteria() { return values(MAP.autonomySuitabilityCriteria); }
  autonomousGovernanceExamples() { return values(MAP.autonomousGovernanceExamples); }
  autonomousRemediationActions() { return values(MAP.autonomousRemediationActions); }
  autonomousRemediationFields() { return values(MAP.autonomousRemediationFields); }
  continuousAssuranceFactors() { return values(MAP.continuousAssuranceFactors); }
  dynamicAuditPlanningFactors() { return values(MAP.dynamicAuditPlanningFactors); }
  privacyPreservingAssuranceMethods() { return values(MAP.privacyPreservingAssuranceMethods); }
  machineReadableAttestationFields() { return values(MAP.machineReadableAttestationFields); }
  federatedTenantRequirements() { return values(MAP.federatedTenantRequirements); }
  propertyIntelligenceCapabilities() { return values(MAP.propertyIntelligenceCapabilities); }
  supplierPluginCapabilities() { return values(MAP.supplierPluginCapabilities); }
  digitalTwinUses() { return values(MAP.digitalTwinUses); }
  governanceMemoryItems() { return values(MAP.governanceMemoryItems); }
  humanStrengths() { return values(MAP.humanStrengths); }
  machineStrengths() { return values(MAP.machineStrengths); }
  trustFactors() { return values(MAP.trustFactors); }
  explainabilityFields() { return values(MAP.explainabilityFields); }
  selfImprovementTargets() { return values(MAP.selfImprovementTargets); }
  architectureRelationships() { return values(MAP.architectureRelationships); }
  transitionCriteria() { return values(MAP.transitionCriteria); }
  evolutionRisks() { return values(MAP.evolutionRisks); }
  failureHandling() { return values(MAP.failureHandling); }
  lifecycleStages() { return values(MAP.lifecycleStages); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  roadmapSequence() { return values(MAP.roadmapSequence); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof FutureGovernanceEvolutionProfile
      ? profileInput
      : new FutureGovernanceEvolutionProfile(profileInput);
    const errors = [];

    if (!profile.governanceName) errors.push('Future governance evolution profile must have a name.');
    for (const key of Object.keys(MAP)) appendMissing(errors, profile[key], values(MAP[key]), `${key} must include`);
    if (profile.futureCapabilitiesArePlaceholders !== true) errors.push('Future governance capabilities must remain placeholders until implemented by later architecture.');
    if (profile.humanAccountabilityPreserved !== true) errors.push('Future governance must preserve accountable human authority.');
    if (profile.qualifiedInterpretationPreserved !== true) errors.push('Machine-readable obligations and AI assistance must not replace qualified interpretation.');
    if (profile.automationIntroducedGradually !== true) errors.push('Automation and autonomy must be introduced gradually through evidence, testing, and explicit delegation.');
    if (profile.evidenceVerifiable !== true) errors.push('Automated evidence and conclusions must remain verifiable.');
    if (profile.governanceExplainable !== true) errors.push('Governance decisions must remain explainable.');
    if (profile.federationAndIsolationPreserved !== true) errors.push('Future governance must preserve federation and isolation.');
    if (profile.recourseRequired !== true) errors.push('Consequential governance decisions require meaningful recourse.');
    if (profile.independentChallengePreserved !== true) errors.push('Future assurance and audit assistance must preserve independent challenge.');
    if (profile.tenantIsolationPreserved !== true) errors.push('Future governance must preserve tenant isolation.');
    if (profile.humanApprovedSelfImprovementRequired !== true) errors.push('Governance self-improvement requires human-approved change.');
    if (profile.vendorNeutral !== true) errors.push('Future Governance Evolution must remain vendor neutral.');
    if (profile.technologyIndependent !== true) errors.push('Future Governance Evolution must remain technology independent.');
    if (profile.prescribesGovernanceTool === true) errors.push('ARCH-012-10 does not prescribe governance tools.');
    if (profile.prescribesRegulatoryFramework === true) errors.push('ARCH-012-10 does not prescribe regulatory frameworks.');
    if (profile.prescribesProvider === true) errors.push('ARCH-012-10 does not prescribe providers.');
    if (profile.prescribesImplementationDate === true) errors.push('ARCH-012-10 does not prescribe implementation dates.');
    if (profile.implementsFutureRuntime === true) errors.push('ARCH-012-10 must not implement future runtime governance capabilities.');
    if (profile.machineInterpretationReplacesQualifiedAuthority === true) errors.push('Machine interpretation must not replace qualified authority.');
    if (profile.autonomousConsequentialDecisionsAllowed === true) errors.push('Consequential exception, risk, policy, legal, and ethical decisions remain human-accountable.');
    if (profile.aiFabricatedEvidenceAllowed === true) errors.push('AI fabrication or concealment of evidence is prohibited.');
    if (profile.selfModifyingAuthorityAllowed === true) errors.push('Production governance must not rewrite its own authority without human approval.');
    if (profile.oneScorePostureRequired === true) errors.push('Governance posture must preserve context rather than reduce governance to one score.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    for (const [key, expected] of Object.entries(EXPECTED_COUNTS)) {
      if (this[key]().length !== expected) errors.push(`Future Governance Evolution must include documented ${key}.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.FUTURE_GOVERNANCE_EVOLUTION_INVALID,
        'Future Governance Evolution violates ARCH-012-10.',
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

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
