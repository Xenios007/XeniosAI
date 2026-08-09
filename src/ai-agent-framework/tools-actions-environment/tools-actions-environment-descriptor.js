import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AgentFrameworkValidationResult } from '../contracts/agent-framework-validation-result.js';
import { ToolsActionsEnvironmentProfile } from '../contracts/tools-actions-environment-profile.js';
import {
  ACTION_CLASSES, ACTION_METADATA_FIELDS, APPROVAL_BINDINGS, AUTHORIZATION_FACTORS,
  CAPABILITY_DISCOVERY_FACTORS, COMPENSATION_CONTRACT_FIELDS, CREDENTIAL_SCOPE_REQUIREMENTS,
  DATA_TOOL_CONTROLS, ENVIRONMENT_IDENTITY_FIELDS, ENVIRONMENT_ISOLATION_CONTROLS, ENVIRONMENT_TYPES,
  FILESYSTEM_BOUNDARY_FIELDS, FINE_GRAINED_AUTHORITY_LEVELS, IDEMPOTENCY_STRATEGY_FIELDS,
  INPUT_VALIDATION_TYPES, NETWORK_BOUNDARY_FIELDS, OUTPUT_VALIDATION_TYPES, PRE_INVOCATION_CHECKS,
  RECONCILIATION_SOURCES, RESULT_SEMANTICS, SANDBOX_REQUIREMENTS, SIDE_EFFECT_TYPES,
  TOOL_ARCHITECTURAL_RULES, TOOL_ARCHITECTURE_BOUNDARIES, TOOL_CATEGORIES, TOOL_CONTRACT_FIELDS,
  TOOL_ERROR_CATEGORIES, TOOL_EVALUATION_AREAS, TOOL_EVIDENCE_FIELDS, TOOL_GATEWAY_CAPABILITIES,
  TOOL_IDENTITY_TYPES, TOOL_INVOCATION_STATES, TOOL_LIFECYCLE_STATES, TOOL_OBSERVABILITY_SIGNALS,
  TOOL_OPERATIONAL_CAPABILITIES, TOOL_QUALITY_ATTRIBUTES, TOOL_REGISTRY_FIELDS, TOOL_SECURITY_THREATS,
  TOOL_SIDE_EFFECT_LEDGER_FIELDS, TOOLS_ACTIONS_ENVIRONMENT_ERROR_CODE
} from '../tools-actions-environment-constants.js';

