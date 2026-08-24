import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ProductionMonitoringIncidentsDeprecationExitProfile as Profile } from '../contracts/production-monitoring-incidents-deprecation-exit-profile.js';
import * as constants from '../production-monitoring-incidents-deprecation-exit-constants.js';

const metadata = Object.freeze({ responsibilities: constants.AI_PRODUCTION_OPERATIONS_RESPONSIBILITIES, telemetryFields: constants.BEHAVIOR_TELEMETRY_FIELDS, objectiveFields: constants.QUALITY_OBJECTIVE_FIELDS, driftFields: constants.AI_DRIFT_FIELDS, incidentFields: constants.AI_INCIDENT_FIELDS, containmentFields: constants.AI_CONTAINMENT_FIELDS, rollbackFields: constants.PRODUCTION_ROLLBACK_FIELDS, deprecationFields: constants.AI_DEPRECATION_FIELDS, retirementFields: constants.AI_RETIREMENT_FIELDS, providerExitFields: constants.PROVIDER_EXIT_FIELDS, lifecycleStates: constants.AI_PRODUCTION_OPERATIONS_LIFECYCLE_STATES, controls: constants.AI_PRODUCTION_OPERATIONS_CONTROLS, failureRecovery: constants.AI_PRODUCTION_OPERATIONS_FAILURE_RECOVERY, observabilityFields: constants.AI_PRODUCTION_OPERATIONS_OBSERVABILITY, assuranceEvidence: constants.AI_PRODUCTION_OPERATIONS_ASSURANCE, invariants: constants.AI_PRODUCTION_OPERATIONS_INVARIANTS });
const required = Object.freeze({ productionVersionsAttributed: 'requires attributed production versions', qualityObjectivesDefined: 'requires defined quality objectives', driftMonitored: 'requires drift monitoring', incidentsOwned: 'requires owned incidents', rollbackReady: 'requires rollback readiness', deprecationCommunicated: 'requires communicated deprecation', retirementReconciled: 'requires reconciled retirement', providerExitTested: 'requires tested provider exit' });
const prohibited = Object.freeze({ unversionedTelemetry: 'prohibits unversioned telemetry', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', crossTenantSignals: 'prohibits cross-tenant monitoring signals', driftIgnored: 'prohibits ignored drift', incidentOwnershipMissing: 'prohibits incidents without ownership', rollbackBypassed: 'prohibits rollback bypass', silentDeprecation: 'prohibits silent deprecation', retirementWithTraffic: 'prohibits retirement with production traffic', providerExitWithoutValidation: 'prohibits provider exit without validation', monitoringDirectlyLearns: 'prohibits monitoring from directly changing production behavior' });

export class ProductionMonitoringIncidentsDeprecationExitDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  telemetryFields() { return values(metadata.telemetryFields); }
  objectiveFields() { return values(metadata.objectiveFields); }
  driftFields() { return values(metadata.driftFields); }
  incidentFields() { return values(metadata.incidentFields); }
  containmentFields() { return values(metadata.containmentFields); }
  rollbackFields() { return values(metadata.rollbackFields); }
  deprecationFields() { return values(metadata.deprecationFields); }
  retirementFields() { return values(metadata.retirementFields); }
  providerExitFields() { return values(metadata.providerExitFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Production Monitoring Incidents Deprecation and Exit profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-08 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-08 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.PRODUCTION_MONITORING_INCIDENTS_DEPRECATION_EXIT_ERROR_CODE, 'Production Monitoring Incidents Deprecation and Exit violates ARCH-029-08.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
