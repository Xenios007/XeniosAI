import { PlatformError } from '../../foundation/errors/platform-error.js';
import { SolutionOperationsGovernanceAssuranceProfile as Profile } from '../contracts/solution-operations-governance-assurance-profile.js';
import * as constants from '../solution-operations-governance-assurance-constants.js';

const metadata = Object.freeze({
  ownershipFields: constants.SOLUTION_OPERATING_OWNERSHIP_FIELDS,
  serviceProfileFields: constants.SOLUTION_SERVICE_PROFILE_FIELDS,
  serviceObjectiveFields: constants.SOLUTION_SERVICE_OBJECTIVE_FIELDS,
  runbookFields: constants.SOLUTION_RUNBOOK_FIELDS,
  incidentFields: constants.SOLUTION_INCIDENT_FIELDS,
  rolloutFields: constants.TENANT_ROLLOUT_FIELDS,
  evidenceFields: constants.SOLUTION_ASSURANCE_EVIDENCE_FIELDS,
  lifecycleStates: constants.SOLUTION_OPERATIONS_LIFECYCLE_STATES,
  controls: constants.SOLUTION_OPERATIONS_CONTROLS,
  failureRecovery: constants.SOLUTION_OPERATIONS_FAILURE_RECOVERY,
  observabilityFields: constants.SOLUTION_OPERATIONS_OBSERVABILITY_FIELDS,
  assuranceActivities: constants.SOLUTION_OPERATIONS_ASSURANCE_ACTIVITIES,
  invariants: constants.SOLUTION_OPERATIONS_INVARIANTS
});

const required = Object.freeze({
  ownershipAssigned: 'requires assigned ownership',
  serviceProfilesVersioned: 'requires versioned service profiles',
  objectivesDefined: 'requires defined service and customer objectives',
  observabilityPayloadSafe: 'requires payload-safe observability',
  runbooksTested: 'requires tested runbooks',
  incidentsEvidencePreserving: 'requires evidence-preserving incident response',
  rolloutTenantScoped: 'requires tenant-scoped rollout',
  evidenceImmutable: 'requires immutable assurance evidence',
  assuranceIndependent: 'requires independent assurance',
  providerAuthorityPreserved: 'requires preserved provider authority',
  tenantIsolated: 'requires tenant isolation'
});

const prohibited = Object.freeze({
  sharedOwnership: 'prohibits shared authoritative ownership',
  serviceProfileUnversioned: 'prohibits unversioned service profiles',
  telemetryCopiesProtectedPayload: 'prohibits protected payloads in telemetry',
  runbookUntested: 'prohibits untested runbooks',
  incidentFabricatesState: 'prohibits incident handling from fabricating business state',
  bigBangTenantRollout: 'prohibits unbounded big-bang tenant rollout',
  rolloutWithoutRollback: 'prohibits rollout without tested rollback',
  mutableEvidence: 'prohibits mutable assurance evidence',
  selfAssurance: 'prohibits self-assurance for consequential changes',
  extensionWeakensControls: 'prohibits extensions weakening platform controls',
  clientInfersCompletion: 'prohibits clients inferring completion',
  aiSelfPromotes: 'prohibits AI self-promotion'
});

export class SolutionOperationsGovernanceAssuranceDescriptor {
  ownershipFields() { return values(metadata.ownershipFields); }
  serviceProfileFields() { return values(metadata.serviceProfileFields); }
  serviceObjectiveFields() { return values(metadata.serviceObjectiveFields); }
  runbookFields() { return values(metadata.runbookFields); }
  incidentFields() { return values(metadata.incidentFields); }
  rolloutFields() { return values(metadata.rolloutFields); }
  evidenceFields() { return values(metadata.evidenceFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceActivities() { return values(metadata.assuranceActivities); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Solution Operations Governance and Assurance profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-09 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-09 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    }
    if (errors.length) {
      throw new PlatformError(constants.SOLUTION_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, 'Solution Operations Governance and Assurance violates ARCH-030-09.', { errors });
    }
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}
