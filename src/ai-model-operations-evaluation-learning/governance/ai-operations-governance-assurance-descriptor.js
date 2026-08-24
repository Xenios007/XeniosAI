import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AiOperationsGovernanceAssuranceProfile as Profile } from '../contracts/ai-operations-governance-assurance-profile.js';
import * as constants from '../ai-operations-governance-assurance-constants.js';

const metadata = Object.freeze({ responsibilities: constants.AI_GOVERNANCE_RESPONSIBILITIES, accountabilityFields: constants.AI_ACCOUNTABILITY_FIELDS, riskFields: constants.AI_RISK_CLASSIFICATION_FIELDS, evidenceFields: constants.ASSURANCE_EVIDENCE_BUNDLE_FIELDS, redTeamFields: constants.RED_TEAM_ASSESSMENT_FIELDS, conformanceFields: constants.AI_CONFORMANCE_RESULT_FIELDS, auditFields: constants.AI_AUDIT_RECORD_FIELDS, exceptionFields: constants.AI_GOVERNANCE_EXCEPTION_FIELDS, remediationFields: constants.AI_REMEDIATION_FIELDS, readinessFields: constants.SERVICE_READINESS_FIELDS, lifecycleStates: constants.AI_GOVERNANCE_LIFECYCLE_STATES, controls: constants.AI_GOVERNANCE_CONTROLS, failureRecovery: constants.AI_GOVERNANCE_FAILURE_RECOVERY, observabilityFields: constants.AI_GOVERNANCE_OBSERVABILITY, assuranceEvidence: constants.AI_GOVERNANCE_ASSURANCE, invariants: constants.AI_GOVERNANCE_INVARIANTS });
const required = Object.freeze({ accountabilityAssigned: 'requires assigned accountability', riskClassified: 'requires risk classification', evidenceComplete: 'requires complete evidence', redTeamIndependent: 'requires independent red-team assessment', conformanceVerified: 'requires verified conformance', auditImmutable: 'requires immutable audit', exceptionsTimeBounded: 'requires time-bounded exceptions', readinessApproved: 'requires approved service readiness' });
const prohibited = Object.freeze({ selfApproval: 'prohibits self-approval', unclassifiedProductionUse: 'prohibits unclassified production use', missingEvidenceAccepted: 'prohibits acceptance of missing evidence', redTeamSkipped: 'prohibits skipped required red-team assessment', auditMutable: 'prohibits mutable audit', exceptionWithoutExpiry: 'prohibits exceptions without expiry', readinessSelfCertified: 'prohibits self-certified readiness', controlsWeakenedByExtension: 'prohibits extensions weakening controls', assuranceDirectlyPromotes: 'prohibits assurance from directly promoting production behavior', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class AiOperationsGovernanceAssuranceDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  accountabilityFields() { return values(metadata.accountabilityFields); }
  riskFields() { return values(metadata.riskFields); }
  evidenceFields() { return values(metadata.evidenceFields); }
  redTeamFields() { return values(metadata.redTeamFields); }
  conformanceFields() { return values(metadata.conformanceFields); }
  auditFields() { return values(metadata.auditFields); }
  exceptionFields() { return values(metadata.exceptionFields); }
  remediationFields() { return values(metadata.remediationFields); }
  readinessFields() { return values(metadata.readinessFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('AI Operations Governance and Assurance profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-09 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-09 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.AI_OPERATIONS_GOVERNANCE_ASSURANCE_ERROR_CODE, 'AI Operations Governance and Assurance violates ARCH-029-09.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
