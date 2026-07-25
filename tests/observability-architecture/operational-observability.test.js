import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FUTURE_OPERATIONAL_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  OPERATIONAL_CAPACITY_OBSERVATIONS,
  OPERATIONAL_CORRELATION_DOMAINS,
  OPERATIONAL_DIAGNOSTIC_AREAS,
  OPERATIONAL_HEALTH_INDICATORS,
  OPERATIONAL_IMPROVEMENT_DRIVERS,
  OPERATIONAL_INCIDENT_OBSERVATIONS,
  OPERATIONAL_OBSERVABILITY_ARCHITECTURAL_RULES,
  OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES,
  OPERATIONAL_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  OPERATIONAL_OBSERVABILITY_MODEL_STAGES,
  OPERATIONAL_OBSERVABILITY_OBJECTIVES,
  OPERATIONAL_OBSERVABILITY_PRINCIPLES,
  OPERATIONAL_OBSERVABILITY_QUALITY_ATTRIBUTES,
  OPERATIONAL_OBSERVABILITY_RELATIONSHIP_STAGES,
  OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES,
  OPERATIONAL_RELIABILITY_OBSERVATIONS,
  OPERATIONAL_VISIBILITY_DOMAINS,
  OperationalObservabilityDescriptor,
  OperationalObservabilityEvidence,
  OperationalObservabilityProfile,
  PROACTIVE_OPERATION_CAPABILITIES,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('operational observability exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new OperationalObservabilityDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(OPERATIONAL_OBSERVABILITY_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(OPERATIONAL_OBSERVABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(OPERATIONAL_OBSERVABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(OPERATIONAL_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('operational observability exposes health, performance, capacity, reliability, incident, governance, and future metadata', () => {
  const descriptor = new OperationalObservabilityDescriptor();

  assert.ok(descriptor.visibilityDomains().includes(OPERATIONAL_VISIBILITY_DOMAINS.BUSINESS_OPERATIONS));
  assert.ok(descriptor.proactiveCapabilities().includes(PROACTIVE_OPERATION_CAPABILITIES.PREDICTIVE_DIAGNOSTICS));
  assert.ok(descriptor.correlationDomains().includes(OPERATIONAL_CORRELATION_DOMAINS.INFRASTRUCTURE));
  assert.ok(descriptor.improvementDrivers().includes(OPERATIONAL_IMPROVEMENT_DRIVERS.GOVERNANCE_EVOLUTION));
  assert.ok(descriptor.healthIndicators().includes(OPERATIONAL_HEALTH_INDICATORS.BUSINESS_CONTINUITY));
  assert.ok(descriptor.performanceEvidenceTypes().includes(OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES.AI_EXECUTION_TIME));
  assert.ok(descriptor.capacityObservations().includes(OPERATIONAL_CAPACITY_OBSERVATIONS.BUSINESS_GROWTH_TRENDS));
  assert.ok(descriptor.reliabilityObservations().includes(OPERATIONAL_RELIABILITY_OBSERVATIONS.BUSINESS_AVAILABILITY));
  assert.ok(descriptor.incidentObservations().includes(OPERATIONAL_INCIDENT_OBSERVATIONS.LESSONS_LEARNED));
  assert.ok(descriptor.diagnosticAreas().includes(OPERATIONAL_DIAGNOSTIC_AREAS.BUSINESS_OUTCOMES));
  assert.ok(descriptor.operationalEvidenceTypes().includes(OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES.RELIABILITY_METRICS));
  assert.ok(descriptor.governanceActivities().includes(OPERATIONAL_OBSERVABILITY_GOVERNANCE_ACTIVITIES.SERVICE_MANAGEMENT));
  assert.ok(descriptor.qualityAttributes().includes(OPERATIONAL_OBSERVABILITY_QUALITY_ATTRIBUTES.OPERATIONAL_MATURITY));
  assert.ok(descriptor.architecturalRules().includes(OPERATIONAL_OBSERVABILITY_ARCHITECTURAL_RULES.SUPPORT_PROACTIVE_OPERATIONS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OPERATIONAL_OBSERVABILITY_CAPABILITIES.SELF_HEALING_ENTERPRISE_OPERATIONS));
});

