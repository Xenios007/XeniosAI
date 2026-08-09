import assert from 'node:assert/strict';
import test from 'node:test';

import { ServiceCollection } from '../../src/foundation/di/service-collection.js';
import {
  ACTIVATION_SCOPES,
  AGENT_DEFINITION_LIFECYCLE_STATES,
  AGENT_IDENTIFIER_REQUIREMENTS,
  AGENT_IDENTITY_DOMAINS,
  AGENT_IDENTITY_RECORD_FIELDS,
  AgentIdentityLifecycleDescriptor,
  AgentIdentityLifecycleProfile,
  AGENT_REGISTRY_FIELDS,
  AUTHORITY_BINDING_FIELDS,
  AUTHORITY_REVALIDATION_TRIGGERS,
  DELEGATION_IDENTITY_FIELDS,
  EXECUTION_IDENTITY_CREATION_STEPS,
  EXECUTION_IDENTITY_FIELDS,
  IDENTITY_EVIDENCE_FIELDS,
  IDENTITY_LIFECYCLE_ARCHITECTURAL_RULES,
  IDENTITY_LIFECYCLE_BOUNDARIES,
  IDENTITY_LIFECYCLE_OBSERVABILITY_SIGNALS,
  IDENTITY_PROPAGATION_FIELDS,
  IDENTITY_SECURITY_THREATS,
  LIFECYCLE_GATES,
  LIFECYCLE_TRANSITION_FIELDS,
  MATERIAL_CHANGE_FACTORS,
  ORPHAN_DETECTION_FINDINGS,
  OWNERSHIP_ROLES,
  PARTICIPATING_ACTOR_IDENTITIES,
  PROGRESSIVE_INTRODUCTION_STEPS,
  REGISTRY_AUTHORITIES,
  RUNTIME_CREDENTIAL_REQUIREMENTS,
  VERSIONED_AGENT_ELEMENTS,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-02 exposes agent identity, actor, ownership, registry, and versioning requirements', () => {
  const descriptor = new AgentIdentityLifecycleDescriptor();

  assert.deepEqual(descriptor.identityDomains(), Object.values(AGENT_IDENTITY_DOMAINS));
  assert.ok(descriptor.participatingActors().includes(PARTICIPATING_ACTOR_IDENTITIES.REPRESENTED_PRINCIPAL));
  assert.ok(descriptor.identityRecordFields().includes(AGENT_IDENTITY_RECORD_FIELDS.CURRENT_APPROVED_VERSIONS));
  assert.ok(descriptor.identifierRequirements().includes(AGENT_IDENTIFIER_REQUIREMENTS.GLOBALLY_UNIQUE));
  assert.ok(descriptor.ownershipRoles().includes(OWNERSHIP_ROLES.ACCOUNTABLE_OWNER));
  assert.ok(descriptor.registryFields().includes(AGENT_REGISTRY_FIELDS.AUTHORITY_REFERENCES));
  assert.ok(descriptor.registryAuthorities().includes(REGISTRY_AUTHORITIES.VERSION_APPROVED));
  assert.ok(descriptor.versionedElements().includes(VERSIONED_AGENT_ELEMENTS.PROMPTS_INSTRUCTIONS));
});

test('ARCH-014-02 exposes credential, execution, authority, delegation, and propagation controls', () => {
  const descriptor = new AgentIdentityLifecycleDescriptor();

  assert.ok(descriptor.credentialRequirements().includes(RUNTIME_CREDENTIAL_REQUIREMENTS.PROTECTED_FROM_MODEL_CONTEXT));
  assert.ok(descriptor.executionCreationSteps().includes(EXECUTION_IDENTITY_CREATION_STEPS.REQUIRED_SPONSORSHIP));
  assert.ok(descriptor.executionIdentityFields().includes(EXECUTION_IDENTITY_FIELDS.CORRELATION_IDENTIFIERS));
  assert.ok(descriptor.authorityBindingFields().includes(AUTHORITY_BINDING_FIELDS.REVOCATION_CONDITIONS));
  assert.ok(descriptor.authorityRevalidationTriggers().includes(AUTHORITY_REVALIDATION_TRIGGERS.POLICY_CHANGE));
  assert.ok(descriptor.delegationIdentityFields().includes(DELEGATION_IDENTITY_FIELDS.AUTHORITY_SUBSET));
  assert.ok(descriptor.identityPropagationFields().includes(IDENTITY_PROPAGATION_FIELDS.TOOL_CALL));
});

