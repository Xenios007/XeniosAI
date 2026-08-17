import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import { OperationsObservabilityPerformanceProfile } from '../contracts/operations-observability-performance-profile.js';
import * as constants from '../operations-observability-performance-constants.js';

const METADATA = Object.freeze({
  objectives: constants.API_SDK_OPERATIONS_OBJECTIVES, principles: constants.API_SDK_OPERATIONS_PRINCIPLES,
  definitions: constants.API_SDK_OPERATIONAL_DEFINITIONS, operationalDomains: constants.API_SDK_OPERATIONAL_DOMAINS,
  lifecycleStates: constants.API_SDK_OPERATIONAL_LIFECYCLE_STATES, healthDimensions: constants.API_SDK_HEALTH_DIMENSIONS,
  observabilitySignals: constants.API_SDK_OBSERVABILITY_SIGNALS, telemetryContextFields: constants.API_SDK_TELEMETRY_CONTEXT_FIELDS,
  operationalCapabilities: constants.API_SDK_OPERATIONAL_CAPABILITIES, performanceAreas: constants.API_SDK_PERFORMANCE_AREAS,
  architecturalRules: constants.API_SDK_OPERATIONS_RULES, architectureBoundaries: constants.API_SDK_OPERATIONS_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  accountableOwnershipRequired: 'ARCH-017-09 requires accountable operational ownership for every supported API and SDK product.',
  consumerOutcomeHealth: 'ARCH-017-09 requires health to include consumer-visible outcomes.',
  providerEnforcement: 'ARCH-017-09 requires providers to enforce identity, authorization, scope, policy, and domain rules.',
  telemetryMinimized: 'ARCH-017-09 requires privacy-safe, minimized telemetry by default.',
  scopePreserved: 'ARCH-017-09 requires tenant and property scope across operational evidence.',
  correlationNoAuthority: 'ARCH-017-09 requires correlation identifiers never to grant authority.',
  boundsObservable: 'ARCH-017-09 requires retries, queues, connections, concurrency, and background work to be bounded and observable.',
  fairnessAtTrustedBoundaries: 'ARCH-017-09 requires fairness controls at trusted boundaries.',
  performanceOptimizationSafe: 'ARCH-017-09 requires optimization to preserve correctness, security, privacy, isolation, and compatibility.',
  unknownNotHealthy: 'ARCH-017-09 requires unknown health evidence not to be reported as healthy.',
  recoveryVerificationComplete: 'ARCH-017-09 requires complete recovery verification.',
  automationBounded: 'ARCH-017-09 requires bounded, explainable, accountable operational automation.'
});

const REQUIRED_FALSE = Object.freeze({
  endpointReachabilitySufficient: 'ARCH-017-09 prohibits reachability alone from defining health.',
  unrestrictedTelemetryDefault: 'ARCH-017-09 prohibits unrestricted sensitive telemetry by default.',
  unboundedRetries: 'ARCH-017-09 prohibits unbounded retries.',
  queueDepthAloneSufficient: 'ARCH-017-09 prohibits queue depth alone from defining impact.',
  successfulDeploymentProvesHealth: 'ARCH-017-09 prohibits deployment success from proving consumer health.',
  providerHealthProvesIntegration: 'ARCH-017-09 prohibits provider health from proving end-to-end integration health.',
  technologySpecific: 'ARCH-017-09 does not mandate a specific operational technology or vendor.',
  replacesEnterpriseOperations: 'ARCH-017-09 does not replace ARCH-011 enterprise operations.',
  replacesGovernance: 'ARCH-017-09 does not replace ARCH-012 governance and compliance.',
  replacesMultiTenancy: 'ARCH-017-09 does not replace ARCH-018 multi-tenancy authority.'
});

export class OperationsObservabilityPerformanceDescriptor {
  constructor() { this.metadata = METADATA; }
  objectives() { return values(METADATA.objectives); }
  principles() { return values(METADATA.principles); }
  definitions() { return values(METADATA.definitions); }
  operationalDomains() { return values(METADATA.operationalDomains); }
  lifecycleStates() { return values(METADATA.lifecycleStates); }
  healthDimensions() { return values(METADATA.healthDimensions); }
  observabilitySignals() { return values(METADATA.observabilitySignals); }
  telemetryContextFields() { return values(METADATA.telemetryContextFields); }
  operationalCapabilities() { return values(METADATA.operationalCapabilities); }
  performanceAreas() { return values(METADATA.performanceAreas); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof OperationsObservabilityPerformanceProfile
      ? input : new OperationsObservabilityPerformanceProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API and SDK Operations, Observability, and Performance profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`API and SDK Operations, Observability, and Performance must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(constants.API_SDK_OPERATIONS_ERROR_CODE,
      'API and SDK Operations, Observability, and Performance violates ARCH-017-09.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
