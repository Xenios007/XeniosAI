import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DEPLOYMENT_EVOLUTION_GOVERNANCE_CONTROLS,
  DEPLOYMENT_EVOLUTION_OBJECTIVES,
  DEPLOYMENT_EVOLUTION_PRINCIPLES,
  DEPLOYMENT_MODEL_ERROR_CODES,
  DeploymentEvolutionAssessment,
  DeploymentEvolutionCandidate,
  FUTURE_AI_INFRASTRUCTURE_CAPABILITIES,
  FUTURE_COMPUTE_EVOLUTION_CAPABILITIES,
  FUTURE_DEPLOYMENT_AUTOMATION_CAPABILITIES,
  FUTURE_NETWORK_EVOLUTION_CAPABILITIES,
  FUTURE_OBSERVABILITY_EVOLUTION_CAPABILITIES,
  FUTURE_OPERATIONAL_INTELLIGENCE_CAPABILITIES,
  FUTURE_SECURITY_EVOLUTION_CAPABILITIES,
  FUTURE_STORAGE_EVOLUTION_CAPABILITIES,
  FutureDeploymentEvolutionDescriptor,
  GLOBAL_DEPLOYMENT_EVOLUTION_STAGES,
  INFRASTRUCTURE_EVOLUTION_STAGES,
  LONG_TERM_DEPLOYMENT_CHARACTERISTICS,
  SUSTAINABILITY_OBJECTIVES,
  TECHNOLOGY_INDEPENDENCE_TARGETS,
  addDeploymentModel
} from '../../src/deployment-model/index.js';

test('future deployment evolution exposes objectives, principles, and infrastructure progression', () => {
  const descriptor = new FutureDeploymentEvolutionDescriptor();

  assert.ok(descriptor.objectives().includes(DEPLOYMENT_EVOLUTION_OBJECTIVES.LONG_TERM_ADAPTABILITY));
  assert.ok(descriptor.objectives().includes(DEPLOYMENT_EVOLUTION_OBJECTIVES.AI_READINESS));
  assert.ok(descriptor.principles().includes(DEPLOYMENT_EVOLUTION_PRINCIPLES.MINIMIZE_VENDOR_LOCK_IN));
  assert.deepEqual(descriptor.infrastructureEvolution(), [
    INFRASTRUCTURE_EVOLUTION_STAGES.PHYSICAL_SERVERS,
    INFRASTRUCTURE_EVOLUTION_STAGES.VIRTUAL_MACHINES,
    INFRASTRUCTURE_EVOLUTION_STAGES.CONTAINERS,
    INFRASTRUCTURE_EVOLUTION_STAGES.CONTAINER_ORCHESTRATION,
    INFRASTRUCTURE_EVOLUTION_STAGES.SERVERLESS_PLATFORMS,
    INFRASTRUCTURE_EVOLUTION_STAGES.AUTONOMOUS_INFRASTRUCTURE
  ]);
});

test('future deployment evolution exposes documented capability roadmaps as placeholders', () => {
  const descriptor = new FutureDeploymentEvolutionDescriptor();

  assert.ok(descriptor.computeCapabilities().includes(FUTURE_COMPUTE_EVOLUTION_CAPABILITIES.GPU_RESOURCE_POOLS));
  assert.ok(descriptor.storageCapabilities().includes(FUTURE_STORAGE_EVOLUTION_CAPABILITIES.AI_MANAGED_INDEXING));
  assert.ok(descriptor.networkCapabilities().includes(FUTURE_NETWORK_EVOLUTION_CAPABILITIES.SERVICE_MESH_ARCHITECTURES));
  assert.ok(descriptor.aiInfrastructureCapabilities().includes(FUTURE_AI_INFRASTRUCTURE_CAPABILITIES.FEDERATED_AI_EXECUTION));
  assert.ok(descriptor.deploymentAutomationCapabilities().includes(FUTURE_DEPLOYMENT_AUTOMATION_CAPABILITIES.POLICY_AS_CODE));
  assert.ok(descriptor.operationalIntelligenceCapabilities().includes(FUTURE_OPERATIONAL_INTELLIGENCE_CAPABILITIES.AUTOMATED_ROOT_CAUSE_ANALYSIS));
  assert.ok(descriptor.securityEvolutionCapabilities().includes(FUTURE_SECURITY_EVOLUTION_CAPABILITIES.CONFIDENTIAL_COMPUTING));
  assert.ok(descriptor.observabilityEvolutionCapabilities().includes(FUTURE_OBSERVABILITY_EVOLUTION_CAPABILITIES.BUSINESS_IMPACT_CORRELATION));
});

