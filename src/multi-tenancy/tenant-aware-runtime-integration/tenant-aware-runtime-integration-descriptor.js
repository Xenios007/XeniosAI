import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { TenantAwareRuntimeIntegrationProfile } from '../contracts/tenant-aware-runtime-integration-profile.js';
import * as constants from '../tenant-aware-runtime-integration-constants.js';

const METADATA = Object.freeze({
  runtimePrinciples: constants.RUNTIME_PRINCIPLES, runtimeContextFields: constants.RUNTIME_CONTEXT_FIELDS,
  runtimeTrustBoundaries: constants.RUNTIME_TRUST_BOUNDARIES, contextEstablishmentSteps: constants.CONTEXT_ESTABLISHMENT_STEPS,
  contextRepresentations: constants.CONTEXT_REPRESENTATIONS, experienceLayerRequirements: constants.EXPERIENCE_LAYER_REQUIREMENTS,
  gatewayResponsibilities: constants.GATEWAY_RESPONSIBILITIES, apiScopeClassifications: constants.API_SCOPE_CLASSIFICATIONS,
  sdkBehaviors: constants.SDK_BEHAVIORS, providerResponsibilitySteps: constants.PROVIDER_RESPONSIBILITY_STEPS,
  serviceToServicePropagatedFields: constants.SERVICE_TO_SERVICE_PROPAGATED_FIELDS, dataAccessPatterns: constants.DATA_ACCESS_PATTERNS,
  runtimeCacheAccessRules: constants.RUNTIME_CACHE_ACCESS_RULES, runtimeEventEnvelopeFields: constants.RUNTIME_EVENT_ENVELOPE_FIELDS,
  eventConsumptionSteps: constants.EVENT_CONSUMPTION_STEPS, batchJobFields: constants.BATCH_JOB_FIELDS,
  workflowBindingPreservedThrough: constants.WORKFLOW_BINDING_PRESERVED_THROUGH, orchestratorBindingTargets: constants.ORCHESTRATOR_BINDING_TARGETS,
  agentGrantElements: constants.AGENT_GRANT_ELEMENTS, runtimeMemoryScopeLevels: constants.RUNTIME_MEMORY_SCOPE_LEVELS,
  integrationConnectionFields: constants.INTEGRATION_CONNECTION_FIELDS, outboundValidationFactors: constants.OUTBOUND_VALIDATION_FACTORS,
  extensionRuntimeControls: constants.EXTENSION_RUNTIME_CONTROLS, operatorToolCapabilities: constants.OPERATOR_TOOL_CAPABILITIES,
  contextExpiryTriggers: constants.CONTEXT_EXPIRY_TRIGGERS, runtimeObservabilitySignals: constants.RUNTIME_OBSERVABILITY_SIGNALS,
  runtimeFailureBehaviors: constants.RUNTIME_FAILURE_BEHAVIORS, runtimeConformanceTestingAreas: constants.RUNTIME_CONFORMANCE_TESTING_AREAS,
  architecturalRules: constants.TENANT_AWARE_RUNTIME_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  everyExecutionHasExplicitTrustedContext: 'ARCH-018-07 requires every tenant-scoped execution to have explicit, trusted context.',
  contextRevalidatedByProviders: 'ARCH-018-07 requires context to be established at a trust boundary and revalidated by providers.',
  contextSurvivesAsyncBoundaries: 'ARCH-018-07 requires context to survive synchronous and asynchronous boundaries.',
  delegationPreservesOrNarrowsAuthority: 'ARCH-018-07 requires delegation to preserve or narrow authority.',
  routingUsesAuthoritativePlacement: 'ARCH-018-07 requires runtime routing to use authoritative placement state.',
  contextMinimizedProtectedRestrictedBounded: 'ARCH-018-07 requires context to be minimized, integrity protected, audience restricted, and time bounded.',
  revocationInvalidatesIssuedContext: 'ARCH-018-07 requires tenant state and revocation to invalidate previously issued context.',
  cachesRetriesNeverReplaceValidation: 'ARCH-018-07 requires caches and retries to never replace context validation.',
  telemetryTenantAwareWithoutExposure: 'ARCH-018-07 requires telemetry to be tenant aware without exposing protected tenant information.',
  gatewayEstablishesButProvidersOwnValidation: 'ARCH-018-07 requires gateways to establish context while providers own resource validation.',
  asyncRetriesRevalidateAuthority: 'ARCH-018-07 requires async retries to revalidate current lifecycle and authority as required.',
  knowledgeFilterFailsClosedOnMissingScope: 'ARCH-018-07 requires a missing tenant filter to fail closed rather than return global results.',
  extensionsExecuteWithExplicitGrants: 'ARCH-018-07 requires extensions to execute with explicit tenant capability grants.',
  longRunningWorkChecksRevocationAtCheckpoints: 'ARCH-018-07 requires long-running work to check revocation at defined checkpoints.',
  payloadTenantIdentifiersCrossChecked: 'ARCH-018-07 requires payload tenant identifiers to be cross-checked rather than trusted.'
});

