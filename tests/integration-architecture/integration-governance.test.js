import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FUTURE_INTEGRATION_GOVERNANCE_DIRECTIONS,
  GOVERNED_CONTRACT_REVIEW_AREAS,
  GOVERNED_INTEGRATION_LIFECYCLE_STAGES,
  INTEGRATION_AI_GOVERNANCE_ACTIVITIES,
  INTEGRATION_ARCHITECTURE_ERROR_CODES,
  INTEGRATION_COMPLIANCE_ALIGNMENT_AREAS,
  INTEGRATION_CONTRACT_LIFECYCLE_STAGES,
  INTEGRATION_DOCUMENTATION_REQUIREMENTS,
  INTEGRATION_GOVERNANCE_EXPECTATIONS,
  INTEGRATION_GOVERNANCE_LIFECYCLE_STAGES,
  INTEGRATION_GOVERNANCE_METRICS,
  INTEGRATION_GOVERNANCE_MODEL_STAGES,
  INTEGRATION_GOVERNANCE_OBJECTIVES,
  INTEGRATION_GOVERNANCE_PRINCIPLES,
  INTEGRATION_GOVERNANCE_RELATIONSHIP_FLOW_STAGES,
  INTEGRATION_GOVERNANCE_SECURITY_CONTROLS,
  INTEGRATION_OPERATIONAL_GOVERNANCE_ACTIVITIES,
  INTEGRATION_OWNERSHIP_ASSIGNMENTS,
  INTEGRATION_OWNERSHIP_SCOPE,
  INTEGRATION_QUALITY_ASSURANCE_CONSIDERATIONS,
  INTEGRATION_STANDARDIZATION_AREAS,
  INTEGRATION_VERSION_GOVERNANCE_CAPABILITIES,
  IntegrationGovernanceDescriptor,
  IntegrationGovernanceProfile,
  addIntegrationArchitecture
} from '../../src/integration-architecture/index.js';