test('future deployment evolution exposes global roadmap and long-term vision', () => {
  const descriptor = new FutureDeploymentEvolutionDescriptor();

  assert.deepEqual(descriptor.globalDeploymentEvolution(), [
    GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.SINGLE_REGION,
    GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.MULTI_ZONE,
    GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.MULTI_REGION,
    GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.GLOBAL_PLATFORM,
    GLOBAL_DEPLOYMENT_EVOLUTION_STAGES.EDGE_DEPLOYMENT
  ]);
  assert.ok(descriptor.longTermCharacteristics().includes(LONG_TERM_DEPLOYMENT_CHARACTERISTICS.AUTONOMOUS_DEPLOYMENT));
  assert.ok(descriptor.longTermCharacteristics().includes(LONG_TERM_DEPLOYMENT_CHARACTERISTICS.CONTINUOUS_OPTIMIZATION));
});

test('future deployment evolution validates architecture-preserving candidates', () => {
  const descriptor = new FutureDeploymentEvolutionDescriptor();
  const valid = descriptor.validateCandidate(
    new DeploymentEvolutionCandidate({
      capabilityName: 'Progressive Delivery',
      evolutionArea: 'deployment-automation',
      businessBenefit: 'Reduce release risk without reducing governance.'
    })
  );
  const invalid = descriptor.validateCandidate({
    capabilityName: '',
    evolutionArea: 'vendor-platform',
    businessBenefit: '',
    preservesBusinessOwnership: false,
    preservesDomainBoundaries: false,
    preservesServiceResponsibilities: false,
    preservesDataOwnership: false,
    preservesPlatformPrinciples: false,
    incrementalModernization: false,
    backwardCompatible: false,
    reducesOperationalComplexity: false,
    improvesAutomation: false,
    strengthensResilience: false,
    avoidsVendorLockIn: false,
    implementationTimelinePrescribed: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /future capability/);
  assert.match(invalid.errors.join('\n'), /Unsupported deployment evolution area/);
  assert.match(invalid.errors.join('\n'), /business ownership/);
  assert.match(invalid.errors.join('\n'), /domain boundaries/);
  assert.match(invalid.errors.join('\n'), /vendor lock-in/);
  assert.match(invalid.errors.join('\n'), /does not prescribe implementation timelines/);
});

test('future deployment evolution validates governance assessments', () => {
  const descriptor = new FutureDeploymentEvolutionDescriptor();
  const valid = descriptor.validateAssessment(
    new DeploymentEvolutionAssessment({
      candidateName: 'Autonomous Deployment Validation',
      governanceControls: Object.values(DEPLOYMENT_EVOLUTION_GOVERNANCE_CONTROLS),
      technologyIndependenceTargets: Object.values(TECHNOLOGY_INDEPENDENCE_TARGETS),
      sustainabilityObjectives: Object.values(SUSTAINABILITY_OBJECTIVES)
    })
  );
  const invalid = descriptor.validateAssessment({
    candidateName: '',
    governanceControls: [DEPLOYMENT_EVOLUTION_GOVERNANCE_CONTROLS.ARCHITECTURE_REVIEWS],
    technologyIndependenceTargets: [TECHNOLOGY_INDEPENDENCE_TARGETS.CLOUD_VENDORS],
    sustainabilityObjectives: [SUSTAINABILITY_OBJECTIVES.EFFICIENT_RESOURCE_UTILIZATION],
    architectureReviewed: false,
    riskAnalyzed: false,
    compatibilityValidated: false,
    operationalReadinessReviewed: false,
    businessAligned: false,
    humanGovernancePreserved: false,
    architectureRedesignRequired: true,
    vendorDecisionEmbedded: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /identify the candidate/);
  assert.match(invalid.errors.join('\n'), /technology-assessments/);
  assert.match(invalid.errors.join('\n'), /database-vendors/);
  assert.match(invalid.errors.join('\n'), /energy-aware-scheduling/);
  assert.match(invalid.errors.join('\n'), /human governance/);
  assert.match(invalid.errors.join('\n'), /architectural redesign/);
});

test('future deployment evolution assertion rejects incomplete roadmap metadata', () => {
  class IncompleteEvolutionDescriptor extends FutureDeploymentEvolutionDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteEvolutionDescriptor().assertEvolution(),
    error =>
      error instanceof PlatformError &&
      error.code === DEPLOYMENT_MODEL_ERROR_CODES.FUTURE_DEPLOYMENT_EVOLUTION_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('future deployment evolution descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addDeploymentModel(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('FutureDeploymentEvolutionDescriptor');

  assert.ok(descriptor instanceof FutureDeploymentEvolutionDescriptor);
  assert.equal(descriptor.assertEvolution().isValid, true);
});
