import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { AgentIdentityLifecycleProfile } from '../contracts/agent-identity-lifecycle-profile.js';
import {
  ACTIVATION_SCOPES, AGENT_DEFINITION_LIFECYCLE_STATES, AGENT_IDENTIFIER_REQUIREMENTS,
  AGENT_IDENTITY_DOMAINS, AGENT_IDENTITY_LIFECYCLE_ERROR_CODE, AGENT_IDENTITY_RECORD_FIELDS,
  AGENT_REGISTRY_FIELDS, AUTHORITY_BINDING_FIELDS, AUTHORITY_REVALIDATION_TRIGGERS,
  DELEGATION_IDENTITY_FIELDS, EXECUTION_IDENTITY_CREATION_STEPS, EXECUTION_IDENTITY_FIELDS,
  IDENTITY_EVIDENCE_FIELDS, IDENTITY_LIFECYCLE_ARCHITECTURAL_RULES, IDENTITY_LIFECYCLE_BOUNDARIES,
  IDENTITY_LIFECYCLE_OBSERVABILITY_SIGNALS, IDENTITY_PROPAGATION_FIELDS, IDENTITY_SECURITY_THREATS,
  LIFECYCLE_GATES, LIFECYCLE_TRANSITION_FIELDS, MATERIAL_CHANGE_FACTORS, ORPHAN_DETECTION_FINDINGS,
  OWNERSHIP_ROLES, PARTICIPATING_ACTOR_IDENTITIES, PROGRESSIVE_INTRODUCTION_STEPS,
  REGISTRY_AUTHORITIES, RUNTIME_CREDENTIAL_REQUIREMENTS, VERSIONED_AGENT_ELEMENTS
} from '../identity-lifecycle-constants.js';

const MAP = Object.freeze({
  identityDomains: AGENT_IDENTITY_DOMAINS,
  participatingActors: PARTICIPATING_ACTOR_IDENTITIES,
  identityRecordFields: AGENT_IDENTITY_RECORD_FIELDS,
  identifierRequirements: AGENT_IDENTIFIER_REQUIREMENTS,
  ownershipRoles: OWNERSHIP_ROLES,
  registryFields: AGENT_REGISTRY_FIELDS,
  registryAuthorities: REGISTRY_AUTHORITIES,
  versionedElements: VERSIONED_AGENT_ELEMENTS,
  credentialRequirements: RUNTIME_CREDENTIAL_REQUIREMENTS,
  executionCreationSteps: EXECUTION_IDENTITY_CREATION_STEPS,
  executionIdentityFields: EXECUTION_IDENTITY_FIELDS,
  authorityBindingFields: AUTHORITY_BINDING_FIELDS,
  authorityRevalidationTriggers: AUTHORITY_REVALIDATION_TRIGGERS,
  delegationIdentityFields: DELEGATION_IDENTITY_FIELDS,
  identityPropagationFields: IDENTITY_PROPAGATION_FIELDS,
  lifecycleStates: AGENT_DEFINITION_LIFECYCLE_STATES,
  transitionFields: LIFECYCLE_TRANSITION_FIELDS,
  lifecycleGates: LIFECYCLE_GATES,
  activationScopes: ACTIVATION_SCOPES,
  progressiveIntroductionSteps: PROGRESSIVE_INTRODUCTION_STEPS,
  materialChangeFactors: MATERIAL_CHANGE_FACTORS,
  orphanDetectionFindings: ORPHAN_DETECTION_FINDINGS,
  securityThreats: IDENTITY_SECURITY_THREATS,
  evidenceFields: IDENTITY_EVIDENCE_FIELDS,
  observabilitySignals: IDENTITY_LIFECYCLE_OBSERVABILITY_SIGNALS,
  architecturalRules: IDENTITY_LIFECYCLE_ARCHITECTURAL_RULES,
  architectureBoundaries: IDENTITY_LIFECYCLE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  stableIdentity: 'Every agent must have a stable identity.',
  separatedIdentities: 'Definition, version, instance, execution, task, step, and session identities must be separate.',
  ownershipRequired: 'Accountable and operational ownership is required.',
  noActivationWithoutOwnership: 'Activation without ownership must be prevented.',
  exactVersionBinding: 'Every execution must bind to an exact agent version.',
  authenticatesActors: 'Initiating and participating actors must be authenticated.',
  authenticationNotAuthorization: 'Authentication and authorization must be separate controls.',
  scopedRuntimeCredentials: 'Runtime credentials must be short-lived and scoped where practical.',
  credentialsProtected: 'Credentials must stay out of model context, memory, logs, and evidence.',
  scopeBeforeAccess: 'Tenant and property scope must be established before scoped access.',
  preservesInitiatorPrincipal: 'Initiating actor and represented principal must be preserved.',
  authorityBoundToExecutionGoal: 'Authority must be bound to the specific execution and goal.',
  revalidatesAuthority: 'Authority must be revalidated at sensitive boundaries.',
  delegationIdentityPreserved: 'Identity must be preserved through delegation.',
  delegationDoesNotExpandAuthority: 'Delegation must not expand authority.',
  registryIntegrityProtected: 'Registry and identity-context integrity must be protected.',
  retiredIdentifiersReserved: 'Retired identifiers must be reserved.',
  materialChangesVersioned: 'Material behavioral changes must be versioned.',
  riskProportionateGates: 'Lifecycle gates must be proportionate to risk.',
  progressiveActivation: 'Progressive activation must be supported.',
  immediateScopedSuspension: 'Immediate scoped suspension must be supported.',
  deprecationMigrationDefined: 'Deprecation and migration must be defined.',
  retirementRevokesAccess: 'Credentials and access must be revoked at retirement.',
  lifecycleEvidencePreserved: 'Required lifecycle evidence must be preserved.',
  orphanDetection: 'Orphaned and invalid agents must be detected.',
  modelProviderIndependent: 'Identity must remain independent of model and provider identity.'
});

