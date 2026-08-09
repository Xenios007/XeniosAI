import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_OBSERVABILITY_GOVERNANCE_REQUIREMENTS,
  FUTURE_OBSERVABILITY_GOVERNANCE_CAPABILITIES,
  GovernedObservabilityEvidence,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS,
  OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES,
  OBSERVABILITY_EXPLAINABILITY_AREAS,
  OBSERVABILITY_GOVERNANCE_ARCHITECTURAL_RULES,
  OBSERVABILITY_GOVERNANCE_BUSINESS_CONTEXT,
  OBSERVABILITY_GOVERNANCE_IMPROVEMENT_ACTIVITIES,
  OBSERVABILITY_GOVERNANCE_METRICS,
  OBSERVABILITY_GOVERNANCE_MODEL_STAGES,
  OBSERVABILITY_GOVERNANCE_OBJECTIVES,
  OBSERVABILITY_GOVERNANCE_PRINCIPLES,
  OBSERVABILITY_GOVERNANCE_RELATIONSHIP_STAGES,
  OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS,
  OBSERVABILITY_OWNERSHIP_RESPONSIBILITIES,
  OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS,
  OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES,
  OBSERVABILITY_STANDARDIZATION_AREAS,
  ObservabilityGovernanceDescriptor,
  ObservabilityGovernanceProfile,
  TELEMETRY_GOVERNANCE_CONSIDERATIONS,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('observability governance exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new ObservabilityGovernanceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(OBSERVABILITY_GOVERNANCE_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(OBSERVABILITY_GOVERNANCE_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(OBSERVABILITY_GOVERNANCE_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(OBSERVABILITY_GOVERNANCE_RELATIONSHIP_STAGES));
});

test('observability governance exposes ownership, integrity, lifecycle, security, quality, metrics, and future metadata', () => {
  const descriptor = new ObservabilityGovernanceDescriptor();

  assert.ok(descriptor.ownershipResponsibilities().includes(OBSERVABILITY_OWNERSHIP_RESPONSIBILITIES.GOVERNANCE_COMPLIANCE));
  assert.ok(descriptor.integrityRequirements().includes(OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS.AUDITABLE));
  assert.ok(descriptor.businessContext().includes(OBSERVABILITY_GOVERNANCE_BUSINESS_CONTEXT.ORGANIZATIONAL_UNIT));
  assert.ok(descriptor.standardizationAreas().includes(OBSERVABILITY_STANDARDIZATION_AREAS.GOVERNANCE_CLASSIFICATIONS));
  assert.ok(descriptor.explainabilityAreas().includes(OBSERVABILITY_EXPLAINABILITY_AREAS.SECURITY_DECISIONS));
  assert.ok(descriptor.responsibilityOwners().includes(OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS.GOVERNANCE_STANDARDS));
  assert.ok(descriptor.evidenceLifecycleStages().includes(OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES.RETIRED));
  assert.ok(descriptor.telemetryGovernanceConsiderations().includes(TELEMETRY_GOVERNANCE_CONSIDERATIONS.PRIVACY));
  assert.ok(descriptor.aiGovernanceRequirements().includes(AI_OBSERVABILITY_GOVERNANCE_REQUIREMENTS.DECISION_TRANSPARENCY));
  assert.ok(descriptor.securityAlignmentActivities().includes(OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES.RISK_MANAGEMENT));
  assert.ok(descriptor.qualityAssuranceConsiderations().includes(OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS.BUSINESS_USEFULNESS));
  assert.ok(descriptor.governanceMetrics().includes(OBSERVABILITY_GOVERNANCE_METRICS.OPERATIONAL_ADOPTION));
  assert.ok(descriptor.improvementActivities().includes(OBSERVABILITY_GOVERNANCE_IMPROVEMENT_ACTIVITIES.ARCHITECTURAL_EVOLUTION));
  assert.ok(descriptor.architecturalRules().includes(OBSERVABILITY_GOVERNANCE_ARCHITECTURAL_RULES.ALIGN_WITH_ENTERPRISE_SECURITY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_GOVERNANCE_CAPABILITIES.CONTINUOUS_GOVERNANCE_ASSURANCE));
});

