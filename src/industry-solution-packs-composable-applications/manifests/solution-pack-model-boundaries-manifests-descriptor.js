import { PlatformError } from '../../foundation/errors/platform-error.js';
import { SolutionPackModelBoundariesManifestsProfile as Profile } from '../contracts/solution-pack-model-boundaries-manifests-profile.js';
import * as constants from '../solution-pack-model-boundaries-manifests-constants.js';

const metadata = Object.freeze({ identifierFields: constants.SOLUTION_PACK_IDENTIFIER_FIELDS, capabilityFields: constants.PACK_CAPABILITY_REFERENCE_FIELDS, boundedContextFields: constants.PACK_BOUNDED_CONTEXT_FIELDS, dependencyFields: constants.PACK_DEPENDENCY_FIELDS, manifestFields: constants.SOLUTION_PACK_MANIFEST_FIELDS, ownershipFields: constants.PACK_OWNERSHIP_FIELDS, compatibilityFields: constants.PACK_COMPATIBILITY_FIELDS, contractFields: constants.PACK_MANIFEST_CONTRACT_FIELDS, lifecycleStates: constants.PACK_MANIFEST_LIFECYCLE_STATES, boundaryControls: constants.PACK_MANIFEST_BOUNDARY_CONTROLS, failureRecovery: constants.PACK_MANIFEST_FAILURE_RECOVERY, observabilityFields: constants.PACK_MANIFEST_OBSERVABILITY_FIELDS, assuranceEvidence: constants.PACK_MANIFEST_ASSURANCE_EVIDENCE, invariants: constants.PACK_MANIFEST_INVARIANTS });
const required = Object.freeze({ stableIdentity: 'requires stable pack identity', capabilitiesExplicit: 'requires explicit capability declarations', contextsBounded: 'requires bounded contexts', dependenciesExplicit: 'requires explicit dependencies', manifestVersioned: 'requires versioned manifests', ownershipNamed: 'requires named ownership', compatibilityDeclared: 'requires declared compatibility', providerAuthorityPreserved: 'requires preserved provider authority', tenantIsolationPreserved: 'requires preserved tenant isolation' });
const prohibited = Object.freeze({ identifierReusedForDifferentPack: 'prohibits identifier reuse for a different pack', undeclaredCapability: 'prohibits undeclared capabilities', universalContextIntroduced: 'prohibits unrestricted universal contexts', implicitDependency: 'prohibits implicit dependencies', unversionedManifest: 'prohibits unversioned manifests', ownerlessPack: 'prohibits ownerless packs', compatibilityAssumed: 'prohibits assumed compatibility', platformCoreFork: 'prohibits platform core forks', authorityRedefined: 'prohibits authority redefinition', tenantIsolationBypass: 'prohibits tenant-isolation bypass', generatedCompletionAccepted: 'prohibits generated output as completion', extensionWeakensControls: 'prohibits extensions weakening controls', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', aiBehaviorOutsideArch029: 'prohibits AI behavior changes outside ARCH-029' });

export class SolutionPackModelBoundariesManifestsDescriptor {
  identifierFields() { return values(metadata.identifierFields); }
  capabilityFields() { return values(metadata.capabilityFields); }
  boundedContextFields() { return values(metadata.boundedContextFields); }
  dependencyFields() { return values(metadata.dependencyFields); }
  manifestFields() { return values(metadata.manifestFields); }
  ownershipFields() { return values(metadata.ownershipFields); }
  compatibilityFields() { return values(metadata.compatibilityFields); }
  contractFields() { return values(metadata.contractFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  boundaryControls() { return values(metadata.boundaryControls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Solution Pack Model Boundaries and Manifests profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-02 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-02 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.SOLUTION_PACK_MODEL_BOUNDARIES_MANIFESTS_ERROR_CODE, 'Solution Pack Model Boundaries and Manifests violates ARCH-030-02.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
