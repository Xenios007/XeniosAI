import assert from 'node:assert/strict';
import test from 'node:test';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ACTION_CLASSES,
  PRE_INVOCATION_CHECKS,
  TOOL_ARCHITECTURAL_RULES,
  TOOL_ARCHITECTURE_BOUNDARIES,
  TOOL_CATEGORIES,
  TOOL_CONTRACT_FIELDS,
  TOOL_EVIDENCE_FIELDS,
  TOOL_GATEWAY_CAPABILITIES,
  TOOL_REGISTRY_FIELDS,
  TOOL_SECURITY_THREATS,
  TOOLS_ACTIONS_ENVIRONMENT_ERROR_CODE,
  ToolsActionsEnvironmentDescriptor,
  ToolsActionsEnvironmentProfile,
  addAiAgentFramework
} from '../../src/ai-agent-framework/index.js';

test('ARCH-014-05 exposes gateway, registry, identity, discovery, contract, category, action, and authorization metadata', () => {
  const descriptor = new ToolsActionsEnvironmentDescriptor();

  assert.ok(descriptor.gatewayCapabilities().includes(TOOL_GATEWAY_CAPABILITIES.CREDENTIAL_ACQUISITION));
  assert.ok(descriptor.registryFields().includes(TOOL_REGISTRY_FIELDS.COMPENSATION_REFERENCE));
  assert.ok(descriptor.identityTypes().includes('tool-invocation'));
  assert.ok(descriptor.discoveryFactors().includes('provider-availability'));
  assert.ok(descriptor.contractFields().includes(TOOL_CONTRACT_FIELDS.IDEMPOTENCY_SEMANTICS));
  assert.ok(descriptor.categories().includes(TOOL_CATEGORIES.DEVELOPMENT));
  assert.ok(descriptor.actionClasses().includes(ACTION_CLASSES.A4_IRREVERSIBLE_ACT));
  assert.ok(descriptor.actionMetadataFields().includes('validation-method'));
  assert.ok(descriptor.preInvocationChecks().includes(PRE_INVOCATION_CHECKS.ACQUIRE_CREDENTIALS));
  assert.ok(descriptor.authorizationFactors().includes('delegated-authority'));
  assert.ok(descriptor.authorityLevels().includes('specific-resource'));
  assert.ok(descriptor.approvalBindings().includes('validity-period'));
});

test('ARCH-014-05 exposes credential, validation, result, side-effect, idempotency, reconciliation, and error metadata', () => {
  const descriptor = new ToolsActionsEnvironmentDescriptor();

  assert.ok(descriptor.credentialScopeRequirements().includes('execution-bound'));
  assert.ok(descriptor.inputValidationTypes().includes('business-service-preconditions'));
  assert.ok(descriptor.outputValidationTypes().includes('unexpected-instructions'));
  assert.ok(descriptor.resultSemantics().includes('result-uncertain'));
  assert.ok(descriptor.sideEffectTypes().includes('deployment'));
  assert.ok(descriptor.sideEffectLedgerFields().includes('provider-reference'));
  assert.ok(descriptor.idempotencyStrategyFields().includes('tenant-isolation'));
  assert.ok(descriptor.reconciliationSources().includes('side-effect-ledger'));
  assert.ok(descriptor.compensationContractFields().includes('failure-behavior'));
  assert.ok(descriptor.invocationStates().includes('reconciling'));
  assert.ok(descriptor.errorCategories().includes('policy-denied'));
});

