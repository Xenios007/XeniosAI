import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  OBSERVABILITY_CONSISTENCY_AREAS,
  OBSERVABILITY_CORRELATION_TARGETS,
  OBSERVABILITY_EXPLAINABILITY_TARGETS,
  OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  OBSERVABILITY_PRINCIPLE_NAMES,
  OBSERVABILITY_PRINCIPLE_OBJECTIVES,
  OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES,
  OBSERVABILITY_PRIVACY_SECURITY_REQUIREMENTS,
  OBSERVABILITY_RESPONSIBILITY_OWNERS,
  OPERATIONAL_EVIDENCE_TYPES,
  ObservabilityPrinciple,
  ObservabilityPrinciplesDescriptor,
  ObservabilityResponsibility,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('observability principles expose objectives, principle order, and relationship flow', () => {
  const descriptor = new ObservabilityPrinciplesDescriptor();

  assert.ok(descriptor.objectives().includes(OBSERVABILITY_PRINCIPLE_OBJECTIVES.BUSINESS_ALIGNMENT));
  assert.ok(descriptor.objectives().includes(OBSERVABILITY_PRINCIPLE_OBJECTIVES.TECHNOLOGY_INDEPENDENCE));
  assert.deepEqual(descriptor.principleSequence(), [
    OBSERVABILITY_PRINCIPLE_NAMES.BUSINESS_DRIVEN_OBSERVABILITY,
    OBSERVABILITY_PRINCIPLE_NAMES.OBSERVABILITY_BY_DESIGN,
    OBSERVABILITY_PRINCIPLE_NAMES.END_TO_END_CORRELATION,
    OBSERVABILITY_PRINCIPLE_NAMES.ARCHITECTURAL_CONSISTENCY,
    OBSERVABILITY_PRINCIPLE_NAMES.EXPLAINABILITY,
    OBSERVABILITY_PRINCIPLE_NAMES.MINIMAL_COUPLING,
    OBSERVABILITY_PRINCIPLE_NAMES.CONTINUOUS_EVIDENCE,
    OBSERVABILITY_PRINCIPLE_NAMES.GOVERNANCE_ALIGNMENT,
    OBSERVABILITY_PRINCIPLE_NAMES.PRIVACY_AND_SECURITY,
    OBSERVABILITY_PRINCIPLE_NAMES.TECHNOLOGY_NEUTRALITY
  ]);
  assert.deepEqual(descriptor.relationshipFlow(), [
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.BUSINESS_ALIGNMENT,
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.OBSERVABILITY_BY_DESIGN,
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.CONTINUOUS_EVIDENCE,
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.CORRELATION,
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.EXPLAINABILITY,
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.GOVERNANCE,
    OBSERVABILITY_PRINCIPLE_RELATIONSHIP_STAGES.ENTERPRISE_IMPROVEMENT
  ]);
});

test('observability principles expose correlation, consistency, explainability, and evidence metadata', () => {
  const descriptor = new ObservabilityPrinciplesDescriptor();

  assert.ok(descriptor.correlationTargets().includes(OBSERVABILITY_CORRELATION_TARGETS.AI_AGENTS));
  assert.ok(descriptor.consistencyAreas().includes(OBSERVABILITY_CONSISTENCY_AREAS.BUSINESS_IDENTIFIERS));
  assert.ok(descriptor.explainabilityTargets().includes(OBSERVABILITY_EXPLAINABILITY_TARGETS.AI_RECOMMENDATIONS));
  assert.ok(descriptor.evidenceTypes().includes(OPERATIONAL_EVIDENCE_TYPES.SERVICE_INTERACTION));
});