test('observability governance validates complete governed observability profiles', () => {
  const descriptor = new ObservabilityGovernanceDescriptor();
  const valid = descriptor.validateProfile(
    new ObservabilityGovernanceProfile({
      governanceName: 'Enterprise Observability Governance',
      objectives: Object.values(OBSERVABILITY_GOVERNANCE_OBJECTIVES),
      modelStages: Object.values(OBSERVABILITY_GOVERNANCE_MODEL_STAGES),
      principles: Object.values(OBSERVABILITY_GOVERNANCE_PRINCIPLES),
      ownershipResponsibilities: Object.values(OBSERVABILITY_OWNERSHIP_RESPONSIBILITIES),
      integrityRequirements: Object.values(OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS),
      businessContext: Object.values(OBSERVABILITY_GOVERNANCE_BUSINESS_CONTEXT),
      standardizationAreas: Object.values(OBSERVABILITY_STANDARDIZATION_AREAS),
      explainabilityAreas: Object.values(OBSERVABILITY_EXPLAINABILITY_AREAS),
      responsibilityOwners: Object.values(OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS),
      evidenceLifecycleStages: Object.values(OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES),
      telemetryGovernanceConsiderations: Object.values(TELEMETRY_GOVERNANCE_CONSIDERATIONS),
      aiGovernanceRequirements: Object.values(AI_OBSERVABILITY_GOVERNANCE_REQUIREMENTS),
      securityAlignmentActivities: Object.values(OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES),
      qualityAssuranceConsiderations: Object.values(OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS),
      governanceMetrics: Object.values(OBSERVABILITY_GOVERNANCE_METRICS),
      improvementActivities: Object.values(OBSERVABILITY_GOVERNANCE_IMPROVEMENT_ACTIVITIES),
      relationshipStages: Object.values(OBSERVABILITY_GOVERNANCE_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(OBSERVABILITY_GOVERNANCE_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_OBSERVABILITY_GOVERNANCE_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    governanceName: '',
    objectives: [OBSERVABILITY_GOVERNANCE_OBJECTIVES.CLEAR_OWNERSHIP],
    modelStages: [OBSERVABILITY_GOVERNANCE_MODEL_STAGES.DESIGN],
    principles: [OBSERVABILITY_GOVERNANCE_PRINCIPLES.EXPLICIT_OWNERSHIP],
    ownershipResponsibilities: [OBSERVABILITY_OWNERSHIP_RESPONSIBILITIES.BUSINESS_CONTEXT],
    integrityRequirements: [OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS.AUTHENTIC],
    businessContext: [OBSERVABILITY_GOVERNANCE_BUSINESS_CONTEXT.BUSINESS_CAPABILITY],
    standardizationAreas: [OBSERVABILITY_STANDARDIZATION_AREAS.NAMING],
    explainabilityAreas: [OBSERVABILITY_EXPLAINABILITY_AREAS.BUSINESS_OUTCOMES],
    responsibilityOwners: [OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS.BUSINESS_EVIDENCE],
    evidenceLifecycleStages: [OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES.DEFINED],
    telemetryGovernanceConsiderations: [TELEMETRY_GOVERNANCE_CONSIDERATIONS.BUSINESS_RELEVANCE],
    aiGovernanceRequirements: [AI_OBSERVABILITY_GOVERNANCE_REQUIREMENTS.AGENT_ACCOUNTABILITY],
    securityAlignmentActivities: [OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES.EVIDENCE_PROTECTION],
    qualityAssuranceConsiderations: [OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS.COMPLETENESS],
    governanceMetrics: [OBSERVABILITY_GOVERNANCE_METRICS.EVIDENCE_COMPLETENESS],
    improvementActivities: [OBSERVABILITY_GOVERNANCE_IMPROVEMENT_ACTIVITIES.EVIDENCE_REFINEMENT],
    relationshipStages: [OBSERVABILITY_GOVERNANCE_RELATIONSHIP_STAGES.BUSINESS],
    architecturalRules: [OBSERVABILITY_GOVERNANCE_ARCHITECTURAL_RULES.ASSIGN_EXPLICIT_OWNERSHIP],
    futureCapabilities: [FUTURE_OBSERVABILITY_GOVERNANCE_CAPABILITIES.AI_ASSISTED_EVIDENCE_GOVERNANCE],
    explicitOwnershipAssigned: false,
    evidenceIntegrityPreserved: false,
    businessContextPreserved: false,
    standardsEnforced: false,
    explainabilitySupported: false,
    securityAligned: false,
    lifecycleGoverned: false,
    continuousImprovementEnabled: false,
    technologyNeutral: false,
    vendorNeutral: false,
    governanceOrganizationSpecific: true,
    operationalProcessSpecific: true,
    observabilityProductSpecific: true,
    implementationTechnologySpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /trusted-operational-evidence/);
  assert.match(invalid.errors.join('\n'), /Produce/);
  assert.match(invalid.errors.join('\n'), /evidence-integrity/);
  assert.match(invalid.errors.join('\n'), /evidence-quality/);
  assert.match(invalid.errors.join('\n'), /consistent/);
  assert.match(invalid.errors.join('\n'), /workflow/);
  assert.match(invalid.errors.join('\n'), /correlation-identifiers/);
  assert.match(invalid.errors.join('\n'), /ai-participation/);
  assert.match(invalid.errors.join('\n'), /Service Owner/);
  assert.match(invalid.errors.join('\n'), /Produced/);
  assert.match(invalid.errors.join('\n'), /correlation/);
  assert.match(invalid.errors.join('\n'), /explainability/);
  assert.match(invalid.errors.join('\n'), /access-governance/);
  assert.match(invalid.errors.join('\n'), /accuracy/);
  assert.match(invalid.errors.join('\n'), /correlation-success/);
  assert.match(invalid.errors.join('\n'), /standard-updates/);
  assert.match(invalid.errors.join('\n'), /Services/);
  assert.match(invalid.errors.join('\n'), /preserve-evidence-integrity/);
  assert.match(invalid.errors.join('\n'), /autonomous-quality-validation/);
  assert.match(invalid.errors.join('\n'), /explicit ownership/);
  assert.match(invalid.errors.join('\n'), /Observability products are outside ARCH-010-09 scope/);
});

test('observability governance validates governed evidence ownership, lifecycle, integrity, context, and security', () => {
  const descriptor = new ObservabilityGovernanceDescriptor();
  const valid = descriptor.validateGovernedEvidence(
    new GovernedObservabilityEvidence({
      evidenceType: 'business-event',
      owner: OBSERVABILITY_GOVERNANCE_RESPONSIBILITY_OWNERS.BUSINESS_EVIDENCE,
      businessCapability: 'booking',
      lifecycleStage: OBSERVABILITY_EVIDENCE_LIFECYCLE_STAGES.CORRELATED,
      integrityRequirement: OBSERVABILITY_EVIDENCE_INTEGRITY_REQUIREMENTS.CORRELATED,
      correlationId: 'corr-governance-1',
      governanceClassification: 'enterprise-evidence',
      telemetryConsideration: TELEMETRY_GOVERNANCE_CONSIDERATIONS.DATA_QUALITY,
      securityAlignmentActivity: OBSERVABILITY_SECURITY_ALIGNMENT_ACTIVITIES.AUDITABILITY,
      qualityAssuranceConsideration: OBSERVABILITY_QUALITY_ASSURANCE_CONSIDERATIONS.CORRELATION_QUALITY,
      explainabilityArea: OBSERVABILITY_EXPLAINABILITY_AREAS.WORKFLOW_PROGRESSION
    })
  );
  const invalid = descriptor.validateGovernedEvidence({
    evidenceType: '',
    owner: 'vendor-team',
    businessCapability: '',
    lifecycleStage: 'uploaded',
    integrityRequirement: 'encrypted-by-tool',
    correlationId: '',
    governanceClassification: '',
    telemetryConsideration: 'vendor-dashboard',
    securityAlignmentActivity: 'firewall-rule',
    qualityAssuranceConsideration: 'sample-rate',
    explainabilityArea: 'log-parser',
    technologyNeutral: false,
    vendorNeutral: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /evidence type/);
  assert.match(invalid.errors.join('\n'), /Unsupported observability evidence owner/);
  assert.match(invalid.errors.join('\n'), /business capability context/);
  assert.match(invalid.errors.join('\n'), /Unsupported evidence lifecycle stage/);
  assert.match(invalid.errors.join('\n'), /Unsupported evidence integrity requirement/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /governance classification/);
  assert.match(invalid.errors.join('\n'), /Unsupported telemetry governance consideration/);
  assert.match(invalid.errors.join('\n'), /Unsupported security alignment activity/);
  assert.match(invalid.errors.join('\n'), /Unsupported quality assurance consideration/);
  assert.match(invalid.errors.join('\n'), /Unsupported explainability area/);
  assert.match(invalid.errors.join('\n'), /technology neutral/);
  assert.match(invalid.errors.join('\n'), /vendor neutral/);
});

test('observability governance assertion rejects incomplete metadata', () => {
  class IncompleteObservabilityGovernanceDescriptor extends ObservabilityGovernanceDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteObservabilityGovernanceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_GOVERNANCE_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('observability governance descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ObservabilityGovernanceDescriptor');

  assert.ok(descriptor instanceof ObservabilityGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
