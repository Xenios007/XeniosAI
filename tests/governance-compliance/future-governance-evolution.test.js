import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AUTOMATED_GOVERNANCE_FAILURE_HANDLING,
  AUTONOMOUS_GOVERNANCE_EXAMPLES,
  AUTONOMOUS_GOVERNANCE_SUITABILITY_CRITERIA,
  FEDERATED_TENANT_GOVERNANCE_REQUIREMENTS,
  FUTURE_EXECUTABLE_POLICY_USES,
  FUTURE_GOVERNANCE_ARCHITECTURAL_RULES,
  FUTURE_GOVERNANCE_ARCHITECTURE_RELATIONSHIPS,
  FUTURE_GOVERNANCE_CAPABILITY_ROADMAP_SEQUENCE,
  FUTURE_GOVERNANCE_EVOLUTION_PRINCIPLES,
  FUTURE_GOVERNANCE_EVOLUTION_RISKS,
  FUTURE_GOVERNANCE_VISION_CAPABILITIES,
  FutureGovernanceEvolutionDescriptor,
  FutureGovernanceEvolutionProfile,
  GOVERNANCE_AGENT_REQUIREMENTS,
  GOVERNANCE_COMPLIANCE_ERROR_CODES,
  GOVERNANCE_EVOLUTION_DRIVERS,
  GOVERNANCE_EVOLUTION_MATURITY_STAGES,
  GOVERNANCE_KNOWLEDGE_GRAPH_STAGES,
  GOVERNANCE_SELF_IMPROVEMENT_TARGETS,
  MACHINE_READABLE_OBLIGATION_FIELDS,
  PREDICTIVE_RISK_GOVERNANCE_SIGNALS,
  REAL_TIME_GOVERNANCE_POSTURE_FIELDS,
  SEMANTIC_GOVERNANCE_CONCEPTS,
  SUPPLIER_PLUGIN_GOVERNANCE_CAPABILITIES,
  addGovernanceCompliance
} from '../../src/governance-compliance/index.js';

test('future governance evolution exposes vision, drivers, principles, maturity, semantic, obligation, applicability, and policy metadata', () => {
  const descriptor = new FutureGovernanceEvolutionDescriptor();

  assert.deepEqual(descriptor.visionCapabilities(), Object.values(FUTURE_GOVERNANCE_VISION_CAPABILITIES));
  assert.ok(descriptor.visionCapabilities().includes(FUTURE_GOVERNANCE_VISION_CAPABILITIES.ESCALATE_TO_QUALIFIED_HUMANS));
  assert.ok(descriptor.evolutionDrivers().includes(GOVERNANCE_EVOLUTION_DRIVERS.CONTINUOUS_COMPLIANCE_POSTURE));
  assert.ok(descriptor.principles().includes(FUTURE_GOVERNANCE_EVOLUTION_PRINCIPLES.QUALIFIED_INTERPRETATION_REMAINS_ESSENTIAL));
  assert.ok(descriptor.maturityStages().includes(GOVERNANCE_EVOLUTION_MATURITY_STAGES.GOVERNED_SELF_IMPROVING_GOVERNANCE));
  assert.ok(descriptor.semanticConcepts().includes(SEMANTIC_GOVERNANCE_CONCEPTS.JURISDICTION));
  assert.ok(descriptor.knowledgeGraphStages().includes(GOVERNANCE_KNOWLEDGE_GRAPH_STAGES.POSTURE_RESULT));
  assert.ok(descriptor.machineReadableObligationFields().includes(MACHINE_READABLE_OBLIGATION_FIELDS.INTERPRETATION_OWNER));
  assert.ok(descriptor.dynamicApplicabilityContexts().includes('transaction'));
  assert.ok(descriptor.executablePolicyUses().includes(FUTURE_EXECUTABLE_POLICY_USES.AUTONOMY_LIMITS));
});