const MAP = Object.freeze({
  gatewayCapabilities: TOOL_GATEWAY_CAPABILITIES,
  registryFields: TOOL_REGISTRY_FIELDS,
  identityTypes: TOOL_IDENTITY_TYPES,
  discoveryFactors: CAPABILITY_DISCOVERY_FACTORS,
  contractFields: TOOL_CONTRACT_FIELDS,
  categories: TOOL_CATEGORIES,
  actionClasses: ACTION_CLASSES,
  actionMetadataFields: ACTION_METADATA_FIELDS,
  preInvocationChecks: PRE_INVOCATION_CHECKS,
  authorizationFactors: AUTHORIZATION_FACTORS,
  authorityLevels: FINE_GRAINED_AUTHORITY_LEVELS,
  approvalBindings: APPROVAL_BINDINGS,
  credentialScopeRequirements: CREDENTIAL_SCOPE_REQUIREMENTS,
  inputValidationTypes: INPUT_VALIDATION_TYPES,
  outputValidationTypes: OUTPUT_VALIDATION_TYPES,
  resultSemantics: RESULT_SEMANTICS,
  sideEffectTypes: SIDE_EFFECT_TYPES,
  sideEffectLedgerFields: TOOL_SIDE_EFFECT_LEDGER_FIELDS,
  idempotencyStrategyFields: IDEMPOTENCY_STRATEGY_FIELDS,
  reconciliationSources: RECONCILIATION_SOURCES,
  compensationContractFields: COMPENSATION_CONTRACT_FIELDS,
  invocationStates: TOOL_INVOCATION_STATES,
  errorCategories: TOOL_ERROR_CATEGORIES,
  environmentTypes: ENVIRONMENT_TYPES,
  environmentIdentityFields: ENVIRONMENT_IDENTITY_FIELDS,
  environmentIsolationControls: ENVIRONMENT_ISOLATION_CONTROLS,
  sandboxRequirements: SANDBOX_REQUIREMENTS,
  filesystemBoundaryFields: FILESYSTEM_BOUNDARY_FIELDS,
  networkBoundaryFields: NETWORK_BOUNDARY_FIELDS,
  dataToolControls: DATA_TOOL_CONTROLS,
  lifecycleStates: TOOL_LIFECYCLE_STATES,
  evaluationAreas: TOOL_EVALUATION_AREAS,
  observabilitySignals: TOOL_OBSERVABILITY_SIGNALS,
  evidenceFields: TOOL_EVIDENCE_FIELDS,
  operationalCapabilities: TOOL_OPERATIONAL_CAPABILITIES,
  securityThreats: TOOL_SECURITY_THREATS,
  qualityAttributes: TOOL_QUALITY_ATTRIBUTES,
  architecturalRules: TOOL_ARCHITECTURAL_RULES,
  architectureBoundaries: TOOL_ARCHITECTURE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  registeredVersionedTools: 'Tools must be registered and versioned.',
  gatewayMediated: 'Agent capability use must be mediated through the Tool Gateway.',
  discoverySeparateFromAuthorization: 'Discovery and authorization must remain separate controls.',
  materialAuthorityEvaluated: 'Authority must be evaluated for every material invocation.',
  identityPreserved: 'Agent, execution, tenant, property, and delegation identity must be preserved.',
  structuralSemanticInputValidation: 'Inputs must be validated structurally and semantically.',
  sideEffectsDeclared: 'Side effects must be declared.',
  actionRiskClassified: 'Action risk must be classified.',
  approvalsBoundToExactActions: 'Approvals must bind to exact actions and validity.',
  credentialsOutsideModelContext: 'Credentials must remain outside model context.',
  scopedShortLivedCredentials: 'Short-lived scoped credentials must be used where practical.',
  environmentEligibilityEnforced: 'Environment eligibility must be enforced.',
  environmentIsolation: 'Filesystem, process, network, credentials, and data must be isolated.',
  generatedCodeUntrusted: 'Generated code must be treated as untrusted.',
  outputsValidated: 'Outputs and provenance must be validated.',
  toolOutputAsData: 'Tool output must be treated as data, not higher-priority instruction.',
  idempotencyForRetries: 'Retryable actions must use idempotency.',
  reconcileUncertainEffectsBeforeRetry: 'Uncertain material effects must be reconciled before retry.',
  domainDefinedCompensation: 'Compensation must be domain-defined.',
  governedServicesOverDirectDatabase: 'Governed services must be used instead of direct unrestricted database access where they exist.',
  draftAuthorityNotSendAuthority: 'Draft authority must not imply send or execute authority.',
  exactDestructiveTargets: 'Destructive actions must resolve exact targets.',
  composedToolBoundaries: 'Composed tool chains must preserve tenant and property boundaries.',
  boundedToolChains: 'Tool-chain length, cost, and duration must be bounded.',
  attributableEvidence: 'Tool use must produce attributable evidence.',
  lifecycleControls: 'Tool suspension, deprecation, and retirement must be supported.',
  providerNeutral: 'Tool architecture must remain implementation and provider neutral.'
});

