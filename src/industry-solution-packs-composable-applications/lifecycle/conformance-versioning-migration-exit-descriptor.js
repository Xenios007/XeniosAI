import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ConformanceVersioningMigrationExitProfile as Profile } from '../contracts/conformance-versioning-migration-exit-profile.js';
import * as constants from '../conformance-versioning-migration-exit-constants.js';

const metadata = Object.freeze({ conformanceFields: constants.CONFORMANCE_ASSESSMENT_FIELDS, certificationFields: constants.SOLUTION_PACK_CERTIFICATION_FIELDS, versionFields: constants.SOLUTION_PACK_VERSION_FIELDS, compatibilityFields: constants.PACK_COMPATIBILITY_ASSESSMENT_FIELDS, upgradeFields: constants.PACK_UPGRADE_PLAN_FIELDS, migrationFields: constants.PACK_DATA_MIGRATION_FIELDS, rollbackFields: constants.PACK_ROLLBACK_FIELDS, deprecationFields: constants.PACK_DEPRECATION_FIELDS, portabilityFields: constants.PACK_PORTABILITY_FIELDS, removalFields: constants.PACK_REMOVAL_FIELDS, releaseFlow: constants.CONFORMANCE_RELEASE_FLOW, lifecycleStates: constants.PACK_LIFECYCLE_STATES, controls: constants.PACK_LIFECYCLE_CONTROLS, failureRecovery: constants.PACK_LIFECYCLE_FAILURE_RECOVERY, observabilityFields: constants.PACK_LIFECYCLE_OBSERVABILITY_FIELDS, assuranceEvidence: constants.PACK_LIFECYCLE_ASSURANCE_EVIDENCE, invariants: constants.PACK_LIFECYCLE_INVARIANTS });
const required = Object.freeze({ certificationEvidenceBased: 'requires evidence-based certification', compatibilityVerified: 'requires verified compatibility', versionsImmutable: 'requires immutable versions', upgradesProgressive: 'requires progressive upgrades', migrationsReconciled: 'requires reconciled migrations', rollbackTested: 'requires tested rollback', deprecationEffectiveDated: 'requires effective-dated deprecation', portabilityComplete: 'requires complete portability', removalVerified: 'requires verified removal', providerAuthorityPreserved: 'requires preserved provider authority', tenantIsolated: 'requires tenant isolation' });
const prohibited = Object.freeze({ selfCertification: 'prohibits self-certification', compatibilityAssumed: 'prohibits assumed compatibility', versionMutatedInPlace: 'prohibits in-place version mutation', untestedBigBangUpgrade: 'prohibits untested big-bang upgrades', sourceDeletedBeforeReconciliation: 'prohibits source deletion before reconciliation', rollbackUnavailable: 'prohibits release without rollback or contained compensation', deprecationWithoutNotice: 'prohibits deprecation without notice', proprietaryOnlyExport: 'prohibits proprietary-only export', removalLeavesAuthority: 'prohibits removal leaving authority active', removalLeavesSecretsOrRuntime: 'prohibits removal leaving secrets or runtime artifacts', aiApprovesOwnPromotion: 'prohibits AI approving its own promotion', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class ConformanceVersioningMigrationExitDescriptor {
  conformanceFields() { return values(metadata.conformanceFields); }
  certificationFields() { return values(metadata.certificationFields); }
  versionFields() { return values(metadata.versionFields); }
  compatibilityFields() { return values(metadata.compatibilityFields); }
  upgradeFields() { return values(metadata.upgradeFields); }
  migrationFields() { return values(metadata.migrationFields); }
  rollbackFields() { return values(metadata.rollbackFields); }
  deprecationFields() { return values(metadata.deprecationFields); }
  portabilityFields() { return values(metadata.portabilityFields); }
  removalFields() { return values(metadata.removalFields); }
  releaseFlow() { return values(metadata.releaseFlow); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Conformance Versioning Migration and Exit profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-08 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-08 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.CONFORMANCE_VERSIONING_MIGRATION_EXIT_ERROR_CODE, 'Conformance Versioning Migration and Exit violates ARCH-030-08.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