test('future governance evolution exposes continuous verification, risk, AI, agent, autonomy, assurance, federation, ecosystem, and trust metadata', () => {
  const descriptor = new FutureGovernanceEvolutionDescriptor();

  assert.ok(descriptor.policyConflictTypes().includes('implementation-divergence'));
  assert.ok(descriptor.continuousVerificationTargets().includes('ai-guardrails'));
  assert.ok(descriptor.controlDriftSources().includes('temporary-workaround'));
  assert.ok(descriptor.continuousComplianceComponents().includes('governance-reporting'));
  assert.ok(descriptor.postureFields().includes(REAL_TIME_GOVERNANCE_POSTURE_FIELDS.SECURITY_STATUS));
  assert.ok(descriptor.predictiveRiskSignals().includes(PREDICTIVE_RISK_GOVERNANCE_SIGNALS.REGULATORY_CHANGE));
  assert.ok(descriptor.aiAssistedUses().includes('architecture-impact-analysis'));
  assert.ok(descriptor.governanceAgentRequirements().includes(GOVERNANCE_AGENT_REQUIREMENTS.LIFECYCLE_GOVERNANCE));
  assert.ok(descriptor.autonomySuitabilityCriteria().includes(AUTONOMOUS_GOVERNANCE_SUITABILITY_CRITERIA.ESCALATABLE));
  assert.ok(descriptor.autonomousGovernanceExamples().includes(AUTONOMOUS_GOVERNANCE_EXAMPLES.APPLYING_APPROVED_RETENTION_RULE));
  assert.ok(descriptor.federatedTenantRequirements().includes(FEDERATED_TENANT_GOVERNANCE_REQUIREMENTS.CROSS_TENANT_PROTECTION));
  assert.ok(descriptor.supplierPluginCapabilities().includes(SUPPLIER_PLUGIN_GOVERNANCE_CAPABILITIES.EXIT_READINESS));
});

test('future governance evolution exposes self-improvement, relationships, transition, risk, failure, rule, and roadmap metadata', () => {
  const descriptor = new FutureGovernanceEvolutionDescriptor();

  assert.ok(descriptor.governanceMemoryItems().includes('lessons-learned'));
  assert.ok(descriptor.humanStrengths().includes('ethical-judgment'));
  assert.ok(descriptor.machineStrengths().includes('bounded-enforcement'));
  assert.ok(descriptor.explainabilityFields().includes('exception-or-appeal'));
  assert.ok(descriptor.selfImprovementTargets().includes(GOVERNANCE_SELF_IMPROVEMENT_TARGETS.ARCHITECTURE));
  assert.ok(descriptor.architectureRelationships().includes(FUTURE_GOVERNANCE_ARCHITECTURE_RELATIONSHIPS.ARCH_020_REFERENCE_IMPLEMENTATIONS));
  assert.ok(descriptor.transitionCriteria().includes('recourse-is-available-where-appropriate'));
  assert.ok(descriptor.evolutionRisks().includes(FUTURE_GOVERNANCE_EVOLUTION_RISKS.AI_FABRICATED_EVIDENCE));
  assert.ok(descriptor.failureHandling().includes(AUTOMATED_GOVERNANCE_FAILURE_HANDLING.AUTHORITY_REVOCATION));
  assert.ok(descriptor.architecturalRules().includes(FUTURE_GOVERNANCE_ARCHITECTURAL_RULES.USE_ADRS_FOR_MATERIAL_AUTHORITY_CHANGES));
  assert.ok(descriptor.roadmapSequence().includes(FUTURE_GOVERNANCE_CAPABILITY_ROADMAP_SEQUENCE.GOVERNED_SELF_IMPROVING_GOVERNANCE));
});

