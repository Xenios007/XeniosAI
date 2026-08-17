import { PlatformError } from '../../foundation/errors/platform-error.js';
import { PluginExtensionValidationResult } from '../contracts/plugin-extension-validation-result.js';
import { RuntimeHostsExtensionPointsProfile } from '../contracts/runtime-hosts-extension-points-profile.js';
import * as constants from '../runtime-hosts-extension-points-constants.js';

const METADATA = Object.freeze({
  runtimePrinciples: constants.RUNTIME_HOST_PRINCIPLES, hostResponsibilities: constants.EXTENSION_HOST_RESPONSIBILITIES,
  hostBoundaries: constants.EXTENSION_HOST_BOUNDARIES, hostTypes: constants.EXTENSION_HOST_TYPES,
  runtimeAdmissionChecks: constants.RUNTIME_ADMISSION_CHECKS, invocationContextFields: constants.EXTENSION_INVOCATION_CONTEXT_FIELDS,
  extensionPointContractFields: constants.EXTENSION_POINT_CONTRACT_FIELDS, idempotencyScopeElements: constants.EXTENSION_IDEMPOTENCY_SCOPE_ELEMENTS,
  apiExtensionPointValidations: constants.API_EXTENSION_POINT_VALIDATIONS, eventExtensionPointValidations: constants.EVENT_EXTENSION_POINT_VALIDATIONS,
  workflowExtensionPointElements: constants.WORKFLOW_EXTENSION_POINT_ELEMENTS, agentToolContractFields: constants.AGENT_TOOL_CONTRACT_FIELDS,
  agentExtensionInheritedRequirements: constants.AGENT_EXTENSION_INHERITED_REQUIREMENTS, knowledgeExtensionPointContracts: constants.KNOWLEDGE_EXTENSION_POINT_CONTRACTS,
  memoryExtensionPointDeclarations: constants.MEMORY_EXTENSION_POINT_DECLARATIONS, uiExtensionPointControls: constants.UI_EXTENSION_POINT_CONTROLS,
  mcpRuntimeMediationItems: constants.MCP_RUNTIME_MEDIATION_ITEMS, connectorRuntimeCapabilities: constants.CONNECTOR_RUNTIME_CAPABILITIES,
  resultValidationChecks: constants.RUNTIME_RESULT_VALIDATION_CHECKS, failureClassifications: constants.RUNTIME_FAILURE_CLASSIFICATIONS,
  healthEvaluationFactors: constants.HOST_HEALTH_EVALUATION_FACTORS, recoveryRestorationElements: constants.RUNTIME_RECOVERY_RESTORATION_ELEMENTS,
  recoveryExerciseTypes: constants.RUNTIME_RECOVERY_EXERCISE_TYPES, observabilityTelemetryFields: constants.RUNTIME_OBSERVABILITY_TELEMETRY_FIELDS,
  usageMeteringDimensions: constants.RUNTIME_USAGE_METERING_DIMENSIONS, architecturalRules: constants.RUNTIME_HOST_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  hostsExecuteOnlyVerifiedActiveDigests: 'ARCH-019-06 requires hosts to execute only verified, active package digests.',
  everyInvocationBindsInstallationTenantGrantPurpose: 'ARCH-019-06 requires every invocation to bind to an installation, tenant, grant, and purpose.',
  extensionPointsOwnedContractsNotHooks: 'ARCH-019-06 requires extension points to be owned contracts, not implementation hooks.',
  providersAuthoritativeForDomainAccess: 'ARCH-019-06 requires providers to remain authoritative for domain access.',
  sensitiveInterfacesHostMediated: 'ARCH-019-06 requires sensitive interfaces to be host mediated.',
  executionCancelableResourceBounded: 'ARCH-019-06 requires execution to be cancelable and resource bounded.',
  extensionFailureOutsideCoreTransactionsByDefault: 'ARCH-019-06 requires extension failure to remain outside core authoritative transactions by default.',
  asyncPreservesRevalidatesTenantScope: 'ARCH-019-06 requires async execution to preserve and revalidate tenant scope.',
  resultsUntrustedUntilValidated: 'ARCH-019-06 requires results to be untrusted until validated by the host or provider.',
  hostsEmitTenantSafeEvidence: 'ARCH-019-06 requires hosts to emit tenant-safe health, usage, and evidence.',
  admissionFailureProducesStableEvidence: 'ARCH-019-06 requires admission failure to produce a stable, tenant-safe result and evidence.',
  extensionCannotModifyTrustedFields: 'ARCH-019-06 requires the extension to be unable to modify trusted invocation context fields.',
  longRunningWorkCannotUseOldGrantIndefinitely: 'ARCH-019-06 requires long-running work to be unable to use an old grant indefinitely.',
  toolInvocationsValidatedByHost: 'ARCH-019-06 requires the host to validate every agent tool invocation since descriptions and model-generated arguments are untrusted.',
  packageAgentUpdateCoordinatedVersioned: 'ARCH-019-06 requires package update and agent-definition update to be coordinated and versioned.',
  inboundPayloadTenantClaimsCrossChecked: 'ARCH-019-06 requires inbound payload tenant claims to be cross-checked against the trusted connection binding.',
  meteringFailureDoesNotRemoveSafetyLimits: 'ARCH-019-06 requires metering failure to never silently remove platform safety limits.'
});