test('integration governance exposes documented objectives, model, principles, lifecycle, and relationship flow', () => {
  const descriptor = new IntegrationGovernanceDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(INTEGRATION_GOVERNANCE_OBJECTIVES));
  assert.deepEqual(descriptor.governanceModel(), Object.values(INTEGRATION_GOVERNANCE_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(INTEGRATION_GOVERNANCE_PRINCIPLES));
  assert.deepEqual(descriptor.governanceLifecycle(), Object.values(INTEGRATION_GOVERNANCE_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(INTEGRATION_GOVERNANCE_RELATIONSHIP_FLOW_STAGES));
});

test('integration governance exposes ownership, contract, lifecycle, versioning, security, operations, AI, compliance, quality, and metrics metadata', () => {
  const descriptor = new IntegrationGovernanceDescriptor();

  assert.ok(descriptor.expectations().includes(INTEGRATION_GOVERNANCE_EXPECTATIONS.SUPPORT_OPERATIONAL_EXCELLENCE));
  assert.ok(descriptor.ownershipAssignments().includes(INTEGRATION_OWNERSHIP_ASSIGNMENTS.ENTERPRISE_ARCHITECTURE));
  assert.ok(descriptor.ownershipScope().includes(INTEGRATION_OWNERSHIP_SCOPE.CONSUMER_COMMUNICATION));
  assert.ok(descriptor.contractReviewAreas().includes(GOVERNED_CONTRACT_REVIEW_AREAS.COMPATIBILITY_EVALUATION));
  assert.ok(descriptor.standardizationAreas().includes(INTEGRATION_STANDARDIZATION_AREAS.ERROR_HANDLING));
  assert.deepEqual(descriptor.integrationLifecycle(), Object.values(GOVERNED_INTEGRATION_LIFECYCLE_STAGES));
  assert.deepEqual(descriptor.contractLifecycle(), Object.values(INTEGRATION_CONTRACT_LIFECYCLE_STAGES));
  assert.ok(descriptor.versionGovernanceCapabilities().includes(INTEGRATION_VERSION_GOVERNANCE_CAPABILITIES.DEPRECATION_PLANNING));
  assert.ok(descriptor.documentationRequirements().includes(INTEGRATION_DOCUMENTATION_REQUIREMENTS.VERSION_HISTORY));
  assert.ok(descriptor.securityControls().includes(INTEGRATION_GOVERNANCE_SECURITY_CONTROLS.AI_GOVERNANCE));
  assert.ok(descriptor.operationalGovernanceActivities().includes(INTEGRATION_OPERATIONAL_GOVERNANCE_ACTIVITIES.SERVICE_HEALTH_ASSESSMENT));
  assert.ok(descriptor.aiGovernanceActivities().includes(INTEGRATION_AI_GOVERNANCE_ACTIVITIES.HUMAN_OVERSIGHT));
  assert.ok(descriptor.complianceAlignmentAreas().includes(INTEGRATION_COMPLIANCE_ALIGNMENT_AREAS.RISK_MANAGEMENT));
  assert.ok(descriptor.qualityAssuranceConsiderations().includes(INTEGRATION_QUALITY_ASSURANCE_CONSIDERATIONS.OPERATIONAL_READINESS));
  assert.ok(descriptor.governanceMetrics().includes(INTEGRATION_GOVERNANCE_METRICS.SECURITY_EXCEPTIONS));
});

test('integration governance validates complete architecture governance profiles', () => {
  const descriptor = new IntegrationGovernanceDescriptor();
  const valid = descriptor.validateGovernance(
    new IntegrationGovernanceProfile({
      governanceName: 'Enterprise Integration Governance',
      modelStages: Object.values(INTEGRATION_GOVERNANCE_MODEL_STAGES),
      principles: Object.values(INTEGRATION_GOVERNANCE_PRINCIPLES),
      expectations: Object.values(INTEGRATION_GOVERNANCE_EXPECTATIONS),
      ownershipAssignments: Object.values(INTEGRATION_OWNERSHIP_ASSIGNMENTS),
      ownershipScope: Object.values(INTEGRATION_OWNERSHIP_SCOPE),
      contractReviewAreas: Object.values(GOVERNED_CONTRACT_REVIEW_AREAS),
      standardizationAreas: Object.values(INTEGRATION_STANDARDIZATION_AREAS),
      integrationLifecycleStages: Object.values(GOVERNED_INTEGRATION_LIFECYCLE_STAGES),
      contractLifecycleStages: Object.values(INTEGRATION_CONTRACT_LIFECYCLE_STAGES),
      versionGovernanceCapabilities: Object.values(INTEGRATION_VERSION_GOVERNANCE_CAPABILITIES),
      documentationRequirements: Object.values(INTEGRATION_DOCUMENTATION_REQUIREMENTS),
      securityControls: Object.values(INTEGRATION_GOVERNANCE_SECURITY_CONTROLS),
      operationalGovernanceActivities: Object.values(INTEGRATION_OPERATIONAL_GOVERNANCE_ACTIVITIES),
      aiGovernanceActivities: Object.values(INTEGRATION_AI_GOVERNANCE_ACTIVITIES),
      complianceAlignmentAreas: Object.values(INTEGRATION_COMPLIANCE_ALIGNMENT_AREAS),
      qualityAssuranceConsiderations: Object.values(INTEGRATION_QUALITY_ASSURANCE_CONSIDERATIONS),
      governanceMetrics: Object.values(INTEGRATION_GOVERNANCE_METRICS),
      governanceLifecycleStages: Object.values(INTEGRATION_GOVERNANCE_LIFECYCLE_STAGES)
    })
  );
  const invalid = descriptor.validateGovernance({
    governanceName: '',
    modelStages: [INTEGRATION_GOVERNANCE_MODEL_STAGES.DESIGN],
    principles: [INTEGRATION_GOVERNANCE_PRINCIPLES.EXPLICIT_OWNERSHIP],
    expectations: [INTEGRATION_GOVERNANCE_EXPECTATIONS.PROTECT_INTEROPERABILITY],
    ownershipAssignments: [INTEGRATION_OWNERSHIP_ASSIGNMENTS.BUSINESS_CAPABILITY_SERVICE_OWNER],
    ownershipScope: [INTEGRATION_OWNERSHIP_SCOPE.BUSINESS_CAPABILITY],
    contractReviewAreas: [GOVERNED_CONTRACT_REVIEW_AREAS.CONTRACT_REVIEW],
    standardizationAreas: [INTEGRATION_STANDARDIZATION_AREAS.NAMING],
    integrationLifecycleStages: [GOVERNED_INTEGRATION_LIFECYCLE_STAGES.PROPOSED],
    contractLifecycleStages: [INTEGRATION_CONTRACT_LIFECYCLE_STAGES.DRAFT],
    versionGovernanceCapabilities: [INTEGRATION_VERSION_GOVERNANCE_CAPABILITIES.COMPATIBILITY_MANAGEMENT],
    documentationRequirements: [INTEGRATION_DOCUMENTATION_REQUIREMENTS.BUSINESS_PURPOSE],
    securityControls: [INTEGRATION_GOVERNANCE_SECURITY_CONTROLS.IDENTITY],
    operationalGovernanceActivities: [INTEGRATION_OPERATIONAL_GOVERNANCE_ACTIVITIES.AVAILABILITY_MONITORING],
    aiGovernanceActivities: [INTEGRATION_AI_GOVERNANCE_ACTIVITIES.CAPABILITY_APPROVAL],
    complianceAlignmentAreas: [INTEGRATION_COMPLIANCE_ALIGNMENT_AREAS.SECURITY_POLICIES],
    qualityAssuranceConsiderations: [INTEGRATION_QUALITY_ASSURANCE_CONSIDERATIONS.CONTRACT_CONSISTENCY],
    governanceMetrics: [INTEGRATION_GOVERNANCE_METRICS.ACTIVE_INTEGRATIONS],
    governanceLifecycleStages: [INTEGRATION_GOVERNANCE_LIFECYCLE_STAGES.DEFINE],
    explicitOwnershipAssigned: false,
    contractsGovernedThroughoutLifecycle: false,
    enterprisePracticesStandardized: false,
    consumersProtectedThroughControlledEvolution: false,
    enterpriseSecurityConsistent: false,
    comprehensiveDocumentationMaintained: false,
    governanceEffectivenessMeasured: false,
    preservesServiceAutonomy: false,
    supportsImplementationFlexibility: false,
    vendorNeutral: false,
    technologyNeutral: false,
    organizationalStructureSpecific: true,
    approvalWorkflowSpecific: true,
    governanceToolSpecific: true,
    implementationProcedureSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Review/);
  assert.match(invalid.errors.join('\n'), /contract-governance/);
  assert.match(invalid.errors.join('\n'), /preserve-service-autonomy/);
  assert.match(invalid.errors.join('\n'), /integration-contract-service-owner/);
  assert.match(invalid.errors.join('\n'), /integration-contract/);
  assert.match(invalid.errors.join('\n'), /consistency-validation/);
  assert.match(invalid.errors.join('\n'), /versioning/);
  assert.match(invalid.errors.join('\n'), /Designed/);
  assert.match(invalid.errors.join('\n'), /Review/);
  assert.match(invalid.errors.join('\n'), /controlled-change/);
  assert.match(invalid.errors.join('\n'), /ownership/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /capacity-review/);
  assert.match(invalid.errors.join('\n'), /provider-governance/);
  assert.match(invalid.errors.join('\n'), /data-governance/);
  assert.match(invalid.errors.join('\n'), /reliability/);
  assert.match(invalid.errors.join('\n'), /contract-compliance/);
  assert.match(invalid.errors.join('\n'), /Implement/);
  assert.match(invalid.errors.join('\n'), /explicit ownership/);
  assert.match(invalid.errors.join('\n'), /controlled evolution/);
  assert.match(invalid.errors.join('\n'), /Specific organizational structures are outside ARCH-009-08 scope/);
  assert.match(invalid.errors.join('\n'), /Governance tools are outside ARCH-009-08 scope/);
});

test('integration governance reports future directions without implementing them', () => {
  const descriptor = new IntegrationGovernanceDescriptor();

  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_GOVERNANCE_DIRECTIONS.POLICY_AS_CODE_INTEGRATION_GOVERNANCE));
  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_GOVERNANCE_DIRECTIONS.AI_ASSISTED_GOVERNANCE_REVIEWS));
  assert.ok(descriptor.futureDirections().includes(FUTURE_INTEGRATION_GOVERNANCE_DIRECTIONS.DYNAMIC_LIFECYCLE_GOVERNANCE));
});

test('integration governance assertion rejects incomplete metadata', () => {
  class IncompleteIntegrationGovernanceDescriptor extends IntegrationGovernanceDescriptor {
    ownershipAssignments() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteIntegrationGovernanceDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === INTEGRATION_ARCHITECTURE_ERROR_CODES.INTEGRATION_GOVERNANCE_INVALID &&
      error.details.errors.some(message => message.includes('ownership assignments'))
  );
});

test('integration governance descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addIntegrationArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('IntegrationGovernanceDescriptor');

  assert.ok(descriptor instanceof IntegrationGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