test('ARCH-014-02 exposes lifecycle, change, security, evidence, observability, rules, and boundaries', () => {
  const descriptor = new AgentIdentityLifecycleDescriptor();

  assert.ok(descriptor.lifecycleStates().includes(AGENT_DEFINITION_LIFECYCLE_STATES.AWAITING_APPROVAL));
  assert.ok(descriptor.transitionFields().includes(LIFECYCLE_TRANSITION_FIELDS.ROLLBACK_REVERSAL));
  assert.ok(descriptor.lifecycleGates().includes(LIFECYCLE_GATES.RETIREMENT));
  assert.ok(descriptor.activationScopes().includes(ACTIVATION_SCOPES.SELECTED_PROPERTIES));
  assert.ok(descriptor.progressiveIntroductionSteps().includes(PROGRESSIVE_INTRODUCTION_STEPS.SHADOW_OPERATION));
  assert.ok(descriptor.materialChangeFactors().includes(MATERIAL_CHANGE_FACTORS.MODEL_BEHAVIOR));
  assert.ok(descriptor.orphanDetectionFindings().includes(ORPHAN_DETECTION_FINDINGS.NO_CURRENT_EVALUATION));
  assert.ok(descriptor.securityThreats().includes(IDENTITY_SECURITY_THREATS.CONFUSED_DEPUTY));
  assert.ok(descriptor.evidenceFields().includes(IDENTITY_EVIDENCE_FIELDS.DELEGATION_CHAIN));
  assert.ok(descriptor.observabilitySignals().includes(IDENTITY_LIFECYCLE_OBSERVABILITY_SIGNALS.EXPIRED_APPROVALS));
  assert.ok(descriptor.architecturalRules().includes(IDENTITY_LIFECYCLE_ARCHITECTURAL_RULES.EXACT_VERSION));
  assert.ok(descriptor.architectureBoundaries().includes(IDENTITY_LIFECYCLE_BOUNDARIES.IDENTITY_PROVIDER_TECHNOLOGY));
});

test('ARCH-014-02 validates complete identity lifecycle profiles and rejects architectural violations', () => {
  const descriptor = new AgentIdentityLifecycleDescriptor();
  const validProfile = new AgentIdentityLifecycleProfile({
    identityName: 'Enterprise Agent Identity and Lifecycle',
    identityDomains: descriptor.identityDomains(),
    participatingActors: descriptor.participatingActors(),
    identityRecordFields: descriptor.identityRecordFields(),
    identifierRequirements: descriptor.identifierRequirements(),
    ownershipRoles: descriptor.ownershipRoles(),
    registryFields: descriptor.registryFields(),
    registryAuthorities: descriptor.registryAuthorities(),
    versionedElements: descriptor.versionedElements(),
    credentialRequirements: descriptor.credentialRequirements(),
    executionCreationSteps: descriptor.executionCreationSteps(),
    executionIdentityFields: descriptor.executionIdentityFields(),
    authorityBindingFields: descriptor.authorityBindingFields(),
    authorityRevalidationTriggers: descriptor.authorityRevalidationTriggers(),
    delegationIdentityFields: descriptor.delegationIdentityFields(),
    identityPropagationFields: descriptor.identityPropagationFields(),
    lifecycleStates: descriptor.lifecycleStates(),
    transitionFields: descriptor.transitionFields(),
    lifecycleGates: descriptor.lifecycleGates(),
    activationScopes: descriptor.activationScopes(),
    progressiveIntroductionSteps: descriptor.progressiveIntroductionSteps(),
    materialChangeFactors: descriptor.materialChangeFactors(),
    orphanDetectionFindings: descriptor.orphanDetectionFindings(),
    securityThreats: descriptor.securityThreats(),
    evidenceFields: descriptor.evidenceFields(),
    observabilitySignals: descriptor.observabilitySignals(),
    architecturalRules: descriptor.architecturalRules(),
    architectureBoundaries: descriptor.architectureBoundaries()
  });

  assert.equal(descriptor.validateProfile(validProfile).isValid, true);

  const invalid = descriptor.validateProfile({
    stableIdentity: false,
    separatedIdentities: false,
    authenticationNotAuthorization: false,
    credentialsProtected: false,
    identityFromPromptOnly: true,
    displayNameAsIdentity: true,
    authenticationGrantsAuthorization: true,
    unrestrictedHumanCredentials: true,
    credentialsInModelContext: true,
    crossTenantByDefault: true,
    delegateImpersonatesParent: true,
    silentVersionMutation: true,
    selectsIdentityProviderTechnology: true,
    selectsRegistryProduct: true
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.some((error) => error.includes('must have a name')));
  assert.ok(invalid.errors.some((error) => error.includes(AGENT_IDENTITY_DOMAINS.VERSION)));
  assert.ok(invalid.errors.some((error) => error.includes(PARTICIPATING_ACTOR_IDENTITIES.REPRESENTED_PRINCIPAL)));
  assert.ok(invalid.errors.some((error) => error.includes(AGENT_IDENTITY_RECORD_FIELDS.CURRENT_APPROVED_VERSIONS)));
  assert.ok(invalid.errors.some((error) => error.includes(AGENT_IDENTIFIER_REQUIREMENTS.GLOBALLY_UNIQUE)));
  assert.ok(invalid.errors.includes('Every agent must have a stable identity.'));
  assert.ok(invalid.errors.includes('Agent identity must not be derived solely from a prompt.'));
});

test('ARCH-014-02 assertion detects incomplete descriptor metadata', () => {
  class IncompleteDescriptor extends AgentIdentityLifecycleDescriptor {
    identityDomains() { return [AGENT_IDENTITY_DOMAINS.DEFINITION]; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    /Agent Identity and Lifecycle violates ARCH-014-02/
  );
});

test('ARCH-014-02 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('AgentIdentityLifecycleDescriptor');

  assert.ok(descriptor instanceof AgentIdentityLifecycleDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