const REQUIRED_FALSE = Object.freeze({
  unsafeDefaultTenantUsed: 'ARCH-018-07 prohibits any runtime component from using an unsafe default tenant.',
  clientInputTrustedAsAuthority: 'ARCH-018-07 prohibits client input from being trusted as authority rather than a claim.',
  rawHeadersForwardedAsTrustedContext: 'ARCH-018-07 prohibits raw external headers from being forwarded as trusted internal context without validation.',
  sdkInfersTenantFromLocalState: 'ARCH-018-07 prohibits an SDK from inferring a tenant from arbitrary local state, broadening property scope, or retrying under a different tenant.',
  callerMintsBroaderAuthorityDownstream: 'ARCH-018-07 prohibits a caller from minting broader authority than it received for a downstream call.',
  cacheFallsBackToAnotherTenantValue: 'ARCH-018-07 prohibits a cache from falling back to another tenant’s value after a miss.',
  modelOutputChangesTenantContext: 'ARCH-018-07 prohibits model output from changing tenant context or creating authorization.',
  failureFallsBackToDefaultTenantContext: 'ARCH-018-07 prohibits a failure from triggering fallback to a platform or default tenant context.',
  hiddenImpersonationInOperatorTools: 'ARCH-018-07 prohibits hidden impersonation and unrestricted global search in operator tools.'
});

export class TenantAwareRuntimeIntegrationDescriptor {
  runtimePrinciples() { return values(METADATA.runtimePrinciples); } runtimeContextFields() { return values(METADATA.runtimeContextFields); }
  runtimeTrustBoundaries() { return values(METADATA.runtimeTrustBoundaries); } contextEstablishmentSteps() { return values(METADATA.contextEstablishmentSteps); }
  contextRepresentations() { return values(METADATA.contextRepresentations); } experienceLayerRequirements() { return values(METADATA.experienceLayerRequirements); }
  gatewayResponsibilities() { return values(METADATA.gatewayResponsibilities); } apiScopeClassifications() { return values(METADATA.apiScopeClassifications); }
  sdkBehaviors() { return values(METADATA.sdkBehaviors); } providerResponsibilitySteps() { return values(METADATA.providerResponsibilitySteps); }
  serviceToServicePropagatedFields() { return values(METADATA.serviceToServicePropagatedFields); } dataAccessPatterns() { return values(METADATA.dataAccessPatterns); }
  runtimeCacheAccessRules() { return values(METADATA.runtimeCacheAccessRules); } runtimeEventEnvelopeFields() { return values(METADATA.runtimeEventEnvelopeFields); }
  eventConsumptionSteps() { return values(METADATA.eventConsumptionSteps); } batchJobFields() { return values(METADATA.batchJobFields); }
  workflowBindingPreservedThrough() { return values(METADATA.workflowBindingPreservedThrough); } orchestratorBindingTargets() { return values(METADATA.orchestratorBindingTargets); }
  agentGrantElements() { return values(METADATA.agentGrantElements); } runtimeMemoryScopeLevels() { return values(METADATA.runtimeMemoryScopeLevels); }
  integrationConnectionFields() { return values(METADATA.integrationConnectionFields); } outboundValidationFactors() { return values(METADATA.outboundValidationFactors); }
  extensionRuntimeControls() { return values(METADATA.extensionRuntimeControls); } operatorToolCapabilities() { return values(METADATA.operatorToolCapabilities); }
  contextExpiryTriggers() { return values(METADATA.contextExpiryTriggers); } runtimeObservabilitySignals() { return values(METADATA.runtimeObservabilitySignals); }
  runtimeFailureBehaviors() { return values(METADATA.runtimeFailureBehaviors); } runtimeConformanceTestingAreas() { return values(METADATA.runtimeConformanceTestingAreas); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof TenantAwareRuntimeIntegrationProfile ? input : new TenantAwareRuntimeIntegrationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Tenant-aware runtime and integration profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Tenant-Aware Runtime and Integration must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.TENANT_AWARE_RUNTIME_INTEGRATION_ERROR_CODE, 'Tenant-Aware Runtime and Integration violates ARCH-018-07.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
