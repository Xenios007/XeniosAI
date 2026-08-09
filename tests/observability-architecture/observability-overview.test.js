import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ENTERPRISE_VISIBILITY_ELEMENTS,
  FUTURE_OBSERVABILITY_CAPABILITIES,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  OBSERVABILITY_DOMAIN_NAMES,
  OBSERVABILITY_GOVERNANCE_FOUNDATIONS,
  OBSERVABILITY_LIFECYCLE_STAGES,
  OBSERVABILITY_OBJECTIVES,
  OBSERVABILITY_PRINCIPLES,
  OBSERVABILITY_QUALITY_ATTRIBUTES,
  OPERATIONAL_EVIDENCE_TYPES,
  ObservabilityDomain,
  ObservabilityOverviewDescriptor,
  TelemetrySource,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('observability overview exposes objectives, principles, domains, and lifecycle', () => {
  const descriptor = new ObservabilityOverviewDescriptor();

  assert.ok(descriptor.objectives().includes(OBSERVABILITY_OBJECTIVES.ENTERPRISE_TRANSPARENCY));
  assert.ok(descriptor.objectives().includes(OBSERVABILITY_OBJECTIVES.AI_EXPLAINABILITY));
  assert.ok(descriptor.principles().includes(OBSERVABILITY_PRINCIPLES.BUSINESS_ORIENTED_VISIBILITY));
  assert.deepEqual(descriptor.domainSequence(), [
    OBSERVABILITY_DOMAIN_NAMES.BUSINESS,
    OBSERVABILITY_DOMAIN_NAMES.SERVICE,
    OBSERVABILITY_DOMAIN_NAMES.AI,
    OBSERVABILITY_DOMAIN_NAMES.INTEGRATION,
    OBSERVABILITY_DOMAIN_NAMES.SECURITY,
    OBSERVABILITY_DOMAIN_NAMES.OPERATIONAL,
    OBSERVABILITY_DOMAIN_NAMES.GOVERNANCE
  ]);
  assert.deepEqual(descriptor.lifecycle(), [
    OBSERVABILITY_LIFECYCLE_STAGES.OBSERVE,
    OBSERVABILITY_LIFECYCLE_STAGES.UNDERSTAND,
    OBSERVABILITY_LIFECYCLE_STAGES.DIAGNOSE,
    OBSERVABILITY_LIFECYCLE_STAGES.IMPROVE,
    OBSERVABILITY_LIFECYCLE_STAGES.VALIDATE
  ]);
});

test('observability overview registers documented domains and telemetry sources', () => {
  const descriptor = new ObservabilityOverviewDescriptor();

  assert.equal(descriptor.listDomains().length, 7);
  assert.equal(descriptor.listTelemetrySources().length, 7);
  assert.ok(
    descriptor
      .getDomain(OBSERVABILITY_DOMAIN_NAMES.AI)
      .visibleElements.includes(ENTERPRISE_VISIBILITY_ELEMENTS.AI_DECISIONS)
  );
  assert.ok(
    descriptor
      .listTelemetrySources()
      .some(source => source.evidenceTypes.includes(OPERATIONAL_EVIDENCE_TYPES.SECURITY_RECORD))
  );
});

test('observability overview rejects invalid observability domains', () => {
  assert.throws(
    () =>
      new ObservabilityOverviewDescriptor({
        domains: [
          new ObservabilityDomain({
            domainName: 'dashboard-monitoring',
            responsibility: '',
            visibleElements: [],
            supportsBusinessContext: false,
            supportsEndToEndVisibility: false,
            emitsContinuousEvidence: false,
            vendorSpecific: true
          })
        ],
        telemetrySources: []
      }),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_DOMAIN_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported observability domain')) &&
      error.details.errors.some(message => message.includes('business context')) &&
      error.details.errors.some(message => message.includes('vendor neutral'))
  );
});

test('observability overview validates telemetry sources', () => {
  const descriptor = new ObservabilityOverviewDescriptor();
  const valid = descriptor.validateTelemetrySource(
    new TelemetrySource({
      sourceName: 'AI Systems',
      sourceLayer: 'ai',
      evidenceTypes: [OPERATIONAL_EVIDENCE_TYPES.AI_ACTIVITY]
    })
  );
  const invalid = descriptor.validateTelemetrySource({
    sourceName: '',
    sourceLayer: '',
    evidenceTypes: ['product-log'],
    correlationRequired: false,
    governed: false,
    explainable: false,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must be named/);
  assert.match(invalid.errors.join('\n'), /Unsupported operational evidence type/);
  assert.match(invalid.errors.join('\n'), /correlatable/);
  assert.match(invalid.errors.join('\n'), /monitoring vendors/);
});

test('observability overview validates evidence, governance, and quality coverage', () => {
  const descriptor = new ObservabilityOverviewDescriptor();
  const coverage = descriptor.validateEvidenceCoverage(Object.values(OPERATIONAL_EVIDENCE_TYPES));

  assert.equal(coverage.isValid, true);
  assert.ok(descriptor.qualityAttributes().includes(OBSERVABILITY_QUALITY_ATTRIBUTES.TRACEABILITY));
  assert.ok(descriptor.governanceFoundations().includes(OBSERVABILITY_GOVERNANCE_FOUNDATIONS.RISK_VISIBILITY));
});

test('observability overview reports future capabilities without implementing them', () => {
  const descriptor = new ObservabilityOverviewDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_CAPABILITIES.AI_ASSISTED_DIAGNOSTICS));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_CAPABILITIES.SEMANTIC_OBSERVABILITY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_OBSERVABILITY_CAPABILITIES.SELF_IMPROVING_OPERATIONAL_INTELLIGENCE));
});

test('observability overview assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new ObservabilityOverviewDescriptor({ domains: [], telemetrySources: [] }).assertOverview(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('observability domains')) &&
      error.details.errors.some(message => message.includes('operational evidence sources'))
  );
});

test('observability overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ObservabilityOverviewDescriptor');

  assert.ok(descriptor instanceof ObservabilityOverviewDescriptor);
  assert.equal(descriptor.assertOverview().isValid, true);
});
