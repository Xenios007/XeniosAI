import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { ApiIntegrationAndExtensionReferenceProfile } from '../contracts/api-integration-and-extension-reference-profile.js';
import * as constants from '../api-integration-and-extension-reference-constants.js';

const METADATA = Object.freeze({
  apiProductOperations: constants.API_PRODUCT_OPERATIONS, apiOperationAttributes: constants.API_OPERATION_ATTRIBUTES,
  gatewayResponsibilities: constants.GATEWAY_RESPONSIBILITIES, providerRevalidations: constants.PROVIDER_REVALIDATIONS,
  sdkCapabilities: constants.SDK_CAPABILITIES, integrationAdapterOwnership: constants.INTEGRATION_ADAPTER_OWNERSHIP,
  inboundFlowSteps: constants.INBOUND_FLOW_STEPS, outboundDeliveryRetryFields: constants.OUTBOUND_DELIVERY_RETRY_FIELDS,
  pluginReferenceElements: constants.PLUGIN_REFERENCE_ELEMENTS, mcpReferenceElements: constants.MCP_REFERENCE_ELEMENTS,
  compatibilityMatrixDimensions: constants.COMPATIBILITY_MATRIX_DIMENSIONS, compatibilityChangeControls: constants.COMPATIBILITY_CHANGE_CONTROLS,
  failureCases: constants.INTEGRATION_FAILURE_CASES, referenceAcceptanceCriteria: constants.API_INTEGRATION_REFERENCE_ACCEPTANCE_CRITERIA,
  architecturalRules: constants.API_INTEGRATION_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  allIntegrationsUsePublishedContracts: 'ARCH-020-07 requires all integrations to use published contracts.',
  credentialsAreTenantAndConnectionBound: 'ARCH-020-07 requires credentials to be tenant and connection bound.',
  providersValidateResourceOwnership: 'ARCH-020-07 requires providers to validate resource ownership.',
  retriesAreIdempotentAndBudgeted: 'ARCH-020-07 requires retries to be idempotent and budgeted.',
  pluginAndMcpAccessIsCapabilityMediated: 'ARCH-020-07 requires plugin and MCP access to be capability mediated.',
  compatibilityAndRetirementAreDemonstrable: 'ARCH-020-07 requires compatibility and retirement to be demonstrable.',
  apisExposeBusinessCapabilityRatherThanDatabases: 'ARCH-020-07 requires APIs to expose business capability rather than databases.',
  adaptersOwnTranslationNotBusinessTruth: 'ARCH-020-07 requires adapters to own translation, not business truth.',
  sdksPreserveContracts: 'ARCH-020-07 requires SDKs to preserve contracts.',
  extensionsAndMcpUseTheSameTenantCapabilityHostAndEvidenceRules: 'ARCH-020-07 requires extensions and MCP to use the same tenant, capability, host, and evidence rules.'
});

const REQUIRED_FALSE = Object.freeze({
  sdkConvenienceBroadensAuthorityOrHidesProviderErrors: 'ARCH-020-07 prohibits SDK convenience from broadening authority or hiding provider errors.',
  integrationAdapterOwnsInternalAvailabilityTruth: 'ARCH-020-07 prohibits the integration adapter from owning internal availability truth.',
  protocolDiscoveryAuthorizesToolExecution: 'ARCH-020-07 prohibits protocol discovery from authorizing tool execution.'
});

export class ApiIntegrationAndExtensionReferenceDescriptor {
  apiProductOperations() { return values(METADATA.apiProductOperations); } apiOperationAttributes() { return values(METADATA.apiOperationAttributes); }
  gatewayResponsibilities() { return values(METADATA.gatewayResponsibilities); } providerRevalidations() { return values(METADATA.providerRevalidations); }
  sdkCapabilities() { return values(METADATA.sdkCapabilities); } integrationAdapterOwnership() { return values(METADATA.integrationAdapterOwnership); }
  inboundFlowSteps() { return values(METADATA.inboundFlowSteps); } outboundDeliveryRetryFields() { return values(METADATA.outboundDeliveryRetryFields); }
  pluginReferenceElements() { return values(METADATA.pluginReferenceElements); } mcpReferenceElements() { return values(METADATA.mcpReferenceElements); }
  compatibilityMatrixDimensions() { return values(METADATA.compatibilityMatrixDimensions); } compatibilityChangeControls() { return values(METADATA.compatibilityChangeControls); }
  failureCases() { return values(METADATA.failureCases); } referenceAcceptanceCriteria() { return values(METADATA.referenceAcceptanceCriteria); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ApiIntegrationAndExtensionReferenceProfile ? input : new ApiIntegrationAndExtensionReferenceProfile(input);
    const errors = [];
    if (!profile.referenceName) errors.push('API, Integration, and Extension Reference profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`API, Integration, and Extension Reference must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.API_INTEGRATION_AND_EXTENSION_REFERENCE_ERROR_CODE, 'API, Integration, and Extension Reference violates ARCH-020-07.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
