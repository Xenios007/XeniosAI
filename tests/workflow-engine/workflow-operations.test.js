import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_CAPACITY_DIMENSIONS,
  WORKFLOW_DEGRADATION_MODES,
  WORKFLOW_HEALTH_DIMENSIONS,
  WORKFLOW_HEALTH_STATES,
  WORKFLOW_OPERATIONAL_SLIS,
  WORKFLOW_OPERATIONS_BOUNDARIES,
  WORKFLOW_OPERATIONS_ERROR_CODE,
  WORKFLOW_OPERATIONS_RULES,
  WorkflowOperationsDescriptor,
  WorkflowOperationsProfile,
  addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-09 exposes multidimensional health, SLI, and capacity semantics', () => {
  const descriptor = new WorkflowOperationsDescriptor();
  assert.deepEqual(descriptor.healthDimensions(), Object.values(WORKFLOW_HEALTH_DIMENSIONS));
  assert.ok(descriptor.healthStates().includes(WORKFLOW_HEALTH_STATES.UNKNOWN));
  assert.ok(descriptor.serviceLevelIndicators().includes(WORKFLOW_OPERATIONAL_SLIS.COMPLETION));
  assert.deepEqual(descriptor.capacityDimensions(), Object.values(WORKFLOW_CAPACITY_DIMENSIONS));
});

test('ARCH-015-09 exposes degradation, recovery, automation, and scope boundaries', () => {
  const descriptor = new WorkflowOperationsDescriptor();
  assert.ok(descriptor.degradationModes().includes(WORKFLOW_DEGRADATION_MODES.NO_AGENT));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_OPERATIONS_RULES.RECONCILED_RECOVERY));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_OPERATIONS_RULES.ADVISORY_AI));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_OPERATIONS_BOUNDARIES.DOMAIN_OUTCOMES));
});

test('ARCH-015-09 validates profiles and rejects operational shortcuts', () => {
  const descriptor = new WorkflowOperationsDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'multidimensionalHealth', 'accountableOwnership', 'readinessRequired', 'correlatedTelemetry',
    'cardinalityControlled', 'sensitiveDataProtected', 'taskAttemptDistinction',
    'expectedWaitDistinction', 'businessOutcomeDistinction', 'domainEvidenceDistinct',
    'businessRelevantSlos', 'unknownHealthPreserved', 'versionVisible', 'tenantPropertyScoped',
    'controlledOperations', 'capacityEndToEnd', 'tenantFairness', 'admissionBackpressure',
    'tailLatencyMeasured', 'realisticPerformanceTesting', 'degradationPredefined',
    'reconciledRecovery', 'singleTransitionAuthority', 'backlogRecoveryBounded',
    'automationBounded', 'aiRecommendationsAdvisory', 'operationalDataGoverned',
    'changesCorrelated', 'continuousImprovement', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'uptimeEqualsHealth', 'queueDepthAloneSufficient', 'unknownMeansHealthy',
    'unrestrictedMetricIdentifiers', 'transportSuccessMeansCompletion', 'notificationMeansDecision',
    'operationsMutateStateDirectly', 'averageLatencySufficient', 'cacheOwnsState',
    'degradationBypassesControls', 'blindRetry', 'aiRecommendationIsCommand',
    'failoverCreatesDualAuthority', 'uncontrolledCatchup', 'universalExactlyOnce',
    'selectsOperationsProduct', 'definesAdjacentDomains'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /business-health/);
  assert.match(validation.errors.join('\n'), /requires multidimensionalHealth/);
  assert.match(validation.errors.join('\n'), /prohibits unknownMeansHealthy/);
});

test('ARCH-015-09 detects incomplete metadata', () => {
  class IncompleteDescriptor extends WorkflowOperationsDescriptor {
    healthDimensions() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === WORKFLOW_OPERATIONS_ERROR_CODE
  );
});

test('ARCH-015-09 profile is immutable', () => {
  const profile = complete(new WorkflowOperationsDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.healthDimensions.push('other'), TypeError);
});

test('ARCH-015-09 descriptor is registered', () => {
  const descriptor = addWorkflowEngine(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('WorkflowOperationsDescriptor');
  assert.ok(descriptor instanceof WorkflowOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'operationalObjectives', 'healthDimensions', 'healthStates', 'observabilitySignals',
    'telemetryCorrelations', 'serviceLevelIndicators', 'alertConditions', 'capacityDimensions',
    'degradationModes', 'triageStates', 'operationalActions', 'qualityAttributes',
    'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new WorkflowOperationsProfile({ profileName: 'Workflow Operations', ...metadata });
}