test('ARCH-014-05 exposes environment, lifecycle, observability, evidence, operations, threats, quality, rules, and boundaries', () => {
  const descriptor = new ToolsActionsEnvironmentDescriptor();

  assert.ok(descriptor.environmentTypes().includes('production'));
  assert.ok(descriptor.environmentIdentityFields().includes('credential-policy'));
  assert.ok(descriptor.environmentIsolationControls().includes('telemetry'));
  assert.ok(descriptor.sandboxRequirements().includes('no-ambient-credentials'));
  assert.ok(descriptor.filesystemBoundaryFields().includes('destructive-operations'));
  assert.ok(descriptor.networkBoundaryFields().includes('allowed-destinations'));
  assert.ok(descriptor.dataToolControls().includes('tenant-filters'));
  assert.ok(descriptor.lifecycleStates().includes('retired'));
  assert.ok(descriptor.evaluationAreas().includes('reconciliation'));
  assert.ok(descriptor.observabilitySignals().includes('reconciliation-backlog'));
  assert.ok(descriptor.evidenceFields().includes(TOOL_EVIDENCE_FIELDS.IDEMPOTENCY_KEY));
  assert.ok(descriptor.operationalCapabilities().includes('credential-rotation'));
  assert.ok(descriptor.securityThreats().includes(TOOL_SECURITY_THREATS.CONFUSED_DEPUTY));
  assert.ok(descriptor.qualityAttributes().includes('operability'));
  assert.ok(descriptor.architecturalRules().includes(TOOL_ARCHITECTURAL_RULES.GATEWAY_MEDIATION));
  assert.ok(descriptor.architectureBoundaries().includes(TOOL_ARCHITECTURE_BOUNDARIES.SANDBOX_TECHNOLOGY));
});

test('ARCH-014-05 validates complete profiles and rejects tool/action boundary violations', () => {
  const descriptor = new ToolsActionsEnvironmentDescriptor();

  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);

  const invalid = descriptor.validateProfile({
    registeredVersionedTools: false,
    gatewayMediated: false,
    discoverySeparateFromAuthorization: false,
    credentialsOutsideModelContext: false,
    toolAvailabilityIsAuthority: true,
    bypassesGateway: true,
    modelReceivesCredentials: true,
    networkSuccessMeansBusinessSuccess: true,
    repeatsUncertainMaterialAction: true,
    unrestrictedDatabaseAccess: true,
    ambiguousDestructiveScope: true,
    delegateReceivesRawCredentials: true,
    rawErrorsToUsersOrModels: true,
    selectsCredentialTechnology: true,
    selectsSandboxTechnology: true,
    selectsToolProtocolVendor: true
  });

  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /registry-lookup/);
  assert.match(invalid.errors.join('\n'), /stable-identifier/);
  assert.match(invalid.errors.join('\n'), /Tools must be registered and versioned/);
  assert.match(invalid.errors.join('\n'), /Tool availability must not be treated as authority/);
  assert.match(invalid.errors.join('\n'), /Models must not receive credentials/);
  assert.match(invalid.errors.join('\n'), /ARCH-014-05 does not select sandbox technology/);
});

test('ARCH-014-05 assertion detects incomplete tools metadata', () => {
  class IncompleteDescriptor extends ToolsActionsEnvironmentDescriptor {
    gatewayCapabilities() { return []; }
  }

  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    error => error instanceof PlatformError &&
      error.code === TOOLS_ACTIONS_ENVIRONMENT_ERROR_CODE &&
      error.details.errors.some(message => message.includes('documented gatewayCapabilities'))
  );
});

test('ARCH-014-05 descriptor is available through AI agent framework dependency injection', () => {
  const services = addAiAgentFramework(new ServiceCollection());
  const descriptor = services.buildServiceProvider().getRequiredService('ToolsActionsEnvironmentDescriptor');

  assert.ok(descriptor instanceof ToolsActionsEnvironmentDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['gatewayCapabilities', 'registryFields', 'identityTypes', 'discoveryFactors',
    'contractFields', 'categories', 'actionClasses', 'actionMetadataFields', 'preInvocationChecks',
    'authorizationFactors', 'authorityLevels', 'approvalBindings', 'credentialScopeRequirements',
    'inputValidationTypes', 'outputValidationTypes', 'resultSemantics', 'sideEffectTypes',
    'sideEffectLedgerFields', 'idempotencyStrategyFields', 'reconciliationSources',
    'compensationContractFields', 'invocationStates', 'errorCategories', 'environmentTypes',
    'environmentIdentityFields', 'environmentIsolationControls', 'sandboxRequirements',
    'filesystemBoundaryFields', 'networkBoundaryFields', 'dataToolControls', 'lifecycleStates',
    'evaluationAreas', 'observabilitySignals', 'evidenceFields', 'operationalCapabilities',
    'securityThreats', 'qualityAttributes', 'architecturalRules', 'architectureBoundaries']) values[key] = descriptor[key]();
  return new ToolsActionsEnvironmentProfile({ toolsName: 'Tools, Actions, and Environment', ...values });
}