const REQUIRED_FALSE = Object.freeze({
  authorizationFailsOpenToExtensionDefault: 'ARCH-019-06 prohibits authorization, security, pricing, payment, or material business controls from failing open to an extension default.',
  extensionParticipatesInSharedDatabaseTransaction: 'ARCH-019-06 prohibits an extension from participating in a shared database transaction across services.',
  removingPackageErasesInFlightWorkflowEvidence: 'ARCH-019-06 prohibits removing a package from erasing in-flight workflow evidence.',
  extensionPromotesKnowledgeSilently: 'ARCH-019-06 prohibits an extension from silently promoting tenant knowledge to platform knowledge or using it for unrelated model training.',
  extensionsCreateGlobalMemoryOrStoreCredentials: 'ARCH-019-06 prohibits extensions from creating global memory or storing authorization credentials as memory.',
  uiExtensionsOverwriteSecurityChrome: 'ARCH-019-06 prohibits UI extensions from overwriting platform security chrome, login, consent, or support identity.',
  mcpDiscoveryRegistersUnrestrictedTools: 'ARCH-019-06 prohibits MCP discovery from directly registering unrestricted tools into an agent.',
  failingDestinationConsumesOtherTenantBudget: 'ARCH-019-06 prohibits a failing destination from consuming another tenant’s retry or connection budget.',
  directStorageCredentialsPermitted: 'ARCH-019-06 prohibits direct storage credentials and unrestricted filesystem paths.',
  requestsToInternalEndpointsPermitted: 'ARCH-019-06 prohibits requests to instance metadata, internal control planes, neighboring extensions, or undeclared endpoints.',
  recoveryBlindlyRestartsNonIdempotentWork: 'ARCH-019-06 prohibits recovery from blindly restarting non-idempotent work.'
});

export class RuntimeHostsExtensionPointsDescriptor {
  runtimePrinciples() { return values(METADATA.runtimePrinciples); } hostResponsibilities() { return values(METADATA.hostResponsibilities); }
  hostBoundaries() { return values(METADATA.hostBoundaries); } hostTypes() { return values(METADATA.hostTypes); }
  runtimeAdmissionChecks() { return values(METADATA.runtimeAdmissionChecks); } invocationContextFields() { return values(METADATA.invocationContextFields); }
  extensionPointContractFields() { return values(METADATA.extensionPointContractFields); } idempotencyScopeElements() { return values(METADATA.idempotencyScopeElements); }
  apiExtensionPointValidations() { return values(METADATA.apiExtensionPointValidations); } eventExtensionPointValidations() { return values(METADATA.eventExtensionPointValidations); }
  workflowExtensionPointElements() { return values(METADATA.workflowExtensionPointElements); } agentToolContractFields() { return values(METADATA.agentToolContractFields); }
  agentExtensionInheritedRequirements() { return values(METADATA.agentExtensionInheritedRequirements); } knowledgeExtensionPointContracts() { return values(METADATA.knowledgeExtensionPointContracts); }
  memoryExtensionPointDeclarations() { return values(METADATA.memoryExtensionPointDeclarations); } uiExtensionPointControls() { return values(METADATA.uiExtensionPointControls); }
  mcpRuntimeMediationItems() { return values(METADATA.mcpRuntimeMediationItems); } connectorRuntimeCapabilities() { return values(METADATA.connectorRuntimeCapabilities); }
  resultValidationChecks() { return values(METADATA.resultValidationChecks); } failureClassifications() { return values(METADATA.failureClassifications); }
  healthEvaluationFactors() { return values(METADATA.healthEvaluationFactors); } recoveryRestorationElements() { return values(METADATA.recoveryRestorationElements); }
  recoveryExerciseTypes() { return values(METADATA.recoveryExerciseTypes); } observabilityTelemetryFields() { return values(METADATA.observabilityTelemetryFields); }
  usageMeteringDimensions() { return values(METADATA.usageMeteringDimensions); } architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof RuntimeHostsExtensionPointsProfile ? input : new RuntimeHostsExtensionPointsProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Runtime hosts and extension points profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Runtime Hosts and Extension Points must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.RUNTIME_HOSTS_EXTENSION_POINTS_ERROR_CODE, 'Runtime Hosts and Extension Points violates ARCH-019-06.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new PluginExtensionValidationResult({ isValid: errors.length === 0, errors }); }
