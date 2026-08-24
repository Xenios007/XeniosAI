import { PlatformError } from '../../foundation/errors/platform-error.js';
import { FinancialOperationsGovernanceAssuranceProfile as Profile } from '../contracts/financial-operations-governance-assurance-profile.js';
import * as constants from '../financial-operations-governance-assurance-constants.js';

const metadata = Object.freeze({ operatingRoles: constants.FINANCIAL_OPERATING_ROLES, serviceObjectives: constants.FINANCIAL_SERVICE_OBJECTIVES, telemetryFields: constants.FINANCIAL_TELEMETRY_FIELDS, fraudBoundaries: constants.FRAUD_BOUNDARIES, incidentClasses: constants.FINANCIAL_INCIDENT_CLASSES, recoveryEvidence: constants.FINANCIAL_RECOVERY_EVIDENCE, governanceArtifacts: constants.FINANCIAL_GOVERNANCE_ARTIFACTS, assuranceActivities: constants.FINANCIAL_ASSURANCE_ACTIVITIES, invariants: constants.FINANCIAL_OPERATIONS_INVARIANTS });
const required = Object.freeze({ accountableOwnership: 'requires accountable ownership', objectivesMeasured: 'requires measured service objectives', protectedPayloadsExcludedFromTelemetry: 'requires protected payload exclusion from telemetry', fraudSignalsAdvisory: 'requires advisory fraud signals', incidentsReconciled: 'requires incident reconciliation', recoveryEvidenceRetained: 'requires retained recovery evidence', assuranceContinuous: 'requires continuous assurance', humanReviewAvailable: 'requires human review and appeal' });
const prohibited = Object.freeze({ silentMoneyChange: 'prohibits silent money changes', fraudModelOwnsFinancialState: 'prohibits fraud models owning financial state', protectedPayloadsCopiedToTelemetry: 'prohibits protected payloads in telemetry', incidentEvidenceDiscarded: 'prohibits discarding incident evidence', controlsBypassedUnderPressure: 'prohibits bypassing controls under pressure' });

export class FinancialOperationsGovernanceAssuranceDescriptor {
  operatingRoles() { return values(metadata.operatingRoles); }
  serviceObjectives() { return values(metadata.serviceObjectives); }
  telemetryFields() { return values(metadata.telemetryFields); }
  fraudBoundaries() { return values(metadata.fraudBoundaries); }
  incidentClasses() { return values(metadata.incidentClasses); }
  recoveryEvidence() { return values(metadata.recoveryEvidence); }
  governanceArtifacts() { return values(metadata.governanceArtifacts); }
  assuranceActivities() { return values(metadata.assuranceActivities); }
  invariants() { return values(metadata.invariants); }
  validateProfile(input) { const profile = input instanceof Profile ? input : new Profile(input); const errors = []; if (!profile.profileName) errors.push('Financial Operations Governance Assurance profile must have a name.'); for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`); for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-026-09 ${message}.`); for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-026-09 ${message}.`); return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) }); }
  assertArchitecture() { const errors = []; for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`); if (errors.length) throw new PlatformError(constants.FINANCIAL_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, 'Financial Operations Governance Assurance violates ARCH-026-09.', { errors }); return Object.freeze({ isValid: true, errors: Object.freeze([]) }); }
}
function values(source) { return Object.freeze(Object.values(source)); }
