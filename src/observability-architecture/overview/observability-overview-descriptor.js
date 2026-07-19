import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  OPERATIONAL_EVIDENCE_TYPES
} from '../constants.js';
import { ObservabilityDomain } from '../contracts/observability-domain.js';
import { ObservabilityValidationResult } from '../contracts/observability-validation-result.js';
import { TelemetrySource } from '../contracts/telemetry-source.js';

const DOMAIN_SEQUENCE = Object.freeze([
  OBSERVABILITY_DOMAIN_NAMES.BUSINESS,
  OBSERVABILITY_DOMAIN_NAMES.SERVICE,
  OBSERVABILITY_DOMAIN_NAMES.AI,
  OBSERVABILITY_DOMAIN_NAMES.INTEGRATION,
  OBSERVABILITY_DOMAIN_NAMES.SECURITY,
  OBSERVABILITY_DOMAIN_NAMES.OPERATIONAL,
  OBSERVABILITY_DOMAIN_NAMES.GOVERNANCE
]);

const LIFECYCLE = Object.freeze([
  OBSERVABILITY_LIFECYCLE_STAGES.OBSERVE,
  OBSERVABILITY_LIFECYCLE_STAGES.UNDERSTAND,
  OBSERVABILITY_LIFECYCLE_STAGES.DIAGNOSE,
  OBSERVABILITY_LIFECYCLE_STAGES.IMPROVE,
  OBSERVABILITY_LIFECYCLE_STAGES.VALIDATE
]);

const DEFAULT_DOMAINS = Object.freeze([
  domain(OBSERVABILITY_DOMAIN_NAMES.BUSINESS, 'Make business outcomes and transactions observable.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.BUSINESS_TRANSACTIONS,
    ENTERPRISE_VISIBILITY_ELEMENTS.CUSTOMER_JOURNEYS
  ]),
  domain(OBSERVABILITY_DOMAIN_NAMES.SERVICE, 'Expose service behavior, collaboration, and boundaries.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.SERVICE_COLLABORATION,
    ENTERPRISE_VISIBILITY_ELEMENTS.OPERATIONAL_HEALTH
  ]),
  domain(OBSERVABILITY_DOMAIN_NAMES.AI, 'Explain AI participation, decisions, and operational behavior.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.AI_DECISIONS
  ]),
  domain(OBSERVABILITY_DOMAIN_NAMES.INTEGRATION, 'Trace external interactions and integration exchanges.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.EXTERNAL_INTERACTIONS
  ]),
  domain(OBSERVABILITY_DOMAIN_NAMES.SECURITY, 'Surface security posture and security-relevant events.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.SECURITY_EVENTS
  ]),
  domain(OBSERVABILITY_DOMAIN_NAMES.OPERATIONAL, 'Measure platform health, reliability, and runtime outcomes.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.OPERATIONAL_HEALTH
  ]),
  domain(OBSERVABILITY_DOMAIN_NAMES.GOVERNANCE, 'Provide trustworthy evidence for governance and improvement.', [
    ENTERPRISE_VISIBILITY_ELEMENTS.WORKFLOW_EXECUTION
  ])
]);

const DEFAULT_TELEMETRY_SOURCES = Object.freeze([
  source('Business Processes', 'business', [OPERATIONAL_EVIDENCE_TYPES.BUSINESS_EVENT]),
  source('Services', 'application', [OPERATIONAL_EVIDENCE_TYPES.SERVICE_INTERACTION]),
  source('Workflows', 'workflow', [OPERATIONAL_EVIDENCE_TYPES.WORKFLOW_TRANSITION]),
  source('AI Systems', 'ai', [OPERATIONAL_EVIDENCE_TYPES.AI_ACTIVITY]),
  source('Integrations', 'integration', [OPERATIONAL_EVIDENCE_TYPES.INTEGRATION_EXCHANGE]),
  source('Infrastructure', 'technology', [OPERATIONAL_EVIDENCE_TYPES.OPERATIONAL_MEASUREMENT]),
  source('Security Controls', 'security', [OPERATIONAL_EVIDENCE_TYPES.SECURITY_RECORD])
]);

export class ObservabilityOverviewDescriptor {
  constructor({ domains = DEFAULT_DOMAINS, telemetrySources = DEFAULT_TELEMETRY_SOURCES } = {}) {
    this.domains = new Map();
    this.telemetrySources = new Map();

    for (const observabilityDomain of domains) this.registerDomain(observabilityDomain);
    for (const telemetrySource of telemetrySources) this.registerTelemetrySource(telemetrySource);
  }

