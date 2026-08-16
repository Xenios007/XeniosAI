import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkOverviewProfile } from '../contracts/api-sdk-overview-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  API_AUDIENCE_CLASSIFICATIONS, API_AUTHORITY_CONTEXT_FIELDS, API_CONSUMER_TYPES,
  API_CONTRACT_FIELDS, API_CONTRACT_LIFECYCLE_STATES, API_ERROR_CLASSES,
  API_INTERACTION_CLASSIFICATIONS, API_PRODUCT_FIELDS, API_PRODUCT_LIFECYCLE_STAGES,
  API_SDK_ARCHITECTURAL_RULES, API_SDK_ARCHITECTURAL_SEPARATIONS,
  API_SDK_ARCHITECTURE_BOUNDARIES, API_SDK_BUSINESS_DRIVERS, API_SDK_CAPABILITIES,
  API_SDK_CORE_CONCEPTS, API_SDK_CORE_PRINCIPLES, API_SDK_EXPECTED_OUTCOMES,
  API_SDK_LOGICAL_LAYERS, API_SDK_OBJECTIVES, API_SDK_OPERATING_ROLES,
  API_SDK_OVERVIEW_ERROR_CODE, API_SDK_QUALITY_ATTRIBUTES, SDK_CAPABILITIES, SDK_LOGICAL_LAYERS
} from '../overview-constants.js';

const METADATA = Object.freeze({
  businessDrivers: API_SDK_BUSINESS_DRIVERS,
  objectives: API_SDK_OBJECTIVES,
  architecturalSeparations: API_SDK_ARCHITECTURAL_SEPARATIONS,
  coreConcepts: API_SDK_CORE_CONCEPTS,
  corePrinciples: API_SDK_CORE_PRINCIPLES,
  productFields: API_PRODUCT_FIELDS,
  consumerTypes: API_CONSUMER_TYPES,
  audienceClassifications: API_AUDIENCE_CLASSIFICATIONS,
  interactionClassifications: API_INTERACTION_CLASSIFICATIONS,
  logicalLayers: API_SDK_LOGICAL_LAYERS,
  capabilities: API_SDK_CAPABILITIES,
  contractFields: API_CONTRACT_FIELDS,
  authorityContextFields: API_AUTHORITY_CONTEXT_FIELDS,
  errorClasses: API_ERROR_CLASSES,
  lifecycleStates: API_CONTRACT_LIFECYCLE_STATES,
  sdkCapabilities: SDK_CAPABILITIES,
  sdkLayers: SDK_LOGICAL_LAYERS,
  lifecycleStages: API_PRODUCT_LIFECYCLE_STAGES,
  operatingRoles: API_SDK_OPERATING_ROLES,
  qualityAttributes: API_SDK_QUALITY_ATTRIBUTES,
  architecturalRules: API_SDK_ARCHITECTURAL_RULES,
  architectureBoundaries: API_SDK_ARCHITECTURE_BOUNDARIES,
  expectedOutcomes: API_SDK_EXPECTED_OUTCOMES
});