const REQUIRED_FALSE = Object.freeze({
  identityFromPromptOnly: 'Agent identity must not be derived solely from a prompt.',
  displayNameAsIdentity: 'Display name must not be treated as stable enterprise identity.',
  authenticationGrantsAuthorization: 'Successful authentication must not grant authorization.',
  unrestrictedHumanCredentials: 'Agents must not receive unrestricted human credentials.',
  credentialsInModelContext: 'Credentials must not be copied into model context, prompts, memory, plans, or tool descriptions.',
  crossTenantByDefault: 'Cross-tenant execution is prohibited by default.',
  propertyWithoutTenantValidation: 'Property identity must not be accepted without tenant relationship validation.',
  delegateImpersonatesParent: 'Delegate agents must not impersonate parent agents or initiating humans.',
  unboundedDelegationChain: 'Delegation chains must be bounded.',
  anonymousMaterialApproval: 'Shared or anonymous approval identities are not acceptable for material decisions.',
  correlationAsCredential: 'Correlation identifiers must not be treated as credentials.',
  retiredIdentifierReassigned: 'Retired identifiers must not be reassigned.',
  silentVersionMutation: 'Released versions must not silently mutate logical behavior.',
  activationFromArtifactPublication: 'Environment state must not be inferred from artifact publication.',
  indefiniteActiveWithoutOwner: 'Agents without active accountable owners must not continue unrestricted operation.',
  selectsIdentityProviderTechnology: 'ARCH-014-02 does not define identity-provider technology.',
  selectsRegistryProduct: 'ARCH-014-02 does not select registry or catalog products.'
});

export class AgentIdentityLifecycleDescriptor {
  identityDomains() { return values(MAP.identityDomains); }
  participatingActors() { return values(MAP.participatingActors); }
  identityRecordFields() { return values(MAP.identityRecordFields); }
  identifierRequirements() { return values(MAP.identifierRequirements); }
  ownershipRoles() { return values(MAP.ownershipRoles); }
  registryFields() { return values(MAP.registryFields); }
  registryAuthorities() { return values(MAP.registryAuthorities); }
  versionedElements() { return values(MAP.versionedElements); }
  credentialRequirements() { return values(MAP.credentialRequirements); }
  executionCreationSteps() { return values(MAP.executionCreationSteps); }
  executionIdentityFields() { return values(MAP.executionIdentityFields); }
  authorityBindingFields() { return values(MAP.authorityBindingFields); }
  authorityRevalidationTriggers() { return values(MAP.authorityRevalidationTriggers); }
  delegationIdentityFields() { return values(MAP.delegationIdentityFields); }
  identityPropagationFields() { return values(MAP.identityPropagationFields); }
  lifecycleStates() { return values(MAP.lifecycleStates); }
  transitionFields() { return values(MAP.transitionFields); }
  lifecycleGates() { return values(MAP.lifecycleGates); }
  activationScopes() { return values(MAP.activationScopes); }
  progressiveIntroductionSteps() { return values(MAP.progressiveIntroductionSteps); }
  materialChangeFactors() { return values(MAP.materialChangeFactors); }
  orphanDetectionFindings() { return values(MAP.orphanDetectionFindings); }
  securityThreats() { return values(MAP.securityThreats); }
  evidenceFields() { return values(MAP.evidenceFields); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof AgentIdentityLifecycleProfile ? profileInput : new AgentIdentityLifecycleProfile(profileInput);
    const errors = [];
    if (!profile.identityName) errors.push('Agent Identity and Lifecycle profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Agent Identity and Lifecycle must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(AGENT_IDENTITY_LIFECYCLE_ERROR_CODE, 'Agent Identity and Lifecycle violates ARCH-014-02.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