const REQUIRED_FALSE = Object.freeze({
  toolAvailabilityIsAuthority: 'Tool availability must not be treated as authority.',
  bypassesGateway: 'Agents must not bypass the Tool Gateway when a governed capability exists.',
  modelReceivesCredentials: 'Models must not receive credentials.',
  broadToolPermissionPreferred: 'Broad tool-level permission must not be preferred when narrower scope is available.',
  approvalReinterpretedBroader: 'Agents must not reinterpret approval to cover broader actions.',
  schemaValidityMeansSemanticValidity: 'Schema-valid inputs must not be treated as automatically semantically valid.',
  networkSuccessMeansBusinessSuccess: 'A successful network response must not be treated as proof of business success.',
  repeatsUncertainMaterialAction: 'Agents must not repeat uncertain material actions before reconciliation or authorized recovery.',
  compensationGuaranteedReversal: 'Compensation must not be represented as guaranteed reversal.',
  productionFromHostname: 'Production must not be inferred from hostname or model-provided label.',
  unrestrictedDatabaseAccess: 'Agents must not receive direct unrestricted database access when governed service contracts exist.',
  generatedUrlBypassesPolicy: 'Generated URLs or destinations must not bypass allowlists and policy.',
  draftImpliesSendAuthority: 'Draft authority must not imply send authority.',
  ambiguousDestructiveScope: 'Ambiguous targets must not identify destructive scope.',
  delegateReceivesRawCredentials: 'Delegation must not transfer raw credentials.',
  deprecatedToolDefaultForNewUse: 'Deprecated tools must not be selected for new use unless explicitly allowed.',
  rawErrorsToUsersOrModels: 'Raw tool errors must not be passed directly to users or models without filtering.',
  selectsCredentialTechnology: 'ARCH-014-05 does not select credential technology.',
  selectsSandboxTechnology: 'ARCH-014-05 does not select sandbox technology.',
  selectsToolProtocolVendor: 'ARCH-014-05 does not select tool protocol or vendor.'
});

export class ToolsActionsEnvironmentDescriptor {
  gatewayCapabilities() { return values(MAP.gatewayCapabilities); }
  registryFields() { return values(MAP.registryFields); }
  identityTypes() { return values(MAP.identityTypes); }
  discoveryFactors() { return values(MAP.discoveryFactors); }
  contractFields() { return values(MAP.contractFields); }
  categories() { return values(MAP.categories); }
  actionClasses() { return values(MAP.actionClasses); }
  actionMetadataFields() { return values(MAP.actionMetadataFields); }
  preInvocationChecks() { return values(MAP.preInvocationChecks); }
  authorizationFactors() { return values(MAP.authorizationFactors); }
  authorityLevels() { return values(MAP.authorityLevels); }
  approvalBindings() { return values(MAP.approvalBindings); }
  credentialScopeRequirements() { return values(MAP.credentialScopeRequirements); }
  inputValidationTypes() { return values(MAP.inputValidationTypes); }
  outputValidationTypes() { return values(MAP.outputValidationTypes); }
  resultSemantics() { return values(MAP.resultSemantics); }
  sideEffectTypes() { return values(MAP.sideEffectTypes); }
  sideEffectLedgerFields() { return values(MAP.sideEffectLedgerFields); }
  idempotencyStrategyFields() { return values(MAP.idempotencyStrategyFields); }
  reconciliationSources() { return values(MAP.reconciliationSources); }
  compensationContractFields() { return values(MAP.compensationContractFields); }
  invocationStates() { return values(MAP.invocationStates); }
  errorCategories() { return values(MAP.errorCategories); }
  environmentTypes() { return values(MAP.environmentTypes); }
  environmentIdentityFields() { return values(MAP.environmentIdentityFields); }
  environmentIsolationControls() { return values(MAP.environmentIsolationControls); }
  sandboxRequirements() { return values(MAP.sandboxRequirements); }
  filesystemBoundaryFields() { return values(MAP.filesystemBoundaryFields); }
  networkBoundaryFields() { return values(MAP.networkBoundaryFields); }
  dataToolControls() { return values(MAP.dataToolControls); }
  lifecycleStates() { return values(MAP.lifecycleStates); }
  evaluationAreas() { return values(MAP.evaluationAreas); }
  observabilitySignals() { return values(MAP.observabilitySignals); }
  evidenceFields() { return values(MAP.evidenceFields); }
  operationalCapabilities() { return values(MAP.operationalCapabilities); }
  securityThreats() { return values(MAP.securityThreats); }
  qualityAttributes() { return values(MAP.qualityAttributes); }
  architecturalRules() { return values(MAP.architecturalRules); }
  architectureBoundaries() { return values(MAP.architectureBoundaries); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof ToolsActionsEnvironmentProfile ? profileInput : new ToolsActionsEnvironmentProfile(profileInput);
    const errors = [];
    if (!profile.toolsName) errors.push('Tools, Actions, and Environment profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Tools, Actions, and Environment must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(TOOLS_ACTIONS_ENVIRONMENT_ERROR_CODE, 'Tools, Actions, and Environment violates ARCH-014-05.', { errors });
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new AgentFrameworkValidationResult({ isValid: errors.length === 0, errors }); }