const REQUIRED_TRUE = Object.freeze({
  capabilityBeforeExposure: 'ARCH-017-01 requires capabilityBeforeExposure.',
  ownershipBeforePublication: 'ARCH-017-01 requires ownershipBeforePublication.',
  contractBeforeImplementation: 'ARCH-017-01 requires contractBeforeImplementation.',
  identityBeforeProcessing: 'ARCH-017-01 requires identityBeforeProcessing.',
  authorityBeforeAction: 'ARCH-017-01 requires authorityBeforeAction.',
  validateTrustBoundaries: 'ARCH-017-01 requires validateTrustBoundaries.',
  compatibilityBeforeConvenience: 'ARCH-017-01 requires compatibilityBeforeConvenience.',
  idempotencyBeforeRetry: 'ARCH-017-01 requires idempotencyBeforeRetry.',
  errorsContractual: 'ARCH-017-01 requires errorsContractual.',
  evidenceBeforeRetirement: 'ARCH-017-01 requires evidenceBeforeRetirement.',
  providerOwnsDomain: 'ARCH-017-01 requires providerOwnsDomain.',
  gatewayBounded: 'ARCH-017-01 requires gatewayBounded.',
  contractAuthoritative: 'ARCH-017-01 requires contractAuthoritative.',
  derivedArtifactsTraceable: 'ARCH-017-01 requires derivedArtifactsTraceable.',
  productOwned: 'ARCH-017-01 requires productOwned.',
  consumerRegistered: 'ARCH-017-01 requires consumerRegistered.',
  runtimeAuthorizationIndependent: 'ARCH-017-01 requires runtimeAuthorizationIndependent.',
  tenantPropertyEndToEnd: 'ARCH-017-01 requires tenantPropertyEndToEnd.',
  missingScopeFailsSafe: 'ARCH-017-01 requires missingScopeFailsSafe.',
  asyncDeliverySeparateCompletion: 'ARCH-017-01 requires asyncDeliverySeparateCompletion.',
  errorsSafe: 'ARCH-017-01 requires errorsSafe.',
  sideEffectsDefined: 'ARCH-017-01 requires sideEffectsDefined.',
  breakingChangesMigrated: 'ARCH-017-01 requires breakingChangesMigrated.',
  sdkSupportedProduct: 'ARCH-017-01 requires sdkSupportedProduct.',
  sdkLayered: 'ARCH-017-01 requires sdkLayered.',
  sdkPreservesSemantics: 'ARCH-017-01 requires sdkPreservesSemantics.',
  docsVersionAligned: 'ARCH-017-01 requires docsVersionAligned.',
  lifecycleGated: 'ARCH-017-01 requires lifecycleGated.',
  agentAuthorityBounded: 'ARCH-017-01 requires agentAuthorityBounded.',
  telemetryProtected: 'ARCH-017-01 requires telemetryProtected.',
  operationsReliable: 'ARCH-017-01 requires operationsReliable.',
  vendorNeutral: 'ARCH-017-01 requires vendorNeutral.',
  technologyIndependent: 'ARCH-017-01 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  apiMirrorsDatabase: 'ARCH-017-01 prohibits apiMirrorsDatabase.',
  gatewayOwnsBusinessLogic: 'ARCH-017-01 prohibits gatewayOwnsBusinessLogic.',
  reachabilityAuthorizes: 'ARCH-017-01 prohibits reachabilityAuthorizes.',
  apiKeyCompleteIdentity: 'ARCH-017-01 prohibits apiKeyCompleteIdentity.',
  sdkOwnsDomainRules: 'ARCH-017-01 prohibits sdkOwnsDomainRules.',
  generatedArtifactAuthoritative: 'ARCH-017-01 prohibits generatedArtifactAuthoritative.',
  directDatabaseAccess: 'ARCH-017-01 prohibits directDatabaseAccess.',
  oneTransportRequired: 'ARCH-017-01 prohibits oneTransportRequired.',
  oneLanguageRequired: 'ARCH-017-01 prohibits oneLanguageRequired.',
  exactlyOnceGuaranteed: 'ARCH-017-01 prohibits exactlyOnceGuaranteed.',
  sdkHidesProviderFailure: 'ARCH-017-01 prohibits sdkHidesProviderFailure.',
  obsoletePreservedForever: 'ARCH-017-01 prohibits obsoletePreservedForever.',
  everyInternalCapabilityPublic: 'ARCH-017-01 prohibits everyInternalCapabilityPublic.',
  tenantSelfAssigned: 'ARCH-017-01 prohibits tenantSelfAssigned.',
  gatewayAcceptanceMeansCompletion: 'ARCH-017-01 prohibits gatewayAcceptanceMeansCompletion.',
  retryAllFailures: 'ARCH-017-01 prohibits retryAllFailures.',
  agentDiscoveryExpandsAuthority: 'ARCH-017-01 prohibits agentDiscoveryExpandsAuthority.',
  selectsApiProduct: 'ARCH-017-01 prohibits selectsApiProduct.',
  definesLaterChapterDetails: 'ARCH-017-01 prohibits definesLaterChapterDetails.'
});

export class ApiSdkOverviewDescriptor {
  businessDrivers() { return values(METADATA.businessDrivers); }
  objectives() { return values(METADATA.objectives); }
  architecturalSeparations() { return values(METADATA.architecturalSeparations); }
  coreConcepts() { return values(METADATA.coreConcepts); }
  corePrinciples() { return values(METADATA.corePrinciples); }
  productFields() { return values(METADATA.productFields); }
  consumerTypes() { return values(METADATA.consumerTypes); }
  audienceClassifications() { return values(METADATA.audienceClassifications); }
  interactionClassifications() { return values(METADATA.interactionClassifications); }
  logicalLayers() { return values(METADATA.logicalLayers); }
  capabilities() { return values(METADATA.capabilities); }
  contractFields() { return values(METADATA.contractFields); }
  authorityContextFields() { return values(METADATA.authorityContextFields); }
  errorClasses() { return values(METADATA.errorClasses); }
  lifecycleStates() { return values(METADATA.lifecycleStates); }
  sdkCapabilities() { return values(METADATA.sdkCapabilities); }
  sdkLayers() { return values(METADATA.sdkLayers); }
  lifecycleStages() { return values(METADATA.lifecycleStages); }
  operatingRoles() { return values(METADATA.operatingRoles); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }
  expectedOutcomes() { return values(METADATA.expectedOutcomes); }

  validateProfile(input) {
    const profile = input instanceof ApiSdkOverviewProfile ? input : new ApiSdkOverviewProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API and SDK overview profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`API and SDK Overview must include documented ${key}.`);
    }
    if (errors.length) throw new PlatformError(
      API_SDK_OVERVIEW_ERROR_CODE, 'API and SDK Overview violates ARCH-017-01.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