test('future governance evolution validates complete profiles and rejects premature automation or lock-in', () => {
  const descriptor = new FutureGovernanceEvolutionDescriptor();
  const valid = descriptor.validateProfile(completeProfile(descriptor));
  const invalid = descriptor.validateProfile({
    governanceName: '',
    ...partialProfile(descriptor),
    futureCapabilitiesArePlaceholders: false,
    humanAccountabilityPreserved: false,
    qualifiedInterpretationPreserved: false,
    automationIntroducedGradually: false,
    evidenceVerifiable: false,
    governanceExplainable: false,
    federationAndIsolationPreserved: false,
    recourseRequired: false,
    independentChallengePreserved: false,
    tenantIsolationPreserved: false,
    humanApprovedSelfImprovementRequired: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesGovernanceTool: true,
    prescribesRegulatoryFramework: true,
    prescribesProvider: true,
    prescribesImplementationDate: true,
    implementsFutureRuntime: true,
    machineInterpretationReplacesQualifiedAuthority: true,
    autonomousConsequentialDecisionsAllowed: true,
    aiFabricatedEvidenceAllowed: true,
    selfModifyingAuthorityAllowed: true,
    oneScorePostureRequired: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /escalate-to-qualified-humans/);
  assert.match(invalid.errors.join('\n'), /demand-for-continuous-compliance-posture/);
  assert.match(invalid.errors.join('\n'), /qualified interpretation/);
  assert.match(invalid.errors.join('\n'), /must remain placeholders/);
  assert.match(invalid.errors.join('\n'), /must not implement future runtime governance capabilities/);
  assert.match(invalid.errors.join('\n'), /AI fabrication or concealment/);
  assert.match(invalid.errors.join('\n'), /must not rewrite its own authority/);
  assert.match(invalid.errors.join('\n'), /rather than reduce governance to one score/);
});

test('future governance evolution assertion rejects incomplete metadata', () => {
  class IncompleteFutureGovernanceEvolutionDescriptor extends FutureGovernanceEvolutionDescriptor {
    visionCapabilities() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteFutureGovernanceEvolutionDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === GOVERNANCE_COMPLIANCE_ERROR_CODES.FUTURE_GOVERNANCE_EVOLUTION_INVALID &&
      error.details.errors.some(message => message.includes('documented visionCapabilities'))
  );
});

test('future governance evolution descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addGovernanceCompliance(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('FutureGovernanceEvolutionDescriptor');

  assert.ok(descriptor instanceof FutureGovernanceEvolutionDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  return new FutureGovernanceEvolutionProfile({
    governanceName: 'Future Governance Evolution',
    visionCapabilities: descriptor.visionCapabilities(),
    evolutionDrivers: descriptor.evolutionDrivers(),
    principles: descriptor.principles(),
    maturityStages: descriptor.maturityStages(),
    semanticConcepts: descriptor.semanticConcepts(),
    knowledgeGraphStages: descriptor.knowledgeGraphStages(),
    machineReadableObligationFields: descriptor.machineReadableObligationFields(),
    obligationChangeCapabilities: descriptor.obligationChangeCapabilities(),
    dynamicApplicabilityContexts: descriptor.dynamicApplicabilityContexts(),
    executablePolicyUses: descriptor.executablePolicyUses(),
    policySimulationFactors: descriptor.policySimulationFactors(),
    policyConflictTypes: descriptor.policyConflictTypes(),
    continuousVerificationTargets: descriptor.continuousVerificationTargets(),
    controlDriftSources: descriptor.controlDriftSources(),
    continuousComplianceComponents: descriptor.continuousComplianceComponents(),
    postureFields: descriptor.postureFields(),
    predictiveRiskSignals: descriptor.predictiveRiskSignals(),
    prescriptiveRecommendations: descriptor.prescriptiveRecommendations(),
    aiAssistedUses: descriptor.aiAssistedUses(),
    governanceAgentSpecializations: descriptor.governanceAgentSpecializations(),
    governanceAgentRequirements: descriptor.governanceAgentRequirements(),
    autonomySuitabilityCriteria: descriptor.autonomySuitabilityCriteria(),
    autonomousGovernanceExamples: descriptor.autonomousGovernanceExamples(),
    autonomousRemediationActions: descriptor.autonomousRemediationActions(),
    autonomousRemediationFields: descriptor.autonomousRemediationFields(),
    continuousAssuranceFactors: descriptor.continuousAssuranceFactors(),
    dynamicAuditPlanningFactors: descriptor.dynamicAuditPlanningFactors(),
    privacyPreservingAssuranceMethods: descriptor.privacyPreservingAssuranceMethods(),
    machineReadableAttestationFields: descriptor.machineReadableAttestationFields(),
    federatedTenantRequirements: descriptor.federatedTenantRequirements(),
    propertyIntelligenceCapabilities: descriptor.propertyIntelligenceCapabilities(),
    supplierPluginCapabilities: descriptor.supplierPluginCapabilities(),
    digitalTwinUses: descriptor.digitalTwinUses(),
    governanceMemoryItems: descriptor.governanceMemoryItems(),
    humanStrengths: descriptor.humanStrengths(),
    machineStrengths: descriptor.machineStrengths(),
    trustFactors: descriptor.trustFactors(),
    explainabilityFields: descriptor.explainabilityFields(),
    selfImprovementTargets: descriptor.selfImprovementTargets(),
    architectureRelationships: descriptor.architectureRelationships(),
    transitionCriteria: descriptor.transitionCriteria(),
    evolutionRisks: descriptor.evolutionRisks(),
    failureHandling: descriptor.failureHandling(),
    lifecycleStages: descriptor.lifecycleStages(),
    qualityAttributes: descriptor.qualityAttributes(),
    architecturalRules: descriptor.architecturalRules(),
    roadmapSequence: descriptor.roadmapSequence()
  });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) {
    if (Array.isArray(value)) result[key] = value.slice(0, 1);
  }
  return result;
}