test('observability principles register documented principles and shared responsibilities', () => {
  const descriptor = new ObservabilityPrinciplesDescriptor();

  assert.equal(descriptor.listPrinciples().length, 10);
  assert.equal(descriptor.listResponsibilities().length, 6);
  assert.equal(
    descriptor.getPrinciple(OBSERVABILITY_PRINCIPLE_NAMES.MINIMAL_COUPLING).minimallyCoupled,
    true
  );
  assert.ok(
    descriptor
      .listResponsibilities()
      .some(item => item.primaryOwner === OBSERVABILITY_RESPONSIBILITY_OWNERS.ENTERPRISE_ARCHITECTURE)
  );
});

test('observability principles reject invalid principle definitions', () => {
  assert.throws(
    () =>
      new ObservabilityPrinciplesDescriptor({
        principles: [
          new ObservabilityPrinciple({
            principleName: 'vendor-dashboard-first',
            responsibility: '',
            requiredCapabilities: [],
            businessAligned: false,
            supportsCorrelation: false,
            supportsExplainability: false,
            supportsGovernance: false,
            preservesSecurityAndPrivacy: false,
            minimallyCoupled: false,
            vendorSpecific: true
          })
        ],
        responsibilities: []
      }),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_PRINCIPLE_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported observability principle')) &&
      error.details.errors.some(message => message.includes('business objectives')) &&
      error.details.errors.some(message => message.includes('vendor and technology neutral'))
  );
});

test('observability principles validate responsibility ownership', () => {
  const descriptor = new ObservabilityPrinciplesDescriptor();
  const valid = descriptor.validateResponsibility(
    new ObservabilityResponsibility({
      responsibility: 'AI Observability',
      primaryOwner: OBSERVABILITY_RESPONSIBILITY_OWNERS.AI_ARCHITECTURE
    })
  );
  const invalid = descriptor.validateResponsibility({
    responsibility: '',
    primaryOwner: 'Monitoring Vendor',
    clearlyAssigned: false,
    supportsEnterpriseConsistency: false,
    evidenceAccountable: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must be named/);
  assert.match(invalid.errors.join('\n'), /Unsupported observability responsibility owner/);
  assert.match(invalid.errors.join('\n'), /enterprise consistency/);
  assert.match(invalid.errors.join('\n'), /vendor neutral/);
});

test('observability principles validate correlation, governance, privacy, and security coverage', () => {
  const descriptor = new ObservabilityPrinciplesDescriptor();

  assert.equal(descriptor.validateCorrelationCoverage(Object.values(OBSERVABILITY_CORRELATION_TARGETS)).isValid, true);
  assert.equal(descriptor.validateGovernanceAlignment(Object.values(OBSERVABILITY_GOVERNANCE_ACTIVITIES)).isValid, true);
  assert.equal(descriptor.validatePrivacySecurity(Object.values(OBSERVABILITY_PRIVACY_SECURITY_REQUIREMENTS)).isValid, true);

  const invalid = descriptor.validatePrivacySecurity([OBSERVABILITY_PRIVACY_SECURITY_REQUIREMENTS.SUPPORT_LEAST_PRIVILEGE]);

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /protect-sensitive-information/);
  assert.match(invalid.errors.join('\n'), /respect-data-ownership/);
});

test('observability principles report future capabilities without implementing them', () => {
  const descriptor = new ObservabilityPrinciplesDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES.AI_ASSISTED_EVIDENCE_CORRELATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES.CONTEXT_AWARE_TELEMETRY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_PRINCIPLE_CAPABILITIES.CROSS_ENTERPRISE_OPERATIONAL_INTELLIGENCE));
});

test('observability principles assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new ObservabilityPrinciplesDescriptor({ principles: [], responsibilities: [] }).assertPrinciples(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_PRINCIPLES_INVALID &&
      error.details.errors.some(message => message.includes('documented principles')) &&
      error.details.errors.some(message => message.includes('shared responsibilities'))
  );
});

test('observability principles descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ObservabilityPrinciplesDescriptor');

  assert.ok(descriptor instanceof ObservabilityPrinciplesDescriptor);
  assert.equal(descriptor.assertPrinciples().isValid, true);
});
