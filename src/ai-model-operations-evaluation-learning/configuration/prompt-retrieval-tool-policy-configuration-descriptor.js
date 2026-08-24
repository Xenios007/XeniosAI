import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PromptRetrievalToolPolicyConfigurationProfile as Profile } from '../contracts/prompt-retrieval-tool-policy-configuration-profile.js';
import * as constants from '../prompt-retrieval-tool-policy-configuration-constants.js';

const metadata = Object.freeze({ responsibilities: constants.BEHAVIOR_CONFIGURATION_RESPONSIBILITIES, packageFields: constants.BEHAVIOR_PACKAGE_FIELDS, promptFields: constants.PROMPT_CONFIGURATION_FIELDS, retrievalFields: constants.RETRIEVAL_CONFIGURATION_FIELDS, toolFields: constants.TOOL_CONFIGURATION_FIELDS, policyFields: constants.POLICY_CONFIGURATION_FIELDS, dependencyFields: constants.DEPENDENCY_LOCK_FIELDS, compatibilityFields: constants.CONFIGURATION_COMPATIBILITY_FIELDS, approvalFields: constants.CONFIGURATION_APPROVAL_FIELDS, rollbackFields: constants.CONFIGURATION_ROLLBACK_FIELDS, lifecycleStates: constants.BEHAVIOR_CONFIGURATION_LIFECYCLE_STATES, controls: constants.BEHAVIOR_CONFIGURATION_CONTROLS, failureRecovery: constants.BEHAVIOR_CONFIGURATION_FAILURE_RECOVERY, observabilityFields: constants.BEHAVIOR_CONFIGURATION_OBSERVABILITY, assuranceEvidence: constants.BEHAVIOR_CONFIGURATION_ASSURANCE, invariants: constants.BEHAVIOR_CONFIGURATION_INVARIANTS });
const required = Object.freeze({ packagesVersioned: 'requires versioned behavior packages', dependenciesPinned: 'requires pinned dependencies', compatibilityValidated: 'requires compatibility validation', approvalsSeparated: 'requires separated approval', rollbackTested: 'requires tested rollback', retrievalGoverned: 'requires governed retrieval', toolsBounded: 'requires bounded tools', policyDeterministic: 'requires deterministic policy' });
const prohibited = Object.freeze({ mutableProductionPackage: 'prohibits mutable production packages', floatingDependency: 'prohibits floating dependencies', untrustedRetrievalAsInstruction: 'prohibits untrusted retrieval as instruction', unapprovedTool: 'prohibits unapproved tools', policyBypassed: 'prohibits policy bypass', secretEmbedded: 'prohibits embedded secrets', configurationDirectlyLearns: 'prohibits configuration directly learning from interactions', partialRollback: 'prohibits partial rollback', unevaluatedPromotion: 'prohibits unevaluated promotion' });

export class PromptRetrievalToolPolicyConfigurationDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  packageFields() { return values(metadata.packageFields); }
  promptFields() { return values(metadata.promptFields); }
  retrievalFields() { return values(metadata.retrievalFields); }
  toolFields() { return values(metadata.toolFields); }
  policyFields() { return values(metadata.policyFields); }
  dependencyFields() { return values(metadata.dependencyFields); }
  compatibilityFields() { return values(metadata.compatibilityFields); }
  approvalFields() { return values(metadata.approvalFields); }
  rollbackFields() { return values(metadata.rollbackFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Prompt Retrieval Tool and Policy Configuration profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-029-04 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-029-04 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.PROMPT_RETRIEVAL_TOOL_POLICY_CONFIGURATION_ERROR_CODE, 'Prompt Retrieval Tool and Policy Configuration violates ARCH-029-04.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
