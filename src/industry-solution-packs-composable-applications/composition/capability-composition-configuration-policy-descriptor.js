import { PlatformError } from '../../foundation/errors/platform-error.js';
import { CapabilityCompositionConfigurationPolicyProfile as Profile } from '../contracts/capability-composition-configuration-policy-profile.js';
import * as constants from '../capability-composition-configuration-policy-constants.js';

const metadata = Object.freeze({ compositionFields: constants.CAPABILITY_COMPOSITION_FIELDS, apiFields: constants.API_COMPOSITION_FIELDS, eventFields: constants.EVENT_COMPOSITION_FIELDS, workflowFields: constants.WORKFLOW_COMPOSITION_FIELDS, agentFields: constants.AGENT_COMPOSITION_FIELDS, knowledgeFields: constants.KNOWLEDGE_COMPOSITION_FIELDS, uiFields: constants.UI_COMPOSITION_FIELDS, policyFields: constants.POLICY_COMPOSITION_FIELDS, tenantConfigurationFields: constants.TENANT_CONFIGURATION_FIELDS, lifecycleStates: constants.COMPOSITION_LIFECYCLE_STATES, boundaryControls: constants.COMPOSITION_BOUNDARY_CONTROLS, failureRecovery: constants.COMPOSITION_FAILURE_RECOVERY, observabilityFields: constants.COMPOSITION_OBSERVABILITY_FIELDS, assuranceEvidence: constants.COMPOSITION_ASSURANCE_EVIDENCE, invariants: constants.COMPOSITION_INVARIANTS });
const required = Object.freeze({ approvedCapabilitiesOnly: 'requires approved capabilities only', providerAuthorityPreserved: 'requires preserved provider authority', apiContractsVersioned: 'requires versioned API contracts', eventsDoNotTransferOwnership: 'requires events not to transfer ownership', workflowsArch015Governed: 'requires ARCH-015 governed workflows', agentsBounded: 'requires bounded agent authority', knowledgeApproved: 'requires approved knowledge', uiPurposeBound: 'requires purpose-bound UI composition', policyDeterministic: 'requires deterministic policy', tenantConfigurationIsolated: 'requires isolated tenant configuration', compositionRecoverable: 'requires recoverable composition' });
const prohibited = Object.freeze({ directDatabaseAccess: 'prohibits direct database access', eventTransfersAuthority: 'prohibits events transferring authority', optimisticCompletionInferred: 'prohibits inferred optimistic completion', agentAuthorityExpanded: 'prohibits composition expanding agent authority', unapprovedKnowledgeUsed: 'prohibits unapproved knowledge', uiBypassesPolicy: 'prohibits UI policy bypass', tenantConfigurationCrossScope: 'prohibits cross-scope tenant configuration', packPolicyWeakensPlatform: 'prohibits pack policy weakening platform controls', platformCoreFork: 'prohibits platform core forks', generatedResponseAsTruth: 'prohibits generated responses as source truth', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', aiBehaviorOutsideArch029: 'prohibits AI behavior changes outside ARCH-029' });

export class CapabilityCompositionConfigurationPolicyDescriptor {
  compositionFields() { return values(metadata.compositionFields); }
  apiFields() { return values(metadata.apiFields); }
  eventFields() { return values(metadata.eventFields); }
  workflowFields() { return values(metadata.workflowFields); }
  agentFields() { return values(metadata.agentFields); }
  knowledgeFields() { return values(metadata.knowledgeFields); }
  uiFields() { return values(metadata.uiFields); }
  policyFields() { return values(metadata.policyFields); }
  tenantConfigurationFields() { return values(metadata.tenantConfigurationFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  boundaryControls() { return values(metadata.boundaryControls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Capability Composition Configuration and Policy profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-03 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-03 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.CAPABILITY_COMPOSITION_CONFIGURATION_POLICY_ERROR_CODE, 'Capability Composition Configuration and Policy violates ARCH-030-03.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
