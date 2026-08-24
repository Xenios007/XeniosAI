import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AnalyticsOperationsGovernanceAssuranceProfile as Profile } from '../contracts/analytics-operations-governance-assurance-profile.js';
import * as constants from '../analytics-operations-governance-assurance-constants.js';

const metadata = Object.freeze({ operatingRoles: constants.ANALYTICS_OPERATING_ROLES, qualityObjectives: constants.ANALYTICS_QUALITY_OBJECTIVES, monitoringFields: constants.ANALYTICS_MONITORING_FIELDS, healthStates: constants.ANALYTICS_HEALTH_STATES, incidentClasses: constants.ANALYTICS_INCIDENT_CLASSES, incidentEvidence: constants.ANALYTICS_INCIDENT_EVIDENCE, modelRiskBoundaries: constants.ANALYTICS_MODEL_RISK_BOUNDARIES, governanceArtifacts: constants.ANALYTICS_GOVERNANCE_ARTIFACTS, assuranceActivities: constants.ANALYTICS_ASSURANCE_ACTIVITIES, invariants: constants.ANALYTICS_OPERATIONS_INVARIANTS });
const required = Object.freeze({ ownershipAccountable: 'requires accountable ownership', qualityObjectivesMeasured: 'requires measurable quality objectives', monitoringTenantSafe: 'requires tenant-safe monitoring', incidentsEvidenced: 'requires evidenced incidents', modelRiskBounded: 'requires model-risk boundaries', assuranceContinuous: 'requires continuous assurance', recoveryReconciled: 'requires reconciled recovery', changesVersioned: 'requires versioned changes' });
const prohibited = Object.freeze({ sharedDatabases: 'prohibits shared databases', protectedPayloadsCopiedToTelemetry: 'prohibits protected payloads in telemetry', qualityBreachIgnored: 'prohibits ignored quality breaches', incidentEvidenceDiscarded: 'prohibits discarded incident evidence', modelOutputChangesAuthoritativeState: 'prohibits model output changing authoritative state', policyBypassedUnderPressure: 'prohibits policy bypass under pressure', assuranceSelfAttestedOnly: 'prohibits self-attestation-only assurance', unapprovedModelPromoted: 'prohibits unapproved model promotion', sourceTruthReplaced: 'prohibits replacing source truth' });

export class AnalyticsOperationsGovernanceAssuranceDescriptor {
  operatingRoles() { return values(metadata.operatingRoles); }
  qualityObjectives() { return values(metadata.qualityObjectives); }
  monitoringFields() { return values(metadata.monitoringFields); }
  healthStates() { return values(metadata.healthStates); }
  incidentClasses() { return values(metadata.incidentClasses); }
  incidentEvidence() { return values(metadata.incidentEvidence); }
  modelRiskBoundaries() { return values(metadata.modelRiskBoundaries); }
  governanceArtifacts() { return values(metadata.governanceArtifacts); }
  assuranceActivities() { return values(metadata.assuranceActivities); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Analytics Operations Governance and Assurance profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-09 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-09 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.ANALYTICS_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, 'Analytics Operations Governance and Assurance violates ARCH-028-09.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