  objectives() {
    return Object.freeze(Object.values(OBSERVABILITY_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(OBSERVABILITY_PRINCIPLES));
  }

  domainSequence() {
    return DOMAIN_SEQUENCE;
  }

  lifecycle() {
    return LIFECYCLE;
  }

  visibilityElements() {
    return Object.freeze(Object.values(ENTERPRISE_VISIBILITY_ELEMENTS));
  }

  evidenceTypes() {
    return Object.freeze(Object.values(OPERATIONAL_EVIDENCE_TYPES));
  }

  qualityAttributes() {
    return Object.freeze(Object.values(OBSERVABILITY_QUALITY_ATTRIBUTES));
  }

  governanceFoundations() {
    return Object.freeze(Object.values(OBSERVABILITY_GOVERNANCE_FOUNDATIONS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_OBSERVABILITY_CAPABILITIES));
  }

  listDomains() {
    return Object.freeze([...this.domains.values()]);
  }

  listTelemetrySources() {
    return Object.freeze([...this.telemetrySources.values()]);
  }

  getDomain(domainName) {
    return this.domains.get(domainName);
  }

  registerDomain(domainInput) {
    const observabilityDomain = domainInput instanceof ObservabilityDomain
      ? domainInput
      : new ObservabilityDomain(domainInput);
    const result = this.validateDomain(observabilityDomain);

    if (!result.isValid) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_DOMAIN_INVALID,
        'Observability domain violates ARCH-010-01.',
        { errors: result.errors }
      );
    }

    this.domains.set(observabilityDomain.domainName, observabilityDomain);
    return this;
  }

  registerTelemetrySource(sourceInput) {
    const telemetrySource = sourceInput instanceof TelemetrySource ? sourceInput : new TelemetrySource(sourceInput);
    const result = this.validateTelemetrySource(telemetrySource);

    if (!result.isValid) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.TELEMETRY_SOURCE_INVALID,
        'Telemetry source violates ARCH-010-01.',
        { errors: result.errors }
      );
    }

    this.telemetrySources.set(telemetrySource.sourceName, telemetrySource);
    return this;
  }

  validateDomain(domainInput) {
    const observabilityDomain = domainInput instanceof ObservabilityDomain
      ? domainInput
      : new ObservabilityDomain(domainInput);
    const errors = [];

    if (!Object.values(OBSERVABILITY_DOMAIN_NAMES).includes(observabilityDomain.domainName)) errors.push(`Unsupported observability domain: ${observabilityDomain.domainName}.`);
    if (!observabilityDomain.responsibility) errors.push('Observability domain must define its responsibility.');
    if (observabilityDomain.visibleElements.length === 0) errors.push('Observability domain must define visible enterprise elements.');
    if (observabilityDomain.supportsBusinessContext !== true) errors.push('Observability must begin with business context.');
    if (observabilityDomain.supportsEndToEndVisibility !== true) errors.push('Observability must support end-to-end understanding.');
    if (observabilityDomain.emitsContinuousEvidence !== true) errors.push('Observability domains must produce continuous operational evidence.');
    if (observabilityDomain.vendorSpecific === true) errors.push('Observability Architecture must remain vendor neutral.');

    return validation(errors);
  }

  validateTelemetrySource(sourceInput) {
    const telemetrySource = sourceInput instanceof TelemetrySource ? sourceInput : new TelemetrySource(sourceInput);
    const errors = [];

    if (!telemetrySource.sourceName) errors.push('Telemetry source must be named.');
    if (!telemetrySource.sourceLayer) errors.push('Telemetry source must identify its architectural layer.');
    if (telemetrySource.evidenceTypes.length === 0) errors.push('Telemetry source must emit operational evidence.');
    for (const evidenceType of telemetrySource.evidenceTypes) {
      if (!Object.values(OPERATIONAL_EVIDENCE_TYPES).includes(evidenceType)) errors.push(`Unsupported operational evidence type: ${evidenceType}.`);
    }
    if (telemetrySource.correlationRequired !== true) errors.push('Operational evidence must be correlatable across domains.');
    if (telemetrySource.governed !== true) errors.push('Operational evidence must be governed and trustworthy.');
    if (telemetrySource.explainable !== true) errors.push('Operational evidence must support explainability.');
    if (telemetrySource.vendorSpecific === true) errors.push('Telemetry sources must remain independent of monitoring vendors.');

    return validation(errors);
  }

  validateEvidenceCoverage(evidenceTypes = []) {
    const errors = [];

    appendMissing(errors, evidenceTypes, this.evidenceTypes(), 'Observability overview must cover');

    return validation(errors);
  }

  assertOverview() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Observability Overview must include all documented objectives.');
    if (this.principles().length !== 7) errors.push('Observability Overview must include all foundational principles.');
    if (this.domains.size !== 7) errors.push('Observability Overview must include all documented observability domains.');
    if (this.telemetrySources.size !== 7) errors.push('Observability Overview must include all documented operational evidence sources.');
    if (this.visibilityElements().length !== 8) errors.push('Observability Overview must include all documented enterprise visibility elements.');
    if (this.evidenceTypes().length !== 7) errors.push('Observability Overview must include all documented operational evidence types.');
    if (this.lifecycle().length !== 5) errors.push('Observability Overview must include the documented continuous lifecycle.');

    if (errors.length > 0) {
      throw new PlatformError(
        OBSERVABILITY_ARCHITECTURE_ERROR_CODES.OBSERVABILITY_OVERVIEW_INVALID,
        'Observability Overview violates ARCH-010-01.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function domain(domainName, responsibility, visibleElements) {
  return new ObservabilityDomain({ domainName, responsibility, visibleElements });
}

function source(sourceName, sourceLayer, evidenceTypes) {
  return new TelemetrySource({ sourceName, sourceLayer, evidenceTypes });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new ObservabilityValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