test('operational observability validates complete business-aligned operational profiles', () => {
  const descriptor = new OperationalObservabilityDescriptor();
  const valid = descriptor.validateProfile(
    new OperationalObservabilityProfile({
      observabilityName: 'Enterprise Operations Visibility',
      objectives: Object.values(OPERATIONAL_OBSERVABILITY_OBJECTIVES),
      modelStages: Object.values(OPERATIONAL_OBSERVABILITY_MODEL_STAGES),
      principles: Object.values(OPERATIONAL_OBSERVABILITY_PRINCIPLES),
      visibilityDomains: Object.values(OPERATIONAL_VISIBILITY_DOMAINS),
      proactiveCapabilities: Object.values(PROACTIVE_OPERATION_CAPABILITIES),
      correlationDomains: Object.values(OPERATIONAL_CORRELATION_DOMAINS),
      improvementDrivers: Object.values(OPERATIONAL_IMPROVEMENT_DRIVERS),
      healthIndicators: Object.values(OPERATIONAL_HEALTH_INDICATORS),
      performanceEvidenceTypes: Object.values(OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES),
      capacityObservations: Object.values(OPERATIONAL_CAPACITY_OBSERVATIONS),
      reliabilityObservations: Object.values(OPERATIONAL_RELIABILITY_OBSERVATIONS),
      incidentObservations: Object.values(OPERATIONAL_INCIDENT_OBSERVATIONS),
      diagnosticAreas: Object.values(OPERATIONAL_DIAGNOSTIC_AREAS),
      operationalEvidenceTypes: Object.values(OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES),
      governanceActivities: Object.values(OPERATIONAL_OBSERVABILITY_GOVERNANCE_ACTIVITIES),
      qualityAttributes: Object.values(OPERATIONAL_OBSERVABILITY_QUALITY_ATTRIBUTES),
      relationshipStages: Object.values(OPERATIONAL_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(OPERATIONAL_OBSERVABILITY_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_OPERATIONAL_OBSERVABILITY_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    observabilityName: '',
    objectives: [OPERATIONAL_OBSERVABILITY_OBJECTIVES.OPERATIONAL_TRANSPARENCY],
    modelStages: [OPERATIONAL_OBSERVABILITY_MODEL_STAGES.ENTERPRISE_OPERATION],
    principles: [OPERATIONAL_OBSERVABILITY_PRINCIPLES.CONTINUOUS_OPERATIONAL_VISIBILITY],
    visibilityDomains: [OPERATIONAL_VISIBILITY_DOMAINS.SERVICES],
    proactiveCapabilities: [PROACTIVE_OPERATION_CAPABILITIES.EARLY_ANOMALY_DETECTION],
    correlationDomains: [OPERATIONAL_CORRELATION_DOMAINS.BUSINESS_TRANSACTIONS],
    improvementDrivers: [OPERATIONAL_IMPROVEMENT_DRIVERS.PROCESS_REFINEMENT],
    healthIndicators: [OPERATIONAL_HEALTH_INDICATORS.AVAILABILITY],
    performanceEvidenceTypes: [OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES.PROCESSING_DURATION],
    capacityObservations: [OPERATIONAL_CAPACITY_OBSERVATIONS.RESOURCE_UTILIZATION],
    reliabilityObservations: [OPERATIONAL_RELIABILITY_OBSERVATIONS.RECOVERY_EVENTS],
    incidentObservations: [OPERATIONAL_INCIDENT_OBSERVATIONS.DETECTION],
    diagnosticAreas: [OPERATIONAL_DIAGNOSTIC_AREAS.SERVICE_BEHAVIOR],
    operationalEvidenceTypes: [OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES.HEALTH_INDICATORS],
    governanceActivities: [OPERATIONAL_OBSERVABILITY_GOVERNANCE_ACTIVITIES.PERFORMANCE_EVALUATION],
    qualityAttributes: [OPERATIONAL_OBSERVABILITY_QUALITY_ATTRIBUTES.RELIABILITY],
    relationshipStages: [OPERATIONAL_OBSERVABILITY_RELATIONSHIP_STAGES.BUSINESS_OPERATIONS],
    architecturalRules: [OPERATIONAL_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_ENTERPRISE_OPERATIONS_CONTINUOUSLY],
    futureCapabilities: [FUTURE_OPERATIONAL_OBSERVABILITY_CAPABILITIES.AUTONOMOUS_OPERATIONAL_OPTIMIZATION],
    continuouslyObservable: false,
    businessAligned: false,
    proactiveSupported: false,
    evidenceCorrelated: false,
    continuousImprovementEnabled: false,
    operationalResilienceStrengthened: false,
    evidenceGoverned: false,
    technologyNeutral: false,
    vendorNeutral: false,
    monitoringProductSpecific: true,
    infrastructureToolingSpecific: true,
    cloudPlatformSpecific: true,
    analyticsSolutionSpecific: true,
    alertingSystemSpecific: true,
    implementationTechnologySpecific: true,
    isolatesTechnicalMetricsFromBusinessValue: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /enterprise-health-visibility/);
  assert.match(invalid.errors.join('\n'), /Operational Health/);
  assert.match(invalid.errors.join('\n'), /business-aligned-operations/);
  assert.match(invalid.errors.join('\n'), /ai-capabilities/);
  assert.match(invalid.errors.join('\n'), /capacity-planning/);
  assert.match(invalid.errors.join('\n'), /services/);
  assert.match(invalid.errors.join('\n'), /performance-improvement/);
  assert.match(invalid.errors.join('\n'), /responsiveness/);
  assert.match(invalid.errors.join('\n'), /throughput/);
  assert.match(invalid.errors.join('\n'), /service-demand/);
  assert.match(invalid.errors.join('\n'), /service-degradation/);
  assert.match(invalid.errors.join('\n'), /classification/);
  assert.match(invalid.errors.join('\n'), /ai-execution/);
  assert.match(invalid.errors.join('\n'), /performance-measurements/);
  assert.match(invalid.errors.join('\n'), /capacity-planning/);
  assert.match(invalid.errors.join('\n'), /availability/);
  assert.match(invalid.errors.join('\n'), /Services/);
  assert.match(invalid.errors.join('\n'), /preserve-business-alignment/);
  assert.match(invalid.errors.join('\n'), /ai-assisted-incident-diagnostics/);
  assert.match(invalid.errors.join('\n'), /continuously observable/);
  assert.match(invalid.errors.join('\n'), /Cloud platforms are outside ARCH-010-08 scope/);
  assert.match(invalid.errors.join('\n'), /Alerting systems are outside ARCH-010-08 scope/);
  assert.match(invalid.errors.join('\n'), /business capability delivery/);
});

test('operational observability validates governed operational evidence with business context and correlation', () => {
  const descriptor = new OperationalObservabilityDescriptor();
  const valid = descriptor.validateOperationalEvidence(
    new OperationalObservabilityEvidence({
      evidenceType: OPERATIONAL_OBSERVABILITY_EVIDENCE_TYPES.PERFORMANCE_MEASUREMENTS,
      operationalDomain: OPERATIONAL_VISIBILITY_DOMAINS.WORKFLOWS,
      healthIndicator: OPERATIONAL_HEALTH_INDICATORS.RESPONSIVENESS,
      businessCapability: 'booking',
      operationalState: 'processing',
      measurement: 127,
      correlationId: 'corr-operational-1',
      performanceEvidenceType: OPERATIONAL_PERFORMANCE_EVIDENCE_TYPES.WORKFLOW_DURATION,
      capacityObservation: OPERATIONAL_CAPACITY_OBSERVATIONS.WORKFLOW_VOLUME,
      reliabilityObservation: OPERATIONAL_RELIABILITY_OBSERVATIONS.WORKFLOW_CONTINUITY,
      incidentObservation: OPERATIONAL_INCIDENT_OBSERVATIONS.DETECTION,
      diagnosticArea: OPERATIONAL_DIAGNOSTIC_AREAS.WORKFLOW_PROGRESSION
    })
  );
  const invalid = descriptor.validateOperationalEvidence({
    evidenceType: 'vendor-monitor-event',
    operationalDomain: 'specific-cloud-region',
    healthIndicator: 'cpu-thermal-throttle',
    businessCapability: '',
    operationalState: '',
    measurement: undefined,
    correlationId: '',
    performanceEvidenceType: 'thread-dump',
    capacityObservation: 'rack-space',
    reliabilityObservation: 'raid-array',
    incidentObservation: 'pager-vendor-alert',
    diagnosticArea: 'hypervisor',
    technologyNeutral: false,
    vendorNeutral: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported operational evidence type/);
  assert.match(invalid.errors.join('\n'), /Unsupported operational domain/);
  assert.match(invalid.errors.join('\n'), /Unsupported operational health indicator/);
  assert.match(invalid.errors.join('\n'), /business capability context/);
  assert.match(invalid.errors.join('\n'), /operational state/);
  assert.match(invalid.errors.join('\n'), /observable measurement/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /Unsupported performance evidence type/);
  assert.match(invalid.errors.join('\n'), /Unsupported capacity observation/);
  assert.match(invalid.errors.join('\n'), /Unsupported reliability observation/);
  assert.match(invalid.errors.join('\n'), /Unsupported incident observation/);
  assert.match(invalid.errors.join('\n'), /Unsupported diagnostic area/);
  assert.match(invalid.errors.join('\n'), /technology neutral/);
  assert.match(invalid.errors.join('\n'), /vendor neutral/);
});

test('operational observability assertion rejects incomplete metadata', () => {
  class IncompleteOperationalObservabilityDescriptor extends OperationalObservabilityDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteOperationalObservabilityDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OPERATIONAL_OBSERVABILITY_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('operational observability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('OperationalObservabilityDescriptor');

  assert.ok(descriptor instanceof OperationalObservabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
