import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ModelCatalogProviderAbstractionCapabilitiesProfile as Profile } from '../contracts/model-catalog-provider-abstraction-capabilities-profile.js';
import * as constants from '../model-catalog-provider-abstraction-capabilities-constants.js';

const metadata = Object.freeze({ responsibilities: constants.MODEL_CATALOG_RESPONSIBILITIES, modelFields: constants.MODEL_RECORD_FIELDS, providerFields: constants.PROVIDER_RECORD_FIELDS, modalities: constants.MODEL_MODALITIES, capabilityFields: constants.MODEL_CAPABILITY_FIELDS, limitFields: constants.MODEL_LIMIT_FIELDS, residencyFields: constants.MODEL_RESIDENCY_FIELDS, costFields: constants.MODEL_COST_FIELDS, versionFields: constants.MODEL_VERSION_FIELDS, exitFields: constants.PROVIDER_EXIT_FIELDS, lifecycleStates: constants.MODEL_CATALOG_LIFECYCLE_STATES, controls: constants.MODEL_CATALOG_CONTROLS, failureRecovery: constants.MODEL_CATALOG_FAILURE_RECOVERY, observabilityFields: constants.MODEL_CATALOG_OBSERVABILITY, assuranceEvidence: constants.MODEL_CATALOG_ASSURANCE, invariants: constants.MODEL_CATALOG_INVARIANTS });
const required = Object.freeze({ providerAbstracted: 'requires provider abstraction', capabilitiesExplicit: 'requires explicit capabilities', limitsEnforced: 'requires enforced limits', residencyValidated: 'requires residency validation', costVisible: 'requires visible cost semantics', versionsPinned: 'requires pinned versions', exitTested: 'requires tested provider exit', approvalRequired: 'requires approval before production use' });
const prohibited = Object.freeze({ providerSpecificConsumerContract: 'prohibits provider-specific consumer contracts', capabilityAssumed: 'prohibits assumed capabilities', limitBypassed: 'prohibits limit bypass', residencyUnknown: 'prohibits unknown residency', costUnbounded: 'prohibits unbounded cost', mutableProductionVersion: 'prohibits mutable production versions', exitPlanMissing: 'prohibits missing exit plans', providerOutputAsCompletion: 'prohibits provider output as completion', directLearningEnabled: 'prohibits direct production learning' });

export class ModelCatalogProviderAbstractionCapabilitiesDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  modelFields() { return values(metadata.modelFields); }
  providerFields() { return values(metadata.providerFields); }
  modalities() { return values(metadata.modalities); }
  capabilityFields() { return values(metadata.capabilityFields); }
  limitFields() { return values(metadata.limitFields); }
  residencyFields() { return values(metadata.residencyFields); }
  costFields() { return values(metadata.costFields); }
  versionFields() { return values(metadata.versionFields); }
  exitFields() { return values(metadata.exitFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Model Catalog Provider Abstraction and Capabilities profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-02 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-02 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.MODEL_CATALOG_PROVIDER_ABSTRACTION_CAPABILITIES_ERROR_CODE, 'Model Catalog Provider Abstraction and Capabilities violates ARCH-029-02.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
