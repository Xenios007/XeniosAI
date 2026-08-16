import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  WORKFLOW_ASSURANCE_METHODS,
  WORKFLOW_EVIDENCE_FIELDS,
  WORKFLOW_RISK_TIERS,
  WORKFLOW_SECURITY_BOUNDARIES,
  WORKFLOW_SECURITY_GOVERNANCE_ERROR_CODE,
  WORKFLOW_SECURITY_IDENTITIES,
  WORKFLOW_SECURITY_RULES,
  WORKFLOW_SECURITY_THREATS,
  WorkflowSecurityGovernanceDescriptor,
  WorkflowSecurityGovernanceProfile,
  addWorkflowEngine
} from '../../src/workflow-engine/index.js';

test('ARCH-015-08 exposes identity, risk, threat, and evidence semantics', () => {
  const descriptor = new WorkflowSecurityGovernanceDescriptor();
  assert.ok(descriptor.identities().includes(WORKFLOW_SECURITY_IDENTITIES.AGENT));
  assert.deepEqual(descriptor.riskTiers(), Object.values(WORKFLOW_RISK_TIERS));
  assert.ok(descriptor.threats().includes(WORKFLOW_SECURITY_THREATS.CONFUSED_DEPUTY));
  assert.deepEqual(descriptor.evidenceFields(), Object.values(WORKFLOW_EVIDENCE_FIELDS));
});

test('ARCH-015-08 exposes assurance, protected-transition rules, and boundaries', () => {
  const descriptor = new WorkflowSecurityGovernanceDescriptor();
  assert.ok(descriptor.assuranceMethods().includes(WORKFLOW_ASSURANCE_METHODS.TENANT_ISOLATION));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_SECURITY_RULES.PROTECTED_TRANSITION));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_SECURITY_RULES.AGENT_BOUNDARY));
  assert.ok(descriptor.architectureBoundaries().includes(WORKFLOW_SECURITY_BOUNDARIES.EXACTLY_ONCE));
});

test('ARCH-015-08 validates profiles and rejects security shortcuts', () => {
  const descriptor = new WorkflowSecurityGovernanceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const invalid = {};
  for (const key of [
    'protectedTransitions', 'distinctIdentities', 'actorsAuthenticated',
    'effectiveAuthorityEvaluated', 'delegationPreserved', 'scopeBound', 'immutableDefinitions',
    'governedLifecycle', 'separationOfDuties', 'runtimeOwnsTransitions',
    'domainOwnershipPreserved', 'agentOwnershipPreserved', 'leastPrivilegeCredentials',
    'externalInputsValidated', 'threatControls', 'explicitHumanDecisions',
    'boundedAgentParticipation', 'evidenceByDesign', 'domainEvidenceDistinct', 'privacyGoverned',
    'incidentIntegrated', 'riskBasedAssurance', 'governedExceptions', 'materialChangeReassessed',
    'reconciledRecovery', 'vendorNeutral', 'technologyIndependent'
  ]) invalid[key] = false;
  for (const key of [
    'identifierGrantsAuthority', 'internalNetworkTrusted', 'authenticationImpliesAuthorization',
    'workflowExpandsAuthority', 'callersOverrideScope', 'plaintextSecretsInState',
    'workersMutateState', 'aiOutputAuthoritative', 'silenceMeansApproval',
    'unreviewedActivation', 'directDatabaseCorrection', 'blindReplay', 'universalExactlyOnce',
    'automaticComplianceClaim', 'selectsSecurityProduct', 'definesAdjacentDomains'
  ]) invalid[key] = true;
  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /definition-identity/);
  assert.match(validation.errors.join('\n'), /requires protectedTransitions/);
  assert.match(validation.errors.join('\n'), /prohibits identifierGrantsAuthority/);
});

test('ARCH-015-08 detects incomplete metadata', () => {
  class IncompleteDescriptor extends WorkflowSecurityGovernanceDescriptor {
    identities() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === WORKFLOW_SECURITY_GOVERNANCE_ERROR_CODE
  );
});

test('ARCH-015-08 profile is immutable', () => {
  const profile = complete(new WorkflowSecurityGovernanceDescriptor());
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.identities.push('other'), TypeError);
});

test('ARCH-015-08 descriptor is registered', () => {
  const descriptor = addWorkflowEngine(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('WorkflowSecurityGovernanceDescriptor');
  assert.ok(descriptor instanceof WorkflowSecurityGovernanceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'identities', 'securityObjectives', 'untrustedInputs', 'riskTiers',
    'policyEnforcementPoints', 'threats', 'evidenceFields', 'assuranceMethods', 'operations',
    'qualityAttributes', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new WorkflowSecurityGovernanceProfile({ profileName: 'Workflow Security Governance', ...metadata });
}
